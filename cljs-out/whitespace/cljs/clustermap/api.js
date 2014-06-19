// Compiled by ClojureScript 0.0-2227
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
var GET__delegate = function (url,p__43385){var map__43387 = p__43385;var map__43387__$1 = ((cljs.core.seq_QMARK_.call(null,map__43387))?cljs.core.apply.call(null,cljs.core.hash_map,map__43387):map__43387);var raw = cljs.core.get.call(null,map__43387__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,((function (comm,map__43387,map__43387__$1,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__43387,map__43387__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}
});})(comm,map__43387,map__43387__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__43387,map__43387__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__43385 = null;if (arguments.length > 1) {
  p__43385 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__43385);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__43388){
var url = cljs.core.first(arglist__43388);
var p__43385 = cljs.core.rest(arglist__43388);
return GET__delegate(url,p__43385);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_43521){var state_val_43522 = (state_43521[1]);if((state_val_43522 === 7))
{var inst_43479 = (state_43521[7]);var inst_43478 = (state_43521[2]);var inst_43479__$1 = cljs.core.nth.call(null,inst_43478,0,null);var inst_43480 = cljs.core.nth.call(null,inst_43478,1,null);var inst_43481 = cljs.core.sequential_QMARK_.call(null,inst_43479__$1);var state_43521__$1 = (function (){var statearr_43523 = state_43521;(statearr_43523[7] = inst_43479__$1);
(statearr_43523[8] = inst_43480);
return statearr_43523;
})();if(inst_43481)
{var statearr_43524_43559 = state_43521__$1;(statearr_43524_43559[1] = 8);
} else
{var statearr_43525_43560 = state_43521__$1;(statearr_43525_43560[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 20))
{var inst_43479 = (state_43521[7]);var state_43521__$1 = state_43521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43521__$1,23,inst_43479);
} else
{if((state_val_43522 === 1))
{var state_43521__$1 = state_43521;var statearr_43526_43561 = state_43521__$1;(statearr_43526_43561[2] = null);
(statearr_43526_43561[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 4))
{var state_43521__$1 = state_43521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43521__$1,7,ocomm);
} else
{if((state_val_43522 === 15))
{var inst_43501 = (state_43521[2]);var state_43521__$1 = state_43521;var statearr_43527_43562 = state_43521__$1;(statearr_43527_43562[2] = inst_43501);
(statearr_43527_43562[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 21))
{var state_43521__$1 = state_43521;var statearr_43528_43563 = state_43521__$1;(statearr_43528_43563[2] = null);
(statearr_43528_43563[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 13))
{var inst_43484 = (state_43521[9]);var state_43521__$1 = state_43521;var statearr_43529_43564 = state_43521__$1;(statearr_43529_43564[2] = inst_43484);
(statearr_43529_43564[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 22))
{var inst_43510 = (state_43521[2]);var state_43521__$1 = state_43521;var statearr_43530_43565 = state_43521__$1;(statearr_43530_43565[2] = inst_43510);
(statearr_43530_43565[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 6))
{var inst_43517 = (state_43521[2]);var state_43521__$1 = state_43521;var statearr_43531_43566 = state_43521__$1;(statearr_43531_43566[2] = inst_43517);
(statearr_43531_43566[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 17))
{var state_43521__$1 = state_43521;var statearr_43532_43567 = state_43521__$1;(statearr_43532_43567[2] = null);
(statearr_43532_43567[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 3))
{var inst_43519 = (state_43521[2]);var state_43521__$1 = state_43521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43521__$1,inst_43519);
} else
{if((state_val_43522 === 12))
{var inst_43503 = (state_43521[2]);var state_43521__$1 = state_43521;var statearr_43533_43568 = state_43521__$1;(statearr_43533_43568[2] = inst_43503);
(statearr_43533_43568[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 2))
{var state_43521__$1 = state_43521;if(true)
{var statearr_43534_43569 = state_43521__$1;(statearr_43534_43569[1] = 4);
} else
{var statearr_43535_43570 = state_43521__$1;(statearr_43535_43570[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 23))
{var inst_43507 = (state_43521[2]);var state_43521__$1 = state_43521;var statearr_43536_43571 = state_43521__$1;(statearr_43536_43571[2] = inst_43507);
(statearr_43536_43571[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 19))
{var inst_43494 = (state_43521[2]);var state_43521__$1 = state_43521;var statearr_43537_43572 = state_43521__$1;(statearr_43537_43572[2] = inst_43494);
(statearr_43537_43572[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 11))
{var inst_43483 = (state_43521[10]);var inst_43486 = cljs.core.empty_QMARK_.call(null,inst_43483);var state_43521__$1 = state_43521;if(inst_43486)
{var statearr_43538_43573 = state_43521__$1;(statearr_43538_43573[1] = 13);
} else
{var statearr_43539_43574 = state_43521__$1;(statearr_43539_43574[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 9))
{var inst_43479 = (state_43521[7]);var state_43521__$1 = state_43521;if(cljs.core.truth_(inst_43479))
{var statearr_43540_43575 = state_43521__$1;(statearr_43540_43575[1] = 20);
} else
{var statearr_43541_43576 = state_43521__$1;(statearr_43541_43576[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 5))
{var state_43521__$1 = state_43521;var statearr_43542_43577 = state_43521__$1;(statearr_43542_43577[2] = null);
(statearr_43542_43577[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 14))
{var inst_43483 = (state_43521[10]);var inst_43489 = cljs.core.rest.call(null,inst_43483);var inst_43490 = cljs.core.first.call(null,inst_43483);var state_43521__$1 = (function (){var statearr_43543 = state_43521;(statearr_43543[11] = inst_43489);
return statearr_43543;
})();if(cljs.core.truth_(inst_43490))
{var statearr_43544_43578 = state_43521__$1;(statearr_43544_43578[1] = 16);
} else
{var statearr_43545_43579 = state_43521__$1;(statearr_43545_43579[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 16))
{var inst_43483 = (state_43521[10]);var inst_43492 = cljs.core.first.call(null,inst_43483);var state_43521__$1 = state_43521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43521__$1,19,inst_43492);
} else
{if((state_val_43522 === 10))
{var inst_43480 = (state_43521[8]);var inst_43512 = (state_43521[2]);var inst_43513 = cljs.core.apply.call(null,handler,inst_43512,inst_43480);var state_43521__$1 = (function (){var statearr_43546 = state_43521;(statearr_43546[12] = inst_43513);
return statearr_43546;
})();var statearr_43547_43580 = state_43521__$1;(statearr_43547_43580[2] = null);
(statearr_43547_43580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 18))
{var inst_43489 = (state_43521[11]);var inst_43484 = (state_43521[9]);var inst_43497 = (state_43521[2]);var inst_43498 = cljs.core.conj.call(null,inst_43484,inst_43497);var inst_43483 = inst_43489;var inst_43484__$1 = inst_43498;var state_43521__$1 = (function (){var statearr_43548 = state_43521;(statearr_43548[10] = inst_43483);
(statearr_43548[9] = inst_43484__$1);
return statearr_43548;
})();var statearr_43549_43581 = state_43521__$1;(statearr_43549_43581[2] = null);
(statearr_43549_43581[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43522 === 8))
{var inst_43479 = (state_43521[7]);var inst_43483 = inst_43479;var inst_43484 = cljs.core.PersistentVector.EMPTY;var state_43521__$1 = (function (){var statearr_43550 = state_43521;(statearr_43550[10] = inst_43483);
(statearr_43550[9] = inst_43484);
return statearr_43550;
})();var statearr_43551_43582 = state_43521__$1;(statearr_43551_43582[2] = null);
(statearr_43551_43582[1] = 11);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_43555 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43555[0] = state_machine__5675__auto__);
(statearr_43555[1] = 1);
return statearr_43555;
});
var state_machine__5675__auto____1 = (function (state_43521){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_43521);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e43556){if((e43556 instanceof Object))
{var ex__5678__auto__ = e43556;var statearr_43557_43583 = state_43521;(statearr_43557_43583[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43521);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43556;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43584 = state_43521;
state_43521 = G__43584;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_43521){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_43521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_43558 = f__5690__auto__.call(null);(statearr_43558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_43558;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__43587__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__43586 = rseq;var rcomm = cljs.core.nth.call(null,vec__43586,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__43586,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__43587 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__43587__delegate.call(this,req_args);};
G__43587.cljs$lang$maxFixedArity = 0;
G__43587.cljs$lang$applyTo = (function (arglist__43588){
var req_args = cljs.core.seq(arglist__43588);
return G__43587__delegate(req_args);
});
G__43587.cljs$core$IFn$_invoke$arity$variadic = G__43587__delegate;
return G__43587;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__,ch){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__,ch){
return (function (state_43606){var state_val_43607 = (state_43606[1]);if((state_val_43607 === 2))
{var inst_43603 = (state_43606[2]);var inst_43604 = console.log(inst_43603);var state_43606__$1 = state_43606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43606__$1,inst_43604);
} else
{if((state_val_43607 === 1))
{var state_43606__$1 = state_43606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43606__$1,2,ch);
} else
{return null;
}
}
});})(c__5689__auto__,ch))
;return ((function (switch__5674__auto__,c__5689__auto__,ch){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_43611 = [null,null,null,null,null,null,null];(statearr_43611[0] = state_machine__5675__auto__);
(statearr_43611[1] = 1);
return statearr_43611;
});
var state_machine__5675__auto____1 = (function (state_43606){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_43606);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e43612){if((e43612 instanceof Object))
{var ex__5678__auto__ = e43612;var statearr_43613_43615 = state_43606;(statearr_43613_43615[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43606);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43612;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43616 = state_43606;
state_43606 = G__43616;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_43606){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_43606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__,ch))
})();var state__5691__auto__ = (function (){var statearr_43614 = f__5690__auto__.call(null);(statearr_43614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_43614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__,ch))
);
return c__5689__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__43617){
var f = cljs.core.first(arglist__43617);
var args = cljs.core.rest(arglist__43617);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__43620){var vec__43621 = p__43620;var k = cljs.core.nth.call(null,vec__43621,0,null);var v = cljs.core.nth.call(null,vec__43621,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__43622){
var id = cljs.core.first(arglist__43622);
arglist__43622 = cljs.core.next(arglist__43622);
var tolerance = cljs.core.first(arglist__43622);
var opts = cljs.core.rest(arglist__43622);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__43623){
var id = cljs.core.first(arglist__43623);
var opts = cljs.core.rest(arglist__43623);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > 0))
{return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/constituencies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__43624){var vec__43626 = p__43624;var type_ids = cljs.core.nth.call(null,vec__43626,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__43624 = null;if (arguments.length > 0) {
  p__43624 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__43624);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__43627){
var p__43624 = cljs.core.seq(arglist__43627);
return portfolio_company_sites__delegate(p__43624);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__43628){var vec__43630 = p__43628;var type_ids = cljs.core.nth.call(null,vec__43630,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__43628 = null;if (arguments.length > 0) {
  p__43628 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__43628);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__43631){
var p__43628 = cljs.core.seq(arglist__43631);
return portfolio_company_sites_by_company__delegate(p__43628);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__43632){var vec__43634 = p__43632;var type_ids = cljs.core.nth.call(null,vec__43634,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__43632 = null;if (arguments.length > 0) {
  p__43632 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__43632);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__43635){
var p__43632 = cljs.core.seq(arglist__43635);
return portfolio_company_locations__delegate(p__43632);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__43636){var vec__43638 = p__43636;var type_ids = cljs.core.nth.call(null,vec__43638,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__43636 = null;if (arguments.length > 0) {
  p__43636 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__43636);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__43639){
var p__43636 = cljs.core.seq(arglist__43639);
return portfolio_company_site_stats__delegate(p__43636);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__43640){var vec__43642 = p__43640;var type_ids = cljs.core.nth.call(null,vec__43642,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__43640 = null;if (arguments.length > 0) {
  p__43640 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__43640);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__43643){
var p__43640 = cljs.core.seq(arglist__43643);
return portfolio_company_site_account_timelines__delegate(p__43640);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investor-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__43644){var vec__43646 = p__43644;var type_ids = cljs.core.nth.call(null,vec__43646,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__43644 = null;if (arguments.length > 0) {
  p__43644 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__43644);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__43647){
var p__43644 = cljs.core.seq(arglist__43647);
return investment_account_timelines__delegate(p__43644);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__43648){var vec__43650 = p__43648;var type_ids = cljs.core.nth.call(null,vec__43650,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__43648 = null;if (arguments.length > 0) {
  p__43648 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__43648);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__43651){
var p__43648 = cljs.core.seq(arglist__43651);
return investment_stats__delegate(p__43648);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__43652){var vec__43654 = p__43652;var type_ids = cljs.core.nth.call(null,vec__43654,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__43652 = null;if (arguments.length > 0) {
  p__43652 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__43652);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__43655){
var p__43652 = cljs.core.seq(arglist__43655);
return investment_aggs__delegate(p__43652);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__43656){var vec__43658 = p__43656;var type_ids = cljs.core.nth.call(null,vec__43658,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__43656 = null;if (arguments.length > 0) {
  p__43656 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__43656);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__43659){
var p__43656 = cljs.core.seq(arglist__43659);
return investments__delegate(p__43656);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
