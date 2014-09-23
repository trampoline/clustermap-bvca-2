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
var AJAX__delegate = function (url,p__35191){var map__35195 = p__35191;var map__35195__$1 = ((cljs.core.seq_QMARK_(map__35195))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35195):map__35195);var opts = map__35195__$1;var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35195__$1,cljs.core.constant$keyword$850);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35195__$1,cljs.core.constant$keyword$851);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35195__$1,cljs.core.constant$keyword$852);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__35195,map__35195__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__35195,map__35195__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$831,true], 0));
}
});})(comm,map__35195,map__35195__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__35195,map__35195__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__35197 = method;var G__35197__$1 = (((G__35197 == null))?null:cljs.core.name(G__35197));var G__35197__$2 = (((G__35197__$1 == null))?null:clojure.string.upper_case(G__35197__$1));return G__35197__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__35191 = null;if (arguments.length > 1) {
  p__35191 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__35191);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__35198){
var url = cljs.core.first(arglist__35198);
var p__35191 = cljs.core.rest(arglist__35198);
return AJAX__delegate(url,p__35191);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__35199){var map__35201 = p__35199;var map__35201__$1 = ((cljs.core.seq_QMARK_(map__35201))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35201):map__35201);var opts = map__35201__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$851,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__35199 = null;if (arguments.length > 1) {
  p__35199 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__35199);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__35202){
var url = cljs.core.first(arglist__35202);
var p__35199 = cljs.core.rest(arglist__35202);
return GET__delegate(url,p__35199);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__35203){var map__35205 = p__35203;var map__35205__$1 = ((cljs.core.seq_QMARK_(map__35205))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35205):map__35205);var opts = map__35205__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$851,"POST",cljs.core.constant$keyword$850,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__35203 = null;if (arguments.length > 2) {
  p__35203 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__35203);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__35206){
var url = cljs.core.first(arglist__35206);
arglist__35206 = cljs.core.next(arglist__35206);
var content = cljs.core.first(arglist__35206);
var p__35203 = cljs.core.rest(arglist__35206);
return POST__delegate(url,content,p__35203);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__35207){var map__35209 = p__35207;var map__35209__$1 = ((cljs.core.seq_QMARK_(map__35209))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35209):map__35209);var opts = map__35209__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$851,"PUT",cljs.core.constant$keyword$850,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__35207 = null;if (arguments.length > 2) {
  p__35207 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__35207);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__35210){
var url = cljs.core.first(arglist__35210);
arglist__35210 = cljs.core.next(arglist__35210);
var content = cljs.core.first(arglist__35210);
var p__35207 = cljs.core.rest(arglist__35210);
return PUT__delegate(url,content,p__35207);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_35345){var state_val_35346 = (state_35345[(1)]);if((state_val_35346 === (7)))
{var inst_35302 = (state_35345[(7)]);var inst_35301 = (state_35345[(2)]);var inst_35302__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35301,(0),null);var inst_35303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35301,(1),null);var inst_35304 = cljs.core.sequential_QMARK_(inst_35302__$1);var state_35345__$1 = (function (){var statearr_35347 = state_35345;(statearr_35347[(8)] = inst_35303);
(statearr_35347[(7)] = inst_35302__$1);
return statearr_35347;
})();if(inst_35304)
{var statearr_35348_35383 = state_35345__$1;(statearr_35348_35383[(1)] = (8));
} else
{var statearr_35349_35384 = state_35345__$1;(statearr_35349_35384[(1)] = (9));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (20)))
{var inst_35302 = (state_35345[(7)]);var state_35345__$1 = state_35345;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35345__$1,(23),inst_35302);
} else
{if((state_val_35346 === (1)))
{var state_35345__$1 = state_35345;var statearr_35350_35385 = state_35345__$1;(statearr_35350_35385[(2)] = null);
(statearr_35350_35385[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (4)))
{var state_35345__$1 = state_35345;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35345__$1,(7),ocomm);
} else
{if((state_val_35346 === (15)))
{var inst_35325 = (state_35345[(2)]);var state_35345__$1 = state_35345;var statearr_35351_35386 = state_35345__$1;(statearr_35351_35386[(2)] = inst_35325);
(statearr_35351_35386[(1)] = (12));
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (21)))
{var state_35345__$1 = state_35345;var statearr_35352_35387 = state_35345__$1;(statearr_35352_35387[(2)] = null);
(statearr_35352_35387[(1)] = (22));
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (13)))
{var inst_35308 = (state_35345[(9)]);var state_35345__$1 = state_35345;var statearr_35353_35388 = state_35345__$1;(statearr_35353_35388[(2)] = inst_35308);
(statearr_35353_35388[(1)] = (15));
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (22)))
{var inst_35334 = (state_35345[(2)]);var state_35345__$1 = state_35345;var statearr_35354_35389 = state_35345__$1;(statearr_35354_35389[(2)] = inst_35334);
(statearr_35354_35389[(1)] = (10));
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (6)))
{var inst_35341 = (state_35345[(2)]);var state_35345__$1 = state_35345;var statearr_35355_35390 = state_35345__$1;(statearr_35355_35390[(2)] = inst_35341);
(statearr_35355_35390[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (17)))
{var state_35345__$1 = state_35345;var statearr_35356_35391 = state_35345__$1;(statearr_35356_35391[(2)] = null);
(statearr_35356_35391[(1)] = (18));
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (3)))
{var inst_35343 = (state_35345[(2)]);var state_35345__$1 = state_35345;return cljs.core.async.impl.ioc_helpers.return_chan(state_35345__$1,inst_35343);
} else
{if((state_val_35346 === (12)))
{var inst_35327 = (state_35345[(2)]);var state_35345__$1 = state_35345;var statearr_35357_35392 = state_35345__$1;(statearr_35357_35392[(2)] = inst_35327);
(statearr_35357_35392[(1)] = (10));
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (2)))
{var state_35345__$1 = state_35345;var statearr_35358_35393 = state_35345__$1;(statearr_35358_35393[(1)] = (4));

return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (23)))
{var inst_35331 = (state_35345[(2)]);var state_35345__$1 = state_35345;var statearr_35360_35394 = state_35345__$1;(statearr_35360_35394[(2)] = inst_35331);
(statearr_35360_35394[(1)] = (22));
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (19)))
{var inst_35318 = (state_35345[(2)]);var state_35345__$1 = state_35345;var statearr_35361_35395 = state_35345__$1;(statearr_35361_35395[(2)] = inst_35318);
(statearr_35361_35395[(1)] = (18));
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (11)))
{var inst_35307 = (state_35345[(10)]);var inst_35310 = cljs.core.empty_QMARK_(inst_35307);var state_35345__$1 = state_35345;if(inst_35310)
{var statearr_35362_35396 = state_35345__$1;(statearr_35362_35396[(1)] = (13));
} else
{var statearr_35363_35397 = state_35345__$1;(statearr_35363_35397[(1)] = (14));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (9)))
{var inst_35302 = (state_35345[(7)]);var state_35345__$1 = state_35345;if(cljs.core.truth_(inst_35302))
{var statearr_35364_35398 = state_35345__$1;(statearr_35364_35398[(1)] = (20));
} else
{var statearr_35365_35399 = state_35345__$1;(statearr_35365_35399[(1)] = (21));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (5)))
{var state_35345__$1 = state_35345;var statearr_35366_35400 = state_35345__$1;(statearr_35366_35400[(2)] = null);
(statearr_35366_35400[(1)] = (6));
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (14)))
{var inst_35307 = (state_35345[(10)]);var inst_35313 = cljs.core.rest(inst_35307);var inst_35314 = cljs.core.first(inst_35307);var state_35345__$1 = (function (){var statearr_35367 = state_35345;(statearr_35367[(11)] = inst_35313);
return statearr_35367;
})();if(cljs.core.truth_(inst_35314))
{var statearr_35368_35401 = state_35345__$1;(statearr_35368_35401[(1)] = (16));
} else
{var statearr_35369_35402 = state_35345__$1;(statearr_35369_35402[(1)] = (17));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (16)))
{var inst_35307 = (state_35345[(10)]);var inst_35316 = cljs.core.first(inst_35307);var state_35345__$1 = state_35345;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35345__$1,(19),inst_35316);
} else
{if((state_val_35346 === (10)))
{var inst_35303 = (state_35345[(8)]);var inst_35336 = (state_35345[(2)]);var inst_35337 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_35336,inst_35303);var state_35345__$1 = (function (){var statearr_35370 = state_35345;(statearr_35370[(12)] = inst_35337);
return statearr_35370;
})();var statearr_35371_35403 = state_35345__$1;(statearr_35371_35403[(2)] = null);
(statearr_35371_35403[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (18)))
{var inst_35313 = (state_35345[(11)]);var inst_35308 = (state_35345[(9)]);var inst_35321 = (state_35345[(2)]);var inst_35322 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_35308,inst_35321);var inst_35307 = inst_35313;var inst_35308__$1 = inst_35322;var state_35345__$1 = (function (){var statearr_35372 = state_35345;(statearr_35372[(10)] = inst_35307);
(statearr_35372[(9)] = inst_35308__$1);
return statearr_35372;
})();var statearr_35373_35404 = state_35345__$1;(statearr_35373_35404[(2)] = null);
(statearr_35373_35404[(1)] = (11));
return cljs.core.constant$keyword$836;
} else
{if((state_val_35346 === (8)))
{var inst_35302 = (state_35345[(7)]);var inst_35306 = cljs.core.PersistentVector.EMPTY;var inst_35307 = inst_35302;var inst_35308 = inst_35306;var state_35345__$1 = (function (){var statearr_35374 = state_35345;(statearr_35374[(10)] = inst_35307);
(statearr_35374[(9)] = inst_35308);
return statearr_35374;
})();var statearr_35375_35405 = state_35345__$1;(statearr_35375_35405[(2)] = null);
(statearr_35375_35405[(1)] = (11));
return cljs.core.constant$keyword$836;
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
var state_machine__5694__auto____0 = (function (){var statearr_35379 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35379[(0)] = state_machine__5694__auto__);
(statearr_35379[(1)] = (1));
return statearr_35379;
});
var state_machine__5694__auto____1 = (function (state_35345){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_35345);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35380){if((e35380 instanceof Object))
{var ex__5697__auto__ = e35380;var statearr_35381_35406 = state_35345;(statearr_35381_35406[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35345);
return cljs.core.constant$keyword$836;
} else
{throw e35380;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__35407 = state_35345;
state_35345 = G__35407;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35345){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_35382 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_35382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_35382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
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
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__35410__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__35409 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35409,(0),null);var result_handler_args = cljs.core.nthnext(vec__35409,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__35410 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__35410__delegate.call(this,req_args);};
G__35410.cljs$lang$maxFixedArity = 0;
G__35410.cljs$lang$applyTo = (function (arglist__35411){
var req_args = cljs.core.seq(arglist__35411);
return G__35410__delegate(req_args);
});
G__35410.cljs$core$IFn$_invoke$arity$variadic = G__35410__delegate;
return G__35410;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,ch){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,ch){
return (function (state_35429){var state_val_35430 = (state_35429[(1)]);if((state_val_35430 === (2)))
{var inst_35426 = (state_35429[(2)]);var inst_35427 = console.log(inst_35426);var state_35429__$1 = state_35429;return cljs.core.async.impl.ioc_helpers.return_chan(state_35429__$1,inst_35427);
} else
{if((state_val_35430 === (1)))
{var state_35429__$1 = state_35429;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35429__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_35434 = [null,null,null,null,null,null,null];(statearr_35434[(0)] = state_machine__5694__auto__);
(statearr_35434[(1)] = (1));
return statearr_35434;
});
var state_machine__5694__auto____1 = (function (state_35429){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_35429);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35435){if((e35435 instanceof Object))
{var ex__5697__auto__ = e35435;var statearr_35436_35438 = state_35429;(statearr_35436_35438[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35429);
return cljs.core.constant$keyword$836;
} else
{throw e35435;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__35439 = state_35429;
state_35429 = G__35439;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35429){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_35437 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_35437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_35437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,ch))
);
return c__5708__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__35440){
var f = cljs.core.first(arglist__35440);
var args = cljs.core.rest(arglist__35440);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35443){var vec__35444 = p__35443;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35444,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35444,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var c__5708__auto___35471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___35471,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___35471,r){
return (function (state_35462){var state_val_35463 = (state_35462[(1)]);if((state_val_35463 === (2)))
{var inst_35459 = (state_35462[(2)]);var inst_35460 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(r,inst_35459) : cljs.core.reset_BANG_.call(null,r,inst_35459));var state_35462__$1 = state_35462;return cljs.core.async.impl.ioc_helpers.return_chan(state_35462__$1,inst_35460);
} else
{if((state_val_35463 === (1)))
{var state_35462__$1 = state_35462;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35462__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___35471,r))
;return ((function (switch__5693__auto__,c__5708__auto___35471,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_35467 = [null,null,null,null,null,null,null];(statearr_35467[(0)] = state_machine__5694__auto__);
(statearr_35467[(1)] = (1));
return statearr_35467;
});
var state_machine__5694__auto____1 = (function (state_35462){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_35462);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35468){if((e35468 instanceof Object))
{var ex__5697__auto__ = e35468;var statearr_35469_35472 = state_35462;(statearr_35469_35472[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35462);
return cljs.core.constant$keyword$836;
} else
{throw e35468;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__35473 = state_35462;
state_35462 = G__35473;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35462){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___35471,r))
})();var state__5710__auto__ = (function (){var statearr_35470 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_35470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___35471);
return statearr_35470;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___35471,r))
);
return r;
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__35474){
var id = cljs.core.first(arglist__35474);
arglist__35474 = cljs.core.next(arglist__35474);
var tolerance = cljs.core.first(arglist__35474);
var opts = cljs.core.rest(arglist__35474);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__35475){
var id = cljs.core.first(arglist__35475);
var opts = cljs.core.rest(arglist__35475);
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
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$853,ids,cljs.core.constant$keyword$854,tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__35476){
var ids = cljs.core.first(arglist__35476);
arglist__35476 = cljs.core.next(arglist__35476);
var tolerance = cljs.core.first(arglist__35476);
var opts = cljs.core.rest(arglist__35476);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__35477){var map__35479 = p__35477;var map__35479__$1 = ((cljs.core.seq_QMARK_(map__35479))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35479):map__35479);var opts = map__35479__$1;var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35479__$1,cljs.core.constant$keyword$855);var opts__$1 = cljs.core.flatten(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$855)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$856,bounds,cljs.core.constant$keyword$855,boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__35477 = null;if (arguments.length > 3) {
  p__35477 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__35477);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__35480){
var collection_id = cljs.core.first(arglist__35480);
arglist__35480 = cljs.core.next(arglist__35480);
var tolerance = cljs.core.first(arglist__35480);
arglist__35480 = cljs.core.next(arglist__35480);
var bounds = cljs.core.first(arglist__35480);
var p__35477 = cljs.core.rest(arglist__35480);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__35477);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__35481){var vec__35483 = p__35481;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35483,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$857,filter,cljs.core.constant$keyword$856,bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__35481 = null;if (arguments.length > 6) {
  p__35481 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__35481);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__35484){
var index = cljs.core.first(arglist__35484);
arglist__35484 = cljs.core.next(arglist__35484);
var type = cljs.core.first(arglist__35484);
arglist__35484 = cljs.core.next(arglist__35484);
var blcoll = cljs.core.first(arglist__35484);
arglist__35484 = cljs.core.next(arglist__35484);
var attr = cljs.core.first(arglist__35484);
arglist__35484 = cljs.core.next(arglist__35484);
var filter = cljs.core.first(arglist__35484);
arglist__35484 = cljs.core.next(arglist__35484);
var bounds = cljs.core.first(arglist__35484);
var p__35481 = cljs.core.rest(arglist__35484);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__35481);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattr,filter,bounds,p__35485){var vec__35487 = p__35485;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35487,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(statsattr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$857,filter,cljs.core.constant$keyword$856,bounds], null));
};
var summary_stats = function (index,type,statsattr,filter,bounds,var_args){
var p__35485 = null;if (arguments.length > 5) {
  p__35485 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattr,filter,bounds,p__35485);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__35488){
var index = cljs.core.first(arglist__35488);
arglist__35488 = cljs.core.next(arglist__35488);
var type = cljs.core.first(arglist__35488);
arglist__35488 = cljs.core.next(arglist__35488);
var statsattr = cljs.core.first(arglist__35488);
arglist__35488 = cljs.core.next(arglist__35488);
var filter = cljs.core.first(arglist__35488);
arglist__35488 = cljs.core.next(arglist__35488);
var bounds = cljs.core.first(arglist__35488);
var p__35485 = cljs.core.rest(arglist__35488);
return summary_stats__delegate(index,type,statsattr,filter,bounds,p__35485);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__35489){var vec__35491 = p__35489;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35491,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$858,max_count,cljs.core.constant$keyword$859,attrs,cljs.core.constant$keyword$857,filter,cljs.core.constant$keyword$856,bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__35489 = null;if (arguments.length > 7) {
  p__35489 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__35489);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__35492){
var index = cljs.core.first(arglist__35492);
arglist__35492 = cljs.core.next(arglist__35492);
var type = cljs.core.first(arglist__35492);
arglist__35492 = cljs.core.next(arglist__35492);
var location_attr = cljs.core.first(arglist__35492);
arglist__35492 = cljs.core.next(arglist__35492);
var attrs = cljs.core.first(arglist__35492);
arglist__35492 = cljs.core.next(arglist__35492);
var max_count = cljs.core.first(arglist__35492);
arglist__35492 = cljs.core.next(arglist__35492);
var filter = cljs.core.first(arglist__35492);
arglist__35492 = cljs.core.next(arglist__35492);
var bounds = cljs.core.first(arglist__35492);
var p__35489 = cljs.core.rest(arglist__35492);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__35489);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > (0)))
{return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/constituencies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__35493){var vec__35495 = p__35493;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35495,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$860,(100),cljs.core.constant$keyword$861,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$862,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__35493 = null;if (arguments.length > 0) {
  p__35493 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__35493);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__35496){
var p__35493 = cljs.core.seq(arglist__35496);
return portfolio_company_sites__delegate(p__35493);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__35497){var vec__35499 = p__35497;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35499,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$860,(100),cljs.core.constant$keyword$861,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$862,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__35497 = null;if (arguments.length > 0) {
  p__35497 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__35497);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__35500){
var p__35497 = cljs.core.seq(arglist__35500);
return portfolio_company_sites_by_company__delegate(p__35497);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__35501){var vec__35503 = p__35501;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35503,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__35501 = null;if (arguments.length > 0) {
  p__35501 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__35501);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__35504){
var p__35501 = cljs.core.seq(arglist__35504);
return portfolio_company_locations__delegate(p__35501);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__35505){var vec__35507 = p__35505;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35507,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__35505 = null;if (arguments.length > 0) {
  p__35505 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__35505);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__35508){
var p__35505 = cljs.core.seq(arglist__35508);
return portfolio_company_site_stats__delegate(p__35505);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__35509){var vec__35511 = p__35509;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35511,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__35509 = null;if (arguments.length > 0) {
  p__35509 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__35509);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__35512){
var p__35509 = cljs.core.seq(arglist__35512);
return portfolio_company_site_account_timelines__delegate(p__35509);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investor-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__35513){var vec__35515 = p__35513;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35515,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_account_timelines = function (var_args){
var p__35513 = null;if (arguments.length > 0) {
  p__35513 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__35513);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__35516){
var p__35513 = cljs.core.seq(arglist__35516);
return investment_account_timelines__delegate(p__35513);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__35517){var vec__35519 = p__35517;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35519,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_stats = function (var_args){
var p__35517 = null;if (arguments.length > 0) {
  p__35517 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__35517);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__35520){
var p__35517 = cljs.core.seq(arglist__35520);
return investment_stats__delegate(p__35517);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__35521){var vec__35523 = p__35521;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35523,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$860,(50),cljs.core.constant$keyword$863,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$864,"desc"], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__35521 = null;if (arguments.length > 0) {
  p__35521 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__35521);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__35524){
var p__35521 = cljs.core.seq(arglist__35524);
return investment_aggs__delegate(p__35521);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__35525){var vec__35527 = p__35525;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35527,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$860,(50),cljs.core.constant$keyword$863,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$865,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$866,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investments = function (var_args){
var p__35525 = null;if (arguments.length > 0) {
  p__35525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__35525);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__35528){
var p__35525 = cljs.core.seq(arglist__35528);
return investments__delegate(p__35525);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
