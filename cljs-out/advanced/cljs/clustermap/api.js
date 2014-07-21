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
var AJAX__delegate = function (url,p__35237){var map__35241 = p__35237;var map__35241__$1 = ((cljs.core.seq_QMARK_(map__35241))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35241):map__35241);var opts = map__35241__$1;var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35241__$1,cljs.core.constant$keyword$787);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35241__$1,cljs.core.constant$keyword$788);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35241__$1,cljs.core.constant$keyword$789);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__35241,map__35241__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__35241,map__35241__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$768,true], 0));
}
});})(comm,map__35241,map__35241__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__35241,map__35241__$1,opts,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__35243 = method;var G__35243__$1 = (((G__35243 == null))?null:cljs.core.name(G__35243));var G__35243__$2 = (((G__35243__$1 == null))?null:clojure.string.upper_case(G__35243__$1));return G__35243__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__35237 = null;if (arguments.length > 1) {
  p__35237 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__35237);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__35244){
var url = cljs.core.first(arglist__35244);
var p__35237 = cljs.core.rest(arglist__35244);
return AJAX__delegate(url,p__35237);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__35245){var map__35247 = p__35245;var map__35247__$1 = ((cljs.core.seq_QMARK_(map__35247))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35247):map__35247);var opts = map__35247__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$788,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__35245 = null;if (arguments.length > 1) {
  p__35245 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__35245);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__35248){
var url = cljs.core.first(arglist__35248);
var p__35245 = cljs.core.rest(arglist__35248);
return GET__delegate(url,p__35245);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__35249){var map__35251 = p__35249;var map__35251__$1 = ((cljs.core.seq_QMARK_(map__35251))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35251):map__35251);var opts = map__35251__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$788,"POST",cljs.core.constant$keyword$787,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__35249 = null;if (arguments.length > 2) {
  p__35249 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__35249);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__35252){
var url = cljs.core.first(arglist__35252);
arglist__35252 = cljs.core.next(arglist__35252);
var content = cljs.core.first(arglist__35252);
var p__35249 = cljs.core.rest(arglist__35252);
return POST__delegate(url,content,p__35249);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__35253){var map__35255 = p__35253;var map__35255__$1 = ((cljs.core.seq_QMARK_(map__35255))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35255):map__35255);var opts = map__35255__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$788,"PUT",cljs.core.constant$keyword$787,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__35253 = null;if (arguments.length > 2) {
  p__35253 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__35253);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__35256){
var url = cljs.core.first(arglist__35256);
arglist__35256 = cljs.core.next(arglist__35256);
var content = cljs.core.first(arglist__35256);
var p__35253 = cljs.core.rest(arglist__35256);
return PUT__delegate(url,content,p__35253);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_35389){var state_val_35390 = (state_35389[(1)]);if((state_val_35390 === (7)))
{var inst_35347 = (state_35389[(7)]);var inst_35346 = (state_35389[(2)]);var inst_35347__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35346,(0),null);var inst_35348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35346,(1),null);var inst_35349 = cljs.core.sequential_QMARK_(inst_35347__$1);var state_35389__$1 = (function (){var statearr_35391 = state_35389;(statearr_35391[(7)] = inst_35347__$1);
(statearr_35391[(8)] = inst_35348);
return statearr_35391;
})();if(inst_35349)
{var statearr_35392_35427 = state_35389__$1;(statearr_35392_35427[(1)] = (8));
} else
{var statearr_35393_35428 = state_35389__$1;(statearr_35393_35428[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (20)))
{var inst_35347 = (state_35389[(7)]);var state_35389__$1 = state_35389;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35389__$1,(23),inst_35347);
} else
{if((state_val_35390 === (1)))
{var state_35389__$1 = state_35389;var statearr_35394_35429 = state_35389__$1;(statearr_35394_35429[(2)] = null);
(statearr_35394_35429[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (4)))
{var state_35389__$1 = state_35389;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35389__$1,(7),ocomm);
} else
{if((state_val_35390 === (15)))
{var inst_35369 = (state_35389[(2)]);var state_35389__$1 = state_35389;var statearr_35395_35430 = state_35389__$1;(statearr_35395_35430[(2)] = inst_35369);
(statearr_35395_35430[(1)] = (12));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (21)))
{var state_35389__$1 = state_35389;var statearr_35396_35431 = state_35389__$1;(statearr_35396_35431[(2)] = null);
(statearr_35396_35431[(1)] = (22));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (13)))
{var inst_35352 = (state_35389[(9)]);var state_35389__$1 = state_35389;var statearr_35397_35432 = state_35389__$1;(statearr_35397_35432[(2)] = inst_35352);
(statearr_35397_35432[(1)] = (15));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (22)))
{var inst_35378 = (state_35389[(2)]);var state_35389__$1 = state_35389;var statearr_35398_35433 = state_35389__$1;(statearr_35398_35433[(2)] = inst_35378);
(statearr_35398_35433[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (6)))
{var inst_35385 = (state_35389[(2)]);var state_35389__$1 = state_35389;var statearr_35399_35434 = state_35389__$1;(statearr_35399_35434[(2)] = inst_35385);
(statearr_35399_35434[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (17)))
{var state_35389__$1 = state_35389;var statearr_35400_35435 = state_35389__$1;(statearr_35400_35435[(2)] = null);
(statearr_35400_35435[(1)] = (18));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (3)))
{var inst_35387 = (state_35389[(2)]);var state_35389__$1 = state_35389;return cljs.core.async.impl.ioc_helpers.return_chan(state_35389__$1,inst_35387);
} else
{if((state_val_35390 === (12)))
{var inst_35371 = (state_35389[(2)]);var state_35389__$1 = state_35389;var statearr_35401_35436 = state_35389__$1;(statearr_35401_35436[(2)] = inst_35371);
(statearr_35401_35436[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (2)))
{var state_35389__$1 = state_35389;if(true)
{var statearr_35402_35437 = state_35389__$1;(statearr_35402_35437[(1)] = (4));
} else
{var statearr_35403_35438 = state_35389__$1;(statearr_35403_35438[(1)] = (5));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (23)))
{var inst_35375 = (state_35389[(2)]);var state_35389__$1 = state_35389;var statearr_35404_35439 = state_35389__$1;(statearr_35404_35439[(2)] = inst_35375);
(statearr_35404_35439[(1)] = (22));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (19)))
{var inst_35362 = (state_35389[(2)]);var state_35389__$1 = state_35389;var statearr_35405_35440 = state_35389__$1;(statearr_35405_35440[(2)] = inst_35362);
(statearr_35405_35440[(1)] = (18));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (11)))
{var inst_35351 = (state_35389[(10)]);var inst_35354 = cljs.core.empty_QMARK_(inst_35351);var state_35389__$1 = state_35389;if(inst_35354)
{var statearr_35406_35441 = state_35389__$1;(statearr_35406_35441[(1)] = (13));
} else
{var statearr_35407_35442 = state_35389__$1;(statearr_35407_35442[(1)] = (14));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (9)))
{var inst_35347 = (state_35389[(7)]);var state_35389__$1 = state_35389;if(cljs.core.truth_(inst_35347))
{var statearr_35408_35443 = state_35389__$1;(statearr_35408_35443[(1)] = (20));
} else
{var statearr_35409_35444 = state_35389__$1;(statearr_35409_35444[(1)] = (21));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (5)))
{var state_35389__$1 = state_35389;var statearr_35410_35445 = state_35389__$1;(statearr_35410_35445[(2)] = null);
(statearr_35410_35445[(1)] = (6));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (14)))
{var inst_35351 = (state_35389[(10)]);var inst_35357 = cljs.core.rest(inst_35351);var inst_35358 = cljs.core.first(inst_35351);var state_35389__$1 = (function (){var statearr_35411 = state_35389;(statearr_35411[(11)] = inst_35357);
return statearr_35411;
})();if(cljs.core.truth_(inst_35358))
{var statearr_35412_35446 = state_35389__$1;(statearr_35412_35446[(1)] = (16));
} else
{var statearr_35413_35447 = state_35389__$1;(statearr_35413_35447[(1)] = (17));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (16)))
{var inst_35351 = (state_35389[(10)]);var inst_35360 = cljs.core.first(inst_35351);var state_35389__$1 = state_35389;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35389__$1,(19),inst_35360);
} else
{if((state_val_35390 === (10)))
{var inst_35348 = (state_35389[(8)]);var inst_35380 = (state_35389[(2)]);var inst_35381 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_35380,inst_35348);var state_35389__$1 = (function (){var statearr_35414 = state_35389;(statearr_35414[(12)] = inst_35381);
return statearr_35414;
})();var statearr_35415_35448 = state_35389__$1;(statearr_35415_35448[(2)] = null);
(statearr_35415_35448[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (18)))
{var inst_35352 = (state_35389[(9)]);var inst_35357 = (state_35389[(11)]);var inst_35365 = (state_35389[(2)]);var inst_35366 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_35352,inst_35365);var inst_35351 = inst_35357;var inst_35352__$1 = inst_35366;var state_35389__$1 = (function (){var statearr_35416 = state_35389;(statearr_35416[(9)] = inst_35352__$1);
(statearr_35416[(10)] = inst_35351);
return statearr_35416;
})();var statearr_35417_35449 = state_35389__$1;(statearr_35417_35449[(2)] = null);
(statearr_35417_35449[(1)] = (11));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35390 === (8)))
{var inst_35347 = (state_35389[(7)]);var inst_35351 = inst_35347;var inst_35352 = cljs.core.PersistentVector.EMPTY;var state_35389__$1 = (function (){var statearr_35418 = state_35389;(statearr_35418[(9)] = inst_35352);
(statearr_35418[(10)] = inst_35351);
return statearr_35418;
})();var statearr_35419_35450 = state_35389__$1;(statearr_35419_35450[(2)] = null);
(statearr_35419_35450[(1)] = (11));
return cljs.core.constant$keyword$773;
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
var state_machine__5679__auto____0 = (function (){var statearr_35423 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35423[(0)] = state_machine__5679__auto__);
(statearr_35423[(1)] = (1));
return statearr_35423;
});
var state_machine__5679__auto____1 = (function (state_35389){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_35389);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e35424){if((e35424 instanceof Object))
{var ex__5682__auto__ = e35424;var statearr_35425_35451 = state_35389;(statearr_35425_35451[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35389);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e35424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__35452 = state_35389;
state_35389 = G__35452;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_35389){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_35389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_35426 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_35426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_35426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
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
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__35455__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__35454 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35454,(0),null);var result_handler_args = cljs.core.nthnext(vec__35454,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__35455 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__35455__delegate.call(this,req_args);};
G__35455.cljs$lang$maxFixedArity = 0;
G__35455.cljs$lang$applyTo = (function (arglist__35456){
var req_args = cljs.core.seq(arglist__35456);
return G__35455__delegate(req_args);
});
G__35455.cljs$core$IFn$_invoke$arity$variadic = G__35455__delegate;
return G__35455;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,ch){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,ch){
return (function (state_35474){var state_val_35475 = (state_35474[(1)]);if((state_val_35475 === (2)))
{var inst_35471 = (state_35474[(2)]);var inst_35472 = console.log(inst_35471);var state_35474__$1 = state_35474;return cljs.core.async.impl.ioc_helpers.return_chan(state_35474__$1,inst_35472);
} else
{if((state_val_35475 === (1)))
{var state_35474__$1 = state_35474;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35474__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_35479 = [null,null,null,null,null,null,null];(statearr_35479[(0)] = state_machine__5679__auto__);
(statearr_35479[(1)] = (1));
return statearr_35479;
});
var state_machine__5679__auto____1 = (function (state_35474){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_35474);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e35480){if((e35480 instanceof Object))
{var ex__5682__auto__ = e35480;var statearr_35481_35483 = state_35474;(statearr_35481_35483[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35474);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e35480;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__35484 = state_35474;
state_35474 = G__35484;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_35474){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_35474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_35482 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_35482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_35482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,ch))
);
return c__5693__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__35485){
var f = cljs.core.first(arglist__35485);
var args = cljs.core.rest(arglist__35485);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35488){var vec__35489 = p__35488;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35489,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35489,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var c__5693__auto___35516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___35516,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___35516,r){
return (function (state_35507){var state_val_35508 = (state_35507[(1)]);if((state_val_35508 === (2)))
{var inst_35504 = (state_35507[(2)]);var inst_35505 = cljs.core.reset_BANG_(r,inst_35504);var state_35507__$1 = state_35507;return cljs.core.async.impl.ioc_helpers.return_chan(state_35507__$1,inst_35505);
} else
{if((state_val_35508 === (1)))
{var state_35507__$1 = state_35507;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35507__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___35516,r))
;return ((function (switch__5678__auto__,c__5693__auto___35516,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_35512 = [null,null,null,null,null,null,null];(statearr_35512[(0)] = state_machine__5679__auto__);
(statearr_35512[(1)] = (1));
return statearr_35512;
});
var state_machine__5679__auto____1 = (function (state_35507){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_35507);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e35513){if((e35513 instanceof Object))
{var ex__5682__auto__ = e35513;var statearr_35514_35517 = state_35507;(statearr_35514_35517[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35507);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e35513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__35518 = state_35507;
state_35507 = G__35518;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_35507){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_35507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___35516,r))
})();var state__5695__auto__ = (function (){var statearr_35515 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_35515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___35516);
return statearr_35515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___35516,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__35519){
var id = cljs.core.first(arglist__35519);
arglist__35519 = cljs.core.next(arglist__35519);
var tolerance = cljs.core.first(arglist__35519);
var opts = cljs.core.rest(arglist__35519);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__35520){
var id = cljs.core.first(arglist__35520);
var opts = cljs.core.rest(arglist__35520);
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
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$790,ids,cljs.core.constant$keyword$791,tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__35521){
var ids = cljs.core.first(arglist__35521);
arglist__35521 = cljs.core.next(arglist__35521);
var tolerance = cljs.core.first(arglist__35521);
var opts = cljs.core.rest(arglist__35521);
return boundaryline_set__delegate(ids,tolerance,opts);
});
boundaryline_set.cljs$core$IFn$_invoke$arity$variadic = boundaryline_set__delegate;
return boundaryline_set;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,p__35522){var vec__35524 = p__35522;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35524,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$792,filter], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,var_args){
var p__35522 = null;if (arguments.length > 5) {
  p__35522 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,p__35522);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 5;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__35525){
var index = cljs.core.first(arglist__35525);
arglist__35525 = cljs.core.next(arglist__35525);
var type = cljs.core.first(arglist__35525);
arglist__35525 = cljs.core.next(arglist__35525);
var blcoll = cljs.core.first(arglist__35525);
arglist__35525 = cljs.core.next(arglist__35525);
var attr = cljs.core.first(arglist__35525);
arglist__35525 = cljs.core.next(arglist__35525);
var filter = cljs.core.first(arglist__35525);
var p__35522 = cljs.core.rest(arglist__35525);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,p__35522);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
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
var portfolio_company_sites__delegate = function (p__35526){var vec__35528 = p__35526;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35528,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$793,(100),cljs.core.constant$keyword$794,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$795,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__35526 = null;if (arguments.length > 0) {
  p__35526 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__35526);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__35529){
var p__35526 = cljs.core.seq(arglist__35529);
return portfolio_company_sites__delegate(p__35526);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__35530){var vec__35532 = p__35530;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35532,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$793,(100),cljs.core.constant$keyword$794,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$795,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__35530 = null;if (arguments.length > 0) {
  p__35530 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__35530);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__35533){
var p__35530 = cljs.core.seq(arglist__35533);
return portfolio_company_sites_by_company__delegate(p__35530);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__35534){var vec__35536 = p__35534;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35536,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__35534 = null;if (arguments.length > 0) {
  p__35534 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__35534);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__35537){
var p__35534 = cljs.core.seq(arglist__35537);
return portfolio_company_locations__delegate(p__35534);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__35538){var vec__35540 = p__35538;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35540,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__35538 = null;if (arguments.length > 0) {
  p__35538 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__35538);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__35541){
var p__35538 = cljs.core.seq(arglist__35541);
return portfolio_company_site_stats__delegate(p__35538);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__35542){var vec__35544 = p__35542;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35544,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__35542 = null;if (arguments.length > 0) {
  p__35542 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__35542);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__35545){
var p__35542 = cljs.core.seq(arglist__35545);
return portfolio_company_site_account_timelines__delegate(p__35542);
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
var investment_account_timelines__delegate = function (p__35546){var vec__35548 = p__35546;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35548,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_account_timelines = function (var_args){
var p__35546 = null;if (arguments.length > 0) {
  p__35546 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__35546);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__35549){
var p__35546 = cljs.core.seq(arglist__35549);
return investment_account_timelines__delegate(p__35546);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__35550){var vec__35552 = p__35550;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35552,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_stats = function (var_args){
var p__35550 = null;if (arguments.length > 0) {
  p__35550 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__35550);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__35553){
var p__35550 = cljs.core.seq(arglist__35553);
return investment_stats__delegate(p__35550);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__35554){var vec__35556 = p__35554;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35556,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$793,(50),cljs.core.constant$keyword$796,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$797,"desc"], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__35554 = null;if (arguments.length > 0) {
  p__35554 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__35554);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__35557){
var p__35554 = cljs.core.seq(arglist__35557);
return investment_aggs__delegate(p__35554);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__35558){var vec__35560 = p__35558;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35560,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$793,(50),cljs.core.constant$keyword$796,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$798,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$799,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investments = function (var_args){
var p__35558 = null;if (arguments.length > 0) {
  p__35558 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__35558);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__35561){
var p__35558 = cljs.core.seq(arglist__35561);
return investments__delegate(p__35558);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
