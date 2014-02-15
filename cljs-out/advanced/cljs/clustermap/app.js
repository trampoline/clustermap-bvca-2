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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$378,cljs.core.constant$keyword$312,cljs.core.constant$keyword$365,cljs.core.constant$keyword$305,cljs.core.constant$keyword$411,cljs.core.constant$keyword$375,cljs.core.constant$keyword$300,cljs.core.constant$keyword$376,cljs.core.constant$keyword$410,cljs.core.constant$keyword$417,cljs.core.constant$keyword$388,cljs.core.constant$keyword$313,cljs.core.constant$keyword$412,cljs.core.constant$keyword$418],[cljs.core.constant$keyword$414,null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21746){var vec__21747 = p__21746;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21747,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21747,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21748){var map__21750 = p__21748;var map__21750__$1 = ((cljs.core.seq_QMARK_(map__21750))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21750):map__21750);var path_values = map__21750__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21748 = null;if (arguments.length > 0) {
  p__21748 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21748);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21751){
var p__21748 = cljs.core.seq(arglist__21751);
return set_state__delegate(p__21748);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21771){var state_val_21772 = (state_21771[1]);if((state_val_21772 === 2))
{var inst_21768 = (state_21771[2]);var inst_21769 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$411,inst_21768], 0));var state_21771__$1 = state_21771;return cljs.core.async.impl.ioc_helpers.return_chan(state_21771__$1,inst_21769);
} else
{if((state_val_21772 === 1))
{var inst_21766 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$247,true], 0));var state_21771__$1 = state_21771;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21771__$1,2,inst_21766);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21776 = [null,null,null,null,null,null,null];(statearr_21776[0] = state_machine__5507__auto__);
(statearr_21776[1] = 1);
return statearr_21776;
});
var state_machine__5507__auto____1 = (function (state_21771){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21771);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21777){if((e21777 instanceof Object))
{var ex__5510__auto__ = e21777;var statearr_21778_21780 = state_21771;(statearr_21778_21780[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21771);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e21777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__21781 = state_21771;
state_21771 = G__21781;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21771){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21779 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21801){var state_val_21802 = (state_21801[1]);if((state_val_21802 === 2))
{var inst_21798 = (state_21801[2]);var inst_21799 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$313,inst_21798], 0));var state_21801__$1 = state_21801;return cljs.core.async.impl.ioc_helpers.return_chan(state_21801__$1,inst_21799);
} else
{if((state_val_21802 === 1))
{var inst_21796 = clustermap.api.portfolio_company_site_stats();var state_21801__$1 = state_21801;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21801__$1,2,inst_21796);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21806 = [null,null,null,null,null,null,null];(statearr_21806[0] = state_machine__5507__auto__);
(statearr_21806[1] = 1);
return statearr_21806;
});
var state_machine__5507__auto____1 = (function (state_21801){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21801);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21807){if((e21807 instanceof Object))
{var ex__5510__auto__ = e21807;var statearr_21808_21810 = state_21801;(statearr_21808_21810[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21801);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e21807;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__21811 = state_21801;
state_21801 = G__21811;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21801){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21809 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21809;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$388,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21812,type){var vec__21814 = p__21812;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21814,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21814,1,null);var selection_portfolio_companies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21814,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21814,3,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21814,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21814,5,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21814,6,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,type,cljs.core.constant$keyword$227,selection], null),cljs.core.constant$keyword$418,selection_portfolio_company_stats,cljs.core.constant$keyword$417,selection_portfolio_companies,cljs.core.constant$keyword$312,selection_portfolio_company_site_stats,cljs.core.constant$keyword$376,selection_portfolio_company_sites,cljs.core.constant$keyword$365,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$410,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__21815){var vec__21820 = p__21815;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21820,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21820,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$375,selector], 0));
var pred__21821 = cljs.core._EQ_;var expr__21822 = type;if(cljs.core.truth_((pred__21821.cljs$core$IFn$_invoke$arity$2 ? pred__21821.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$295,expr__21822) : pred__21821.call(null,cljs.core.constant$keyword$295,expr__21822))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21821.cljs$core$IFn$_invoke$arity$2 ? pred__21821.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$296,expr__21822) : pred__21821.call(null,cljs.core.constant$keyword$296,expr__21822))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21821.cljs$core$IFn$_invoke$arity$2 ? pred__21821.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,expr__21822) : pred__21821.call(null,cljs.core.constant$keyword$297,expr__21822))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$378.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.nav.change_view(cljs.core.name(view__$1));
return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$378,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__21825 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21825,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21825,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21825,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21825,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$378,view,cljs.core.constant$keyword$262,type,cljs.core.constant$keyword$258,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__21826){var vec__21829 = p__21826;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21829,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21829,1,null);var map__21830 = clustermap.app.parse_route();var map__21830__$1 = ((cljs.core.seq_QMARK_(map__21830))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21830):map__21830);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21830__$1,cljs.core.constant$keyword$378);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__21832 = clustermap.app.parse_route();var map__21832__$1 = ((cljs.core.seq_QMARK_(map__21832))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21832):map__21832);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21832__$1,cljs.core.constant$keyword$258);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21832__$1,cljs.core.constant$keyword$262);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$386,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$278,clustermap.app.set_selection_route,cljs.core.constant$keyword$419,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$299,clustermap.app.set_view_route,cljs.core.constant$keyword$420,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__21836 = params__9259__auto__;var map__21836__$1 = ((cljs.core.seq_QMARK_(map__21836))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21836):map__21836);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$419,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__21837 = params__9259__auto__;var map__21837__$1 = ((cljs.core.seq_QMARK_(map__21837))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21837):map__21837);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21837__$1,cljs.core.constant$keyword$378);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$420,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$419,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__21838 = params__9259__auto__;var map__21838__$1 = ((cljs.core.seq_QMARK_(map__21838))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21838):map__21838);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21838__$1,cljs.core.constant$keyword$258);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21838__$1,cljs.core.constant$keyword$262);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21838__$1,cljs.core.constant$keyword$378);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$420,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$419,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$298,comm,cljs.core.constant$keyword$301,path_fn,cljs.core.constant$keyword$302,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_portfolio_company_site_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21885){var state_val_21886 = (state_21885[1]);if((state_val_21886 === 7))
{var inst_21874 = (state_21885[2]);var inst_21875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21874,0,null);var inst_21876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21874,1,null);var inst_21877 = clustermap.app.handle_event(inst_21875,inst_21876);var state_21885__$1 = (function (){var statearr_21887 = state_21885;(statearr_21887[7] = inst_21877);
return statearr_21887;
})();var statearr_21888_21901 = state_21885__$1;(statearr_21888_21901[2] = null);
(statearr_21888_21901[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_21886 === 6))
{var inst_21881 = (state_21885[2]);var state_21885__$1 = state_21885;var statearr_21889_21902 = state_21885__$1;(statearr_21889_21902[2] = inst_21881);
(statearr_21889_21902[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_21886 === 5))
{var state_21885__$1 = state_21885;var statearr_21890_21903 = state_21885__$1;(statearr_21890_21903[2] = null);
(statearr_21890_21903[1] = 6);
return cljs.core.constant$keyword$233;
} else
{if((state_val_21886 === 4))
{var state_21885__$1 = state_21885;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21885__$1,7,comm);
} else
{if((state_val_21886 === 3))
{var inst_21883 = (state_21885[2]);var state_21885__$1 = state_21885;return cljs.core.async.impl.ioc_helpers.return_chan(state_21885__$1,inst_21883);
} else
{if((state_val_21886 === 2))
{var state_21885__$1 = state_21885;if(true)
{var statearr_21891_21904 = state_21885__$1;(statearr_21891_21904[1] = 4);
} else
{var statearr_21892_21905 = state_21885__$1;(statearr_21892_21905[1] = 5);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_21886 === 1))
{var state_21885__$1 = state_21885;var statearr_21893_21906 = state_21885__$1;(statearr_21893_21906[2] = null);
(statearr_21893_21906[1] = 2);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_21897 = [null,null,null,null,null,null,null,null];(statearr_21897[0] = state_machine__5507__auto__);
(statearr_21897[1] = 1);
return statearr_21897;
});
var state_machine__5507__auto____1 = (function (state_21885){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21885);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21898){if((e21898 instanceof Object))
{var ex__5510__auto__ = e21898;var statearr_21899_21907 = state_21885;(statearr_21899_21907[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21885);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e21898;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__21908 = state_21885;
state_21885 = G__21908;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21885){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21900 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
