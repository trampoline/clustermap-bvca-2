// Compiled by ClojureScript 0.0-2261
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
var AJAX__delegate = function (url,p__8494){var map__8498 = p__8494;var map__8498__$1 = ((cljs.core.seq_QMARK_.call(null,map__8498))?cljs.core.apply.call(null,cljs.core.hash_map,map__8498):map__8498);var content = cljs.core.get.call(null,map__8498__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__8498__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__8498__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__8498,map__8498__$1,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__8498,map__8498__$1,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__8498,map__8498__$1,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__8498,map__8498__$1,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__8500 = method;var G__8500__$1 = (((G__8500 == null))?null:cljs.core.name.call(null,G__8500));var G__8500__$2 = (((G__8500__$1 == null))?null:clojure.string.upper_case.call(null,G__8500__$1));return G__8500__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__8494 = null;if (arguments.length > 1) {
  p__8494 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__8494);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__8501){
var url = cljs.core.first(arglist__8501);
var p__8494 = cljs.core.rest(arglist__8501);
return AJAX__delegate(url,p__8494);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__8502){var map__8504 = p__8502;var map__8504__$1 = ((cljs.core.seq_QMARK_.call(null,map__8504))?cljs.core.apply.call(null,cljs.core.hash_map,map__8504):map__8504);var opts = map__8504__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__8502 = null;if (arguments.length > 1) {
  p__8502 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__8502);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__8505){
var url = cljs.core.first(arglist__8505);
var p__8502 = cljs.core.rest(arglist__8505);
return GET__delegate(url,p__8502);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__8506){var map__8508 = p__8506;var map__8508__$1 = ((cljs.core.seq_QMARK_.call(null,map__8508))?cljs.core.apply.call(null,cljs.core.hash_map,map__8508):map__8508);var opts = map__8508__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__8506 = null;if (arguments.length > 2) {
  p__8506 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__8506);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__8509){
var url = cljs.core.first(arglist__8509);
arglist__8509 = cljs.core.next(arglist__8509);
var content = cljs.core.first(arglist__8509);
var p__8506 = cljs.core.rest(arglist__8509);
return POST__delegate(url,content,p__8506);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__8510){var map__8512 = p__8510;var map__8512__$1 = ((cljs.core.seq_QMARK_.call(null,map__8512))?cljs.core.apply.call(null,cljs.core.hash_map,map__8512):map__8512);var opts = map__8512__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__8510 = null;if (arguments.length > 2) {
  p__8510 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__8510);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__8513){
var url = cljs.core.first(arglist__8513);
arglist__8513 = cljs.core.next(arglist__8513);
var content = cljs.core.first(arglist__8513);
var p__8510 = cljs.core.rest(arglist__8513);
return PUT__delegate(url,content,p__8510);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_8646){var state_val_8647 = (state_8646[(1)]);if((state_val_8647 === (7)))
{var inst_8604 = (state_8646[(7)]);var inst_8603 = (state_8646[(2)]);var inst_8604__$1 = cljs.core.nth.call(null,inst_8603,(0),null);var inst_8605 = cljs.core.nth.call(null,inst_8603,(1),null);var inst_8606 = cljs.core.sequential_QMARK_.call(null,inst_8604__$1);var state_8646__$1 = (function (){var statearr_8648 = state_8646;(statearr_8648[(7)] = inst_8604__$1);
(statearr_8648[(8)] = inst_8605);
return statearr_8648;
})();if(inst_8606)
{var statearr_8649_8684 = state_8646__$1;(statearr_8649_8684[(1)] = (8));
} else
{var statearr_8650_8685 = state_8646__$1;(statearr_8650_8685[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (20)))
{var inst_8604 = (state_8646[(7)]);var state_8646__$1 = state_8646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8646__$1,(23),inst_8604);
} else
{if((state_val_8647 === (1)))
{var state_8646__$1 = state_8646;var statearr_8651_8686 = state_8646__$1;(statearr_8651_8686[(2)] = null);
(statearr_8651_8686[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (4)))
{var state_8646__$1 = state_8646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8646__$1,(7),ocomm);
} else
{if((state_val_8647 === (15)))
{var inst_8626 = (state_8646[(2)]);var state_8646__$1 = state_8646;var statearr_8652_8687 = state_8646__$1;(statearr_8652_8687[(2)] = inst_8626);
(statearr_8652_8687[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (21)))
{var state_8646__$1 = state_8646;var statearr_8653_8688 = state_8646__$1;(statearr_8653_8688[(2)] = null);
(statearr_8653_8688[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (13)))
{var inst_8609 = (state_8646[(9)]);var state_8646__$1 = state_8646;var statearr_8654_8689 = state_8646__$1;(statearr_8654_8689[(2)] = inst_8609);
(statearr_8654_8689[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (22)))
{var inst_8635 = (state_8646[(2)]);var state_8646__$1 = state_8646;var statearr_8655_8690 = state_8646__$1;(statearr_8655_8690[(2)] = inst_8635);
(statearr_8655_8690[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (6)))
{var inst_8642 = (state_8646[(2)]);var state_8646__$1 = state_8646;var statearr_8656_8691 = state_8646__$1;(statearr_8656_8691[(2)] = inst_8642);
(statearr_8656_8691[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (17)))
{var state_8646__$1 = state_8646;var statearr_8657_8692 = state_8646__$1;(statearr_8657_8692[(2)] = null);
(statearr_8657_8692[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (3)))
{var inst_8644 = (state_8646[(2)]);var state_8646__$1 = state_8646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8646__$1,inst_8644);
} else
{if((state_val_8647 === (12)))
{var inst_8628 = (state_8646[(2)]);var state_8646__$1 = state_8646;var statearr_8658_8693 = state_8646__$1;(statearr_8658_8693[(2)] = inst_8628);
(statearr_8658_8693[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (2)))
{var state_8646__$1 = state_8646;if(true)
{var statearr_8659_8694 = state_8646__$1;(statearr_8659_8694[(1)] = (4));
} else
{var statearr_8660_8695 = state_8646__$1;(statearr_8660_8695[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (23)))
{var inst_8632 = (state_8646[(2)]);var state_8646__$1 = state_8646;var statearr_8661_8696 = state_8646__$1;(statearr_8661_8696[(2)] = inst_8632);
(statearr_8661_8696[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (19)))
{var inst_8619 = (state_8646[(2)]);var state_8646__$1 = state_8646;var statearr_8662_8697 = state_8646__$1;(statearr_8662_8697[(2)] = inst_8619);
(statearr_8662_8697[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (11)))
{var inst_8608 = (state_8646[(10)]);var inst_8611 = cljs.core.empty_QMARK_.call(null,inst_8608);var state_8646__$1 = state_8646;if(inst_8611)
{var statearr_8663_8698 = state_8646__$1;(statearr_8663_8698[(1)] = (13));
} else
{var statearr_8664_8699 = state_8646__$1;(statearr_8664_8699[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (9)))
{var inst_8604 = (state_8646[(7)]);var state_8646__$1 = state_8646;if(cljs.core.truth_(inst_8604))
{var statearr_8665_8700 = state_8646__$1;(statearr_8665_8700[(1)] = (20));
} else
{var statearr_8666_8701 = state_8646__$1;(statearr_8666_8701[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (5)))
{var state_8646__$1 = state_8646;var statearr_8667_8702 = state_8646__$1;(statearr_8667_8702[(2)] = null);
(statearr_8667_8702[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (14)))
{var inst_8608 = (state_8646[(10)]);var inst_8614 = cljs.core.rest.call(null,inst_8608);var inst_8615 = cljs.core.first.call(null,inst_8608);var state_8646__$1 = (function (){var statearr_8668 = state_8646;(statearr_8668[(11)] = inst_8614);
return statearr_8668;
})();if(cljs.core.truth_(inst_8615))
{var statearr_8669_8703 = state_8646__$1;(statearr_8669_8703[(1)] = (16));
} else
{var statearr_8670_8704 = state_8646__$1;(statearr_8670_8704[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (16)))
{var inst_8608 = (state_8646[(10)]);var inst_8617 = cljs.core.first.call(null,inst_8608);var state_8646__$1 = state_8646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8646__$1,(19),inst_8617);
} else
{if((state_val_8647 === (10)))
{var inst_8605 = (state_8646[(8)]);var inst_8637 = (state_8646[(2)]);var inst_8638 = cljs.core.apply.call(null,handler,inst_8637,inst_8605);var state_8646__$1 = (function (){var statearr_8671 = state_8646;(statearr_8671[(12)] = inst_8638);
return statearr_8671;
})();var statearr_8672_8705 = state_8646__$1;(statearr_8672_8705[(2)] = null);
(statearr_8672_8705[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (18)))
{var inst_8609 = (state_8646[(9)]);var inst_8614 = (state_8646[(11)]);var inst_8622 = (state_8646[(2)]);var inst_8623 = cljs.core.conj.call(null,inst_8609,inst_8622);var inst_8608 = inst_8614;var inst_8609__$1 = inst_8623;var state_8646__$1 = (function (){var statearr_8673 = state_8646;(statearr_8673[(9)] = inst_8609__$1);
(statearr_8673[(10)] = inst_8608);
return statearr_8673;
})();var statearr_8674_8706 = state_8646__$1;(statearr_8674_8706[(2)] = null);
(statearr_8674_8706[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8647 === (8)))
{var inst_8604 = (state_8646[(7)]);var inst_8608 = inst_8604;var inst_8609 = cljs.core.PersistentVector.EMPTY;var state_8646__$1 = (function (){var statearr_8675 = state_8646;(statearr_8675[(9)] = inst_8609);
(statearr_8675[(10)] = inst_8608);
return statearr_8675;
})();var statearr_8676_8707 = state_8646__$1;(statearr_8676_8707[(2)] = null);
(statearr_8676_8707[(1)] = (11));
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_8680 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8680[(0)] = state_machine__5679__auto__);
(statearr_8680[(1)] = (1));
return statearr_8680;
});
var state_machine__5679__auto____1 = (function (state_8646){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_8646);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e8681){if((e8681 instanceof Object))
{var ex__5682__auto__ = e8681;var statearr_8682_8708 = state_8646;(statearr_8682_8708[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8646);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e8681;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8709 = state_8646;
state_8646 = G__8709;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_8646){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_8646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_8683 = f__5694__auto__.call(null);(statearr_8683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_8683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var G__8712__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__8711 = rseq;var rcomm = cljs.core.nth.call(null,vec__8711,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__8711,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__8712 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8712__delegate.call(this,req_args);};
G__8712.cljs$lang$maxFixedArity = 0;
G__8712.cljs$lang$applyTo = (function (arglist__8713){
var req_args = cljs.core.seq(arglist__8713);
return G__8712__delegate(req_args);
});
G__8712.cljs$core$IFn$_invoke$arity$variadic = G__8712__delegate;
return G__8712;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,ch){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,ch){
return (function (state_8731){var state_val_8732 = (state_8731[(1)]);if((state_val_8732 === (2)))
{var inst_8728 = (state_8731[(2)]);var inst_8729 = console.log(inst_8728);var state_8731__$1 = state_8731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8731__$1,inst_8729);
} else
{if((state_val_8732 === (1)))
{var state_8731__$1 = state_8731;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8731__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_8736 = [null,null,null,null,null,null,null];(statearr_8736[(0)] = state_machine__5679__auto__);
(statearr_8736[(1)] = (1));
return statearr_8736;
});
var state_machine__5679__auto____1 = (function (state_8731){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_8731);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e8737){if((e8737 instanceof Object))
{var ex__5682__auto__ = e8737;var statearr_8738_8740 = state_8731;(statearr_8738_8740[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8731);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e8737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8741 = state_8731;
state_8731 = G__8741;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_8731){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_8731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_8739 = f__5694__auto__.call(null);(statearr_8739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_8739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,ch))
);
return c__5693__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__8742){
var f = cljs.core.first(arglist__8742);
var args = cljs.core.rest(arglist__8742);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__8745){var vec__8746 = p__8745;var k = cljs.core.nth.call(null,vec__8746,(0),null);var v = cljs.core.nth.call(null,vec__8746,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___8773 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___8773,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___8773,r){
return (function (state_8764){var state_val_8765 = (state_8764[(1)]);if((state_val_8765 === (2)))
{var inst_8761 = (state_8764[(2)]);var inst_8762 = cljs.core.reset_BANG_.call(null,r,inst_8761);var state_8764__$1 = state_8764;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8764__$1,inst_8762);
} else
{if((state_val_8765 === (1)))
{var state_8764__$1 = state_8764;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8764__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___8773,r))
;return ((function (switch__5678__auto__,c__5693__auto___8773,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_8769 = [null,null,null,null,null,null,null];(statearr_8769[(0)] = state_machine__5679__auto__);
(statearr_8769[(1)] = (1));
return statearr_8769;
});
var state_machine__5679__auto____1 = (function (state_8764){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_8764);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e8770){if((e8770 instanceof Object))
{var ex__5682__auto__ = e8770;var statearr_8771_8774 = state_8764;(statearr_8771_8774[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8764);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e8770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8775 = state_8764;
state_8764 = G__8775;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_8764){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_8764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___8773,r))
})();var state__5695__auto__ = (function (){var statearr_8772 = f__5694__auto__.call(null);(statearr_8772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___8773);
return statearr_8772;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___8773,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__8776){
var id = cljs.core.first(arglist__8776);
arglist__8776 = cljs.core.next(arglist__8776);
var tolerance = cljs.core.first(arglist__8776);
var opts = cljs.core.rest(arglist__8776);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__8777){
var id = cljs.core.first(arglist__8777);
var opts = cljs.core.rest(arglist__8777);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,p__8778){var vec__8780 = p__8778;var type_ids = cljs.core.nth.call(null,vec__8780,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,var_args){
var p__8778 = null;if (arguments.length > 5) {
  p__8778 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,p__8778);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 5;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__8781){
var index = cljs.core.first(arglist__8781);
arglist__8781 = cljs.core.next(arglist__8781);
var type = cljs.core.first(arglist__8781);
arglist__8781 = cljs.core.next(arglist__8781);
var blcoll = cljs.core.first(arglist__8781);
arglist__8781 = cljs.core.next(arglist__8781);
var attr = cljs.core.first(arglist__8781);
arglist__8781 = cljs.core.next(arglist__8781);
var filter = cljs.core.first(arglist__8781);
var p__8778 = cljs.core.rest(arglist__8781);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,p__8778);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > (0)))
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
var portfolio_company_sites__delegate = function (p__8782){var vec__8784 = p__8782;var type_ids = cljs.core.nth.call(null,vec__8784,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__8782 = null;if (arguments.length > 0) {
  p__8782 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__8782);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__8785){
var p__8782 = cljs.core.seq(arglist__8785);
return portfolio_company_sites__delegate(p__8782);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__8786){var vec__8788 = p__8786;var type_ids = cljs.core.nth.call(null,vec__8788,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__8786 = null;if (arguments.length > 0) {
  p__8786 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__8786);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__8789){
var p__8786 = cljs.core.seq(arglist__8789);
return portfolio_company_sites_by_company__delegate(p__8786);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__8790){var vec__8792 = p__8790;var type_ids = cljs.core.nth.call(null,vec__8792,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__8790 = null;if (arguments.length > 0) {
  p__8790 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__8790);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__8793){
var p__8790 = cljs.core.seq(arglist__8793);
return portfolio_company_locations__delegate(p__8790);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__8794){var vec__8796 = p__8794;var type_ids = cljs.core.nth.call(null,vec__8796,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__8794 = null;if (arguments.length > 0) {
  p__8794 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__8794);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__8797){
var p__8794 = cljs.core.seq(arglist__8797);
return portfolio_company_site_stats__delegate(p__8794);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__8798){var vec__8800 = p__8798;var type_ids = cljs.core.nth.call(null,vec__8800,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__8798 = null;if (arguments.length > 0) {
  p__8798 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__8798);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__8801){
var p__8798 = cljs.core.seq(arglist__8801);
return portfolio_company_site_account_timelines__delegate(p__8798);
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
var investment_account_timelines__delegate = function (p__8802){var vec__8804 = p__8802;var type_ids = cljs.core.nth.call(null,vec__8804,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__8802 = null;if (arguments.length > 0) {
  p__8802 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__8802);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__8805){
var p__8802 = cljs.core.seq(arglist__8805);
return investment_account_timelines__delegate(p__8802);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__8806){var vec__8808 = p__8806;var type_ids = cljs.core.nth.call(null,vec__8808,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__8806 = null;if (arguments.length > 0) {
  p__8806 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__8806);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__8809){
var p__8806 = cljs.core.seq(arglist__8809);
return investment_stats__delegate(p__8806);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__8810){var vec__8812 = p__8810;var type_ids = cljs.core.nth.call(null,vec__8812,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__8810 = null;if (arguments.length > 0) {
  p__8810 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__8810);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__8813){
var p__8810 = cljs.core.seq(arglist__8813);
return investment_aggs__delegate(p__8810);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__8814){var vec__8816 = p__8814;var type_ids = cljs.core.nth.call(null,vec__8816,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__8814 = null;if (arguments.length > 0) {
  p__8814 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__8814);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__8817){
var p__8814 = cljs.core.seq(arglist__8817);
return investments__delegate(p__8814);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
