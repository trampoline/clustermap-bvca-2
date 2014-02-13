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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$363,cljs.core.constant$keyword$300,cljs.core.constant$keyword$349,cljs.core.constant$keyword$294,cljs.core.constant$keyword$395,cljs.core.constant$keyword$359,cljs.core.constant$keyword$289,cljs.core.constant$keyword$361,cljs.core.constant$keyword$394,cljs.core.constant$keyword$360,cljs.core.constant$keyword$373,cljs.core.constant$keyword$396,cljs.core.constant$keyword$301],[cljs.core.constant$keyword$398,null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21462){var vec__21463 = p__21462;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21463,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21463,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21464){var map__21466 = p__21464;var map__21466__$1 = ((cljs.core.seq_QMARK_(map__21466))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21466):map__21466);var path_values = map__21466__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21464 = null;if (arguments.length > 0) {
  p__21464 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21464);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21467){
var p__21464 = cljs.core.seq(arglist__21467);
return set_state__delegate(p__21464);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21487){var state_val_21488 = (state_21487[1]);if((state_val_21488 === 2))
{var inst_21484 = (state_21487[2]);var inst_21485 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$395,inst_21484], 0));var state_21487__$1 = state_21487;return cljs.core.async.impl.ioc_helpers.return_chan(state_21487__$1,inst_21485);
} else
{if((state_val_21488 === 1))
{var inst_21482 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$238,true], 0));var state_21487__$1 = state_21487;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21487__$1,2,inst_21482);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21492 = [null,null,null,null,null,null,null];(statearr_21492[0] = state_machine__5507__auto__);
(statearr_21492[1] = 1);
return statearr_21492;
});
var state_machine__5507__auto____1 = (function (state_21487){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21487);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21493){if((e21493 instanceof Object))
{var ex__5510__auto__ = e21493;var statearr_21494_21496 = state_21487;(statearr_21494_21496[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21487);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e21493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__21497 = state_21487;
state_21487 = G__21497;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21487){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21495 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$373,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21498,type){var vec__21500 = p__21498;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21500,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21500,1,null);var selection_portfolio_companies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21500,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21500,3,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21500,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21500,5,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21500,6,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$251,type,cljs.core.constant$keyword$218,selection], null),cljs.core.constant$keyword$301,selection_portfolio_company_stats,cljs.core.constant$keyword$360,selection_portfolio_companies,cljs.core.constant$keyword$300,selection_portfolio_company_site_stats,cljs.core.constant$keyword$361,selection_portfolio_company_sites,cljs.core.constant$keyword$349,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$394,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__21501){var vec__21506 = p__21501;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21506,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21506,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$359,selector], 0));
var pred__21507 = cljs.core._EQ_;var expr__21508 = type;if(cljs.core.truth_((pred__21507.cljs$core$IFn$_invoke$arity$2 ? pred__21507.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$284,expr__21508) : pred__21507.call(null,cljs.core.constant$keyword$284,expr__21508))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21507.cljs$core$IFn$_invoke$arity$2 ? pred__21507.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$285,expr__21508) : pred__21507.call(null,cljs.core.constant$keyword$285,expr__21508))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21507.cljs$core$IFn$_invoke$arity$2 ? pred__21507.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$286,expr__21508) : pred__21507.call(null,cljs.core.constant$keyword$286,expr__21508))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null,clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.nav.change_view(cljs.core.name(view__$1));
return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$363,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__21511 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21511,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21511,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21511,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21511,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$363,view,cljs.core.constant$keyword$251,type,cljs.core.constant$keyword$247,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__21512){var vec__21515 = p__21512;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21515,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21515,1,null);var map__21516 = clustermap.app.parse_route();var map__21516__$1 = ((cljs.core.seq_QMARK_(map__21516))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21516):map__21516);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21516__$1,cljs.core.constant$keyword$363);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__21518 = clustermap.app.parse_route();var map__21518__$1 = ((cljs.core.seq_QMARK_(map__21518))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21518):map__21518);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21518__$1,cljs.core.constant$keyword$247);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21518__$1,cljs.core.constant$keyword$251);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$371,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$267,clustermap.app.set_selection_route,cljs.core.constant$keyword$401,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$288,clustermap.app.set_view_route,cljs.core.constant$keyword$402,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__21522 = params__9259__auto__;var map__21522__$1 = ((cljs.core.seq_QMARK_(map__21522))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21522):map__21522);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$401,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__21523 = params__9259__auto__;var map__21523__$1 = ((cljs.core.seq_QMARK_(map__21523))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21523):map__21523);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21523__$1,cljs.core.constant$keyword$363);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$402,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$401,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__21524 = params__9259__auto__;var map__21524__$1 = ((cljs.core.seq_QMARK_(map__21524))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21524):map__21524);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21524__$1,cljs.core.constant$keyword$247);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21524__$1,cljs.core.constant$keyword$251);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21524__$1,cljs.core.constant$keyword$363);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$402,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$401,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$287,comm,cljs.core.constant$keyword$290,path_fn,cljs.core.constant$keyword$291,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21571){var state_val_21572 = (state_21571[1]);if((state_val_21572 === 7))
{var inst_21560 = (state_21571[2]);var inst_21561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21560,0,null);var inst_21562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21560,1,null);var inst_21563 = clustermap.app.handle_event(inst_21561,inst_21562);var state_21571__$1 = (function (){var statearr_21573 = state_21571;(statearr_21573[7] = inst_21563);
return statearr_21573;
})();var statearr_21574_21587 = state_21571__$1;(statearr_21574_21587[2] = null);
(statearr_21574_21587[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_21572 === 6))
{var inst_21567 = (state_21571[2]);var state_21571__$1 = state_21571;var statearr_21575_21588 = state_21571__$1;(statearr_21575_21588[2] = inst_21567);
(statearr_21575_21588[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_21572 === 5))
{var state_21571__$1 = state_21571;var statearr_21576_21589 = state_21571__$1;(statearr_21576_21589[2] = null);
(statearr_21576_21589[1] = 6);
return cljs.core.constant$keyword$224;
} else
{if((state_val_21572 === 4))
{var state_21571__$1 = state_21571;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21571__$1,7,comm);
} else
{if((state_val_21572 === 3))
{var inst_21569 = (state_21571[2]);var state_21571__$1 = state_21571;return cljs.core.async.impl.ioc_helpers.return_chan(state_21571__$1,inst_21569);
} else
{if((state_val_21572 === 2))
{var state_21571__$1 = state_21571;if(true)
{var statearr_21577_21590 = state_21571__$1;(statearr_21577_21590[1] = 4);
} else
{var statearr_21578_21591 = state_21571__$1;(statearr_21578_21591[1] = 5);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_21572 === 1))
{var state_21571__$1 = state_21571;var statearr_21579_21592 = state_21571__$1;(statearr_21579_21592[2] = null);
(statearr_21579_21592[1] = 2);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_21583 = [null,null,null,null,null,null,null,null];(statearr_21583[0] = state_machine__5507__auto__);
(statearr_21583[1] = 1);
return statearr_21583;
});
var state_machine__5507__auto____1 = (function (state_21571){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21571);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21584){if((e21584 instanceof Object))
{var ex__5510__auto__ = e21584;var statearr_21585_21593 = state_21571;(statearr_21585_21593[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21571);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e21584;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__21594 = state_21571;
state_21571 = G__21594;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21571){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21586 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
