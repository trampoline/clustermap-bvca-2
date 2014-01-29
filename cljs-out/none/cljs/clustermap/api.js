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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8457){var state_val_8458 = (state_8457[1]);if((state_val_8458 === 1))
{var state_8457__$1 = state_8457;var statearr_8459_8495 = state_8457__$1;(statearr_8459_8495[2] = null);
(statearr_8459_8495[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 2))
{var state_8457__$1 = state_8457;if(true)
{var statearr_8460_8496 = state_8457__$1;(statearr_8460_8496[1] = 4);
} else
{var statearr_8461_8497 = state_8457__$1;(statearr_8461_8497[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 3))
{var inst_8455 = (state_8457[2]);var state_8457__$1 = state_8457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8457__$1,inst_8455);
} else
{if((state_val_8458 === 4))
{var state_8457__$1 = state_8457;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8457__$1,7,ocomm);
} else
{if((state_val_8458 === 5))
{var state_8457__$1 = state_8457;var statearr_8462_8498 = state_8457__$1;(statearr_8462_8498[2] = null);
(statearr_8462_8498[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 6))
{var inst_8453 = (state_8457[2]);var state_8457__$1 = state_8457;var statearr_8463_8499 = state_8457__$1;(statearr_8463_8499[2] = inst_8453);
(statearr_8463_8499[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 7))
{var inst_8415 = (state_8457[7]);var inst_8414 = (state_8457[2]);var inst_8415__$1 = cljs.core.nth.call(null,inst_8414,0,null);var inst_8416 = cljs.core.nth.call(null,inst_8414,1,null);var inst_8417 = cljs.core.sequential_QMARK_.call(null,inst_8415__$1);var state_8457__$1 = (function (){var statearr_8464 = state_8457;(statearr_8464[8] = inst_8416);
(statearr_8464[7] = inst_8415__$1);
return statearr_8464;
})();if(inst_8417)
{var statearr_8465_8500 = state_8457__$1;(statearr_8465_8500[1] = 8);
} else
{var statearr_8466_8501 = state_8457__$1;(statearr_8466_8501[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 8))
{var inst_8415 = (state_8457[7]);var inst_8419 = inst_8415;var inst_8420 = cljs.core.PersistentVector.EMPTY;var state_8457__$1 = (function (){var statearr_8467 = state_8457;(statearr_8467[9] = inst_8419);
(statearr_8467[10] = inst_8420);
return statearr_8467;
})();var statearr_8468_8502 = state_8457__$1;(statearr_8468_8502[2] = null);
(statearr_8468_8502[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 9))
{var inst_8415 = (state_8457[7]);var state_8457__$1 = state_8457;if(cljs.core.truth_(inst_8415))
{var statearr_8469_8503 = state_8457__$1;(statearr_8469_8503[1] = 20);
} else
{var statearr_8470_8504 = state_8457__$1;(statearr_8470_8504[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 10))
{var inst_8416 = (state_8457[8]);var inst_8448 = (state_8457[2]);var inst_8449 = cljs.core.apply.call(null,handler,inst_8448,inst_8416);var state_8457__$1 = (function (){var statearr_8471 = state_8457;(statearr_8471[11] = inst_8449);
return statearr_8471;
})();var statearr_8472_8505 = state_8457__$1;(statearr_8472_8505[2] = null);
(statearr_8472_8505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 11))
{var inst_8419 = (state_8457[9]);var inst_8422 = cljs.core.empty_QMARK_.call(null,inst_8419);var state_8457__$1 = state_8457;if(inst_8422)
{var statearr_8473_8506 = state_8457__$1;(statearr_8473_8506[1] = 13);
} else
{var statearr_8474_8507 = state_8457__$1;(statearr_8474_8507[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 12))
{var inst_8439 = (state_8457[2]);var state_8457__$1 = state_8457;var statearr_8475_8508 = state_8457__$1;(statearr_8475_8508[2] = inst_8439);
(statearr_8475_8508[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 13))
{var inst_8420 = (state_8457[10]);var state_8457__$1 = state_8457;var statearr_8476_8509 = state_8457__$1;(statearr_8476_8509[2] = inst_8420);
(statearr_8476_8509[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 14))
{var inst_8419 = (state_8457[9]);var inst_8425 = cljs.core.rest.call(null,inst_8419);var inst_8426 = cljs.core.first.call(null,inst_8419);var state_8457__$1 = (function (){var statearr_8477 = state_8457;(statearr_8477[12] = inst_8425);
return statearr_8477;
})();if(cljs.core.truth_(inst_8426))
{var statearr_8478_8510 = state_8457__$1;(statearr_8478_8510[1] = 16);
} else
{var statearr_8479_8511 = state_8457__$1;(statearr_8479_8511[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 15))
{var inst_8437 = (state_8457[2]);var state_8457__$1 = state_8457;var statearr_8480_8512 = state_8457__$1;(statearr_8480_8512[2] = inst_8437);
(statearr_8480_8512[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 16))
{var inst_8419 = (state_8457[9]);var inst_8428 = cljs.core.first.call(null,inst_8419);var state_8457__$1 = state_8457;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8457__$1,19,inst_8428);
} else
{if((state_val_8458 === 17))
{var state_8457__$1 = state_8457;var statearr_8481_8513 = state_8457__$1;(statearr_8481_8513[2] = null);
(statearr_8481_8513[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 18))
{var inst_8425 = (state_8457[12]);var inst_8420 = (state_8457[10]);var inst_8433 = (state_8457[2]);var inst_8434 = cljs.core.conj.call(null,inst_8420,inst_8433);var inst_8419 = inst_8425;var inst_8420__$1 = inst_8434;var state_8457__$1 = (function (){var statearr_8482 = state_8457;(statearr_8482[9] = inst_8419);
(statearr_8482[10] = inst_8420__$1);
return statearr_8482;
})();var statearr_8483_8514 = state_8457__$1;(statearr_8483_8514[2] = null);
(statearr_8483_8514[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 19))
{var inst_8430 = (state_8457[2]);var state_8457__$1 = state_8457;var statearr_8484_8515 = state_8457__$1;(statearr_8484_8515[2] = inst_8430);
(statearr_8484_8515[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 20))
{var inst_8415 = (state_8457[7]);var state_8457__$1 = state_8457;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8457__$1,23,inst_8415);
} else
{if((state_val_8458 === 21))
{var state_8457__$1 = state_8457;var statearr_8485_8516 = state_8457__$1;(statearr_8485_8516[2] = null);
(statearr_8485_8516[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 22))
{var inst_8446 = (state_8457[2]);var state_8457__$1 = state_8457;var statearr_8486_8517 = state_8457__$1;(statearr_8486_8517[2] = inst_8446);
(statearr_8486_8517[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8458 === 23))
{var inst_8443 = (state_8457[2]);var state_8457__$1 = state_8457;var statearr_8487_8518 = state_8457__$1;(statearr_8487_8518[2] = inst_8443);
(statearr_8487_8518[1] = 22);
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
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8491 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8491[0] = state_machine__5507__auto__);
(statearr_8491[1] = 1);
return statearr_8491;
});
var state_machine__5507__auto____1 = (function (state_8457){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8457);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8492){if((e8492 instanceof Object))
{var ex__5510__auto__ = e8492;var statearr_8493_8519 = state_8457;(statearr_8493_8519[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8457);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8492;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8520 = state_8457;
state_8457 = G__8520;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8457){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8494 = f__5522__auto__.call(null);(statearr_8494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8494;
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
var G__8523__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__8522 = rseq;var rcomm = cljs.core.nth.call(null,vec__8522,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__8522,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__8523 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8523__delegate.call(this,req_args);};
G__8523.cljs$lang$maxFixedArity = 0;
G__8523.cljs$lang$applyTo = (function (arglist__8524){
var req_args = cljs.core.seq(arglist__8524);
return G__8523__delegate(req_args);
});
G__8523.cljs$core$IFn$_invoke$arity$variadic = G__8523__delegate;
return G__8523;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8542){var state_val_8543 = (state_8542[1]);if((state_val_8543 === 2))
{var inst_8539 = (state_8542[2]);var inst_8540 = console.log(inst_8539);var state_8542__$1 = state_8542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8542__$1,inst_8540);
} else
{if((state_val_8543 === 1))
{var state_8542__$1 = state_8542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8542__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8547 = [null,null,null,null,null,null,null];(statearr_8547[0] = state_machine__5507__auto__);
(statearr_8547[1] = 1);
return statearr_8547;
});
var state_machine__5507__auto____1 = (function (state_8542){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8542);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8548){if((e8548 instanceof Object))
{var ex__5510__auto__ = e8548;var statearr_8549_8551 = state_8542;(statearr_8549_8551[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8542);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8552 = state_8542;
state_8542 = G__8552;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8542){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8550 = f__5522__auto__.call(null);(statearr_8550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8550;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__8553){
var f = cljs.core.first(arglist__8553);
var args = cljs.core.rest(arglist__8553);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__8556){var vec__8557 = p__8556;var k = cljs.core.nth.call(null,vec__8557,0,null);var v = cljs.core.nth.call(null,vec__8557,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > 0))
{return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituencies = (function constituencies(){return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies");
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/constituencies/"),cljs.core.str(id)].join(''));
});
clustermap.api.portfolio_companies_summary = (function portfolio_companies_summary(){return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/portfolio-companies-summary");
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__8558){var vec__8560 = p__8558;var type_ids = cljs.core.nth.call(null,vec__8560,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__8558 = null;if (arguments.length > 0) {
  p__8558 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__8558);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__8561){
var p__8558 = cljs.core.seq(arglist__8561);
return portfolio_company_sites__delegate(p__8558);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__8562){var vec__8564 = p__8562;var type_ids = cljs.core.nth.call(null,vec__8564,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__8562 = null;if (arguments.length > 0) {
  p__8562 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__8562);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__8565){
var p__8562 = cljs.core.seq(arglist__8565);
return portfolio_company_locations__delegate(p__8562);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__8566){var vec__8568 = p__8566;var type_ids = cljs.core.nth.call(null,vec__8568,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__8566 = null;if (arguments.length > 0) {
  p__8566 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__8566);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__8569){
var p__8566 = cljs.core.seq(arglist__8569);
return portfolio_company_stats__delegate(p__8566);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__8570){var vec__8572 = p__8570;var type_ids = cljs.core.nth.call(null,vec__8572,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__8570 = null;if (arguments.length > 0) {
  p__8570 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__8570);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__8573){
var p__8570 = cljs.core.seq(arglist__8573);
return portfolio_company_site_stats__delegate(p__8570);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__8574){var vec__8576 = p__8574;var type_ids = cljs.core.nth.call(null,vec__8576,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__8574 = null;if (arguments.length > 0) {
  p__8574 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__8574);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__8577){
var p__8574 = cljs.core.seq(arglist__8577);
return portfolio_company_site_account_timelines__delegate(p__8574);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__8578){var vec__8580 = p__8578;var type_ids = cljs.core.nth.call(null,vec__8580,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__8578 = null;if (arguments.length > 0) {
  p__8578 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__8578);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__8581){
var p__8578 = cljs.core.seq(arglist__8581);
return portfolio_company_account_stats__delegate(p__8578);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/investor-companies-summary");
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_index = (function() { 
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,[cljs.core.str("/api/boundaryline-collection-index/"),cljs.core.str(id)].join(''),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__8582){
var id = cljs.core.first(arglist__8582);
var opts = cljs.core.rest(arglist__8582);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,[cljs.core.str("/api/boundarylines/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(tolerance)].join(''),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__8583){
var id = cljs.core.first(arglist__8583);
arglist__8583 = cljs.core.next(arglist__8583);
var tolerance = cljs.core.first(arglist__8583);
var opts = cljs.core.rest(arglist__8583);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;

//# sourceMappingURL=api.js.map