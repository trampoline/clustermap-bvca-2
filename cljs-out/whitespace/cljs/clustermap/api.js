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
var AJAX__delegate = function (url,p__8557){var map__8561 = p__8557;var map__8561__$1 = ((cljs.core.seq_QMARK_.call(null,map__8561))?cljs.core.apply.call(null,cljs.core.hash_map,map__8561):map__8561);var opts = map__8561__$1;var content = cljs.core.get.call(null,map__8561__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__8561__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__8561__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__8561,map__8561__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__8561,map__8561__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__8561,map__8561__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__8561,map__8561__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__8563 = method;var G__8563__$1 = (((G__8563 == null))?null:cljs.core.name.call(null,G__8563));var G__8563__$2 = (((G__8563__$1 == null))?null:clojure.string.upper_case.call(null,G__8563__$1));return G__8563__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__8557 = null;if (arguments.length > 1) {
  p__8557 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__8557);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__8564){
var url = cljs.core.first(arglist__8564);
var p__8557 = cljs.core.rest(arglist__8564);
return AJAX__delegate(url,p__8557);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__8565){var map__8567 = p__8565;var map__8567__$1 = ((cljs.core.seq_QMARK_.call(null,map__8567))?cljs.core.apply.call(null,cljs.core.hash_map,map__8567):map__8567);var opts = map__8567__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__8565 = null;if (arguments.length > 1) {
  p__8565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__8565);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__8568){
var url = cljs.core.first(arglist__8568);
var p__8565 = cljs.core.rest(arglist__8568);
return GET__delegate(url,p__8565);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__8569){var map__8571 = p__8569;var map__8571__$1 = ((cljs.core.seq_QMARK_.call(null,map__8571))?cljs.core.apply.call(null,cljs.core.hash_map,map__8571):map__8571);var opts = map__8571__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__8569 = null;if (arguments.length > 2) {
  p__8569 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__8569);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__8572){
var url = cljs.core.first(arglist__8572);
arglist__8572 = cljs.core.next(arglist__8572);
var content = cljs.core.first(arglist__8572);
var p__8569 = cljs.core.rest(arglist__8572);
return POST__delegate(url,content,p__8569);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__8573){var map__8575 = p__8573;var map__8575__$1 = ((cljs.core.seq_QMARK_.call(null,map__8575))?cljs.core.apply.call(null,cljs.core.hash_map,map__8575):map__8575);var opts = map__8575__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__8573 = null;if (arguments.length > 2) {
  p__8573 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__8573);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__8576){
var url = cljs.core.first(arglist__8576);
arglist__8576 = cljs.core.next(arglist__8576);
var content = cljs.core.first(arglist__8576);
var p__8573 = cljs.core.rest(arglist__8576);
return PUT__delegate(url,content,p__8573);
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
return (function (state_8711){var state_val_8712 = (state_8711[(1)]);if((state_val_8712 === (7)))
{var inst_8668 = (state_8711[(7)]);var inst_8667 = (state_8711[(2)]);var inst_8668__$1 = cljs.core.nth.call(null,inst_8667,(0),null);var inst_8669 = cljs.core.nth.call(null,inst_8667,(1),null);var inst_8670 = cljs.core.sequential_QMARK_.call(null,inst_8668__$1);var state_8711__$1 = (function (){var statearr_8713 = state_8711;(statearr_8713[(8)] = inst_8669);
(statearr_8713[(7)] = inst_8668__$1);
return statearr_8713;
})();if(inst_8670)
{var statearr_8714_8749 = state_8711__$1;(statearr_8714_8749[(1)] = (8));
} else
{var statearr_8715_8750 = state_8711__$1;(statearr_8715_8750[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (20)))
{var inst_8668 = (state_8711[(7)]);var state_8711__$1 = state_8711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8711__$1,(23),inst_8668);
} else
{if((state_val_8712 === (1)))
{var state_8711__$1 = state_8711;var statearr_8716_8751 = state_8711__$1;(statearr_8716_8751[(2)] = null);
(statearr_8716_8751[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (4)))
{var state_8711__$1 = state_8711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8711__$1,(7),ocomm);
} else
{if((state_val_8712 === (15)))
{var inst_8691 = (state_8711[(2)]);var state_8711__$1 = state_8711;var statearr_8717_8752 = state_8711__$1;(statearr_8717_8752[(2)] = inst_8691);
(statearr_8717_8752[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (21)))
{var state_8711__$1 = state_8711;var statearr_8718_8753 = state_8711__$1;(statearr_8718_8753[(2)] = null);
(statearr_8718_8753[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (13)))
{var inst_8674 = (state_8711[(9)]);var state_8711__$1 = state_8711;var statearr_8719_8754 = state_8711__$1;(statearr_8719_8754[(2)] = inst_8674);
(statearr_8719_8754[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (22)))
{var inst_8700 = (state_8711[(2)]);var state_8711__$1 = state_8711;var statearr_8720_8755 = state_8711__$1;(statearr_8720_8755[(2)] = inst_8700);
(statearr_8720_8755[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (6)))
{var inst_8707 = (state_8711[(2)]);var state_8711__$1 = state_8711;var statearr_8721_8756 = state_8711__$1;(statearr_8721_8756[(2)] = inst_8707);
(statearr_8721_8756[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (17)))
{var state_8711__$1 = state_8711;var statearr_8722_8757 = state_8711__$1;(statearr_8722_8757[(2)] = null);
(statearr_8722_8757[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (3)))
{var inst_8709 = (state_8711[(2)]);var state_8711__$1 = state_8711;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8711__$1,inst_8709);
} else
{if((state_val_8712 === (12)))
{var inst_8693 = (state_8711[(2)]);var state_8711__$1 = state_8711;var statearr_8723_8758 = state_8711__$1;(statearr_8723_8758[(2)] = inst_8693);
(statearr_8723_8758[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (2)))
{var state_8711__$1 = state_8711;var statearr_8724_8759 = state_8711__$1;(statearr_8724_8759[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (23)))
{var inst_8697 = (state_8711[(2)]);var state_8711__$1 = state_8711;var statearr_8726_8760 = state_8711__$1;(statearr_8726_8760[(2)] = inst_8697);
(statearr_8726_8760[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (19)))
{var inst_8684 = (state_8711[(2)]);var state_8711__$1 = state_8711;var statearr_8727_8761 = state_8711__$1;(statearr_8727_8761[(2)] = inst_8684);
(statearr_8727_8761[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (11)))
{var inst_8673 = (state_8711[(10)]);var inst_8676 = cljs.core.empty_QMARK_.call(null,inst_8673);var state_8711__$1 = state_8711;if(inst_8676)
{var statearr_8728_8762 = state_8711__$1;(statearr_8728_8762[(1)] = (13));
} else
{var statearr_8729_8763 = state_8711__$1;(statearr_8729_8763[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (9)))
{var inst_8668 = (state_8711[(7)]);var state_8711__$1 = state_8711;if(cljs.core.truth_(inst_8668))
{var statearr_8730_8764 = state_8711__$1;(statearr_8730_8764[(1)] = (20));
} else
{var statearr_8731_8765 = state_8711__$1;(statearr_8731_8765[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (5)))
{var state_8711__$1 = state_8711;var statearr_8732_8766 = state_8711__$1;(statearr_8732_8766[(2)] = null);
(statearr_8732_8766[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (14)))
{var inst_8673 = (state_8711[(10)]);var inst_8679 = cljs.core.rest.call(null,inst_8673);var inst_8680 = cljs.core.first.call(null,inst_8673);var state_8711__$1 = (function (){var statearr_8733 = state_8711;(statearr_8733[(11)] = inst_8679);
return statearr_8733;
})();if(cljs.core.truth_(inst_8680))
{var statearr_8734_8767 = state_8711__$1;(statearr_8734_8767[(1)] = (16));
} else
{var statearr_8735_8768 = state_8711__$1;(statearr_8735_8768[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (16)))
{var inst_8673 = (state_8711[(10)]);var inst_8682 = cljs.core.first.call(null,inst_8673);var state_8711__$1 = state_8711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8711__$1,(19),inst_8682);
} else
{if((state_val_8712 === (10)))
{var inst_8669 = (state_8711[(8)]);var inst_8702 = (state_8711[(2)]);var inst_8703 = cljs.core.apply.call(null,handler,inst_8702,inst_8669);var state_8711__$1 = (function (){var statearr_8736 = state_8711;(statearr_8736[(12)] = inst_8703);
return statearr_8736;
})();var statearr_8737_8769 = state_8711__$1;(statearr_8737_8769[(2)] = null);
(statearr_8737_8769[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (18)))
{var inst_8674 = (state_8711[(9)]);var inst_8679 = (state_8711[(11)]);var inst_8687 = (state_8711[(2)]);var inst_8688 = cljs.core.conj.call(null,inst_8674,inst_8687);var inst_8673 = inst_8679;var inst_8674__$1 = inst_8688;var state_8711__$1 = (function (){var statearr_8738 = state_8711;(statearr_8738[(10)] = inst_8673);
(statearr_8738[(9)] = inst_8674__$1);
return statearr_8738;
})();var statearr_8739_8770 = state_8711__$1;(statearr_8739_8770[(2)] = null);
(statearr_8739_8770[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8712 === (8)))
{var inst_8668 = (state_8711[(7)]);var inst_8672 = cljs.core.PersistentVector.EMPTY;var inst_8673 = inst_8668;var inst_8674 = inst_8672;var state_8711__$1 = (function (){var statearr_8740 = state_8711;(statearr_8740[(10)] = inst_8673);
(statearr_8740[(9)] = inst_8674);
return statearr_8740;
})();var statearr_8741_8771 = state_8711__$1;(statearr_8741_8771[(2)] = null);
(statearr_8741_8771[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_8745 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8745[(0)] = state_machine__5694__auto__);
(statearr_8745[(1)] = (1));
return statearr_8745;
});
var state_machine__5694__auto____1 = (function (state_8711){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_8711);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e8746){if((e8746 instanceof Object))
{var ex__5697__auto__ = e8746;var statearr_8747_8772 = state_8711;(statearr_8747_8772[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8711);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e8746;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8773 = state_8711;
state_8711 = G__8773;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_8711){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_8711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_8748 = f__5709__auto__.call(null);(statearr_8748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_8748;
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
var G__8776__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__8775 = rseq;var rcomm = cljs.core.nth.call(null,vec__8775,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__8775,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__8776 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8776__delegate.call(this,req_args);};
G__8776.cljs$lang$maxFixedArity = 0;
G__8776.cljs$lang$applyTo = (function (arglist__8777){
var req_args = cljs.core.seq(arglist__8777);
return G__8776__delegate(req_args);
});
G__8776.cljs$core$IFn$_invoke$arity$variadic = G__8776__delegate;
return G__8776;
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
return (function (state_8795){var state_val_8796 = (state_8795[(1)]);if((state_val_8796 === (2)))
{var inst_8792 = (state_8795[(2)]);var inst_8793 = console.log(inst_8792);var state_8795__$1 = state_8795;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8795__$1,inst_8793);
} else
{if((state_val_8796 === (1)))
{var state_8795__$1 = state_8795;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8795__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_8800 = [null,null,null,null,null,null,null];(statearr_8800[(0)] = state_machine__5694__auto__);
(statearr_8800[(1)] = (1));
return statearr_8800;
});
var state_machine__5694__auto____1 = (function (state_8795){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_8795);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e8801){if((e8801 instanceof Object))
{var ex__5697__auto__ = e8801;var statearr_8802_8804 = state_8795;(statearr_8802_8804[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8795);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e8801;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8805 = state_8795;
state_8795 = G__8805;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_8795){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_8795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_8803 = f__5709__auto__.call(null);(statearr_8803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_8803;
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
log_api.cljs$lang$applyTo = (function (arglist__8806){
var f = cljs.core.first(arglist__8806);
var args = cljs.core.rest(arglist__8806);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__8809){var vec__8810 = p__8809;var k = cljs.core.nth.call(null,vec__8810,(0),null);var v = cljs.core.nth.call(null,vec__8810,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___8837 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___8837,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___8837,r){
return (function (state_8828){var state_val_8829 = (state_8828[(1)]);if((state_val_8829 === (2)))
{var inst_8825 = (state_8828[(2)]);var inst_8826 = cljs.core.reset_BANG_.call(null,r,inst_8825);var state_8828__$1 = state_8828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8828__$1,inst_8826);
} else
{if((state_val_8829 === (1)))
{var state_8828__$1 = state_8828;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8828__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___8837,r))
;return ((function (switch__5693__auto__,c__5708__auto___8837,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_8833 = [null,null,null,null,null,null,null];(statearr_8833[(0)] = state_machine__5694__auto__);
(statearr_8833[(1)] = (1));
return statearr_8833;
});
var state_machine__5694__auto____1 = (function (state_8828){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_8828);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e8834){if((e8834 instanceof Object))
{var ex__5697__auto__ = e8834;var statearr_8835_8838 = state_8828;(statearr_8835_8838[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8828);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e8834;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8839 = state_8828;
state_8828 = G__8839;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_8828){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_8828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___8837,r))
})();var state__5710__auto__ = (function (){var statearr_8836 = f__5709__auto__.call(null);(statearr_8836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___8837);
return statearr_8836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___8837,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__8840){
var id = cljs.core.first(arglist__8840);
arglist__8840 = cljs.core.next(arglist__8840);
var tolerance = cljs.core.first(arglist__8840);
var opts = cljs.core.rest(arglist__8840);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__8841){
var id = cljs.core.first(arglist__8841);
var opts = cljs.core.rest(arglist__8841);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__8842){
var ids = cljs.core.first(arglist__8842);
arglist__8842 = cljs.core.next(arglist__8842);
var tolerance = cljs.core.first(arglist__8842);
var opts = cljs.core.rest(arglist__8842);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__8843){var map__8845 = p__8843;var map__8845__$1 = ((cljs.core.seq_QMARK_.call(null,map__8845))?cljs.core.apply.call(null,cljs.core.hash_map,map__8845):map__8845);var opts = map__8845__$1;var boundaryline_ids = cljs.core.get.call(null,map__8845__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__8843 = null;if (arguments.length > 3) {
  p__8843 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__8843);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__8846){
var collection_id = cljs.core.first(arglist__8846);
arglist__8846 = cljs.core.next(arglist__8846);
var tolerance = cljs.core.first(arglist__8846);
arglist__8846 = cljs.core.next(arglist__8846);
var bounds = cljs.core.first(arglist__8846);
var p__8843 = cljs.core.rest(arglist__8846);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__8843);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__8847){var vec__8849 = p__8847;var type_ids = cljs.core.nth.call(null,vec__8849,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__8847 = null;if (arguments.length > 6) {
  p__8847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__8847);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__8850){
var index = cljs.core.first(arglist__8850);
arglist__8850 = cljs.core.next(arglist__8850);
var type = cljs.core.first(arglist__8850);
arglist__8850 = cljs.core.next(arglist__8850);
var blcoll = cljs.core.first(arglist__8850);
arglist__8850 = cljs.core.next(arglist__8850);
var attr = cljs.core.first(arglist__8850);
arglist__8850 = cljs.core.next(arglist__8850);
var filter = cljs.core.first(arglist__8850);
arglist__8850 = cljs.core.next(arglist__8850);
var bounds = cljs.core.first(arglist__8850);
var p__8847 = cljs.core.rest(arglist__8850);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__8847);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattr,filter,bounds,p__8851){var vec__8853 = p__8851;var type_ids = cljs.core.nth.call(null,vec__8853,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(statsattr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattr,filter,bounds,var_args){
var p__8851 = null;if (arguments.length > 5) {
  p__8851 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattr,filter,bounds,p__8851);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__8854){
var index = cljs.core.first(arglist__8854);
arglist__8854 = cljs.core.next(arglist__8854);
var type = cljs.core.first(arglist__8854);
arglist__8854 = cljs.core.next(arglist__8854);
var statsattr = cljs.core.first(arglist__8854);
arglist__8854 = cljs.core.next(arglist__8854);
var filter = cljs.core.first(arglist__8854);
arglist__8854 = cljs.core.next(arglist__8854);
var bounds = cljs.core.first(arglist__8854);
var p__8851 = cljs.core.rest(arglist__8854);
return summary_stats__delegate(index,type,statsattr,filter,bounds,p__8851);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__8855){var vec__8857 = p__8855;var type_ids = cljs.core.nth.call(null,vec__8857,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__8855 = null;if (arguments.length > 7) {
  p__8855 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__8855);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__8858){
var index = cljs.core.first(arglist__8858);
arglist__8858 = cljs.core.next(arglist__8858);
var type = cljs.core.first(arglist__8858);
arglist__8858 = cljs.core.next(arglist__8858);
var location_attr = cljs.core.first(arglist__8858);
arglist__8858 = cljs.core.next(arglist__8858);
var attrs = cljs.core.first(arglist__8858);
arglist__8858 = cljs.core.next(arglist__8858);
var max_count = cljs.core.first(arglist__8858);
arglist__8858 = cljs.core.next(arglist__8858);
var filter = cljs.core.first(arglist__8858);
arglist__8858 = cljs.core.next(arglist__8858);
var bounds = cljs.core.first(arglist__8858);
var p__8855 = cljs.core.rest(arglist__8858);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__8855);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
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
var portfolio_company_sites__delegate = function (p__8859){var vec__8861 = p__8859;var type_ids = cljs.core.nth.call(null,vec__8861,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__8859 = null;if (arguments.length > 0) {
  p__8859 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__8859);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__8862){
var p__8859 = cljs.core.seq(arglist__8862);
return portfolio_company_sites__delegate(p__8859);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__8863){var vec__8865 = p__8863;var type_ids = cljs.core.nth.call(null,vec__8865,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__8863 = null;if (arguments.length > 0) {
  p__8863 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__8863);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__8866){
var p__8863 = cljs.core.seq(arglist__8866);
return portfolio_company_sites_by_company__delegate(p__8863);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__8867){var vec__8869 = p__8867;var type_ids = cljs.core.nth.call(null,vec__8869,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__8867 = null;if (arguments.length > 0) {
  p__8867 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__8867);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__8870){
var p__8867 = cljs.core.seq(arglist__8870);
return portfolio_company_locations__delegate(p__8867);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__8871){var vec__8873 = p__8871;var type_ids = cljs.core.nth.call(null,vec__8873,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__8871 = null;if (arguments.length > 0) {
  p__8871 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__8871);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__8874){
var p__8871 = cljs.core.seq(arglist__8874);
return portfolio_company_site_stats__delegate(p__8871);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__8875){var vec__8877 = p__8875;var type_ids = cljs.core.nth.call(null,vec__8877,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__8875 = null;if (arguments.length > 0) {
  p__8875 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__8875);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__8878){
var p__8875 = cljs.core.seq(arglist__8878);
return portfolio_company_site_account_timelines__delegate(p__8875);
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
var investment_account_timelines__delegate = function (p__8879){var vec__8881 = p__8879;var type_ids = cljs.core.nth.call(null,vec__8881,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__8879 = null;if (arguments.length > 0) {
  p__8879 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__8879);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__8882){
var p__8879 = cljs.core.seq(arglist__8882);
return investment_account_timelines__delegate(p__8879);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__8883){var vec__8885 = p__8883;var type_ids = cljs.core.nth.call(null,vec__8885,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__8883 = null;if (arguments.length > 0) {
  p__8883 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__8883);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__8886){
var p__8883 = cljs.core.seq(arglist__8886);
return investment_stats__delegate(p__8883);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__8887){var vec__8889 = p__8887;var type_ids = cljs.core.nth.call(null,vec__8889,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__8887 = null;if (arguments.length > 0) {
  p__8887 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__8887);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__8890){
var p__8887 = cljs.core.seq(arglist__8890);
return investment_aggs__delegate(p__8887);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__8891){var vec__8893 = p__8891;var type_ids = cljs.core.nth.call(null,vec__8893,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__8891 = null;if (arguments.length > 0) {
  p__8891 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__8891);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__8894){
var p__8891 = cljs.core.seq(arglist__8894);
return investments__delegate(p__8891);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
