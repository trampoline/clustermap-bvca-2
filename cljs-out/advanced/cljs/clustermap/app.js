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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$350,cljs.core.constant$keyword$283,cljs.core.constant$keyword$338,cljs.core.constant$keyword$300,cljs.core.constant$keyword$377,cljs.core.constant$keyword$383,cljs.core.constant$keyword$280,cljs.core.constant$keyword$384,cljs.core.constant$keyword$376,cljs.core.constant$keyword$348,cljs.core.constant$keyword$360,cljs.core.constant$keyword$378,cljs.core.constant$keyword$284],[cljs.core.constant$keyword$380,null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21321){var vec__21322 = p__21321;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21322,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21322,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21323){var map__21325 = p__21323;var map__21325__$1 = ((cljs.core.seq_QMARK_(map__21325))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21325):map__21325);var path_values = map__21325__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21323 = null;if (arguments.length > 0) {
  p__21323 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21323);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21326){
var p__21323 = cljs.core.seq(arglist__21326);
return set_state__delegate(p__21323);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21346){var state_val_21347 = (state_21346[1]);if((state_val_21347 === 2))
{var inst_21343 = (state_21346[2]);var inst_21344 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$377,inst_21343], 0));var state_21346__$1 = state_21346;return cljs.core.async.impl.ioc_helpers.return_chan(state_21346__$1,inst_21344);
} else
{if((state_val_21347 === 1))
{var inst_21341 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$230,true], 0));var state_21346__$1 = state_21346;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21346__$1,2,inst_21341);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21351 = [null,null,null,null,null,null,null];(statearr_21351[0] = state_machine__5507__auto__);
(statearr_21351[1] = 1);
return statearr_21351;
});
var state_machine__5507__auto____1 = (function (state_21346){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21346);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21352){if((e21352 instanceof Object))
{var ex__5510__auto__ = e21352;var statearr_21353_21355 = state_21346;(statearr_21353_21355[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21346);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e21352;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__21356 = state_21346;
state_21346 = G__21356;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21346){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21354 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$360,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21357,type){var vec__21359 = p__21357;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21359,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21359,1,null);var selection_portfolio_companies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21359,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21359,3,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21359,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21359,5,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21359,6,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$242,type,cljs.core.constant$keyword$210,selection], null),cljs.core.constant$keyword$284,selection_portfolio_company_stats,cljs.core.constant$keyword$348,selection_portfolio_companies,cljs.core.constant$keyword$283,selection_portfolio_company_site_stats,cljs.core.constant$keyword$384,selection_portfolio_company_sites,cljs.core.constant$keyword$338,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$376,selection_portfolio_company_locations], 0));
});
clustermap.app.extract_id = (function extract_id(type,obj){var pred__21363 = cljs.core._EQ_;var expr__21364 = type;if(cljs.core.truth_((pred__21363.cljs$core$IFn$_invoke$arity$2 ? pred__21363.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$275,expr__21364) : pred__21363.call(null,cljs.core.constant$keyword$275,expr__21364))))
{return cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__21363.cljs$core$IFn$_invoke$arity$2 ? pred__21363.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$276,expr__21364) : pred__21363.call(null,cljs.core.constant$keyword$276,expr__21364))))
{return cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__21363.cljs$core$IFn$_invoke$arity$2 ? pred__21363.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$277,expr__21364) : pred__21363.call(null,cljs.core.constant$keyword$277,expr__21364))))
{return cljs.core.constant$keyword$353.cljs$core$IFn$_invoke$arity$1(obj);
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
clustermap.app.make_selection = (function make_selection(p__21366){var vec__21371 = p__21366;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21371,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21371,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$383,selector], 0));
var pred__21372 = cljs.core._EQ_;var expr__21373 = type;if(cljs.core.truth_((pred__21372.cljs$core$IFn$_invoke$arity$2 ? pred__21372.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$275,expr__21373) : pred__21372.call(null,cljs.core.constant$keyword$275,expr__21373))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21372.cljs$core$IFn$_invoke$arity$2 ? pred__21372.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$276,expr__21373) : pred__21372.call(null,cljs.core.constant$keyword$276,expr__21373))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21372.cljs$core$IFn$_invoke$arity$2 ? pred__21372.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$277,expr__21373) : pred__21372.call(null,cljs.core.constant$keyword$277,expr__21373))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null,clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){clustermap.nav.change_view(cljs.core.name(view));
return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$350,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view)], 0));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__21376 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21376,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21376,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21376,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21376,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$350,view,cljs.core.constant$keyword$242,type,cljs.core.constant$keyword$238,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__21377){var vec__21380 = p__21377;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21380,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21380,1,null);var map__21381 = clustermap.app.parse_route();var map__21381__$1 = ((cljs.core.seq_QMARK_(map__21381))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21381):map__21381);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21381__$1,cljs.core.constant$keyword$350);var id = clustermap.app.extract_id(type,val);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__21383 = clustermap.app.parse_route();var map__21383__$1 = ((cljs.core.seq_QMARK_(map__21383))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21383):map__21383);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21383__$1,cljs.core.constant$keyword$238);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21383__$1,cljs.core.constant$keyword$242);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$358,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$258,clustermap.app.set_selection_route,cljs.core.constant$keyword$385,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$279,clustermap.app.set_view_route,cljs.core.constant$keyword$386,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__21387 = params__9259__auto__;var map__21387__$1 = ((cljs.core.seq_QMARK_(map__21387))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21387):map__21387);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$385,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__21388 = params__9259__auto__;var map__21388__$1 = ((cljs.core.seq_QMARK_(map__21388))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21388):map__21388);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21388__$1,cljs.core.constant$keyword$350);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$386,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$385,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__21389 = params__9259__auto__;var map__21389__$1 = ((cljs.core.seq_QMARK_(map__21389))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21389):map__21389);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21389__$1,cljs.core.constant$keyword$238);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21389__$1,cljs.core.constant$keyword$242);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21389__$1,cljs.core.constant$keyword$350);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$386,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$385,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.path_for,clustermap.app.state);var link_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.routes.link_for,clustermap.app.state);var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$278,comm,cljs.core.constant$keyword$297,path_fn,cljs.core.constant$keyword$298,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
clustermap.components.search.mount(clustermap.app.state,"search-component",shared);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",shared);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",shared);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",shared);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21436){var state_val_21437 = (state_21436[1]);if((state_val_21437 === 7))
{var inst_21425 = (state_21436[2]);var inst_21426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21425,0,null);var inst_21427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21425,1,null);var inst_21428 = clustermap.app.handle_event(inst_21426,inst_21427);var state_21436__$1 = (function (){var statearr_21438 = state_21436;(statearr_21438[7] = inst_21428);
return statearr_21438;
})();var statearr_21439_21452 = state_21436__$1;(statearr_21439_21452[2] = null);
(statearr_21439_21452[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21437 === 6))
{var inst_21432 = (state_21436[2]);var state_21436__$1 = state_21436;var statearr_21440_21453 = state_21436__$1;(statearr_21440_21453[2] = inst_21432);
(statearr_21440_21453[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21437 === 5))
{var state_21436__$1 = state_21436;var statearr_21441_21454 = state_21436__$1;(statearr_21441_21454[2] = null);
(statearr_21441_21454[1] = 6);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21437 === 4))
{var state_21436__$1 = state_21436;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21436__$1,7,comm);
} else
{if((state_val_21437 === 3))
{var inst_21434 = (state_21436[2]);var state_21436__$1 = state_21436;return cljs.core.async.impl.ioc_helpers.return_chan(state_21436__$1,inst_21434);
} else
{if((state_val_21437 === 2))
{var state_21436__$1 = state_21436;if(true)
{var statearr_21442_21455 = state_21436__$1;(statearr_21442_21455[1] = 4);
} else
{var statearr_21443_21456 = state_21436__$1;(statearr_21443_21456[1] = 5);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_21437 === 1))
{var state_21436__$1 = state_21436;var statearr_21444_21457 = state_21436__$1;(statearr_21444_21457[2] = null);
(statearr_21444_21457[1] = 2);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_21448 = [null,null,null,null,null,null,null,null];(statearr_21448[0] = state_machine__5507__auto__);
(statearr_21448[1] = 1);
return statearr_21448;
});
var state_machine__5507__auto____1 = (function (state_21436){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21436);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21449){if((e21449 instanceof Object))
{var ex__5510__auto__ = e21449;var statearr_21450_21458 = state_21436;(statearr_21450_21458[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21436);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e21449;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__21459 = state_21436;
state_21436 = G__21459;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21436){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21451 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21451;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
