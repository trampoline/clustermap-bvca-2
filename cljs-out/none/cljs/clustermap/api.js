// Compiled by ClojureScript 0.0-2356
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
clustermap.api.AJAX = (function() { 
var AJAX__delegate = function (url,p__79366){var map__79370 = p__79366;var map__79370__$1 = ((cljs.core.seq_QMARK_.call(null,map__79370))?cljs.core.apply.call(null,cljs.core.hash_map,map__79370):map__79370);var opts = map__79370__$1;var content = cljs.core.get.call(null,map__79370__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__79370__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__79370__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__79370,map__79370__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__79370,map__79370__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__79370,map__79370__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__79370,map__79370__$1,opts,content,method,raw))
,(function (){var or__3637__auto__ = (function (){var G__79372 = method;var G__79372__$1 = (((G__79372 == null))?null:cljs.core.name.call(null,G__79372));var G__79372__$2 = (((G__79372__$1 == null))?null:clojure.string.upper_case.call(null,G__79372__$1));return G__79372__$2;
})();if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__79366 = null;if (arguments.length > 1) {
  p__79366 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__79366);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__79373){
var url = cljs.core.first(arglist__79373);
var p__79366 = cljs.core.rest(arglist__79373);
return AJAX__delegate(url,p__79366);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__79374){var map__79376 = p__79374;var map__79376__$1 = ((cljs.core.seq_QMARK_.call(null,map__79376))?cljs.core.apply.call(null,cljs.core.hash_map,map__79376):map__79376);var opts = map__79376__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__79374 = null;if (arguments.length > 1) {
  p__79374 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__79374);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__79377){
var url = cljs.core.first(arglist__79377);
var p__79374 = cljs.core.rest(arglist__79377);
return GET__delegate(url,p__79374);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__79378){var map__79380 = p__79378;var map__79380__$1 = ((cljs.core.seq_QMARK_.call(null,map__79380))?cljs.core.apply.call(null,cljs.core.hash_map,map__79380):map__79380);var opts = map__79380__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__79378 = null;if (arguments.length > 2) {
  p__79378 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__79378);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__79381){
var url = cljs.core.first(arglist__79381);
arglist__79381 = cljs.core.next(arglist__79381);
var content = cljs.core.first(arglist__79381);
var p__79378 = cljs.core.rest(arglist__79381);
return POST__delegate(url,content,p__79378);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__79382){var map__79384 = p__79382;var map__79384__$1 = ((cljs.core.seq_QMARK_.call(null,map__79384))?cljs.core.apply.call(null,cljs.core.hash_map,map__79384):map__79384);var opts = map__79384__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__79382 = null;if (arguments.length > 2) {
  p__79382 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__79382);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__79385){
var url = cljs.core.first(arglist__79385);
arglist__79385 = cljs.core.next(arglist__79385);
var content = cljs.core.first(arglist__79385);
var p__79382 = cljs.core.rest(arglist__79385);
return PUT__delegate(url,content,p__79382);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_79520){var state_val_79521 = (state_79520[(1)]);if((state_val_79521 === (7)))
{var inst_79477 = (state_79520[(7)]);var inst_79476 = (state_79520[(2)]);var inst_79477__$1 = cljs.core.nth.call(null,inst_79476,(0),null);var inst_79478 = cljs.core.nth.call(null,inst_79476,(1),null);var inst_79479 = cljs.core.sequential_QMARK_.call(null,inst_79477__$1);var state_79520__$1 = (function (){var statearr_79522 = state_79520;(statearr_79522[(7)] = inst_79477__$1);
(statearr_79522[(8)] = inst_79478);
return statearr_79522;
})();if(inst_79479)
{var statearr_79523_79558 = state_79520__$1;(statearr_79523_79558[(1)] = (8));
} else
{var statearr_79524_79559 = state_79520__$1;(statearr_79524_79559[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (20)))
{var inst_79477 = (state_79520[(7)]);var state_79520__$1 = state_79520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79520__$1,(23),inst_79477);
} else
{if((state_val_79521 === (1)))
{var state_79520__$1 = state_79520;var statearr_79525_79560 = state_79520__$1;(statearr_79525_79560[(2)] = null);
(statearr_79525_79560[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (4)))
{var state_79520__$1 = state_79520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79520__$1,(7),ocomm);
} else
{if((state_val_79521 === (15)))
{var inst_79500 = (state_79520[(2)]);var state_79520__$1 = state_79520;var statearr_79526_79561 = state_79520__$1;(statearr_79526_79561[(2)] = inst_79500);
(statearr_79526_79561[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (21)))
{var state_79520__$1 = state_79520;var statearr_79527_79562 = state_79520__$1;(statearr_79527_79562[(2)] = null);
(statearr_79527_79562[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (13)))
{var inst_79483 = (state_79520[(9)]);var state_79520__$1 = state_79520;var statearr_79528_79563 = state_79520__$1;(statearr_79528_79563[(2)] = inst_79483);
(statearr_79528_79563[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (22)))
{var inst_79509 = (state_79520[(2)]);var state_79520__$1 = state_79520;var statearr_79529_79564 = state_79520__$1;(statearr_79529_79564[(2)] = inst_79509);
(statearr_79529_79564[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (6)))
{var inst_79516 = (state_79520[(2)]);var state_79520__$1 = state_79520;var statearr_79530_79565 = state_79520__$1;(statearr_79530_79565[(2)] = inst_79516);
(statearr_79530_79565[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (17)))
{var state_79520__$1 = state_79520;var statearr_79531_79566 = state_79520__$1;(statearr_79531_79566[(2)] = null);
(statearr_79531_79566[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (3)))
{var inst_79518 = (state_79520[(2)]);var state_79520__$1 = state_79520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79520__$1,inst_79518);
} else
{if((state_val_79521 === (12)))
{var inst_79502 = (state_79520[(2)]);var state_79520__$1 = state_79520;var statearr_79532_79567 = state_79520__$1;(statearr_79532_79567[(2)] = inst_79502);
(statearr_79532_79567[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (2)))
{var state_79520__$1 = state_79520;var statearr_79533_79568 = state_79520__$1;(statearr_79533_79568[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (23)))
{var inst_79506 = (state_79520[(2)]);var state_79520__$1 = state_79520;var statearr_79535_79569 = state_79520__$1;(statearr_79535_79569[(2)] = inst_79506);
(statearr_79535_79569[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (19)))
{var inst_79493 = (state_79520[(2)]);var state_79520__$1 = state_79520;var statearr_79536_79570 = state_79520__$1;(statearr_79536_79570[(2)] = inst_79493);
(statearr_79536_79570[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (11)))
{var inst_79482 = (state_79520[(10)]);var inst_79485 = cljs.core.empty_QMARK_.call(null,inst_79482);var state_79520__$1 = state_79520;if(inst_79485)
{var statearr_79537_79571 = state_79520__$1;(statearr_79537_79571[(1)] = (13));
} else
{var statearr_79538_79572 = state_79520__$1;(statearr_79538_79572[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (9)))
{var inst_79477 = (state_79520[(7)]);var state_79520__$1 = state_79520;if(cljs.core.truth_(inst_79477))
{var statearr_79539_79573 = state_79520__$1;(statearr_79539_79573[(1)] = (20));
} else
{var statearr_79540_79574 = state_79520__$1;(statearr_79540_79574[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (5)))
{var state_79520__$1 = state_79520;var statearr_79541_79575 = state_79520__$1;(statearr_79541_79575[(2)] = null);
(statearr_79541_79575[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (14)))
{var inst_79482 = (state_79520[(10)]);var inst_79488 = cljs.core.rest.call(null,inst_79482);var inst_79489 = cljs.core.first.call(null,inst_79482);var state_79520__$1 = (function (){var statearr_79542 = state_79520;(statearr_79542[(11)] = inst_79488);
return statearr_79542;
})();if(cljs.core.truth_(inst_79489))
{var statearr_79543_79576 = state_79520__$1;(statearr_79543_79576[(1)] = (16));
} else
{var statearr_79544_79577 = state_79520__$1;(statearr_79544_79577[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (16)))
{var inst_79482 = (state_79520[(10)]);var inst_79491 = cljs.core.first.call(null,inst_79482);var state_79520__$1 = state_79520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79520__$1,(19),inst_79491);
} else
{if((state_val_79521 === (10)))
{var inst_79478 = (state_79520[(8)]);var inst_79511 = (state_79520[(2)]);var inst_79512 = cljs.core.apply.call(null,handler,inst_79511,inst_79478);var state_79520__$1 = (function (){var statearr_79545 = state_79520;(statearr_79545[(12)] = inst_79512);
return statearr_79545;
})();var statearr_79546_79578 = state_79520__$1;(statearr_79546_79578[(2)] = null);
(statearr_79546_79578[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (18)))
{var inst_79488 = (state_79520[(11)]);var inst_79483 = (state_79520[(9)]);var inst_79496 = (state_79520[(2)]);var inst_79497 = cljs.core.conj.call(null,inst_79483,inst_79496);var inst_79482 = inst_79488;var inst_79483__$1 = inst_79497;var state_79520__$1 = (function (){var statearr_79547 = state_79520;(statearr_79547[(9)] = inst_79483__$1);
(statearr_79547[(10)] = inst_79482);
return statearr_79547;
})();var statearr_79548_79579 = state_79520__$1;(statearr_79548_79579[(2)] = null);
(statearr_79548_79579[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79521 === (8)))
{var inst_79477 = (state_79520[(7)]);var inst_79481 = cljs.core.PersistentVector.EMPTY;var inst_79482 = inst_79477;var inst_79483 = inst_79481;var state_79520__$1 = (function (){var statearr_79549 = state_79520;(statearr_79549[(9)] = inst_79483);
(statearr_79549[(10)] = inst_79482);
return statearr_79549;
})();var statearr_79550_79580 = state_79520__$1;(statearr_79550_79580[(2)] = null);
(statearr_79550_79580[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_79554 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_79554[(0)] = state_machine__5805__auto__);
(statearr_79554[(1)] = (1));
return statearr_79554;
});
var state_machine__5805__auto____1 = (function (state_79520){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_79520);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e79555){if((e79555 instanceof Object))
{var ex__5808__auto__ = e79555;var statearr_79556_79581 = state_79520;(statearr_79556_79581[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79520);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e79555;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__79582 = state_79520;
state_79520 = G__79582;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_79520){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_79520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_79557 = f__5820__auto__.call(null);(statearr_79557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_79557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__79585__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__79584 = rseq;var rcomm = cljs.core.nth.call(null,vec__79584,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__79584,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__79585 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__79585__delegate.call(this,req_args);};
G__79585.cljs$lang$maxFixedArity = 0;
G__79585.cljs$lang$applyTo = (function (arglist__79586){
var req_args = cljs.core.seq(arglist__79586);
return G__79585__delegate(req_args);
});
G__79585.cljs$core$IFn$_invoke$arity$variadic = G__79585__delegate;
return G__79585;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,ch){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,ch){
return (function (state_79604){var state_val_79605 = (state_79604[(1)]);if((state_val_79605 === (2)))
{var inst_79601 = (state_79604[(2)]);var inst_79602 = console.log(inst_79601);var state_79604__$1 = state_79604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79604__$1,inst_79602);
} else
{if((state_val_79605 === (1)))
{var state_79604__$1 = state_79604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79604__$1,(2),ch);
} else
{return null;
}
}
});})(c__5819__auto__,ch))
;return ((function (switch__5804__auto__,c__5819__auto__,ch){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_79609 = [null,null,null,null,null,null,null];(statearr_79609[(0)] = state_machine__5805__auto__);
(statearr_79609[(1)] = (1));
return statearr_79609;
});
var state_machine__5805__auto____1 = (function (state_79604){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_79604);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e79610){if((e79610 instanceof Object))
{var ex__5808__auto__ = e79610;var statearr_79611_79613 = state_79604;(statearr_79611_79613[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e79610;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__79614 = state_79604;
state_79604 = G__79614;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_79604){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_79604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,ch))
})();var state__5821__auto__ = (function (){var statearr_79612 = f__5820__auto__.call(null);(statearr_79612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_79612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,ch))
);
return c__5819__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__79615){
var f = cljs.core.first(arglist__79615);
var args = cljs.core.rest(arglist__79615);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__79618){var vec__79619 = p__79618;var k = cljs.core.nth.call(null,vec__79619,(0),null);var v = cljs.core.nth.call(null,vec__79619,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5819__auto___79646 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___79646,r){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___79646,r){
return (function (state_79637){var state_val_79638 = (state_79637[(1)]);if((state_val_79638 === (2)))
{var inst_79634 = (state_79637[(2)]);var inst_79635 = cljs.core.reset_BANG_.call(null,r,inst_79634);var state_79637__$1 = state_79637;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79637__$1,inst_79635);
} else
{if((state_val_79638 === (1)))
{var state_79637__$1 = state_79637;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79637__$1,(2),comm);
} else
{return null;
}
}
});})(c__5819__auto___79646,r))
;return ((function (switch__5804__auto__,c__5819__auto___79646,r){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_79642 = [null,null,null,null,null,null,null];(statearr_79642[(0)] = state_machine__5805__auto__);
(statearr_79642[(1)] = (1));
return statearr_79642;
});
var state_machine__5805__auto____1 = (function (state_79637){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_79637);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e79643){if((e79643 instanceof Object))
{var ex__5808__auto__ = e79643;var statearr_79644_79647 = state_79637;(statearr_79644_79647[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79637);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e79643;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__79648 = state_79637;
state_79637 = G__79648;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_79637){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_79637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___79646,r))
})();var state__5821__auto__ = (function (){var statearr_79645 = f__5820__auto__.call(null);(statearr_79645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___79646);
return statearr_79645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___79646,r))
);
return r;
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
boundarylines.cljs$lang$applyTo = (function (arglist__79649){
var id = cljs.core.first(arglist__79649);
arglist__79649 = cljs.core.next(arglist__79649);
var tolerance = cljs.core.first(arglist__79649);
var opts = cljs.core.rest(arglist__79649);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__79650){
var id = cljs.core.first(arglist__79650);
var opts = cljs.core.rest(arglist__79650);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* fetch a whole set of boundarylines in one api hit
* @param {...*} var_args
*/
clustermap.api.boundaryline_set = (function() { 
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),ids,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__79651){
var ids = cljs.core.first(arglist__79651);
arglist__79651 = cljs.core.next(arglist__79651);
var tolerance = cljs.core.first(arglist__79651);
var opts = cljs.core.rest(arglist__79651);
return boundaryline_set__delegate(ids,tolerance,opts);
});
boundaryline_set.cljs$core$IFn$_invoke$arity$variadic = boundaryline_set__delegate;
return boundaryline_set;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_view = (function() { 
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__79652){var map__79654 = p__79652;var map__79654__$1 = ((cljs.core.seq_QMARK_.call(null,map__79654))?cljs.core.apply.call(null,cljs.core.hash_map,map__79654):map__79654);var opts = map__79654__$1;var boundaryline_ids = cljs.core.get.call(null,map__79654__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__79652 = null;if (arguments.length > 3) {
  p__79652 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__79652);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__79655){
var collection_id = cljs.core.first(arglist__79655);
arglist__79655 = cljs.core.next(arglist__79655);
var tolerance = cljs.core.first(arglist__79655);
arglist__79655 = cljs.core.next(arglist__79655);
var bounds = cljs.core.first(arglist__79655);
var p__79652 = cljs.core.rest(arglist__79655);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__79652);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__79656){var vec__79658 = p__79656;var type_ids = cljs.core.nth.call(null,vec__79658,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__79656 = null;if (arguments.length > 6) {
  p__79656 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__79656);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__79659){
var index = cljs.core.first(arglist__79659);
arglist__79659 = cljs.core.next(arglist__79659);
var type = cljs.core.first(arglist__79659);
arglist__79659 = cljs.core.next(arglist__79659);
var blcoll = cljs.core.first(arglist__79659);
arglist__79659 = cljs.core.next(arglist__79659);
var attr = cljs.core.first(arglist__79659);
arglist__79659 = cljs.core.next(arglist__79659);
var filter = cljs.core.first(arglist__79659);
arglist__79659 = cljs.core.next(arglist__79659);
var bounds = cljs.core.first(arglist__79659);
var p__79656 = cljs.core.rest(arglist__79659);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__79656);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__79660){var vec__79662 = p__79660;var type_ids = cljs.core.nth.call(null,vec__79662,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__79660 = null;if (arguments.length > 5) {
  p__79660 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__79660);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__79663){
var index = cljs.core.first(arglist__79663);
arglist__79663 = cljs.core.next(arglist__79663);
var type = cljs.core.first(arglist__79663);
arglist__79663 = cljs.core.next(arglist__79663);
var statsattrs = cljs.core.first(arglist__79663);
arglist__79663 = cljs.core.next(arglist__79663);
var filter = cljs.core.first(arglist__79663);
arglist__79663 = cljs.core.next(arglist__79663);
var bounds = cljs.core.first(arglist__79663);
var p__79660 = cljs.core.rest(arglist__79663);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__79660);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__79664){var vec__79666 = p__79664;var type_ids = cljs.core.nth.call(null,vec__79666,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__79664 = null;if (arguments.length > 7) {
  p__79664 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__79664);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__79667){
var index = cljs.core.first(arglist__79667);
arglist__79667 = cljs.core.next(arglist__79667);
var type = cljs.core.first(arglist__79667);
arglist__79667 = cljs.core.next(arglist__79667);
var location_attr = cljs.core.first(arglist__79667);
arglist__79667 = cljs.core.next(arglist__79667);
var attrs = cljs.core.first(arglist__79667);
arglist__79667 = cljs.core.next(arglist__79667);
var max_count = cljs.core.first(arglist__79667);
arglist__79667 = cljs.core.next(arglist__79667);
var filter = cljs.core.first(arglist__79667);
arglist__79667 = cljs.core.next(arglist__79667);
var bounds = cljs.core.first(arglist__79667);
var p__79664 = cljs.core.rest(arglist__79667);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__79664);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__79668){var vec__79670 = p__79668;var type_ids = cljs.core.nth.call(null,vec__79670,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__79668 = null;if (arguments.length > 7) {
  p__79668 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__79668);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__79671){
var index = cljs.core.first(arglist__79671);
arglist__79671 = cljs.core.next(arglist__79671);
var type = cljs.core.first(arglist__79671);
arglist__79671 = cljs.core.next(arglist__79671);
var filter_spec = cljs.core.first(arglist__79671);
arglist__79671 = cljs.core.next(arglist__79671);
var bounds = cljs.core.first(arglist__79671);
arglist__79671 = cljs.core.next(arglist__79671);
var sort_spec = cljs.core.first(arglist__79671);
arglist__79671 = cljs.core.next(arglist__79671);
var from = cljs.core.first(arglist__79671);
arglist__79671 = cljs.core.next(arglist__79671);
var size = cljs.core.first(arglist__79671);
var p__79668 = cljs.core.rest(arglist__79671);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__79668);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),time_variable,new cljs.core.Keyword(null,"after","after",594996914),after,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"interval","interval",1708495417),interval,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),metric_variables], null));
});

//# sourceMappingURL=api.js.map