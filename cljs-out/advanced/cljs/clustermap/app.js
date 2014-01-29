// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('clustermap.nav');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.boundarylines');
goog.require('goog.History');
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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$262,cljs.core.constant$keyword$309,cljs.core.constant$keyword$340,cljs.core.constant$keyword$264,cljs.core.constant$keyword$344,cljs.core.constant$keyword$259,cljs.core.constant$keyword$319,cljs.core.constant$keyword$341,cljs.core.constant$keyword$325,cljs.core.constant$keyword$263],[null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21080){var vec__21081 = p__21080;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21081,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21081,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21082){var map__21084 = p__21082;var map__21084__$1 = ((cljs.core.seq_QMARK_(map__21084))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21084):map__21084);var path_values = map__21084__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21082 = null;if (arguments.length > 0) {
  p__21082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21082);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21085){
var p__21082 = cljs.core.seq(arglist__21085);
return set_state__delegate(p__21082);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9246__auto__){var map__21086 = params__9246__auto__;var map__21086__$1 = ((cljs.core.seq_QMARK_(map__21086))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21086):map__21086);var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21086__$1,cljs.core.constant$keyword$345);var _AMPERSAND_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21086__$1,cljs.core.constant$keyword$346);return console.log(cljs.core.clj__GT_js(args));
}));
clustermap.app.history = (new goog.History());
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){console.log(e);
return secretary.core.dispatch_BANG_(e.token);
}));
clustermap.app.history.setEnabled(true);
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21106){var state_val_21107 = (state_21106[1]);if((state_val_21107 === 2))
{var inst_21103 = (state_21106[2]);var inst_21104 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$264,inst_21103], 0));var state_21106__$1 = state_21106;return cljs.core.async.impl.ioc_helpers.return_chan(state_21106__$1,inst_21104);
} else
{if((state_val_21107 === 1))
{var inst_21101 = clustermap.api.portfolio_company_stats();var state_21106__$1 = state_21106;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21106__$1,2,inst_21101);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21111 = [null,null,null,null,null,null,null];(statearr_21111[0] = state_machine__5507__auto__);
(statearr_21111[1] = 1);
return statearr_21111;
});
var state_machine__5507__auto____1 = (function (state_21106){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21106);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21112){if((e21112 instanceof Object))
{var ex__5510__auto__ = e21112;var statearr_21113_21115 = state_21106;(statearr_21113_21115[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21106);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e21112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__21116 = state_21106;
state_21106 = G__21116;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21106){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21114 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21136){var state_val_21137 = (state_21136[1]);if((state_val_21137 === 2))
{var inst_21133 = (state_21136[2]);var inst_21134 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$340,inst_21133], 0));var state_21136__$1 = state_21136;return cljs.core.async.impl.ioc_helpers.return_chan(state_21136__$1,inst_21134);
} else
{if((state_val_21137 === 1))
{var inst_21131 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$211,true], 0));var state_21136__$1 = state_21136;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21136__$1,2,inst_21131);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21141 = [null,null,null,null,null,null,null];(statearr_21141[0] = state_machine__5507__auto__);
(statearr_21141[1] = 1);
return statearr_21141;
});
var state_machine__5507__auto____1 = (function (state_21136){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21136);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21142){if((e21142 instanceof Object))
{var ex__5510__auto__ = e21142;var statearr_21143_21145 = state_21136;(statearr_21143_21145[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21136);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e21142;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__21146 = state_21136;
state_21136 = G__21146;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21136){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21144 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$325,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21147,type){var vec__21149 = p__21147;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21149,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21149,1,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21149,2,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21149,3,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21149,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21149,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,type,cljs.core.constant$keyword$191,selection], null),cljs.core.constant$keyword$263,selection_portfolio_company_stats,cljs.core.constant$keyword$262,selection_portfolio_company_site_stats,cljs.core.constant$keyword$319,selection_portfolio_company_sites,cljs.core.constant$keyword$309,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$341,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__21150){var vec__21158 = p__21150;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21158,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21158,1,null);var id = (function (){var pred__21159 = cljs.core._EQ_;var expr__21160 = type;if(cljs.core.truth_((pred__21159.cljs$core$IFn$_invoke$arity$2 ? pred__21159.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$256,expr__21160) : pred__21159.call(null,cljs.core.constant$keyword$256,expr__21160))))
{return cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__21159.cljs$core$IFn$_invoke$arity$2 ? pred__21159.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$257,expr__21160) : pred__21159.call(null,cljs.core.constant$keyword$257,expr__21160))))
{return cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__21159.cljs$core$IFn$_invoke$arity$2 ? pred__21159.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$258,expr__21160) : pred__21159.call(null,cljs.core.constant$keyword$258,expr__21160))))
{return cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(val);
} else
{return null;
}
}
}
})();var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$344,selector], 0));
var pred__21162 = cljs.core._EQ_;var expr__21163 = type;if(cljs.core.truth_((pred__21162.cljs$core$IFn$_invoke$arity$2 ? pred__21162.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$256,expr__21163) : pred__21162.call(null,cljs.core.constant$keyword$256,expr__21163))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21162.cljs$core$IFn$_invoke$arity$2 ? pred__21162.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$257,expr__21163) : pred__21162.call(null,cljs.core.constant$keyword$257,expr__21163))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21162.cljs$core$IFn$_invoke$arity$2 ? pred__21162.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$258,expr__21163) : pred__21162.call(null,cljs.core.constant$keyword$258,expr__21163))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null,clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$324,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$238,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection)], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init = (function init(){clustermap.app.load_all_portfolio_company_stats();
clustermap.app.load_uk_constituencies();
clustermap.app.handle_event(cljs.core.constant$keyword$238,null);
var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();clustermap.components.map.mount(clustermap.app.state,"map-component",comm);
clustermap.components.search.mount(clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component");
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component");
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component");
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21211){var state_val_21212 = (state_21211[1]);if((state_val_21212 === 7))
{var inst_21200 = (state_21211[2]);var inst_21201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21200,0,null);var inst_21202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21200,1,null);var inst_21203 = clustermap.app.handle_event(inst_21201,inst_21202);var state_21211__$1 = (function (){var statearr_21213 = state_21211;(statearr_21213[7] = inst_21203);
return statearr_21213;
})();var statearr_21214_21227 = state_21211__$1;(statearr_21214_21227[2] = null);
(statearr_21214_21227[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_21212 === 6))
{var inst_21207 = (state_21211[2]);var state_21211__$1 = state_21211;var statearr_21215_21228 = state_21211__$1;(statearr_21215_21228[2] = inst_21207);
(statearr_21215_21228[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_21212 === 5))
{var state_21211__$1 = state_21211;var statearr_21216_21229 = state_21211__$1;(statearr_21216_21229[2] = null);
(statearr_21216_21229[1] = 6);
return cljs.core.constant$keyword$197;
} else
{if((state_val_21212 === 4))
{var state_21211__$1 = state_21211;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21211__$1,7,comm);
} else
{if((state_val_21212 === 3))
{var inst_21209 = (state_21211[2]);var state_21211__$1 = state_21211;return cljs.core.async.impl.ioc_helpers.return_chan(state_21211__$1,inst_21209);
} else
{if((state_val_21212 === 2))
{var state_21211__$1 = state_21211;if(true)
{var statearr_21217_21230 = state_21211__$1;(statearr_21217_21230[1] = 4);
} else
{var statearr_21218_21231 = state_21211__$1;(statearr_21218_21231[1] = 5);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_21212 === 1))
{var state_21211__$1 = state_21211;var statearr_21219_21232 = state_21211__$1;(statearr_21219_21232[2] = null);
(statearr_21219_21232[1] = 2);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_21223 = [null,null,null,null,null,null,null,null];(statearr_21223[0] = state_machine__5507__auto__);
(statearr_21223[1] = 1);
return statearr_21223;
});
var state_machine__5507__auto____1 = (function (state_21211){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21211);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21224){if((e21224 instanceof Object))
{var ex__5510__auto__ = e21224;var statearr_21225_21233 = state_21211;(statearr_21225_21233[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21211);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e21224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__21234 = state_21211;
state_21211 = G__21234;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21211){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21226 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
