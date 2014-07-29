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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$984,cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1114,cljs.core.constant$keyword$968,cljs.core.constant$keyword$1115,cljs.core.constant$keyword$967,cljs.core.constant$keyword$1116,cljs.core.constant$keyword$954,cljs.core.constant$keyword$1117,cljs.core.constant$keyword$1118,cljs.core.constant$keyword$987,cljs.core.constant$keyword$1119,cljs.core.constant$keyword$991,cljs.core.constant$keyword$1091,cljs.core.constant$keyword$963,cljs.core.constant$keyword$813,cljs.core.constant$keyword$986,cljs.core.constant$keyword$990],[null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$816,cljs.core.constant$keyword$1091,cljs.core.constant$keyword$804,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1048,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1049,null], null),cljs.core.constant$keyword$1092,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1001,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$816,cljs.core.constant$keyword$1123,cljs.core.constant$keyword$1122,"companies",cljs.core.constant$keyword$1096,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),cljs.core.constant$keyword$1093,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1095,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),cljs.core.constant$keyword$1097,null,cljs.core.constant$keyword$803,null,cljs.core.constant$keyword$1098,null,cljs.core.constant$keyword$1100,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$816,cljs.core.constant$keyword$937,cljs.core.constant$keyword$814,"companies",cljs.core.constant$keyword$1109,"company",cljs.core.constant$keyword$889,"boundaryline_id",cljs.core.constant$keyword$1110,"!latest_employee_count"], null),cljs.core.constant$keyword$1099,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1111,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1029,cljs.core.constant$keyword$1043], null),cljs.core.constant$keyword$1112,cljs.core.constant$keyword$1047,cljs.core.constant$keyword$1110,cljs.core.constant$keyword$1124], null)], null),cljs.core.constant$keyword$929,null], null),cljs.core.constant$keyword$1120,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$816,cljs.core.constant$keyword$1125,cljs.core.constant$keyword$1122,"company_accounts",cljs.core.constant$keyword$1093,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1110,"accounts_date",cljs.core.constant$keyword$1126,"2003-01-01",cljs.core.constant$keyword$1127,"2012-01-01",cljs.core.constant$keyword$1128,"year"], null),cljs.core.constant$keyword$929,null], null),cljs.core.constant$keyword$1121,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$816,cljs.core.constant$keyword$1121,cljs.core.constant$keyword$1122,"companies",cljs.core.constant$keyword$1093,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$808,null,cljs.core.constant$keyword$1129,(0),cljs.core.constant$keyword$1130,(50),cljs.core.constant$keyword$1131,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),cljs.core.constant$keyword$929,null], null)], null)], null),null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$812,new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$814,null,cljs.core.constant$keyword$815,null,cljs.core.constant$keyword$813,cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$814,null,cljs.core.constant$keyword$815,null,cljs.core.constant$keyword$813,cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$814,null,cljs.core.constant$keyword$815,null,cljs.core.constant$keyword$813,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.constant$keyword$813,cljs.core.PersistentArrayMap.EMPTY], null),null,cljs.core.constant$keyword$1001]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__36700){var vec__36701 = p__36700;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36701,(0),null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36701,(1),null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:((function (path,vec__36701,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__36701,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__36702){var map__36704 = p__36702;var map__36704__$1 = ((cljs.core.seq_QMARK_(map__36704))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36704):map__36704);var path_values = map__36704__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__36702 = null;if (arguments.length > 0) {
  p__36702 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__36702);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__36705){
var p__36702 = cljs.core.seq(arglist__36705);
return set_state__delegate(p__36702);
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
get_state.cljs$lang$applyTo = (function (arglist__36706){
var path = cljs.core.seq(arglist__36706);
return get_state__delegate(path);
});
get_state.cljs$core$IFn$_invoke$arity$variadic = get_state__delegate;
return get_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_boroughs","uk_wards"], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__36711 = cljs.core.seq(clustermap.app.bl_collections);var chunk__36712 = null;var count__36713 = (0);var i__36714 = (0);while(true){
if((i__36714 < count__36713))
{var blcoll = chunk__36712.cljs$core$IIndexed$_nth$arity$2(null,i__36714);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$813,blcoll);
{
var G__36715 = seq__36711;
var G__36716 = chunk__36712;
var G__36717 = count__36713;
var G__36718 = (i__36714 + (1));
seq__36711 = G__36715;
chunk__36712 = G__36716;
count__36713 = G__36717;
i__36714 = G__36718;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__36711);if(temp__4126__auto__)
{var seq__36711__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36711__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__36711__$1);{
var G__36719 = cljs.core.chunk_rest(seq__36711__$1);
var G__36720 = c__4299__auto__;
var G__36721 = cljs.core.count(c__4299__auto__);
var G__36722 = (0);
seq__36711 = G__36719;
chunk__36712 = G__36720;
count__36713 = G__36721;
i__36714 = G__36722;
continue;
}
} else
{var blcoll = cljs.core.first(seq__36711__$1);clustermap.boundarylines.fetch_boundaryline_collection_index(clustermap.app.state,cljs.core.constant$keyword$813,blcoll);
{
var G__36723 = cljs.core.next(seq__36711__$1);
var G__36724 = null;
var G__36725 = (0);
var G__36726 = (0);
seq__36711 = G__36723;
chunk__36712 = G__36724;
count__36713 = G__36725;
i__36714 = G__36726;
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
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_36746){var state_val_36747 = (state_36746[(1)]);if((state_val_36747 === (2)))
{var inst_36743 = (state_36746[(2)]);var inst_36744 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$968,inst_36743], 0));var state_36746__$1 = state_36746;return cljs.core.async.impl.ioc_helpers.return_chan(state_36746__$1,inst_36744);
} else
{if((state_val_36747 === (1)))
{var inst_36741 = clustermap.api.investment_stats();var state_36746__$1 = state_36746;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36746__$1,(2),inst_36741);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36751 = [null,null,null,null,null,null,null];(statearr_36751[(0)] = state_machine__5679__auto__);
(statearr_36751[(1)] = (1));
return statearr_36751;
});
var state_machine__5679__auto____1 = (function (state_36746){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36746);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$783))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36752){if((e36752 instanceof Object))
{var ex__5682__auto__ = e36752;var statearr_36753_36755 = state_36746;(statearr_36753_36755[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36746);
return cljs.core.constant$keyword$783;
} else
{if(cljs.core.constant$keyword$774)
{throw e36752;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$783))
{{
var G__36756 = state_36746;
state_36746 = G__36756;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36746){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36754 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$991,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__36757,type){var vec__36759 = p__36757;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36759,(0),null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36759,(1),null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36759,(2),null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36759,(3),null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36759,(4),null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36759,(5),null);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$963,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$816,type,cljs.core.constant$keyword$847,selection], null),cljs.core.constant$keyword$967,selection_investment_stats,cljs.core.constant$keyword$954,selection_investment_account_timelines,cljs.core.constant$keyword$987,selection_investment_aggs,cljs.core.constant$keyword$986,selection_investments,cljs.core.constant$keyword$1116], 0));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__36760){var vec__36765 = p__36760;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36765,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36765,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$984.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$984,selector], 0));
var pred__36766 = cljs.core._EQ_;var expr__36767 = type;if(cljs.core.truth_((pred__36766.cljs$core$IFn$_invoke$arity$2 ? pred__36766.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$901,expr__36767) : pred__36766.call(null,cljs.core.constant$keyword$901,expr__36767))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__36766.cljs$core$IFn$_invoke$arity$2 ? pred__36766.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$902,expr__36767) : pred__36766.call(null,cljs.core.constant$keyword$902,expr__36767))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__36766.cljs$core$IFn$_invoke$arity$2 ? pred__36766.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$904,expr__36767) : pred__36766.call(null,cljs.core.constant$keyword$904,expr__36767))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$990.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$990,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__36772 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(0),null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(1),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(2),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(3),null);var type__$1 = ((((function (){var G__36773 = type;var G__36773__$1 = (((G__36773 == null))?null:clojure.string.trim(G__36773));var G__36773__$2 = (((G__36773__$1 == null))?null:cljs.core.count(G__36773__$1));return G__36773__$2;
})() > (0)))?clojure.string.trim(type):null);var id__$1 = ((((function (){var G__36774 = id;var G__36774__$1 = (((G__36774 == null))?null:clojure.string.trim(G__36774));var G__36774__$2 = (((G__36774__$1 == null))?null:cljs.core.count(G__36774__$1));return G__36774__$2;
})() > (0)))?clojure.string.trim(id):null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$990,view,cljs.core.constant$keyword$816,type__$1,cljs.core.constant$keyword$818,id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__36775){var vec__36778 = p__36775;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36778,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36778,(1),null);var map__36779 = clustermap.app.parse_route();var map__36779__$1 = ((cljs.core.seq_QMARK_(map__36779))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36779):map__36779);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36779__$1,cljs.core.constant$keyword$990);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__36781 = clustermap.app.parse_route();var map__36781__$1 = ((cljs.core.seq_QMARK_(map__36781))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36781):map__36781);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36781__$1,cljs.core.constant$keyword$818);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36781__$1,cljs.core.constant$keyword$816);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_36814){var state_val_36815 = (state_36814[(1)]);if((state_val_36815 === (2)))
{var inst_36805 = (state_36814[(7)]);var inst_36811 = (state_36814[(2)]);var inst_36812 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1117,inst_36805,cljs.core.constant$keyword$987,inst_36811], 0));var state_36814__$1 = state_36814;return cljs.core.async.impl.ioc_helpers.return_chan(state_36814__$1,inst_36812);
} else
{if((state_val_36815 === (1)))
{var inst_36805 = (state_36814[(7)]);var inst_36803 = cljs.core.deref(clustermap.app.state);var inst_36804 = cljs.core.constant$keyword$1117.cljs$core$IFn$_invoke$arity$1(inst_36803);var inst_36805__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36804,table_view], 0));var inst_36806 = cljs.core.deref(clustermap.app.state);var inst_36807 = cljs.core.constant$keyword$984.cljs$core$IFn$_invoke$arity$1(inst_36806);var inst_36808 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36807,inst_36805__$1], 0));var inst_36809 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36808], 0));var state_36814__$1 = (function (){var statearr_36816 = state_36814;(statearr_36816[(7)] = inst_36805__$1);
return statearr_36816;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36814__$1,(2),inst_36809);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36820 = [null,null,null,null,null,null,null,null];(statearr_36820[(0)] = state_machine__5679__auto__);
(statearr_36820[(1)] = (1));
return statearr_36820;
});
var state_machine__5679__auto____1 = (function (state_36814){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36814);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$783))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36821){if((e36821 instanceof Object))
{var ex__5682__auto__ = e36821;var statearr_36822_36824 = state_36814;(statearr_36822_36824[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36814);
return cljs.core.constant$keyword$783;
} else
{if(cljs.core.constant$keyword$774)
{throw e36821;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$783))
{{
var G__36825 = state_36814;
state_36814 = G__36825;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36814){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36823 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36823;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_36858){var state_val_36859 = (state_36858[(1)]);if((state_val_36859 === (2)))
{var inst_36849 = (state_36858[(7)]);var inst_36855 = (state_36858[(2)]);var inst_36856 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1119,inst_36849,cljs.core.constant$keyword$986,inst_36855], 0));var state_36858__$1 = state_36858;return cljs.core.async.impl.ioc_helpers.return_chan(state_36858__$1,inst_36856);
} else
{if((state_val_36859 === (1)))
{var inst_36849 = (state_36858[(7)]);var inst_36847 = cljs.core.deref(clustermap.app.state);var inst_36848 = cljs.core.constant$keyword$1119.cljs$core$IFn$_invoke$arity$1(inst_36847);var inst_36849__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36848,table_view], 0));var inst_36850 = cljs.core.deref(clustermap.app.state);var inst_36851 = cljs.core.constant$keyword$984.cljs$core$IFn$_invoke$arity$1(inst_36850);var inst_36852 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36851,inst_36849__$1], 0));var inst_36853 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_36852], 0));var state_36858__$1 = (function (){var statearr_36860 = state_36858;(statearr_36860[(7)] = inst_36849__$1);
return statearr_36860;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36858__$1,(2),inst_36853);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36864 = [null,null,null,null,null,null,null,null];(statearr_36864[(0)] = state_machine__5679__auto__);
(statearr_36864[(1)] = (1));
return statearr_36864;
});
var state_machine__5679__auto____1 = (function (state_36858){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36858);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$783))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36865){if((e36865 instanceof Object))
{var ex__5682__auto__ = e36865;var statearr_36866_36868 = state_36858;(statearr_36866_36868[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36858);
return cljs.core.constant$keyword$783;
} else
{if(cljs.core.constant$keyword$774)
{throw e36865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$783))
{{
var G__36869 = state_36858;
state_36858 = G__36869;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36858){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36867 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$992,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$854,clustermap.app.set_selection_route,cljs.core.constant$keyword$1132,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$1067,clustermap.app.set_view_route,cljs.core.constant$keyword$1133,clustermap.app.change_view,cljs.core.constant$keyword$910,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$918,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9523__auto___36886 = (function (params__9524__auto__){if(cljs.core.map_QMARK_(params__9524__auto__))
{var map__36878 = params__9524__auto__;var map__36878__$1 = ((cljs.core.seq_QMARK_(map__36878))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36878):map__36878);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1132,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9524__auto__))
{var vec__36879 = params__9524__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1132,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9523__auto___36886);
var action__9523__auto___36887 = (function (params__9524__auto__){if(cljs.core.map_QMARK_(params__9524__auto__))
{var map__36880 = params__9524__auto__;var map__36880__$1 = ((cljs.core.seq_QMARK_(map__36880))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36880):map__36880);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1132,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9524__auto__))
{var vec__36881 = params__9524__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1132,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9523__auto___36887);
var action__9523__auto___36888 = (function (params__9524__auto__){if(cljs.core.map_QMARK_(params__9524__auto__))
{var map__36882 = params__9524__auto__;var map__36882__$1 = ((cljs.core.seq_QMARK_(map__36882))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36882):map__36882);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36882__$1,cljs.core.constant$keyword$990);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1133,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1132,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9524__auto__))
{var vec__36883 = params__9524__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36883,(0),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1133,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1132,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9523__auto___36888);
var action__9523__auto___36889 = (function (params__9524__auto__){if(cljs.core.map_QMARK_(params__9524__auto__))
{var map__36884 = params__9524__auto__;var map__36884__$1 = ((cljs.core.seq_QMARK_(map__36884))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36884):map__36884);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36884__$1,cljs.core.constant$keyword$818);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36884__$1,cljs.core.constant$keyword$816);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36884__$1,cljs.core.constant$keyword$990);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1133,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1132,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9524__auto__))
{var vec__36885 = params__9524__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36885,(0),null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36885,(1),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36885,(2),null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1133,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1132,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9523__auto___36889);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$909,comm,cljs.core.constant$keyword$899,path_fn,cljs.core.constant$keyword$900,link_fn,cljs.core.constant$keyword$1000,clustermap.app.change_view_path,cljs.core.constant$keyword$1107,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.state,cljs.core.constant$keyword$813),cljs.core.constant$keyword$1106,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,cljs.core.constant$keyword$813,cljs.core.constant$keyword$1134),cljs.core.constant$keyword$1104,clustermap.app.get_state,cljs.core.constant$keyword$1105,clustermap.app.set_state], null);clustermap.nav.init(comm);
clustermap.app.load_boundaryline_collection_indexes();
clustermap.components.map.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1091,cljs.core.constant$keyword$1092,cljs.core.constant$keyword$1001], null),"map-component",shared);
clustermap.components.multiview.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1091], null),"search-component",shared);
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1091,cljs.core.constant$keyword$1092,cljs.core.constant$keyword$1001,cljs.core.constant$keyword$1093,cljs.core.constant$keyword$1100], null),"variable-selection-component",shared,"Variable",cljs.core.constant$keyword$1110,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null));
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1091,cljs.core.constant$keyword$1092,cljs.core.constant$keyword$1001,cljs.core.constant$keyword$1093,cljs.core.constant$keyword$1099], null),"stat-selection-component",shared,"Statistic",cljs.core.constant$keyword$1110,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null));
clustermap.components.select_chooser.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1091,cljs.core.constant$keyword$1092,cljs.core.constant$keyword$1001,cljs.core.constant$keyword$1093,cljs.core.constant$keyword$1099], null),"scale-selection-component",shared,"Scale",cljs.core.constant$keyword$1112,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null));
return clustermap.components.color_scale.mount(clustermap.app.state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1091,cljs.core.constant$keyword$1092,cljs.core.constant$keyword$1001,cljs.core.constant$keyword$1093,cljs.core.constant$keyword$1101], null),"color-scale-component",shared);
});
