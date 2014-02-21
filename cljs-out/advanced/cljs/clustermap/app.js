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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$384,cljs.core.constant$keyword$321,cljs.core.constant$keyword$371,cljs.core.constant$keyword$314,cljs.core.constant$keyword$426,cljs.core.constant$keyword$381,cljs.core.constant$keyword$309,cljs.core.constant$keyword$382,cljs.core.constant$keyword$425,cljs.core.constant$keyword$427,cljs.core.constant$keyword$397,cljs.core.constant$keyword$322,cljs.core.constant$keyword$428,cljs.core.constant$keyword$434],[cljs.core.constant$keyword$431,null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21976){var vec__21977 = p__21976;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21977,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21977,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21978){var map__21980 = p__21978;var map__21980__$1 = ((cljs.core.seq_QMARK_(map__21980))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21980):map__21980);var path_values = map__21980__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21978 = null;if (arguments.length > 0) {
  p__21978 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21978);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21981){
var p__21978 = cljs.core.seq(arglist__21981);
return set_state__delegate(p__21978);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22003){var state_val_22004 = (state_22003[1]);if((state_val_22004 === 2))
{var inst_21999 = (state_22003[2]);var inst_22000 = clustermap.rtree.rtree_index(inst_21999);var inst_22001 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$426,inst_21999,cljs.core.constant$keyword$427,inst_22000], 0));var state_22003__$1 = state_22003;return cljs.core.async.impl.ioc_helpers.return_chan(state_22003__$1,inst_22001);
} else
{if((state_val_22004 === 1))
{var inst_21997 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$255,true], 0));var state_22003__$1 = state_22003;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22003__$1,2,inst_21997);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22008 = [null,null,null,null,null,null,null];(statearr_22008[0] = state_machine__5507__auto__);
(statearr_22008[1] = 1);
return statearr_22008;
});
var state_machine__5507__auto____1 = (function (state_22003){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22003);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22009){if((e22009 instanceof Object))
{var ex__5510__auto__ = e22009;var statearr_22010_22012 = state_22003;(statearr_22010_22012[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22003);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e22009;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__22013 = state_22003;
state_22003 = G__22013;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22003){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22011 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22033){var state_val_22034 = (state_22033[1]);if((state_val_22034 === 2))
{var inst_22030 = (state_22033[2]);var inst_22031 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$322,inst_22030], 0));var state_22033__$1 = state_22033;return cljs.core.async.impl.ioc_helpers.return_chan(state_22033__$1,inst_22031);
} else
{if((state_val_22034 === 1))
{var inst_22028 = clustermap.api.portfolio_company_site_stats();var state_22033__$1 = state_22033;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22033__$1,2,inst_22028);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22038 = [null,null,null,null,null,null,null];(statearr_22038[0] = state_machine__5507__auto__);
(statearr_22038[1] = 1);
return statearr_22038;
});
var state_machine__5507__auto____1 = (function (state_22033){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22033);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22039){if((e22039 instanceof Object))
{var ex__5510__auto__ = e22039;var statearr_22040_22042 = state_22033;(statearr_22040_22042[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22033);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e22039;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__22043 = state_22033;
state_22033 = G__22043;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22033){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22041 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$397,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__22044,type){var vec__22046 = p__22044;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22046,0,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22046,1,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22046,2,null);var selection_portfolio_company_sites_by_company = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22046,3,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22046,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22046,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,type,cljs.core.constant$keyword$235,selection], null),cljs.core.constant$keyword$321,selection_portfolio_company_site_stats,cljs.core.constant$keyword$382,selection_portfolio_company_sites,cljs.core.constant$keyword$434,selection_portfolio_company_sites_by_company,cljs.core.constant$keyword$371,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$425,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__22047){var vec__22052 = p__22047;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22052,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22052,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$381,selector], 0));
var pred__22053 = cljs.core._EQ_;var expr__22054 = type;if(cljs.core.truth_((pred__22053.cljs$core$IFn$_invoke$arity$2 ? pred__22053.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$303,expr__22054) : pred__22053.call(null,cljs.core.constant$keyword$303,expr__22054))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22053.cljs$core$IFn$_invoke$arity$2 ? pred__22053.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$304,expr__22054) : pred__22053.call(null,cljs.core.constant$keyword$304,expr__22054))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22053.cljs$core$IFn$_invoke$arity$2 ? pred__22053.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$305,expr__22054) : pred__22053.call(null,cljs.core.constant$keyword$305,expr__22054))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
} else
{return null;
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$384.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.nav.change_view(cljs.core.name(view__$1));
return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$384,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__22057 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22057,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22057,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22057,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22057,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$384,view,cljs.core.constant$keyword$270,type,cljs.core.constant$keyword$266,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__22058){var vec__22061 = p__22058;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22061,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22061,1,null);var map__22062 = clustermap.app.parse_route();var map__22062__$1 = ((cljs.core.seq_QMARK_(map__22062))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22062):map__22062);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22062__$1,cljs.core.constant$keyword$384);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__22064 = clustermap.app.parse_route();var map__22064__$1 = ((cljs.core.seq_QMARK_(map__22064))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22064):map__22064);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22064__$1,cljs.core.constant$keyword$266);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22064__$1,cljs.core.constant$keyword$270);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$398,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$286,clustermap.app.set_selection_route,cljs.core.constant$keyword$435,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$308,clustermap.app.set_view_route,cljs.core.constant$keyword$436,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9263__auto__){var map__22068 = params__9263__auto__;var map__22068__$1 = ((cljs.core.seq_QMARK_(map__22068))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22068):map__22068);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$435,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9263__auto__){var map__22069 = params__9263__auto__;var map__22069__$1 = ((cljs.core.seq_QMARK_(map__22069))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22069):map__22069);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22069__$1,cljs.core.constant$keyword$384);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$436,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$435,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9263__auto__){var map__22070 = params__9263__auto__;var map__22070__$1 = ((cljs.core.seq_QMARK_(map__22070))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22070):map__22070);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22070__$1,cljs.core.constant$keyword$266);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22070__$1,cljs.core.constant$keyword$270);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22070__$1,cljs.core.constant$keyword$384);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$436,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$435,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$306,comm,cljs.core.constant$keyword$310,path_fn,cljs.core.constant$keyword$311,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_portfolio_company_site_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22117){var state_val_22118 = (state_22117[1]);if((state_val_22118 === 7))
{var inst_22106 = (state_22117[2]);var inst_22107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22106,0,null);var inst_22108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22106,1,null);var inst_22109 = clustermap.app.handle_event(inst_22107,inst_22108);var state_22117__$1 = (function (){var statearr_22119 = state_22117;(statearr_22119[7] = inst_22109);
return statearr_22119;
})();var statearr_22120_22133 = state_22117__$1;(statearr_22120_22133[2] = null);
(statearr_22120_22133[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22118 === 6))
{var inst_22113 = (state_22117[2]);var state_22117__$1 = state_22117;var statearr_22121_22134 = state_22117__$1;(statearr_22121_22134[2] = inst_22113);
(statearr_22121_22134[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22118 === 5))
{var state_22117__$1 = state_22117;var statearr_22122_22135 = state_22117__$1;(statearr_22122_22135[2] = null);
(statearr_22122_22135[1] = 6);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22118 === 4))
{var state_22117__$1 = state_22117;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22117__$1,7,comm);
} else
{if((state_val_22118 === 3))
{var inst_22115 = (state_22117[2]);var state_22117__$1 = state_22117;return cljs.core.async.impl.ioc_helpers.return_chan(state_22117__$1,inst_22115);
} else
{if((state_val_22118 === 2))
{var state_22117__$1 = state_22117;if(true)
{var statearr_22123_22136 = state_22117__$1;(statearr_22123_22136[1] = 4);
} else
{var statearr_22124_22137 = state_22117__$1;(statearr_22124_22137[1] = 5);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_22118 === 1))
{var state_22117__$1 = state_22117;var statearr_22125_22138 = state_22117__$1;(statearr_22125_22138[2] = null);
(statearr_22125_22138[1] = 2);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_22129 = [null,null,null,null,null,null,null,null];(statearr_22129[0] = state_machine__5507__auto__);
(statearr_22129[1] = 1);
return statearr_22129;
});
var state_machine__5507__auto____1 = (function (state_22117){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22117);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22130){if((e22130 instanceof Object))
{var ex__5510__auto__ = e22130;var statearr_22131_22139 = state_22117;(statearr_22131_22139[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22117);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e22130;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__22140 = state_22117;
state_22117 = G__22140;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22117){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22132 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
