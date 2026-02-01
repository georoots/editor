# GeoRoots Editor

GeoRoots Editor is a browser-based tool for creating, checking and editing geolocation information for EUDR and export in compatible GeoJSON format. 

Developed in collaboration with the European Forest Institute, it provides intuitive interface that was purpose-built for EUDR compliance. It allows for quick and efficient geodata editing and verification, without the need to purchase or install geospatial software. As a result, it reduces the cost of EUDR compliance, speeds up staff training and improves final data quality and compatibility. It is designed with a privacy-first approach. All calculations and checks take place on the user's computer and no data is ever sent to external servers. This design principle guarantees data security, prevents data harvesting and avoids potential data leaks.

## Purpose

This tool has been developed in collaboration with European Forest Institute after they have identified the need for convenient tool for Quality Assurance of collected geolocation data for EUDR. The purpose is be able to inspect collected data and quickly identify potentially problematic features. That might be self-intersecting polygons or overlapping features, invalid geometries and other common data collection errors. Many of these errors are small and technical in nature and they can be resolved by editing the geolocation data without the need for additional surveys. GeoRoots Editor aims to be the free baseline tool for EUDR geodata quality assurance and troubleshooting.

##  Usage

1. Open your data as GeoJSON file with GeoRoots Editor. If you don't have your data as GeoJSON file yet, use other GeoRoots tools first to obtain valid GeoJSON.
2. Visually inspect all features. Check that they are in the correct region, altitude (using topography maps) and that they correspond with the correct plots on satelite images.
3. Switch to "Check" mode to view automated QA results.
4. If needed, use Edit Mode to fix any of the identified issues.
5. Export your dataset with the Export button. This will save your edited data as a new file into your Downloads folder.

## Limitations

All the calculations, checks and edits are taking place in the browser on your computer. Therefore the performance and the amount of data that can be handled will be dependant on the RAM and speed of the computer it is running on. Additionally, some browsers like Chrome perform faster, but tend to require more ram.

The app has been successfully tested on datasets with 50'000+ polygons. But for resource limited PCs, consider splitting large datasets with GeoRoots Splitter first.

This app is not optimized for mobile devices. Please use desktop or laptop for intended experience.

## Privacy and offline use

This app is designed to run completely offline. You can download the html file and run it without any access to internet. But keep in mind that all maps are downloaded from publically available sources, so when working offline you will not be able to see the maps or satelite imagery background. But the editing, cleaning, checking and export features all continue to work.

## FAQ

##### Q: **My language is not included. Can it be added?**
A: Yes, please open an issue ticket and request a new language.

##### Q: **Can I see deforestation overlays, similarly to GeoRoots Mapper?**
A: We have decided to remove the deforestation overlays from Editor to prevent users' being able to easily "draw around" problematic areas.

#### Q: **Should I run the Auto-Cleaner every time before submitting data to TracesNT?**
A: The Auto-Cleaner feature is designed to resolve common issues and save time, but all changes must be verified by the user and confirmed that the amended geodata reflect reality. GeoRoots do not carry any responsibility over incorrectly cleaned or edited files.

#### Q: **If all areas are checked and show zero issues, does it mean my plots are complaint with EUDR?**
A: No. The tool only checks for geometric and structural validity of the geolocation data. It does not check for deforestation and does not verify whether the geolocations and additional metadata reflect real world plot ownerships and locations.

#### Q: **My GeoJSON is valid, but GeoRoots Editor is reporting issues. Why?**
A: Not all valid GeoJSON files are accepted by the EUDR DDS. There are stricter specifications published by the EU, that define more precisely what is and is not accepted. GeoRoots Editor is checking against the EUDR GeoJSON specifications, not just generic GeoJSON structures. [EUDR GeoJSON specification v1.5](https://circabc.europa.eu/ui/group/34861680-e799-4d7c-bbad-da83c45da458/library/adebc1da-4e60-4479-83dd-ee344607c6f9/details?download=true)

#### Q: **What is the SNAP functionality and how do I use it?**
A: The Snap feature helps with aligning neighbouring polygons. When a polygon is being drawn or edited while the Snap feature is on, the vertices will have the tendency to align to other nearby polygons. This helps with precise aligning of shared boundaries and reduces unwanted overlaps. When creating a shared boundary between two polygons, we recommend aligning all vertices on both plots identically.

#### Q: **Will the app change my GeoJSON file? Where are the edits saved?**
A: The original file does not get changed. During the editing, the data is only stored in the cache of your browser. Once you export the data, new file will be created and saved to your Downloads folder. Original file stays unchanged. We recommend exporting more frequently during editing to prevent data loss in case of accidental browser window closing or crash.

#### Q: **How can I compare what changes has the Auto-Cleaner made?**
A: You can use the shortcut CTRL+Q repeatedly to cycle between undo and redo. This helps you quickly visually compare before and after state.

#### Q: **What happens to metadata of features that were removed during the editing?**
A: All metadata of removed features are also removed from the dataset. Submitting features with no geometries is not supported by EUDR DDS portal.

#### Q: **What happens when Auto-Cleaner splits one polygon in half when it was overlapped by another polygon?**
A: This can happen and the polygon that was split into different parts will be automatically converted into a MultiPolygon feature that has both polygons and only single shared metadata.

#### Q: **When I load up my GeoJSON, I am being told that my file contains invalid features. Why is that and why can't the Editor fix these features?**
A: Editor can fix most standard issues. This warning only comes up if the feature is deemed unrecoverable. This includes features with no geometry at all, polygons with only one or two valid points or LineString feature with only one or two valid points. You are given the option to export invalid features and inspect them manually to understand why they are deemed non-recoverable.

#### Q: **Do I have to remove all polygon overlap before submitting my data to EUDR DDS?**
A: We are not legal experts on this, it is your decision. But many organisations want to remove polygon overlap because they believe it can be seen as a dispute over land ownership if two different producers are both claiming ownership of the same land.

#### Q: **I don't have my data in GeoJSON file. How can I convert it?**
A: We have other tools that can help with conversions between other geodata formats:
KML to GeoJSON - [GeoRoots KML](https://georoots.eu/kml/)
Spreadsheets / CSV / XLSX / ODS to GeoJSON (clipboard method) - [GeoRoots Prepper](https://georoots.eu/prepper/)
**BETA VERSIONS** (not fully released, but tested working):
Shapefile to GeoJSON - [GeoRoots Shapefile](https://georoots.eu/shapefile/)
CSV to GeoJSON (file conversion that maintains all metadata and supports multiple features per line) - [GeoRoots CSV](https://georoots.eu/csv/)


## About GeoRoots: Open Source Toolkit for EUDR Compliance and geo traceability

GeoRoots is a collection of minimalistic, open-source tools designed specifically for EU Deforestation Regulation (EUDR) requirements and enhancing geo traceability.

Our philosophy is simple: provide useful tools that respect your privacy, work offline (where possible), and require no complex setup or subscription fees. Every tool runs entirely in your browser and can be downloaded for offline use.

### Why Use GeoRoots?

*   **100% Private**: All tools run locally in your browser. No data is ever transmitted to external servers.
*   **Open Source**: Fully open source and transparent. Inspect, modify, and contribute to the code.
*   **Offline Ready**: Download and use tools completely offline. Perfect for remote locations.
*   **Mobile Friendly**: Works on desktop, tablet, and mobile devices.

### Perfect for:

*   Producers and cooperatives
*   Smaller traders and exporters
*   Importers, operators
*   Sustainability consultants

### License

This project is licensed under the GPLv3 License. See the [LICENSE](LICENSE) file for details.

### Contact

For any questions or feedback, please open an issue on this repository.
