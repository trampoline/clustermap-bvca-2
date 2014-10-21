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
var AJAX__delegate = function (url,p__9119){var map__9123 = p__9119;var map__9123__$1 = ((cljs.core.seq_QMARK_.call(null,map__9123))?cljs.core.apply.call(null,cljs.core.hash_map,map__9123):map__9123);var opts = map__9123__$1;var content = cljs.core.get.call(null,map__9123__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__9123__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__9123__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__9123,map__9123__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__9123,map__9123__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__9123,map__9123__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__9123,map__9123__$1,opts,content,method,raw))
,(function (){var or__3637__auto__ = (function (){var G__9125 = method;var G__9125__$1 = (((G__9125 == null))?null:cljs.core.name.call(null,G__9125));var G__9125__$2 = (((G__9125__$1 == null))?null:clojure.string.upper_case.call(null,G__9125__$1));return G__9125__$2;
})();if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__9119 = null;if (arguments.length > 1) {
  p__9119 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__9119);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__9126){
var url = cljs.core.first(arglist__9126);
var p__9119 = cljs.core.rest(arglist__9126);
return AJAX__delegate(url,p__9119);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__9127){var map__9129 = p__9127;var map__9129__$1 = ((cljs.core.seq_QMARK_.call(null,map__9129))?cljs.core.apply.call(null,cljs.core.hash_map,map__9129):map__9129);var opts = map__9129__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__9127 = null;if (arguments.length > 1) {
  p__9127 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__9127);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__9130){
var url = cljs.core.first(arglist__9130);
var p__9127 = cljs.core.rest(arglist__9130);
return GET__delegate(url,p__9127);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__9131){var map__9133 = p__9131;var map__9133__$1 = ((cljs.core.seq_QMARK_.call(null,map__9133))?cljs.core.apply.call(null,cljs.core.hash_map,map__9133):map__9133);var opts = map__9133__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__9131 = null;if (arguments.length > 2) {
  p__9131 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__9131);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__9134){
var url = cljs.core.first(arglist__9134);
arglist__9134 = cljs.core.next(arglist__9134);
var content = cljs.core.first(arglist__9134);
var p__9131 = cljs.core.rest(arglist__9134);
return POST__delegate(url,content,p__9131);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__9135){var map__9137 = p__9135;var map__9137__$1 = ((cljs.core.seq_QMARK_.call(null,map__9137))?cljs.core.apply.call(null,cljs.core.hash_map,map__9137):map__9137);var opts = map__9137__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__9135 = null;if (arguments.length > 2) {
  p__9135 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__9135);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__9138){
var url = cljs.core.first(arglist__9138);
arglist__9138 = cljs.core.next(arglist__9138);
var content = cljs.core.first(arglist__9138);
var p__9135 = cljs.core.rest(arglist__9138);
return PUT__delegate(url,content,p__9135);
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
return (function (state_9273){var state_val_9274 = (state_9273[(1)]);if((state_val_9274 === (7)))
{var inst_9230 = (state_9273[(7)]);var inst_9229 = (state_9273[(2)]);var inst_9230__$1 = cljs.core.nth.call(null,inst_9229,(0),null);var inst_9231 = cljs.core.nth.call(null,inst_9229,(1),null);var inst_9232 = cljs.core.sequential_QMARK_.call(null,inst_9230__$1);var state_9273__$1 = (function (){var statearr_9275 = state_9273;(statearr_9275[(8)] = inst_9231);
(statearr_9275[(7)] = inst_9230__$1);
return statearr_9275;
})();if(inst_9232)
{var statearr_9276_9311 = state_9273__$1;(statearr_9276_9311[(1)] = (8));
} else
{var statearr_9277_9312 = state_9273__$1;(statearr_9277_9312[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (20)))
{var inst_9230 = (state_9273[(7)]);var state_9273__$1 = state_9273;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9273__$1,(23),inst_9230);
} else
{if((state_val_9274 === (1)))
{var state_9273__$1 = state_9273;var statearr_9278_9313 = state_9273__$1;(statearr_9278_9313[(2)] = null);
(statearr_9278_9313[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (4)))
{var state_9273__$1 = state_9273;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9273__$1,(7),ocomm);
} else
{if((state_val_9274 === (15)))
{var inst_9253 = (state_9273[(2)]);var state_9273__$1 = state_9273;var statearr_9279_9314 = state_9273__$1;(statearr_9279_9314[(2)] = inst_9253);
(statearr_9279_9314[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (21)))
{var state_9273__$1 = state_9273;var statearr_9280_9315 = state_9273__$1;(statearr_9280_9315[(2)] = null);
(statearr_9280_9315[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (13)))
{var inst_9236 = (state_9273[(9)]);var state_9273__$1 = state_9273;var statearr_9281_9316 = state_9273__$1;(statearr_9281_9316[(2)] = inst_9236);
(statearr_9281_9316[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (22)))
{var inst_9262 = (state_9273[(2)]);var state_9273__$1 = state_9273;var statearr_9282_9317 = state_9273__$1;(statearr_9282_9317[(2)] = inst_9262);
(statearr_9282_9317[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (6)))
{var inst_9269 = (state_9273[(2)]);var state_9273__$1 = state_9273;var statearr_9283_9318 = state_9273__$1;(statearr_9283_9318[(2)] = inst_9269);
(statearr_9283_9318[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (17)))
{var state_9273__$1 = state_9273;var statearr_9284_9319 = state_9273__$1;(statearr_9284_9319[(2)] = null);
(statearr_9284_9319[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (3)))
{var inst_9271 = (state_9273[(2)]);var state_9273__$1 = state_9273;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9273__$1,inst_9271);
} else
{if((state_val_9274 === (12)))
{var inst_9255 = (state_9273[(2)]);var state_9273__$1 = state_9273;var statearr_9285_9320 = state_9273__$1;(statearr_9285_9320[(2)] = inst_9255);
(statearr_9285_9320[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (2)))
{var state_9273__$1 = state_9273;var statearr_9286_9321 = state_9273__$1;(statearr_9286_9321[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (23)))
{var inst_9259 = (state_9273[(2)]);var state_9273__$1 = state_9273;var statearr_9288_9322 = state_9273__$1;(statearr_9288_9322[(2)] = inst_9259);
(statearr_9288_9322[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (19)))
{var inst_9246 = (state_9273[(2)]);var state_9273__$1 = state_9273;var statearr_9289_9323 = state_9273__$1;(statearr_9289_9323[(2)] = inst_9246);
(statearr_9289_9323[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (11)))
{var inst_9235 = (state_9273[(10)]);var inst_9238 = cljs.core.empty_QMARK_.call(null,inst_9235);var state_9273__$1 = state_9273;if(inst_9238)
{var statearr_9290_9324 = state_9273__$1;(statearr_9290_9324[(1)] = (13));
} else
{var statearr_9291_9325 = state_9273__$1;(statearr_9291_9325[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (9)))
{var inst_9230 = (state_9273[(7)]);var state_9273__$1 = state_9273;if(cljs.core.truth_(inst_9230))
{var statearr_9292_9326 = state_9273__$1;(statearr_9292_9326[(1)] = (20));
} else
{var statearr_9293_9327 = state_9273__$1;(statearr_9293_9327[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (5)))
{var state_9273__$1 = state_9273;var statearr_9294_9328 = state_9273__$1;(statearr_9294_9328[(2)] = null);
(statearr_9294_9328[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (14)))
{var inst_9235 = (state_9273[(10)]);var inst_9241 = cljs.core.rest.call(null,inst_9235);var inst_9242 = cljs.core.first.call(null,inst_9235);var state_9273__$1 = (function (){var statearr_9295 = state_9273;(statearr_9295[(11)] = inst_9241);
return statearr_9295;
})();if(cljs.core.truth_(inst_9242))
{var statearr_9296_9329 = state_9273__$1;(statearr_9296_9329[(1)] = (16));
} else
{var statearr_9297_9330 = state_9273__$1;(statearr_9297_9330[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (16)))
{var inst_9235 = (state_9273[(10)]);var inst_9244 = cljs.core.first.call(null,inst_9235);var state_9273__$1 = state_9273;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9273__$1,(19),inst_9244);
} else
{if((state_val_9274 === (10)))
{var inst_9231 = (state_9273[(8)]);var inst_9264 = (state_9273[(2)]);var inst_9265 = cljs.core.apply.call(null,handler,inst_9264,inst_9231);var state_9273__$1 = (function (){var statearr_9298 = state_9273;(statearr_9298[(12)] = inst_9265);
return statearr_9298;
})();var statearr_9299_9331 = state_9273__$1;(statearr_9299_9331[(2)] = null);
(statearr_9299_9331[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (18)))
{var inst_9241 = (state_9273[(11)]);var inst_9236 = (state_9273[(9)]);var inst_9249 = (state_9273[(2)]);var inst_9250 = cljs.core.conj.call(null,inst_9236,inst_9249);var inst_9235 = inst_9241;var inst_9236__$1 = inst_9250;var state_9273__$1 = (function (){var statearr_9300 = state_9273;(statearr_9300[(10)] = inst_9235);
(statearr_9300[(9)] = inst_9236__$1);
return statearr_9300;
})();var statearr_9301_9332 = state_9273__$1;(statearr_9301_9332[(2)] = null);
(statearr_9301_9332[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9274 === (8)))
{var inst_9230 = (state_9273[(7)]);var inst_9234 = cljs.core.PersistentVector.EMPTY;var inst_9235 = inst_9230;var inst_9236 = inst_9234;var state_9273__$1 = (function (){var statearr_9302 = state_9273;(statearr_9302[(10)] = inst_9235);
(statearr_9302[(9)] = inst_9236);
return statearr_9302;
})();var statearr_9303_9333 = state_9273__$1;(statearr_9303_9333[(2)] = null);
(statearr_9303_9333[(1)] = (11));
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
var state_machine__5805__auto____0 = (function (){var statearr_9307 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9307[(0)] = state_machine__5805__auto__);
(statearr_9307[(1)] = (1));
return statearr_9307;
});
var state_machine__5805__auto____1 = (function (state_9273){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_9273);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e9308){if((e9308 instanceof Object))
{var ex__5808__auto__ = e9308;var statearr_9309_9334 = state_9273;(statearr_9309_9334[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9273);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9308;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9335 = state_9273;
state_9273 = G__9335;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_9273){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_9273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_9310 = f__5820__auto__.call(null);(statearr_9310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_9310;
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
var G__9338__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__9337 = rseq;var rcomm = cljs.core.nth.call(null,vec__9337,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__9337,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__9338 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9338__delegate.call(this,req_args);};
G__9338.cljs$lang$maxFixedArity = 0;
G__9338.cljs$lang$applyTo = (function (arglist__9339){
var req_args = cljs.core.seq(arglist__9339);
return G__9338__delegate(req_args);
});
G__9338.cljs$core$IFn$_invoke$arity$variadic = G__9338__delegate;
return G__9338;
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
return (function (state_9357){var state_val_9358 = (state_9357[(1)]);if((state_val_9358 === (2)))
{var inst_9354 = (state_9357[(2)]);var inst_9355 = console.log(inst_9354);var state_9357__$1 = state_9357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9357__$1,inst_9355);
} else
{if((state_val_9358 === (1)))
{var state_9357__$1 = state_9357;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9357__$1,(2),ch);
} else
{return null;
}
}
});})(c__5819__auto__,ch))
;return ((function (switch__5804__auto__,c__5819__auto__,ch){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_9362 = [null,null,null,null,null,null,null];(statearr_9362[(0)] = state_machine__5805__auto__);
(statearr_9362[(1)] = (1));
return statearr_9362;
});
var state_machine__5805__auto____1 = (function (state_9357){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_9357);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e9363){if((e9363 instanceof Object))
{var ex__5808__auto__ = e9363;var statearr_9364_9366 = state_9357;(statearr_9364_9366[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9357);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9363;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9367 = state_9357;
state_9357 = G__9367;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_9357){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_9357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,ch))
})();var state__5821__auto__ = (function (){var statearr_9365 = f__5820__auto__.call(null);(statearr_9365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_9365;
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
log_api.cljs$lang$applyTo = (function (arglist__9368){
var f = cljs.core.first(arglist__9368);
var args = cljs.core.rest(arglist__9368);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__9371){var vec__9372 = p__9371;var k = cljs.core.nth.call(null,vec__9372,(0),null);var v = cljs.core.nth.call(null,vec__9372,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5819__auto___9399 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___9399,r){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___9399,r){
return (function (state_9390){var state_val_9391 = (state_9390[(1)]);if((state_val_9391 === (2)))
{var inst_9387 = (state_9390[(2)]);var inst_9388 = cljs.core.reset_BANG_.call(null,r,inst_9387);var state_9390__$1 = state_9390;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9390__$1,inst_9388);
} else
{if((state_val_9391 === (1)))
{var state_9390__$1 = state_9390;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9390__$1,(2),comm);
} else
{return null;
}
}
});})(c__5819__auto___9399,r))
;return ((function (switch__5804__auto__,c__5819__auto___9399,r){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_9395 = [null,null,null,null,null,null,null];(statearr_9395[(0)] = state_machine__5805__auto__);
(statearr_9395[(1)] = (1));
return statearr_9395;
});
var state_machine__5805__auto____1 = (function (state_9390){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_9390);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e9396){if((e9396 instanceof Object))
{var ex__5808__auto__ = e9396;var statearr_9397_9400 = state_9390;(statearr_9397_9400[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9390);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9396;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9401 = state_9390;
state_9390 = G__9401;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_9390){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_9390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___9399,r))
})();var state__5821__auto__ = (function (){var statearr_9398 = f__5820__auto__.call(null);(statearr_9398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___9399);
return statearr_9398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___9399,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__9402){
var id = cljs.core.first(arglist__9402);
arglist__9402 = cljs.core.next(arglist__9402);
var tolerance = cljs.core.first(arglist__9402);
var opts = cljs.core.rest(arglist__9402);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__9403){
var id = cljs.core.first(arglist__9403);
var opts = cljs.core.rest(arglist__9403);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__9404){
var ids = cljs.core.first(arglist__9404);
arglist__9404 = cljs.core.next(arglist__9404);
var tolerance = cljs.core.first(arglist__9404);
var opts = cljs.core.rest(arglist__9404);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__9405){var map__9407 = p__9405;var map__9407__$1 = ((cljs.core.seq_QMARK_.call(null,map__9407))?cljs.core.apply.call(null,cljs.core.hash_map,map__9407):map__9407);var opts = map__9407__$1;var boundaryline_ids = cljs.core.get.call(null,map__9407__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__9405 = null;if (arguments.length > 3) {
  p__9405 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__9405);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__9408){
var collection_id = cljs.core.first(arglist__9408);
arglist__9408 = cljs.core.next(arglist__9408);
var tolerance = cljs.core.first(arglist__9408);
arglist__9408 = cljs.core.next(arglist__9408);
var bounds = cljs.core.first(arglist__9408);
var p__9405 = cljs.core.rest(arglist__9408);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__9405);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__9409){var vec__9411 = p__9409;var type_ids = cljs.core.nth.call(null,vec__9411,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__9409 = null;if (arguments.length > 6) {
  p__9409 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__9409);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__9412){
var index = cljs.core.first(arglist__9412);
arglist__9412 = cljs.core.next(arglist__9412);
var type = cljs.core.first(arglist__9412);
arglist__9412 = cljs.core.next(arglist__9412);
var blcoll = cljs.core.first(arglist__9412);
arglist__9412 = cljs.core.next(arglist__9412);
var attr = cljs.core.first(arglist__9412);
arglist__9412 = cljs.core.next(arglist__9412);
var filter = cljs.core.first(arglist__9412);
arglist__9412 = cljs.core.next(arglist__9412);
var bounds = cljs.core.first(arglist__9412);
var p__9409 = cljs.core.rest(arglist__9412);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__9409);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__9413){var vec__9415 = p__9413;var type_ids = cljs.core.nth.call(null,vec__9415,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__9413 = null;if (arguments.length > 5) {
  p__9413 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__9413);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__9416){
var index = cljs.core.first(arglist__9416);
arglist__9416 = cljs.core.next(arglist__9416);
var type = cljs.core.first(arglist__9416);
arglist__9416 = cljs.core.next(arglist__9416);
var statsattrs = cljs.core.first(arglist__9416);
arglist__9416 = cljs.core.next(arglist__9416);
var filter = cljs.core.first(arglist__9416);
arglist__9416 = cljs.core.next(arglist__9416);
var bounds = cljs.core.first(arglist__9416);
var p__9413 = cljs.core.rest(arglist__9416);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__9413);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__9417){var vec__9419 = p__9417;var type_ids = cljs.core.nth.call(null,vec__9419,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__9417 = null;if (arguments.length > 7) {
  p__9417 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__9417);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__9420){
var index = cljs.core.first(arglist__9420);
arglist__9420 = cljs.core.next(arglist__9420);
var type = cljs.core.first(arglist__9420);
arglist__9420 = cljs.core.next(arglist__9420);
var location_attr = cljs.core.first(arglist__9420);
arglist__9420 = cljs.core.next(arglist__9420);
var attrs = cljs.core.first(arglist__9420);
arglist__9420 = cljs.core.next(arglist__9420);
var max_count = cljs.core.first(arglist__9420);
arglist__9420 = cljs.core.next(arglist__9420);
var filter = cljs.core.first(arglist__9420);
arglist__9420 = cljs.core.next(arglist__9420);
var bounds = cljs.core.first(arglist__9420);
var p__9417 = cljs.core.rest(arglist__9420);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__9417);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__9421){var vec__9423 = p__9421;var type_ids = cljs.core.nth.call(null,vec__9423,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__9421 = null;if (arguments.length > 7) {
  p__9421 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__9421);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__9424){
var index = cljs.core.first(arglist__9424);
arglist__9424 = cljs.core.next(arglist__9424);
var type = cljs.core.first(arglist__9424);
arglist__9424 = cljs.core.next(arglist__9424);
var filter_spec = cljs.core.first(arglist__9424);
arglist__9424 = cljs.core.next(arglist__9424);
var bounds = cljs.core.first(arglist__9424);
arglist__9424 = cljs.core.next(arglist__9424);
var sort_spec = cljs.core.first(arglist__9424);
arglist__9424 = cljs.core.next(arglist__9424);
var from = cljs.core.first(arglist__9424);
arglist__9424 = cljs.core.next(arglist__9424);
var size = cljs.core.first(arglist__9424);
var p__9421 = cljs.core.rest(arglist__9424);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__9421);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),time_variable,new cljs.core.Keyword(null,"after","after",594996914),after,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"interval","interval",1708495417),interval,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),metric_variables], null));
});
