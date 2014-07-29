// Compiled by ClojureScript 0.0-2268
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
var AJAX__delegate = function (url,p__46672){var map__46676 = p__46672;var map__46676__$1 = ((cljs.core.seq_QMARK_.call(null,map__46676))?cljs.core.apply.call(null,cljs.core.hash_map,map__46676):map__46676);var opts = map__46676__$1;var content = cljs.core.get.call(null,map__46676__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__46676__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__46676__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__46676,map__46676__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__46676,map__46676__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__46676,map__46676__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__46676,map__46676__$1,opts,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__46678 = method;var G__46678__$1 = (((G__46678 == null))?null:cljs.core.name.call(null,G__46678));var G__46678__$2 = (((G__46678__$1 == null))?null:clojure.string.upper_case.call(null,G__46678__$1));return G__46678__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__46672 = null;if (arguments.length > 1) {
  p__46672 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__46672);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__46679){
var url = cljs.core.first(arglist__46679);
var p__46672 = cljs.core.rest(arglist__46679);
return AJAX__delegate(url,p__46672);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__46680){var map__46682 = p__46680;var map__46682__$1 = ((cljs.core.seq_QMARK_.call(null,map__46682))?cljs.core.apply.call(null,cljs.core.hash_map,map__46682):map__46682);var opts = map__46682__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__46680 = null;if (arguments.length > 1) {
  p__46680 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__46680);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__46683){
var url = cljs.core.first(arglist__46683);
var p__46680 = cljs.core.rest(arglist__46683);
return GET__delegate(url,p__46680);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__46684){var map__46686 = p__46684;var map__46686__$1 = ((cljs.core.seq_QMARK_.call(null,map__46686))?cljs.core.apply.call(null,cljs.core.hash_map,map__46686):map__46686);var opts = map__46686__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__46684 = null;if (arguments.length > 2) {
  p__46684 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__46684);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__46687){
var url = cljs.core.first(arglist__46687);
arglist__46687 = cljs.core.next(arglist__46687);
var content = cljs.core.first(arglist__46687);
var p__46684 = cljs.core.rest(arglist__46687);
return POST__delegate(url,content,p__46684);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__46688){var map__46690 = p__46688;var map__46690__$1 = ((cljs.core.seq_QMARK_.call(null,map__46690))?cljs.core.apply.call(null,cljs.core.hash_map,map__46690):map__46690);var opts = map__46690__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__46688 = null;if (arguments.length > 2) {
  p__46688 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__46688);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__46691){
var url = cljs.core.first(arglist__46691);
arglist__46691 = cljs.core.next(arglist__46691);
var content = cljs.core.first(arglist__46691);
var p__46688 = cljs.core.rest(arglist__46691);
return PUT__delegate(url,content,p__46688);
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
return (function (state_46824){var state_val_46825 = (state_46824[(1)]);if((state_val_46825 === (7)))
{var inst_46782 = (state_46824[(7)]);var inst_46781 = (state_46824[(2)]);var inst_46782__$1 = cljs.core.nth.call(null,inst_46781,(0),null);var inst_46783 = cljs.core.nth.call(null,inst_46781,(1),null);var inst_46784 = cljs.core.sequential_QMARK_.call(null,inst_46782__$1);var state_46824__$1 = (function (){var statearr_46826 = state_46824;(statearr_46826[(7)] = inst_46782__$1);
(statearr_46826[(8)] = inst_46783);
return statearr_46826;
})();if(inst_46784)
{var statearr_46827_46862 = state_46824__$1;(statearr_46827_46862[(1)] = (8));
} else
{var statearr_46828_46863 = state_46824__$1;(statearr_46828_46863[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (20)))
{var inst_46782 = (state_46824[(7)]);var state_46824__$1 = state_46824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46824__$1,(23),inst_46782);
} else
{if((state_val_46825 === (1)))
{var state_46824__$1 = state_46824;var statearr_46829_46864 = state_46824__$1;(statearr_46829_46864[(2)] = null);
(statearr_46829_46864[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (4)))
{var state_46824__$1 = state_46824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46824__$1,(7),ocomm);
} else
{if((state_val_46825 === (15)))
{var inst_46804 = (state_46824[(2)]);var state_46824__$1 = state_46824;var statearr_46830_46865 = state_46824__$1;(statearr_46830_46865[(2)] = inst_46804);
(statearr_46830_46865[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (21)))
{var state_46824__$1 = state_46824;var statearr_46831_46866 = state_46824__$1;(statearr_46831_46866[(2)] = null);
(statearr_46831_46866[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (13)))
{var inst_46787 = (state_46824[(9)]);var state_46824__$1 = state_46824;var statearr_46832_46867 = state_46824__$1;(statearr_46832_46867[(2)] = inst_46787);
(statearr_46832_46867[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (22)))
{var inst_46813 = (state_46824[(2)]);var state_46824__$1 = state_46824;var statearr_46833_46868 = state_46824__$1;(statearr_46833_46868[(2)] = inst_46813);
(statearr_46833_46868[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (6)))
{var inst_46820 = (state_46824[(2)]);var state_46824__$1 = state_46824;var statearr_46834_46869 = state_46824__$1;(statearr_46834_46869[(2)] = inst_46820);
(statearr_46834_46869[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (17)))
{var state_46824__$1 = state_46824;var statearr_46835_46870 = state_46824__$1;(statearr_46835_46870[(2)] = null);
(statearr_46835_46870[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (3)))
{var inst_46822 = (state_46824[(2)]);var state_46824__$1 = state_46824;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46824__$1,inst_46822);
} else
{if((state_val_46825 === (12)))
{var inst_46806 = (state_46824[(2)]);var state_46824__$1 = state_46824;var statearr_46836_46871 = state_46824__$1;(statearr_46836_46871[(2)] = inst_46806);
(statearr_46836_46871[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (2)))
{var state_46824__$1 = state_46824;if(true)
{var statearr_46837_46872 = state_46824__$1;(statearr_46837_46872[(1)] = (4));
} else
{var statearr_46838_46873 = state_46824__$1;(statearr_46838_46873[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (23)))
{var inst_46810 = (state_46824[(2)]);var state_46824__$1 = state_46824;var statearr_46839_46874 = state_46824__$1;(statearr_46839_46874[(2)] = inst_46810);
(statearr_46839_46874[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (19)))
{var inst_46797 = (state_46824[(2)]);var state_46824__$1 = state_46824;var statearr_46840_46875 = state_46824__$1;(statearr_46840_46875[(2)] = inst_46797);
(statearr_46840_46875[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (11)))
{var inst_46786 = (state_46824[(10)]);var inst_46789 = cljs.core.empty_QMARK_.call(null,inst_46786);var state_46824__$1 = state_46824;if(inst_46789)
{var statearr_46841_46876 = state_46824__$1;(statearr_46841_46876[(1)] = (13));
} else
{var statearr_46842_46877 = state_46824__$1;(statearr_46842_46877[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (9)))
{var inst_46782 = (state_46824[(7)]);var state_46824__$1 = state_46824;if(cljs.core.truth_(inst_46782))
{var statearr_46843_46878 = state_46824__$1;(statearr_46843_46878[(1)] = (20));
} else
{var statearr_46844_46879 = state_46824__$1;(statearr_46844_46879[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (5)))
{var state_46824__$1 = state_46824;var statearr_46845_46880 = state_46824__$1;(statearr_46845_46880[(2)] = null);
(statearr_46845_46880[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (14)))
{var inst_46786 = (state_46824[(10)]);var inst_46792 = cljs.core.rest.call(null,inst_46786);var inst_46793 = cljs.core.first.call(null,inst_46786);var state_46824__$1 = (function (){var statearr_46846 = state_46824;(statearr_46846[(11)] = inst_46792);
return statearr_46846;
})();if(cljs.core.truth_(inst_46793))
{var statearr_46847_46881 = state_46824__$1;(statearr_46847_46881[(1)] = (16));
} else
{var statearr_46848_46882 = state_46824__$1;(statearr_46848_46882[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (16)))
{var inst_46786 = (state_46824[(10)]);var inst_46795 = cljs.core.first.call(null,inst_46786);var state_46824__$1 = state_46824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46824__$1,(19),inst_46795);
} else
{if((state_val_46825 === (10)))
{var inst_46783 = (state_46824[(8)]);var inst_46815 = (state_46824[(2)]);var inst_46816 = cljs.core.apply.call(null,handler,inst_46815,inst_46783);var state_46824__$1 = (function (){var statearr_46849 = state_46824;(statearr_46849[(12)] = inst_46816);
return statearr_46849;
})();var statearr_46850_46883 = state_46824__$1;(statearr_46850_46883[(2)] = null);
(statearr_46850_46883[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (18)))
{var inst_46787 = (state_46824[(9)]);var inst_46792 = (state_46824[(11)]);var inst_46800 = (state_46824[(2)]);var inst_46801 = cljs.core.conj.call(null,inst_46787,inst_46800);var inst_46786 = inst_46792;var inst_46787__$1 = inst_46801;var state_46824__$1 = (function (){var statearr_46851 = state_46824;(statearr_46851[(9)] = inst_46787__$1);
(statearr_46851[(10)] = inst_46786);
return statearr_46851;
})();var statearr_46852_46884 = state_46824__$1;(statearr_46852_46884[(2)] = null);
(statearr_46852_46884[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46825 === (8)))
{var inst_46782 = (state_46824[(7)]);var inst_46786 = inst_46782;var inst_46787 = cljs.core.PersistentVector.EMPTY;var state_46824__$1 = (function (){var statearr_46853 = state_46824;(statearr_46853[(9)] = inst_46787);
(statearr_46853[(10)] = inst_46786);
return statearr_46853;
})();var statearr_46854_46885 = state_46824__$1;(statearr_46854_46885[(2)] = null);
(statearr_46854_46885[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_46858 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46858[(0)] = state_machine__5679__auto__);
(statearr_46858[(1)] = (1));
return statearr_46858;
});
var state_machine__5679__auto____1 = (function (state_46824){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_46824);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e46859){if((e46859 instanceof Object))
{var ex__5682__auto__ = e46859;var statearr_46860_46886 = state_46824;(statearr_46860_46886[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46824);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e46859;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46887 = state_46824;
state_46824 = G__46887;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_46824){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_46824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_46861 = f__5694__auto__.call(null);(statearr_46861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_46861;
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
var G__46890__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__46889 = rseq;var rcomm = cljs.core.nth.call(null,vec__46889,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__46889,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__46890 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__46890__delegate.call(this,req_args);};
G__46890.cljs$lang$maxFixedArity = 0;
G__46890.cljs$lang$applyTo = (function (arglist__46891){
var req_args = cljs.core.seq(arglist__46891);
return G__46890__delegate(req_args);
});
G__46890.cljs$core$IFn$_invoke$arity$variadic = G__46890__delegate;
return G__46890;
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
return (function (state_46909){var state_val_46910 = (state_46909[(1)]);if((state_val_46910 === (2)))
{var inst_46906 = (state_46909[(2)]);var inst_46907 = console.log(inst_46906);var state_46909__$1 = state_46909;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46909__$1,inst_46907);
} else
{if((state_val_46910 === (1)))
{var state_46909__$1 = state_46909;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46909__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_46914 = [null,null,null,null,null,null,null];(statearr_46914[(0)] = state_machine__5679__auto__);
(statearr_46914[(1)] = (1));
return statearr_46914;
});
var state_machine__5679__auto____1 = (function (state_46909){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_46909);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e46915){if((e46915 instanceof Object))
{var ex__5682__auto__ = e46915;var statearr_46916_46918 = state_46909;(statearr_46916_46918[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46909);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e46915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46919 = state_46909;
state_46909 = G__46919;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_46909){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_46909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_46917 = f__5694__auto__.call(null);(statearr_46917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_46917;
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
log_api.cljs$lang$applyTo = (function (arglist__46920){
var f = cljs.core.first(arglist__46920);
var args = cljs.core.rest(arglist__46920);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__46923){var vec__46924 = p__46923;var k = cljs.core.nth.call(null,vec__46924,(0),null);var v = cljs.core.nth.call(null,vec__46924,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___46951 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___46951,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___46951,r){
return (function (state_46942){var state_val_46943 = (state_46942[(1)]);if((state_val_46943 === (2)))
{var inst_46939 = (state_46942[(2)]);var inst_46940 = cljs.core.reset_BANG_.call(null,r,inst_46939);var state_46942__$1 = state_46942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46942__$1,inst_46940);
} else
{if((state_val_46943 === (1)))
{var state_46942__$1 = state_46942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46942__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___46951,r))
;return ((function (switch__5678__auto__,c__5693__auto___46951,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_46947 = [null,null,null,null,null,null,null];(statearr_46947[(0)] = state_machine__5679__auto__);
(statearr_46947[(1)] = (1));
return statearr_46947;
});
var state_machine__5679__auto____1 = (function (state_46942){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_46942);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e46948){if((e46948 instanceof Object))
{var ex__5682__auto__ = e46948;var statearr_46949_46952 = state_46942;(statearr_46949_46952[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e46948;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46953 = state_46942;
state_46942 = G__46953;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_46942){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_46942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___46951,r))
})();var state__5695__auto__ = (function (){var statearr_46950 = f__5694__auto__.call(null);(statearr_46950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___46951);
return statearr_46950;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___46951,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__46954){
var id = cljs.core.first(arglist__46954);
arglist__46954 = cljs.core.next(arglist__46954);
var tolerance = cljs.core.first(arglist__46954);
var opts = cljs.core.rest(arglist__46954);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__46955){
var id = cljs.core.first(arglist__46955);
var opts = cljs.core.rest(arglist__46955);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__46956){
var ids = cljs.core.first(arglist__46956);
arglist__46956 = cljs.core.next(arglist__46956);
var tolerance = cljs.core.first(arglist__46956);
var opts = cljs.core.rest(arglist__46956);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__46957){var map__46959 = p__46957;var map__46959__$1 = ((cljs.core.seq_QMARK_.call(null,map__46959))?cljs.core.apply.call(null,cljs.core.hash_map,map__46959):map__46959);var opts = map__46959__$1;var boundaryline_ids = cljs.core.get.call(null,map__46959__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__46957 = null;if (arguments.length > 3) {
  p__46957 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__46957);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__46960){
var collection_id = cljs.core.first(arglist__46960);
arglist__46960 = cljs.core.next(arglist__46960);
var tolerance = cljs.core.first(arglist__46960);
arglist__46960 = cljs.core.next(arglist__46960);
var bounds = cljs.core.first(arglist__46960);
var p__46957 = cljs.core.rest(arglist__46960);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__46957);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__46961){var vec__46963 = p__46961;var type_ids = cljs.core.nth.call(null,vec__46963,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__46961 = null;if (arguments.length > 6) {
  p__46961 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__46961);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__46964){
var index = cljs.core.first(arglist__46964);
arglist__46964 = cljs.core.next(arglist__46964);
var type = cljs.core.first(arglist__46964);
arglist__46964 = cljs.core.next(arglist__46964);
var blcoll = cljs.core.first(arglist__46964);
arglist__46964 = cljs.core.next(arglist__46964);
var attr = cljs.core.first(arglist__46964);
arglist__46964 = cljs.core.next(arglist__46964);
var filter = cljs.core.first(arglist__46964);
arglist__46964 = cljs.core.next(arglist__46964);
var bounds = cljs.core.first(arglist__46964);
var p__46961 = cljs.core.rest(arglist__46964);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__46961);
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
var portfolio_company_sites__delegate = function (p__46965){var vec__46967 = p__46965;var type_ids = cljs.core.nth.call(null,vec__46967,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__46965 = null;if (arguments.length > 0) {
  p__46965 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__46965);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__46968){
var p__46965 = cljs.core.seq(arglist__46968);
return portfolio_company_sites__delegate(p__46965);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__46969){var vec__46971 = p__46969;var type_ids = cljs.core.nth.call(null,vec__46971,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__46969 = null;if (arguments.length > 0) {
  p__46969 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__46969);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__46972){
var p__46969 = cljs.core.seq(arglist__46972);
return portfolio_company_sites_by_company__delegate(p__46969);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__46973){var vec__46975 = p__46973;var type_ids = cljs.core.nth.call(null,vec__46975,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__46973 = null;if (arguments.length > 0) {
  p__46973 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__46973);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__46976){
var p__46973 = cljs.core.seq(arglist__46976);
return portfolio_company_locations__delegate(p__46973);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__46977){var vec__46979 = p__46977;var type_ids = cljs.core.nth.call(null,vec__46979,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__46977 = null;if (arguments.length > 0) {
  p__46977 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__46977);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__46980){
var p__46977 = cljs.core.seq(arglist__46980);
return portfolio_company_site_stats__delegate(p__46977);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__46981){var vec__46983 = p__46981;var type_ids = cljs.core.nth.call(null,vec__46983,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__46981 = null;if (arguments.length > 0) {
  p__46981 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__46981);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__46984){
var p__46981 = cljs.core.seq(arglist__46984);
return portfolio_company_site_account_timelines__delegate(p__46981);
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
var investment_account_timelines__delegate = function (p__46985){var vec__46987 = p__46985;var type_ids = cljs.core.nth.call(null,vec__46987,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__46985 = null;if (arguments.length > 0) {
  p__46985 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__46985);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__46988){
var p__46985 = cljs.core.seq(arglist__46988);
return investment_account_timelines__delegate(p__46985);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__46989){var vec__46991 = p__46989;var type_ids = cljs.core.nth.call(null,vec__46991,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__46989 = null;if (arguments.length > 0) {
  p__46989 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__46989);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__46992){
var p__46989 = cljs.core.seq(arglist__46992);
return investment_stats__delegate(p__46989);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__46993){var vec__46995 = p__46993;var type_ids = cljs.core.nth.call(null,vec__46995,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__46993 = null;if (arguments.length > 0) {
  p__46993 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__46993);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__46996){
var p__46993 = cljs.core.seq(arglist__46996);
return investment_aggs__delegate(p__46993);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__46997){var vec__46999 = p__46997;var type_ids = cljs.core.nth.call(null,vec__46999,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__46997 = null;if (arguments.length > 0) {
  p__46997 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__46997);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__47000){
var p__46997 = cljs.core.seq(arglist__47000);
return investments__delegate(p__46997);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map