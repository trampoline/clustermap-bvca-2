// Compiled by ClojureScript 0.0-2356
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
var AJAX__delegate = function (url,p__48938){var map__48949 = p__48938;var map__48949__$1 = ((cljs.core.seq_QMARK_(map__48949))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48949):map__48949);var opts = map__48949__$1;var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48949__$1,cljs.core.constant$keyword$1136);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48949__$1,cljs.core.constant$keyword$1137);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48949__$1,cljs.core.constant$keyword$1138);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__48950_48959 = url;var G__48951_48960 = ((function (G__48950_48959,comm,map__48949,map__48949__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (G__48950_48959,comm,map__48949,map__48949__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$1115,true], 0));
}
});})(G__48950_48959,comm,map__48949,map__48949__$1,opts,content,method,raw))
.call(null,((function (){var G__48955 = event.target.getResponseText();return JSON.parse(G__48955);
})()["data"])));
return cljs.core.async.close_BANG_(comm);
});})(G__48950_48959,comm,map__48949,map__48949__$1,opts,content,method,raw))
;var G__48952_48961 = (function (){var or__3637__auto__ = (function (){var G__48957 = method;var G__48957__$1 = (((G__48957 == null))?null:cljs.core.name(G__48957));var G__48957__$2 = (((G__48957__$1 == null))?null:clojure.string.upper_case(G__48957__$1));return G__48957__$2;
})();if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "GET";
}
})();var G__48953_48962 = (cljs.core.truth_(content)?(function (){var G__48958 = cljs.core.clj__GT_js(content);return JSON.stringify(G__48958);
})():null);var G__48954_48963 = (cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null);goog.net.XhrIo.send(G__48950_48959,G__48951_48960,G__48952_48961,G__48953_48962,G__48954_48963);
return comm;
};
var AJAX = function (url,var_args){
var p__48938 = null;if (arguments.length > 1) {
  p__48938 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__48938);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__48964){
var url = cljs.core.first(arglist__48964);
var p__48938 = cljs.core.rest(arglist__48964);
return AJAX__delegate(url,p__48938);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__48965){var map__48967 = p__48965;var map__48967__$1 = ((cljs.core.seq_QMARK_(map__48967))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48967):map__48967);var opts = map__48967__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1137,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__48965 = null;if (arguments.length > 1) {
  p__48965 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__48965);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__48968){
var url = cljs.core.first(arglist__48968);
var p__48965 = cljs.core.rest(arglist__48968);
return GET__delegate(url,p__48965);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__48969){var map__48971 = p__48969;var map__48971__$1 = ((cljs.core.seq_QMARK_(map__48971))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48971):map__48971);var opts = map__48971__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1137,"POST",cljs.core.constant$keyword$1136,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__48969 = null;if (arguments.length > 2) {
  p__48969 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__48969);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__48972){
var url = cljs.core.first(arglist__48972);
arglist__48972 = cljs.core.next(arglist__48972);
var content = cljs.core.first(arglist__48972);
var p__48969 = cljs.core.rest(arglist__48972);
return POST__delegate(url,content,p__48969);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__48973){var map__48975 = p__48973;var map__48975__$1 = ((cljs.core.seq_QMARK_(map__48975))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48975):map__48975);var opts = map__48975__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1137,"PUT",cljs.core.constant$keyword$1136,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__48973 = null;if (arguments.length > 2) {
  p__48973 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__48973);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__48976){
var url = cljs.core.first(arglist__48976);
arglist__48976 = cljs.core.next(arglist__48976);
var content = cljs.core.first(arglist__48976);
var p__48973 = cljs.core.rest(arglist__48976);
return PUT__delegate(url,content,p__48973);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_49111){var state_val_49112 = (state_49111[(1)]);if((state_val_49112 === (7)))
{var inst_49068 = (state_49111[(7)]);var inst_49067 = (state_49111[(2)]);var inst_49068__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49067,(0),null);var inst_49069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49067,(1),null);var inst_49070 = cljs.core.sequential_QMARK_(inst_49068__$1);var state_49111__$1 = (function (){var statearr_49113 = state_49111;(statearr_49113[(8)] = inst_49069);
(statearr_49113[(7)] = inst_49068__$1);
return statearr_49113;
})();if(inst_49070)
{var statearr_49114_49149 = state_49111__$1;(statearr_49114_49149[(1)] = (8));
} else
{var statearr_49115_49150 = state_49111__$1;(statearr_49115_49150[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (20)))
{var inst_49068 = (state_49111[(7)]);var state_49111__$1 = state_49111;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49111__$1,(23),inst_49068);
} else
{if((state_val_49112 === (1)))
{var state_49111__$1 = state_49111;var statearr_49116_49151 = state_49111__$1;(statearr_49116_49151[(2)] = null);
(statearr_49116_49151[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (4)))
{var state_49111__$1 = state_49111;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49111__$1,(7),ocomm);
} else
{if((state_val_49112 === (15)))
{var inst_49091 = (state_49111[(2)]);var state_49111__$1 = state_49111;var statearr_49117_49152 = state_49111__$1;(statearr_49117_49152[(2)] = inst_49091);
(statearr_49117_49152[(1)] = (12));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (21)))
{var state_49111__$1 = state_49111;var statearr_49118_49153 = state_49111__$1;(statearr_49118_49153[(2)] = null);
(statearr_49118_49153[(1)] = (22));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (13)))
{var inst_49074 = (state_49111[(9)]);var state_49111__$1 = state_49111;var statearr_49119_49154 = state_49111__$1;(statearr_49119_49154[(2)] = inst_49074);
(statearr_49119_49154[(1)] = (15));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (22)))
{var inst_49100 = (state_49111[(2)]);var state_49111__$1 = state_49111;var statearr_49120_49155 = state_49111__$1;(statearr_49120_49155[(2)] = inst_49100);
(statearr_49120_49155[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (6)))
{var inst_49107 = (state_49111[(2)]);var state_49111__$1 = state_49111;var statearr_49121_49156 = state_49111__$1;(statearr_49121_49156[(2)] = inst_49107);
(statearr_49121_49156[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (17)))
{var state_49111__$1 = state_49111;var statearr_49122_49157 = state_49111__$1;(statearr_49122_49157[(2)] = null);
(statearr_49122_49157[(1)] = (18));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (3)))
{var inst_49109 = (state_49111[(2)]);var state_49111__$1 = state_49111;return cljs.core.async.impl.ioc_helpers.return_chan(state_49111__$1,inst_49109);
} else
{if((state_val_49112 === (12)))
{var inst_49093 = (state_49111[(2)]);var state_49111__$1 = state_49111;var statearr_49123_49158 = state_49111__$1;(statearr_49123_49158[(2)] = inst_49093);
(statearr_49123_49158[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (2)))
{var state_49111__$1 = state_49111;var statearr_49124_49159 = state_49111__$1;(statearr_49124_49159[(1)] = (4));

return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (23)))
{var inst_49097 = (state_49111[(2)]);var state_49111__$1 = state_49111;var statearr_49126_49160 = state_49111__$1;(statearr_49126_49160[(2)] = inst_49097);
(statearr_49126_49160[(1)] = (22));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (19)))
{var inst_49084 = (state_49111[(2)]);var state_49111__$1 = state_49111;var statearr_49127_49161 = state_49111__$1;(statearr_49127_49161[(2)] = inst_49084);
(statearr_49127_49161[(1)] = (18));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (11)))
{var inst_49073 = (state_49111[(10)]);var inst_49076 = cljs.core.empty_QMARK_(inst_49073);var state_49111__$1 = state_49111;if(inst_49076)
{var statearr_49128_49162 = state_49111__$1;(statearr_49128_49162[(1)] = (13));
} else
{var statearr_49129_49163 = state_49111__$1;(statearr_49129_49163[(1)] = (14));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (9)))
{var inst_49068 = (state_49111[(7)]);var state_49111__$1 = state_49111;if(cljs.core.truth_(inst_49068))
{var statearr_49130_49164 = state_49111__$1;(statearr_49130_49164[(1)] = (20));
} else
{var statearr_49131_49165 = state_49111__$1;(statearr_49131_49165[(1)] = (21));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (5)))
{var state_49111__$1 = state_49111;var statearr_49132_49166 = state_49111__$1;(statearr_49132_49166[(2)] = null);
(statearr_49132_49166[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (14)))
{var inst_49073 = (state_49111[(10)]);var inst_49079 = cljs.core.rest(inst_49073);var inst_49080 = cljs.core.first(inst_49073);var state_49111__$1 = (function (){var statearr_49133 = state_49111;(statearr_49133[(11)] = inst_49079);
return statearr_49133;
})();if(cljs.core.truth_(inst_49080))
{var statearr_49134_49167 = state_49111__$1;(statearr_49134_49167[(1)] = (16));
} else
{var statearr_49135_49168 = state_49111__$1;(statearr_49135_49168[(1)] = (17));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (16)))
{var inst_49073 = (state_49111[(10)]);var inst_49082 = cljs.core.first(inst_49073);var state_49111__$1 = state_49111;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49111__$1,(19),inst_49082);
} else
{if((state_val_49112 === (10)))
{var inst_49069 = (state_49111[(8)]);var inst_49102 = (state_49111[(2)]);var inst_49103 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_49102,inst_49069);var state_49111__$1 = (function (){var statearr_49136 = state_49111;(statearr_49136[(12)] = inst_49103);
return statearr_49136;
})();var statearr_49137_49169 = state_49111__$1;(statearr_49137_49169[(2)] = null);
(statearr_49137_49169[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (18)))
{var inst_49074 = (state_49111[(9)]);var inst_49079 = (state_49111[(11)]);var inst_49087 = (state_49111[(2)]);var inst_49088 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49074,inst_49087);var inst_49073 = inst_49079;var inst_49074__$1 = inst_49088;var state_49111__$1 = (function (){var statearr_49138 = state_49111;(statearr_49138[(9)] = inst_49074__$1);
(statearr_49138[(10)] = inst_49073);
return statearr_49138;
})();var statearr_49139_49170 = state_49111__$1;(statearr_49139_49170[(2)] = null);
(statearr_49139_49170[(1)] = (11));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_49112 === (8)))
{var inst_49068 = (state_49111[(7)]);var inst_49072 = cljs.core.PersistentVector.EMPTY;var inst_49073 = inst_49068;var inst_49074 = inst_49072;var state_49111__$1 = (function (){var statearr_49140 = state_49111;(statearr_49140[(9)] = inst_49074);
(statearr_49140[(10)] = inst_49073);
return statearr_49140;
})();var statearr_49141_49171 = state_49111__$1;(statearr_49141_49171[(2)] = null);
(statearr_49141_49171[(1)] = (11));
return cljs.core.constant$keyword$1120;
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
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_49145 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49145[(0)] = state_machine__5805__auto__);
(statearr_49145[(1)] = (1));
return statearr_49145;
});
var state_machine__5805__auto____1 = (function (state_49111){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_49111);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e49146){if((e49146 instanceof Object))
{var ex__5808__auto__ = e49146;var statearr_49147_49172 = state_49111;(statearr_49147_49172[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49111);
return cljs.core.constant$keyword$1120;
} else
{throw e49146;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__49173 = state_49111;
state_49111 = G__49173;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_49111){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_49111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_49148 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_49148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_49148;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
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
var G__49176__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__49175 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49175,(0),null);var result_handler_args = cljs.core.nthnext(vec__49175,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__49176 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49176__delegate.call(this,req_args);};
G__49176.cljs$lang$maxFixedArity = 0;
G__49176.cljs$lang$applyTo = (function (arglist__49177){
var req_args = cljs.core.seq(arglist__49177);
return G__49176__delegate(req_args);
});
G__49176.cljs$core$IFn$_invoke$arity$variadic = G__49176__delegate;
return G__49176;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__,ch){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,ch){
return (function (state_49195){var state_val_49196 = (state_49195[(1)]);if((state_val_49196 === (2)))
{var inst_49192 = (state_49195[(2)]);var inst_49193 = console.log(inst_49192);var state_49195__$1 = state_49195;return cljs.core.async.impl.ioc_helpers.return_chan(state_49195__$1,inst_49193);
} else
{if((state_val_49196 === (1)))
{var state_49195__$1 = state_49195;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49195__$1,(2),ch);
} else
{return null;
}
}
});})(c__5819__auto__,ch))
;return ((function (switch__5804__auto__,c__5819__auto__,ch){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_49200 = [null,null,null,null,null,null,null];(statearr_49200[(0)] = state_machine__5805__auto__);
(statearr_49200[(1)] = (1));
return statearr_49200;
});
var state_machine__5805__auto____1 = (function (state_49195){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_49195);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e49201){if((e49201 instanceof Object))
{var ex__5808__auto__ = e49201;var statearr_49202_49204 = state_49195;(statearr_49202_49204[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49195);
return cljs.core.constant$keyword$1120;
} else
{throw e49201;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__49205 = state_49195;
state_49195 = G__49205;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_49195){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_49195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,ch))
})();var state__5821__auto__ = (function (){var statearr_49203 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_49203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_49203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__,ch))
);
return c__5819__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__49206){
var f = cljs.core.first(arglist__49206);
var args = cljs.core.rest(arglist__49206);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49210){var vec__49211 = p__49210;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49211,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49211,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__49212 = cljs.core.clj__GT_js(v);return JSON.stringify(G__49212);
})()));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = (function (){var G__49229 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49229) : cljs.core.atom.call(null,G__49229));
})();var c__5819__auto___49245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___49245,r){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___49245,r){
return (function (state_49234){var state_val_49235 = (state_49234[(1)]);if((state_val_49235 === (2)))
{var inst_49231 = (state_49234[(2)]);var inst_49232 = (function (){var G__49236 = r;var G__49237 = inst_49231;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49236,G__49237) : cljs.core.reset_BANG_.call(null,G__49236,G__49237));
})();var state_49234__$1 = state_49234;return cljs.core.async.impl.ioc_helpers.return_chan(state_49234__$1,inst_49232);
} else
{if((state_val_49235 === (1)))
{var state_49234__$1 = state_49234;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49234__$1,(2),comm);
} else
{return null;
}
}
});})(c__5819__auto___49245,r))
;return ((function (switch__5804__auto__,c__5819__auto___49245,r){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_49241 = [null,null,null,null,null,null,null];(statearr_49241[(0)] = state_machine__5805__auto__);
(statearr_49241[(1)] = (1));
return statearr_49241;
});
var state_machine__5805__auto____1 = (function (state_49234){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_49234);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e49242){if((e49242 instanceof Object))
{var ex__5808__auto__ = e49242;var statearr_49243_49246 = state_49234;(statearr_49243_49246[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49234);
return cljs.core.constant$keyword$1120;
} else
{throw e49242;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__49247 = state_49234;
state_49234 = G__49247;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_49234){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_49234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___49245,r))
})();var state__5821__auto__ = (function (){var statearr_49244 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_49244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___49245);
return statearr_49244;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___49245,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__49248){
var id = cljs.core.first(arglist__49248);
arglist__49248 = cljs.core.next(arglist__49248);
var tolerance = cljs.core.first(arglist__49248);
var opts = cljs.core.rest(arglist__49248);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__49249){
var id = cljs.core.first(arglist__49249);
var opts = cljs.core.rest(arglist__49249);
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
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1139,ids,cljs.core.constant$keyword$1140,tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__49250){
var ids = cljs.core.first(arglist__49250);
arglist__49250 = cljs.core.next(arglist__49250);
var tolerance = cljs.core.first(arglist__49250);
var opts = cljs.core.rest(arglist__49250);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__49251){var map__49253 = p__49251;var map__49253__$1 = ((cljs.core.seq_QMARK_(map__49253))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49253):map__49253);var opts = map__49253__$1;var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49253__$1,cljs.core.constant$keyword$1141);var opts__$1 = cljs.core.flatten(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$1141)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1142,bounds,cljs.core.constant$keyword$1141,boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__49251 = null;if (arguments.length > 3) {
  p__49251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__49251);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__49254){
var collection_id = cljs.core.first(arglist__49254);
arglist__49254 = cljs.core.next(arglist__49254);
var tolerance = cljs.core.first(arglist__49254);
arglist__49254 = cljs.core.next(arglist__49254);
var bounds = cljs.core.first(arglist__49254);
var p__49251 = cljs.core.rest(arglist__49254);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__49251);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__49255){var vec__49257 = p__49255;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49257,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1143,filter,cljs.core.constant$keyword$1142,bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__49255 = null;if (arguments.length > 6) {
  p__49255 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__49255);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__49258){
var index = cljs.core.first(arglist__49258);
arglist__49258 = cljs.core.next(arglist__49258);
var type = cljs.core.first(arglist__49258);
arglist__49258 = cljs.core.next(arglist__49258);
var blcoll = cljs.core.first(arglist__49258);
arglist__49258 = cljs.core.next(arglist__49258);
var attr = cljs.core.first(arglist__49258);
arglist__49258 = cljs.core.next(arglist__49258);
var filter = cljs.core.first(arglist__49258);
arglist__49258 = cljs.core.next(arglist__49258);
var bounds = cljs.core.first(arglist__49258);
var p__49255 = cljs.core.rest(arglist__49258);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__49255);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__49259){var vec__49261 = p__49259;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49261,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1144,statsattrs,cljs.core.constant$keyword$1143,filter,cljs.core.constant$keyword$1142,bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__49259 = null;if (arguments.length > 5) {
  p__49259 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__49259);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__49262){
var index = cljs.core.first(arglist__49262);
arglist__49262 = cljs.core.next(arglist__49262);
var type = cljs.core.first(arglist__49262);
arglist__49262 = cljs.core.next(arglist__49262);
var statsattrs = cljs.core.first(arglist__49262);
arglist__49262 = cljs.core.next(arglist__49262);
var filter = cljs.core.first(arglist__49262);
arglist__49262 = cljs.core.next(arglist__49262);
var bounds = cljs.core.first(arglist__49262);
var p__49259 = cljs.core.rest(arglist__49262);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__49259);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__49263){var vec__49265 = p__49263;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49265,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1145,max_count,cljs.core.constant$keyword$1146,attrs,cljs.core.constant$keyword$1143,filter,cljs.core.constant$keyword$1142,bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__49263 = null;if (arguments.length > 7) {
  p__49263 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__49263);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__49266){
var index = cljs.core.first(arglist__49266);
arglist__49266 = cljs.core.next(arglist__49266);
var type = cljs.core.first(arglist__49266);
arglist__49266 = cljs.core.next(arglist__49266);
var location_attr = cljs.core.first(arglist__49266);
arglist__49266 = cljs.core.next(arglist__49266);
var attrs = cljs.core.first(arglist__49266);
arglist__49266 = cljs.core.next(arglist__49266);
var max_count = cljs.core.first(arglist__49266);
arglist__49266 = cljs.core.next(arglist__49266);
var filter = cljs.core.first(arglist__49266);
arglist__49266 = cljs.core.next(arglist__49266);
var bounds = cljs.core.first(arglist__49266);
var p__49263 = cljs.core.rest(arglist__49266);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__49263);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__49267){var vec__49269 = p__49267;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49269,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1143,filter_spec,cljs.core.constant$keyword$1142,bounds,cljs.core.constant$keyword$1147,sort_spec,cljs.core.constant$keyword$1148,from,cljs.core.constant$keyword$1149,size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__49267 = null;if (arguments.length > 7) {
  p__49267 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__49267);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__49270){
var index = cljs.core.first(arglist__49270);
arglist__49270 = cljs.core.next(arglist__49270);
var type = cljs.core.first(arglist__49270);
arglist__49270 = cljs.core.next(arglist__49270);
var filter_spec = cljs.core.first(arglist__49270);
arglist__49270 = cljs.core.next(arglist__49270);
var bounds = cljs.core.first(arglist__49270);
arglist__49270 = cljs.core.next(arglist__49270);
var sort_spec = cljs.core.first(arglist__49270);
arglist__49270 = cljs.core.next(arglist__49270);
var from = cljs.core.first(arglist__49270);
arglist__49270 = cljs.core.next(arglist__49270);
var size = cljs.core.first(arglist__49270);
var p__49267 = cljs.core.rest(arglist__49270);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__49267);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1150,filter_spec,cljs.core.constant$keyword$1142,bounds,cljs.core.constant$keyword$1151,time_variable,cljs.core.constant$keyword$1152,after,cljs.core.constant$keyword$1153,before,cljs.core.constant$keyword$1154,interval,cljs.core.constant$keyword$1155,metric_variables], null));
});
