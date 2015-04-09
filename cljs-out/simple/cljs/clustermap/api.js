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
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__9113){var map__9115 = p__9113;var map__9115__$1 = ((cljs.core.seq_QMARK_.call(null,map__9115))?cljs.core.apply.call(null,cljs.core.hash_map,map__9115):map__9115);var raw = cljs.core.get.call(null,map__9115__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__9115,map__9115__$1,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__9115,map__9115__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__9115,map__9115__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__9115,map__9115__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__9113 = null;if (arguments.length > 1) {
  p__9113 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__9113);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__9116){
var url = cljs.core.first(arglist__9116);
var p__9113 = cljs.core.rest(arglist__9116);
return GET__delegate(url,p__9113);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5813__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto__){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto__){
return (function (state_9251){var state_val_9252 = (state_9251[(1)]);if((state_val_9252 === (7)))
{var inst_9208 = (state_9251[(7)]);var inst_9207 = (state_9251[(2)]);var inst_9208__$1 = cljs.core.nth.call(null,inst_9207,(0),null);var inst_9209 = cljs.core.nth.call(null,inst_9207,(1),null);var inst_9210 = cljs.core.sequential_QMARK_.call(null,inst_9208__$1);var state_9251__$1 = (function (){var statearr_9253 = state_9251;(statearr_9253[(8)] = inst_9209);
(statearr_9253[(7)] = inst_9208__$1);
return statearr_9253;
})();if(inst_9210)
{var statearr_9254_9289 = state_9251__$1;(statearr_9254_9289[(1)] = (8));
} else
{var statearr_9255_9290 = state_9251__$1;(statearr_9255_9290[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (20)))
{var inst_9208 = (state_9251[(7)]);var state_9251__$1 = state_9251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9251__$1,(23),inst_9208);
} else
{if((state_val_9252 === (1)))
{var state_9251__$1 = state_9251;var statearr_9256_9291 = state_9251__$1;(statearr_9256_9291[(2)] = null);
(statearr_9256_9291[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (4)))
{var state_9251__$1 = state_9251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9251__$1,(7),ocomm);
} else
{if((state_val_9252 === (15)))
{var inst_9231 = (state_9251[(2)]);var state_9251__$1 = state_9251;var statearr_9257_9292 = state_9251__$1;(statearr_9257_9292[(2)] = inst_9231);
(statearr_9257_9292[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (21)))
{var state_9251__$1 = state_9251;var statearr_9258_9293 = state_9251__$1;(statearr_9258_9293[(2)] = null);
(statearr_9258_9293[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (13)))
{var inst_9214 = (state_9251[(9)]);var state_9251__$1 = state_9251;var statearr_9259_9294 = state_9251__$1;(statearr_9259_9294[(2)] = inst_9214);
(statearr_9259_9294[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (22)))
{var inst_9240 = (state_9251[(2)]);var state_9251__$1 = state_9251;var statearr_9260_9295 = state_9251__$1;(statearr_9260_9295[(2)] = inst_9240);
(statearr_9260_9295[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (6)))
{var inst_9247 = (state_9251[(2)]);var state_9251__$1 = state_9251;var statearr_9261_9296 = state_9251__$1;(statearr_9261_9296[(2)] = inst_9247);
(statearr_9261_9296[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (17)))
{var state_9251__$1 = state_9251;var statearr_9262_9297 = state_9251__$1;(statearr_9262_9297[(2)] = null);
(statearr_9262_9297[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (3)))
{var inst_9249 = (state_9251[(2)]);var state_9251__$1 = state_9251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9251__$1,inst_9249);
} else
{if((state_val_9252 === (12)))
{var inst_9233 = (state_9251[(2)]);var state_9251__$1 = state_9251;var statearr_9263_9298 = state_9251__$1;(statearr_9263_9298[(2)] = inst_9233);
(statearr_9263_9298[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (2)))
{var state_9251__$1 = state_9251;var statearr_9264_9299 = state_9251__$1;(statearr_9264_9299[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (23)))
{var inst_9237 = (state_9251[(2)]);var state_9251__$1 = state_9251;var statearr_9266_9300 = state_9251__$1;(statearr_9266_9300[(2)] = inst_9237);
(statearr_9266_9300[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (19)))
{var inst_9224 = (state_9251[(2)]);var state_9251__$1 = state_9251;var statearr_9267_9301 = state_9251__$1;(statearr_9267_9301[(2)] = inst_9224);
(statearr_9267_9301[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (11)))
{var inst_9213 = (state_9251[(10)]);var inst_9216 = cljs.core.empty_QMARK_.call(null,inst_9213);var state_9251__$1 = state_9251;if(inst_9216)
{var statearr_9268_9302 = state_9251__$1;(statearr_9268_9302[(1)] = (13));
} else
{var statearr_9269_9303 = state_9251__$1;(statearr_9269_9303[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (9)))
{var inst_9208 = (state_9251[(7)]);var state_9251__$1 = state_9251;if(cljs.core.truth_(inst_9208))
{var statearr_9270_9304 = state_9251__$1;(statearr_9270_9304[(1)] = (20));
} else
{var statearr_9271_9305 = state_9251__$1;(statearr_9271_9305[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (5)))
{var state_9251__$1 = state_9251;var statearr_9272_9306 = state_9251__$1;(statearr_9272_9306[(2)] = null);
(statearr_9272_9306[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (14)))
{var inst_9213 = (state_9251[(10)]);var inst_9219 = cljs.core.rest.call(null,inst_9213);var inst_9220 = cljs.core.first.call(null,inst_9213);var state_9251__$1 = (function (){var statearr_9273 = state_9251;(statearr_9273[(11)] = inst_9219);
return statearr_9273;
})();if(cljs.core.truth_(inst_9220))
{var statearr_9274_9307 = state_9251__$1;(statearr_9274_9307[(1)] = (16));
} else
{var statearr_9275_9308 = state_9251__$1;(statearr_9275_9308[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (16)))
{var inst_9213 = (state_9251[(10)]);var inst_9222 = cljs.core.first.call(null,inst_9213);var state_9251__$1 = state_9251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9251__$1,(19),inst_9222);
} else
{if((state_val_9252 === (10)))
{var inst_9209 = (state_9251[(8)]);var inst_9242 = (state_9251[(2)]);var inst_9243 = cljs.core.apply.call(null,handler,inst_9242,inst_9209);var state_9251__$1 = (function (){var statearr_9276 = state_9251;(statearr_9276[(12)] = inst_9243);
return statearr_9276;
})();var statearr_9277_9309 = state_9251__$1;(statearr_9277_9309[(2)] = null);
(statearr_9277_9309[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (18)))
{var inst_9214 = (state_9251[(9)]);var inst_9219 = (state_9251[(11)]);var inst_9227 = (state_9251[(2)]);var inst_9228 = cljs.core.conj.call(null,inst_9214,inst_9227);var inst_9213 = inst_9219;var inst_9214__$1 = inst_9228;var state_9251__$1 = (function (){var statearr_9278 = state_9251;(statearr_9278[(9)] = inst_9214__$1);
(statearr_9278[(10)] = inst_9213);
return statearr_9278;
})();var statearr_9279_9310 = state_9251__$1;(statearr_9279_9310[(2)] = null);
(statearr_9279_9310[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9252 === (8)))
{var inst_9208 = (state_9251[(7)]);var inst_9212 = cljs.core.PersistentVector.EMPTY;var inst_9213 = inst_9208;var inst_9214 = inst_9212;var state_9251__$1 = (function (){var statearr_9280 = state_9251;(statearr_9280[(9)] = inst_9214);
(statearr_9280[(10)] = inst_9213);
return statearr_9280;
})();var statearr_9281_9311 = state_9251__$1;(statearr_9281_9311[(2)] = null);
(statearr_9281_9311[(1)] = (11));
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
});})(c__5813__auto__))
;return ((function (switch__5798__auto__,c__5813__auto__){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_9285 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9285[(0)] = state_machine__5799__auto__);
(statearr_9285[(1)] = (1));
return statearr_9285;
});
var state_machine__5799__auto____1 = (function (state_9251){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_9251);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e9286){if((e9286 instanceof Object))
{var ex__5802__auto__ = e9286;var statearr_9287_9312 = state_9251;(statearr_9287_9312[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9251);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9286;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9313 = state_9251;
state_9251 = G__9313;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_9251){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_9251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto__))
})();var state__5815__auto__ = (function (){var statearr_9288 = f__5814__auto__.call(null);(statearr_9288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto__);
return statearr_9288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto__))
);
return c__5813__auto__;
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
var G__9316__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__9315 = rseq;var rcomm = cljs.core.nth.call(null,vec__9315,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__9315,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__9316 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9316__delegate.call(this,req_args);};
G__9316.cljs$lang$maxFixedArity = 0;
G__9316.cljs$lang$applyTo = (function (arglist__9317){
var req_args = cljs.core.seq(arglist__9317);
return G__9316__delegate(req_args);
});
G__9316.cljs$core$IFn$_invoke$arity$variadic = G__9316__delegate;
return G__9316;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5813__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto__,ch){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto__,ch){
return (function (state_9335){var state_val_9336 = (state_9335[(1)]);if((state_val_9336 === (2)))
{var inst_9332 = (state_9335[(2)]);var inst_9333 = console.log(inst_9332);var state_9335__$1 = state_9335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9335__$1,inst_9333);
} else
{if((state_val_9336 === (1)))
{var state_9335__$1 = state_9335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9335__$1,(2),ch);
} else
{return null;
}
}
});})(c__5813__auto__,ch))
;return ((function (switch__5798__auto__,c__5813__auto__,ch){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_9340 = [null,null,null,null,null,null,null];(statearr_9340[(0)] = state_machine__5799__auto__);
(statearr_9340[(1)] = (1));
return statearr_9340;
});
var state_machine__5799__auto____1 = (function (state_9335){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_9335);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e9341){if((e9341 instanceof Object))
{var ex__5802__auto__ = e9341;var statearr_9342_9344 = state_9335;(statearr_9342_9344[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9335);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9341;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9345 = state_9335;
state_9335 = G__9345;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_9335){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_9335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto__,ch))
})();var state__5815__auto__ = (function (){var statearr_9343 = f__5814__auto__.call(null);(statearr_9343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto__);
return statearr_9343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto__,ch))
);
return c__5813__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__9346){
var f = cljs.core.first(arglist__9346);
var args = cljs.core.rest(arglist__9346);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__9349){var vec__9350 = p__9349;var k = cljs.core.nth.call(null,vec__9350,(0),null);var v = cljs.core.nth.call(null,vec__9350,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
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
boundarylines.cljs$lang$applyTo = (function (arglist__9351){
var id = cljs.core.first(arglist__9351);
arglist__9351 = cljs.core.next(arglist__9351);
var tolerance = cljs.core.first(arglist__9351);
var opts = cljs.core.rest(arglist__9351);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__9352){
var id = cljs.core.first(arglist__9352);
var opts = cljs.core.rest(arglist__9352);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
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
var portfolio_company_sites__delegate = function (p__9353){var vec__9355 = p__9353;var type_ids = cljs.core.nth.call(null,vec__9355,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__9353 = null;if (arguments.length > 0) {
  p__9353 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__9353);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__9356){
var p__9353 = cljs.core.seq(arglist__9356);
return portfolio_company_sites__delegate(p__9353);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__9357){var vec__9359 = p__9357;var type_ids = cljs.core.nth.call(null,vec__9359,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__9357 = null;if (arguments.length > 0) {
  p__9357 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__9357);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__9360){
var p__9357 = cljs.core.seq(arglist__9360);
return portfolio_company_sites_by_company__delegate(p__9357);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__9361){var vec__9363 = p__9361;var type_ids = cljs.core.nth.call(null,vec__9363,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__9361 = null;if (arguments.length > 0) {
  p__9361 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__9361);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__9364){
var p__9361 = cljs.core.seq(arglist__9364);
return portfolio_company_locations__delegate(p__9361);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__9365){var vec__9367 = p__9365;var type_ids = cljs.core.nth.call(null,vec__9367,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__9365 = null;if (arguments.length > 0) {
  p__9365 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__9365);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__9368){
var p__9365 = cljs.core.seq(arglist__9368);
return portfolio_company_site_stats__delegate(p__9365);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__9369){var vec__9371 = p__9369;var type_ids = cljs.core.nth.call(null,vec__9371,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__9369 = null;if (arguments.length > 0) {
  p__9369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__9369);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__9372){
var p__9369 = cljs.core.seq(arglist__9372);
return portfolio_company_site_account_timelines__delegate(p__9369);
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
var investment_account_timelines__delegate = function (p__9373){var vec__9375 = p__9373;var type_ids = cljs.core.nth.call(null,vec__9375,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__9373 = null;if (arguments.length > 0) {
  p__9373 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__9373);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__9376){
var p__9373 = cljs.core.seq(arglist__9376);
return investment_account_timelines__delegate(p__9373);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__9377){var vec__9379 = p__9377;var type_ids = cljs.core.nth.call(null,vec__9379,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__9377 = null;if (arguments.length > 0) {
  p__9377 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__9377);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__9380){
var p__9377 = cljs.core.seq(arglist__9380);
return investment_stats__delegate(p__9377);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__9381){var vec__9383 = p__9381;var type_ids = cljs.core.nth.call(null,vec__9383,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__9381 = null;if (arguments.length > 0) {
  p__9381 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__9381);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__9384){
var p__9381 = cljs.core.seq(arglist__9384);
return investment_aggs__delegate(p__9381);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__9385){var vec__9387 = p__9385;var type_ids = cljs.core.nth.call(null,vec__9387,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__9385 = null;if (arguments.length > 0) {
  p__9385 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__9385);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__9388){
var p__9385 = cljs.core.seq(arglist__9388);
return investments__delegate(p__9385);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
