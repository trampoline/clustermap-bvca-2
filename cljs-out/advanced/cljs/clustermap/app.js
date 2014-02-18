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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$385,cljs.core.constant$keyword$321,cljs.core.constant$keyword$372,cljs.core.constant$keyword$314,cljs.core.constant$keyword$426,cljs.core.constant$keyword$382,cljs.core.constant$keyword$309,cljs.core.constant$keyword$383,cljs.core.constant$keyword$425,cljs.core.constant$keyword$427,cljs.core.constant$keyword$433,cljs.core.constant$keyword$398,cljs.core.constant$keyword$322,cljs.core.constant$keyword$428,cljs.core.constant$keyword$434],[cljs.core.constant$keyword$430,null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21946){var vec__21947 = p__21946;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21947,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21947,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21948){var map__21950 = p__21948;var map__21950__$1 = ((cljs.core.seq_QMARK_(map__21950))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21950):map__21950);var path_values = map__21950__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21948 = null;if (arguments.length > 0) {
  p__21948 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21948);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21951){
var p__21948 = cljs.core.seq(arglist__21951);
return set_state__delegate(p__21948);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21973){var state_val_21974 = (state_21973[1]);if((state_val_21974 === 2))
{var inst_21969 = (state_21973[2]);var inst_21970 = clustermap.rtree.rtree_index(inst_21969);var inst_21971 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$426,inst_21969,cljs.core.constant$keyword$427,inst_21970], 0));var state_21973__$1 = state_21973;return cljs.core.async.impl.ioc_helpers.return_chan(state_21973__$1,inst_21971);
} else
{if((state_val_21974 === 1))
{var inst_21967 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$255,true], 0));var state_21973__$1 = state_21973;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21973__$1,2,inst_21967);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21978 = [null,null,null,null,null,null,null];(statearr_21978[0] = state_machine__5507__auto__);
(statearr_21978[1] = 1);
return statearr_21978;
});
var state_machine__5507__auto____1 = (function (state_21973){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21973);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21979){if((e21979 instanceof Object))
{var ex__5510__auto__ = e21979;var statearr_21980_21982 = state_21973;(statearr_21980_21982[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21973);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e21979;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__21983 = state_21973;
state_21973 = G__21983;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21973){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21981 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21981;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_site_stats = (function load_all_portfolio_company_site_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22003){var state_val_22004 = (state_22003[1]);if((state_val_22004 === 2))
{var inst_22000 = (state_22003[2]);var inst_22001 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$322,inst_22000], 0));var state_22003__$1 = state_22003;return cljs.core.async.impl.ioc_helpers.return_chan(state_22003__$1,inst_22001);
} else
{if((state_val_22004 === 1))
{var inst_21998 = clustermap.api.portfolio_company_site_stats();var state_22003__$1 = state_22003;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22003__$1,2,inst_21998);
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
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$398,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__22014,type){var vec__22016 = p__22014;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,1,null);var selection_portfolio_companies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,3,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,5,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,6,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,type,cljs.core.constant$keyword$235,selection], null),cljs.core.constant$keyword$434,selection_portfolio_company_stats,cljs.core.constant$keyword$433,selection_portfolio_companies,cljs.core.constant$keyword$321,selection_portfolio_company_site_stats,cljs.core.constant$keyword$383,selection_portfolio_company_sites,cljs.core.constant$keyword$372,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$425,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__22017){var vec__22022 = p__22017;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22022,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22022,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$382,selector], 0));
var pred__22023 = cljs.core._EQ_;var expr__22024 = type;if(cljs.core.truth_((pred__22023.cljs$core$IFn$_invoke$arity$2 ? pred__22023.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$303,expr__22024) : pred__22023.call(null,cljs.core.constant$keyword$303,expr__22024))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22023.cljs$core$IFn$_invoke$arity$2 ? pred__22023.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$304,expr__22024) : pred__22023.call(null,cljs.core.constant$keyword$304,expr__22024))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22023.cljs$core$IFn$_invoke$arity$2 ? pred__22023.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$305,expr__22024) : pred__22023.call(null,cljs.core.constant$keyword$305,expr__22024))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.nav.change_view(cljs.core.name(view__$1));
return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$385,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__22027 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22027,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22027,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22027,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22027,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$385,view,cljs.core.constant$keyword$270,type,cljs.core.constant$keyword$266,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__22028){var vec__22031 = p__22028;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22031,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22031,1,null);var map__22032 = clustermap.app.parse_route();var map__22032__$1 = ((cljs.core.seq_QMARK_(map__22032))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22032):map__22032);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22032__$1,cljs.core.constant$keyword$385);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__22034 = clustermap.app.parse_route();var map__22034__$1 = ((cljs.core.seq_QMARK_(map__22034))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22034):map__22034);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22034__$1,cljs.core.constant$keyword$266);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22034__$1,cljs.core.constant$keyword$270);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$399,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$286,clustermap.app.set_selection_route,cljs.core.constant$keyword$435,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$308,clustermap.app.set_view_route,cljs.core.constant$keyword$436,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__22038 = params__9259__auto__;var map__22038__$1 = ((cljs.core.seq_QMARK_(map__22038))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22038):map__22038);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$435,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__22039 = params__9259__auto__;var map__22039__$1 = ((cljs.core.seq_QMARK_(map__22039))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22039):map__22039);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22039__$1,cljs.core.constant$keyword$385);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$436,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$435,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__22040 = params__9259__auto__;var map__22040__$1 = ((cljs.core.seq_QMARK_(map__22040))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22040):map__22040);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22040__$1,cljs.core.constant$keyword$266);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22040__$1,cljs.core.constant$keyword$270);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22040__$1,cljs.core.constant$keyword$385);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$436,view], null));
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
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22087){var state_val_22088 = (state_22087[1]);if((state_val_22088 === 7))
{var inst_22076 = (state_22087[2]);var inst_22077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22076,0,null);var inst_22078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22076,1,null);var inst_22079 = clustermap.app.handle_event(inst_22077,inst_22078);var state_22087__$1 = (function (){var statearr_22089 = state_22087;(statearr_22089[7] = inst_22079);
return statearr_22089;
})();var statearr_22090_22103 = state_22087__$1;(statearr_22090_22103[2] = null);
(statearr_22090_22103[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22088 === 6))
{var inst_22083 = (state_22087[2]);var state_22087__$1 = state_22087;var statearr_22091_22104 = state_22087__$1;(statearr_22091_22104[2] = inst_22083);
(statearr_22091_22104[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22088 === 5))
{var state_22087__$1 = state_22087;var statearr_22092_22105 = state_22087__$1;(statearr_22092_22105[2] = null);
(statearr_22092_22105[1] = 6);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22088 === 4))
{var state_22087__$1 = state_22087;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22087__$1,7,comm);
} else
{if((state_val_22088 === 3))
{var inst_22085 = (state_22087[2]);var state_22087__$1 = state_22087;return cljs.core.async.impl.ioc_helpers.return_chan(state_22087__$1,inst_22085);
} else
{if((state_val_22088 === 2))
{var state_22087__$1 = state_22087;if(true)
{var statearr_22093_22106 = state_22087__$1;(statearr_22093_22106[1] = 4);
} else
{var statearr_22094_22107 = state_22087__$1;(statearr_22094_22107[1] = 5);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_22088 === 1))
{var state_22087__$1 = state_22087;var statearr_22095_22108 = state_22087__$1;(statearr_22095_22108[2] = null);
(statearr_22095_22108[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_22099 = [null,null,null,null,null,null,null,null];(statearr_22099[0] = state_machine__5507__auto__);
(statearr_22099[1] = 1);
return statearr_22099;
});
var state_machine__5507__auto____1 = (function (state_22087){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22087);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22100){if((e22100 instanceof Object))
{var ex__5510__auto__ = e22100;var statearr_22101_22109 = state_22087;(statearr_22101_22109[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22087);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e22100;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__22110 = state_22087;
state_22087 = G__22110;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22087){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22102 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
