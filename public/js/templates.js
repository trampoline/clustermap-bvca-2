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

buf.push("<!DOCTYPE html><html lang=\"en\"><head><title>BVCA v2</title><meta charset=\"utf-8\"><!--if IEmeta(http-equiv=\"X-UA-Compatible\", content=\"IE=edge,chrome=1\")--><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><link type=\"text/css\" rel=\"stylesheet\" href=\"http://api.tiles.mapbox.com/mapbox.js/v1.6.1/mapbox.css\"><link type=\"text/css\" rel=\"stylesheet\" href=\"css/app.css\"><!--if lte IE 7<script type=\"text/javascript\" src=\"http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js\"></script>\n--><!--if lte IE 8<script type=\"text/javascript\" src=\"/js/html5.js\"></script>\n--><script type=\"text/javascript\" src=\"http://code.jquery.com/jquery-1.11.0.min.js\"></script><script type=\"text/javascript\" src=\"http://api.tiles.mapbox.com/mapbox.js/v1.6.1/mapbox.js\"></script><script type=\"text/javascript\" src=\"/js/vendor.js\"></script><script type=\"text/javascript\" src=\"http://code.highcharts.com/highcharts.js\"></script><script type=\"text/javascript\" src=\"http://code.highcharts.com/highcharts-more.js\"></script><script type=\"text/javascript\" src=\"http://fb.me/react-0.8.0.js\"></script><!--begin-static-app-config--><script type=\"text/javascript\">window.config={}</script><!--end-static-app-config--><!--app-config<script type=\"text/javascript\">window.config={{{app-config}}}</script>\n--></head><body class=\"view-map\"><div id=\"page-info\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><h4>BVCA Private Equity Map</h4></div><div class=\"modal-body\"><p>Private equity and venture capital play a key role in the British economy.\nOver the last five years £33bn has been invested in over 4,500 UK companies.\nIn 2012 alone £5.7bn was invested in over 800 businesses, employing the equivalent\nof around 130,000 full time jobs. Around 90% of these were small and medium-sized\nenterprises, a crucial component of economic health.</p><p>Many are unfamiliar with the work of private equity and venture capital and its\nimpact in their local community. To help address this the BVCA has produced the\nImpact Map to demonstrate the industry’s role in supporting businesses across the country.</p><p>This map is constantly updated. Please contact&ensp;<a href=\"mailto:communications@bvca.co.uk\">communications@bvca.co.uk</a>&ensp;if you have any comments or questions. If you require further information about private\nequity and venture capital in the UK please head to the&ensp;<a href=\"http://www.bvca.co.uk\" class=\"no-rmargin\">BVCA website here</a>.</p></div></div></div></div><div id=\"page-methodology\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><h4>Methodology</h4></div><div class=\"modal-body\"><p>We track and regularly update investment information as supplied by our members covering Portfolio Company sites across the UK.</p><p>Portfolio Companies were matched up with the Companies House database and site addresses were matched to Parliamentary Constituencies using the ONS Postcode database and the Ordnance Survey Boundary-Line product.</p><p>Historical turnover and employment information was then taken from Companies House accounts filings. In cases where investments were made in Portfolio Companies with multiple sites, the declared revenue and employees of those companies were shared equally amongst the company's sites\n\n</p></div></div></div></div><div id=\"wrap\"><aside id=\"nav\"><ul><li data-toggle=\"tooltip\" data-placement=\"right\" title=\"Search for a Constituency or Company\" class=\"search\"><a href=\"#\">Search</a></li><li data-toggle=\"tooltip\" data-placement=\"right\" title=\"View on map\" class=\"map active\"><a href=\"#\">Map</a></li><li data-toggle=\"tooltip\" data-placement=\"right\" title=\"View full report\" class=\"lists\"><a href=\"#\">Full Report</a></li><li data-toggle=\"tooltip\" data-placement=\"right\" title=\"More Information\" class=\"info\"><a data-toggle=\"modal\" data-target=\"#page-info\">Info</a></li><li data-toggle=\"tooltip\" data-placement=\"right\" title=\"Methodology\" class=\"method\"><a data-toggle=\"modal\" data-target=\"#page-methodology\">Methodology</a></li><li class=\"logo\"><a href=\"http://www.bvca.co.uk\">BVCA</a></li></ul></aside><section id=\"main\"><div class=\"container\"><header id=\"main-header\"><div id=\"search-component\"><div id=\"search\"><div class=\"tbl\"><div style=\"width: 100%\" class=\"tbl-cell\"><input type=\"text\" placeholder=\"Search\"></div><div style=\"width: 34px\" class=\"tbl-cell\"><button type=\"reset\" class=\"btn-clear\">&times;</button></div><div style=\"width: 136px\" class=\"tbl-cell\"><button type=\"reset\" class=\"btn-reset\">Reset to UK wide</button></div></div><div id=\"search-results\" class=\"hide\"><ul><li><a href=\"#\">Hackney<small>Constituency</small></a></li><li><a href=\"#\">3i<small>Investor</small></a></li><li><a href=\"#\">Weetabix<small>Company</small></a></li></ul></div></div></div><div id=\"page-title-component\"><div id=\"page-title\"><button type=\"button\" class=\"btn\">View on map</button><h2>Company</h2><h3>ABC XYZ Company Name Limited</h3></div></div></header><div id=\"main-content\"><div id=\"page-map\"><div id=\"map-report\" class=\"open\"><a href=\"#\"><i>Show / hide</i></a><aside><header class=\"primary\"><h1>Welcome to the BVCA Private Equity Map</h1><h2>View Investment across the UK</h2></header><div id=\"map-report-component\"><header class=\"secondary\"><h2>-</h2><h3>-</h3></header><ul><li>-<small>Companies</small></li><li>-<small>Investors</small></li><li>-<small>Revenue (&pound;)</small></li><li>-<small>Employees</small></li></ul><a href=\"#\"><button type=\"button\" class=\"btn\"><i class=\"icon-lists-sm\"></i>Full report</button></a><p>View advanced tabular results</p></div></aside></div><div id=\"map-component\"></div></div><div id=\"page-lists\"><div class=\"inner\"><div class=\"div-scroll\"><div class=\"div-fixed\"><div id=\"full-report-component\"><div class=\"full-report-overview\"><h4>- Overview</h4><div class=\"table-responsive\"><table class=\"table-stats\"><thead><tr><th>&nbsp;</th><th>Companies</th><th>Investors</th><th>Revenue (&pound;)</th><th>Employees</th></tr></thead><tbody><tr><th><i data-toggle=\"tooltip\" data-container=\"body\" title=\"Total\" class=\"icon-info\"></i>Total</th><td><span class=\"totals\">-</span></td><td><span class=\"totals\">-</span></td><td><span class=\"totals\">-</span></td><td><span class=\"totals\">-</span></td></tr><tr><th><i data-toggle=\"tooltip\" data-container=\"body\" title=\"Average\" class=\"icon-info\"></i>Average</th><td><span class=\"averages\">-</span></td><td><span class=\"averages\">-</span></td><td><span class=\"averages\">-</span></td><td><span class=\"averages\">-</span></td></tr></tbody></table></div></div><div class=\"full-report-portfolio-company-sites\"><div class=\"table-responsive\"><table class=\"table\"><thead><tr><th>Company</th><th>Postcode</th><th>Investor</th><th>Revenue</th><th>Rev. change</th><th>Employess</th><th>Emp. change</th></tr></thead><tbody>");
var i = 1;
while(i--)
{
buf.push("<tr><td><a href=\"#\">Company name</a></td><td>-</td><td><a href=\"#\">Investor name</a></td><td>-<small>&nbsp;(-)</small></td><td>-<i class=\"icon-negative\"></i></td><td>-<small>&nbsp;(-)</small></td><td>-<i class=\"icon-positive\"></i></td></tr>");
}
buf.push("</tbody></table></div></div><div class=\"full-report-details\"><div class=\"grid\"><div class=\"tbl\"><div class=\"tbl-cell charts\"><div class=\"tbl\"><div class=\"tbl-row\"><div class=\"tbl-cell\"><div class=\"box box-first\"><header>Box Title</header><div><p>Duis elementum vulputate blandit. Suspendisse dignissim nisi orci, a venenatis dolor eleifend ac? Ut adipiscing tellus enim, eu pharetra eros consequat eget!</p><p>Donec sit amet turpis quis magna dictum aliquet. Vestibulum dictum vestibulum risus dictum facilisis! Etiam semper nulla vitae nunc porttitor pretium sit amet vel tellus.</p><p>Aenean ut diam sit amet est sagittis sagittis. Donec quis diam eleifend, tempus turpis fringilla, dictum eros.</p></div></div></div><div class=\"tbl-cell\"><div class=\"box box-last\"><header>Box Title</header><div><p>Duis elementum vulputate blandit. Suspendisse dignissim nisi orci, a venenatis dolor eleifend ac? Ut adipiscing tellus enim, eu pharetra eros consequat eget!</p><p>Donec sit amet turpis quis magna dictum aliquet. Vestibulum dictum vestibulum risus dictum facilisis! Etiam semper nulla vitae nunc porttitor pretium sit amet vel tellus.</p></div></div></div></div><div class=\"tbl-row\"><div class=\"tbl-cell\"><div class=\"box box-first\"><header>Box Title</header><div><p>Duis elementum vulputate blandit. Suspendisse dignissim nisi orci, a venenatis dolor eleifend ac?</p><p>Aenean ut diam sit amet est sagittis sagittis. Donec quis diam eleifend, tempus turpis fringilla, dictum eros.</p></div></div></div><div class=\"tbl-cell\"><div class=\"box box-last\"><header>Box Title</header><div><p>Duis elementum vulputate blandit. Suspendisse dignissim nisi orci, a venenatis dolor eleifend ac? Ut adipiscing tellus enim, eu pharetra eros consequat eget!</p><p>Donec sit amet turpis quis magna dictum aliquet. Vestibulum dictum vestibulum risus dictum facilisis! Etiam semper nulla vitae nunc porttitor pretium sit amet vel tellus.</p><p>Aenean ut diam sit amet est sagittis sagittis. Donec quis diam eleifend, tempus turpis fringilla, dictum eros.</p></div></div></div></div></div></div><div class=\"tbl-cell details\"><div class=\"tbl\"><div class=\"tbl-cell\"><div class=\"box\"><header>Box Title</header><div><ul><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li></ul><p><a href=\"#\">Show more...</a></p></div></div></div></div><div class=\"tbl\"><div class=\"tbl-cell\"><div class=\"box\"><header>Box Title</header><div><ul><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li></ul><p><a href=\"#\">Show more...</a></p></div></div></div></div><div class=\"tbl\"><div class=\"tbl-cell\"><div class=\"box\"><header>Box Title</header><div><ul><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li></ul><li>Donec sit amet turpis quis magna dictum aliquet.</li><li>Donec sit amet turpis quis magna dictum aliquet.</li></div><p><a href=\"#\">Show more...</a></p></div></div></div></div></div></div></div></div></div></div></div></div></div><footer id=\"main-footer\"><div class=\"inner\"><div class=\"trampoline\"><p>Produced by the&nbsp;<a href=\"http://www.bvca.co.uk\">BVCA</a>&nbsp;and&nbsp;<a href=\"http://www.trampolinesystems.com/\">Trampoline Systems</a></p><p><a href=\"mailto:bvca-pemap-issues@trampolinesystems.com?subject=BVCA Private Equity Map issue report\">Report issue</a></p></div><!--   p--><!--     a(href='#') Terms--><!-- .issues--></div></footer></div></section></div><!--begin-static-base-js--><script type=\"text/javascript\" src=\"cljs/goog/base.js\"></script><!--end-static-base-js--><!--base-js{{{base-js}}}\n--><!--begin-dynamic-js--><!--end-dynamic-js--><!--dynamic-js<script type=\"text/javascript\" src=\"clustermap.js\"></script><script type=\"text/javascript\">goog.require(\"clustermap.core\");</script>\n--><!--begin-static-repl-js--><!--end-static-repl-js--><!--repl-js<script type=\"text/javascript\">{{{repl-js}}}</script>--></body></html>");;return buf.join("");
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