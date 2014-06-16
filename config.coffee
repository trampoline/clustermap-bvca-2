exports.config =
  modules:
    wrapper: 'commonjs'
    definition: 'commonjs'
  paths:
    public: 'public'
  files:
    javascripts:
      joinTo:
        'js/app.js': /^app/
        'js/polyfills.js': /^vendor\/polyfill_scripts/
        'js/vendor.js': /^vendor\/scripts/
        'test/scenarios.js': /^test(\/|\\)e2e/
      order:
        before: [
          'vendor/polyfill_scripts/json2.js',
          'vendor/polyfill_scripts/es5-shim.js',
          'vendor/polyfill_scripts/es5-sham.js',
          'vendor/polyfill_scripts/html5shiv.js',
          'vendor/polyfill_scripts/console-polyfill.js',
          'vendor/polyfill_scripts/android-xpath.js',
          'vendor/polyfill_scripts/javascript-xpath.js',
          'vendor/scripts/bootstrap.js',
          'vendor/scripts/geojson-utils.js',
          'vendor/scripts/rtree.js',
          'vendor/scripts/highcharts.js'
        ]

    stylesheets:
      joinTo:
        'css/app.css': /^(app|vendor)\/styles/
      order:
        before: [
          'vendor/styles/bootstrap.less',
          'vendor/styles/mapbox.css'
        ]
    templates:
      joinTo:
        'js/templates.js': /.+\.jade$/

  plugins:
    coffeelint:
      pattern: /^app\/.*\.coffee$/
    jade:
      pretty: yes # Adds pretty-indentation whitespaces to output (false by default)
    static_jade:
      extension: ".static.jade"
      path: [/^app$/]

  server:
    port: 6832
