// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__19420){var map__19422 = p__19420;var map__19422__$1 = ((cljs.core.seq_QMARK_(map__19422))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19422):map__19422);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19422__$1,cljs.core.constant$keyword$181);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$162,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__19420 = null;if (arguments.length > 1) {
  p__19420 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19420);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19423){
var url = cljs.core.first(arglist__19423);
var p__19420 = cljs.core.rest(arglist__19423);
return GET__delegate(url,p__19420);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19530){var state_val_19531 = (state_19530[1]);if((state_val_19531 === 1))
{var state_19530__$1 = state_19530;var statearr_19532_19560 = state_19530__$1;(statearr_19532_19560[2] = null);
(statearr_19532_19560[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_19531 === 2))
{var state_19530__$1 = state_19530;if(true)
{var statearr_19533_19561 = state_19530__$1;(statearr_19533_19561[1] = 4);
} else
{var statearr_19534_19562 = state_19530__$1;(statearr_19534_19562[1] = 5);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_19531 === 3))
{var inst_19528 = (state_19530[2]);var state_19530__$1 = state_19530;return cljs.core.async.impl.ioc_helpers.return_chan(state_19530__$1,inst_19528);
} else
{if((state_val_19531 === 4))
{var state_19530__$1 = state_19530;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19530__$1,7,ocomm);
} else
{if((state_val_19531 === 5))
{var state_19530__$1 = state_19530;var statearr_19535_19563 = state_19530__$1;(statearr_19535_19563[2] = null);
(statearr_19535_19563[1] = 6);
return cljs.core.constant$keyword$167;
} else
{if((state_val_19531 === 6))
{var inst_19526 = (state_19530[2]);var state_19530__$1 = state_19530;var statearr_19536_19564 = state_19530__$1;(statearr_19536_19564[2] = inst_19526);
(statearr_19536_19564[1] = 3);
return cljs.core.constant$keyword$167;
} else
{if((state_val_19531 === 7))
{var inst_19497 = (state_19530[7]);var inst_19496 = (state_19530[2]);var inst_19497__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19496,0,null);var inst_19498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19496,1,null);var inst_19499 = cljs.core.sequential_QMARK_(inst_19497__$1);var state_19530__$1 = (function (){var statearr_19537 = state_19530;(statearr_19537[7] = inst_19497__$1);
(statearr_19537[8] = inst_19498);
return statearr_19537;
})();if(inst_19499)
{var statearr_19538_19565 = state_19530__$1;(statearr_19538_19565[1] = 8);
} else
{var statearr_19539_19566 = state_19530__$1;(statearr_19539_19566[1] = 9);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_19531 === 8))
{var inst_19497 = (state_19530[7]);var inst_19501 = inst_19497;var inst_19502 = cljs.core.PersistentVector.EMPTY;var state_19530__$1 = (function (){var statearr_19540 = state_19530;(statearr_19540[9] = inst_19502);
(statearr_19540[10] = inst_19501);
return statearr_19540;
})();var statearr_19541_19567 = state_19530__$1;(statearr_19541_19567[2] = null);
(statearr_19541_19567[1] = 11);
return cljs.core.constant$keyword$167;
} else
{if((state_val_19531 === 9))
{var inst_19497 = (state_19530[7]);var state_19530__$1 = state_19530;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19530__$1,17,inst_19497);
} else
{if((state_val_19531 === 10))
{var inst_19498 = (state_19530[8]);var inst_19521 = (state_19530[2]);var inst_19522 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_19521,inst_19498);var state_19530__$1 = (function (){var statearr_19542 = state_19530;(statearr_19542[11] = inst_19522);
return statearr_19542;
})();var statearr_19543_19568 = state_19530__$1;(statearr_19543_19568[2] = null);
(statearr_19543_19568[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_19531 === 11))
{var inst_19501 = (state_19530[10]);var inst_19504 = cljs.core.empty_QMARK_(inst_19501);var state_19530__$1 = state_19530;if(inst_19504)
{var statearr_19544_19569 = state_19530__$1;(statearr_19544_19569[1] = 13);
} else
{var statearr_19545_19570 = state_19530__$1;(statearr_19545_19570[1] = 14);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_19531 === 12))
{var inst_19516 = (state_19530[2]);var state_19530__$1 = state_19530;var statearr_19546_19571 = state_19530__$1;(statearr_19546_19571[2] = inst_19516);
(statearr_19546_19571[1] = 10);
return cljs.core.constant$keyword$167;
} else
{if((state_val_19531 === 13))
{var inst_19502 = (state_19530[9]);var state_19530__$1 = state_19530;var statearr_19547_19572 = state_19530__$1;(statearr_19547_19572[2] = inst_19502);
(statearr_19547_19572[1] = 15);
return cljs.core.constant$keyword$167;
} else
{if((state_val_19531 === 14))
{var inst_19501 = (state_19530[10]);var inst_19507 = cljs.core.rest(inst_19501);var inst_19508 = cljs.core.first(inst_19501);var state_19530__$1 = (function (){var statearr_19548 = state_19530;(statearr_19548[12] = inst_19507);
return statearr_19548;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19530__$1,16,inst_19508);
} else
{if((state_val_19531 === 15))
{var inst_19514 = (state_19530[2]);var state_19530__$1 = state_19530;var statearr_19549_19573 = state_19530__$1;(statearr_19549_19573[2] = inst_19514);
(statearr_19549_19573[1] = 12);
return cljs.core.constant$keyword$167;
} else
{if((state_val_19531 === 16))
{var inst_19507 = (state_19530[12]);var inst_19502 = (state_19530[9]);var inst_19510 = (state_19530[2]);var inst_19511 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19502,inst_19510);var inst_19501 = inst_19507;var inst_19502__$1 = inst_19511;var state_19530__$1 = (function (){var statearr_19550 = state_19530;(statearr_19550[9] = inst_19502__$1);
(statearr_19550[10] = inst_19501);
return statearr_19550;
})();var statearr_19551_19574 = state_19530__$1;(statearr_19551_19574[2] = null);
(statearr_19551_19574[1] = 11);
return cljs.core.constant$keyword$167;
} else
{if((state_val_19531 === 17))
{var inst_19519 = (state_19530[2]);var state_19530__$1 = state_19530;var statearr_19552_19575 = state_19530__$1;(statearr_19552_19575[2] = inst_19519);
(statearr_19552_19575[1] = 10);
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
}
}
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
var state_machine__5507__auto____0 = (function (){var statearr_19556 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19556[0] = state_machine__5507__auto__);
(statearr_19556[1] = 1);
return statearr_19556;
});
var state_machine__5507__auto____1 = (function (state_19530){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19530);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19557){if((e19557 instanceof Object))
{var ex__5510__auto__ = e19557;var statearr_19558_19576 = state_19530;(statearr_19558_19576[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19530);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e19557;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__19577 = state_19530;
state_19530 = G__19577;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19530){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19559 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19559;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return (function() { 
var G__19580__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__19579 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19579,0,null);var result_handler_args = cljs.core.nthnext(vec__19579,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__19580 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19580__delegate.call(this,req_args);};
G__19580.cljs$lang$maxFixedArity = 0;
G__19580.cljs$lang$applyTo = (function (arglist__19581){
var req_args = cljs.core.seq(arglist__19581);
return G__19580__delegate(req_args);
});
G__19580.cljs$core$IFn$_invoke$arity$variadic = G__19580__delegate;
return G__19580;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19599){var state_val_19600 = (state_19599[1]);if((state_val_19600 === 2))
{var inst_19596 = (state_19599[2]);var inst_19597 = console.log(inst_19596);var state_19599__$1 = state_19599;return cljs.core.async.impl.ioc_helpers.return_chan(state_19599__$1,inst_19597);
} else
{if((state_val_19600 === 1))
{var state_19599__$1 = state_19599;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19599__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19604 = [null,null,null,null,null,null,null];(statearr_19604[0] = state_machine__5507__auto__);
(statearr_19604[1] = 1);
return statearr_19604;
});
var state_machine__5507__auto____1 = (function (state_19599){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19599);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19605){if((e19605 instanceof Object))
{var ex__5510__auto__ = e19605;var statearr_19606_19608 = state_19599;(statearr_19606_19608[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19599);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e19605;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__19609 = state_19599;
state_19599 = G__19609;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19599){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19607 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__19610){
var f = cljs.core.first(arglist__19610);
var args = cljs.core.rest(arglist__19610);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19613){var vec__19614 = p__19613;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19614,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19614,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
}),m));
});
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > 0))
{return clustermap.api.GET([cljs.core.str("/api/bvca/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituencies = (function constituencies(){return clustermap.api.GET("/api/bvca/constituencies");
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET([cljs.core.str("/api/bvca/constituencies/"),cljs.core.str(id)].join(''));
});
clustermap.api.portfolio_companies_summary = (function portfolio_companies_summary(){return clustermap.api.GET("/api/bvca/portfolio-companies-summary");
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__19615){var vec__19617 = p__19615;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19617,0,null);return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__19615 = null;if (arguments.length > 0) {
  p__19615 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__19615);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__19618){
var p__19615 = cljs.core.seq(arglist__19618);
return portfolio_company_sites__delegate(p__19615);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__19619){var vec__19621 = p__19619;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19621,0,null);return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__19619 = null;if (arguments.length > 0) {
  p__19619 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__19619);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__19622){
var p__19619 = cljs.core.seq(arglist__19622);
return portfolio_company_locations__delegate(p__19619);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__19623){var vec__19625 = p__19623;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19625,0,null);return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__19623 = null;if (arguments.length > 0) {
  p__19623 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__19623);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__19626){
var p__19623 = cljs.core.seq(arglist__19626);
return portfolio_company_stats__delegate(p__19623);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__19627){var vec__19629 = p__19627;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19629,0,null);return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__19627 = null;if (arguments.length > 0) {
  p__19627 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__19627);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__19630){
var p__19627 = cljs.core.seq(arglist__19630);
return portfolio_company_site_stats__delegate(p__19627);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__19631){var vec__19633 = p__19631;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19633,0,null);return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__19631 = null;if (arguments.length > 0) {
  p__19631 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__19631);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__19634){
var p__19631 = cljs.core.seq(arglist__19634);
return portfolio_company_account_stats__delegate(p__19631);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET("/api/bvca/investor-companies-summary");
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET([cljs.core.str("/api/bvca/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collections = (function() { 
var boundaryline_collections__delegate = function (id,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,[cljs.core.str("/api/boundaryline-collections/"),cljs.core.str(id)].join(''),opts);
};
var boundaryline_collections = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collections__delegate.call(this,id,opts);};
boundaryline_collections.cljs$lang$maxFixedArity = 1;
boundaryline_collections.cljs$lang$applyTo = (function (arglist__19635){
var id = cljs.core.first(arglist__19635);
var opts = cljs.core.rest(arglist__19635);
return boundaryline_collections__delegate(id,opts);
});
boundaryline_collections.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collections__delegate;
return boundaryline_collections;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,[cljs.core.str("/api/boundarylines/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(tolerance)].join(''),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__19636){
var id = cljs.core.first(arglist__19636);
arglist__19636 = cljs.core.next(arglist__19636);
var tolerance = cljs.core.first(arglist__19636);
var opts = cljs.core.rest(arglist__19636);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
