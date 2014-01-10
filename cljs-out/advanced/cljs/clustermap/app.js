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
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19297){var state_val_19298 = (state_19297[1]);if((state_val_19298 === 2))
{var inst_19294 = (state_19297[2]);var inst_19295 = clustermap.app.set_state(cljs.core.constant$keyword$180,inst_19294);var state_19297__$1 = state_19297;return cljs.core.async.impl.ioc_helpers.return_chan(state_19297__$1,inst_19295);
} else
{if((state_val_19298 === 1))
{var inst_19292 = clustermap.api.all_portfolio_companies_summary();var state_19297__$1 = state_19297;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19297__$1,2,inst_19292);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19302 = [null,null,null,null,null,null,null];(statearr_19302[0] = state_machine__5507__auto__);
(statearr_19302[1] = 1);
return statearr_19302;
});
var state_machine__5507__auto____1 = (function (state_19297){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19297);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19303){if((e19303 instanceof Object))
{var ex__5510__auto__ = e19303;var statearr_19304_19306 = state_19297;(statearr_19304_19306[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19297);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19307 = state_19297;
state_19297 = G__19307;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19297){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19305 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19327){var state_val_19328 = (state_19327[1]);if((state_val_19328 === 2))
{var inst_19324 = (state_19327[2]);var inst_19325 = clustermap.app.set_state(cljs.core.constant$keyword$181,inst_19324);var state_19327__$1 = state_19327;return cljs.core.async.impl.ioc_helpers.return_chan(state_19327__$1,inst_19325);
} else
{if((state_val_19328 === 1))
{var inst_19322 = clustermap.api.all_investor_companies_summary();var state_19327__$1 = state_19327;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19327__$1,2,inst_19322);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19332 = [null,null,null,null,null,null,null];(statearr_19332[0] = state_machine__5507__auto__);
(statearr_19332[1] = 1);
return statearr_19332;
});
var state_machine__5507__auto____1 = (function (state_19327){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19327);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19333){if((e19333 instanceof Object))
{var ex__5510__auto__ = e19333;var statearr_19334_19336 = state_19327;(statearr_19334_19336[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19327);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19333;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19337 = state_19327;
state_19327 = G__19337;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19327){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19335 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19335;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19368){var state_val_19369 = (state_19368[1]);if((state_val_19369 === 2))
{var inst_19360 = (state_19368[2]);var inst_19361 = clustermap.app.set_state(cljs.core.constant$keyword$198,inst_19360);var inst_19362 = cljs.core.deref(clustermap.app.state);var inst_19363 = cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(inst_19362);var inst_19364 = cljs.core.deref(clustermap.app.state);var inst_19365 = cljs.core.constant$keyword$198.cljs$core$IFn$_invoke$arity$1(inst_19364);var inst_19366 = clustermap.map.display_sites(inst_19363,inst_19365);var state_19368__$1 = (function (){var statearr_19370 = state_19368;(statearr_19370[7] = inst_19361);
return statearr_19370;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_19368__$1,inst_19366);
} else
{if((state_val_19369 === 1))
{var inst_19358 = clustermap.api.all_portfolio_company_sites();var state_19368__$1 = state_19368;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19368__$1,2,inst_19358);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19374 = [null,null,null,null,null,null,null,null];(statearr_19374[0] = state_machine__5507__auto__);
(statearr_19374[1] = 1);
return statearr_19374;
});
var state_machine__5507__auto____1 = (function (state_19368){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19368);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19375){if((e19375 instanceof Object))
{var ex__5510__auto__ = e19375;var statearr_19376_19378 = state_19368;(statearr_19376_19378[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19368);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19375;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19379 = state_19368;
state_19368 = G__19379;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19368){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19377 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19377;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.process_search_results = (function process_search_results(comm){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19426){var state_val_19427 = (state_19426[1]);if((state_val_19427 === 8))
{var inst_19416 = (state_19426[2]);var inst_19417 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_19416);var inst_19418 = clustermap.app.set_state(cljs.core.constant$keyword$173,inst_19417);var state_19426__$1 = (function (){var statearr_19428 = state_19426;(statearr_19428[7] = inst_19418);
return statearr_19428;
})();var statearr_19429_19442 = state_19426__$1;(statearr_19429_19442[2] = null);
(statearr_19429_19442[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19427 === 7))
{var inst_19414 = (state_19426[2]);var state_19426__$1 = state_19426;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19426__$1,8,inst_19414);
} else
{if((state_val_19427 === 6))
{var inst_19422 = (state_19426[2]);var state_19426__$1 = state_19426;var statearr_19430_19443 = state_19426__$1;(statearr_19430_19443[2] = inst_19422);
(statearr_19430_19443[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19427 === 5))
{var state_19426__$1 = state_19426;var statearr_19431_19444 = state_19426__$1;(statearr_19431_19444[2] = null);
(statearr_19431_19444[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19427 === 4))
{var state_19426__$1 = state_19426;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19426__$1,7,comm);
} else
{if((state_val_19427 === 3))
{var inst_19424 = (state_19426[2]);var state_19426__$1 = state_19426;return cljs.core.async.impl.ioc_helpers.return_chan(state_19426__$1,inst_19424);
} else
{if((state_val_19427 === 2))
{var state_19426__$1 = state_19426;if(true)
{var statearr_19432_19445 = state_19426__$1;(statearr_19432_19445[1] = 4);
} else
{var statearr_19433_19446 = state_19426__$1;(statearr_19433_19446[1] = 5);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19427 === 1))
{var state_19426__$1 = state_19426;var statearr_19434_19447 = state_19426__$1;(statearr_19434_19447[2] = null);
(statearr_19434_19447[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_19438 = [null,null,null,null,null,null,null,null];(statearr_19438[0] = state_machine__5507__auto__);
(statearr_19438[1] = 1);
return statearr_19438;
});
var state_machine__5507__auto____1 = (function (state_19426){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19426);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19439){if((e19439 instanceof Object))
{var ex__5510__auto__ = e19439;var statearr_19440_19448 = state_19426;(statearr_19440_19448[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19426);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19449 = state_19426;
state_19426 = G__19449;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19426){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19441 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.handle_event = (function handle_event(p__19450,type,val){var map__19452 = p__19450;var map__19452__$1 = ((cljs.core.seq_QMARK_(map__19452))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19452):map__19452);var searches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19452__$1,cljs.core.constant$keyword$200);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.constant$keyword$174))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(searches,clustermap.api.search(val));
} else
{return null;
}
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state(cljs.core.constant$keyword$199,clustermap.map.create_map());
clustermap.app.load_all_portfolio_companies_summary();
clustermap.app.load_all_investor_companies_summary();
var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__19485 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$200,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);var map__19485__$1 = ((cljs.core.seq_QMARK_(map__19485))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19485):map__19485);var order_ops = map__19485__$1;var searches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19485__$1,cljs.core.constant$keyword$200);var _ = clustermap.app.process_search_results(searches);clustermap.search.mount(clustermap.app.state,"search-component",comm);
clustermap.map_report.mount(clustermap.app.state,"map-report-content");
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19501){var state_val_19502 = (state_19501[1]);if((state_val_19502 === 7))
{var inst_19490 = (state_19501[2]);var inst_19491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19490,0,null);var inst_19492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19490,1,null);var inst_19493 = clustermap.app.handle_event(order_ops,inst_19491,inst_19492);var state_19501__$1 = (function (){var statearr_19503 = state_19501;(statearr_19503[7] = inst_19493);
return statearr_19503;
})();var statearr_19504_19517 = state_19501__$1;(statearr_19504_19517[2] = null);
(statearr_19504_19517[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19502 === 6))
{var inst_19497 = (state_19501[2]);var state_19501__$1 = state_19501;var statearr_19505_19518 = state_19501__$1;(statearr_19505_19518[2] = inst_19497);
(statearr_19505_19518[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19502 === 5))
{var state_19501__$1 = state_19501;var statearr_19506_19519 = state_19501__$1;(statearr_19506_19519[2] = null);
(statearr_19506_19519[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19502 === 4))
{var state_19501__$1 = state_19501;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19501__$1,7,comm);
} else
{if((state_val_19502 === 3))
{var inst_19499 = (state_19501[2]);var state_19501__$1 = state_19501;return cljs.core.async.impl.ioc_helpers.return_chan(state_19501__$1,inst_19499);
} else
{if((state_val_19502 === 2))
{var state_19501__$1 = state_19501;if(true)
{var statearr_19507_19520 = state_19501__$1;(statearr_19507_19520[1] = 4);
} else
{var statearr_19508_19521 = state_19501__$1;(statearr_19508_19521[1] = 5);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19502 === 1))
{var state_19501__$1 = state_19501;var statearr_19509_19522 = state_19501__$1;(statearr_19509_19522[2] = null);
(statearr_19509_19522[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_19513 = [null,null,null,null,null,null,null,null];(statearr_19513[0] = state_machine__5507__auto__);
(statearr_19513[1] = 1);
return statearr_19513;
});
var state_machine__5507__auto____1 = (function (state_19501){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19501);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19514){if((e19514 instanceof Object))
{var ex__5510__auto__ = e19514;var statearr_19515_19523 = state_19501;(statearr_19515_19523[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19501);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19524 = state_19501;
state_19501 = G__19524;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19501){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19516 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19516;
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
