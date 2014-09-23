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
clustermap.app.state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1040,cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1172,cljs.core.constant$keyword$1173,cljs.core.constant$keyword$1174,cljs.core.constant$keyword$1024,cljs.core.constant$keyword$1175,cljs.core.constant$keyword$1053,cljs.core.constant$keyword$1023,cljs.core.constant$keyword$1176,cljs.core.constant$keyword$857,cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1177,cljs.core.constant$keyword$1178,cljs.core.constant$keyword$1043,cljs.core.constant$keyword$1179,cljs.core.constant$keyword$1047,cljs.core.constant$keyword$1019,cljs.core.constant$keyword$868,cljs.core.constant$keyword$1129,cljs.core.constant$keyword$1042,cljs.core.constant$keyword$1046],[null,null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$871,cljs.core.constant$keyword$1181,cljs.core.constant$keyword$1180,"company_accounts",cljs.core.constant$keyword$1054,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1056,"accounts_date",cljs.core.constant$keyword$1182,"2003-01-01",cljs.core.constant$keyword$1183,"2012-01-01",cljs.core.constant$keyword$1184,"year"], null),cljs.core.constant$keyword$985,null], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$871,cljs.core.constant$keyword$1173,cljs.core.constant$keyword$1180,"companies",cljs.core.constant$keyword$1054,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$863,null,cljs.core.constant$keyword$1185,(0),cljs.core.constant$keyword$1186,(50),cljs.core.constant$keyword$1187,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),cljs.core.constant$keyword$985,null], null),null,null,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1054,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1055,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$869,"companies",cljs.core.constant$keyword$1057,"company",cljs.core.constant$keyword$1056,"!latest_employee_count"], null)], null),cljs.core.constant$keyword$1055,null], null),null,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1107,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1116,null], null),null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$867,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$869,null,cljs.core.constant$keyword$870,null,cljs.core.constant$keyword$868,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$869,null,cljs.core.constant$keyword$870,null,cljs.core.constant$keyword$868,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$869,null,cljs.core.constant$keyword$870,null,cljs.core.constant$keyword$868,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$868,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$871,cljs.core.constant$keyword$1188,cljs.core.constant$keyword$1180,"companies",cljs.core.constant$keyword$1155,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1054,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1161,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1160,null,cljs.core.constant$keyword$856,null,cljs.core.constant$keyword$1159,null,cljs.core.constant$keyword$1157,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$871,cljs.core.constant$keyword$993,cljs.core.constant$keyword$869,"companies",cljs.core.constant$keyword$1057,"company",cljs.core.constant$keyword$945,"boundaryline_id",cljs.core.constant$keyword$1056,"!latest_employee_count"], null),cljs.core.constant$keyword$1158,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1169,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1088,cljs.core.constant$keyword$1102], null),cljs.core.constant$keyword$1170,cljs.core.constant$keyword$1106,cljs.core.constant$keyword$1056,cljs.core.constant$keyword$1052], null)], null),cljs.core.constant$keyword$985,null], null),null,cljs.core.constant$keyword$1129])) : cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1040,cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1172,cljs.core.constant$keyword$1173,cljs.core.constant$keyword$1174,cljs.core.constant$keyword$1024,cljs.core.constant$keyword$1175,cljs.core.constant$keyword$1053,cljs.core.constant$keyword$1023,cljs.core.constant$keyword$1176,cljs.core.constant$keyword$857,cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1177,cljs.core.constant$keyword$1178,cljs.core.constant$keyword$1043,cljs.core.constant$keyword$1179,cljs.core.constant$keyword$1047,cljs.core.constant$keyword$1019,cljs.core.constant$keyword$868,cljs.core.constant$keyword$1129,cljs.core.constant$keyword$1042,cljs.core.constant$keyword$1046],[null,null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$871,cljs.core.constant$keyword$1181,cljs.core.constant$keyword$1180,"company_accounts",cljs.core.constant$keyword$1054,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1056,"accounts_date",cljs.core.constant$keyword$1182,"2003-01-01",cljs.core.constant$keyword$1183,"2012-01-01",cljs.core.constant$keyword$1184,"year"], null),cljs.core.constant$keyword$985,null], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$871,cljs.core.constant$keyword$1173,cljs.core.constant$keyword$1180,"companies",cljs.core.constant$keyword$1054,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$863,null,cljs.core.constant$keyword$1185,(0),cljs.core.constant$keyword$1186,(50),cljs.core.constant$keyword$1187,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),cljs.core.constant$keyword$985,null], null),null,null,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1054,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1055,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$869,"companies",cljs.core.constant$keyword$1057,"company",cljs.core.constant$keyword$1056,"!latest_employee_count"], null)], null),cljs.core.constant$keyword$1055,null], null),null,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1107,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1116,null], null),null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$867,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$869,null,cljs.core.constant$keyword$870,null,cljs.core.constant$keyword$868,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$869,null,cljs.core.constant$keyword$870,null,cljs.core.constant$keyword$868,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$869,null,cljs.core.constant$keyword$870,null,cljs.core.constant$keyword$868,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$868,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$871,cljs.core.constant$keyword$1188,cljs.core.constant$keyword$1180,"companies",cljs.core.constant$keyword$1155,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1054,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1161,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1160,null,cljs.core.constant$keyword$856,null,cljs.core.constant$keyword$1159,null,cljs.core.constant$keyword$1157,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$871,cljs.core.constant$keyword$993,cljs.core.constant$keyword$869,"companies",cljs.core.constant$keyword$1057,"company",cljs.core.constant$keyword$945,"boundaryline_id",cljs.core.constant$keyword$1056,"!latest_employee_count"], null),cljs.core.constant$keyword$1158,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1169,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1088,cljs.core.constant$keyword$1102], null),cljs.core.constant$keyword$1170,cljs.core.constant$keyword$1106,cljs.core.constant$keyword$1056,cljs.core.constant$keyword$1052], null)], null),cljs.core.constant$keyword$985,null], null),null,cljs.core.constant$keyword$1129])));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__37422){var vec__37423 = p__37422;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37423,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37423,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__37423,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__37423,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__37424){var map__37426 = p__37424;var map__37426__$1 = ((cljs.core.seq_QMARK_(map__37426))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37426):map__37426);var path_values = map__37426__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__37424 = null;if (arguments.length > 0) {
  p__37424 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__37424);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__37427){
var p__37424 = cljs.core.seq(arglist__37427);
return set_state__delegate(p__37424);
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
get_state.cljs$lang$applyTo = (function (arglist__37428){
var path = cljs.core.seq(arglist__37428);
return get_state__delegate(path);
});
get_state.cljs$core$IFn$_invoke$arity$variadic = get_state__delegate;
return get_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__37433 = cljs.core.seq(clustermap.app.bl_collections);var chunk__37434 = null;var count__37435 = (0);var i__37436 = (0);while(true){
if((i__37436 < count__37435))
{var blcoll = chunk__37434.cljs$core$IIndexed$_nth$arity$2(null,i__37436);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$868,blcoll);
{
var G__37437 = seq__37433;
var G__37438 = chunk__37434;
var G__37439 = count__37435;
var G__37440 = (i__37436 + (1));
seq__37433 = G__37437;
chunk__37434 = G__37438;
count__37435 = G__37439;
i__37436 = G__37440;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37433);if(temp__4126__auto__)
{var seq__37433__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37433__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__37433__$1);{
var G__37441 = cljs.core.chunk_rest(seq__37433__$1);
var G__37442 = c__4314__auto__;
var G__37443 = cljs.core.count(c__4314__auto__);
var G__37444 = (0);
seq__37433 = G__37441;
chunk__37434 = G__37442;
count__37435 = G__37443;
i__37436 = G__37444;
continue;
}
} else
{var blcoll = cljs.core.first(seq__37433__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$868,blcoll);
{
var G__37445 = cljs.core.next(seq__37433__$1);
var G__37446 = null;
var G__37447 = (0);
var G__37448 = (0);
seq__37433 = G__37445;
chunk__37434 = G__37446;
count__37435 = G__37447;
i__37436 = G__37448;
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
return (function (state_37468){var state_val_37469 = (state_37468[(1)]);if((state_val_37469 === (2)))
{var inst_37465 = (state_37468[(2)]);var inst_37466 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1024,inst_37465], 0));var state_37468__$1 = state_37468;return cljs.core.async.impl.ioc_helpers.return_chan(state_37468__$1,inst_37466);
} else
{if((state_val_37469 === (1)))
{var inst_37463 = clustermap.api.investment_stats();var state_37468__$1 = state_37468;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37468__$1,(2),inst_37463);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_37473 = [null,null,null,null,null,null,null];(statearr_37473[(0)] = state_machine__5694__auto__);
(statearr_37473[(1)] = (1));
return statearr_37473;
});
var state_machine__5694__auto____1 = (function (state_37468){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_37468);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e37474){if((e37474 instanceof Object))
{var ex__5697__auto__ = e37474;var statearr_37475_37477 = state_37468;(statearr_37475_37477[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37468);
return cljs.core.constant$keyword$836;
} else
{throw e37474;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__37478 = state_37468;
state_37468 = G__37478;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_37468){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_37468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_37476 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_37476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_37476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1047,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__37479,type){var vec__37481 = p__37479;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37481,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37481,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37481,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37481,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37481,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37481,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1019,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$871,type,cljs.core.constant$keyword$904,selection], null),cljs.core.constant$keyword$1023,selection_investment_stats,cljs.core.constant$keyword$1010,selection_investment_account_timelines,cljs.core.constant$keyword$1043,selection_investment_aggs,cljs.core.constant$keyword$1042,selection_investments,cljs.core.constant$keyword$1176], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__37482){var vec__37487 = p__37482;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37487,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37487,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$1040.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state)));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1040,selector], 0));
var pred__37488 = cljs.core._EQ_;var expr__37489 = type;if(cljs.core.truth_((pred__37488.cljs$core$IFn$_invoke$arity$2 ? pred__37488.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$957,expr__37489) : pred__37488.call(null,cljs.core.constant$keyword$957,expr__37489))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__37488.cljs$core$IFn$_invoke$arity$2 ? pred__37488.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$958,expr__37489) : pred__37488.call(null,cljs.core.constant$keyword$958,expr__37489))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__37488.cljs$core$IFn$_invoke$arity$2 ? pred__37488.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$960,expr__37489) : pred__37488.call(null,cljs.core.constant$keyword$960,expr__37489))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$1046.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state)))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1046,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__37494 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37494,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37494,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37494,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37494,(3),null);var type__$1 = ((((function (){var G__37495 = type;var G__37495__$1 = (((G__37495 == null))?null:clojure.string.trim(G__37495));var G__37495__$2 = (((G__37495__$1 == null))?null:cljs.core.count(G__37495__$1));return G__37495__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__37496 = id;var G__37496__$1 = (((G__37496 == null))?null:clojure.string.trim(G__37496));var G__37496__$2 = (((G__37496__$1 == null))?null:cljs.core.count(G__37496__$1));return G__37496__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1046,view,cljs.core.constant$keyword$871,type__$1,cljs.core.constant$keyword$873,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__37497){var vec__37500 = p__37497;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37500,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37500,(1),null);var map__37501 = clustermap.app.parse_route();var map__37501__$1 = ((cljs.core.seq_QMARK_(map__37501))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37501):map__37501);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37501__$1,cljs.core.constant$keyword$1046);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__37503 = clustermap.app.parse_route();var map__37503__$1 = ((cljs.core.seq_QMARK_(map__37503))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37503):map__37503);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37503__$1,cljs.core.constant$keyword$873);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37503__$1,cljs.core.constant$keyword$871);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_37536){var state_val_37537 = (state_37536[(1)]);if((state_val_37537 === (2)))
{var inst_37527 = (state_37536[(7)]);var inst_37533 = (state_37536[(2)]);var inst_37534 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1177,inst_37527,cljs.core.constant$keyword$1043,inst_37533], 0));var state_37536__$1 = state_37536;return cljs.core.async.impl.ioc_helpers.return_chan(state_37536__$1,inst_37534);
} else
{if((state_val_37537 === (1)))
{var inst_37527 = (state_37536[(7)]);var inst_37525 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_37526 = cljs.core.constant$keyword$1177.cljs$core$IFn$_invoke$arity$1(inst_37525);var inst_37527__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37526,table_view], 0));var inst_37528 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_37529 = cljs.core.constant$keyword$1040.cljs$core$IFn$_invoke$arity$1(inst_37528);var inst_37530 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37529,inst_37527__$1], 0));var inst_37531 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37530], 0));var state_37536__$1 = (function (){var statearr_37538 = state_37536;(statearr_37538[(7)] = inst_37527__$1);
return statearr_37538;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37536__$1,(2),inst_37531);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_37542 = [null,null,null,null,null,null,null,null];(statearr_37542[(0)] = state_machine__5694__auto__);
(statearr_37542[(1)] = (1));
return statearr_37542;
});
var state_machine__5694__auto____1 = (function (state_37536){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_37536);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e37543){if((e37543 instanceof Object))
{var ex__5697__auto__ = e37543;var statearr_37544_37546 = state_37536;(statearr_37544_37546[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37536);
return cljs.core.constant$keyword$836;
} else
{throw e37543;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__37547 = state_37536;
state_37536 = G__37547;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_37536){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_37536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_37545 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_37545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_37545;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_37580){var state_val_37581 = (state_37580[(1)]);if((state_val_37581 === (2)))
{var inst_37571 = (state_37580[(7)]);var inst_37577 = (state_37580[(2)]);var inst_37578 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1179,inst_37571,cljs.core.constant$keyword$1042,inst_37577], 0));var state_37580__$1 = state_37580;return cljs.core.async.impl.ioc_helpers.return_chan(state_37580__$1,inst_37578);
} else
{if((state_val_37581 === (1)))
{var inst_37571 = (state_37580[(7)]);var inst_37569 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_37570 = cljs.core.constant$keyword$1179.cljs$core$IFn$_invoke$arity$1(inst_37569);var inst_37571__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37570,table_view], 0));var inst_37572 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clustermap.app.state) : cljs.core.deref.call(null,clustermap.app.state));var inst_37573 = cljs.core.constant$keyword$1040.cljs$core$IFn$_invoke$arity$1(inst_37572);var inst_37574 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37573,inst_37571__$1], 0));var inst_37575 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_37574], 0));var state_37580__$1 = (function (){var statearr_37582 = state_37580;(statearr_37582[(7)] = inst_37571__$1);
return statearr_37582;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37580__$1,(2),inst_37575);
} else
{return null;
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_37586 = [null,null,null,null,null,null,null,null];(statearr_37586[(0)] = state_machine__5694__auto__);
(statearr_37586[(1)] = (1));
return statearr_37586;
});
var state_machine__5694__auto____1 = (function (state_37580){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_37580);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e37587){if((e37587 instanceof Object))
{var ex__5697__auto__ = e37587;var statearr_37588_37590 = state_37580;(statearr_37588_37590[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37580);
return cljs.core.constant$keyword$836;
} else
{throw e37587;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__37591 = state_37580;
state_37580 = G__37591;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_37580){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_37580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_37589 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_37589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_37589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1048,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$910,clustermap.app.set_selection_route,cljs.core.constant$keyword$1189,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$1127,clustermap.app.set_view_route,cljs.core.constant$keyword$1190,clustermap.app.change_view,cljs.core.constant$keyword$966,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$974,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9563__auto___37608 = (function (params__9564__auto__){if(cljs.core.map_QMARK_(params__9564__auto__))
{var map__37600 = params__9564__auto__;var map__37600__$1 = ((cljs.core.seq_QMARK_(map__37600))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37600):map__37600);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1189,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9564__auto__))
{var vec__37601 = params__9564__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1189,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9563__auto___37608);
var action__9563__auto___37609 = (function (params__9564__auto__){if(cljs.core.map_QMARK_(params__9564__auto__))
{var map__37602 = params__9564__auto__;var map__37602__$1 = ((cljs.core.seq_QMARK_(map__37602))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37602):map__37602);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1189,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9564__auto__))
{var vec__37603 = params__9564__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1189,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9563__auto___37609);
var action__9563__auto___37610 = (function (params__9564__auto__){if(cljs.core.map_QMARK_(params__9564__auto__))
{var map__37604 = params__9564__auto__;var map__37604__$1 = ((cljs.core.seq_QMARK_(map__37604))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37604):map__37604);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37604__$1,cljs.core.constant$keyword$1046);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1190,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1189,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9564__auto__))
{var vec__37605 = params__9564__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37605,(0),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1190,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1189,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9563__auto___37610);
var action__9563__auto___37611 = (function (params__9564__auto__){if(cljs.core.map_QMARK_(params__9564__auto__))
{var map__37606 = params__9564__auto__;var map__37606__$1 = ((cljs.core.seq_QMARK_(map__37606))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37606):map__37606);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37606__$1,cljs.core.constant$keyword$873);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37606__$1,cljs.core.constant$keyword$871);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37606__$1,cljs.core.constant$keyword$1046);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1190,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1189,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9564__auto__))
{var vec__37607 = params__9564__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37607,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37607,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37607,(2),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1190,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1189,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9563__auto___37611);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$965,comm,cljs.core.constant$keyword$955,path_fn,cljs.core.constant$keyword$956,link_fn,cljs.core.constant$keyword$1060,clustermap.app.change_view_path,cljs.core.constant$keyword$1166,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.state,cljs.core.constant$keyword$868),cljs.core.constant$keyword$1165,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$868,cljs.core.constant$keyword$1191)], null);clustermap.nav.init(comm);
clustermap.app.load_boundaryline_collection_indexes();
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(clustermap.components.map.map_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$953,"map-component",cljs.core.constant$keyword$950,shared,cljs.core.constant$keyword$1117,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1153,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1129], null),cljs.core.constant$keyword$857,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$857,cljs.core.constant$keyword$1116], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(clustermap.components.map_report.map_report_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$953,"map-report-component",cljs.core.constant$keyword$950,shared,cljs.core.constant$keyword$1117,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$857,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$857,cljs.core.constant$keyword$1116], null),cljs.core.constant$keyword$1053,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1053], null)], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(clustermap.components.filter.filter_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$953,"search-component",cljs.core.constant$keyword$950,shared,cljs.core.constant$keyword$925,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$857], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Variable",cljs.core.constant$keyword$1056,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$953,"variable-selection-component",cljs.core.constant$keyword$950,shared,cljs.core.constant$keyword$925,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1129,cljs.core.constant$keyword$1054,cljs.core.constant$keyword$1157], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Statistic",cljs.core.constant$keyword$1056,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$953,"stat-selection-component",cljs.core.constant$keyword$950,shared,cljs.core.constant$keyword$925,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1129,cljs.core.constant$keyword$1054,cljs.core.constant$keyword$1158], null)], 0));
clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,"Scale",cljs.core.constant$keyword$1170,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null)),clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$953,"scale-selection-component",cljs.core.constant$keyword$950,shared,cljs.core.constant$keyword$925,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1129,cljs.core.constant$keyword$1054,cljs.core.constant$keyword$1158], null)], 0));
return clustermap.components.mount.mount.cljs$core$IFn$_invoke$arity$variadic(clustermap.components.color_scale.color_scale_component,clustermap.app.state,cljs.core.array_seq([cljs.core.constant$keyword$953,"color-scale-component",cljs.core.constant$keyword$950,shared,cljs.core.constant$keyword$925,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1129,cljs.core.constant$keyword$1054,cljs.core.constant$keyword$1156], null)], 0));
});
