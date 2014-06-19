// Compiled by ClojureScript 0.0-2227
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
var GET__delegate = function (url,p__21117){var map__21119 = p__21117;var map__21119__$1 = ((cljs.core.seq_QMARK_.call(null,map__21119))?cljs.core.apply.call(null,cljs.core.hash_map,map__21119):map__21119);var raw = cljs.core.get.call(null,map__21119__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,((function (comm,map__21119,map__21119__$1,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__21119,map__21119__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}
});})(comm,map__21119,map__21119__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__21119,map__21119__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__21117 = null;if (arguments.length > 1) {
  p__21117 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__21117);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__21120){
var url = cljs.core.first(arglist__21120);
var p__21117 = cljs.core.rest(arglist__21120);
return GET__delegate(url,p__21117);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_21253){var state_val_21254 = (state_21253[1]);if((state_val_21254 === 7))
{var inst_21211 = (state_21253[7]);var inst_21210 = (state_21253[2]);var inst_21211__$1 = cljs.core.nth.call(null,inst_21210,0,null);var inst_21212 = cljs.core.nth.call(null,inst_21210,1,null);var inst_21213 = cljs.core.sequential_QMARK_.call(null,inst_21211__$1);var state_21253__$1 = (function (){var statearr_21255 = state_21253;(statearr_21255[7] = inst_21211__$1);
(statearr_21255[8] = inst_21212);
return statearr_21255;
})();if(inst_21213)
{var statearr_21256_21291 = state_21253__$1;(statearr_21256_21291[1] = 8);
} else
{var statearr_21257_21292 = state_21253__$1;(statearr_21257_21292[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 20))
{var inst_21211 = (state_21253[7]);var state_21253__$1 = state_21253;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21253__$1,23,inst_21211);
} else
{if((state_val_21254 === 1))
{var state_21253__$1 = state_21253;var statearr_21258_21293 = state_21253__$1;(statearr_21258_21293[2] = null);
(statearr_21258_21293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 4))
{var state_21253__$1 = state_21253;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21253__$1,7,ocomm);
} else
{if((state_val_21254 === 15))
{var inst_21233 = (state_21253[2]);var state_21253__$1 = state_21253;var statearr_21259_21294 = state_21253__$1;(statearr_21259_21294[2] = inst_21233);
(statearr_21259_21294[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 21))
{var state_21253__$1 = state_21253;var statearr_21260_21295 = state_21253__$1;(statearr_21260_21295[2] = null);
(statearr_21260_21295[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 13))
{var inst_21216 = (state_21253[9]);var state_21253__$1 = state_21253;var statearr_21261_21296 = state_21253__$1;(statearr_21261_21296[2] = inst_21216);
(statearr_21261_21296[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 22))
{var inst_21242 = (state_21253[2]);var state_21253__$1 = state_21253;var statearr_21262_21297 = state_21253__$1;(statearr_21262_21297[2] = inst_21242);
(statearr_21262_21297[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 6))
{var inst_21249 = (state_21253[2]);var state_21253__$1 = state_21253;var statearr_21263_21298 = state_21253__$1;(statearr_21263_21298[2] = inst_21249);
(statearr_21263_21298[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 17))
{var state_21253__$1 = state_21253;var statearr_21264_21299 = state_21253__$1;(statearr_21264_21299[2] = null);
(statearr_21264_21299[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 3))
{var inst_21251 = (state_21253[2]);var state_21253__$1 = state_21253;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21253__$1,inst_21251);
} else
{if((state_val_21254 === 12))
{var inst_21235 = (state_21253[2]);var state_21253__$1 = state_21253;var statearr_21265_21300 = state_21253__$1;(statearr_21265_21300[2] = inst_21235);
(statearr_21265_21300[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 2))
{var state_21253__$1 = state_21253;if(true)
{var statearr_21266_21301 = state_21253__$1;(statearr_21266_21301[1] = 4);
} else
{var statearr_21267_21302 = state_21253__$1;(statearr_21267_21302[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 23))
{var inst_21239 = (state_21253[2]);var state_21253__$1 = state_21253;var statearr_21268_21303 = state_21253__$1;(statearr_21268_21303[2] = inst_21239);
(statearr_21268_21303[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 19))
{var inst_21226 = (state_21253[2]);var state_21253__$1 = state_21253;var statearr_21269_21304 = state_21253__$1;(statearr_21269_21304[2] = inst_21226);
(statearr_21269_21304[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 11))
{var inst_21215 = (state_21253[10]);var inst_21218 = cljs.core.empty_QMARK_.call(null,inst_21215);var state_21253__$1 = state_21253;if(inst_21218)
{var statearr_21270_21305 = state_21253__$1;(statearr_21270_21305[1] = 13);
} else
{var statearr_21271_21306 = state_21253__$1;(statearr_21271_21306[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 9))
{var inst_21211 = (state_21253[7]);var state_21253__$1 = state_21253;if(cljs.core.truth_(inst_21211))
{var statearr_21272_21307 = state_21253__$1;(statearr_21272_21307[1] = 20);
} else
{var statearr_21273_21308 = state_21253__$1;(statearr_21273_21308[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 5))
{var state_21253__$1 = state_21253;var statearr_21274_21309 = state_21253__$1;(statearr_21274_21309[2] = null);
(statearr_21274_21309[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 14))
{var inst_21215 = (state_21253[10]);var inst_21221 = cljs.core.rest.call(null,inst_21215);var inst_21222 = cljs.core.first.call(null,inst_21215);var state_21253__$1 = (function (){var statearr_21275 = state_21253;(statearr_21275[11] = inst_21221);
return statearr_21275;
})();if(cljs.core.truth_(inst_21222))
{var statearr_21276_21310 = state_21253__$1;(statearr_21276_21310[1] = 16);
} else
{var statearr_21277_21311 = state_21253__$1;(statearr_21277_21311[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 16))
{var inst_21215 = (state_21253[10]);var inst_21224 = cljs.core.first.call(null,inst_21215);var state_21253__$1 = state_21253;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21253__$1,19,inst_21224);
} else
{if((state_val_21254 === 10))
{var inst_21212 = (state_21253[8]);var inst_21244 = (state_21253[2]);var inst_21245 = cljs.core.apply.call(null,handler,inst_21244,inst_21212);var state_21253__$1 = (function (){var statearr_21278 = state_21253;(statearr_21278[12] = inst_21245);
return statearr_21278;
})();var statearr_21279_21312 = state_21253__$1;(statearr_21279_21312[2] = null);
(statearr_21279_21312[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 18))
{var inst_21216 = (state_21253[9]);var inst_21221 = (state_21253[11]);var inst_21229 = (state_21253[2]);var inst_21230 = cljs.core.conj.call(null,inst_21216,inst_21229);var inst_21215 = inst_21221;var inst_21216__$1 = inst_21230;var state_21253__$1 = (function (){var statearr_21280 = state_21253;(statearr_21280[9] = inst_21216__$1);
(statearr_21280[10] = inst_21215);
return statearr_21280;
})();var statearr_21281_21313 = state_21253__$1;(statearr_21281_21313[2] = null);
(statearr_21281_21313[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21254 === 8))
{var inst_21211 = (state_21253[7]);var inst_21215 = inst_21211;var inst_21216 = cljs.core.PersistentVector.EMPTY;var state_21253__$1 = (function (){var statearr_21282 = state_21253;(statearr_21282[9] = inst_21216);
(statearr_21282[10] = inst_21215);
return statearr_21282;
})();var statearr_21283_21314 = state_21253__$1;(statearr_21283_21314[2] = null);
(statearr_21283_21314[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_21287 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21287[0] = state_machine__5675__auto__);
(statearr_21287[1] = 1);
return statearr_21287;
});
var state_machine__5675__auto____1 = (function (state_21253){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_21253);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e21288){if((e21288 instanceof Object))
{var ex__5678__auto__ = e21288;var statearr_21289_21315 = state_21253;(statearr_21289_21315[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21253);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21316 = state_21253;
state_21253 = G__21316;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_21253){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_21253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_21290 = f__5690__auto__.call(null);(statearr_21290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_21290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__21319__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__21318 = rseq;var rcomm = cljs.core.nth.call(null,vec__21318,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__21318,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__21319 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21319__delegate.call(this,req_args);};
G__21319.cljs$lang$maxFixedArity = 0;
G__21319.cljs$lang$applyTo = (function (arglist__21320){
var req_args = cljs.core.seq(arglist__21320);
return G__21319__delegate(req_args);
});
G__21319.cljs$core$IFn$_invoke$arity$variadic = G__21319__delegate;
return G__21319;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__,ch){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__,ch){
return (function (state_21338){var state_val_21339 = (state_21338[1]);if((state_val_21339 === 2))
{var inst_21335 = (state_21338[2]);var inst_21336 = console.log(inst_21335);var state_21338__$1 = state_21338;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21338__$1,inst_21336);
} else
{if((state_val_21339 === 1))
{var state_21338__$1 = state_21338;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21338__$1,2,ch);
} else
{return null;
}
}
});})(c__5689__auto__,ch))
;return ((function (switch__5674__auto__,c__5689__auto__,ch){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_21343 = [null,null,null,null,null,null,null];(statearr_21343[0] = state_machine__5675__auto__);
(statearr_21343[1] = 1);
return statearr_21343;
});
var state_machine__5675__auto____1 = (function (state_21338){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_21338);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e21344){if((e21344 instanceof Object))
{var ex__5678__auto__ = e21344;var statearr_21345_21347 = state_21338;(statearr_21345_21347[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21338);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21344;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21348 = state_21338;
state_21338 = G__21348;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_21338){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_21338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__,ch))
})();var state__5691__auto__ = (function (){var statearr_21346 = f__5690__auto__.call(null);(statearr_21346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_21346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__,ch))
);
return c__5689__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__21349){
var f = cljs.core.first(arglist__21349);
var args = cljs.core.rest(arglist__21349);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__21352){var vec__21353 = p__21352;var k = cljs.core.nth.call(null,vec__21353,0,null);var v = cljs.core.nth.call(null,vec__21353,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
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
boundarylines.cljs$lang$applyTo = (function (arglist__21354){
var id = cljs.core.first(arglist__21354);
arglist__21354 = cljs.core.next(arglist__21354);
var tolerance = cljs.core.first(arglist__21354);
var opts = cljs.core.rest(arglist__21354);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__21355){
var id = cljs.core.first(arglist__21355);
var opts = cljs.core.rest(arglist__21355);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > 0))
{return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/constituencies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__21356){var vec__21358 = p__21356;var type_ids = cljs.core.nth.call(null,vec__21358,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__21356 = null;if (arguments.length > 0) {
  p__21356 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__21356);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__21359){
var p__21356 = cljs.core.seq(arglist__21359);
return portfolio_company_sites__delegate(p__21356);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__21360){var vec__21362 = p__21360;var type_ids = cljs.core.nth.call(null,vec__21362,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__21360 = null;if (arguments.length > 0) {
  p__21360 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__21360);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__21363){
var p__21360 = cljs.core.seq(arglist__21363);
return portfolio_company_sites_by_company__delegate(p__21360);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__21364){var vec__21366 = p__21364;var type_ids = cljs.core.nth.call(null,vec__21366,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__21364 = null;if (arguments.length > 0) {
  p__21364 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__21364);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__21367){
var p__21364 = cljs.core.seq(arglist__21367);
return portfolio_company_locations__delegate(p__21364);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__21368){var vec__21370 = p__21368;var type_ids = cljs.core.nth.call(null,vec__21370,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__21368 = null;if (arguments.length > 0) {
  p__21368 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__21368);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__21371){
var p__21368 = cljs.core.seq(arglist__21371);
return portfolio_company_site_stats__delegate(p__21368);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__21372){var vec__21374 = p__21372;var type_ids = cljs.core.nth.call(null,vec__21374,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__21372 = null;if (arguments.length > 0) {
  p__21372 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__21372);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__21375){
var p__21372 = cljs.core.seq(arglist__21375);
return portfolio_company_site_account_timelines__delegate(p__21372);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investor-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__21376){var vec__21378 = p__21376;var type_ids = cljs.core.nth.call(null,vec__21378,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__21376 = null;if (arguments.length > 0) {
  p__21376 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__21376);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__21379){
var p__21376 = cljs.core.seq(arglist__21379);
return investment_account_timelines__delegate(p__21376);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__21380){var vec__21382 = p__21380;var type_ids = cljs.core.nth.call(null,vec__21382,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__21380 = null;if (arguments.length > 0) {
  p__21380 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__21380);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__21383){
var p__21380 = cljs.core.seq(arglist__21383);
return investment_stats__delegate(p__21380);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__21384){var vec__21386 = p__21384;var type_ids = cljs.core.nth.call(null,vec__21386,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__21384 = null;if (arguments.length > 0) {
  p__21384 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__21384);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__21387){
var p__21384 = cljs.core.seq(arglist__21387);
return investment_aggs__delegate(p__21384);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__21388){var vec__21390 = p__21388;var type_ids = cljs.core.nth.call(null,vec__21390,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__21388 = null;if (arguments.length > 0) {
  p__21388 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__21388);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__21391){
var p__21388 = cljs.core.seq(arglist__21391);
return investments__delegate(p__21388);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map