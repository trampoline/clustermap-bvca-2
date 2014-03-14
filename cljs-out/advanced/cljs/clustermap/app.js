// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.ganalytics');
goog.require('clustermap.routes');
goog.require('clustermap.boundarylines');
goog.require('clustermap.boundarylines');
goog.require('goog.History');
goog.require('clustermap.nav');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.full_report');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('goog.events');
goog.require('clustermap.routes');
goog.require('secretary.core');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.components.map');
goog.require('clustermap.rtree');
goog.require('om.core');
goog.require('clustermap.rtree');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.search');
goog.require('clustermap.ganalytics');
goog.require('om.dom');
goog.require('clustermap.components.full_report');
goog.require('clustermap.nav');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.map');
goog.require('goog.events');
goog.require('secretary.core');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$731,cljs.core.constant$keyword$683,cljs.core.constant$keyword$773,cljs.core.constant$keyword$663,cljs.core.constant$keyword$782,cljs.core.constant$keyword$783,cljs.core.constant$keyword$728,cljs.core.constant$keyword$730,cljs.core.constant$keyword$637,cljs.core.constant$keyword$772,cljs.core.constant$keyword$774,cljs.core.constant$keyword$719,cljs.core.constant$keyword$729,cljs.core.constant$keyword$664,cljs.core.constant$keyword$743,cljs.core.constant$keyword$784,cljs.core.constant$keyword$775],[cljs.core.constant$keyword$778,null,null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__33491){var vec__33492 = p__33491;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33492,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33492,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__33493){var map__33495 = p__33493;var map__33495__$1 = ((cljs.core.seq_QMARK_(map__33495))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33495):map__33495);var path_values = map__33495__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__33493 = null;if (arguments.length > 0) {
  p__33493 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__33493);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__33496){
var p__33493 = cljs.core.seq(arglist__33496);
return set_state__delegate(p__33493);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33518){var state_val_33519 = (state_33518[1]);if((state_val_33519 === 2))
{var inst_33514 = (state_33518[2]);var inst_33515 = clustermap.rtree.rtree_index(inst_33514);var inst_33516 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$773,inst_33514,cljs.core.constant$keyword$774,inst_33515], 0));var state_33518__$1 = state_33518;return cljs.core.async.impl.ioc_helpers.return_chan(state_33518__$1,inst_33516);
} else
{if((state_val_33519 === 1))
{var inst_33512 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$563,true], 0));var state_33518__$1 = state_33518;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33518__$1,2,inst_33512);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33523 = [null,null,null,null,null,null,null];(statearr_33523[0] = state_machine__5548__auto__);
(statearr_33523[1] = 1);
return statearr_33523;
});
var state_machine__5548__auto____1 = (function (state_33518){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33518);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33524){if((e33524 instanceof Object))
{var ex__5551__auto__ = e33524;var statearr_33525_33527 = state_33518;(statearr_33525_33527[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33518);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e33524;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__33528 = state_33518;
state_33518 = G__33528;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33518){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33526 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33526;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33548){var state_val_33549 = (state_33548[1]);if((state_val_33549 === 2))
{var inst_33545 = (state_33548[2]);var inst_33546 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$664,inst_33545], 0));var state_33548__$1 = state_33548;return cljs.core.async.impl.ioc_helpers.return_chan(state_33548__$1,inst_33546);
} else
{if((state_val_33549 === 1))
{var inst_33543 = clustermap.api.investment_stats();var state_33548__$1 = state_33548;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33548__$1,2,inst_33543);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33553 = [null,null,null,null,null,null,null];(statearr_33553[0] = state_machine__5548__auto__);
(statearr_33553[1] = 1);
return statearr_33553;
});
var state_machine__5548__auto____1 = (function (state_33548){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33548);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33554){if((e33554 instanceof Object))
{var ex__5551__auto__ = e33554;var statearr_33555_33557 = state_33548;(statearr_33555_33557[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33548);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e33554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__33558 = state_33548;
state_33548 = G__33558;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33548){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33556 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$743,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__33559,type){var vec__33561 = p__33559;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33561,0,null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33561,1,null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33561,2,null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33561,3,null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33561,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33561,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$637,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$582,type,cljs.core.constant$keyword$543,selection], null),cljs.core.constant$keyword$663,selection_investment_stats,cljs.core.constant$keyword$719,selection_investment_account_timelines,cljs.core.constant$keyword$730,selection_investment_aggs,cljs.core.constant$keyword$729,selection_investments,cljs.core.constant$keyword$772,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__33562){var vec__33567 = p__33562;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33567,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33567,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$728.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$728,selector], 0));
var pred__33568 = cljs.core._EQ_;var expr__33569 = type;if(cljs.core.truth_((pred__33568.cljs$core$IFn$_invoke$arity$2 ? pred__33568.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$627,expr__33569) : pred__33568.call(null,cljs.core.constant$keyword$627,expr__33569))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__33568.cljs$core$IFn$_invoke$arity$2 ? pred__33568.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$628,expr__33569) : pred__33568.call(null,cljs.core.constant$keyword$628,expr__33569))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__33568.cljs$core$IFn$_invoke$arity$2 ? pred__33568.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__33569) : pred__33568.call(null,cljs.core.constant$keyword$629,expr__33569))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$731.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$731,view__$1], 0));
return clustermap.nav.change_view(cljs.core.name(view__$1));
} else
{return null;
}
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3429__auto__ = type;if(cljs.core.truth_(and__3429__auto__))
{return id;
} else
{return and__3429__auto__;
}
})()))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name((function (){var or__3441__auto__ = view;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "map";
}
})())),cljs.core.str("/"),cljs.core.str(cljs.core.name(type)),cljs.core.str("/"),cljs.core.str(cljs.core.name(id))].join(''));
} else
{if(cljs.core.truth_(view))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name(view))].join(''));
} else
{if(true)
{return clustermap.app.history.setToken([cljs.core.str("")].join(''));
} else
{return null;
}
}
}
});
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__33572 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33572,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33572,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33572,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33572,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$731,view,cljs.core.constant$keyword$582,type,cljs.core.constant$keyword$578,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__33573){var vec__33576 = p__33573;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33576,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33576,1,null);var map__33577 = clustermap.app.parse_route();var map__33577__$1 = ((cljs.core.seq_QMARK_(map__33577))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33577):map__33577);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33577__$1,cljs.core.constant$keyword$731);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__33579 = clustermap.app.parse_route();var map__33579__$1 = ((cljs.core.seq_QMARK_(map__33579))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33579):map__33579);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33579__$1,cljs.core.constant$keyword$578);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33579__$1,cljs.core.constant$keyword$582);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33612){var state_val_33613 = (state_33612[1]);if((state_val_33613 === 2))
{var inst_33603 = (state_33612[7]);var inst_33609 = (state_33612[2]);var inst_33610 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$782,inst_33603,cljs.core.constant$keyword$730,inst_33609], 0));var state_33612__$1 = state_33612;return cljs.core.async.impl.ioc_helpers.return_chan(state_33612__$1,inst_33610);
} else
{if((state_val_33613 === 1))
{var inst_33603 = (state_33612[7]);var inst_33601 = cljs.core.deref(clustermap.app.state);var inst_33602 = cljs.core.constant$keyword$782.cljs$core$IFn$_invoke$arity$1(inst_33601);var inst_33603__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33602,table_view], 0));var inst_33604 = cljs.core.deref(clustermap.app.state);var inst_33605 = cljs.core.constant$keyword$728.cljs$core$IFn$_invoke$arity$1(inst_33604);var inst_33606 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33605,inst_33603__$1], 0));var inst_33607 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33606], 0));var state_33612__$1 = (function (){var statearr_33614 = state_33612;(statearr_33614[7] = inst_33603__$1);
return statearr_33614;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33612__$1,2,inst_33607);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33618 = [null,null,null,null,null,null,null,null];(statearr_33618[0] = state_machine__5548__auto__);
(statearr_33618[1] = 1);
return statearr_33618;
});
var state_machine__5548__auto____1 = (function (state_33612){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33612);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33619){if((e33619 instanceof Object))
{var ex__5551__auto__ = e33619;var statearr_33620_33622 = state_33612;(statearr_33620_33622[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33612);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e33619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__33623 = state_33612;
state_33612 = G__33623;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33612){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33621 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33656){var state_val_33657 = (state_33656[1]);if((state_val_33657 === 2))
{var inst_33647 = (state_33656[7]);var inst_33653 = (state_33656[2]);var inst_33654 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$783,inst_33647,cljs.core.constant$keyword$729,inst_33653], 0));var state_33656__$1 = state_33656;return cljs.core.async.impl.ioc_helpers.return_chan(state_33656__$1,inst_33654);
} else
{if((state_val_33657 === 1))
{var inst_33647 = (state_33656[7]);var inst_33645 = cljs.core.deref(clustermap.app.state);var inst_33646 = cljs.core.constant$keyword$783.cljs$core$IFn$_invoke$arity$1(inst_33645);var inst_33647__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33646,table_view], 0));var inst_33648 = cljs.core.deref(clustermap.app.state);var inst_33649 = cljs.core.constant$keyword$728.cljs$core$IFn$_invoke$arity$1(inst_33648);var inst_33650 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33649,inst_33647__$1], 0));var inst_33651 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33650], 0));var state_33656__$1 = (function (){var statearr_33658 = state_33656;(statearr_33658[7] = inst_33647__$1);
return statearr_33658;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33656__$1,2,inst_33651);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33662 = [null,null,null,null,null,null,null,null];(statearr_33662[0] = state_machine__5548__auto__);
(statearr_33662[1] = 1);
return statearr_33662;
});
var state_machine__5548__auto____1 = (function (state_33656){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33656);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33663){if((e33663 instanceof Object))
{var ex__5551__auto__ = e33663;var statearr_33664_33666 = state_33656;(statearr_33664_33666[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33656);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e33663;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__33667 = state_33656;
state_33656 = G__33667;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33656){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33665 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$744,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$598,clustermap.app.set_selection_route,cljs.core.constant$keyword$785,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$633,clustermap.app.set_view_route,cljs.core.constant$keyword$786,clustermap.app.change_view,cljs.core.constant$keyword$688,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$655,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9284__auto___33684 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33676 = params__9285__auto__;var map__33676__$1 = ((cljs.core.seq_QMARK_(map__33676))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33676):map__33676);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$785,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33677 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$785,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9284__auto___33684);
var action__9284__auto___33685 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33678 = params__9285__auto__;var map__33678__$1 = ((cljs.core.seq_QMARK_(map__33678))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33678):map__33678);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$785,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33679 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$785,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9284__auto___33685);
var action__9284__auto___33686 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33680 = params__9285__auto__;var map__33680__$1 = ((cljs.core.seq_QMARK_(map__33680))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33680):map__33680);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33680__$1,cljs.core.constant$keyword$731);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$786,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$785,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33681 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33681,0,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$786,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$785,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9284__auto___33686);
var action__9284__auto___33687 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33682 = params__9285__auto__;var map__33682__$1 = ((cljs.core.seq_QMARK_(map__33682))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33682):map__33682);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33682__$1,cljs.core.constant$keyword$578);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33682__$1,cljs.core.constant$keyword$582);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33682__$1,cljs.core.constant$keyword$731);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$786,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$785,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33683 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33683,0,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33683,1,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33683,2,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$786,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$785,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9284__auto___33687);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$631,comm,cljs.core.constant$keyword$630,path_fn,cljs.core.constant$keyword$647,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_investment_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33734){var state_val_33735 = (state_33734[1]);if((state_val_33735 === 7))
{var inst_33723 = (state_33734[2]);var inst_33724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33723,0,null);var inst_33725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33723,1,null);var inst_33726 = clustermap.app.handle_event(inst_33724,inst_33725);var state_33734__$1 = (function (){var statearr_33736 = state_33734;(statearr_33736[7] = inst_33726);
return statearr_33736;
})();var statearr_33737_33750 = state_33734__$1;(statearr_33737_33750[2] = null);
(statearr_33737_33750[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_33735 === 6))
{var inst_33730 = (state_33734[2]);var state_33734__$1 = state_33734;var statearr_33738_33751 = state_33734__$1;(statearr_33738_33751[2] = inst_33730);
(statearr_33738_33751[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_33735 === 5))
{var state_33734__$1 = state_33734;var statearr_33739_33752 = state_33734__$1;(statearr_33739_33752[2] = null);
(statearr_33739_33752[1] = 6);
return cljs.core.constant$keyword$549;
} else
{if((state_val_33735 === 4))
{var state_33734__$1 = state_33734;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33734__$1,7,comm);
} else
{if((state_val_33735 === 3))
{var inst_33732 = (state_33734[2]);var state_33734__$1 = state_33734;return cljs.core.async.impl.ioc_helpers.return_chan(state_33734__$1,inst_33732);
} else
{if((state_val_33735 === 2))
{var state_33734__$1 = state_33734;if(true)
{var statearr_33740_33753 = state_33734__$1;(statearr_33740_33753[1] = 4);
} else
{var statearr_33741_33754 = state_33734__$1;(statearr_33741_33754[1] = 5);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_33735 === 1))
{var state_33734__$1 = state_33734;var statearr_33742_33755 = state_33734__$1;(statearr_33742_33755[2] = null);
(statearr_33742_33755[1] = 2);
return cljs.core.constant$keyword$549;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33746 = [null,null,null,null,null,null,null,null];(statearr_33746[0] = state_machine__5548__auto__);
(statearr_33746[1] = 1);
return statearr_33746;
});
var state_machine__5548__auto____1 = (function (state_33734){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33734);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33747){if((e33747 instanceof Object))
{var ex__5551__auto__ = e33747;var statearr_33748_33756 = state_33734;(statearr_33748_33756[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33734);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e33747;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__33757 = state_33734;
state_33734 = G__33757;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33734){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33749 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33749;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
