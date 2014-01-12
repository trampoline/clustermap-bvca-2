// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.search');
goog.require('clustermap.api');
goog.require('clustermap.search');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.map_report');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('om.core');
goog.require('clustermap.map_report');
goog.require('om.dom');
goog.require('cljs.core.async');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$182,null,cljs.core.constant$keyword$198,null,cljs.core.constant$keyword$180,null,cljs.core.constant$keyword$181,null,cljs.core.constant$keyword$173,null], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.state,(function (s){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,key,value);
}));
});
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19348){var state_val_19349 = (state_19348[1]);if((state_val_19349 === 2))
{var inst_19345 = (state_19348[2]);var inst_19346 = clustermap.app.set_state(cljs.core.constant$keyword$180,inst_19345);var state_19348__$1 = state_19348;return cljs.core.async.impl.ioc_helpers.return_chan(state_19348__$1,inst_19346);
} else
{if((state_val_19349 === 1))
{var inst_19343 = clustermap.api.all_portfolio_companies_summary();var state_19348__$1 = state_19348;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19348__$1,2,inst_19343);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19353 = [null,null,null,null,null,null,null];(statearr_19353[0] = state_machine__5507__auto__);
(statearr_19353[1] = 1);
return statearr_19353;
});
var state_machine__5507__auto____1 = (function (state_19348){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19348);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19354){if((e19354 instanceof Object))
{var ex__5510__auto__ = e19354;var statearr_19355_19357 = state_19348;(statearr_19355_19357[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19348);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19354;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19358 = state_19348;
state_19348 = G__19358;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19348){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19356 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19378){var state_val_19379 = (state_19378[1]);if((state_val_19379 === 2))
{var inst_19375 = (state_19378[2]);var inst_19376 = clustermap.app.set_state(cljs.core.constant$keyword$181,inst_19375);var state_19378__$1 = state_19378;return cljs.core.async.impl.ioc_helpers.return_chan(state_19378__$1,inst_19376);
} else
{if((state_val_19379 === 1))
{var inst_19373 = clustermap.api.all_investor_companies_summary();var state_19378__$1 = state_19378;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19378__$1,2,inst_19373);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19383 = [null,null,null,null,null,null,null];(statearr_19383[0] = state_machine__5507__auto__);
(statearr_19383[1] = 1);
return statearr_19383;
});
var state_machine__5507__auto____1 = (function (state_19378){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19378);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19384){if((e19384 instanceof Object))
{var ex__5510__auto__ = e19384;var statearr_19385_19387 = state_19378;(statearr_19385_19387[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19378);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19388 = state_19378;
state_19378 = G__19388;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19378){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19386 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19386;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19419){var state_val_19420 = (state_19419[1]);if((state_val_19420 === 2))
{var inst_19411 = (state_19419[2]);var inst_19412 = clustermap.app.set_state(cljs.core.constant$keyword$198,inst_19411);var inst_19413 = cljs.core.deref(clustermap.app.state);var inst_19414 = cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(inst_19413);var inst_19415 = cljs.core.deref(clustermap.app.state);var inst_19416 = cljs.core.constant$keyword$198.cljs$core$IFn$_invoke$arity$1(inst_19415);var inst_19417 = clustermap.map.display_sites(inst_19414,inst_19416);var state_19419__$1 = (function (){var statearr_19421 = state_19419;(statearr_19421[7] = inst_19412);
return statearr_19421;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_19419__$1,inst_19417);
} else
{if((state_val_19420 === 1))
{var inst_19409 = clustermap.api.all_portfolio_company_sites();var state_19419__$1 = state_19419;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19419__$1,2,inst_19409);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19425 = [null,null,null,null,null,null,null,null];(statearr_19425[0] = state_machine__5507__auto__);
(statearr_19425[1] = 1);
return statearr_19425;
});
var state_machine__5507__auto____1 = (function (state_19419){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19419);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19426){if((e19426 instanceof Object))
{var ex__5510__auto__ = e19426;var statearr_19427_19429 = state_19419;(statearr_19427_19429[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19419);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19430 = state_19419;
state_19419 = G__19430;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19419){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19428 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.process_search_results = (function process_search_results(comm){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19477){var state_val_19478 = (state_19477[1]);if((state_val_19478 === 8))
{var inst_19467 = (state_19477[2]);var inst_19468 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_19467);var inst_19469 = clustermap.app.set_state(cljs.core.constant$keyword$173,inst_19468);var state_19477__$1 = (function (){var statearr_19479 = state_19477;(statearr_19479[7] = inst_19469);
return statearr_19479;
})();var statearr_19480_19493 = state_19477__$1;(statearr_19480_19493[2] = null);
(statearr_19480_19493[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19478 === 7))
{var inst_19465 = (state_19477[2]);var state_19477__$1 = state_19477;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19477__$1,8,inst_19465);
} else
{if((state_val_19478 === 6))
{var inst_19473 = (state_19477[2]);var state_19477__$1 = state_19477;var statearr_19481_19494 = state_19477__$1;(statearr_19481_19494[2] = inst_19473);
(statearr_19481_19494[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19478 === 5))
{var state_19477__$1 = state_19477;var statearr_19482_19495 = state_19477__$1;(statearr_19482_19495[2] = null);
(statearr_19482_19495[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19478 === 4))
{var state_19477__$1 = state_19477;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19477__$1,7,comm);
} else
{if((state_val_19478 === 3))
{var inst_19475 = (state_19477[2]);var state_19477__$1 = state_19477;return cljs.core.async.impl.ioc_helpers.return_chan(state_19477__$1,inst_19475);
} else
{if((state_val_19478 === 2))
{var state_19477__$1 = state_19477;if(true)
{var statearr_19483_19496 = state_19477__$1;(statearr_19483_19496[1] = 4);
} else
{var statearr_19484_19497 = state_19477__$1;(statearr_19484_19497[1] = 5);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19478 === 1))
{var state_19477__$1 = state_19477;var statearr_19485_19498 = state_19477__$1;(statearr_19485_19498[2] = null);
(statearr_19485_19498[1] = 2);
return cljs.core.constant$keyword$123;
} else
{return null;
}
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
var state_machine__5507__auto____0 = (function (){var statearr_19489 = [null,null,null,null,null,null,null,null];(statearr_19489[0] = state_machine__5507__auto__);
(statearr_19489[1] = 1);
return statearr_19489;
});
var state_machine__5507__auto____1 = (function (state_19477){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19477);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19490){if((e19490 instanceof Object))
{var ex__5510__auto__ = e19490;var statearr_19491_19499 = state_19477;(statearr_19491_19499[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19477);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19500 = state_19477;
state_19477 = G__19500;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19477){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19492 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.handle_event = (function handle_event(p__19501,type,val){var map__19503 = p__19501;var map__19503__$1 = ((cljs.core.seq_QMARK_(map__19503))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19503):map__19503);var searches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19503__$1,cljs.core.constant$keyword$200);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.constant$keyword$174))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(searches,clustermap.api.search(val));
} else
{return null;
}
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state(cljs.core.constant$keyword$199,clustermap.map.create_map());
clustermap.app.load_all_portfolio_companies_summary();
clustermap.app.load_all_investor_companies_summary();
var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1));var map__19536 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$200,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);var map__19536__$1 = ((cljs.core.seq_QMARK_(map__19536))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19536):map__19536);var order_ops = map__19536__$1;var searches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19536__$1,cljs.core.constant$keyword$200);var _ = clustermap.app.process_search_results(searches);clustermap.search.mount(clustermap.app.state,"search-component",comm);
clustermap.map_report.mount(clustermap.app.state,"map-report-content");
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19552){var state_val_19553 = (state_19552[1]);if((state_val_19553 === 7))
{var inst_19541 = (state_19552[2]);var inst_19542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19541,0,null);var inst_19543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19541,1,null);var inst_19544 = clustermap.app.handle_event(order_ops,inst_19542,inst_19543);var state_19552__$1 = (function (){var statearr_19554 = state_19552;(statearr_19554[7] = inst_19544);
return statearr_19554;
})();var statearr_19555_19568 = state_19552__$1;(statearr_19555_19568[2] = null);
(statearr_19555_19568[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19553 === 6))
{var inst_19548 = (state_19552[2]);var state_19552__$1 = state_19552;var statearr_19556_19569 = state_19552__$1;(statearr_19556_19569[2] = inst_19548);
(statearr_19556_19569[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19553 === 5))
{var state_19552__$1 = state_19552;var statearr_19557_19570 = state_19552__$1;(statearr_19557_19570[2] = null);
(statearr_19557_19570[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19553 === 4))
{var state_19552__$1 = state_19552;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19552__$1,7,comm);
} else
{if((state_val_19553 === 3))
{var inst_19550 = (state_19552[2]);var state_19552__$1 = state_19552;return cljs.core.async.impl.ioc_helpers.return_chan(state_19552__$1,inst_19550);
} else
{if((state_val_19553 === 2))
{var state_19552__$1 = state_19552;if(true)
{var statearr_19558_19571 = state_19552__$1;(statearr_19558_19571[1] = 4);
} else
{var statearr_19559_19572 = state_19552__$1;(statearr_19559_19572[1] = 5);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19553 === 1))
{var state_19552__$1 = state_19552;var statearr_19560_19573 = state_19552__$1;(statearr_19560_19573[2] = null);
(statearr_19560_19573[1] = 2);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_19564 = [null,null,null,null,null,null,null,null];(statearr_19564[0] = state_machine__5507__auto__);
(statearr_19564[1] = 1);
return statearr_19564;
});
var state_machine__5507__auto____1 = (function (state_19552){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19552);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19565){if((e19565 instanceof Object))
{var ex__5510__auto__ = e19565;var statearr_19566_19574 = state_19552;(statearr_19566_19574[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19552);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19565;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19575 = state_19552;
state_19552 = G__19575;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19552){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19567 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19567;
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
