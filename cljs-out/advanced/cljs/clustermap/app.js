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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$222,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$191,null,cljs.core.constant$keyword$208,null,cljs.core.constant$keyword$223,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$207,null,cljs.core.constant$keyword$220,cljs.core.PersistentArrayMap.EMPTY], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.state,(function (s){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,key,value);
}));
});
clustermap.app.load_all_portfolio_company_stats = (function load_all_portfolio_company_stats(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20352){var state_val_20353 = (state_20352[1]);if((state_val_20353 === 2))
{var inst_20349 = (state_20352[2]);var inst_20350 = clustermap.app.set_state(cljs.core.constant$keyword$207,inst_20349);var state_20352__$1 = state_20352;return cljs.core.async.impl.ioc_helpers.return_chan(state_20352__$1,inst_20350);
} else
{if((state_val_20353 === 1))
{var inst_20347 = clustermap.api.portfolio_company_stats();var state_20352__$1 = state_20352;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20352__$1,2,inst_20347);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20357 = [null,null,null,null,null,null,null];(statearr_20357[0] = state_machine__5507__auto__);
(statearr_20357[1] = 1);
return statearr_20357;
});
var state_machine__5507__auto____1 = (function (state_20352){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20352);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20358){if((e20358 instanceof Object))
{var ex__5510__auto__ = e20358;var statearr_20359_20361 = state_20352;(statearr_20359_20361[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20352);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e20358;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__20362 = state_20352;
state_20352 = G__20362;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20352){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20360 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20360;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state(cljs.core.constant$keyword$220,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results));
});
clustermap.app.process_selection = (function process_selection(p__20363,type){var vec__20365 = p__20363;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20365,0,null);var selection_portfolio_company_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20365,1,null);clustermap.app.set_state(cljs.core.constant$keyword$191,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$158,type,cljs.core.constant$keyword$129,selection], null));
return clustermap.app.set_state(cljs.core.constant$keyword$208,selection_portfolio_company_stats);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__20366){var vec__20374 = p__20366;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20374,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20374,1,null);var id = (function (){var pred__20375 = cljs.core._EQ_;var expr__20376 = type;if(cljs.core.truth_((pred__20375.cljs$core$IFn$_invoke$arity$2 ? pred__20375.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$203,expr__20376) : pred__20375.call(null,cljs.core.constant$keyword$203,expr__20376))))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,"company_no");
} else
{if(cljs.core.truth_((pred__20375.cljs$core$IFn$_invoke$arity$2 ? pred__20375.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$205,expr__20376) : pred__20375.call(null,cljs.core.constant$keyword$205,expr__20376))))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,"name");
} else
{if(cljs.core.truth_((pred__20375.cljs$core$IFn$_invoke$arity$2 ? pred__20375.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$206,expr__20376) : pred__20375.call(null,cljs.core.constant$keyword$206,expr__20376))))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,"boundaryline_id");
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20376)].join('')));
}
}
}
})();var selector = new cljs.core.PersistentArrayMap.fromArray([type,id], true, false);clustermap.app.set_state(cljs.core.constant$keyword$222,selector);
var pred__20378 = cljs.core._EQ_;var expr__20379 = type;if(cljs.core.truth_((pred__20378.cljs$core$IFn$_invoke$arity$2 ? pred__20378.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$203,expr__20379) : pred__20378.call(null,cljs.core.constant$keyword$203,expr__20379))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__20378.cljs$core$IFn$_invoke$arity$2 ? pred__20378.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$205,expr__20379) : pred__20378.call(null,cljs.core.constant$keyword$205,expr__20379))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__20378.cljs$core$IFn$_invoke$arity$2 ? pred__20378.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$206,expr__20379) : pred__20378.call(null,cljs.core.constant$keyword$206,expr__20379))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return null;
}
}
}
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$175,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection)], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state(cljs.core.constant$keyword$224,clustermap.map.create_map());
clustermap.app.load_all_portfolio_company_stats();
var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();clustermap.components.search.mount(clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component");
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component");
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component");
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20427){var state_val_20428 = (state_20427[1]);if((state_val_20428 === 7))
{var inst_20416 = (state_20427[2]);var inst_20417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20416,0,null);var inst_20418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20416,1,null);var inst_20419 = clustermap.app.handle_event(inst_20417,inst_20418);var state_20427__$1 = (function (){var statearr_20429 = state_20427;(statearr_20429[7] = inst_20419);
return statearr_20429;
})();var statearr_20430_20443 = state_20427__$1;(statearr_20430_20443[2] = null);
(statearr_20430_20443[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_20428 === 6))
{var inst_20423 = (state_20427[2]);var state_20427__$1 = state_20427;var statearr_20431_20444 = state_20427__$1;(statearr_20431_20444[2] = inst_20423);
(statearr_20431_20444[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_20428 === 5))
{var state_20427__$1 = state_20427;var statearr_20432_20445 = state_20427__$1;(statearr_20432_20445[2] = null);
(statearr_20432_20445[1] = 6);
return cljs.core.constant$keyword$135;
} else
{if((state_val_20428 === 4))
{var state_20427__$1 = state_20427;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20427__$1,7,comm);
} else
{if((state_val_20428 === 3))
{var inst_20425 = (state_20427[2]);var state_20427__$1 = state_20427;return cljs.core.async.impl.ioc_helpers.return_chan(state_20427__$1,inst_20425);
} else
{if((state_val_20428 === 2))
{var state_20427__$1 = state_20427;if(true)
{var statearr_20433_20446 = state_20427__$1;(statearr_20433_20446[1] = 4);
} else
{var statearr_20434_20447 = state_20427__$1;(statearr_20434_20447[1] = 5);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_20428 === 1))
{var state_20427__$1 = state_20427;var statearr_20435_20448 = state_20427__$1;(statearr_20435_20448[2] = null);
(statearr_20435_20448[1] = 2);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_20439 = [null,null,null,null,null,null,null,null];(statearr_20439[0] = state_machine__5507__auto__);
(statearr_20439[1] = 1);
return statearr_20439;
});
var state_machine__5507__auto____1 = (function (state_20427){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20427);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20440){if((e20440 instanceof Object))
{var ex__5510__auto__ = e20440;var statearr_20441_20449 = state_20427;(statearr_20441_20449[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20427);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e20440;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__20450 = state_20427;
state_20427 = G__20450;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20427){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20442 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20442;
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
