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
var AJAX__delegate = function (url,p__57463){var map__57467 = p__57463;var map__57467__$1 = ((cljs.core.seq_QMARK_.call(null,map__57467))?cljs.core.apply.call(null,cljs.core.hash_map,map__57467):map__57467);var opts = map__57467__$1;var content = cljs.core.get.call(null,map__57467__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__57467__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__57467__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__57467,map__57467__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__57467,map__57467__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__57467,map__57467__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__57467,map__57467__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__57469 = method;var G__57469__$1 = (((G__57469 == null))?null:cljs.core.name.call(null,G__57469));var G__57469__$2 = (((G__57469__$1 == null))?null:clojure.string.upper_case.call(null,G__57469__$1));return G__57469__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__57463 = null;if (arguments.length > 1) {
  p__57463 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__57463);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__57470){
var url = cljs.core.first(arglist__57470);
var p__57463 = cljs.core.rest(arglist__57470);
return AJAX__delegate(url,p__57463);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__57471){var map__57473 = p__57471;var map__57473__$1 = ((cljs.core.seq_QMARK_.call(null,map__57473))?cljs.core.apply.call(null,cljs.core.hash_map,map__57473):map__57473);var opts = map__57473__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__57471 = null;if (arguments.length > 1) {
  p__57471 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__57471);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__57474){
var url = cljs.core.first(arglist__57474);
var p__57471 = cljs.core.rest(arglist__57474);
return GET__delegate(url,p__57471);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__57475){var map__57477 = p__57475;var map__57477__$1 = ((cljs.core.seq_QMARK_.call(null,map__57477))?cljs.core.apply.call(null,cljs.core.hash_map,map__57477):map__57477);var opts = map__57477__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__57475 = null;if (arguments.length > 2) {
  p__57475 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__57475);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__57478){
var url = cljs.core.first(arglist__57478);
arglist__57478 = cljs.core.next(arglist__57478);
var content = cljs.core.first(arglist__57478);
var p__57475 = cljs.core.rest(arglist__57478);
return POST__delegate(url,content,p__57475);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__57479){var map__57481 = p__57479;var map__57481__$1 = ((cljs.core.seq_QMARK_.call(null,map__57481))?cljs.core.apply.call(null,cljs.core.hash_map,map__57481):map__57481);var opts = map__57481__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__57479 = null;if (arguments.length > 2) {
  p__57479 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__57479);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__57482){
var url = cljs.core.first(arglist__57482);
arglist__57482 = cljs.core.next(arglist__57482);
var content = cljs.core.first(arglist__57482);
var p__57479 = cljs.core.rest(arglist__57482);
return PUT__delegate(url,content,p__57479);
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
return (function (state_57617){var state_val_57618 = (state_57617[(1)]);if((state_val_57618 === (7)))
{var inst_57574 = (state_57617[(7)]);var inst_57573 = (state_57617[(2)]);var inst_57574__$1 = cljs.core.nth.call(null,inst_57573,(0),null);var inst_57575 = cljs.core.nth.call(null,inst_57573,(1),null);var inst_57576 = cljs.core.sequential_QMARK_.call(null,inst_57574__$1);var state_57617__$1 = (function (){var statearr_57619 = state_57617;(statearr_57619[(7)] = inst_57574__$1);
(statearr_57619[(8)] = inst_57575);
return statearr_57619;
})();if(inst_57576)
{var statearr_57620_57655 = state_57617__$1;(statearr_57620_57655[(1)] = (8));
} else
{var statearr_57621_57656 = state_57617__$1;(statearr_57621_57656[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (20)))
{var inst_57574 = (state_57617[(7)]);var state_57617__$1 = state_57617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57617__$1,(23),inst_57574);
} else
{if((state_val_57618 === (1)))
{var state_57617__$1 = state_57617;var statearr_57622_57657 = state_57617__$1;(statearr_57622_57657[(2)] = null);
(statearr_57622_57657[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (4)))
{var state_57617__$1 = state_57617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57617__$1,(7),ocomm);
} else
{if((state_val_57618 === (15)))
{var inst_57597 = (state_57617[(2)]);var state_57617__$1 = state_57617;var statearr_57623_57658 = state_57617__$1;(statearr_57623_57658[(2)] = inst_57597);
(statearr_57623_57658[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (21)))
{var state_57617__$1 = state_57617;var statearr_57624_57659 = state_57617__$1;(statearr_57624_57659[(2)] = null);
(statearr_57624_57659[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (13)))
{var inst_57580 = (state_57617[(9)]);var state_57617__$1 = state_57617;var statearr_57625_57660 = state_57617__$1;(statearr_57625_57660[(2)] = inst_57580);
(statearr_57625_57660[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (22)))
{var inst_57606 = (state_57617[(2)]);var state_57617__$1 = state_57617;var statearr_57626_57661 = state_57617__$1;(statearr_57626_57661[(2)] = inst_57606);
(statearr_57626_57661[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (6)))
{var inst_57613 = (state_57617[(2)]);var state_57617__$1 = state_57617;var statearr_57627_57662 = state_57617__$1;(statearr_57627_57662[(2)] = inst_57613);
(statearr_57627_57662[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (17)))
{var state_57617__$1 = state_57617;var statearr_57628_57663 = state_57617__$1;(statearr_57628_57663[(2)] = null);
(statearr_57628_57663[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (3)))
{var inst_57615 = (state_57617[(2)]);var state_57617__$1 = state_57617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57617__$1,inst_57615);
} else
{if((state_val_57618 === (12)))
{var inst_57599 = (state_57617[(2)]);var state_57617__$1 = state_57617;var statearr_57629_57664 = state_57617__$1;(statearr_57629_57664[(2)] = inst_57599);
(statearr_57629_57664[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (2)))
{var state_57617__$1 = state_57617;var statearr_57630_57665 = state_57617__$1;(statearr_57630_57665[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (23)))
{var inst_57603 = (state_57617[(2)]);var state_57617__$1 = state_57617;var statearr_57632_57666 = state_57617__$1;(statearr_57632_57666[(2)] = inst_57603);
(statearr_57632_57666[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (19)))
{var inst_57590 = (state_57617[(2)]);var state_57617__$1 = state_57617;var statearr_57633_57667 = state_57617__$1;(statearr_57633_57667[(2)] = inst_57590);
(statearr_57633_57667[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (11)))
{var inst_57579 = (state_57617[(10)]);var inst_57582 = cljs.core.empty_QMARK_.call(null,inst_57579);var state_57617__$1 = state_57617;if(inst_57582)
{var statearr_57634_57668 = state_57617__$1;(statearr_57634_57668[(1)] = (13));
} else
{var statearr_57635_57669 = state_57617__$1;(statearr_57635_57669[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (9)))
{var inst_57574 = (state_57617[(7)]);var state_57617__$1 = state_57617;if(cljs.core.truth_(inst_57574))
{var statearr_57636_57670 = state_57617__$1;(statearr_57636_57670[(1)] = (20));
} else
{var statearr_57637_57671 = state_57617__$1;(statearr_57637_57671[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (5)))
{var state_57617__$1 = state_57617;var statearr_57638_57672 = state_57617__$1;(statearr_57638_57672[(2)] = null);
(statearr_57638_57672[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (14)))
{var inst_57579 = (state_57617[(10)]);var inst_57585 = cljs.core.rest.call(null,inst_57579);var inst_57586 = cljs.core.first.call(null,inst_57579);var state_57617__$1 = (function (){var statearr_57639 = state_57617;(statearr_57639[(11)] = inst_57585);
return statearr_57639;
})();if(cljs.core.truth_(inst_57586))
{var statearr_57640_57673 = state_57617__$1;(statearr_57640_57673[(1)] = (16));
} else
{var statearr_57641_57674 = state_57617__$1;(statearr_57641_57674[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (16)))
{var inst_57579 = (state_57617[(10)]);var inst_57588 = cljs.core.first.call(null,inst_57579);var state_57617__$1 = state_57617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57617__$1,(19),inst_57588);
} else
{if((state_val_57618 === (10)))
{var inst_57575 = (state_57617[(8)]);var inst_57608 = (state_57617[(2)]);var inst_57609 = cljs.core.apply.call(null,handler,inst_57608,inst_57575);var state_57617__$1 = (function (){var statearr_57642 = state_57617;(statearr_57642[(12)] = inst_57609);
return statearr_57642;
})();var statearr_57643_57675 = state_57617__$1;(statearr_57643_57675[(2)] = null);
(statearr_57643_57675[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (18)))
{var inst_57585 = (state_57617[(11)]);var inst_57580 = (state_57617[(9)]);var inst_57593 = (state_57617[(2)]);var inst_57594 = cljs.core.conj.call(null,inst_57580,inst_57593);var inst_57579 = inst_57585;var inst_57580__$1 = inst_57594;var state_57617__$1 = (function (){var statearr_57644 = state_57617;(statearr_57644[(10)] = inst_57579);
(statearr_57644[(9)] = inst_57580__$1);
return statearr_57644;
})();var statearr_57645_57676 = state_57617__$1;(statearr_57645_57676[(2)] = null);
(statearr_57645_57676[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_57618 === (8)))
{var inst_57574 = (state_57617[(7)]);var inst_57578 = cljs.core.PersistentVector.EMPTY;var inst_57579 = inst_57574;var inst_57580 = inst_57578;var state_57617__$1 = (function (){var statearr_57646 = state_57617;(statearr_57646[(10)] = inst_57579);
(statearr_57646[(9)] = inst_57580);
return statearr_57646;
})();var statearr_57647_57677 = state_57617__$1;(statearr_57647_57677[(2)] = null);
(statearr_57647_57677[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_57651 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57651[(0)] = state_machine__5694__auto__);
(statearr_57651[(1)] = (1));
return statearr_57651;
});
var state_machine__5694__auto____1 = (function (state_57617){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57617);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57652){if((e57652 instanceof Object))
{var ex__5697__auto__ = e57652;var statearr_57653_57678 = state_57617;(statearr_57653_57678[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57617);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57652;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57679 = state_57617;
state_57617 = G__57679;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57617){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_57654 = f__5709__auto__.call(null);(statearr_57654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_57654;
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
var G__57682__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__57681 = rseq;var rcomm = cljs.core.nth.call(null,vec__57681,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__57681,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__57682 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__57682__delegate.call(this,req_args);};
G__57682.cljs$lang$maxFixedArity = 0;
G__57682.cljs$lang$applyTo = (function (arglist__57683){
var req_args = cljs.core.seq(arglist__57683);
return G__57682__delegate(req_args);
});
G__57682.cljs$core$IFn$_invoke$arity$variadic = G__57682__delegate;
return G__57682;
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
return (function (state_57701){var state_val_57702 = (state_57701[(1)]);if((state_val_57702 === (2)))
{var inst_57698 = (state_57701[(2)]);var inst_57699 = console.log(inst_57698);var state_57701__$1 = state_57701;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57701__$1,inst_57699);
} else
{if((state_val_57702 === (1)))
{var state_57701__$1 = state_57701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57701__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_57706 = [null,null,null,null,null,null,null];(statearr_57706[(0)] = state_machine__5694__auto__);
(statearr_57706[(1)] = (1));
return statearr_57706;
});
var state_machine__5694__auto____1 = (function (state_57701){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57701);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57707){if((e57707 instanceof Object))
{var ex__5697__auto__ = e57707;var statearr_57708_57710 = state_57701;(statearr_57708_57710[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57701);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57707;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57711 = state_57701;
state_57701 = G__57711;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57701){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_57709 = f__5709__auto__.call(null);(statearr_57709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_57709;
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
log_api.cljs$lang$applyTo = (function (arglist__57712){
var f = cljs.core.first(arglist__57712);
var args = cljs.core.rest(arglist__57712);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__57715){var vec__57716 = p__57715;var k = cljs.core.nth.call(null,vec__57716,(0),null);var v = cljs.core.nth.call(null,vec__57716,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___57743 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___57743,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___57743,r){
return (function (state_57734){var state_val_57735 = (state_57734[(1)]);if((state_val_57735 === (2)))
{var inst_57731 = (state_57734[(2)]);var inst_57732 = cljs.core.reset_BANG_.call(null,r,inst_57731);var state_57734__$1 = state_57734;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57734__$1,inst_57732);
} else
{if((state_val_57735 === (1)))
{var state_57734__$1 = state_57734;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57734__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___57743,r))
;return ((function (switch__5693__auto__,c__5708__auto___57743,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_57739 = [null,null,null,null,null,null,null];(statearr_57739[(0)] = state_machine__5694__auto__);
(statearr_57739[(1)] = (1));
return statearr_57739;
});
var state_machine__5694__auto____1 = (function (state_57734){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57734);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57740){if((e57740 instanceof Object))
{var ex__5697__auto__ = e57740;var statearr_57741_57744 = state_57734;(statearr_57741_57744[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57734);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57740;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57745 = state_57734;
state_57734 = G__57745;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57734){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___57743,r))
})();var state__5710__auto__ = (function (){var statearr_57742 = f__5709__auto__.call(null);(statearr_57742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___57743);
return statearr_57742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___57743,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__57746){
var id = cljs.core.first(arglist__57746);
arglist__57746 = cljs.core.next(arglist__57746);
var tolerance = cljs.core.first(arglist__57746);
var opts = cljs.core.rest(arglist__57746);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__57747){
var id = cljs.core.first(arglist__57747);
var opts = cljs.core.rest(arglist__57747);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__57748){
var ids = cljs.core.first(arglist__57748);
arglist__57748 = cljs.core.next(arglist__57748);
var tolerance = cljs.core.first(arglist__57748);
var opts = cljs.core.rest(arglist__57748);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__57749){var map__57751 = p__57749;var map__57751__$1 = ((cljs.core.seq_QMARK_.call(null,map__57751))?cljs.core.apply.call(null,cljs.core.hash_map,map__57751):map__57751);var opts = map__57751__$1;var boundaryline_ids = cljs.core.get.call(null,map__57751__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__57749 = null;if (arguments.length > 3) {
  p__57749 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__57749);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__57752){
var collection_id = cljs.core.first(arglist__57752);
arglist__57752 = cljs.core.next(arglist__57752);
var tolerance = cljs.core.first(arglist__57752);
arglist__57752 = cljs.core.next(arglist__57752);
var bounds = cljs.core.first(arglist__57752);
var p__57749 = cljs.core.rest(arglist__57752);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__57749);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__57753){var vec__57755 = p__57753;var type_ids = cljs.core.nth.call(null,vec__57755,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__57753 = null;if (arguments.length > 6) {
  p__57753 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__57753);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__57756){
var index = cljs.core.first(arglist__57756);
arglist__57756 = cljs.core.next(arglist__57756);
var type = cljs.core.first(arglist__57756);
arglist__57756 = cljs.core.next(arglist__57756);
var blcoll = cljs.core.first(arglist__57756);
arglist__57756 = cljs.core.next(arglist__57756);
var attr = cljs.core.first(arglist__57756);
arglist__57756 = cljs.core.next(arglist__57756);
var filter = cljs.core.first(arglist__57756);
arglist__57756 = cljs.core.next(arglist__57756);
var bounds = cljs.core.first(arglist__57756);
var p__57753 = cljs.core.rest(arglist__57756);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__57753);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__57757){var vec__57759 = p__57757;var type_ids = cljs.core.nth.call(null,vec__57759,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__57757 = null;if (arguments.length > 5) {
  p__57757 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__57757);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__57760){
var index = cljs.core.first(arglist__57760);
arglist__57760 = cljs.core.next(arglist__57760);
var type = cljs.core.first(arglist__57760);
arglist__57760 = cljs.core.next(arglist__57760);
var statsattrs = cljs.core.first(arglist__57760);
arglist__57760 = cljs.core.next(arglist__57760);
var filter = cljs.core.first(arglist__57760);
arglist__57760 = cljs.core.next(arglist__57760);
var bounds = cljs.core.first(arglist__57760);
var p__57757 = cljs.core.rest(arglist__57760);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__57757);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__57761){var vec__57763 = p__57761;var type_ids = cljs.core.nth.call(null,vec__57763,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__57761 = null;if (arguments.length > 7) {
  p__57761 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__57761);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__57764){
var index = cljs.core.first(arglist__57764);
arglist__57764 = cljs.core.next(arglist__57764);
var type = cljs.core.first(arglist__57764);
arglist__57764 = cljs.core.next(arglist__57764);
var location_attr = cljs.core.first(arglist__57764);
arglist__57764 = cljs.core.next(arglist__57764);
var attrs = cljs.core.first(arglist__57764);
arglist__57764 = cljs.core.next(arglist__57764);
var max_count = cljs.core.first(arglist__57764);
arglist__57764 = cljs.core.next(arglist__57764);
var filter = cljs.core.first(arglist__57764);
arglist__57764 = cljs.core.next(arglist__57764);
var bounds = cljs.core.first(arglist__57764);
var p__57761 = cljs.core.rest(arglist__57764);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__57761);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__57765){var vec__57767 = p__57765;var type_ids = cljs.core.nth.call(null,vec__57767,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__57765 = null;if (arguments.length > 7) {
  p__57765 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__57765);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__57768){
var index = cljs.core.first(arglist__57768);
arglist__57768 = cljs.core.next(arglist__57768);
var type = cljs.core.first(arglist__57768);
arglist__57768 = cljs.core.next(arglist__57768);
var filter_spec = cljs.core.first(arglist__57768);
arglist__57768 = cljs.core.next(arglist__57768);
var bounds = cljs.core.first(arglist__57768);
arglist__57768 = cljs.core.next(arglist__57768);
var sort_spec = cljs.core.first(arglist__57768);
arglist__57768 = cljs.core.next(arglist__57768);
var from = cljs.core.first(arglist__57768);
arglist__57768 = cljs.core.next(arglist__57768);
var size = cljs.core.first(arglist__57768);
var p__57765 = cljs.core.rest(arglist__57768);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__57765);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),time_variable,new cljs.core.Keyword(null,"after","after",594996914),after,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"interval","interval",1708495417),interval,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),metric_variables], null));
});

//# sourceMappingURL=api.js.map