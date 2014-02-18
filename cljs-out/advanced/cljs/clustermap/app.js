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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$387,cljs.core.constant$keyword$323,cljs.core.constant$keyword$374,cljs.core.constant$keyword$316,cljs.core.constant$keyword$429,cljs.core.constant$keyword$384,cljs.core.constant$keyword$311,cljs.core.constant$keyword$385,cljs.core.constant$keyword$428,cljs.core.constant$keyword$430,cljs.core.constant$keyword$437,cljs.core.constant$keyword$400,cljs.core.constant$keyword$324,cljs.core.constant$keyword$431,cljs.core.constant$keyword$438],[cljs.core.constant$keyword$434,null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21971){var vec__21972 = p__21971;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21972,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21972,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21973){var map__21975 = p__21973;var map__21975__$1 = ((cljs.core.seq_QMARK_(map__21975))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21975):map__21975);var path_values = map__21975__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21973 = null;if (arguments.length > 0) {
  p__21973 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21973);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21976){
var p__21973 = cljs.core.seq(arglist__21976);
return set_state__delegate(p__21973);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21998){var state_val_21999 = (state_21998[1]);if((state_val_21999 === 2))
{var inst_21994 = (state_21998[2]);var inst_21995 = clustermap.rtree.rtree_index(inst_21994);var inst_21996 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$429,inst_21994,cljs.core.constant$keyword$430,inst_21995], 0));var state_21998__$1 = state_21998;return cljs.core.async.impl.ioc_helpers.return_chan(state_21998__$1,inst_21996);
} else
{if((state_val_21999 === 1))
{var inst_21992 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$257,true], 0));var state_21998__$1 = state_21998;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21998__$1,2,inst_21992);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22003 = [null,null,null,null,null,null,null];(statearr_22003[0] = state_machine__5507__auto__);
(statearr_22003[1] = 1);
return statearr_22003;
});
var state_machine__5507__auto____1 = (function (state_21998){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21998);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22004){if((e22004 instanceof Object))
{var ex__5510__auto__ = e22004;var statearr_22005_22007 = state_21998;(statearr_22005_22007[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21998);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e22004;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__22008 = state_21998;
state_21998 = G__22008;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21998){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22006 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22028){var state_val_22029 = (state_22028[1]);if((state_val_22029 === 2))
{var inst_22025 = (state_22028[2]);var inst_22026 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$324,inst_22025], 0));var state_22028__$1 = state_22028;return cljs.core.async.impl.ioc_helpers.return_chan(state_22028__$1,inst_22026);
} else
{if((state_val_22029 === 1))
{var inst_22023 = clustermap.api.portfolio_company_site_stats();var state_22028__$1 = state_22028;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22028__$1,2,inst_22023);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22033 = [null,null,null,null,null,null,null];(statearr_22033[0] = state_machine__5507__auto__);
(statearr_22033[1] = 1);
return statearr_22033;
});
var state_machine__5507__auto____1 = (function (state_22028){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22028);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22034){if((e22034 instanceof Object))
{var ex__5510__auto__ = e22034;var statearr_22035_22037 = state_22028;(statearr_22035_22037[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22028);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e22034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__22038 = state_22028;
state_22028 = G__22038;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22028){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22036 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$400,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__22039,type){var vec__22041 = p__22039;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22041,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22041,1,null);var selection_portfolio_companies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22041,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22041,3,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22041,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22041,5,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22041,6,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$311,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,type,cljs.core.constant$keyword$237,selection], null),cljs.core.constant$keyword$438,selection_portfolio_company_stats,cljs.core.constant$keyword$437,selection_portfolio_companies,cljs.core.constant$keyword$323,selection_portfolio_company_site_stats,cljs.core.constant$keyword$385,selection_portfolio_company_sites,cljs.core.constant$keyword$374,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$428,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__22042){var vec__22047 = p__22042;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22047,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22047,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$384,selector], 0));
var pred__22048 = cljs.core._EQ_;var expr__22049 = type;if(cljs.core.truth_((pred__22048.cljs$core$IFn$_invoke$arity$2 ? pred__22048.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$305,expr__22049) : pred__22048.call(null,cljs.core.constant$keyword$305,expr__22049))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22048.cljs$core$IFn$_invoke$arity$2 ? pred__22048.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$306,expr__22049) : pred__22048.call(null,cljs.core.constant$keyword$306,expr__22049))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22048.cljs$core$IFn$_invoke$arity$2 ? pred__22048.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$307,expr__22049) : pred__22048.call(null,cljs.core.constant$keyword$307,expr__22049))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$387.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.nav.change_view(cljs.core.name(view__$1));
return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$387,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__22052 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22052,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22052,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22052,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22052,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$387,view,cljs.core.constant$keyword$272,type,cljs.core.constant$keyword$268,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__22053){var vec__22056 = p__22053;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22056,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22056,1,null);var map__22057 = clustermap.app.parse_route();var map__22057__$1 = ((cljs.core.seq_QMARK_(map__22057))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22057):map__22057);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22057__$1,cljs.core.constant$keyword$387);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__22059 = clustermap.app.parse_route();var map__22059__$1 = ((cljs.core.seq_QMARK_(map__22059))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22059):map__22059);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22059__$1,cljs.core.constant$keyword$268);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22059__$1,cljs.core.constant$keyword$272);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$401,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$288,clustermap.app.set_selection_route,cljs.core.constant$keyword$439,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$310,clustermap.app.set_view_route,cljs.core.constant$keyword$440,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__22063 = params__9259__auto__;var map__22063__$1 = ((cljs.core.seq_QMARK_(map__22063))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22063):map__22063);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$439,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__22064 = params__9259__auto__;var map__22064__$1 = ((cljs.core.seq_QMARK_(map__22064))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22064):map__22064);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22064__$1,cljs.core.constant$keyword$387);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$440,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$439,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__22065 = params__9259__auto__;var map__22065__$1 = ((cljs.core.seq_QMARK_(map__22065))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22065):map__22065);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22065__$1,cljs.core.constant$keyword$268);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22065__$1,cljs.core.constant$keyword$272);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22065__$1,cljs.core.constant$keyword$387);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$440,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$439,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$308,comm,cljs.core.constant$keyword$312,path_fn,cljs.core.constant$keyword$313,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_portfolio_company_site_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22112){var state_val_22113 = (state_22112[1]);if((state_val_22113 === 7))
{var inst_22101 = (state_22112[2]);var inst_22102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22101,0,null);var inst_22103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22101,1,null);var inst_22104 = clustermap.app.handle_event(inst_22102,inst_22103);var state_22112__$1 = (function (){var statearr_22114 = state_22112;(statearr_22114[7] = inst_22104);
return statearr_22114;
})();var statearr_22115_22128 = state_22112__$1;(statearr_22115_22128[2] = null);
(statearr_22115_22128[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_22113 === 6))
{var inst_22108 = (state_22112[2]);var state_22112__$1 = state_22112;var statearr_22116_22129 = state_22112__$1;(statearr_22116_22129[2] = inst_22108);
(statearr_22116_22129[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_22113 === 5))
{var state_22112__$1 = state_22112;var statearr_22117_22130 = state_22112__$1;(statearr_22117_22130[2] = null);
(statearr_22117_22130[1] = 6);
return cljs.core.constant$keyword$243;
} else
{if((state_val_22113 === 4))
{var state_22112__$1 = state_22112;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22112__$1,7,comm);
} else
{if((state_val_22113 === 3))
{var inst_22110 = (state_22112[2]);var state_22112__$1 = state_22112;return cljs.core.async.impl.ioc_helpers.return_chan(state_22112__$1,inst_22110);
} else
{if((state_val_22113 === 2))
{var state_22112__$1 = state_22112;if(true)
{var statearr_22118_22131 = state_22112__$1;(statearr_22118_22131[1] = 4);
} else
{var statearr_22119_22132 = state_22112__$1;(statearr_22119_22132[1] = 5);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_22113 === 1))
{var state_22112__$1 = state_22112;var statearr_22120_22133 = state_22112__$1;(statearr_22120_22133[2] = null);
(statearr_22120_22133[1] = 2);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_22124 = [null,null,null,null,null,null,null,null];(statearr_22124[0] = state_machine__5507__auto__);
(statearr_22124[1] = 1);
return statearr_22124;
});
var state_machine__5507__auto____1 = (function (state_22112){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22112);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22125){if((e22125 instanceof Object))
{var ex__5510__auto__ = e22125;var statearr_22126_22134 = state_22112;(statearr_22126_22134[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22112);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e22125;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__22135 = state_22112;
state_22112 = G__22135;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22112){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22127 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
