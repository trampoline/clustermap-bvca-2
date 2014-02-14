// Compiled by ClojureScript 0.0-2138
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
goog.require('om.core');
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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$162,cljs.core.constant$keyword$94,cljs.core.constant$keyword$148,cljs.core.constant$keyword$87,cljs.core.constant$keyword$195,cljs.core.constant$keyword$158,cljs.core.constant$keyword$82,cljs.core.constant$keyword$160,cljs.core.constant$keyword$194,cljs.core.constant$keyword$159,cljs.core.constant$keyword$172,cljs.core.constant$keyword$95,cljs.core.constant$keyword$196,cljs.core.constant$keyword$201],[cljs.core.constant$keyword$198,null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__11339){var vec__11340 = p__11339;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11340,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11340,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__11341){var map__11343 = p__11341;var map__11343__$1 = ((cljs.core.seq_QMARK_(map__11343))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11343):map__11343);var path_values = map__11343__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__11341 = null;if (arguments.length > 0) {
  p__11341 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__11341);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__11344){
var p__11341 = cljs.core.seq(arglist__11344);
return set_state__delegate(p__11341);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11364){var state_val_11365 = (state_11364[1]);if((state_val_11365 === 2))
{var inst_11361 = (state_11364[2]);var inst_11362 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$195,inst_11361], 0));var state_11364__$1 = state_11364;return cljs.core.async.impl.ioc_helpers.return_chan(state_11364__$1,inst_11362);
} else
{if((state_val_11365 === 1))
{var inst_11359 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$31,true], 0));var state_11364__$1 = state_11364;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11364__$1,2,inst_11359);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11369 = [null,null,null,null,null,null,null];(statearr_11369[0] = state_machine__5507__auto__);
(statearr_11369[1] = 1);
return statearr_11369;
});
var state_machine__5507__auto____1 = (function (state_11364){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_11364);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11370){if((e11370 instanceof Object))
{var ex__5510__auto__ = e11370;var statearr_11371_11373 = state_11364;(statearr_11371_11373[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11364);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e11370;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__11374 = state_11364;
state_11364 = G__11374;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11364){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11372 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_11372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_11372;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11394){var state_val_11395 = (state_11394[1]);if((state_val_11395 === 2))
{var inst_11391 = (state_11394[2]);var inst_11392 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$95,inst_11391], 0));var state_11394__$1 = state_11394;return cljs.core.async.impl.ioc_helpers.return_chan(state_11394__$1,inst_11392);
} else
{if((state_val_11395 === 1))
{var inst_11389 = clustermap.api.portfolio_company_site_stats();var state_11394__$1 = state_11394;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11394__$1,2,inst_11389);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11399 = [null,null,null,null,null,null,null];(statearr_11399[0] = state_machine__5507__auto__);
(statearr_11399[1] = 1);
return statearr_11399;
});
var state_machine__5507__auto____1 = (function (state_11394){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_11394);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11400){if((e11400 instanceof Object))
{var ex__5510__auto__ = e11400;var statearr_11401_11403 = state_11394;(statearr_11401_11403[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11394);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e11400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__11404 = state_11394;
state_11394 = G__11404;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11394){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11402 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_11402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_11402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$172,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__11405,type){var vec__11407 = p__11405;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11407,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11407,1,null);var selection_portfolio_companies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11407,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11407,3,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11407,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11407,5,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11407,6,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$82,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$44,type,cljs.core.constant$keyword$11,selection], null),cljs.core.constant$keyword$201,selection_portfolio_company_stats,cljs.core.constant$keyword$159,selection_portfolio_companies,cljs.core.constant$keyword$94,selection_portfolio_company_site_stats,cljs.core.constant$keyword$160,selection_portfolio_company_sites,cljs.core.constant$keyword$148,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$194,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__11408){var vec__11413 = p__11408;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11413,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11413,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$158,selector], 0));
var pred__11414 = cljs.core._EQ_;var expr__11415 = type;if(cljs.core.truth_((pred__11414.cljs$core$IFn$_invoke$arity$2 ? pred__11414.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$77,expr__11415) : pred__11414.call(null,cljs.core.constant$keyword$77,expr__11415))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__11414.cljs$core$IFn$_invoke$arity$2 ? pred__11414.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$78,expr__11415) : pred__11414.call(null,cljs.core.constant$keyword$78,expr__11415))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__11414.cljs$core$IFn$_invoke$arity$2 ? pred__11414.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$79,expr__11415) : pred__11414.call(null,cljs.core.constant$keyword$79,expr__11415))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null,clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.nav.change_view(cljs.core.name(view__$1));
return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$162,view__$1], 0));
} else
{return null;
}
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3394__auto__ = type;if(cljs.core.truth_(and__3394__auto__))
{return id;
} else
{return and__3394__auto__;
}
})()))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name((function (){var or__3406__auto__ = view;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__11418 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11418,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11418,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11418,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11418,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$162,view,cljs.core.constant$keyword$44,type,cljs.core.constant$keyword$40,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__11419){var vec__11422 = p__11419;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11422,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11422,1,null);var map__11423 = clustermap.app.parse_route();var map__11423__$1 = ((cljs.core.seq_QMARK_(map__11423))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11423):map__11423);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11423__$1,cljs.core.constant$keyword$162);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__11425 = clustermap.app.parse_route();var map__11425__$1 = ((cljs.core.seq_QMARK_(map__11425))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11425):map__11425);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11425__$1,cljs.core.constant$keyword$40);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11425__$1,cljs.core.constant$keyword$44);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$170,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$60,clustermap.app.set_selection_route,cljs.core.constant$keyword$202,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$81,clustermap.app.set_view_route,cljs.core.constant$keyword$203,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__11429 = params__9259__auto__;var map__11429__$1 = ((cljs.core.seq_QMARK_(map__11429))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11429):map__11429);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$202,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__11430 = params__9259__auto__;var map__11430__$1 = ((cljs.core.seq_QMARK_(map__11430))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11430):map__11430);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11430__$1,cljs.core.constant$keyword$162);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$203,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$202,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__11431 = params__9259__auto__;var map__11431__$1 = ((cljs.core.seq_QMARK_(map__11431))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11431):map__11431);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11431__$1,cljs.core.constant$keyword$40);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11431__$1,cljs.core.constant$keyword$44);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11431__$1,cljs.core.constant$keyword$162);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$203,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$202,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,comm,cljs.core.constant$keyword$83,path_fn,cljs.core.constant$keyword$84,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_portfolio_company_site_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11478){var state_val_11479 = (state_11478[1]);if((state_val_11479 === 7))
{var inst_11467 = (state_11478[2]);var inst_11468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11467,0,null);var inst_11469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11467,1,null);var inst_11470 = clustermap.app.handle_event(inst_11468,inst_11469);var state_11478__$1 = (function (){var statearr_11480 = state_11478;(statearr_11480[7] = inst_11470);
return statearr_11480;
})();var statearr_11481_11494 = state_11478__$1;(statearr_11481_11494[2] = null);
(statearr_11481_11494[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11479 === 6))
{var inst_11474 = (state_11478[2]);var state_11478__$1 = state_11478;var statearr_11482_11495 = state_11478__$1;(statearr_11482_11495[2] = inst_11474);
(statearr_11482_11495[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11479 === 5))
{var state_11478__$1 = state_11478;var statearr_11483_11496 = state_11478__$1;(statearr_11483_11496[2] = null);
(statearr_11483_11496[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11479 === 4))
{var state_11478__$1 = state_11478;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11478__$1,7,comm);
} else
{if((state_val_11479 === 3))
{var inst_11476 = (state_11478[2]);var state_11478__$1 = state_11478;return cljs.core.async.impl.ioc_helpers.return_chan(state_11478__$1,inst_11476);
} else
{if((state_val_11479 === 2))
{var state_11478__$1 = state_11478;if(true)
{var statearr_11484_11497 = state_11478__$1;(statearr_11484_11497[1] = 4);
} else
{var statearr_11485_11498 = state_11478__$1;(statearr_11485_11498[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11479 === 1))
{var state_11478__$1 = state_11478;var statearr_11486_11499 = state_11478__$1;(statearr_11486_11499[2] = null);
(statearr_11486_11499[1] = 2);
return cljs.core.constant$keyword$17;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11490 = [null,null,null,null,null,null,null,null];(statearr_11490[0] = state_machine__5507__auto__);
(statearr_11490[1] = 1);
return statearr_11490;
});
var state_machine__5507__auto____1 = (function (state_11478){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_11478);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11491){if((e11491 instanceof Object))
{var ex__5510__auto__ = e11491;var statearr_11492_11500 = state_11478;(statearr_11492_11500[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11478);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e11491;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__11501 = state_11478;
state_11478 = G__11501;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11478){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11493 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_11493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_11493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
