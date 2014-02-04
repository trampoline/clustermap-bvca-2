// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$277,cljs.core.constant$keyword$327,cljs.core.constant$keyword$361,cljs.core.constant$keyword$360,cljs.core.constant$keyword$367,cljs.core.constant$keyword$274,cljs.core.constant$keyword$368,cljs.core.constant$keyword$359,cljs.core.constant$keyword$337,cljs.core.constant$keyword$343,cljs.core.constant$keyword$362,cljs.core.constant$keyword$278],[null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21264){var vec__21265 = p__21264;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21265,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21265,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21266){var map__21268 = p__21266;var map__21268__$1 = ((cljs.core.seq_QMARK_(map__21268))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21268):map__21268);var path_values = map__21268__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21266 = null;if (arguments.length > 0) {
  p__21266 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21266);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21269){
var p__21266 = cljs.core.seq(arglist__21269);
return set_state__delegate(p__21266);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21289){var state_val_21290 = (state_21289[1]);if((state_val_21290 === 2))
{var inst_21286 = (state_21289[2]);var inst_21287 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$360,inst_21286], 0));var state_21289__$1 = state_21289;return cljs.core.async.impl.ioc_helpers.return_chan(state_21289__$1,inst_21287);
} else
{if((state_val_21290 === 1))
{var inst_21284 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$224,true], 0));var state_21289__$1 = state_21289;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21289__$1,2,inst_21284);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21294 = [null,null,null,null,null,null,null];(statearr_21294[0] = state_machine__5507__auto__);
(statearr_21294[1] = 1);
return statearr_21294;
});
var state_machine__5507__auto____1 = (function (state_21289){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21289);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21295){if((e21295 instanceof Object))
{var ex__5510__auto__ = e21295;var statearr_21296_21298 = state_21289;(statearr_21296_21298[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21289);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e21295;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__21299 = state_21289;
state_21289 = G__21299;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21289){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21297 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21297;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$343,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21300,type){var vec__21302 = p__21300;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21302,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21302,1,null);var selection_portfolio_companies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21302,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21302,3,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21302,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21302,5,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21302,6,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$236,type,cljs.core.constant$keyword$204,selection], null),cljs.core.constant$keyword$278,selection_portfolio_company_stats,cljs.core.constant$keyword$337,selection_portfolio_companies,cljs.core.constant$keyword$277,selection_portfolio_company_site_stats,cljs.core.constant$keyword$368,selection_portfolio_company_sites,cljs.core.constant$keyword$327,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$359,selection_portfolio_company_locations], 0));
});
clustermap.app.extract_id = (function extract_id(type,obj){var pred__21306 = cljs.core._EQ_;var expr__21307 = type;if(cljs.core.truth_((pred__21306.cljs$core$IFn$_invoke$arity$2 ? pred__21306.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$269,expr__21307) : pred__21306.call(null,cljs.core.constant$keyword$269,expr__21307))))
{return cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__21306.cljs$core$IFn$_invoke$arity$2 ? pred__21306.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$270,expr__21307) : pred__21306.call(null,cljs.core.constant$keyword$270,expr__21307))))
{return cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__21306.cljs$core$IFn$_invoke$arity$2 ? pred__21306.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$271,expr__21307) : pred__21306.call(null,cljs.core.constant$keyword$271,expr__21307))))
{return cljs.core.constant$keyword$371.cljs$core$IFn$_invoke$arity$1(obj);
} else
{return null;
}
}
}
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__21309){var vec__21314 = p__21309;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21314,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21314,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$367,selector], 0));
var pred__21315 = cljs.core._EQ_;var expr__21316 = type;if(cljs.core.truth_((pred__21315.cljs$core$IFn$_invoke$arity$2 ? pred__21315.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$269,expr__21316) : pred__21315.call(null,cljs.core.constant$keyword$269,expr__21316))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21315.cljs$core$IFn$_invoke$arity$2 ? pred__21315.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$270,expr__21316) : pred__21315.call(null,cljs.core.constant$keyword$270,expr__21316))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21315.cljs$core$IFn$_invoke$arity$2 ? pred__21315.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$271,expr__21316) : pred__21315.call(null,cljs.core.constant$keyword$271,expr__21316))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null,clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){return clustermap.nav.change_view(cljs.core.name(view));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__21319 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21319,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21319,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21319,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21319,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$372,view,cljs.core.constant$keyword$236,type,cljs.core.constant$keyword$232,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__21320){var vec__21323 = p__21320;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21323,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21323,1,null);var map__21324 = clustermap.app.parse_route();var map__21324__$1 = ((cljs.core.seq_QMARK_(map__21324))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21324):map__21324);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21324__$1,cljs.core.constant$keyword$372);var id = clustermap.app.extract_id(type,val);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__21326 = clustermap.app.parse_route();var map__21326__$1 = ((cljs.core.seq_QMARK_(map__21326))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21326):map__21326);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21326__$1,cljs.core.constant$keyword$232);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21326__$1,cljs.core.constant$keyword$236);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$342,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$252,clustermap.app.set_selection_route,cljs.core.constant$keyword$373,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$273,clustermap.app.set_view_route,cljs.core.constant$keyword$374,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9258__auto__){var map__21330 = params__9258__auto__;var map__21330__$1 = ((cljs.core.seq_QMARK_(map__21330))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21330):map__21330);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$373,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9258__auto__){var map__21331 = params__9258__auto__;var map__21331__$1 = ((cljs.core.seq_QMARK_(map__21331))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21331):map__21331);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21331__$1,cljs.core.constant$keyword$372);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$374,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$373,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9258__auto__){var map__21332 = params__9258__auto__;var map__21332__$1 = ((cljs.core.seq_QMARK_(map__21332))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21332):map__21332);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21332__$1,cljs.core.constant$keyword$232);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21332__$1,cljs.core.constant$keyword$236);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21332__$1,cljs.core.constant$keyword$372);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$374,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$373,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.components.map.mount(clustermap.app.state,"map-component",comm);
clustermap.components.search.mount(clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",comm);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",comm);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",comm);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21379){var state_val_21380 = (state_21379[1]);if((state_val_21380 === 7))
{var inst_21368 = (state_21379[2]);var inst_21369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21368,0,null);var inst_21370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21368,1,null);var inst_21371 = clustermap.app.handle_event(inst_21369,inst_21370);var state_21379__$1 = (function (){var statearr_21381 = state_21379;(statearr_21381[7] = inst_21371);
return statearr_21381;
})();var statearr_21382_21395 = state_21379__$1;(statearr_21382_21395[2] = null);
(statearr_21382_21395[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21380 === 6))
{var inst_21375 = (state_21379[2]);var state_21379__$1 = state_21379;var statearr_21383_21396 = state_21379__$1;(statearr_21383_21396[2] = inst_21375);
(statearr_21383_21396[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21380 === 5))
{var state_21379__$1 = state_21379;var statearr_21384_21397 = state_21379__$1;(statearr_21384_21397[2] = null);
(statearr_21384_21397[1] = 6);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21380 === 4))
{var state_21379__$1 = state_21379;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21379__$1,7,comm);
} else
{if((state_val_21380 === 3))
{var inst_21377 = (state_21379[2]);var state_21379__$1 = state_21379;return cljs.core.async.impl.ioc_helpers.return_chan(state_21379__$1,inst_21377);
} else
{if((state_val_21380 === 2))
{var state_21379__$1 = state_21379;if(true)
{var statearr_21385_21398 = state_21379__$1;(statearr_21385_21398[1] = 4);
} else
{var statearr_21386_21399 = state_21379__$1;(statearr_21386_21399[1] = 5);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_21380 === 1))
{var state_21379__$1 = state_21379;var statearr_21387_21400 = state_21379__$1;(statearr_21387_21400[2] = null);
(statearr_21387_21400[1] = 2);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_21391 = [null,null,null,null,null,null,null,null];(statearr_21391[0] = state_machine__5507__auto__);
(statearr_21391[1] = 1);
return statearr_21391;
});
var state_machine__5507__auto____1 = (function (state_21379){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21379);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21392){if((e21392 instanceof Object))
{var ex__5510__auto__ = e21392;var statearr_21393_21401 = state_21379;(statearr_21393_21401[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21379);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e21392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__21402 = state_21379;
state_21379 = G__21402;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21379){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21394 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21394;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
