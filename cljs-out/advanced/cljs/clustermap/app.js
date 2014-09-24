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
goog.require('om.dom');
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
clustermap.app.state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1049,cljs.core.constant$keyword$1172,cljs.core.constant$keyword$1185,cljs.core.constant$keyword$1186,cljs.core.constant$keyword$1187,cljs.core.constant$keyword$1033,cljs.core.constant$keyword$1188,cljs.core.constant$keyword$1066,cljs.core.constant$keyword$1032,cljs.core.constant$keyword$1189,cljs.core.constant$keyword$865,cljs.core.constant$keyword$1019,cljs.core.constant$keyword$1190,cljs.core.constant$keyword$1191,cljs.core.constant$keyword$1052,cljs.core.constant$keyword$1192,cljs.core.constant$keyword$1056,cljs.core.constant$keyword$1028,cljs.core.constant$keyword$877,cljs.core.constant$keyword$1141,cljs.core.constant$keyword$1051,cljs.core.constant$keyword$1055],[null,null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$880,cljs.core.constant$keyword$1194,cljs.core.constant$keyword$1193,"company_accounts",cljs.core.constant$keyword$1063,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1181,"accounts_date",cljs.core.constant$keyword$1195,"2003-01-01",cljs.core.constant$keyword$1196,"2012-01-01",cljs.core.constant$keyword$1197,"year"], null),cljs.core.constant$keyword$994,null], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$880,cljs.core.constant$keyword$1186,cljs.core.constant$keyword$1193,"companies",cljs.core.constant$keyword$1063,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$872,null,cljs.core.constant$keyword$1198,(0),cljs.core.constant$keyword$1199,(50),cljs.core.constant$keyword$1067,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),cljs.core.constant$keyword$994,null], null),null,null,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1063,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1064,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$878,"companies",cljs.core.constant$keyword$1068,"company",cljs.core.constant$keyword$1067,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null),cljs.core.constant$keyword$1065,false], null)], null),cljs.core.constant$keyword$1064,null], null),null,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1119,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1128,null], null),null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$876,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$878,null,cljs.core.constant$keyword$879,null,cljs.core.constant$keyword$877,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$878,null,cljs.core.constant$keyword$879,null,cljs.core.constant$keyword$877,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$878,null,cljs.core.constant$keyword$879,null,cljs.core.constant$keyword$877,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$877,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$880,cljs.core.constant$keyword$1200,cljs.core.constant$keyword$1193,"companies",cljs.core.constant$keyword$1167,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1063,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1173,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1172,null,cljs.core.constant$keyword$864,null,cljs.core.constant$keyword$1171,null,cljs.core.constant$keyword$1169,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$880,cljs.core.constant$keyword$1002,cljs.core.constant$keyword$878,"companies",cljs.core.constant$keyword$1068,"company",cljs.core.constant$keyword$954,"boundaryline_id",cljs.core.constant$keyword$1181,"!latest_employee_count"], null),cljs.core.constant$keyword$1170,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1182,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1100,cljs.core.constant$keyword$1114], null),cljs.core.constant$keyword$1183,cljs.core.constant$keyword$1118,cljs.core.constant$keyword$1181,cljs.core.constant$keyword$1061], null)], null),cljs.core.constant$keyword$994,null], null),null,cljs.core.constant$keyword$1141])) : cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1049,cljs.core.constant$keyword$1172,cljs.core.constant$keyword$1185,cljs.core.constant$keyword$1186,cljs.core.constant$keyword$1187,cljs.core.constant$keyword$1033,cljs.core.constant$keyword$1188,cljs.core.constant$keyword$1066,cljs.core.constant$keyword$1032,cljs.core.constant$keyword$1189,cljs.core.constant$keyword$865,cljs.core.constant$keyword$1019,cljs.core.constant$keyword$1190,cljs.core.constant$keyword$1191,cljs.core.constant$keyword$1052,cljs.core.constant$keyword$1192,cljs.core.constant$keyword$1056,cljs.core.constant$keyword$1028,cljs.core.constant$keyword$877,cljs.core.constant$keyword$1141,cljs.core.constant$keyword$1051,cljs.core.constant$keyword$1055],[null,null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$880,cljs.core.constant$keyword$1194,cljs.core.constant$keyword$1193,"company_accounts",cljs.core.constant$keyword$1063,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1181,"accounts_date",cljs.core.constant$keyword$1195,"2003-01-01",cljs.core.constant$keyword$1196,"2012-01-01",cljs.core.constant$keyword$1197,"year"], null),cljs.core.constant$keyword$994,null], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$880,cljs.core.constant$keyword$1186,cljs.core.constant$keyword$1193,"companies",cljs.core.constant$keyword$1063,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$872,null,cljs.core.constant$keyword$1198,(0),cljs.core.constant$keyword$1199,(50),cljs.core.constant$keyword$1067,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),cljs.core.constant$keyword$994,null], null),null,null,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1063,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1064,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$878,"companies",cljs.core.constant$keyword$1068,"company",cljs.core.constant$keyword$1067,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null),cljs.core.constant$keyword$1065,false], null)], null),cljs.core.constant$keyword$1064,null], null),null,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1119,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1128,null], null),null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$876,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$878,null,cljs.core.constant$keyword$879,null,cljs.core.constant$keyword$877,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$878,null,cljs.core.constant$keyword$879,null,cljs.core.constant$keyword$877,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$878,null,cljs.core.constant$keyword$879,null,cljs.core.constant$keyword$877,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$877,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$880,cljs.core.constant$keyword$1200,cljs.core.constant$keyword$1193,"companies",cljs.core.constant$keyword$1167,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1063,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1173,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1172,null,cljs.core.constant$keyword$864,null,cljs.core.constant$keyword$1171,null,cljs.core.constant$keyword$1169,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$880,cljs.core.constant$keyword$1002,cljs.core.constant$keyword$878,"companies",cljs.core.constant$keyword$1068,"company",cljs.core.constant$keyword$954,"boundaryline_id",cljs.core.constant$keyword$1181,"!latest_employee_count"], null),cljs.core.constant$keyword$1170,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1182,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1100,cljs.core.constant$keyword$1114], null),cljs.core.constant$keyword$1183,cljs.core.constant$keyword$1118,cljs.core.constant$keyword$1181,cljs.core.constant$keyword$1061], null)], null),cljs.core.constant$keyword$994,null], null),null,cljs.core.constant$keyword$1141])));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__37482){var vec__37483 = p__37482;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37483,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37483,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__37483,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__37483,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__37484){var map__37486 = p__37484;var map__37486__$1 = ((cljs.core.seq_QMARK_(map__37486))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37486):map__37486);var path_values = map__37486__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__37484 = null;if (arguments.length > 0) {
  p__37484 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__37484);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__37487){
var p__37484 = cljs.core.seq(arglist__37487);
return set_state__delegate(p__37484);
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
get_state.cljs$lang$applyTo = (function (arglist__37488){
var path = cljs.core.seq(arglist__37488);
return get_state__delegate(path);
});
get_state.cljs$core$IFn$_invoke$arity$variadic = get_state__delegate;
return get_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__37493 = cljs.core.seq(clustermap.app.bl_collections);var chunk__37494 = null;var count__37495 = (0);var i__37496 = (0);while(true){
if((i__37496 < count__37495))
{var blcoll = chunk__37494.cljs$core$IIndexed$_nth$arity$2(null,i__37496);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$877,blcoll);
{
var G__37497 = seq__37493;
var G__37498 = chunk__37494;
var G__37499 = count__37495;
var G__37500 = (i__37496 + (1));
seq__37493 = G__37497;
chunk__37494 = G__37498;
count__37495 = G__37499;
i__37496 = G__37500;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37493);if(temp__4126__auto__)
{var seq__37493__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37493__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__37493__$1);{
var G__37501 = cljs.core.chunk_rest(seq__37493__$1);
var G__37502 = c__4314__auto__;
var G__37503 = cljs.core.count(c__4314__auto__);
var G__37504 = (0);
seq__37493 = G__37501;
chunk__37494 = G__37502;
count__37495 = G__37503;
i__37496 = G__37504;
continue;
}
} else
{var blcoll = cljs.core.first(seq__37493__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$877,blcoll);
{
var G__37505 = cljs.core.next(seq__37493__$1);
var G__37506 = null;
var G__37507 = (0);
var G__37508 = (0);
seq__37493 = G__37505;
chunk__37494 = G__37506;
count__37495 = G__37507;
i__37496 = G__37508;
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
return (function (state_37528){var state_val_37529 = (state_37528[(1)]);if((state_val_37529 === (2)))
{var inst_37525 = (state_37528[(2)]);var inst_37526 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1033,inst_37525], 0));var state_37528__$1 = state_37528;return cljs.core.async.impl.ioc_helpers.return_chan(state_37528__$1,inst_37526);
} else
{if((state_val_37529 === (1)))
{var inst_37523 = clustermap.api.investment_stats();var state_37528__$1 = state_37528;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37528__$1,(2),inst_37523);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_37533 = [null,null,null,null,null,null,null];(statearr_37533[(0)] = state_machine__5694__auto__);
(statearr_37533[(1)] = (1));
return statearr_37533;
});
var state_machine__5694__auto____1 = (function (state_37528){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_37528);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e37534){if((e37534 instanceof Object))
{var ex__5697__auto__ = e37534;var statearr_37535_37537 = state_37528;(statearr_37535_37537[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37528);
return cljs.core.constant$keyword$844;
} else
{throw e37534;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__37538 = state_37528;
state_37528 = G__37538;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_37528){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_37528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_37536 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_37536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_37536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1056,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__37539,type){var vec__37541 = p__37539;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37541,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37541,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37541,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37541,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37541,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37541,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1028,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$880,type,cljs.core.constant$keyword$913,selection], null),cljs.core.constant$keyword$1032,selection_investment_stats,cljs.core.constant$keyword$1019,selection_investment_account_timelines,cljs.core.constant$keyword$1052,selection_investment_aggs,cljs.core.constant$keyword$1051,selection_investments,cljs.core.constant$keyword$1189], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__37542){var vec__37547 = p__37542;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37547,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37547,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$1049.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state)));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1049,selector], 0));
var pred__37548 = cljs.core._EQ_;var expr__37549 = type;if(cljs.core.truth_((pred__37548.cljs$core$IFn$_invoke$arity$2 ? pred__37548.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$966,expr__37549) : pred__37548.call(null,cljs.core.constant$keyword$966,expr__37549))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__37548.cljs$core$IFn$_invoke$arity$2 ? pred__37548.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$967,expr__37549) : pred__37548.call(null,cljs.core.constant$keyword$967,expr__37549))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__37548.cljs$core$IFn$_invoke$arity$2 ? pred__37548.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$969,expr__37549) : pred__37548.call(null,cljs.core.constant$keyword$969,expr__37549))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
} else
{return null;
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$1055.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state)))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1055,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__37554 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37554,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37554,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37554,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37554,(3),null);var type__$1 = ((((function (){var G__37555 = type;var G__37555__$1 = (((G__37555 == null))?null:clojure.string.trim(G__37555));var G__37555__$2 = (((G__37555__$1 == null))?null:cljs.core.count(G__37555__$1));return G__37555__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__37556 = id;var G__37556__$1 = (((G__37556 == null))?null:clojure.string.trim(G__37556));var G__37556__$2 = (((G__37556__$1 == null))?null:cljs.core.count(G__37556__$1));return G__37556__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1055,view,cljs.core.constant$keyword$880,type__$1,cljs.core.constant$keyword$882,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__37557){var vec__37560 = p__37557;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37560,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37560,(1),null);var map__37561 = clustermap.app.parse_route();var map__37561__$1 = ((cljs.core.seq_QMARK_(map__37561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37561):map__37561);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37561__$1,cljs.core.constant$keyword$1055);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__37563 = clustermap.app.parse_route();var map__37563__$1 = ((cljs.core.seq_QMARK_(map__37563))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37563):map__37563);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37563__$1,cljs.core.constant$keyword$882);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37563__$1,cljs.core.constant$keyword$880);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_37596){var state_val_37597 = (state_37596[(1)]);if((state_val_37597 === (2)))
{var inst_37587 = (state_37596[(7)]);var inst_37593 = (state_37596[(2)]);var inst_37594 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1190,inst_37587,cljs.core.constant$keyword$1052,inst_37593], 0));var state_37596__$1 = state_37596;return cljs.core.async.impl.ioc_helpers.return_chan(state_37596__$1,inst_37594);
} else
{if((state_val_37597 === (1)))
{var inst_37587 = (state_37596[(7)]);var inst_37585 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_37586 = cljs.core.constant$keyword$1190.cljs$core$IFn$_invoke$arity$1(inst_37585);var inst_37587__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37586,table_view], 0));var inst_37588 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_37589 = cljs.core.constant$keyword$1049.cljs$core$IFn$_invoke$arity$1(inst_37588);var inst_37590 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37589,inst_37587__$1], 0));var inst_37591 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37590], 0));var state_37596__$1 = (function (){var statearr_37598 = state_37596;(statearr_37598[(7)] = inst_37587__$1);
return statearr_37598;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37596__$1,(2),inst_37591);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_37602 = [null,null,null,null,null,null,null,null];(statearr_37602[(0)] = state_machine__5694__auto__);
(statearr_37602[(1)] = (1));
return statearr_37602;
});
var state_machine__5694__auto____1 = (function (state_37596){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_37596);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e37603){if((e37603 instanceof Object))
{var ex__5697__auto__ = e37603;var statearr_37604_37606 = state_37596;(statearr_37604_37606[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37596);
return cljs.core.constant$keyword$844;
} else
{throw e37603;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__37607 = state_37596;
state_37596 = G__37607;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_37596){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_37596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_37605 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_37605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_37605;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_37640){var state_val_37641 = (state_37640[(1)]);if((state_val_37641 === (2)))
{var inst_37631 = (state_37640[(7)]);var inst_37637 = (state_37640[(2)]);var inst_37638 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1192,inst_37631,cljs.core.constant$keyword$1051,inst_37637], 0));var state_37640__$1 = state_37640;return cljs.core.async.impl.ioc_helpers.return_chan(state_37640__$1,inst_37638);
} else
{if((state_val_37641 === (1)))
{var inst_37631 = (state_37640[(7)]);var inst_37629 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_37630 = cljs.core.constant$keyword$1192.cljs$core$IFn$_invoke$arity$1(inst_37629);var inst_37631__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37630,table_view], 0));var inst_37632 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_37633 = cljs.core.constant$keyword$1049.cljs$core$IFn$_invoke$arity$1(inst_37632);var inst_37634 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37633,inst_37631__$1], 0));var inst_37635 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37634], 0));var state_37640__$1 = (function (){var statearr_37642 = state_37640;(statearr_37642[(7)] = inst_37631__$1);
return statearr_37642;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37640__$1,(2),inst_37635);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_37646 = [null,null,null,null,null,null,null,null];(statearr_37646[(0)] = state_machine__5694__auto__);
(statearr_37646[(1)] = (1));
return statearr_37646;
});
var state_machine__5694__auto____1 = (function (state_37640){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_37640);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e37647){if((e37647 instanceof Object))
{var ex__5697__auto__ = e37647;var statearr_37648_37650 = state_37640;(statearr_37648_37650[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37640);
return cljs.core.constant$keyword$844;
} else
{throw e37647;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__37651 = state_37640;
state_37640 = G__37651;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_37640){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_37640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_37649 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_37649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_37649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1057,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$919,clustermap.app.set_selection_route,cljs.core.constant$keyword$1201,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$1139,clustermap.app.set_view_route,cljs.core.constant$keyword$1202,clustermap.app.change_view,cljs.core.constant$keyword$975,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$983,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9563__auto___37668 = (function (params__9564__auto__){if(cljs.core.map_QMARK_(params__9564__auto__))
{var map__37660 = params__9564__auto__;var map__37660__$1 = ((cljs.core.seq_QMARK_(map__37660))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37660):map__37660);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1201,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9564__auto__))
{var vec__37661 = params__9564__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1201,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9563__auto___37668);
var action__9563__auto___37669 = (function (params__9564__auto__){if(cljs.core.map_QMARK_(params__9564__auto__))
{var map__37662 = params__9564__auto__;var map__37662__$1 = ((cljs.core.seq_QMARK_(map__37662))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37662):map__37662);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1201,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9564__auto__))
{var vec__37663 = params__9564__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1201,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9563__auto___37669);
var action__9563__auto___37670 = (function (params__9564__auto__){if(cljs.core.map_QMARK_(params__9564__auto__))
{var map__37664 = params__9564__auto__;var map__37664__$1 = ((cljs.core.seq_QMARK_(map__37664))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37664):map__37664);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37664__$1,cljs.core.constant$keyword$1055);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1202,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1201,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9564__auto__))
{var vec__37665 = params__9564__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37665,(0),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1202,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1201,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9563__auto___37670);
var action__9563__auto___37671 = (function (params__9564__auto__){if(cljs.core.map_QMARK_(params__9564__auto__))
{var map__37666 = params__9564__auto__;var map__37666__$1 = ((cljs.core.seq_QMARK_(map__37666))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37666):map__37666);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,cljs.core.constant$keyword$882);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,cljs.core.constant$keyword$880);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,cljs.core.constant$keyword$1055);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1202,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1201,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9564__auto__))
{var vec__37667 = params__9564__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37667,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37667,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37667,(2),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1202,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1201,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9563__auto___37671);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$974,comm,cljs.core.constant$keyword$964,path_fn,cljs.core.constant$keyword$965,link_fn,cljs.core.constant$keyword$1072,clustermap.app.change_view_path,cljs.core.constant$keyword$1178,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.state,cljs.core.constant$keyword$877),cljs.core.constant$keyword$1177,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$877,cljs.core.constant$keyword$1203)], null);clustermap.nav.init(comm);
clustermap.app.load_boundaryline_collection_indexes();
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(clustermap.components.map.map_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$962,"map-component",cljs.core.constant$keyword$959,shared,cljs.core.constant$keyword$1129,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1165,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1141], null),cljs.core.constant$keyword$865,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$865,cljs.core.constant$keyword$1128], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(clustermap.components.map_report.map_report_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$962,"map-report-component",cljs.core.constant$keyword$959,shared,cljs.core.constant$keyword$1129,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$865,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$865,cljs.core.constant$keyword$1128], null),cljs.core.constant$keyword$1070,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1141,cljs.core.constant$keyword$1063], null),cljs.core.constant$keyword$1066,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1066], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(clustermap.components.filter.filter_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$962,"search-component",cljs.core.constant$keyword$959,shared,cljs.core.constant$keyword$934,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$865], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Variable",cljs.core.constant$keyword$1181,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$962,"variable-selection-component",cljs.core.constant$keyword$959,shared,cljs.core.constant$keyword$934,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1141,cljs.core.constant$keyword$1063,cljs.core.constant$keyword$1169], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Statistic",cljs.core.constant$keyword$1181,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$962,"stat-selection-component",cljs.core.constant$keyword$959,shared,cljs.core.constant$keyword$934,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1141,cljs.core.constant$keyword$1063,cljs.core.constant$keyword$1170], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Scale",cljs.core.constant$keyword$1183,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$962,"scale-selection-component",cljs.core.constant$keyword$959,shared,cljs.core.constant$keyword$934,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1141,cljs.core.constant$keyword$1063,cljs.core.constant$keyword$1170], null)], 0));
return clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(clustermap.components.color_scale.color_scale_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$962,"color-scale-component",cljs.core.constant$keyword$959,shared,cljs.core.constant$keyword$934,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1141,cljs.core.constant$keyword$1063,cljs.core.constant$keyword$1168], null)], 0));
});
