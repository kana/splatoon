task :default => [:compile]

task :compile => [
  'gears.bundled.js',
  'gear-coordinator.bundled.js',
  'uni.bundled.js',
]

file 'gears.bundled.js' => ['gears.js', 'gear-db.js'] { |t| bundle(t) }
file 'gear-coordinator.bundled.js' => ['gear-coordinator.js', 'gear-db.js'] { |t| bundle(t) }
file 'uni.bundled.js' => ['uni.js', 'gear-db.js'] { |t| bundle(t) }

def bundle(t)
  sh "browserify -g uglifyify -t [ babelify --presets [ react ] ] #{t.prerequisites.first()} -o #{t.name}"
end

task :deploy => [:compile] do
  sh 'git diff --quiet HEAD'
  version = %x{git describe --always --dirty}.chomp
  sh %Q{
    git add *.bundled.js &&
    sed -i 's/__VERSION__/#{version}/g' gear-coordinator.html &&
    git commit -am 'Build #{version}' &&
    git push github HEAD:gh-pages -f &&
    git reset HEAD~ &&
    git checkout HEAD -- gear-coordinator.html
  }
end
