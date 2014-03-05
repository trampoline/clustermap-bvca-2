// Compiled by ClojureScript 0.0-2173
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
var GET__delegate = function (url,p__8370){var map__8372 = p__8370;var map__8372__$1 = ((cljs.core.seq_QMARK_.call(null,map__8372))?cljs.core.apply.call(null,cljs.core.hash_map,map__8372):map__8372);var raw = cljs.core.get.call(null,map__8372__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__8370 = null;if (arguments.length > 1) {
  p__8370 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__8370);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__8373){
var url = cljs.core.first(arglist__8373);
var p__8370 = cljs.core.rest(arglist__8373);
return GET__delegate(url,p__8370);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_8506){var state_val_8507 = (state_8506[1]);if((state_val_8507 === 1))
{var state_8506__$1 = state_8506;var statearr_8508_8544 = state_8506__$1;(statearr_8508_8544[2] = null);
(statearr_8508_8544[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 2))
{var state_8506__$1 = state_8506;if(true)
{var statearr_8509_8545 = state_8506__$1;(statearr_8509_8545[1] = 4);
} else
{var statearr_8510_8546 = state_8506__$1;(statearr_8510_8546[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 3))
{var inst_8504 = (state_8506[2]);var state_8506__$1 = state_8506;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8506__$1,inst_8504);
} else
{if((state_val_8507 === 4))
{var state_8506__$1 = state_8506;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8506__$1,7,ocomm);
} else
{if((state_val_8507 === 5))
{var state_8506__$1 = state_8506;var statearr_8511_8547 = state_8506__$1;(statearr_8511_8547[2] = null);
(statearr_8511_8547[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 6))
{var inst_8502 = (state_8506[2]);var state_8506__$1 = state_8506;var statearr_8512_8548 = state_8506__$1;(statearr_8512_8548[2] = inst_8502);
(statearr_8512_8548[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 7))
{var inst_8464 = (state_8506[7]);var inst_8463 = (state_8506[2]);var inst_8464__$1 = cljs.core.nth.call(null,inst_8463,0,null);var inst_8465 = cljs.core.nth.call(null,inst_8463,1,null);var inst_8466 = cljs.core.sequential_QMARK_.call(null,inst_8464__$1);var state_8506__$1 = (function (){var statearr_8513 = state_8506;(statearr_8513[8] = inst_8465);
(statearr_8513[7] = inst_8464__$1);
return statearr_8513;
})();if(inst_8466)
{var statearr_8514_8549 = state_8506__$1;(statearr_8514_8549[1] = 8);
} else
{var statearr_8515_8550 = state_8506__$1;(statearr_8515_8550[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 8))
{var inst_8464 = (state_8506[7]);var inst_8468 = inst_8464;var inst_8469 = cljs.core.PersistentVector.EMPTY;var state_8506__$1 = (function (){var statearr_8516 = state_8506;(statearr_8516[9] = inst_8469);
(statearr_8516[10] = inst_8468);
return statearr_8516;
})();var statearr_8517_8551 = state_8506__$1;(statearr_8517_8551[2] = null);
(statearr_8517_8551[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 9))
{var inst_8464 = (state_8506[7]);var state_8506__$1 = state_8506;if(cljs.core.truth_(inst_8464))
{var statearr_8518_8552 = state_8506__$1;(statearr_8518_8552[1] = 20);
} else
{var statearr_8519_8553 = state_8506__$1;(statearr_8519_8553[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 10))
{var inst_8465 = (state_8506[8]);var inst_8497 = (state_8506[2]);var inst_8498 = cljs.core.apply.call(null,handler,inst_8497,inst_8465);var state_8506__$1 = (function (){var statearr_8520 = state_8506;(statearr_8520[11] = inst_8498);
return statearr_8520;
})();var statearr_8521_8554 = state_8506__$1;(statearr_8521_8554[2] = null);
(statearr_8521_8554[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 11))
{var inst_8468 = (state_8506[10]);var inst_8471 = cljs.core.empty_QMARK_.call(null,inst_8468);var state_8506__$1 = state_8506;if(inst_8471)
{var statearr_8522_8555 = state_8506__$1;(statearr_8522_8555[1] = 13);
} else
{var statearr_8523_8556 = state_8506__$1;(statearr_8523_8556[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 12))
{var inst_8488 = (state_8506[2]);var state_8506__$1 = state_8506;var statearr_8524_8557 = state_8506__$1;(statearr_8524_8557[2] = inst_8488);
(statearr_8524_8557[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 13))
{var inst_8469 = (state_8506[9]);var state_8506__$1 = state_8506;var statearr_8525_8558 = state_8506__$1;(statearr_8525_8558[2] = inst_8469);
(statearr_8525_8558[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 14))
{var inst_8468 = (state_8506[10]);var inst_8474 = cljs.core.rest.call(null,inst_8468);var inst_8475 = cljs.core.first.call(null,inst_8468);var state_8506__$1 = (function (){var statearr_8526 = state_8506;(statearr_8526[12] = inst_8474);
return statearr_8526;
})();if(cljs.core.truth_(inst_8475))
{var statearr_8527_8559 = state_8506__$1;(statearr_8527_8559[1] = 16);
} else
{var statearr_8528_8560 = state_8506__$1;(statearr_8528_8560[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 15))
{var inst_8486 = (state_8506[2]);var state_8506__$1 = state_8506;var statearr_8529_8561 = state_8506__$1;(statearr_8529_8561[2] = inst_8486);
(statearr_8529_8561[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 16))
{var inst_8468 = (state_8506[10]);var inst_8477 = cljs.core.first.call(null,inst_8468);var state_8506__$1 = state_8506;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8506__$1,19,inst_8477);
} else
{if((state_val_8507 === 17))
{var state_8506__$1 = state_8506;var statearr_8530_8562 = state_8506__$1;(statearr_8530_8562[2] = null);
(statearr_8530_8562[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 18))
{var inst_8469 = (state_8506[9]);var inst_8474 = (state_8506[12]);var inst_8482 = (state_8506[2]);var inst_8483 = cljs.core.conj.call(null,inst_8469,inst_8482);var inst_8468 = inst_8474;var inst_8469__$1 = inst_8483;var state_8506__$1 = (function (){var statearr_8531 = state_8506;(statearr_8531[9] = inst_8469__$1);
(statearr_8531[10] = inst_8468);
return statearr_8531;
})();var statearr_8532_8563 = state_8506__$1;(statearr_8532_8563[2] = null);
(statearr_8532_8563[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 19))
{var inst_8479 = (state_8506[2]);var state_8506__$1 = state_8506;var statearr_8533_8564 = state_8506__$1;(statearr_8533_8564[2] = inst_8479);
(statearr_8533_8564[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 20))
{var inst_8464 = (state_8506[7]);var state_8506__$1 = state_8506;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8506__$1,23,inst_8464);
} else
{if((state_val_8507 === 21))
{var state_8506__$1 = state_8506;var statearr_8534_8565 = state_8506__$1;(statearr_8534_8565[2] = null);
(statearr_8534_8565[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 22))
{var inst_8495 = (state_8506[2]);var state_8506__$1 = state_8506;var statearr_8535_8566 = state_8506__$1;(statearr_8535_8566[2] = inst_8495);
(statearr_8535_8566[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8507 === 23))
{var inst_8492 = (state_8506[2]);var state_8506__$1 = state_8506;var statearr_8536_8567 = state_8506__$1;(statearr_8536_8567[2] = inst_8492);
(statearr_8536_8567[1] = 22);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_8540 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8540[0] = state_machine__5548__auto__);
(statearr_8540[1] = 1);
return statearr_8540;
});
var state_machine__5548__auto____1 = (function (state_8506){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_8506);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e8541){if((e8541 instanceof Object))
{var ex__5551__auto__ = e8541;var statearr_8542_8568 = state_8506;(statearr_8542_8568[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8506);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8569 = state_8506;
state_8506 = G__8569;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_8506){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_8506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_8543 = f__5563__auto__.call(null);(statearr_8543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_8543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return (function() { 
var G__8572__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__8571 = rseq;var rcomm = cljs.core.nth.call(null,vec__8571,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__8571,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__8572 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8572__delegate.call(this,req_args);};
G__8572.cljs$lang$maxFixedArity = 0;
G__8572.cljs$lang$applyTo = (function (arglist__8573){
var req_args = cljs.core.seq(arglist__8573);
return G__8572__delegate(req_args);
});
G__8572.cljs$core$IFn$_invoke$arity$variadic = G__8572__delegate;
return G__8572;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_8591){var state_val_8592 = (state_8591[1]);if((state_val_8592 === 2))
{var inst_8588 = (state_8591[2]);var inst_8589 = console.log(inst_8588);var state_8591__$1 = state_8591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8591__$1,inst_8589);
} else
{if((state_val_8592 === 1))
{var state_8591__$1 = state_8591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8591__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_8596 = [null,null,null,null,null,null,null];(statearr_8596[0] = state_machine__5548__auto__);
(statearr_8596[1] = 1);
return statearr_8596;
});
var state_machine__5548__auto____1 = (function (state_8591){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_8591);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e8597){if((e8597 instanceof Object))
{var ex__5551__auto__ = e8597;var statearr_8598_8600 = state_8591;(statearr_8598_8600[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8591);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8601 = state_8591;
state_8591 = G__8601;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_8591){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_8591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_8599 = f__5563__auto__.call(null);(statearr_8599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_8599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__8602){
var f = cljs.core.first(arglist__8602);
var args = cljs.core.rest(arglist__8602);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__8605){var vec__8606 = p__8605;var k = cljs.core.nth.call(null,vec__8606,0,null);var v = cljs.core.nth.call(null,vec__8606,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
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
boundarylines.cljs$lang$applyTo = (function (arglist__8607){
var id = cljs.core.first(arglist__8607);
arglist__8607 = cljs.core.next(arglist__8607);
var tolerance = cljs.core.first(arglist__8607);
var opts = cljs.core.rest(arglist__8607);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__8608){
var id = cljs.core.first(arglist__8608);
var opts = cljs.core.rest(arglist__8608);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > 0))
{return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/constituencies/"),cljs.core.str(id)].join(''));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__8609){var vec__8611 = p__8609;var type_ids = cljs.core.nth.call(null,vec__8611,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__8609 = null;if (arguments.length > 0) {
  p__8609 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__8609);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__8612){
var p__8609 = cljs.core.seq(arglist__8612);
return portfolio_company_sites__delegate(p__8609);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__8613){var vec__8615 = p__8613;var type_ids = cljs.core.nth.call(null,vec__8615,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__8613 = null;if (arguments.length > 0) {
  p__8613 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__8613);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__8616){
var p__8613 = cljs.core.seq(arglist__8616);
return portfolio_company_sites_by_company__delegate(p__8613);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__8617){var vec__8619 = p__8617;var type_ids = cljs.core.nth.call(null,vec__8619,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__8617 = null;if (arguments.length > 0) {
  p__8617 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__8617);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__8620){
var p__8617 = cljs.core.seq(arglist__8620);
return portfolio_company_locations__delegate(p__8617);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__8621){var vec__8623 = p__8621;var type_ids = cljs.core.nth.call(null,vec__8623,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__8621 = null;if (arguments.length > 0) {
  p__8621 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__8621);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__8624){
var p__8621 = cljs.core.seq(arglist__8624);
return portfolio_company_site_stats__delegate(p__8621);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__8625){var vec__8627 = p__8625;var type_ids = cljs.core.nth.call(null,vec__8627,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__8625 = null;if (arguments.length > 0) {
  p__8625 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__8625);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__8628){
var p__8625 = cljs.core.seq(arglist__8628);
return portfolio_company_site_account_timelines__delegate(p__8625);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__8629){var vec__8631 = p__8629;var type_ids = cljs.core.nth.call(null,vec__8631,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__8629 = null;if (arguments.length > 0) {
  p__8629 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__8629);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__8632){
var p__8629 = cljs.core.seq(arglist__8632);
return investment_account_timelines__delegate(p__8629);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__8633){var vec__8635 = p__8633;var type_ids = cljs.core.nth.call(null,vec__8635,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__8633 = null;if (arguments.length > 0) {
  p__8633 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__8633);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__8636){
var p__8633 = cljs.core.seq(arglist__8636);
return investment_stats__delegate(p__8633);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__8637){var vec__8639 = p__8637;var type_ids = cljs.core.nth.call(null,vec__8639,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__8637 = null;if (arguments.length > 0) {
  p__8637 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__8637);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__8640){
var p__8637 = cljs.core.seq(arglist__8640);
return investment_aggs__delegate(p__8637);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__8641){var vec__8643 = p__8641;var type_ids = cljs.core.nth.call(null,vec__8643,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__8641 = null;if (arguments.length > 0) {
  p__8641 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__8641);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__8644){
var p__8641 = cljs.core.seq(arglist__8644);
return investments__delegate(p__8641);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
