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
var GET__delegate = function (url,p__8321){var map__8323 = p__8321;var map__8323__$1 = ((cljs.core.seq_QMARK_.call(null,map__8323))?cljs.core.apply.call(null,cljs.core.hash_map,map__8323):map__8323);var raw = cljs.core.get.call(null,map__8323__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}
}).call(null,(JSON.parse.call(null,event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__8321 = null;if (arguments.length > 1) {
  p__8321 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__8321);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__8324){
var url = cljs.core.first(arglist__8324);
var p__8321 = cljs.core.rest(arglist__8324);
return GET__delegate(url,p__8321);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8431){var state_val_8432 = (state_8431[1]);if((state_val_8432 === 1))
{var state_8431__$1 = state_8431;var statearr_8433_8461 = state_8431__$1;(statearr_8433_8461[2] = null);
(statearr_8433_8461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8432 === 2))
{var state_8431__$1 = state_8431;if(true)
{var statearr_8434_8462 = state_8431__$1;(statearr_8434_8462[1] = 4);
} else
{var statearr_8435_8463 = state_8431__$1;(statearr_8435_8463[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8432 === 3))
{var inst_8429 = (state_8431[2]);var state_8431__$1 = state_8431;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8431__$1,inst_8429);
} else
{if((state_val_8432 === 4))
{var state_8431__$1 = state_8431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8431__$1,7,ocomm);
} else
{if((state_val_8432 === 5))
{var state_8431__$1 = state_8431;var statearr_8436_8464 = state_8431__$1;(statearr_8436_8464[2] = null);
(statearr_8436_8464[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8432 === 6))
{var inst_8427 = (state_8431[2]);var state_8431__$1 = state_8431;var statearr_8437_8465 = state_8431__$1;(statearr_8437_8465[2] = inst_8427);
(statearr_8437_8465[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8432 === 7))
{var inst_8398 = (state_8431[7]);var inst_8397 = (state_8431[2]);var inst_8398__$1 = cljs.core.nth.call(null,inst_8397,0,null);var inst_8399 = cljs.core.nth.call(null,inst_8397,1,null);var inst_8400 = cljs.core.sequential_QMARK_.call(null,inst_8398__$1);var state_8431__$1 = (function (){var statearr_8438 = state_8431;(statearr_8438[8] = inst_8399);
(statearr_8438[7] = inst_8398__$1);
return statearr_8438;
})();if(inst_8400)
{var statearr_8439_8466 = state_8431__$1;(statearr_8439_8466[1] = 8);
} else
{var statearr_8440_8467 = state_8431__$1;(statearr_8440_8467[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8432 === 8))
{var inst_8398 = (state_8431[7]);var inst_8402 = inst_8398;var inst_8403 = cljs.core.PersistentVector.EMPTY;var state_8431__$1 = (function (){var statearr_8441 = state_8431;(statearr_8441[9] = inst_8403);
(statearr_8441[10] = inst_8402);
return statearr_8441;
})();var statearr_8442_8468 = state_8431__$1;(statearr_8442_8468[2] = null);
(statearr_8442_8468[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8432 === 9))
{var inst_8398 = (state_8431[7]);var state_8431__$1 = state_8431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8431__$1,17,inst_8398);
} else
{if((state_val_8432 === 10))
{var inst_8399 = (state_8431[8]);var inst_8422 = (state_8431[2]);var inst_8423 = cljs.core.apply.call(null,handler,inst_8422,inst_8399);var state_8431__$1 = (function (){var statearr_8443 = state_8431;(statearr_8443[11] = inst_8423);
return statearr_8443;
})();var statearr_8444_8469 = state_8431__$1;(statearr_8444_8469[2] = null);
(statearr_8444_8469[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8432 === 11))
{var inst_8402 = (state_8431[10]);var inst_8405 = cljs.core.empty_QMARK_.call(null,inst_8402);var state_8431__$1 = state_8431;if(inst_8405)
{var statearr_8445_8470 = state_8431__$1;(statearr_8445_8470[1] = 13);
} else
{var statearr_8446_8471 = state_8431__$1;(statearr_8446_8471[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8432 === 12))
{var inst_8417 = (state_8431[2]);var state_8431__$1 = state_8431;var statearr_8447_8472 = state_8431__$1;(statearr_8447_8472[2] = inst_8417);
(statearr_8447_8472[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8432 === 13))
{var inst_8403 = (state_8431[9]);var state_8431__$1 = state_8431;var statearr_8448_8473 = state_8431__$1;(statearr_8448_8473[2] = inst_8403);
(statearr_8448_8473[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8432 === 14))
{var inst_8402 = (state_8431[10]);var inst_8408 = cljs.core.rest.call(null,inst_8402);var inst_8409 = cljs.core.first.call(null,inst_8402);var state_8431__$1 = (function (){var statearr_8449 = state_8431;(statearr_8449[12] = inst_8408);
return statearr_8449;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8431__$1,16,inst_8409);
} else
{if((state_val_8432 === 15))
{var inst_8415 = (state_8431[2]);var state_8431__$1 = state_8431;var statearr_8450_8474 = state_8431__$1;(statearr_8450_8474[2] = inst_8415);
(statearr_8450_8474[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8432 === 16))
{var inst_8408 = (state_8431[12]);var inst_8403 = (state_8431[9]);var inst_8411 = (state_8431[2]);var inst_8412 = cljs.core.conj.call(null,inst_8403,inst_8411);var inst_8402 = inst_8408;var inst_8403__$1 = inst_8412;var state_8431__$1 = (function (){var statearr_8451 = state_8431;(statearr_8451[9] = inst_8403__$1);
(statearr_8451[10] = inst_8402);
return statearr_8451;
})();var statearr_8452_8475 = state_8431__$1;(statearr_8452_8475[2] = null);
(statearr_8452_8475[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8432 === 17))
{var inst_8420 = (state_8431[2]);var state_8431__$1 = state_8431;var statearr_8453_8476 = state_8431__$1;(statearr_8453_8476[2] = inst_8420);
(statearr_8453_8476[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_8457 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8457[0] = state_machine__5507__auto__);
(statearr_8457[1] = 1);
return statearr_8457;
});
var state_machine__5507__auto____1 = (function (state_8431){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8431);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8458){if((e8458 instanceof Object))
{var ex__5510__auto__ = e8458;var statearr_8459_8477 = state_8431;(statearr_8459_8477[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8431);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8478 = state_8431;
state_8431 = G__8478;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8431){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8460 = f__5522__auto__.call(null);(statearr_8460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return (function() { 
var G__8481__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__8480 = rseq;var rcomm = cljs.core.nth.call(null,vec__8480,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__8480,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__8481 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8481__delegate.call(this,req_args);};
G__8481.cljs$lang$maxFixedArity = 0;
G__8481.cljs$lang$applyTo = (function (arglist__8482){
var req_args = cljs.core.seq(arglist__8482);
return G__8481__delegate(req_args);
});
G__8481.cljs$core$IFn$_invoke$arity$variadic = G__8481__delegate;
return G__8481;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8500){var state_val_8501 = (state_8500[1]);if((state_val_8501 === 2))
{var inst_8497 = (state_8500[2]);var inst_8498 = console.log(inst_8497);var state_8500__$1 = state_8500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8500__$1,inst_8498);
} else
{if((state_val_8501 === 1))
{var state_8500__$1 = state_8500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8500__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8505 = [null,null,null,null,null,null,null];(statearr_8505[0] = state_machine__5507__auto__);
(statearr_8505[1] = 1);
return statearr_8505;
});
var state_machine__5507__auto____1 = (function (state_8500){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8500);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8506){if((e8506 instanceof Object))
{var ex__5510__auto__ = e8506;var statearr_8507_8509 = state_8500;(statearr_8507_8509[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8500);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8510 = state_8500;
state_8500 = G__8510;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8500){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8508 = f__5522__auto__.call(null);(statearr_8508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__8511){
var f = cljs.core.first(arglist__8511);
var args = cljs.core.rest(arglist__8511);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__8514){var vec__8515 = p__8514;var k = cljs.core.nth.call(null,vec__8515,0,null);var v = cljs.core.nth.call(null,vec__8515,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
}),m));
});
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > 0))
{return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__8516){var vec__8518 = p__8516;var type_ids = cljs.core.nth.call(null,vec__8518,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__8516 = null;if (arguments.length > 0) {
  p__8516 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__8516);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__8519){
var p__8516 = cljs.core.seq(arglist__8519);
return portfolio_company_sites__delegate(p__8516);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
clustermap.api.constituencies = (function constituencies(){return clustermap.api.GET.call(null,"/api/bvca/constituencies");
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/constituencies/"),cljs.core.str(id)].join(''));
});
clustermap.api.portfolio_companies_summary = (function portfolio_companies_summary(){return clustermap.api.GET.call(null,"/api/bvca/portfolio-companies-summary");
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__8520){var vec__8522 = p__8520;var type_ids = cljs.core.nth.call(null,vec__8522,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__8520 = null;if (arguments.length > 0) {
  p__8520 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__8520);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__8523){
var p__8520 = cljs.core.seq(arglist__8523);
return portfolio_company_stats__delegate(p__8520);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__8524){var vec__8526 = p__8524;var type_ids = cljs.core.nth.call(null,vec__8526,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__8524 = null;if (arguments.length > 0) {
  p__8524 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__8524);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__8527){
var p__8524 = cljs.core.seq(arglist__8527);
return portfolio_company_site_stats__delegate(p__8524);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__8528){var vec__8530 = p__8528;var type_ids = cljs.core.nth.call(null,vec__8530,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__8528 = null;if (arguments.length > 0) {
  p__8528 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__8528);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__8531){
var p__8528 = cljs.core.seq(arglist__8531);
return portfolio_company_account_stats__delegate(p__8528);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET.call(null,"/api/bvca/investor-companies-summary");
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/investor-companies/"),cljs.core.str(id)].join(''));
});
