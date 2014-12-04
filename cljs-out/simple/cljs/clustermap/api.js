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
var GET__delegate = function (url,p__9121){var map__9123 = p__9121;var map__9123__$1 = ((cljs.core.seq_QMARK_.call(null,map__9123))?cljs.core.apply.call(null,cljs.core.hash_map,map__9123):map__9123);var raw = cljs.core.get.call(null,map__9123__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__9123,map__9123__$1,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__9123,map__9123__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__9123,map__9123__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__9123,map__9123__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__9121 = null;if (arguments.length > 1) {
  p__9121 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__9121);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__9124){
var url = cljs.core.first(arglist__9124);
var p__9121 = cljs.core.rest(arglist__9124);
return GET__delegate(url,p__9121);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__){
return (function (state_9259){var state_val_9260 = (state_9259[(1)]);if((state_val_9260 === (7)))
{var inst_9216 = (state_9259[(7)]);var inst_9215 = (state_9259[(2)]);var inst_9216__$1 = cljs.core.nth.call(null,inst_9215,(0),null);var inst_9217 = cljs.core.nth.call(null,inst_9215,(1),null);var inst_9218 = cljs.core.sequential_QMARK_.call(null,inst_9216__$1);var state_9259__$1 = (function (){var statearr_9261 = state_9259;(statearr_9261[(8)] = inst_9217);
(statearr_9261[(7)] = inst_9216__$1);
return statearr_9261;
})();if(inst_9218)
{var statearr_9262_9297 = state_9259__$1;(statearr_9262_9297[(1)] = (8));
} else
{var statearr_9263_9298 = state_9259__$1;(statearr_9263_9298[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (20)))
{var inst_9216 = (state_9259[(7)]);var state_9259__$1 = state_9259;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9259__$1,(23),inst_9216);
} else
{if((state_val_9260 === (1)))
{var state_9259__$1 = state_9259;var statearr_9264_9299 = state_9259__$1;(statearr_9264_9299[(2)] = null);
(statearr_9264_9299[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (4)))
{var state_9259__$1 = state_9259;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9259__$1,(7),ocomm);
} else
{if((state_val_9260 === (15)))
{var inst_9239 = (state_9259[(2)]);var state_9259__$1 = state_9259;var statearr_9265_9300 = state_9259__$1;(statearr_9265_9300[(2)] = inst_9239);
(statearr_9265_9300[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (21)))
{var state_9259__$1 = state_9259;var statearr_9266_9301 = state_9259__$1;(statearr_9266_9301[(2)] = null);
(statearr_9266_9301[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (13)))
{var inst_9222 = (state_9259[(9)]);var state_9259__$1 = state_9259;var statearr_9267_9302 = state_9259__$1;(statearr_9267_9302[(2)] = inst_9222);
(statearr_9267_9302[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (22)))
{var inst_9248 = (state_9259[(2)]);var state_9259__$1 = state_9259;var statearr_9268_9303 = state_9259__$1;(statearr_9268_9303[(2)] = inst_9248);
(statearr_9268_9303[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (6)))
{var inst_9255 = (state_9259[(2)]);var state_9259__$1 = state_9259;var statearr_9269_9304 = state_9259__$1;(statearr_9269_9304[(2)] = inst_9255);
(statearr_9269_9304[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (17)))
{var state_9259__$1 = state_9259;var statearr_9270_9305 = state_9259__$1;(statearr_9270_9305[(2)] = null);
(statearr_9270_9305[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (3)))
{var inst_9257 = (state_9259[(2)]);var state_9259__$1 = state_9259;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9259__$1,inst_9257);
} else
{if((state_val_9260 === (12)))
{var inst_9241 = (state_9259[(2)]);var state_9259__$1 = state_9259;var statearr_9271_9306 = state_9259__$1;(statearr_9271_9306[(2)] = inst_9241);
(statearr_9271_9306[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (2)))
{var state_9259__$1 = state_9259;var statearr_9272_9307 = state_9259__$1;(statearr_9272_9307[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (23)))
{var inst_9245 = (state_9259[(2)]);var state_9259__$1 = state_9259;var statearr_9274_9308 = state_9259__$1;(statearr_9274_9308[(2)] = inst_9245);
(statearr_9274_9308[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (19)))
{var inst_9232 = (state_9259[(2)]);var state_9259__$1 = state_9259;var statearr_9275_9309 = state_9259__$1;(statearr_9275_9309[(2)] = inst_9232);
(statearr_9275_9309[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (11)))
{var inst_9221 = (state_9259[(10)]);var inst_9224 = cljs.core.empty_QMARK_.call(null,inst_9221);var state_9259__$1 = state_9259;if(inst_9224)
{var statearr_9276_9310 = state_9259__$1;(statearr_9276_9310[(1)] = (13));
} else
{var statearr_9277_9311 = state_9259__$1;(statearr_9277_9311[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (9)))
{var inst_9216 = (state_9259[(7)]);var state_9259__$1 = state_9259;if(cljs.core.truth_(inst_9216))
{var statearr_9278_9312 = state_9259__$1;(statearr_9278_9312[(1)] = (20));
} else
{var statearr_9279_9313 = state_9259__$1;(statearr_9279_9313[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (5)))
{var state_9259__$1 = state_9259;var statearr_9280_9314 = state_9259__$1;(statearr_9280_9314[(2)] = null);
(statearr_9280_9314[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (14)))
{var inst_9221 = (state_9259[(10)]);var inst_9227 = cljs.core.rest.call(null,inst_9221);var inst_9228 = cljs.core.first.call(null,inst_9221);var state_9259__$1 = (function (){var statearr_9281 = state_9259;(statearr_9281[(11)] = inst_9227);
return statearr_9281;
})();if(cljs.core.truth_(inst_9228))
{var statearr_9282_9315 = state_9259__$1;(statearr_9282_9315[(1)] = (16));
} else
{var statearr_9283_9316 = state_9259__$1;(statearr_9283_9316[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (16)))
{var inst_9221 = (state_9259[(10)]);var inst_9230 = cljs.core.first.call(null,inst_9221);var state_9259__$1 = state_9259;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9259__$1,(19),inst_9230);
} else
{if((state_val_9260 === (10)))
{var inst_9217 = (state_9259[(8)]);var inst_9250 = (state_9259[(2)]);var inst_9251 = cljs.core.apply.call(null,handler,inst_9250,inst_9217);var state_9259__$1 = (function (){var statearr_9284 = state_9259;(statearr_9284[(12)] = inst_9251);
return statearr_9284;
})();var statearr_9285_9317 = state_9259__$1;(statearr_9285_9317[(2)] = null);
(statearr_9285_9317[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (18)))
{var inst_9222 = (state_9259[(9)]);var inst_9227 = (state_9259[(11)]);var inst_9235 = (state_9259[(2)]);var inst_9236 = cljs.core.conj.call(null,inst_9222,inst_9235);var inst_9221 = inst_9227;var inst_9222__$1 = inst_9236;var state_9259__$1 = (function (){var statearr_9286 = state_9259;(statearr_9286[(10)] = inst_9221);
(statearr_9286[(9)] = inst_9222__$1);
return statearr_9286;
})();var statearr_9287_9318 = state_9259__$1;(statearr_9287_9318[(2)] = null);
(statearr_9287_9318[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9260 === (8)))
{var inst_9216 = (state_9259[(7)]);var inst_9220 = cljs.core.PersistentVector.EMPTY;var inst_9221 = inst_9216;var inst_9222 = inst_9220;var state_9259__$1 = (function (){var statearr_9288 = state_9259;(statearr_9288[(10)] = inst_9221);
(statearr_9288[(9)] = inst_9222);
return statearr_9288;
})();var statearr_9289_9319 = state_9259__$1;(statearr_9289_9319[(2)] = null);
(statearr_9289_9319[(1)] = (11));
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
});})(c__5821__auto__))
;return ((function (switch__5806__auto__,c__5821__auto__){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_9293 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9293[(0)] = state_machine__5807__auto__);
(statearr_9293[(1)] = (1));
return statearr_9293;
});
var state_machine__5807__auto____1 = (function (state_9259){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_9259);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e9294){if((e9294 instanceof Object))
{var ex__5810__auto__ = e9294;var statearr_9295_9320 = state_9259;(statearr_9295_9320[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9259);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9294;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9321 = state_9259;
state_9259 = G__9321;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_9259){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_9259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__))
})();var state__5823__auto__ = (function (){var statearr_9296 = f__5822__auto__.call(null);(statearr_9296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_9296;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto__))
);
return c__5821__auto__;
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
var G__9324__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__9323 = rseq;var rcomm = cljs.core.nth.call(null,vec__9323,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__9323,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__9324 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9324__delegate.call(this,req_args);};
G__9324.cljs$lang$maxFixedArity = 0;
G__9324.cljs$lang$applyTo = (function (arglist__9325){
var req_args = cljs.core.seq(arglist__9325);
return G__9324__delegate(req_args);
});
G__9324.cljs$core$IFn$_invoke$arity$variadic = G__9324__delegate;
return G__9324;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__,ch){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__,ch){
return (function (state_9343){var state_val_9344 = (state_9343[(1)]);if((state_val_9344 === (2)))
{var inst_9340 = (state_9343[(2)]);var inst_9341 = console.log(inst_9340);var state_9343__$1 = state_9343;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9343__$1,inst_9341);
} else
{if((state_val_9344 === (1)))
{var state_9343__$1 = state_9343;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9343__$1,(2),ch);
} else
{return null;
}
}
});})(c__5821__auto__,ch))
;return ((function (switch__5806__auto__,c__5821__auto__,ch){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_9348 = [null,null,null,null,null,null,null];(statearr_9348[(0)] = state_machine__5807__auto__);
(statearr_9348[(1)] = (1));
return statearr_9348;
});
var state_machine__5807__auto____1 = (function (state_9343){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_9343);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e9349){if((e9349 instanceof Object))
{var ex__5810__auto__ = e9349;var statearr_9350_9352 = state_9343;(statearr_9350_9352[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9343);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9349;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9353 = state_9343;
state_9343 = G__9353;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_9343){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_9343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__,ch))
})();var state__5823__auto__ = (function (){var statearr_9351 = f__5822__auto__.call(null);(statearr_9351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_9351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto__,ch))
);
return c__5821__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__9354){
var f = cljs.core.first(arglist__9354);
var args = cljs.core.rest(arglist__9354);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__9357){var vec__9358 = p__9357;var k = cljs.core.nth.call(null,vec__9358,(0),null);var v = cljs.core.nth.call(null,vec__9358,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
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
boundarylines.cljs$lang$applyTo = (function (arglist__9359){
var id = cljs.core.first(arglist__9359);
arglist__9359 = cljs.core.next(arglist__9359);
var tolerance = cljs.core.first(arglist__9359);
var opts = cljs.core.rest(arglist__9359);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__9360){
var id = cljs.core.first(arglist__9360);
var opts = cljs.core.rest(arglist__9360);
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
var portfolio_company_sites__delegate = function (p__9361){var vec__9363 = p__9361;var type_ids = cljs.core.nth.call(null,vec__9363,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__9361 = null;if (arguments.length > 0) {
  p__9361 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__9361);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__9364){
var p__9361 = cljs.core.seq(arglist__9364);
return portfolio_company_sites__delegate(p__9361);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__9365){var vec__9367 = p__9365;var type_ids = cljs.core.nth.call(null,vec__9367,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__9365 = null;if (arguments.length > 0) {
  p__9365 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__9365);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__9368){
var p__9365 = cljs.core.seq(arglist__9368);
return portfolio_company_sites_by_company__delegate(p__9365);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__9369){var vec__9371 = p__9369;var type_ids = cljs.core.nth.call(null,vec__9371,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__9369 = null;if (arguments.length > 0) {
  p__9369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__9369);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__9372){
var p__9369 = cljs.core.seq(arglist__9372);
return portfolio_company_locations__delegate(p__9369);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__9373){var vec__9375 = p__9373;var type_ids = cljs.core.nth.call(null,vec__9375,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__9373 = null;if (arguments.length > 0) {
  p__9373 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__9373);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__9376){
var p__9373 = cljs.core.seq(arglist__9376);
return portfolio_company_site_stats__delegate(p__9373);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__9377){var vec__9379 = p__9377;var type_ids = cljs.core.nth.call(null,vec__9379,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__9377 = null;if (arguments.length > 0) {
  p__9377 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__9377);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__9380){
var p__9377 = cljs.core.seq(arglist__9380);
return portfolio_company_site_account_timelines__delegate(p__9377);
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
var investment_account_timelines__delegate = function (p__9381){var vec__9383 = p__9381;var type_ids = cljs.core.nth.call(null,vec__9383,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__9381 = null;if (arguments.length > 0) {
  p__9381 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__9381);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__9384){
var p__9381 = cljs.core.seq(arglist__9384);
return investment_account_timelines__delegate(p__9381);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__9385){var vec__9387 = p__9385;var type_ids = cljs.core.nth.call(null,vec__9387,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__9385 = null;if (arguments.length > 0) {
  p__9385 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__9385);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__9388){
var p__9385 = cljs.core.seq(arglist__9388);
return investment_stats__delegate(p__9385);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__9389){var vec__9391 = p__9389;var type_ids = cljs.core.nth.call(null,vec__9391,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__9389 = null;if (arguments.length > 0) {
  p__9389 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__9389);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__9392){
var p__9389 = cljs.core.seq(arglist__9392);
return investment_aggs__delegate(p__9389);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__9393){var vec__9395 = p__9393;var type_ids = cljs.core.nth.call(null,vec__9395,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__9393 = null;if (arguments.length > 0) {
  p__9393 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__9393);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__9396){
var p__9393 = cljs.core.seq(arglist__9396);
return investments__delegate(p__9393);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
