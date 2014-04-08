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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__33341){var vec__33342 = p__33341;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33342,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33342,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__33343){var map__33345 = p__33343;var map__33345__$1 = ((cljs.core.seq_QMARK_(map__33345))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33345):map__33345);var path_values = map__33345__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__33343 = null;if (arguments.length > 0) {
  p__33343 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__33343);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__33346){
var p__33343 = cljs.core.seq(arglist__33346);
return set_state__delegate(p__33343);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33368){var state_val_33369 = (state_33368[1]);if((state_val_33369 === 2))
{var inst_33364 = (state_33368[2]);var inst_33365 = clustermap.rtree.rtree_index(inst_33364);var inst_33366 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$782,inst_33364,cljs.core.constant$keyword$783,inst_33365], 0));var state_33368__$1 = state_33368;return cljs.core.async.impl.ioc_helpers.return_chan(state_33368__$1,inst_33366);
} else
{if((state_val_33369 === 1))
{var inst_33362 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$569,true], 0));var state_33368__$1 = state_33368;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33368__$1,2,inst_33362);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33373 = [null,null,null,null,null,null,null];(statearr_33373[0] = state_machine__5548__auto__);
(statearr_33373[1] = 1);
return statearr_33373;
});
var state_machine__5548__auto____1 = (function (state_33368){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33368);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33374){if((e33374 instanceof Object))
{var ex__5551__auto__ = e33374;var statearr_33375_33377 = state_33368;(statearr_33375_33377[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33368);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33378 = state_33368;
state_33368 = G__33378;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33368){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33376 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33398){var state_val_33399 = (state_33398[1]);if((state_val_33399 === 2))
{var inst_33395 = (state_33398[2]);var inst_33396 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$671,inst_33395], 0));var state_33398__$1 = state_33398;return cljs.core.async.impl.ioc_helpers.return_chan(state_33398__$1,inst_33396);
} else
{if((state_val_33399 === 1))
{var inst_33393 = clustermap.api.investment_stats();var state_33398__$1 = state_33398;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33398__$1,2,inst_33393);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33403 = [null,null,null,null,null,null,null];(statearr_33403[0] = state_machine__5548__auto__);
(statearr_33403[1] = 1);
return statearr_33403;
});
var state_machine__5548__auto____1 = (function (state_33398){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33398);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33404){if((e33404 instanceof Object))
{var ex__5551__auto__ = e33404;var statearr_33405_33407 = state_33398;(statearr_33405_33407[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33398);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33404;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33408 = state_33398;
state_33398 = G__33408;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33398){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33406 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$751,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__33409,type){var vec__33411 = p__33409;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33411,0,null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33411,1,null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33411,2,null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33411,3,null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33411,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33411,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$644,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$588,type,cljs.core.constant$keyword$549,selection], null),cljs.core.constant$keyword$670,selection_investment_stats,cljs.core.constant$keyword$727,selection_investment_account_timelines,cljs.core.constant$keyword$738,selection_investment_aggs,cljs.core.constant$keyword$737,selection_investments,cljs.core.constant$keyword$781,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__33412){var vec__33417 = p__33412;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33417,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33417,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$736.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$736,selector], 0));
var pred__33418 = cljs.core._EQ_;var expr__33419 = type;if(cljs.core.truth_((pred__33418.cljs$core$IFn$_invoke$arity$2 ? pred__33418.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$633,expr__33419) : pred__33418.call(null,cljs.core.constant$keyword$633,expr__33419))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__33418.cljs$core$IFn$_invoke$arity$2 ? pred__33418.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$634,expr__33419) : pred__33418.call(null,cljs.core.constant$keyword$634,expr__33419))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__33418.cljs$core$IFn$_invoke$arity$2 ? pred__33418.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$635,expr__33419) : pred__33418.call(null,cljs.core.constant$keyword$635,expr__33419))))
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__33422 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33422,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33422,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33422,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33422,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$750,view,cljs.core.constant$keyword$588,type,cljs.core.constant$keyword$584,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__33423){var vec__33426 = p__33423;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33426,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33426,1,null);var map__33427 = clustermap.app.parse_route();var map__33427__$1 = ((cljs.core.seq_QMARK_(map__33427))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33427):map__33427);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33427__$1,cljs.core.constant$keyword$750);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__33429 = clustermap.app.parse_route();var map__33429__$1 = ((cljs.core.seq_QMARK_(map__33429))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33429):map__33429);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33429__$1,cljs.core.constant$keyword$584);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33429__$1,cljs.core.constant$keyword$588);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33462){var state_val_33463 = (state_33462[1]);if((state_val_33463 === 2))
{var inst_33453 = (state_33462[7]);var inst_33459 = (state_33462[2]);var inst_33460 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$791,inst_33453,cljs.core.constant$keyword$738,inst_33459], 0));var state_33462__$1 = state_33462;return cljs.core.async.impl.ioc_helpers.return_chan(state_33462__$1,inst_33460);
} else
{if((state_val_33463 === 1))
{var inst_33453 = (state_33462[7]);var inst_33451 = cljs.core.deref(clustermap.app.state);var inst_33452 = cljs.core.constant$keyword$791.cljs$core$IFn$_invoke$arity$1(inst_33451);var inst_33453__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33452,table_view], 0));var inst_33454 = cljs.core.deref(clustermap.app.state);var inst_33455 = cljs.core.constant$keyword$736.cljs$core$IFn$_invoke$arity$1(inst_33454);var inst_33456 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33455,inst_33453__$1], 0));var inst_33457 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33456], 0));var state_33462__$1 = (function (){var statearr_33464 = state_33462;(statearr_33464[7] = inst_33453__$1);
return statearr_33464;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33462__$1,2,inst_33457);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33468 = [null,null,null,null,null,null,null,null];(statearr_33468[0] = state_machine__5548__auto__);
(statearr_33468[1] = 1);
return statearr_33468;
});
var state_machine__5548__auto____1 = (function (state_33462){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33462);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33469){if((e33469 instanceof Object))
{var ex__5551__auto__ = e33469;var statearr_33470_33472 = state_33462;(statearr_33470_33472[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33462);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33469;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33473 = state_33462;
state_33462 = G__33473;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33462){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33471 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33471;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33506){var state_val_33507 = (state_33506[1]);if((state_val_33507 === 2))
{var inst_33497 = (state_33506[7]);var inst_33503 = (state_33506[2]);var inst_33504 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$792,inst_33497,cljs.core.constant$keyword$737,inst_33503], 0));var state_33506__$1 = state_33506;return cljs.core.async.impl.ioc_helpers.return_chan(state_33506__$1,inst_33504);
} else
{if((state_val_33507 === 1))
{var inst_33497 = (state_33506[7]);var inst_33495 = cljs.core.deref(clustermap.app.state);var inst_33496 = cljs.core.constant$keyword$792.cljs$core$IFn$_invoke$arity$1(inst_33495);var inst_33497__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33496,table_view], 0));var inst_33498 = cljs.core.deref(clustermap.app.state);var inst_33499 = cljs.core.constant$keyword$736.cljs$core$IFn$_invoke$arity$1(inst_33498);var inst_33500 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33499,inst_33497__$1], 0));var inst_33501 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_33500], 0));var state_33506__$1 = (function (){var statearr_33508 = state_33506;(statearr_33508[7] = inst_33497__$1);
return statearr_33508;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33506__$1,2,inst_33501);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33512 = [null,null,null,null,null,null,null,null];(statearr_33512[0] = state_machine__5548__auto__);
(statearr_33512[1] = 1);
return statearr_33512;
});
var state_machine__5548__auto____1 = (function (state_33506){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33506);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33513){if((e33513 instanceof Object))
{var ex__5551__auto__ = e33513;var statearr_33514_33516 = state_33506;(statearr_33514_33516[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33506);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33517 = state_33506;
state_33506 = G__33517;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33506){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33515 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33515;
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
clustermap.app.init_routes = (function init_routes(comm){var action__9284__auto___33534 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33526 = params__9285__auto__;var map__33526__$1 = ((cljs.core.seq_QMARK_(map__33526))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33526):map__33526);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33527 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9284__auto___33534);
var action__9284__auto___33535 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33528 = params__9285__auto__;var map__33528__$1 = ((cljs.core.seq_QMARK_(map__33528))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33528):map__33528);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33529 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9284__auto___33535);
var action__9284__auto___33536 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33530 = params__9285__auto__;var map__33530__$1 = ((cljs.core.seq_QMARK_(map__33530))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33530):map__33530);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33530__$1,cljs.core.constant$keyword$750);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$795,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33531 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33531,0,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$795,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9284__auto___33536);
var action__9284__auto___33537 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__33532 = params__9285__auto__;var map__33532__$1 = ((cljs.core.seq_QMARK_(map__33532))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33532):map__33532);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33532__$1,cljs.core.constant$keyword$584);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33532__$1,cljs.core.constant$keyword$588);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33532__$1,cljs.core.constant$keyword$750);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$795,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__33533 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33533,0,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33533,1,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33533,2,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$795,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9284__auto___33537);
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
var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33584){var state_val_33585 = (state_33584[1]);if((state_val_33585 === 7))
{var inst_33573 = (state_33584[2]);var inst_33574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33573,0,null);var inst_33575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33573,1,null);var inst_33576 = clustermap.app.handle_event(inst_33574,inst_33575);var state_33584__$1 = (function (){var statearr_33586 = state_33584;(statearr_33586[7] = inst_33576);
return statearr_33586;
})();var statearr_33587_33600 = state_33584__$1;(statearr_33587_33600[2] = null);
(statearr_33587_33600[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33585 === 6))
{var inst_33580 = (state_33584[2]);var state_33584__$1 = state_33584;var statearr_33588_33601 = state_33584__$1;(statearr_33588_33601[2] = inst_33580);
(statearr_33588_33601[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33585 === 5))
{var state_33584__$1 = state_33584;var statearr_33589_33602 = state_33584__$1;(statearr_33589_33602[2] = null);
(statearr_33589_33602[1] = 6);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33585 === 4))
{var state_33584__$1 = state_33584;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33584__$1,7,comm);
} else
{if((state_val_33585 === 3))
{var inst_33582 = (state_33584[2]);var state_33584__$1 = state_33584;return cljs.core.async.impl.ioc_helpers.return_chan(state_33584__$1,inst_33582);
} else
{if((state_val_33585 === 2))
{var state_33584__$1 = state_33584;if(true)
{var statearr_33590_33603 = state_33584__$1;(statearr_33590_33603[1] = 4);
} else
{var statearr_33591_33604 = state_33584__$1;(statearr_33591_33604[1] = 5);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_33585 === 1))
{var state_33584__$1 = state_33584;var statearr_33592_33605 = state_33584__$1;(statearr_33592_33605[2] = null);
(statearr_33592_33605[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_33596 = [null,null,null,null,null,null,null,null];(statearr_33596[0] = state_machine__5548__auto__);
(statearr_33596[1] = 1);
return statearr_33596;
});
var state_machine__5548__auto____1 = (function (state_33584){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33584);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33597){if((e33597 instanceof Object))
{var ex__5551__auto__ = e33597;var statearr_33598_33606 = state_33584;(statearr_33598_33606[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33584);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33607 = state_33584;
state_33584 = G__33607;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33584){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33599 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
