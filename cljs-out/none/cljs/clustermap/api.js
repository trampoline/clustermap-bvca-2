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
var GET__delegate = function (url,p__43363){var map__43365 = p__43363;var map__43365__$1 = ((cljs.core.seq_QMARK_.call(null,map__43365))?cljs.core.apply.call(null,cljs.core.hash_map,map__43365):map__43365);var raw = cljs.core.get.call(null,map__43365__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,((function (comm,map__43365,map__43365__$1,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__43365,map__43365__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}
});})(comm,map__43365,map__43365__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__43365,map__43365__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__43363 = null;if (arguments.length > 1) {
  p__43363 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__43363);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__43366){
var url = cljs.core.first(arglist__43366);
var p__43363 = cljs.core.rest(arglist__43366);
return GET__delegate(url,p__43363);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_43499){var state_val_43500 = (state_43499[1]);if((state_val_43500 === 7))
{var inst_43457 = (state_43499[7]);var inst_43456 = (state_43499[2]);var inst_43457__$1 = cljs.core.nth.call(null,inst_43456,0,null);var inst_43458 = cljs.core.nth.call(null,inst_43456,1,null);var inst_43459 = cljs.core.sequential_QMARK_.call(null,inst_43457__$1);var state_43499__$1 = (function (){var statearr_43501 = state_43499;(statearr_43501[7] = inst_43457__$1);
(statearr_43501[8] = inst_43458);
return statearr_43501;
})();if(inst_43459)
{var statearr_43502_43537 = state_43499__$1;(statearr_43502_43537[1] = 8);
} else
{var statearr_43503_43538 = state_43499__$1;(statearr_43503_43538[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 20))
{var inst_43457 = (state_43499[7]);var state_43499__$1 = state_43499;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43499__$1,23,inst_43457);
} else
{if((state_val_43500 === 1))
{var state_43499__$1 = state_43499;var statearr_43504_43539 = state_43499__$1;(statearr_43504_43539[2] = null);
(statearr_43504_43539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 4))
{var state_43499__$1 = state_43499;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43499__$1,7,ocomm);
} else
{if((state_val_43500 === 15))
{var inst_43479 = (state_43499[2]);var state_43499__$1 = state_43499;var statearr_43505_43540 = state_43499__$1;(statearr_43505_43540[2] = inst_43479);
(statearr_43505_43540[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 21))
{var state_43499__$1 = state_43499;var statearr_43506_43541 = state_43499__$1;(statearr_43506_43541[2] = null);
(statearr_43506_43541[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 13))
{var inst_43462 = (state_43499[9]);var state_43499__$1 = state_43499;var statearr_43507_43542 = state_43499__$1;(statearr_43507_43542[2] = inst_43462);
(statearr_43507_43542[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 22))
{var inst_43488 = (state_43499[2]);var state_43499__$1 = state_43499;var statearr_43508_43543 = state_43499__$1;(statearr_43508_43543[2] = inst_43488);
(statearr_43508_43543[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 6))
{var inst_43495 = (state_43499[2]);var state_43499__$1 = state_43499;var statearr_43509_43544 = state_43499__$1;(statearr_43509_43544[2] = inst_43495);
(statearr_43509_43544[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 17))
{var state_43499__$1 = state_43499;var statearr_43510_43545 = state_43499__$1;(statearr_43510_43545[2] = null);
(statearr_43510_43545[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 3))
{var inst_43497 = (state_43499[2]);var state_43499__$1 = state_43499;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43499__$1,inst_43497);
} else
{if((state_val_43500 === 12))
{var inst_43481 = (state_43499[2]);var state_43499__$1 = state_43499;var statearr_43511_43546 = state_43499__$1;(statearr_43511_43546[2] = inst_43481);
(statearr_43511_43546[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 2))
{var state_43499__$1 = state_43499;if(true)
{var statearr_43512_43547 = state_43499__$1;(statearr_43512_43547[1] = 4);
} else
{var statearr_43513_43548 = state_43499__$1;(statearr_43513_43548[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 23))
{var inst_43485 = (state_43499[2]);var state_43499__$1 = state_43499;var statearr_43514_43549 = state_43499__$1;(statearr_43514_43549[2] = inst_43485);
(statearr_43514_43549[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 19))
{var inst_43472 = (state_43499[2]);var state_43499__$1 = state_43499;var statearr_43515_43550 = state_43499__$1;(statearr_43515_43550[2] = inst_43472);
(statearr_43515_43550[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 11))
{var inst_43461 = (state_43499[10]);var inst_43464 = cljs.core.empty_QMARK_.call(null,inst_43461);var state_43499__$1 = state_43499;if(inst_43464)
{var statearr_43516_43551 = state_43499__$1;(statearr_43516_43551[1] = 13);
} else
{var statearr_43517_43552 = state_43499__$1;(statearr_43517_43552[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 9))
{var inst_43457 = (state_43499[7]);var state_43499__$1 = state_43499;if(cljs.core.truth_(inst_43457))
{var statearr_43518_43553 = state_43499__$1;(statearr_43518_43553[1] = 20);
} else
{var statearr_43519_43554 = state_43499__$1;(statearr_43519_43554[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 5))
{var state_43499__$1 = state_43499;var statearr_43520_43555 = state_43499__$1;(statearr_43520_43555[2] = null);
(statearr_43520_43555[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 14))
{var inst_43461 = (state_43499[10]);var inst_43467 = cljs.core.rest.call(null,inst_43461);var inst_43468 = cljs.core.first.call(null,inst_43461);var state_43499__$1 = (function (){var statearr_43521 = state_43499;(statearr_43521[11] = inst_43467);
return statearr_43521;
})();if(cljs.core.truth_(inst_43468))
{var statearr_43522_43556 = state_43499__$1;(statearr_43522_43556[1] = 16);
} else
{var statearr_43523_43557 = state_43499__$1;(statearr_43523_43557[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 16))
{var inst_43461 = (state_43499[10]);var inst_43470 = cljs.core.first.call(null,inst_43461);var state_43499__$1 = state_43499;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43499__$1,19,inst_43470);
} else
{if((state_val_43500 === 10))
{var inst_43458 = (state_43499[8]);var inst_43490 = (state_43499[2]);var inst_43491 = cljs.core.apply.call(null,handler,inst_43490,inst_43458);var state_43499__$1 = (function (){var statearr_43524 = state_43499;(statearr_43524[12] = inst_43491);
return statearr_43524;
})();var statearr_43525_43558 = state_43499__$1;(statearr_43525_43558[2] = null);
(statearr_43525_43558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 18))
{var inst_43467 = (state_43499[11]);var inst_43462 = (state_43499[9]);var inst_43475 = (state_43499[2]);var inst_43476 = cljs.core.conj.call(null,inst_43462,inst_43475);var inst_43461 = inst_43467;var inst_43462__$1 = inst_43476;var state_43499__$1 = (function (){var statearr_43526 = state_43499;(statearr_43526[10] = inst_43461);
(statearr_43526[9] = inst_43462__$1);
return statearr_43526;
})();var statearr_43527_43559 = state_43499__$1;(statearr_43527_43559[2] = null);
(statearr_43527_43559[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43500 === 8))
{var inst_43457 = (state_43499[7]);var inst_43461 = inst_43457;var inst_43462 = cljs.core.PersistentVector.EMPTY;var state_43499__$1 = (function (){var statearr_43528 = state_43499;(statearr_43528[10] = inst_43461);
(statearr_43528[9] = inst_43462);
return statearr_43528;
})();var statearr_43529_43560 = state_43499__$1;(statearr_43529_43560[2] = null);
(statearr_43529_43560[1] = 11);
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_43533 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43533[0] = state_machine__5677__auto__);
(statearr_43533[1] = 1);
return statearr_43533;
});
var state_machine__5677__auto____1 = (function (state_43499){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_43499);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e43534){if((e43534 instanceof Object))
{var ex__5680__auto__ = e43534;var statearr_43535_43561 = state_43499;(statearr_43535_43561[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43499);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43562 = state_43499;
state_43499 = G__43562;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_43499){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_43499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_43536 = f__5692__auto__.call(null);(statearr_43536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_43536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
var G__43565__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__43564 = rseq;var rcomm = cljs.core.nth.call(null,vec__43564,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__43564,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__43565 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__43565__delegate.call(this,req_args);};
G__43565.cljs$lang$maxFixedArity = 0;
G__43565.cljs$lang$applyTo = (function (arglist__43566){
var req_args = cljs.core.seq(arglist__43566);
return G__43565__delegate(req_args);
});
G__43565.cljs$core$IFn$_invoke$arity$variadic = G__43565__delegate;
return G__43565;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__,ch){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__,ch){
return (function (state_43584){var state_val_43585 = (state_43584[1]);if((state_val_43585 === 2))
{var inst_43581 = (state_43584[2]);var inst_43582 = console.log(inst_43581);var state_43584__$1 = state_43584;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43584__$1,inst_43582);
} else
{if((state_val_43585 === 1))
{var state_43584__$1 = state_43584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43584__$1,2,ch);
} else
{return null;
}
}
});})(c__5691__auto__,ch))
;return ((function (switch__5676__auto__,c__5691__auto__,ch){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_43589 = [null,null,null,null,null,null,null];(statearr_43589[0] = state_machine__5677__auto__);
(statearr_43589[1] = 1);
return statearr_43589;
});
var state_machine__5677__auto____1 = (function (state_43584){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_43584);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e43590){if((e43590 instanceof Object))
{var ex__5680__auto__ = e43590;var statearr_43591_43593 = state_43584;(statearr_43591_43593[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43584);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43590;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43594 = state_43584;
state_43584 = G__43594;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_43584){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_43584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,ch))
})();var state__5693__auto__ = (function (){var statearr_43592 = f__5692__auto__.call(null);(statearr_43592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_43592;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__,ch))
);
return c__5691__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__43595){
var f = cljs.core.first(arglist__43595);
var args = cljs.core.rest(arglist__43595);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__43598){var vec__43599 = p__43598;var k = cljs.core.nth.call(null,vec__43599,0,null);var v = cljs.core.nth.call(null,vec__43599,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
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
boundarylines.cljs$lang$applyTo = (function (arglist__43600){
var id = cljs.core.first(arglist__43600);
arglist__43600 = cljs.core.next(arglist__43600);
var tolerance = cljs.core.first(arglist__43600);
var opts = cljs.core.rest(arglist__43600);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__43601){
var id = cljs.core.first(arglist__43601);
var opts = cljs.core.rest(arglist__43601);
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
var portfolio_company_sites__delegate = function (p__43602){var vec__43604 = p__43602;var type_ids = cljs.core.nth.call(null,vec__43604,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__43602 = null;if (arguments.length > 0) {
  p__43602 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__43602);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__43605){
var p__43602 = cljs.core.seq(arglist__43605);
return portfolio_company_sites__delegate(p__43602);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__43606){var vec__43608 = p__43606;var type_ids = cljs.core.nth.call(null,vec__43608,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__43606 = null;if (arguments.length > 0) {
  p__43606 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__43606);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__43609){
var p__43606 = cljs.core.seq(arglist__43609);
return portfolio_company_sites_by_company__delegate(p__43606);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__43610){var vec__43612 = p__43610;var type_ids = cljs.core.nth.call(null,vec__43612,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__43610 = null;if (arguments.length > 0) {
  p__43610 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__43610);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__43613){
var p__43610 = cljs.core.seq(arglist__43613);
return portfolio_company_locations__delegate(p__43610);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__43614){var vec__43616 = p__43614;var type_ids = cljs.core.nth.call(null,vec__43616,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__43614 = null;if (arguments.length > 0) {
  p__43614 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__43614);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__43617){
var p__43614 = cljs.core.seq(arglist__43617);
return portfolio_company_site_stats__delegate(p__43614);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__43618){var vec__43620 = p__43618;var type_ids = cljs.core.nth.call(null,vec__43620,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__43618 = null;if (arguments.length > 0) {
  p__43618 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__43618);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__43621){
var p__43618 = cljs.core.seq(arglist__43621);
return portfolio_company_site_account_timelines__delegate(p__43618);
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
var investment_account_timelines__delegate = function (p__43622){var vec__43624 = p__43622;var type_ids = cljs.core.nth.call(null,vec__43624,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__43622 = null;if (arguments.length > 0) {
  p__43622 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__43622);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__43625){
var p__43622 = cljs.core.seq(arglist__43625);
return investment_account_timelines__delegate(p__43622);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__43626){var vec__43628 = p__43626;var type_ids = cljs.core.nth.call(null,vec__43628,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__43626 = null;if (arguments.length > 0) {
  p__43626 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__43626);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__43629){
var p__43626 = cljs.core.seq(arglist__43629);
return investment_stats__delegate(p__43626);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__43630){var vec__43632 = p__43630;var type_ids = cljs.core.nth.call(null,vec__43632,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__43630 = null;if (arguments.length > 0) {
  p__43630 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__43630);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__43633){
var p__43630 = cljs.core.seq(arglist__43633);
return investment_aggs__delegate(p__43630);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__43634){var vec__43636 = p__43634;var type_ids = cljs.core.nth.call(null,vec__43636,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__43634 = null;if (arguments.length > 0) {
  p__43634 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__43634);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__43637){
var p__43634 = cljs.core.seq(arglist__43637);
return investments__delegate(p__43634);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map