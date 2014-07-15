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
var GET__delegate = function (url,p__21235){var map__21237 = p__21235;var map__21237__$1 = ((cljs.core.seq_QMARK_.call(null,map__21237))?cljs.core.apply.call(null,cljs.core.hash_map,map__21237):map__21237);var raw = cljs.core.get.call(null,map__21237__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__21237,map__21237__$1,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__21237,map__21237__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__21237,map__21237__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__21237,map__21237__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__21235 = null;if (arguments.length > 1) {
  p__21235 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__21235);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__21238){
var url = cljs.core.first(arglist__21238);
var p__21235 = cljs.core.rest(arglist__21238);
return GET__delegate(url,p__21235);
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
return (function (state_21371){var state_val_21372 = (state_21371[(1)]);if((state_val_21372 === (7)))
{var inst_21329 = (state_21371[(7)]);var inst_21328 = (state_21371[(2)]);var inst_21329__$1 = cljs.core.nth.call(null,inst_21328,(0),null);var inst_21330 = cljs.core.nth.call(null,inst_21328,(1),null);var inst_21331 = cljs.core.sequential_QMARK_.call(null,inst_21329__$1);var state_21371__$1 = (function (){var statearr_21373 = state_21371;(statearr_21373[(7)] = inst_21329__$1);
(statearr_21373[(8)] = inst_21330);
return statearr_21373;
})();if(inst_21331)
{var statearr_21374_21409 = state_21371__$1;(statearr_21374_21409[(1)] = (8));
} else
{var statearr_21375_21410 = state_21371__$1;(statearr_21375_21410[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (20)))
{var inst_21329 = (state_21371[(7)]);var state_21371__$1 = state_21371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21371__$1,(23),inst_21329);
} else
{if((state_val_21372 === (1)))
{var state_21371__$1 = state_21371;var statearr_21376_21411 = state_21371__$1;(statearr_21376_21411[(2)] = null);
(statearr_21376_21411[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (4)))
{var state_21371__$1 = state_21371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21371__$1,(7),ocomm);
} else
{if((state_val_21372 === (15)))
{var inst_21351 = (state_21371[(2)]);var state_21371__$1 = state_21371;var statearr_21377_21412 = state_21371__$1;(statearr_21377_21412[(2)] = inst_21351);
(statearr_21377_21412[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (21)))
{var state_21371__$1 = state_21371;var statearr_21378_21413 = state_21371__$1;(statearr_21378_21413[(2)] = null);
(statearr_21378_21413[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (13)))
{var inst_21334 = (state_21371[(9)]);var state_21371__$1 = state_21371;var statearr_21379_21414 = state_21371__$1;(statearr_21379_21414[(2)] = inst_21334);
(statearr_21379_21414[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (22)))
{var inst_21360 = (state_21371[(2)]);var state_21371__$1 = state_21371;var statearr_21380_21415 = state_21371__$1;(statearr_21380_21415[(2)] = inst_21360);
(statearr_21380_21415[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (6)))
{var inst_21367 = (state_21371[(2)]);var state_21371__$1 = state_21371;var statearr_21381_21416 = state_21371__$1;(statearr_21381_21416[(2)] = inst_21367);
(statearr_21381_21416[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (17)))
{var state_21371__$1 = state_21371;var statearr_21382_21417 = state_21371__$1;(statearr_21382_21417[(2)] = null);
(statearr_21382_21417[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (3)))
{var inst_21369 = (state_21371[(2)]);var state_21371__$1 = state_21371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21371__$1,inst_21369);
} else
{if((state_val_21372 === (12)))
{var inst_21353 = (state_21371[(2)]);var state_21371__$1 = state_21371;var statearr_21383_21418 = state_21371__$1;(statearr_21383_21418[(2)] = inst_21353);
(statearr_21383_21418[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (2)))
{var state_21371__$1 = state_21371;if(true)
{var statearr_21384_21419 = state_21371__$1;(statearr_21384_21419[(1)] = (4));
} else
{var statearr_21385_21420 = state_21371__$1;(statearr_21385_21420[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (23)))
{var inst_21357 = (state_21371[(2)]);var state_21371__$1 = state_21371;var statearr_21386_21421 = state_21371__$1;(statearr_21386_21421[(2)] = inst_21357);
(statearr_21386_21421[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (19)))
{var inst_21344 = (state_21371[(2)]);var state_21371__$1 = state_21371;var statearr_21387_21422 = state_21371__$1;(statearr_21387_21422[(2)] = inst_21344);
(statearr_21387_21422[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (11)))
{var inst_21333 = (state_21371[(10)]);var inst_21336 = cljs.core.empty_QMARK_.call(null,inst_21333);var state_21371__$1 = state_21371;if(inst_21336)
{var statearr_21388_21423 = state_21371__$1;(statearr_21388_21423[(1)] = (13));
} else
{var statearr_21389_21424 = state_21371__$1;(statearr_21389_21424[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (9)))
{var inst_21329 = (state_21371[(7)]);var state_21371__$1 = state_21371;if(cljs.core.truth_(inst_21329))
{var statearr_21390_21425 = state_21371__$1;(statearr_21390_21425[(1)] = (20));
} else
{var statearr_21391_21426 = state_21371__$1;(statearr_21391_21426[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (5)))
{var state_21371__$1 = state_21371;var statearr_21392_21427 = state_21371__$1;(statearr_21392_21427[(2)] = null);
(statearr_21392_21427[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (14)))
{var inst_21333 = (state_21371[(10)]);var inst_21339 = cljs.core.rest.call(null,inst_21333);var inst_21340 = cljs.core.first.call(null,inst_21333);var state_21371__$1 = (function (){var statearr_21393 = state_21371;(statearr_21393[(11)] = inst_21339);
return statearr_21393;
})();if(cljs.core.truth_(inst_21340))
{var statearr_21394_21428 = state_21371__$1;(statearr_21394_21428[(1)] = (16));
} else
{var statearr_21395_21429 = state_21371__$1;(statearr_21395_21429[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (16)))
{var inst_21333 = (state_21371[(10)]);var inst_21342 = cljs.core.first.call(null,inst_21333);var state_21371__$1 = state_21371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21371__$1,(19),inst_21342);
} else
{if((state_val_21372 === (10)))
{var inst_21330 = (state_21371[(8)]);var inst_21362 = (state_21371[(2)]);var inst_21363 = cljs.core.apply.call(null,handler,inst_21362,inst_21330);var state_21371__$1 = (function (){var statearr_21396 = state_21371;(statearr_21396[(12)] = inst_21363);
return statearr_21396;
})();var statearr_21397_21430 = state_21371__$1;(statearr_21397_21430[(2)] = null);
(statearr_21397_21430[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (18)))
{var inst_21339 = (state_21371[(11)]);var inst_21334 = (state_21371[(9)]);var inst_21347 = (state_21371[(2)]);var inst_21348 = cljs.core.conj.call(null,inst_21334,inst_21347);var inst_21333 = inst_21339;var inst_21334__$1 = inst_21348;var state_21371__$1 = (function (){var statearr_21398 = state_21371;(statearr_21398[(9)] = inst_21334__$1);
(statearr_21398[(10)] = inst_21333);
return statearr_21398;
})();var statearr_21399_21431 = state_21371__$1;(statearr_21399_21431[(2)] = null);
(statearr_21399_21431[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21372 === (8)))
{var inst_21329 = (state_21371[(7)]);var inst_21333 = inst_21329;var inst_21334 = cljs.core.PersistentVector.EMPTY;var state_21371__$1 = (function (){var statearr_21400 = state_21371;(statearr_21400[(9)] = inst_21334);
(statearr_21400[(10)] = inst_21333);
return statearr_21400;
})();var statearr_21401_21432 = state_21371__$1;(statearr_21401_21432[(2)] = null);
(statearr_21401_21432[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_21405 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21405[(0)] = state_machine__5679__auto__);
(statearr_21405[(1)] = (1));
return statearr_21405;
});
var state_machine__5679__auto____1 = (function (state_21371){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_21371);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e21406){if((e21406 instanceof Object))
{var ex__5682__auto__ = e21406;var statearr_21407_21433 = state_21371;(statearr_21407_21433[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21371);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21406;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21434 = state_21371;
state_21371 = G__21434;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_21371){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_21371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_21408 = f__5694__auto__.call(null);(statearr_21408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_21408;
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
var G__21437__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__21436 = rseq;var rcomm = cljs.core.nth.call(null,vec__21436,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__21436,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__21437 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21437__delegate.call(this,req_args);};
G__21437.cljs$lang$maxFixedArity = 0;
G__21437.cljs$lang$applyTo = (function (arglist__21438){
var req_args = cljs.core.seq(arglist__21438);
return G__21437__delegate(req_args);
});
G__21437.cljs$core$IFn$_invoke$arity$variadic = G__21437__delegate;
return G__21437;
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
return (function (state_21456){var state_val_21457 = (state_21456[(1)]);if((state_val_21457 === (2)))
{var inst_21453 = (state_21456[(2)]);var inst_21454 = console.log(inst_21453);var state_21456__$1 = state_21456;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21456__$1,inst_21454);
} else
{if((state_val_21457 === (1)))
{var state_21456__$1 = state_21456;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21456__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_21461 = [null,null,null,null,null,null,null];(statearr_21461[(0)] = state_machine__5679__auto__);
(statearr_21461[(1)] = (1));
return statearr_21461;
});
var state_machine__5679__auto____1 = (function (state_21456){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_21456);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e21462){if((e21462 instanceof Object))
{var ex__5682__auto__ = e21462;var statearr_21463_21465 = state_21456;(statearr_21463_21465[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21456);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21462;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21466 = state_21456;
state_21456 = G__21466;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_21456){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_21456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_21464 = f__5694__auto__.call(null);(statearr_21464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_21464;
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
log_api.cljs$lang$applyTo = (function (arglist__21467){
var f = cljs.core.first(arglist__21467);
var args = cljs.core.rest(arglist__21467);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__21470){var vec__21471 = p__21470;var k = cljs.core.nth.call(null,vec__21471,(0),null);var v = cljs.core.nth.call(null,vec__21471,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___21498 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___21498,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___21498,r){
return (function (state_21489){var state_val_21490 = (state_21489[(1)]);if((state_val_21490 === (2)))
{var inst_21486 = (state_21489[(2)]);var inst_21487 = cljs.core.reset_BANG_.call(null,r,inst_21486);var state_21489__$1 = state_21489;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21489__$1,inst_21487);
} else
{if((state_val_21490 === (1)))
{var state_21489__$1 = state_21489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21489__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___21498,r))
;return ((function (switch__5678__auto__,c__5693__auto___21498,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_21494 = [null,null,null,null,null,null,null];(statearr_21494[(0)] = state_machine__5679__auto__);
(statearr_21494[(1)] = (1));
return statearr_21494;
});
var state_machine__5679__auto____1 = (function (state_21489){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_21489);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e21495){if((e21495 instanceof Object))
{var ex__5682__auto__ = e21495;var statearr_21496_21499 = state_21489;(statearr_21496_21499[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21489);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21500 = state_21489;
state_21489 = G__21500;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_21489){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_21489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___21498,r))
})();var state__5695__auto__ = (function (){var statearr_21497 = f__5694__auto__.call(null);(statearr_21497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___21498);
return statearr_21497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___21498,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__21501){
var id = cljs.core.first(arglist__21501);
arglist__21501 = cljs.core.next(arglist__21501);
var tolerance = cljs.core.first(arglist__21501);
var opts = cljs.core.rest(arglist__21501);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__21502){
var id = cljs.core.first(arglist__21502);
var opts = cljs.core.rest(arglist__21502);
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
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,p__21503){var vec__21505 = p__21503;var type_ids = cljs.core.nth.call(null,vec__21505,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,var_args){
var p__21503 = null;if (arguments.length > 4) {
  p__21503 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,p__21503);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 4;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__21506){
var index = cljs.core.first(arglist__21506);
arglist__21506 = cljs.core.next(arglist__21506);
var type = cljs.core.first(arglist__21506);
arglist__21506 = cljs.core.next(arglist__21506);
var blcoll = cljs.core.first(arglist__21506);
arglist__21506 = cljs.core.next(arglist__21506);
var attr = cljs.core.first(arglist__21506);
var p__21503 = cljs.core.rest(arglist__21506);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,p__21503);
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
var portfolio_company_sites__delegate = function (p__21507){var vec__21509 = p__21507;var type_ids = cljs.core.nth.call(null,vec__21509,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__21507 = null;if (arguments.length > 0) {
  p__21507 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__21507);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__21510){
var p__21507 = cljs.core.seq(arglist__21510);
return portfolio_company_sites__delegate(p__21507);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__21511){var vec__21513 = p__21511;var type_ids = cljs.core.nth.call(null,vec__21513,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__21511 = null;if (arguments.length > 0) {
  p__21511 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__21511);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__21514){
var p__21511 = cljs.core.seq(arglist__21514);
return portfolio_company_sites_by_company__delegate(p__21511);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__21515){var vec__21517 = p__21515;var type_ids = cljs.core.nth.call(null,vec__21517,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__21515 = null;if (arguments.length > 0) {
  p__21515 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__21515);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__21518){
var p__21515 = cljs.core.seq(arglist__21518);
return portfolio_company_locations__delegate(p__21515);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__21519){var vec__21521 = p__21519;var type_ids = cljs.core.nth.call(null,vec__21521,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__21519 = null;if (arguments.length > 0) {
  p__21519 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__21519);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__21522){
var p__21519 = cljs.core.seq(arglist__21522);
return portfolio_company_site_stats__delegate(p__21519);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__21523){var vec__21525 = p__21523;var type_ids = cljs.core.nth.call(null,vec__21525,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__21523 = null;if (arguments.length > 0) {
  p__21523 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__21523);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__21526){
var p__21523 = cljs.core.seq(arglist__21526);
return portfolio_company_site_account_timelines__delegate(p__21523);
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
var investment_account_timelines__delegate = function (p__21527){var vec__21529 = p__21527;var type_ids = cljs.core.nth.call(null,vec__21529,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__21527 = null;if (arguments.length > 0) {
  p__21527 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__21527);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__21530){
var p__21527 = cljs.core.seq(arglist__21530);
return investment_account_timelines__delegate(p__21527);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__21531){var vec__21533 = p__21531;var type_ids = cljs.core.nth.call(null,vec__21533,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__21531 = null;if (arguments.length > 0) {
  p__21531 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__21531);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__21534){
var p__21531 = cljs.core.seq(arglist__21534);
return investment_stats__delegate(p__21531);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__21535){var vec__21537 = p__21535;var type_ids = cljs.core.nth.call(null,vec__21537,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__21535 = null;if (arguments.length > 0) {
  p__21535 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__21535);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__21538){
var p__21535 = cljs.core.seq(arglist__21538);
return investment_aggs__delegate(p__21535);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__21539){var vec__21541 = p__21539;var type_ids = cljs.core.nth.call(null,vec__21541,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__21539 = null;if (arguments.length > 0) {
  p__21539 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__21539);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__21542){
var p__21539 = cljs.core.seq(arglist__21542);
return investments__delegate(p__21539);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
