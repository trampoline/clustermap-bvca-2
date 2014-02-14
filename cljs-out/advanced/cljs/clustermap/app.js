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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$377,cljs.core.constant$keyword$309,cljs.core.constant$keyword$363,cljs.core.constant$keyword$302,cljs.core.constant$keyword$410,cljs.core.constant$keyword$373,cljs.core.constant$keyword$297,cljs.core.constant$keyword$375,cljs.core.constant$keyword$409,cljs.core.constant$keyword$374,cljs.core.constant$keyword$387,cljs.core.constant$keyword$310,cljs.core.constant$keyword$411,cljs.core.constant$keyword$416],[cljs.core.constant$keyword$413,null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21756){var vec__21757 = p__21756;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21757,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21757,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21758){var map__21760 = p__21758;var map__21760__$1 = ((cljs.core.seq_QMARK_(map__21760))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21760):map__21760);var path_values = map__21760__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21758 = null;if (arguments.length > 0) {
  p__21758 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21758);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21761){
var p__21758 = cljs.core.seq(arglist__21761);
return set_state__delegate(p__21758);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21781){var state_val_21782 = (state_21781[1]);if((state_val_21782 === 2))
{var inst_21778 = (state_21781[2]);var inst_21779 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$410,inst_21778], 0));var state_21781__$1 = state_21781;return cljs.core.async.impl.ioc_helpers.return_chan(state_21781__$1,inst_21779);
} else
{if((state_val_21782 === 1))
{var inst_21776 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$246,true], 0));var state_21781__$1 = state_21781;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21781__$1,2,inst_21776);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21786 = [null,null,null,null,null,null,null];(statearr_21786[0] = state_machine__5507__auto__);
(statearr_21786[1] = 1);
return statearr_21786;
});
var state_machine__5507__auto____1 = (function (state_21781){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21781);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21787){if((e21787 instanceof Object))
{var ex__5510__auto__ = e21787;var statearr_21788_21790 = state_21781;(statearr_21788_21790[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21781);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e21787;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__21791 = state_21781;
state_21781 = G__21791;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21781){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21789 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21789;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21811){var state_val_21812 = (state_21811[1]);if((state_val_21812 === 2))
{var inst_21808 = (state_21811[2]);var inst_21809 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$310,inst_21808], 0));var state_21811__$1 = state_21811;return cljs.core.async.impl.ioc_helpers.return_chan(state_21811__$1,inst_21809);
} else
{if((state_val_21812 === 1))
{var inst_21806 = clustermap.api.portfolio_company_site_stats();var state_21811__$1 = state_21811;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21811__$1,2,inst_21806);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21816 = [null,null,null,null,null,null,null];(statearr_21816[0] = state_machine__5507__auto__);
(statearr_21816[1] = 1);
return statearr_21816;
});
var state_machine__5507__auto____1 = (function (state_21811){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21811);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21817){if((e21817 instanceof Object))
{var ex__5510__auto__ = e21817;var statearr_21818_21820 = state_21811;(statearr_21818_21820[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21811);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e21817;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__21821 = state_21811;
state_21811 = G__21821;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21811){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21819 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$387,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21822,type){var vec__21824 = p__21822;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21824,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21824,1,null);var selection_portfolio_companies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21824,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21824,3,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21824,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21824,5,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21824,6,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$259,type,cljs.core.constant$keyword$226,selection], null),cljs.core.constant$keyword$416,selection_portfolio_company_stats,cljs.core.constant$keyword$374,selection_portfolio_companies,cljs.core.constant$keyword$309,selection_portfolio_company_site_stats,cljs.core.constant$keyword$375,selection_portfolio_company_sites,cljs.core.constant$keyword$363,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$409,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__21825){var vec__21830 = p__21825;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21830,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21830,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$373,selector], 0));
var pred__21831 = cljs.core._EQ_;var expr__21832 = type;if(cljs.core.truth_((pred__21831.cljs$core$IFn$_invoke$arity$2 ? pred__21831.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$292,expr__21832) : pred__21831.call(null,cljs.core.constant$keyword$292,expr__21832))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21831.cljs$core$IFn$_invoke$arity$2 ? pred__21831.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$293,expr__21832) : pred__21831.call(null,cljs.core.constant$keyword$293,expr__21832))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21831.cljs$core$IFn$_invoke$arity$2 ? pred__21831.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$294,expr__21832) : pred__21831.call(null,cljs.core.constant$keyword$294,expr__21832))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null,clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$377.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.nav.change_view(cljs.core.name(view__$1));
return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$377,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__21835 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21835,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21835,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21835,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21835,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$377,view,cljs.core.constant$keyword$259,type,cljs.core.constant$keyword$255,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__21836){var vec__21839 = p__21836;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21839,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21839,1,null);var map__21840 = clustermap.app.parse_route();var map__21840__$1 = ((cljs.core.seq_QMARK_(map__21840))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21840):map__21840);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21840__$1,cljs.core.constant$keyword$377);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__21842 = clustermap.app.parse_route();var map__21842__$1 = ((cljs.core.seq_QMARK_(map__21842))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21842):map__21842);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21842__$1,cljs.core.constant$keyword$255);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21842__$1,cljs.core.constant$keyword$259);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$385,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$275,clustermap.app.set_selection_route,cljs.core.constant$keyword$417,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$296,clustermap.app.set_view_route,cljs.core.constant$keyword$418,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__21846 = params__9259__auto__;var map__21846__$1 = ((cljs.core.seq_QMARK_(map__21846))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21846):map__21846);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$417,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__21847 = params__9259__auto__;var map__21847__$1 = ((cljs.core.seq_QMARK_(map__21847))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21847):map__21847);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21847__$1,cljs.core.constant$keyword$377);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$418,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$417,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__21848 = params__9259__auto__;var map__21848__$1 = ((cljs.core.seq_QMARK_(map__21848))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21848):map__21848);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21848__$1,cljs.core.constant$keyword$255);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21848__$1,cljs.core.constant$keyword$259);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21848__$1,cljs.core.constant$keyword$377);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$418,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$417,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$295,comm,cljs.core.constant$keyword$298,path_fn,cljs.core.constant$keyword$299,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_portfolio_company_site_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21895){var state_val_21896 = (state_21895[1]);if((state_val_21896 === 7))
{var inst_21884 = (state_21895[2]);var inst_21885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21884,0,null);var inst_21886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21884,1,null);var inst_21887 = clustermap.app.handle_event(inst_21885,inst_21886);var state_21895__$1 = (function (){var statearr_21897 = state_21895;(statearr_21897[7] = inst_21887);
return statearr_21897;
})();var statearr_21898_21911 = state_21895__$1;(statearr_21898_21911[2] = null);
(statearr_21898_21911[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_21896 === 6))
{var inst_21891 = (state_21895[2]);var state_21895__$1 = state_21895;var statearr_21899_21912 = state_21895__$1;(statearr_21899_21912[2] = inst_21891);
(statearr_21899_21912[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_21896 === 5))
{var state_21895__$1 = state_21895;var statearr_21900_21913 = state_21895__$1;(statearr_21900_21913[2] = null);
(statearr_21900_21913[1] = 6);
return cljs.core.constant$keyword$232;
} else
{if((state_val_21896 === 4))
{var state_21895__$1 = state_21895;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21895__$1,7,comm);
} else
{if((state_val_21896 === 3))
{var inst_21893 = (state_21895[2]);var state_21895__$1 = state_21895;return cljs.core.async.impl.ioc_helpers.return_chan(state_21895__$1,inst_21893);
} else
{if((state_val_21896 === 2))
{var state_21895__$1 = state_21895;if(true)
{var statearr_21901_21914 = state_21895__$1;(statearr_21901_21914[1] = 4);
} else
{var statearr_21902_21915 = state_21895__$1;(statearr_21902_21915[1] = 5);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_21896 === 1))
{var state_21895__$1 = state_21895;var statearr_21903_21916 = state_21895__$1;(statearr_21903_21916[2] = null);
(statearr_21903_21916[1] = 2);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_21907 = [null,null,null,null,null,null,null,null];(statearr_21907[0] = state_machine__5507__auto__);
(statearr_21907[1] = 1);
return statearr_21907;
});
var state_machine__5507__auto____1 = (function (state_21895){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21895);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21908){if((e21908 instanceof Object))
{var ex__5510__auto__ = e21908;var statearr_21909_21917 = state_21895;(statearr_21909_21917[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21895);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e21908;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__21918 = state_21895;
state_21895 = G__21918;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21895){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21910 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
