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
clustermap.app.state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$901,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$900,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$902,null,cljs.core.constant$keyword$903,null,cljs.core.constant$keyword$901,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$902,null,cljs.core.constant$keyword$903,null,cljs.core.constant$keyword$901,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$902,null,cljs.core.constant$keyword$903,null,cljs.core.constant$keyword$901,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$901,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.constant$keyword$996,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1159,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$990,false,cljs.core.constant$keyword$892,null,cljs.core.constant$keyword$997,null], null),cljs.core.constant$keyword$1180,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$904,cljs.core.constant$keyword$1227,cljs.core.constant$keyword$1226,"companies",cljs.core.constant$keyword$1206,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$980,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1211,null,cljs.core.constant$keyword$892,null,cljs.core.constant$keyword$1210,null,cljs.core.constant$keyword$1208,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$904,cljs.core.constant$keyword$1044,cljs.core.constant$keyword$902,"companies",cljs.core.constant$keyword$998,"company",cljs.core.constant$keyword$966,"boundaryline_id",cljs.core.constant$keyword$1220,"!latest_employee_count"], null),cljs.core.constant$keyword$1209,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1221,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1140,cljs.core.constant$keyword$1154], null),cljs.core.constant$keyword$1222,cljs.core.constant$keyword$1158,cljs.core.constant$keyword$1220,cljs.core.constant$keyword$1103], null)], null),cljs.core.constant$keyword$992,null], null),cljs.core.constant$keyword$1106,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$980,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1107,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$902,"companies",cljs.core.constant$keyword$998,"company",cljs.core.constant$keyword$1108,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null)], null)], null),cljs.core.constant$keyword$1107,null], null),cljs.core.constant$keyword$1224,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$904,cljs.core.constant$keyword$1224,cljs.core.constant$keyword$980,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$902,"companies",cljs.core.constant$keyword$998,"company",cljs.core.constant$keyword$995,null,cljs.core.constant$keyword$898,(0),cljs.core.constant$keyword$899,(50),cljs.core.constant$keyword$987,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1228,"Name"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1229,"Postcode"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1230,"Formation date"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1231,"Filing date"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1102,"Employees"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1105,"Turnover"], null)], null)], null),cljs.core.constant$keyword$981,null], null),cljs.core.constant$keyword$1225,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$904,cljs.core.constant$keyword$1232,cljs.core.constant$keyword$1226,"company_accounts",cljs.core.constant$keyword$980,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1220,"accounts_date",cljs.core.constant$keyword$1233,"2003-01-01",cljs.core.constant$keyword$1234,"2012-01-01",cljs.core.constant$keyword$1235,"year"], null),cljs.core.constant$keyword$992,null], null),cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1180], null)) : cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$901,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$900,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$902,null,cljs.core.constant$keyword$903,null,cljs.core.constant$keyword$901,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$902,null,cljs.core.constant$keyword$903,null,cljs.core.constant$keyword$901,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$902,null,cljs.core.constant$keyword$903,null,cljs.core.constant$keyword$901,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$901,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.constant$keyword$996,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1159,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$990,false,cljs.core.constant$keyword$892,null,cljs.core.constant$keyword$997,null], null),cljs.core.constant$keyword$1180,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$904,cljs.core.constant$keyword$1227,cljs.core.constant$keyword$1226,"companies",cljs.core.constant$keyword$1206,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$980,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1211,null,cljs.core.constant$keyword$892,null,cljs.core.constant$keyword$1210,null,cljs.core.constant$keyword$1208,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$904,cljs.core.constant$keyword$1044,cljs.core.constant$keyword$902,"companies",cljs.core.constant$keyword$998,"company",cljs.core.constant$keyword$966,"boundaryline_id",cljs.core.constant$keyword$1220,"!latest_employee_count"], null),cljs.core.constant$keyword$1209,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1221,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1140,cljs.core.constant$keyword$1154], null),cljs.core.constant$keyword$1222,cljs.core.constant$keyword$1158,cljs.core.constant$keyword$1220,cljs.core.constant$keyword$1103], null)], null),cljs.core.constant$keyword$992,null], null),cljs.core.constant$keyword$1106,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$980,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1107,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$902,"companies",cljs.core.constant$keyword$998,"company",cljs.core.constant$keyword$1108,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null)], null)], null),cljs.core.constant$keyword$1107,null], null),cljs.core.constant$keyword$1224,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$904,cljs.core.constant$keyword$1224,cljs.core.constant$keyword$980,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$902,"companies",cljs.core.constant$keyword$998,"company",cljs.core.constant$keyword$995,null,cljs.core.constant$keyword$898,(0),cljs.core.constant$keyword$899,(50),cljs.core.constant$keyword$987,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1228,"Name"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1229,"Postcode"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1230,"Formation date"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1231,"Filing date"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1102,"Employees"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1105,"Turnover"], null)], null)], null),cljs.core.constant$keyword$981,null], null),cljs.core.constant$keyword$1225,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$904,cljs.core.constant$keyword$1232,cljs.core.constant$keyword$1226,"company_accounts",cljs.core.constant$keyword$980,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1220,"accounts_date",cljs.core.constant$keyword$1233,"2003-01-01",cljs.core.constant$keyword$1234,"2012-01-01",cljs.core.constant$keyword$1235,"year"], null),cljs.core.constant$keyword$992,null], null),cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1180], null)));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__38982){var vec__38983 = p__38982;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38983,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38983,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__38983,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__38983,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__38984){var map__38986 = p__38984;var map__38986__$1 = ((cljs.core.seq_QMARK_(map__38986))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38986):map__38986);var path_values = map__38986__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__38984 = null;if (arguments.length > 0) {
  p__38984 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__38984);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__38987){
var p__38984 = cljs.core.seq(arglist__38987);
return set_state__delegate(p__38984);
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
get_state.cljs$lang$applyTo = (function (arglist__38988){
var path = cljs.core.seq(arglist__38988);
return get_state__delegate(path);
});
get_state.cljs$core$IFn$_invoke$arity$variadic = get_state__delegate;
return get_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__38993 = cljs.core.seq(clustermap.app.bl_collections);var chunk__38994 = null;var count__38995 = (0);var i__38996 = (0);while(true){
if((i__38996 < count__38995))
{var blcoll = chunk__38994.cljs$core$IIndexed$_nth$arity$2(null,i__38996);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$901,blcoll);
{
var G__38997 = seq__38993;
var G__38998 = chunk__38994;
var G__38999 = count__38995;
var G__39000 = (i__38996 + (1));
seq__38993 = G__38997;
chunk__38994 = G__38998;
count__38995 = G__38999;
i__38996 = G__39000;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__38993);if(temp__4126__auto__)
{var seq__38993__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__38993__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__38993__$1);{
var G__39001 = cljs.core.chunk_rest(seq__38993__$1);
var G__39002 = c__4314__auto__;
var G__39003 = cljs.core.count(c__4314__auto__);
var G__39004 = (0);
seq__38993 = G__39001;
chunk__38994 = G__39002;
count__38995 = G__39003;
i__38996 = G__39004;
continue;
}
} else
{var blcoll = cljs.core.first(seq__38993__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$901,blcoll);
{
var G__39005 = cljs.core.next(seq__38993__$1);
var G__39006 = null;
var G__39007 = (0);
var G__39008 = (0);
seq__38993 = G__39005;
chunk__38994 = G__39006;
count__38995 = G__39007;
i__38996 = G__39008;
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
return (function (state_39028){var state_val_39029 = (state_39028[(1)]);if((state_val_39029 === (2)))
{var inst_39025 = (state_39028[(2)]);var inst_39026 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1075,inst_39025], 0));var state_39028__$1 = state_39028;return cljs.core.async.impl.ioc_helpers.return_chan(state_39028__$1,inst_39026);
} else
{if((state_val_39029 === (1)))
{var inst_39023 = (clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$0 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$0() : clustermap.api.investment_stats.call(null));var state_39028__$1 = state_39028;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39028__$1,(2),inst_39023);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_39033 = [null,null,null,null,null,null,null];(statearr_39033[(0)] = state_machine__5694__auto__);
(statearr_39033[(1)] = (1));
return statearr_39033;
});
var state_machine__5694__auto____1 = (function (state_39028){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_39028);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e39034){if((e39034 instanceof Object))
{var ex__5697__auto__ = e39034;var statearr_39035_39037 = state_39028;(statearr_39035_39037[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39028);
return cljs.core.constant$keyword$872;
} else
{throw e39034;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__39038 = state_39028;
state_39028 = G__39038;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_39028){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_39028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_39036 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_39036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_39036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1098,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__39039,type){var vec__39041 = p__39039;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39041,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39041,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39041,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39041,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39041,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39041,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1070,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$904,type,cljs.core.constant$keyword$934,selection], null),cljs.core.constant$keyword$1074,selection_investment_stats,cljs.core.constant$keyword$1061,selection_investment_account_timelines,cljs.core.constant$keyword$1094,selection_investment_aggs,cljs.core.constant$keyword$1093,selection_investments,cljs.core.constant$keyword$1236], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__39042){var vec__39047 = p__39042;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39047,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39047,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$1091.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state)));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1091,selector], 0));
var pred__39048 = cljs.core._EQ_;var expr__39049 = type;if(cljs.core.truth_((pred__39048.cljs$core$IFn$_invoke$arity$2 ? pred__39048.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1006,expr__39049) : pred__39048.call(null,cljs.core.constant$keyword$1006,expr__39049))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(clustermap.api.portfolio_company.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.portfolio_company.cljs$core$IFn$_invoke$arity$1(id) : clustermap.api.portfolio_company.call(null,id)),(clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_stats.call(null,selector)),(clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_account_timelines.call(null,selector)),(clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_aggs.call(null,selector)),(clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investments.call(null,selector)),(clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.portfolio_company_locations.call(null,selector))], null),type], null);
} else
{if(cljs.core.truth_((pred__39048.cljs$core$IFn$_invoke$arity$2 ? pred__39048.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1007,expr__39049) : pred__39048.call(null,cljs.core.constant$keyword$1007,expr__39049))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(clustermap.api.investor_company.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investor_company.cljs$core$IFn$_invoke$arity$1(id) : clustermap.api.investor_company.call(null,id)),(clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_stats.call(null,selector)),(clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_account_timelines.call(null,selector)),(clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investment_aggs.call(null,selector)),(clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.investments.call(null,selector)),(clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$1(selector) : clustermap.api.portfolio_company_locations.call(null,selector))], null),type], null);
} else
{if(cljs.core.truth_((pred__39048.cljs$core$IFn$_invoke$arity$2 ? pred__39048.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1009,expr__39049) : pred__39048.call(null,cljs.core.constant$keyword$1009,expr__39049))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$1097.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state)))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1097,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__39054 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39054,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39054,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39054,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39054,(3),null);var type__$1 = ((((function (){var G__39055 = type;var G__39055__$1 = (((G__39055 == null))?null:clojure.string.trim(G__39055));var G__39055__$2 = (((G__39055__$1 == null))?null:cljs.core.count(G__39055__$1));return G__39055__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__39056 = id;var G__39056__$1 = (((G__39056 == null))?null:clojure.string.trim(G__39056));var G__39056__$2 = (((G__39056__$1 == null))?null:cljs.core.count(G__39056__$1));return G__39056__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1097,view,cljs.core.constant$keyword$904,type__$1,cljs.core.constant$keyword$906,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__39057){var vec__39060 = p__39057;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39060,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39060,(1),null);var map__39061 = clustermap.app.parse_route();var map__39061__$1 = ((cljs.core.seq_QMARK_(map__39061))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39061):map__39061);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39061__$1,cljs.core.constant$keyword$1097);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__39063 = clustermap.app.parse_route();var map__39063__$1 = ((cljs.core.seq_QMARK_(map__39063))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39063):map__39063);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39063__$1,cljs.core.constant$keyword$906);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39063__$1,cljs.core.constant$keyword$904);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_39096){var state_val_39097 = (state_39096[(1)]);if((state_val_39097 === (2)))
{var inst_39087 = (state_39096[(7)]);var inst_39093 = (state_39096[(2)]);var inst_39094 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1237,inst_39087,cljs.core.constant$keyword$1094,inst_39093], 0));var state_39096__$1 = state_39096;return cljs.core.async.impl.ioc_helpers.return_chan(state_39096__$1,inst_39094);
} else
{if((state_val_39097 === (1)))
{var inst_39087 = (state_39096[(7)]);var inst_39085 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_39086 = cljs.core.constant$keyword$1237.cljs$core$IFn$_invoke$arity$1(inst_39085);var inst_39087__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_39086,table_view], 0));var inst_39088 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_39089 = cljs.core.constant$keyword$1091.cljs$core$IFn$_invoke$arity$1(inst_39088);var inst_39090 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_39089,inst_39087__$1], 0));var inst_39091 = (clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$1(inst_39090) : clustermap.api.investment_aggs.call(null,inst_39090));var state_39096__$1 = (function (){var statearr_39098 = state_39096;(statearr_39098[(7)] = inst_39087__$1);
return statearr_39098;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39096__$1,(2),inst_39091);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_39102 = [null,null,null,null,null,null,null,null];(statearr_39102[(0)] = state_machine__5694__auto__);
(statearr_39102[(1)] = (1));
return statearr_39102;
});
var state_machine__5694__auto____1 = (function (state_39096){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_39096);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e39103){if((e39103 instanceof Object))
{var ex__5697__auto__ = e39103;var statearr_39104_39106 = state_39096;(statearr_39104_39106[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39096);
return cljs.core.constant$keyword$872;
} else
{throw e39103;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__39107 = state_39096;
state_39096 = G__39107;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_39096){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_39096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_39105 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_39105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_39105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_39140){var state_val_39141 = (state_39140[(1)]);if((state_val_39141 === (2)))
{var inst_39131 = (state_39140[(7)]);var inst_39137 = (state_39140[(2)]);var inst_39138 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1238,inst_39131,cljs.core.constant$keyword$1093,inst_39137], 0));var state_39140__$1 = state_39140;return cljs.core.async.impl.ioc_helpers.return_chan(state_39140__$1,inst_39138);
} else
{if((state_val_39141 === (1)))
{var inst_39131 = (state_39140[(7)]);var inst_39129 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_39130 = cljs.core.constant$keyword$1238.cljs$core$IFn$_invoke$arity$1(inst_39129);var inst_39131__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_39130,table_view], 0));var inst_39132 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_39133 = cljs.core.constant$keyword$1091.cljs$core$IFn$_invoke$arity$1(inst_39132);var inst_39134 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_39133,inst_39131__$1], 0));var inst_39135 = (clustermap.api.investments.cljs$core$IFn$_invoke$arity$1 ? clustermap.api.investments.cljs$core$IFn$_invoke$arity$1(inst_39134) : clustermap.api.investments.call(null,inst_39134));var state_39140__$1 = (function (){var statearr_39142 = state_39140;(statearr_39142[(7)] = inst_39131__$1);
return statearr_39142;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39140__$1,(2),inst_39135);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_39146 = [null,null,null,null,null,null,null,null];(statearr_39146[(0)] = state_machine__5694__auto__);
(statearr_39146[(1)] = (1));
return statearr_39146;
});
var state_machine__5694__auto____1 = (function (state_39140){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_39140);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e39147){if((e39147 instanceof Object))
{var ex__5697__auto__ = e39147;var statearr_39148_39150 = state_39140;(statearr_39148_39150[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39140);
return cljs.core.constant$keyword$872;
} else
{throw e39147;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__39151 = state_39140;
state_39140 = G__39151;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_39140){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_39140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_39149 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_39149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_39149;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1099,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$940,clustermap.app.set_selection_route,cljs.core.constant$keyword$1239,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$1178,clustermap.app.set_view_route,cljs.core.constant$keyword$1240,clustermap.app.change_view,cljs.core.constant$keyword$1016,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$1024,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9531__auto___39168 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__39160 = params__9532__auto__;var map__39160__$1 = ((cljs.core.seq_QMARK_(map__39160))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39160):map__39160);return null;
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__39161 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9531__auto___39168);
var action__9531__auto___39169 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__39162 = params__9532__auto__;var map__39162__$1 = ((cljs.core.seq_QMARK_(map__39162))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39162):map__39162);return null;
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__39163 = params__9532__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9531__auto___39169);
var action__9531__auto___39170 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__39164 = params__9532__auto__;var map__39164__$1 = ((cljs.core.seq_QMARK_(map__39164))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39164):map__39164);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39164__$1,cljs.core.constant$keyword$1097);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1240,view], null));
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__39165 = params__9532__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39165,(0),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1240,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9531__auto___39170);
var action__9531__auto___39171 = (function (params__9532__auto__){if(cljs.core.map_QMARK_(params__9532__auto__))
{var map__39166 = params__9532__auto__;var map__39166__$1 = ((cljs.core.seq_QMARK_(map__39166))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39166):map__39166);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39166__$1,cljs.core.constant$keyword$906);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39166__$1,cljs.core.constant$keyword$904);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39166__$1,cljs.core.constant$keyword$1097);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1240,view], null));
} else
{if(cljs.core.vector_QMARK_(params__9532__auto__))
{var vec__39167 = params__9532__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39167,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39167,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39167,(2),null);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1240,view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9531__auto___39171);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1015,comm,cljs.core.constant$keyword$1004,path_fn,cljs.core.constant$keyword$1005,link_fn,cljs.core.constant$keyword$1112,clustermap.app.change_view_path,cljs.core.constant$keyword$1217,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.state,cljs.core.constant$keyword$901),cljs.core.constant$keyword$1216,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$901,cljs.core.constant$keyword$1241)], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_boundaryline_collection_indexes();
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1180,clustermap.components.map.map_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$974,"map-component",cljs.core.constant$keyword$971,shared,cljs.core.constant$keyword$1168,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1204,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1180], null),cljs.core.constant$keyword$893,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$996,cljs.core.constant$keyword$997], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1106,clustermap.components.map_report.map_report_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$974,"map-report-component",cljs.core.constant$keyword$971,shared,cljs.core.constant$keyword$1168,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$996,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$996], null),cljs.core.constant$keyword$1110,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1180,cljs.core.constant$keyword$980], null),cljs.core.constant$keyword$1106,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1106], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1099,clustermap.components.filter.filter_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$974,"search-component",cljs.core.constant$keyword$971,shared,cljs.core.constant$keyword$1168,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$996,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$996], null),cljs.core.constant$keyword$892,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1180,cljs.core.constant$keyword$980,cljs.core.constant$keyword$892], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1242,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Variable",cljs.core.constant$keyword$1220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$974,"variable-selection-component",cljs.core.constant$keyword$971,shared,cljs.core.constant$keyword$946,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1180,cljs.core.constant$keyword$980,cljs.core.constant$keyword$1208], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1243,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Statistic",cljs.core.constant$keyword$1220,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$974,"stat-selection-component",cljs.core.constant$keyword$971,shared,cljs.core.constant$keyword$946,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1180,cljs.core.constant$keyword$980,cljs.core.constant$keyword$1209], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1244,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Scale",cljs.core.constant$keyword$1222,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$974,"scale-selection-component",cljs.core.constant$keyword$971,shared,cljs.core.constant$keyword$946,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1180,cljs.core.constant$keyword$980,cljs.core.constant$keyword$1209], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1245,clustermap.components.color_scale.color_scale_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$974,"color-scale-component",cljs.core.constant$keyword$971,shared,cljs.core.constant$keyword$946,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1180,cljs.core.constant$keyword$980,cljs.core.constant$keyword$1207], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$1224,clustermap.components.table.table_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$974,"full-report-table",cljs.core.constant$keyword$971,shared,cljs.core.constant$keyword$1168,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$994,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1224], null),cljs.core.constant$keyword$996,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$996], null),cljs.core.constant$keyword$892,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1180,cljs.core.constant$keyword$980,cljs.core.constant$keyword$892], null)], null)], 0));
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,comm,path_fn,link_fn,shared){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,path_fn,link_fn,shared){
return (function (state_39218){var state_val_39219 = (state_39218[(1)]);if((state_val_39219 === (7)))
{var inst_39207 = (state_39218[(2)]);var inst_39208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39207,(0),null);var inst_39209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39207,(1),null);var inst_39210 = clustermap.app.handle_event(inst_39208,inst_39209);var state_39218__$1 = (function (){var statearr_39220 = state_39218;(statearr_39220[(7)] = inst_39210);
return statearr_39220;
})();var statearr_39221_39234 = state_39218__$1;(statearr_39221_39234[(2)] = null);
(statearr_39221_39234[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_39219 === (6)))
{var inst_39214 = (state_39218[(2)]);var state_39218__$1 = state_39218;var statearr_39222_39235 = state_39218__$1;(statearr_39222_39235[(2)] = inst_39214);
(statearr_39222_39235[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_39219 === (5)))
{var state_39218__$1 = state_39218;var statearr_39223_39236 = state_39218__$1;(statearr_39223_39236[(2)] = null);
(statearr_39223_39236[(1)] = (6));
return cljs.core.constant$keyword$872;
} else
{if((state_val_39219 === (4)))
{var state_39218__$1 = state_39218;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39218__$1,(7),comm);
} else
{if((state_val_39219 === (3)))
{var inst_39216 = (state_39218[(2)]);var state_39218__$1 = state_39218;return cljs.core.async.impl.ioc_helpers.return_chan(state_39218__$1,inst_39216);
} else
{if((state_val_39219 === (2)))
{var state_39218__$1 = state_39218;var statearr_39224_39237 = state_39218__$1;(statearr_39224_39237[(1)] = (4));

return cljs.core.constant$keyword$872;
} else
{if((state_val_39219 === (1)))
{var state_39218__$1 = state_39218;var statearr_39226_39238 = state_39218__$1;(statearr_39226_39238[(2)] = null);
(statearr_39226_39238[(1)] = (2));
return cljs.core.constant$keyword$872;
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
var state_machine__5694__auto____0 = (function (){var statearr_39230 = [null,null,null,null,null,null,null,null];(statearr_39230[(0)] = state_machine__5694__auto__);
(statearr_39230[(1)] = (1));
return statearr_39230;
});
var state_machine__5694__auto____1 = (function (state_39218){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_39218);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e39231){if((e39231 instanceof Object))
{var ex__5697__auto__ = e39231;var statearr_39232_39239 = state_39218;(statearr_39232_39239[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39218);
return cljs.core.constant$keyword$872;
} else
{throw e39231;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__39240 = state_39218;
state_39218 = G__39240;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_39218){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_39218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,path_fn,link_fn,shared))
})();var state__5710__auto__ = (function (){var statearr_39233 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_39233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_39233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,comm,path_fn,link_fn,shared))
);
return c__5708__auto__;
});
