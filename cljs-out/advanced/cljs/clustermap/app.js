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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$383,cljs.core.constant$keyword$320,cljs.core.constant$keyword$370,cljs.core.constant$keyword$313,cljs.core.constant$keyword$425,cljs.core.constant$keyword$380,cljs.core.constant$keyword$308,cljs.core.constant$keyword$381,cljs.core.constant$keyword$424,cljs.core.constant$keyword$426,cljs.core.constant$keyword$396,cljs.core.constant$keyword$321,cljs.core.constant$keyword$427],[cljs.core.constant$keyword$430,null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21968){var vec__21969 = p__21968;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21969,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21969,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21970){var map__21972 = p__21970;var map__21972__$1 = ((cljs.core.seq_QMARK_(map__21972))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21972):map__21972);var path_values = map__21972__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21970 = null;if (arguments.length > 0) {
  p__21970 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21970);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21973){
var p__21970 = cljs.core.seq(arglist__21973);
return set_state__delegate(p__21970);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21995){var state_val_21996 = (state_21995[1]);if((state_val_21996 === 2))
{var inst_21991 = (state_21995[2]);var inst_21992 = clustermap.rtree.rtree_index(inst_21991);var inst_21993 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$425,inst_21991,cljs.core.constant$keyword$426,inst_21992], 0));var state_21995__$1 = state_21995;return cljs.core.async.impl.ioc_helpers.return_chan(state_21995__$1,inst_21993);
} else
{if((state_val_21996 === 1))
{var inst_21989 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$254,true], 0));var state_21995__$1 = state_21995;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21995__$1,2,inst_21989);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22000 = [null,null,null,null,null,null,null];(statearr_22000[0] = state_machine__5507__auto__);
(statearr_22000[1] = 1);
return statearr_22000;
});
var state_machine__5507__auto____1 = (function (state_21995){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21995);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22001){if((e22001 instanceof Object))
{var ex__5510__auto__ = e22001;var statearr_22002_22004 = state_21995;(statearr_22002_22004[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21995);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e22001;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__22005 = state_21995;
state_21995 = G__22005;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21995){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22003 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22025){var state_val_22026 = (state_22025[1]);if((state_val_22026 === 2))
{var inst_22022 = (state_22025[2]);var inst_22023 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$321,inst_22022], 0));var state_22025__$1 = state_22025;return cljs.core.async.impl.ioc_helpers.return_chan(state_22025__$1,inst_22023);
} else
{if((state_val_22026 === 1))
{var inst_22020 = clustermap.api.portfolio_company_site_stats();var state_22025__$1 = state_22025;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22025__$1,2,inst_22020);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22030 = [null,null,null,null,null,null,null];(statearr_22030[0] = state_machine__5507__auto__);
(statearr_22030[1] = 1);
return statearr_22030;
});
var state_machine__5507__auto____1 = (function (state_22025){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22025);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22031){if((e22031 instanceof Object))
{var ex__5510__auto__ = e22031;var statearr_22032_22034 = state_22025;(statearr_22032_22034[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22025);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e22031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__22035 = state_22025;
state_22025 = G__22035;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22025){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22033 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$396,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__22036,type){var vec__22038 = p__22036;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22038,0,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22038,1,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22038,2,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22038,3,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22038,4,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$308,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,type,cljs.core.constant$keyword$234,selection], null),cljs.core.constant$keyword$320,selection_portfolio_company_site_stats,cljs.core.constant$keyword$381,selection_portfolio_company_sites,cljs.core.constant$keyword$370,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$424,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__22039){var vec__22044 = p__22039;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22044,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22044,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$380.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$380,selector], 0));
var pred__22045 = cljs.core._EQ_;var expr__22046 = type;if(cljs.core.truth_((pred__22045.cljs$core$IFn$_invoke$arity$2 ? pred__22045.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$302,expr__22046) : pred__22045.call(null,cljs.core.constant$keyword$302,expr__22046))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22045.cljs$core$IFn$_invoke$arity$2 ? pred__22045.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$303,expr__22046) : pred__22045.call(null,cljs.core.constant$keyword$303,expr__22046))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22045.cljs$core$IFn$_invoke$arity$2 ? pred__22045.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$304,expr__22046) : pred__22045.call(null,cljs.core.constant$keyword$304,expr__22046))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
} else
{return null;
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$383.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.nav.change_view(cljs.core.name(view__$1));
return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$383,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__22049 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22049,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22049,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22049,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22049,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$383,view,cljs.core.constant$keyword$269,type,cljs.core.constant$keyword$265,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__22050){var vec__22053 = p__22050;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22053,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22053,1,null);var map__22054 = clustermap.app.parse_route();var map__22054__$1 = ((cljs.core.seq_QMARK_(map__22054))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22054):map__22054);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22054__$1,cljs.core.constant$keyword$383);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__22056 = clustermap.app.parse_route();var map__22056__$1 = ((cljs.core.seq_QMARK_(map__22056))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22056):map__22056);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22056__$1,cljs.core.constant$keyword$265);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22056__$1,cljs.core.constant$keyword$269);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$397,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$285,clustermap.app.set_selection_route,cljs.core.constant$keyword$433,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$307,clustermap.app.set_view_route,cljs.core.constant$keyword$434,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__22060 = params__9259__auto__;var map__22060__$1 = ((cljs.core.seq_QMARK_(map__22060))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22060):map__22060);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$433,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__22061 = params__9259__auto__;var map__22061__$1 = ((cljs.core.seq_QMARK_(map__22061))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22061):map__22061);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22061__$1,cljs.core.constant$keyword$383);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$434,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$433,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__22062 = params__9259__auto__;var map__22062__$1 = ((cljs.core.seq_QMARK_(map__22062))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22062):map__22062);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22062__$1,cljs.core.constant$keyword$265);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22062__$1,cljs.core.constant$keyword$269);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22062__$1,cljs.core.constant$keyword$383);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$434,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$433,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$305,comm,cljs.core.constant$keyword$309,path_fn,cljs.core.constant$keyword$310,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.app.load_all_portfolio_company_site_stats();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22109){var state_val_22110 = (state_22109[1]);if((state_val_22110 === 7))
{var inst_22098 = (state_22109[2]);var inst_22099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22098,0,null);var inst_22100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22098,1,null);var inst_22101 = clustermap.app.handle_event(inst_22099,inst_22100);var state_22109__$1 = (function (){var statearr_22111 = state_22109;(statearr_22111[7] = inst_22101);
return statearr_22111;
})();var statearr_22112_22125 = state_22109__$1;(statearr_22112_22125[2] = null);
(statearr_22112_22125[1] = 2);
return cljs.core.constant$keyword$240;
} else
{if((state_val_22110 === 6))
{var inst_22105 = (state_22109[2]);var state_22109__$1 = state_22109;var statearr_22113_22126 = state_22109__$1;(statearr_22113_22126[2] = inst_22105);
(statearr_22113_22126[1] = 3);
return cljs.core.constant$keyword$240;
} else
{if((state_val_22110 === 5))
{var state_22109__$1 = state_22109;var statearr_22114_22127 = state_22109__$1;(statearr_22114_22127[2] = null);
(statearr_22114_22127[1] = 6);
return cljs.core.constant$keyword$240;
} else
{if((state_val_22110 === 4))
{var state_22109__$1 = state_22109;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22109__$1,7,comm);
} else
{if((state_val_22110 === 3))
{var inst_22107 = (state_22109[2]);var state_22109__$1 = state_22109;return cljs.core.async.impl.ioc_helpers.return_chan(state_22109__$1,inst_22107);
} else
{if((state_val_22110 === 2))
{var state_22109__$1 = state_22109;if(true)
{var statearr_22115_22128 = state_22109__$1;(statearr_22115_22128[1] = 4);
} else
{var statearr_22116_22129 = state_22109__$1;(statearr_22116_22129[1] = 5);
}
return cljs.core.constant$keyword$240;
} else
{if((state_val_22110 === 1))
{var state_22109__$1 = state_22109;var statearr_22117_22130 = state_22109__$1;(statearr_22117_22130[2] = null);
(statearr_22117_22130[1] = 2);
return cljs.core.constant$keyword$240;
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
var state_machine__5507__auto____0 = (function (){var statearr_22121 = [null,null,null,null,null,null,null,null];(statearr_22121[0] = state_machine__5507__auto__);
(statearr_22121[1] = 1);
return statearr_22121;
});
var state_machine__5507__auto____1 = (function (state_22109){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22109);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22122){if((e22122 instanceof Object))
{var ex__5510__auto__ = e22122;var statearr_22123_22131 = state_22109;(statearr_22123_22131[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22109);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e22122;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__22132 = state_22109;
state_22109 = G__22132;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22109){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22124 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
