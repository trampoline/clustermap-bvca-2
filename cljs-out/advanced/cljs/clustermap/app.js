// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.boundarylines');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.full_report');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.components.map');
goog.require('om.core');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.map');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$233,null,cljs.core.constant$keyword$284,null,cljs.core.constant$keyword$267,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$285,null,cljs.core.constant$keyword$229,null,cljs.core.constant$keyword$232,null,cljs.core.constant$keyword$262,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$281,null], null));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__20411){var vec__20412 = p__20411;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20412,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20412,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__20413){var map__20415 = p__20413;var map__20415__$1 = ((cljs.core.seq_QMARK_(map__20415))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20415):map__20415);var path_values = map__20415__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.state,(function (s){return clustermap.app.new_state(s,path_values);
}));
};
var set_state = function (var_args){
var p__20413 = null;if (arguments.length > 0) {
  p__20413 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__20413);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__20416){
var p__20413 = cljs.core.seq(arglist__20416);
return set_state__delegate(p__20413);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20436){var state_val_20437 = (state_20436[1]);if((state_val_20437 === 2))
{var inst_20433 = (state_20436[2]);var inst_20434 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$233,inst_20433], 0));var state_20436__$1 = state_20436;return cljs.core.async.impl.ioc_helpers.return_chan(state_20436__$1,inst_20434);
} else
{if((state_val_20437 === 1))
{var inst_20431 = clustermap.api.portfolio_company_stats();var state_20436__$1 = state_20436;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20436__$1,2,inst_20431);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20441 = [null,null,null,null,null,null,null];(statearr_20441[0] = state_machine__5507__auto__);
(statearr_20441[1] = 1);
return statearr_20441;
});
var state_machine__5507__auto____1 = (function (state_20436){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20436);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20442){if((e20442 instanceof Object))
{var ex__5510__auto__ = e20442;var statearr_20443_20445 = state_20436;(statearr_20443_20445[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20436);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e20442;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__20446 = state_20436;
state_20436 = G__20446;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20436){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20444 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20466){var state_val_20467 = (state_20466[1]);if((state_val_20467 === 2))
{var inst_20463 = (state_20466[2]);var inst_20464 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$284,inst_20463], 0));var state_20466__$1 = state_20466;return cljs.core.async.impl.ioc_helpers.return_chan(state_20466__$1,inst_20464);
} else
{if((state_val_20467 === 1))
{var inst_20461 = clustermap.api.boundaryline_collections.cljs$core$IFn$_invoke$arity$variadic("uk_constituencies",cljs.core.array_seq([cljs.core.constant$keyword$181,true], 0));var state_20466__$1 = state_20466;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20466__$1,2,inst_20461);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20471 = [null,null,null,null,null,null,null];(statearr_20471[0] = state_machine__5507__auto__);
(statearr_20471[1] = 1);
return statearr_20471;
});
var state_machine__5507__auto____1 = (function (state_20466){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20466);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20472){if((e20472 instanceof Object))
{var ex__5510__auto__ = e20472;var statearr_20473_20475 = state_20466;(statearr_20473_20475[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20466);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e20472;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__20476 = state_20466;
state_20466 = G__20476;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20466){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20474 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$267,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__20477,type){var vec__20479 = p__20477;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20479,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20479,1,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20479,2,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20479,3,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$229,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$191,type,cljs.core.constant$keyword$161,selection], null),cljs.core.constant$keyword$232,selection_portfolio_company_stats,cljs.core.constant$keyword$262,selection_portfolio_company_sites,cljs.core.constant$keyword$281,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__20480){var vec__20488 = p__20480;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20488,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20488,1,null);var id = (function (){var pred__20489 = cljs.core._EQ_;var expr__20490 = type;if(cljs.core.truth_((pred__20489.cljs$core$IFn$_invoke$arity$2 ? pred__20489.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$226,expr__20490) : pred__20489.call(null,cljs.core.constant$keyword$226,expr__20490))))
{return cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__20489.cljs$core$IFn$_invoke$arity$2 ? pred__20489.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$227,expr__20490) : pred__20489.call(null,cljs.core.constant$keyword$227,expr__20490))))
{return cljs.core.constant$keyword$202.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__20489.cljs$core$IFn$_invoke$arity$2 ? pred__20489.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$228,expr__20490) : pred__20489.call(null,cljs.core.constant$keyword$228,expr__20490))))
{return cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(val);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20490)].join('')));
}
}
}
})();var selector = new cljs.core.PersistentArrayMap.fromArray([type,id], true, false);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$285,selector], 0));
var pred__20492 = cljs.core._EQ_;var expr__20493 = type;if(cljs.core.truth_((pred__20492.cljs$core$IFn$_invoke$arity$2 ? pred__20492.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$226,expr__20493) : pred__20492.call(null,cljs.core.constant$keyword$226,expr__20493))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__20492.cljs$core$IFn$_invoke$arity$2 ? pred__20492.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$227,expr__20493) : pred__20492.call(null,cljs.core.constant$keyword$227,expr__20493))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__20492.cljs$core$IFn$_invoke$arity$2 ? pred__20492.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$228,expr__20493) : pred__20492.call(null,cljs.core.constant$keyword$228,expr__20493))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return null;
}
}
}
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$208,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection)], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.init = (function init(){clustermap.app.load_all_portfolio_company_stats();
clustermap.app.load_uk_constituencies();
var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();clustermap.components.map.mount(clustermap.app.state,"map-component",comm);
clustermap.components.search.mount(clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component");
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component");
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component");
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20541){var state_val_20542 = (state_20541[1]);if((state_val_20542 === 7))
{var inst_20530 = (state_20541[2]);var inst_20531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20530,0,null);var inst_20532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20530,1,null);var inst_20533 = clustermap.app.handle_event(inst_20531,inst_20532);var state_20541__$1 = (function (){var statearr_20543 = state_20541;(statearr_20543[7] = inst_20533);
return statearr_20543;
})();var statearr_20544_20557 = state_20541__$1;(statearr_20544_20557[2] = null);
(statearr_20544_20557[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_20542 === 6))
{var inst_20537 = (state_20541[2]);var state_20541__$1 = state_20541;var statearr_20545_20558 = state_20541__$1;(statearr_20545_20558[2] = inst_20537);
(statearr_20545_20558[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_20542 === 5))
{var state_20541__$1 = state_20541;var statearr_20546_20559 = state_20541__$1;(statearr_20546_20559[2] = null);
(statearr_20546_20559[1] = 6);
return cljs.core.constant$keyword$167;
} else
{if((state_val_20542 === 4))
{var state_20541__$1 = state_20541;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20541__$1,7,comm);
} else
{if((state_val_20542 === 3))
{var inst_20539 = (state_20541[2]);var state_20541__$1 = state_20541;return cljs.core.async.impl.ioc_helpers.return_chan(state_20541__$1,inst_20539);
} else
{if((state_val_20542 === 2))
{var state_20541__$1 = state_20541;if(true)
{var statearr_20547_20560 = state_20541__$1;(statearr_20547_20560[1] = 4);
} else
{var statearr_20548_20561 = state_20541__$1;(statearr_20548_20561[1] = 5);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_20542 === 1))
{var state_20541__$1 = state_20541;var statearr_20549_20562 = state_20541__$1;(statearr_20549_20562[2] = null);
(statearr_20549_20562[1] = 2);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_20553 = [null,null,null,null,null,null,null,null];(statearr_20553[0] = state_machine__5507__auto__);
(statearr_20553[1] = 1);
return statearr_20553;
});
var state_machine__5507__auto____1 = (function (state_20541){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20541);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20554){if((e20554 instanceof Object))
{var ex__5510__auto__ = e20554;var statearr_20555_20563 = state_20541;(statearr_20555_20563[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20541);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e20554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__20564 = state_20541;
state_20541 = G__20564;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20541){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20556 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
