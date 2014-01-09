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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$183,null,cljs.core.constant$keyword$199,null,cljs.core.constant$keyword$181,null,cljs.core.constant$keyword$182,null,cljs.core.constant$keyword$174,null], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.state,(function (s){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,key,value);
}));
});
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19254){var state_val_19255 = (state_19254[1]);if((state_val_19255 === 2))
{var inst_19251 = (state_19254[2]);var inst_19252 = clustermap.app.set_state(cljs.core.constant$keyword$181,inst_19251);var state_19254__$1 = state_19254;return cljs.core.async.impl.ioc_helpers.return_chan(state_19254__$1,inst_19252);
} else
{if((state_val_19255 === 1))
{var inst_19249 = clustermap.api.all_portfolio_companies_summary();var state_19254__$1 = state_19254;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19254__$1,2,inst_19249);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19259 = [null,null,null,null,null,null,null];(statearr_19259[0] = state_machine__5507__auto__);
(statearr_19259[1] = 1);
return statearr_19259;
});
var state_machine__5507__auto____1 = (function (state_19254){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19254);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19260){if((e19260 instanceof Object))
{var ex__5510__auto__ = e19260;var statearr_19261_19263 = state_19254;(statearr_19261_19263[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19254);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19260;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19264 = state_19254;
state_19254 = G__19264;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19254){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19262 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19262;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19284){var state_val_19285 = (state_19284[1]);if((state_val_19285 === 2))
{var inst_19281 = (state_19284[2]);var inst_19282 = clustermap.app.set_state(cljs.core.constant$keyword$182,inst_19281);var state_19284__$1 = state_19284;return cljs.core.async.impl.ioc_helpers.return_chan(state_19284__$1,inst_19282);
} else
{if((state_val_19285 === 1))
{var inst_19279 = clustermap.api.all_investor_companies_summary();var state_19284__$1 = state_19284;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19284__$1,2,inst_19279);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19289 = [null,null,null,null,null,null,null];(statearr_19289[0] = state_machine__5507__auto__);
(statearr_19289[1] = 1);
return statearr_19289;
});
var state_machine__5507__auto____1 = (function (state_19284){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19284);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19290){if((e19290 instanceof Object))
{var ex__5510__auto__ = e19290;var statearr_19291_19293 = state_19284;(statearr_19291_19293[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19284);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19294 = state_19284;
state_19284 = G__19294;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19284){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19292 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19325){var state_val_19326 = (state_19325[1]);if((state_val_19326 === 2))
{var inst_19317 = (state_19325[2]);var inst_19318 = clustermap.app.set_state(cljs.core.constant$keyword$199,inst_19317);var inst_19319 = cljs.core.deref(clustermap.app.state);var inst_19320 = cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(inst_19319);var inst_19321 = cljs.core.deref(clustermap.app.state);var inst_19322 = cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(inst_19321);var inst_19323 = clustermap.map.display_sites(inst_19320,inst_19322);var state_19325__$1 = (function (){var statearr_19327 = state_19325;(statearr_19327[7] = inst_19318);
return statearr_19327;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_19325__$1,inst_19323);
} else
{if((state_val_19326 === 1))
{var inst_19315 = clustermap.api.all_portfolio_company_sites();var state_19325__$1 = state_19325;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19325__$1,2,inst_19315);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19331 = [null,null,null,null,null,null,null,null];(statearr_19331[0] = state_machine__5507__auto__);
(statearr_19331[1] = 1);
return statearr_19331;
});
var state_machine__5507__auto____1 = (function (state_19325){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19325);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19332){if((e19332 instanceof Object))
{var ex__5510__auto__ = e19332;var statearr_19333_19335 = state_19325;(statearr_19333_19335[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19325);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19332;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19336 = state_19325;
state_19325 = G__19336;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19325){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19334 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.search = (function search(q){if((cljs.core.count(q) > 0))
{var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19358){var state_val_19359 = (state_19358[1]);if((state_val_19359 === 2))
{var inst_19354 = (state_19358[2]);var inst_19355 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_19354);var inst_19356 = clustermap.app.set_state(cljs.core.constant$keyword$174,inst_19355);var state_19358__$1 = state_19358;return cljs.core.async.impl.ioc_helpers.return_chan(state_19358__$1,inst_19356);
} else
{if((state_val_19359 === 1))
{var inst_19352 = clustermap.api.search(q);var state_19358__$1 = state_19358;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19358__$1,2,inst_19352);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19363 = [null,null,null,null,null,null,null];(statearr_19363[0] = state_machine__5507__auto__);
(statearr_19363[1] = 1);
return statearr_19363;
});
var state_machine__5507__auto____1 = (function (state_19358){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19358);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19364){if((e19364 instanceof Object))
{var ex__5510__auto__ = e19364;var statearr_19365_19367 = state_19358;(statearr_19365_19367[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19358);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19364;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19368 = state_19358;
state_19358 = G__19368;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19358){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19366 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19366;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
} else
{return clustermap.app.set_state(cljs.core.constant$keyword$174,null);
}
});
clustermap.app.handle_event = (function handle_event(type,val){console.log(type);
console.log(val);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.constant$keyword$175))
{return clustermap.app.search(val);
} else
{return null;
}
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state(cljs.core.constant$keyword$200,clustermap.map.create_map());
clustermap.app.load_all_portfolio_companies_summary();
clustermap.app.load_all_investor_companies_summary();
var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();clustermap.search.mount(clustermap.app.state,"search-component",comm);
clustermap.map_report.mount(clustermap.app.state,"map-report-content");
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19415){var state_val_19416 = (state_19415[1]);if((state_val_19416 === 7))
{var inst_19404 = (state_19415[2]);var inst_19405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19404,0,null);var inst_19406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19404,1,null);var inst_19407 = clustermap.app.handle_event(inst_19405,inst_19406);var state_19415__$1 = (function (){var statearr_19417 = state_19415;(statearr_19417[7] = inst_19407);
return statearr_19417;
})();var statearr_19418_19431 = state_19415__$1;(statearr_19418_19431[2] = null);
(statearr_19418_19431[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19416 === 6))
{var inst_19411 = (state_19415[2]);var state_19415__$1 = state_19415;var statearr_19419_19432 = state_19415__$1;(statearr_19419_19432[2] = inst_19411);
(statearr_19419_19432[1] = 3);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19416 === 5))
{var state_19415__$1 = state_19415;var statearr_19420_19433 = state_19415__$1;(statearr_19420_19433[2] = null);
(statearr_19420_19433[1] = 6);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19416 === 4))
{var state_19415__$1 = state_19415;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19415__$1,7,comm);
} else
{if((state_val_19416 === 3))
{var inst_19413 = (state_19415[2]);var state_19415__$1 = state_19415;return cljs.core.async.impl.ioc_helpers.return_chan(state_19415__$1,inst_19413);
} else
{if((state_val_19416 === 2))
{var state_19415__$1 = state_19415;if(true)
{var statearr_19421_19434 = state_19415__$1;(statearr_19421_19434[1] = 4);
} else
{var statearr_19422_19435 = state_19415__$1;(statearr_19422_19435[1] = 5);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19416 === 1))
{var state_19415__$1 = state_19415;var statearr_19423_19436 = state_19415__$1;(statearr_19423_19436[2] = null);
(statearr_19423_19436[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_19427 = [null,null,null,null,null,null,null,null];(statearr_19427[0] = state_machine__5507__auto__);
(statearr_19427[1] = 1);
return statearr_19427;
});
var state_machine__5507__auto____1 = (function (state_19415){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19415);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19428){if((e19428 instanceof Object))
{var ex__5510__auto__ = e19428;var statearr_19429_19437 = state_19415;(statearr_19429_19437[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19415);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19438 = state_19415;
state_19415 = G__19438;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19415){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19430 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19430;
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
