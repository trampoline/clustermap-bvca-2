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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$84,cljs.core.constant$keyword$131,cljs.core.constant$keyword$161,cljs.core.constant$keyword$86,cljs.core.constant$keyword$165,cljs.core.constant$keyword$81,cljs.core.constant$keyword$141,cljs.core.constant$keyword$162,cljs.core.constant$keyword$146,cljs.core.constant$keyword$85],[null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__11114){var vec__11115 = p__11114;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__11116){var map__11118 = p__11116;var map__11118__$1 = ((cljs.core.seq_QMARK_(map__11118))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11118):map__11118);var path_values = map__11118__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__11116 = null;if (arguments.length > 0) {
  p__11116 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__11116);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__11119){
var p__11116 = cljs.core.seq(arglist__11119);
return set_state__delegate(p__11116);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11139){var state_val_11140 = (state_11139[1]);if((state_val_11140 === 2))
{var inst_11136 = (state_11139[2]);var inst_11137 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$86,inst_11136], 0));var state_11139__$1 = state_11139;return cljs.core.async.impl.ioc_helpers.return_chan(state_11139__$1,inst_11137);
} else
{if((state_val_11140 === 1))
{var inst_11134 = clustermap.api.portfolio_company_stats();var state_11139__$1 = state_11139;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11139__$1,2,inst_11134);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11144 = [null,null,null,null,null,null,null];(statearr_11144[0] = state_machine__5507__auto__);
(statearr_11144[1] = 1);
return statearr_11144;
});
var state_machine__5507__auto____1 = (function (state_11139){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_11139);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11145){if((e11145 instanceof Object))
{var ex__5510__auto__ = e11145;var statearr_11146_11148 = state_11139;(statearr_11146_11148[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11139);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e11145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__11149 = state_11139;
state_11139 = G__11149;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11139){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11147 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_11147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_11147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11169){var state_val_11170 = (state_11169[1]);if((state_val_11170 === 2))
{var inst_11166 = (state_11169[2]);var inst_11167 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$161,inst_11166], 0));var state_11169__$1 = state_11169;return cljs.core.async.impl.ioc_helpers.return_chan(state_11169__$1,inst_11167);
} else
{if((state_val_11170 === 1))
{var inst_11164 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$31,true], 0));var state_11169__$1 = state_11169;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11169__$1,2,inst_11164);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11174 = [null,null,null,null,null,null,null];(statearr_11174[0] = state_machine__5507__auto__);
(statearr_11174[1] = 1);
return statearr_11174;
});
var state_machine__5507__auto____1 = (function (state_11169){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_11169);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11175){if((e11175 instanceof Object))
{var ex__5510__auto__ = e11175;var statearr_11176_11178 = state_11169;(statearr_11176_11178[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11169);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e11175;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__11179 = state_11169;
state_11169 = G__11179;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11169){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11177 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_11177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_11177;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$146,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__11180,type){var vec__11182 = p__11180;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11182,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11182,1,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11182,2,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11182,3,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11182,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11182,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$81,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$41,type,cljs.core.constant$keyword$11,selection], null),cljs.core.constant$keyword$85,selection_portfolio_company_stats,cljs.core.constant$keyword$84,selection_portfolio_company_site_stats,cljs.core.constant$keyword$141,selection_portfolio_company_sites,cljs.core.constant$keyword$131,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$162,selection_portfolio_company_locations], 0));
});
clustermap.app.extract_id = (function extract_id(type,obj){var pred__11186 = cljs.core._EQ_;var expr__11187 = type;if(cljs.core.truth_((pred__11186.cljs$core$IFn$_invoke$arity$2 ? pred__11186.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$76,expr__11187) : pred__11186.call(null,cljs.core.constant$keyword$76,expr__11187))))
{return cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__11186.cljs$core$IFn$_invoke$arity$2 ? pred__11186.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$77,expr__11187) : pred__11186.call(null,cljs.core.constant$keyword$77,expr__11187))))
{return cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__11186.cljs$core$IFn$_invoke$arity$2 ? pred__11186.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$78,expr__11187) : pred__11186.call(null,cljs.core.constant$keyword$78,expr__11187))))
{return cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(obj);
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
clustermap.app.make_selection = (function make_selection(p__11189){var vec__11194 = p__11189;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11194,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11194,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$165,selector], 0));
var pred__11195 = cljs.core._EQ_;var expr__11196 = type;if(cljs.core.truth_((pred__11195.cljs$core$IFn$_invoke$arity$2 ? pred__11195.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$76,expr__11196) : pred__11195.call(null,cljs.core.constant$keyword$76,expr__11196))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__11195.cljs$core$IFn$_invoke$arity$2 ? pred__11195.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$77,expr__11196) : pred__11195.call(null,cljs.core.constant$keyword$77,expr__11196))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__11195.cljs$core$IFn$_invoke$arity$2 ? pred__11195.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$78,expr__11196) : pred__11195.call(null,cljs.core.constant$keyword$78,expr__11196))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null,clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){return clustermap.nav.change_view(cljs.core.name(view));
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3394__auto__ = view;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = type;if(cljs.core.truth_(and__3394__auto____$1))
{return id;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name(view)),cljs.core.str("/"),cljs.core.str(cljs.core.name(type)),cljs.core.str("/"),cljs.core.str(cljs.core.name(id))].join(''));
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
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__11199 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11199,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11199,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11199,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11199,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$168,view,cljs.core.constant$keyword$41,type,cljs.core.constant$keyword$38,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__11200){var vec__11203 = p__11200;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11203,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11203,1,null);var map__11204 = clustermap.app.parse_route();var map__11204__$1 = ((cljs.core.seq_QMARK_(map__11204))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11204):map__11204);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11204__$1,cljs.core.constant$keyword$168);return clustermap.app.set_route(view,type,clustermap.app.extract_id(type,val));
});
clustermap.app.set_view_route = (function set_view_route(view){var map__11206 = clustermap.app.parse_route();var map__11206__$1 = ((cljs.core.seq_QMARK_(map__11206))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11206):map__11206);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11206__$1,cljs.core.constant$keyword$38);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11206__$1,cljs.core.constant$keyword$41);return clustermap.app.set_route(view,type,id);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$145,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$58,clustermap.app.set_selection_route,cljs.core.constant$keyword$169,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$80,clustermap.app.set_view_route,cljs.core.constant$keyword$170,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.put_route_commands = (function put_route_commands(comm,new_view,new_type,new_id){if(cljs.core.truth_(new_view))
{cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$170,new_view], null));
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = new_type;if(cljs.core.truth_(and__3394__auto__))
{return new_id;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$169,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_type),new_id], null)], null));
} else
{return null;
}
});
clustermap.app.init_routes = (function init_routes(comm){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9246__auto__){var map__11210 = params__9246__auto__;var map__11210__$1 = ((cljs.core.seq_QMARK_(map__11210))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11210):map__11210);return clustermap.app.put_route_commands(comm,null,null,null);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view",(function (params__9246__auto__){var map__11211 = params__9246__auto__;var map__11211__$1 = ((cljs.core.seq_QMARK_(map__11211))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11211):map__11211);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11211__$1,cljs.core.constant$keyword$168);return clustermap.app.put_route_commands(comm,view,null,null);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:view/:type/:id",(function (params__9246__auto__){var map__11212 = params__9246__auto__;var map__11212__$1 = ((cljs.core.seq_QMARK_(map__11212))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11212):map__11212);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11212__$1,cljs.core.constant$keyword$38);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11212__$1,cljs.core.constant$keyword$41);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11212__$1,cljs.core.constant$keyword$168);return clustermap.app.put_route_commands(comm,view,type,id);
}));
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_all_portfolio_company_stats();
clustermap.app.load_uk_constituencies();
clustermap.app.handle_event(cljs.core.constant$keyword$58,null);
clustermap.components.map.mount(clustermap.app.state,"map-component",comm);
clustermap.components.search.mount(clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",comm);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",comm);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",comm);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11259){var state_val_11260 = (state_11259[1]);if((state_val_11260 === 7))
{var inst_11248 = (state_11259[2]);var inst_11249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11248,0,null);var inst_11250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11248,1,null);var inst_11251 = clustermap.app.handle_event(inst_11249,inst_11250);var state_11259__$1 = (function (){var statearr_11261 = state_11259;(statearr_11261[7] = inst_11251);
return statearr_11261;
})();var statearr_11262_11275 = state_11259__$1;(statearr_11262_11275[2] = null);
(statearr_11262_11275[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11260 === 6))
{var inst_11255 = (state_11259[2]);var state_11259__$1 = state_11259;var statearr_11263_11276 = state_11259__$1;(statearr_11263_11276[2] = inst_11255);
(statearr_11263_11276[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11260 === 5))
{var state_11259__$1 = state_11259;var statearr_11264_11277 = state_11259__$1;(statearr_11264_11277[2] = null);
(statearr_11264_11277[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11260 === 4))
{var state_11259__$1 = state_11259;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11259__$1,7,comm);
} else
{if((state_val_11260 === 3))
{var inst_11257 = (state_11259[2]);var state_11259__$1 = state_11259;return cljs.core.async.impl.ioc_helpers.return_chan(state_11259__$1,inst_11257);
} else
{if((state_val_11260 === 2))
{var state_11259__$1 = state_11259;if(true)
{var statearr_11265_11278 = state_11259__$1;(statearr_11265_11278[1] = 4);
} else
{var statearr_11266_11279 = state_11259__$1;(statearr_11266_11279[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11260 === 1))
{var state_11259__$1 = state_11259;var statearr_11267_11280 = state_11259__$1;(statearr_11267_11280[2] = null);
(statearr_11267_11280[1] = 2);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_11271 = [null,null,null,null,null,null,null,null];(statearr_11271[0] = state_machine__5507__auto__);
(statearr_11271[1] = 1);
return statearr_11271;
});
var state_machine__5507__auto____1 = (function (state_11259){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_11259);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11272){if((e11272 instanceof Object))
{var ex__5510__auto__ = e11272;var statearr_11273_11281 = state_11259;(statearr_11273_11281[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11259);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e11272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__11282 = state_11259;
state_11259 = G__11282;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11259){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11274 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_11274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_11274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
