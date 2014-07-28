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
var AJAX__delegate = function (url,p__35247){var map__35251 = p__35247;var map__35251__$1 = ((cljs.core.seq_QMARK_(map__35251))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35251):map__35251);var opts = map__35251__$1;var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35251__$1,cljs.core.constant$keyword$787);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35251__$1,cljs.core.constant$keyword$788);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35251__$1,cljs.core.constant$keyword$789);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__35251,map__35251__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__35251,map__35251__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$768,true], 0));
}
});})(comm,map__35251,map__35251__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__35251,map__35251__$1,opts,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__35253 = method;var G__35253__$1 = (((G__35253 == null))?null:cljs.core.name(G__35253));var G__35253__$2 = (((G__35253__$1 == null))?null:clojure.string.upper_case(G__35253__$1));return G__35253__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__35247 = null;if (arguments.length > 1) {
  p__35247 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__35247);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__35254){
var url = cljs.core.first(arglist__35254);
var p__35247 = cljs.core.rest(arglist__35254);
return AJAX__delegate(url,p__35247);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__35255){var map__35257 = p__35255;var map__35257__$1 = ((cljs.core.seq_QMARK_(map__35257))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35257):map__35257);var opts = map__35257__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$788,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__35255 = null;if (arguments.length > 1) {
  p__35255 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__35255);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__35258){
var url = cljs.core.first(arglist__35258);
var p__35255 = cljs.core.rest(arglist__35258);
return GET__delegate(url,p__35255);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__35259){var map__35261 = p__35259;var map__35261__$1 = ((cljs.core.seq_QMARK_(map__35261))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35261):map__35261);var opts = map__35261__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$788,"POST",cljs.core.constant$keyword$787,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__35259 = null;if (arguments.length > 2) {
  p__35259 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__35259);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__35262){
var url = cljs.core.first(arglist__35262);
arglist__35262 = cljs.core.next(arglist__35262);
var content = cljs.core.first(arglist__35262);
var p__35259 = cljs.core.rest(arglist__35262);
return POST__delegate(url,content,p__35259);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__35263){var map__35265 = p__35263;var map__35265__$1 = ((cljs.core.seq_QMARK_(map__35265))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35265):map__35265);var opts = map__35265__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$788,"PUT",cljs.core.constant$keyword$787,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__35263 = null;if (arguments.length > 2) {
  p__35263 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__35263);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__35266){
var url = cljs.core.first(arglist__35266);
arglist__35266 = cljs.core.next(arglist__35266);
var content = cljs.core.first(arglist__35266);
var p__35263 = cljs.core.rest(arglist__35266);
return PUT__delegate(url,content,p__35263);
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
return (function (state_35399){var state_val_35400 = (state_35399[(1)]);if((state_val_35400 === (7)))
{var inst_35357 = (state_35399[(7)]);var inst_35356 = (state_35399[(2)]);var inst_35357__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35356,(0),null);var inst_35358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35356,(1),null);var inst_35359 = cljs.core.sequential_QMARK_(inst_35357__$1);var state_35399__$1 = (function (){var statearr_35401 = state_35399;(statearr_35401[(7)] = inst_35357__$1);
(statearr_35401[(8)] = inst_35358);
return statearr_35401;
})();if(inst_35359)
{var statearr_35402_35437 = state_35399__$1;(statearr_35402_35437[(1)] = (8));
} else
{var statearr_35403_35438 = state_35399__$1;(statearr_35403_35438[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (20)))
{var inst_35357 = (state_35399[(7)]);var state_35399__$1 = state_35399;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35399__$1,(23),inst_35357);
} else
{if((state_val_35400 === (1)))
{var state_35399__$1 = state_35399;var statearr_35404_35439 = state_35399__$1;(statearr_35404_35439[(2)] = null);
(statearr_35404_35439[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (4)))
{var state_35399__$1 = state_35399;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35399__$1,(7),ocomm);
} else
{if((state_val_35400 === (15)))
{var inst_35379 = (state_35399[(2)]);var state_35399__$1 = state_35399;var statearr_35405_35440 = state_35399__$1;(statearr_35405_35440[(2)] = inst_35379);
(statearr_35405_35440[(1)] = (12));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (21)))
{var state_35399__$1 = state_35399;var statearr_35406_35441 = state_35399__$1;(statearr_35406_35441[(2)] = null);
(statearr_35406_35441[(1)] = (22));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (13)))
{var inst_35362 = (state_35399[(9)]);var state_35399__$1 = state_35399;var statearr_35407_35442 = state_35399__$1;(statearr_35407_35442[(2)] = inst_35362);
(statearr_35407_35442[(1)] = (15));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (22)))
{var inst_35388 = (state_35399[(2)]);var state_35399__$1 = state_35399;var statearr_35408_35443 = state_35399__$1;(statearr_35408_35443[(2)] = inst_35388);
(statearr_35408_35443[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (6)))
{var inst_35395 = (state_35399[(2)]);var state_35399__$1 = state_35399;var statearr_35409_35444 = state_35399__$1;(statearr_35409_35444[(2)] = inst_35395);
(statearr_35409_35444[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (17)))
{var state_35399__$1 = state_35399;var statearr_35410_35445 = state_35399__$1;(statearr_35410_35445[(2)] = null);
(statearr_35410_35445[(1)] = (18));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (3)))
{var inst_35397 = (state_35399[(2)]);var state_35399__$1 = state_35399;return cljs.core.async.impl.ioc_helpers.return_chan(state_35399__$1,inst_35397);
} else
{if((state_val_35400 === (12)))
{var inst_35381 = (state_35399[(2)]);var state_35399__$1 = state_35399;var statearr_35411_35446 = state_35399__$1;(statearr_35411_35446[(2)] = inst_35381);
(statearr_35411_35446[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (2)))
{var state_35399__$1 = state_35399;if(true)
{var statearr_35412_35447 = state_35399__$1;(statearr_35412_35447[(1)] = (4));
} else
{var statearr_35413_35448 = state_35399__$1;(statearr_35413_35448[(1)] = (5));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (23)))
{var inst_35385 = (state_35399[(2)]);var state_35399__$1 = state_35399;var statearr_35414_35449 = state_35399__$1;(statearr_35414_35449[(2)] = inst_35385);
(statearr_35414_35449[(1)] = (22));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (19)))
{var inst_35372 = (state_35399[(2)]);var state_35399__$1 = state_35399;var statearr_35415_35450 = state_35399__$1;(statearr_35415_35450[(2)] = inst_35372);
(statearr_35415_35450[(1)] = (18));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (11)))
{var inst_35361 = (state_35399[(10)]);var inst_35364 = cljs.core.empty_QMARK_(inst_35361);var state_35399__$1 = state_35399;if(inst_35364)
{var statearr_35416_35451 = state_35399__$1;(statearr_35416_35451[(1)] = (13));
} else
{var statearr_35417_35452 = state_35399__$1;(statearr_35417_35452[(1)] = (14));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (9)))
{var inst_35357 = (state_35399[(7)]);var state_35399__$1 = state_35399;if(cljs.core.truth_(inst_35357))
{var statearr_35418_35453 = state_35399__$1;(statearr_35418_35453[(1)] = (20));
} else
{var statearr_35419_35454 = state_35399__$1;(statearr_35419_35454[(1)] = (21));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (5)))
{var state_35399__$1 = state_35399;var statearr_35420_35455 = state_35399__$1;(statearr_35420_35455[(2)] = null);
(statearr_35420_35455[(1)] = (6));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (14)))
{var inst_35361 = (state_35399[(10)]);var inst_35367 = cljs.core.rest(inst_35361);var inst_35368 = cljs.core.first(inst_35361);var state_35399__$1 = (function (){var statearr_35421 = state_35399;(statearr_35421[(11)] = inst_35367);
return statearr_35421;
})();if(cljs.core.truth_(inst_35368))
{var statearr_35422_35456 = state_35399__$1;(statearr_35422_35456[(1)] = (16));
} else
{var statearr_35423_35457 = state_35399__$1;(statearr_35423_35457[(1)] = (17));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (16)))
{var inst_35361 = (state_35399[(10)]);var inst_35370 = cljs.core.first(inst_35361);var state_35399__$1 = state_35399;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35399__$1,(19),inst_35370);
} else
{if((state_val_35400 === (10)))
{var inst_35358 = (state_35399[(8)]);var inst_35390 = (state_35399[(2)]);var inst_35391 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_35390,inst_35358);var state_35399__$1 = (function (){var statearr_35424 = state_35399;(statearr_35424[(12)] = inst_35391);
return statearr_35424;
})();var statearr_35425_35458 = state_35399__$1;(statearr_35425_35458[(2)] = null);
(statearr_35425_35458[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (18)))
{var inst_35367 = (state_35399[(11)]);var inst_35362 = (state_35399[(9)]);var inst_35375 = (state_35399[(2)]);var inst_35376 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_35362,inst_35375);var inst_35361 = inst_35367;var inst_35362__$1 = inst_35376;var state_35399__$1 = (function (){var statearr_35426 = state_35399;(statearr_35426[(9)] = inst_35362__$1);
(statearr_35426[(10)] = inst_35361);
return statearr_35426;
})();var statearr_35427_35459 = state_35399__$1;(statearr_35427_35459[(2)] = null);
(statearr_35427_35459[(1)] = (11));
return cljs.core.constant$keyword$773;
} else
{if((state_val_35400 === (8)))
{var inst_35357 = (state_35399[(7)]);var inst_35361 = inst_35357;var inst_35362 = cljs.core.PersistentVector.EMPTY;var state_35399__$1 = (function (){var statearr_35428 = state_35399;(statearr_35428[(9)] = inst_35362);
(statearr_35428[(10)] = inst_35361);
return statearr_35428;
})();var statearr_35429_35460 = state_35399__$1;(statearr_35429_35460[(2)] = null);
(statearr_35429_35460[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_35433 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35433[(0)] = state_machine__5679__auto__);
(statearr_35433[(1)] = (1));
return statearr_35433;
});
var state_machine__5679__auto____1 = (function (state_35399){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_35399);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e35434){if((e35434 instanceof Object))
{var ex__5682__auto__ = e35434;var statearr_35435_35461 = state_35399;(statearr_35435_35461[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35399);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e35434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__35462 = state_35399;
state_35399 = G__35462;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_35399){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_35399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_35436 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_35436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_35436;
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
var G__35465__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__35464 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35464,(0),null);var result_handler_args = cljs.core.nthnext(vec__35464,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__35465 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__35465__delegate.call(this,req_args);};
G__35465.cljs$lang$maxFixedArity = 0;
G__35465.cljs$lang$applyTo = (function (arglist__35466){
var req_args = cljs.core.seq(arglist__35466);
return G__35465__delegate(req_args);
});
G__35465.cljs$core$IFn$_invoke$arity$variadic = G__35465__delegate;
return G__35465;
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
return (function (state_35484){var state_val_35485 = (state_35484[(1)]);if((state_val_35485 === (2)))
{var inst_35481 = (state_35484[(2)]);var inst_35482 = console.log(inst_35481);var state_35484__$1 = state_35484;return cljs.core.async.impl.ioc_helpers.return_chan(state_35484__$1,inst_35482);
} else
{if((state_val_35485 === (1)))
{var state_35484__$1 = state_35484;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35484__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_35489 = [null,null,null,null,null,null,null];(statearr_35489[(0)] = state_machine__5679__auto__);
(statearr_35489[(1)] = (1));
return statearr_35489;
});
var state_machine__5679__auto____1 = (function (state_35484){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_35484);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e35490){if((e35490 instanceof Object))
{var ex__5682__auto__ = e35490;var statearr_35491_35493 = state_35484;(statearr_35491_35493[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35484);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e35490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__35494 = state_35484;
state_35484 = G__35494;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_35484){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_35484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_35492 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_35492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_35492;
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
log_api.cljs$lang$applyTo = (function (arglist__35495){
var f = cljs.core.first(arglist__35495);
var args = cljs.core.rest(arglist__35495);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35498){var vec__35499 = p__35498;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35499,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35499,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var c__5693__auto___35526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___35526,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___35526,r){
return (function (state_35517){var state_val_35518 = (state_35517[(1)]);if((state_val_35518 === (2)))
{var inst_35514 = (state_35517[(2)]);var inst_35515 = cljs.core.reset_BANG_(r,inst_35514);var state_35517__$1 = state_35517;return cljs.core.async.impl.ioc_helpers.return_chan(state_35517__$1,inst_35515);
} else
{if((state_val_35518 === (1)))
{var state_35517__$1 = state_35517;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35517__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___35526,r))
;return ((function (switch__5678__auto__,c__5693__auto___35526,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_35522 = [null,null,null,null,null,null,null];(statearr_35522[(0)] = state_machine__5679__auto__);
(statearr_35522[(1)] = (1));
return statearr_35522;
});
var state_machine__5679__auto____1 = (function (state_35517){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_35517);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e35523){if((e35523 instanceof Object))
{var ex__5682__auto__ = e35523;var statearr_35524_35527 = state_35517;(statearr_35524_35527[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35517);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e35523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__35528 = state_35517;
state_35517 = G__35528;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_35517){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_35517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___35526,r))
})();var state__5695__auto__ = (function (){var statearr_35525 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_35525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___35526);
return statearr_35525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___35526,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__35529){
var id = cljs.core.first(arglist__35529);
arglist__35529 = cljs.core.next(arglist__35529);
var tolerance = cljs.core.first(arglist__35529);
var opts = cljs.core.rest(arglist__35529);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__35530){
var id = cljs.core.first(arglist__35530);
var opts = cljs.core.rest(arglist__35530);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__35531){
var ids = cljs.core.first(arglist__35531);
arglist__35531 = cljs.core.next(arglist__35531);
var tolerance = cljs.core.first(arglist__35531);
var opts = cljs.core.rest(arglist__35531);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$792,bounds], null),opts);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var opts = null;if (arguments.length > 3) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,opts);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__35532){
var collection_id = cljs.core.first(arglist__35532);
arglist__35532 = cljs.core.next(arglist__35532);
var tolerance = cljs.core.first(arglist__35532);
arglist__35532 = cljs.core.next(arglist__35532);
var bounds = cljs.core.first(arglist__35532);
var opts = cljs.core.rest(arglist__35532);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,opts);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__35533){var vec__35535 = p__35533;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35535,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$793,filter,cljs.core.constant$keyword$792,bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__35533 = null;if (arguments.length > 6) {
  p__35533 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__35533);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__35536){
var index = cljs.core.first(arglist__35536);
arglist__35536 = cljs.core.next(arglist__35536);
var type = cljs.core.first(arglist__35536);
arglist__35536 = cljs.core.next(arglist__35536);
var blcoll = cljs.core.first(arglist__35536);
arglist__35536 = cljs.core.next(arglist__35536);
var attr = cljs.core.first(arglist__35536);
arglist__35536 = cljs.core.next(arglist__35536);
var filter = cljs.core.first(arglist__35536);
arglist__35536 = cljs.core.next(arglist__35536);
var bounds = cljs.core.first(arglist__35536);
var p__35533 = cljs.core.rest(arglist__35536);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__35533);
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
var portfolio_company_sites__delegate = function (p__35537){var vec__35539 = p__35537;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35539,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$794,(100),cljs.core.constant$keyword$795,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$796,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__35537 = null;if (arguments.length > 0) {
  p__35537 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__35537);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__35540){
var p__35537 = cljs.core.seq(arglist__35540);
return portfolio_company_sites__delegate(p__35537);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__35541){var vec__35543 = p__35541;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35543,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$794,(100),cljs.core.constant$keyword$795,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$796,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__35541 = null;if (arguments.length > 0) {
  p__35541 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__35541);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__35544){
var p__35541 = cljs.core.seq(arglist__35544);
return portfolio_company_sites_by_company__delegate(p__35541);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__35545){var vec__35547 = p__35545;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35547,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__35545 = null;if (arguments.length > 0) {
  p__35545 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__35545);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__35548){
var p__35545 = cljs.core.seq(arglist__35548);
return portfolio_company_locations__delegate(p__35545);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__35549){var vec__35551 = p__35549;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35551,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__35549 = null;if (arguments.length > 0) {
  p__35549 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__35549);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__35552){
var p__35549 = cljs.core.seq(arglist__35552);
return portfolio_company_site_stats__delegate(p__35549);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__35553){var vec__35555 = p__35553;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35555,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__35553 = null;if (arguments.length > 0) {
  p__35553 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__35553);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__35556){
var p__35553 = cljs.core.seq(arglist__35556);
return portfolio_company_site_account_timelines__delegate(p__35553);
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
var investment_account_timelines__delegate = function (p__35557){var vec__35559 = p__35557;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35559,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_account_timelines = function (var_args){
var p__35557 = null;if (arguments.length > 0) {
  p__35557 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__35557);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__35560){
var p__35557 = cljs.core.seq(arglist__35560);
return investment_account_timelines__delegate(p__35557);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__35561){var vec__35563 = p__35561;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35563,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_stats = function (var_args){
var p__35561 = null;if (arguments.length > 0) {
  p__35561 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__35561);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__35564){
var p__35561 = cljs.core.seq(arglist__35564);
return investment_stats__delegate(p__35561);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__35565){var vec__35567 = p__35565;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35567,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$794,(50),cljs.core.constant$keyword$797,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$798,"desc"], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__35565 = null;if (arguments.length > 0) {
  p__35565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__35565);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__35568){
var p__35565 = cljs.core.seq(arglist__35568);
return investment_aggs__delegate(p__35565);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__35569){var vec__35571 = p__35569;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35571,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$794,(50),cljs.core.constant$keyword$797,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$799,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$800,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investments = function (var_args){
var p__35569 = null;if (arguments.length > 0) {
  p__35569 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__35569);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__35572){
var p__35569 = cljs.core.seq(arglist__35572);
return investments__delegate(p__35569);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
