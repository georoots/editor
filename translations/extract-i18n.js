const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'editor.html'), 'utf8');

function discoverLangCodes() {
    const codes = [];
    const pattern = /id="lang-([a-z]{2})"/g;
    let match;
    while ((match = pattern.exec(html)) !== null) {
        codes.push(match[1]);
    }
    return codes;
}

function loadLang(code) {
    const marker = `id="lang-${code}"`;
    const start = html.indexOf(marker);
    if (start < 0) throw new Error(`Missing lang-${code}`);
    const jsonStart = html.indexOf('{', start);
    const jsonEnd = html.indexOf('</script>', jsonStart);
    return JSON.parse(html.slice(jsonStart, jsonEnd));
}

function compareKeys(referenceKeys, langKeys) {
    const refSet = new Set(referenceKeys);
    const langSet = new Set(langKeys);
    const missing = referenceKeys.filter((key) => !langSet.has(key));
    const extra = langKeys.filter((key) => !refSet.has(key));
    return { missing, extra };
}

const codes = discoverLangCodes();
if (!codes.includes('en')) {
    throw new Error('English (lang-en) block is required as the reference.');
}

const translations = {};
for (const code of codes) {
    translations[code] = loadLang(code);
}

const referenceCode = 'en';
const referenceKeys = Object.keys(translations[referenceCode]);
const referenceCount = referenceKeys.length;

console.log(`Reference: ${referenceCode} (${referenceCount} keys)\n`);

let allOk = true;
const summary = [];

for (const code of codes) {
    const keys = Object.keys(translations[code]);
    const outPath = path.join(__dirname, `i18n-${code}.json`);
    fs.writeFileSync(outPath, JSON.stringify(translations[code], null, 4) + '\n', 'utf8');

    const { missing, extra } = compareKeys(referenceKeys, keys);
    const ok = missing.length === 0 && extra.length === 0;
    if (!ok) allOk = false;

    summary.push({ code, count: keys.length, missing, extra, ok });
    const status = ok ? 'OK' : 'MISMATCH';
    console.log(`${code}: ${keys.length} keys — ${status}`);
    if (missing.length) console.log(`  missing (${missing.length}): ${missing.join(', ')}`);
    if (extra.length) console.log(`  extra (${extra.length}): ${extra.join(', ')}`);
}

fs.writeFileSync(
    path.join(__dirname, 'i18n-data.js'),
    `window.I18N_EDITOR_DATA = ${JSON.stringify(translations, null, 4)};\n`,
    'utf8'
);

console.log(`\nExported ${codes.length} files to translations/i18n-*.json`);
if (allOk) {
    console.log(`All languages match ${referenceCode} (${referenceCount} keys each).`);
} else {
    console.log('Some languages have key mismatches — see details above.');
    process.exitCode = 1;
}
