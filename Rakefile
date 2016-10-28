task :default => [:compile]

task :compile do
  sh 'webpack -p'
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
