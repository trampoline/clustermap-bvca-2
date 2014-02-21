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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$395,cljs.core.constant$keyword$331,cljs.core.constant$keyword$382,cljs.core.constant$keyword$324,cljs.core.constant$keyword$440,cljs.core.constant$keyword$392,cljs.core.constant$keyword$319,cljs.core.constant$keyword$393,cljs.core.constant$keyword$439,cljs.core.constant$keyword$441,cljs.core.constant$keyword$409,cljs.core.constant$keyword$332,cljs.core.constant$keyword$442,cljs.core.constant$keyword$448],[cljs.core.constant$keyword$445,null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__22015){var vec__22016 = p__22015;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__22017){var map__22019 = p__22017;var map__22019__$1 = ((cljs.core.seq_QMARK_(map__22019))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22019):map__22019);var path_values = map__22019__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__22017 = null;if (arguments.length > 0) {
  p__22017 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__22017);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__22020){
var p__22017 = cljs.core.seq(arglist__22020);
return set_state__delegate(p__22017);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22042){var state_val_22043 = (state_22042[1]);if((state_val_22043 === 2))
{var inst_22038 = (state_22042[2]);var inst_22039 = clustermap.rtree.rtree_index(inst_22038);var inst_22040 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$440,inst_22038,cljs.core.constant$keyword$441,inst_22039], 0));var state_22042__$1 = state_22042;return cljs.core.async.impl.ioc_helpers.return_chan(state_22042__$1,inst_22040);
} else
{if((state_val_22043 === 1))
{var inst_22036 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$262,true], 0));var state_22042__$1 = state_22042;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22042__$1,2,inst_22036);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22047 = [null,null,null,null,null,null,null];(statearr_22047[0] = state_machine__5507__auto__);
(statearr_22047[1] = 1);
return statearr_22047;
});
var state_machine__5507__auto____1 = (function (state_22042){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22042);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22048){if((e22048 instanceof Object))
{var ex__5510__auto__ = e22048;var statearr_22049_22051 = state_22042;(statearr_22049_22051[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22042);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e22048;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__22052 = state_22042;
state_22042 = G__22052;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22042){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22050 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22050;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22072){var state_val_22073 = (state_22072[1]);if((state_val_22073 === 2))
{var inst_22069 = (state_22072[2]);var inst_22070 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$332,inst_22069], 0));var state_22072__$1 = state_22072;return cljs.core.async.impl.ioc_helpers.return_chan(state_22072__$1,inst_22070);
} else
{if((state_val_22073 === 1))
{var inst_22067 = clustermap.api.portfolio_company_site_stats();var state_22072__$1 = state_22072;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22072__$1,2,inst_22067);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22077 = [null,null,null,null,null,null,null];(statearr_22077[0] = state_machine__5507__auto__);
(statearr_22077[1] = 1);
return statearr_22077;
});
var state_machine__5507__auto____1 = (function (state_22072){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22072);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22078){if((e22078 instanceof Object))
{var ex__5510__auto__ = e22078;var statearr_22079_22081 = state_22072;(statearr_22079_22081[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22072);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e22078;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__22082 = state_22072;
state_22072 = G__22082;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22072){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22080 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22080;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$409,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__22083,type){var vec__22085 = p__22083;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22085,0,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22085,1,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22085,2,null);var selection_portfolio_company_sites_by_company = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22085,3,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22085,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22085,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,type,cljs.core.constant$keyword$242,selection], null),cljs.core.constant$keyword$331,selection_portfolio_company_site_stats,cljs.core.constant$keyword$393,selection_portfolio_company_sites,cljs.core.constant$keyword$448,selection_portfolio_company_sites_by_company,cljs.core.constant$keyword$382,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$439,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__22086){var vec__22091 = p__22086;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22091,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22091,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$392,selector], 0));
var pred__22092 = cljs.core._EQ_;var expr__22093 = type;if(cljs.core.truth_((pred__22092.cljs$core$IFn$_invoke$arity$2 ? pred__22092.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,expr__22093) : pred__22092.call(null,cljs.core.constant$keyword$310,expr__22093))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22092.cljs$core$IFn$_invoke$arity$2 ? pred__22092.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$311,expr__22093) : pred__22092.call(null,cljs.core.constant$keyword$311,expr__22093))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22092.cljs$core$IFn$_invoke$arity$2 ? pred__22092.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$312,expr__22093) : pred__22092.call(null,cljs.core.constant$keyword$312,expr__22093))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$395.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$395,view__$1], 0));
return clustermap.nav.change_view(cljs.core.name(view__$1));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__22096 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22096,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22096,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22096,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22096,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$395,view,cljs.core.constant$keyword$277,type,cljs.core.constant$keyword$273,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__22097){var vec__22100 = p__22097;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22100,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22100,1,null);var map__22101 = clustermap.app.parse_route();var map__22101__$1 = ((cljs.core.seq_QMARK_(map__22101))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22101):map__22101);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22101__$1,cljs.core.constant$keyword$395);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__22103 = clustermap.app.parse_route();var map__22103__$1 = ((cljs.core.seq_QMARK_(map__22103))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22103):map__22103);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103__$1,cljs.core.constant$keyword$273);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103__$1,cljs.core.constant$keyword$277);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$410,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$293,clustermap.app.set_selection_route,cljs.core.constant$keyword$449,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$315,clustermap.app.set_view_route,cljs.core.constant$keyword$450,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9263__auto__){var map__22107 = params__9263__auto__;var map__22107__$1 = ((cljs.core.seq_QMARK_(map__22107))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22107):map__22107);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$449,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9263__auto__){var map__22108 = params__9263__auto__;var map__22108__$1 = ((cljs.core.seq_QMARK_(map__22108))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22108):map__22108);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22108__$1,cljs.core.constant$keyword$395);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$450,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$449,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9263__auto__){var map__22109 = params__9263__auto__;var map__22109__$1 = ((cljs.core.seq_QMARK_(map__22109))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22109):map__22109);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22109__$1,cljs.core.constant$keyword$273);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22109__$1,cljs.core.constant$keyword$277);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22109__$1,cljs.core.constant$keyword$395);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$450,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$449,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$313,comm,cljs.core.constant$keyword$320,path_fn,cljs.core.constant$keyword$321,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_portfolio_company_site_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22156){var state_val_22157 = (state_22156[1]);if((state_val_22157 === 7))
{var inst_22145 = (state_22156[2]);var inst_22146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22145,0,null);var inst_22147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22145,1,null);var inst_22148 = clustermap.app.handle_event(inst_22146,inst_22147);var state_22156__$1 = (function (){var statearr_22158 = state_22156;(statearr_22158[7] = inst_22148);
return statearr_22158;
})();var statearr_22159_22172 = state_22156__$1;(statearr_22159_22172[2] = null);
(statearr_22159_22172[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22157 === 6))
{var inst_22152 = (state_22156[2]);var state_22156__$1 = state_22156;var statearr_22160_22173 = state_22156__$1;(statearr_22160_22173[2] = inst_22152);
(statearr_22160_22173[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22157 === 5))
{var state_22156__$1 = state_22156;var statearr_22161_22174 = state_22156__$1;(statearr_22161_22174[2] = null);
(statearr_22161_22174[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22157 === 4))
{var state_22156__$1 = state_22156;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22156__$1,7,comm);
} else
{if((state_val_22157 === 3))
{var inst_22154 = (state_22156[2]);var state_22156__$1 = state_22156;return cljs.core.async.impl.ioc_helpers.return_chan(state_22156__$1,inst_22154);
} else
{if((state_val_22157 === 2))
{var state_22156__$1 = state_22156;if(true)
{var statearr_22162_22175 = state_22156__$1;(statearr_22162_22175[1] = 4);
} else
{var statearr_22163_22176 = state_22156__$1;(statearr_22163_22176[1] = 5);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_22157 === 1))
{var state_22156__$1 = state_22156;var statearr_22164_22177 = state_22156__$1;(statearr_22164_22177[2] = null);
(statearr_22164_22177[1] = 2);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_22168 = [null,null,null,null,null,null,null,null];(statearr_22168[0] = state_machine__5507__auto__);
(statearr_22168[1] = 1);
return statearr_22168;
});
var state_machine__5507__auto____1 = (function (state_22156){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22156);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22169){if((e22169 instanceof Object))
{var ex__5510__auto__ = e22169;var statearr_22170_22178 = state_22156;(statearr_22170_22178[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22156);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e22169;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__22179 = state_22156;
state_22156 = G__22179;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22156){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22171 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
