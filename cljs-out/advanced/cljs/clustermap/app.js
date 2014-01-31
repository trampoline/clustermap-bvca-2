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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$271,cljs.core.constant$keyword$321,cljs.core.constant$keyword$351,cljs.core.constant$keyword$355,cljs.core.constant$keyword$268,cljs.core.constant$keyword$356,cljs.core.constant$keyword$354,cljs.core.constant$keyword$331,cljs.core.constant$keyword$336,cljs.core.constant$keyword$272],[null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21109){var vec__21110 = p__21109;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21110,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21110,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21111){var map__21113 = p__21111;var map__21113__$1 = ((cljs.core.seq_QMARK_(map__21113))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21113):map__21113);var path_values = map__21113__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21111 = null;if (arguments.length > 0) {
  p__21111 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21111);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21114){
var p__21111 = cljs.core.seq(arglist__21114);
return set_state__delegate(p__21111);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21134){var state_val_21135 = (state_21134[1]);if((state_val_21135 === 2))
{var inst_21131 = (state_21134[2]);var inst_21132 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$351,inst_21131], 0));var state_21134__$1 = state_21134;return cljs.core.async.impl.ioc_helpers.return_chan(state_21134__$1,inst_21132);
} else
{if((state_val_21135 === 1))
{var inst_21129 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$218,true], 0));var state_21134__$1 = state_21134;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21134__$1,2,inst_21129);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21139 = [null,null,null,null,null,null,null];(statearr_21139[0] = state_machine__5507__auto__);
(statearr_21139[1] = 1);
return statearr_21139;
});
var state_machine__5507__auto____1 = (function (state_21134){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21134);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$204))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21140){if((e21140 instanceof Object))
{var ex__5510__auto__ = e21140;var statearr_21141_21143 = state_21134;(statearr_21141_21143[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21134);
return cljs.core.constant$keyword$204;
} else
{if(cljs.core.constant$keyword$193)
{throw e21140;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$204))
{{
var G__21144 = state_21134;
state_21134 = G__21144;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21134){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21142 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$336,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21145,type){var vec__21147 = p__21145;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21147,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21147,1,null);var selection_portfolio_companies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21147,2,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21147,3,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21147,4,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21147,5,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21147,6,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$268,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,type,cljs.core.constant$keyword$198,selection], null),cljs.core.constant$keyword$272,selection_portfolio_company_stats,cljs.core.constant$keyword$331,selection_portfolio_companies,cljs.core.constant$keyword$271,selection_portfolio_company_site_stats,cljs.core.constant$keyword$356,selection_portfolio_company_sites,cljs.core.constant$keyword$321,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$354,selection_portfolio_company_locations], 0));
});
clustermap.app.extract_id = (function extract_id(type,obj){var pred__21151 = cljs.core._EQ_;var expr__21152 = type;if(cljs.core.truth_((pred__21151.cljs$core$IFn$_invoke$arity$2 ? pred__21151.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$263,expr__21152) : pred__21151.call(null,cljs.core.constant$keyword$263,expr__21152))))
{return cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__21151.cljs$core$IFn$_invoke$arity$2 ? pred__21151.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$264,expr__21152) : pred__21151.call(null,cljs.core.constant$keyword$264,expr__21152))))
{return cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__21151.cljs$core$IFn$_invoke$arity$2 ? pred__21151.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$265,expr__21152) : pred__21151.call(null,cljs.core.constant$keyword$265,expr__21152))))
{return cljs.core.constant$keyword$359.cljs$core$IFn$_invoke$arity$1(obj);
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
clustermap.app.make_selection = (function make_selection(p__21154){var vec__21159 = p__21154;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21159,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21159,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$355,selector], 0));
var pred__21160 = cljs.core._EQ_;var expr__21161 = type;if(cljs.core.truth_((pred__21160.cljs$core$IFn$_invoke$arity$2 ? pred__21160.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$263,expr__21161) : pred__21160.call(null,cljs.core.constant$keyword$263,expr__21161))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21160.cljs$core$IFn$_invoke$arity$2 ? pred__21160.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$264,expr__21161) : pred__21160.call(null,cljs.core.constant$keyword$264,expr__21161))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_companies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21160.cljs$core$IFn$_invoke$arity$2 ? pred__21160.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$265,expr__21161) : pred__21160.call(null,cljs.core.constant$keyword$265,expr__21161))))
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__21164 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21164,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21164,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21164,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21164,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$360,view,cljs.core.constant$keyword$228,type,cljs.core.constant$keyword$225,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__21165){var vec__21168 = p__21165;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21168,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21168,1,null);var map__21169 = clustermap.app.parse_route();var map__21169__$1 = ((cljs.core.seq_QMARK_(map__21169))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21169):map__21169);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169__$1,cljs.core.constant$keyword$360);var id = clustermap.app.extract_id(type,val);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__21171 = clustermap.app.parse_route();var map__21171__$1 = ((cljs.core.seq_QMARK_(map__21171))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21171):map__21171);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21171__$1,cljs.core.constant$keyword$225);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21171__$1,cljs.core.constant$keyword$228);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$335,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$245,clustermap.app.set_selection_route,cljs.core.constant$keyword$361,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$267,clustermap.app.set_view_route,cljs.core.constant$keyword$362,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9258__auto__){var map__21175 = params__9258__auto__;var map__21175__$1 = ((cljs.core.seq_QMARK_(map__21175))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21175):map__21175);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$361,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9258__auto__){var map__21176 = params__9258__auto__;var map__21176__$1 = ((cljs.core.seq_QMARK_(map__21176))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21176):map__21176);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21176__$1,cljs.core.constant$keyword$360);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$362,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$361,null], null));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9258__auto__){var map__21177 = params__9258__auto__;var map__21177__$1 = ((cljs.core.seq_QMARK_(map__21177))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21177):map__21177);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,cljs.core.constant$keyword$225);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,cljs.core.constant$keyword$228);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,cljs.core.constant$keyword$360);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$362,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$361,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
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
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21224){var state_val_21225 = (state_21224[1]);if((state_val_21225 === 7))
{var inst_21213 = (state_21224[2]);var inst_21214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21213,0,null);var inst_21215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21213,1,null);var inst_21216 = clustermap.app.handle_event(inst_21214,inst_21215);var state_21224__$1 = (function (){var statearr_21226 = state_21224;(statearr_21226[7] = inst_21216);
return statearr_21226;
})();var statearr_21227_21240 = state_21224__$1;(statearr_21227_21240[2] = null);
(statearr_21227_21240[1] = 2);
return cljs.core.constant$keyword$204;
} else
{if((state_val_21225 === 6))
{var inst_21220 = (state_21224[2]);var state_21224__$1 = state_21224;var statearr_21228_21241 = state_21224__$1;(statearr_21228_21241[2] = inst_21220);
(statearr_21228_21241[1] = 3);
return cljs.core.constant$keyword$204;
} else
{if((state_val_21225 === 5))
{var state_21224__$1 = state_21224;var statearr_21229_21242 = state_21224__$1;(statearr_21229_21242[2] = null);
(statearr_21229_21242[1] = 6);
return cljs.core.constant$keyword$204;
} else
{if((state_val_21225 === 4))
{var state_21224__$1 = state_21224;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21224__$1,7,comm);
} else
{if((state_val_21225 === 3))
{var inst_21222 = (state_21224[2]);var state_21224__$1 = state_21224;return cljs.core.async.impl.ioc_helpers.return_chan(state_21224__$1,inst_21222);
} else
{if((state_val_21225 === 2))
{var state_21224__$1 = state_21224;if(true)
{var statearr_21230_21243 = state_21224__$1;(statearr_21230_21243[1] = 4);
} else
{var statearr_21231_21244 = state_21224__$1;(statearr_21231_21244[1] = 5);
}
return cljs.core.constant$keyword$204;
} else
{if((state_val_21225 === 1))
{var state_21224__$1 = state_21224;var statearr_21232_21245 = state_21224__$1;(statearr_21232_21245[2] = null);
(statearr_21232_21245[1] = 2);
return cljs.core.constant$keyword$204;
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
var state_machine__5507__auto____0 = (function (){var statearr_21236 = [null,null,null,null,null,null,null,null];(statearr_21236[0] = state_machine__5507__auto__);
(statearr_21236[1] = 1);
return statearr_21236;
});
var state_machine__5507__auto____1 = (function (state_21224){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21224);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$204))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21237){if((e21237 instanceof Object))
{var ex__5510__auto__ = e21237;var statearr_21238_21246 = state_21224;(statearr_21238_21246[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21224);
return cljs.core.constant$keyword$204;
} else
{if(cljs.core.constant$keyword$193)
{throw e21237;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$204))
{{
var G__21247 = state_21224;
state_21224 = G__21247;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21224){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21239 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21239;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
