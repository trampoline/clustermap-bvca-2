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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$265,cljs.core.constant$keyword$312,cljs.core.constant$keyword$342,cljs.core.constant$keyword$267,cljs.core.constant$keyword$346,cljs.core.constant$keyword$262,cljs.core.constant$keyword$322,cljs.core.constant$keyword$343,cljs.core.constant$keyword$327,cljs.core.constant$keyword$266],[null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21067){var vec__21068 = p__21067;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21068,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21068,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21069){var map__21071 = p__21069;var map__21071__$1 = ((cljs.core.seq_QMARK_(map__21071))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21071):map__21071);var path_values = map__21071__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21069 = null;if (arguments.length > 0) {
  p__21069 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21069);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21072){
var p__21069 = cljs.core.seq(arglist__21072);
return set_state__delegate(p__21069);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9246__auto__){var map__21073 = params__9246__auto__;var map__21073__$1 = ((cljs.core.seq_QMARK_(map__21073))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21073):map__21073);var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21073__$1,cljs.core.constant$keyword$347);var _AMPERSAND_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21073__$1,cljs.core.constant$keyword$348);return console.log(cljs.core.clj__GT_js(args));
}));
clustermap.app.history = (new goog.History());
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){console.log(e);
return secretary.core.dispatch_BANG_(e.token);
}));
clustermap.app.history.setEnabled(true);
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21093){var state_val_21094 = (state_21093[1]);if((state_val_21094 === 2))
{var inst_21090 = (state_21093[2]);var inst_21091 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$267,inst_21090], 0));var state_21093__$1 = state_21093;return cljs.core.async.impl.ioc_helpers.return_chan(state_21093__$1,inst_21091);
} else
{if((state_val_21094 === 1))
{var inst_21088 = clustermap.api.portfolio_company_stats();var state_21093__$1 = state_21093;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21093__$1,2,inst_21088);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21098 = [null,null,null,null,null,null,null];(statearr_21098[0] = state_machine__5507__auto__);
(statearr_21098[1] = 1);
return statearr_21098;
});
var state_machine__5507__auto____1 = (function (state_21093){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21093);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21099){if((e21099 instanceof Object))
{var ex__5510__auto__ = e21099;var statearr_21100_21102 = state_21093;(statearr_21100_21102[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21093);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e21099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__21103 = state_21093;
state_21093 = G__21103;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21093){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21101 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21123){var state_val_21124 = (state_21123[1]);if((state_val_21124 === 2))
{var inst_21120 = (state_21123[2]);var inst_21121 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$342,inst_21120], 0));var state_21123__$1 = state_21123;return cljs.core.async.impl.ioc_helpers.return_chan(state_21123__$1,inst_21121);
} else
{if((state_val_21124 === 1))
{var inst_21118 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$212,true], 0));var state_21123__$1 = state_21123;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21123__$1,2,inst_21118);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21128 = [null,null,null,null,null,null,null];(statearr_21128[0] = state_machine__5507__auto__);
(statearr_21128[1] = 1);
return statearr_21128;
});
var state_machine__5507__auto____1 = (function (state_21123){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21123);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21129){if((e21129 instanceof Object))
{var ex__5510__auto__ = e21129;var statearr_21130_21132 = state_21123;(statearr_21130_21132[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21123);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e21129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__21133 = state_21123;
state_21123 = G__21133;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21123){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21131 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$327,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21134,type){var vec__21136 = p__21134;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21136,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21136,1,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21136,2,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21136,3,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21136,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21136,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$222,type,cljs.core.constant$keyword$192,selection], null),cljs.core.constant$keyword$266,selection_portfolio_company_stats,cljs.core.constant$keyword$265,selection_portfolio_company_site_stats,cljs.core.constant$keyword$322,selection_portfolio_company_sites,cljs.core.constant$keyword$312,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$343,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__21137){var vec__21145 = p__21137;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21145,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21145,1,null);var id = (function (){var pred__21146 = cljs.core._EQ_;var expr__21147 = type;if(cljs.core.truth_((pred__21146.cljs$core$IFn$_invoke$arity$2 ? pred__21146.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$257,expr__21147) : pred__21146.call(null,cljs.core.constant$keyword$257,expr__21147))))
{return cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__21146.cljs$core$IFn$_invoke$arity$2 ? pred__21146.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$258,expr__21147) : pred__21146.call(null,cljs.core.constant$keyword$258,expr__21147))))
{return cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__21146.cljs$core$IFn$_invoke$arity$2 ? pred__21146.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$259,expr__21147) : pred__21146.call(null,cljs.core.constant$keyword$259,expr__21147))))
{return cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(val);
} else
{return null;
}
}
}
})();var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$346,selector], 0));
var pred__21149 = cljs.core._EQ_;var expr__21150 = type;if(cljs.core.truth_((pred__21149.cljs$core$IFn$_invoke$arity$2 ? pred__21149.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$257,expr__21150) : pred__21149.call(null,cljs.core.constant$keyword$257,expr__21150))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21149.cljs$core$IFn$_invoke$arity$2 ? pred__21149.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$258,expr__21150) : pred__21149.call(null,cljs.core.constant$keyword$258,expr__21150))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21149.cljs$core$IFn$_invoke$arity$2 ? pred__21149.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$259,expr__21150) : pred__21149.call(null,cljs.core.constant$keyword$259,expr__21150))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null,clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){return clustermap.nav.change_view(view);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$326,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$239,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$261,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();clustermap.nav.init(comm);
clustermap.app.load_all_portfolio_company_stats();
clustermap.app.load_uk_constituencies();
clustermap.app.handle_event(cljs.core.constant$keyword$239,null);
clustermap.components.map.mount(clustermap.app.state,"map-component",comm);
clustermap.components.search.mount(clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",comm);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",comm);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",comm);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21198){var state_val_21199 = (state_21198[1]);if((state_val_21199 === 7))
{var inst_21187 = (state_21198[2]);var inst_21188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21187,0,null);var inst_21189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21187,1,null);var inst_21190 = clustermap.app.handle_event(inst_21188,inst_21189);var state_21198__$1 = (function (){var statearr_21200 = state_21198;(statearr_21200[7] = inst_21190);
return statearr_21200;
})();var statearr_21201_21214 = state_21198__$1;(statearr_21201_21214[2] = null);
(statearr_21201_21214[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_21199 === 6))
{var inst_21194 = (state_21198[2]);var state_21198__$1 = state_21198;var statearr_21202_21215 = state_21198__$1;(statearr_21202_21215[2] = inst_21194);
(statearr_21202_21215[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_21199 === 5))
{var state_21198__$1 = state_21198;var statearr_21203_21216 = state_21198__$1;(statearr_21203_21216[2] = null);
(statearr_21203_21216[1] = 6);
return cljs.core.constant$keyword$198;
} else
{if((state_val_21199 === 4))
{var state_21198__$1 = state_21198;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21198__$1,7,comm);
} else
{if((state_val_21199 === 3))
{var inst_21196 = (state_21198[2]);var state_21198__$1 = state_21198;return cljs.core.async.impl.ioc_helpers.return_chan(state_21198__$1,inst_21196);
} else
{if((state_val_21199 === 2))
{var state_21198__$1 = state_21198;if(true)
{var statearr_21204_21217 = state_21198__$1;(statearr_21204_21217[1] = 4);
} else
{var statearr_21205_21218 = state_21198__$1;(statearr_21205_21218[1] = 5);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_21199 === 1))
{var state_21198__$1 = state_21198;var statearr_21206_21219 = state_21198__$1;(statearr_21206_21219[2] = null);
(statearr_21206_21219[1] = 2);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_21210 = [null,null,null,null,null,null,null,null];(statearr_21210[0] = state_machine__5507__auto__);
(statearr_21210[1] = 1);
return statearr_21210;
});
var state_machine__5507__auto____1 = (function (state_21198){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21198);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21211){if((e21211 instanceof Object))
{var ex__5510__auto__ = e21211;var statearr_21212_21220 = state_21198;(statearr_21212_21220[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21198);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e21211;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__21221 = state_21198;
state_21198 = G__21221;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21198){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21213 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21213;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
