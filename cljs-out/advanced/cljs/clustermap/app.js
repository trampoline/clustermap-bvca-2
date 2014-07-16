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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$963,cljs.core.constant$keyword$1073,cljs.core.constant$keyword$1087,cljs.core.constant$keyword$947,cljs.core.constant$keyword$1088,cljs.core.constant$keyword$946,cljs.core.constant$keyword$1089,cljs.core.constant$keyword$933,cljs.core.constant$keyword$1090,cljs.core.constant$keyword$1091,cljs.core.constant$keyword$966,cljs.core.constant$keyword$1092,cljs.core.constant$keyword$970,cljs.core.constant$keyword$1068,cljs.core.constant$keyword$942,cljs.core.constant$keyword$793,cljs.core.constant$keyword$965,cljs.core.constant$keyword$969],[null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$795,cljs.core.constant$keyword$1068,cljs.core.constant$keyword$782,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1027,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1028,null], null),cljs.core.constant$keyword$1069,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$980,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$795,cljs.core.constant$keyword$1096,cljs.core.constant$keyword$1095,"companies",cljs.core.constant$keyword$1072,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1070,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1073,null,cljs.core.constant$keyword$1067,null,cljs.core.constant$keyword$1074,null,cljs.core.constant$keyword$1076,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$795,cljs.core.constant$keyword$916,cljs.core.constant$keyword$792,"companies",cljs.core.constant$keyword$1082,"company",cljs.core.constant$keyword$868,"boundaryline_id",cljs.core.constant$keyword$1083,"!latest_employee_count"], null),cljs.core.constant$keyword$1075,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1084,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1008,cljs.core.constant$keyword$1016], null),cljs.core.constant$keyword$1085,cljs.core.constant$keyword$1026,cljs.core.constant$keyword$1083,cljs.core.constant$keyword$1097], null)], null),cljs.core.constant$keyword$908,null], null),cljs.core.constant$keyword$1093,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$795,cljs.core.constant$keyword$1098,cljs.core.constant$keyword$1095,"company_accounts",cljs.core.constant$keyword$1070,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1083,"accounts_date",cljs.core.constant$keyword$1099,"2003-01-01",cljs.core.constant$keyword$1100,"2012-01-01",cljs.core.constant$keyword$1101,"year"], null),cljs.core.constant$keyword$908,null], null),cljs.core.constant$keyword$1094,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$795,cljs.core.constant$keyword$1094,cljs.core.constant$keyword$1095,"companies",cljs.core.constant$keyword$1070,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$786,null,cljs.core.constant$keyword$1102,(0),cljs.core.constant$keyword$1103,(50),cljs.core.constant$keyword$1104,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),cljs.core.constant$keyword$908,null], null)], null)], null),null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$791,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$792,null,cljs.core.constant$keyword$794,null,cljs.core.constant$keyword$793,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$792,null,cljs.core.constant$keyword$794,null,cljs.core.constant$keyword$793,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$792,null,cljs.core.constant$keyword$794,null,cljs.core.constant$keyword$793,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$793,cljs.core.PersistentArrayMap.EMPTY], null),null,cljs.core.constant$keyword$980]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__35834){var vec__35835 = p__35834;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35835,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35835,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__35835,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__35835,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__35836){var map__35838 = p__35836;var map__35838__$1 = ((cljs.core.seq_QMARK_(map__35838))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35838):map__35838);var path_values = map__35838__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__35836 = null;if (arguments.length > 0) {
  p__35836 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__35836);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__35839){
var p__35836 = cljs.core.seq(arglist__35839);
return set_state__delegate(p__35836);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__35844 = cljs.core.seq(clustermap.app.bl_collections);var chunk__35845 = null;var count__35846 = (0);var i__35847 = (0);while(true){
if((i__35847 < count__35846))
{var blcoll = chunk__35845.cljs$core$IIndexed$_nth$arity$2(null,i__35847);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$793,blcoll);
{
var G__35848 = seq__35844;
var G__35849 = chunk__35845;
var G__35850 = count__35846;
var G__35851 = (i__35847 + (1));
seq__35844 = G__35848;
chunk__35845 = G__35849;
count__35846 = G__35850;
i__35847 = G__35851;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__35844);if(temp__4126__auto__)
{var seq__35844__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__35844__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__35844__$1);{
var G__35852 = cljs.core.chunk_rest(seq__35844__$1);
var G__35853 = c__4299__auto__;
var G__35854 = cljs.core.count(c__4299__auto__);
var G__35855 = (0);
seq__35844 = G__35852;
chunk__35845 = G__35853;
count__35846 = G__35854;
i__35847 = G__35855;
continue;
}
} else
{var blcoll = cljs.core.first(seq__35844__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$793,blcoll);
{
var G__35856 = cljs.core.next(seq__35844__$1);
var G__35857 = null;
var G__35858 = (0);
var G__35859 = (0);
seq__35844 = G__35856;
chunk__35845 = G__35857;
count__35846 = G__35858;
i__35847 = G__35859;
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
return (function (state_35883){var state_val_35884 = (state_35883[(1)]);if((state_val_35884 === (2)))
{var inst_35878 = (state_35883[(2)]);var inst_35879 = [cljs.core.constant$keyword$1068,cljs.core.constant$keyword$1069,cljs.core.constant$keyword$980,cljs.core.constant$keyword$908];var inst_35880 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35879,null));var inst_35881 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_35880,inst_35878], 0));var state_35883__$1 = state_35883;return cljs.core.async.impl.ioc_helpers.return_chan(state_35883__$1,inst_35881);
} else
{if((state_val_35884 === (1)))
{var inst_35876 = clustermap.api.boundaryline_aggregation("companies","company",blcoll,variable,null);var state_35883__$1 = state_35883;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35883__$1,(2),inst_35876);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_35888 = [null,null,null,null,null,null,null];(statearr_35888[(0)] = state_machine__5679__auto__);
(statearr_35888[(1)] = (1));
return statearr_35888;
});
var state_machine__5679__auto____1 = (function (state_35883){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_35883);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e35889){if((e35889 instanceof Object))
{var ex__5682__auto__ = e35889;var statearr_35890_35892 = state_35883;(statearr_35890_35892[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35883);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e35889;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__35893 = state_35883;
state_35883 = G__35893;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_35883){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_35883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_35891 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_35891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_35891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.load_initial_aggregations = (function load_initial_aggregations(){return clustermap.app.load_aggregation("uk_boroughs","!latest_employee_count");
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_35913){var state_val_35914 = (state_35913[(1)]);if((state_val_35914 === (2)))
{var inst_35910 = (state_35913[(2)]);var inst_35911 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$947,inst_35910], 0));var state_35913__$1 = state_35913;return cljs.core.async.impl.ioc_helpers.return_chan(state_35913__$1,inst_35911);
} else
{if((state_val_35914 === (1)))
{var inst_35908 = clustermap.api.investment_stats();var state_35913__$1 = state_35913;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35913__$1,(2),inst_35908);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_35918 = [null,null,null,null,null,null,null];(statearr_35918[(0)] = state_machine__5679__auto__);
(statearr_35918[(1)] = (1));
return statearr_35918;
});
var state_machine__5679__auto____1 = (function (state_35913){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_35913);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e35919){if((e35919 instanceof Object))
{var ex__5682__auto__ = e35919;var statearr_35920_35922 = state_35913;(statearr_35920_35922[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35913);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e35919;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__35923 = state_35913;
state_35913 = G__35923;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_35913){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_35913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_35921 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_35921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_35921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$970,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__35924,type){var vec__35926 = p__35924;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35926,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35926,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35926,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35926,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35926,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35926,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$942,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$795,type,cljs.core.constant$keyword$826,selection], null),cljs.core.constant$keyword$946,selection_investment_stats,cljs.core.constant$keyword$933,selection_investment_account_timelines,cljs.core.constant$keyword$966,selection_investment_aggs,cljs.core.constant$keyword$965,selection_investments,cljs.core.constant$keyword$1089], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__35927){var vec__35932 = p__35927;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35932,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35932,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$963.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$963,selector], 0));
var pred__35933 = cljs.core._EQ_;var expr__35934 = type;if(cljs.core.truth_((pred__35933.cljs$core$IFn$_invoke$arity$2 ? pred__35933.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$880,expr__35934) : pred__35933.call(null,cljs.core.constant$keyword$880,expr__35934))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__35933.cljs$core$IFn$_invoke$arity$2 ? pred__35933.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$881,expr__35934) : pred__35933.call(null,cljs.core.constant$keyword$881,expr__35934))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__35933.cljs$core$IFn$_invoke$arity$2 ? pred__35933.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$883,expr__35934) : pred__35933.call(null,cljs.core.constant$keyword$883,expr__35934))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$969.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$969,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__35939 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35939,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35939,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35939,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35939,(3),null);var type__$1 = ((((function (){var G__35940 = type;var G__35940__$1 = (((G__35940 == null))?null:clojure.string.trim(G__35940));var G__35940__$2 = (((G__35940__$1 == null))?null:cljs.core.count(G__35940__$1));return G__35940__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__35941 = id;var G__35941__$1 = (((G__35941 == null))?null:clojure.string.trim(G__35941));var G__35941__$2 = (((G__35941__$1 == null))?null:cljs.core.count(G__35941__$1));return G__35941__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$969,view,cljs.core.constant$keyword$795,type__$1,cljs.core.constant$keyword$797,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__35942){var vec__35945 = p__35942;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35945,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35945,(1),null);var map__35946 = clustermap.app.parse_route();var map__35946__$1 = ((cljs.core.seq_QMARK_(map__35946))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35946):map__35946);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35946__$1,cljs.core.constant$keyword$969);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__35948 = clustermap.app.parse_route();var map__35948__$1 = ((cljs.core.seq_QMARK_(map__35948))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35948):map__35948);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35948__$1,cljs.core.constant$keyword$797);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35948__$1,cljs.core.constant$keyword$795);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_35981){var state_val_35982 = (state_35981[(1)]);if((state_val_35982 === (2)))
{var inst_35972 = (state_35981[(7)]);var inst_35978 = (state_35981[(2)]);var inst_35979 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1090,inst_35972,cljs.core.constant$keyword$966,inst_35978], 0));var state_35981__$1 = state_35981;return cljs.core.async.impl.ioc_helpers.return_chan(state_35981__$1,inst_35979);
} else
{if((state_val_35982 === (1)))
{var inst_35972 = (state_35981[(7)]);var inst_35970 = cljs.core.deref(clustermap.app.state);var inst_35971 = cljs.core.constant$keyword$1090.cljs$core$IFn$_invoke$arity$1(inst_35970);var inst_35972__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_35971,table_view], 0));var inst_35973 = cljs.core.deref(clustermap.app.state);var inst_35974 = cljs.core.constant$keyword$963.cljs$core$IFn$_invoke$arity$1(inst_35973);var inst_35975 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_35974,inst_35972__$1], 0));var inst_35976 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_35975], 0));var state_35981__$1 = (function (){var statearr_35983 = state_35981;(statearr_35983[(7)] = inst_35972__$1);
return statearr_35983;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35981__$1,(2),inst_35976);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_35987 = [null,null,null,null,null,null,null,null];(statearr_35987[(0)] = state_machine__5679__auto__);
(statearr_35987[(1)] = (1));
return statearr_35987;
});
var state_machine__5679__auto____1 = (function (state_35981){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_35981);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e35988){if((e35988 instanceof Object))
{var ex__5682__auto__ = e35988;var statearr_35989_35991 = state_35981;(statearr_35989_35991[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35981);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e35988;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__35992 = state_35981;
state_35981 = G__35992;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_35981){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_35981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_35990 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_35990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_35990;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_36025){var state_val_36026 = (state_36025[(1)]);if((state_val_36026 === (2)))
{var inst_36016 = (state_36025[(7)]);var inst_36022 = (state_36025[(2)]);var inst_36023 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1092,inst_36016,cljs.core.constant$keyword$965,inst_36022], 0));var state_36025__$1 = state_36025;return cljs.core.async.impl.ioc_helpers.return_chan(state_36025__$1,inst_36023);
} else
{if((state_val_36026 === (1)))
{var inst_36016 = (state_36025[(7)]);var inst_36014 = cljs.core.deref(clustermap.app.state);var inst_36015 = cljs.core.constant$keyword$1092.cljs$core$IFn$_invoke$arity$1(inst_36014);var inst_36016__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36015,table_view], 0));var inst_36017 = cljs.core.deref(clustermap.app.state);var inst_36018 = cljs.core.constant$keyword$963.cljs$core$IFn$_invoke$arity$1(inst_36017);var inst_36019 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36018,inst_36016__$1], 0));var inst_36020 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36019], 0));var state_36025__$1 = (function (){var statearr_36027 = state_36025;(statearr_36027[(7)] = inst_36016__$1);
return statearr_36027;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36025__$1,(2),inst_36020);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36031 = [null,null,null,null,null,null,null,null];(statearr_36031[(0)] = state_machine__5679__auto__);
(statearr_36031[(1)] = (1));
return statearr_36031;
});
var state_machine__5679__auto____1 = (function (state_36025){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36025);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36032){if((e36032 instanceof Object))
{var ex__5682__auto__ = e36032;var statearr_36033_36035 = state_36025;(statearr_36033_36035[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36025);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e36032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__36036 = state_36025;
state_36025 = G__36036;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36025){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36034 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$971,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$833,clustermap.app.set_selection_route,cljs.core.constant$keyword$1105,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$1046,clustermap.app.set_view_route,cljs.core.constant$keyword$1106,clustermap.app.change_view,cljs.core.constant$keyword$889,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$897,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9487__auto___36053 = (function (params__9488__auto__){if(cljs.core.map_QMARK_(params__9488__auto__))
{var map__36045 = params__9488__auto__;var map__36045__$1 = ((cljs.core.seq_QMARK_(map__36045))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36045):map__36045);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1105,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9488__auto__))
{var vec__36046 = params__9488__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1105,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9487__auto___36053);
var action__9487__auto___36054 = (function (params__9488__auto__){if(cljs.core.map_QMARK_(params__9488__auto__))
{var map__36047 = params__9488__auto__;var map__36047__$1 = ((cljs.core.seq_QMARK_(map__36047))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36047):map__36047);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1105,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9488__auto__))
{var vec__36048 = params__9488__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1105,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9487__auto___36054);
var action__9487__auto___36055 = (function (params__9488__auto__){if(cljs.core.map_QMARK_(params__9488__auto__))
{var map__36049 = params__9488__auto__;var map__36049__$1 = ((cljs.core.seq_QMARK_(map__36049))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36049):map__36049);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36049__$1,cljs.core.constant$keyword$969);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1106,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1105,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9488__auto__))
{var vec__36050 = params__9488__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36050,(0),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1106,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1105,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9487__auto___36055);
var action__9487__auto___36056 = (function (params__9488__auto__){if(cljs.core.map_QMARK_(params__9488__auto__))
{var map__36051 = params__9488__auto__;var map__36051__$1 = ((cljs.core.seq_QMARK_(map__36051))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36051):map__36051);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36051__$1,cljs.core.constant$keyword$797);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36051__$1,cljs.core.constant$keyword$795);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36051__$1,cljs.core.constant$keyword$969);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1106,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1105,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9488__auto__))
{var vec__36052 = params__9488__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36052,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36052,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36052,(2),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1106,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1105,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9487__auto___36056);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$888,comm,cljs.core.constant$keyword$878,path_fn,cljs.core.constant$keyword$879,link_fn,cljs.core.constant$keyword$979,clustermap.app.change_view_path,cljs.core.constant$keyword$1080,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,clustermap.app.state,cljs.core.constant$keyword$793),cljs.core.constant$keyword$1079,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$793,cljs.core.constant$keyword$1107),cljs.core.constant$keyword$1078,clustermap.app.set_state], null);clustermap.nav.init(comm);
clustermap.app.load_boundaryline_collection_indexes();
clustermap.components.map.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1068,cljs.core.constant$keyword$1069,cljs.core.constant$keyword$980], null),"map-component",shared);
return clustermap.components.multiview.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1068], null),"search-component",shared);
});
