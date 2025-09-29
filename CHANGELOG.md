# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- release notes start -->

## [3.0.0](https://github.com/keesey/keesey-comics.com/tree/v3.0.0) - 2025-09-29

### Added

- Home Page Carousel.
- Page Previews for certain Issue/Comic Pages.
- Videos to certain Issue Pages.
- Creators Page and Creator Pages.
- Bulk Items list to Contact Page.
- Past emails link to Newsletter Page.
- Component storybooks.

### Changed

- Complete redesign of the website using Tailwind CSS and latest version of Next.js (`v15.5.4`).
- Switched from Next.js Pages Router to Next.js App Router.
- Adopted newer USPS APIs.

### Removed

- "Comic Strip" panels on Issue/Comic Pages.

## [2.13.2](https://github.com/keesey/keesey-comics.com/tree/v2.13.1) - 2025-09-15

### Added

- _Paleocene #5_ to Series Hero "Buy them all" button.

## [2.13.1](https://github.com/keesey/keesey-comics.com/tree/v2.13.1) - 2025-09-14

### Fixed

- Removed some outdated countries from the USPS list.

## [2.13.0](https://github.com/keesey/keesey-comics.com/tree/v2.13.0) - 2025-09-14

### Added

- Added store links, schema, and comic panels for _Paleocene #5_.

### Changed

- Doubled resolution of front covers for _Paleocene_.

### Removed

- Social Nav.

### Security

- Upgrades to `axios`, `form-data`, and `next`.

## [2.12.1](https://github.com/keesey/keesey-comics.com/tree/v2.12.1) - 2025-07-19

### Removed

- Kickstarter links from _Paleocene_ series page and _Paleocene #5_ issue page.

## [2.12.0](https://github.com/keesey/keesey-comics.com/tree/v2.12.0) - 2025-07-19

### Added

- Description for Newsletter.

### Changed

- Renamed "Mailing List" to "Newsletter".

### Removed

- Anything related to the _Paleocene #5_ Kickstarter.

## [2.11.4](https://github.com/keesey/keesey-comics.com/tree/v2.11.4) - 2025-06-23

### Security

- Upgraded Next.js to 14.2.30.

## [2.11.3](https://github.com/keesey/keesey-comics.com/tree/v2.11.3) - 2025-06-23

### Added

- Link for _Paleocene #5_ in _Paleocene_ schema.
- CTA for Kickstarter on _Paleocene_ index page.

## [2.11.2](https://github.com/keesey/keesey-comics.com/tree/v2.11.2) - 2025-06-18

### Changed

- Updated Kickstarter link to include referrer tag.
- Updated _Paleocene #5_ page to explicitly point to Kickstarter.

## [2.11.1](https://github.com/keesey/keesey-comics.com/tree/v2.11.1) - 2025-06-02

### Changed

- Updated Kickstarter link for _Paleocene #5_ campaign.
- _The Flesh #3_ is on sale, not coming soon.

### Security

- Next.js patch upgrade.

## [2.11.0](https://github.com/keesey/keesey-comics.com/tree/v2.11.0) - 2025-04-07

### Changed

- Moved online store from Gumroad to Patreon.
- Updated Patreon logo.
- Updated links for _Paleocene_ translations.
- Using single-letter icon for Kickstarter in Social Nav.

### Removed

- Instagram and Mastodon links.

## [2.10.6](https://github.com/keesey/keesey-comics.com/tree/v2.10.6) - 2025-03-16

### Changed

- Revised script for bumping version.

## [2.10.5](https://github.com/keesey/keesey-comics.com/tree/v2.10.5) - 2025-03-16

### Security

- Bump axios from 1.7.4 to 1.8.2.
- Bump @babel/helpers from 7.15.4 to 7.26.10.

## [2.10.4] - 2025-03-11

### Changed

- Replaced a couple of panels on the _Paleocene_ page.

## [2.10.3] - 2025-03-11

### Changed

- Slight update to cover image for _Paleocene #5_.

## [2.10.2] - 2025-02-07

### Changed

- Updated cover images of _Paleocene #1–2_ to include Keesey Comics logo.

## [2.10.1] - 2025-02-07

### Added

- Social media image for _Paleocene #5_.
- Metadata abstract for _Paleocene #5_.

### Changed

- Social media images for _Paleocene #1–3_.

### Security

- Dependency updates.

## [2.10.0] - 2025-02-07

### Added

- Page for _Paleocene #5_.
- 2023 and 2025 to copyright years for _Paleocene_.

### Changed

- Upgraded `caniuse-lite`.
- Expanded page size from 1024px to 1280px.

### Security

- Dependency updates.

## [2.9.2] - 2024-05-01

### Removed

- Access to buying _The Flesh #3_ (for now).

## [2.9.1] - 2024-04-07

### Added

- New Image Panel for _The Flesh #3_.

## [2.9.0] - 2024-04-07

### Changed

- Showing all issues in Issues Promos.

## [2.8.1] - 2024-04-06

