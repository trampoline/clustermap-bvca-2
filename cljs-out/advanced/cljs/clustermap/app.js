// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.full_report');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('om.core');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('clustermap.components.map_report');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$269,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$218,null,cljs.core.constant$keyword$236,null,cljs.core.constant$keyword$253,null,cljs.core.constant$keyword$235,null,cljs.core.constant$keyword$259,cljs.core.PersistentArrayMap.EMPTY], null));
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__20434){var map__20436 = p__20434;var map__20436__$1 = ((cljs.core.seq_QMARK_(map__20436))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20436):map__20436);var key_values = map__20436__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.state,(function (s){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,key_values], 0));
}));
};
var set_state = function (var_args){
var p__20434 = null;if (arguments.length > 0) {
  p__20434 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__20434);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__20437){
var p__20434 = cljs.core.seq(arglist__20437);
return set_state__delegate(p__20434);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20457){var state_val_20458 = (state_20457[1]);if((state_val_20458 === 2))
{var inst_20454 = (state_20457[2]);var inst_20455 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$235,inst_20454], 0));var state_20457__$1 = state_20457;return cljs.core.async.impl.ioc_helpers.return_chan(state_20457__$1,inst_20455);
} else
{if((state_val_20458 === 1))
{var inst_20452 = clustermap.api.portfolio_company_stats();var state_20457__$1 = state_20457;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20457__$1,2,inst_20452);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20462 = [null,null,null,null,null,null,null];(statearr_20462[0] = state_machine__5507__auto__);
(statearr_20462[1] = 1);
return statearr_20462;
});
var state_machine__5507__auto____1 = (function (state_20457){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20457);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20463){if((e20463 instanceof Object))
{var ex__5510__auto__ = e20463;var statearr_20464_20466 = state_20457;(statearr_20464_20466[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20457);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e20463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__20467 = state_20457;
state_20457 = G__20467;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20457){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20465 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$259,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__20468,type){var vec__20470 = p__20468;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20470,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20470,1,null);var selection_portfolio_company_sites = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20470,2,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$218,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$183,type,cljs.core.constant$keyword$153,selection], null),cljs.core.constant$keyword$236,selection_portfolio_company_stats,cljs.core.constant$keyword$253,selection_portfolio_company_sites], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__20471){var vec__20479 = p__20471;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20479,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20479,1,null);var id = (function (){var pred__20480 = cljs.core._EQ_;var expr__20481 = type;if(cljs.core.truth_((pred__20480.cljs$core$IFn$_invoke$arity$2 ? pred__20480.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$230,expr__20481) : pred__20480.call(null,cljs.core.constant$keyword$230,expr__20481))))
{return cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__20480.cljs$core$IFn$_invoke$arity$2 ? pred__20480.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$233,expr__20481) : pred__20480.call(null,cljs.core.constant$keyword$233,expr__20481))))
{return cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(val);
} else
{if(cljs.core.truth_((pred__20480.cljs$core$IFn$_invoke$arity$2 ? pred__20480.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$234,expr__20481) : pred__20480.call(null,cljs.core.constant$keyword$234,expr__20481))))
{return cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(val);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20481)].join('')));
}
}
}
})();var selector = new cljs.core.PersistentArrayMap.fromArray([type,id], true, false);clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$269,selector], 0));
var pred__20483 = cljs.core._EQ_;var expr__20484 = type;if(cljs.core.truth_((pred__20483.cljs$core$IFn$_invoke$arity$2 ? pred__20483.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$230,expr__20484) : pred__20483.call(null,cljs.core.constant$keyword$230,expr__20484))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__20483.cljs$core$IFn$_invoke$arity$2 ? pred__20483.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$233,expr__20484) : pred__20483.call(null,cljs.core.constant$keyword$233,expr__20484))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__20483.cljs$core$IFn$_invoke$arity$2 ? pred__20483.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$234,expr__20484) : pred__20483.call(null,cljs.core.constant$keyword$234,expr__20484))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return null;
}
}
}
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$200,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection)], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$272,clustermap.map.create_map()], 0));
clustermap.app.load_all_portfolio_company_stats();
var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();clustermap.components.search.mount(clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component");
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component");
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component");
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20532){var state_val_20533 = (state_20532[1]);if((state_val_20533 === 7))
{var inst_20521 = (state_20532[2]);var inst_20522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20521,0,null);var inst_20523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20521,1,null);var inst_20524 = clustermap.app.handle_event(inst_20522,inst_20523);var state_20532__$1 = (function (){var statearr_20534 = state_20532;(statearr_20534[7] = inst_20524);
return statearr_20534;
})();var statearr_20535_20548 = state_20532__$1;(statearr_20535_20548[2] = null);
(statearr_20535_20548[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_20533 === 6))
{var inst_20528 = (state_20532[2]);var state_20532__$1 = state_20532;var statearr_20536_20549 = state_20532__$1;(statearr_20536_20549[2] = inst_20528);
(statearr_20536_20549[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_20533 === 5))
{var state_20532__$1 = state_20532;var statearr_20537_20550 = state_20532__$1;(statearr_20537_20550[2] = null);
(statearr_20537_20550[1] = 6);
return cljs.core.constant$keyword$159;
} else
{if((state_val_20533 === 4))
{var state_20532__$1 = state_20532;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20532__$1,7,comm);
} else
{if((state_val_20533 === 3))
{var inst_20530 = (state_20532[2]);var state_20532__$1 = state_20532;return cljs.core.async.impl.ioc_helpers.return_chan(state_20532__$1,inst_20530);
} else
{if((state_val_20533 === 2))
{var state_20532__$1 = state_20532;if(true)
{var statearr_20538_20551 = state_20532__$1;(statearr_20538_20551[1] = 4);
} else
{var statearr_20539_20552 = state_20532__$1;(statearr_20539_20552[1] = 5);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_20533 === 1))
{var state_20532__$1 = state_20532;var statearr_20540_20553 = state_20532__$1;(statearr_20540_20553[2] = null);
(statearr_20540_20553[1] = 2);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_20544 = [null,null,null,null,null,null,null,null];(statearr_20544[0] = state_machine__5507__auto__);
(statearr_20544[1] = 1);
return statearr_20544;
});
var state_machine__5507__auto____1 = (function (state_20532){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20532);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20545){if((e20545 instanceof Object))
{var ex__5510__auto__ = e20545;var statearr_20546_20554 = state_20532;(statearr_20546_20554[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20532);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e20545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__20555 = state_20532;
state_20532 = G__20555;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20532){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20547 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20547;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.init = (function init(){if(cljs.core.truth_(config.repl))
{return setTimeout(clustermap.app.do_init,2000);
} else
{if(true)
{return clustermap.app.do_init();
} else
{return null;
}
}
});
