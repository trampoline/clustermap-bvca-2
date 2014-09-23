// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.data.picker');
goog.require('cljs.core');
clustermap.data.picker.pick_variable = (function pick_variable(variable,data){return cljs.core.map.call(null,(function (d){return cljs.core.get.call(null,d,variable);
}),data);
});
