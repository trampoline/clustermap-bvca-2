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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$750,cljs.core.constant$keyword$690,cljs.core.constant$keyword$782,cljs.core.constant$keyword$670,cljs.core.constant$keyword$791,cljs.core.constant$keyword$792,cljs.core.constant$keyword$736,cljs.core.constant$keyword$738,cljs.core.constant$keyword$644,cljs.core.constant$keyword$781,cljs.core.constant$keyword$783,cljs.core.constant$keyword$727,cljs.core.constant$keyword$737,cljs.core.constant$keyword$671,cljs.core.constant$keyword$751,cljs.core.constant$keyword$793,cljs.core.constant$keyword$784],[cljs.core.constant$keyword$759,null,null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__33321){var vec__33322 = p__33321;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33322,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33322,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__33323){var map__33325 = p__33323;var map__33325__$1 = ((cljs.core.seq_QMARK_(map__33325))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33325):map__33325);var path_values = map__33325__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__33323 = null;if (arguments.length > 0) {
  p__33323 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__33323);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__33326){
var p__33323 = cljs.core.seq(arglist__33326);
return set_state__delegate(p__33323);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33348){var state_val_33349 = (state_33348[1]);if((state_val_33349 === 2))
{var inst_33344 = (state_33348[2]);var inst_33345 = clustermap.rtree.rtree_index(inst_33344);var inst_33346 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$782,inst_33344,cljs.core.constant$keyword$783,inst_33345], 0));var state_33348__$1 = state_33348;return cljs.core.async.impl.ioc_helpers.return_chan(state_33348__$1,inst_33346);
} else
{if((state_val_33349 === 1))
{var inst_33342 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$569,true], 0));var state_33348__$1 = state_33348;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33348__$1,2,inst_33342);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33353 = [null,null,null,null,null,null,null];(statearr_33353[0] = state_machine__5548__auto__);
(statearr_33353[1] = 1);
return statearr_33353;
});
var state_machine__5548__auto____1 = (function (state_33348){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33348);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33354){if((e33354 instanceof Object))
{var ex__5551__auto__ = e33354;var statearr_33355_33357 = state_33348;(statearr_33355_33357[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33348);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33354;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33358 = state_33348;
state_33348 = G__33358;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33348){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33356 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33378){var state_val_33379 = (state_33378[1]);if((state_val_33379 === 2))
{var inst_33375 = (state_33378[2]);var inst_33376 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$671,inst_33375], 0));var state_33378__$1 = state_33378;return cljs.core.async.impl.ioc_helpers.return_chan(state_33378__$1,inst_33376);
} else
{if((state_val_33379 === 1))
{var inst_33373 = clustermap.api.investment_stats();var state_33378__$1 = state_33378;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33378__$1,2,inst_33373);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33383 = [null,null,null,null,null,null,null];(statearr_33383[0] = state_machine__5548__auto__);
(statearr_33383[1] = 1);
return statearr_33383;
});
var state_machine__5548__auto____1 = (function (state_33378){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33378);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33384){if((e33384 instanceof Object))
{var ex__5551__auto__ = e33384;var statearr_33385_33387 = state_33378;(statearr_33385_33387[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33378);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33388 = state_33378;
state_33378 = G__33388;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33378){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33386 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33386;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$751,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__33389,type){var vec__33391 = p__33389;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,0,null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,1,null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,2,null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,3,null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$644,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$588,type,cljs.core.constant$keyword$549,selection], null),cljs.core.constant$keyword$670,selection_investment_stats,cljs.core.constant$keyword$727,selection_investment_account_timelines,cljs.core.constant$keyword$738,selection_investment_aggs,cljs.core.constant$keyword$737,selection_investments,cljs.core.constant$keyword$781,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__33392){var vec__33397 = p__33392;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33397,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33397,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$736.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$736,selector], 0));
var pred__33398 = cljs.core._EQ_;var expr__33399 = type;if(cljs.core.truth_((pred__33398.cljs$core$IFn$_invoke$arity$2 ? pred__33398.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$633,expr__33399) : pred__33398.call(null,cljs.core.constant$keyword$633,expr__33399))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__33398.cljs$core$IFn$_invoke$arity$2 ? pred__33398.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$634,expr__33399) : pred__33398.call(null,cljs.core.constant$keyword$634,expr__33399))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__33398.cljs$core$IFn$_invoke$arity$2 ? pred__33398.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$635,expr__33399) : pred__33398.call(null,cljs.core.constant$keyword$635,expr__33399))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$750.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$750,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__33402 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33402,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33402,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33402,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33402,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$750,view,cljs.core.constant$keyword$588,type,cljs.core.constant$keyword$584,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__33403){var vec__33406 = p__33403;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33406,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33406,1,null);var map__33407 = clustermap.app.parse_route();var map__33407__$1 = ((cljs.core.seq_QMARK_(map__33407))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33407):map__33407);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33407__$1,cljs.core.constant$keyword$750);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__33409 = clustermap.app.parse_route();var map__33409__$1 = ((cljs.core.seq_QMARK_(map__33409))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33409):map__33409);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33409__$1,cljs.core.constant$keyword$584);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33409__$1,cljs.core.constant$keyword$588);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33442){var state_val_33443 = (state_33442[1]);if((state_val_33443 === 2))
{var inst_33433 = (state_33442[7]);var inst_33439 = (state_33442[2]);var inst_33440 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$791,inst_33433,cljs.core.constant$keyword$738,inst_33439], 0));var state_33442__$1 = state_33442;return cljs.core.async.impl.ioc_helpers.return_chan(state_33442__$1,inst_33440);
} else
{if((state_val_33443 === 1))
{var inst_33433 = (state_33442[7]);var inst_33431 = cljs.core.deref(clustermap.app.state);var inst_33432 = cljs.core.constant$keyword$791.cljs$core$IFn$_invoke$arity$1(inst_33431);var inst_33433__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33432,table_view], 0));var inst_33434 = cljs.core.deref(clustermap.app.state);var inst_33435 = cljs.core.constant$keyword$736.cljs$core$IFn$_invoke$arity$1(inst_33434);var inst_33436 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33435,inst_33433__$1], 0));var inst_33437 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33436], 0));var state_33442__$1 = (function (){var statearr_33444 = state_33442;(statearr_33444[7] = inst_33433__$1);
return statearr_33444;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33442__$1,2,inst_33437);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33448 = [null,null,null,null,null,null,null,null];(statearr_33448[0] = state_machine__5548__auto__);
(statearr_33448[1] = 1);
return statearr_33448;
});
var state_machine__5548__auto____1 = (function (state_33442){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33442);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33449){if((e33449 instanceof Object))
{var ex__5551__auto__ = e33449;var statearr_33450_33452 = state_33442;(statearr_33450_33452[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33442);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33449;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33453 = state_33442;
state_33442 = G__33453;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33442){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33451 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33451;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33486){var state_val_33487 = (state_33486[1]);if((state_val_33487 === 2))
{var inst_33477 = (state_33486[7]);var inst_33483 = (state_33486[2]);var inst_33484 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$792,inst_33477,cljs.core.constant$keyword$737,inst_33483], 0));var state_33486__$1 = state_33486;return cljs.core.async.impl.ioc_helpers.return_chan(state_33486__$1,inst_33484);
} else
{if((state_val_33487 === 1))
{var inst_33477 = (state_33486[7]);var inst_33475 = cljs.core.deref(clustermap.app.state);var inst_33476 = cljs.core.constant$keyword$792.cljs$core$IFn$_invoke$arity$1(inst_33475);var inst_33477__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33476,table_view], 0));var inst_33478 = cljs.core.deref(clustermap.app.state);var inst_33479 = cljs.core.constant$keyword$736.cljs$core$IFn$_invoke$arity$1(inst_33478);var inst_33480 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33479,inst_33477__$1], 0));var inst_33481 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33480], 0));var state_33486__$1 = (function (){var statearr_33488 = state_33486;(statearr_33488[7] = inst_33477__$1);
return statearr_33488;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33486__$1,2,inst_33481);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33492 = [null,null,null,null,null,null,null,null];(statearr_33492[0] = state_machine__5548__auto__);
(statearr_33492[1] = 1);
return statearr_33492;
});
var state_machine__5548__auto____1 = (function (state_33486){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33486);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33493){if((e33493 instanceof Object))
{var ex__5551__auto__ = e33493;var statearr_33494_33496 = state_33486;(statearr_33494_33496[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33486);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33497 = state_33486;
state_33486 = G__33497;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33486){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33495 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$752,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$604,clustermap.app.set_selection_route,cljs.core.constant$keyword$794,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$640,clustermap.app.set_view_route,cljs.core.constant$keyword$795,clustermap.app.change_view,cljs.core.constant$keyword$695,clustermap.app.update_selection_investment_aggs_table_view,cljs.core.constant$keyword$662,clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){var action__9284__auto___33514 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33506 = params__9285__auto__;var map__33506__$1 = ((cljs.core.seq_QMARK_(map__33506))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33506):map__33506);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33507 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9284__auto___33514);
var action__9284__auto___33515 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33508 = params__9285__auto__;var map__33508__$1 = ((cljs.core.seq_QMARK_(map__33508))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33508):map__33508);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33509 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9284__auto___33515);
var action__9284__auto___33516 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33510 = params__9285__auto__;var map__33510__$1 = ((cljs.core.seq_QMARK_(map__33510))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33510):map__33510);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33510__$1,cljs.core.constant$keyword$750);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$795,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33511 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33511,0,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$795,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9284__auto___33516);
var action__9284__auto___33517 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33512 = params__9285__auto__;var map__33512__$1 = ((cljs.core.seq_QMARK_(map__33512))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33512):map__33512);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33512__$1,cljs.core.constant$keyword$584);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33512__$1,cljs.core.constant$keyword$588);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33512__$1,cljs.core.constant$keyword$750);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$795,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33513 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33513,0,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33513,1,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33513,2,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$795,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9284__auto___33517);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$637,comm,cljs.core.constant$keyword$636,path_fn,cljs.core.constant$keyword$654,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_investment_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33564){var state_val_33565 = (state_33564[1]);if((state_val_33565 === 7))
{var inst_33553 = (state_33564[2]);var inst_33554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33553,0,null);var inst_33555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33553,1,null);var inst_33556 = clustermap.app.handle_event(inst_33554,inst_33555);var state_33564__$1 = (function (){var statearr_33566 = state_33564;(statearr_33566[7] = inst_33556);
return statearr_33566;
})();var statearr_33567_33580 = state_33564__$1;(statearr_33567_33580[2] = null);
(statearr_33567_33580[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33565 === 6))
{var inst_33560 = (state_33564[2]);var state_33564__$1 = state_33564;var statearr_33568_33581 = state_33564__$1;(statearr_33568_33581[2] = inst_33560);
(statearr_33568_33581[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33565 === 5))
{var state_33564__$1 = state_33564;var statearr_33569_33582 = state_33564__$1;(statearr_33569_33582[2] = null);
(statearr_33569_33582[1] = 6);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33565 === 4))
{var state_33564__$1 = state_33564;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33564__$1,7,comm);
} else
{if((state_val_33565 === 3))
{var inst_33562 = (state_33564[2]);var state_33564__$1 = state_33564;return cljs.core.async.impl.ioc_helpers.return_chan(state_33564__$1,inst_33562);
} else
{if((state_val_33565 === 2))
{var state_33564__$1 = state_33564;if(true)
{var statearr_33570_33583 = state_33564__$1;(statearr_33570_33583[1] = 4);
} else
{var statearr_33571_33584 = state_33564__$1;(statearr_33571_33584[1] = 5);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_33565 === 1))
{var state_33564__$1 = state_33564;var statearr_33572_33585 = state_33564__$1;(statearr_33572_33585[2] = null);
(statearr_33572_33585[1] = 2);
return cljs.core.constant$keyword$555;
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
var state_machine__5548__auto____0 = (function (){var statearr_33576 = [null,null,null,null,null,null,null,null];(statearr_33576[0] = state_machine__5548__auto__);
(statearr_33576[1] = 1);
return statearr_33576;
});
var state_machine__5548__auto____1 = (function (state_33564){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33564);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33577){if((e33577 instanceof Object))
{var ex__5551__auto__ = e33577;var statearr_33578_33586 = state_33564;(statearr_33578_33586[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33564);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33577;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33587 = state_33564;
state_33564 = G__33587;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33564){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33579 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
