Package.describe({
  name: 'maximum:transformto',
  version: '1.0.0',
  summary: 'Provides a `transformTo` function on collections, to transform items to a class',
  git: 'https://github.com/maximummeteor/transformto/',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'maximum:multi-transform@1.0.0',
    'coffeescript',
    'mongo'
  ]);

  api.addFiles('transformto.coffee');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('coffeescript');
  api.use('maximum:transformto');
  api.addFiles('transformto-tests.coffee');
});
