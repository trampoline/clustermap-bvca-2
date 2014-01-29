// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.boundarylines');
goog.require('clustermap.nav');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.full_report');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
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
goog.require('cljs.core.async');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.map');
goog.require('secretary.core');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$263,cljs.core.constant$keyword$310,cljs.core.constant$keyword$340,cljs.core.constant$keyword$265,cljs.core.constant$keyword$344,cljs.core.constant$keyword$260,cljs.core.constant$keyword$320,cljs.core.constant$keyword$341,cljs.core.constant$keyword$325,cljs.core.constant$keyword$264],[null,null,null,null,null,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__21084){var vec__21085 = p__21084;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21085,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21085,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__21086){var map__21088 = p__21086;var map__21088__$1 = ((cljs.core.seq_QMARK_(map__21088))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21088):map__21088);var path_values = map__21088__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__21086 = null;if (arguments.length > 0) {
  p__21086 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__21086);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__21089){
var p__21086 = cljs.core.seq(arglist__21089);
return set_state__delegate(p__21086);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21109){var state_val_21110 = (state_21109[1]);if((state_val_21110 === 2))
{var inst_21106 = (state_21109[2]);var inst_21107 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$265,inst_21106], 0));var state_21109__$1 = state_21109;return cljs.core.async.impl.ioc_helpers.return_chan(state_21109__$1,inst_21107);
} else
{if((state_val_21110 === 1))
{var inst_21104 = clustermap.api.portfolio_company_stats();var state_21109__$1 = state_21109;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21109__$1,2,inst_21104);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21114 = [null,null,null,null,null,null,null];(statearr_21114[0] = state_machine__5507__auto__);
(statearr_21114[1] = 1);
return statearr_21114;
});
var state_machine__5507__auto____1 = (function (state_21109){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21109);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21115){if((e21115 instanceof Object))
{var ex__5510__auto__ = e21115;var statearr_21116_21118 = state_21109;(statearr_21116_21118[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21109);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e21115;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__21119 = state_21109;
state_21109 = G__21119;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21109){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21117 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21139){var state_val_21140 = (state_21139[1]);if((state_val_21140 === 2))
{var inst_21136 = (state_21139[2]);var inst_21137 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$340,inst_21136], 0));var state_21139__$1 = state_21139;return cljs.core.async.impl.ioc_helpers.return_chan(state_21139__$1,inst_21137);
} else
{if((state_val_21140 === 1))
{var inst_21134 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$210,true], 0));var state_21139__$1 = state_21139;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21139__$1,2,inst_21134);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21144 = [null,null,null,null,null,null,null];(statearr_21144[0] = state_machine__5507__auto__);
(statearr_21144[1] = 1);
return statearr_21144;
});
var state_machine__5507__auto____1 = (function (state_21139){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21139);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21145){if((e21145 instanceof Object))
{var ex__5510__auto__ = e21145;var statearr_21146_21148 = state_21139;(statearr_21146_21148[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21139);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e21145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__21149 = state_21139;
state_21139 = G__21149;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21139){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21147 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$325,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__21150,type){var vec__21152 = p__21150;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21152,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21152,1,null);var selection_portfolio_company_site_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21152,2,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21152,3,null);var selection_portfolio_company_site_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21152,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21152,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$220,type,cljs.core.constant$keyword$190,selection], null),cljs.core.constant$keyword$264,selection_portfolio_company_stats,cljs.core.constant$keyword$263,selection_portfolio_company_site_stats,cljs.core.constant$keyword$320,selection_portfolio_company_sites,cljs.core.constant$keyword$310,selection_portfolio_company_site_account_timelines,cljs.core.constant$keyword$341,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__21153){var vec__21161 = p__21153;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21161,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21161,1,null);var id = (function (){var pred__21162 = cljs.core._EQ_;var expr__21163 = type;if(cljs.core.truth_((pred__21162.cljs$core$IFn$_invoke$arity$2 ? pred__21162.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$255,expr__21163) : pred__21162.call(null,cljs.core.constant$keyword$255,expr__21163))))
{return cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__21162.cljs$core$IFn$_invoke$arity$2 ? pred__21162.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$256,expr__21163) : pred__21162.call(null,cljs.core.constant$keyword$256,expr__21163))))
{return cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__21162.cljs$core$IFn$_invoke$arity$2 ? pred__21162.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$257,expr__21163) : pred__21162.call(null,cljs.core.constant$keyword$257,expr__21163))))
{return cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(val);
} else
{return null;
}
}
}
})();var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$344,selector], 0));
var pred__21165 = cljs.core._EQ_;var expr__21166 = type;if(cljs.core.truth_((pred__21165.cljs$core$IFn$_invoke$arity$2 ? pred__21165.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$255,expr__21166) : pred__21165.call(null,cljs.core.constant$keyword$255,expr__21166))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21165.cljs$core$IFn$_invoke$arity$2 ? pred__21165.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$256,expr__21166) : pred__21165.call(null,cljs.core.constant$keyword$256,expr__21166))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__21165.cljs$core$IFn$_invoke$arity$2 ? pred__21165.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$257,expr__21166) : pred__21165.call(null,cljs.core.constant$keyword$257,expr__21166))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null,clustermap.api.portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
});
clustermap.app.change_view = (function change_view(view){return clustermap.nav.change_view(view);
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$324,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$237,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection),cljs.core.constant$keyword$259,clustermap.app.change_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();clustermap.nav.init(comm);
clustermap.app.load_all_portfolio_company_stats();
clustermap.app.load_uk_constituencies();
clustermap.app.handle_event(cljs.core.constant$keyword$237,null);
clustermap.components.map.mount(clustermap.app.state,"map-component",comm);
clustermap.components.search.mount(clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component",comm);
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component",comm);
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component",comm);
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21214){var state_val_21215 = (state_21214[1]);if((state_val_21215 === 7))
{var inst_21203 = (state_21214[2]);var inst_21204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21203,0,null);var inst_21205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21203,1,null);var inst_21206 = clustermap.app.handle_event(inst_21204,inst_21205);var state_21214__$1 = (function (){var statearr_21216 = state_21214;(statearr_21216[7] = inst_21206);
return statearr_21216;
})();var statearr_21217_21230 = state_21214__$1;(statearr_21217_21230[2] = null);
(statearr_21217_21230[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_21215 === 6))
{var inst_21210 = (state_21214[2]);var state_21214__$1 = state_21214;var statearr_21218_21231 = state_21214__$1;(statearr_21218_21231[2] = inst_21210);
(statearr_21218_21231[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_21215 === 5))
{var state_21214__$1 = state_21214;var statearr_21219_21232 = state_21214__$1;(statearr_21219_21232[2] = null);
(statearr_21219_21232[1] = 6);
return cljs.core.constant$keyword$196;
} else
{if((state_val_21215 === 4))
{var state_21214__$1 = state_21214;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21214__$1,7,comm);
} else
{if((state_val_21215 === 3))
{var inst_21212 = (state_21214[2]);var state_21214__$1 = state_21214;return cljs.core.async.impl.ioc_helpers.return_chan(state_21214__$1,inst_21212);
} else
{if((state_val_21215 === 2))
{var state_21214__$1 = state_21214;if(true)
{var statearr_21220_21233 = state_21214__$1;(statearr_21220_21233[1] = 4);
} else
{var statearr_21221_21234 = state_21214__$1;(statearr_21221_21234[1] = 5);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_21215 === 1))
{var state_21214__$1 = state_21214;var statearr_21222_21235 = state_21214__$1;(statearr_21222_21235[2] = null);
(statearr_21222_21235[1] = 2);
return cljs.core.constant$keyword$196;
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
var state_machine__5507__auto____0 = (function (){var statearr_21226 = [null,null,null,null,null,null,null,null];(statearr_21226[0] = state_machine__5507__auto__);
(statearr_21226[1] = 1);
return statearr_21226;
});
var state_machine__5507__auto____1 = (function (state_21214){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21214);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21227){if((e21227 instanceof Object))
{var ex__5510__auto__ = e21227;var statearr_21228_21236 = state_21214;(statearr_21228_21236[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21214);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e21227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__21237 = state_21214;
state_21214 = G__21237;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21214){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21229 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
