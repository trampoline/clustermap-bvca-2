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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$182,null,cljs.core.constant$keyword$205,null,cljs.core.constant$keyword$203,null,cljs.core.constant$keyword$204,null,cljs.core.constant$keyword$198,cljs.core.PersistentArrayMap.EMPTY], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.state,(function (s){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,key,value);
}));
});
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20202){var state_val_20203 = (state_20202[1]);if((state_val_20203 === 2))
{var inst_20199 = (state_20202[2]);var inst_20200 = clustermap.app.set_state(cljs.core.constant$keyword$203,inst_20199);var state_20202__$1 = state_20202;return cljs.core.async.impl.ioc_helpers.return_chan(state_20202__$1,inst_20200);
} else
{if((state_val_20203 === 1))
{var inst_20197 = clustermap.api.portfolio_companies_summary();var state_20202__$1 = state_20202;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20202__$1,2,inst_20197);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20207 = [null,null,null,null,null,null,null];(statearr_20207[0] = state_machine__5507__auto__);
(statearr_20207[1] = 1);
return statearr_20207;
});
var state_machine__5507__auto____1 = (function (state_20202){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20202);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20208){if((e20208 instanceof Object))
{var ex__5510__auto__ = e20208;var statearr_20209_20211 = state_20202;(statearr_20209_20211[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20202);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e20208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__20212 = state_20202;
state_20202 = G__20212;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20202){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20210 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20232){var state_val_20233 = (state_20232[1]);if((state_val_20233 === 2))
{var inst_20229 = (state_20232[2]);var inst_20230 = clustermap.app.set_state(cljs.core.constant$keyword$204,inst_20229);var state_20232__$1 = state_20232;return cljs.core.async.impl.ioc_helpers.return_chan(state_20232__$1,inst_20230);
} else
{if((state_val_20233 === 1))
{var inst_20227 = clustermap.api.investor_companies_summary();var state_20232__$1 = state_20232;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20232__$1,2,inst_20227);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20237 = [null,null,null,null,null,null,null];(statearr_20237[0] = state_machine__5507__auto__);
(statearr_20237[1] = 1);
return statearr_20237;
});
var state_machine__5507__auto____1 = (function (state_20232){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20232);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20238){if((e20238 instanceof Object))
{var ex__5510__auto__ = e20238;var statearr_20239_20241 = state_20232;(statearr_20239_20241[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20232);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e20238;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__20242 = state_20232;
state_20232 = G__20242;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20232){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20240 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20240;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20273){var state_val_20274 = (state_20273[1]);if((state_val_20274 === 2))
{var inst_20265 = (state_20273[2]);var inst_20266 = clustermap.app.set_state(cljs.core.constant$keyword$205,inst_20265);var inst_20267 = cljs.core.deref(clustermap.app.state);var inst_20268 = cljs.core.constant$keyword$206.cljs$core$IFn$_invoke$arity$1(inst_20267);var inst_20269 = cljs.core.deref(clustermap.app.state);var inst_20270 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(inst_20269);var inst_20271 = clustermap.map.display_sites(inst_20268,inst_20270);var state_20273__$1 = (function (){var statearr_20275 = state_20273;(statearr_20275[7] = inst_20266);
return statearr_20275;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_20273__$1,inst_20271);
} else
{if((state_val_20274 === 1))
{var inst_20263 = clustermap.api.portfolio_company_sites();var state_20273__$1 = state_20273;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20273__$1,2,inst_20263);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20279 = [null,null,null,null,null,null,null,null];(statearr_20279[0] = state_machine__5507__auto__);
(statearr_20279[1] = 1);
return statearr_20279;
});
var state_machine__5507__auto____1 = (function (state_20273){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20273);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20280){if((e20280 instanceof Object))
{var ex__5510__auto__ = e20280;var statearr_20281_20283 = state_20273;(statearr_20281_20283[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20273);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e20280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__20284 = state_20273;
state_20273 = G__20284;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20273){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20282 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state(cljs.core.constant$keyword$198,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results));
});
clustermap.app.process_selection = (function process_selection(result,type){return clustermap.app.set_state(cljs.core.constant$keyword$182,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$148,type,cljs.core.constant$keyword$120,result], null));
});
clustermap.app.make_selection = (function make_selection(p__20285){var vec__20290 = p__20285;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20290,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20290,1,null);var pred__20291 = cljs.core._EQ__EQ_;var expr__20292 = type;if(cljs.core.truth_((pred__20291.cljs$core$IFn$_invoke$arity$2 ? pred__20291.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$201,expr__20292) : pred__20291.call(null,cljs.core.constant$keyword$201,expr__20292))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,"company_no")),type], null);
} else
{if(cljs.core.truth_((pred__20291.cljs$core$IFn$_invoke$arity$2 ? pred__20291.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$202,expr__20292) : pred__20291.call(null,cljs.core.constant$keyword$202,expr__20292))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,"name")),type], null);
} else
{if(cljs.core.truth_((pred__20291.cljs$core$IFn$_invoke$arity$2 ? pred__20291.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$200,expr__20292) : pred__20291.call(null,cljs.core.constant$keyword$200,expr__20292))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,"boundaryline_id")),type], null);
} else
{return null;
}
}
}
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$199,clustermap.api.ordered_api(clustermap.api.search,clustermap.app.process_search_results),cljs.core.constant$keyword$166,clustermap.api.ordered_api(clustermap.app.make_selection,clustermap.app.process_selection)], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.not(handler))
{throw (new Error([cljs.core.str("no handler for event-type: "),cljs.core.str(type)].join('')));
} else
{}
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state(cljs.core.constant$keyword$206,clustermap.map.create_map());
clustermap.app.load_all_portfolio_companies_summary();
clustermap.app.load_all_investor_companies_summary();
var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();clustermap.components.search.mount(clustermap.app.state,"search-component",comm);
clustermap.components.map_report.mount(clustermap.app.state,"map-report-component");
clustermap.components.page_title.mount(clustermap.app.state,"page-title-component");
clustermap.components.full_report.mount(clustermap.app.state,"full-report-component");
var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20340){var state_val_20341 = (state_20340[1]);if((state_val_20341 === 7))
{var inst_20329 = (state_20340[2]);var inst_20330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20329,0,null);var inst_20331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20329,1,null);var inst_20332 = clustermap.app.handle_event(inst_20330,inst_20331);var state_20340__$1 = (function (){var statearr_20342 = state_20340;(statearr_20342[7] = inst_20332);
return statearr_20342;
})();var statearr_20343_20356 = state_20340__$1;(statearr_20343_20356[2] = null);
(statearr_20343_20356[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20341 === 6))
{var inst_20336 = (state_20340[2]);var state_20340__$1 = state_20340;var statearr_20344_20357 = state_20340__$1;(statearr_20344_20357[2] = inst_20336);
(statearr_20344_20357[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20341 === 5))
{var state_20340__$1 = state_20340;var statearr_20345_20358 = state_20340__$1;(statearr_20345_20358[2] = null);
(statearr_20345_20358[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20341 === 4))
{var state_20340__$1 = state_20340;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20340__$1,7,comm);
} else
{if((state_val_20341 === 3))
{var inst_20338 = (state_20340[2]);var state_20340__$1 = state_20340;return cljs.core.async.impl.ioc_helpers.return_chan(state_20340__$1,inst_20338);
} else
{if((state_val_20341 === 2))
{var state_20340__$1 = state_20340;if(true)
{var statearr_20346_20359 = state_20340__$1;(statearr_20346_20359[1] = 4);
} else
{var statearr_20347_20360 = state_20340__$1;(statearr_20347_20360[1] = 5);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_20341 === 1))
{var state_20340__$1 = state_20340;var statearr_20348_20361 = state_20340__$1;(statearr_20348_20361[2] = null);
(statearr_20348_20361[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_20352 = [null,null,null,null,null,null,null,null];(statearr_20352[0] = state_machine__5507__auto__);
(statearr_20352[1] = 1);
return statearr_20352;
});
var state_machine__5507__auto____1 = (function (state_20340){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20340);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20353){if((e20353 instanceof Object))
{var ex__5510__auto__ = e20353;var statearr_20354_20362 = state_20340;(statearr_20354_20362[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20340);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e20353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__20363 = state_20340;
state_20340 = G__20363;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20340){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20355 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20355;
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
