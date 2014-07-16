// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('secretary.core');
goog.require('clustermap.components.multiview');
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
goog.require('clustermap.components.search');
goog.require('clustermap.components.map_report');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.filter');
goog.require('clustermap.components.map_report');
goog.require('clustermap.routes');
goog.require('clustermap.components.full_report');
goog.require('clustermap.components.search');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.filter');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clustermap.components.page_title');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.components.map');
goog.require('clustermap.components.multiview');
goog.require('clustermap.api');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$965,cljs.core.constant$keyword$1076,cljs.core.constant$keyword$1090,cljs.core.constant$keyword$949,cljs.core.constant$keyword$1091,cljs.core.constant$keyword$948,cljs.core.constant$keyword$1092,cljs.core.constant$keyword$935,cljs.core.constant$keyword$1093,cljs.core.constant$keyword$1094,cljs.core.constant$keyword$968,cljs.core.constant$keyword$1095,cljs.core.constant$keyword$972,cljs.core.constant$keyword$1071,cljs.core.constant$keyword$944,cljs.core.constant$keyword$795,cljs.core.constant$keyword$967,cljs.core.constant$keyword$971],[null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$797,cljs.core.constant$keyword$1071,cljs.core.constant$keyword$784,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1029,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1030,null], null),cljs.core.constant$keyword$1072,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$982,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$797,cljs.core.constant$keyword$1099,cljs.core.constant$keyword$1098,"companies",cljs.core.constant$keyword$1075,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1073,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1074,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1076,null,cljs.core.constant$keyword$1070,null,cljs.core.constant$keyword$1077,null,cljs.core.constant$keyword$1079,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$797,cljs.core.constant$keyword$918,cljs.core.constant$keyword$794,"companies",cljs.core.constant$keyword$1085,"company",cljs.core.constant$keyword$870,"boundaryline_id",cljs.core.constant$keyword$1086,"!latest_employee_count"], null),cljs.core.constant$keyword$1078,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1087,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1024], null),cljs.core.constant$keyword$1088,cljs.core.constant$keyword$1028,cljs.core.constant$keyword$1086,cljs.core.constant$keyword$1100], null)], null),cljs.core.constant$keyword$910,null], null),cljs.core.constant$keyword$1096,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$797,cljs.core.constant$keyword$1101,cljs.core.constant$keyword$1098,"company_accounts",cljs.core.constant$keyword$1073,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1086,"accounts_date",cljs.core.constant$keyword$1102,"2003-01-01",cljs.core.constant$keyword$1103,"2012-01-01",cljs.core.constant$keyword$1104,"year"], null),cljs.core.constant$keyword$910,null], null),cljs.core.constant$keyword$1097,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$797,cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1098,"companies",cljs.core.constant$keyword$1073,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$788,null,cljs.core.constant$keyword$1105,(0),cljs.core.constant$keyword$1106,(50),cljs.core.constant$keyword$1107,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),cljs.core.constant$keyword$910,null], null)], null)], null),null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$793,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$794,null,cljs.core.constant$keyword$796,null,cljs.core.constant$keyword$795,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$794,null,cljs.core.constant$keyword$796,null,cljs.core.constant$keyword$795,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$794,null,cljs.core.constant$keyword$796,null,cljs.core.constant$keyword$795,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$795,cljs.core.PersistentArrayMap.EMPTY], null),null,cljs.core.constant$keyword$982]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__35981){var vec__35982 = p__35981;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35982,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35982,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__35982,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__35982,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__35983){var map__35985 = p__35983;var map__35985__$1 = ((cljs.core.seq_QMARK_(map__35985))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35985):map__35985);var path_values = map__35985__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__35983 = null;if (arguments.length > 0) {
  p__35983 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__35983);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__35986){
var p__35983 = cljs.core.seq(arglist__35986);
return set_state__delegate(p__35983);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__35991 = cljs.core.seq(clustermap.app.bl_collections);var chunk__35992 = null;var count__35993 = (0);var i__35994 = (0);while(true){
if((i__35994 < count__35993))
{var blcoll = chunk__35992.cljs$core$IIndexed$_nth$arity$2(null,i__35994);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$795,blcoll);
{
var G__35995 = seq__35991;
var G__35996 = chunk__35992;
var G__35997 = count__35993;
var G__35998 = (i__35994 + (1));
seq__35991 = G__35995;
chunk__35992 = G__35996;
count__35993 = G__35997;
i__35994 = G__35998;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__35991);if(temp__4126__auto__)
{var seq__35991__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__35991__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__35991__$1);{
var G__35999 = cljs.core.chunk_rest(seq__35991__$1);
var G__36000 = c__4299__auto__;
var G__36001 = cljs.core.count(c__4299__auto__);
var G__36002 = (0);
seq__35991 = G__35999;
chunk__35992 = G__36000;
count__35993 = G__36001;
i__35994 = G__36002;
continue;
}
} else
{var blcoll = cljs.core.first(seq__35991__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$795,blcoll);
{
var G__36003 = cljs.core.next(seq__35991__$1);
var G__36004 = null;
var G__36005 = (0);
var G__36006 = (0);
seq__35991 = G__36003;
chunk__35992 = G__36004;
count__35993 = G__36005;
i__35994 = G__36006;
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
clustermap.app.load_aggregation = (function load_aggregation(blcoll,variable){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_36030){var state_val_36031 = (state_36030[(1)]);if((state_val_36031 === (2)))
{var inst_36025 = (state_36030[(2)]);var inst_36026 = [cljs.core.constant$keyword$1071,cljs.core.constant$keyword$1072,cljs.core.constant$keyword$982,cljs.core.constant$keyword$910];var inst_36027 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_36026,null));var inst_36028 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36027,inst_36025], 0));var state_36030__$1 = state_36030;return cljs.core.async.impl.ioc_helpers.return_chan(state_36030__$1,inst_36028);
} else
{if((state_val_36031 === (1)))
{var inst_36023 = clustermap.api.boundaryline_aggregation("companies","company",blcoll,variable,null);var state_36030__$1 = state_36030;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36030__$1,(2),inst_36023);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36035 = [null,null,null,null,null,null,null];(statearr_36035[(0)] = state_machine__5679__auto__);
(statearr_36035[(1)] = (1));
return statearr_36035;
});
var state_machine__5679__auto____1 = (function (state_36030){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36030);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36036){if((e36036 instanceof Object))
{var ex__5682__auto__ = e36036;var statearr_36037_36039 = state_36030;(statearr_36037_36039[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36030);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e36036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__36040 = state_36030;
state_36030 = G__36040;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36030){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36038 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36038;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.load_initial_aggregations = (function load_initial_aggregations(){return clustermap.app.load_aggregation("uk_boroughs","!latest_employee_count");
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_36060){var state_val_36061 = (state_36060[(1)]);if((state_val_36061 === (2)))
{var inst_36057 = (state_36060[(2)]);var inst_36058 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$949,inst_36057], 0));var state_36060__$1 = state_36060;return cljs.core.async.impl.ioc_helpers.return_chan(state_36060__$1,inst_36058);
} else
{if((state_val_36061 === (1)))
{var inst_36055 = clustermap.api.investment_stats();var state_36060__$1 = state_36060;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36060__$1,(2),inst_36055);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36065 = [null,null,null,null,null,null,null];(statearr_36065[(0)] = state_machine__5679__auto__);
(statearr_36065[(1)] = (1));
return statearr_36065;
});
var state_machine__5679__auto____1 = (function (state_36060){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36060);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36066){if((e36066 instanceof Object))
{var ex__5682__auto__ = e36066;var statearr_36067_36069 = state_36060;(statearr_36067_36069[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36060);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e36066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__36070 = state_36060;
state_36060 = G__36070;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36060){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36068 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$972,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__36071,type){var vec__36073 = p__36071;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36073,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36073,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36073,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36073,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36073,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36073,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$944,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$797,type,cljs.core.constant$keyword$828,selection], null),cljs.core.constant$keyword$948,selection_investment_stats,cljs.core.constant$keyword$935,selection_investment_account_timelines,cljs.core.constant$keyword$968,selection_investment_aggs,cljs.core.constant$keyword$967,selection_investments,cljs.core.constant$keyword$1092], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__36074){var vec__36079 = p__36074;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36079,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36079,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$965.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$965,selector], 0));
var pred__36080 = cljs.core._EQ_;var expr__36081 = type;if(cljs.core.truth_((pred__36080.cljs$core$IFn$_invoke$arity$2 ? pred__36080.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$882,expr__36081) : pred__36080.call(null,cljs.core.constant$keyword$882,expr__36081))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__36080.cljs$core$IFn$_invoke$arity$2 ? pred__36080.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$883,expr__36081) : pred__36080.call(null,cljs.core.constant$keyword$883,expr__36081))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__36080.cljs$core$IFn$_invoke$arity$2 ? pred__36080.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$885,expr__36081) : pred__36080.call(null,cljs.core.constant$keyword$885,expr__36081))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$971.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$971,view__$1], 0));
return clustermap.nav.change_view(cljs.core.name(view__$1));
} else
{return null;
}
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3531__auto__ = type;if(cljs.core.truth_(and__3531__auto__))
{return id;
} else
{return and__3531__auto__;
}
})()))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name((function (){var or__3543__auto__ = view;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "map";
}
})()))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(type))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))));
} else
{if(cljs.core.truth_(view))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(view))));
} else
{if(true)
{return clustermap.app.history.setToken((""));
} else
{return null;
}
}
}
});
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__36086 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36086,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36086,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36086,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36086,(3),null);var type__$1 = ((((function (){var G__36087 = type;var G__36087__$1 = (((G__36087 == null))?null:clojure.string.trim(G__36087));var G__36087__$2 = (((G__36087__$1 == null))?null:cljs.core.count(G__36087__$1));return G__36087__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__36088 = id;var G__36088__$1 = (((G__36088 == null))?null:clojure.string.trim(G__36088));var G__36088__$2 = (((G__36088__$1 == null))?null:cljs.core.count(G__36088__$1));return G__36088__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$971,view,cljs.core.constant$keyword$797,type__$1,cljs.core.constant$keyword$799,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__36089){var vec__36092 = p__36089;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36092,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36092,(1),null);var map__36093 = clustermap.app.parse_route();var map__36093__$1 = ((cljs.core.seq_QMARK_(map__36093))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36093):map__36093);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36093__$1,cljs.core.constant$keyword$971);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__36095 = clustermap.app.parse_route();var map__36095__$1 = ((cljs.core.seq_QMARK_(map__36095))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36095):map__36095);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36095__$1,cljs.core.constant$keyword$799);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36095__$1,cljs.core.constant$keyword$797);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_36128){var state_val_36129 = (state_36128[(1)]);if((state_val_36129 === (2)))
{var inst_36119 = (state_36128[(7)]);var inst_36125 = (state_36128[(2)]);var inst_36126 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1093,inst_36119,cljs.core.constant$keyword$968,inst_36125], 0));var state_36128__$1 = state_36128;return cljs.core.async.impl.ioc_helpers.return_chan(state_36128__$1,inst_36126);
} else
{if((state_val_36129 === (1)))
{var inst_36119 = (state_36128[(7)]);var inst_36117 = cljs.core.deref(clustermap.app.state);var inst_36118 = cljs.core.constant$keyword$1093.cljs$core$IFn$_invoke$arity$1(inst_36117);var inst_36119__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36118,table_view], 0));var inst_36120 = cljs.core.deref(clustermap.app.state);var inst_36121 = cljs.core.constant$keyword$965.cljs$core$IFn$_invoke$arity$1(inst_36120);var inst_36122 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36121,inst_36119__$1], 0));var inst_36123 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36122], 0));var state_36128__$1 = (function (){var statearr_36130 = state_36128;(statearr_36130[(7)] = inst_36119__$1);
return statearr_36130;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36128__$1,(2),inst_36123);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36134 = [null,null,null,null,null,null,null,null];(statearr_36134[(0)] = state_machine__5679__auto__);
(statearr_36134[(1)] = (1));
return statearr_36134;
});
var state_machine__5679__auto____1 = (function (state_36128){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36128);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36135){if((e36135 instanceof Object))
{var ex__5682__auto__ = e36135;var statearr_36136_36138 = state_36128;(statearr_36136_36138[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36128);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e36135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__36139 = state_36128;
state_36128 = G__36139;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36128){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36137 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36137;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_36172){var state_val_36173 = (state_36172[(1)]);if((state_val_36173 === (2)))
{var inst_36163 = (state_36172[(7)]);var inst_36169 = (state_36172[(2)]);var inst_36170 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1095,inst_36163,cljs.core.constant$keyword$967,inst_36169], 0));var state_36172__$1 = state_36172;return cljs.core.async.impl.ioc_helpers.return_chan(state_36172__$1,inst_36170);
} else
{if((state_val_36173 === (1)))
{var inst_36163 = (state_36172[(7)]);var inst_36161 = cljs.core.deref(clustermap.app.state);var inst_36162 = cljs.core.constant$keyword$1095.cljs$core$IFn$_invoke$arity$1(inst_36161);var inst_36163__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36162,table_view], 0));var inst_36164 = cljs.core.deref(clustermap.app.state);var inst_36165 = cljs.core.constant$keyword$965.cljs$core$IFn$_invoke$arity$1(inst_36164);var inst_36166 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36165,inst_36163__$1], 0));var inst_36167 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36166], 0));var state_36172__$1 = (function (){var statearr_36174 = state_36172;(statearr_36174[(7)] = inst_36163__$1);
return statearr_36174;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36172__$1,(2),inst_36167);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36178 = [null,null,null,null,null,null,null,null];(statearr_36178[(0)] = state_machine__5679__auto__);
(statearr_36178[(1)] = (1));
return statearr_36178;
});
var state_machine__5679__auto____1 = (function (state_36172){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36172);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36179){if((e36179 instanceof Object))
{var ex__5682__auto__ = e36179;var statearr_36180_36182 = state_36172;(statearr_36180_36182[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36172);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e36179;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__36183 = state_36172;
state_36172 = G__36183;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36172){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36181 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$973,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$835,clustermap.app.set_selection_route,cljs.core.constant$keyword$1108,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$1048,clustermap.app.set_view_route,cljs.core.constant$keyword$1109,clustermap.app.change_view,cljs.core.constant$keyword$891,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$899,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9487__auto___36200 = (function (params__9488__auto__){if(cljs.core.map_QMARK_(params__9488__auto__))
{var map__36192 = params__9488__auto__;var map__36192__$1 = ((cljs.core.seq_QMARK_(map__36192))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36192):map__36192);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1108,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9488__auto__))
{var vec__36193 = params__9488__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1108,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9487__auto___36200);
var action__9487__auto___36201 = (function (params__9488__auto__){if(cljs.core.map_QMARK_(params__9488__auto__))
{var map__36194 = params__9488__auto__;var map__36194__$1 = ((cljs.core.seq_QMARK_(map__36194))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36194):map__36194);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1108,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9488__auto__))
{var vec__36195 = params__9488__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1108,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9487__auto___36201);
var action__9487__auto___36202 = (function (params__9488__auto__){if(cljs.core.map_QMARK_(params__9488__auto__))
{var map__36196 = params__9488__auto__;var map__36196__$1 = ((cljs.core.seq_QMARK_(map__36196))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36196):map__36196);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36196__$1,cljs.core.constant$keyword$971);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1109,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1108,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9488__auto__))
{var vec__36197 = params__9488__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36197,(0),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1109,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1108,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9487__auto___36202);
var action__9487__auto___36203 = (function (params__9488__auto__){if(cljs.core.map_QMARK_(params__9488__auto__))
{var map__36198 = params__9488__auto__;var map__36198__$1 = ((cljs.core.seq_QMARK_(map__36198))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36198):map__36198);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36198__$1,cljs.core.constant$keyword$799);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36198__$1,cljs.core.constant$keyword$797);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36198__$1,cljs.core.constant$keyword$971);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1109,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1108,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9488__auto__))
{var vec__36199 = params__9488__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36199,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36199,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36199,(2),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1109,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1108,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9487__auto___36203);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$890,comm,cljs.core.constant$keyword$880,path_fn,cljs.core.constant$keyword$881,link_fn,cljs.core.constant$keyword$981,clustermap.app.change_view_path,cljs.core.constant$keyword$1083,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,clustermap.app.state,cljs.core.constant$keyword$795),cljs.core.constant$keyword$1082,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$795,cljs.core.constant$keyword$1110),cljs.core.constant$keyword$1081,clustermap.app.set_state], null);clustermap.nav.init(comm);
clustermap.app.load_boundaryline_collection_indexes();
clustermap.components.map.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1071,cljs.core.constant$keyword$1072,cljs.core.constant$keyword$982], null),"map-component",shared);
clustermap.components.multiview.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1071], null),"search-component",shared);
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1071,cljs.core.constant$keyword$1072,cljs.core.constant$keyword$982,cljs.core.constant$keyword$1073,cljs.core.constant$keyword$1079], null),"variable-selection-component",shared,"Variable",cljs.core.constant$keyword$1086,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null));
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1071,cljs.core.constant$keyword$1072,cljs.core.constant$keyword$982,cljs.core.constant$keyword$1073,cljs.core.constant$keyword$1078], null),"stat-selection-component",shared,"Statistic",cljs.core.constant$keyword$1086,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null));
return clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1071,cljs.core.constant$keyword$1072,cljs.core.constant$keyword$982,cljs.core.constant$keyword$1073,cljs.core.constant$keyword$1078], null),"scale-selection-component",shared,"Scale",cljs.core.constant$keyword$1088,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null));
});
