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
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__44115){var map__44117 = p__44115;var map__44117__$1 = ((cljs.core.seq_QMARK_.call(null,map__44117))?cljs.core.apply.call(null,cljs.core.hash_map,map__44117):map__44117);var raw = cljs.core.get.call(null,map__44117__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__44117,map__44117__$1,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__44117,map__44117__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__44117,map__44117__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__44117,map__44117__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__44115 = null;if (arguments.length > 1) {
  p__44115 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__44115);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__44118){
var url = cljs.core.first(arglist__44118);
var p__44115 = cljs.core.rest(arglist__44118);
return GET__delegate(url,p__44115);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_44251){var state_val_44252 = (state_44251[(1)]);if((state_val_44252 === (7)))
{var inst_44209 = (state_44251[(7)]);var inst_44208 = (state_44251[(2)]);var inst_44209__$1 = cljs.core.nth.call(null,inst_44208,(0),null);var inst_44210 = cljs.core.nth.call(null,inst_44208,(1),null);var inst_44211 = cljs.core.sequential_QMARK_.call(null,inst_44209__$1);var state_44251__$1 = (function (){var statearr_44253 = state_44251;(statearr_44253[(8)] = inst_44210);
(statearr_44253[(7)] = inst_44209__$1);
return statearr_44253;
})();if(inst_44211)
{var statearr_44254_44289 = state_44251__$1;(statearr_44254_44289[(1)] = (8));
} else
{var statearr_44255_44290 = state_44251__$1;(statearr_44255_44290[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (20)))
{var inst_44209 = (state_44251[(7)]);var state_44251__$1 = state_44251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44251__$1,(23),inst_44209);
} else
{if((state_val_44252 === (1)))
{var state_44251__$1 = state_44251;var statearr_44256_44291 = state_44251__$1;(statearr_44256_44291[(2)] = null);
(statearr_44256_44291[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (4)))
{var state_44251__$1 = state_44251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44251__$1,(7),ocomm);
} else
{if((state_val_44252 === (15)))
{var inst_44231 = (state_44251[(2)]);var state_44251__$1 = state_44251;var statearr_44257_44292 = state_44251__$1;(statearr_44257_44292[(2)] = inst_44231);
(statearr_44257_44292[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (21)))
{var state_44251__$1 = state_44251;var statearr_44258_44293 = state_44251__$1;(statearr_44258_44293[(2)] = null);
(statearr_44258_44293[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (13)))
{var inst_44214 = (state_44251[(9)]);var state_44251__$1 = state_44251;var statearr_44259_44294 = state_44251__$1;(statearr_44259_44294[(2)] = inst_44214);
(statearr_44259_44294[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (22)))
{var inst_44240 = (state_44251[(2)]);var state_44251__$1 = state_44251;var statearr_44260_44295 = state_44251__$1;(statearr_44260_44295[(2)] = inst_44240);
(statearr_44260_44295[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (6)))
{var inst_44247 = (state_44251[(2)]);var state_44251__$1 = state_44251;var statearr_44261_44296 = state_44251__$1;(statearr_44261_44296[(2)] = inst_44247);
(statearr_44261_44296[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (17)))
{var state_44251__$1 = state_44251;var statearr_44262_44297 = state_44251__$1;(statearr_44262_44297[(2)] = null);
(statearr_44262_44297[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (3)))
{var inst_44249 = (state_44251[(2)]);var state_44251__$1 = state_44251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44251__$1,inst_44249);
} else
{if((state_val_44252 === (12)))
{var inst_44233 = (state_44251[(2)]);var state_44251__$1 = state_44251;var statearr_44263_44298 = state_44251__$1;(statearr_44263_44298[(2)] = inst_44233);
(statearr_44263_44298[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (2)))
{var state_44251__$1 = state_44251;if(true)
{var statearr_44264_44299 = state_44251__$1;(statearr_44264_44299[(1)] = (4));
} else
{var statearr_44265_44300 = state_44251__$1;(statearr_44265_44300[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (23)))
{var inst_44237 = (state_44251[(2)]);var state_44251__$1 = state_44251;var statearr_44266_44301 = state_44251__$1;(statearr_44266_44301[(2)] = inst_44237);
(statearr_44266_44301[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (19)))
{var inst_44224 = (state_44251[(2)]);var state_44251__$1 = state_44251;var statearr_44267_44302 = state_44251__$1;(statearr_44267_44302[(2)] = inst_44224);
(statearr_44267_44302[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (11)))
{var inst_44213 = (state_44251[(10)]);var inst_44216 = cljs.core.empty_QMARK_.call(null,inst_44213);var state_44251__$1 = state_44251;if(inst_44216)
{var statearr_44268_44303 = state_44251__$1;(statearr_44268_44303[(1)] = (13));
} else
{var statearr_44269_44304 = state_44251__$1;(statearr_44269_44304[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (9)))
{var inst_44209 = (state_44251[(7)]);var state_44251__$1 = state_44251;if(cljs.core.truth_(inst_44209))
{var statearr_44270_44305 = state_44251__$1;(statearr_44270_44305[(1)] = (20));
} else
{var statearr_44271_44306 = state_44251__$1;(statearr_44271_44306[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (5)))
{var state_44251__$1 = state_44251;var statearr_44272_44307 = state_44251__$1;(statearr_44272_44307[(2)] = null);
(statearr_44272_44307[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (14)))
{var inst_44213 = (state_44251[(10)]);var inst_44219 = cljs.core.rest.call(null,inst_44213);var inst_44220 = cljs.core.first.call(null,inst_44213);var state_44251__$1 = (function (){var statearr_44273 = state_44251;(statearr_44273[(11)] = inst_44219);
return statearr_44273;
})();if(cljs.core.truth_(inst_44220))
{var statearr_44274_44308 = state_44251__$1;(statearr_44274_44308[(1)] = (16));
} else
{var statearr_44275_44309 = state_44251__$1;(statearr_44275_44309[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (16)))
{var inst_44213 = (state_44251[(10)]);var inst_44222 = cljs.core.first.call(null,inst_44213);var state_44251__$1 = state_44251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44251__$1,(19),inst_44222);
} else
{if((state_val_44252 === (10)))
{var inst_44210 = (state_44251[(8)]);var inst_44242 = (state_44251[(2)]);var inst_44243 = cljs.core.apply.call(null,handler,inst_44242,inst_44210);var state_44251__$1 = (function (){var statearr_44276 = state_44251;(statearr_44276[(12)] = inst_44243);
return statearr_44276;
})();var statearr_44277_44310 = state_44251__$1;(statearr_44277_44310[(2)] = null);
(statearr_44277_44310[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (18)))
{var inst_44214 = (state_44251[(9)]);var inst_44219 = (state_44251[(11)]);var inst_44227 = (state_44251[(2)]);var inst_44228 = cljs.core.conj.call(null,inst_44214,inst_44227);var inst_44213 = inst_44219;var inst_44214__$1 = inst_44228;var state_44251__$1 = (function (){var statearr_44278 = state_44251;(statearr_44278[(9)] = inst_44214__$1);
(statearr_44278[(10)] = inst_44213);
return statearr_44278;
})();var statearr_44279_44311 = state_44251__$1;(statearr_44279_44311[(2)] = null);
(statearr_44279_44311[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44252 === (8)))
{var inst_44209 = (state_44251[(7)]);var inst_44213 = inst_44209;var inst_44214 = cljs.core.PersistentVector.EMPTY;var state_44251__$1 = (function (){var statearr_44280 = state_44251;(statearr_44280[(9)] = inst_44214);
(statearr_44280[(10)] = inst_44213);
return statearr_44280;
})();var statearr_44281_44312 = state_44251__$1;(statearr_44281_44312[(2)] = null);
(statearr_44281_44312[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_44285 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44285[(0)] = state_machine__5679__auto__);
(statearr_44285[(1)] = (1));
return statearr_44285;
});
var state_machine__5679__auto____1 = (function (state_44251){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_44251);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e44286){if((e44286 instanceof Object))
{var ex__5682__auto__ = e44286;var statearr_44287_44313 = state_44251;(statearr_44287_44313[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44251);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44314 = state_44251;
state_44251 = G__44314;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_44251){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_44251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_44288 = f__5694__auto__.call(null);(statearr_44288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_44288;
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
var G__44317__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__44316 = rseq;var rcomm = cljs.core.nth.call(null,vec__44316,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__44316,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__44317 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__44317__delegate.call(this,req_args);};
G__44317.cljs$lang$maxFixedArity = 0;
G__44317.cljs$lang$applyTo = (function (arglist__44318){
var req_args = cljs.core.seq(arglist__44318);
return G__44317__delegate(req_args);
});
G__44317.cljs$core$IFn$_invoke$arity$variadic = G__44317__delegate;
return G__44317;
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
return (function (state_44336){var state_val_44337 = (state_44336[(1)]);if((state_val_44337 === (2)))
{var inst_44333 = (state_44336[(2)]);var inst_44334 = console.log(inst_44333);var state_44336__$1 = state_44336;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44336__$1,inst_44334);
} else
{if((state_val_44337 === (1)))
{var state_44336__$1 = state_44336;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44336__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_44341 = [null,null,null,null,null,null,null];(statearr_44341[(0)] = state_machine__5679__auto__);
(statearr_44341[(1)] = (1));
return statearr_44341;
});
var state_machine__5679__auto____1 = (function (state_44336){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_44336);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e44342){if((e44342 instanceof Object))
{var ex__5682__auto__ = e44342;var statearr_44343_44345 = state_44336;(statearr_44343_44345[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44336);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44346 = state_44336;
state_44336 = G__44346;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_44336){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_44336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_44344 = f__5694__auto__.call(null);(statearr_44344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_44344;
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
log_api.cljs$lang$applyTo = (function (arglist__44347){
var f = cljs.core.first(arglist__44347);
var args = cljs.core.rest(arglist__44347);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__44350){var vec__44351 = p__44350;var k = cljs.core.nth.call(null,vec__44351,(0),null);var v = cljs.core.nth.call(null,vec__44351,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___44378 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___44378,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___44378,r){
return (function (state_44369){var state_val_44370 = (state_44369[(1)]);if((state_val_44370 === (2)))
{var inst_44366 = (state_44369[(2)]);var inst_44367 = cljs.core.reset_BANG_.call(null,r,inst_44366);var state_44369__$1 = state_44369;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44369__$1,inst_44367);
} else
{if((state_val_44370 === (1)))
{var state_44369__$1 = state_44369;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44369__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___44378,r))
;return ((function (switch__5678__auto__,c__5693__auto___44378,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_44374 = [null,null,null,null,null,null,null];(statearr_44374[(0)] = state_machine__5679__auto__);
(statearr_44374[(1)] = (1));
return statearr_44374;
});
var state_machine__5679__auto____1 = (function (state_44369){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_44369);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e44375){if((e44375 instanceof Object))
{var ex__5682__auto__ = e44375;var statearr_44376_44379 = state_44369;(statearr_44376_44379[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44369);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44375;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44380 = state_44369;
state_44369 = G__44380;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_44369){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_44369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___44378,r))
})();var state__5695__auto__ = (function (){var statearr_44377 = f__5694__auto__.call(null);(statearr_44377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___44378);
return statearr_44377;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___44378,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__44381){
var id = cljs.core.first(arglist__44381);
arglist__44381 = cljs.core.next(arglist__44381);
var tolerance = cljs.core.first(arglist__44381);
var opts = cljs.core.rest(arglist__44381);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__44382){
var id = cljs.core.first(arglist__44382);
var opts = cljs.core.rest(arglist__44382);
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
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,p__44383){var vec__44385 = p__44383;var type_ids = cljs.core.nth.call(null,vec__44385,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,var_args){
var p__44383 = null;if (arguments.length > 4) {
  p__44383 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,p__44383);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 4;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__44386){
var index = cljs.core.first(arglist__44386);
arglist__44386 = cljs.core.next(arglist__44386);
var type = cljs.core.first(arglist__44386);
arglist__44386 = cljs.core.next(arglist__44386);
var blcoll = cljs.core.first(arglist__44386);
arglist__44386 = cljs.core.next(arglist__44386);
var attr = cljs.core.first(arglist__44386);
var p__44383 = cljs.core.rest(arglist__44386);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,p__44383);
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
var portfolio_company_sites__delegate = function (p__44387){var vec__44389 = p__44387;var type_ids = cljs.core.nth.call(null,vec__44389,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__44387 = null;if (arguments.length > 0) {
  p__44387 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__44387);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__44390){
var p__44387 = cljs.core.seq(arglist__44390);
return portfolio_company_sites__delegate(p__44387);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__44391){var vec__44393 = p__44391;var type_ids = cljs.core.nth.call(null,vec__44393,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__44391 = null;if (arguments.length > 0) {
  p__44391 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__44391);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__44394){
var p__44391 = cljs.core.seq(arglist__44394);
return portfolio_company_sites_by_company__delegate(p__44391);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__44395){var vec__44397 = p__44395;var type_ids = cljs.core.nth.call(null,vec__44397,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__44395 = null;if (arguments.length > 0) {
  p__44395 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__44395);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__44398){
var p__44395 = cljs.core.seq(arglist__44398);
return portfolio_company_locations__delegate(p__44395);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__44399){var vec__44401 = p__44399;var type_ids = cljs.core.nth.call(null,vec__44401,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__44399 = null;if (arguments.length > 0) {
  p__44399 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__44399);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__44402){
var p__44399 = cljs.core.seq(arglist__44402);
return portfolio_company_site_stats__delegate(p__44399);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__44403){var vec__44405 = p__44403;var type_ids = cljs.core.nth.call(null,vec__44405,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__44403 = null;if (arguments.length > 0) {
  p__44403 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__44403);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__44406){
var p__44403 = cljs.core.seq(arglist__44406);
return portfolio_company_site_account_timelines__delegate(p__44403);
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
var investment_account_timelines__delegate = function (p__44407){var vec__44409 = p__44407;var type_ids = cljs.core.nth.call(null,vec__44409,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__44407 = null;if (arguments.length > 0) {
  p__44407 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__44407);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__44410){
var p__44407 = cljs.core.seq(arglist__44410);
return investment_account_timelines__delegate(p__44407);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__44411){var vec__44413 = p__44411;var type_ids = cljs.core.nth.call(null,vec__44413,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__44411 = null;if (arguments.length > 0) {
  p__44411 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__44411);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__44414){
var p__44411 = cljs.core.seq(arglist__44414);
return investment_stats__delegate(p__44411);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__44415){var vec__44417 = p__44415;var type_ids = cljs.core.nth.call(null,vec__44417,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__44415 = null;if (arguments.length > 0) {
  p__44415 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__44415);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__44418){
var p__44415 = cljs.core.seq(arglist__44418);
return investment_aggs__delegate(p__44415);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__44419){var vec__44421 = p__44419;var type_ids = cljs.core.nth.call(null,vec__44421,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__44419 = null;if (arguments.length > 0) {
  p__44419 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__44419);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__44422){
var p__44419 = cljs.core.seq(arglist__44422);
return investments__delegate(p__44419);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map