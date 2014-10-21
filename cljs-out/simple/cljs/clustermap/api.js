// Compiled by ClojureScript 0.0-2356
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
var AJAX__delegate = function (url,p__28737){var map__28741 = p__28737;var map__28741__$1 = ((cljs.core.seq_QMARK_.call(null,map__28741))?cljs.core.apply.call(null,cljs.core.hash_map,map__28741):map__28741);var opts = map__28741__$1;var content = cljs.core.get.call(null,map__28741__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__28741__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__28741__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__28741,map__28741__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__28741,map__28741__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__28741,map__28741__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__28741,map__28741__$1,opts,content,method,raw))
,(function (){var or__3637__auto__ = (function (){var G__28743 = method;var G__28743__$1 = (((G__28743 == null))?null:cljs.core.name.call(null,G__28743));var G__28743__$2 = (((G__28743__$1 == null))?null:clojure.string.upper_case.call(null,G__28743__$1));return G__28743__$2;
})();if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__28737 = null;if (arguments.length > 1) {
  p__28737 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__28737);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__28744){
var url = cljs.core.first(arglist__28744);
var p__28737 = cljs.core.rest(arglist__28744);
return AJAX__delegate(url,p__28737);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__28745){var map__28747 = p__28745;var map__28747__$1 = ((cljs.core.seq_QMARK_.call(null,map__28747))?cljs.core.apply.call(null,cljs.core.hash_map,map__28747):map__28747);var opts = map__28747__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__28745 = null;if (arguments.length > 1) {
  p__28745 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__28745);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__28748){
var url = cljs.core.first(arglist__28748);
var p__28745 = cljs.core.rest(arglist__28748);
return GET__delegate(url,p__28745);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__28749){var map__28751 = p__28749;var map__28751__$1 = ((cljs.core.seq_QMARK_.call(null,map__28751))?cljs.core.apply.call(null,cljs.core.hash_map,map__28751):map__28751);var opts = map__28751__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__28749 = null;if (arguments.length > 2) {
  p__28749 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__28749);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__28752){
var url = cljs.core.first(arglist__28752);
arglist__28752 = cljs.core.next(arglist__28752);
var content = cljs.core.first(arglist__28752);
var p__28749 = cljs.core.rest(arglist__28752);
return POST__delegate(url,content,p__28749);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__28753){var map__28755 = p__28753;var map__28755__$1 = ((cljs.core.seq_QMARK_.call(null,map__28755))?cljs.core.apply.call(null,cljs.core.hash_map,map__28755):map__28755);var opts = map__28755__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__28753 = null;if (arguments.length > 2) {
  p__28753 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__28753);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__28756){
var url = cljs.core.first(arglist__28756);
arglist__28756 = cljs.core.next(arglist__28756);
var content = cljs.core.first(arglist__28756);
var p__28753 = cljs.core.rest(arglist__28756);
return PUT__delegate(url,content,p__28753);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_28891){var state_val_28892 = (state_28891[(1)]);if((state_val_28892 === (7)))
{var inst_28848 = (state_28891[(7)]);var inst_28847 = (state_28891[(2)]);var inst_28848__$1 = cljs.core.nth.call(null,inst_28847,(0),null);var inst_28849 = cljs.core.nth.call(null,inst_28847,(1),null);var inst_28850 = cljs.core.sequential_QMARK_.call(null,inst_28848__$1);var state_28891__$1 = (function (){var statearr_28893 = state_28891;(statearr_28893[(8)] = inst_28849);
(statearr_28893[(7)] = inst_28848__$1);
return statearr_28893;
})();if(inst_28850)
{var statearr_28894_28929 = state_28891__$1;(statearr_28894_28929[(1)] = (8));
} else
{var statearr_28895_28930 = state_28891__$1;(statearr_28895_28930[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (20)))
{var inst_28848 = (state_28891[(7)]);var state_28891__$1 = state_28891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(23),inst_28848);
} else
{if((state_val_28892 === (1)))
{var state_28891__$1 = state_28891;var statearr_28896_28931 = state_28891__$1;(statearr_28896_28931[(2)] = null);
(statearr_28896_28931[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (4)))
{var state_28891__$1 = state_28891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(7),ocomm);
} else
{if((state_val_28892 === (15)))
{var inst_28871 = (state_28891[(2)]);var state_28891__$1 = state_28891;var statearr_28897_28932 = state_28891__$1;(statearr_28897_28932[(2)] = inst_28871);
(statearr_28897_28932[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (21)))
{var state_28891__$1 = state_28891;var statearr_28898_28933 = state_28891__$1;(statearr_28898_28933[(2)] = null);
(statearr_28898_28933[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (13)))
{var inst_28854 = (state_28891[(9)]);var state_28891__$1 = state_28891;var statearr_28899_28934 = state_28891__$1;(statearr_28899_28934[(2)] = inst_28854);
(statearr_28899_28934[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (22)))
{var inst_28880 = (state_28891[(2)]);var state_28891__$1 = state_28891;var statearr_28900_28935 = state_28891__$1;(statearr_28900_28935[(2)] = inst_28880);
(statearr_28900_28935[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (6)))
{var inst_28887 = (state_28891[(2)]);var state_28891__$1 = state_28891;var statearr_28901_28936 = state_28891__$1;(statearr_28901_28936[(2)] = inst_28887);
(statearr_28901_28936[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (17)))
{var state_28891__$1 = state_28891;var statearr_28902_28937 = state_28891__$1;(statearr_28902_28937[(2)] = null);
(statearr_28902_28937[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (3)))
{var inst_28889 = (state_28891[(2)]);var state_28891__$1 = state_28891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28891__$1,inst_28889);
} else
{if((state_val_28892 === (12)))
{var inst_28873 = (state_28891[(2)]);var state_28891__$1 = state_28891;var statearr_28903_28938 = state_28891__$1;(statearr_28903_28938[(2)] = inst_28873);
(statearr_28903_28938[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (2)))
{var state_28891__$1 = state_28891;var statearr_28904_28939 = state_28891__$1;(statearr_28904_28939[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (23)))
{var inst_28877 = (state_28891[(2)]);var state_28891__$1 = state_28891;var statearr_28906_28940 = state_28891__$1;(statearr_28906_28940[(2)] = inst_28877);
(statearr_28906_28940[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (19)))
{var inst_28864 = (state_28891[(2)]);var state_28891__$1 = state_28891;var statearr_28907_28941 = state_28891__$1;(statearr_28907_28941[(2)] = inst_28864);
(statearr_28907_28941[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (11)))
{var inst_28853 = (state_28891[(10)]);var inst_28856 = cljs.core.empty_QMARK_.call(null,inst_28853);var state_28891__$1 = state_28891;if(inst_28856)
{var statearr_28908_28942 = state_28891__$1;(statearr_28908_28942[(1)] = (13));
} else
{var statearr_28909_28943 = state_28891__$1;(statearr_28909_28943[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (9)))
{var inst_28848 = (state_28891[(7)]);var state_28891__$1 = state_28891;if(cljs.core.truth_(inst_28848))
{var statearr_28910_28944 = state_28891__$1;(statearr_28910_28944[(1)] = (20));
} else
{var statearr_28911_28945 = state_28891__$1;(statearr_28911_28945[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (5)))
{var state_28891__$1 = state_28891;var statearr_28912_28946 = state_28891__$1;(statearr_28912_28946[(2)] = null);
(statearr_28912_28946[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (14)))
{var inst_28853 = (state_28891[(10)]);var inst_28859 = cljs.core.rest.call(null,inst_28853);var inst_28860 = cljs.core.first.call(null,inst_28853);var state_28891__$1 = (function (){var statearr_28913 = state_28891;(statearr_28913[(11)] = inst_28859);
return statearr_28913;
})();if(cljs.core.truth_(inst_28860))
{var statearr_28914_28947 = state_28891__$1;(statearr_28914_28947[(1)] = (16));
} else
{var statearr_28915_28948 = state_28891__$1;(statearr_28915_28948[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (16)))
{var inst_28853 = (state_28891[(10)]);var inst_28862 = cljs.core.first.call(null,inst_28853);var state_28891__$1 = state_28891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(19),inst_28862);
} else
{if((state_val_28892 === (10)))
{var inst_28849 = (state_28891[(8)]);var inst_28882 = (state_28891[(2)]);var inst_28883 = cljs.core.apply.call(null,handler,inst_28882,inst_28849);var state_28891__$1 = (function (){var statearr_28916 = state_28891;(statearr_28916[(12)] = inst_28883);
return statearr_28916;
})();var statearr_28917_28949 = state_28891__$1;(statearr_28917_28949[(2)] = null);
(statearr_28917_28949[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (18)))
{var inst_28854 = (state_28891[(9)]);var inst_28859 = (state_28891[(11)]);var inst_28867 = (state_28891[(2)]);var inst_28868 = cljs.core.conj.call(null,inst_28854,inst_28867);var inst_28853 = inst_28859;var inst_28854__$1 = inst_28868;var state_28891__$1 = (function (){var statearr_28918 = state_28891;(statearr_28918[(9)] = inst_28854__$1);
(statearr_28918[(10)] = inst_28853);
return statearr_28918;
})();var statearr_28919_28950 = state_28891__$1;(statearr_28919_28950[(2)] = null);
(statearr_28919_28950[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28892 === (8)))
{var inst_28848 = (state_28891[(7)]);var inst_28852 = cljs.core.PersistentVector.EMPTY;var inst_28853 = inst_28848;var inst_28854 = inst_28852;var state_28891__$1 = (function (){var statearr_28920 = state_28891;(statearr_28920[(9)] = inst_28854);
(statearr_28920[(10)] = inst_28853);
return statearr_28920;
})();var statearr_28921_28951 = state_28891__$1;(statearr_28921_28951[(2)] = null);
(statearr_28921_28951[(1)] = (11));
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
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_28925 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28925[(0)] = state_machine__5805__auto__);
(statearr_28925[(1)] = (1));
return statearr_28925;
});
var state_machine__5805__auto____1 = (function (state_28891){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_28891);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e28926){if((e28926 instanceof Object))
{var ex__5808__auto__ = e28926;var statearr_28927_28952 = state_28891;(statearr_28927_28952[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28891);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28926;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28953 = state_28891;
state_28891 = G__28953;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_28891){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_28891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_28928 = f__5820__auto__.call(null);(statearr_28928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_28928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
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
var G__28956__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__28955 = rseq;var rcomm = cljs.core.nth.call(null,vec__28955,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__28955,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__28956 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28956__delegate.call(this,req_args);};
G__28956.cljs$lang$maxFixedArity = 0;
G__28956.cljs$lang$applyTo = (function (arglist__28957){
var req_args = cljs.core.seq(arglist__28957);
return G__28956__delegate(req_args);
});
G__28956.cljs$core$IFn$_invoke$arity$variadic = G__28956__delegate;
return G__28956;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,ch){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,ch){
return (function (state_28975){var state_val_28976 = (state_28975[(1)]);if((state_val_28976 === (2)))
{var inst_28972 = (state_28975[(2)]);var inst_28973 = console.log(inst_28972);var state_28975__$1 = state_28975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28975__$1,inst_28973);
} else
{if((state_val_28976 === (1)))
{var state_28975__$1 = state_28975;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28975__$1,(2),ch);
} else
{return null;
}
}
});})(c__5819__auto__,ch))
;return ((function (switch__5804__auto__,c__5819__auto__,ch){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_28980 = [null,null,null,null,null,null,null];(statearr_28980[(0)] = state_machine__5805__auto__);
(statearr_28980[(1)] = (1));
return statearr_28980;
});
var state_machine__5805__auto____1 = (function (state_28975){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_28975);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e28981){if((e28981 instanceof Object))
{var ex__5808__auto__ = e28981;var statearr_28982_28984 = state_28975;(statearr_28982_28984[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28975);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28981;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28985 = state_28975;
state_28975 = G__28985;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_28975){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_28975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,ch))
})();var state__5821__auto__ = (function (){var statearr_28983 = f__5820__auto__.call(null);(statearr_28983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_28983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,ch))
);
return c__5819__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__28986){
var f = cljs.core.first(arglist__28986);
var args = cljs.core.rest(arglist__28986);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__28989){var vec__28990 = p__28989;var k = cljs.core.nth.call(null,vec__28990,(0),null);var v = cljs.core.nth.call(null,vec__28990,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5819__auto___29017 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___29017,r){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___29017,r){
return (function (state_29008){var state_val_29009 = (state_29008[(1)]);if((state_val_29009 === (2)))
{var inst_29005 = (state_29008[(2)]);var inst_29006 = cljs.core.reset_BANG_.call(null,r,inst_29005);var state_29008__$1 = state_29008;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29008__$1,inst_29006);
} else
{if((state_val_29009 === (1)))
{var state_29008__$1 = state_29008;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29008__$1,(2),comm);
} else
{return null;
}
}
});})(c__5819__auto___29017,r))
;return ((function (switch__5804__auto__,c__5819__auto___29017,r){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_29013 = [null,null,null,null,null,null,null];(statearr_29013[(0)] = state_machine__5805__auto__);
(statearr_29013[(1)] = (1));
return statearr_29013;
});
var state_machine__5805__auto____1 = (function (state_29008){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_29008);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e29014){if((e29014 instanceof Object))
{var ex__5808__auto__ = e29014;var statearr_29015_29018 = state_29008;(statearr_29015_29018[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29008);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29014;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29019 = state_29008;
state_29008 = G__29019;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_29008){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_29008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___29017,r))
})();var state__5821__auto__ = (function (){var statearr_29016 = f__5820__auto__.call(null);(statearr_29016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___29017);
return statearr_29016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___29017,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__29020){
var id = cljs.core.first(arglist__29020);
arglist__29020 = cljs.core.next(arglist__29020);
var tolerance = cljs.core.first(arglist__29020);
var opts = cljs.core.rest(arglist__29020);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__29021){
var id = cljs.core.first(arglist__29021);
var opts = cljs.core.rest(arglist__29021);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__29022){
var ids = cljs.core.first(arglist__29022);
arglist__29022 = cljs.core.next(arglist__29022);
var tolerance = cljs.core.first(arglist__29022);
var opts = cljs.core.rest(arglist__29022);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__29023){var map__29025 = p__29023;var map__29025__$1 = ((cljs.core.seq_QMARK_.call(null,map__29025))?cljs.core.apply.call(null,cljs.core.hash_map,map__29025):map__29025);var opts = map__29025__$1;var boundaryline_ids = cljs.core.get.call(null,map__29025__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__29023 = null;if (arguments.length > 3) {
  p__29023 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__29023);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__29026){
var collection_id = cljs.core.first(arglist__29026);
arglist__29026 = cljs.core.next(arglist__29026);
var tolerance = cljs.core.first(arglist__29026);
arglist__29026 = cljs.core.next(arglist__29026);
var bounds = cljs.core.first(arglist__29026);
var p__29023 = cljs.core.rest(arglist__29026);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__29023);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__29027){var vec__29029 = p__29027;var type_ids = cljs.core.nth.call(null,vec__29029,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__29027 = null;if (arguments.length > 6) {
  p__29027 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__29027);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__29030){
var index = cljs.core.first(arglist__29030);
arglist__29030 = cljs.core.next(arglist__29030);
var type = cljs.core.first(arglist__29030);
arglist__29030 = cljs.core.next(arglist__29030);
var blcoll = cljs.core.first(arglist__29030);
arglist__29030 = cljs.core.next(arglist__29030);
var attr = cljs.core.first(arglist__29030);
arglist__29030 = cljs.core.next(arglist__29030);
var filter = cljs.core.first(arglist__29030);
arglist__29030 = cljs.core.next(arglist__29030);
var bounds = cljs.core.first(arglist__29030);
var p__29027 = cljs.core.rest(arglist__29030);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__29027);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__29031){var vec__29033 = p__29031;var type_ids = cljs.core.nth.call(null,vec__29033,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__29031 = null;if (arguments.length > 5) {
  p__29031 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__29031);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__29034){
var index = cljs.core.first(arglist__29034);
arglist__29034 = cljs.core.next(arglist__29034);
var type = cljs.core.first(arglist__29034);
arglist__29034 = cljs.core.next(arglist__29034);
var statsattrs = cljs.core.first(arglist__29034);
arglist__29034 = cljs.core.next(arglist__29034);
var filter = cljs.core.first(arglist__29034);
arglist__29034 = cljs.core.next(arglist__29034);
var bounds = cljs.core.first(arglist__29034);
var p__29031 = cljs.core.rest(arglist__29034);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__29031);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__29035){var vec__29037 = p__29035;var type_ids = cljs.core.nth.call(null,vec__29037,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__29035 = null;if (arguments.length > 7) {
  p__29035 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__29035);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__29038){
var index = cljs.core.first(arglist__29038);
arglist__29038 = cljs.core.next(arglist__29038);
var type = cljs.core.first(arglist__29038);
arglist__29038 = cljs.core.next(arglist__29038);
var location_attr = cljs.core.first(arglist__29038);
arglist__29038 = cljs.core.next(arglist__29038);
var attrs = cljs.core.first(arglist__29038);
arglist__29038 = cljs.core.next(arglist__29038);
var max_count = cljs.core.first(arglist__29038);
arglist__29038 = cljs.core.next(arglist__29038);
var filter = cljs.core.first(arglist__29038);
arglist__29038 = cljs.core.next(arglist__29038);
var bounds = cljs.core.first(arglist__29038);
var p__29035 = cljs.core.rest(arglist__29038);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__29035);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__29039){var vec__29041 = p__29039;var type_ids = cljs.core.nth.call(null,vec__29041,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__29039 = null;if (arguments.length > 7) {
  p__29039 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__29039);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__29042){
var index = cljs.core.first(arglist__29042);
arglist__29042 = cljs.core.next(arglist__29042);
var type = cljs.core.first(arglist__29042);
arglist__29042 = cljs.core.next(arglist__29042);
var filter_spec = cljs.core.first(arglist__29042);
arglist__29042 = cljs.core.next(arglist__29042);
var bounds = cljs.core.first(arglist__29042);
arglist__29042 = cljs.core.next(arglist__29042);
var sort_spec = cljs.core.first(arglist__29042);
arglist__29042 = cljs.core.next(arglist__29042);
var from = cljs.core.first(arglist__29042);
arglist__29042 = cljs.core.next(arglist__29042);
var size = cljs.core.first(arglist__29042);
var p__29039 = cljs.core.rest(arglist__29042);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__29039);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),time_variable,new cljs.core.Keyword(null,"after","after",594996914),after,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"interval","interval",1708495417),interval,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),metric_variables], null));
});
