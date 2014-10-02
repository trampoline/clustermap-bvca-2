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
var AJAX__delegate = function (url,p__23055){var map__23059 = p__23055;var map__23059__$1 = ((cljs.core.seq_QMARK_.call(null,map__23059))?cljs.core.apply.call(null,cljs.core.hash_map,map__23059):map__23059);var opts = map__23059__$1;var content = cljs.core.get.call(null,map__23059__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__23059__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__23059__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__23059,map__23059__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__23059,map__23059__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__23059,map__23059__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__23059,map__23059__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__23061 = method;var G__23061__$1 = (((G__23061 == null))?null:cljs.core.name.call(null,G__23061));var G__23061__$2 = (((G__23061__$1 == null))?null:clojure.string.upper_case.call(null,G__23061__$1));return G__23061__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__23055 = null;if (arguments.length > 1) {
  p__23055 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__23055);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__23062){
var url = cljs.core.first(arglist__23062);
var p__23055 = cljs.core.rest(arglist__23062);
return AJAX__delegate(url,p__23055);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__23063){var map__23065 = p__23063;var map__23065__$1 = ((cljs.core.seq_QMARK_.call(null,map__23065))?cljs.core.apply.call(null,cljs.core.hash_map,map__23065):map__23065);var opts = map__23065__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__23063 = null;if (arguments.length > 1) {
  p__23063 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__23063);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__23066){
var url = cljs.core.first(arglist__23066);
var p__23063 = cljs.core.rest(arglist__23066);
return GET__delegate(url,p__23063);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__23067){var map__23069 = p__23067;var map__23069__$1 = ((cljs.core.seq_QMARK_.call(null,map__23069))?cljs.core.apply.call(null,cljs.core.hash_map,map__23069):map__23069);var opts = map__23069__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__23067 = null;if (arguments.length > 2) {
  p__23067 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__23067);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__23070){
var url = cljs.core.first(arglist__23070);
arglist__23070 = cljs.core.next(arglist__23070);
var content = cljs.core.first(arglist__23070);
var p__23067 = cljs.core.rest(arglist__23070);
return POST__delegate(url,content,p__23067);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__23071){var map__23073 = p__23071;var map__23073__$1 = ((cljs.core.seq_QMARK_.call(null,map__23073))?cljs.core.apply.call(null,cljs.core.hash_map,map__23073):map__23073);var opts = map__23073__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__23071 = null;if (arguments.length > 2) {
  p__23071 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__23071);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__23074){
var url = cljs.core.first(arglist__23074);
arglist__23074 = cljs.core.next(arglist__23074);
var content = cljs.core.first(arglist__23074);
var p__23071 = cljs.core.rest(arglist__23074);
return PUT__delegate(url,content,p__23071);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_23209){var state_val_23210 = (state_23209[(1)]);if((state_val_23210 === (7)))
{var inst_23166 = (state_23209[(7)]);var inst_23165 = (state_23209[(2)]);var inst_23166__$1 = cljs.core.nth.call(null,inst_23165,(0),null);var inst_23167 = cljs.core.nth.call(null,inst_23165,(1),null);var inst_23168 = cljs.core.sequential_QMARK_.call(null,inst_23166__$1);var state_23209__$1 = (function (){var statearr_23211 = state_23209;(statearr_23211[(7)] = inst_23166__$1);
(statearr_23211[(8)] = inst_23167);
return statearr_23211;
})();if(inst_23168)
{var statearr_23212_23247 = state_23209__$1;(statearr_23212_23247[(1)] = (8));
} else
{var statearr_23213_23248 = state_23209__$1;(statearr_23213_23248[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (20)))
{var inst_23166 = (state_23209[(7)]);var state_23209__$1 = state_23209;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23209__$1,(23),inst_23166);
} else
{if((state_val_23210 === (1)))
{var state_23209__$1 = state_23209;var statearr_23214_23249 = state_23209__$1;(statearr_23214_23249[(2)] = null);
(statearr_23214_23249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (4)))
{var state_23209__$1 = state_23209;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23209__$1,(7),ocomm);
} else
{if((state_val_23210 === (15)))
{var inst_23189 = (state_23209[(2)]);var state_23209__$1 = state_23209;var statearr_23215_23250 = state_23209__$1;(statearr_23215_23250[(2)] = inst_23189);
(statearr_23215_23250[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (21)))
{var state_23209__$1 = state_23209;var statearr_23216_23251 = state_23209__$1;(statearr_23216_23251[(2)] = null);
(statearr_23216_23251[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (13)))
{var inst_23172 = (state_23209[(9)]);var state_23209__$1 = state_23209;var statearr_23217_23252 = state_23209__$1;(statearr_23217_23252[(2)] = inst_23172);
(statearr_23217_23252[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (22)))
{var inst_23198 = (state_23209[(2)]);var state_23209__$1 = state_23209;var statearr_23218_23253 = state_23209__$1;(statearr_23218_23253[(2)] = inst_23198);
(statearr_23218_23253[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (6)))
{var inst_23205 = (state_23209[(2)]);var state_23209__$1 = state_23209;var statearr_23219_23254 = state_23209__$1;(statearr_23219_23254[(2)] = inst_23205);
(statearr_23219_23254[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (17)))
{var state_23209__$1 = state_23209;var statearr_23220_23255 = state_23209__$1;(statearr_23220_23255[(2)] = null);
(statearr_23220_23255[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (3)))
{var inst_23207 = (state_23209[(2)]);var state_23209__$1 = state_23209;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23209__$1,inst_23207);
} else
{if((state_val_23210 === (12)))
{var inst_23191 = (state_23209[(2)]);var state_23209__$1 = state_23209;var statearr_23221_23256 = state_23209__$1;(statearr_23221_23256[(2)] = inst_23191);
(statearr_23221_23256[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (2)))
{var state_23209__$1 = state_23209;var statearr_23222_23257 = state_23209__$1;(statearr_23222_23257[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (23)))
{var inst_23195 = (state_23209[(2)]);var state_23209__$1 = state_23209;var statearr_23224_23258 = state_23209__$1;(statearr_23224_23258[(2)] = inst_23195);
(statearr_23224_23258[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (19)))
{var inst_23182 = (state_23209[(2)]);var state_23209__$1 = state_23209;var statearr_23225_23259 = state_23209__$1;(statearr_23225_23259[(2)] = inst_23182);
(statearr_23225_23259[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (11)))
{var inst_23171 = (state_23209[(10)]);var inst_23174 = cljs.core.empty_QMARK_.call(null,inst_23171);var state_23209__$1 = state_23209;if(inst_23174)
{var statearr_23226_23260 = state_23209__$1;(statearr_23226_23260[(1)] = (13));
} else
{var statearr_23227_23261 = state_23209__$1;(statearr_23227_23261[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (9)))
{var inst_23166 = (state_23209[(7)]);var state_23209__$1 = state_23209;if(cljs.core.truth_(inst_23166))
{var statearr_23228_23262 = state_23209__$1;(statearr_23228_23262[(1)] = (20));
} else
{var statearr_23229_23263 = state_23209__$1;(statearr_23229_23263[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (5)))
{var state_23209__$1 = state_23209;var statearr_23230_23264 = state_23209__$1;(statearr_23230_23264[(2)] = null);
(statearr_23230_23264[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (14)))
{var inst_23171 = (state_23209[(10)]);var inst_23177 = cljs.core.rest.call(null,inst_23171);var inst_23178 = cljs.core.first.call(null,inst_23171);var state_23209__$1 = (function (){var statearr_23231 = state_23209;(statearr_23231[(11)] = inst_23177);
return statearr_23231;
})();if(cljs.core.truth_(inst_23178))
{var statearr_23232_23265 = state_23209__$1;(statearr_23232_23265[(1)] = (16));
} else
{var statearr_23233_23266 = state_23209__$1;(statearr_23233_23266[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (16)))
{var inst_23171 = (state_23209[(10)]);var inst_23180 = cljs.core.first.call(null,inst_23171);var state_23209__$1 = state_23209;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23209__$1,(19),inst_23180);
} else
{if((state_val_23210 === (10)))
{var inst_23167 = (state_23209[(8)]);var inst_23200 = (state_23209[(2)]);var inst_23201 = cljs.core.apply.call(null,handler,inst_23200,inst_23167);var state_23209__$1 = (function (){var statearr_23234 = state_23209;(statearr_23234[(12)] = inst_23201);
return statearr_23234;
})();var statearr_23235_23267 = state_23209__$1;(statearr_23235_23267[(2)] = null);
(statearr_23235_23267[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (18)))
{var inst_23177 = (state_23209[(11)]);var inst_23172 = (state_23209[(9)]);var inst_23185 = (state_23209[(2)]);var inst_23186 = cljs.core.conj.call(null,inst_23172,inst_23185);var inst_23171 = inst_23177;var inst_23172__$1 = inst_23186;var state_23209__$1 = (function (){var statearr_23236 = state_23209;(statearr_23236[(10)] = inst_23171);
(statearr_23236[(9)] = inst_23172__$1);
return statearr_23236;
})();var statearr_23237_23268 = state_23209__$1;(statearr_23237_23268[(2)] = null);
(statearr_23237_23268[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23210 === (8)))
{var inst_23166 = (state_23209[(7)]);var inst_23170 = cljs.core.PersistentVector.EMPTY;var inst_23171 = inst_23166;var inst_23172 = inst_23170;var state_23209__$1 = (function (){var statearr_23238 = state_23209;(statearr_23238[(10)] = inst_23171);
(statearr_23238[(9)] = inst_23172);
return statearr_23238;
})();var statearr_23239_23269 = state_23209__$1;(statearr_23239_23269[(2)] = null);
(statearr_23239_23269[(1)] = (11));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23243 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23243[(0)] = state_machine__5694__auto__);
(statearr_23243[(1)] = (1));
return statearr_23243;
});
var state_machine__5694__auto____1 = (function (state_23209){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23209);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23244){if((e23244 instanceof Object))
{var ex__5697__auto__ = e23244;var statearr_23245_23270 = state_23209;(statearr_23245_23270[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23209);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23244;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23271 = state_23209;
state_23209 = G__23271;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23209){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_23246 = f__5709__auto__.call(null);(statearr_23246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_23246;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
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
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__23274__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__23273 = rseq;var rcomm = cljs.core.nth.call(null,vec__23273,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__23273,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__23274 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23274__delegate.call(this,req_args);};
G__23274.cljs$lang$maxFixedArity = 0;
G__23274.cljs$lang$applyTo = (function (arglist__23275){
var req_args = cljs.core.seq(arglist__23275);
return G__23274__delegate(req_args);
});
G__23274.cljs$core$IFn$_invoke$arity$variadic = G__23274__delegate;
return G__23274;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,ch){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,ch){
return (function (state_23293){var state_val_23294 = (state_23293[(1)]);if((state_val_23294 === (2)))
{var inst_23290 = (state_23293[(2)]);var inst_23291 = console.log(inst_23290);var state_23293__$1 = state_23293;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23293__$1,inst_23291);
} else
{if((state_val_23294 === (1)))
{var state_23293__$1 = state_23293;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23293__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23298 = [null,null,null,null,null,null,null];(statearr_23298[(0)] = state_machine__5694__auto__);
(statearr_23298[(1)] = (1));
return statearr_23298;
});
var state_machine__5694__auto____1 = (function (state_23293){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23293);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23299){if((e23299 instanceof Object))
{var ex__5697__auto__ = e23299;var statearr_23300_23302 = state_23293;(statearr_23300_23302[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23293);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23299;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23303 = state_23293;
state_23293 = G__23303;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23293){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_23301 = f__5709__auto__.call(null);(statearr_23301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_23301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,ch))
);
return c__5708__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__23304){
var f = cljs.core.first(arglist__23304);
var args = cljs.core.rest(arglist__23304);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__23307){var vec__23308 = p__23307;var k = cljs.core.nth.call(null,vec__23308,(0),null);var v = cljs.core.nth.call(null,vec__23308,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___23335 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___23335,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___23335,r){
return (function (state_23326){var state_val_23327 = (state_23326[(1)]);if((state_val_23327 === (2)))
{var inst_23323 = (state_23326[(2)]);var inst_23324 = cljs.core.reset_BANG_.call(null,r,inst_23323);var state_23326__$1 = state_23326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23326__$1,inst_23324);
} else
{if((state_val_23327 === (1)))
{var state_23326__$1 = state_23326;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23326__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___23335,r))
;return ((function (switch__5693__auto__,c__5708__auto___23335,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23331 = [null,null,null,null,null,null,null];(statearr_23331[(0)] = state_machine__5694__auto__);
(statearr_23331[(1)] = (1));
return statearr_23331;
});
var state_machine__5694__auto____1 = (function (state_23326){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23326);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23332){if((e23332 instanceof Object))
{var ex__5697__auto__ = e23332;var statearr_23333_23336 = state_23326;(statearr_23333_23336[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23326);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23332;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23337 = state_23326;
state_23326 = G__23337;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23326){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___23335,r))
})();var state__5710__auto__ = (function (){var statearr_23334 = f__5709__auto__.call(null);(statearr_23334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___23335);
return statearr_23334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___23335,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__23338){
var id = cljs.core.first(arglist__23338);
arglist__23338 = cljs.core.next(arglist__23338);
var tolerance = cljs.core.first(arglist__23338);
var opts = cljs.core.rest(arglist__23338);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__23339){
var id = cljs.core.first(arglist__23339);
var opts = cljs.core.rest(arglist__23339);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__23340){
var ids = cljs.core.first(arglist__23340);
arglist__23340 = cljs.core.next(arglist__23340);
var tolerance = cljs.core.first(arglist__23340);
var opts = cljs.core.rest(arglist__23340);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__23341){var map__23343 = p__23341;var map__23343__$1 = ((cljs.core.seq_QMARK_.call(null,map__23343))?cljs.core.apply.call(null,cljs.core.hash_map,map__23343):map__23343);var opts = map__23343__$1;var boundaryline_ids = cljs.core.get.call(null,map__23343__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__23341 = null;if (arguments.length > 3) {
  p__23341 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__23341);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__23344){
var collection_id = cljs.core.first(arglist__23344);
arglist__23344 = cljs.core.next(arglist__23344);
var tolerance = cljs.core.first(arglist__23344);
arglist__23344 = cljs.core.next(arglist__23344);
var bounds = cljs.core.first(arglist__23344);
var p__23341 = cljs.core.rest(arglist__23344);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__23341);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__23345){var vec__23347 = p__23345;var type_ids = cljs.core.nth.call(null,vec__23347,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__23345 = null;if (arguments.length > 6) {
  p__23345 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__23345);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__23348){
var index = cljs.core.first(arglist__23348);
arglist__23348 = cljs.core.next(arglist__23348);
var type = cljs.core.first(arglist__23348);
arglist__23348 = cljs.core.next(arglist__23348);
var blcoll = cljs.core.first(arglist__23348);
arglist__23348 = cljs.core.next(arglist__23348);
var attr = cljs.core.first(arglist__23348);
arglist__23348 = cljs.core.next(arglist__23348);
var filter = cljs.core.first(arglist__23348);
arglist__23348 = cljs.core.next(arglist__23348);
var bounds = cljs.core.first(arglist__23348);
var p__23345 = cljs.core.rest(arglist__23348);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__23345);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__23349){var vec__23351 = p__23349;var type_ids = cljs.core.nth.call(null,vec__23351,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__23349 = null;if (arguments.length > 5) {
  p__23349 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__23349);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__23352){
var index = cljs.core.first(arglist__23352);
arglist__23352 = cljs.core.next(arglist__23352);
var type = cljs.core.first(arglist__23352);
arglist__23352 = cljs.core.next(arglist__23352);
var statsattrs = cljs.core.first(arglist__23352);
arglist__23352 = cljs.core.next(arglist__23352);
var filter = cljs.core.first(arglist__23352);
arglist__23352 = cljs.core.next(arglist__23352);
var bounds = cljs.core.first(arglist__23352);
var p__23349 = cljs.core.rest(arglist__23352);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__23349);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__23353){var vec__23355 = p__23353;var type_ids = cljs.core.nth.call(null,vec__23355,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__23353 = null;if (arguments.length > 7) {
  p__23353 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__23353);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__23356){
var index = cljs.core.first(arglist__23356);
arglist__23356 = cljs.core.next(arglist__23356);
var type = cljs.core.first(arglist__23356);
arglist__23356 = cljs.core.next(arglist__23356);
var location_attr = cljs.core.first(arglist__23356);
arglist__23356 = cljs.core.next(arglist__23356);
var attrs = cljs.core.first(arglist__23356);
arglist__23356 = cljs.core.next(arglist__23356);
var max_count = cljs.core.first(arglist__23356);
arglist__23356 = cljs.core.next(arglist__23356);
var filter = cljs.core.first(arglist__23356);
arglist__23356 = cljs.core.next(arglist__23356);
var bounds = cljs.core.first(arglist__23356);
var p__23353 = cljs.core.rest(arglist__23356);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__23353);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,offset,limit,p__23357){var vec__23359 = p__23357;var type_ids = cljs.core.nth.call(null,vec__23359,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,offset,limit,var_args){
var p__23357 = null;if (arguments.length > 7) {
  p__23357 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,offset,limit,p__23357);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__23360){
var index = cljs.core.first(arglist__23360);
arglist__23360 = cljs.core.next(arglist__23360);
var type = cljs.core.first(arglist__23360);
arglist__23360 = cljs.core.next(arglist__23360);
var filter_spec = cljs.core.first(arglist__23360);
arglist__23360 = cljs.core.next(arglist__23360);
var bounds = cljs.core.first(arglist__23360);
arglist__23360 = cljs.core.next(arglist__23360);
var sort_spec = cljs.core.first(arglist__23360);
arglist__23360 = cljs.core.next(arglist__23360);
var offset = cljs.core.first(arglist__23360);
arglist__23360 = cljs.core.next(arglist__23360);
var limit = cljs.core.first(arglist__23360);
var p__23357 = cljs.core.rest(arglist__23360);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,offset,limit,p__23357);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
