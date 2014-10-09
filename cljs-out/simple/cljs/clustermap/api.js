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
var AJAX__delegate = function (url,p__27624){var map__27628 = p__27624;var map__27628__$1 = ((cljs.core.seq_QMARK_.call(null,map__27628))?cljs.core.apply.call(null,cljs.core.hash_map,map__27628):map__27628);var opts = map__27628__$1;var content = cljs.core.get.call(null,map__27628__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__27628__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__27628__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__27628,map__27628__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__27628,map__27628__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__27628,map__27628__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__27628,map__27628__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__27630 = method;var G__27630__$1 = (((G__27630 == null))?null:cljs.core.name.call(null,G__27630));var G__27630__$2 = (((G__27630__$1 == null))?null:clojure.string.upper_case.call(null,G__27630__$1));return G__27630__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__27624 = null;if (arguments.length > 1) {
  p__27624 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__27624);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__27631){
var url = cljs.core.first(arglist__27631);
var p__27624 = cljs.core.rest(arglist__27631);
return AJAX__delegate(url,p__27624);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__27632){var map__27634 = p__27632;var map__27634__$1 = ((cljs.core.seq_QMARK_.call(null,map__27634))?cljs.core.apply.call(null,cljs.core.hash_map,map__27634):map__27634);var opts = map__27634__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__27632 = null;if (arguments.length > 1) {
  p__27632 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__27632);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__27635){
var url = cljs.core.first(arglist__27635);
var p__27632 = cljs.core.rest(arglist__27635);
return GET__delegate(url,p__27632);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__27636){var map__27638 = p__27636;var map__27638__$1 = ((cljs.core.seq_QMARK_.call(null,map__27638))?cljs.core.apply.call(null,cljs.core.hash_map,map__27638):map__27638);var opts = map__27638__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__27636 = null;if (arguments.length > 2) {
  p__27636 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__27636);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__27639){
var url = cljs.core.first(arglist__27639);
arglist__27639 = cljs.core.next(arglist__27639);
var content = cljs.core.first(arglist__27639);
var p__27636 = cljs.core.rest(arglist__27639);
return POST__delegate(url,content,p__27636);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__27640){var map__27642 = p__27640;var map__27642__$1 = ((cljs.core.seq_QMARK_.call(null,map__27642))?cljs.core.apply.call(null,cljs.core.hash_map,map__27642):map__27642);var opts = map__27642__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__27640 = null;if (arguments.length > 2) {
  p__27640 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__27640);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__27643){
var url = cljs.core.first(arglist__27643);
arglist__27643 = cljs.core.next(arglist__27643);
var content = cljs.core.first(arglist__27643);
var p__27640 = cljs.core.rest(arglist__27643);
return PUT__delegate(url,content,p__27640);
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
return (function (state_27778){var state_val_27779 = (state_27778[(1)]);if((state_val_27779 === (7)))
{var inst_27735 = (state_27778[(7)]);var inst_27734 = (state_27778[(2)]);var inst_27735__$1 = cljs.core.nth.call(null,inst_27734,(0),null);var inst_27736 = cljs.core.nth.call(null,inst_27734,(1),null);var inst_27737 = cljs.core.sequential_QMARK_.call(null,inst_27735__$1);var state_27778__$1 = (function (){var statearr_27780 = state_27778;(statearr_27780[(8)] = inst_27736);
(statearr_27780[(7)] = inst_27735__$1);
return statearr_27780;
})();if(inst_27737)
{var statearr_27781_27816 = state_27778__$1;(statearr_27781_27816[(1)] = (8));
} else
{var statearr_27782_27817 = state_27778__$1;(statearr_27782_27817[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (20)))
{var inst_27735 = (state_27778[(7)]);var state_27778__$1 = state_27778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27778__$1,(23),inst_27735);
} else
{if((state_val_27779 === (1)))
{var state_27778__$1 = state_27778;var statearr_27783_27818 = state_27778__$1;(statearr_27783_27818[(2)] = null);
(statearr_27783_27818[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (4)))
{var state_27778__$1 = state_27778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27778__$1,(7),ocomm);
} else
{if((state_val_27779 === (15)))
{var inst_27758 = (state_27778[(2)]);var state_27778__$1 = state_27778;var statearr_27784_27819 = state_27778__$1;(statearr_27784_27819[(2)] = inst_27758);
(statearr_27784_27819[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (21)))
{var state_27778__$1 = state_27778;var statearr_27785_27820 = state_27778__$1;(statearr_27785_27820[(2)] = null);
(statearr_27785_27820[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (13)))
{var inst_27741 = (state_27778[(9)]);var state_27778__$1 = state_27778;var statearr_27786_27821 = state_27778__$1;(statearr_27786_27821[(2)] = inst_27741);
(statearr_27786_27821[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (22)))
{var inst_27767 = (state_27778[(2)]);var state_27778__$1 = state_27778;var statearr_27787_27822 = state_27778__$1;(statearr_27787_27822[(2)] = inst_27767);
(statearr_27787_27822[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (6)))
{var inst_27774 = (state_27778[(2)]);var state_27778__$1 = state_27778;var statearr_27788_27823 = state_27778__$1;(statearr_27788_27823[(2)] = inst_27774);
(statearr_27788_27823[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (17)))
{var state_27778__$1 = state_27778;var statearr_27789_27824 = state_27778__$1;(statearr_27789_27824[(2)] = null);
(statearr_27789_27824[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (3)))
{var inst_27776 = (state_27778[(2)]);var state_27778__$1 = state_27778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27778__$1,inst_27776);
} else
{if((state_val_27779 === (12)))
{var inst_27760 = (state_27778[(2)]);var state_27778__$1 = state_27778;var statearr_27790_27825 = state_27778__$1;(statearr_27790_27825[(2)] = inst_27760);
(statearr_27790_27825[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (2)))
{var state_27778__$1 = state_27778;var statearr_27791_27826 = state_27778__$1;(statearr_27791_27826[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (23)))
{var inst_27764 = (state_27778[(2)]);var state_27778__$1 = state_27778;var statearr_27793_27827 = state_27778__$1;(statearr_27793_27827[(2)] = inst_27764);
(statearr_27793_27827[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (19)))
{var inst_27751 = (state_27778[(2)]);var state_27778__$1 = state_27778;var statearr_27794_27828 = state_27778__$1;(statearr_27794_27828[(2)] = inst_27751);
(statearr_27794_27828[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (11)))
{var inst_27740 = (state_27778[(10)]);var inst_27743 = cljs.core.empty_QMARK_.call(null,inst_27740);var state_27778__$1 = state_27778;if(inst_27743)
{var statearr_27795_27829 = state_27778__$1;(statearr_27795_27829[(1)] = (13));
} else
{var statearr_27796_27830 = state_27778__$1;(statearr_27796_27830[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (9)))
{var inst_27735 = (state_27778[(7)]);var state_27778__$1 = state_27778;if(cljs.core.truth_(inst_27735))
{var statearr_27797_27831 = state_27778__$1;(statearr_27797_27831[(1)] = (20));
} else
{var statearr_27798_27832 = state_27778__$1;(statearr_27798_27832[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (5)))
{var state_27778__$1 = state_27778;var statearr_27799_27833 = state_27778__$1;(statearr_27799_27833[(2)] = null);
(statearr_27799_27833[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (14)))
{var inst_27740 = (state_27778[(10)]);var inst_27746 = cljs.core.rest.call(null,inst_27740);var inst_27747 = cljs.core.first.call(null,inst_27740);var state_27778__$1 = (function (){var statearr_27800 = state_27778;(statearr_27800[(11)] = inst_27746);
return statearr_27800;
})();if(cljs.core.truth_(inst_27747))
{var statearr_27801_27834 = state_27778__$1;(statearr_27801_27834[(1)] = (16));
} else
{var statearr_27802_27835 = state_27778__$1;(statearr_27802_27835[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (16)))
{var inst_27740 = (state_27778[(10)]);var inst_27749 = cljs.core.first.call(null,inst_27740);var state_27778__$1 = state_27778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27778__$1,(19),inst_27749);
} else
{if((state_val_27779 === (10)))
{var inst_27736 = (state_27778[(8)]);var inst_27769 = (state_27778[(2)]);var inst_27770 = cljs.core.apply.call(null,handler,inst_27769,inst_27736);var state_27778__$1 = (function (){var statearr_27803 = state_27778;(statearr_27803[(12)] = inst_27770);
return statearr_27803;
})();var statearr_27804_27836 = state_27778__$1;(statearr_27804_27836[(2)] = null);
(statearr_27804_27836[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (18)))
{var inst_27741 = (state_27778[(9)]);var inst_27746 = (state_27778[(11)]);var inst_27754 = (state_27778[(2)]);var inst_27755 = cljs.core.conj.call(null,inst_27741,inst_27754);var inst_27740 = inst_27746;var inst_27741__$1 = inst_27755;var state_27778__$1 = (function (){var statearr_27805 = state_27778;(statearr_27805[(9)] = inst_27741__$1);
(statearr_27805[(10)] = inst_27740);
return statearr_27805;
})();var statearr_27806_27837 = state_27778__$1;(statearr_27806_27837[(2)] = null);
(statearr_27806_27837[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27779 === (8)))
{var inst_27735 = (state_27778[(7)]);var inst_27739 = cljs.core.PersistentVector.EMPTY;var inst_27740 = inst_27735;var inst_27741 = inst_27739;var state_27778__$1 = (function (){var statearr_27807 = state_27778;(statearr_27807[(9)] = inst_27741);
(statearr_27807[(10)] = inst_27740);
return statearr_27807;
})();var statearr_27808_27838 = state_27778__$1;(statearr_27808_27838[(2)] = null);
(statearr_27808_27838[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_27812 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27812[(0)] = state_machine__5694__auto__);
(statearr_27812[(1)] = (1));
return statearr_27812;
});
var state_machine__5694__auto____1 = (function (state_27778){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_27778);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e27813){if((e27813 instanceof Object))
{var ex__5697__auto__ = e27813;var statearr_27814_27839 = state_27778;(statearr_27814_27839[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27778);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27813;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27840 = state_27778;
state_27778 = G__27840;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_27778){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_27778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_27815 = f__5709__auto__.call(null);(statearr_27815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_27815;
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
var G__27843__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__27842 = rseq;var rcomm = cljs.core.nth.call(null,vec__27842,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__27842,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__27843 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27843__delegate.call(this,req_args);};
G__27843.cljs$lang$maxFixedArity = 0;
G__27843.cljs$lang$applyTo = (function (arglist__27844){
var req_args = cljs.core.seq(arglist__27844);
return G__27843__delegate(req_args);
});
G__27843.cljs$core$IFn$_invoke$arity$variadic = G__27843__delegate;
return G__27843;
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
return (function (state_27862){var state_val_27863 = (state_27862[(1)]);if((state_val_27863 === (2)))
{var inst_27859 = (state_27862[(2)]);var inst_27860 = console.log(inst_27859);var state_27862__$1 = state_27862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27862__$1,inst_27860);
} else
{if((state_val_27863 === (1)))
{var state_27862__$1 = state_27862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27862__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_27867 = [null,null,null,null,null,null,null];(statearr_27867[(0)] = state_machine__5694__auto__);
(statearr_27867[(1)] = (1));
return statearr_27867;
});
var state_machine__5694__auto____1 = (function (state_27862){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_27862);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e27868){if((e27868 instanceof Object))
{var ex__5697__auto__ = e27868;var statearr_27869_27871 = state_27862;(statearr_27869_27871[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27868;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27872 = state_27862;
state_27862 = G__27872;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_27862){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_27862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_27870 = f__5709__auto__.call(null);(statearr_27870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_27870;
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
log_api.cljs$lang$applyTo = (function (arglist__27873){
var f = cljs.core.first(arglist__27873);
var args = cljs.core.rest(arglist__27873);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27876){var vec__27877 = p__27876;var k = cljs.core.nth.call(null,vec__27877,(0),null);var v = cljs.core.nth.call(null,vec__27877,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___27904 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___27904,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___27904,r){
return (function (state_27895){var state_val_27896 = (state_27895[(1)]);if((state_val_27896 === (2)))
{var inst_27892 = (state_27895[(2)]);var inst_27893 = cljs.core.reset_BANG_.call(null,r,inst_27892);var state_27895__$1 = state_27895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27895__$1,inst_27893);
} else
{if((state_val_27896 === (1)))
{var state_27895__$1 = state_27895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27895__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___27904,r))
;return ((function (switch__5693__auto__,c__5708__auto___27904,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_27900 = [null,null,null,null,null,null,null];(statearr_27900[(0)] = state_machine__5694__auto__);
(statearr_27900[(1)] = (1));
return statearr_27900;
});
var state_machine__5694__auto____1 = (function (state_27895){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_27895);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e27901){if((e27901 instanceof Object))
{var ex__5697__auto__ = e27901;var statearr_27902_27905 = state_27895;(statearr_27902_27905[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27895);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27901;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27906 = state_27895;
state_27895 = G__27906;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_27895){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_27895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___27904,r))
})();var state__5710__auto__ = (function (){var statearr_27903 = f__5709__auto__.call(null);(statearr_27903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___27904);
return statearr_27903;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___27904,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__27907){
var id = cljs.core.first(arglist__27907);
arglist__27907 = cljs.core.next(arglist__27907);
var tolerance = cljs.core.first(arglist__27907);
var opts = cljs.core.rest(arglist__27907);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__27908){
var id = cljs.core.first(arglist__27908);
var opts = cljs.core.rest(arglist__27908);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__27909){
var ids = cljs.core.first(arglist__27909);
arglist__27909 = cljs.core.next(arglist__27909);
var tolerance = cljs.core.first(arglist__27909);
var opts = cljs.core.rest(arglist__27909);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__27910){var map__27912 = p__27910;var map__27912__$1 = ((cljs.core.seq_QMARK_.call(null,map__27912))?cljs.core.apply.call(null,cljs.core.hash_map,map__27912):map__27912);var opts = map__27912__$1;var boundaryline_ids = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__27910 = null;if (arguments.length > 3) {
  p__27910 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__27910);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__27913){
var collection_id = cljs.core.first(arglist__27913);
arglist__27913 = cljs.core.next(arglist__27913);
var tolerance = cljs.core.first(arglist__27913);
arglist__27913 = cljs.core.next(arglist__27913);
var bounds = cljs.core.first(arglist__27913);
var p__27910 = cljs.core.rest(arglist__27913);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__27910);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__27914){var vec__27916 = p__27914;var type_ids = cljs.core.nth.call(null,vec__27916,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__27914 = null;if (arguments.length > 6) {
  p__27914 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__27914);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__27917){
var index = cljs.core.first(arglist__27917);
arglist__27917 = cljs.core.next(arglist__27917);
var type = cljs.core.first(arglist__27917);
arglist__27917 = cljs.core.next(arglist__27917);
var blcoll = cljs.core.first(arglist__27917);
arglist__27917 = cljs.core.next(arglist__27917);
var attr = cljs.core.first(arglist__27917);
arglist__27917 = cljs.core.next(arglist__27917);
var filter = cljs.core.first(arglist__27917);
arglist__27917 = cljs.core.next(arglist__27917);
var bounds = cljs.core.first(arglist__27917);
var p__27914 = cljs.core.rest(arglist__27917);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__27914);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__27918){var vec__27920 = p__27918;var type_ids = cljs.core.nth.call(null,vec__27920,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__27918 = null;if (arguments.length > 5) {
  p__27918 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__27918);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__27921){
var index = cljs.core.first(arglist__27921);
arglist__27921 = cljs.core.next(arglist__27921);
var type = cljs.core.first(arglist__27921);
arglist__27921 = cljs.core.next(arglist__27921);
var statsattrs = cljs.core.first(arglist__27921);
arglist__27921 = cljs.core.next(arglist__27921);
var filter = cljs.core.first(arglist__27921);
arglist__27921 = cljs.core.next(arglist__27921);
var bounds = cljs.core.first(arglist__27921);
var p__27918 = cljs.core.rest(arglist__27921);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__27918);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__27922){var vec__27924 = p__27922;var type_ids = cljs.core.nth.call(null,vec__27924,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27922 = null;if (arguments.length > 7) {
  p__27922 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__27922);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__27925){
var index = cljs.core.first(arglist__27925);
arglist__27925 = cljs.core.next(arglist__27925);
var type = cljs.core.first(arglist__27925);
arglist__27925 = cljs.core.next(arglist__27925);
var location_attr = cljs.core.first(arglist__27925);
arglist__27925 = cljs.core.next(arglist__27925);
var attrs = cljs.core.first(arglist__27925);
arglist__27925 = cljs.core.next(arglist__27925);
var max_count = cljs.core.first(arglist__27925);
arglist__27925 = cljs.core.next(arglist__27925);
var filter = cljs.core.first(arglist__27925);
arglist__27925 = cljs.core.next(arglist__27925);
var bounds = cljs.core.first(arglist__27925);
var p__27922 = cljs.core.rest(arglist__27925);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__27922);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__27926){var vec__27928 = p__27926;var type_ids = cljs.core.nth.call(null,vec__27928,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27926 = null;if (arguments.length > 7) {
  p__27926 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__27926);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__27929){
var index = cljs.core.first(arglist__27929);
arglist__27929 = cljs.core.next(arglist__27929);
var type = cljs.core.first(arglist__27929);
arglist__27929 = cljs.core.next(arglist__27929);
var filter_spec = cljs.core.first(arglist__27929);
arglist__27929 = cljs.core.next(arglist__27929);
var bounds = cljs.core.first(arglist__27929);
arglist__27929 = cljs.core.next(arglist__27929);
var sort_spec = cljs.core.first(arglist__27929);
arglist__27929 = cljs.core.next(arglist__27929);
var from = cljs.core.first(arglist__27929);
arglist__27929 = cljs.core.next(arglist__27929);
var size = cljs.core.first(arglist__27929);
var p__27926 = cljs.core.rest(arglist__27929);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__27926);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),time_variable,new cljs.core.Keyword(null,"after","after",594996914),after,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"interval","interval",1708495417),interval,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),metric_variables], null));
});
