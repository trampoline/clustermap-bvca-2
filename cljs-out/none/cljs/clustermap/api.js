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
var AJAX__delegate = function (url,p__54901){var map__54905 = p__54901;var map__54905__$1 = ((cljs.core.seq_QMARK_.call(null,map__54905))?cljs.core.apply.call(null,cljs.core.hash_map,map__54905):map__54905);var opts = map__54905__$1;var content = cljs.core.get.call(null,map__54905__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__54905__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__54905__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__54905,map__54905__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__54905,map__54905__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__54905,map__54905__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__54905,map__54905__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__54907 = method;var G__54907__$1 = (((G__54907 == null))?null:cljs.core.name.call(null,G__54907));var G__54907__$2 = (((G__54907__$1 == null))?null:clojure.string.upper_case.call(null,G__54907__$1));return G__54907__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__54901 = null;if (arguments.length > 1) {
  p__54901 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__54901);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__54908){
var url = cljs.core.first(arglist__54908);
var p__54901 = cljs.core.rest(arglist__54908);
return AJAX__delegate(url,p__54901);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__54909){var map__54911 = p__54909;var map__54911__$1 = ((cljs.core.seq_QMARK_.call(null,map__54911))?cljs.core.apply.call(null,cljs.core.hash_map,map__54911):map__54911);var opts = map__54911__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__54909 = null;if (arguments.length > 1) {
  p__54909 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__54909);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__54912){
var url = cljs.core.first(arglist__54912);
var p__54909 = cljs.core.rest(arglist__54912);
return GET__delegate(url,p__54909);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__54913){var map__54915 = p__54913;var map__54915__$1 = ((cljs.core.seq_QMARK_.call(null,map__54915))?cljs.core.apply.call(null,cljs.core.hash_map,map__54915):map__54915);var opts = map__54915__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__54913 = null;if (arguments.length > 2) {
  p__54913 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__54913);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__54916){
var url = cljs.core.first(arglist__54916);
arglist__54916 = cljs.core.next(arglist__54916);
var content = cljs.core.first(arglist__54916);
var p__54913 = cljs.core.rest(arglist__54916);
return POST__delegate(url,content,p__54913);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__54917){var map__54919 = p__54917;var map__54919__$1 = ((cljs.core.seq_QMARK_.call(null,map__54919))?cljs.core.apply.call(null,cljs.core.hash_map,map__54919):map__54919);var opts = map__54919__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__54917 = null;if (arguments.length > 2) {
  p__54917 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__54917);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__54920){
var url = cljs.core.first(arglist__54920);
arglist__54920 = cljs.core.next(arglist__54920);
var content = cljs.core.first(arglist__54920);
var p__54917 = cljs.core.rest(arglist__54920);
return PUT__delegate(url,content,p__54917);
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
return (function (state_55055){var state_val_55056 = (state_55055[(1)]);if((state_val_55056 === (7)))
{var inst_55012 = (state_55055[(7)]);var inst_55011 = (state_55055[(2)]);var inst_55012__$1 = cljs.core.nth.call(null,inst_55011,(0),null);var inst_55013 = cljs.core.nth.call(null,inst_55011,(1),null);var inst_55014 = cljs.core.sequential_QMARK_.call(null,inst_55012__$1);var state_55055__$1 = (function (){var statearr_55057 = state_55055;(statearr_55057[(7)] = inst_55012__$1);
(statearr_55057[(8)] = inst_55013);
return statearr_55057;
})();if(inst_55014)
{var statearr_55058_55093 = state_55055__$1;(statearr_55058_55093[(1)] = (8));
} else
{var statearr_55059_55094 = state_55055__$1;(statearr_55059_55094[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (20)))
{var inst_55012 = (state_55055[(7)]);var state_55055__$1 = state_55055;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55055__$1,(23),inst_55012);
} else
{if((state_val_55056 === (1)))
{var state_55055__$1 = state_55055;var statearr_55060_55095 = state_55055__$1;(statearr_55060_55095[(2)] = null);
(statearr_55060_55095[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (4)))
{var state_55055__$1 = state_55055;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55055__$1,(7),ocomm);
} else
{if((state_val_55056 === (15)))
{var inst_55035 = (state_55055[(2)]);var state_55055__$1 = state_55055;var statearr_55061_55096 = state_55055__$1;(statearr_55061_55096[(2)] = inst_55035);
(statearr_55061_55096[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (21)))
{var state_55055__$1 = state_55055;var statearr_55062_55097 = state_55055__$1;(statearr_55062_55097[(2)] = null);
(statearr_55062_55097[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (13)))
{var inst_55018 = (state_55055[(9)]);var state_55055__$1 = state_55055;var statearr_55063_55098 = state_55055__$1;(statearr_55063_55098[(2)] = inst_55018);
(statearr_55063_55098[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (22)))
{var inst_55044 = (state_55055[(2)]);var state_55055__$1 = state_55055;var statearr_55064_55099 = state_55055__$1;(statearr_55064_55099[(2)] = inst_55044);
(statearr_55064_55099[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (6)))
{var inst_55051 = (state_55055[(2)]);var state_55055__$1 = state_55055;var statearr_55065_55100 = state_55055__$1;(statearr_55065_55100[(2)] = inst_55051);
(statearr_55065_55100[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (17)))
{var state_55055__$1 = state_55055;var statearr_55066_55101 = state_55055__$1;(statearr_55066_55101[(2)] = null);
(statearr_55066_55101[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (3)))
{var inst_55053 = (state_55055[(2)]);var state_55055__$1 = state_55055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55055__$1,inst_55053);
} else
{if((state_val_55056 === (12)))
{var inst_55037 = (state_55055[(2)]);var state_55055__$1 = state_55055;var statearr_55067_55102 = state_55055__$1;(statearr_55067_55102[(2)] = inst_55037);
(statearr_55067_55102[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (2)))
{var state_55055__$1 = state_55055;var statearr_55068_55103 = state_55055__$1;(statearr_55068_55103[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (23)))
{var inst_55041 = (state_55055[(2)]);var state_55055__$1 = state_55055;var statearr_55070_55104 = state_55055__$1;(statearr_55070_55104[(2)] = inst_55041);
(statearr_55070_55104[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (19)))
{var inst_55028 = (state_55055[(2)]);var state_55055__$1 = state_55055;var statearr_55071_55105 = state_55055__$1;(statearr_55071_55105[(2)] = inst_55028);
(statearr_55071_55105[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (11)))
{var inst_55017 = (state_55055[(10)]);var inst_55020 = cljs.core.empty_QMARK_.call(null,inst_55017);var state_55055__$1 = state_55055;if(inst_55020)
{var statearr_55072_55106 = state_55055__$1;(statearr_55072_55106[(1)] = (13));
} else
{var statearr_55073_55107 = state_55055__$1;(statearr_55073_55107[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (9)))
{var inst_55012 = (state_55055[(7)]);var state_55055__$1 = state_55055;if(cljs.core.truth_(inst_55012))
{var statearr_55074_55108 = state_55055__$1;(statearr_55074_55108[(1)] = (20));
} else
{var statearr_55075_55109 = state_55055__$1;(statearr_55075_55109[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (5)))
{var state_55055__$1 = state_55055;var statearr_55076_55110 = state_55055__$1;(statearr_55076_55110[(2)] = null);
(statearr_55076_55110[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (14)))
{var inst_55017 = (state_55055[(10)]);var inst_55023 = cljs.core.rest.call(null,inst_55017);var inst_55024 = cljs.core.first.call(null,inst_55017);var state_55055__$1 = (function (){var statearr_55077 = state_55055;(statearr_55077[(11)] = inst_55023);
return statearr_55077;
})();if(cljs.core.truth_(inst_55024))
{var statearr_55078_55111 = state_55055__$1;(statearr_55078_55111[(1)] = (16));
} else
{var statearr_55079_55112 = state_55055__$1;(statearr_55079_55112[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (16)))
{var inst_55017 = (state_55055[(10)]);var inst_55026 = cljs.core.first.call(null,inst_55017);var state_55055__$1 = state_55055;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55055__$1,(19),inst_55026);
} else
{if((state_val_55056 === (10)))
{var inst_55013 = (state_55055[(8)]);var inst_55046 = (state_55055[(2)]);var inst_55047 = cljs.core.apply.call(null,handler,inst_55046,inst_55013);var state_55055__$1 = (function (){var statearr_55080 = state_55055;(statearr_55080[(12)] = inst_55047);
return statearr_55080;
})();var statearr_55081_55113 = state_55055__$1;(statearr_55081_55113[(2)] = null);
(statearr_55081_55113[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (18)))
{var inst_55018 = (state_55055[(9)]);var inst_55023 = (state_55055[(11)]);var inst_55031 = (state_55055[(2)]);var inst_55032 = cljs.core.conj.call(null,inst_55018,inst_55031);var inst_55017 = inst_55023;var inst_55018__$1 = inst_55032;var state_55055__$1 = (function (){var statearr_55082 = state_55055;(statearr_55082[(10)] = inst_55017);
(statearr_55082[(9)] = inst_55018__$1);
return statearr_55082;
})();var statearr_55083_55114 = state_55055__$1;(statearr_55083_55114[(2)] = null);
(statearr_55083_55114[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55056 === (8)))
{var inst_55012 = (state_55055[(7)]);var inst_55016 = cljs.core.PersistentVector.EMPTY;var inst_55017 = inst_55012;var inst_55018 = inst_55016;var state_55055__$1 = (function (){var statearr_55084 = state_55055;(statearr_55084[(10)] = inst_55017);
(statearr_55084[(9)] = inst_55018);
return statearr_55084;
})();var statearr_55085_55115 = state_55055__$1;(statearr_55085_55115[(2)] = null);
(statearr_55085_55115[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_55089 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55089[(0)] = state_machine__5694__auto__);
(statearr_55089[(1)] = (1));
return statearr_55089;
});
var state_machine__5694__auto____1 = (function (state_55055){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55055);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55090){if((e55090 instanceof Object))
{var ex__5697__auto__ = e55090;var statearr_55091_55116 = state_55055;(statearr_55091_55116[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55055);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55090;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55117 = state_55055;
state_55055 = G__55117;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55055){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_55092 = f__5709__auto__.call(null);(statearr_55092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_55092;
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
var G__55120__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__55119 = rseq;var rcomm = cljs.core.nth.call(null,vec__55119,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__55119,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__55120 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__55120__delegate.call(this,req_args);};
G__55120.cljs$lang$maxFixedArity = 0;
G__55120.cljs$lang$applyTo = (function (arglist__55121){
var req_args = cljs.core.seq(arglist__55121);
return G__55120__delegate(req_args);
});
G__55120.cljs$core$IFn$_invoke$arity$variadic = G__55120__delegate;
return G__55120;
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
return (function (state_55139){var state_val_55140 = (state_55139[(1)]);if((state_val_55140 === (2)))
{var inst_55136 = (state_55139[(2)]);var inst_55137 = console.log(inst_55136);var state_55139__$1 = state_55139;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55139__$1,inst_55137);
} else
{if((state_val_55140 === (1)))
{var state_55139__$1 = state_55139;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55139__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55144 = [null,null,null,null,null,null,null];(statearr_55144[(0)] = state_machine__5694__auto__);
(statearr_55144[(1)] = (1));
return statearr_55144;
});
var state_machine__5694__auto____1 = (function (state_55139){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55139);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55145){if((e55145 instanceof Object))
{var ex__5697__auto__ = e55145;var statearr_55146_55148 = state_55139;(statearr_55146_55148[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55139);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55145;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55149 = state_55139;
state_55139 = G__55149;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55139){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_55147 = f__5709__auto__.call(null);(statearr_55147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_55147;
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
log_api.cljs$lang$applyTo = (function (arglist__55150){
var f = cljs.core.first(arglist__55150);
var args = cljs.core.rest(arglist__55150);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__55153){var vec__55154 = p__55153;var k = cljs.core.nth.call(null,vec__55154,(0),null);var v = cljs.core.nth.call(null,vec__55154,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___55181 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___55181,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___55181,r){
return (function (state_55172){var state_val_55173 = (state_55172[(1)]);if((state_val_55173 === (2)))
{var inst_55169 = (state_55172[(2)]);var inst_55170 = cljs.core.reset_BANG_.call(null,r,inst_55169);var state_55172__$1 = state_55172;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55172__$1,inst_55170);
} else
{if((state_val_55173 === (1)))
{var state_55172__$1 = state_55172;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55172__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___55181,r))
;return ((function (switch__5693__auto__,c__5708__auto___55181,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_55177 = [null,null,null,null,null,null,null];(statearr_55177[(0)] = state_machine__5694__auto__);
(statearr_55177[(1)] = (1));
return statearr_55177;
});
var state_machine__5694__auto____1 = (function (state_55172){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_55172);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e55178){if((e55178 instanceof Object))
{var ex__5697__auto__ = e55178;var statearr_55179_55182 = state_55172;(statearr_55179_55182[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55172);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55178;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55183 = state_55172;
state_55172 = G__55183;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_55172){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_55172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___55181,r))
})();var state__5710__auto__ = (function (){var statearr_55180 = f__5709__auto__.call(null);(statearr_55180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___55181);
return statearr_55180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___55181,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__55184){
var id = cljs.core.first(arglist__55184);
arglist__55184 = cljs.core.next(arglist__55184);
var tolerance = cljs.core.first(arglist__55184);
var opts = cljs.core.rest(arglist__55184);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__55185){
var id = cljs.core.first(arglist__55185);
var opts = cljs.core.rest(arglist__55185);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__55186){
var ids = cljs.core.first(arglist__55186);
arglist__55186 = cljs.core.next(arglist__55186);
var tolerance = cljs.core.first(arglist__55186);
var opts = cljs.core.rest(arglist__55186);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__55187){var map__55189 = p__55187;var map__55189__$1 = ((cljs.core.seq_QMARK_.call(null,map__55189))?cljs.core.apply.call(null,cljs.core.hash_map,map__55189):map__55189);var opts = map__55189__$1;var boundaryline_ids = cljs.core.get.call(null,map__55189__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__55187 = null;if (arguments.length > 3) {
  p__55187 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__55187);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__55190){
var collection_id = cljs.core.first(arglist__55190);
arglist__55190 = cljs.core.next(arglist__55190);
var tolerance = cljs.core.first(arglist__55190);
arglist__55190 = cljs.core.next(arglist__55190);
var bounds = cljs.core.first(arglist__55190);
var p__55187 = cljs.core.rest(arglist__55190);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__55187);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__55191){var vec__55193 = p__55191;var type_ids = cljs.core.nth.call(null,vec__55193,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__55191 = null;if (arguments.length > 6) {
  p__55191 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__55191);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__55194){
var index = cljs.core.first(arglist__55194);
arglist__55194 = cljs.core.next(arglist__55194);
var type = cljs.core.first(arglist__55194);
arglist__55194 = cljs.core.next(arglist__55194);
var blcoll = cljs.core.first(arglist__55194);
arglist__55194 = cljs.core.next(arglist__55194);
var attr = cljs.core.first(arglist__55194);
arglist__55194 = cljs.core.next(arglist__55194);
var filter = cljs.core.first(arglist__55194);
arglist__55194 = cljs.core.next(arglist__55194);
var bounds = cljs.core.first(arglist__55194);
var p__55191 = cljs.core.rest(arglist__55194);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__55191);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__55195){var vec__55197 = p__55195;var type_ids = cljs.core.nth.call(null,vec__55197,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__55195 = null;if (arguments.length > 5) {
  p__55195 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__55195);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__55198){
var index = cljs.core.first(arglist__55198);
arglist__55198 = cljs.core.next(arglist__55198);
var type = cljs.core.first(arglist__55198);
arglist__55198 = cljs.core.next(arglist__55198);
var statsattrs = cljs.core.first(arglist__55198);
arglist__55198 = cljs.core.next(arglist__55198);
var filter = cljs.core.first(arglist__55198);
arglist__55198 = cljs.core.next(arglist__55198);
var bounds = cljs.core.first(arglist__55198);
var p__55195 = cljs.core.rest(arglist__55198);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__55195);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__55199){var vec__55201 = p__55199;var type_ids = cljs.core.nth.call(null,vec__55201,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__55199 = null;if (arguments.length > 7) {
  p__55199 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__55199);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__55202){
var index = cljs.core.first(arglist__55202);
arglist__55202 = cljs.core.next(arglist__55202);
var type = cljs.core.first(arglist__55202);
arglist__55202 = cljs.core.next(arglist__55202);
var location_attr = cljs.core.first(arglist__55202);
arglist__55202 = cljs.core.next(arglist__55202);
var attrs = cljs.core.first(arglist__55202);
arglist__55202 = cljs.core.next(arglist__55202);
var max_count = cljs.core.first(arglist__55202);
arglist__55202 = cljs.core.next(arglist__55202);
var filter = cljs.core.first(arglist__55202);
arglist__55202 = cljs.core.next(arglist__55202);
var bounds = cljs.core.first(arglist__55202);
var p__55199 = cljs.core.rest(arglist__55202);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__55199);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__55203){var vec__55205 = p__55203;var type_ids = cljs.core.nth.call(null,vec__55205,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__55203 = null;if (arguments.length > 7) {
  p__55203 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__55203);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__55206){
var index = cljs.core.first(arglist__55206);
arglist__55206 = cljs.core.next(arglist__55206);
var type = cljs.core.first(arglist__55206);
arglist__55206 = cljs.core.next(arglist__55206);
var filter_spec = cljs.core.first(arglist__55206);
arglist__55206 = cljs.core.next(arglist__55206);
var bounds = cljs.core.first(arglist__55206);
arglist__55206 = cljs.core.next(arglist__55206);
var sort_spec = cljs.core.first(arglist__55206);
arglist__55206 = cljs.core.next(arglist__55206);
var from = cljs.core.first(arglist__55206);
arglist__55206 = cljs.core.next(arglist__55206);
var size = cljs.core.first(arglist__55206);
var p__55203 = cljs.core.rest(arglist__55206);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__55203);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),time_variable,new cljs.core.Keyword(null,"after","after",594996914),after,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"interval","interval",1708495417),interval,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),metric_variables], null));
});

//# sourceMappingURL=api.js.map