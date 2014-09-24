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
var AJAX__delegate = function (url,p__22648){var map__22652 = p__22648;var map__22652__$1 = ((cljs.core.seq_QMARK_.call(null,map__22652))?cljs.core.apply.call(null,cljs.core.hash_map,map__22652):map__22652);var opts = map__22652__$1;var content = cljs.core.get.call(null,map__22652__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__22652__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__22652__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__22652,map__22652__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__22652,map__22652__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__22652,map__22652__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__22652,map__22652__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__22654 = method;var G__22654__$1 = (((G__22654 == null))?null:cljs.core.name.call(null,G__22654));var G__22654__$2 = (((G__22654__$1 == null))?null:clojure.string.upper_case.call(null,G__22654__$1));return G__22654__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__22648 = null;if (arguments.length > 1) {
  p__22648 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__22648);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__22655){
var url = cljs.core.first(arglist__22655);
var p__22648 = cljs.core.rest(arglist__22655);
return AJAX__delegate(url,p__22648);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__22656){var map__22658 = p__22656;var map__22658__$1 = ((cljs.core.seq_QMARK_.call(null,map__22658))?cljs.core.apply.call(null,cljs.core.hash_map,map__22658):map__22658);var opts = map__22658__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__22656 = null;if (arguments.length > 1) {
  p__22656 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__22656);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__22659){
var url = cljs.core.first(arglist__22659);
var p__22656 = cljs.core.rest(arglist__22659);
return GET__delegate(url,p__22656);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__22660){var map__22662 = p__22660;var map__22662__$1 = ((cljs.core.seq_QMARK_.call(null,map__22662))?cljs.core.apply.call(null,cljs.core.hash_map,map__22662):map__22662);var opts = map__22662__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__22660 = null;if (arguments.length > 2) {
  p__22660 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__22660);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__22663){
var url = cljs.core.first(arglist__22663);
arglist__22663 = cljs.core.next(arglist__22663);
var content = cljs.core.first(arglist__22663);
var p__22660 = cljs.core.rest(arglist__22663);
return POST__delegate(url,content,p__22660);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__22664){var map__22666 = p__22664;var map__22666__$1 = ((cljs.core.seq_QMARK_.call(null,map__22666))?cljs.core.apply.call(null,cljs.core.hash_map,map__22666):map__22666);var opts = map__22666__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__22664 = null;if (arguments.length > 2) {
  p__22664 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__22664);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__22667){
var url = cljs.core.first(arglist__22667);
arglist__22667 = cljs.core.next(arglist__22667);
var content = cljs.core.first(arglist__22667);
var p__22664 = cljs.core.rest(arglist__22667);
return PUT__delegate(url,content,p__22664);
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
return (function (state_22802){var state_val_22803 = (state_22802[(1)]);if((state_val_22803 === (7)))
{var inst_22759 = (state_22802[(7)]);var inst_22758 = (state_22802[(2)]);var inst_22759__$1 = cljs.core.nth.call(null,inst_22758,(0),null);var inst_22760 = cljs.core.nth.call(null,inst_22758,(1),null);var inst_22761 = cljs.core.sequential_QMARK_.call(null,inst_22759__$1);var state_22802__$1 = (function (){var statearr_22804 = state_22802;(statearr_22804[(8)] = inst_22760);
(statearr_22804[(7)] = inst_22759__$1);
return statearr_22804;
})();if(inst_22761)
{var statearr_22805_22840 = state_22802__$1;(statearr_22805_22840[(1)] = (8));
} else
{var statearr_22806_22841 = state_22802__$1;(statearr_22806_22841[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (20)))
{var inst_22759 = (state_22802[(7)]);var state_22802__$1 = state_22802;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22802__$1,(23),inst_22759);
} else
{if((state_val_22803 === (1)))
{var state_22802__$1 = state_22802;var statearr_22807_22842 = state_22802__$1;(statearr_22807_22842[(2)] = null);
(statearr_22807_22842[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (4)))
{var state_22802__$1 = state_22802;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22802__$1,(7),ocomm);
} else
{if((state_val_22803 === (15)))
{var inst_22782 = (state_22802[(2)]);var state_22802__$1 = state_22802;var statearr_22808_22843 = state_22802__$1;(statearr_22808_22843[(2)] = inst_22782);
(statearr_22808_22843[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (21)))
{var state_22802__$1 = state_22802;var statearr_22809_22844 = state_22802__$1;(statearr_22809_22844[(2)] = null);
(statearr_22809_22844[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (13)))
{var inst_22765 = (state_22802[(9)]);var state_22802__$1 = state_22802;var statearr_22810_22845 = state_22802__$1;(statearr_22810_22845[(2)] = inst_22765);
(statearr_22810_22845[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (22)))
{var inst_22791 = (state_22802[(2)]);var state_22802__$1 = state_22802;var statearr_22811_22846 = state_22802__$1;(statearr_22811_22846[(2)] = inst_22791);
(statearr_22811_22846[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (6)))
{var inst_22798 = (state_22802[(2)]);var state_22802__$1 = state_22802;var statearr_22812_22847 = state_22802__$1;(statearr_22812_22847[(2)] = inst_22798);
(statearr_22812_22847[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (17)))
{var state_22802__$1 = state_22802;var statearr_22813_22848 = state_22802__$1;(statearr_22813_22848[(2)] = null);
(statearr_22813_22848[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (3)))
{var inst_22800 = (state_22802[(2)]);var state_22802__$1 = state_22802;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22802__$1,inst_22800);
} else
{if((state_val_22803 === (12)))
{var inst_22784 = (state_22802[(2)]);var state_22802__$1 = state_22802;var statearr_22814_22849 = state_22802__$1;(statearr_22814_22849[(2)] = inst_22784);
(statearr_22814_22849[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (2)))
{var state_22802__$1 = state_22802;var statearr_22815_22850 = state_22802__$1;(statearr_22815_22850[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (23)))
{var inst_22788 = (state_22802[(2)]);var state_22802__$1 = state_22802;var statearr_22817_22851 = state_22802__$1;(statearr_22817_22851[(2)] = inst_22788);
(statearr_22817_22851[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (19)))
{var inst_22775 = (state_22802[(2)]);var state_22802__$1 = state_22802;var statearr_22818_22852 = state_22802__$1;(statearr_22818_22852[(2)] = inst_22775);
(statearr_22818_22852[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (11)))
{var inst_22764 = (state_22802[(10)]);var inst_22767 = cljs.core.empty_QMARK_.call(null,inst_22764);var state_22802__$1 = state_22802;if(inst_22767)
{var statearr_22819_22853 = state_22802__$1;(statearr_22819_22853[(1)] = (13));
} else
{var statearr_22820_22854 = state_22802__$1;(statearr_22820_22854[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (9)))
{var inst_22759 = (state_22802[(7)]);var state_22802__$1 = state_22802;if(cljs.core.truth_(inst_22759))
{var statearr_22821_22855 = state_22802__$1;(statearr_22821_22855[(1)] = (20));
} else
{var statearr_22822_22856 = state_22802__$1;(statearr_22822_22856[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (5)))
{var state_22802__$1 = state_22802;var statearr_22823_22857 = state_22802__$1;(statearr_22823_22857[(2)] = null);
(statearr_22823_22857[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (14)))
{var inst_22764 = (state_22802[(10)]);var inst_22770 = cljs.core.rest.call(null,inst_22764);var inst_22771 = cljs.core.first.call(null,inst_22764);var state_22802__$1 = (function (){var statearr_22824 = state_22802;(statearr_22824[(11)] = inst_22770);
return statearr_22824;
})();if(cljs.core.truth_(inst_22771))
{var statearr_22825_22858 = state_22802__$1;(statearr_22825_22858[(1)] = (16));
} else
{var statearr_22826_22859 = state_22802__$1;(statearr_22826_22859[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (16)))
{var inst_22764 = (state_22802[(10)]);var inst_22773 = cljs.core.first.call(null,inst_22764);var state_22802__$1 = state_22802;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22802__$1,(19),inst_22773);
} else
{if((state_val_22803 === (10)))
{var inst_22760 = (state_22802[(8)]);var inst_22793 = (state_22802[(2)]);var inst_22794 = cljs.core.apply.call(null,handler,inst_22793,inst_22760);var state_22802__$1 = (function (){var statearr_22827 = state_22802;(statearr_22827[(12)] = inst_22794);
return statearr_22827;
})();var statearr_22828_22860 = state_22802__$1;(statearr_22828_22860[(2)] = null);
(statearr_22828_22860[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (18)))
{var inst_22770 = (state_22802[(11)]);var inst_22765 = (state_22802[(9)]);var inst_22778 = (state_22802[(2)]);var inst_22779 = cljs.core.conj.call(null,inst_22765,inst_22778);var inst_22764 = inst_22770;var inst_22765__$1 = inst_22779;var state_22802__$1 = (function (){var statearr_22829 = state_22802;(statearr_22829[(10)] = inst_22764);
(statearr_22829[(9)] = inst_22765__$1);
return statearr_22829;
})();var statearr_22830_22861 = state_22802__$1;(statearr_22830_22861[(2)] = null);
(statearr_22830_22861[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22803 === (8)))
{var inst_22759 = (state_22802[(7)]);var inst_22763 = cljs.core.PersistentVector.EMPTY;var inst_22764 = inst_22759;var inst_22765 = inst_22763;var state_22802__$1 = (function (){var statearr_22831 = state_22802;(statearr_22831[(10)] = inst_22764);
(statearr_22831[(9)] = inst_22765);
return statearr_22831;
})();var statearr_22832_22862 = state_22802__$1;(statearr_22832_22862[(2)] = null);
(statearr_22832_22862[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_22836 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22836[(0)] = state_machine__5694__auto__);
(statearr_22836[(1)] = (1));
return statearr_22836;
});
var state_machine__5694__auto____1 = (function (state_22802){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_22802);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e22837){if((e22837 instanceof Object))
{var ex__5697__auto__ = e22837;var statearr_22838_22863 = state_22802;(statearr_22838_22863[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22802);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22837;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22864 = state_22802;
state_22802 = G__22864;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_22802){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_22802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_22839 = f__5709__auto__.call(null);(statearr_22839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_22839;
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
var G__22867__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__22866 = rseq;var rcomm = cljs.core.nth.call(null,vec__22866,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__22866,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__22867 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22867__delegate.call(this,req_args);};
G__22867.cljs$lang$maxFixedArity = 0;
G__22867.cljs$lang$applyTo = (function (arglist__22868){
var req_args = cljs.core.seq(arglist__22868);
return G__22867__delegate(req_args);
});
G__22867.cljs$core$IFn$_invoke$arity$variadic = G__22867__delegate;
return G__22867;
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
return (function (state_22886){var state_val_22887 = (state_22886[(1)]);if((state_val_22887 === (2)))
{var inst_22883 = (state_22886[(2)]);var inst_22884 = console.log(inst_22883);var state_22886__$1 = state_22886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22886__$1,inst_22884);
} else
{if((state_val_22887 === (1)))
{var state_22886__$1 = state_22886;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22886__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_22891 = [null,null,null,null,null,null,null];(statearr_22891[(0)] = state_machine__5694__auto__);
(statearr_22891[(1)] = (1));
return statearr_22891;
});
var state_machine__5694__auto____1 = (function (state_22886){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_22886);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e22892){if((e22892 instanceof Object))
{var ex__5697__auto__ = e22892;var statearr_22893_22895 = state_22886;(statearr_22893_22895[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22886);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22892;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22896 = state_22886;
state_22886 = G__22896;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_22886){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_22886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_22894 = f__5709__auto__.call(null);(statearr_22894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_22894;
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
log_api.cljs$lang$applyTo = (function (arglist__22897){
var f = cljs.core.first(arglist__22897);
var args = cljs.core.rest(arglist__22897);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__22900){var vec__22901 = p__22900;var k = cljs.core.nth.call(null,vec__22901,(0),null);var v = cljs.core.nth.call(null,vec__22901,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___22928 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___22928,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___22928,r){
return (function (state_22919){var state_val_22920 = (state_22919[(1)]);if((state_val_22920 === (2)))
{var inst_22916 = (state_22919[(2)]);var inst_22917 = cljs.core.reset_BANG_.call(null,r,inst_22916);var state_22919__$1 = state_22919;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22919__$1,inst_22917);
} else
{if((state_val_22920 === (1)))
{var state_22919__$1 = state_22919;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22919__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___22928,r))
;return ((function (switch__5693__auto__,c__5708__auto___22928,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_22924 = [null,null,null,null,null,null,null];(statearr_22924[(0)] = state_machine__5694__auto__);
(statearr_22924[(1)] = (1));
return statearr_22924;
});
var state_machine__5694__auto____1 = (function (state_22919){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_22919);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e22925){if((e22925 instanceof Object))
{var ex__5697__auto__ = e22925;var statearr_22926_22929 = state_22919;(statearr_22926_22929[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22919);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22925;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22930 = state_22919;
state_22919 = G__22930;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_22919){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_22919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___22928,r))
})();var state__5710__auto__ = (function (){var statearr_22927 = f__5709__auto__.call(null);(statearr_22927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___22928);
return statearr_22927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___22928,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__22931){
var id = cljs.core.first(arglist__22931);
arglist__22931 = cljs.core.next(arglist__22931);
var tolerance = cljs.core.first(arglist__22931);
var opts = cljs.core.rest(arglist__22931);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__22932){
var id = cljs.core.first(arglist__22932);
var opts = cljs.core.rest(arglist__22932);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__22933){
var ids = cljs.core.first(arglist__22933);
arglist__22933 = cljs.core.next(arglist__22933);
var tolerance = cljs.core.first(arglist__22933);
var opts = cljs.core.rest(arglist__22933);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__22934){var map__22936 = p__22934;var map__22936__$1 = ((cljs.core.seq_QMARK_.call(null,map__22936))?cljs.core.apply.call(null,cljs.core.hash_map,map__22936):map__22936);var opts = map__22936__$1;var boundaryline_ids = cljs.core.get.call(null,map__22936__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__22934 = null;if (arguments.length > 3) {
  p__22934 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__22934);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__22937){
var collection_id = cljs.core.first(arglist__22937);
arglist__22937 = cljs.core.next(arglist__22937);
var tolerance = cljs.core.first(arglist__22937);
arglist__22937 = cljs.core.next(arglist__22937);
var bounds = cljs.core.first(arglist__22937);
var p__22934 = cljs.core.rest(arglist__22937);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__22934);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__22938){var vec__22940 = p__22938;var type_ids = cljs.core.nth.call(null,vec__22940,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__22938 = null;if (arguments.length > 6) {
  p__22938 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__22938);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__22941){
var index = cljs.core.first(arglist__22941);
arglist__22941 = cljs.core.next(arglist__22941);
var type = cljs.core.first(arglist__22941);
arglist__22941 = cljs.core.next(arglist__22941);
var blcoll = cljs.core.first(arglist__22941);
arglist__22941 = cljs.core.next(arglist__22941);
var attr = cljs.core.first(arglist__22941);
arglist__22941 = cljs.core.next(arglist__22941);
var filter = cljs.core.first(arglist__22941);
arglist__22941 = cljs.core.next(arglist__22941);
var bounds = cljs.core.first(arglist__22941);
var p__22938 = cljs.core.rest(arglist__22941);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__22938);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__22942){var vec__22944 = p__22942;var type_ids = cljs.core.nth.call(null,vec__22944,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__22942 = null;if (arguments.length > 5) {
  p__22942 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__22942);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__22945){
var index = cljs.core.first(arglist__22945);
arglist__22945 = cljs.core.next(arglist__22945);
var type = cljs.core.first(arglist__22945);
arglist__22945 = cljs.core.next(arglist__22945);
var statsattrs = cljs.core.first(arglist__22945);
arglist__22945 = cljs.core.next(arglist__22945);
var filter = cljs.core.first(arglist__22945);
arglist__22945 = cljs.core.next(arglist__22945);
var bounds = cljs.core.first(arglist__22945);
var p__22942 = cljs.core.rest(arglist__22945);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__22942);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__22946){var vec__22948 = p__22946;var type_ids = cljs.core.nth.call(null,vec__22948,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__22946 = null;if (arguments.length > 7) {
  p__22946 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__22946);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__22949){
var index = cljs.core.first(arglist__22949);
arglist__22949 = cljs.core.next(arglist__22949);
var type = cljs.core.first(arglist__22949);
arglist__22949 = cljs.core.next(arglist__22949);
var location_attr = cljs.core.first(arglist__22949);
arglist__22949 = cljs.core.next(arglist__22949);
var attrs = cljs.core.first(arglist__22949);
arglist__22949 = cljs.core.next(arglist__22949);
var max_count = cljs.core.first(arglist__22949);
arglist__22949 = cljs.core.next(arglist__22949);
var filter = cljs.core.first(arglist__22949);
arglist__22949 = cljs.core.next(arglist__22949);
var bounds = cljs.core.first(arglist__22949);
var p__22946 = cljs.core.rest(arglist__22949);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__22946);
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
var portfolio_company_sites__delegate = function (p__22950){var vec__22952 = p__22950;var type_ids = cljs.core.nth.call(null,vec__22952,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__22950 = null;if (arguments.length > 0) {
  p__22950 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__22950);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__22953){
var p__22950 = cljs.core.seq(arglist__22953);
return portfolio_company_sites__delegate(p__22950);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__22954){var vec__22956 = p__22954;var type_ids = cljs.core.nth.call(null,vec__22956,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__22954 = null;if (arguments.length > 0) {
  p__22954 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__22954);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__22957){
var p__22954 = cljs.core.seq(arglist__22957);
return portfolio_company_sites_by_company__delegate(p__22954);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__22958){var vec__22960 = p__22958;var type_ids = cljs.core.nth.call(null,vec__22960,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__22958 = null;if (arguments.length > 0) {
  p__22958 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__22958);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__22961){
var p__22958 = cljs.core.seq(arglist__22961);
return portfolio_company_locations__delegate(p__22958);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__22962){var vec__22964 = p__22962;var type_ids = cljs.core.nth.call(null,vec__22964,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__22962 = null;if (arguments.length > 0) {
  p__22962 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__22962);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__22965){
var p__22962 = cljs.core.seq(arglist__22965);
return portfolio_company_site_stats__delegate(p__22962);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__22966){var vec__22968 = p__22966;var type_ids = cljs.core.nth.call(null,vec__22968,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__22966 = null;if (arguments.length > 0) {
  p__22966 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__22966);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__22969){
var p__22966 = cljs.core.seq(arglist__22969);
return portfolio_company_site_account_timelines__delegate(p__22966);
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
var investment_account_timelines__delegate = function (p__22970){var vec__22972 = p__22970;var type_ids = cljs.core.nth.call(null,vec__22972,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__22970 = null;if (arguments.length > 0) {
  p__22970 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__22970);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__22973){
var p__22970 = cljs.core.seq(arglist__22973);
return investment_account_timelines__delegate(p__22970);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__22974){var vec__22976 = p__22974;var type_ids = cljs.core.nth.call(null,vec__22976,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__22974 = null;if (arguments.length > 0) {
  p__22974 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__22974);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__22977){
var p__22974 = cljs.core.seq(arglist__22977);
return investment_stats__delegate(p__22974);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__22978){var vec__22980 = p__22978;var type_ids = cljs.core.nth.call(null,vec__22980,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__22978 = null;if (arguments.length > 0) {
  p__22978 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__22978);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__22981){
var p__22978 = cljs.core.seq(arglist__22981);
return investment_aggs__delegate(p__22978);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__22982){var vec__22984 = p__22982;var type_ids = cljs.core.nth.call(null,vec__22984,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__22982 = null;if (arguments.length > 0) {
  p__22982 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__22982);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__22985){
var p__22982 = cljs.core.seq(arglist__22985);
return investments__delegate(p__22982);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
