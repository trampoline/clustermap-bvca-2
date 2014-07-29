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
var AJAX__delegate = function (url,p__22196){var map__22200 = p__22196;var map__22200__$1 = ((cljs.core.seq_QMARK_.call(null,map__22200))?cljs.core.apply.call(null,cljs.core.hash_map,map__22200):map__22200);var opts = map__22200__$1;var content = cljs.core.get.call(null,map__22200__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__22200__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__22200__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__22200,map__22200__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__22200,map__22200__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__22200,map__22200__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__22200,map__22200__$1,opts,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__22202 = method;var G__22202__$1 = (((G__22202 == null))?null:cljs.core.name.call(null,G__22202));var G__22202__$2 = (((G__22202__$1 == null))?null:clojure.string.upper_case.call(null,G__22202__$1));return G__22202__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__22196 = null;if (arguments.length > 1) {
  p__22196 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__22196);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__22203){
var url = cljs.core.first(arglist__22203);
var p__22196 = cljs.core.rest(arglist__22203);
return AJAX__delegate(url,p__22196);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__22204){var map__22206 = p__22204;var map__22206__$1 = ((cljs.core.seq_QMARK_.call(null,map__22206))?cljs.core.apply.call(null,cljs.core.hash_map,map__22206):map__22206);var opts = map__22206__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__22204 = null;if (arguments.length > 1) {
  p__22204 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__22204);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__22207){
var url = cljs.core.first(arglist__22207);
var p__22204 = cljs.core.rest(arglist__22207);
return GET__delegate(url,p__22204);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__22208){var map__22210 = p__22208;var map__22210__$1 = ((cljs.core.seq_QMARK_.call(null,map__22210))?cljs.core.apply.call(null,cljs.core.hash_map,map__22210):map__22210);var opts = map__22210__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__22208 = null;if (arguments.length > 2) {
  p__22208 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__22208);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__22211){
var url = cljs.core.first(arglist__22211);
arglist__22211 = cljs.core.next(arglist__22211);
var content = cljs.core.first(arglist__22211);
var p__22208 = cljs.core.rest(arglist__22211);
return POST__delegate(url,content,p__22208);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__22212){var map__22214 = p__22212;var map__22214__$1 = ((cljs.core.seq_QMARK_.call(null,map__22214))?cljs.core.apply.call(null,cljs.core.hash_map,map__22214):map__22214);var opts = map__22214__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__22212 = null;if (arguments.length > 2) {
  p__22212 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__22212);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__22215){
var url = cljs.core.first(arglist__22215);
arglist__22215 = cljs.core.next(arglist__22215);
var content = cljs.core.first(arglist__22215);
var p__22212 = cljs.core.rest(arglist__22215);
return PUT__delegate(url,content,p__22212);
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
return (function (state_22348){var state_val_22349 = (state_22348[(1)]);if((state_val_22349 === (7)))
{var inst_22306 = (state_22348[(7)]);var inst_22305 = (state_22348[(2)]);var inst_22306__$1 = cljs.core.nth.call(null,inst_22305,(0),null);var inst_22307 = cljs.core.nth.call(null,inst_22305,(1),null);var inst_22308 = cljs.core.sequential_QMARK_.call(null,inst_22306__$1);var state_22348__$1 = (function (){var statearr_22350 = state_22348;(statearr_22350[(8)] = inst_22307);
(statearr_22350[(7)] = inst_22306__$1);
return statearr_22350;
})();if(inst_22308)
{var statearr_22351_22386 = state_22348__$1;(statearr_22351_22386[(1)] = (8));
} else
{var statearr_22352_22387 = state_22348__$1;(statearr_22352_22387[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (20)))
{var inst_22306 = (state_22348[(7)]);var state_22348__$1 = state_22348;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22348__$1,(23),inst_22306);
} else
{if((state_val_22349 === (1)))
{var state_22348__$1 = state_22348;var statearr_22353_22388 = state_22348__$1;(statearr_22353_22388[(2)] = null);
(statearr_22353_22388[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (4)))
{var state_22348__$1 = state_22348;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22348__$1,(7),ocomm);
} else
{if((state_val_22349 === (15)))
{var inst_22328 = (state_22348[(2)]);var state_22348__$1 = state_22348;var statearr_22354_22389 = state_22348__$1;(statearr_22354_22389[(2)] = inst_22328);
(statearr_22354_22389[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (21)))
{var state_22348__$1 = state_22348;var statearr_22355_22390 = state_22348__$1;(statearr_22355_22390[(2)] = null);
(statearr_22355_22390[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (13)))
{var inst_22311 = (state_22348[(9)]);var state_22348__$1 = state_22348;var statearr_22356_22391 = state_22348__$1;(statearr_22356_22391[(2)] = inst_22311);
(statearr_22356_22391[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (22)))
{var inst_22337 = (state_22348[(2)]);var state_22348__$1 = state_22348;var statearr_22357_22392 = state_22348__$1;(statearr_22357_22392[(2)] = inst_22337);
(statearr_22357_22392[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (6)))
{var inst_22344 = (state_22348[(2)]);var state_22348__$1 = state_22348;var statearr_22358_22393 = state_22348__$1;(statearr_22358_22393[(2)] = inst_22344);
(statearr_22358_22393[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (17)))
{var state_22348__$1 = state_22348;var statearr_22359_22394 = state_22348__$1;(statearr_22359_22394[(2)] = null);
(statearr_22359_22394[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (3)))
{var inst_22346 = (state_22348[(2)]);var state_22348__$1 = state_22348;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22348__$1,inst_22346);
} else
{if((state_val_22349 === (12)))
{var inst_22330 = (state_22348[(2)]);var state_22348__$1 = state_22348;var statearr_22360_22395 = state_22348__$1;(statearr_22360_22395[(2)] = inst_22330);
(statearr_22360_22395[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (2)))
{var state_22348__$1 = state_22348;if(true)
{var statearr_22361_22396 = state_22348__$1;(statearr_22361_22396[(1)] = (4));
} else
{var statearr_22362_22397 = state_22348__$1;(statearr_22362_22397[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (23)))
{var inst_22334 = (state_22348[(2)]);var state_22348__$1 = state_22348;var statearr_22363_22398 = state_22348__$1;(statearr_22363_22398[(2)] = inst_22334);
(statearr_22363_22398[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (19)))
{var inst_22321 = (state_22348[(2)]);var state_22348__$1 = state_22348;var statearr_22364_22399 = state_22348__$1;(statearr_22364_22399[(2)] = inst_22321);
(statearr_22364_22399[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (11)))
{var inst_22310 = (state_22348[(10)]);var inst_22313 = cljs.core.empty_QMARK_.call(null,inst_22310);var state_22348__$1 = state_22348;if(inst_22313)
{var statearr_22365_22400 = state_22348__$1;(statearr_22365_22400[(1)] = (13));
} else
{var statearr_22366_22401 = state_22348__$1;(statearr_22366_22401[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (9)))
{var inst_22306 = (state_22348[(7)]);var state_22348__$1 = state_22348;if(cljs.core.truth_(inst_22306))
{var statearr_22367_22402 = state_22348__$1;(statearr_22367_22402[(1)] = (20));
} else
{var statearr_22368_22403 = state_22348__$1;(statearr_22368_22403[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (5)))
{var state_22348__$1 = state_22348;var statearr_22369_22404 = state_22348__$1;(statearr_22369_22404[(2)] = null);
(statearr_22369_22404[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (14)))
{var inst_22310 = (state_22348[(10)]);var inst_22316 = cljs.core.rest.call(null,inst_22310);var inst_22317 = cljs.core.first.call(null,inst_22310);var state_22348__$1 = (function (){var statearr_22370 = state_22348;(statearr_22370[(11)] = inst_22316);
return statearr_22370;
})();if(cljs.core.truth_(inst_22317))
{var statearr_22371_22405 = state_22348__$1;(statearr_22371_22405[(1)] = (16));
} else
{var statearr_22372_22406 = state_22348__$1;(statearr_22372_22406[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (16)))
{var inst_22310 = (state_22348[(10)]);var inst_22319 = cljs.core.first.call(null,inst_22310);var state_22348__$1 = state_22348;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22348__$1,(19),inst_22319);
} else
{if((state_val_22349 === (10)))
{var inst_22307 = (state_22348[(8)]);var inst_22339 = (state_22348[(2)]);var inst_22340 = cljs.core.apply.call(null,handler,inst_22339,inst_22307);var state_22348__$1 = (function (){var statearr_22373 = state_22348;(statearr_22373[(12)] = inst_22340);
return statearr_22373;
})();var statearr_22374_22407 = state_22348__$1;(statearr_22374_22407[(2)] = null);
(statearr_22374_22407[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (18)))
{var inst_22311 = (state_22348[(9)]);var inst_22316 = (state_22348[(11)]);var inst_22324 = (state_22348[(2)]);var inst_22325 = cljs.core.conj.call(null,inst_22311,inst_22324);var inst_22310 = inst_22316;var inst_22311__$1 = inst_22325;var state_22348__$1 = (function (){var statearr_22375 = state_22348;(statearr_22375[(9)] = inst_22311__$1);
(statearr_22375[(10)] = inst_22310);
return statearr_22375;
})();var statearr_22376_22408 = state_22348__$1;(statearr_22376_22408[(2)] = null);
(statearr_22376_22408[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22349 === (8)))
{var inst_22306 = (state_22348[(7)]);var inst_22310 = inst_22306;var inst_22311 = cljs.core.PersistentVector.EMPTY;var state_22348__$1 = (function (){var statearr_22377 = state_22348;(statearr_22377[(9)] = inst_22311);
(statearr_22377[(10)] = inst_22310);
return statearr_22377;
})();var statearr_22378_22409 = state_22348__$1;(statearr_22378_22409[(2)] = null);
(statearr_22378_22409[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_22382 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22382[(0)] = state_machine__5679__auto__);
(statearr_22382[(1)] = (1));
return statearr_22382;
});
var state_machine__5679__auto____1 = (function (state_22348){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22348);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22383){if((e22383 instanceof Object))
{var ex__5682__auto__ = e22383;var statearr_22384_22410 = state_22348;(statearr_22384_22410[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22348);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22383;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22411 = state_22348;
state_22348 = G__22411;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22348){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_22385 = f__5694__auto__.call(null);(statearr_22385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_22385;
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
var G__22414__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__22413 = rseq;var rcomm = cljs.core.nth.call(null,vec__22413,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__22413,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__22414 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22414__delegate.call(this,req_args);};
G__22414.cljs$lang$maxFixedArity = 0;
G__22414.cljs$lang$applyTo = (function (arglist__22415){
var req_args = cljs.core.seq(arglist__22415);
return G__22414__delegate(req_args);
});
G__22414.cljs$core$IFn$_invoke$arity$variadic = G__22414__delegate;
return G__22414;
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
return (function (state_22433){var state_val_22434 = (state_22433[(1)]);if((state_val_22434 === (2)))
{var inst_22430 = (state_22433[(2)]);var inst_22431 = console.log(inst_22430);var state_22433__$1 = state_22433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22433__$1,inst_22431);
} else
{if((state_val_22434 === (1)))
{var state_22433__$1 = state_22433;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22433__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_22438 = [null,null,null,null,null,null,null];(statearr_22438[(0)] = state_machine__5679__auto__);
(statearr_22438[(1)] = (1));
return statearr_22438;
});
var state_machine__5679__auto____1 = (function (state_22433){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22433);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22439){if((e22439 instanceof Object))
{var ex__5682__auto__ = e22439;var statearr_22440_22442 = state_22433;(statearr_22440_22442[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22433);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22443 = state_22433;
state_22433 = G__22443;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22433){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_22441 = f__5694__auto__.call(null);(statearr_22441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_22441;
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
log_api.cljs$lang$applyTo = (function (arglist__22444){
var f = cljs.core.first(arglist__22444);
var args = cljs.core.rest(arglist__22444);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__22447){var vec__22448 = p__22447;var k = cljs.core.nth.call(null,vec__22448,(0),null);var v = cljs.core.nth.call(null,vec__22448,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___22475 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___22475,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___22475,r){
return (function (state_22466){var state_val_22467 = (state_22466[(1)]);if((state_val_22467 === (2)))
{var inst_22463 = (state_22466[(2)]);var inst_22464 = cljs.core.reset_BANG_.call(null,r,inst_22463);var state_22466__$1 = state_22466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22466__$1,inst_22464);
} else
{if((state_val_22467 === (1)))
{var state_22466__$1 = state_22466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22466__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___22475,r))
;return ((function (switch__5678__auto__,c__5693__auto___22475,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_22471 = [null,null,null,null,null,null,null];(statearr_22471[(0)] = state_machine__5679__auto__);
(statearr_22471[(1)] = (1));
return statearr_22471;
});
var state_machine__5679__auto____1 = (function (state_22466){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22466);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22472){if((e22472 instanceof Object))
{var ex__5682__auto__ = e22472;var statearr_22473_22476 = state_22466;(statearr_22473_22476[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22466);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22472;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22477 = state_22466;
state_22466 = G__22477;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22466){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___22475,r))
})();var state__5695__auto__ = (function (){var statearr_22474 = f__5694__auto__.call(null);(statearr_22474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___22475);
return statearr_22474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___22475,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__22478){
var id = cljs.core.first(arglist__22478);
arglist__22478 = cljs.core.next(arglist__22478);
var tolerance = cljs.core.first(arglist__22478);
var opts = cljs.core.rest(arglist__22478);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__22479){
var id = cljs.core.first(arglist__22479);
var opts = cljs.core.rest(arglist__22479);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__22480){
var ids = cljs.core.first(arglist__22480);
arglist__22480 = cljs.core.next(arglist__22480);
var tolerance = cljs.core.first(arglist__22480);
var opts = cljs.core.rest(arglist__22480);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__22481){var map__22483 = p__22481;var map__22483__$1 = ((cljs.core.seq_QMARK_.call(null,map__22483))?cljs.core.apply.call(null,cljs.core.hash_map,map__22483):map__22483);var opts = map__22483__$1;var boundaryline_ids = cljs.core.get.call(null,map__22483__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__22481 = null;if (arguments.length > 3) {
  p__22481 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__22481);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__22484){
var collection_id = cljs.core.first(arglist__22484);
arglist__22484 = cljs.core.next(arglist__22484);
var tolerance = cljs.core.first(arglist__22484);
arglist__22484 = cljs.core.next(arglist__22484);
var bounds = cljs.core.first(arglist__22484);
var p__22481 = cljs.core.rest(arglist__22484);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__22481);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__22485){var vec__22487 = p__22485;var type_ids = cljs.core.nth.call(null,vec__22487,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__22485 = null;if (arguments.length > 6) {
  p__22485 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__22485);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__22488){
var index = cljs.core.first(arglist__22488);
arglist__22488 = cljs.core.next(arglist__22488);
var type = cljs.core.first(arglist__22488);
arglist__22488 = cljs.core.next(arglist__22488);
var blcoll = cljs.core.first(arglist__22488);
arglist__22488 = cljs.core.next(arglist__22488);
var attr = cljs.core.first(arglist__22488);
arglist__22488 = cljs.core.next(arglist__22488);
var filter = cljs.core.first(arglist__22488);
arglist__22488 = cljs.core.next(arglist__22488);
var bounds = cljs.core.first(arglist__22488);
var p__22485 = cljs.core.rest(arglist__22488);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__22485);
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
var portfolio_company_sites__delegate = function (p__22489){var vec__22491 = p__22489;var type_ids = cljs.core.nth.call(null,vec__22491,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__22489 = null;if (arguments.length > 0) {
  p__22489 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__22489);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__22492){
var p__22489 = cljs.core.seq(arglist__22492);
return portfolio_company_sites__delegate(p__22489);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__22493){var vec__22495 = p__22493;var type_ids = cljs.core.nth.call(null,vec__22495,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__22493 = null;if (arguments.length > 0) {
  p__22493 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__22493);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__22496){
var p__22493 = cljs.core.seq(arglist__22496);
return portfolio_company_sites_by_company__delegate(p__22493);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__22497){var vec__22499 = p__22497;var type_ids = cljs.core.nth.call(null,vec__22499,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__22497 = null;if (arguments.length > 0) {
  p__22497 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__22497);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__22500){
var p__22497 = cljs.core.seq(arglist__22500);
return portfolio_company_locations__delegate(p__22497);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__22501){var vec__22503 = p__22501;var type_ids = cljs.core.nth.call(null,vec__22503,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__22501 = null;if (arguments.length > 0) {
  p__22501 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__22501);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__22504){
var p__22501 = cljs.core.seq(arglist__22504);
return portfolio_company_site_stats__delegate(p__22501);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__22505){var vec__22507 = p__22505;var type_ids = cljs.core.nth.call(null,vec__22507,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__22505 = null;if (arguments.length > 0) {
  p__22505 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__22505);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__22508){
var p__22505 = cljs.core.seq(arglist__22508);
return portfolio_company_site_account_timelines__delegate(p__22505);
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
var investment_account_timelines__delegate = function (p__22509){var vec__22511 = p__22509;var type_ids = cljs.core.nth.call(null,vec__22511,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__22509 = null;if (arguments.length > 0) {
  p__22509 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__22509);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__22512){
var p__22509 = cljs.core.seq(arglist__22512);
return investment_account_timelines__delegate(p__22509);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__22513){var vec__22515 = p__22513;var type_ids = cljs.core.nth.call(null,vec__22515,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__22513 = null;if (arguments.length > 0) {
  p__22513 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__22513);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__22516){
var p__22513 = cljs.core.seq(arglist__22516);
return investment_stats__delegate(p__22513);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__22517){var vec__22519 = p__22517;var type_ids = cljs.core.nth.call(null,vec__22519,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__22517 = null;if (arguments.length > 0) {
  p__22517 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__22517);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__22520){
var p__22517 = cljs.core.seq(arglist__22520);
return investment_aggs__delegate(p__22517);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__22521){var vec__22523 = p__22521;var type_ids = cljs.core.nth.call(null,vec__22523,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__22521 = null;if (arguments.length > 0) {
  p__22521 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__22521);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__22524){
var p__22521 = cljs.core.seq(arglist__22524);
return investments__delegate(p__22521);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
