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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21969){var vec__21970 = p__21969;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21970,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21970,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21971){var map__21973 = p__21971;var map__21973__$1 = ((cljs.core.seq_QMARK_(map__21973))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21973):map__21973);var path_values = map__21973__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21971 = null;if (arguments.length > 0) {
  p__21971 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21971);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21974){
var p__21971 = cljs.core.seq(arglist__21974);
return set_state__delegate(p__21971);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21996){var state_val_21997 = (state_21996[1]);if((state_val_21997 === 2))
{var inst_21992 = (state_21996[2]);var inst_21993 = clustermap.rtree.rtree_index(inst_21992);var inst_21994 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$441,inst_21992,cljs.core.constant$keyword$442,inst_21993], 0));var state_21996__$1 = state_21996;return cljs.core.async.impl.ioc_helpers.return_chan(state_21996__$1,inst_21994);
} else
{if((state_val_21997 === 1))
{var inst_21990 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$262,true], 0));var state_21996__$1 = state_21996;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21996__$1,2,inst_21990);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22001 = [null,null,null,null,null,null,null];(statearr_22001[0] = state_machine__5507__auto__);
(statearr_22001[1] = 1);
return statearr_22001;
});
var state_machine__5507__auto____1 = (function (state_21996){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21996);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22002){if((e22002 instanceof Object))
{var ex__5510__auto__ = e22002;var statearr_22003_22005 = state_21996;(statearr_22003_22005[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21996);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e22002;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__22006 = state_21996;
state_21996 = G__22006;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21996){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22004 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22004;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22026){var state_val_22027 = (state_22026[1]);if((state_val_22027 === 2))
{var inst_22023 = (state_22026[2]);var inst_22024 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$332,inst_22023], 0));var state_22026__$1 = state_22026;return cljs.core.async.impl.ioc_helpers.return_chan(state_22026__$1,inst_22024);
} else
{if((state_val_22027 === 1))
{var inst_22021 = clustermap.api.portfolio_company_site_stats();var state_22026__$1 = state_22026;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22026__$1,2,inst_22021);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22031 = [null,null,null,null,null,null,null];(statearr_22031[0] = state_machine__5507__auto__);
(statearr_22031[1] = 1);
return statearr_22031;
});
var state_machine__5507__auto____1 = (function (state_22026){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22026);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22032){if((e22032 instanceof Object))
{var ex__5510__auto__ = e22032;var statearr_22033_22035 = state_22026;(statearr_22033_22035[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22026);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e22032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__22036 = state_22026;
state_22026 = G__22036;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22026){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22034 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$410,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__22037,type){var vec__22039 = p__22037;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22039,0,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22039,1,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22039,2,null);var selection_portfolio_company_sites_by_company = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22039,3,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22039,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22039,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,type,cljs.core.constant$keyword$242,selection], null),cljs.core.constant$keyword$331,selection_portfolio_company_site_stats,cljs.core.constant$keyword$393,selection_portfolio_company_sites,cljs.core.constant$keyword$394,selection_portfolio_company_sites_by_company,cljs.core.constant$keyword$382,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$440,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__22040){var vec__22045 = p__22040;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22045,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22045,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$392,selector], 0));
var pred__22046 = cljs.core._EQ_;var expr__22047 = type;if(cljs.core.truth_((pred__22046.cljs$core$IFn$_invoke$arity$2 ? pred__22046.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,expr__22047) : pred__22046.call(null,cljs.core.constant$keyword$310,expr__22047))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22046.cljs$core$IFn$_invoke$arity$2 ? pred__22046.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$311,expr__22047) : pred__22046.call(null,cljs.core.constant$keyword$311,expr__22047))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22046.cljs$core$IFn$_invoke$arity$2 ? pred__22046.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$312,expr__22047) : pred__22046.call(null,cljs.core.constant$keyword$312,expr__22047))))
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__22050 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22050,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22050,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22050,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22050,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$396,view,cljs.core.constant$keyword$277,type,cljs.core.constant$keyword$273,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__22051){var vec__22054 = p__22051;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22054,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22054,1,null);var map__22055 = clustermap.app.parse_route();var map__22055__$1 = ((cljs.core.seq_QMARK_(map__22055))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22055):map__22055);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22055__$1,cljs.core.constant$keyword$396);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__22057 = clustermap.app.parse_route();var map__22057__$1 = ((cljs.core.seq_QMARK_(map__22057))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22057):map__22057);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22057__$1,cljs.core.constant$keyword$273);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22057__$1,cljs.core.constant$keyword$277);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$411,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$293,clustermap.app.set_selection_route,cljs.core.constant$keyword$449,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$315,clustermap.app.set_view_route,cljs.core.constant$keyword$450,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9243__auto__){var map__22061 = params__9243__auto__;var map__22061__$1 = ((cljs.core.seq_QMARK_(map__22061))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22061):map__22061);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$449,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9243__auto__){var map__22062 = params__9243__auto__;var map__22062__$1 = ((cljs.core.seq_QMARK_(map__22062))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22062):map__22062);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22062__$1,cljs.core.constant$keyword$396);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$450,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$449,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9243__auto__){var map__22063 = params__9243__auto__;var map__22063__$1 = ((cljs.core.seq_QMARK_(map__22063))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22063):map__22063);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22063__$1,cljs.core.constant$keyword$273);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22063__$1,cljs.core.constant$keyword$277);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22063__$1,cljs.core.constant$keyword$396);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$450,view], null));
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
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22110){var state_val_22111 = (state_22110[1]);if((state_val_22111 === 7))
{var inst_22099 = (state_22110[2]);var inst_22100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22099,0,null);var inst_22101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22099,1,null);var inst_22102 = clustermap.app.handle_event(inst_22100,inst_22101);var state_22110__$1 = (function (){var statearr_22112 = state_22110;(statearr_22112[7] = inst_22102);
return statearr_22112;
})();var statearr_22113_22126 = state_22110__$1;(statearr_22113_22126[2] = null);
(statearr_22113_22126[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22111 === 6))
{var inst_22106 = (state_22110[2]);var state_22110__$1 = state_22110;var statearr_22114_22127 = state_22110__$1;(statearr_22114_22127[2] = inst_22106);
(statearr_22114_22127[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22111 === 5))
{var state_22110__$1 = state_22110;var statearr_22115_22128 = state_22110__$1;(statearr_22115_22128[2] = null);
(statearr_22115_22128[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22111 === 4))
{var state_22110__$1 = state_22110;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22110__$1,7,comm);
} else
{if((state_val_22111 === 3))
{var inst_22108 = (state_22110[2]);var state_22110__$1 = state_22110;return cljs.core.async.impl.ioc_helpers.return_chan(state_22110__$1,inst_22108);
} else
{if((state_val_22111 === 2))
{var state_22110__$1 = state_22110;if(true)
{var statearr_22116_22129 = state_22110__$1;(statearr_22116_22129[1] = 4);
} else
{var statearr_22117_22130 = state_22110__$1;(statearr_22117_22130[1] = 5);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_22111 === 1))
{var state_22110__$1 = state_22110;var statearr_22118_22131 = state_22110__$1;(statearr_22118_22131[2] = null);
(statearr_22118_22131[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_22122 = [null,null,null,null,null,null,null,null];(statearr_22122[0] = state_machine__5507__auto__);
(statearr_22122[1] = 1);
return statearr_22122;
});
var state_machine__5507__auto____1 = (function (state_22110){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22110);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22123){if((e22123 instanceof Object))
{var ex__5510__auto__ = e22123;var statearr_22124_22132 = state_22110;(statearr_22124_22132[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22110);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e22123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__22133 = state_22110;
state_22110 = G__22133;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22110){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22125 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
