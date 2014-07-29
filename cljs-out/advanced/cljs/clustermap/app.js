// Compiled by ClojureScript 0.0-2268
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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$978,cljs.core.constant$keyword$1088,cljs.core.constant$keyword$1105,cljs.core.constant$keyword$962,cljs.core.constant$keyword$1106,cljs.core.constant$keyword$961,cljs.core.constant$keyword$1107,cljs.core.constant$keyword$948,cljs.core.constant$keyword$1108,cljs.core.constant$keyword$1109,cljs.core.constant$keyword$981,cljs.core.constant$keyword$1110,cljs.core.constant$keyword$985,cljs.core.constant$keyword$1082,cljs.core.constant$keyword$957,cljs.core.constant$keyword$807,cljs.core.constant$keyword$980,cljs.core.constant$keyword$984],[null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$810,cljs.core.constant$keyword$1082,cljs.core.constant$keyword$798,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1043,null], null),cljs.core.constant$keyword$1083,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$995,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$810,cljs.core.constant$keyword$1114,cljs.core.constant$keyword$1113,"companies",cljs.core.constant$keyword$1087,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1084,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1086,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1088,null,cljs.core.constant$keyword$797,null,cljs.core.constant$keyword$1089,null,cljs.core.constant$keyword$1091,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$810,cljs.core.constant$keyword$931,cljs.core.constant$keyword$808,"companies",cljs.core.constant$keyword$1100,"company",cljs.core.constant$keyword$883,"boundaryline_id",cljs.core.constant$keyword$1101,"!latest_employee_count"], null),cljs.core.constant$keyword$1090,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1102,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1023,cljs.core.constant$keyword$1037], null),cljs.core.constant$keyword$1103,cljs.core.constant$keyword$1041,cljs.core.constant$keyword$1101,cljs.core.constant$keyword$1115], null)], null),cljs.core.constant$keyword$923,null], null),cljs.core.constant$keyword$1111,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$810,cljs.core.constant$keyword$1116,cljs.core.constant$keyword$1113,"company_accounts",cljs.core.constant$keyword$1084,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1101,"accounts_date",cljs.core.constant$keyword$1117,"2003-01-01",cljs.core.constant$keyword$1118,"2012-01-01",cljs.core.constant$keyword$1119,"year"], null),cljs.core.constant$keyword$923,null], null),cljs.core.constant$keyword$1112,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$810,cljs.core.constant$keyword$1112,cljs.core.constant$keyword$1113,"companies",cljs.core.constant$keyword$1084,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$802,null,cljs.core.constant$keyword$1120,(0),cljs.core.constant$keyword$1121,(50),cljs.core.constant$keyword$1122,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),cljs.core.constant$keyword$923,null], null)], null)], null),null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$806,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$808,null,cljs.core.constant$keyword$809,null,cljs.core.constant$keyword$807,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$808,null,cljs.core.constant$keyword$809,null,cljs.core.constant$keyword$807,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$808,null,cljs.core.constant$keyword$809,null,cljs.core.constant$keyword$807,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$807,cljs.core.PersistentArrayMap.EMPTY], null),null,cljs.core.constant$keyword$995]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__36768){var vec__36769 = p__36768;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36769,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36769,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__36769,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__36769,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__36770){var map__36772 = p__36770;var map__36772__$1 = ((cljs.core.seq_QMARK_(map__36772))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36772):map__36772);var path_values = map__36772__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__36770 = null;if (arguments.length > 0) {
  p__36770 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__36770);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__36773){
var p__36770 = cljs.core.seq(arglist__36773);
return set_state__delegate(p__36770);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
/**
* @param {...*} var_args
*/
clustermap.app.get_state = (function() { 
var get_state__delegate = function (path){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(clustermap.app.state),cljs.core.flatten(path));
};
var get_state = function (var_args){
var path = null;if (arguments.length > 0) {
  path = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return get_state__delegate.call(this,path);};
get_state.cljs$lang$maxFixedArity = 0;
get_state.cljs$lang$applyTo = (function (arglist__36774){
var path = cljs.core.seq(arglist__36774);
return get_state__delegate(path);
});
get_state.cljs$core$IFn$_invoke$arity$variadic = get_state__delegate;
return get_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__36779 = cljs.core.seq(clustermap.app.bl_collections);var chunk__36780 = null;var count__36781 = (0);var i__36782 = (0);while(true){
if((i__36782 < count__36781))
{var blcoll = chunk__36780.cljs$core$IIndexed$_nth$arity$2(null,i__36782);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$807,blcoll);
{
var G__36783 = seq__36779;
var G__36784 = chunk__36780;
var G__36785 = count__36781;
var G__36786 = (i__36782 + (1));
seq__36779 = G__36783;
chunk__36780 = G__36784;
count__36781 = G__36785;
i__36782 = G__36786;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__36779);if(temp__4126__auto__)
{var seq__36779__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36779__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__36779__$1);{
var G__36787 = cljs.core.chunk_rest(seq__36779__$1);
var G__36788 = c__4299__auto__;
var G__36789 = cljs.core.count(c__4299__auto__);
var G__36790 = (0);
seq__36779 = G__36787;
chunk__36780 = G__36788;
count__36781 = G__36789;
i__36782 = G__36790;
continue;
}
} else
{var blcoll = cljs.core.first(seq__36779__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$807,blcoll);
{
var G__36791 = cljs.core.next(seq__36779__$1);
var G__36792 = null;
var G__36793 = (0);
var G__36794 = (0);
seq__36779 = G__36791;
chunk__36780 = G__36792;
count__36781 = G__36793;
i__36782 = G__36794;
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
return (function (state_36818){var state_val_36819 = (state_36818[(1)]);if((state_val_36819 === (2)))
{var inst_36813 = (state_36818[(2)]);var inst_36814 = [cljs.core.constant$keyword$1082,cljs.core.constant$keyword$1083,cljs.core.constant$keyword$995,cljs.core.constant$keyword$923];var inst_36815 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_36814,null));var inst_36816 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36815,inst_36813], 0));var state_36818__$1 = state_36818;return cljs.core.async.impl.ioc_helpers.return_chan(state_36818__$1,inst_36816);
} else
{if((state_val_36819 === (1)))
{var inst_36811 = clustermap.api.boundaryline_aggregation("companies","company",blcoll,variable,null,null);var state_36818__$1 = state_36818;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36818__$1,(2),inst_36811);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36823 = [null,null,null,null,null,null,null];(statearr_36823[(0)] = state_machine__5679__auto__);
(statearr_36823[(1)] = (1));
return statearr_36823;
});
var state_machine__5679__auto____1 = (function (state_36818){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36818);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36824){if((e36824 instanceof Object))
{var ex__5682__auto__ = e36824;var statearr_36825_36827 = state_36818;(statearr_36825_36827[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36818);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e36824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__36828 = state_36818;
state_36818 = G__36828;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36818){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36826 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.load_initial_aggregations = (function load_initial_aggregations(){return clustermap.app.load_aggregation("uk_boroughs","!latest_employee_count");
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_36848){var state_val_36849 = (state_36848[(1)]);if((state_val_36849 === (2)))
{var inst_36845 = (state_36848[(2)]);var inst_36846 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$962,inst_36845], 0));var state_36848__$1 = state_36848;return cljs.core.async.impl.ioc_helpers.return_chan(state_36848__$1,inst_36846);
} else
{if((state_val_36849 === (1)))
{var inst_36843 = clustermap.api.investment_stats();var state_36848__$1 = state_36848;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36848__$1,(2),inst_36843);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36853 = [null,null,null,null,null,null,null];(statearr_36853[(0)] = state_machine__5679__auto__);
(statearr_36853[(1)] = (1));
return statearr_36853;
});
var state_machine__5679__auto____1 = (function (state_36848){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36848);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36854){if((e36854 instanceof Object))
{var ex__5682__auto__ = e36854;var statearr_36855_36857 = state_36848;(statearr_36855_36857[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36848);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e36854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__36858 = state_36848;
state_36848 = G__36858;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36848){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36856 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$985,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__36859,type){var vec__36861 = p__36859;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36861,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36861,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36861,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36861,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36861,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36861,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$957,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$810,type,cljs.core.constant$keyword$841,selection], null),cljs.core.constant$keyword$961,selection_investment_stats,cljs.core.constant$keyword$948,selection_investment_account_timelines,cljs.core.constant$keyword$981,selection_investment_aggs,cljs.core.constant$keyword$980,selection_investments,cljs.core.constant$keyword$1107], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__36862){var vec__36867 = p__36862;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36867,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36867,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$978.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$978,selector], 0));
var pred__36868 = cljs.core._EQ_;var expr__36869 = type;if(cljs.core.truth_((pred__36868.cljs$core$IFn$_invoke$arity$2 ? pred__36868.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$895,expr__36869) : pred__36868.call(null,cljs.core.constant$keyword$895,expr__36869))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__36868.cljs$core$IFn$_invoke$arity$2 ? pred__36868.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$896,expr__36869) : pred__36868.call(null,cljs.core.constant$keyword$896,expr__36869))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__36868.cljs$core$IFn$_invoke$arity$2 ? pred__36868.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$898,expr__36869) : pred__36868.call(null,cljs.core.constant$keyword$898,expr__36869))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$984.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$984,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__36874 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36874,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36874,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36874,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36874,(3),null);var type__$1 = ((((function (){var G__36875 = type;var G__36875__$1 = (((G__36875 == null))?null:clojure.string.trim(G__36875));var G__36875__$2 = (((G__36875__$1 == null))?null:cljs.core.count(G__36875__$1));return G__36875__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__36876 = id;var G__36876__$1 = (((G__36876 == null))?null:clojure.string.trim(G__36876));var G__36876__$2 = (((G__36876__$1 == null))?null:cljs.core.count(G__36876__$1));return G__36876__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$984,view,cljs.core.constant$keyword$810,type__$1,cljs.core.constant$keyword$812,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__36877){var vec__36880 = p__36877;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36880,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36880,(1),null);var map__36881 = clustermap.app.parse_route();var map__36881__$1 = ((cljs.core.seq_QMARK_(map__36881))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36881):map__36881);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36881__$1,cljs.core.constant$keyword$984);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__36883 = clustermap.app.parse_route();var map__36883__$1 = ((cljs.core.seq_QMARK_(map__36883))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36883):map__36883);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36883__$1,cljs.core.constant$keyword$812);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36883__$1,cljs.core.constant$keyword$810);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_36916){var state_val_36917 = (state_36916[(1)]);if((state_val_36917 === (2)))
{var inst_36907 = (state_36916[(7)]);var inst_36913 = (state_36916[(2)]);var inst_36914 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1108,inst_36907,cljs.core.constant$keyword$981,inst_36913], 0));var state_36916__$1 = state_36916;return cljs.core.async.impl.ioc_helpers.return_chan(state_36916__$1,inst_36914);
} else
{if((state_val_36917 === (1)))
{var inst_36907 = (state_36916[(7)]);var inst_36905 = cljs.core.deref(clustermap.app.state);var inst_36906 = cljs.core.constant$keyword$1108.cljs$core$IFn$_invoke$arity$1(inst_36905);var inst_36907__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36906,table_view], 0));var inst_36908 = cljs.core.deref(clustermap.app.state);var inst_36909 = cljs.core.constant$keyword$978.cljs$core$IFn$_invoke$arity$1(inst_36908);var inst_36910 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36909,inst_36907__$1], 0));var inst_36911 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36910], 0));var state_36916__$1 = (function (){var statearr_36918 = state_36916;(statearr_36918[(7)] = inst_36907__$1);
return statearr_36918;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36916__$1,(2),inst_36911);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36922 = [null,null,null,null,null,null,null,null];(statearr_36922[(0)] = state_machine__5679__auto__);
(statearr_36922[(1)] = (1));
return statearr_36922;
});
var state_machine__5679__auto____1 = (function (state_36916){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36916);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36923){if((e36923 instanceof Object))
{var ex__5682__auto__ = e36923;var statearr_36924_36926 = state_36916;(statearr_36924_36926[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36916);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e36923;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__36927 = state_36916;
state_36916 = G__36927;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36916){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36925 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36925;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_36960){var state_val_36961 = (state_36960[(1)]);if((state_val_36961 === (2)))
{var inst_36951 = (state_36960[(7)]);var inst_36957 = (state_36960[(2)]);var inst_36958 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1110,inst_36951,cljs.core.constant$keyword$980,inst_36957], 0));var state_36960__$1 = state_36960;return cljs.core.async.impl.ioc_helpers.return_chan(state_36960__$1,inst_36958);
} else
{if((state_val_36961 === (1)))
{var inst_36951 = (state_36960[(7)]);var inst_36949 = cljs.core.deref(clustermap.app.state);var inst_36950 = cljs.core.constant$keyword$1110.cljs$core$IFn$_invoke$arity$1(inst_36949);var inst_36951__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36950,table_view], 0));var inst_36952 = cljs.core.deref(clustermap.app.state);var inst_36953 = cljs.core.constant$keyword$978.cljs$core$IFn$_invoke$arity$1(inst_36952);var inst_36954 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36953,inst_36951__$1], 0));var inst_36955 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36954], 0));var state_36960__$1 = (function (){var statearr_36962 = state_36960;(statearr_36962[(7)] = inst_36951__$1);
return statearr_36962;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36960__$1,(2),inst_36955);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36966 = [null,null,null,null,null,null,null,null];(statearr_36966[(0)] = state_machine__5679__auto__);
(statearr_36966[(1)] = (1));
return statearr_36966;
});
var state_machine__5679__auto____1 = (function (state_36960){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36960);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36967){if((e36967 instanceof Object))
{var ex__5682__auto__ = e36967;var statearr_36968_36970 = state_36960;(statearr_36968_36970[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36960);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e36967;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__36971 = state_36960;
state_36960 = G__36971;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36960){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36969 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36969;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$986,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$848,clustermap.app.set_selection_route,cljs.core.constant$keyword$1123,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$1061,clustermap.app.set_view_route,cljs.core.constant$keyword$1124,clustermap.app.change_view,cljs.core.constant$keyword$904,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$912,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9523__auto___36988 = (function (params__9524__auto__){if(cljs.core.map_QMARK_(params__9524__auto__))
{var map__36980 = params__9524__auto__;var map__36980__$1 = ((cljs.core.seq_QMARK_(map__36980))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36980):map__36980);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1123,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9524__auto__))
{var vec__36981 = params__9524__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1123,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9523__auto___36988);
var action__9523__auto___36989 = (function (params__9524__auto__){if(cljs.core.map_QMARK_(params__9524__auto__))
{var map__36982 = params__9524__auto__;var map__36982__$1 = ((cljs.core.seq_QMARK_(map__36982))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36982):map__36982);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1123,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9524__auto__))
{var vec__36983 = params__9524__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1123,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9523__auto___36989);
var action__9523__auto___36990 = (function (params__9524__auto__){if(cljs.core.map_QMARK_(params__9524__auto__))
{var map__36984 = params__9524__auto__;var map__36984__$1 = ((cljs.core.seq_QMARK_(map__36984))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36984):map__36984);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36984__$1,cljs.core.constant$keyword$984);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1124,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1123,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9524__auto__))
{var vec__36985 = params__9524__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36985,(0),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1124,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1123,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9523__auto___36990);
var action__9523__auto___36991 = (function (params__9524__auto__){if(cljs.core.map_QMARK_(params__9524__auto__))
{var map__36986 = params__9524__auto__;var map__36986__$1 = ((cljs.core.seq_QMARK_(map__36986))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36986):map__36986);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36986__$1,cljs.core.constant$keyword$812);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36986__$1,cljs.core.constant$keyword$810);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36986__$1,cljs.core.constant$keyword$984);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1124,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1123,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9524__auto__))
{var vec__36987 = params__9524__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36987,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36987,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36987,(2),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1124,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1123,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9523__auto___36991);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$903,comm,cljs.core.constant$keyword$893,path_fn,cljs.core.constant$keyword$894,link_fn,cljs.core.constant$keyword$994,clustermap.app.change_view_path,cljs.core.constant$keyword$1098,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.state,cljs.core.constant$keyword$807),cljs.core.constant$keyword$1097,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$807,cljs.core.constant$keyword$1125),cljs.core.constant$keyword$1095,clustermap.app.get_state,cljs.core.constant$keyword$1096,clustermap.app.set_state], null);clustermap.nav.init(comm);
clustermap.app.load_boundaryline_collection_indexes();
clustermap.components.map.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1082,cljs.core.constant$keyword$1083,cljs.core.constant$keyword$995], null),"map-component",shared);
clustermap.components.multiview.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1082], null),"search-component",shared);
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1082,cljs.core.constant$keyword$1083,cljs.core.constant$keyword$995,cljs.core.constant$keyword$1084,cljs.core.constant$keyword$1091], null),"variable-selection-component",shared,"Variable",cljs.core.constant$keyword$1101,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null));
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1082,cljs.core.constant$keyword$1083,cljs.core.constant$keyword$995,cljs.core.constant$keyword$1084,cljs.core.constant$keyword$1090], null),"stat-selection-component",shared,"Statistic",cljs.core.constant$keyword$1101,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null));
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1082,cljs.core.constant$keyword$1083,cljs.core.constant$keyword$995,cljs.core.constant$keyword$1084,cljs.core.constant$keyword$1090], null),"scale-selection-component",shared,"Scale",cljs.core.constant$keyword$1103,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null));
return clustermap.components.color_scale.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1082,cljs.core.constant$keyword$1083,cljs.core.constant$keyword$995,cljs.core.constant$keyword$1084,cljs.core.constant$keyword$1092], null),"color-scale-component",shared);
});
