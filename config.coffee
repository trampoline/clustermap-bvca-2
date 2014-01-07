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
        'js/vendor.js': /^vendor\/scripts/
        'js/html5.js': /^vendor\/html5_scripts/
        'test/scenarios.js': /^test(\/|\\)e2e/
      order:
        before: [
          'vendor/scripts/console-polyfill.js',
          'vendor/scripts/es5-shim.js',
          'vendor/scripts/android-xpath.js',
          'vendor/scripts/javascript-xpath.js',
          'vendor/scripts/bootstrap.js'
        ]

    stylesheets:
      joinTo:
        'css/app.css': /^(app|vendor)\/styles/
      order:
        before: [
          'vendor/styles/bootstrap.less',
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
