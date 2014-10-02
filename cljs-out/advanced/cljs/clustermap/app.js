// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.mount');
goog.require('secretary.core');
goog.require('clustermap.components.map');
goog.require('clustermap.nav');
goog.require('om.dom');
goog.require('goog.history.EventType');
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
goog.require('clustermap.components.color_scale');
goog.require('clustermap.components.filter');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clustermap.components.page_title');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.components.map');
goog.require('clustermap.api');
clustermap.app.state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1099,cljs.core.constant$keyword$1220,cljs.core.constant$keyword$1233,cljs.core.constant$keyword$1234,cljs.core.constant$keyword$1235,cljs.core.constant$keyword$1083,cljs.core.constant$keyword$1236,cljs.core.constant$keyword$1115,cljs.core.constant$keyword$1082,cljs.core.constant$keyword$1237,cljs.core.constant$keyword$901,cljs.core.constant$keyword$1069,cljs.core.constant$keyword$1238,cljs.core.constant$keyword$1239,cljs.core.constant$keyword$1102,cljs.core.constant$keyword$1240,cljs.core.constant$keyword$1106,cljs.core.constant$keyword$1078,cljs.core.constant$keyword$909,cljs.core.constant$keyword$1189,cljs.core.constant$keyword$1101,cljs.core.constant$keyword$1105],[null,null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$912,cljs.core.constant$keyword$1242,cljs.core.constant$keyword$1241,"company_accounts",cljs.core.constant$keyword$1003,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1229,"accounts_date",cljs.core.constant$keyword$1243,"2003-01-01",cljs.core.constant$keyword$1244,"2012-01-01",cljs.core.constant$keyword$1245,"year"], null),cljs.core.constant$keyword$999,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$912,cljs.core.constant$keyword$1234,cljs.core.constant$keyword$1003,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$910,"companies",cljs.core.constant$keyword$1006,"company",cljs.core.constant$keyword$1004,null,cljs.core.constant$keyword$906,(0),cljs.core.constant$keyword$907,(50),cljs.core.constant$keyword$1005,false,cljs.core.constant$keyword$995,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1246,"Name"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1247,"Postcode"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1248,"Formation date"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1249,"Filing date"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1110,"Employees"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1113,"Turnover"], null)], null)], null),cljs.core.constant$keyword$1002,null], null),null,null,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1003,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1114,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$910,"companies",cljs.core.constant$keyword$1006,"company",cljs.core.constant$keyword$1116,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null),cljs.core.constant$keyword$1005,false], null)], null),cljs.core.constant$keyword$1114,null], null),null,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1167,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1176,null], null),null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$908,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$910,null,cljs.core.constant$keyword$911,null,cljs.core.constant$keyword$909,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$910,null,cljs.core.constant$keyword$911,null,cljs.core.constant$keyword$909,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$910,null,cljs.core.constant$keyword$911,null,cljs.core.constant$keyword$909,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$909,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$912,cljs.core.constant$keyword$1250,cljs.core.constant$keyword$1241,"companies",cljs.core.constant$keyword$1215,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1003,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1221,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1220,null,cljs.core.constant$keyword$900,null,cljs.core.constant$keyword$1219,null,cljs.core.constant$keyword$1217,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$912,cljs.core.constant$keyword$1052,cljs.core.constant$keyword$910,"companies",cljs.core.constant$keyword$1006,"company",cljs.core.constant$keyword$974,"boundaryline_id",cljs.core.constant$keyword$1229,"!latest_employee_count"], null),cljs.core.constant$keyword$1218,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1230,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1148,cljs.core.constant$keyword$1162], null),cljs.core.constant$keyword$1231,cljs.core.constant$keyword$1166,cljs.core.constant$keyword$1229,cljs.core.constant$keyword$1111], null)], null),cljs.core.constant$keyword$999,null], null),null,cljs.core.constant$keyword$1189])) : cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1099,cljs.core.constant$keyword$1220,cljs.core.constant$keyword$1233,cljs.core.constant$keyword$1234,cljs.core.constant$keyword$1235,cljs.core.constant$keyword$1083,cljs.core.constant$keyword$1236,cljs.core.constant$keyword$1115,cljs.core.constant$keyword$1082,cljs.core.constant$keyword$1237,cljs.core.constant$keyword$901,cljs.core.constant$keyword$1069,cljs.core.constant$keyword$1238,cljs.core.constant$keyword$1239,cljs.core.constant$keyword$1102,cljs.core.constant$keyword$1240,cljs.core.constant$keyword$1106,cljs.core.constant$keyword$1078,cljs.core.constant$keyword$909,cljs.core.constant$keyword$1189,cljs.core.constant$keyword$1101,cljs.core.constant$keyword$1105],[null,null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$912,cljs.core.constant$keyword$1242,cljs.core.constant$keyword$1241,"company_accounts",cljs.core.constant$keyword$1003,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1229,"accounts_date",cljs.core.constant$keyword$1243,"2003-01-01",cljs.core.constant$keyword$1244,"2012-01-01",cljs.core.constant$keyword$1245,"year"], null),cljs.core.constant$keyword$999,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$912,cljs.core.constant$keyword$1234,cljs.core.constant$keyword$1003,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$910,"companies",cljs.core.constant$keyword$1006,"company",cljs.core.constant$keyword$1004,null,cljs.core.constant$keyword$906,(0),cljs.core.constant$keyword$907,(50),cljs.core.constant$keyword$1005,false,cljs.core.constant$keyword$995,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1246,"Name"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1247,"Postcode"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1248,"Formation date"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1249,"Filing date"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1110,"Employees"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1113,"Turnover"], null)], null)], null),cljs.core.constant$keyword$1002,null], null),null,null,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1003,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1114,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$910,"companies",cljs.core.constant$keyword$1006,"company",cljs.core.constant$keyword$1116,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null),cljs.core.constant$keyword$1005,false], null)], null),cljs.core.constant$keyword$1114,null], null),null,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1167,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1176,null], null),null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$908,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$910,null,cljs.core.constant$keyword$911,null,cljs.core.constant$keyword$909,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$910,null,cljs.core.constant$keyword$911,null,cljs.core.constant$keyword$909,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$910,null,cljs.core.constant$keyword$911,null,cljs.core.constant$keyword$909,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$909,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$912,cljs.core.constant$keyword$1250,cljs.core.constant$keyword$1241,"companies",cljs.core.constant$keyword$1215,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1003,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1221,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1220,null,cljs.core.constant$keyword$900,null,cljs.core.constant$keyword$1219,null,cljs.core.constant$keyword$1217,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$912,cljs.core.constant$keyword$1052,cljs.core.constant$keyword$910,"companies",cljs.core.constant$keyword$1006,"company",cljs.core.constant$keyword$974,"boundaryline_id",cljs.core.constant$keyword$1229,"!latest_employee_count"], null),cljs.core.constant$keyword$1218,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1230,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1148,cljs.core.constant$keyword$1162], null),cljs.core.constant$keyword$1231,cljs.core.constant$keyword$1166,cljs.core.constant$keyword$1229,cljs.core.constant$keyword$1111], null)], null),cljs.core.constant$keyword$999,null], null),null,cljs.core.constant$keyword$1189])));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__38446){var vec__38447 = p__38446;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38447,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38447,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__38447,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__38447,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__38448){var map__38450 = p__38448;var map__38450__$1 = ((cljs.core.seq_QMARK_(map__38450))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38450):map__38450);var path_values = map__38450__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__38448 = null;if (arguments.length > 0) {
  p__38448 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__38448);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__38451){
var p__38448 = cljs.core.seq(arglist__38451);
return set_state__delegate(p__38448);
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
get_state.cljs$lang$applyTo = (function (arglist__38452){
var path = cljs.core.seq(arglist__38452);
return get_state__delegate(path);
});
get_state.cljs$core$IFn$_invoke$arity$variadic = get_state__delegate;
return get_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__38457 = cljs.core.seq(clustermap.app.bl_collections);var chunk__38458 = null;var count__38459 = (0);var i__38460 = (0);while(true){
if((i__38460 < count__38459))
{var blcoll = chunk__38458.cljs$core$IIndexed$_nth$arity$2(null,i__38460);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$909,blcoll);
{
var G__38461 = seq__38457;
var G__38462 = chunk__38458;
var G__38463 = count__38459;
var G__38464 = (i__38460 + (1));
seq__38457 = G__38461;
chunk__38458 = G__38462;
count__38459 = G__38463;
i__38460 = G__38464;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__38457);if(temp__4126__auto__)
{var seq__38457__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__38457__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__38457__$1);{
var G__38465 = cljs.core.chunk_rest(seq__38457__$1);
var G__38466 = c__4314__auto__;
var G__38467 = cljs.core.count(c__4314__auto__);
var G__38468 = (0);
seq__38457 = G__38465;
chunk__38458 = G__38466;
count__38459 = G__38467;
i__38460 = G__38468;
continue;
}
} else
{var blcoll = cljs.core.first(seq__38457__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$909,blcoll);
{
var G__38469 = cljs.core.next(seq__38457__$1);
var G__38470 = null;
var G__38471 = (0);
var G__38472 = (0);
seq__38457 = G__38469;
chunk__38458 = G__38470;
count__38459 = G__38471;
i__38460 = G__38472;
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
return (function (state_38492){var state_val_38493 = (state_38492[(1)]);if((state_val_38493 === (2)))
{var inst_38489 = (state_38492[(2)]);var inst_38490 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1083,inst_38489], 0));var state_38492__$1 = state_38492;return cljs.core.async.impl.ioc_helpers.return_chan(state_38492__$1,inst_38490);
} else
{if((state_val_38493 === (1)))
{var inst_38487 = (clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$0 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$0() : clustermap.api.investment_stats.call(null));var state_38492__$1 = state_38492;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38492__$1,(2),inst_38487);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_38497 = [null,null,null,null,null,null,null];(statearr_38497[(0)] = state_machine__5694__auto__);
(statearr_38497[(1)] = (1));
return statearr_38497;
});
var state_machine__5694__auto____1 = (function (state_38492){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_38492);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38498){if((e38498 instanceof Object))
{var ex__5697__auto__ = e38498;var statearr_38499_38501 = state_38492;(statearr_38499_38501[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38492);
return cljs.core.constant$keyword$880;
} else
{throw e38498;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__38502 = state_38492;
state_38492 = G__38502;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38492){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_38500 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_38500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_38500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1106,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__38503,type){var vec__38505 = p__38503;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38505,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38505,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38505,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38505,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38505,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38505,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1078,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$912,type,cljs.core.constant$keyword$942,selection], null),cljs.core.constant$keyword$1082,selection_investment_stats,cljs.core.constant$keyword$1069,selection_investment_account_timelines,cljs.core.constant$keyword$1102,selection_investment_aggs,cljs.core.constant$keyword$1101,selection_investments,cljs.core.constant$keyword$1237], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__38506){var vec__38511 = p__38506;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38511,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38511,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$1099.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state)));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1099,selector], 0));
var pred__38512 = cljs.core._EQ_;var expr__38513 = type;if(cljs.core.truth_((pred__38512.cljs$core$IFn$_invoke$arity$2 ? pred__38512.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1014,expr__38513) : pred__38512.call(null,cljs.core.constant$keyword$1014,expr__38513))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(clustermap.api.portfolio_company.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.portfolio_company.cljs$core$IFn$_invoke$arity$1(id) : clustermap.api.portfolio_company.call(null,id)),(clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_stats.call(null,selector)),(clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_account_timelines.call(null,selector)),(clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_aggs.call(null,selector)),(clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investments.call(null,selector)),(clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.portfolio_company_locations.call(null,selector))], null),type], null);
} else
{if(cljs.core.truth_((pred__38512.cljs$core$IFn$_invoke$arity$2 ? pred__38512.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1015,expr__38513) : pred__38512.call(null,cljs.core.constant$keyword$1015,expr__38513))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(clustermap.api.investor_company.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investor_company.cljs$core$IFn$_invoke$arity$1(id) : clustermap.api.investor_company.call(null,id)),(clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_stats.call(null,selector)),(clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_account_timelines.call(null,selector)),(clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_aggs.call(null,selector)),(clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investments.call(null,selector)),(clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.portfolio_company_locations.call(null,selector))], null),type], null);
} else
{if(cljs.core.truth_((pred__38512.cljs$core$IFn$_invoke$arity$2 ? pred__38512.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1017,expr__38513) : pred__38512.call(null,cljs.core.constant$keyword$1017,expr__38513))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$1105.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state)))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1105,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__38518 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38518,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38518,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38518,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38518,(3),null);var type__$1 = ((((function (){var G__38519 = type;var G__38519__$1 = (((G__38519 == null))?null:clojure.string.trim(G__38519));var G__38519__$2 = (((G__38519__$1 == null))?null:cljs.core.count(G__38519__$1));return G__38519__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__38520 = id;var G__38520__$1 = (((G__38520 == null))?null:clojure.string.trim(G__38520));var G__38520__$2 = (((G__38520__$1 == null))?null:cljs.core.count(G__38520__$1));return G__38520__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1105,view,cljs.core.constant$keyword$912,type__$1,cljs.core.constant$keyword$914,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__38521){var vec__38524 = p__38521;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38524,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38524,(1),null);var map__38525 = clustermap.app.parse_route();var map__38525__$1 = ((cljs.core.seq_QMARK_(map__38525))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38525):map__38525);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525__$1,cljs.core.constant$keyword$1105);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__38527 = clustermap.app.parse_route();var map__38527__$1 = ((cljs.core.seq_QMARK_(map__38527))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38527):map__38527);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38527__$1,cljs.core.constant$keyword$914);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38527__$1,cljs.core.constant$keyword$912);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_38560){var state_val_38561 = (state_38560[(1)]);if((state_val_38561 === (2)))
{var inst_38551 = (state_38560[(7)]);var inst_38557 = (state_38560[(2)]);var inst_38558 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1238,inst_38551,cljs.core.constant$keyword$1102,inst_38557], 0));var state_38560__$1 = state_38560;return cljs.core.async.impl.ioc_helpers.return_chan(state_38560__$1,inst_38558);
} else
{if((state_val_38561 === (1)))
{var inst_38551 = (state_38560[(7)]);var inst_38549 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_38550 = cljs.core.constant$keyword$1238.cljs$core$IFn$_invoke$arity$1(inst_38549);var inst_38551__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_38550,table_view], 0));var inst_38552 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_38553 = cljs.core.constant$keyword$1099.cljs$core$IFn$_invoke$arity$1(inst_38552);var inst_38554 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_38553,inst_38551__$1], 0));var inst_38555 = (clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(inst_38554) : clustermap.api.investment_aggs.call(null,inst_38554));var state_38560__$1 = (function (){var statearr_38562 = state_38560;(statearr_38562[(7)] = inst_38551__$1);
return statearr_38562;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38560__$1,(2),inst_38555);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_38566 = [null,null,null,null,null,null,null,null];(statearr_38566[(0)] = state_machine__5694__auto__);
(statearr_38566[(1)] = (1));
return statearr_38566;
});
var state_machine__5694__auto____1 = (function (state_38560){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_38560);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38567){if((e38567 instanceof Object))
{var ex__5697__auto__ = e38567;var statearr_38568_38570 = state_38560;(statearr_38568_38570[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38560);
return cljs.core.constant$keyword$880;
} else
{throw e38567;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__38571 = state_38560;
state_38560 = G__38571;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38560){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_38569 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_38569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_38569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_38604){var state_val_38605 = (state_38604[(1)]);if((state_val_38605 === (2)))
{var inst_38595 = (state_38604[(7)]);var inst_38601 = (state_38604[(2)]);var inst_38602 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1240,inst_38595,cljs.core.constant$keyword$1101,inst_38601], 0));var state_38604__$1 = state_38604;return cljs.core.async.impl.ioc_helpers.return_chan(state_38604__$1,inst_38602);
} else
{if((state_val_38605 === (1)))
{var inst_38595 = (state_38604[(7)]);var inst_38593 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_38594 = cljs.core.constant$keyword$1240.cljs$core$IFn$_invoke$arity$1(inst_38593);var inst_38595__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_38594,table_view], 0));var inst_38596 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_38597 = cljs.core.constant$keyword$1099.cljs$core$IFn$_invoke$arity$1(inst_38596);var inst_38598 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_38597,inst_38595__$1], 0));var inst_38599 = (clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(inst_38598) : clustermap.api.investments.call(null,inst_38598));var state_38604__$1 = (function (){var statearr_38606 = state_38604;(statearr_38606[(7)] = inst_38595__$1);
return statearr_38606;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38604__$1,(2),inst_38599);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_38610 = [null,null,null,null,null,null,null,null];(statearr_38610[(0)] = state_machine__5694__auto__);
(statearr_38610[(1)] = (1));
return statearr_38610;
});
var state_machine__5694__auto____1 = (function (state_38604){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_38604);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38611){if((e38611 instanceof Object))
{var ex__5697__auto__ = e38611;var statearr_38612_38614 = state_38604;(statearr_38612_38614[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38604);
return cljs.core.constant$keyword$880;
} else
{throw e38611;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__38615 = state_38604;
state_38604 = G__38615;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38604){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_38613 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_38613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_38613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1107,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$948,clustermap.app.set_selection_route,cljs.core.constant$keyword$1251,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$1187,clustermap.app.set_view_route,cljs.core.constant$keyword$1252,clustermap.app.change_view,cljs.core.constant$keyword$1024,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$1032,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9531__auto___38632 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__38624 = params__9532__auto__;var map__38624__$1 = ((cljs.core.seq_QMARK_(map__38624))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38624):map__38624);return null;
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__38625 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9531__auto___38632);
var action__9531__auto___38633 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__38626 = params__9532__auto__;var map__38626__$1 = ((cljs.core.seq_QMARK_(map__38626))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38626):map__38626);return null;
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__38627 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9531__auto___38633);
var action__9531__auto___38634 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__38628 = params__9532__auto__;var map__38628__$1 = ((cljs.core.seq_QMARK_(map__38628))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38628):map__38628);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38628__$1,cljs.core.constant$keyword$1105);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1252,view], null));
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__38629 = params__9532__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38629,(0),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1252,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9531__auto___38634);
var action__9531__auto___38635 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__38630 = params__9532__auto__;var map__38630__$1 = ((cljs.core.seq_QMARK_(map__38630))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38630):map__38630);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630__$1,cljs.core.constant$keyword$914);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630__$1,cljs.core.constant$keyword$912);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630__$1,cljs.core.constant$keyword$1105);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1252,view], null));
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__38631 = params__9532__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38631,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38631,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38631,(2),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1252,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9531__auto___38635);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1023,comm,cljs.core.constant$keyword$1012,path_fn,cljs.core.constant$keyword$1013,link_fn,cljs.core.constant$keyword$1120,clustermap.app.change_view_path,cljs.core.constant$keyword$1226,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.state,cljs.core.constant$keyword$909),cljs.core.constant$keyword$1225,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$909,cljs.core.constant$keyword$1253)], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_boundaryline_collection_indexes();
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1189,clustermap.components.map.map_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$982,"map-component",cljs.core.constant$keyword$979,shared,cljs.core.constant$keyword$1177,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1189], null),cljs.core.constant$keyword$901,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$901,cljs.core.constant$keyword$1176], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1115,clustermap.components.map_report.map_report_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$982,"map-report-component",cljs.core.constant$keyword$979,shared,cljs.core.constant$keyword$1177,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$901,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$901,cljs.core.constant$keyword$1176], null),cljs.core.constant$keyword$1118,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1189,cljs.core.constant$keyword$1003], null),cljs.core.constant$keyword$1115,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1115], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1107,clustermap.components.filter.filter_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$982,"search-component",cljs.core.constant$keyword$979,shared,cljs.core.constant$keyword$954,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$901], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1254,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Variable",cljs.core.constant$keyword$1229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$982,"variable-selection-component",cljs.core.constant$keyword$979,shared,cljs.core.constant$keyword$954,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1189,cljs.core.constant$keyword$1003,cljs.core.constant$keyword$1217], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1255,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Statistic",cljs.core.constant$keyword$1229,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$982,"stat-selection-component",cljs.core.constant$keyword$979,shared,cljs.core.constant$keyword$954,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1189,cljs.core.constant$keyword$1003,cljs.core.constant$keyword$1218], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1256,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Scale",cljs.core.constant$keyword$1231,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$982,"scale-selection-component",cljs.core.constant$keyword$979,shared,cljs.core.constant$keyword$954,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1189,cljs.core.constant$keyword$1003,cljs.core.constant$keyword$1218], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1257,clustermap.components.color_scale.color_scale_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$982,"color-scale-component",cljs.core.constant$keyword$979,shared,cljs.core.constant$keyword$954,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1189,cljs.core.constant$keyword$1003,cljs.core.constant$keyword$1216], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1234,clustermap.components.table.table_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$982,"full-report-table",cljs.core.constant$keyword$979,shared,cljs.core.constant$keyword$1177,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1001,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1234], null),cljs.core.constant$keyword$901,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$901,cljs.core.constant$keyword$1176], null),cljs.core.constant$keyword$900,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1189,cljs.core.constant$keyword$1003,cljs.core.constant$keyword$900], null)], null)], 0));
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,comm,path_fn,link_fn,shared){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,path_fn,link_fn,shared){
return (function (state_38682){var state_val_38683 = (state_38682[(1)]);if((state_val_38683 === (7)))
{var inst_38671 = (state_38682[(2)]);var inst_38672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38671,(0),null);var inst_38673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38671,(1),null);var inst_38674 = clustermap.app.handle_event(inst_38672,inst_38673);var state_38682__$1 = (function (){var statearr_38684 = state_38682;(statearr_38684[(7)] = inst_38674);
return statearr_38684;
})();var statearr_38685_38698 = state_38682__$1;(statearr_38685_38698[(2)] = null);
(statearr_38685_38698[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_38683 === (6)))
{var inst_38678 = (state_38682[(2)]);var state_38682__$1 = state_38682;var statearr_38686_38699 = state_38682__$1;(statearr_38686_38699[(2)] = inst_38678);
(statearr_38686_38699[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_38683 === (5)))
{var state_38682__$1 = state_38682;var statearr_38687_38700 = state_38682__$1;(statearr_38687_38700[(2)] = null);
(statearr_38687_38700[(1)] = (6));
return cljs.core.constant$keyword$880;
} else
{if((state_val_38683 === (4)))
{var state_38682__$1 = state_38682;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38682__$1,(7),comm);
} else
{if((state_val_38683 === (3)))
{var inst_38680 = (state_38682[(2)]);var state_38682__$1 = state_38682;return cljs.core.async.impl.ioc_helpers.return_chan(state_38682__$1,inst_38680);
} else
{if((state_val_38683 === (2)))
{var state_38682__$1 = state_38682;var statearr_38688_38701 = state_38682__$1;(statearr_38688_38701[(1)] = (4));

return cljs.core.constant$keyword$880;
} else
{if((state_val_38683 === (1)))
{var state_38682__$1 = state_38682;var statearr_38690_38702 = state_38682__$1;(statearr_38690_38702[(2)] = null);
(statearr_38690_38702[(1)] = (2));
return cljs.core.constant$keyword$880;
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
var state_machine__5694__auto____0 = (function (){var statearr_38694 = [null,null,null,null,null,null,null,null];(statearr_38694[(0)] = state_machine__5694__auto__);
(statearr_38694[(1)] = (1));
return statearr_38694;
});
var state_machine__5694__auto____1 = (function (state_38682){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_38682);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38695){if((e38695 instanceof Object))
{var ex__5697__auto__ = e38695;var statearr_38696_38703 = state_38682;(statearr_38696_38703[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38682);
return cljs.core.constant$keyword$880;
} else
{throw e38695;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__38704 = state_38682;
state_38682 = G__38704;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38682){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,path_fn,link_fn,shared))
})();var state__5710__auto__ = (function (){var statearr_38697 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_38697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_38697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,comm,path_fn,link_fn,shared))
);
return c__5708__auto__;
});
