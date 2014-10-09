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
var AJAX__delegate = function (url,p__23270){var map__23274 = p__23270;var map__23274__$1 = ((cljs.core.seq_QMARK_.call(null,map__23274))?cljs.core.apply.call(null,cljs.core.hash_map,map__23274):map__23274);var opts = map__23274__$1;var content = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__23274,map__23274__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__23274,map__23274__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__23274,map__23274__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__23274,map__23274__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__23276 = method;var G__23276__$1 = (((G__23276 == null))?null:cljs.core.name.call(null,G__23276));var G__23276__$2 = (((G__23276__$1 == null))?null:clojure.string.upper_case.call(null,G__23276__$1));return G__23276__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__23270 = null;if (arguments.length > 1) {
  p__23270 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__23270);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__23277){
var url = cljs.core.first(arglist__23277);
var p__23270 = cljs.core.rest(arglist__23277);
return AJAX__delegate(url,p__23270);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__23278){var map__23280 = p__23278;var map__23280__$1 = ((cljs.core.seq_QMARK_.call(null,map__23280))?cljs.core.apply.call(null,cljs.core.hash_map,map__23280):map__23280);var opts = map__23280__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__23278 = null;if (arguments.length > 1) {
  p__23278 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__23278);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__23281){
var url = cljs.core.first(arglist__23281);
var p__23278 = cljs.core.rest(arglist__23281);
return GET__delegate(url,p__23278);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__23282){var map__23284 = p__23282;var map__23284__$1 = ((cljs.core.seq_QMARK_.call(null,map__23284))?cljs.core.apply.call(null,cljs.core.hash_map,map__23284):map__23284);var opts = map__23284__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__23282 = null;if (arguments.length > 2) {
  p__23282 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__23282);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__23285){
var url = cljs.core.first(arglist__23285);
arglist__23285 = cljs.core.next(arglist__23285);
var content = cljs.core.first(arglist__23285);
var p__23282 = cljs.core.rest(arglist__23285);
return POST__delegate(url,content,p__23282);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__23286){var map__23288 = p__23286;var map__23288__$1 = ((cljs.core.seq_QMARK_.call(null,map__23288))?cljs.core.apply.call(null,cljs.core.hash_map,map__23288):map__23288);var opts = map__23288__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__23286 = null;if (arguments.length > 2) {
  p__23286 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__23286);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__23289){
var url = cljs.core.first(arglist__23289);
arglist__23289 = cljs.core.next(arglist__23289);
var content = cljs.core.first(arglist__23289);
var p__23286 = cljs.core.rest(arglist__23289);
return PUT__delegate(url,content,p__23286);
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
return (function (state_23424){var state_val_23425 = (state_23424[(1)]);if((state_val_23425 === (7)))
{var inst_23381 = (state_23424[(7)]);var inst_23380 = (state_23424[(2)]);var inst_23381__$1 = cljs.core.nth.call(null,inst_23380,(0),null);var inst_23382 = cljs.core.nth.call(null,inst_23380,(1),null);var inst_23383 = cljs.core.sequential_QMARK_.call(null,inst_23381__$1);var state_23424__$1 = (function (){var statearr_23426 = state_23424;(statearr_23426[(8)] = inst_23382);
(statearr_23426[(7)] = inst_23381__$1);
return statearr_23426;
})();if(inst_23383)
{var statearr_23427_23462 = state_23424__$1;(statearr_23427_23462[(1)] = (8));
} else
{var statearr_23428_23463 = state_23424__$1;(statearr_23428_23463[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (20)))
{var inst_23381 = (state_23424[(7)]);var state_23424__$1 = state_23424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23424__$1,(23),inst_23381);
} else
{if((state_val_23425 === (1)))
{var state_23424__$1 = state_23424;var statearr_23429_23464 = state_23424__$1;(statearr_23429_23464[(2)] = null);
(statearr_23429_23464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (4)))
{var state_23424__$1 = state_23424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23424__$1,(7),ocomm);
} else
{if((state_val_23425 === (15)))
{var inst_23404 = (state_23424[(2)]);var state_23424__$1 = state_23424;var statearr_23430_23465 = state_23424__$1;(statearr_23430_23465[(2)] = inst_23404);
(statearr_23430_23465[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (21)))
{var state_23424__$1 = state_23424;var statearr_23431_23466 = state_23424__$1;(statearr_23431_23466[(2)] = null);
(statearr_23431_23466[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (13)))
{var inst_23387 = (state_23424[(9)]);var state_23424__$1 = state_23424;var statearr_23432_23467 = state_23424__$1;(statearr_23432_23467[(2)] = inst_23387);
(statearr_23432_23467[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (22)))
{var inst_23413 = (state_23424[(2)]);var state_23424__$1 = state_23424;var statearr_23433_23468 = state_23424__$1;(statearr_23433_23468[(2)] = inst_23413);
(statearr_23433_23468[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (6)))
{var inst_23420 = (state_23424[(2)]);var state_23424__$1 = state_23424;var statearr_23434_23469 = state_23424__$1;(statearr_23434_23469[(2)] = inst_23420);
(statearr_23434_23469[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (17)))
{var state_23424__$1 = state_23424;var statearr_23435_23470 = state_23424__$1;(statearr_23435_23470[(2)] = null);
(statearr_23435_23470[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (3)))
{var inst_23422 = (state_23424[(2)]);var state_23424__$1 = state_23424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23424__$1,inst_23422);
} else
{if((state_val_23425 === (12)))
{var inst_23406 = (state_23424[(2)]);var state_23424__$1 = state_23424;var statearr_23436_23471 = state_23424__$1;(statearr_23436_23471[(2)] = inst_23406);
(statearr_23436_23471[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (2)))
{var state_23424__$1 = state_23424;var statearr_23437_23472 = state_23424__$1;(statearr_23437_23472[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (23)))
{var inst_23410 = (state_23424[(2)]);var state_23424__$1 = state_23424;var statearr_23439_23473 = state_23424__$1;(statearr_23439_23473[(2)] = inst_23410);
(statearr_23439_23473[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (19)))
{var inst_23397 = (state_23424[(2)]);var state_23424__$1 = state_23424;var statearr_23440_23474 = state_23424__$1;(statearr_23440_23474[(2)] = inst_23397);
(statearr_23440_23474[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (11)))
{var inst_23386 = (state_23424[(10)]);var inst_23389 = cljs.core.empty_QMARK_.call(null,inst_23386);var state_23424__$1 = state_23424;if(inst_23389)
{var statearr_23441_23475 = state_23424__$1;(statearr_23441_23475[(1)] = (13));
} else
{var statearr_23442_23476 = state_23424__$1;(statearr_23442_23476[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (9)))
{var inst_23381 = (state_23424[(7)]);var state_23424__$1 = state_23424;if(cljs.core.truth_(inst_23381))
{var statearr_23443_23477 = state_23424__$1;(statearr_23443_23477[(1)] = (20));
} else
{var statearr_23444_23478 = state_23424__$1;(statearr_23444_23478[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (5)))
{var state_23424__$1 = state_23424;var statearr_23445_23479 = state_23424__$1;(statearr_23445_23479[(2)] = null);
(statearr_23445_23479[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (14)))
{var inst_23386 = (state_23424[(10)]);var inst_23392 = cljs.core.rest.call(null,inst_23386);var inst_23393 = cljs.core.first.call(null,inst_23386);var state_23424__$1 = (function (){var statearr_23446 = state_23424;(statearr_23446[(11)] = inst_23392);
return statearr_23446;
})();if(cljs.core.truth_(inst_23393))
{var statearr_23447_23480 = state_23424__$1;(statearr_23447_23480[(1)] = (16));
} else
{var statearr_23448_23481 = state_23424__$1;(statearr_23448_23481[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (16)))
{var inst_23386 = (state_23424[(10)]);var inst_23395 = cljs.core.first.call(null,inst_23386);var state_23424__$1 = state_23424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23424__$1,(19),inst_23395);
} else
{if((state_val_23425 === (10)))
{var inst_23382 = (state_23424[(8)]);var inst_23415 = (state_23424[(2)]);var inst_23416 = cljs.core.apply.call(null,handler,inst_23415,inst_23382);var state_23424__$1 = (function (){var statearr_23449 = state_23424;(statearr_23449[(12)] = inst_23416);
return statearr_23449;
})();var statearr_23450_23482 = state_23424__$1;(statearr_23450_23482[(2)] = null);
(statearr_23450_23482[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (18)))
{var inst_23392 = (state_23424[(11)]);var inst_23387 = (state_23424[(9)]);var inst_23400 = (state_23424[(2)]);var inst_23401 = cljs.core.conj.call(null,inst_23387,inst_23400);var inst_23386 = inst_23392;var inst_23387__$1 = inst_23401;var state_23424__$1 = (function (){var statearr_23451 = state_23424;(statearr_23451[(10)] = inst_23386);
(statearr_23451[(9)] = inst_23387__$1);
return statearr_23451;
})();var statearr_23452_23483 = state_23424__$1;(statearr_23452_23483[(2)] = null);
(statearr_23452_23483[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23425 === (8)))
{var inst_23381 = (state_23424[(7)]);var inst_23385 = cljs.core.PersistentVector.EMPTY;var inst_23386 = inst_23381;var inst_23387 = inst_23385;var state_23424__$1 = (function (){var statearr_23453 = state_23424;(statearr_23453[(10)] = inst_23386);
(statearr_23453[(9)] = inst_23387);
return statearr_23453;
})();var statearr_23454_23484 = state_23424__$1;(statearr_23454_23484[(2)] = null);
(statearr_23454_23484[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_23458 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23458[(0)] = state_machine__5694__auto__);
(statearr_23458[(1)] = (1));
return statearr_23458;
});
var state_machine__5694__auto____1 = (function (state_23424){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23424);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23459){if((e23459 instanceof Object))
{var ex__5697__auto__ = e23459;var statearr_23460_23485 = state_23424;(statearr_23460_23485[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23424);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23459;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23486 = state_23424;
state_23424 = G__23486;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23424){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_23461 = f__5709__auto__.call(null);(statearr_23461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_23461;
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
var G__23489__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__23488 = rseq;var rcomm = cljs.core.nth.call(null,vec__23488,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__23488,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__23489 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23489__delegate.call(this,req_args);};
G__23489.cljs$lang$maxFixedArity = 0;
G__23489.cljs$lang$applyTo = (function (arglist__23490){
var req_args = cljs.core.seq(arglist__23490);
return G__23489__delegate(req_args);
});
G__23489.cljs$core$IFn$_invoke$arity$variadic = G__23489__delegate;
return G__23489;
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
return (function (state_23508){var state_val_23509 = (state_23508[(1)]);if((state_val_23509 === (2)))
{var inst_23505 = (state_23508[(2)]);var inst_23506 = console.log(inst_23505);var state_23508__$1 = state_23508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23508__$1,inst_23506);
} else
{if((state_val_23509 === (1)))
{var state_23508__$1 = state_23508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23508__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23513 = [null,null,null,null,null,null,null];(statearr_23513[(0)] = state_machine__5694__auto__);
(statearr_23513[(1)] = (1));
return statearr_23513;
});
var state_machine__5694__auto____1 = (function (state_23508){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23508);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23514){if((e23514 instanceof Object))
{var ex__5697__auto__ = e23514;var statearr_23515_23517 = state_23508;(statearr_23515_23517[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23508);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23514;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23518 = state_23508;
state_23508 = G__23518;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23508){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_23516 = f__5709__auto__.call(null);(statearr_23516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_23516;
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
log_api.cljs$lang$applyTo = (function (arglist__23519){
var f = cljs.core.first(arglist__23519);
var args = cljs.core.rest(arglist__23519);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__23522){var vec__23523 = p__23522;var k = cljs.core.nth.call(null,vec__23523,(0),null);var v = cljs.core.nth.call(null,vec__23523,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___23550 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___23550,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___23550,r){
return (function (state_23541){var state_val_23542 = (state_23541[(1)]);if((state_val_23542 === (2)))
{var inst_23538 = (state_23541[(2)]);var inst_23539 = cljs.core.reset_BANG_.call(null,r,inst_23538);var state_23541__$1 = state_23541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23541__$1,inst_23539);
} else
{if((state_val_23542 === (1)))
{var state_23541__$1 = state_23541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23541__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___23550,r))
;return ((function (switch__5693__auto__,c__5708__auto___23550,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23546 = [null,null,null,null,null,null,null];(statearr_23546[(0)] = state_machine__5694__auto__);
(statearr_23546[(1)] = (1));
return statearr_23546;
});
var state_machine__5694__auto____1 = (function (state_23541){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23541);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23547){if((e23547 instanceof Object))
{var ex__5697__auto__ = e23547;var statearr_23548_23551 = state_23541;(statearr_23548_23551[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23541);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23547;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23552 = state_23541;
state_23541 = G__23552;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23541){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___23550,r))
})();var state__5710__auto__ = (function (){var statearr_23549 = f__5709__auto__.call(null);(statearr_23549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___23550);
return statearr_23549;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___23550,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__23553){
var id = cljs.core.first(arglist__23553);
arglist__23553 = cljs.core.next(arglist__23553);
var tolerance = cljs.core.first(arglist__23553);
var opts = cljs.core.rest(arglist__23553);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__23554){
var id = cljs.core.first(arglist__23554);
var opts = cljs.core.rest(arglist__23554);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__23555){
var ids = cljs.core.first(arglist__23555);
arglist__23555 = cljs.core.next(arglist__23555);
var tolerance = cljs.core.first(arglist__23555);
var opts = cljs.core.rest(arglist__23555);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__23556){var map__23558 = p__23556;var map__23558__$1 = ((cljs.core.seq_QMARK_.call(null,map__23558))?cljs.core.apply.call(null,cljs.core.hash_map,map__23558):map__23558);var opts = map__23558__$1;var boundaryline_ids = cljs.core.get.call(null,map__23558__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__23556 = null;if (arguments.length > 3) {
  p__23556 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__23556);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__23559){
var collection_id = cljs.core.first(arglist__23559);
arglist__23559 = cljs.core.next(arglist__23559);
var tolerance = cljs.core.first(arglist__23559);
arglist__23559 = cljs.core.next(arglist__23559);
var bounds = cljs.core.first(arglist__23559);
var p__23556 = cljs.core.rest(arglist__23559);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__23556);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__23560){var vec__23562 = p__23560;var type_ids = cljs.core.nth.call(null,vec__23562,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__23560 = null;if (arguments.length > 6) {
  p__23560 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__23560);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__23563){
var index = cljs.core.first(arglist__23563);
arglist__23563 = cljs.core.next(arglist__23563);
var type = cljs.core.first(arglist__23563);
arglist__23563 = cljs.core.next(arglist__23563);
var blcoll = cljs.core.first(arglist__23563);
arglist__23563 = cljs.core.next(arglist__23563);
var attr = cljs.core.first(arglist__23563);
arglist__23563 = cljs.core.next(arglist__23563);
var filter = cljs.core.first(arglist__23563);
arglist__23563 = cljs.core.next(arglist__23563);
var bounds = cljs.core.first(arglist__23563);
var p__23560 = cljs.core.rest(arglist__23563);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__23560);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__23564){var vec__23566 = p__23564;var type_ids = cljs.core.nth.call(null,vec__23566,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__23564 = null;if (arguments.length > 5) {
  p__23564 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__23564);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__23567){
var index = cljs.core.first(arglist__23567);
arglist__23567 = cljs.core.next(arglist__23567);
var type = cljs.core.first(arglist__23567);
arglist__23567 = cljs.core.next(arglist__23567);
var statsattrs = cljs.core.first(arglist__23567);
arglist__23567 = cljs.core.next(arglist__23567);
var filter = cljs.core.first(arglist__23567);
arglist__23567 = cljs.core.next(arglist__23567);
var bounds = cljs.core.first(arglist__23567);
var p__23564 = cljs.core.rest(arglist__23567);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__23564);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__23568){var vec__23570 = p__23568;var type_ids = cljs.core.nth.call(null,vec__23570,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__23568 = null;if (arguments.length > 7) {
  p__23568 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__23568);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__23571){
var index = cljs.core.first(arglist__23571);
arglist__23571 = cljs.core.next(arglist__23571);
var type = cljs.core.first(arglist__23571);
arglist__23571 = cljs.core.next(arglist__23571);
var location_attr = cljs.core.first(arglist__23571);
arglist__23571 = cljs.core.next(arglist__23571);
var attrs = cljs.core.first(arglist__23571);
arglist__23571 = cljs.core.next(arglist__23571);
var max_count = cljs.core.first(arglist__23571);
arglist__23571 = cljs.core.next(arglist__23571);
var filter = cljs.core.first(arglist__23571);
arglist__23571 = cljs.core.next(arglist__23571);
var bounds = cljs.core.first(arglist__23571);
var p__23568 = cljs.core.rest(arglist__23571);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__23568);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__23572){var vec__23574 = p__23572;var type_ids = cljs.core.nth.call(null,vec__23574,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__23572 = null;if (arguments.length > 7) {
  p__23572 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__23572);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__23575){
var index = cljs.core.first(arglist__23575);
arglist__23575 = cljs.core.next(arglist__23575);
var type = cljs.core.first(arglist__23575);
arglist__23575 = cljs.core.next(arglist__23575);
var filter_spec = cljs.core.first(arglist__23575);
arglist__23575 = cljs.core.next(arglist__23575);
var bounds = cljs.core.first(arglist__23575);
arglist__23575 = cljs.core.next(arglist__23575);
var sort_spec = cljs.core.first(arglist__23575);
arglist__23575 = cljs.core.next(arglist__23575);
var from = cljs.core.first(arglist__23575);
arglist__23575 = cljs.core.next(arglist__23575);
var size = cljs.core.first(arglist__23575);
var p__23572 = cljs.core.rest(arglist__23575);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__23572);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
