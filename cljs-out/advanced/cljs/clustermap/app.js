// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
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
goog.require('goog.History');
goog.require('goog.events');
goog.require('clustermap.boundarylines');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.search');
goog.require('clustermap.components.map_report');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.map_report');
goog.require('clustermap.routes');
goog.require('clustermap.components.full_report');
goog.require('clustermap.components.search');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clustermap.components.page_title');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clustermap.components.page_title');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.components.map');
goog.require('clustermap.api');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$942,cljs.core.constant$keyword$1042,cljs.core.constant$keyword$1056,cljs.core.constant$keyword$926,cljs.core.constant$keyword$1057,cljs.core.constant$keyword$925,cljs.core.constant$keyword$1058,cljs.core.constant$keyword$912,cljs.core.constant$keyword$1059,cljs.core.constant$keyword$1060,cljs.core.constant$keyword$945,cljs.core.constant$keyword$1061,cljs.core.constant$keyword$949,cljs.core.constant$keyword$1037,cljs.core.constant$keyword$921,cljs.core.constant$keyword$770,cljs.core.constant$keyword$944,cljs.core.constant$keyword$948],[null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$772,cljs.core.constant$keyword$1037,cljs.core.constant$keyword$1062,null,cljs.core.constant$keyword$1038,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$959,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$772,cljs.core.constant$keyword$1066,cljs.core.constant$keyword$1065,"companies",cljs.core.constant$keyword$1041,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1039,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1040,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1042,null,cljs.core.constant$keyword$1036,null,cljs.core.constant$keyword$1043,null,cljs.core.constant$keyword$1045,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$772,cljs.core.constant$keyword$895,cljs.core.constant$keyword$769,"companies",cljs.core.constant$keyword$1051,"company",cljs.core.constant$keyword$847,"boundaryline_id",cljs.core.constant$keyword$1052,"!latest_employee_count"], null),cljs.core.constant$keyword$1044,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1053,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$987,cljs.core.constant$keyword$995], null),cljs.core.constant$keyword$1054,cljs.core.constant$keyword$1005,cljs.core.constant$keyword$1052,cljs.core.constant$keyword$1067], null)], null),cljs.core.constant$keyword$887,null], null),cljs.core.constant$keyword$1063,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$772,cljs.core.constant$keyword$1068,cljs.core.constant$keyword$1065,"company_accounts",cljs.core.constant$keyword$1039,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1052,"accounts_date",cljs.core.constant$keyword$1069,"2003-01-01",cljs.core.constant$keyword$1070,"2012-01-01",cljs.core.constant$keyword$1071,"year"], null),cljs.core.constant$keyword$887,null], null),cljs.core.constant$keyword$1064,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$772,cljs.core.constant$keyword$1064,cljs.core.constant$keyword$1065,"companies",cljs.core.constant$keyword$1039,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$763,null,cljs.core.constant$keyword$1072,(0),cljs.core.constant$keyword$1073,(50),cljs.core.constant$keyword$1074,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),cljs.core.constant$keyword$887,null], null)], null)], null),null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$768,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$769,null,cljs.core.constant$keyword$771,null,cljs.core.constant$keyword$770,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$769,null,cljs.core.constant$keyword$771,null,cljs.core.constant$keyword$770,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$769,null,cljs.core.constant$keyword$771,null,cljs.core.constant$keyword$770,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$770,cljs.core.PersistentArrayMap.EMPTY], null),null,cljs.core.constant$keyword$959]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__34702){var vec__34703 = p__34702;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34703,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34703,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__34703,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__34703,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__34704){var map__34706 = p__34704;var map__34706__$1 = ((cljs.core.seq_QMARK_(map__34706))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34706):map__34706);var path_values = map__34706__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__34704 = null;if (arguments.length > 0) {
  p__34704 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__34704);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__34707){
var p__34704 = cljs.core.seq(arglist__34707);
return set_state__delegate(p__34704);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__34712 = cljs.core.seq(clustermap.app.bl_collections);var chunk__34713 = null;var count__34714 = (0);var i__34715 = (0);while(true){
if((i__34715 < count__34714))
{var blcoll = chunk__34713.cljs$core$IIndexed$_nth$arity$2(null,i__34715);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$770,blcoll);
{
var G__34716 = seq__34712;
var G__34717 = chunk__34713;
var G__34718 = count__34714;
var G__34719 = (i__34715 + (1));
seq__34712 = G__34716;
chunk__34713 = G__34717;
count__34714 = G__34718;
i__34715 = G__34719;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__34712);if(temp__4126__auto__)
{var seq__34712__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34712__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__34712__$1);{
var G__34720 = cljs.core.chunk_rest(seq__34712__$1);
var G__34721 = c__4299__auto__;
var G__34722 = cljs.core.count(c__4299__auto__);
var G__34723 = (0);
seq__34712 = G__34720;
chunk__34713 = G__34721;
count__34714 = G__34722;
i__34715 = G__34723;
continue;
}
} else
{var blcoll = cljs.core.first(seq__34712__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$770,blcoll);
{
var G__34724 = cljs.core.next(seq__34712__$1);
var G__34725 = null;
var G__34726 = (0);
var G__34727 = (0);
seq__34712 = G__34724;
chunk__34713 = G__34725;
count__34714 = G__34726;
i__34715 = G__34727;
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
return (function (state_34751){var state_val_34752 = (state_34751[(1)]);if((state_val_34752 === (2)))
{var inst_34746 = (state_34751[(2)]);var inst_34747 = [cljs.core.constant$keyword$1037,cljs.core.constant$keyword$1038,cljs.core.constant$keyword$959,cljs.core.constant$keyword$887];var inst_34748 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34747,null));var inst_34749 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34748,inst_34746], 0));var state_34751__$1 = state_34751;return cljs.core.async.impl.ioc_helpers.return_chan(state_34751__$1,inst_34749);
} else
{if((state_val_34752 === (1)))
{var inst_34744 = clustermap.api.boundaryline_aggregation("companies","company",blcoll,variable);var state_34751__$1 = state_34751;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34751__$1,(2),inst_34744);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34756 = [null,null,null,null,null,null,null];(statearr_34756[(0)] = state_machine__5679__auto__);
(statearr_34756[(1)] = (1));
return statearr_34756;
});
var state_machine__5679__auto____1 = (function (state_34751){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34751);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34757){if((e34757 instanceof Object))
{var ex__5682__auto__ = e34757;var statearr_34758_34760 = state_34751;(statearr_34758_34760[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34751);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e34757;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__34761 = state_34751;
state_34751 = G__34761;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34751){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_34759 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34759;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.load_initial_aggregations = (function load_initial_aggregations(){return clustermap.app.load_aggregation("uk_boroughs","!latest_employee_count");
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_34781){var state_val_34782 = (state_34781[(1)]);if((state_val_34782 === (2)))
{var inst_34778 = (state_34781[(2)]);var inst_34779 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$926,inst_34778], 0));var state_34781__$1 = state_34781;return cljs.core.async.impl.ioc_helpers.return_chan(state_34781__$1,inst_34779);
} else
{if((state_val_34782 === (1)))
{var inst_34776 = clustermap.api.investment_stats();var state_34781__$1 = state_34781;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34781__$1,(2),inst_34776);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34786 = [null,null,null,null,null,null,null];(statearr_34786[(0)] = state_machine__5679__auto__);
(statearr_34786[(1)] = (1));
return statearr_34786;
});
var state_machine__5679__auto____1 = (function (state_34781){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34781);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34787){if((e34787 instanceof Object))
{var ex__5682__auto__ = e34787;var statearr_34788_34790 = state_34781;(statearr_34788_34790[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34781);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e34787;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__34791 = state_34781;
state_34781 = G__34791;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34781){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_34789 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34789;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$949,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__34792,type){var vec__34794 = p__34792;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34794,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34794,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34794,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34794,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34794,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34794,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$921,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$772,type,cljs.core.constant$keyword$804,selection], null),cljs.core.constant$keyword$925,selection_investment_stats,cljs.core.constant$keyword$912,selection_investment_account_timelines,cljs.core.constant$keyword$945,selection_investment_aggs,cljs.core.constant$keyword$944,selection_investments,cljs.core.constant$keyword$1058], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__34795){var vec__34800 = p__34795;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34800,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34800,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$942.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$942,selector], 0));
var pred__34801 = cljs.core._EQ_;var expr__34802 = type;if(cljs.core.truth_((pred__34801.cljs$core$IFn$_invoke$arity$2 ? pred__34801.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$859,expr__34802) : pred__34801.call(null,cljs.core.constant$keyword$859,expr__34802))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__34801.cljs$core$IFn$_invoke$arity$2 ? pred__34801.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$860,expr__34802) : pred__34801.call(null,cljs.core.constant$keyword$860,expr__34802))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__34801.cljs$core$IFn$_invoke$arity$2 ? pred__34801.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$862,expr__34802) : pred__34801.call(null,cljs.core.constant$keyword$862,expr__34802))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$948.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$948,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__34807 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807,(3),null);var type__$1 = ((((function (){var G__34808 = type;var G__34808__$1 = (((G__34808 == null))?null:clojure.string.trim(G__34808));var G__34808__$2 = (((G__34808__$1 == null))?null:cljs.core.count(G__34808__$1));return G__34808__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__34809 = id;var G__34809__$1 = (((G__34809 == null))?null:clojure.string.trim(G__34809));var G__34809__$2 = (((G__34809__$1 == null))?null:cljs.core.count(G__34809__$1));return G__34809__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$948,view,cljs.core.constant$keyword$772,type__$1,cljs.core.constant$keyword$774,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__34810){var vec__34813 = p__34810;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34813,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34813,(1),null);var map__34814 = clustermap.app.parse_route();var map__34814__$1 = ((cljs.core.seq_QMARK_(map__34814))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34814):map__34814);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34814__$1,cljs.core.constant$keyword$948);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__34816 = clustermap.app.parse_route();var map__34816__$1 = ((cljs.core.seq_QMARK_(map__34816))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34816):map__34816);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34816__$1,cljs.core.constant$keyword$774);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34816__$1,cljs.core.constant$keyword$772);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_34849){var state_val_34850 = (state_34849[(1)]);if((state_val_34850 === (2)))
{var inst_34840 = (state_34849[(7)]);var inst_34846 = (state_34849[(2)]);var inst_34847 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1059,inst_34840,cljs.core.constant$keyword$945,inst_34846], 0));var state_34849__$1 = state_34849;return cljs.core.async.impl.ioc_helpers.return_chan(state_34849__$1,inst_34847);
} else
{if((state_val_34850 === (1)))
{var inst_34840 = (state_34849[(7)]);var inst_34838 = cljs.core.deref(clustermap.app.state);var inst_34839 = cljs.core.constant$keyword$1059.cljs$core$IFn$_invoke$arity$1(inst_34838);var inst_34840__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34839,table_view], 0));var inst_34841 = cljs.core.deref(clustermap.app.state);var inst_34842 = cljs.core.constant$keyword$942.cljs$core$IFn$_invoke$arity$1(inst_34841);var inst_34843 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34842,inst_34840__$1], 0));var inst_34844 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34843], 0));var state_34849__$1 = (function (){var statearr_34851 = state_34849;(statearr_34851[(7)] = inst_34840__$1);
return statearr_34851;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34849__$1,(2),inst_34844);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34855 = [null,null,null,null,null,null,null,null];(statearr_34855[(0)] = state_machine__5679__auto__);
(statearr_34855[(1)] = (1));
return statearr_34855;
});
var state_machine__5679__auto____1 = (function (state_34849){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34849);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34856){if((e34856 instanceof Object))
{var ex__5682__auto__ = e34856;var statearr_34857_34859 = state_34849;(statearr_34857_34859[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34849);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e34856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__34860 = state_34849;
state_34849 = G__34860;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34849){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_34858 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_34893){var state_val_34894 = (state_34893[(1)]);if((state_val_34894 === (2)))
{var inst_34884 = (state_34893[(7)]);var inst_34890 = (state_34893[(2)]);var inst_34891 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1061,inst_34884,cljs.core.constant$keyword$944,inst_34890], 0));var state_34893__$1 = state_34893;return cljs.core.async.impl.ioc_helpers.return_chan(state_34893__$1,inst_34891);
} else
{if((state_val_34894 === (1)))
{var inst_34884 = (state_34893[(7)]);var inst_34882 = cljs.core.deref(clustermap.app.state);var inst_34883 = cljs.core.constant$keyword$1061.cljs$core$IFn$_invoke$arity$1(inst_34882);var inst_34884__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34883,table_view], 0));var inst_34885 = cljs.core.deref(clustermap.app.state);var inst_34886 = cljs.core.constant$keyword$942.cljs$core$IFn$_invoke$arity$1(inst_34885);var inst_34887 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34886,inst_34884__$1], 0));var inst_34888 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_34887], 0));var state_34893__$1 = (function (){var statearr_34895 = state_34893;(statearr_34895[(7)] = inst_34884__$1);
return statearr_34895;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34893__$1,(2),inst_34888);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34899 = [null,null,null,null,null,null,null,null];(statearr_34899[(0)] = state_machine__5679__auto__);
(statearr_34899[(1)] = (1));
return statearr_34899;
});
var state_machine__5679__auto____1 = (function (state_34893){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34893);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34900){if((e34900 instanceof Object))
{var ex__5682__auto__ = e34900;var statearr_34901_34903 = state_34893;(statearr_34901_34903[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34893);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e34900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__34904 = state_34893;
state_34893 = G__34904;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34893){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_34902 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$950,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$811,clustermap.app.set_selection_route,cljs.core.constant$keyword$1075,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$1015,clustermap.app.set_view_route,cljs.core.constant$keyword$1076,clustermap.app.change_view,cljs.core.constant$keyword$868,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$876,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9471__auto___34921 = (function (params__9472__auto__){if(cljs.core.map_QMARK_(params__9472__auto__))
{var map__34913 = params__9472__auto__;var map__34913__$1 = ((cljs.core.seq_QMARK_(map__34913))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34913):map__34913);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9472__auto__))
{var vec__34914 = params__9472__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9471__auto___34921);
var action__9471__auto___34922 = (function (params__9472__auto__){if(cljs.core.map_QMARK_(params__9472__auto__))
{var map__34915 = params__9472__auto__;var map__34915__$1 = ((cljs.core.seq_QMARK_(map__34915))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34915):map__34915);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9472__auto__))
{var vec__34916 = params__9472__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9471__auto___34922);
var action__9471__auto___34923 = (function (params__9472__auto__){if(cljs.core.map_QMARK_(params__9472__auto__))
{var map__34917 = params__9472__auto__;var map__34917__$1 = ((cljs.core.seq_QMARK_(map__34917))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34917):map__34917);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34917__$1,cljs.core.constant$keyword$948);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1076,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9472__auto__))
{var vec__34918 = params__9472__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34918,(0),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1076,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9471__auto___34923);
var action__9471__auto___34924 = (function (params__9472__auto__){if(cljs.core.map_QMARK_(params__9472__auto__))
{var map__34919 = params__9472__auto__;var map__34919__$1 = ((cljs.core.seq_QMARK_(map__34919))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34919):map__34919);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34919__$1,cljs.core.constant$keyword$774);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34919__$1,cljs.core.constant$keyword$772);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34919__$1,cljs.core.constant$keyword$948);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1076,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9472__auto__))
{var vec__34920 = params__9472__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34920,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34920,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34920,(2),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1076,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9471__auto___34924);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$867,comm,cljs.core.constant$keyword$857,path_fn,cljs.core.constant$keyword$858,link_fn,cljs.core.constant$keyword$958,clustermap.app.change_view_path,cljs.core.constant$keyword$1049,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,clustermap.app.state,cljs.core.constant$keyword$770),cljs.core.constant$keyword$1048,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$770,cljs.core.constant$keyword$1077),cljs.core.constant$keyword$1047,clustermap.app.set_state], null);clustermap.nav.init(comm);
clustermap.app.load_boundaryline_collection_indexes();
return clustermap.components.map.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1037,cljs.core.constant$keyword$1038,cljs.core.constant$keyword$959], null),"map-component",shared);
});
