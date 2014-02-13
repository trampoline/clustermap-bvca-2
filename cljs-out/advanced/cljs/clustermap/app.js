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
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21357){var vec__21358 = p__21357;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21358,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21358,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21359){var map__21361 = p__21359;var map__21361__$1 = ((cljs.core.seq_QMARK_(map__21361))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21361):map__21361);var path_values = map__21361__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21359 = null;if (arguments.length > 0) {
  p__21359 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21359);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21362){
var p__21359 = cljs.core.seq(arglist__21362);
return set_state__delegate(p__21359);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21382){var state_val_21383 = (state_21382[1]);if((state_val_21383 === 2))
{var inst_21379 = (state_21382[2]);var inst_21380 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$377,inst_21379], 0));var state_21382__$1 = state_21382;return cljs.core.async.impl.ioc_helpers.return_chan(state_21382__$1,inst_21380);
} else
{if((state_val_21383 === 1))
{var inst_21377 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$230,true], 0));var state_21382__$1 = state_21382;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21382__$1,2,inst_21377);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21387 = [null,null,null,null,null,null,null];(statearr_21387[0] = state_machine__5507__auto__);
(statearr_21387[1] = 1);
return statearr_21387;
});
var state_machine__5507__auto____1 = (function (state_21382){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21382);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21388){if((e21388 instanceof Object))
{var ex__5510__auto__ = e21388;var statearr_21389_21391 = state_21382;(statearr_21389_21391[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21382);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e21388;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__21392 = state_21382;
state_21382 = G__21392;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21382){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21390 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21390;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$360,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21393,type){var vec__21395 = p__21393;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21395,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21395,1,null);var selection_portfolio_companies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21395,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21395,3,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21395,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21395,5,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21395,6,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$242,type,cljs.core.constant$keyword$210,selection], null),cljs.core.constant$keyword$284,selection_portfolio_company_stats,cljs.core.constant$keyword$348,selection_portfolio_companies,cljs.core.constant$keyword$283,selection_portfolio_company_site_stats,cljs.core.constant$keyword$384,selection_portfolio_company_sites,cljs.core.constant$keyword$338,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$376,selection_portfolio_company_locations], 0));
});
clustermap.app.extract_id = (function extract_id(type,obj){var pred__21399 = cljs.core._EQ_;var expr__21400 = type;if(cljs.core.truth_((pred__21399.cljs$core$IFn$_invoke$arity$2 ? pred__21399.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$275,expr__21400) : pred__21399.call(null,cljs.core.constant$keyword$275,expr__21400))))
{return cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__21399.cljs$core$IFn$_invoke$arity$2 ? pred__21399.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$276,expr__21400) : pred__21399.call(null,cljs.core.constant$keyword$276,expr__21400))))
{return cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__21399.cljs$core$IFn$_invoke$arity$2 ? pred__21399.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$277,expr__21400) : pred__21399.call(null,cljs.core.constant$keyword$277,expr__21400))))
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
clustermap.app.make_selection = (function make_selection(p__21402){var vec__21407 = p__21402;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21407,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21407,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$383,selector], 0));
var pred__21408 = cljs.core._EQ_;var expr__21409 = type;if(cljs.core.truth_((pred__21408.cljs$core$IFn$_invoke$arity$2 ? pred__21408.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$275,expr__21409) : pred__21408.call(null,cljs.core.constant$keyword$275,expr__21409))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21408.cljs$core$IFn$_invoke$arity$2 ? pred__21408.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$276,expr__21409) : pred__21408.call(null,cljs.core.constant$keyword$276,expr__21409))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21408.cljs$core$IFn$_invoke$arity$2 ? pred__21408.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$277,expr__21409) : pred__21408.call(null,cljs.core.constant$keyword$277,expr__21409))))
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__21412 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21412,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21412,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21412,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21412,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$350,view,cljs.core.constant$keyword$242,type,cljs.core.constant$keyword$238,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__21413){var vec__21416 = p__21413;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21416,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21416,1,null);var map__21417 = clustermap.app.parse_route();var map__21417__$1 = ((cljs.core.seq_QMARK_(map__21417))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21417):map__21417);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21417__$1,cljs.core.constant$keyword$350);var id = clustermap.app.extract_id(type,val);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__21419 = clustermap.app.parse_route();var map__21419__$1 = ((cljs.core.seq_QMARK_(map__21419))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21419):map__21419);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21419__$1,cljs.core.constant$keyword$238);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21419__$1,cljs.core.constant$keyword$242);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$358,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$258,clustermap.app.set_selection_route,cljs.core.constant$keyword$385,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$279,clustermap.app.set_view_route,cljs.core.constant$keyword$386,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9259__auto__){var map__21423 = params__9259__auto__;var map__21423__$1 = ((cljs.core.seq_QMARK_(map__21423))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21423):map__21423);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$385,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9259__auto__){var map__21424 = params__9259__auto__;var map__21424__$1 = ((cljs.core.seq_QMARK_(map__21424))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21424):map__21424);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21424__$1,cljs.core.constant$keyword$350);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$386,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$385,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9259__auto__){var map__21425 = params__9259__auto__;var map__21425__$1 = ((cljs.core.seq_QMARK_(map__21425))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21425):map__21425);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21425__$1,cljs.core.constant$keyword$238);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21425__$1,cljs.core.constant$keyword$242);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21425__$1,cljs.core.constant$keyword$350);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$386,view], null));
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
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21472){var state_val_21473 = (state_21472[1]);if((state_val_21473 === 7))
{var inst_21461 = (state_21472[2]);var inst_21462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21461,0,null);var inst_21463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21461,1,null);var inst_21464 = clustermap.app.handle_event(inst_21462,inst_21463);var state_21472__$1 = (function (){var statearr_21474 = state_21472;(statearr_21474[7] = inst_21464);
return statearr_21474;
})();var statearr_21475_21488 = state_21472__$1;(statearr_21475_21488[2] = null);
(statearr_21475_21488[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21473 === 6))
{var inst_21468 = (state_21472[2]);var state_21472__$1 = state_21472;var statearr_21476_21489 = state_21472__$1;(statearr_21476_21489[2] = inst_21468);
(statearr_21476_21489[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21473 === 5))
{var state_21472__$1 = state_21472;var statearr_21477_21490 = state_21472__$1;(statearr_21477_21490[2] = null);
(statearr_21477_21490[1] = 6);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21473 === 4))
{var state_21472__$1 = state_21472;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21472__$1,7,comm);
} else
{if((state_val_21473 === 3))
{var inst_21470 = (state_21472[2]);var state_21472__$1 = state_21472;return cljs.core.async.impl.ioc_helpers.return_chan(state_21472__$1,inst_21470);
} else
{if((state_val_21473 === 2))
{var state_21472__$1 = state_21472;if(true)
{var statearr_21478_21491 = state_21472__$1;(statearr_21478_21491[1] = 4);
} else
{var statearr_21479_21492 = state_21472__$1;(statearr_21479_21492[1] = 5);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_21473 === 1))
{var state_21472__$1 = state_21472;var statearr_21480_21493 = state_21472__$1;(statearr_21480_21493[2] = null);
(statearr_21480_21493[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_21484 = [null,null,null,null,null,null,null,null];(statearr_21484[0] = state_machine__5507__auto__);
(statearr_21484[1] = 1);
return statearr_21484;
});
var state_machine__5507__auto____1 = (function (state_21472){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21472);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21485){if((e21485 instanceof Object))
{var ex__5510__auto__ = e21485;var statearr_21486_21494 = state_21472;(statearr_21486_21494[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21472);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e21485;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__21495 = state_21472;
state_21472 = G__21495;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21472){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21487 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
