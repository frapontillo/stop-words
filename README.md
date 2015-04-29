stop-words
==========

A collection of stop words for several languages.

This is a fork of [code.google.com/p/stop-words](https://code.google.com/p/stop-words/) by [A. Balucha](http://www.tonyb.sk/).

## Build

Every language can have multiple stop word lists in the format `stop-word_{WHATEVER}_{LANG}.txt` in the `src` directory, where:

  - `{WHATEVER}` can be whatever tag you want
  - `{LANG}` is the language ISO code (2 letters), e.g. `en`

To build one file for each language, simply run `npm start`.