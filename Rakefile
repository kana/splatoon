task :default => [:compile]

task :compile => ['gears.bundled.js']

file 'gears.bundled.js' => ['gears.js'] do
  sh 'browserify -g uglifyify -t [ babelify --presets [ react ] ] gears.js -o gears.bundled.js'
end