### Removed

- Outdated quote links.

## [2.8.0] - 2024-04-06

### Added

- New comic series: _The Flesh_ by Gage Ullman.
  - Series Page.
  - Issue Pages (#1–#3).
  - Footer links.
  - Sitemap entries.
  - Store items.
  - Favicon.
  - Social media images.
- Extended comic book product type.
- New theme: `hell`. (And associated mixins.)
- Author schema metadata to more pages.
- Sitemap entry for _Paleocene #4_.
- Author bylines.

### Changed

- Order of properties on Home Page.
- CTA label for _Paleocene_ series.
- Shrank inner content for social media images for Keesey Comics and the _Paleocene_ series.
- Using numerals in Age Recommendation for fonts that allow them.
- Copyright notice from "T. Michael Keesey" to "Keesey Comics".
- Metadata description for organization.
- Sizing strategy for comic panels.

### Fixed

- Transparency for _Pleistocene_ logo.
- URL for Instagram in schema metadata.

## [2.7.1] - 2024-03-30

### Security

- Upgrade for `semver`.

## [2.7.0] - 2024-03-30

### Changed

- Formatting for comic book product titles.

### Security

- Upgrades for most dependencies.

## [2.6.0] - 2023-11-27

### Added

- New products for order:
  - _Paleocene_ #4
  - Poster: "Night Watch"

### Removed

- Unnecessary console calls.

### Security

- Removed error traces to console.

## [2.5.3] - 2023-11-27

### Removed

- Inks Page for _Paleocene_ #4.

## [2.5.2] - 2023-10-14

### Changed

- Prices for most product types.

## [2.5.1] - 2023-09-26

### Changed

- Prices for some product types.

## [2.5.0] - 2023-09-15

### Added

- Inks page for _Paleocene #4_ Kickstarter campaign.

## [2.4.4] - 2023-08-23

### Changed

- Encoding for _Paleocene #4_ social media image.

## [2.4.3] - 2023-08-23

### Fixed

- Kickstarter link on _Paleocene #4_ Page.

## [2.4.2] - 2023-08-23

### Fixed

- Corrected images references in LD-JSON Schema for _Paleocene_ Issue Pages.
- Correctly-sized social media image for _Paleocene #4_ Page.

## [2.4.1] - 2023-08-23 [YANKED]

### Fixed

- Social media image for _Paleocene #4_ Page was incorrect.

## [2.4.0] - 2023-08-20

### Added

- Comic strip to _Paleocene #4_ page.
- Banner for Kickstarter campaign for _Paleocene #4_.

## [2.3.8] - 2023-08-15

### Changed

- Kickstarter link to _Paleocene #4_ campaign.

## [2.3.7] - 2023-08-07

### Changed

- Kickstarter link to Created Project tab in profile.

## [2.3.6] - 2023-08-07

### Changed

- Kickstarter link to profile (not _Paleocene #3_).

## [2.3.5] - 2023-08-07

### Security

- Bump word-wrap from 1.2.3 to 1.2.4

## [2.3.4] - 2023-06-13

### Fixed

- Patreon link from _Paleocene #4_ page.

## [2.3.3] - 2023-03-18

### Fixed

- Webcomic theme for mobile had short images on iOS.

## [2.3.2] - 2023-03-18

### Fixed

- Webcomic theme for mobile had short images.

## [2.3.1] - 2023-03-18

### Added

- _Parry 'n' Carney_ to sitemap.

### Changed

- Most _PhyloPic_ footer promos to _Parry 'n' Carney_.

## [2.3.0] - 2023-03-18

### Added

- _Parry 'n' Carney: Friends for Life_.

### Changed

- Updated _PhyloPic_ link to `www.phylopic.org`.

## [2.2.5] - 2023-01-28

### Added

- Copyright year updates automatically.

## [2.2.4] - 2023-01-28

### Removed

- Exclamation point from CTA on _Paleocene #4_ page.

## [2.2.3] - 2023-01-28

### Changed

- Downgraded Next.js to 12.3.4 to fix deployment.

## [2.2.2] - 2023-01-28

### Fixed

- Build configuration.

## [2.2.1] - 2023-01-28

### Security

- Upgraded `json5`.

## [2.2.0] - 2023-01-28

### Added

- Preliminary page for _Paleocene #4_.

### Changed

- Minor/patch upgrades for dependencies.

### Fixed

- Corrected canonical URLs to use `https` protocol and domain `www.keesey-comics.com`.
- Removed outdated `layout` properties for images.

### Removed

- `browserslist` from `package.json`.

## [2.1.13] - 2022-12-12

### Added

- Instagram link to top nav.

### Changed

- Upgraded all dependencies.

### Deprecated

### Removed

- Facebook links.

## [2.1.12] - 2022-12-12

### Removed

- Twitter links.

## [2.1.11] - 2022-11-18

### Security

- Upgraded `minimatch`.

## [2.1.10] - 2022-11-18

### Security

- Upgraded `minimist`.

## [2.1.9] - 2022-11-18

### Changed

- Social share images now all 1200x1200.

## [2.1.8] - 2022-11-07

### Added

- Mastodon links.
- `dev` script.

### Changed

- `start` script to use `next start`.
- Moved `sitemaps` to own folder.

## [2.1.7] - 2022-04-11

### Added

- Shipping options to purchase item descriptions.

### Security

- Upgraded `follow-redirects` to 1.14.8.

## [2.1.6] - 2022-02-22

### Security

- Upgraded `Next.js` to 12.1.0.

## [2.1.5] - 2022-02-21

### Removed

- All references to comiXology.

## [2.1.4] - 2022-02-05

### Fixed

- URL in Store metadata.
- Schema encoding.

### Security

- Updated dependency (`nanoid`).

## [2.1.3] - 2022-01-13

### Security

- Updated dependency (`follow-redirects`).

## [2.1.2] - 2022-01-13

### Added

- `sitemap.xml` and `robots.txt`
- Indication for search tools not to index the Shopping Cart.

## [2.1.1] - 2022-01-13

### Added

- More robust linting and code formatting.

## [2.1.0] - 2022-01-08

### Added

- Online Store, with Shopping Cart and Product Pages.

## [2.0.11] - 2022-01-05

### Added

- New pull quotes (Dino Dad Reviews, Fanbase Press).

## [2.0.10] - 2021-11-11

### Changed

- Buy link for _Paleocene #3_ (from Kickstarter to Gumroad).

## [2.0.9] - 2021-10-23

### Changed

- Removed countdown banner code due to bug with appearance after final time.

## [2.0.8] - 2021-10-22

### Fixed

- Countdown said "minutes" instead of "hours".

## [2.0.7] - 2021-10-08

### Added

- Countdown banner for Kickstarter campaign.

## [2.0.6] - 2021-10-07

### Security

- Upgraded `glob-parent`, `path-parse`.

## [2.0.5] - 2021-10-07

### Removed

- All settings related to S3.

## [2.0.4] - 2021-09-28

### Changed

- Full URL for social media images in metadata.

## [2.0.3] - 2021-09-28

### Added

- AtlandBB font.

### Changed

- Only displaying "comixified" text for the Paleocene font.

## [2.0.2] - 2021-09-23

### Added

- Google site verification header.

## [2.0.1] - 2021-09-22

### Added

- Legacy redirect for issue #3 cover.

### Fixed

- Invalid store link.

### Removed

- Invalid external store links for _Paleocene #3_.

## [2.0.0] - 2021-09-21

### Changed

- Complete rewrite and redesign of website, using Next.js.

## [1.4.0] - 2021-05-13

### Added

- Page for _Paleocene #3_.
- LD-JSON Schema for all pages.

### Changed

- Upgraded `caniuse-lite`.

### Security

- Dev dependency upgrades.

## [1.3.5] - 2020-10-07

### Added

- Link for _Paleocene #2_ on comiXology.

## [1.3.4] - 2020-09-29

### Changed

- _Paleocene_ issues link to Gumroad store, not specific product page.

## [1.3.3] - 2020-09-01

### Added

- Links to Instagram and social media links for Home Page and _Pleistocene_ Page.

## [1.3.2] - 2020-08-19

### Fixed

- Metadata for _Paleocene #2_ indicated _Paleocene #1_.

## [1.3.1] - 2020-08-19

### Changed

- Korean copy updates.
- English copy tweaks.

### Fixed

- Running comic outline generator on all frames.

## [1.3.0] - 2020-08-17

### Added

- Korean pages and font.

### Changed

- Thicker "Keesey Comics" logo.
- Made links to Gumroad products direct (not anchor links).
- Gumroad link for _Paleocene #2_.
- English-language consistently coded as `en`, not `en-US`.
- Page for _Paleocene #2_ redesigned.

### Fixed

- Spacing between "more of" and "Paleocene".
- Render lag for comic outlines.

### Removed

- "Presents..." after "Keesey Comics" except on Issue Pages.

## [1.2.1] - 2020-03-30

### Changed

- Expanded maximum width for _Paleocene_ pages.

## [1.2.0] - 2020-02-15

### Added

- Page for _Paleocene #2_.

## [1.1.5] - 2020-02-14

### Fixed

- All content within ARIA landmarks.

## [1.1.4] - 2020-02-14

### Added

- Metadata tag (`robots`).
- Canonical links.
- Language specification.

### Fixed

- Duplicate `viewport` metadata tags.

## [1.1.3] - 2020-02-14

### Fixed

- Corrected social media metadata (including Twitter image sizes).

## [1.1.2] - 2020-02-14

### Added

- Proper social media images.

## [1.1.1] - 2019-12-06

### Added

- comiXology link for _Paleocene_.

## [1.1.0] - 2019-10-08

### Added

- Gumroad link for _Pleistocene_.

### Changed

- Simplified CSS for featured links on _Pleistocene_.

## [1.0.0] - 2019-09-27
