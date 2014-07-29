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
var AJAX__delegate = function (url,p__22230){var map__22234 = p__22230;var map__22234__$1 = ((cljs.core.seq_QMARK_.call(null,map__22234))?cljs.core.apply.call(null,cljs.core.hash_map,map__22234):map__22234);var opts = map__22234__$1;var content = cljs.core.get.call(null,map__22234__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__22234__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__22234__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__22234,map__22234__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__22234,map__22234__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__22234,map__22234__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__22234,map__22234__$1,opts,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__22236 = method;var G__22236__$1 = (((G__22236 == null))?null:cljs.core.name.call(null,G__22236));var G__22236__$2 = (((G__22236__$1 == null))?null:clojure.string.upper_case.call(null,G__22236__$1));return G__22236__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__22230 = null;if (arguments.length > 1) {
  p__22230 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__22230);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__22237){
var url = cljs.core.first(arglist__22237);
var p__22230 = cljs.core.rest(arglist__22237);
return AJAX__delegate(url,p__22230);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__22238){var map__22240 = p__22238;var map__22240__$1 = ((cljs.core.seq_QMARK_.call(null,map__22240))?cljs.core.apply.call(null,cljs.core.hash_map,map__22240):map__22240);var opts = map__22240__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__22238 = null;if (arguments.length > 1) {
  p__22238 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__22238);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__22241){
var url = cljs.core.first(arglist__22241);
var p__22238 = cljs.core.rest(arglist__22241);
return GET__delegate(url,p__22238);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__22242){var map__22244 = p__22242;var map__22244__$1 = ((cljs.core.seq_QMARK_.call(null,map__22244))?cljs.core.apply.call(null,cljs.core.hash_map,map__22244):map__22244);var opts = map__22244__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__22242 = null;if (arguments.length > 2) {
  p__22242 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__22242);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__22245){
var url = cljs.core.first(arglist__22245);
arglist__22245 = cljs.core.next(arglist__22245);
var content = cljs.core.first(arglist__22245);
var p__22242 = cljs.core.rest(arglist__22245);
return POST__delegate(url,content,p__22242);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__22246){var map__22248 = p__22246;var map__22248__$1 = ((cljs.core.seq_QMARK_.call(null,map__22248))?cljs.core.apply.call(null,cljs.core.hash_map,map__22248):map__22248);var opts = map__22248__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__22246 = null;if (arguments.length > 2) {
  p__22246 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__22246);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__22249){
var url = cljs.core.first(arglist__22249);
arglist__22249 = cljs.core.next(arglist__22249);
var content = cljs.core.first(arglist__22249);
var p__22246 = cljs.core.rest(arglist__22249);
return PUT__delegate(url,content,p__22246);
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
return (function (state_22382){var state_val_22383 = (state_22382[(1)]);if((state_val_22383 === (7)))
{var inst_22340 = (state_22382[(7)]);var inst_22339 = (state_22382[(2)]);var inst_22340__$1 = cljs.core.nth.call(null,inst_22339,(0),null);var inst_22341 = cljs.core.nth.call(null,inst_22339,(1),null);var inst_22342 = cljs.core.sequential_QMARK_.call(null,inst_22340__$1);var state_22382__$1 = (function (){var statearr_22384 = state_22382;(statearr_22384[(7)] = inst_22340__$1);
(statearr_22384[(8)] = inst_22341);
return statearr_22384;
})();if(inst_22342)
{var statearr_22385_22420 = state_22382__$1;(statearr_22385_22420[(1)] = (8));
} else
{var statearr_22386_22421 = state_22382__$1;(statearr_22386_22421[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (20)))
{var inst_22340 = (state_22382[(7)]);var state_22382__$1 = state_22382;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22382__$1,(23),inst_22340);
} else
{if((state_val_22383 === (1)))
{var state_22382__$1 = state_22382;var statearr_22387_22422 = state_22382__$1;(statearr_22387_22422[(2)] = null);
(statearr_22387_22422[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (4)))
{var state_22382__$1 = state_22382;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22382__$1,(7),ocomm);
} else
{if((state_val_22383 === (15)))
{var inst_22362 = (state_22382[(2)]);var state_22382__$1 = state_22382;var statearr_22388_22423 = state_22382__$1;(statearr_22388_22423[(2)] = inst_22362);
(statearr_22388_22423[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (21)))
{var state_22382__$1 = state_22382;var statearr_22389_22424 = state_22382__$1;(statearr_22389_22424[(2)] = null);
(statearr_22389_22424[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (13)))
{var inst_22345 = (state_22382[(9)]);var state_22382__$1 = state_22382;var statearr_22390_22425 = state_22382__$1;(statearr_22390_22425[(2)] = inst_22345);
(statearr_22390_22425[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (22)))
{var inst_22371 = (state_22382[(2)]);var state_22382__$1 = state_22382;var statearr_22391_22426 = state_22382__$1;(statearr_22391_22426[(2)] = inst_22371);
(statearr_22391_22426[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (6)))
{var inst_22378 = (state_22382[(2)]);var state_22382__$1 = state_22382;var statearr_22392_22427 = state_22382__$1;(statearr_22392_22427[(2)] = inst_22378);
(statearr_22392_22427[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (17)))
{var state_22382__$1 = state_22382;var statearr_22393_22428 = state_22382__$1;(statearr_22393_22428[(2)] = null);
(statearr_22393_22428[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (3)))
{var inst_22380 = (state_22382[(2)]);var state_22382__$1 = state_22382;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22382__$1,inst_22380);
} else
{if((state_val_22383 === (12)))
{var inst_22364 = (state_22382[(2)]);var state_22382__$1 = state_22382;var statearr_22394_22429 = state_22382__$1;(statearr_22394_22429[(2)] = inst_22364);
(statearr_22394_22429[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (2)))
{var state_22382__$1 = state_22382;if(true)
{var statearr_22395_22430 = state_22382__$1;(statearr_22395_22430[(1)] = (4));
} else
{var statearr_22396_22431 = state_22382__$1;(statearr_22396_22431[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (23)))
{var inst_22368 = (state_22382[(2)]);var state_22382__$1 = state_22382;var statearr_22397_22432 = state_22382__$1;(statearr_22397_22432[(2)] = inst_22368);
(statearr_22397_22432[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (19)))
{var inst_22355 = (state_22382[(2)]);var state_22382__$1 = state_22382;var statearr_22398_22433 = state_22382__$1;(statearr_22398_22433[(2)] = inst_22355);
(statearr_22398_22433[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (11)))
{var inst_22344 = (state_22382[(10)]);var inst_22347 = cljs.core.empty_QMARK_.call(null,inst_22344);var state_22382__$1 = state_22382;if(inst_22347)
{var statearr_22399_22434 = state_22382__$1;(statearr_22399_22434[(1)] = (13));
} else
{var statearr_22400_22435 = state_22382__$1;(statearr_22400_22435[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (9)))
{var inst_22340 = (state_22382[(7)]);var state_22382__$1 = state_22382;if(cljs.core.truth_(inst_22340))
{var statearr_22401_22436 = state_22382__$1;(statearr_22401_22436[(1)] = (20));
} else
{var statearr_22402_22437 = state_22382__$1;(statearr_22402_22437[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (5)))
{var state_22382__$1 = state_22382;var statearr_22403_22438 = state_22382__$1;(statearr_22403_22438[(2)] = null);
(statearr_22403_22438[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (14)))
{var inst_22344 = (state_22382[(10)]);var inst_22350 = cljs.core.rest.call(null,inst_22344);var inst_22351 = cljs.core.first.call(null,inst_22344);var state_22382__$1 = (function (){var statearr_22404 = state_22382;(statearr_22404[(11)] = inst_22350);
return statearr_22404;
})();if(cljs.core.truth_(inst_22351))
{var statearr_22405_22439 = state_22382__$1;(statearr_22405_22439[(1)] = (16));
} else
{var statearr_22406_22440 = state_22382__$1;(statearr_22406_22440[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (16)))
{var inst_22344 = (state_22382[(10)]);var inst_22353 = cljs.core.first.call(null,inst_22344);var state_22382__$1 = state_22382;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22382__$1,(19),inst_22353);
} else
{if((state_val_22383 === (10)))
{var inst_22341 = (state_22382[(8)]);var inst_22373 = (state_22382[(2)]);var inst_22374 = cljs.core.apply.call(null,handler,inst_22373,inst_22341);var state_22382__$1 = (function (){var statearr_22407 = state_22382;(statearr_22407[(12)] = inst_22374);
return statearr_22407;
})();var statearr_22408_22441 = state_22382__$1;(statearr_22408_22441[(2)] = null);
(statearr_22408_22441[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (18)))
{var inst_22345 = (state_22382[(9)]);var inst_22350 = (state_22382[(11)]);var inst_22358 = (state_22382[(2)]);var inst_22359 = cljs.core.conj.call(null,inst_22345,inst_22358);var inst_22344 = inst_22350;var inst_22345__$1 = inst_22359;var state_22382__$1 = (function (){var statearr_22409 = state_22382;(statearr_22409[(10)] = inst_22344);
(statearr_22409[(9)] = inst_22345__$1);
return statearr_22409;
})();var statearr_22410_22442 = state_22382__$1;(statearr_22410_22442[(2)] = null);
(statearr_22410_22442[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22383 === (8)))
{var inst_22340 = (state_22382[(7)]);var inst_22344 = inst_22340;var inst_22345 = cljs.core.PersistentVector.EMPTY;var state_22382__$1 = (function (){var statearr_22411 = state_22382;(statearr_22411[(10)] = inst_22344);
(statearr_22411[(9)] = inst_22345);
return statearr_22411;
})();var statearr_22412_22443 = state_22382__$1;(statearr_22412_22443[(2)] = null);
(statearr_22412_22443[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_22416 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22416[(0)] = state_machine__5679__auto__);
(statearr_22416[(1)] = (1));
return statearr_22416;
});
var state_machine__5679__auto____1 = (function (state_22382){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22382);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22417){if((e22417 instanceof Object))
{var ex__5682__auto__ = e22417;var statearr_22418_22444 = state_22382;(statearr_22418_22444[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22382);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22417;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22445 = state_22382;
state_22382 = G__22445;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22382){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_22419 = f__5694__auto__.call(null);(statearr_22419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_22419;
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
var G__22448__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__22447 = rseq;var rcomm = cljs.core.nth.call(null,vec__22447,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__22447,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__22448 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22448__delegate.call(this,req_args);};
G__22448.cljs$lang$maxFixedArity = 0;
G__22448.cljs$lang$applyTo = (function (arglist__22449){
var req_args = cljs.core.seq(arglist__22449);
return G__22448__delegate(req_args);
});
G__22448.cljs$core$IFn$_invoke$arity$variadic = G__22448__delegate;
return G__22448;
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
return (function (state_22467){var state_val_22468 = (state_22467[(1)]);if((state_val_22468 === (2)))
{var inst_22464 = (state_22467[(2)]);var inst_22465 = console.log(inst_22464);var state_22467__$1 = state_22467;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22467__$1,inst_22465);
} else
{if((state_val_22468 === (1)))
{var state_22467__$1 = state_22467;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22467__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_22472 = [null,null,null,null,null,null,null];(statearr_22472[(0)] = state_machine__5679__auto__);
(statearr_22472[(1)] = (1));
return statearr_22472;
});
var state_machine__5679__auto____1 = (function (state_22467){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22467);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22473){if((e22473 instanceof Object))
{var ex__5682__auto__ = e22473;var statearr_22474_22476 = state_22467;(statearr_22474_22476[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22467);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22477 = state_22467;
state_22467 = G__22477;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22467){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_22475 = f__5694__auto__.call(null);(statearr_22475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_22475;
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
log_api.cljs$lang$applyTo = (function (arglist__22478){
var f = cljs.core.first(arglist__22478);
var args = cljs.core.rest(arglist__22478);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__22481){var vec__22482 = p__22481;var k = cljs.core.nth.call(null,vec__22482,(0),null);var v = cljs.core.nth.call(null,vec__22482,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___22509 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___22509,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___22509,r){
return (function (state_22500){var state_val_22501 = (state_22500[(1)]);if((state_val_22501 === (2)))
{var inst_22497 = (state_22500[(2)]);var inst_22498 = cljs.core.reset_BANG_.call(null,r,inst_22497);var state_22500__$1 = state_22500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22500__$1,inst_22498);
} else
{if((state_val_22501 === (1)))
{var state_22500__$1 = state_22500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22500__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___22509,r))
;return ((function (switch__5678__auto__,c__5693__auto___22509,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_22505 = [null,null,null,null,null,null,null];(statearr_22505[(0)] = state_machine__5679__auto__);
(statearr_22505[(1)] = (1));
return statearr_22505;
});
var state_machine__5679__auto____1 = (function (state_22500){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22500);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22506){if((e22506 instanceof Object))
{var ex__5682__auto__ = e22506;var statearr_22507_22510 = state_22500;(statearr_22507_22510[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22500);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22511 = state_22500;
state_22500 = G__22511;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22500){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___22509,r))
})();var state__5695__auto__ = (function (){var statearr_22508 = f__5694__auto__.call(null);(statearr_22508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___22509);
return statearr_22508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___22509,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__22512){
var id = cljs.core.first(arglist__22512);
arglist__22512 = cljs.core.next(arglist__22512);
var tolerance = cljs.core.first(arglist__22512);
var opts = cljs.core.rest(arglist__22512);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__22513){
var id = cljs.core.first(arglist__22513);
var opts = cljs.core.rest(arglist__22513);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__22514){
var ids = cljs.core.first(arglist__22514);
arglist__22514 = cljs.core.next(arglist__22514);
var tolerance = cljs.core.first(arglist__22514);
var opts = cljs.core.rest(arglist__22514);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__22515){var map__22517 = p__22515;var map__22517__$1 = ((cljs.core.seq_QMARK_.call(null,map__22517))?cljs.core.apply.call(null,cljs.core.hash_map,map__22517):map__22517);var opts = map__22517__$1;var boundaryline_ids = cljs.core.get.call(null,map__22517__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__22515 = null;if (arguments.length > 3) {
  p__22515 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__22515);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__22518){
var collection_id = cljs.core.first(arglist__22518);
arglist__22518 = cljs.core.next(arglist__22518);
var tolerance = cljs.core.first(arglist__22518);
arglist__22518 = cljs.core.next(arglist__22518);
var bounds = cljs.core.first(arglist__22518);
var p__22515 = cljs.core.rest(arglist__22518);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__22515);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__22519){var vec__22521 = p__22519;var type_ids = cljs.core.nth.call(null,vec__22521,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__22519 = null;if (arguments.length > 6) {
  p__22519 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__22519);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__22522){
var index = cljs.core.first(arglist__22522);
arglist__22522 = cljs.core.next(arglist__22522);
var type = cljs.core.first(arglist__22522);
arglist__22522 = cljs.core.next(arglist__22522);
var blcoll = cljs.core.first(arglist__22522);
arglist__22522 = cljs.core.next(arglist__22522);
var attr = cljs.core.first(arglist__22522);
arglist__22522 = cljs.core.next(arglist__22522);
var filter = cljs.core.first(arglist__22522);
arglist__22522 = cljs.core.next(arglist__22522);
var bounds = cljs.core.first(arglist__22522);
var p__22519 = cljs.core.rest(arglist__22522);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__22519);
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
var portfolio_company_sites__delegate = function (p__22523){var vec__22525 = p__22523;var type_ids = cljs.core.nth.call(null,vec__22525,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__22523 = null;if (arguments.length > 0) {
  p__22523 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__22523);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__22526){
var p__22523 = cljs.core.seq(arglist__22526);
return portfolio_company_sites__delegate(p__22523);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__22527){var vec__22529 = p__22527;var type_ids = cljs.core.nth.call(null,vec__22529,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__22527 = null;if (arguments.length > 0) {
  p__22527 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__22527);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__22530){
var p__22527 = cljs.core.seq(arglist__22530);
return portfolio_company_sites_by_company__delegate(p__22527);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__22531){var vec__22533 = p__22531;var type_ids = cljs.core.nth.call(null,vec__22533,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__22531 = null;if (arguments.length > 0) {
  p__22531 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__22531);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__22534){
var p__22531 = cljs.core.seq(arglist__22534);
return portfolio_company_locations__delegate(p__22531);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__22535){var vec__22537 = p__22535;var type_ids = cljs.core.nth.call(null,vec__22537,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__22535 = null;if (arguments.length > 0) {
  p__22535 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__22535);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__22538){
var p__22535 = cljs.core.seq(arglist__22538);
return portfolio_company_site_stats__delegate(p__22535);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__22539){var vec__22541 = p__22539;var type_ids = cljs.core.nth.call(null,vec__22541,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__22539 = null;if (arguments.length > 0) {
  p__22539 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__22539);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__22542){
var p__22539 = cljs.core.seq(arglist__22542);
return portfolio_company_site_account_timelines__delegate(p__22539);
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
var investment_account_timelines__delegate = function (p__22543){var vec__22545 = p__22543;var type_ids = cljs.core.nth.call(null,vec__22545,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__22543 = null;if (arguments.length > 0) {
  p__22543 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__22543);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__22546){
var p__22543 = cljs.core.seq(arglist__22546);
return investment_account_timelines__delegate(p__22543);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__22547){var vec__22549 = p__22547;var type_ids = cljs.core.nth.call(null,vec__22549,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__22547 = null;if (arguments.length > 0) {
  p__22547 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__22547);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__22550){
var p__22547 = cljs.core.seq(arglist__22550);
return investment_stats__delegate(p__22547);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__22551){var vec__22553 = p__22551;var type_ids = cljs.core.nth.call(null,vec__22553,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__22551 = null;if (arguments.length > 0) {
  p__22551 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__22551);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__22554){
var p__22551 = cljs.core.seq(arglist__22554);
return investment_aggs__delegate(p__22551);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__22555){var vec__22557 = p__22555;var type_ids = cljs.core.nth.call(null,vec__22557,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__22555 = null;if (arguments.length > 0) {
  p__22555 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__22555);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__22558){
var p__22555 = cljs.core.seq(arglist__22558);
return investments__delegate(p__22555);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
