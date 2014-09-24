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
var AJAX__delegate = function (url,p__35239){var map__35243 = p__35239;var map__35243__$1 = ((cljs.core.seq_QMARK_(map__35243))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35243):map__35243);var opts = map__35243__$1;var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35243__$1,cljs.core.constant$keyword$858);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35243__$1,cljs.core.constant$keyword$859);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35243__$1,cljs.core.constant$keyword$860);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__35243,map__35243__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__35243,map__35243__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$839,true], 0));
}
});})(comm,map__35243,map__35243__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__35243,map__35243__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__35245 = method;var G__35245__$1 = (((G__35245 == null))?null:cljs.core.name(G__35245));var G__35245__$2 = (((G__35245__$1 == null))?null:clojure.string.upper_case(G__35245__$1));return G__35245__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__35239 = null;if (arguments.length > 1) {
  p__35239 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__35239);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__35246){
var url = cljs.core.first(arglist__35246);
var p__35239 = cljs.core.rest(arglist__35246);
return AJAX__delegate(url,p__35239);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__35247){var map__35249 = p__35247;var map__35249__$1 = ((cljs.core.seq_QMARK_(map__35249))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35249):map__35249);var opts = map__35249__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$859,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__35247 = null;if (arguments.length > 1) {
  p__35247 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__35247);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__35250){
var url = cljs.core.first(arglist__35250);
var p__35247 = cljs.core.rest(arglist__35250);
return GET__delegate(url,p__35247);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__35251){var map__35253 = p__35251;var map__35253__$1 = ((cljs.core.seq_QMARK_(map__35253))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35253):map__35253);var opts = map__35253__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$859,"POST",cljs.core.constant$keyword$858,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__35251 = null;if (arguments.length > 2) {
  p__35251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__35251);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__35254){
var url = cljs.core.first(arglist__35254);
arglist__35254 = cljs.core.next(arglist__35254);
var content = cljs.core.first(arglist__35254);
var p__35251 = cljs.core.rest(arglist__35254);
return POST__delegate(url,content,p__35251);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__35255){var map__35257 = p__35255;var map__35257__$1 = ((cljs.core.seq_QMARK_(map__35257))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35257):map__35257);var opts = map__35257__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$859,"PUT",cljs.core.constant$keyword$858,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__35255 = null;if (arguments.length > 2) {
  p__35255 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__35255);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__35258){
var url = cljs.core.first(arglist__35258);
arglist__35258 = cljs.core.next(arglist__35258);
var content = cljs.core.first(arglist__35258);
var p__35255 = cljs.core.rest(arglist__35258);
return PUT__delegate(url,content,p__35255);
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
return (function (state_35393){var state_val_35394 = (state_35393[(1)]);if((state_val_35394 === (7)))
{var inst_35350 = (state_35393[(7)]);var inst_35349 = (state_35393[(2)]);var inst_35350__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35349,(0),null);var inst_35351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35349,(1),null);var inst_35352 = cljs.core.sequential_QMARK_(inst_35350__$1);var state_35393__$1 = (function (){var statearr_35395 = state_35393;(statearr_35395[(7)] = inst_35350__$1);
(statearr_35395[(8)] = inst_35351);
return statearr_35395;
})();if(inst_35352)
{var statearr_35396_35431 = state_35393__$1;(statearr_35396_35431[(1)] = (8));
} else
{var statearr_35397_35432 = state_35393__$1;(statearr_35397_35432[(1)] = (9));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (20)))
{var inst_35350 = (state_35393[(7)]);var state_35393__$1 = state_35393;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35393__$1,(23),inst_35350);
} else
{if((state_val_35394 === (1)))
{var state_35393__$1 = state_35393;var statearr_35398_35433 = state_35393__$1;(statearr_35398_35433[(2)] = null);
(statearr_35398_35433[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (4)))
{var state_35393__$1 = state_35393;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35393__$1,(7),ocomm);
} else
{if((state_val_35394 === (15)))
{var inst_35373 = (state_35393[(2)]);var state_35393__$1 = state_35393;var statearr_35399_35434 = state_35393__$1;(statearr_35399_35434[(2)] = inst_35373);
(statearr_35399_35434[(1)] = (12));
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (21)))
{var state_35393__$1 = state_35393;var statearr_35400_35435 = state_35393__$1;(statearr_35400_35435[(2)] = null);
(statearr_35400_35435[(1)] = (22));
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (13)))
{var inst_35356 = (state_35393[(9)]);var state_35393__$1 = state_35393;var statearr_35401_35436 = state_35393__$1;(statearr_35401_35436[(2)] = inst_35356);
(statearr_35401_35436[(1)] = (15));
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (22)))
{var inst_35382 = (state_35393[(2)]);var state_35393__$1 = state_35393;var statearr_35402_35437 = state_35393__$1;(statearr_35402_35437[(2)] = inst_35382);
(statearr_35402_35437[(1)] = (10));
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (6)))
{var inst_35389 = (state_35393[(2)]);var state_35393__$1 = state_35393;var statearr_35403_35438 = state_35393__$1;(statearr_35403_35438[(2)] = inst_35389);
(statearr_35403_35438[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (17)))
{var state_35393__$1 = state_35393;var statearr_35404_35439 = state_35393__$1;(statearr_35404_35439[(2)] = null);
(statearr_35404_35439[(1)] = (18));
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (3)))
{var inst_35391 = (state_35393[(2)]);var state_35393__$1 = state_35393;return cljs.core.async.impl.ioc_helpers.return_chan(state_35393__$1,inst_35391);
} else
{if((state_val_35394 === (12)))
{var inst_35375 = (state_35393[(2)]);var state_35393__$1 = state_35393;var statearr_35405_35440 = state_35393__$1;(statearr_35405_35440[(2)] = inst_35375);
(statearr_35405_35440[(1)] = (10));
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (2)))
{var state_35393__$1 = state_35393;var statearr_35406_35441 = state_35393__$1;(statearr_35406_35441[(1)] = (4));

return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (23)))
{var inst_35379 = (state_35393[(2)]);var state_35393__$1 = state_35393;var statearr_35408_35442 = state_35393__$1;(statearr_35408_35442[(2)] = inst_35379);
(statearr_35408_35442[(1)] = (22));
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (19)))
{var inst_35366 = (state_35393[(2)]);var state_35393__$1 = state_35393;var statearr_35409_35443 = state_35393__$1;(statearr_35409_35443[(2)] = inst_35366);
(statearr_35409_35443[(1)] = (18));
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (11)))
{var inst_35355 = (state_35393[(10)]);var inst_35358 = cljs.core.empty_QMARK_(inst_35355);var state_35393__$1 = state_35393;if(inst_35358)
{var statearr_35410_35444 = state_35393__$1;(statearr_35410_35444[(1)] = (13));
} else
{var statearr_35411_35445 = state_35393__$1;(statearr_35411_35445[(1)] = (14));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (9)))
{var inst_35350 = (state_35393[(7)]);var state_35393__$1 = state_35393;if(cljs.core.truth_(inst_35350))
{var statearr_35412_35446 = state_35393__$1;(statearr_35412_35446[(1)] = (20));
} else
{var statearr_35413_35447 = state_35393__$1;(statearr_35413_35447[(1)] = (21));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (5)))
{var state_35393__$1 = state_35393;var statearr_35414_35448 = state_35393__$1;(statearr_35414_35448[(2)] = null);
(statearr_35414_35448[(1)] = (6));
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (14)))
{var inst_35355 = (state_35393[(10)]);var inst_35361 = cljs.core.rest(inst_35355);var inst_35362 = cljs.core.first(inst_35355);var state_35393__$1 = (function (){var statearr_35415 = state_35393;(statearr_35415[(11)] = inst_35361);
return statearr_35415;
})();if(cljs.core.truth_(inst_35362))
{var statearr_35416_35449 = state_35393__$1;(statearr_35416_35449[(1)] = (16));
} else
{var statearr_35417_35450 = state_35393__$1;(statearr_35417_35450[(1)] = (17));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (16)))
{var inst_35355 = (state_35393[(10)]);var inst_35364 = cljs.core.first(inst_35355);var state_35393__$1 = state_35393;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35393__$1,(19),inst_35364);
} else
{if((state_val_35394 === (10)))
{var inst_35351 = (state_35393[(8)]);var inst_35384 = (state_35393[(2)]);var inst_35385 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_35384,inst_35351);var state_35393__$1 = (function (){var statearr_35418 = state_35393;(statearr_35418[(12)] = inst_35385);
return statearr_35418;
})();var statearr_35419_35451 = state_35393__$1;(statearr_35419_35451[(2)] = null);
(statearr_35419_35451[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (18)))
{var inst_35356 = (state_35393[(9)]);var inst_35361 = (state_35393[(11)]);var inst_35369 = (state_35393[(2)]);var inst_35370 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_35356,inst_35369);var inst_35355 = inst_35361;var inst_35356__$1 = inst_35370;var state_35393__$1 = (function (){var statearr_35420 = state_35393;(statearr_35420[(10)] = inst_35355);
(statearr_35420[(9)] = inst_35356__$1);
return statearr_35420;
})();var statearr_35421_35452 = state_35393__$1;(statearr_35421_35452[(2)] = null);
(statearr_35421_35452[(1)] = (11));
return cljs.core.constant$keyword$844;
} else
{if((state_val_35394 === (8)))
{var inst_35350 = (state_35393[(7)]);var inst_35354 = cljs.core.PersistentVector.EMPTY;var inst_35355 = inst_35350;var inst_35356 = inst_35354;var state_35393__$1 = (function (){var statearr_35422 = state_35393;(statearr_35422[(10)] = inst_35355);
(statearr_35422[(9)] = inst_35356);
return statearr_35422;
})();var statearr_35423_35453 = state_35393__$1;(statearr_35423_35453[(2)] = null);
(statearr_35423_35453[(1)] = (11));
return cljs.core.constant$keyword$844;
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
var state_machine__5694__auto____0 = (function (){var statearr_35427 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35427[(0)] = state_machine__5694__auto__);
(statearr_35427[(1)] = (1));
return statearr_35427;
});
var state_machine__5694__auto____1 = (function (state_35393){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_35393);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35428){if((e35428 instanceof Object))
{var ex__5697__auto__ = e35428;var statearr_35429_35454 = state_35393;(statearr_35429_35454[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35393);
return cljs.core.constant$keyword$844;
} else
{throw e35428;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__35455 = state_35393;
state_35393 = G__35455;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35393){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_35430 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_35430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_35430;
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
var G__35458__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__35457 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35457,(0),null);var result_handler_args = cljs.core.nthnext(vec__35457,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__35458 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__35458__delegate.call(this,req_args);};
G__35458.cljs$lang$maxFixedArity = 0;
G__35458.cljs$lang$applyTo = (function (arglist__35459){
var req_args = cljs.core.seq(arglist__35459);
return G__35458__delegate(req_args);
});
G__35458.cljs$core$IFn$_invoke$arity$variadic = G__35458__delegate;
return G__35458;
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
return (function (state_35477){var state_val_35478 = (state_35477[(1)]);if((state_val_35478 === (2)))
{var inst_35474 = (state_35477[(2)]);var inst_35475 = console.log(inst_35474);var state_35477__$1 = state_35477;return cljs.core.async.impl.ioc_helpers.return_chan(state_35477__$1,inst_35475);
} else
{if((state_val_35478 === (1)))
{var state_35477__$1 = state_35477;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35477__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_35482 = [null,null,null,null,null,null,null];(statearr_35482[(0)] = state_machine__5694__auto__);
(statearr_35482[(1)] = (1));
return statearr_35482;
});
var state_machine__5694__auto____1 = (function (state_35477){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_35477);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35483){if((e35483 instanceof Object))
{var ex__5697__auto__ = e35483;var statearr_35484_35486 = state_35477;(statearr_35484_35486[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35477);
return cljs.core.constant$keyword$844;
} else
{throw e35483;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__35487 = state_35477;
state_35477 = G__35487;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35477){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_35485 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_35485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_35485;
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
log_api.cljs$lang$applyTo = (function (arglist__35488){
var f = cljs.core.first(arglist__35488);
var args = cljs.core.rest(arglist__35488);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35491){var vec__35492 = p__35491;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35492,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35492,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var c__5708__auto___35519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___35519,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___35519,r){
return (function (state_35510){var state_val_35511 = (state_35510[(1)]);if((state_val_35511 === (2)))
{var inst_35507 = (state_35510[(2)]);var inst_35508 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(r,inst_35507) : cljs.core.reset_BANG_.call(null,r,inst_35507));var state_35510__$1 = state_35510;return cljs.core.async.impl.ioc_helpers.return_chan(state_35510__$1,inst_35508);
} else
{if((state_val_35511 === (1)))
{var state_35510__$1 = state_35510;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35510__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___35519,r))
;return ((function (switch__5693__auto__,c__5708__auto___35519,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_35515 = [null,null,null,null,null,null,null];(statearr_35515[(0)] = state_machine__5694__auto__);
(statearr_35515[(1)] = (1));
return statearr_35515;
});
var state_machine__5694__auto____1 = (function (state_35510){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_35510);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35516){if((e35516 instanceof Object))
{var ex__5697__auto__ = e35516;var statearr_35517_35520 = state_35510;(statearr_35517_35520[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35510);
return cljs.core.constant$keyword$844;
} else
{throw e35516;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__35521 = state_35510;
state_35510 = G__35521;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35510){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___35519,r))
})();var state__5710__auto__ = (function (){var statearr_35518 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_35518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___35519);
return statearr_35518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___35519,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__35522){
var id = cljs.core.first(arglist__35522);
arglist__35522 = cljs.core.next(arglist__35522);
var tolerance = cljs.core.first(arglist__35522);
var opts = cljs.core.rest(arglist__35522);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__35523){
var id = cljs.core.first(arglist__35523);
var opts = cljs.core.rest(arglist__35523);
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
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$861,ids,cljs.core.constant$keyword$862,tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__35524){
var ids = cljs.core.first(arglist__35524);
arglist__35524 = cljs.core.next(arglist__35524);
var tolerance = cljs.core.first(arglist__35524);
var opts = cljs.core.rest(arglist__35524);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__35525){var map__35527 = p__35525;var map__35527__$1 = ((cljs.core.seq_QMARK_(map__35527))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35527):map__35527);var opts = map__35527__$1;var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35527__$1,cljs.core.constant$keyword$863);var opts__$1 = cljs.core.flatten(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$863)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$864,bounds,cljs.core.constant$keyword$863,boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__35525 = null;if (arguments.length > 3) {
  p__35525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__35525);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__35528){
var collection_id = cljs.core.first(arglist__35528);
arglist__35528 = cljs.core.next(arglist__35528);
var tolerance = cljs.core.first(arglist__35528);
arglist__35528 = cljs.core.next(arglist__35528);
var bounds = cljs.core.first(arglist__35528);
var p__35525 = cljs.core.rest(arglist__35528);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__35525);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__35529){var vec__35531 = p__35529;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35531,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$865,filter,cljs.core.constant$keyword$864,bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__35529 = null;if (arguments.length > 6) {
  p__35529 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__35529);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__35532){
var index = cljs.core.first(arglist__35532);
arglist__35532 = cljs.core.next(arglist__35532);
var type = cljs.core.first(arglist__35532);
arglist__35532 = cljs.core.next(arglist__35532);
var blcoll = cljs.core.first(arglist__35532);
arglist__35532 = cljs.core.next(arglist__35532);
var attr = cljs.core.first(arglist__35532);
arglist__35532 = cljs.core.next(arglist__35532);
var filter = cljs.core.first(arglist__35532);
arglist__35532 = cljs.core.next(arglist__35532);
var bounds = cljs.core.first(arglist__35532);
var p__35529 = cljs.core.rest(arglist__35532);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__35529);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__35533){var vec__35535 = p__35533;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35535,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$866,statsattrs,cljs.core.constant$keyword$865,filter,cljs.core.constant$keyword$864,bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__35533 = null;if (arguments.length > 5) {
  p__35533 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__35533);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__35536){
var index = cljs.core.first(arglist__35536);
arglist__35536 = cljs.core.next(arglist__35536);
var type = cljs.core.first(arglist__35536);
arglist__35536 = cljs.core.next(arglist__35536);
var statsattrs = cljs.core.first(arglist__35536);
arglist__35536 = cljs.core.next(arglist__35536);
var filter = cljs.core.first(arglist__35536);
arglist__35536 = cljs.core.next(arglist__35536);
var bounds = cljs.core.first(arglist__35536);
var p__35533 = cljs.core.rest(arglist__35536);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__35533);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__35537){var vec__35539 = p__35537;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35539,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$867,max_count,cljs.core.constant$keyword$868,attrs,cljs.core.constant$keyword$865,filter,cljs.core.constant$keyword$864,bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__35537 = null;if (arguments.length > 7) {
  p__35537 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__35537);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__35540){
var index = cljs.core.first(arglist__35540);
arglist__35540 = cljs.core.next(arglist__35540);
var type = cljs.core.first(arglist__35540);
arglist__35540 = cljs.core.next(arglist__35540);
var location_attr = cljs.core.first(arglist__35540);
arglist__35540 = cljs.core.next(arglist__35540);
var attrs = cljs.core.first(arglist__35540);
arglist__35540 = cljs.core.next(arglist__35540);
var max_count = cljs.core.first(arglist__35540);
arglist__35540 = cljs.core.next(arglist__35540);
var filter = cljs.core.first(arglist__35540);
arglist__35540 = cljs.core.next(arglist__35540);
var bounds = cljs.core.first(arglist__35540);
var p__35537 = cljs.core.rest(arglist__35540);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__35537);
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
var portfolio_company_sites__delegate = function (p__35541){var vec__35543 = p__35541;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35543,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$869,(100),cljs.core.constant$keyword$870,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$871,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__35541 = null;if (arguments.length > 0) {
  p__35541 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__35541);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__35544){
var p__35541 = cljs.core.seq(arglist__35544);
return portfolio_company_sites__delegate(p__35541);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__35545){var vec__35547 = p__35545;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35547,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$869,(100),cljs.core.constant$keyword$870,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$871,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__35545 = null;if (arguments.length > 0) {
  p__35545 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__35545);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__35548){
var p__35545 = cljs.core.seq(arglist__35548);
return portfolio_company_sites_by_company__delegate(p__35545);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__35549){var vec__35551 = p__35549;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35551,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__35549 = null;if (arguments.length > 0) {
  p__35549 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__35549);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__35552){
var p__35549 = cljs.core.seq(arglist__35552);
return portfolio_company_locations__delegate(p__35549);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__35553){var vec__35555 = p__35553;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35555,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__35553 = null;if (arguments.length > 0) {
  p__35553 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__35553);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__35556){
var p__35553 = cljs.core.seq(arglist__35556);
return portfolio_company_site_stats__delegate(p__35553);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__35557){var vec__35559 = p__35557;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35559,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__35557 = null;if (arguments.length > 0) {
  p__35557 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__35557);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__35560){
var p__35557 = cljs.core.seq(arglist__35560);
return portfolio_company_site_account_timelines__delegate(p__35557);
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
var investment_account_timelines__delegate = function (p__35561){var vec__35563 = p__35561;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35563,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_account_timelines = function (var_args){
var p__35561 = null;if (arguments.length > 0) {
  p__35561 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__35561);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__35564){
var p__35561 = cljs.core.seq(arglist__35564);
return investment_account_timelines__delegate(p__35561);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__35565){var vec__35567 = p__35565;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35567,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_stats = function (var_args){
var p__35565 = null;if (arguments.length > 0) {
  p__35565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__35565);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__35568){
var p__35565 = cljs.core.seq(arglist__35568);
return investment_stats__delegate(p__35565);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__35569){var vec__35571 = p__35569;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35571,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$869,(50),cljs.core.constant$keyword$872,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$873,"desc"], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__35569 = null;if (arguments.length > 0) {
  p__35569 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__35569);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__35572){
var p__35569 = cljs.core.seq(arglist__35572);
return investment_aggs__delegate(p__35569);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__35573){var vec__35575 = p__35573;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35575,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$869,(50),cljs.core.constant$keyword$872,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$874,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$875,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investments = function (var_args){
var p__35573 = null;if (arguments.length > 0) {
  p__35573 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__35573);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__35576){
var p__35573 = cljs.core.seq(arglist__35576);
return investments__delegate(p__35573);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
