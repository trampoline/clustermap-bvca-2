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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$355,cljs.core.constant$keyword$288,cljs.core.constant$keyword$343,cljs.core.constant$keyword$305,cljs.core.constant$keyword$387,cljs.core.constant$keyword$393,cljs.core.constant$keyword$285,cljs.core.constant$keyword$394,cljs.core.constant$keyword$386,cljs.core.constant$keyword$353,cljs.core.constant$keyword$365,cljs.core.constant$keyword$388,cljs.core.constant$keyword$289],[cljs.core.constant$keyword$390,null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21351){var vec__21352 = p__21351;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21352,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21352,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21353){var map__21355 = p__21353;var map__21355__$1 = ((cljs.core.seq_QMARK_(map__21355))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21355):map__21355);var path_values = map__21355__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21353 = null;if (arguments.length > 0) {
  p__21353 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21353);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21356){
var p__21353 = cljs.core.seq(arglist__21356);
return set_state__delegate(p__21353);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21376){var state_val_21377 = (state_21376[1]);if((state_val_21377 === 2))
{var inst_21373 = (state_21376[2]);var inst_21374 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$387,inst_21373], 0));var state_21376__$1 = state_21376;return cljs.core.async.impl.ioc_helpers.return_chan(state_21376__$1,inst_21374);
} else
{if((state_val_21377 === 1))
{var inst_21371 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$235,true], 0));var state_21376__$1 = state_21376;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21376__$1,2,inst_21371);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21381 = [null,null,null,null,null,null,null];(statearr_21381[0] = state_machine__5507__auto__);
(statearr_21381[1] = 1);
return statearr_21381;
});
var state_machine__5507__auto____1 = (function (state_21376){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21376);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21382){if((e21382 instanceof Object))
{var ex__5510__auto__ = e21382;var statearr_21383_21385 = state_21376;(statearr_21383_21385[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21376);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e21382;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__21386 = state_21376;
state_21376 = G__21386;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21376){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21384 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$365,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21387,type){var vec__21389 = p__21387;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21389,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21389,1,null);var selection_portfolio_companies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21389,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21389,3,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21389,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21389,5,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21389,6,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$247,type,cljs.core.constant$keyword$215,selection], null),cljs.core.constant$keyword$289,selection_portfolio_company_stats,cljs.core.constant$keyword$353,selection_portfolio_companies,cljs.core.constant$keyword$288,selection_portfolio_company_site_stats,cljs.core.constant$keyword$394,selection_portfolio_company_sites,cljs.core.constant$keyword$343,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$386,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__21390){var vec__21395 = p__21390;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21395,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21395,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$393,selector], 0));
var pred__21396 = cljs.core._EQ_;var expr__21397 = type;if(cljs.core.truth_((pred__21396.cljs$core$IFn$_invoke$arity$2 ? pred__21396.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$280,expr__21397) : pred__21396.call(null,cljs.core.constant$keyword$280,expr__21397))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21396.cljs$core$IFn$_invoke$arity$2 ? pred__21396.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$281,expr__21397) : pred__21396.call(null,cljs.core.constant$keyword$281,expr__21397))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21396.cljs$core$IFn$_invoke$arity$2 ? pred__21396.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$282,expr__21397) : pred__21396.call(null,cljs.core.constant$keyword$282,expr__21397))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null,clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.nav.change_view(cljs.core.name(view__$1));
return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$355,view__$1], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__21400 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21400,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21400,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21400,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21400,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$355,view,cljs.core.constant$keyword$247,type,cljs.core.constant$keyword$243,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__21401){var vec__21404 = p__21401;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21404,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21404,1,null);var map__21405 = clustermap.app.parse_route();var map__21405__$1 = ((cljs.core.seq_QMARK_(map__21405))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21405):map__21405);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21405__$1,cljs.core.constant$keyword$355);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__21407 = clustermap.app.parse_route();var map__21407__$1 = ((cljs.core.seq_QMARK_(map__21407))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21407):map__21407);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21407__$1,cljs.core.constant$keyword$243);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21407__$1,cljs.core.constant$keyword$247);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$363,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$263,clustermap.app.set_selection_route,cljs.core.constant$keyword$395,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$284,clustermap.app.set_view_route,cljs.core.constant$keyword$396,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__21411 = params__9259__auto__;var map__21411__$1 = ((cljs.core.seq_QMARK_(map__21411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21411):map__21411);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$395,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__21412 = params__9259__auto__;var map__21412__$1 = ((cljs.core.seq_QMARK_(map__21412))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21412):map__21412);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21412__$1,cljs.core.constant$keyword$355);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$396,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$395,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__21413 = params__9259__auto__;var map__21413__$1 = ((cljs.core.seq_QMARK_(map__21413))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21413):map__21413);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21413__$1,cljs.core.constant$keyword$243);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21413__$1,cljs.core.constant$keyword$247);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21413__$1,cljs.core.constant$keyword$355);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$396,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$395,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$283,comm,cljs.core.constant$keyword$302,path_fn,cljs.core.constant$keyword$303,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21460){var state_val_21461 = (state_21460[1]);if((state_val_21461 === 7))
{var inst_21449 = (state_21460[2]);var inst_21450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21449,0,null);var inst_21451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21449,1,null);var inst_21452 = clustermap.app.handle_event(inst_21450,inst_21451);var state_21460__$1 = (function (){var statearr_21462 = state_21460;(statearr_21462[7] = inst_21452);
return statearr_21462;
})();var statearr_21463_21476 = state_21460__$1;(statearr_21463_21476[2] = null);
(statearr_21463_21476[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_21461 === 6))
{var inst_21456 = (state_21460[2]);var state_21460__$1 = state_21460;var statearr_21464_21477 = state_21460__$1;(statearr_21464_21477[2] = inst_21456);
(statearr_21464_21477[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_21461 === 5))
{var state_21460__$1 = state_21460;var statearr_21465_21478 = state_21460__$1;(statearr_21465_21478[2] = null);
(statearr_21465_21478[1] = 6);
return cljs.core.constant$keyword$221;
} else
{if((state_val_21461 === 4))
{var state_21460__$1 = state_21460;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21460__$1,7,comm);
} else
{if((state_val_21461 === 3))
{var inst_21458 = (state_21460[2]);var state_21460__$1 = state_21460;return cljs.core.async.impl.ioc_helpers.return_chan(state_21460__$1,inst_21458);
} else
{if((state_val_21461 === 2))
{var state_21460__$1 = state_21460;if(true)
{var statearr_21466_21479 = state_21460__$1;(statearr_21466_21479[1] = 4);
} else
{var statearr_21467_21480 = state_21460__$1;(statearr_21467_21480[1] = 5);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_21461 === 1))
{var state_21460__$1 = state_21460;var statearr_21468_21481 = state_21460__$1;(statearr_21468_21481[2] = null);
(statearr_21468_21481[1] = 2);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_21472 = [null,null,null,null,null,null,null,null];(statearr_21472[0] = state_machine__5507__auto__);
(statearr_21472[1] = 1);
return statearr_21472;
});
var state_machine__5507__auto____1 = (function (state_21460){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21460);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21473){if((e21473 instanceof Object))
{var ex__5510__auto__ = e21473;var statearr_21474_21482 = state_21460;(statearr_21474_21482[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21460);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e21473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__21483 = state_21460;
state_21460 = G__21483;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21460){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21475 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
