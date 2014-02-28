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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$413,cljs.core.constant$keyword$365,cljs.core.constant$keyword$455,cljs.core.constant$keyword$345,cljs.core.constant$keyword$410,cljs.core.constant$keyword$412,cljs.core.constant$keyword$328,cljs.core.constant$keyword$454,cljs.core.constant$keyword$456,cljs.core.constant$keyword$400,cljs.core.constant$keyword$411,cljs.core.constant$keyword$346,cljs.core.constant$keyword$424,cljs.core.constant$keyword$463,cljs.core.constant$keyword$457],[cljs.core.constant$keyword$460,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21989){var vec__21990 = p__21989;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21990,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21990,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21991){var map__21993 = p__21991;var map__21993__$1 = ((cljs.core.seq_QMARK_(map__21993))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21993):map__21993);var path_values = map__21993__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21991 = null;if (arguments.length > 0) {
  p__21991 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21991);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21994){
var p__21991 = cljs.core.seq(arglist__21994);
return set_state__delegate(p__21991);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22016){var state_val_22017 = (state_22016[1]);if((state_val_22017 === 2))
{var inst_22012 = (state_22016[2]);var inst_22013 = clustermap.rtree.rtree_index(inst_22012);var inst_22014 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$455,inst_22012,cljs.core.constant$keyword$456,inst_22013], 0));var state_22016__$1 = state_22016;return cljs.core.async.impl.ioc_helpers.return_chan(state_22016__$1,inst_22014);
} else
{if((state_val_22017 === 1))
{var inst_22010 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$269,true], 0));var state_22016__$1 = state_22016;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22016__$1,2,inst_22010);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22021 = [null,null,null,null,null,null,null];(statearr_22021[0] = state_machine__5507__auto__);
(statearr_22021[1] = 1);
return statearr_22021;
});
var state_machine__5507__auto____1 = (function (state_22016){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22016);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22022){if((e22022 instanceof Object))
{var ex__5510__auto__ = e22022;var statearr_22023_22025 = state_22016;(statearr_22023_22025[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22016);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e22022;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__22026 = state_22016;
state_22016 = G__22026;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22016){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22024 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22046){var state_val_22047 = (state_22046[1]);if((state_val_22047 === 2))
{var inst_22043 = (state_22046[2]);var inst_22044 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$346,inst_22043], 0));var state_22046__$1 = state_22046;return cljs.core.async.impl.ioc_helpers.return_chan(state_22046__$1,inst_22044);
} else
{if((state_val_22047 === 1))
{var inst_22041 = clustermap.api.investment_stats();var state_22046__$1 = state_22046;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22046__$1,2,inst_22041);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22051 = [null,null,null,null,null,null,null];(statearr_22051[0] = state_machine__5507__auto__);
(statearr_22051[1] = 1);
return statearr_22051;
});
var state_machine__5507__auto____1 = (function (state_22046){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22046);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22052){if((e22052 instanceof Object))
{var ex__5510__auto__ = e22052;var statearr_22053_22055 = state_22046;(statearr_22053_22055[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22046);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e22052;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__22056 = state_22046;
state_22046 = G__22056;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22046){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22054 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22054;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$424,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__22057,type){var vec__22059 = p__22057;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22059,0,null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22059,1,null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22059,2,null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22059,3,null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22059,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22059,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$286,type,cljs.core.constant$keyword$249,selection], null),cljs.core.constant$keyword$345,selection_investment_stats,cljs.core.constant$keyword$400,selection_investment_account_timelines,cljs.core.constant$keyword$412,selection_investment_aggs,cljs.core.constant$keyword$411,selection_investments,cljs.core.constant$keyword$454,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__22060){var vec__22065 = p__22060;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22065,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22065,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$410.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$410,selector], 0));
var pred__22066 = cljs.core._EQ_;var expr__22067 = type;if(cljs.core.truth_((pred__22066.cljs$core$IFn$_invoke$arity$2 ? pred__22066.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$319,expr__22067) : pred__22066.call(null,cljs.core.constant$keyword$319,expr__22067))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22066.cljs$core$IFn$_invoke$arity$2 ? pred__22066.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$320,expr__22067) : pred__22066.call(null,cljs.core.constant$keyword$320,expr__22067))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22066.cljs$core$IFn$_invoke$arity$2 ? pred__22066.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$321,expr__22067) : pred__22066.call(null,cljs.core.constant$keyword$321,expr__22067))))
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
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$413.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$413,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__22070 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22070,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22070,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22070,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22070,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$413,view,cljs.core.constant$keyword$286,type,cljs.core.constant$keyword$282,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__22071){var vec__22074 = p__22071;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22074,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22074,1,null);var map__22075 = clustermap.app.parse_route();var map__22075__$1 = ((cljs.core.seq_QMARK_(map__22075))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22075):map__22075);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22075__$1,cljs.core.constant$keyword$413);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__22077 = clustermap.app.parse_route();var map__22077__$1 = ((cljs.core.seq_QMARK_(map__22077))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22077):map__22077);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22077__$1,cljs.core.constant$keyword$282);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22077__$1,cljs.core.constant$keyword$286);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$425,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$302,clustermap.app.set_selection_route,cljs.core.constant$keyword$464,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$324,clustermap.app.set_view_route,cljs.core.constant$keyword$465,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__22081 = params__9259__auto__;var map__22081__$1 = ((cljs.core.seq_QMARK_(map__22081))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22081):map__22081);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$464,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__22082 = params__9259__auto__;var map__22082__$1 = ((cljs.core.seq_QMARK_(map__22082))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22082):map__22082);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22082__$1,cljs.core.constant$keyword$413);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$465,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$464,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__22083 = params__9259__auto__;var map__22083__$1 = ((cljs.core.seq_QMARK_(map__22083))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22083):map__22083);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22083__$1,cljs.core.constant$keyword$282);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22083__$1,cljs.core.constant$keyword$286);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22083__$1,cljs.core.constant$keyword$413);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$465,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$464,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$322,comm,cljs.core.constant$keyword$329,path_fn,cljs.core.constant$keyword$330,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_investment_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22130){var state_val_22131 = (state_22130[1]);if((state_val_22131 === 7))
{var inst_22119 = (state_22130[2]);var inst_22120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22119,0,null);var inst_22121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22119,1,null);var inst_22122 = clustermap.app.handle_event(inst_22120,inst_22121);var state_22130__$1 = (function (){var statearr_22132 = state_22130;(statearr_22132[7] = inst_22122);
return statearr_22132;
})();var statearr_22133_22146 = state_22130__$1;(statearr_22133_22146[2] = null);
(statearr_22133_22146[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_22131 === 6))
{var inst_22126 = (state_22130[2]);var state_22130__$1 = state_22130;var statearr_22134_22147 = state_22130__$1;(statearr_22134_22147[2] = inst_22126);
(statearr_22134_22147[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_22131 === 5))
{var state_22130__$1 = state_22130;var statearr_22135_22148 = state_22130__$1;(statearr_22135_22148[2] = null);
(statearr_22135_22148[1] = 6);
return cljs.core.constant$keyword$255;
} else
{if((state_val_22131 === 4))
{var state_22130__$1 = state_22130;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22130__$1,7,comm);
} else
{if((state_val_22131 === 3))
{var inst_22128 = (state_22130[2]);var state_22130__$1 = state_22130;return cljs.core.async.impl.ioc_helpers.return_chan(state_22130__$1,inst_22128);
} else
{if((state_val_22131 === 2))
{var state_22130__$1 = state_22130;if(true)
{var statearr_22136_22149 = state_22130__$1;(statearr_22136_22149[1] = 4);
} else
{var statearr_22137_22150 = state_22130__$1;(statearr_22137_22150[1] = 5);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_22131 === 1))
{var state_22130__$1 = state_22130;var statearr_22138_22151 = state_22130__$1;(statearr_22138_22151[2] = null);
(statearr_22138_22151[1] = 2);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_22142 = [null,null,null,null,null,null,null,null];(statearr_22142[0] = state_machine__5507__auto__);
(statearr_22142[1] = 1);
return statearr_22142;
});
var state_machine__5507__auto____1 = (function (state_22130){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22130);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22143){if((e22143 instanceof Object))
{var ex__5510__auto__ = e22143;var statearr_22144_22152 = state_22130;(statearr_22144_22152[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22130);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e22143;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__22153 = state_22130;
state_22130 = G__22153;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22130){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22145 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22145;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
