// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.mount');
goog.require('secretary.core');
goog.require('clustermap.components.map');
goog.require('clustermap.nav');
goog.require('om.dom');
goog.require('clustermap.components.timeline_chart');
goog.require('goog.history.EventType');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.routes');
goog.require('clustermap.components.table');
goog.require('om.dom');
goog.require('clustermap.components.table');
goog.require('clustermap.api');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('clustermap.components.select_chooser');
goog.require('clustermap.components.select_chooser');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clustermap.boundarylines');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.formats.time');
goog.require('clustermap.components.search');
goog.require('clustermap.components.map_report');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.filter');
goog.require('clustermap.components.mount');
goog.require('clustermap.components.map_report');
goog.require('clustermap.routes');
goog.require('clustermap.components.full_report');
goog.require('clustermap.components.search');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clustermap.components.page_title');
goog.require('clustermap.formats.time');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.components.filter');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clustermap.components.timeline_chart');
goog.require('clustermap.components.page_title');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.components.map');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
clustermap.app.IApp = (function (){var obj45760 = {};return obj45760;
})();
clustermap.app.start = (function start(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$app$IApp$start$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$app$IApp$start$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.app.start[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.app.start["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("IApp.start",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.stop = (function stop(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$app$IApp$stop$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$app$IApp$stop$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.app.stop[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.app.stop["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("IApp.stop",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.initial_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1132,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1131,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1133,null,cljs.core.constant$keyword$1134,null,cljs.core.constant$keyword$1132,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1133,null,cljs.core.constant$keyword$1134,null,cljs.core.constant$keyword$1132,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1133,null,cljs.core.constant$keyword$1134,null,cljs.core.constant$keyword$1132,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$1132,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.constant$keyword$1122,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1499,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1271,false,cljs.core.constant$keyword$1114,null,cljs.core.constant$keyword$1272,null], null),cljs.core.constant$keyword$1169,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1570,cljs.core.constant$keyword$1569,"companies",cljs.core.constant$keyword$1549,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1555,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1554,null,cljs.core.constant$keyword$1114,null,cljs.core.constant$keyword$1553,null,cljs.core.constant$keyword$1551,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1249,cljs.core.constant$keyword$1133,"companies",cljs.core.constant$keyword$1268,"company",cljs.core.constant$keyword$1168,"boundaryline_id",cljs.core.constant$keyword$1563,"!latest_employee_count"], null),cljs.core.constant$keyword$1552,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1564,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1480,cljs.core.constant$keyword$1494], null),cljs.core.constant$keyword$1565,cljs.core.constant$keyword$1498,cljs.core.constant$keyword$1563,cljs.core.constant$keyword$1443], null)], null),cljs.core.constant$keyword$1240,null], null),cljs.core.constant$keyword$1446,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1447,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1133,"companies",cljs.core.constant$keyword$1268,"company",cljs.core.constant$keyword$1448,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null)], null)], null),cljs.core.constant$keyword$1447,null], null),cljs.core.constant$keyword$1567,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1567,cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1133,"companies",cljs.core.constant$keyword$1268,"company",cljs.core.constant$keyword$1274,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1445,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1275,"desc"], null)], null),cljs.core.constant$keyword$1120,(0),cljs.core.constant$keyword$1121,(50),cljs.core.constant$keyword$1286,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1571,"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1572,"Postcode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1573,"Formation date",(function (p1__45761_SHARP_){return clustermap.formats.time.format_date(p1__45761_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1574,"Filing date",(function (p1__45762_SHARP_){return clustermap.formats.time.format_date(p1__45762_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1442,"Employees",(function (p1__45763_SHARP_){return clustermap.formats.number.readable.cljs$core$IFn$_invoke$arity$variadic(p1__45763_SHARP_,cljs.core.array_seq([cljs.core.constant$keyword$1130,(0)], 0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1445,"Turnover",(function (p1__45764_SHARP_){return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(p1__45764_SHARP_,cljs.core.array_seq([cljs.core.constant$keyword$1128,(3),cljs.core.constant$keyword$1245,""], 0));
})], null)], null)], null),cljs.core.constant$keyword$1280,null], null),cljs.core.constant$keyword$1568,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1248,cljs.core.constant$keyword$1569,"company_accounts",cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1133,"company-accounts",cljs.core.constant$keyword$1268,"accounts",cljs.core.constant$keyword$1123,"?accounts_date",cljs.core.constant$keyword$1269,"!turnover",cljs.core.constant$keyword$1126,"year"], null),cljs.core.constant$keyword$1270,null], null),cljs.core.constant$keyword$1437,cljs.core.constant$keyword$1169], null);
clustermap.app.components = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1156,cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1575,clustermap.components.map.map_component,cljs.core.constant$keyword$1205,"map-component",cljs.core.constant$keyword$1512,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1547,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169], null),cljs.core.constant$keyword$1115,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1122,cljs.core.constant$keyword$1272], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1156,cljs.core.constant$keyword$1446,cljs.core.constant$keyword$1575,clustermap.components.map_report.map_report_component,cljs.core.constant$keyword$1205,"map-report-component",cljs.core.constant$keyword$1512,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1122], null),cljs.core.constant$keyword$1450,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1267], null),cljs.core.constant$keyword$1446,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1446], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1156,cljs.core.constant$keyword$1439,cljs.core.constant$keyword$1575,clustermap.components.filter.filter_component,cljs.core.constant$keyword$1205,"search-component",cljs.core.constant$keyword$1512,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1122], null),cljs.core.constant$keyword$1114,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1114], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1156,cljs.core.constant$keyword$1576,cljs.core.constant$keyword$1575,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Variable",cljs.core.constant$keyword$1563,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null)),cljs.core.constant$keyword$1205,"variable-selection-component",cljs.core.constant$keyword$1512,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1551], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1156,cljs.core.constant$keyword$1577,cljs.core.constant$keyword$1575,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Statistic",cljs.core.constant$keyword$1563,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null)),cljs.core.constant$keyword$1205,"stat-selection-component",cljs.core.constant$keyword$1512,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1552], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1156,cljs.core.constant$keyword$1578,cljs.core.constant$keyword$1575,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Scale",cljs.core.constant$keyword$1565,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null)),cljs.core.constant$keyword$1205,"scale-selection-component",cljs.core.constant$keyword$1512,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1552], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1156,cljs.core.constant$keyword$1567,cljs.core.constant$keyword$1575,clustermap.components.table.table_component,cljs.core.constant$keyword$1205,"full-report-table",cljs.core.constant$keyword$1512,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1291,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1567], null),cljs.core.constant$keyword$1122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1122], null),cljs.core.constant$keyword$1114,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1114], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1156,cljs.core.constant$keyword$1568,cljs.core.constant$keyword$1575,clustermap.components.timeline_chart.timeline_chart,cljs.core.constant$keyword$1205,"turnover-timeline",cljs.core.constant$keyword$1512,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1266,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1568], null),cljs.core.constant$keyword$1122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1122], null),cljs.core.constant$keyword$1114,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1114], null)], null)], null)], null);
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__45767){var vec__45768 = p__45767;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45768,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45768,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__45768,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__45768,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (state,p__45769){var map__45771 = p__45769;var map__45771__$1 = ((cljs.core.seq_QMARK_(map__45771))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45771):map__45771);var path_values = map__45771__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,clustermap.app.new_state,path_values);
};
var set_state = function (state,var_args){
var p__45769 = null;if (arguments.length > 1) {
  p__45769 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_state__delegate.call(this,state,p__45769);};
set_state.cljs$lang$maxFixedArity = 1;
set_state.cljs$lang$applyTo = (function (arglist__45772){
var state = cljs.core.first(arglist__45772);
var p__45769 = cljs.core.rest(arglist__45772);
return set_state__delegate(state,p__45769);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
/**
* @param {...*} var_args
*/
clustermap.app.get_state = (function() { 
var get_state__delegate = function (state,path){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.flatten(path));
};
var get_state = function (state,var_args){
var path = null;if (arguments.length > 1) {
  path = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get_state__delegate.call(this,state,path);};
get_state.cljs$lang$maxFixedArity = 1;
get_state.cljs$lang$applyTo = (function (arglist__45773){
var state = cljs.core.first(arglist__45773);
var path = cljs.core.rest(arglist__45773);
return get_state__delegate(state,path);
});
get_state.cljs$core$IFn$_invoke$arity$variadic = get_state__delegate;
return get_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_counties","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(state){var seq__45778 = cljs.core.seq(clustermap.app.bl_collections);var chunk__45779 = null;var count__45780 = (0);var i__45781 = (0);while(true){
if((i__45781 < count__45780))
{var blcoll = chunk__45779.cljs$core$IIndexed$_nth$arity$2(null,i__45781);clustermap.boundarylines.fetch_boundaryline_collection_index(state,cljs.core.constant$keyword$1132,blcoll);
{
var G__45782 = seq__45778;
var G__45783 = chunk__45779;
var G__45784 = count__45780;
var G__45785 = (i__45781 + (1));
seq__45778 = G__45782;
chunk__45779 = G__45783;
count__45780 = G__45784;
i__45781 = G__45785;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__45778);if(temp__4126__auto__)
{var seq__45778__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__45778__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__45778__$1);{
var G__45786 = cljs.core.chunk_rest(seq__45778__$1);
var G__45787 = c__4314__auto__;
var G__45788 = cljs.core.count(c__4314__auto__);
var G__45789 = (0);
seq__45778 = G__45786;
chunk__45779 = G__45787;
count__45780 = G__45788;
i__45781 = G__45789;
continue;
}
} else
{var blcoll = cljs.core.first(seq__45778__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(state,cljs.core.constant$keyword$1132,blcoll);
{
var G__45790 = cljs.core.next(seq__45778__$1);
var G__45791 = null;
var G__45792 = (0);
var G__45793 = (0);
seq__45778 = G__45790;
chunk__45779 = G__45791;
count__45780 = G__45792;
i__45781 = G__45793;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.app.change_view = (function change_view(state,view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$1437.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.array_seq([cljs.core.constant$keyword$1437,view__$1], 0));
return clustermap.nav.change_view(cljs.core.name(view__$1));
} else
{return null;
}
});
clustermap.app.set_route = (function set_route(history,view,type,id){if(cljs.core.truth_((function (){var and__3546__auto__ = type;if(cljs.core.truth_(and__3546__auto__))
{return id;
} else
{return and__3546__auto__;
}
})()))
{return history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name((function (){var or__3558__auto__ = view;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "map";
}
})()))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(type))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))));
} else
{if(cljs.core.truth_(view))
{return history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(view))));
} else
{return history.setToken((""));

}
}
});
clustermap.app.parse_route = (function parse_route(history){var fragment = history.getToken();var vec__45797 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45797,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45797,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45797,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45797,(3),null);var type__$1 = ((((function (){var G__45798 = type;var G__45798__$1 = (((G__45798 == null))?null:clojure.string.trim(G__45798));var G__45798__$2 = (((G__45798__$1 == null))?null:cljs.core.count(G__45798__$1));return G__45798__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__45799 = id;var G__45799__$1 = (((G__45799 == null))?null:clojure.string.trim(G__45799));var G__45799__$2 = (((G__45799__$1 == null))?null:cljs.core.count(G__45799__$1));return G__45799__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1437,view,cljs.core.constant$keyword$1135,type__$1,cljs.core.constant$keyword$1137,id__$1], null);
});
clustermap.app.set_view_route = (function set_view_route(history,view){var map__45801 = clustermap.app.parse_route(history);var map__45801__$1 = ((cljs.core.seq_QMARK_(map__45801))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45801):map__45801);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45801__$1,cljs.core.constant$keyword$1137);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45801__$1,cljs.core.constant$keyword$1135);return clustermap.app.set_route(history,view,type,id);
});
clustermap.app.create_event_handlers_map = (function create_event_handlers_map(state,history){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1521,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.app.set_view_route,history),cljs.core.constant$keyword$1579,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.app.change_view,state),cljs.core.constant$keyword$1229,(function (t,v){return console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [":select (ignored)",t,v], null)));
})], null);
});
clustermap.app.choose_event_handler = (function choose_event_handler(event_handlers_map,type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(event_handlers_map,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(history,comm){var action__9531__auto___45818 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45810 = params__9532__auto__;var map__45810__$1 = ((cljs.core.seq_QMARK_(map__45810))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45810):map__45810);return null;
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45811 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9531__auto___45818);
var action__9531__auto___45819 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45812 = params__9532__auto__;var map__45812__$1 = ((cljs.core.seq_QMARK_(map__45812))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45812):map__45812);return null;
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45813 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9531__auto___45819);
var action__9531__auto___45820 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45814 = params__9532__auto__;var map__45814__$1 = ((cljs.core.seq_QMARK_(map__45814))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45814):map__45814);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45814__$1,cljs.core.constant$keyword$1437);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1579,view], null));
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45815 = params__9532__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45815,(0),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1579,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9531__auto___45820);
var action__9531__auto___45821 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45816 = params__9532__auto__;var map__45816__$1 = ((cljs.core.seq_QMARK_(map__45816))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45816):map__45816);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45816__$1,cljs.core.constant$keyword$1137);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45816__$1,cljs.core.constant$keyword$1135);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45816__$1,cljs.core.constant$keyword$1437);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1579,view], null));
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45817 = params__9532__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45817,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45817,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45817,(2),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1579,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9531__auto___45821);
goog.events.listen(history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;return secretary.core.dispatch_BANG_(token);
}));
return history.setEnabled(true);
});
clustermap.app.history_STAR_ = (new goog.History());
clustermap.app.create_app_instance = (function create_app_instance(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(clustermap.app.initial_state) : cljs.core.atom.call(null,clustermap.app.initial_state));var event_handlers_map = clustermap.app.create_event_handlers_map(state,clustermap.app.history_STAR_);var handle_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.app.choose_event_handler,event_handlers_map);if(typeof clustermap.app.t45868 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t45868 = (function (handle_event,event_handlers_map,state,comm,create_app_instance,meta45869){
this.handle_event = handle_event;
this.event_handlers_map = event_handlers_map;
this.state = state;
this.comm = comm;
this.create_app_instance = create_app_instance;
this.meta45869 = meta45869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t45868.cljs$lang$type = true;
clustermap.app.t45868.cljs$lang$ctorStr = "clustermap.app/t45868";
clustermap.app.t45868.cljs$lang$ctorPrWriter = ((function (comm,state,event_handlers_map,handle_event){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.app/t45868");
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.t45868.prototype.clustermap$app$IApp$ = true;
clustermap.app.t45868.prototype.clustermap$app$IApp$start$arity$1 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_){var self__ = this;
var ___$1 = this;var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1385,self__.comm,cljs.core.constant$keyword$1374,path_fn,cljs.core.constant$keyword$1375,link_fn,cljs.core.constant$keyword$1452,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.app.parse_route,clustermap.app.history_STAR_)),cljs.core.constant$keyword$1560,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundarylines,self__.state,cljs.core.constant$keyword$1132),cljs.core.constant$keyword$1559,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,self__.state,cljs.core.constant$keyword$1132,cljs.core.constant$keyword$1580)], null);clustermap.nav.init(self__.comm);
clustermap.app.init_routes(clustermap.app.history_STAR_,self__.comm);
clustermap.app.load_boundaryline_collection_indexes(self__.state);
var seq__45871_45914 = cljs.core.seq(clustermap.app.components);var chunk__45872_45915 = null;var count__45873_45916 = (0);var i__45874_45917 = (0);while(true){
if((i__45874_45917 < count__45873_45916))
{var map__45875_45918 = chunk__45872_45915.cljs$core$IIndexed$_nth$arity$2(null,i__45874_45917);var map__45875_45919__$1 = ((cljs.core.seq_QMARK_(map__45875_45918))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45875_45918):map__45875_45918);var paths_45920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45875_45919__$1,cljs.core.constant$keyword$1512);var target_45921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45875_45919__$1,cljs.core.constant$keyword$1205);var f_45922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45875_45919__$1,cljs.core.constant$keyword$1575);var name_45923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45875_45919__$1,cljs.core.constant$keyword$1156);console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_45923,f_45922,target_45921,paths_45920], null)));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(name_45923,f_45922,self__.state,cljs.core.array_seq([cljs.core.constant$keyword$1205,target_45921,cljs.core.constant$keyword$1202,shared,cljs.core.constant$keyword$1512,paths_45920], 0));
{
var G__45924 = seq__45871_45914;
var G__45925 = chunk__45872_45915;
var G__45926 = count__45873_45916;
var G__45927 = (i__45874_45917 + (1));
seq__45871_45914 = G__45924;
chunk__45872_45915 = G__45925;
count__45873_45916 = G__45926;
i__45874_45917 = G__45927;
continue;
}
} else
{var temp__4126__auto___45928 = cljs.core.seq(seq__45871_45914);if(temp__4126__auto___45928)
{var seq__45871_45929__$1 = temp__4126__auto___45928;if(cljs.core.chunked_seq_QMARK_(seq__45871_45929__$1))
{var c__4314__auto___45930 = cljs.core.chunk_first(seq__45871_45929__$1);{
var G__45931 = cljs.core.chunk_rest(seq__45871_45929__$1);
var G__45932 = c__4314__auto___45930;
var G__45933 = cljs.core.count(c__4314__auto___45930);
var G__45934 = (0);
seq__45871_45914 = G__45931;
chunk__45872_45915 = G__45932;
count__45873_45916 = G__45933;
i__45874_45917 = G__45934;
continue;
}
} else
{var map__45876_45935 = cljs.core.first(seq__45871_45929__$1);var map__45876_45936__$1 = ((cljs.core.seq_QMARK_(map__45876_45935))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45876_45935):map__45876_45935);var paths_45937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45876_45936__$1,cljs.core.constant$keyword$1512);var target_45938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45876_45936__$1,cljs.core.constant$keyword$1205);var f_45939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45876_45936__$1,cljs.core.constant$keyword$1575);var name_45940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45876_45936__$1,cljs.core.constant$keyword$1156);console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_45940,f_45939,target_45938,paths_45937], null)));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(name_45940,f_45939,self__.state,cljs.core.array_seq([cljs.core.constant$keyword$1205,target_45938,cljs.core.constant$keyword$1202,shared,cljs.core.constant$keyword$1512,paths_45937], 0));
{
var G__45941 = cljs.core.next(seq__45871_45929__$1);
var G__45942 = null;
var G__45943 = (0);
var G__45944 = (0);
seq__45871_45914 = G__45941;
chunk__45872_45915 = G__45942;
count__45873_45916 = G__45943;
i__45874_45917 = G__45944;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event){
return (function (state_45892){var state_val_45893 = (state_45892[(1)]);if((state_val_45893 === (7)))
{var inst_45881 = (state_45892[(2)]);var inst_45882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45881,(0),null);var inst_45883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45881,(1),null);var inst_45884 = (self__.handle_event.cljs$core$IFn$_invoke$arity$2 ? self__.handle_event.cljs$core$IFn$_invoke$arity$2(inst_45882,inst_45883) : self__.handle_event.call(null,inst_45882,inst_45883));var state_45892__$1 = (function (){var statearr_45894 = state_45892;(statearr_45894[(7)] = inst_45884);
return statearr_45894;
})();var statearr_45895_45945 = state_45892__$1;(statearr_45895_45945[(2)] = null);
(statearr_45895_45945[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_45893 === (6)))
{var inst_45888 = (state_45892[(2)]);var state_45892__$1 = state_45892;var statearr_45896_45946 = state_45892__$1;(statearr_45896_45946[(2)] = inst_45888);
(statearr_45896_45946[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_45893 === (5)))
{var state_45892__$1 = state_45892;var statearr_45897_45947 = state_45892__$1;(statearr_45897_45947[(2)] = null);
(statearr_45897_45947[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_45893 === (4)))
{var state_45892__$1 = state_45892;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45892__$1,(7),self__.comm);
} else
{if((state_val_45893 === (3)))
{var inst_45890 = (state_45892[(2)]);var state_45892__$1 = state_45892;return cljs.core.async.impl.ioc_helpers.return_chan(state_45892__$1,inst_45890);
} else
{if((state_val_45893 === (2)))
{var state_45892__$1 = state_45892;var statearr_45898_45948 = state_45892__$1;(statearr_45898_45948[(1)] = (4));

return cljs.core.constant$keyword$1094;
} else
{if((state_val_45893 === (1)))
{var state_45892__$1 = state_45892;var statearr_45900_45949 = state_45892__$1;(statearr_45900_45949[(2)] = null);
(statearr_45900_45949[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5708__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event))
;return ((function (switch__5693__auto__,c__5708__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45904 = [null,null,null,null,null,null,null,null];(statearr_45904[(0)] = state_machine__5694__auto__);
(statearr_45904[(1)] = (1));
return statearr_45904;
});
var state_machine__5694__auto____1 = (function (state_45892){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45892);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45905){if((e45905 instanceof Object))
{var ex__5697__auto__ = e45905;var statearr_45906_45950 = state_45892;(statearr_45906_45950[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45892);
return cljs.core.constant$keyword$1094;
} else
{throw e45905;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__45951 = state_45892;
state_45892 = G__45951;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45892){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event))
})();var state__5710__auto__ = (function (){var statearr_45907 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_45907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,path_fn,link_fn,shared,___$1,comm,state,event_handlers_map,handle_event))
);
return c__5708__auto__;
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.t45868.prototype.clustermap$app$IApp$stop$arity$1 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_){var self__ = this;
var ___$1 = this;clustermap.app.history_STAR_.removeAllListeners();
secretary.core.reset_routes_BANG_();
var seq__45908 = cljs.core.seq(clustermap.app.components);var chunk__45909 = null;var count__45910 = (0);var i__45911 = (0);while(true){
if((i__45911 < count__45910))
{var map__45912 = chunk__45909.cljs$core$IIndexed$_nth$arity$2(null,i__45911);var map__45912__$1 = ((cljs.core.seq_QMARK_(map__45912))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45912):map__45912);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45912__$1,cljs.core.constant$keyword$1205);clustermap.components.mount.unmount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target], 0));
{
var G__45952 = seq__45908;
var G__45953 = chunk__45909;
var G__45954 = count__45910;
var G__45955 = (i__45911 + (1));
seq__45908 = G__45952;
chunk__45909 = G__45953;
count__45910 = G__45954;
i__45911 = G__45955;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__45908);if(temp__4126__auto__)
{var seq__45908__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__45908__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__45908__$1);{
var G__45956 = cljs.core.chunk_rest(seq__45908__$1);
var G__45957 = c__4314__auto__;
var G__45958 = cljs.core.count(c__4314__auto__);
var G__45959 = (0);
seq__45908 = G__45956;
chunk__45909 = G__45957;
count__45910 = G__45958;
i__45911 = G__45959;
continue;
}
} else
{var map__45913 = cljs.core.first(seq__45908__$1);var map__45913__$1 = ((cljs.core.seq_QMARK_(map__45913))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45913):map__45913);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45913__$1,cljs.core.constant$keyword$1205);clustermap.components.mount.unmount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target], 0));
{
var G__45960 = cljs.core.next(seq__45908__$1);
var G__45961 = null;
var G__45962 = (0);
var G__45963 = (0);
seq__45908 = G__45960;
chunk__45909 = G__45961;
count__45910 = G__45962;
i__45911 = G__45963;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.t45868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_45870){var self__ = this;
var _45870__$1 = this;return self__.meta45869;
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.t45868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,state,event_handlers_map,handle_event){
return (function (_45870,meta45869__$1){var self__ = this;
var _45870__$1 = this;return (new clustermap.app.t45868(self__.handle_event,self__.event_handlers_map,self__.state,self__.comm,self__.create_app_instance,meta45869__$1));
});})(comm,state,event_handlers_map,handle_event))
;
clustermap.app.__GT_t45868 = ((function (comm,state,event_handlers_map,handle_event){
return (function __GT_t45868(handle_event__$1,event_handlers_map__$1,state__$1,comm__$1,create_app_instance__$1,meta45869){return (new clustermap.app.t45868(handle_event__$1,event_handlers_map__$1,state__$1,comm__$1,create_app_instance__$1,meta45869));
});})(comm,state,event_handlers_map,handle_event))
;
}
return (new clustermap.app.t45868(handle_event,event_handlers_map,state,comm,create_app_instance,null));
});
clustermap.app.app_instance = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
clustermap.app.start_or_restart_app = (function start_or_restart_app(){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.app_instance,(function (app){if(cljs.core.truth_(app))
{clustermap.app.stop(app);
} else
{}
var new_app = clustermap.app.create_app_instance();new_app.clustermap$app$IApp$start$arity$1(null);
return new_app;
}));
});
