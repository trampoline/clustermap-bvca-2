// Compiled by ClojureScript 0.0-2138
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
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__19969){var map__19971 = p__19969;var map__19971__$1 = ((cljs.core.seq_QMARK_(map__19971))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19971):map__19971);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19971__$1,cljs.core.constant$keyword$238);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$219,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__19969 = null;if (arguments.length > 1) {
  p__19969 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19969);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19972){
var url = cljs.core.first(arglist__19972);
var p__19969 = cljs.core.rest(arglist__19972);
return GET__delegate(url,p__19969);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20105){var state_val_20106 = (state_20105[1]);if((state_val_20106 === 1))
{var state_20105__$1 = state_20105;var statearr_20107_20143 = state_20105__$1;(statearr_20107_20143[2] = null);
(statearr_20107_20143[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 2))
{var state_20105__$1 = state_20105;if(true)
{var statearr_20108_20144 = state_20105__$1;(statearr_20108_20144[1] = 4);
} else
{var statearr_20109_20145 = state_20105__$1;(statearr_20109_20145[1] = 5);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 3))
{var inst_20103 = (state_20105[2]);var state_20105__$1 = state_20105;return cljs.core.async.impl.ioc_helpers.return_chan(state_20105__$1,inst_20103);
} else
{if((state_val_20106 === 4))
{var state_20105__$1 = state_20105;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20105__$1,7,ocomm);
} else
{if((state_val_20106 === 5))
{var state_20105__$1 = state_20105;var statearr_20110_20146 = state_20105__$1;(statearr_20110_20146[2] = null);
(statearr_20110_20146[1] = 6);
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 6))
{var inst_20101 = (state_20105[2]);var state_20105__$1 = state_20105;var statearr_20111_20147 = state_20105__$1;(statearr_20111_20147[2] = inst_20101);
(statearr_20111_20147[1] = 3);
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 7))
{var inst_20063 = (state_20105[7]);var inst_20062 = (state_20105[2]);var inst_20063__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20062,0,null);var inst_20064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20062,1,null);var inst_20065 = cljs.core.sequential_QMARK_(inst_20063__$1);var state_20105__$1 = (function (){var statearr_20112 = state_20105;(statearr_20112[7] = inst_20063__$1);
(statearr_20112[8] = inst_20064);
return statearr_20112;
})();if(inst_20065)
{var statearr_20113_20148 = state_20105__$1;(statearr_20113_20148[1] = 8);
} else
{var statearr_20114_20149 = state_20105__$1;(statearr_20114_20149[1] = 9);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 8))
{var inst_20063 = (state_20105[7]);var inst_20067 = inst_20063;var inst_20068 = cljs.core.PersistentVector.EMPTY;var state_20105__$1 = (function (){var statearr_20115 = state_20105;(statearr_20115[9] = inst_20068);
(statearr_20115[10] = inst_20067);
return statearr_20115;
})();var statearr_20116_20150 = state_20105__$1;(statearr_20116_20150[2] = null);
(statearr_20116_20150[1] = 11);
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 9))
{var inst_20063 = (state_20105[7]);var state_20105__$1 = state_20105;if(cljs.core.truth_(inst_20063))
{var statearr_20117_20151 = state_20105__$1;(statearr_20117_20151[1] = 20);
} else
{var statearr_20118_20152 = state_20105__$1;(statearr_20118_20152[1] = 21);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 10))
{var inst_20064 = (state_20105[8]);var inst_20096 = (state_20105[2]);var inst_20097 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20096,inst_20064);var state_20105__$1 = (function (){var statearr_20119 = state_20105;(statearr_20119[11] = inst_20097);
return statearr_20119;
})();var statearr_20120_20153 = state_20105__$1;(statearr_20120_20153[2] = null);
(statearr_20120_20153[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 11))
{var inst_20067 = (state_20105[10]);var inst_20070 = cljs.core.empty_QMARK_(inst_20067);var state_20105__$1 = state_20105;if(inst_20070)
{var statearr_20121_20154 = state_20105__$1;(statearr_20121_20154[1] = 13);
} else
{var statearr_20122_20155 = state_20105__$1;(statearr_20122_20155[1] = 14);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 12))
{var inst_20087 = (state_20105[2]);var state_20105__$1 = state_20105;var statearr_20123_20156 = state_20105__$1;(statearr_20123_20156[2] = inst_20087);
(statearr_20123_20156[1] = 10);
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 13))
{var inst_20068 = (state_20105[9]);var state_20105__$1 = state_20105;var statearr_20124_20157 = state_20105__$1;(statearr_20124_20157[2] = inst_20068);
(statearr_20124_20157[1] = 15);
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 14))
{var inst_20067 = (state_20105[10]);var inst_20073 = cljs.core.rest(inst_20067);var inst_20074 = cljs.core.first(inst_20067);var state_20105__$1 = (function (){var statearr_20125 = state_20105;(statearr_20125[12] = inst_20073);
return statearr_20125;
})();if(cljs.core.truth_(inst_20074))
{var statearr_20126_20158 = state_20105__$1;(statearr_20126_20158[1] = 16);
} else
{var statearr_20127_20159 = state_20105__$1;(statearr_20127_20159[1] = 17);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 15))
{var inst_20085 = (state_20105[2]);var state_20105__$1 = state_20105;var statearr_20128_20160 = state_20105__$1;(statearr_20128_20160[2] = inst_20085);
(statearr_20128_20160[1] = 12);
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 16))
{var inst_20067 = (state_20105[10]);var inst_20076 = cljs.core.first(inst_20067);var state_20105__$1 = state_20105;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20105__$1,19,inst_20076);
} else
{if((state_val_20106 === 17))
{var state_20105__$1 = state_20105;var statearr_20129_20161 = state_20105__$1;(statearr_20129_20161[2] = null);
(statearr_20129_20161[1] = 18);
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 18))
{var inst_20073 = (state_20105[12]);var inst_20068 = (state_20105[9]);var inst_20081 = (state_20105[2]);var inst_20082 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_20068,inst_20081);var inst_20067 = inst_20073;var inst_20068__$1 = inst_20082;var state_20105__$1 = (function (){var statearr_20130 = state_20105;(statearr_20130[9] = inst_20068__$1);
(statearr_20130[10] = inst_20067);
return statearr_20130;
})();var statearr_20131_20162 = state_20105__$1;(statearr_20131_20162[2] = null);
(statearr_20131_20162[1] = 11);
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 19))
{var inst_20078 = (state_20105[2]);var state_20105__$1 = state_20105;var statearr_20132_20163 = state_20105__$1;(statearr_20132_20163[2] = inst_20078);
(statearr_20132_20163[1] = 18);
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 20))
{var inst_20063 = (state_20105[7]);var state_20105__$1 = state_20105;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20105__$1,23,inst_20063);
} else
{if((state_val_20106 === 21))
{var state_20105__$1 = state_20105;var statearr_20133_20164 = state_20105__$1;(statearr_20133_20164[2] = null);
(statearr_20133_20164[1] = 22);
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 22))
{var inst_20094 = (state_20105[2]);var state_20105__$1 = state_20105;var statearr_20134_20165 = state_20105__$1;(statearr_20134_20165[2] = inst_20094);
(statearr_20134_20165[1] = 10);
return cljs.core.constant$keyword$224;
} else
{if((state_val_20106 === 23))
{var inst_20091 = (state_20105[2]);var state_20105__$1 = state_20105;var statearr_20135_20166 = state_20105__$1;(statearr_20135_20166[2] = inst_20091);
(statearr_20135_20166[1] = 22);
return cljs.core.constant$keyword$224;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20139 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20139[0] = state_machine__5507__auto__);
(statearr_20139[1] = 1);
return statearr_20139;
});
var state_machine__5507__auto____1 = (function (state_20105){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20105);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20140){if((e20140 instanceof Object))
{var ex__5510__auto__ = e20140;var statearr_20141_20167 = state_20105;(statearr_20141_20167[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20105);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e20140;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__20168 = state_20105;
state_20105 = G__20168;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20105){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20142 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return (function() { 
var G__20171__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20170 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20170,0,null);var result_handler_args = cljs.core.nthnext(vec__20170,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20171 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20171__delegate.call(this,req_args);};
G__20171.cljs$lang$maxFixedArity = 0;
G__20171.cljs$lang$applyTo = (function (arglist__20172){
var req_args = cljs.core.seq(arglist__20172);
return G__20171__delegate(req_args);
});
G__20171.cljs$core$IFn$_invoke$arity$variadic = G__20171__delegate;
return G__20171;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20190){var state_val_20191 = (state_20190[1]);if((state_val_20191 === 2))
{var inst_20187 = (state_20190[2]);var inst_20188 = console.log(inst_20187);var state_20190__$1 = state_20190;return cljs.core.async.impl.ioc_helpers.return_chan(state_20190__$1,inst_20188);
} else
{if((state_val_20191 === 1))
{var state_20190__$1 = state_20190;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20190__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20195 = [null,null,null,null,null,null,null];(statearr_20195[0] = state_machine__5507__auto__);
(statearr_20195[1] = 1);
return statearr_20195;
});
var state_machine__5507__auto____1 = (function (state_20190){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20190);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20196){if((e20196 instanceof Object))
{var ex__5510__auto__ = e20196;var statearr_20197_20199 = state_20190;(statearr_20197_20199[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20190);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e20196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__20200 = state_20190;
state_20190 = G__20200;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20190){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20198 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20201){
var f = cljs.core.first(arglist__20201);
var args = cljs.core.rest(arglist__20201);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20204){var vec__20205 = p__20204;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20205,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20205,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,[cljs.core.str("/api/boundarylines/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(tolerance)].join(''),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__20206){
var id = cljs.core.first(arglist__20206);
arglist__20206 = cljs.core.next(arglist__20206);
var tolerance = cljs.core.first(arglist__20206);
var opts = cljs.core.rest(arglist__20206);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,[cljs.core.str("/api/boundaryline-collection-index/"),cljs.core.str(id)].join(''),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20207){
var id = cljs.core.first(arglist__20207);
var opts = cljs.core.rest(arglist__20207);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > 0))
{return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/constituencies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.constituencies = (function() { 
var constituencies__delegate = function (p__20208){var vec__20210 = p__20208;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20210,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20208 = null;if (arguments.length > 0) {
  p__20208 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20208);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20211){
var p__20208 = cljs.core.seq(arglist__20211);
return constituencies__delegate(p__20208);
});
constituencies.cljs$core$IFn$_invoke$arity$variadic = constituencies__delegate;
return constituencies;
})()
;
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_companies = (function() { 
var portfolio_companies__delegate = function (p__20212){var vec__20214 = p__20212;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20214,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__20212 = null;if (arguments.length > 0) {
  p__20212 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20212);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20215){
var p__20212 = cljs.core.seq(arglist__20215);
return portfolio_companies__delegate(p__20212);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20216){var vec__20218 = p__20216;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20218,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20216 = null;if (arguments.length > 0) {
  p__20216 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20216);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20219){
var p__20216 = cljs.core.seq(arglist__20219);
return portfolio_company_stats__delegate(p__20216);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20220){var vec__20222 = p__20220;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20222,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20220 = null;if (arguments.length > 0) {
  p__20220 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20220);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20223){
var p__20220 = cljs.core.seq(arglist__20223);
return portfolio_company_account_stats__delegate(p__20220);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20224){var vec__20226 = p__20224;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20226,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$239,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?boundarylinecolls.uk_constituencies"], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20224 = null;if (arguments.length > 0) {
  p__20224 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20224);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20227){
var p__20224 = cljs.core.seq(arglist__20227);
return portfolio_company_sites__delegate(p__20224);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20228){var vec__20230 = p__20228;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20230,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20228 = null;if (arguments.length > 0) {
  p__20228 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20228);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20231){
var p__20228 = cljs.core.seq(arglist__20231);
return portfolio_company_locations__delegate(p__20228);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20232){var vec__20234 = p__20232;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20234,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20232 = null;if (arguments.length > 0) {
  p__20232 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20232);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20235){
var p__20232 = cljs.core.seq(arglist__20235);
return portfolio_company_site_stats__delegate(p__20232);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20236){var vec__20238 = p__20236;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20238,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20236 = null;if (arguments.length > 0) {
  p__20236 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20236);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20239){
var p__20236 = cljs.core.seq(arglist__20239);
return portfolio_company_site_account_timelines__delegate(p__20236);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.investor_comapnies = (function() { 
var investor_comapnies__delegate = function (p__20240){var vec__20242 = p__20240;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20242,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20240 = null;if (arguments.length > 0) {
  p__20240 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20240);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20243){
var p__20240 = cljs.core.seq(arglist__20243);
return investor_comapnies__delegate(p__20240);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
