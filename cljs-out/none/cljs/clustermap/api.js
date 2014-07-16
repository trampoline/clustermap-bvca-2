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
var AJAX__delegate = function (url,p__45648){var map__45652 = p__45648;var map__45652__$1 = ((cljs.core.seq_QMARK_.call(null,map__45652))?cljs.core.apply.call(null,cljs.core.hash_map,map__45652):map__45652);var content = cljs.core.get.call(null,map__45652__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__45652__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__45652__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__45652,map__45652__$1,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__45652,map__45652__$1,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__45652,map__45652__$1,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__45652,map__45652__$1,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__45654 = method;var G__45654__$1 = (((G__45654 == null))?null:cljs.core.name.call(null,G__45654));var G__45654__$2 = (((G__45654__$1 == null))?null:clojure.string.upper_case.call(null,G__45654__$1));return G__45654__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__45648 = null;if (arguments.length > 1) {
  p__45648 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__45648);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__45655){
var url = cljs.core.first(arglist__45655);
var p__45648 = cljs.core.rest(arglist__45655);
return AJAX__delegate(url,p__45648);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__45656){var map__45658 = p__45656;var map__45658__$1 = ((cljs.core.seq_QMARK_.call(null,map__45658))?cljs.core.apply.call(null,cljs.core.hash_map,map__45658):map__45658);var opts = map__45658__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__45656 = null;if (arguments.length > 1) {
  p__45656 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__45656);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__45659){
var url = cljs.core.first(arglist__45659);
var p__45656 = cljs.core.rest(arglist__45659);
return GET__delegate(url,p__45656);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__45660){var map__45662 = p__45660;var map__45662__$1 = ((cljs.core.seq_QMARK_.call(null,map__45662))?cljs.core.apply.call(null,cljs.core.hash_map,map__45662):map__45662);var opts = map__45662__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__45660 = null;if (arguments.length > 2) {
  p__45660 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__45660);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__45663){
var url = cljs.core.first(arglist__45663);
arglist__45663 = cljs.core.next(arglist__45663);
var content = cljs.core.first(arglist__45663);
var p__45660 = cljs.core.rest(arglist__45663);
return POST__delegate(url,content,p__45660);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__45664){var map__45666 = p__45664;var map__45666__$1 = ((cljs.core.seq_QMARK_.call(null,map__45666))?cljs.core.apply.call(null,cljs.core.hash_map,map__45666):map__45666);var opts = map__45666__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__45664 = null;if (arguments.length > 2) {
  p__45664 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__45664);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__45667){
var url = cljs.core.first(arglist__45667);
arglist__45667 = cljs.core.next(arglist__45667);
var content = cljs.core.first(arglist__45667);
var p__45664 = cljs.core.rest(arglist__45667);
return PUT__delegate(url,content,p__45664);
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
return (function (state_45800){var state_val_45801 = (state_45800[(1)]);if((state_val_45801 === (7)))
{var inst_45758 = (state_45800[(7)]);var inst_45757 = (state_45800[(2)]);var inst_45758__$1 = cljs.core.nth.call(null,inst_45757,(0),null);var inst_45759 = cljs.core.nth.call(null,inst_45757,(1),null);var inst_45760 = cljs.core.sequential_QMARK_.call(null,inst_45758__$1);var state_45800__$1 = (function (){var statearr_45802 = state_45800;(statearr_45802[(7)] = inst_45758__$1);
(statearr_45802[(8)] = inst_45759);
return statearr_45802;
})();if(inst_45760)
{var statearr_45803_45838 = state_45800__$1;(statearr_45803_45838[(1)] = (8));
} else
{var statearr_45804_45839 = state_45800__$1;(statearr_45804_45839[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (20)))
{var inst_45758 = (state_45800[(7)]);var state_45800__$1 = state_45800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45800__$1,(23),inst_45758);
} else
{if((state_val_45801 === (1)))
{var state_45800__$1 = state_45800;var statearr_45805_45840 = state_45800__$1;(statearr_45805_45840[(2)] = null);
(statearr_45805_45840[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (4)))
{var state_45800__$1 = state_45800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45800__$1,(7),ocomm);
} else
{if((state_val_45801 === (15)))
{var inst_45780 = (state_45800[(2)]);var state_45800__$1 = state_45800;var statearr_45806_45841 = state_45800__$1;(statearr_45806_45841[(2)] = inst_45780);
(statearr_45806_45841[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (21)))
{var state_45800__$1 = state_45800;var statearr_45807_45842 = state_45800__$1;(statearr_45807_45842[(2)] = null);
(statearr_45807_45842[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (13)))
{var inst_45763 = (state_45800[(9)]);var state_45800__$1 = state_45800;var statearr_45808_45843 = state_45800__$1;(statearr_45808_45843[(2)] = inst_45763);
(statearr_45808_45843[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (22)))
{var inst_45789 = (state_45800[(2)]);var state_45800__$1 = state_45800;var statearr_45809_45844 = state_45800__$1;(statearr_45809_45844[(2)] = inst_45789);
(statearr_45809_45844[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (6)))
{var inst_45796 = (state_45800[(2)]);var state_45800__$1 = state_45800;var statearr_45810_45845 = state_45800__$1;(statearr_45810_45845[(2)] = inst_45796);
(statearr_45810_45845[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (17)))
{var state_45800__$1 = state_45800;var statearr_45811_45846 = state_45800__$1;(statearr_45811_45846[(2)] = null);
(statearr_45811_45846[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (3)))
{var inst_45798 = (state_45800[(2)]);var state_45800__$1 = state_45800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45800__$1,inst_45798);
} else
{if((state_val_45801 === (12)))
{var inst_45782 = (state_45800[(2)]);var state_45800__$1 = state_45800;var statearr_45812_45847 = state_45800__$1;(statearr_45812_45847[(2)] = inst_45782);
(statearr_45812_45847[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (2)))
{var state_45800__$1 = state_45800;if(true)
{var statearr_45813_45848 = state_45800__$1;(statearr_45813_45848[(1)] = (4));
} else
{var statearr_45814_45849 = state_45800__$1;(statearr_45814_45849[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (23)))
{var inst_45786 = (state_45800[(2)]);var state_45800__$1 = state_45800;var statearr_45815_45850 = state_45800__$1;(statearr_45815_45850[(2)] = inst_45786);
(statearr_45815_45850[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (19)))
{var inst_45773 = (state_45800[(2)]);var state_45800__$1 = state_45800;var statearr_45816_45851 = state_45800__$1;(statearr_45816_45851[(2)] = inst_45773);
(statearr_45816_45851[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (11)))
{var inst_45762 = (state_45800[(10)]);var inst_45765 = cljs.core.empty_QMARK_.call(null,inst_45762);var state_45800__$1 = state_45800;if(inst_45765)
{var statearr_45817_45852 = state_45800__$1;(statearr_45817_45852[(1)] = (13));
} else
{var statearr_45818_45853 = state_45800__$1;(statearr_45818_45853[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (9)))
{var inst_45758 = (state_45800[(7)]);var state_45800__$1 = state_45800;if(cljs.core.truth_(inst_45758))
{var statearr_45819_45854 = state_45800__$1;(statearr_45819_45854[(1)] = (20));
} else
{var statearr_45820_45855 = state_45800__$1;(statearr_45820_45855[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (5)))
{var state_45800__$1 = state_45800;var statearr_45821_45856 = state_45800__$1;(statearr_45821_45856[(2)] = null);
(statearr_45821_45856[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (14)))
{var inst_45762 = (state_45800[(10)]);var inst_45768 = cljs.core.rest.call(null,inst_45762);var inst_45769 = cljs.core.first.call(null,inst_45762);var state_45800__$1 = (function (){var statearr_45822 = state_45800;(statearr_45822[(11)] = inst_45768);
return statearr_45822;
})();if(cljs.core.truth_(inst_45769))
{var statearr_45823_45857 = state_45800__$1;(statearr_45823_45857[(1)] = (16));
} else
{var statearr_45824_45858 = state_45800__$1;(statearr_45824_45858[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (16)))
{var inst_45762 = (state_45800[(10)]);var inst_45771 = cljs.core.first.call(null,inst_45762);var state_45800__$1 = state_45800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45800__$1,(19),inst_45771);
} else
{if((state_val_45801 === (10)))
{var inst_45759 = (state_45800[(8)]);var inst_45791 = (state_45800[(2)]);var inst_45792 = cljs.core.apply.call(null,handler,inst_45791,inst_45759);var state_45800__$1 = (function (){var statearr_45825 = state_45800;(statearr_45825[(12)] = inst_45792);
return statearr_45825;
})();var statearr_45826_45859 = state_45800__$1;(statearr_45826_45859[(2)] = null);
(statearr_45826_45859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (18)))
{var inst_45763 = (state_45800[(9)]);var inst_45768 = (state_45800[(11)]);var inst_45776 = (state_45800[(2)]);var inst_45777 = cljs.core.conj.call(null,inst_45763,inst_45776);var inst_45762 = inst_45768;var inst_45763__$1 = inst_45777;var state_45800__$1 = (function (){var statearr_45827 = state_45800;(statearr_45827[(10)] = inst_45762);
(statearr_45827[(9)] = inst_45763__$1);
return statearr_45827;
})();var statearr_45828_45860 = state_45800__$1;(statearr_45828_45860[(2)] = null);
(statearr_45828_45860[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45801 === (8)))
{var inst_45758 = (state_45800[(7)]);var inst_45762 = inst_45758;var inst_45763 = cljs.core.PersistentVector.EMPTY;var state_45800__$1 = (function (){var statearr_45829 = state_45800;(statearr_45829[(10)] = inst_45762);
(statearr_45829[(9)] = inst_45763);
return statearr_45829;
})();var statearr_45830_45861 = state_45800__$1;(statearr_45830_45861[(2)] = null);
(statearr_45830_45861[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_45834 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45834[(0)] = state_machine__5679__auto__);
(statearr_45834[(1)] = (1));
return statearr_45834;
});
var state_machine__5679__auto____1 = (function (state_45800){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_45800);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e45835){if((e45835 instanceof Object))
{var ex__5682__auto__ = e45835;var statearr_45836_45862 = state_45800;(statearr_45836_45862[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45800);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45863 = state_45800;
state_45800 = G__45863;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_45800){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_45800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_45837 = f__5694__auto__.call(null);(statearr_45837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_45837;
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
var G__45866__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__45865 = rseq;var rcomm = cljs.core.nth.call(null,vec__45865,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__45865,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__45866 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__45866__delegate.call(this,req_args);};
G__45866.cljs$lang$maxFixedArity = 0;
G__45866.cljs$lang$applyTo = (function (arglist__45867){
var req_args = cljs.core.seq(arglist__45867);
return G__45866__delegate(req_args);
});
G__45866.cljs$core$IFn$_invoke$arity$variadic = G__45866__delegate;
return G__45866;
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
return (function (state_45885){var state_val_45886 = (state_45885[(1)]);if((state_val_45886 === (2)))
{var inst_45882 = (state_45885[(2)]);var inst_45883 = console.log(inst_45882);var state_45885__$1 = state_45885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45885__$1,inst_45883);
} else
{if((state_val_45886 === (1)))
{var state_45885__$1 = state_45885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45885__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_45890 = [null,null,null,null,null,null,null];(statearr_45890[(0)] = state_machine__5679__auto__);
(statearr_45890[(1)] = (1));
return statearr_45890;
});
var state_machine__5679__auto____1 = (function (state_45885){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_45885);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e45891){if((e45891 instanceof Object))
{var ex__5682__auto__ = e45891;var statearr_45892_45894 = state_45885;(statearr_45892_45894[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45885);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45895 = state_45885;
state_45885 = G__45895;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_45885){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_45885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_45893 = f__5694__auto__.call(null);(statearr_45893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_45893;
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
log_api.cljs$lang$applyTo = (function (arglist__45896){
var f = cljs.core.first(arglist__45896);
var args = cljs.core.rest(arglist__45896);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__45899){var vec__45900 = p__45899;var k = cljs.core.nth.call(null,vec__45900,(0),null);var v = cljs.core.nth.call(null,vec__45900,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___45927 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___45927,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___45927,r){
return (function (state_45918){var state_val_45919 = (state_45918[(1)]);if((state_val_45919 === (2)))
{var inst_45915 = (state_45918[(2)]);var inst_45916 = cljs.core.reset_BANG_.call(null,r,inst_45915);var state_45918__$1 = state_45918;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45918__$1,inst_45916);
} else
{if((state_val_45919 === (1)))
{var state_45918__$1 = state_45918;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45918__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___45927,r))
;return ((function (switch__5678__auto__,c__5693__auto___45927,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_45923 = [null,null,null,null,null,null,null];(statearr_45923[(0)] = state_machine__5679__auto__);
(statearr_45923[(1)] = (1));
return statearr_45923;
});
var state_machine__5679__auto____1 = (function (state_45918){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_45918);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e45924){if((e45924 instanceof Object))
{var ex__5682__auto__ = e45924;var statearr_45925_45928 = state_45918;(statearr_45925_45928[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45918);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45924;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45929 = state_45918;
state_45918 = G__45929;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_45918){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_45918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___45927,r))
})();var state__5695__auto__ = (function (){var statearr_45926 = f__5694__auto__.call(null);(statearr_45926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___45927);
return statearr_45926;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___45927,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__45930){
var id = cljs.core.first(arglist__45930);
arglist__45930 = cljs.core.next(arglist__45930);
var tolerance = cljs.core.first(arglist__45930);
var opts = cljs.core.rest(arglist__45930);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__45931){
var id = cljs.core.first(arglist__45931);
var opts = cljs.core.rest(arglist__45931);
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
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,p__45932){var vec__45934 = p__45932;var type_ids = cljs.core.nth.call(null,vec__45934,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,var_args){
var p__45932 = null;if (arguments.length > 5) {
  p__45932 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,p__45932);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 5;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__45935){
var index = cljs.core.first(arglist__45935);
arglist__45935 = cljs.core.next(arglist__45935);
var type = cljs.core.first(arglist__45935);
arglist__45935 = cljs.core.next(arglist__45935);
var blcoll = cljs.core.first(arglist__45935);
arglist__45935 = cljs.core.next(arglist__45935);
var attr = cljs.core.first(arglist__45935);
arglist__45935 = cljs.core.next(arglist__45935);
var filter = cljs.core.first(arglist__45935);
var p__45932 = cljs.core.rest(arglist__45935);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,p__45932);
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
var portfolio_company_sites__delegate = function (p__45936){var vec__45938 = p__45936;var type_ids = cljs.core.nth.call(null,vec__45938,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__45936 = null;if (arguments.length > 0) {
  p__45936 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__45936);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__45939){
var p__45936 = cljs.core.seq(arglist__45939);
return portfolio_company_sites__delegate(p__45936);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__45940){var vec__45942 = p__45940;var type_ids = cljs.core.nth.call(null,vec__45942,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__45940 = null;if (arguments.length > 0) {
  p__45940 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__45940);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__45943){
var p__45940 = cljs.core.seq(arglist__45943);
return portfolio_company_sites_by_company__delegate(p__45940);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__45944){var vec__45946 = p__45944;var type_ids = cljs.core.nth.call(null,vec__45946,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__45944 = null;if (arguments.length > 0) {
  p__45944 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__45944);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__45947){
var p__45944 = cljs.core.seq(arglist__45947);
return portfolio_company_locations__delegate(p__45944);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__45948){var vec__45950 = p__45948;var type_ids = cljs.core.nth.call(null,vec__45950,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__45948 = null;if (arguments.length > 0) {
  p__45948 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__45948);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__45951){
var p__45948 = cljs.core.seq(arglist__45951);
return portfolio_company_site_stats__delegate(p__45948);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__45952){var vec__45954 = p__45952;var type_ids = cljs.core.nth.call(null,vec__45954,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__45952 = null;if (arguments.length > 0) {
  p__45952 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__45952);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__45955){
var p__45952 = cljs.core.seq(arglist__45955);
return portfolio_company_site_account_timelines__delegate(p__45952);
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
var investment_account_timelines__delegate = function (p__45956){var vec__45958 = p__45956;var type_ids = cljs.core.nth.call(null,vec__45958,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__45956 = null;if (arguments.length > 0) {
  p__45956 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__45956);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__45959){
var p__45956 = cljs.core.seq(arglist__45959);
return investment_account_timelines__delegate(p__45956);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__45960){var vec__45962 = p__45960;var type_ids = cljs.core.nth.call(null,vec__45962,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__45960 = null;if (arguments.length > 0) {
  p__45960 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__45960);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__45963){
var p__45960 = cljs.core.seq(arglist__45963);
return investment_stats__delegate(p__45960);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__45964){var vec__45966 = p__45964;var type_ids = cljs.core.nth.call(null,vec__45966,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__45964 = null;if (arguments.length > 0) {
  p__45964 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__45964);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__45967){
var p__45964 = cljs.core.seq(arglist__45967);
return investment_aggs__delegate(p__45964);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__45968){var vec__45970 = p__45968;var type_ids = cljs.core.nth.call(null,vec__45970,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__45968 = null;if (arguments.length > 0) {
  p__45968 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__45968);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__45971){
var p__45968 = cljs.core.seq(arglist__45971);
return investments__delegate(p__45968);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map