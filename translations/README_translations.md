# Translations

This folder supports translating the GeoRoots Editor UI. Strings live in `editor.html` inside `lang-*` JSON blocks; this folder provides tools to export them and let volunteers work on translations in a simpler format.

## Files

| File | Purpose |
|------|---------|
| `extract-i18n.js` | Exports all languages from `editor.html` to `i18n-*.json` and checks key counts |
| `translation-editor.html` | Standalone browser tool for side-by-side editing |
| `i18n-en.json`, `i18n-es.json`, … | Exported translation files (one per language) |
| `i18n-data.js` | Generated bundle of all languages (optional helper data) |

## Workflow (export only)

The pipeline is **one-way** at the moment:

```
editor.html  →  extract-i18n.js  →  i18n-*.json  →  translation-editor.html  →  edited JSON
```

There is **no import or merge** step back into `editor.html`. After exporting an edited file from the translation editor, a developer must manually copy the strings into the matching `lang-*` block in `editor.html`.

## Export from editor.html

From the repo root:

```bash
node translations/extract-i18n.js
```

This writes `i18n-{code}.json` for every `lang-*` block found in `editor.html` and verifies that all languages have the same keys as English (currently 176). The script exits with an error if any language is missing or has extra keys.

## Translation editor (for volunteers)

Open `translation-editor.html` in a browser (no server required).

1. **Choose source file** — load `i18n-en.json` (or another source language).
2. **Open translation file** or **Start empty translation** — load an existing `i18n-xx.json` or begin with blank target strings.
3. Edit translations side by side. Use **Show issues only** to filter missing translations and placeholder mismatches.
4. **Export JSON** — save the result. Export is blocked if placeholders (e.g. `{0}`, `{count}`) do not match the source.

Placeholders must match the source string exactly — same names, same count.

## Submitting a new language

Volunteers who want to add a language: translate using the steps above, export the finished JSON, then either **open an issue on GitHub** or **email [info@georoots.eu](mailto:info@georoots.eu)** with the translated json file attached.
