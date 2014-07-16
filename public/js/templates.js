(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("index.static", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};

buf.push("<!DOCTYPE html><html lang=\"en\"><head><title>EU Startup Data</title><meta charset=\"utf-8\"><!--if IEmeta(http-equiv=\"X-UA-Compatible\", content=\"IE=edge,chrome=1\")--><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0\"><meta name=\"description\" content=\"EU Startup Data\"><meta name=\"author\" content=\"Trampoline Systems Ltd\"><link type=\"text/css\" rel=\"stylesheet\" href=\"http://api.tiles.mapbox.com/mapbox.js/v1.6.4/mapbox.css\"><link type=\"text/css\" rel=\"stylesheet\" href=\"/css/app.css\"><script type=\"text/javascript\" src=\"/js/polyfills.js\"></script><script type=\"text/javascript\" src=\"http://code.jquery.com/jquery-1.11.1.min.js\"></script><!--[if lte IE 7]><script type=\"text/javascript\">$(document).ready(function(){ $('html').addClass('ie7'); });</script><![endif]-->\n<!--[if IE 8]><script type=\"text/javascript\">$(document).ready(function(){ $('html').addClass('ie8'); });</script><![endif]-->\n<!--[if IE 9]><script type=\"text/javascript\">$(document).ready(function(){ $('html').addClass('ie9'); });</script><![endif]-->\n<!--[if IE 10]><script type=\"text/javascript\">$(document).ready(function(){ $('html').addClass('ie10'); });</script><![endif]--><script type=\"text/javascript\">$(document).ready(function(){\n  if ($('html').hasClass('ie8')) {\n    $('#browser-support').modal();\n  }\n});\n</script><script type=\"text/javascript\" src=\"http://api.tiles.mapbox.com/mapbox.js/v1.6.4/mapbox.js\"></script><script type=\"text/javascript\" src=\"/js/vendor.js\"></script><script type=\"text/javascript\" src=\"http://fb.me/react-0.9.0.js\"></script><!--begin-static-app-config--><script type=\"text/javascript\">window.config={\"api\":{\"prefix\": \"\"}}</script><!--end-static-app-config--><!--app-config<script type=\"text/javascript\">window.config={{{app-config}}}</script>\n--><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\nif (window.config.ua && window.config.ua.code) {\n  ga('create', window.config.ua.code, 'trampolinesystems.com');\n  ga('send', 'pageview');\n}\n</script></head><body class=\"view-map\"><div id=\"browser-support\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><h4>Partially supported browser</h4></div><div class=\"modal-body\"><p>This browser is only partially supported : some application features may not work correctly or may perform poorly</p><p>For a better experience try one of :</p><ul><li><a href=\"http://www.google.com/chrome/\">Chrome</a></li><li><a href=\"http://www.mozilla.org/en-US/firefox/new/\">Firefox</a></li><li><a href=\"http://windows.microsoft.com/en-us/internet-explorer/download-ie\">Internet Explorer v9 or newer</a></li></ul></div></div></div></div><div id=\"page-info\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><h4>EU Startup Data</h4></div><div class=\"modal-body\"><p>EU Startup Data</p><p>Please contact&ensp;<a href=\"mailto:eustartupdata@trampolinesystems.com\">eustartupdata@trampolinesystems.com</a>&ensp;if you have any comments or questions.</p></div></div></div></div><div id=\"page-methodology\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><h4>Methodology</h4></div><div class=\"modal-body\"><p>We take registry data from many European countries.\n</p></div></div></div></div><div id=\"wrap\"><aside id=\"nav\"><ul><li data-toggle=\"tooltip\" data-placement=\"right\" title=\"Filter\" class=\"search\"><a href=\"#\">Search</a></li><li data-toggle=\"tooltip\" data-placement=\"right\" title=\"View on map\" class=\"map active\"><a href=\"#\">Map</a></li><li data-toggle=\"tooltip\" data-placement=\"right\" title=\"View full report\" class=\"lists\"><a href=\"#\">Full Report</a></li><li data-toggle=\"tooltip\" data-placement=\"right\" title=\"More Information\" class=\"info\"><a data-toggle=\"modal\" data-target=\"#page-info\">Info</a></li><li data-toggle=\"tooltip\" data-placement=\"right\" title=\"Methodology\" class=\"method\"><a data-toggle=\"modal\" data-target=\"#page-methodology\">Methodology</a></li><li class=\"logo\"><a href=\"#\">#</a></li></ul></aside><section id=\"main\"><div class=\"container\"><header id=\"main-header\"><div id=\"search\"><div id=\"search-component\"><div class=\"tbl\"><div style=\"width: 100%\" class=\"tbl-cell\"><input type=\"text\" placeholder=\"Search\"></div><div style=\"width: 38px\" class=\"tbl-cell\"><button type=\"reset\" class=\"btn-clear\">&times;</button></div></div><div id=\"search-results\" class=\"hide\"><ul><li><a href=\"#\">-<small>Constituency</small></a></li><li><a href=\"#\">-<small>Investor</small></a></li><li><a href=\"#\">-<small>Investor-backed company</small></a></li></ul></div></div><div class=\"tbl\"><div class=\"tbl-row\"><div class=\"tbl-cell\"><h3>Shading</h3></div><div class=\"tbl-cell\"></div></div></div><div id=\"variable-selection-component\"></div><div id=\"stat-selection-component\"></div><div id=\"scale-selection-component\"></div></div></header><div id=\"page-title-component\"><div id=\"page-title\"><button type=\"button\" class=\"btn\">View on map</button><!-- button(type='reset').btn.btn-link.btn-reset Reset to UK wide--><h2>-</h2><h3>-</h3></div></div><div id=\"main-content\"><div id=\"page-map\"><div id=\"map-report\" class=\"open\"><a href=\"#\"><i>Show / hide</i></a><aside><header class=\"primary\"><h1>EU Startup Data</h1><h2>View Startups across Europe</h2></header><div id=\"map-report-component\"><header class=\"secondary\"><h2>-</h2><h3>-</h3><!-- button(type='reset').btn-reset Reset to UK wide--></header><ul><li>-<small>Companies</small></li><li>-<small>Total revenue</small></li><li>-<small>Total employees</small></li></ul><a href=\"#\"><button type=\"button\" class=\"btn\"><i class=\"icon-lists-sm\"></i>Full report</button></a></div></aside></div><div id=\"map-component\"></div></div><div id=\"page-lists\"><div class=\"inner\"><div class=\"div-scroll\"><div class=\"div-fixed\"><div id=\"full-report-component\"><div class=\"full-report-overview\"><h4>- Overview</h4><div class=\"table-responsive\"><table class=\"table-stats\"><thead><tr><th>&nbsp;</th><th>Investor-backed companies</th><th>Investors</th><th>Constituencies</th><th>Revenue</th><th>Rev. change</th><th>Employees</th></tr></thead><tbody><tr><th><i data-toggle=\"tooltip\" data-container=\"body\" title=\"Total\" class=\"icon-info\"></i>Total</th><td><span class=\"totals\">-</span></td><td><span class=\"totals\">-</span></td><td><span class=\"totals\">-</span></td><td><span class=\"totals\">-</span></td><td><span class=\"totals\">-</span></td><td><span class=\"totals\">-</span></td></tr><tr><th><i data-toggle=\"tooltip\" data-container=\"body\" title=\"Average\" class=\"icon-info\"></i>Average</th><td><span class=\"averages\">-</span></td><td><span class=\"averages\">-</span></td><td><span class=\"averages\">-</span></td><td><span class=\"averages\">-</span></td><td><span class=\"averages\">-</span></td><td><span class=\"averages\">-</span></td></tr></tbody></table></div></div><div class=\"full-report-portfolio-company-sites\"><div class=\"table-responsive\"><table class=\"table\"><thead><tr><th>Investor-backed company</th><th>Postcode</th><th>Investor</th><th>Revenue</th><th>Rev. change</th><th>Employess</th><th>Emp. change</th></tr></thead><tbody>");
var i = 1;
while(i--)
{
buf.push("<tr><td><a href=\"#\">-</a></td><td>-</td><td><a href=\"#\">-</a></td><td>-<small>&nbsp;(-)</small></td><td>-<i class=\"icon-negative\"></i></td><td>-<small>&nbsp;(-)</small></td><td>-<i class=\"icon-positive\"></i></td></tr>");
}
buf.push("</tbody></table></div></div><div class=\"full-report-details\"><div class=\"grid\"><div class=\"tbl\"><div class=\"tbl-cell charts\"><div class=\"tbl\"><div class=\"tbl-row\"><div class=\"tbl-cell\"><div class=\"box box-first\"><header>-</header><div><p>-</p><p>-</p><p>-</p></div></div></div><div class=\"tbl-cell\"><div class=\"box box-last\"><header>-</header><div><p>-</p><p>-</p></div></div></div></div><div class=\"tbl-row\"><div class=\"tbl-cell\"><div class=\"box box-first\"><header>-</header><div><p>-</p><p>-</p></div></div></div><div class=\"tbl-cell\"><div class=\"box box-last\"><header>-</header><div><p>-</p><p>-</p><p>-</p></div></div></div></div></div></div><div class=\"tbl-cell details\"><div class=\"tbl\"><div class=\"tbl-cell\"><div class=\"box\"><header>-</header><div><ul><li>-</li><li>-</li><li>-</li><li>-</li></ul><p><a href=\"#\">Show more...</a></p></div></div></div></div><div class=\"tbl\"><div class=\"tbl-cell\"><div class=\"box\"><header>-</header><div><ul><li>-</li><li>-</li><li>-</li><li>-</li></ul><p><a href=\"#\">Show more...</a></p></div></div></div></div><div class=\"tbl\"><div class=\"tbl-cell\"><div class=\"box\"><header>-</header><div><ul><li>-</li><li>-</li></ul><li>-</li><li>-</li></div><p><a href=\"#\">Show more...</a></p></div></div></div></div></div></div></div></div></div></div></div></div></div><footer id=\"main-footer\"><div class=\"inner\"><div class=\"trampoline\"><p>Produced by the&nbsp;<a href=\"http://www.grantthornton.com/\">Grant Thornton</a>&nbsp;and&nbsp;<a href=\"http://www.trampolinesystems.com/\">Trampoline Systems</a></p><p><a href=\"mailto:clustermap-issues@trampolinesystems.com?subject=EU Startup Data issue report\">Report issue</a></p></div><!--   p--><!--     a(href='#') Terms--><!-- .issues--></div></footer></div></section></div><!--begin-static-base-js--><script type=\"text/javascript\" src=\"cljs/goog/base.js\"></script><!--end-static-base-js--><!--base-js{{{base-js}}}\n--><!--begin-static-dynamic-js--><script type=\"text/javascript\" src=\"clustermap.js\"></script><script type=\"text/javascript\">goog.require(\"clustermap.core\");</script><!--end-static-dynamic-js--><!--dynamic-js<script type=\"text/javascript\" src=\"clustermap.js\"></script><script type=\"text/javascript\">goog.require(\"clustermap.core\");</script>\n--><!--begin-static-repl-js--><!--end-static-repl-js--><!--repl-js<script type=\"text/javascript\">{{{repl-js}}}</script>\n--></body></html><!--end-->");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("unsupported.static", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};

buf.push("<!DOCTYPE html><html lang=\"en\"><head><title>BVCA v2</title><meta charset=\"utf-8\"></head><body><h1>BVCA Private Equity Map</h1><h2>Unsupported browser</h2><h3>This browser is completely unsupported. it will not work at all</h3><p>Please try one of :<ul><li><a href=\"http://www.google.com/chrome/\">Chrome</a></li><li><a href=\"http://www.mozilla.org/en-US/firefox/new/\">Firefox</a></li><li><a href=\"http://windows.microsoft.com/en-us/internet-explorer/download-ie\">Internet Explorer v9 or newer</a></li></ul></p></body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;
//# sourceMappingURL=templates.js.map