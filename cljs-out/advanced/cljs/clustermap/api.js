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
var AJAX__delegate = function (url,p__36053){var map__36057 = p__36053;var map__36057__$1 = ((cljs.core.seq_QMARK_(map__36057))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36057):map__36057);var opts = map__36057__$1;var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36057__$1,cljs.core.constant$keyword$894);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36057__$1,cljs.core.constant$keyword$895);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36057__$1,cljs.core.constant$keyword$896);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__36057,map__36057__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__36057,map__36057__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$875,true], 0));
}
});})(comm,map__36057,map__36057__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__36057,map__36057__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__36059 = method;var G__36059__$1 = (((G__36059 == null))?null:cljs.core.name(G__36059));var G__36059__$2 = (((G__36059__$1 == null))?null:clojure.string.upper_case(G__36059__$1));return G__36059__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__36053 = null;if (arguments.length > 1) {
  p__36053 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__36053);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__36060){
var url = cljs.core.first(arglist__36060);
var p__36053 = cljs.core.rest(arglist__36060);
return AJAX__delegate(url,p__36053);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__36061){var map__36063 = p__36061;var map__36063__$1 = ((cljs.core.seq_QMARK_(map__36063))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36063):map__36063);var opts = map__36063__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$895,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__36061 = null;if (arguments.length > 1) {
  p__36061 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__36061);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__36064){
var url = cljs.core.first(arglist__36064);
var p__36061 = cljs.core.rest(arglist__36064);
return GET__delegate(url,p__36061);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__36065){var map__36067 = p__36065;var map__36067__$1 = ((cljs.core.seq_QMARK_(map__36067))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36067):map__36067);var opts = map__36067__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$895,"POST",cljs.core.constant$keyword$894,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__36065 = null;if (arguments.length > 2) {
  p__36065 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__36065);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__36068){
var url = cljs.core.first(arglist__36068);
arglist__36068 = cljs.core.next(arglist__36068);
var content = cljs.core.first(arglist__36068);
var p__36065 = cljs.core.rest(arglist__36068);
return POST__delegate(url,content,p__36065);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__36069){var map__36071 = p__36069;var map__36071__$1 = ((cljs.core.seq_QMARK_(map__36071))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36071):map__36071);var opts = map__36071__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$895,"PUT",cljs.core.constant$keyword$894,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__36069 = null;if (arguments.length > 2) {
  p__36069 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__36069);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__36072){
var url = cljs.core.first(arglist__36072);
arglist__36072 = cljs.core.next(arglist__36072);
var content = cljs.core.first(arglist__36072);
var p__36069 = cljs.core.rest(arglist__36072);
return PUT__delegate(url,content,p__36069);
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
return (function (state_36207){var state_val_36208 = (state_36207[(1)]);if((state_val_36208 === (7)))
{var inst_36164 = (state_36207[(7)]);var inst_36163 = (state_36207[(2)]);var inst_36164__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36163,(0),null);var inst_36165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36163,(1),null);var inst_36166 = cljs.core.sequential_QMARK_(inst_36164__$1);var state_36207__$1 = (function (){var statearr_36209 = state_36207;(statearr_36209[(8)] = inst_36165);
(statearr_36209[(7)] = inst_36164__$1);
return statearr_36209;
})();if(inst_36166)
{var statearr_36210_36245 = state_36207__$1;(statearr_36210_36245[(1)] = (8));
} else
{var statearr_36211_36246 = state_36207__$1;(statearr_36211_36246[(1)] = (9));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (20)))
{var inst_36164 = (state_36207[(7)]);var state_36207__$1 = state_36207;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36207__$1,(23),inst_36164);
} else
{if((state_val_36208 === (1)))
{var state_36207__$1 = state_36207;var statearr_36212_36247 = state_36207__$1;(statearr_36212_36247[(2)] = null);
(statearr_36212_36247[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (4)))
{var state_36207__$1 = state_36207;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36207__$1,(7),ocomm);
} else
{if((state_val_36208 === (15)))
{var inst_36187 = (state_36207[(2)]);var state_36207__$1 = state_36207;var statearr_36213_36248 = state_36207__$1;(statearr_36213_36248[(2)] = inst_36187);
(statearr_36213_36248[(1)] = (12));
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (21)))
{var state_36207__$1 = state_36207;var statearr_36214_36249 = state_36207__$1;(statearr_36214_36249[(2)] = null);
(statearr_36214_36249[(1)] = (22));
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (13)))
{var inst_36170 = (state_36207[(9)]);var state_36207__$1 = state_36207;var statearr_36215_36250 = state_36207__$1;(statearr_36215_36250[(2)] = inst_36170);
(statearr_36215_36250[(1)] = (15));
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (22)))
{var inst_36196 = (state_36207[(2)]);var state_36207__$1 = state_36207;var statearr_36216_36251 = state_36207__$1;(statearr_36216_36251[(2)] = inst_36196);
(statearr_36216_36251[(1)] = (10));
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (6)))
{var inst_36203 = (state_36207[(2)]);var state_36207__$1 = state_36207;var statearr_36217_36252 = state_36207__$1;(statearr_36217_36252[(2)] = inst_36203);
(statearr_36217_36252[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (17)))
{var state_36207__$1 = state_36207;var statearr_36218_36253 = state_36207__$1;(statearr_36218_36253[(2)] = null);
(statearr_36218_36253[(1)] = (18));
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (3)))
{var inst_36205 = (state_36207[(2)]);var state_36207__$1 = state_36207;return cljs.core.async.impl.ioc_helpers.return_chan(state_36207__$1,inst_36205);
} else
{if((state_val_36208 === (12)))
{var inst_36189 = (state_36207[(2)]);var state_36207__$1 = state_36207;var statearr_36219_36254 = state_36207__$1;(statearr_36219_36254[(2)] = inst_36189);
(statearr_36219_36254[(1)] = (10));
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (2)))
{var state_36207__$1 = state_36207;var statearr_36220_36255 = state_36207__$1;(statearr_36220_36255[(1)] = (4));

return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (23)))
{var inst_36193 = (state_36207[(2)]);var state_36207__$1 = state_36207;var statearr_36222_36256 = state_36207__$1;(statearr_36222_36256[(2)] = inst_36193);
(statearr_36222_36256[(1)] = (22));
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (19)))
{var inst_36180 = (state_36207[(2)]);var state_36207__$1 = state_36207;var statearr_36223_36257 = state_36207__$1;(statearr_36223_36257[(2)] = inst_36180);
(statearr_36223_36257[(1)] = (18));
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (11)))
{var inst_36169 = (state_36207[(10)]);var inst_36172 = cljs.core.empty_QMARK_(inst_36169);var state_36207__$1 = state_36207;if(inst_36172)
{var statearr_36224_36258 = state_36207__$1;(statearr_36224_36258[(1)] = (13));
} else
{var statearr_36225_36259 = state_36207__$1;(statearr_36225_36259[(1)] = (14));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (9)))
{var inst_36164 = (state_36207[(7)]);var state_36207__$1 = state_36207;if(cljs.core.truth_(inst_36164))
{var statearr_36226_36260 = state_36207__$1;(statearr_36226_36260[(1)] = (20));
} else
{var statearr_36227_36261 = state_36207__$1;(statearr_36227_36261[(1)] = (21));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (5)))
{var state_36207__$1 = state_36207;var statearr_36228_36262 = state_36207__$1;(statearr_36228_36262[(2)] = null);
(statearr_36228_36262[(1)] = (6));
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (14)))
{var inst_36169 = (state_36207[(10)]);var inst_36175 = cljs.core.rest(inst_36169);var inst_36176 = cljs.core.first(inst_36169);var state_36207__$1 = (function (){var statearr_36229 = state_36207;(statearr_36229[(11)] = inst_36175);
return statearr_36229;
})();if(cljs.core.truth_(inst_36176))
{var statearr_36230_36263 = state_36207__$1;(statearr_36230_36263[(1)] = (16));
} else
{var statearr_36231_36264 = state_36207__$1;(statearr_36231_36264[(1)] = (17));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (16)))
{var inst_36169 = (state_36207[(10)]);var inst_36178 = cljs.core.first(inst_36169);var state_36207__$1 = state_36207;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36207__$1,(19),inst_36178);
} else
{if((state_val_36208 === (10)))
{var inst_36165 = (state_36207[(8)]);var inst_36198 = (state_36207[(2)]);var inst_36199 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_36198,inst_36165);var state_36207__$1 = (function (){var statearr_36232 = state_36207;(statearr_36232[(12)] = inst_36199);
return statearr_36232;
})();var statearr_36233_36265 = state_36207__$1;(statearr_36233_36265[(2)] = null);
(statearr_36233_36265[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (18)))
{var inst_36175 = (state_36207[(11)]);var inst_36170 = (state_36207[(9)]);var inst_36183 = (state_36207[(2)]);var inst_36184 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_36170,inst_36183);var inst_36169 = inst_36175;var inst_36170__$1 = inst_36184;var state_36207__$1 = (function (){var statearr_36234 = state_36207;(statearr_36234[(10)] = inst_36169);
(statearr_36234[(9)] = inst_36170__$1);
return statearr_36234;
})();var statearr_36235_36266 = state_36207__$1;(statearr_36235_36266[(2)] = null);
(statearr_36235_36266[(1)] = (11));
return cljs.core.constant$keyword$880;
} else
{if((state_val_36208 === (8)))
{var inst_36164 = (state_36207[(7)]);var inst_36168 = cljs.core.PersistentVector.EMPTY;var inst_36169 = inst_36164;var inst_36170 = inst_36168;var state_36207__$1 = (function (){var statearr_36236 = state_36207;(statearr_36236[(10)] = inst_36169);
(statearr_36236[(9)] = inst_36170);
return statearr_36236;
})();var statearr_36237_36267 = state_36207__$1;(statearr_36237_36267[(2)] = null);
(statearr_36237_36267[(1)] = (11));
return cljs.core.constant$keyword$880;
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
var state_machine__5694__auto____0 = (function (){var statearr_36241 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36241[(0)] = state_machine__5694__auto__);
(statearr_36241[(1)] = (1));
return statearr_36241;
});
var state_machine__5694__auto____1 = (function (state_36207){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_36207);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36242){if((e36242 instanceof Object))
{var ex__5697__auto__ = e36242;var statearr_36243_36268 = state_36207;(statearr_36243_36268[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36207);
return cljs.core.constant$keyword$880;
} else
{throw e36242;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__36269 = state_36207;
state_36207 = G__36269;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36207){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_36244 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_36244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_36244;
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
var G__36272__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__36271 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36271,(0),null);var result_handler_args = cljs.core.nthnext(vec__36271,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__36272 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__36272__delegate.call(this,req_args);};
G__36272.cljs$lang$maxFixedArity = 0;
G__36272.cljs$lang$applyTo = (function (arglist__36273){
var req_args = cljs.core.seq(arglist__36273);
return G__36272__delegate(req_args);
});
G__36272.cljs$core$IFn$_invoke$arity$variadic = G__36272__delegate;
return G__36272;
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
return (function (state_36291){var state_val_36292 = (state_36291[(1)]);if((state_val_36292 === (2)))
{var inst_36288 = (state_36291[(2)]);var inst_36289 = console.log(inst_36288);var state_36291__$1 = state_36291;return cljs.core.async.impl.ioc_helpers.return_chan(state_36291__$1,inst_36289);
} else
{if((state_val_36292 === (1)))
{var state_36291__$1 = state_36291;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36291__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36296 = [null,null,null,null,null,null,null];(statearr_36296[(0)] = state_machine__5694__auto__);
(statearr_36296[(1)] = (1));
return statearr_36296;
});
var state_machine__5694__auto____1 = (function (state_36291){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_36291);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36297){if((e36297 instanceof Object))
{var ex__5697__auto__ = e36297;var statearr_36298_36300 = state_36291;(statearr_36298_36300[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36291);
return cljs.core.constant$keyword$880;
} else
{throw e36297;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__36301 = state_36291;
state_36291 = G__36301;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36291){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_36299 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_36299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_36299;
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
log_api.cljs$lang$applyTo = (function (arglist__36302){
var f = cljs.core.first(arglist__36302);
var args = cljs.core.rest(arglist__36302);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36305){var vec__36306 = p__36305;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36306,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36306,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var c__5708__auto___36333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___36333,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36333,r){
return (function (state_36324){var state_val_36325 = (state_36324[(1)]);if((state_val_36325 === (2)))
{var inst_36321 = (state_36324[(2)]);var inst_36322 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(r,inst_36321) : cljs.core.reset_BANG_.call(null,r,inst_36321));var state_36324__$1 = state_36324;return cljs.core.async.impl.ioc_helpers.return_chan(state_36324__$1,inst_36322);
} else
{if((state_val_36325 === (1)))
{var state_36324__$1 = state_36324;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36324__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___36333,r))
;return ((function (switch__5693__auto__,c__5708__auto___36333,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36329 = [null,null,null,null,null,null,null];(statearr_36329[(0)] = state_machine__5694__auto__);
(statearr_36329[(1)] = (1));
return statearr_36329;
});
var state_machine__5694__auto____1 = (function (state_36324){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_36324);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36330){if((e36330 instanceof Object))
{var ex__5697__auto__ = e36330;var statearr_36331_36334 = state_36324;(statearr_36331_36334[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36324);
return cljs.core.constant$keyword$880;
} else
{throw e36330;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__36335 = state_36324;
state_36324 = G__36335;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36324){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36333,r))
})();var state__5710__auto__ = (function (){var statearr_36332 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_36332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36333);
return statearr_36332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___36333,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__36336){
var id = cljs.core.first(arglist__36336);
arglist__36336 = cljs.core.next(arglist__36336);
var tolerance = cljs.core.first(arglist__36336);
var opts = cljs.core.rest(arglist__36336);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__36337){
var id = cljs.core.first(arglist__36337);
var opts = cljs.core.rest(arglist__36337);
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
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$897,ids,cljs.core.constant$keyword$898,tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__36338){
var ids = cljs.core.first(arglist__36338);
arglist__36338 = cljs.core.next(arglist__36338);
var tolerance = cljs.core.first(arglist__36338);
var opts = cljs.core.rest(arglist__36338);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__36339){var map__36341 = p__36339;var map__36341__$1 = ((cljs.core.seq_QMARK_(map__36341))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36341):map__36341);var opts = map__36341__$1;var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36341__$1,cljs.core.constant$keyword$899);var opts__$1 = cljs.core.flatten(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$899)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$900,bounds,cljs.core.constant$keyword$899,boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__36339 = null;if (arguments.length > 3) {
  p__36339 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__36339);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__36342){
var collection_id = cljs.core.first(arglist__36342);
arglist__36342 = cljs.core.next(arglist__36342);
var tolerance = cljs.core.first(arglist__36342);
arglist__36342 = cljs.core.next(arglist__36342);
var bounds = cljs.core.first(arglist__36342);
var p__36339 = cljs.core.rest(arglist__36342);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__36339);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__36343){var vec__36345 = p__36343;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36345,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$901,filter,cljs.core.constant$keyword$900,bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__36343 = null;if (arguments.length > 6) {
  p__36343 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__36343);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__36346){
var index = cljs.core.first(arglist__36346);
arglist__36346 = cljs.core.next(arglist__36346);
var type = cljs.core.first(arglist__36346);
arglist__36346 = cljs.core.next(arglist__36346);
var blcoll = cljs.core.first(arglist__36346);
arglist__36346 = cljs.core.next(arglist__36346);
var attr = cljs.core.first(arglist__36346);
arglist__36346 = cljs.core.next(arglist__36346);
var filter = cljs.core.first(arglist__36346);
arglist__36346 = cljs.core.next(arglist__36346);
var bounds = cljs.core.first(arglist__36346);
var p__36343 = cljs.core.rest(arglist__36346);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__36343);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__36347){var vec__36349 = p__36347;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36349,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$902,statsattrs,cljs.core.constant$keyword$901,filter,cljs.core.constant$keyword$900,bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__36347 = null;if (arguments.length > 5) {
  p__36347 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__36347);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__36350){
var index = cljs.core.first(arglist__36350);
arglist__36350 = cljs.core.next(arglist__36350);
var type = cljs.core.first(arglist__36350);
arglist__36350 = cljs.core.next(arglist__36350);
var statsattrs = cljs.core.first(arglist__36350);
arglist__36350 = cljs.core.next(arglist__36350);
var filter = cljs.core.first(arglist__36350);
arglist__36350 = cljs.core.next(arglist__36350);
var bounds = cljs.core.first(arglist__36350);
var p__36347 = cljs.core.rest(arglist__36350);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__36347);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__36351){var vec__36353 = p__36351;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36353,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$903,max_count,cljs.core.constant$keyword$904,attrs,cljs.core.constant$keyword$901,filter,cljs.core.constant$keyword$900,bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__36351 = null;if (arguments.length > 7) {
  p__36351 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__36351);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__36354){
var index = cljs.core.first(arglist__36354);
arglist__36354 = cljs.core.next(arglist__36354);
var type = cljs.core.first(arglist__36354);
arglist__36354 = cljs.core.next(arglist__36354);
var location_attr = cljs.core.first(arglist__36354);
arglist__36354 = cljs.core.next(arglist__36354);
var attrs = cljs.core.first(arglist__36354);
arglist__36354 = cljs.core.next(arglist__36354);
var max_count = cljs.core.first(arglist__36354);
arglist__36354 = cljs.core.next(arglist__36354);
var filter = cljs.core.first(arglist__36354);
arglist__36354 = cljs.core.next(arglist__36354);
var bounds = cljs.core.first(arglist__36354);
var p__36351 = cljs.core.rest(arglist__36354);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__36351);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,offset,limit,p__36355){var vec__36357 = p__36355;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36357,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$901,filter_spec,cljs.core.constant$keyword$900,bounds,cljs.core.constant$keyword$905,sort_spec,cljs.core.constant$keyword$906,offset,cljs.core.constant$keyword$907,limit], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,offset,limit,var_args){
var p__36355 = null;if (arguments.length > 7) {
  p__36355 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,offset,limit,p__36355);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__36358){
var index = cljs.core.first(arglist__36358);
arglist__36358 = cljs.core.next(arglist__36358);
var type = cljs.core.first(arglist__36358);
arglist__36358 = cljs.core.next(arglist__36358);
var filter_spec = cljs.core.first(arglist__36358);
arglist__36358 = cljs.core.next(arglist__36358);
var bounds = cljs.core.first(arglist__36358);
arglist__36358 = cljs.core.next(arglist__36358);
var sort_spec = cljs.core.first(arglist__36358);
arglist__36358 = cljs.core.next(arglist__36358);
var offset = cljs.core.first(arglist__36358);
arglist__36358 = cljs.core.next(arglist__36358);
var limit = cljs.core.first(arglist__36358);
var p__36355 = cljs.core.rest(arglist__36358);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,offset,limit,p__36355);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
