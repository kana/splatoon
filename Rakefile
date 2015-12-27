task :default => [:compile]

task :compile => ['gears.bundled.js']

file 'gears.bundled.js' => ['gears.js'] do
  sh 'browserify -g uglifyify -t [ babelify --presets [ react ] ] gears.js -o gears.bundled.js'
end

task :deploy => [:compile] do
  sh 'git diff --quiet HEAD'
  version = %x{git describe --always --dirty}.chomp
  sh %Q{
    git add gears.bundled.js
    git commit -am 'Build #{version}' &&
    git push github HEAD:gh-pages -f &&
    git reset HEAD~
  }
end
