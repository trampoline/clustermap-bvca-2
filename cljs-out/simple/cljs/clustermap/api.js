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
var AJAX__delegate = function (url,p__27627){var map__27631 = p__27627;var map__27631__$1 = ((cljs.core.seq_QMARK_.call(null,map__27631))?cljs.core.apply.call(null,cljs.core.hash_map,map__27631):map__27631);var opts = map__27631__$1;var content = cljs.core.get.call(null,map__27631__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__27631__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__27631__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__27631,map__27631__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__27631,map__27631__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__27631,map__27631__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__27631,map__27631__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__27633 = method;var G__27633__$1 = (((G__27633 == null))?null:cljs.core.name.call(null,G__27633));var G__27633__$2 = (((G__27633__$1 == null))?null:clojure.string.upper_case.call(null,G__27633__$1));return G__27633__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__27627 = null;if (arguments.length > 1) {
  p__27627 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__27627);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__27634){
var url = cljs.core.first(arglist__27634);
var p__27627 = cljs.core.rest(arglist__27634);
return AJAX__delegate(url,p__27627);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__27635){var map__27637 = p__27635;var map__27637__$1 = ((cljs.core.seq_QMARK_.call(null,map__27637))?cljs.core.apply.call(null,cljs.core.hash_map,map__27637):map__27637);var opts = map__27637__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__27635 = null;if (arguments.length > 1) {
  p__27635 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__27635);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__27638){
var url = cljs.core.first(arglist__27638);
var p__27635 = cljs.core.rest(arglist__27638);
return GET__delegate(url,p__27635);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__27639){var map__27641 = p__27639;var map__27641__$1 = ((cljs.core.seq_QMARK_.call(null,map__27641))?cljs.core.apply.call(null,cljs.core.hash_map,map__27641):map__27641);var opts = map__27641__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__27639 = null;if (arguments.length > 2) {
  p__27639 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__27639);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__27642){
var url = cljs.core.first(arglist__27642);
arglist__27642 = cljs.core.next(arglist__27642);
var content = cljs.core.first(arglist__27642);
var p__27639 = cljs.core.rest(arglist__27642);
return POST__delegate(url,content,p__27639);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__27643){var map__27645 = p__27643;var map__27645__$1 = ((cljs.core.seq_QMARK_.call(null,map__27645))?cljs.core.apply.call(null,cljs.core.hash_map,map__27645):map__27645);var opts = map__27645__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__27643 = null;if (arguments.length > 2) {
  p__27643 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__27643);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__27646){
var url = cljs.core.first(arglist__27646);
arglist__27646 = cljs.core.next(arglist__27646);
var content = cljs.core.first(arglist__27646);
var p__27643 = cljs.core.rest(arglist__27646);
return PUT__delegate(url,content,p__27643);
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
return (function (state_27781){var state_val_27782 = (state_27781[(1)]);if((state_val_27782 === (7)))
{var inst_27738 = (state_27781[(7)]);var inst_27737 = (state_27781[(2)]);var inst_27738__$1 = cljs.core.nth.call(null,inst_27737,(0),null);var inst_27739 = cljs.core.nth.call(null,inst_27737,(1),null);var inst_27740 = cljs.core.sequential_QMARK_.call(null,inst_27738__$1);var state_27781__$1 = (function (){var statearr_27783 = state_27781;(statearr_27783[(8)] = inst_27739);
(statearr_27783[(7)] = inst_27738__$1);
return statearr_27783;
})();if(inst_27740)
{var statearr_27784_27819 = state_27781__$1;(statearr_27784_27819[(1)] = (8));
} else
{var statearr_27785_27820 = state_27781__$1;(statearr_27785_27820[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (20)))
{var inst_27738 = (state_27781[(7)]);var state_27781__$1 = state_27781;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27781__$1,(23),inst_27738);
} else
{if((state_val_27782 === (1)))
{var state_27781__$1 = state_27781;var statearr_27786_27821 = state_27781__$1;(statearr_27786_27821[(2)] = null);
(statearr_27786_27821[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (4)))
{var state_27781__$1 = state_27781;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27781__$1,(7),ocomm);
} else
{if((state_val_27782 === (15)))
{var inst_27761 = (state_27781[(2)]);var state_27781__$1 = state_27781;var statearr_27787_27822 = state_27781__$1;(statearr_27787_27822[(2)] = inst_27761);
(statearr_27787_27822[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (21)))
{var state_27781__$1 = state_27781;var statearr_27788_27823 = state_27781__$1;(statearr_27788_27823[(2)] = null);
(statearr_27788_27823[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (13)))
{var inst_27744 = (state_27781[(9)]);var state_27781__$1 = state_27781;var statearr_27789_27824 = state_27781__$1;(statearr_27789_27824[(2)] = inst_27744);
(statearr_27789_27824[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (22)))
{var inst_27770 = (state_27781[(2)]);var state_27781__$1 = state_27781;var statearr_27790_27825 = state_27781__$1;(statearr_27790_27825[(2)] = inst_27770);
(statearr_27790_27825[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (6)))
{var inst_27777 = (state_27781[(2)]);var state_27781__$1 = state_27781;var statearr_27791_27826 = state_27781__$1;(statearr_27791_27826[(2)] = inst_27777);
(statearr_27791_27826[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (17)))
{var state_27781__$1 = state_27781;var statearr_27792_27827 = state_27781__$1;(statearr_27792_27827[(2)] = null);
(statearr_27792_27827[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (3)))
{var inst_27779 = (state_27781[(2)]);var state_27781__$1 = state_27781;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27781__$1,inst_27779);
} else
{if((state_val_27782 === (12)))
{var inst_27763 = (state_27781[(2)]);var state_27781__$1 = state_27781;var statearr_27793_27828 = state_27781__$1;(statearr_27793_27828[(2)] = inst_27763);
(statearr_27793_27828[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (2)))
{var state_27781__$1 = state_27781;var statearr_27794_27829 = state_27781__$1;(statearr_27794_27829[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (23)))
{var inst_27767 = (state_27781[(2)]);var state_27781__$1 = state_27781;var statearr_27796_27830 = state_27781__$1;(statearr_27796_27830[(2)] = inst_27767);
(statearr_27796_27830[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (19)))
{var inst_27754 = (state_27781[(2)]);var state_27781__$1 = state_27781;var statearr_27797_27831 = state_27781__$1;(statearr_27797_27831[(2)] = inst_27754);
(statearr_27797_27831[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (11)))
{var inst_27743 = (state_27781[(10)]);var inst_27746 = cljs.core.empty_QMARK_.call(null,inst_27743);var state_27781__$1 = state_27781;if(inst_27746)
{var statearr_27798_27832 = state_27781__$1;(statearr_27798_27832[(1)] = (13));
} else
{var statearr_27799_27833 = state_27781__$1;(statearr_27799_27833[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (9)))
{var inst_27738 = (state_27781[(7)]);var state_27781__$1 = state_27781;if(cljs.core.truth_(inst_27738))
{var statearr_27800_27834 = state_27781__$1;(statearr_27800_27834[(1)] = (20));
} else
{var statearr_27801_27835 = state_27781__$1;(statearr_27801_27835[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (5)))
{var state_27781__$1 = state_27781;var statearr_27802_27836 = state_27781__$1;(statearr_27802_27836[(2)] = null);
(statearr_27802_27836[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (14)))
{var inst_27743 = (state_27781[(10)]);var inst_27749 = cljs.core.rest.call(null,inst_27743);var inst_27750 = cljs.core.first.call(null,inst_27743);var state_27781__$1 = (function (){var statearr_27803 = state_27781;(statearr_27803[(11)] = inst_27749);
return statearr_27803;
})();if(cljs.core.truth_(inst_27750))
{var statearr_27804_27837 = state_27781__$1;(statearr_27804_27837[(1)] = (16));
} else
{var statearr_27805_27838 = state_27781__$1;(statearr_27805_27838[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (16)))
{var inst_27743 = (state_27781[(10)]);var inst_27752 = cljs.core.first.call(null,inst_27743);var state_27781__$1 = state_27781;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27781__$1,(19),inst_27752);
} else
{if((state_val_27782 === (10)))
{var inst_27739 = (state_27781[(8)]);var inst_27772 = (state_27781[(2)]);var inst_27773 = cljs.core.apply.call(null,handler,inst_27772,inst_27739);var state_27781__$1 = (function (){var statearr_27806 = state_27781;(statearr_27806[(12)] = inst_27773);
return statearr_27806;
})();var statearr_27807_27839 = state_27781__$1;(statearr_27807_27839[(2)] = null);
(statearr_27807_27839[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (18)))
{var inst_27744 = (state_27781[(9)]);var inst_27749 = (state_27781[(11)]);var inst_27757 = (state_27781[(2)]);var inst_27758 = cljs.core.conj.call(null,inst_27744,inst_27757);var inst_27743 = inst_27749;var inst_27744__$1 = inst_27758;var state_27781__$1 = (function (){var statearr_27808 = state_27781;(statearr_27808[(9)] = inst_27744__$1);
(statearr_27808[(10)] = inst_27743);
return statearr_27808;
})();var statearr_27809_27840 = state_27781__$1;(statearr_27809_27840[(2)] = null);
(statearr_27809_27840[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27782 === (8)))
{var inst_27738 = (state_27781[(7)]);var inst_27742 = cljs.core.PersistentVector.EMPTY;var inst_27743 = inst_27738;var inst_27744 = inst_27742;var state_27781__$1 = (function (){var statearr_27810 = state_27781;(statearr_27810[(9)] = inst_27744);
(statearr_27810[(10)] = inst_27743);
return statearr_27810;
})();var statearr_27811_27841 = state_27781__$1;(statearr_27811_27841[(2)] = null);
(statearr_27811_27841[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_27815 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27815[(0)] = state_machine__5694__auto__);
(statearr_27815[(1)] = (1));
return statearr_27815;
});
var state_machine__5694__auto____1 = (function (state_27781){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_27781);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e27816){if((e27816 instanceof Object))
{var ex__5697__auto__ = e27816;var statearr_27817_27842 = state_27781;(statearr_27817_27842[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27781);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27816;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27843 = state_27781;
state_27781 = G__27843;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_27781){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_27781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_27818 = f__5709__auto__.call(null);(statearr_27818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_27818;
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
var G__27846__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__27845 = rseq;var rcomm = cljs.core.nth.call(null,vec__27845,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__27845,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__27846 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27846__delegate.call(this,req_args);};
G__27846.cljs$lang$maxFixedArity = 0;
G__27846.cljs$lang$applyTo = (function (arglist__27847){
var req_args = cljs.core.seq(arglist__27847);
return G__27846__delegate(req_args);
});
G__27846.cljs$core$IFn$_invoke$arity$variadic = G__27846__delegate;
return G__27846;
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
return (function (state_27865){var state_val_27866 = (state_27865[(1)]);if((state_val_27866 === (2)))
{var inst_27862 = (state_27865[(2)]);var inst_27863 = console.log(inst_27862);var state_27865__$1 = state_27865;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27865__$1,inst_27863);
} else
{if((state_val_27866 === (1)))
{var state_27865__$1 = state_27865;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27865__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_27870 = [null,null,null,null,null,null,null];(statearr_27870[(0)] = state_machine__5694__auto__);
(statearr_27870[(1)] = (1));
return statearr_27870;
});
var state_machine__5694__auto____1 = (function (state_27865){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_27865);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e27871){if((e27871 instanceof Object))
{var ex__5697__auto__ = e27871;var statearr_27872_27874 = state_27865;(statearr_27872_27874[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27865);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27871;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27875 = state_27865;
state_27865 = G__27875;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_27865){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_27865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_27873 = f__5709__auto__.call(null);(statearr_27873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_27873;
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
log_api.cljs$lang$applyTo = (function (arglist__27876){
var f = cljs.core.first(arglist__27876);
var args = cljs.core.rest(arglist__27876);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27879){var vec__27880 = p__27879;var k = cljs.core.nth.call(null,vec__27880,(0),null);var v = cljs.core.nth.call(null,vec__27880,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___27907 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___27907,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___27907,r){
return (function (state_27898){var state_val_27899 = (state_27898[(1)]);if((state_val_27899 === (2)))
{var inst_27895 = (state_27898[(2)]);var inst_27896 = cljs.core.reset_BANG_.call(null,r,inst_27895);var state_27898__$1 = state_27898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27898__$1,inst_27896);
} else
{if((state_val_27899 === (1)))
{var state_27898__$1 = state_27898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27898__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___27907,r))
;return ((function (switch__5693__auto__,c__5708__auto___27907,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_27903 = [null,null,null,null,null,null,null];(statearr_27903[(0)] = state_machine__5694__auto__);
(statearr_27903[(1)] = (1));
return statearr_27903;
});
var state_machine__5694__auto____1 = (function (state_27898){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_27898);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e27904){if((e27904 instanceof Object))
{var ex__5697__auto__ = e27904;var statearr_27905_27908 = state_27898;(statearr_27905_27908[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27898);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27904;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27909 = state_27898;
state_27898 = G__27909;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_27898){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_27898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___27907,r))
})();var state__5710__auto__ = (function (){var statearr_27906 = f__5709__auto__.call(null);(statearr_27906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___27907);
return statearr_27906;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___27907,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__27910){
var id = cljs.core.first(arglist__27910);
arglist__27910 = cljs.core.next(arglist__27910);
var tolerance = cljs.core.first(arglist__27910);
var opts = cljs.core.rest(arglist__27910);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__27911){
var id = cljs.core.first(arglist__27911);
var opts = cljs.core.rest(arglist__27911);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__27912){
var ids = cljs.core.first(arglist__27912);
arglist__27912 = cljs.core.next(arglist__27912);
var tolerance = cljs.core.first(arglist__27912);
var opts = cljs.core.rest(arglist__27912);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__27913){var map__27915 = p__27913;var map__27915__$1 = ((cljs.core.seq_QMARK_.call(null,map__27915))?cljs.core.apply.call(null,cljs.core.hash_map,map__27915):map__27915);var opts = map__27915__$1;var boundaryline_ids = cljs.core.get.call(null,map__27915__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__27913 = null;if (arguments.length > 3) {
  p__27913 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__27913);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__27916){
var collection_id = cljs.core.first(arglist__27916);
arglist__27916 = cljs.core.next(arglist__27916);
var tolerance = cljs.core.first(arglist__27916);
arglist__27916 = cljs.core.next(arglist__27916);
var bounds = cljs.core.first(arglist__27916);
var p__27913 = cljs.core.rest(arglist__27916);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__27913);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__27917){var vec__27919 = p__27917;var type_ids = cljs.core.nth.call(null,vec__27919,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__27917 = null;if (arguments.length > 6) {
  p__27917 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__27917);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__27920){
var index = cljs.core.first(arglist__27920);
arglist__27920 = cljs.core.next(arglist__27920);
var type = cljs.core.first(arglist__27920);
arglist__27920 = cljs.core.next(arglist__27920);
var blcoll = cljs.core.first(arglist__27920);
arglist__27920 = cljs.core.next(arglist__27920);
var attr = cljs.core.first(arglist__27920);
arglist__27920 = cljs.core.next(arglist__27920);
var filter = cljs.core.first(arglist__27920);
arglist__27920 = cljs.core.next(arglist__27920);
var bounds = cljs.core.first(arglist__27920);
var p__27917 = cljs.core.rest(arglist__27920);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__27917);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__27921){var vec__27923 = p__27921;var type_ids = cljs.core.nth.call(null,vec__27923,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__27921 = null;if (arguments.length > 5) {
  p__27921 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__27921);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__27924){
var index = cljs.core.first(arglist__27924);
arglist__27924 = cljs.core.next(arglist__27924);
var type = cljs.core.first(arglist__27924);
arglist__27924 = cljs.core.next(arglist__27924);
var statsattrs = cljs.core.first(arglist__27924);
arglist__27924 = cljs.core.next(arglist__27924);
var filter = cljs.core.first(arglist__27924);
arglist__27924 = cljs.core.next(arglist__27924);
var bounds = cljs.core.first(arglist__27924);
var p__27921 = cljs.core.rest(arglist__27924);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__27921);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__27925){var vec__27927 = p__27925;var type_ids = cljs.core.nth.call(null,vec__27927,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27925 = null;if (arguments.length > 7) {
  p__27925 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__27925);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__27928){
var index = cljs.core.first(arglist__27928);
arglist__27928 = cljs.core.next(arglist__27928);
var type = cljs.core.first(arglist__27928);
arglist__27928 = cljs.core.next(arglist__27928);
var location_attr = cljs.core.first(arglist__27928);
arglist__27928 = cljs.core.next(arglist__27928);
var attrs = cljs.core.first(arglist__27928);
arglist__27928 = cljs.core.next(arglist__27928);
var max_count = cljs.core.first(arglist__27928);
arglist__27928 = cljs.core.next(arglist__27928);
var filter = cljs.core.first(arglist__27928);
arglist__27928 = cljs.core.next(arglist__27928);
var bounds = cljs.core.first(arglist__27928);
var p__27925 = cljs.core.rest(arglist__27928);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__27925);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__27929){var vec__27931 = p__27929;var type_ids = cljs.core.nth.call(null,vec__27931,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27929 = null;if (arguments.length > 7) {
  p__27929 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__27929);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__27932){
var index = cljs.core.first(arglist__27932);
arglist__27932 = cljs.core.next(arglist__27932);
var type = cljs.core.first(arglist__27932);
arglist__27932 = cljs.core.next(arglist__27932);
var filter_spec = cljs.core.first(arglist__27932);
arglist__27932 = cljs.core.next(arglist__27932);
var bounds = cljs.core.first(arglist__27932);
arglist__27932 = cljs.core.next(arglist__27932);
var sort_spec = cljs.core.first(arglist__27932);
arglist__27932 = cljs.core.next(arglist__27932);
var from = cljs.core.first(arglist__27932);
arglist__27932 = cljs.core.next(arglist__27932);
var size = cljs.core.first(arglist__27932);
var p__27929 = cljs.core.rest(arglist__27932);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__27929);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),time_variable,new cljs.core.Keyword(null,"after","after",594996914),after,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"interval","interval",1708495417),interval,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),metric_variables], null));
});
