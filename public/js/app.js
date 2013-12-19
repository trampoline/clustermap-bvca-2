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
require.register("initialize", function(exports, require, module) {
$(function() {
  var mapMod, navMod;
  require('lib/first_timer');
  require('lib/regexp_quote');
  require('lib/static_jsonp');
  mapMod = require('models/map');
  return navMod = require('models/nav');
});
});

;require.register("lib/ajax", function(exports, require, module) {
var getDeferredJSON, getJSON;

getJSON = function(url, success, error) {
  if (error == null) {
    error = null;
  }
  console.log("getJSON: " + url);
  return $.ajax({
    dataType: "json",
    url: url,
    success: success,
    error: error
  });
};

getDeferredJSON = function(url, opts) {
  var d;
  if (opts == null) {
    opts = {};
  }
  d = $.Deferred();
  getJSON(url, (function(data) {
    if (opts.post_fn) {
      return d.resolve(opts.post_fn(data));
    } else {
      return d.resolve(data);
    }
  }), (function() {
    return d.reject();
  }));
  return d.promise();
};

exports.getJSON = getJSON;

exports.getDeferredJSON = getDeferredJSON;
});

;require.register("lib/api", function(exports, require, module) {
var ajax, get;

ajax = require('lib/ajax');

get = function(url, success, error) {
  var d;
  if (error == null) {
    error = null;
  }
  d = $.Deferred();
  ajax.getJSON(url, (function(response) {
    return d.resolve(response.data);
  }), (function() {
    return d.reject();
  }));
  return d;
};

exports.get = get;
});

;require.register("lib/first_timer", function(exports, require, module) {
var visited;

visited = $.cookie('visited');

if (!visited) {
  $('#firsttimer').modal({
    show: true
  });
}

$('#firsttimer .close').on('click', function() {
  return $('#firsttimer').hide(200, function() {
    return $.cookie('visited', {
      expires: 365
    });
  });
});
});

;require.register("lib/regexp_quote", function(exports, require, module) {
RegExp.quote = function(str, opts) {
  if (opts == null) {
    opts = '';
  }
  return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};
});

;require.register("lib/static_jsonp", function(exports, require, module) {
var idDeferreds, request, response;

idDeferreds = {};

request = function(id, url, options) {
  var deferred, error, requestOpts;
  if (options == null) {
    options = {};
  }
  if (!id) {
    throw new Error("no id");
  }
  deferred = $.Deferred();
  idDeferreds[id] = deferred;
  requestOpts = {
    crossDomain: true,
    dataType: 'jsonp',
    cache: _.has(options, 'cache') ? options.cache : true,
    jsonp: false,
    jsonpCallback: ''
  };
  console.log("JSONP: requesting: " + id + " from: " + url);
  try {
    $.ajax(url, requestOpts);
    setTimeout((function() {
      if (deferred.state() === 'pending') {
        console.log("JSONP: timing out request id: " + id + ", url: " + url);
        deferred.reject();
      }
      if (idDeferreds[id] === deferred) {
        return idDeferreds[id] = null;
      }
    }), options.timeout || 30000);
  } catch (_error) {
    error = _error;
    console.log(error);
    deferred.reject();
    if (idDeferreds[id] === deferred) {
      idDeferreds[id] = null;
    }
  }
  return deferred.promise();
};

response = function(id, data) {
  var deferred;
  deferred = idDeferreds[id];
  idDeferreds[id] = null;
  if (deferred) {
    deferred.resolve(data);
    return deferred.promise();
  } else {
    return console.log("JSONP: response for id: " + id + " received,      but no deferred registered");
  }
};

exports.request = request;

exports.response = response;

window.staticJsonpResponse = response;
});

;require.register("models/map", function(exports, require, module) {
var map, panToShow,
  __slice = [].slice;

map = L.mapbox.map('map', 'mccraigmccraig.map-gqkcbi1g').fitBounds([[61, 2.5], [48.7, -11.5]], {
  paddingTopLeft: [0, 0],
  paddingBottomRight: [0, 0]
});

panToShow = function() {
  var all_bounds, fb, fb_copy, super_bounds;
  all_bounds = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  fb = _.first(all_bounds);
  fb_copy = new L.LatLngBounds(fb.getSouthWest(), fb.getNorthEast());
  super_bounds = _.reduce(all_bounds, (function(sb, bounds) {
    return sb.extend(bounds);
  }), fb_copy);
  map.fitBounds(super_bounds);
  if (all_bounds.length === 1) {
    return map.setZoom(map.getZoom() - 1);
  }
};

exports.map = map;

exports.panToShow = panToShow;
});

;require.register("models/nav", function(exports, require, module) {
$('#nav .search > a').on('click', function(e) {
  e.preventDefault();
  $(this).parent().toggleClass('open');
  return $('#search').toggle();
});

$('#nav .map > a, #nav .lists > a').on('click', function(e) {
  var li;
  e.preventDefault();
  li = $(this).parent();
  li.addClass('active').siblings('.active').removeClass('active');
  if (li.is('.map')) {
    return $('body').removeClass().addClass('view-map');
  } else {
    return $('body').removeClass().addClass('view-lists');
  }
});

$('#search button').on('click', function() {
  return $('#search input').val('').focus();
});

$('#map-report > a').on('click', function(e) {
  var map;
  e.preventDefault();
  map = $('#map-report');
  if (map.hasClass('open')) {
    return $('#map-report').animate({
      right: '-270px'
    }, 400, function() {
      return $(this).removeClass('open');
    });
  } else {
    return $('#map-report').animate({
      right: '0'
    }, 400, function() {
      return $(this).addClass('open');
    });
  }
});
});

;
//# sourceMappingURL=app.js.map