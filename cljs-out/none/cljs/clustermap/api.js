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
var AJAX__delegate = function (url,p__75400){var map__75404 = p__75400;var map__75404__$1 = ((cljs.core.seq_QMARK_.call(null,map__75404))?cljs.core.apply.call(null,cljs.core.hash_map,map__75404):map__75404);var opts = map__75404__$1;var content = cljs.core.get.call(null,map__75404__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__75404__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__75404__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__75404,map__75404__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__75404,map__75404__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__75404,map__75404__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__75404,map__75404__$1,opts,content,method,raw))
,(function (){var or__3637__auto__ = (function (){var G__75406 = method;var G__75406__$1 = (((G__75406 == null))?null:cljs.core.name.call(null,G__75406));var G__75406__$2 = (((G__75406__$1 == null))?null:clojure.string.upper_case.call(null,G__75406__$1));return G__75406__$2;
})();if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__75400 = null;if (arguments.length > 1) {
  p__75400 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__75400);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__75407){
var url = cljs.core.first(arglist__75407);
var p__75400 = cljs.core.rest(arglist__75407);
return AJAX__delegate(url,p__75400);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__75408){var map__75410 = p__75408;var map__75410__$1 = ((cljs.core.seq_QMARK_.call(null,map__75410))?cljs.core.apply.call(null,cljs.core.hash_map,map__75410):map__75410);var opts = map__75410__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__75408 = null;if (arguments.length > 1) {
  p__75408 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__75408);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__75411){
var url = cljs.core.first(arglist__75411);
var p__75408 = cljs.core.rest(arglist__75411);
return GET__delegate(url,p__75408);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__75412){var map__75414 = p__75412;var map__75414__$1 = ((cljs.core.seq_QMARK_.call(null,map__75414))?cljs.core.apply.call(null,cljs.core.hash_map,map__75414):map__75414);var opts = map__75414__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__75412 = null;if (arguments.length > 2) {
  p__75412 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__75412);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__75415){
var url = cljs.core.first(arglist__75415);
arglist__75415 = cljs.core.next(arglist__75415);
var content = cljs.core.first(arglist__75415);
var p__75412 = cljs.core.rest(arglist__75415);
return POST__delegate(url,content,p__75412);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__75416){var map__75418 = p__75416;var map__75418__$1 = ((cljs.core.seq_QMARK_.call(null,map__75418))?cljs.core.apply.call(null,cljs.core.hash_map,map__75418):map__75418);var opts = map__75418__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__75416 = null;if (arguments.length > 2) {
  p__75416 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__75416);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__75419){
var url = cljs.core.first(arglist__75419);
arglist__75419 = cljs.core.next(arglist__75419);
var content = cljs.core.first(arglist__75419);
var p__75416 = cljs.core.rest(arglist__75419);
return PUT__delegate(url,content,p__75416);
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
return (function (state_75554){var state_val_75555 = (state_75554[(1)]);if((state_val_75555 === (7)))
{var inst_75511 = (state_75554[(7)]);var inst_75510 = (state_75554[(2)]);var inst_75511__$1 = cljs.core.nth.call(null,inst_75510,(0),null);var inst_75512 = cljs.core.nth.call(null,inst_75510,(1),null);var inst_75513 = cljs.core.sequential_QMARK_.call(null,inst_75511__$1);var state_75554__$1 = (function (){var statearr_75556 = state_75554;(statearr_75556[(7)] = inst_75511__$1);
(statearr_75556[(8)] = inst_75512);
return statearr_75556;
})();if(inst_75513)
{var statearr_75557_75592 = state_75554__$1;(statearr_75557_75592[(1)] = (8));
} else
{var statearr_75558_75593 = state_75554__$1;(statearr_75558_75593[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (20)))
{var inst_75511 = (state_75554[(7)]);var state_75554__$1 = state_75554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75554__$1,(23),inst_75511);
} else
{if((state_val_75555 === (1)))
{var state_75554__$1 = state_75554;var statearr_75559_75594 = state_75554__$1;(statearr_75559_75594[(2)] = null);
(statearr_75559_75594[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (4)))
{var state_75554__$1 = state_75554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75554__$1,(7),ocomm);
} else
{if((state_val_75555 === (15)))
{var inst_75534 = (state_75554[(2)]);var state_75554__$1 = state_75554;var statearr_75560_75595 = state_75554__$1;(statearr_75560_75595[(2)] = inst_75534);
(statearr_75560_75595[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (21)))
{var state_75554__$1 = state_75554;var statearr_75561_75596 = state_75554__$1;(statearr_75561_75596[(2)] = null);
(statearr_75561_75596[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (13)))
{var inst_75517 = (state_75554[(9)]);var state_75554__$1 = state_75554;var statearr_75562_75597 = state_75554__$1;(statearr_75562_75597[(2)] = inst_75517);
(statearr_75562_75597[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (22)))
{var inst_75543 = (state_75554[(2)]);var state_75554__$1 = state_75554;var statearr_75563_75598 = state_75554__$1;(statearr_75563_75598[(2)] = inst_75543);
(statearr_75563_75598[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (6)))
{var inst_75550 = (state_75554[(2)]);var state_75554__$1 = state_75554;var statearr_75564_75599 = state_75554__$1;(statearr_75564_75599[(2)] = inst_75550);
(statearr_75564_75599[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (17)))
{var state_75554__$1 = state_75554;var statearr_75565_75600 = state_75554__$1;(statearr_75565_75600[(2)] = null);
(statearr_75565_75600[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (3)))
{var inst_75552 = (state_75554[(2)]);var state_75554__$1 = state_75554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75554__$1,inst_75552);
} else
{if((state_val_75555 === (12)))
{var inst_75536 = (state_75554[(2)]);var state_75554__$1 = state_75554;var statearr_75566_75601 = state_75554__$1;(statearr_75566_75601[(2)] = inst_75536);
(statearr_75566_75601[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (2)))
{var state_75554__$1 = state_75554;var statearr_75567_75602 = state_75554__$1;(statearr_75567_75602[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (23)))
{var inst_75540 = (state_75554[(2)]);var state_75554__$1 = state_75554;var statearr_75569_75603 = state_75554__$1;(statearr_75569_75603[(2)] = inst_75540);
(statearr_75569_75603[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (19)))
{var inst_75527 = (state_75554[(2)]);var state_75554__$1 = state_75554;var statearr_75570_75604 = state_75554__$1;(statearr_75570_75604[(2)] = inst_75527);
(statearr_75570_75604[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (11)))
{var inst_75516 = (state_75554[(10)]);var inst_75519 = cljs.core.empty_QMARK_.call(null,inst_75516);var state_75554__$1 = state_75554;if(inst_75519)
{var statearr_75571_75605 = state_75554__$1;(statearr_75571_75605[(1)] = (13));
} else
{var statearr_75572_75606 = state_75554__$1;(statearr_75572_75606[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (9)))
{var inst_75511 = (state_75554[(7)]);var state_75554__$1 = state_75554;if(cljs.core.truth_(inst_75511))
{var statearr_75573_75607 = state_75554__$1;(statearr_75573_75607[(1)] = (20));
} else
{var statearr_75574_75608 = state_75554__$1;(statearr_75574_75608[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (5)))
{var state_75554__$1 = state_75554;var statearr_75575_75609 = state_75554__$1;(statearr_75575_75609[(2)] = null);
(statearr_75575_75609[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (14)))
{var inst_75516 = (state_75554[(10)]);var inst_75522 = cljs.core.rest.call(null,inst_75516);var inst_75523 = cljs.core.first.call(null,inst_75516);var state_75554__$1 = (function (){var statearr_75576 = state_75554;(statearr_75576[(11)] = inst_75522);
return statearr_75576;
})();if(cljs.core.truth_(inst_75523))
{var statearr_75577_75610 = state_75554__$1;(statearr_75577_75610[(1)] = (16));
} else
{var statearr_75578_75611 = state_75554__$1;(statearr_75578_75611[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (16)))
{var inst_75516 = (state_75554[(10)]);var inst_75525 = cljs.core.first.call(null,inst_75516);var state_75554__$1 = state_75554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75554__$1,(19),inst_75525);
} else
{if((state_val_75555 === (10)))
{var inst_75512 = (state_75554[(8)]);var inst_75545 = (state_75554[(2)]);var inst_75546 = cljs.core.apply.call(null,handler,inst_75545,inst_75512);var state_75554__$1 = (function (){var statearr_75579 = state_75554;(statearr_75579[(12)] = inst_75546);
return statearr_75579;
})();var statearr_75580_75612 = state_75554__$1;(statearr_75580_75612[(2)] = null);
(statearr_75580_75612[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (18)))
{var inst_75522 = (state_75554[(11)]);var inst_75517 = (state_75554[(9)]);var inst_75530 = (state_75554[(2)]);var inst_75531 = cljs.core.conj.call(null,inst_75517,inst_75530);var inst_75516 = inst_75522;var inst_75517__$1 = inst_75531;var state_75554__$1 = (function (){var statearr_75581 = state_75554;(statearr_75581[(10)] = inst_75516);
(statearr_75581[(9)] = inst_75517__$1);
return statearr_75581;
})();var statearr_75582_75613 = state_75554__$1;(statearr_75582_75613[(2)] = null);
(statearr_75582_75613[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_75555 === (8)))
{var inst_75511 = (state_75554[(7)]);var inst_75515 = cljs.core.PersistentVector.EMPTY;var inst_75516 = inst_75511;var inst_75517 = inst_75515;var state_75554__$1 = (function (){var statearr_75583 = state_75554;(statearr_75583[(10)] = inst_75516);
(statearr_75583[(9)] = inst_75517);
return statearr_75583;
})();var statearr_75584_75614 = state_75554__$1;(statearr_75584_75614[(2)] = null);
(statearr_75584_75614[(1)] = (11));
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
var state_machine__5805__auto____0 = (function (){var statearr_75588 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_75588[(0)] = state_machine__5805__auto__);
(statearr_75588[(1)] = (1));
return statearr_75588;
});
var state_machine__5805__auto____1 = (function (state_75554){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_75554);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e75589){if((e75589 instanceof Object))
{var ex__5808__auto__ = e75589;var statearr_75590_75615 = state_75554;(statearr_75590_75615[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75554);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e75589;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__75616 = state_75554;
state_75554 = G__75616;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_75554){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_75554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_75591 = f__5820__auto__.call(null);(statearr_75591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_75591;
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
var G__75619__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__75618 = rseq;var rcomm = cljs.core.nth.call(null,vec__75618,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__75618,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__75619 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__75619__delegate.call(this,req_args);};
G__75619.cljs$lang$maxFixedArity = 0;
G__75619.cljs$lang$applyTo = (function (arglist__75620){
var req_args = cljs.core.seq(arglist__75620);
return G__75619__delegate(req_args);
});
G__75619.cljs$core$IFn$_invoke$arity$variadic = G__75619__delegate;
return G__75619;
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
return (function (state_75638){var state_val_75639 = (state_75638[(1)]);if((state_val_75639 === (2)))
{var inst_75635 = (state_75638[(2)]);var inst_75636 = console.log(inst_75635);var state_75638__$1 = state_75638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75638__$1,inst_75636);
} else
{if((state_val_75639 === (1)))
{var state_75638__$1 = state_75638;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75638__$1,(2),ch);
} else
{return null;
}
}
});})(c__5819__auto__,ch))
;return ((function (switch__5804__auto__,c__5819__auto__,ch){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_75643 = [null,null,null,null,null,null,null];(statearr_75643[(0)] = state_machine__5805__auto__);
(statearr_75643[(1)] = (1));
return statearr_75643;
});
var state_machine__5805__auto____1 = (function (state_75638){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_75638);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e75644){if((e75644 instanceof Object))
{var ex__5808__auto__ = e75644;var statearr_75645_75647 = state_75638;(statearr_75645_75647[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75638);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e75644;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__75648 = state_75638;
state_75638 = G__75648;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_75638){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_75638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,ch))
})();var state__5821__auto__ = (function (){var statearr_75646 = f__5820__auto__.call(null);(statearr_75646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_75646;
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
log_api.cljs$lang$applyTo = (function (arglist__75649){
var f = cljs.core.first(arglist__75649);
var args = cljs.core.rest(arglist__75649);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__75652){var vec__75653 = p__75652;var k = cljs.core.nth.call(null,vec__75653,(0),null);var v = cljs.core.nth.call(null,vec__75653,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5819__auto___75680 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___75680,r){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___75680,r){
return (function (state_75671){var state_val_75672 = (state_75671[(1)]);if((state_val_75672 === (2)))
{var inst_75668 = (state_75671[(2)]);var inst_75669 = cljs.core.reset_BANG_.call(null,r,inst_75668);var state_75671__$1 = state_75671;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75671__$1,inst_75669);
} else
{if((state_val_75672 === (1)))
{var state_75671__$1 = state_75671;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75671__$1,(2),comm);
} else
{return null;
}
}
});})(c__5819__auto___75680,r))
;return ((function (switch__5804__auto__,c__5819__auto___75680,r){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_75676 = [null,null,null,null,null,null,null];(statearr_75676[(0)] = state_machine__5805__auto__);
(statearr_75676[(1)] = (1));
return statearr_75676;
});
var state_machine__5805__auto____1 = (function (state_75671){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_75671);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e75677){if((e75677 instanceof Object))
{var ex__5808__auto__ = e75677;var statearr_75678_75681 = state_75671;(statearr_75678_75681[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75671);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e75677;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__75682 = state_75671;
state_75671 = G__75682;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_75671){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_75671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___75680,r))
})();var state__5821__auto__ = (function (){var statearr_75679 = f__5820__auto__.call(null);(statearr_75679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___75680);
return statearr_75679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___75680,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__75683){
var id = cljs.core.first(arglist__75683);
arglist__75683 = cljs.core.next(arglist__75683);
var tolerance = cljs.core.first(arglist__75683);
var opts = cljs.core.rest(arglist__75683);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__75684){
var id = cljs.core.first(arglist__75684);
var opts = cljs.core.rest(arglist__75684);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__75685){
var ids = cljs.core.first(arglist__75685);
arglist__75685 = cljs.core.next(arglist__75685);
var tolerance = cljs.core.first(arglist__75685);
var opts = cljs.core.rest(arglist__75685);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__75686){var map__75688 = p__75686;var map__75688__$1 = ((cljs.core.seq_QMARK_.call(null,map__75688))?cljs.core.apply.call(null,cljs.core.hash_map,map__75688):map__75688);var opts = map__75688__$1;var boundaryline_ids = cljs.core.get.call(null,map__75688__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__75686 = null;if (arguments.length > 3) {
  p__75686 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__75686);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__75689){
var collection_id = cljs.core.first(arglist__75689);
arglist__75689 = cljs.core.next(arglist__75689);
var tolerance = cljs.core.first(arglist__75689);
arglist__75689 = cljs.core.next(arglist__75689);
var bounds = cljs.core.first(arglist__75689);
var p__75686 = cljs.core.rest(arglist__75689);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__75686);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__75690){var vec__75692 = p__75690;var type_ids = cljs.core.nth.call(null,vec__75692,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__75690 = null;if (arguments.length > 6) {
  p__75690 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__75690);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__75693){
var index = cljs.core.first(arglist__75693);
arglist__75693 = cljs.core.next(arglist__75693);
var type = cljs.core.first(arglist__75693);
arglist__75693 = cljs.core.next(arglist__75693);
var blcoll = cljs.core.first(arglist__75693);
arglist__75693 = cljs.core.next(arglist__75693);
var attr = cljs.core.first(arglist__75693);
arglist__75693 = cljs.core.next(arglist__75693);
var filter = cljs.core.first(arglist__75693);
arglist__75693 = cljs.core.next(arglist__75693);
var bounds = cljs.core.first(arglist__75693);
var p__75690 = cljs.core.rest(arglist__75693);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__75690);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__75694){var vec__75696 = p__75694;var type_ids = cljs.core.nth.call(null,vec__75696,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__75694 = null;if (arguments.length > 5) {
  p__75694 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__75694);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__75697){
var index = cljs.core.first(arglist__75697);
arglist__75697 = cljs.core.next(arglist__75697);
var type = cljs.core.first(arglist__75697);
arglist__75697 = cljs.core.next(arglist__75697);
var statsattrs = cljs.core.first(arglist__75697);
arglist__75697 = cljs.core.next(arglist__75697);
var filter = cljs.core.first(arglist__75697);
arglist__75697 = cljs.core.next(arglist__75697);
var bounds = cljs.core.first(arglist__75697);
var p__75694 = cljs.core.rest(arglist__75697);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__75694);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__75698){var vec__75700 = p__75698;var type_ids = cljs.core.nth.call(null,vec__75700,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__75698 = null;if (arguments.length > 7) {
  p__75698 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__75698);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__75701){
var index = cljs.core.first(arglist__75701);
arglist__75701 = cljs.core.next(arglist__75701);
var type = cljs.core.first(arglist__75701);
arglist__75701 = cljs.core.next(arglist__75701);
var location_attr = cljs.core.first(arglist__75701);
arglist__75701 = cljs.core.next(arglist__75701);
var attrs = cljs.core.first(arglist__75701);
arglist__75701 = cljs.core.next(arglist__75701);
var max_count = cljs.core.first(arglist__75701);
arglist__75701 = cljs.core.next(arglist__75701);
var filter = cljs.core.first(arglist__75701);
arglist__75701 = cljs.core.next(arglist__75701);
var bounds = cljs.core.first(arglist__75701);
var p__75698 = cljs.core.rest(arglist__75701);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__75698);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__75702){var vec__75704 = p__75702;var type_ids = cljs.core.nth.call(null,vec__75704,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__75702 = null;if (arguments.length > 7) {
  p__75702 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__75702);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__75705){
var index = cljs.core.first(arglist__75705);
arglist__75705 = cljs.core.next(arglist__75705);
var type = cljs.core.first(arglist__75705);
arglist__75705 = cljs.core.next(arglist__75705);
var filter_spec = cljs.core.first(arglist__75705);
arglist__75705 = cljs.core.next(arglist__75705);
var bounds = cljs.core.first(arglist__75705);
arglist__75705 = cljs.core.next(arglist__75705);
var sort_spec = cljs.core.first(arglist__75705);
arglist__75705 = cljs.core.next(arglist__75705);
var from = cljs.core.first(arglist__75705);
arglist__75705 = cljs.core.next(arglist__75705);
var size = cljs.core.first(arglist__75705);
var p__75702 = cljs.core.rest(arglist__75705);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__75702);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),time_variable,new cljs.core.Keyword(null,"after","after",594996914),after,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"interval","interval",1708495417),interval,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),metric_variables], null));
});

//# sourceMappingURL=api.js.map