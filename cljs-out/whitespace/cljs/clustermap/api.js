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
var GET__delegate = function (url,p__43361){var map__43363 = p__43361;var map__43363__$1 = ((cljs.core.seq_QMARK_.call(null,map__43363))?cljs.core.apply.call(null,cljs.core.hash_map,map__43363):map__43363);var raw = cljs.core.get.call(null,map__43363__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,((function (comm,map__43363,map__43363__$1,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__43363,map__43363__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}
});})(comm,map__43363,map__43363__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__43363,map__43363__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__43361 = null;if (arguments.length > 1) {
  p__43361 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__43361);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__43364){
var url = cljs.core.first(arglist__43364);
var p__43361 = cljs.core.rest(arglist__43364);
return GET__delegate(url,p__43361);
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
return (function (state_43497){var state_val_43498 = (state_43497[1]);if((state_val_43498 === 7))
{var inst_43455 = (state_43497[7]);var inst_43454 = (state_43497[2]);var inst_43455__$1 = cljs.core.nth.call(null,inst_43454,0,null);var inst_43456 = cljs.core.nth.call(null,inst_43454,1,null);var inst_43457 = cljs.core.sequential_QMARK_.call(null,inst_43455__$1);var state_43497__$1 = (function (){var statearr_43499 = state_43497;(statearr_43499[7] = inst_43455__$1);
(statearr_43499[8] = inst_43456);
return statearr_43499;
})();if(inst_43457)
{var statearr_43500_43535 = state_43497__$1;(statearr_43500_43535[1] = 8);
} else
{var statearr_43501_43536 = state_43497__$1;(statearr_43501_43536[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 20))
{var inst_43455 = (state_43497[7]);var state_43497__$1 = state_43497;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43497__$1,23,inst_43455);
} else
{if((state_val_43498 === 1))
{var state_43497__$1 = state_43497;var statearr_43502_43537 = state_43497__$1;(statearr_43502_43537[2] = null);
(statearr_43502_43537[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 4))
{var state_43497__$1 = state_43497;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43497__$1,7,ocomm);
} else
{if((state_val_43498 === 15))
{var inst_43477 = (state_43497[2]);var state_43497__$1 = state_43497;var statearr_43503_43538 = state_43497__$1;(statearr_43503_43538[2] = inst_43477);
(statearr_43503_43538[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 21))
{var state_43497__$1 = state_43497;var statearr_43504_43539 = state_43497__$1;(statearr_43504_43539[2] = null);
(statearr_43504_43539[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 13))
{var inst_43460 = (state_43497[9]);var state_43497__$1 = state_43497;var statearr_43505_43540 = state_43497__$1;(statearr_43505_43540[2] = inst_43460);
(statearr_43505_43540[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 22))
{var inst_43486 = (state_43497[2]);var state_43497__$1 = state_43497;var statearr_43506_43541 = state_43497__$1;(statearr_43506_43541[2] = inst_43486);
(statearr_43506_43541[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 6))
{var inst_43493 = (state_43497[2]);var state_43497__$1 = state_43497;var statearr_43507_43542 = state_43497__$1;(statearr_43507_43542[2] = inst_43493);
(statearr_43507_43542[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 17))
{var state_43497__$1 = state_43497;var statearr_43508_43543 = state_43497__$1;(statearr_43508_43543[2] = null);
(statearr_43508_43543[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 3))
{var inst_43495 = (state_43497[2]);var state_43497__$1 = state_43497;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43497__$1,inst_43495);
} else
{if((state_val_43498 === 12))
{var inst_43479 = (state_43497[2]);var state_43497__$1 = state_43497;var statearr_43509_43544 = state_43497__$1;(statearr_43509_43544[2] = inst_43479);
(statearr_43509_43544[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 2))
{var state_43497__$1 = state_43497;if(true)
{var statearr_43510_43545 = state_43497__$1;(statearr_43510_43545[1] = 4);
} else
{var statearr_43511_43546 = state_43497__$1;(statearr_43511_43546[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 23))
{var inst_43483 = (state_43497[2]);var state_43497__$1 = state_43497;var statearr_43512_43547 = state_43497__$1;(statearr_43512_43547[2] = inst_43483);
(statearr_43512_43547[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 19))
{var inst_43470 = (state_43497[2]);var state_43497__$1 = state_43497;var statearr_43513_43548 = state_43497__$1;(statearr_43513_43548[2] = inst_43470);
(statearr_43513_43548[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 11))
{var inst_43459 = (state_43497[10]);var inst_43462 = cljs.core.empty_QMARK_.call(null,inst_43459);var state_43497__$1 = state_43497;if(inst_43462)
{var statearr_43514_43549 = state_43497__$1;(statearr_43514_43549[1] = 13);
} else
{var statearr_43515_43550 = state_43497__$1;(statearr_43515_43550[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 9))
{var inst_43455 = (state_43497[7]);var state_43497__$1 = state_43497;if(cljs.core.truth_(inst_43455))
{var statearr_43516_43551 = state_43497__$1;(statearr_43516_43551[1] = 20);
} else
{var statearr_43517_43552 = state_43497__$1;(statearr_43517_43552[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 5))
{var state_43497__$1 = state_43497;var statearr_43518_43553 = state_43497__$1;(statearr_43518_43553[2] = null);
(statearr_43518_43553[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 14))
{var inst_43459 = (state_43497[10]);var inst_43465 = cljs.core.rest.call(null,inst_43459);var inst_43466 = cljs.core.first.call(null,inst_43459);var state_43497__$1 = (function (){var statearr_43519 = state_43497;(statearr_43519[11] = inst_43465);
return statearr_43519;
})();if(cljs.core.truth_(inst_43466))
{var statearr_43520_43554 = state_43497__$1;(statearr_43520_43554[1] = 16);
} else
{var statearr_43521_43555 = state_43497__$1;(statearr_43521_43555[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 16))
{var inst_43459 = (state_43497[10]);var inst_43468 = cljs.core.first.call(null,inst_43459);var state_43497__$1 = state_43497;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43497__$1,19,inst_43468);
} else
{if((state_val_43498 === 10))
{var inst_43456 = (state_43497[8]);var inst_43488 = (state_43497[2]);var inst_43489 = cljs.core.apply.call(null,handler,inst_43488,inst_43456);var state_43497__$1 = (function (){var statearr_43522 = state_43497;(statearr_43522[12] = inst_43489);
return statearr_43522;
})();var statearr_43523_43556 = state_43497__$1;(statearr_43523_43556[2] = null);
(statearr_43523_43556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 18))
{var inst_43465 = (state_43497[11]);var inst_43460 = (state_43497[9]);var inst_43473 = (state_43497[2]);var inst_43474 = cljs.core.conj.call(null,inst_43460,inst_43473);var inst_43459 = inst_43465;var inst_43460__$1 = inst_43474;var state_43497__$1 = (function (){var statearr_43524 = state_43497;(statearr_43524[10] = inst_43459);
(statearr_43524[9] = inst_43460__$1);
return statearr_43524;
})();var statearr_43525_43557 = state_43497__$1;(statearr_43525_43557[2] = null);
(statearr_43525_43557[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43498 === 8))
{var inst_43455 = (state_43497[7]);var inst_43459 = inst_43455;var inst_43460 = cljs.core.PersistentVector.EMPTY;var state_43497__$1 = (function (){var statearr_43526 = state_43497;(statearr_43526[10] = inst_43459);
(statearr_43526[9] = inst_43460);
return statearr_43526;
})();var statearr_43527_43558 = state_43497__$1;(statearr_43527_43558[2] = null);
(statearr_43527_43558[1] = 11);
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
var state_machine__5675__auto____0 = (function (){var statearr_43531 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43531[0] = state_machine__5675__auto__);
(statearr_43531[1] = 1);
return statearr_43531;
});
var state_machine__5675__auto____1 = (function (state_43497){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_43497);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e43532){if((e43532 instanceof Object))
{var ex__5678__auto__ = e43532;var statearr_43533_43559 = state_43497;(statearr_43533_43559[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43497);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43560 = state_43497;
state_43497 = G__43560;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_43497){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_43497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_43534 = f__5690__auto__.call(null);(statearr_43534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_43534;
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
var G__43563__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__43562 = rseq;var rcomm = cljs.core.nth.call(null,vec__43562,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__43562,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__43563 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__43563__delegate.call(this,req_args);};
G__43563.cljs$lang$maxFixedArity = 0;
G__43563.cljs$lang$applyTo = (function (arglist__43564){
var req_args = cljs.core.seq(arglist__43564);
return G__43563__delegate(req_args);
});
G__43563.cljs$core$IFn$_invoke$arity$variadic = G__43563__delegate;
return G__43563;
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
return (function (state_43582){var state_val_43583 = (state_43582[1]);if((state_val_43583 === 2))
{var inst_43579 = (state_43582[2]);var inst_43580 = console.log(inst_43579);var state_43582__$1 = state_43582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43582__$1,inst_43580);
} else
{if((state_val_43583 === 1))
{var state_43582__$1 = state_43582;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43582__$1,2,ch);
} else
{return null;
}
}
});})(c__5689__auto__,ch))
;return ((function (switch__5674__auto__,c__5689__auto__,ch){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_43587 = [null,null,null,null,null,null,null];(statearr_43587[0] = state_machine__5675__auto__);
(statearr_43587[1] = 1);
return statearr_43587;
});
var state_machine__5675__auto____1 = (function (state_43582){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_43582);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e43588){if((e43588 instanceof Object))
{var ex__5678__auto__ = e43588;var statearr_43589_43591 = state_43582;(statearr_43589_43591[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43582);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43588;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43592 = state_43582;
state_43582 = G__43592;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_43582){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_43582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__,ch))
})();var state__5691__auto__ = (function (){var statearr_43590 = f__5690__auto__.call(null);(statearr_43590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_43590;
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
log_api.cljs$lang$applyTo = (function (arglist__43593){
var f = cljs.core.first(arglist__43593);
var args = cljs.core.rest(arglist__43593);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__43596){var vec__43597 = p__43596;var k = cljs.core.nth.call(null,vec__43597,0,null);var v = cljs.core.nth.call(null,vec__43597,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
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
boundarylines.cljs$lang$applyTo = (function (arglist__43598){
var id = cljs.core.first(arglist__43598);
arglist__43598 = cljs.core.next(arglist__43598);
var tolerance = cljs.core.first(arglist__43598);
var opts = cljs.core.rest(arglist__43598);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__43599){
var id = cljs.core.first(arglist__43599);
var opts = cljs.core.rest(arglist__43599);
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
var portfolio_company_sites__delegate = function (p__43600){var vec__43602 = p__43600;var type_ids = cljs.core.nth.call(null,vec__43602,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__43600 = null;if (arguments.length > 0) {
  p__43600 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__43600);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__43603){
var p__43600 = cljs.core.seq(arglist__43603);
return portfolio_company_sites__delegate(p__43600);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__43604){var vec__43606 = p__43604;var type_ids = cljs.core.nth.call(null,vec__43606,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__43604 = null;if (arguments.length > 0) {
  p__43604 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__43604);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__43607){
var p__43604 = cljs.core.seq(arglist__43607);
return portfolio_company_sites_by_company__delegate(p__43604);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__43608){var vec__43610 = p__43608;var type_ids = cljs.core.nth.call(null,vec__43610,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__43608 = null;if (arguments.length > 0) {
  p__43608 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__43608);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__43611){
var p__43608 = cljs.core.seq(arglist__43611);
return portfolio_company_locations__delegate(p__43608);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__43612){var vec__43614 = p__43612;var type_ids = cljs.core.nth.call(null,vec__43614,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__43612 = null;if (arguments.length > 0) {
  p__43612 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__43612);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__43615){
var p__43612 = cljs.core.seq(arglist__43615);
return portfolio_company_site_stats__delegate(p__43612);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__43616){var vec__43618 = p__43616;var type_ids = cljs.core.nth.call(null,vec__43618,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__43616 = null;if (arguments.length > 0) {
  p__43616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__43616);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__43619){
var p__43616 = cljs.core.seq(arglist__43619);
return portfolio_company_site_account_timelines__delegate(p__43616);
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
var investment_account_timelines__delegate = function (p__43620){var vec__43622 = p__43620;var type_ids = cljs.core.nth.call(null,vec__43622,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__43620 = null;if (arguments.length > 0) {
  p__43620 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__43620);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__43623){
var p__43620 = cljs.core.seq(arglist__43623);
return investment_account_timelines__delegate(p__43620);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__43624){var vec__43626 = p__43624;var type_ids = cljs.core.nth.call(null,vec__43626,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__43624 = null;if (arguments.length > 0) {
  p__43624 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__43624);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__43627){
var p__43624 = cljs.core.seq(arglist__43627);
return investment_stats__delegate(p__43624);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__43628){var vec__43630 = p__43628;var type_ids = cljs.core.nth.call(null,vec__43630,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__43628 = null;if (arguments.length > 0) {
  p__43628 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__43628);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__43631){
var p__43628 = cljs.core.seq(arglist__43631);
return investment_aggs__delegate(p__43628);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__43632){var vec__43634 = p__43632;var type_ids = cljs.core.nth.call(null,vec__43634,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__43632 = null;if (arguments.length > 0) {
  p__43632 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__43632);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__43635){
var p__43632 = cljs.core.seq(arglist__43635);
return investments__delegate(p__43632);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
