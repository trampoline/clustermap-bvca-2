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
goog.require('clustermap.components.color_scale');
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
goog.require('clustermap.components.color_scale');
goog.require('clustermap.components.filter');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clustermap.components.page_title');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.components.map');
goog.require('clustermap.components.multiview');
goog.require('clustermap.api');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$969,cljs.core.constant$keyword$1080,cljs.core.constant$keyword$1096,cljs.core.constant$keyword$953,cljs.core.constant$keyword$1097,cljs.core.constant$keyword$952,cljs.core.constant$keyword$1098,cljs.core.constant$keyword$939,cljs.core.constant$keyword$1099,cljs.core.constant$keyword$1100,cljs.core.constant$keyword$972,cljs.core.constant$keyword$1101,cljs.core.constant$keyword$976,cljs.core.constant$keyword$1075,cljs.core.constant$keyword$948,cljs.core.constant$keyword$799,cljs.core.constant$keyword$971,cljs.core.constant$keyword$975],[null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$801,cljs.core.constant$keyword$1075,cljs.core.constant$keyword$788,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1034,null], null),cljs.core.constant$keyword$1076,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$986,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$801,cljs.core.constant$keyword$1105,cljs.core.constant$keyword$1104,"companies",cljs.core.constant$keyword$1079,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1077,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1078,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1080,null,cljs.core.constant$keyword$1074,null,cljs.core.constant$keyword$1081,null,cljs.core.constant$keyword$1083,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$801,cljs.core.constant$keyword$922,cljs.core.constant$keyword$798,"companies",cljs.core.constant$keyword$1091,"company",cljs.core.constant$keyword$874,"boundaryline_id",cljs.core.constant$keyword$1092,"!latest_employee_count"], null),cljs.core.constant$keyword$1082,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1093,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1014,cljs.core.constant$keyword$1028], null),cljs.core.constant$keyword$1094,cljs.core.constant$keyword$1032,cljs.core.constant$keyword$1092,cljs.core.constant$keyword$1106], null)], null),cljs.core.constant$keyword$914,null], null),cljs.core.constant$keyword$1102,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$801,cljs.core.constant$keyword$1107,cljs.core.constant$keyword$1104,"company_accounts",cljs.core.constant$keyword$1077,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1092,"accounts_date",cljs.core.constant$keyword$1108,"2003-01-01",cljs.core.constant$keyword$1109,"2012-01-01",cljs.core.constant$keyword$1110,"year"], null),cljs.core.constant$keyword$914,null], null),cljs.core.constant$keyword$1103,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$801,cljs.core.constant$keyword$1103,cljs.core.constant$keyword$1104,"companies",cljs.core.constant$keyword$1077,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$792,null,cljs.core.constant$keyword$1111,(0),cljs.core.constant$keyword$1112,(50),cljs.core.constant$keyword$1113,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),cljs.core.constant$keyword$914,null], null)], null)], null),null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$797,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$798,null,cljs.core.constant$keyword$800,null,cljs.core.constant$keyword$799,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$798,null,cljs.core.constant$keyword$800,null,cljs.core.constant$keyword$799,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$798,null,cljs.core.constant$keyword$800,null,cljs.core.constant$keyword$799,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$799,cljs.core.PersistentArrayMap.EMPTY], null),null,cljs.core.constant$keyword$986]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__36093){var vec__36094 = p__36093;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36094,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36094,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__36094,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__36094,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__36095){var map__36097 = p__36095;var map__36097__$1 = ((cljs.core.seq_QMARK_(map__36097))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36097):map__36097);var path_values = map__36097__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__36095 = null;if (arguments.length > 0) {
  p__36095 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__36095);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__36098){
var p__36095 = cljs.core.seq(arglist__36098);
return set_state__delegate(p__36095);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__36103 = cljs.core.seq(clustermap.app.bl_collections);var chunk__36104 = null;var count__36105 = (0);var i__36106 = (0);while(true){
if((i__36106 < count__36105))
{var blcoll = chunk__36104.cljs$core$IIndexed$_nth$arity$2(null,i__36106);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$799,blcoll);
{
var G__36107 = seq__36103;
var G__36108 = chunk__36104;
var G__36109 = count__36105;
var G__36110 = (i__36106 + (1));
seq__36103 = G__36107;
chunk__36104 = G__36108;
count__36105 = G__36109;
i__36106 = G__36110;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__36103);if(temp__4126__auto__)
{var seq__36103__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36103__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__36103__$1);{
var G__36111 = cljs.core.chunk_rest(seq__36103__$1);
var G__36112 = c__4299__auto__;
var G__36113 = cljs.core.count(c__4299__auto__);
var G__36114 = (0);
seq__36103 = G__36111;
chunk__36104 = G__36112;
count__36105 = G__36113;
i__36106 = G__36114;
continue;
}
} else
{var blcoll = cljs.core.first(seq__36103__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$799,blcoll);
{
var G__36115 = cljs.core.next(seq__36103__$1);
var G__36116 = null;
var G__36117 = (0);
var G__36118 = (0);
seq__36103 = G__36115;
chunk__36104 = G__36116;
count__36105 = G__36117;
i__36106 = G__36118;
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
return (function (state_36142){var state_val_36143 = (state_36142[(1)]);if((state_val_36143 === (2)))
{var inst_36137 = (state_36142[(2)]);var inst_36138 = [cljs.core.constant$keyword$1075,cljs.core.constant$keyword$1076,cljs.core.constant$keyword$986,cljs.core.constant$keyword$914];var inst_36139 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_36138,null));var inst_36140 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36139,inst_36137], 0));var state_36142__$1 = state_36142;return cljs.core.async.impl.ioc_helpers.return_chan(state_36142__$1,inst_36140);
} else
{if((state_val_36143 === (1)))
{var inst_36135 = clustermap.api.boundaryline_aggregation("companies","company",blcoll,variable,null);var state_36142__$1 = state_36142;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36142__$1,(2),inst_36135);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36147 = [null,null,null,null,null,null,null];(statearr_36147[(0)] = state_machine__5679__auto__);
(statearr_36147[(1)] = (1));
return statearr_36147;
});
var state_machine__5679__auto____1 = (function (state_36142){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36142);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36148){if((e36148 instanceof Object))
{var ex__5682__auto__ = e36148;var statearr_36149_36151 = state_36142;(statearr_36149_36151[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36142);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e36148;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__36152 = state_36142;
state_36142 = G__36152;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36142){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36150 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36150;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.load_initial_aggregations = (function load_initial_aggregations(){return clustermap.app.load_aggregation("uk_boroughs","!latest_employee_count");
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_36172){var state_val_36173 = (state_36172[(1)]);if((state_val_36173 === (2)))
{var inst_36169 = (state_36172[(2)]);var inst_36170 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$953,inst_36169], 0));var state_36172__$1 = state_36172;return cljs.core.async.impl.ioc_helpers.return_chan(state_36172__$1,inst_36170);
} else
{if((state_val_36173 === (1)))
{var inst_36167 = clustermap.api.investment_stats();var state_36172__$1 = state_36172;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36172__$1,(2),inst_36167);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36177 = [null,null,null,null,null,null,null];(statearr_36177[(0)] = state_machine__5679__auto__);
(statearr_36177[(1)] = (1));
return statearr_36177;
});
var state_machine__5679__auto____1 = (function (state_36172){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36172);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36178){if((e36178 instanceof Object))
{var ex__5682__auto__ = e36178;var statearr_36179_36181 = state_36172;(statearr_36179_36181[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36172);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e36178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__36182 = state_36172;
state_36172 = G__36182;
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
})();var state__5695__auto__ = (function (){var statearr_36180 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$976,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__36183,type){var vec__36185 = p__36183;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36185,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36185,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36185,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36185,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36185,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36185,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$948,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$801,type,cljs.core.constant$keyword$832,selection], null),cljs.core.constant$keyword$952,selection_investment_stats,cljs.core.constant$keyword$939,selection_investment_account_timelines,cljs.core.constant$keyword$972,selection_investment_aggs,cljs.core.constant$keyword$971,selection_investments,cljs.core.constant$keyword$1098], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__36186){var vec__36191 = p__36186;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36191,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36191,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$969.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$969,selector], 0));
var pred__36192 = cljs.core._EQ_;var expr__36193 = type;if(cljs.core.truth_((pred__36192.cljs$core$IFn$_invoke$arity$2 ? pred__36192.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$886,expr__36193) : pred__36192.call(null,cljs.core.constant$keyword$886,expr__36193))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__36192.cljs$core$IFn$_invoke$arity$2 ? pred__36192.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$887,expr__36193) : pred__36192.call(null,cljs.core.constant$keyword$887,expr__36193))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__36192.cljs$core$IFn$_invoke$arity$2 ? pred__36192.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$889,expr__36193) : pred__36192.call(null,cljs.core.constant$keyword$889,expr__36193))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$975.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$975,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__36198 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36198,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36198,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36198,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36198,(3),null);var type__$1 = ((((function (){var G__36199 = type;var G__36199__$1 = (((G__36199 == null))?null:clojure.string.trim(G__36199));var G__36199__$2 = (((G__36199__$1 == null))?null:cljs.core.count(G__36199__$1));return G__36199__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__36200 = id;var G__36200__$1 = (((G__36200 == null))?null:clojure.string.trim(G__36200));var G__36200__$2 = (((G__36200__$1 == null))?null:cljs.core.count(G__36200__$1));return G__36200__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$975,view,cljs.core.constant$keyword$801,type__$1,cljs.core.constant$keyword$803,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__36201){var vec__36204 = p__36201;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36204,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36204,(1),null);var map__36205 = clustermap.app.parse_route();var map__36205__$1 = ((cljs.core.seq_QMARK_(map__36205))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36205):map__36205);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36205__$1,cljs.core.constant$keyword$975);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__36207 = clustermap.app.parse_route();var map__36207__$1 = ((cljs.core.seq_QMARK_(map__36207))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36207):map__36207);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36207__$1,cljs.core.constant$keyword$803);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36207__$1,cljs.core.constant$keyword$801);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_36240){var state_val_36241 = (state_36240[(1)]);if((state_val_36241 === (2)))
{var inst_36231 = (state_36240[(7)]);var inst_36237 = (state_36240[(2)]);var inst_36238 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1099,inst_36231,cljs.core.constant$keyword$972,inst_36237], 0));var state_36240__$1 = state_36240;return cljs.core.async.impl.ioc_helpers.return_chan(state_36240__$1,inst_36238);
} else
{if((state_val_36241 === (1)))
{var inst_36231 = (state_36240[(7)]);var inst_36229 = cljs.core.deref(clustermap.app.state);var inst_36230 = cljs.core.constant$keyword$1099.cljs$core$IFn$_invoke$arity$1(inst_36229);var inst_36231__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36230,table_view], 0));var inst_36232 = cljs.core.deref(clustermap.app.state);var inst_36233 = cljs.core.constant$keyword$969.cljs$core$IFn$_invoke$arity$1(inst_36232);var inst_36234 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36233,inst_36231__$1], 0));var inst_36235 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36234], 0));var state_36240__$1 = (function (){var statearr_36242 = state_36240;(statearr_36242[(7)] = inst_36231__$1);
return statearr_36242;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36240__$1,(2),inst_36235);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36246 = [null,null,null,null,null,null,null,null];(statearr_36246[(0)] = state_machine__5679__auto__);
(statearr_36246[(1)] = (1));
return statearr_36246;
});
var state_machine__5679__auto____1 = (function (state_36240){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36240);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36247){if((e36247 instanceof Object))
{var ex__5682__auto__ = e36247;var statearr_36248_36250 = state_36240;(statearr_36248_36250[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36240);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e36247;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__36251 = state_36240;
state_36240 = G__36251;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36240){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36249 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36249;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_36284){var state_val_36285 = (state_36284[(1)]);if((state_val_36285 === (2)))
{var inst_36275 = (state_36284[(7)]);var inst_36281 = (state_36284[(2)]);var inst_36282 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1101,inst_36275,cljs.core.constant$keyword$971,inst_36281], 0));var state_36284__$1 = state_36284;return cljs.core.async.impl.ioc_helpers.return_chan(state_36284__$1,inst_36282);
} else
{if((state_val_36285 === (1)))
{var inst_36275 = (state_36284[(7)]);var inst_36273 = cljs.core.deref(clustermap.app.state);var inst_36274 = cljs.core.constant$keyword$1101.cljs$core$IFn$_invoke$arity$1(inst_36273);var inst_36275__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36274,table_view], 0));var inst_36276 = cljs.core.deref(clustermap.app.state);var inst_36277 = cljs.core.constant$keyword$969.cljs$core$IFn$_invoke$arity$1(inst_36276);var inst_36278 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36277,inst_36275__$1], 0));var inst_36279 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36278], 0));var state_36284__$1 = (function (){var statearr_36286 = state_36284;(statearr_36286[(7)] = inst_36275__$1);
return statearr_36286;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36284__$1,(2),inst_36279);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36290 = [null,null,null,null,null,null,null,null];(statearr_36290[(0)] = state_machine__5679__auto__);
(statearr_36290[(1)] = (1));
return statearr_36290;
});
var state_machine__5679__auto____1 = (function (state_36284){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36284);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36291){if((e36291 instanceof Object))
{var ex__5682__auto__ = e36291;var statearr_36292_36294 = state_36284;(statearr_36292_36294[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36284);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e36291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__36295 = state_36284;
state_36284 = G__36295;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36284){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36293 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$977,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$839,clustermap.app.set_selection_route,cljs.core.constant$keyword$1114,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$1052,clustermap.app.set_view_route,cljs.core.constant$keyword$1115,clustermap.app.change_view,cljs.core.constant$keyword$895,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$903,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9487__auto___36312 = (function (params__9488__auto__){if(cljs.core.map_QMARK_(params__9488__auto__))
{var map__36304 = params__9488__auto__;var map__36304__$1 = ((cljs.core.seq_QMARK_(map__36304))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36304):map__36304);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1114,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9488__auto__))
{var vec__36305 = params__9488__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1114,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9487__auto___36312);
var action__9487__auto___36313 = (function (params__9488__auto__){if(cljs.core.map_QMARK_(params__9488__auto__))
{var map__36306 = params__9488__auto__;var map__36306__$1 = ((cljs.core.seq_QMARK_(map__36306))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36306):map__36306);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1114,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9488__auto__))
{var vec__36307 = params__9488__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1114,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9487__auto___36313);
var action__9487__auto___36314 = (function (params__9488__auto__){if(cljs.core.map_QMARK_(params__9488__auto__))
{var map__36308 = params__9488__auto__;var map__36308__$1 = ((cljs.core.seq_QMARK_(map__36308))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36308):map__36308);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36308__$1,cljs.core.constant$keyword$975);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1115,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1114,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9488__auto__))
{var vec__36309 = params__9488__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36309,(0),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1115,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1114,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9487__auto___36314);
var action__9487__auto___36315 = (function (params__9488__auto__){if(cljs.core.map_QMARK_(params__9488__auto__))
{var map__36310 = params__9488__auto__;var map__36310__$1 = ((cljs.core.seq_QMARK_(map__36310))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36310):map__36310);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36310__$1,cljs.core.constant$keyword$803);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36310__$1,cljs.core.constant$keyword$801);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36310__$1,cljs.core.constant$keyword$975);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1115,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9488__auto__))
{var vec__36311 = params__9488__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36311,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36311,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36311,(2),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1115,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9487__auto___36315);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$894,comm,cljs.core.constant$keyword$884,path_fn,cljs.core.constant$keyword$885,link_fn,cljs.core.constant$keyword$985,clustermap.app.change_view_path,cljs.core.constant$keyword$1089,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,clustermap.app.state,cljs.core.constant$keyword$799),cljs.core.constant$keyword$1088,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$799,cljs.core.constant$keyword$1116),cljs.core.constant$keyword$1087,clustermap.app.set_state], null);clustermap.nav.init(comm);
clustermap.app.load_boundaryline_collection_indexes();
clustermap.components.map.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075,cljs.core.constant$keyword$1076,cljs.core.constant$keyword$986], null),"map-component",shared);
clustermap.components.multiview.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075], null),"search-component",shared);
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075,cljs.core.constant$keyword$1076,cljs.core.constant$keyword$986,cljs.core.constant$keyword$1077,cljs.core.constant$keyword$1083], null),"variable-selection-component",shared,"Variable",cljs.core.constant$keyword$1092,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null));
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075,cljs.core.constant$keyword$1076,cljs.core.constant$keyword$986,cljs.core.constant$keyword$1077,cljs.core.constant$keyword$1082], null),"stat-selection-component",shared,"Statistic",cljs.core.constant$keyword$1092,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null));
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075,cljs.core.constant$keyword$1076,cljs.core.constant$keyword$986,cljs.core.constant$keyword$1077,cljs.core.constant$keyword$1082], null),"scale-selection-component",shared,"Scale",cljs.core.constant$keyword$1094,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null));
return clustermap.components.color_scale.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075,cljs.core.constant$keyword$1076,cljs.core.constant$keyword$986,cljs.core.constant$keyword$1077,cljs.core.constant$keyword$1084], null),"color-scale-component",shared);
});
