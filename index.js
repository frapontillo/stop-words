var glob = require('glob');
var fs = require('fs-extra');

var files = glob.sync('./src/*.txt');
var map = {};

var regex = /(?:stop-words_.*_)(.{2})(?:\.txt)/;
var outDir = './out';

// brute force mapping
files.forEach(function(file) {
  var lang = regex.exec(file);
  if (!lang) {
    return;
  }
  lang = lang[1];
  map[lang] = map[lang] || [];
  map[lang].push(file);
});

// make the dir, don't care if it exists already LOL
try {
    fs.removeSync(outDir);
    fs.mkdirsSync(outDir);
} catch (Error) {}
try {
    // fs.mkdirSync(outDir);
} catch (Error) {}

// for each set, concat and create the file
for (var lang in map) {
  map[lang].forEach(function(file) {
      console.log(file);
      var fileContent = fs.readFileSync(file);
      fs.appendFileSync(outDir + '/stop-words-' + lang, fileContent);
  });
}