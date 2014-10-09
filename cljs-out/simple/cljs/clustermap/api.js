// Compiled by ClojureScript 0.0-2322
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
var AJAX__delegate = function (url,p__27393){var map__27397 = p__27393;var map__27397__$1 = ((cljs.core.seq_QMARK_.call(null,map__27397))?cljs.core.apply.call(null,cljs.core.hash_map,map__27397):map__27397);var opts = map__27397__$1;var content = cljs.core.get.call(null,map__27397__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__27397__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__27397__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__27397,map__27397__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__27397,map__27397__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__27397,map__27397__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__27397,map__27397__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__27399 = method;var G__27399__$1 = (((G__27399 == null))?null:cljs.core.name.call(null,G__27399));var G__27399__$2 = (((G__27399__$1 == null))?null:clojure.string.upper_case.call(null,G__27399__$1));return G__27399__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__27393 = null;if (arguments.length > 1) {
  p__27393 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__27393);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__27400){
var url = cljs.core.first(arglist__27400);
var p__27393 = cljs.core.rest(arglist__27400);
return AJAX__delegate(url,p__27393);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__27401){var map__27403 = p__27401;var map__27403__$1 = ((cljs.core.seq_QMARK_.call(null,map__27403))?cljs.core.apply.call(null,cljs.core.hash_map,map__27403):map__27403);var opts = map__27403__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__27401 = null;if (arguments.length > 1) {
  p__27401 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__27401);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__27404){
var url = cljs.core.first(arglist__27404);
var p__27401 = cljs.core.rest(arglist__27404);
return GET__delegate(url,p__27401);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__27405){var map__27407 = p__27405;var map__27407__$1 = ((cljs.core.seq_QMARK_.call(null,map__27407))?cljs.core.apply.call(null,cljs.core.hash_map,map__27407):map__27407);var opts = map__27407__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__27405 = null;if (arguments.length > 2) {
  p__27405 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__27405);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__27408){
var url = cljs.core.first(arglist__27408);
arglist__27408 = cljs.core.next(arglist__27408);
var content = cljs.core.first(arglist__27408);
var p__27405 = cljs.core.rest(arglist__27408);
return POST__delegate(url,content,p__27405);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__27409){var map__27411 = p__27409;var map__27411__$1 = ((cljs.core.seq_QMARK_.call(null,map__27411))?cljs.core.apply.call(null,cljs.core.hash_map,map__27411):map__27411);var opts = map__27411__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__27409 = null;if (arguments.length > 2) {
  p__27409 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__27409);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__27412){
var url = cljs.core.first(arglist__27412);
arglist__27412 = cljs.core.next(arglist__27412);
var content = cljs.core.first(arglist__27412);
var p__27409 = cljs.core.rest(arglist__27412);
return PUT__delegate(url,content,p__27409);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_27547){var state_val_27548 = (state_27547[(1)]);if((state_val_27548 === (7)))
{var inst_27504 = (state_27547[(7)]);var inst_27503 = (state_27547[(2)]);var inst_27504__$1 = cljs.core.nth.call(null,inst_27503,(0),null);var inst_27505 = cljs.core.nth.call(null,inst_27503,(1),null);var inst_27506 = cljs.core.sequential_QMARK_.call(null,inst_27504__$1);var state_27547__$1 = (function (){var statearr_27549 = state_27547;(statearr_27549[(7)] = inst_27504__$1);
(statearr_27549[(8)] = inst_27505);
return statearr_27549;
})();if(inst_27506)
{var statearr_27550_27585 = state_27547__$1;(statearr_27550_27585[(1)] = (8));
} else
{var statearr_27551_27586 = state_27547__$1;(statearr_27551_27586[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (20)))
{var inst_27504 = (state_27547[(7)]);var state_27547__$1 = state_27547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27547__$1,(23),inst_27504);
} else
{if((state_val_27548 === (1)))
{var state_27547__$1 = state_27547;var statearr_27552_27587 = state_27547__$1;(statearr_27552_27587[(2)] = null);
(statearr_27552_27587[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (4)))
{var state_27547__$1 = state_27547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27547__$1,(7),ocomm);
} else
{if((state_val_27548 === (15)))
{var inst_27527 = (state_27547[(2)]);var state_27547__$1 = state_27547;var statearr_27553_27588 = state_27547__$1;(statearr_27553_27588[(2)] = inst_27527);
(statearr_27553_27588[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (21)))
{var state_27547__$1 = state_27547;var statearr_27554_27589 = state_27547__$1;(statearr_27554_27589[(2)] = null);
(statearr_27554_27589[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (13)))
{var inst_27510 = (state_27547[(9)]);var state_27547__$1 = state_27547;var statearr_27555_27590 = state_27547__$1;(statearr_27555_27590[(2)] = inst_27510);
(statearr_27555_27590[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (22)))
{var inst_27536 = (state_27547[(2)]);var state_27547__$1 = state_27547;var statearr_27556_27591 = state_27547__$1;(statearr_27556_27591[(2)] = inst_27536);
(statearr_27556_27591[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (6)))
{var inst_27543 = (state_27547[(2)]);var state_27547__$1 = state_27547;var statearr_27557_27592 = state_27547__$1;(statearr_27557_27592[(2)] = inst_27543);
(statearr_27557_27592[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (17)))
{var state_27547__$1 = state_27547;var statearr_27558_27593 = state_27547__$1;(statearr_27558_27593[(2)] = null);
(statearr_27558_27593[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (3)))
{var inst_27545 = (state_27547[(2)]);var state_27547__$1 = state_27547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27547__$1,inst_27545);
} else
{if((state_val_27548 === (12)))
{var inst_27529 = (state_27547[(2)]);var state_27547__$1 = state_27547;var statearr_27559_27594 = state_27547__$1;(statearr_27559_27594[(2)] = inst_27529);
(statearr_27559_27594[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (2)))
{var state_27547__$1 = state_27547;var statearr_27560_27595 = state_27547__$1;(statearr_27560_27595[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (23)))
{var inst_27533 = (state_27547[(2)]);var state_27547__$1 = state_27547;var statearr_27562_27596 = state_27547__$1;(statearr_27562_27596[(2)] = inst_27533);
(statearr_27562_27596[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (19)))
{var inst_27520 = (state_27547[(2)]);var state_27547__$1 = state_27547;var statearr_27563_27597 = state_27547__$1;(statearr_27563_27597[(2)] = inst_27520);
(statearr_27563_27597[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (11)))
{var inst_27509 = (state_27547[(10)]);var inst_27512 = cljs.core.empty_QMARK_.call(null,inst_27509);var state_27547__$1 = state_27547;if(inst_27512)
{var statearr_27564_27598 = state_27547__$1;(statearr_27564_27598[(1)] = (13));
} else
{var statearr_27565_27599 = state_27547__$1;(statearr_27565_27599[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (9)))
{var inst_27504 = (state_27547[(7)]);var state_27547__$1 = state_27547;if(cljs.core.truth_(inst_27504))
{var statearr_27566_27600 = state_27547__$1;(statearr_27566_27600[(1)] = (20));
} else
{var statearr_27567_27601 = state_27547__$1;(statearr_27567_27601[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (5)))
{var state_27547__$1 = state_27547;var statearr_27568_27602 = state_27547__$1;(statearr_27568_27602[(2)] = null);
(statearr_27568_27602[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (14)))
{var inst_27509 = (state_27547[(10)]);var inst_27515 = cljs.core.rest.call(null,inst_27509);var inst_27516 = cljs.core.first.call(null,inst_27509);var state_27547__$1 = (function (){var statearr_27569 = state_27547;(statearr_27569[(11)] = inst_27515);
return statearr_27569;
})();if(cljs.core.truth_(inst_27516))
{var statearr_27570_27603 = state_27547__$1;(statearr_27570_27603[(1)] = (16));
} else
{var statearr_27571_27604 = state_27547__$1;(statearr_27571_27604[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (16)))
{var inst_27509 = (state_27547[(10)]);var inst_27518 = cljs.core.first.call(null,inst_27509);var state_27547__$1 = state_27547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27547__$1,(19),inst_27518);
} else
{if((state_val_27548 === (10)))
{var inst_27505 = (state_27547[(8)]);var inst_27538 = (state_27547[(2)]);var inst_27539 = cljs.core.apply.call(null,handler,inst_27538,inst_27505);var state_27547__$1 = (function (){var statearr_27572 = state_27547;(statearr_27572[(12)] = inst_27539);
return statearr_27572;
})();var statearr_27573_27605 = state_27547__$1;(statearr_27573_27605[(2)] = null);
(statearr_27573_27605[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (18)))
{var inst_27515 = (state_27547[(11)]);var inst_27510 = (state_27547[(9)]);var inst_27523 = (state_27547[(2)]);var inst_27524 = cljs.core.conj.call(null,inst_27510,inst_27523);var inst_27509 = inst_27515;var inst_27510__$1 = inst_27524;var state_27547__$1 = (function (){var statearr_27574 = state_27547;(statearr_27574[(9)] = inst_27510__$1);
(statearr_27574[(10)] = inst_27509);
return statearr_27574;
})();var statearr_27575_27606 = state_27547__$1;(statearr_27575_27606[(2)] = null);
(statearr_27575_27606[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27548 === (8)))
{var inst_27504 = (state_27547[(7)]);var inst_27508 = cljs.core.PersistentVector.EMPTY;var inst_27509 = inst_27504;var inst_27510 = inst_27508;var state_27547__$1 = (function (){var statearr_27576 = state_27547;(statearr_27576[(9)] = inst_27510);
(statearr_27576[(10)] = inst_27509);
return statearr_27576;
})();var statearr_27577_27607 = state_27547__$1;(statearr_27577_27607[(2)] = null);
(statearr_27577_27607[(1)] = (11));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_27581 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27581[(0)] = state_machine__5694__auto__);
(statearr_27581[(1)] = (1));
return statearr_27581;
});
var state_machine__5694__auto____1 = (function (state_27547){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_27547);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e27582){if((e27582 instanceof Object))
{var ex__5697__auto__ = e27582;var statearr_27583_27608 = state_27547;(statearr_27583_27608[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27547);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27582;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27609 = state_27547;
state_27547 = G__27609;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_27547){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_27547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_27584 = f__5709__auto__.call(null);(statearr_27584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_27584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
var G__27612__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__27611 = rseq;var rcomm = cljs.core.nth.call(null,vec__27611,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__27611,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__27612 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27612__delegate.call(this,req_args);};
G__27612.cljs$lang$maxFixedArity = 0;
G__27612.cljs$lang$applyTo = (function (arglist__27613){
var req_args = cljs.core.seq(arglist__27613);
return G__27612__delegate(req_args);
});
G__27612.cljs$core$IFn$_invoke$arity$variadic = G__27612__delegate;
return G__27612;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,ch){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,ch){
return (function (state_27631){var state_val_27632 = (state_27631[(1)]);if((state_val_27632 === (2)))
{var inst_27628 = (state_27631[(2)]);var inst_27629 = console.log(inst_27628);var state_27631__$1 = state_27631;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27631__$1,inst_27629);
} else
{if((state_val_27632 === (1)))
{var state_27631__$1 = state_27631;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27631__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_27636 = [null,null,null,null,null,null,null];(statearr_27636[(0)] = state_machine__5694__auto__);
(statearr_27636[(1)] = (1));
return statearr_27636;
});
var state_machine__5694__auto____1 = (function (state_27631){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_27631);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e27637){if((e27637 instanceof Object))
{var ex__5697__auto__ = e27637;var statearr_27638_27640 = state_27631;(statearr_27638_27640[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27631);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27637;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27641 = state_27631;
state_27631 = G__27641;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_27631){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_27631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_27639 = f__5709__auto__.call(null);(statearr_27639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_27639;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,ch))
);
return c__5708__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__27642){
var f = cljs.core.first(arglist__27642);
var args = cljs.core.rest(arglist__27642);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27645){var vec__27646 = p__27645;var k = cljs.core.nth.call(null,vec__27646,(0),null);var v = cljs.core.nth.call(null,vec__27646,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___27673 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___27673,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___27673,r){
return (function (state_27664){var state_val_27665 = (state_27664[(1)]);if((state_val_27665 === (2)))
{var inst_27661 = (state_27664[(2)]);var inst_27662 = cljs.core.reset_BANG_.call(null,r,inst_27661);var state_27664__$1 = state_27664;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27664__$1,inst_27662);
} else
{if((state_val_27665 === (1)))
{var state_27664__$1 = state_27664;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27664__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___27673,r))
;return ((function (switch__5693__auto__,c__5708__auto___27673,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_27669 = [null,null,null,null,null,null,null];(statearr_27669[(0)] = state_machine__5694__auto__);
(statearr_27669[(1)] = (1));
return statearr_27669;
});
var state_machine__5694__auto____1 = (function (state_27664){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_27664);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e27670){if((e27670 instanceof Object))
{var ex__5697__auto__ = e27670;var statearr_27671_27674 = state_27664;(statearr_27671_27674[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27664);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27670;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27675 = state_27664;
state_27664 = G__27675;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_27664){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_27664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___27673,r))
})();var state__5710__auto__ = (function (){var statearr_27672 = f__5709__auto__.call(null);(statearr_27672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___27673);
return statearr_27672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___27673,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__27676){
var id = cljs.core.first(arglist__27676);
arglist__27676 = cljs.core.next(arglist__27676);
var tolerance = cljs.core.first(arglist__27676);
var opts = cljs.core.rest(arglist__27676);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__27677){
var id = cljs.core.first(arglist__27677);
var opts = cljs.core.rest(arglist__27677);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__27678){
var ids = cljs.core.first(arglist__27678);
arglist__27678 = cljs.core.next(arglist__27678);
var tolerance = cljs.core.first(arglist__27678);
var opts = cljs.core.rest(arglist__27678);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__27679){var map__27681 = p__27679;var map__27681__$1 = ((cljs.core.seq_QMARK_.call(null,map__27681))?cljs.core.apply.call(null,cljs.core.hash_map,map__27681):map__27681);var opts = map__27681__$1;var boundaryline_ids = cljs.core.get.call(null,map__27681__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__27679 = null;if (arguments.length > 3) {
  p__27679 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__27679);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__27682){
var collection_id = cljs.core.first(arglist__27682);
arglist__27682 = cljs.core.next(arglist__27682);
var tolerance = cljs.core.first(arglist__27682);
arglist__27682 = cljs.core.next(arglist__27682);
var bounds = cljs.core.first(arglist__27682);
var p__27679 = cljs.core.rest(arglist__27682);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__27679);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__27683){var vec__27685 = p__27683;var type_ids = cljs.core.nth.call(null,vec__27685,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__27683 = null;if (arguments.length > 6) {
  p__27683 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__27683);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__27686){
var index = cljs.core.first(arglist__27686);
arglist__27686 = cljs.core.next(arglist__27686);
var type = cljs.core.first(arglist__27686);
arglist__27686 = cljs.core.next(arglist__27686);
var blcoll = cljs.core.first(arglist__27686);
arglist__27686 = cljs.core.next(arglist__27686);
var attr = cljs.core.first(arglist__27686);
arglist__27686 = cljs.core.next(arglist__27686);
var filter = cljs.core.first(arglist__27686);
arglist__27686 = cljs.core.next(arglist__27686);
var bounds = cljs.core.first(arglist__27686);
var p__27683 = cljs.core.rest(arglist__27686);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__27683);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__27687){var vec__27689 = p__27687;var type_ids = cljs.core.nth.call(null,vec__27689,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__27687 = null;if (arguments.length > 5) {
  p__27687 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__27687);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__27690){
var index = cljs.core.first(arglist__27690);
arglist__27690 = cljs.core.next(arglist__27690);
var type = cljs.core.first(arglist__27690);
arglist__27690 = cljs.core.next(arglist__27690);
var statsattrs = cljs.core.first(arglist__27690);
arglist__27690 = cljs.core.next(arglist__27690);
var filter = cljs.core.first(arglist__27690);
arglist__27690 = cljs.core.next(arglist__27690);
var bounds = cljs.core.first(arglist__27690);
var p__27687 = cljs.core.rest(arglist__27690);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__27687);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__27691){var vec__27693 = p__27691;var type_ids = cljs.core.nth.call(null,vec__27693,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27691 = null;if (arguments.length > 7) {
  p__27691 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__27691);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__27694){
var index = cljs.core.first(arglist__27694);
arglist__27694 = cljs.core.next(arglist__27694);
var type = cljs.core.first(arglist__27694);
arglist__27694 = cljs.core.next(arglist__27694);
var location_attr = cljs.core.first(arglist__27694);
arglist__27694 = cljs.core.next(arglist__27694);
var attrs = cljs.core.first(arglist__27694);
arglist__27694 = cljs.core.next(arglist__27694);
var max_count = cljs.core.first(arglist__27694);
arglist__27694 = cljs.core.next(arglist__27694);
var filter = cljs.core.first(arglist__27694);
arglist__27694 = cljs.core.next(arglist__27694);
var bounds = cljs.core.first(arglist__27694);
var p__27691 = cljs.core.rest(arglist__27694);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__27691);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__27695){var vec__27697 = p__27695;var type_ids = cljs.core.nth.call(null,vec__27697,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27695 = null;if (arguments.length > 7) {
  p__27695 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__27695);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__27698){
var index = cljs.core.first(arglist__27698);
arglist__27698 = cljs.core.next(arglist__27698);
var type = cljs.core.first(arglist__27698);
arglist__27698 = cljs.core.next(arglist__27698);
var filter_spec = cljs.core.first(arglist__27698);
arglist__27698 = cljs.core.next(arglist__27698);
var bounds = cljs.core.first(arglist__27698);
arglist__27698 = cljs.core.next(arglist__27698);
var sort_spec = cljs.core.first(arglist__27698);
arglist__27698 = cljs.core.next(arglist__27698);
var from = cljs.core.first(arglist__27698);
arglist__27698 = cljs.core.next(arglist__27698);
var size = cljs.core.first(arglist__27698);
var p__27695 = cljs.core.rest(arglist__27698);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__27695);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),time_variable,new cljs.core.Keyword(null,"after","after",594996914),after,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"interval","interval",1708495417),interval,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),metric_variables], null));
});
