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
clustermap.api.GET = (function GET(url){var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(JSON.parse.call(null,event.target.getResponseText())["data"]));
return cljs.core.async.close_BANG_.call(null,comm);
}));
return comm;
});
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8427){var state_val_8428 = (state_8427[1]);if((state_val_8428 === 1))
{var state_8427__$1 = state_8427;var statearr_8429_8457 = state_8427__$1;(statearr_8429_8457[2] = null);
(statearr_8429_8457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8428 === 2))
{var state_8427__$1 = state_8427;if(true)
{var statearr_8430_8458 = state_8427__$1;(statearr_8430_8458[1] = 4);
} else
{var statearr_8431_8459 = state_8427__$1;(statearr_8431_8459[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8428 === 3))
{var inst_8425 = (state_8427[2]);var state_8427__$1 = state_8427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8427__$1,inst_8425);
} else
{if((state_val_8428 === 4))
{var state_8427__$1 = state_8427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8427__$1,7,ocomm);
} else
{if((state_val_8428 === 5))
{var state_8427__$1 = state_8427;var statearr_8432_8460 = state_8427__$1;(statearr_8432_8460[2] = null);
(statearr_8432_8460[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8428 === 6))
{var inst_8423 = (state_8427[2]);var state_8427__$1 = state_8427;var statearr_8433_8461 = state_8427__$1;(statearr_8433_8461[2] = inst_8423);
(statearr_8433_8461[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8428 === 7))
{var inst_8394 = (state_8427[7]);var inst_8393 = (state_8427[2]);var inst_8394__$1 = cljs.core.nth.call(null,inst_8393,0,null);var inst_8395 = cljs.core.nth.call(null,inst_8393,1,null);var inst_8396 = cljs.core.sequential_QMARK_.call(null,inst_8394__$1);var state_8427__$1 = (function (){var statearr_8434 = state_8427;(statearr_8434[7] = inst_8394__$1);
(statearr_8434[8] = inst_8395);
return statearr_8434;
})();if(inst_8396)
{var statearr_8435_8462 = state_8427__$1;(statearr_8435_8462[1] = 8);
} else
{var statearr_8436_8463 = state_8427__$1;(statearr_8436_8463[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8428 === 8))
{var inst_8394 = (state_8427[7]);var inst_8398 = inst_8394;var inst_8399 = cljs.core.PersistentVector.EMPTY;var state_8427__$1 = (function (){var statearr_8437 = state_8427;(statearr_8437[9] = inst_8399);
(statearr_8437[10] = inst_8398);
return statearr_8437;
})();var statearr_8438_8464 = state_8427__$1;(statearr_8438_8464[2] = null);
(statearr_8438_8464[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8428 === 9))
{var inst_8394 = (state_8427[7]);var state_8427__$1 = state_8427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8427__$1,17,inst_8394);
} else
{if((state_val_8428 === 10))
{var inst_8395 = (state_8427[8]);var inst_8418 = (state_8427[2]);var inst_8419 = cljs.core.apply.call(null,handler,inst_8418,inst_8395);var state_8427__$1 = (function (){var statearr_8439 = state_8427;(statearr_8439[11] = inst_8419);
return statearr_8439;
})();var statearr_8440_8465 = state_8427__$1;(statearr_8440_8465[2] = null);
(statearr_8440_8465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8428 === 11))
{var inst_8398 = (state_8427[10]);var inst_8401 = cljs.core.empty_QMARK_.call(null,inst_8398);var state_8427__$1 = state_8427;if(inst_8401)
{var statearr_8441_8466 = state_8427__$1;(statearr_8441_8466[1] = 13);
} else
{var statearr_8442_8467 = state_8427__$1;(statearr_8442_8467[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8428 === 12))
{var inst_8413 = (state_8427[2]);var state_8427__$1 = state_8427;var statearr_8443_8468 = state_8427__$1;(statearr_8443_8468[2] = inst_8413);
(statearr_8443_8468[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8428 === 13))
{var inst_8399 = (state_8427[9]);var state_8427__$1 = state_8427;var statearr_8444_8469 = state_8427__$1;(statearr_8444_8469[2] = inst_8399);
(statearr_8444_8469[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8428 === 14))
{var inst_8398 = (state_8427[10]);var inst_8404 = cljs.core.rest.call(null,inst_8398);var inst_8405 = cljs.core.first.call(null,inst_8398);var state_8427__$1 = (function (){var statearr_8445 = state_8427;(statearr_8445[12] = inst_8404);
return statearr_8445;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8427__$1,16,inst_8405);
} else
{if((state_val_8428 === 15))
{var inst_8411 = (state_8427[2]);var state_8427__$1 = state_8427;var statearr_8446_8470 = state_8427__$1;(statearr_8446_8470[2] = inst_8411);
(statearr_8446_8470[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8428 === 16))
{var inst_8399 = (state_8427[9]);var inst_8404 = (state_8427[12]);var inst_8407 = (state_8427[2]);var inst_8408 = cljs.core.conj.call(null,inst_8399,inst_8407);var inst_8398 = inst_8404;var inst_8399__$1 = inst_8408;var state_8427__$1 = (function (){var statearr_8447 = state_8427;(statearr_8447[9] = inst_8399__$1);
(statearr_8447[10] = inst_8398);
return statearr_8447;
})();var statearr_8448_8471 = state_8427__$1;(statearr_8448_8471[2] = null);
(statearr_8448_8471[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8428 === 17))
{var inst_8416 = (state_8427[2]);var state_8427__$1 = state_8427;var statearr_8449_8472 = state_8427__$1;(statearr_8449_8472[2] = inst_8416);
(statearr_8449_8472[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_8453 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8453[0] = state_machine__5507__auto__);
(statearr_8453[1] = 1);
return statearr_8453;
});
var state_machine__5507__auto____1 = (function (state_8427){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8427);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8454){if((e8454 instanceof Object))
{var ex__5510__auto__ = e8454;var statearr_8455_8473 = state_8427;(statearr_8455_8473[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8427);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8474 = state_8427;
state_8427 = G__8474;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8427){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8456 = f__5522__auto__.call(null);(statearr_8456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8456;
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
var G__8477__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__8476 = rseq;var rcomm = cljs.core.nth.call(null,vec__8476,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__8476,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__8477 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8477__delegate.call(this,req_args);};
G__8477.cljs$lang$maxFixedArity = 0;
G__8477.cljs$lang$applyTo = (function (arglist__8478){
var req_args = cljs.core.seq(arglist__8478);
return G__8477__delegate(req_args);
});
G__8477.cljs$core$IFn$_invoke$arity$variadic = G__8477__delegate;
return G__8477;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8496){var state_val_8497 = (state_8496[1]);if((state_val_8497 === 2))
{var inst_8493 = (state_8496[2]);var inst_8494 = console.log(inst_8493);var state_8496__$1 = state_8496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8496__$1,inst_8494);
} else
{if((state_val_8497 === 1))
{var state_8496__$1 = state_8496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8496__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8501 = [null,null,null,null,null,null,null];(statearr_8501[0] = state_machine__5507__auto__);
(statearr_8501[1] = 1);
return statearr_8501;
});
var state_machine__5507__auto____1 = (function (state_8496){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8496);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8502){if((e8502 instanceof Object))
{var ex__5510__auto__ = e8502;var statearr_8503_8505 = state_8496;(statearr_8503_8505[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8496);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8506 = state_8496;
state_8496 = G__8506;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8496){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8504 = f__5522__auto__.call(null);(statearr_8504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__8507){
var f = cljs.core.first(arglist__8507);
var args = cljs.core.rest(arglist__8507);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__8510){var vec__8511 = p__8510;var k = cljs.core.nth.call(null,vec__8511,0,null);var v = cljs.core.nth.call(null,vec__8511,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
var portfolio_company_sites__delegate = function (p__8512){var vec__8514 = p__8512;var type_ids = cljs.core.nth.call(null,vec__8514,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__8512 = null;if (arguments.length > 0) {
  p__8512 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__8512);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__8515){
var p__8512 = cljs.core.seq(arglist__8515);
return portfolio_company_sites__delegate(p__8512);
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
var portfolio_company_stats__delegate = function (p__8516){var vec__8518 = p__8516;var type_ids = cljs.core.nth.call(null,vec__8518,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__8516 = null;if (arguments.length > 0) {
  p__8516 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__8516);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__8519){
var p__8516 = cljs.core.seq(arglist__8519);
return portfolio_company_stats__delegate(p__8516);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__8520){var vec__8522 = p__8520;var type_ids = cljs.core.nth.call(null,vec__8522,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__8520 = null;if (arguments.length > 0) {
  p__8520 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__8520);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__8523){
var p__8520 = cljs.core.seq(arglist__8523);
return portfolio_company_site_stats__delegate(p__8520);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__8524){var vec__8526 = p__8524;var type_ids = cljs.core.nth.call(null,vec__8526,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__8524 = null;if (arguments.length > 0) {
  p__8524 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__8524);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__8527){
var p__8524 = cljs.core.seq(arglist__8527);
return portfolio_company_account_stats__delegate(p__8524);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET.call(null,"/api/bvca/investor-companies-summary");
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/investor-companies/"),cljs.core.str(id)].join(''));
});

//# sourceMappingURL=api.js.map