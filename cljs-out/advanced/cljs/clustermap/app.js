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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$396,cljs.core.constant$keyword$331,cljs.core.constant$keyword$382,cljs.core.constant$keyword$324,cljs.core.constant$keyword$441,cljs.core.constant$keyword$392,cljs.core.constant$keyword$319,cljs.core.constant$keyword$393,cljs.core.constant$keyword$440,cljs.core.constant$keyword$442,cljs.core.constant$keyword$410,cljs.core.constant$keyword$332,cljs.core.constant$keyword$443,cljs.core.constant$keyword$394],[cljs.core.constant$keyword$446,null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__22009){var vec__22010 = p__22009;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22010,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22010,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__22011){var map__22013 = p__22011;var map__22013__$1 = ((cljs.core.seq_QMARK_(map__22013))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22013):map__22013);var path_values = map__22013__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__22011 = null;if (arguments.length > 0) {
  p__22011 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__22011);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__22014){
var p__22011 = cljs.core.seq(arglist__22014);
return set_state__delegate(p__22011);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22036){var state_val_22037 = (state_22036[1]);if((state_val_22037 === 2))
{var inst_22032 = (state_22036[2]);var inst_22033 = clustermap.rtree.rtree_index(inst_22032);var inst_22034 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$441,inst_22032,cljs.core.constant$keyword$442,inst_22033], 0));var state_22036__$1 = state_22036;return cljs.core.async.impl.ioc_helpers.return_chan(state_22036__$1,inst_22034);
} else
{if((state_val_22037 === 1))
{var inst_22030 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$262,true], 0));var state_22036__$1 = state_22036;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22036__$1,2,inst_22030);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22041 = [null,null,null,null,null,null,null];(statearr_22041[0] = state_machine__5507__auto__);
(statearr_22041[1] = 1);
return statearr_22041;
});
var state_machine__5507__auto____1 = (function (state_22036){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22036);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22042){if((e22042 instanceof Object))
{var ex__5510__auto__ = e22042;var statearr_22043_22045 = state_22036;(statearr_22043_22045[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22036);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e22042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__22046 = state_22036;
state_22036 = G__22046;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22036){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22044 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22066){var state_val_22067 = (state_22066[1]);if((state_val_22067 === 2))
{var inst_22063 = (state_22066[2]);var inst_22064 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$332,inst_22063], 0));var state_22066__$1 = state_22066;return cljs.core.async.impl.ioc_helpers.return_chan(state_22066__$1,inst_22064);
} else
{if((state_val_22067 === 1))
{var inst_22061 = clustermap.api.portfolio_company_site_stats();var state_22066__$1 = state_22066;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22066__$1,2,inst_22061);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22071 = [null,null,null,null,null,null,null];(statearr_22071[0] = state_machine__5507__auto__);
(statearr_22071[1] = 1);
return statearr_22071;
});
var state_machine__5507__auto____1 = (function (state_22066){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22066);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22072){if((e22072 instanceof Object))
{var ex__5510__auto__ = e22072;var statearr_22073_22075 = state_22066;(statearr_22073_22075[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22066);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e22072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__22076 = state_22066;
state_22066 = G__22076;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22066){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22074 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$410,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__22077,type){var vec__22079 = p__22077;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079,0,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079,1,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079,2,null);var selection_portfolio_company_sites_by_company = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079,3,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,type,cljs.core.constant$keyword$242,selection], null),cljs.core.constant$keyword$331,selection_portfolio_company_site_stats,cljs.core.constant$keyword$393,selection_portfolio_company_sites,cljs.core.constant$keyword$394,selection_portfolio_company_sites_by_company,cljs.core.constant$keyword$382,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$440,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__22080){var vec__22085 = p__22080;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22085,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22085,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$392,selector], 0));
var pred__22086 = cljs.core._EQ_;var expr__22087 = type;if(cljs.core.truth_((pred__22086.cljs$core$IFn$_invoke$arity$2 ? pred__22086.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,expr__22087) : pred__22086.call(null,cljs.core.constant$keyword$310,expr__22087))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22086.cljs$core$IFn$_invoke$arity$2 ? pred__22086.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$311,expr__22087) : pred__22086.call(null,cljs.core.constant$keyword$311,expr__22087))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22086.cljs$core$IFn$_invoke$arity$2 ? pred__22086.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$312,expr__22087) : pred__22086.call(null,cljs.core.constant$keyword$312,expr__22087))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$396.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$396,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__22090 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22090,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22090,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22090,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22090,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$396,view,cljs.core.constant$keyword$277,type,cljs.core.constant$keyword$273,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__22091){var vec__22094 = p__22091;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22094,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22094,1,null);var map__22095 = clustermap.app.parse_route();var map__22095__$1 = ((cljs.core.seq_QMARK_(map__22095))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22095):map__22095);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22095__$1,cljs.core.constant$keyword$396);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__22097 = clustermap.app.parse_route();var map__22097__$1 = ((cljs.core.seq_QMARK_(map__22097))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22097):map__22097);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22097__$1,cljs.core.constant$keyword$273);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22097__$1,cljs.core.constant$keyword$277);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$411,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$293,clustermap.app.set_selection_route,cljs.core.constant$keyword$449,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$315,clustermap.app.set_view_route,cljs.core.constant$keyword$450,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9263__auto__){var map__22101 = params__9263__auto__;var map__22101__$1 = ((cljs.core.seq_QMARK_(map__22101))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22101):map__22101);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$449,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9263__auto__){var map__22102 = params__9263__auto__;var map__22102__$1 = ((cljs.core.seq_QMARK_(map__22102))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22102):map__22102);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22102__$1,cljs.core.constant$keyword$396);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$450,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$449,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9263__auto__){var map__22103 = params__9263__auto__;var map__22103__$1 = ((cljs.core.seq_QMARK_(map__22103))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22103):map__22103);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103__$1,cljs.core.constant$keyword$273);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103__$1,cljs.core.constant$keyword$277);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103__$1,cljs.core.constant$keyword$396);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$450,view], null));
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
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22150){var state_val_22151 = (state_22150[1]);if((state_val_22151 === 7))
{var inst_22139 = (state_22150[2]);var inst_22140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22139,0,null);var inst_22141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22139,1,null);var inst_22142 = clustermap.app.handle_event(inst_22140,inst_22141);var state_22150__$1 = (function (){var statearr_22152 = state_22150;(statearr_22152[7] = inst_22142);
return statearr_22152;
})();var statearr_22153_22166 = state_22150__$1;(statearr_22153_22166[2] = null);
(statearr_22153_22166[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22151 === 6))
{var inst_22146 = (state_22150[2]);var state_22150__$1 = state_22150;var statearr_22154_22167 = state_22150__$1;(statearr_22154_22167[2] = inst_22146);
(statearr_22154_22167[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22151 === 5))
{var state_22150__$1 = state_22150;var statearr_22155_22168 = state_22150__$1;(statearr_22155_22168[2] = null);
(statearr_22155_22168[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22151 === 4))
{var state_22150__$1 = state_22150;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22150__$1,7,comm);
} else
{if((state_val_22151 === 3))
{var inst_22148 = (state_22150[2]);var state_22150__$1 = state_22150;return cljs.core.async.impl.ioc_helpers.return_chan(state_22150__$1,inst_22148);
} else
{if((state_val_22151 === 2))
{var state_22150__$1 = state_22150;if(true)
{var statearr_22156_22169 = state_22150__$1;(statearr_22156_22169[1] = 4);
} else
{var statearr_22157_22170 = state_22150__$1;(statearr_22157_22170[1] = 5);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_22151 === 1))
{var state_22150__$1 = state_22150;var statearr_22158_22171 = state_22150__$1;(statearr_22158_22171[2] = null);
(statearr_22158_22171[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_22162 = [null,null,null,null,null,null,null,null];(statearr_22162[0] = state_machine__5507__auto__);
(statearr_22162[1] = 1);
return statearr_22162;
});
var state_machine__5507__auto____1 = (function (state_22150){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22150);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22163){if((e22163 instanceof Object))
{var ex__5510__auto__ = e22163;var statearr_22164_22172 = state_22150;(statearr_22164_22172[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22150);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e22163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__22173 = state_22150;
state_22150 = G__22173;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22150){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22165 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
