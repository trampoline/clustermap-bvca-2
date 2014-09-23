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
var AJAX__delegate = function (url,p__22624){var map__22628 = p__22624;var map__22628__$1 = ((cljs.core.seq_QMARK_.call(null,map__22628))?cljs.core.apply.call(null,cljs.core.hash_map,map__22628):map__22628);var opts = map__22628__$1;var content = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__22628,map__22628__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__22628,map__22628__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__22628,map__22628__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__22628,map__22628__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__22630 = method;var G__22630__$1 = (((G__22630 == null))?null:cljs.core.name.call(null,G__22630));var G__22630__$2 = (((G__22630__$1 == null))?null:clojure.string.upper_case.call(null,G__22630__$1));return G__22630__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__22624 = null;if (arguments.length > 1) {
  p__22624 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__22624);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__22631){
var url = cljs.core.first(arglist__22631);
var p__22624 = cljs.core.rest(arglist__22631);
return AJAX__delegate(url,p__22624);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__22632){var map__22634 = p__22632;var map__22634__$1 = ((cljs.core.seq_QMARK_.call(null,map__22634))?cljs.core.apply.call(null,cljs.core.hash_map,map__22634):map__22634);var opts = map__22634__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__22632 = null;if (arguments.length > 1) {
  p__22632 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__22632);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__22635){
var url = cljs.core.first(arglist__22635);
var p__22632 = cljs.core.rest(arglist__22635);
return GET__delegate(url,p__22632);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__22636){var map__22638 = p__22636;var map__22638__$1 = ((cljs.core.seq_QMARK_.call(null,map__22638))?cljs.core.apply.call(null,cljs.core.hash_map,map__22638):map__22638);var opts = map__22638__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__22636 = null;if (arguments.length > 2) {
  p__22636 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__22636);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__22639){
var url = cljs.core.first(arglist__22639);
arglist__22639 = cljs.core.next(arglist__22639);
var content = cljs.core.first(arglist__22639);
var p__22636 = cljs.core.rest(arglist__22639);
return POST__delegate(url,content,p__22636);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__22640){var map__22642 = p__22640;var map__22642__$1 = ((cljs.core.seq_QMARK_.call(null,map__22642))?cljs.core.apply.call(null,cljs.core.hash_map,map__22642):map__22642);var opts = map__22642__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__22640 = null;if (arguments.length > 2) {
  p__22640 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__22640);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__22643){
var url = cljs.core.first(arglist__22643);
arglist__22643 = cljs.core.next(arglist__22643);
var content = cljs.core.first(arglist__22643);
var p__22640 = cljs.core.rest(arglist__22643);
return PUT__delegate(url,content,p__22640);
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
return (function (state_22778){var state_val_22779 = (state_22778[(1)]);if((state_val_22779 === (7)))
{var inst_22735 = (state_22778[(7)]);var inst_22734 = (state_22778[(2)]);var inst_22735__$1 = cljs.core.nth.call(null,inst_22734,(0),null);var inst_22736 = cljs.core.nth.call(null,inst_22734,(1),null);var inst_22737 = cljs.core.sequential_QMARK_.call(null,inst_22735__$1);var state_22778__$1 = (function (){var statearr_22780 = state_22778;(statearr_22780[(8)] = inst_22736);
(statearr_22780[(7)] = inst_22735__$1);
return statearr_22780;
})();if(inst_22737)
{var statearr_22781_22816 = state_22778__$1;(statearr_22781_22816[(1)] = (8));
} else
{var statearr_22782_22817 = state_22778__$1;(statearr_22782_22817[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (20)))
{var inst_22735 = (state_22778[(7)]);var state_22778__$1 = state_22778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22778__$1,(23),inst_22735);
} else
{if((state_val_22779 === (1)))
{var state_22778__$1 = state_22778;var statearr_22783_22818 = state_22778__$1;(statearr_22783_22818[(2)] = null);
(statearr_22783_22818[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (4)))
{var state_22778__$1 = state_22778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22778__$1,(7),ocomm);
} else
{if((state_val_22779 === (15)))
{var inst_22758 = (state_22778[(2)]);var state_22778__$1 = state_22778;var statearr_22784_22819 = state_22778__$1;(statearr_22784_22819[(2)] = inst_22758);
(statearr_22784_22819[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (21)))
{var state_22778__$1 = state_22778;var statearr_22785_22820 = state_22778__$1;(statearr_22785_22820[(2)] = null);
(statearr_22785_22820[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (13)))
{var inst_22741 = (state_22778[(9)]);var state_22778__$1 = state_22778;var statearr_22786_22821 = state_22778__$1;(statearr_22786_22821[(2)] = inst_22741);
(statearr_22786_22821[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (22)))
{var inst_22767 = (state_22778[(2)]);var state_22778__$1 = state_22778;var statearr_22787_22822 = state_22778__$1;(statearr_22787_22822[(2)] = inst_22767);
(statearr_22787_22822[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (6)))
{var inst_22774 = (state_22778[(2)]);var state_22778__$1 = state_22778;var statearr_22788_22823 = state_22778__$1;(statearr_22788_22823[(2)] = inst_22774);
(statearr_22788_22823[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (17)))
{var state_22778__$1 = state_22778;var statearr_22789_22824 = state_22778__$1;(statearr_22789_22824[(2)] = null);
(statearr_22789_22824[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (3)))
{var inst_22776 = (state_22778[(2)]);var state_22778__$1 = state_22778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22778__$1,inst_22776);
} else
{if((state_val_22779 === (12)))
{var inst_22760 = (state_22778[(2)]);var state_22778__$1 = state_22778;var statearr_22790_22825 = state_22778__$1;(statearr_22790_22825[(2)] = inst_22760);
(statearr_22790_22825[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (2)))
{var state_22778__$1 = state_22778;var statearr_22791_22826 = state_22778__$1;(statearr_22791_22826[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (23)))
{var inst_22764 = (state_22778[(2)]);var state_22778__$1 = state_22778;var statearr_22793_22827 = state_22778__$1;(statearr_22793_22827[(2)] = inst_22764);
(statearr_22793_22827[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (19)))
{var inst_22751 = (state_22778[(2)]);var state_22778__$1 = state_22778;var statearr_22794_22828 = state_22778__$1;(statearr_22794_22828[(2)] = inst_22751);
(statearr_22794_22828[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (11)))
{var inst_22740 = (state_22778[(10)]);var inst_22743 = cljs.core.empty_QMARK_.call(null,inst_22740);var state_22778__$1 = state_22778;if(inst_22743)
{var statearr_22795_22829 = state_22778__$1;(statearr_22795_22829[(1)] = (13));
} else
{var statearr_22796_22830 = state_22778__$1;(statearr_22796_22830[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (9)))
{var inst_22735 = (state_22778[(7)]);var state_22778__$1 = state_22778;if(cljs.core.truth_(inst_22735))
{var statearr_22797_22831 = state_22778__$1;(statearr_22797_22831[(1)] = (20));
} else
{var statearr_22798_22832 = state_22778__$1;(statearr_22798_22832[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (5)))
{var state_22778__$1 = state_22778;var statearr_22799_22833 = state_22778__$1;(statearr_22799_22833[(2)] = null);
(statearr_22799_22833[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (14)))
{var inst_22740 = (state_22778[(10)]);var inst_22746 = cljs.core.rest.call(null,inst_22740);var inst_22747 = cljs.core.first.call(null,inst_22740);var state_22778__$1 = (function (){var statearr_22800 = state_22778;(statearr_22800[(11)] = inst_22746);
return statearr_22800;
})();if(cljs.core.truth_(inst_22747))
{var statearr_22801_22834 = state_22778__$1;(statearr_22801_22834[(1)] = (16));
} else
{var statearr_22802_22835 = state_22778__$1;(statearr_22802_22835[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (16)))
{var inst_22740 = (state_22778[(10)]);var inst_22749 = cljs.core.first.call(null,inst_22740);var state_22778__$1 = state_22778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22778__$1,(19),inst_22749);
} else
{if((state_val_22779 === (10)))
{var inst_22736 = (state_22778[(8)]);var inst_22769 = (state_22778[(2)]);var inst_22770 = cljs.core.apply.call(null,handler,inst_22769,inst_22736);var state_22778__$1 = (function (){var statearr_22803 = state_22778;(statearr_22803[(12)] = inst_22770);
return statearr_22803;
})();var statearr_22804_22836 = state_22778__$1;(statearr_22804_22836[(2)] = null);
(statearr_22804_22836[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (18)))
{var inst_22741 = (state_22778[(9)]);var inst_22746 = (state_22778[(11)]);var inst_22754 = (state_22778[(2)]);var inst_22755 = cljs.core.conj.call(null,inst_22741,inst_22754);var inst_22740 = inst_22746;var inst_22741__$1 = inst_22755;var state_22778__$1 = (function (){var statearr_22805 = state_22778;(statearr_22805[(9)] = inst_22741__$1);
(statearr_22805[(10)] = inst_22740);
return statearr_22805;
})();var statearr_22806_22837 = state_22778__$1;(statearr_22806_22837[(2)] = null);
(statearr_22806_22837[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22779 === (8)))
{var inst_22735 = (state_22778[(7)]);var inst_22739 = cljs.core.PersistentVector.EMPTY;var inst_22740 = inst_22735;var inst_22741 = inst_22739;var state_22778__$1 = (function (){var statearr_22807 = state_22778;(statearr_22807[(9)] = inst_22741);
(statearr_22807[(10)] = inst_22740);
return statearr_22807;
})();var statearr_22808_22838 = state_22778__$1;(statearr_22808_22838[(2)] = null);
(statearr_22808_22838[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_22812 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22812[(0)] = state_machine__5694__auto__);
(statearr_22812[(1)] = (1));
return statearr_22812;
});
var state_machine__5694__auto____1 = (function (state_22778){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_22778);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e22813){if((e22813 instanceof Object))
{var ex__5697__auto__ = e22813;var statearr_22814_22839 = state_22778;(statearr_22814_22839[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22778);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22813;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22840 = state_22778;
state_22778 = G__22840;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_22778){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_22778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_22815 = f__5709__auto__.call(null);(statearr_22815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_22815;
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
var G__22843__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__22842 = rseq;var rcomm = cljs.core.nth.call(null,vec__22842,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__22842,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__22843 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22843__delegate.call(this,req_args);};
G__22843.cljs$lang$maxFixedArity = 0;
G__22843.cljs$lang$applyTo = (function (arglist__22844){
var req_args = cljs.core.seq(arglist__22844);
return G__22843__delegate(req_args);
});
G__22843.cljs$core$IFn$_invoke$arity$variadic = G__22843__delegate;
return G__22843;
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
return (function (state_22862){var state_val_22863 = (state_22862[(1)]);if((state_val_22863 === (2)))
{var inst_22859 = (state_22862[(2)]);var inst_22860 = console.log(inst_22859);var state_22862__$1 = state_22862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22862__$1,inst_22860);
} else
{if((state_val_22863 === (1)))
{var state_22862__$1 = state_22862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22862__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_22867 = [null,null,null,null,null,null,null];(statearr_22867[(0)] = state_machine__5694__auto__);
(statearr_22867[(1)] = (1));
return statearr_22867;
});
var state_machine__5694__auto____1 = (function (state_22862){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_22862);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e22868){if((e22868 instanceof Object))
{var ex__5697__auto__ = e22868;var statearr_22869_22871 = state_22862;(statearr_22869_22871[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22868;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22872 = state_22862;
state_22862 = G__22872;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_22862){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_22862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_22870 = f__5709__auto__.call(null);(statearr_22870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_22870;
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
log_api.cljs$lang$applyTo = (function (arglist__22873){
var f = cljs.core.first(arglist__22873);
var args = cljs.core.rest(arglist__22873);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__22876){var vec__22877 = p__22876;var k = cljs.core.nth.call(null,vec__22877,(0),null);var v = cljs.core.nth.call(null,vec__22877,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___22904 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___22904,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___22904,r){
return (function (state_22895){var state_val_22896 = (state_22895[(1)]);if((state_val_22896 === (2)))
{var inst_22892 = (state_22895[(2)]);var inst_22893 = cljs.core.reset_BANG_.call(null,r,inst_22892);var state_22895__$1 = state_22895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22895__$1,inst_22893);
} else
{if((state_val_22896 === (1)))
{var state_22895__$1 = state_22895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22895__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___22904,r))
;return ((function (switch__5693__auto__,c__5708__auto___22904,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_22900 = [null,null,null,null,null,null,null];(statearr_22900[(0)] = state_machine__5694__auto__);
(statearr_22900[(1)] = (1));
return statearr_22900;
});
var state_machine__5694__auto____1 = (function (state_22895){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_22895);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e22901){if((e22901 instanceof Object))
{var ex__5697__auto__ = e22901;var statearr_22902_22905 = state_22895;(statearr_22902_22905[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22895);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22901;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22906 = state_22895;
state_22895 = G__22906;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_22895){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_22895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___22904,r))
})();var state__5710__auto__ = (function (){var statearr_22903 = f__5709__auto__.call(null);(statearr_22903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___22904);
return statearr_22903;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___22904,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__22907){
var id = cljs.core.first(arglist__22907);
arglist__22907 = cljs.core.next(arglist__22907);
var tolerance = cljs.core.first(arglist__22907);
var opts = cljs.core.rest(arglist__22907);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__22908){
var id = cljs.core.first(arglist__22908);
var opts = cljs.core.rest(arglist__22908);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__22909){
var ids = cljs.core.first(arglist__22909);
arglist__22909 = cljs.core.next(arglist__22909);
var tolerance = cljs.core.first(arglist__22909);
var opts = cljs.core.rest(arglist__22909);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__22910){var map__22912 = p__22910;var map__22912__$1 = ((cljs.core.seq_QMARK_.call(null,map__22912))?cljs.core.apply.call(null,cljs.core.hash_map,map__22912):map__22912);var opts = map__22912__$1;var boundaryline_ids = cljs.core.get.call(null,map__22912__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__22910 = null;if (arguments.length > 3) {
  p__22910 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__22910);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__22913){
var collection_id = cljs.core.first(arglist__22913);
arglist__22913 = cljs.core.next(arglist__22913);
var tolerance = cljs.core.first(arglist__22913);
arglist__22913 = cljs.core.next(arglist__22913);
var bounds = cljs.core.first(arglist__22913);
var p__22910 = cljs.core.rest(arglist__22913);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__22910);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__22914){var vec__22916 = p__22914;var type_ids = cljs.core.nth.call(null,vec__22916,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__22914 = null;if (arguments.length > 6) {
  p__22914 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__22914);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__22917){
var index = cljs.core.first(arglist__22917);
arglist__22917 = cljs.core.next(arglist__22917);
var type = cljs.core.first(arglist__22917);
arglist__22917 = cljs.core.next(arglist__22917);
var blcoll = cljs.core.first(arglist__22917);
arglist__22917 = cljs.core.next(arglist__22917);
var attr = cljs.core.first(arglist__22917);
arglist__22917 = cljs.core.next(arglist__22917);
var filter = cljs.core.first(arglist__22917);
arglist__22917 = cljs.core.next(arglist__22917);
var bounds = cljs.core.first(arglist__22917);
var p__22914 = cljs.core.rest(arglist__22917);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__22914);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattr,filter,bounds,p__22918){var vec__22920 = p__22918;var type_ids = cljs.core.nth.call(null,vec__22920,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(statsattr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattr,filter,bounds,var_args){
var p__22918 = null;if (arguments.length > 5) {
  p__22918 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattr,filter,bounds,p__22918);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__22921){
var index = cljs.core.first(arglist__22921);
arglist__22921 = cljs.core.next(arglist__22921);
var type = cljs.core.first(arglist__22921);
arglist__22921 = cljs.core.next(arglist__22921);
var statsattr = cljs.core.first(arglist__22921);
arglist__22921 = cljs.core.next(arglist__22921);
var filter = cljs.core.first(arglist__22921);
arglist__22921 = cljs.core.next(arglist__22921);
var bounds = cljs.core.first(arglist__22921);
var p__22918 = cljs.core.rest(arglist__22921);
return summary_stats__delegate(index,type,statsattr,filter,bounds,p__22918);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__22922){var vec__22924 = p__22922;var type_ids = cljs.core.nth.call(null,vec__22924,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__22922 = null;if (arguments.length > 7) {
  p__22922 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__22922);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__22925){
var index = cljs.core.first(arglist__22925);
arglist__22925 = cljs.core.next(arglist__22925);
var type = cljs.core.first(arglist__22925);
arglist__22925 = cljs.core.next(arglist__22925);
var location_attr = cljs.core.first(arglist__22925);
arglist__22925 = cljs.core.next(arglist__22925);
var attrs = cljs.core.first(arglist__22925);
arglist__22925 = cljs.core.next(arglist__22925);
var max_count = cljs.core.first(arglist__22925);
arglist__22925 = cljs.core.next(arglist__22925);
var filter = cljs.core.first(arglist__22925);
arglist__22925 = cljs.core.next(arglist__22925);
var bounds = cljs.core.first(arglist__22925);
var p__22922 = cljs.core.rest(arglist__22925);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__22922);
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
var portfolio_company_sites__delegate = function (p__22926){var vec__22928 = p__22926;var type_ids = cljs.core.nth.call(null,vec__22928,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__22926 = null;if (arguments.length > 0) {
  p__22926 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__22926);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__22929){
var p__22926 = cljs.core.seq(arglist__22929);
return portfolio_company_sites__delegate(p__22926);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__22930){var vec__22932 = p__22930;var type_ids = cljs.core.nth.call(null,vec__22932,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__22930 = null;if (arguments.length > 0) {
  p__22930 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__22930);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__22933){
var p__22930 = cljs.core.seq(arglist__22933);
return portfolio_company_sites_by_company__delegate(p__22930);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__22934){var vec__22936 = p__22934;var type_ids = cljs.core.nth.call(null,vec__22936,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__22934 = null;if (arguments.length > 0) {
  p__22934 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__22934);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__22937){
var p__22934 = cljs.core.seq(arglist__22937);
return portfolio_company_locations__delegate(p__22934);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__22938){var vec__22940 = p__22938;var type_ids = cljs.core.nth.call(null,vec__22940,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__22938 = null;if (arguments.length > 0) {
  p__22938 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__22938);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__22941){
var p__22938 = cljs.core.seq(arglist__22941);
return portfolio_company_site_stats__delegate(p__22938);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__22942){var vec__22944 = p__22942;var type_ids = cljs.core.nth.call(null,vec__22944,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__22942 = null;if (arguments.length > 0) {
  p__22942 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__22942);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__22945){
var p__22942 = cljs.core.seq(arglist__22945);
return portfolio_company_site_account_timelines__delegate(p__22942);
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
var investment_account_timelines__delegate = function (p__22946){var vec__22948 = p__22946;var type_ids = cljs.core.nth.call(null,vec__22948,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__22946 = null;if (arguments.length > 0) {
  p__22946 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__22946);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__22949){
var p__22946 = cljs.core.seq(arglist__22949);
return investment_account_timelines__delegate(p__22946);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__22950){var vec__22952 = p__22950;var type_ids = cljs.core.nth.call(null,vec__22952,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__22950 = null;if (arguments.length > 0) {
  p__22950 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__22950);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__22953){
var p__22950 = cljs.core.seq(arglist__22953);
return investment_stats__delegate(p__22950);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__22954){var vec__22956 = p__22954;var type_ids = cljs.core.nth.call(null,vec__22956,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__22954 = null;if (arguments.length > 0) {
  p__22954 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__22954);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__22957){
var p__22954 = cljs.core.seq(arglist__22957);
return investment_aggs__delegate(p__22954);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__22958){var vec__22960 = p__22958;var type_ids = cljs.core.nth.call(null,vec__22960,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__22958 = null;if (arguments.length > 0) {
  p__22958 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__22958);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__22961){
var p__22958 = cljs.core.seq(arglist__22961);
return investments__delegate(p__22958);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
