// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
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
goog.require('om.dom');
goog.require('clustermap.components.full_report');
goog.require('clustermap.nav');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.map');
goog.require('goog.events');
goog.require('secretary.core');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$734,cljs.core.constant$keyword$687,cljs.core.constant$keyword$776,cljs.core.constant$keyword$667,cljs.core.constant$keyword$785,cljs.core.constant$keyword$786,cljs.core.constant$keyword$731,cljs.core.constant$keyword$733,cljs.core.constant$keyword$639,cljs.core.constant$keyword$775,cljs.core.constant$keyword$777,cljs.core.constant$keyword$722,cljs.core.constant$keyword$732,cljs.core.constant$keyword$668,cljs.core.constant$keyword$746,cljs.core.constant$keyword$787,cljs.core.constant$keyword$778],[cljs.core.constant$keyword$781,null,null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__33481){var vec__33482 = p__33481;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33482,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33482,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__33483){var map__33485 = p__33483;var map__33485__$1 = ((cljs.core.seq_QMARK_(map__33485))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33485):map__33485);var path_values = map__33485__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__33483 = null;if (arguments.length > 0) {
  p__33483 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__33483);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__33486){
var p__33483 = cljs.core.seq(arglist__33486);
return set_state__delegate(p__33483);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33508){var state_val_33509 = (state_33508[1]);if((state_val_33509 === 2))
{var inst_33504 = (state_33508[2]);var inst_33505 = clustermap.rtree.rtree_index(inst_33504);var inst_33506 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$776,inst_33504,cljs.core.constant$keyword$777,inst_33505], 0));var state_33508__$1 = state_33508;return cljs.core.async.impl.ioc_helpers.return_chan(state_33508__$1,inst_33506);
} else
{if((state_val_33509 === 1))
{var inst_33502 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$565,true], 0));var state_33508__$1 = state_33508;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33508__$1,2,inst_33502);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33513 = [null,null,null,null,null,null,null];(statearr_33513[0] = state_machine__5548__auto__);
(statearr_33513[1] = 1);
return statearr_33513;
});
var state_machine__5548__auto____1 = (function (state_33508){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33508);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33514){if((e33514 instanceof Object))
{var ex__5551__auto__ = e33514;var statearr_33515_33517 = state_33508;(statearr_33515_33517[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33508);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33518 = state_33508;
state_33508 = G__33518;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33508){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33516 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33538){var state_val_33539 = (state_33538[1]);if((state_val_33539 === 2))
{var inst_33535 = (state_33538[2]);var inst_33536 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$668,inst_33535], 0));var state_33538__$1 = state_33538;return cljs.core.async.impl.ioc_helpers.return_chan(state_33538__$1,inst_33536);
} else
{if((state_val_33539 === 1))
{var inst_33533 = clustermap.api.investment_stats();var state_33538__$1 = state_33538;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33538__$1,2,inst_33533);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33543 = [null,null,null,null,null,null,null];(statearr_33543[0] = state_machine__5548__auto__);
(statearr_33543[1] = 1);
return statearr_33543;
});
var state_machine__5548__auto____1 = (function (state_33538){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33538);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33544){if((e33544 instanceof Object))
{var ex__5551__auto__ = e33544;var statearr_33545_33547 = state_33538;(statearr_33545_33547[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33538);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33544;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33548 = state_33538;
state_33538 = G__33548;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33538){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33546 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33546;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$746,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__33549,type){var vec__33551 = p__33549;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33551,0,null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33551,1,null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33551,2,null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33551,3,null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33551,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33551,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$639,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,type,cljs.core.constant$keyword$545,selection], null),cljs.core.constant$keyword$667,selection_investment_stats,cljs.core.constant$keyword$722,selection_investment_account_timelines,cljs.core.constant$keyword$733,selection_investment_aggs,cljs.core.constant$keyword$732,selection_investments,cljs.core.constant$keyword$775,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__33552){var vec__33557 = p__33552;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33557,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33557,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$731.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$731,selector], 0));
var pred__33558 = cljs.core._EQ_;var expr__33559 = type;if(cljs.core.truth_((pred__33558.cljs$core$IFn$_invoke$arity$2 ? pred__33558.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__33559) : pred__33558.call(null,cljs.core.constant$keyword$629,expr__33559))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__33558.cljs$core$IFn$_invoke$arity$2 ? pred__33558.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$630,expr__33559) : pred__33558.call(null,cljs.core.constant$keyword$630,expr__33559))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__33558.cljs$core$IFn$_invoke$arity$2 ? pred__33558.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,expr__33559) : pred__33558.call(null,cljs.core.constant$keyword$631,expr__33559))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$734.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$734,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__33562 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33562,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33562,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33562,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33562,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$734,view,cljs.core.constant$keyword$584,type,cljs.core.constant$keyword$580,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__33563){var vec__33566 = p__33563;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33566,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33566,1,null);var map__33567 = clustermap.app.parse_route();var map__33567__$1 = ((cljs.core.seq_QMARK_(map__33567))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33567):map__33567);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33567__$1,cljs.core.constant$keyword$734);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__33569 = clustermap.app.parse_route();var map__33569__$1 = ((cljs.core.seq_QMARK_(map__33569))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33569):map__33569);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33569__$1,cljs.core.constant$keyword$580);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33569__$1,cljs.core.constant$keyword$584);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33602){var state_val_33603 = (state_33602[1]);if((state_val_33603 === 2))
{var inst_33593 = (state_33602[7]);var inst_33599 = (state_33602[2]);var inst_33600 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$785,inst_33593,cljs.core.constant$keyword$733,inst_33599], 0));var state_33602__$1 = state_33602;return cljs.core.async.impl.ioc_helpers.return_chan(state_33602__$1,inst_33600);
} else
{if((state_val_33603 === 1))
{var inst_33593 = (state_33602[7]);var inst_33591 = cljs.core.deref(clustermap.app.state);var inst_33592 = cljs.core.constant$keyword$785.cljs$core$IFn$_invoke$arity$1(inst_33591);var inst_33593__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33592,table_view], 0));var inst_33594 = cljs.core.deref(clustermap.app.state);var inst_33595 = cljs.core.constant$keyword$731.cljs$core$IFn$_invoke$arity$1(inst_33594);var inst_33596 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33595,inst_33593__$1], 0));var inst_33597 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33596], 0));var state_33602__$1 = (function (){var statearr_33604 = state_33602;(statearr_33604[7] = inst_33593__$1);
return statearr_33604;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33602__$1,2,inst_33597);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33608 = [null,null,null,null,null,null,null,null];(statearr_33608[0] = state_machine__5548__auto__);
(statearr_33608[1] = 1);
return statearr_33608;
});
var state_machine__5548__auto____1 = (function (state_33602){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33602);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33609){if((e33609 instanceof Object))
{var ex__5551__auto__ = e33609;var statearr_33610_33612 = state_33602;(statearr_33610_33612[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33602);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33609;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33613 = state_33602;
state_33602 = G__33613;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33602){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33611 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33646){var state_val_33647 = (state_33646[1]);if((state_val_33647 === 2))
{var inst_33637 = (state_33646[7]);var inst_33643 = (state_33646[2]);var inst_33644 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$786,inst_33637,cljs.core.constant$keyword$732,inst_33643], 0));var state_33646__$1 = state_33646;return cljs.core.async.impl.ioc_helpers.return_chan(state_33646__$1,inst_33644);
} else
{if((state_val_33647 === 1))
{var inst_33637 = (state_33646[7]);var inst_33635 = cljs.core.deref(clustermap.app.state);var inst_33636 = cljs.core.constant$keyword$786.cljs$core$IFn$_invoke$arity$1(inst_33635);var inst_33637__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33636,table_view], 0));var inst_33638 = cljs.core.deref(clustermap.app.state);var inst_33639 = cljs.core.constant$keyword$731.cljs$core$IFn$_invoke$arity$1(inst_33638);var inst_33640 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33639,inst_33637__$1], 0));var inst_33641 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33640], 0));var state_33646__$1 = (function (){var statearr_33648 = state_33646;(statearr_33648[7] = inst_33637__$1);
return statearr_33648;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33646__$1,2,inst_33641);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33652 = [null,null,null,null,null,null,null,null];(statearr_33652[0] = state_machine__5548__auto__);
(statearr_33652[1] = 1);
return statearr_33652;
});
var state_machine__5548__auto____1 = (function (state_33646){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33646);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33653){if((e33653 instanceof Object))
{var ex__5551__auto__ = e33653;var statearr_33654_33656 = state_33646;(statearr_33654_33656[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33646);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33653;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33657 = state_33646;
state_33646 = G__33657;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33646){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33655 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$747,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$600,clustermap.app.set_selection_route,cljs.core.constant$keyword$788,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$635,clustermap.app.set_view_route,cljs.core.constant$keyword$789,clustermap.app.change_view,cljs.core.constant$keyword$692,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$659,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9284__auto___33674 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33666 = params__9285__auto__;var map__33666__$1 = ((cljs.core.seq_QMARK_(map__33666))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33666):map__33666);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33667 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9284__auto___33674);
var action__9284__auto___33675 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33668 = params__9285__auto__;var map__33668__$1 = ((cljs.core.seq_QMARK_(map__33668))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33668):map__33668);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33669 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9284__auto___33675);
var action__9284__auto___33676 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33670 = params__9285__auto__;var map__33670__$1 = ((cljs.core.seq_QMARK_(map__33670))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33670):map__33670);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33670__$1,cljs.core.constant$keyword$734);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$789,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33671 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33671,0,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$789,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9284__auto___33676);
var action__9284__auto___33677 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33672 = params__9285__auto__;var map__33672__$1 = ((cljs.core.seq_QMARK_(map__33672))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33672):map__33672);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33672__$1,cljs.core.constant$keyword$580);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33672__$1,cljs.core.constant$keyword$584);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33672__$1,cljs.core.constant$keyword$734);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$789,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33673 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33673,0,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33673,1,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33673,2,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$789,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$788,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9284__auto___33677);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$633,comm,cljs.core.constant$keyword$632,path_fn,cljs.core.constant$keyword$649,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_investment_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33724){var state_val_33725 = (state_33724[1]);if((state_val_33725 === 7))
{var inst_33713 = (state_33724[2]);var inst_33714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33713,0,null);var inst_33715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33713,1,null);var inst_33716 = clustermap.app.handle_event(inst_33714,inst_33715);var state_33724__$1 = (function (){var statearr_33726 = state_33724;(statearr_33726[7] = inst_33716);
return statearr_33726;
})();var statearr_33727_33740 = state_33724__$1;(statearr_33727_33740[2] = null);
(statearr_33727_33740[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33725 === 6))
{var inst_33720 = (state_33724[2]);var state_33724__$1 = state_33724;var statearr_33728_33741 = state_33724__$1;(statearr_33728_33741[2] = inst_33720);
(statearr_33728_33741[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33725 === 5))
{var state_33724__$1 = state_33724;var statearr_33729_33742 = state_33724__$1;(statearr_33729_33742[2] = null);
(statearr_33729_33742[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33725 === 4))
{var state_33724__$1 = state_33724;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33724__$1,7,comm);
} else
{if((state_val_33725 === 3))
{var inst_33722 = (state_33724[2]);var state_33724__$1 = state_33724;return cljs.core.async.impl.ioc_helpers.return_chan(state_33724__$1,inst_33722);
} else
{if((state_val_33725 === 2))
{var state_33724__$1 = state_33724;if(true)
{var statearr_33730_33743 = state_33724__$1;(statearr_33730_33743[1] = 4);
} else
{var statearr_33731_33744 = state_33724__$1;(statearr_33731_33744[1] = 5);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_33725 === 1))
{var state_33724__$1 = state_33724;var statearr_33732_33745 = state_33724__$1;(statearr_33732_33745[2] = null);
(statearr_33732_33745[1] = 2);
return cljs.core.constant$keyword$551;
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
var state_machine__5548__auto____0 = (function (){var statearr_33736 = [null,null,null,null,null,null,null,null];(statearr_33736[0] = state_machine__5548__auto__);
(statearr_33736[1] = 1);
return statearr_33736;
});
var state_machine__5548__auto____1 = (function (state_33724){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33724);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33737){if((e33737 instanceof Object))
{var ex__5551__auto__ = e33737;var statearr_33738_33746 = state_33724;(statearr_33738_33746[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33724);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33747 = state_33724;
state_33724 = G__33747;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33724){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33739 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
