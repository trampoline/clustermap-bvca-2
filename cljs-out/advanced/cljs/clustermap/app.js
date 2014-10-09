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
clustermap.app.state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1132,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1131,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1133,null,cljs.core.constant$keyword$1134,null,cljs.core.constant$keyword$1132,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1133,null,cljs.core.constant$keyword$1134,null,cljs.core.constant$keyword$1132,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1133,null,cljs.core.constant$keyword$1134,null,cljs.core.constant$keyword$1132,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$1132,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.constant$keyword$1122,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1499,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1271,false,cljs.core.constant$keyword$1114,null,cljs.core.constant$keyword$1272,null], null),cljs.core.constant$keyword$1169,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1566,cljs.core.constant$keyword$1565,"companies",cljs.core.constant$keyword$1545,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1551,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1550,null,cljs.core.constant$keyword$1114,null,cljs.core.constant$keyword$1549,null,cljs.core.constant$keyword$1547,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1249,cljs.core.constant$keyword$1133,"companies",cljs.core.constant$keyword$1268,"company",cljs.core.constant$keyword$1168,"boundaryline_id",cljs.core.constant$keyword$1559,"!latest_employee_count"], null),cljs.core.constant$keyword$1548,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1560,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1480,cljs.core.constant$keyword$1494], null),cljs.core.constant$keyword$1561,cljs.core.constant$keyword$1498,cljs.core.constant$keyword$1559,cljs.core.constant$keyword$1443], null)], null),cljs.core.constant$keyword$1240,null], null),cljs.core.constant$keyword$1446,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1447,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1133,"companies",cljs.core.constant$keyword$1268,"company",cljs.core.constant$keyword$1448,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null)], null)], null),cljs.core.constant$keyword$1447,null], null),cljs.core.constant$keyword$1563,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1563,cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1133,"companies",cljs.core.constant$keyword$1268,"company",cljs.core.constant$keyword$1274,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1445,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1275,"desc"], null)], null),cljs.core.constant$keyword$1120,(0),cljs.core.constant$keyword$1121,(50),cljs.core.constant$keyword$1286,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1567,"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1568,"Postcode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1569,"Formation date",(function (p1__45722_SHARP_){return clustermap.formats.time.format_date(p1__45722_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1570,"Filing date",(function (p1__45723_SHARP_){return clustermap.formats.time.format_date(p1__45723_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1442,"Employees",(function (p1__45724_SHARP_){return clustermap.formats.number.readable.cljs$core$IFn$_invoke$arity$variadic(p1__45724_SHARP_,cljs.core.array_seq([cljs.core.constant$keyword$1130,(0)], 0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1445,"Turnover",(function (p1__45725_SHARP_){return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(p1__45725_SHARP_,cljs.core.array_seq([cljs.core.constant$keyword$1128,(3),cljs.core.constant$keyword$1245,""], 0));
})], null)], null)], null),cljs.core.constant$keyword$1280,null], null),cljs.core.constant$keyword$1564,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1248,cljs.core.constant$keyword$1565,"company_accounts",cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1133,"company-accounts",cljs.core.constant$keyword$1268,"accounts",cljs.core.constant$keyword$1123,"?accounts_date",cljs.core.constant$keyword$1269,"!turnover",cljs.core.constant$keyword$1126,"year"], null),cljs.core.constant$keyword$1270,null], null),cljs.core.constant$keyword$1437,cljs.core.constant$keyword$1169], null)) : cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1132,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1131,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1133,null,cljs.core.constant$keyword$1134,null,cljs.core.constant$keyword$1132,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1133,null,cljs.core.constant$keyword$1134,null,cljs.core.constant$keyword$1132,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1133,null,cljs.core.constant$keyword$1134,null,cljs.core.constant$keyword$1132,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$1132,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.constant$keyword$1122,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1499,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1271,false,cljs.core.constant$keyword$1114,null,cljs.core.constant$keyword$1272,null], null),cljs.core.constant$keyword$1169,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1566,cljs.core.constant$keyword$1565,"companies",cljs.core.constant$keyword$1545,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1551,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1550,null,cljs.core.constant$keyword$1114,null,cljs.core.constant$keyword$1549,null,cljs.core.constant$keyword$1547,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1249,cljs.core.constant$keyword$1133,"companies",cljs.core.constant$keyword$1268,"company",cljs.core.constant$keyword$1168,"boundaryline_id",cljs.core.constant$keyword$1559,"!latest_employee_count"], null),cljs.core.constant$keyword$1548,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1560,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1480,cljs.core.constant$keyword$1494], null),cljs.core.constant$keyword$1561,cljs.core.constant$keyword$1498,cljs.core.constant$keyword$1559,cljs.core.constant$keyword$1443], null)], null),cljs.core.constant$keyword$1240,null], null),cljs.core.constant$keyword$1446,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1447,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1133,"companies",cljs.core.constant$keyword$1268,"company",cljs.core.constant$keyword$1448,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null)], null)], null),cljs.core.constant$keyword$1447,null], null),cljs.core.constant$keyword$1563,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1563,cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1133,"companies",cljs.core.constant$keyword$1268,"company",cljs.core.constant$keyword$1274,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1445,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1275,"desc"], null)], null),cljs.core.constant$keyword$1120,(0),cljs.core.constant$keyword$1121,(50),cljs.core.constant$keyword$1286,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1567,"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1568,"Postcode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1569,"Formation date",(function (p1__45722_SHARP_){return clustermap.formats.time.format_date(p1__45722_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1570,"Filing date",(function (p1__45723_SHARP_){return clustermap.formats.time.format_date(p1__45723_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1442,"Employees",(function (p1__45724_SHARP_){return clustermap.formats.number.readable.cljs$core$IFn$_invoke$arity$variadic(p1__45724_SHARP_,cljs.core.array_seq([cljs.core.constant$keyword$1130,(0)], 0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1445,"Turnover",(function (p1__45725_SHARP_){return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(p1__45725_SHARP_,cljs.core.array_seq([cljs.core.constant$keyword$1128,(3),cljs.core.constant$keyword$1245,""], 0));
})], null)], null)], null),cljs.core.constant$keyword$1280,null], null),cljs.core.constant$keyword$1564,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1248,cljs.core.constant$keyword$1565,"company_accounts",cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1133,"company-accounts",cljs.core.constant$keyword$1268,"accounts",cljs.core.constant$keyword$1123,"?accounts_date",cljs.core.constant$keyword$1269,"!turnover",cljs.core.constant$keyword$1126,"year"], null),cljs.core.constant$keyword$1270,null], null),cljs.core.constant$keyword$1437,cljs.core.constant$keyword$1169], null)));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__45728){var vec__45729 = p__45728;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45729,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45729,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__45729,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__45729,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__45730){var map__45732 = p__45730;var map__45732__$1 = ((cljs.core.seq_QMARK_(map__45732))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45732):map__45732);var path_values = map__45732__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__45730 = null;if (arguments.length > 0) {
  p__45730 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__45730);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__45733){
var p__45730 = cljs.core.seq(arglist__45733);
return set_state__delegate(p__45730);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
/**
* @param {...*} var_args
*/
clustermap.app.get_state = (function() { 
var get_state__delegate = function (path){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state)),cljs.core.flatten(path));
};
var get_state = function (var_args){
var path = null;if (arguments.length > 0) {
  path = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return get_state__delegate.call(this,path);};
get_state.cljs$lang$maxFixedArity = 0;
get_state.cljs$lang$applyTo = (function (arglist__45734){
var path = cljs.core.seq(arglist__45734);
return get_state__delegate(path);
});
get_state.cljs$core$IFn$_invoke$arity$variadic = get_state__delegate;
return get_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__45739 = cljs.core.seq(clustermap.app.bl_collections);var chunk__45740 = null;var count__45741 = (0);var i__45742 = (0);while(true){
if((i__45742 < count__45741))
{var blcoll = chunk__45740.cljs$core$IIndexed$_nth$arity$2(null,i__45742);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$1132,blcoll);
{
var G__45743 = seq__45739;
var G__45744 = chunk__45740;
var G__45745 = count__45741;
var G__45746 = (i__45742 + (1));
seq__45739 = G__45743;
chunk__45740 = G__45744;
count__45741 = G__45745;
i__45742 = G__45746;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__45739);if(temp__4126__auto__)
{var seq__45739__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__45739__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__45739__$1);{
var G__45747 = cljs.core.chunk_rest(seq__45739__$1);
var G__45748 = c__4314__auto__;
var G__45749 = cljs.core.count(c__4314__auto__);
var G__45750 = (0);
seq__45739 = G__45747;
chunk__45740 = G__45748;
count__45741 = G__45749;
i__45742 = G__45750;
continue;
}
} else
{var blcoll = cljs.core.first(seq__45739__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$1132,blcoll);
{
var G__45751 = cljs.core.next(seq__45739__$1);
var G__45752 = null;
var G__45753 = (0);
var G__45754 = (0);
seq__45739 = G__45751;
chunk__45740 = G__45752;
count__45741 = G__45753;
i__45742 = G__45754;
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
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_45774){var state_val_45775 = (state_45774[(1)]);if((state_val_45775 === (2)))
{var inst_45771 = (state_45774[(2)]);var inst_45772 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1414,inst_45771], 0));var state_45774__$1 = state_45774;return cljs.core.async.impl.ioc_helpers.return_chan(state_45774__$1,inst_45772);
} else
{if((state_val_45775 === (1)))
{var inst_45769 = (clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$0 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$0() : clustermap.api.investment_stats.call(null));var state_45774__$1 = state_45774;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45774__$1,(2),inst_45769);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45779 = [null,null,null,null,null,null,null];(statearr_45779[(0)] = state_machine__5694__auto__);
(statearr_45779[(1)] = (1));
return statearr_45779;
});
var state_machine__5694__auto____1 = (function (state_45774){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45774);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45780){if((e45780 instanceof Object))
{var ex__5697__auto__ = e45780;var statearr_45781_45783 = state_45774;(statearr_45781_45783[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45774);
return cljs.core.constant$keyword$1094;
} else
{throw e45780;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__45784 = state_45774;
state_45774 = G__45784;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45774){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_45782 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_45782;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1438,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__45785,type){var vec__45787 = p__45785;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45787,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45787,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45787,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45787,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45787,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45787,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1409,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1135,type,cljs.core.constant$keyword$1147,selection], null),cljs.core.constant$keyword$1413,selection_investment_stats,cljs.core.constant$keyword$1400,selection_investment_account_timelines,cljs.core.constant$keyword$1434,selection_investment_aggs,cljs.core.constant$keyword$1433,selection_investments,cljs.core.constant$keyword$1571], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__45788){var vec__45793 = p__45788;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45793,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45793,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$1431.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state)));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1431,selector], 0));
var pred__45794 = cljs.core._EQ_;var expr__45795 = type;if(cljs.core.truth_((pred__45794.cljs$core$IFn$_invoke$arity$2 ? pred__45794.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1376,expr__45795) : pred__45794.call(null,cljs.core.constant$keyword$1376,expr__45795))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(clustermap.api.portfolio_company.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.portfolio_company.cljs$core$IFn$_invoke$arity$1(id) : clustermap.api.portfolio_company.call(null,id)),(clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_stats.call(null,selector)),(clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_account_timelines.call(null,selector)),(clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_aggs.call(null,selector)),(clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investments.call(null,selector)),(clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.portfolio_company_locations.call(null,selector))], null),type], null);
} else
{if(cljs.core.truth_((pred__45794.cljs$core$IFn$_invoke$arity$2 ? pred__45794.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1377,expr__45795) : pred__45794.call(null,cljs.core.constant$keyword$1377,expr__45795))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(clustermap.api.investor_company.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investor_company.cljs$core$IFn$_invoke$arity$1(id) : clustermap.api.investor_company.call(null,id)),(clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_stats.call(null,selector)),(clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_account_timelines.call(null,selector)),(clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_aggs.call(null,selector)),(clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investments.call(null,selector)),(clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.portfolio_company_locations.call(null,selector))], null),type], null);
} else
{if(cljs.core.truth_((pred__45794.cljs$core$IFn$_invoke$arity$2 ? pred__45794.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1379,expr__45795) : pred__45794.call(null,cljs.core.constant$keyword$1379,expr__45795))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(clustermap.api.constituency.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.constituency.cljs$core$IFn$_invoke$arity$1(id) : clustermap.api.constituency.call(null,id)),(clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_stats.call(null,selector)),(clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_account_timelines.call(null,selector)),(clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_aggs.call(null,selector)),(clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investments.call(null,selector)),(clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.portfolio_company_locations.call(null,selector))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_stats.call(null,selector)),(clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_account_timelines.call(null,selector)),(clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_aggs.call(null,selector)),(clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investments.call(null,selector)),null], null),type], null);
}
}
}
} else
{return null;
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$1437.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state)))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1437,view__$1], 0));
return clustermap.nav.change_view(cljs.core.name(view__$1));
} else
{return null;
}
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3546__auto__ = type;if(cljs.core.truth_(and__3546__auto__))
{return id;
} else
{return and__3546__auto__;
}
})()))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name((function (){var or__3558__auto__ = view;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "map";
}
})()))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(type))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))));
} else
{if(cljs.core.truth_(view))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(view))));
} else
{return clustermap.app.history.setToken((""));

}
}
});
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__45800 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45800,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45800,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45800,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45800,(3),null);var type__$1 = ((((function (){var G__45801 = type;var G__45801__$1 = (((G__45801 == null))?null:clojure.string.trim(G__45801));var G__45801__$2 = (((G__45801__$1 == null))?null:cljs.core.count(G__45801__$1));return G__45801__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__45802 = id;var G__45802__$1 = (((G__45802 == null))?null:clojure.string.trim(G__45802));var G__45802__$2 = (((G__45802__$1 == null))?null:cljs.core.count(G__45802__$1));return G__45802__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1437,view,cljs.core.constant$keyword$1135,type__$1,cljs.core.constant$keyword$1137,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__45803){var vec__45806 = p__45803;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45806,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45806,(1),null);var map__45807 = clustermap.app.parse_route();var map__45807__$1 = ((cljs.core.seq_QMARK_(map__45807))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45807):map__45807);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45807__$1,cljs.core.constant$keyword$1437);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__45809 = clustermap.app.parse_route();var map__45809__$1 = ((cljs.core.seq_QMARK_(map__45809))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45809):map__45809);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45809__$1,cljs.core.constant$keyword$1137);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45809__$1,cljs.core.constant$keyword$1135);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_45842){var state_val_45843 = (state_45842[(1)]);if((state_val_45843 === (2)))
{var inst_45833 = (state_45842[(7)]);var inst_45839 = (state_45842[(2)]);var inst_45840 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1572,inst_45833,cljs.core.constant$keyword$1434,inst_45839], 0));var state_45842__$1 = state_45842;return cljs.core.async.impl.ioc_helpers.return_chan(state_45842__$1,inst_45840);
} else
{if((state_val_45843 === (1)))
{var inst_45833 = (state_45842[(7)]);var inst_45831 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_45832 = cljs.core.constant$keyword$1572.cljs$core$IFn$_invoke$arity$1(inst_45831);var inst_45833__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_45832,table_view], 0));var inst_45834 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_45835 = cljs.core.constant$keyword$1431.cljs$core$IFn$_invoke$arity$1(inst_45834);var inst_45836 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_45835,inst_45833__$1], 0));var inst_45837 = (clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(inst_45836) : clustermap.api.investment_aggs.call(null,inst_45836));var state_45842__$1 = (function (){var statearr_45844 = state_45842;(statearr_45844[(7)] = inst_45833__$1);
return statearr_45844;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45842__$1,(2),inst_45837);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45848 = [null,null,null,null,null,null,null,null];(statearr_45848[(0)] = state_machine__5694__auto__);
(statearr_45848[(1)] = (1));
return statearr_45848;
});
var state_machine__5694__auto____1 = (function (state_45842){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45842);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45849){if((e45849 instanceof Object))
{var ex__5697__auto__ = e45849;var statearr_45850_45852 = state_45842;(statearr_45850_45852[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45842);
return cljs.core.constant$keyword$1094;
} else
{throw e45849;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__45853 = state_45842;
state_45842 = G__45853;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45842){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_45851 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_45851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_45886){var state_val_45887 = (state_45886[(1)]);if((state_val_45887 === (2)))
{var inst_45877 = (state_45886[(7)]);var inst_45883 = (state_45886[(2)]);var inst_45884 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1573,inst_45877,cljs.core.constant$keyword$1433,inst_45883], 0));var state_45886__$1 = state_45886;return cljs.core.async.impl.ioc_helpers.return_chan(state_45886__$1,inst_45884);
} else
{if((state_val_45887 === (1)))
{var inst_45877 = (state_45886[(7)]);var inst_45875 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_45876 = cljs.core.constant$keyword$1573.cljs$core$IFn$_invoke$arity$1(inst_45875);var inst_45877__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_45876,table_view], 0));var inst_45878 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_45879 = cljs.core.constant$keyword$1431.cljs$core$IFn$_invoke$arity$1(inst_45878);var inst_45880 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_45879,inst_45877__$1], 0));var inst_45881 = (clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(inst_45880) : clustermap.api.investments.call(null,inst_45880));var state_45886__$1 = (function (){var statearr_45888 = state_45886;(statearr_45888[(7)] = inst_45877__$1);
return statearr_45888;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45886__$1,(2),inst_45881);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45892 = [null,null,null,null,null,null,null,null];(statearr_45892[(0)] = state_machine__5694__auto__);
(statearr_45892[(1)] = (1));
return statearr_45892;
});
var state_machine__5694__auto____1 = (function (state_45886){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45886);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45893){if((e45893 instanceof Object))
{var ex__5697__auto__ = e45893;var statearr_45894_45896 = state_45886;(statearr_45894_45896[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45886);
return cljs.core.constant$keyword$1094;
} else
{throw e45893;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__45897 = state_45886;
state_45886 = G__45897;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45886){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_45895 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_45895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1439,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$1229,clustermap.app.set_selection_route,cljs.core.constant$keyword$1574,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$1517,clustermap.app.set_view_route,cljs.core.constant$keyword$1575,clustermap.app.change_view,cljs.core.constant$keyword$1386,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$1394,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9531__auto___45914 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45906 = params__9532__auto__;var map__45906__$1 = ((cljs.core.seq_QMARK_(map__45906))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45906):map__45906);return null;
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45907 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9531__auto___45914);
var action__9531__auto___45915 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45908 = params__9532__auto__;var map__45908__$1 = ((cljs.core.seq_QMARK_(map__45908))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45908):map__45908);return null;
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45909 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9531__auto___45915);
var action__9531__auto___45916 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45910 = params__9532__auto__;var map__45910__$1 = ((cljs.core.seq_QMARK_(map__45910))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45910):map__45910);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45910__$1,cljs.core.constant$keyword$1437);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1575,view], null));
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45911 = params__9532__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45911,(0),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1575,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9531__auto___45916);
var action__9531__auto___45917 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__45912 = params__9532__auto__;var map__45912__$1 = ((cljs.core.seq_QMARK_(map__45912))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45912):map__45912);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45912__$1,cljs.core.constant$keyword$1137);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45912__$1,cljs.core.constant$keyword$1135);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45912__$1,cljs.core.constant$keyword$1437);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1575,view], null));
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__45913 = params__9532__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45913,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45913,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45913,(2),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1575,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9531__auto___45917);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1385,comm,cljs.core.constant$keyword$1374,path_fn,cljs.core.constant$keyword$1375,link_fn,cljs.core.constant$keyword$1452,clustermap.app.change_view_path,cljs.core.constant$keyword$1556,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.state,cljs.core.constant$keyword$1132),cljs.core.constant$keyword$1555,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$1132,cljs.core.constant$keyword$1576)], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_boundaryline_collection_indexes();
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1169,clustermap.components.map.map_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1205,"map-component",cljs.core.constant$keyword$1202,shared,cljs.core.constant$keyword$1508,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1543,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169], null),cljs.core.constant$keyword$1115,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1122,cljs.core.constant$keyword$1272], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1446,clustermap.components.map_report.map_report_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1205,"map-report-component",cljs.core.constant$keyword$1202,shared,cljs.core.constant$keyword$1508,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1122], null),cljs.core.constant$keyword$1450,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1267], null),cljs.core.constant$keyword$1446,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1446], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1439,clustermap.components.filter.filter_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1205,"search-component",cljs.core.constant$keyword$1202,shared,cljs.core.constant$keyword$1508,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1122], null),cljs.core.constant$keyword$1114,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1114], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1577,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Variable",cljs.core.constant$keyword$1559,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1205,"variable-selection-component",cljs.core.constant$keyword$1202,shared,cljs.core.constant$keyword$1177,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1547], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1578,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Statistic",cljs.core.constant$keyword$1559,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1205,"stat-selection-component",cljs.core.constant$keyword$1202,shared,cljs.core.constant$keyword$1177,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1548], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1579,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Scale",cljs.core.constant$keyword$1561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1205,"scale-selection-component",cljs.core.constant$keyword$1202,shared,cljs.core.constant$keyword$1177,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1548], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1580,clustermap.components.color_scale.color_scale_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1205,"color-scale-component",cljs.core.constant$keyword$1202,shared,cljs.core.constant$keyword$1177,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1546], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1563,clustermap.components.table.table_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1205,"full-report-table",cljs.core.constant$keyword$1202,shared,cljs.core.constant$keyword$1508,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1291,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1563], null),cljs.core.constant$keyword$1122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1122], null),cljs.core.constant$keyword$1114,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1114], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1564,clustermap.components.timeline_chart.timeline_chart,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$1205,"turnover-timeline",cljs.core.constant$keyword$1202,shared,cljs.core.constant$keyword$1508,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1266,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1564], null),cljs.core.constant$keyword$1122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1122], null),cljs.core.constant$keyword$1114,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1114], null)], null)], 0));
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,comm,path_fn,link_fn,shared){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,path_fn,link_fn,shared){
return (function (state_45964){var state_val_45965 = (state_45964[(1)]);if((state_val_45965 === (7)))
{var inst_45953 = (state_45964[(2)]);var inst_45954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45953,(0),null);var inst_45955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45953,(1),null);var inst_45956 = clustermap.app.handle_event(inst_45954,inst_45955);var state_45964__$1 = (function (){var statearr_45966 = state_45964;(statearr_45966[(7)] = inst_45956);
return statearr_45966;
})();var statearr_45967_45980 = state_45964__$1;(statearr_45967_45980[(2)] = null);
(statearr_45967_45980[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_45965 === (6)))
{var inst_45960 = (state_45964[(2)]);var state_45964__$1 = state_45964;var statearr_45968_45981 = state_45964__$1;(statearr_45968_45981[(2)] = inst_45960);
(statearr_45968_45981[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_45965 === (5)))
{var state_45964__$1 = state_45964;var statearr_45969_45982 = state_45964__$1;(statearr_45969_45982[(2)] = null);
(statearr_45969_45982[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_45965 === (4)))
{var state_45964__$1 = state_45964;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45964__$1,(7),comm);
} else
{if((state_val_45965 === (3)))
{var inst_45962 = (state_45964[(2)]);var state_45964__$1 = state_45964;return cljs.core.async.impl.ioc_helpers.return_chan(state_45964__$1,inst_45962);
} else
{if((state_val_45965 === (2)))
{var state_45964__$1 = state_45964;var statearr_45970_45983 = state_45964__$1;(statearr_45970_45983[(1)] = (4));

return cljs.core.constant$keyword$1094;
} else
{if((state_val_45965 === (1)))
{var state_45964__$1 = state_45964;var statearr_45972_45984 = state_45964__$1;(statearr_45972_45984[(2)] = null);
(statearr_45972_45984[(1)] = (2));
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
});})(c__5708__auto__,comm,path_fn,link_fn,shared))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,path_fn,link_fn,shared){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45976 = [null,null,null,null,null,null,null,null];(statearr_45976[(0)] = state_machine__5694__auto__);
(statearr_45976[(1)] = (1));
return statearr_45976;
});
var state_machine__5694__auto____1 = (function (state_45964){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45964);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45977){if((e45977 instanceof Object))
{var ex__5697__auto__ = e45977;var statearr_45978_45985 = state_45964;(statearr_45978_45985[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45964);
return cljs.core.constant$keyword$1094;
} else
{throw e45977;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__45986 = state_45964;
state_45964 = G__45986;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45964){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,path_fn,link_fn,shared))
})();var state__5710__auto__ = (function (){var statearr_45979 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_45979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,comm,path_fn,link_fn,shared))
);
return c__5708__auto__;
});
