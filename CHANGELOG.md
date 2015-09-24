# Change Log

All notable changes to this project will be documented in this file.
We follow the [Semantic Versioning 2.0.0](http://semver.org/) format.


## 1.0.1 - 2015-09-24

### Fixed
- Reverted importing of `cf-core.less` to be by `(reference)` so that vars and mixins
  may be used in docs.less without dumping the whole of cf-core into the compiled CSS.
- Reverted `.bowerrc`'s `directory` to `bower_components` so that `grunt bower` resumes
  functioning correctly.

### Changed
- Updated Rainbow dependency because it's now a normal Bower package.


## 1.0.0 - 2015-05-28

### Changed
- Updated to work with CF v1 components.

### Removed
- Removed CSS sidebar from Docs template.


## 0.9.2 - 2015-05-13

### Removed
- Removed Avenir from the code examples.


## 0.9.1 - 2015-01-06

### Added
- docs and raw templates will now include Modernizr if that option is set in
  `templateData`.


## 0.9.0 - 2014-11-04

### Added
- Sidebar nav linking to other component docs.

### Changed
- Replaced all tabs with spaces in the docs Jade template.


## 0.8.2 - 2014-09-12

### Changed
- Correct source code typeface, now set in the right places.
- Added a little margin under the "edit on codepen" button when followed by
  notes or codenotes.
- A few visual tweaks to the "edit on codepen" button to make it slightly more
  noticeable.
- Focus style for the "edit on codepen" button.


## 0.8.1 - 2014-09-12

### Added
- `.no-js` support to the Docs and Raw templates.
- IE conditional classes to the Docs template.

### Removed
- Unnecessary properties from `bower.json`.

### Changed
- Better source code typefaces.
- Updated dependencies to latest versions.
- Updated meta docs to latest versions.
