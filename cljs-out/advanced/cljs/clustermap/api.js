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
var AJAX__delegate = function (url,p__42081){var map__42085 = p__42081;var map__42085__$1 = ((cljs.core.seq_QMARK_(map__42085))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42085):map__42085);var opts = map__42085__$1;var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42085__$1,cljs.core.constant$keyword$950);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42085__$1,cljs.core.constant$keyword$951);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42085__$1,cljs.core.constant$keyword$952);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__42085,map__42085__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__42085,map__42085__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$931,true], 0));
}
});})(comm,map__42085,map__42085__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__42085,map__42085__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__42087 = method;var G__42087__$1 = (((G__42087 == null))?null:cljs.core.name(G__42087));var G__42087__$2 = (((G__42087__$1 == null))?null:clojure.string.upper_case(G__42087__$1));return G__42087__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__42081 = null;if (arguments.length > 1) {
  p__42081 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__42081);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__42088){
var url = cljs.core.first(arglist__42088);
var p__42081 = cljs.core.rest(arglist__42088);
return AJAX__delegate(url,p__42081);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__42089){var map__42091 = p__42089;var map__42091__$1 = ((cljs.core.seq_QMARK_(map__42091))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42091):map__42091);var opts = map__42091__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$951,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__42089 = null;if (arguments.length > 1) {
  p__42089 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__42089);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__42092){
var url = cljs.core.first(arglist__42092);
var p__42089 = cljs.core.rest(arglist__42092);
return GET__delegate(url,p__42089);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__42093){var map__42095 = p__42093;var map__42095__$1 = ((cljs.core.seq_QMARK_(map__42095))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42095):map__42095);var opts = map__42095__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$951,"POST",cljs.core.constant$keyword$950,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__42093 = null;if (arguments.length > 2) {
  p__42093 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__42093);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__42096){
var url = cljs.core.first(arglist__42096);
arglist__42096 = cljs.core.next(arglist__42096);
var content = cljs.core.first(arglist__42096);
var p__42093 = cljs.core.rest(arglist__42096);
return POST__delegate(url,content,p__42093);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__42097){var map__42099 = p__42097;var map__42099__$1 = ((cljs.core.seq_QMARK_(map__42099))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42099):map__42099);var opts = map__42099__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$951,"PUT",cljs.core.constant$keyword$950,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__42097 = null;if (arguments.length > 2) {
  p__42097 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__42097);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__42100){
var url = cljs.core.first(arglist__42100);
arglist__42100 = cljs.core.next(arglist__42100);
var content = cljs.core.first(arglist__42100);
var p__42097 = cljs.core.rest(arglist__42100);
return PUT__delegate(url,content,p__42097);
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
return (function (state_42235){var state_val_42236 = (state_42235[(1)]);if((state_val_42236 === (7)))
{var inst_42192 = (state_42235[(7)]);var inst_42191 = (state_42235[(2)]);var inst_42192__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42191,(0),null);var inst_42193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42191,(1),null);var inst_42194 = cljs.core.sequential_QMARK_(inst_42192__$1);var state_42235__$1 = (function (){var statearr_42237 = state_42235;(statearr_42237[(8)] = inst_42193);
(statearr_42237[(7)] = inst_42192__$1);
return statearr_42237;
})();if(inst_42194)
{var statearr_42238_42273 = state_42235__$1;(statearr_42238_42273[(1)] = (8));
} else
{var statearr_42239_42274 = state_42235__$1;(statearr_42239_42274[(1)] = (9));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (20)))
{var inst_42192 = (state_42235[(7)]);var state_42235__$1 = state_42235;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42235__$1,(23),inst_42192);
} else
{if((state_val_42236 === (1)))
{var state_42235__$1 = state_42235;var statearr_42240_42275 = state_42235__$1;(statearr_42240_42275[(2)] = null);
(statearr_42240_42275[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (4)))
{var state_42235__$1 = state_42235;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42235__$1,(7),ocomm);
} else
{if((state_val_42236 === (15)))
{var inst_42215 = (state_42235[(2)]);var state_42235__$1 = state_42235;var statearr_42241_42276 = state_42235__$1;(statearr_42241_42276[(2)] = inst_42215);
(statearr_42241_42276[(1)] = (12));
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (21)))
{var state_42235__$1 = state_42235;var statearr_42242_42277 = state_42235__$1;(statearr_42242_42277[(2)] = null);
(statearr_42242_42277[(1)] = (22));
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (13)))
{var inst_42198 = (state_42235[(9)]);var state_42235__$1 = state_42235;var statearr_42243_42278 = state_42235__$1;(statearr_42243_42278[(2)] = inst_42198);
(statearr_42243_42278[(1)] = (15));
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (22)))
{var inst_42224 = (state_42235[(2)]);var state_42235__$1 = state_42235;var statearr_42244_42279 = state_42235__$1;(statearr_42244_42279[(2)] = inst_42224);
(statearr_42244_42279[(1)] = (10));
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (6)))
{var inst_42231 = (state_42235[(2)]);var state_42235__$1 = state_42235;var statearr_42245_42280 = state_42235__$1;(statearr_42245_42280[(2)] = inst_42231);
(statearr_42245_42280[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (17)))
{var state_42235__$1 = state_42235;var statearr_42246_42281 = state_42235__$1;(statearr_42246_42281[(2)] = null);
(statearr_42246_42281[(1)] = (18));
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (3)))
{var inst_42233 = (state_42235[(2)]);var state_42235__$1 = state_42235;return cljs.core.async.impl.ioc_helpers.return_chan(state_42235__$1,inst_42233);
} else
{if((state_val_42236 === (12)))
{var inst_42217 = (state_42235[(2)]);var state_42235__$1 = state_42235;var statearr_42247_42282 = state_42235__$1;(statearr_42247_42282[(2)] = inst_42217);
(statearr_42247_42282[(1)] = (10));
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (2)))
{var state_42235__$1 = state_42235;var statearr_42248_42283 = state_42235__$1;(statearr_42248_42283[(1)] = (4));

return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (23)))
{var inst_42221 = (state_42235[(2)]);var state_42235__$1 = state_42235;var statearr_42250_42284 = state_42235__$1;(statearr_42250_42284[(2)] = inst_42221);
(statearr_42250_42284[(1)] = (22));
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (19)))
{var inst_42208 = (state_42235[(2)]);var state_42235__$1 = state_42235;var statearr_42251_42285 = state_42235__$1;(statearr_42251_42285[(2)] = inst_42208);
(statearr_42251_42285[(1)] = (18));
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (11)))
{var inst_42197 = (state_42235[(10)]);var inst_42200 = cljs.core.empty_QMARK_(inst_42197);var state_42235__$1 = state_42235;if(inst_42200)
{var statearr_42252_42286 = state_42235__$1;(statearr_42252_42286[(1)] = (13));
} else
{var statearr_42253_42287 = state_42235__$1;(statearr_42253_42287[(1)] = (14));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (9)))
{var inst_42192 = (state_42235[(7)]);var state_42235__$1 = state_42235;if(cljs.core.truth_(inst_42192))
{var statearr_42254_42288 = state_42235__$1;(statearr_42254_42288[(1)] = (20));
} else
{var statearr_42255_42289 = state_42235__$1;(statearr_42255_42289[(1)] = (21));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (5)))
{var state_42235__$1 = state_42235;var statearr_42256_42290 = state_42235__$1;(statearr_42256_42290[(2)] = null);
(statearr_42256_42290[(1)] = (6));
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (14)))
{var inst_42197 = (state_42235[(10)]);var inst_42203 = cljs.core.rest(inst_42197);var inst_42204 = cljs.core.first(inst_42197);var state_42235__$1 = (function (){var statearr_42257 = state_42235;(statearr_42257[(11)] = inst_42203);
return statearr_42257;
})();if(cljs.core.truth_(inst_42204))
{var statearr_42258_42291 = state_42235__$1;(statearr_42258_42291[(1)] = (16));
} else
{var statearr_42259_42292 = state_42235__$1;(statearr_42259_42292[(1)] = (17));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (16)))
{var inst_42197 = (state_42235[(10)]);var inst_42206 = cljs.core.first(inst_42197);var state_42235__$1 = state_42235;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42235__$1,(19),inst_42206);
} else
{if((state_val_42236 === (10)))
{var inst_42193 = (state_42235[(8)]);var inst_42226 = (state_42235[(2)]);var inst_42227 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_42226,inst_42193);var state_42235__$1 = (function (){var statearr_42260 = state_42235;(statearr_42260[(12)] = inst_42227);
return statearr_42260;
})();var statearr_42261_42293 = state_42235__$1;(statearr_42261_42293[(2)] = null);
(statearr_42261_42293[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (18)))
{var inst_42203 = (state_42235[(11)]);var inst_42198 = (state_42235[(9)]);var inst_42211 = (state_42235[(2)]);var inst_42212 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_42198,inst_42211);var inst_42197 = inst_42203;var inst_42198__$1 = inst_42212;var state_42235__$1 = (function (){var statearr_42262 = state_42235;(statearr_42262[(9)] = inst_42198__$1);
(statearr_42262[(10)] = inst_42197);
return statearr_42262;
})();var statearr_42263_42294 = state_42235__$1;(statearr_42263_42294[(2)] = null);
(statearr_42263_42294[(1)] = (11));
return cljs.core.constant$keyword$936;
} else
{if((state_val_42236 === (8)))
{var inst_42192 = (state_42235[(7)]);var inst_42196 = cljs.core.PersistentVector.EMPTY;var inst_42197 = inst_42192;var inst_42198 = inst_42196;var state_42235__$1 = (function (){var statearr_42264 = state_42235;(statearr_42264[(9)] = inst_42198);
(statearr_42264[(10)] = inst_42197);
return statearr_42264;
})();var statearr_42265_42295 = state_42235__$1;(statearr_42265_42295[(2)] = null);
(statearr_42265_42295[(1)] = (11));
return cljs.core.constant$keyword$936;
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
var state_machine__5694__auto____0 = (function (){var statearr_42269 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42269[(0)] = state_machine__5694__auto__);
(statearr_42269[(1)] = (1));
return statearr_42269;
});
var state_machine__5694__auto____1 = (function (state_42235){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42235);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42270){if((e42270 instanceof Object))
{var ex__5697__auto__ = e42270;var statearr_42271_42296 = state_42235;(statearr_42271_42296[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42235);
return cljs.core.constant$keyword$936;
} else
{throw e42270;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__42297 = state_42235;
state_42235 = G__42297;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42235){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_42272 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_42272;
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
var G__42300__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__42299 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42299,(0),null);var result_handler_args = cljs.core.nthnext(vec__42299,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__42300 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__42300__delegate.call(this,req_args);};
G__42300.cljs$lang$maxFixedArity = 0;
G__42300.cljs$lang$applyTo = (function (arglist__42301){
var req_args = cljs.core.seq(arglist__42301);
return G__42300__delegate(req_args);
});
G__42300.cljs$core$IFn$_invoke$arity$variadic = G__42300__delegate;
return G__42300;
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
return (function (state_42319){var state_val_42320 = (state_42319[(1)]);if((state_val_42320 === (2)))
{var inst_42316 = (state_42319[(2)]);var inst_42317 = console.log(inst_42316);var state_42319__$1 = state_42319;return cljs.core.async.impl.ioc_helpers.return_chan(state_42319__$1,inst_42317);
} else
{if((state_val_42320 === (1)))
{var state_42319__$1 = state_42319;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42319__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42324 = [null,null,null,null,null,null,null];(statearr_42324[(0)] = state_machine__5694__auto__);
(statearr_42324[(1)] = (1));
return statearr_42324;
});
var state_machine__5694__auto____1 = (function (state_42319){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42319);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42325){if((e42325 instanceof Object))
{var ex__5697__auto__ = e42325;var statearr_42326_42328 = state_42319;(statearr_42326_42328[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42319);
return cljs.core.constant$keyword$936;
} else
{throw e42325;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__42329 = state_42319;
state_42319 = G__42329;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42319){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_42327 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_42327;
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
log_api.cljs$lang$applyTo = (function (arglist__42330){
var f = cljs.core.first(arglist__42330);
var args = cljs.core.rest(arglist__42330);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42333){var vec__42334 = p__42333;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42334,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42334,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var c__5708__auto___42361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42361,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42361,r){
return (function (state_42352){var state_val_42353 = (state_42352[(1)]);if((state_val_42353 === (2)))
{var inst_42349 = (state_42352[(2)]);var inst_42350 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(r,inst_42349) : cljs.core.reset_BANG_.call(null,r,inst_42349));var state_42352__$1 = state_42352;return cljs.core.async.impl.ioc_helpers.return_chan(state_42352__$1,inst_42350);
} else
{if((state_val_42353 === (1)))
{var state_42352__$1 = state_42352;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42352__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___42361,r))
;return ((function (switch__5693__auto__,c__5708__auto___42361,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42357 = [null,null,null,null,null,null,null];(statearr_42357[(0)] = state_machine__5694__auto__);
(statearr_42357[(1)] = (1));
return statearr_42357;
});
var state_machine__5694__auto____1 = (function (state_42352){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42352);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42358){if((e42358 instanceof Object))
{var ex__5697__auto__ = e42358;var statearr_42359_42362 = state_42352;(statearr_42359_42362[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42352);
return cljs.core.constant$keyword$936;
} else
{throw e42358;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__42363 = state_42352;
state_42352 = G__42363;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42352){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42361,r))
})();var state__5710__auto__ = (function (){var statearr_42360 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42361);
return statearr_42360;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42361,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__42364){
var id = cljs.core.first(arglist__42364);
arglist__42364 = cljs.core.next(arglist__42364);
var tolerance = cljs.core.first(arglist__42364);
var opts = cljs.core.rest(arglist__42364);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__42365){
var id = cljs.core.first(arglist__42365);
var opts = cljs.core.rest(arglist__42365);
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
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$953,ids,cljs.core.constant$keyword$954,tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__42366){
var ids = cljs.core.first(arglist__42366);
arglist__42366 = cljs.core.next(arglist__42366);
var tolerance = cljs.core.first(arglist__42366);
var opts = cljs.core.rest(arglist__42366);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__42367){var map__42369 = p__42367;var map__42369__$1 = ((cljs.core.seq_QMARK_(map__42369))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42369):map__42369);var opts = map__42369__$1;var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42369__$1,cljs.core.constant$keyword$955);var opts__$1 = cljs.core.flatten(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$955)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$956,bounds,cljs.core.constant$keyword$955,boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__42367 = null;if (arguments.length > 3) {
  p__42367 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__42367);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__42370){
var collection_id = cljs.core.first(arglist__42370);
arglist__42370 = cljs.core.next(arglist__42370);
var tolerance = cljs.core.first(arglist__42370);
arglist__42370 = cljs.core.next(arglist__42370);
var bounds = cljs.core.first(arglist__42370);
var p__42367 = cljs.core.rest(arglist__42370);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__42367);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__42371){var vec__42373 = p__42371;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42373,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$957,filter,cljs.core.constant$keyword$956,bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__42371 = null;if (arguments.length > 6) {
  p__42371 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__42371);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__42374){
var index = cljs.core.first(arglist__42374);
arglist__42374 = cljs.core.next(arglist__42374);
var type = cljs.core.first(arglist__42374);
arglist__42374 = cljs.core.next(arglist__42374);
var blcoll = cljs.core.first(arglist__42374);
arglist__42374 = cljs.core.next(arglist__42374);
var attr = cljs.core.first(arglist__42374);
arglist__42374 = cljs.core.next(arglist__42374);
var filter = cljs.core.first(arglist__42374);
arglist__42374 = cljs.core.next(arglist__42374);
var bounds = cljs.core.first(arglist__42374);
var p__42371 = cljs.core.rest(arglist__42374);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__42371);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__42375){var vec__42377 = p__42375;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42377,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$958,statsattrs,cljs.core.constant$keyword$957,filter,cljs.core.constant$keyword$956,bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__42375 = null;if (arguments.length > 5) {
  p__42375 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__42375);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__42378){
var index = cljs.core.first(arglist__42378);
arglist__42378 = cljs.core.next(arglist__42378);
var type = cljs.core.first(arglist__42378);
arglist__42378 = cljs.core.next(arglist__42378);
var statsattrs = cljs.core.first(arglist__42378);
arglist__42378 = cljs.core.next(arglist__42378);
var filter = cljs.core.first(arglist__42378);
arglist__42378 = cljs.core.next(arglist__42378);
var bounds = cljs.core.first(arglist__42378);
var p__42375 = cljs.core.rest(arglist__42378);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__42375);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__42379){var vec__42381 = p__42379;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42381,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$959,max_count,cljs.core.constant$keyword$960,attrs,cljs.core.constant$keyword$957,filter,cljs.core.constant$keyword$956,bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__42379 = null;if (arguments.length > 7) {
  p__42379 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__42379);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__42382){
var index = cljs.core.first(arglist__42382);
arglist__42382 = cljs.core.next(arglist__42382);
var type = cljs.core.first(arglist__42382);
arglist__42382 = cljs.core.next(arglist__42382);
var location_attr = cljs.core.first(arglist__42382);
arglist__42382 = cljs.core.next(arglist__42382);
var attrs = cljs.core.first(arglist__42382);
arglist__42382 = cljs.core.next(arglist__42382);
var max_count = cljs.core.first(arglist__42382);
arglist__42382 = cljs.core.next(arglist__42382);
var filter = cljs.core.first(arglist__42382);
arglist__42382 = cljs.core.next(arglist__42382);
var bounds = cljs.core.first(arglist__42382);
var p__42379 = cljs.core.rest(arglist__42382);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__42379);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__42383){var vec__42385 = p__42383;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42385,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$957,filter_spec,cljs.core.constant$keyword$956,bounds,cljs.core.constant$keyword$961,sort_spec,cljs.core.constant$keyword$962,from,cljs.core.constant$keyword$963,size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__42383 = null;if (arguments.length > 7) {
  p__42383 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__42383);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__42386){
var index = cljs.core.first(arglist__42386);
arglist__42386 = cljs.core.next(arglist__42386);
var type = cljs.core.first(arglist__42386);
arglist__42386 = cljs.core.next(arglist__42386);
var filter_spec = cljs.core.first(arglist__42386);
arglist__42386 = cljs.core.next(arglist__42386);
var bounds = cljs.core.first(arglist__42386);
arglist__42386 = cljs.core.next(arglist__42386);
var sort_spec = cljs.core.first(arglist__42386);
arglist__42386 = cljs.core.next(arglist__42386);
var from = cljs.core.first(arglist__42386);
arglist__42386 = cljs.core.next(arglist__42386);
var size = cljs.core.first(arglist__42386);
var p__42383 = cljs.core.rest(arglist__42386);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__42383);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$964,filter_spec,cljs.core.constant$keyword$956,bounds,cljs.core.constant$keyword$965,time_variable,cljs.core.constant$keyword$966,after,cljs.core.constant$keyword$967,before,cljs.core.constant$keyword$968,interval,cljs.core.constant$keyword$969,metric_variables], null));
});
