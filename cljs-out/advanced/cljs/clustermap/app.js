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
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$177,null,cljs.core.constant$keyword$193,null,cljs.core.constant$keyword$175,null,cljs.core.constant$keyword$176,null,cljs.core.constant$keyword$170,"boo"], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.app.state,(function (s){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,key,value);
}));
});
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19489){var state_val_19490 = (state_19489[1]);if((state_val_19490 === 2))
{var inst_19486 = (state_19489[2]);var inst_19487 = clustermap.app.set_state(cljs.core.constant$keyword$175,inst_19486);var state_19489__$1 = state_19489;return cljs.core.async.impl.ioc_helpers.return_chan(state_19489__$1,inst_19487);
} else
{if((state_val_19490 === 1))
{var inst_19484 = clustermap.api.all_portfolio_companies_summary();var state_19489__$1 = state_19489;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19489__$1,2,inst_19484);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19494 = [null,null,null,null,null,null,null];(statearr_19494[0] = state_machine__5507__auto__);
(statearr_19494[1] = 1);
return statearr_19494;
});
var state_machine__5507__auto____1 = (function (state_19489){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19489);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19495){if((e19495 instanceof Object))
{var ex__5510__auto__ = e19495;var statearr_19496_19498 = state_19489;(statearr_19496_19498[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19489);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e19495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__19499 = state_19489;
state_19489 = G__19499;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19489){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19497 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19519){var state_val_19520 = (state_19519[1]);if((state_val_19520 === 2))
{var inst_19516 = (state_19519[2]);var inst_19517 = clustermap.app.set_state(cljs.core.constant$keyword$176,inst_19516);var state_19519__$1 = state_19519;return cljs.core.async.impl.ioc_helpers.return_chan(state_19519__$1,inst_19517);
} else
{if((state_val_19520 === 1))
{var inst_19514 = clustermap.api.all_investor_companies_summary();var state_19519__$1 = state_19519;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19519__$1,2,inst_19514);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19524 = [null,null,null,null,null,null,null];(statearr_19524[0] = state_machine__5507__auto__);
(statearr_19524[1] = 1);
return statearr_19524;
});
var state_machine__5507__auto____1 = (function (state_19519){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19519);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19525){if((e19525 instanceof Object))
{var ex__5510__auto__ = e19525;var statearr_19526_19528 = state_19519;(statearr_19526_19528[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19519);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e19525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__19529 = state_19519;
state_19519 = G__19529;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19519){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19527 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19527;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19560){var state_val_19561 = (state_19560[1]);if((state_val_19561 === 2))
{var inst_19552 = (state_19560[2]);var inst_19553 = clustermap.app.set_state(cljs.core.constant$keyword$193,inst_19552);var inst_19554 = cljs.core.deref(clustermap.app.state);var inst_19555 = cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(inst_19554);var inst_19556 = cljs.core.deref(clustermap.app.state);var inst_19557 = cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(inst_19556);var inst_19558 = clustermap.map.display_sites(inst_19555,inst_19557);var state_19560__$1 = (function (){var statearr_19562 = state_19560;(statearr_19562[7] = inst_19553);
return statearr_19562;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_19560__$1,inst_19558);
} else
{if((state_val_19561 === 1))
{var inst_19550 = clustermap.api.all_portfolio_company_sites();var state_19560__$1 = state_19560;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19560__$1,2,inst_19550);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19566 = [null,null,null,null,null,null,null,null];(statearr_19566[0] = state_machine__5507__auto__);
(statearr_19566[1] = 1);
return statearr_19566;
});
var state_machine__5507__auto____1 = (function (state_19560){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19560);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19567){if((e19567 instanceof Object))
{var ex__5510__auto__ = e19567;var statearr_19568_19570 = state_19560;(statearr_19568_19570[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19560);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e19567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__19571 = state_19560;
state_19560 = G__19571;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19560){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19569 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state(cljs.core.constant$keyword$194,clustermap.map.create_map());
clustermap.app.load_all_portfolio_companies_summary();
clustermap.app.load_all_investor_companies_summary();
clustermap.search.mount(clustermap.app.state,"search-component");
return clustermap.map_report.mount(clustermap.app.state,"map-report-content");
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
