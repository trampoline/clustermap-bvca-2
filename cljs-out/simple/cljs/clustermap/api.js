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
var GET__delegate = function (url,p__21111){var map__21113 = p__21111;var map__21113__$1 = ((cljs.core.seq_QMARK_.call(null,map__21113))?cljs.core.apply.call(null,cljs.core.hash_map,map__21113):map__21113);var raw = cljs.core.get.call(null,map__21113__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,((function (comm,map__21113,map__21113__$1,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__21113,map__21113__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}
});})(comm,map__21113,map__21113__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__21113,map__21113__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__21111 = null;if (arguments.length > 1) {
  p__21111 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__21111);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__21114){
var url = cljs.core.first(arglist__21114);
var p__21111 = cljs.core.rest(arglist__21114);
return GET__delegate(url,p__21111);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_21247){var state_val_21248 = (state_21247[1]);if((state_val_21248 === 7))
{var inst_21205 = (state_21247[7]);var inst_21204 = (state_21247[2]);var inst_21205__$1 = cljs.core.nth.call(null,inst_21204,0,null);var inst_21206 = cljs.core.nth.call(null,inst_21204,1,null);var inst_21207 = cljs.core.sequential_QMARK_.call(null,inst_21205__$1);var state_21247__$1 = (function (){var statearr_21249 = state_21247;(statearr_21249[7] = inst_21205__$1);
(statearr_21249[8] = inst_21206);
return statearr_21249;
})();if(inst_21207)
{var statearr_21250_21285 = state_21247__$1;(statearr_21250_21285[1] = 8);
} else
{var statearr_21251_21286 = state_21247__$1;(statearr_21251_21286[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 20))
{var inst_21205 = (state_21247[7]);var state_21247__$1 = state_21247;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21247__$1,23,inst_21205);
} else
{if((state_val_21248 === 1))
{var state_21247__$1 = state_21247;var statearr_21252_21287 = state_21247__$1;(statearr_21252_21287[2] = null);
(statearr_21252_21287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 4))
{var state_21247__$1 = state_21247;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21247__$1,7,ocomm);
} else
{if((state_val_21248 === 15))
{var inst_21227 = (state_21247[2]);var state_21247__$1 = state_21247;var statearr_21253_21288 = state_21247__$1;(statearr_21253_21288[2] = inst_21227);
(statearr_21253_21288[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 21))
{var state_21247__$1 = state_21247;var statearr_21254_21289 = state_21247__$1;(statearr_21254_21289[2] = null);
(statearr_21254_21289[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 13))
{var inst_21210 = (state_21247[9]);var state_21247__$1 = state_21247;var statearr_21255_21290 = state_21247__$1;(statearr_21255_21290[2] = inst_21210);
(statearr_21255_21290[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 22))
{var inst_21236 = (state_21247[2]);var state_21247__$1 = state_21247;var statearr_21256_21291 = state_21247__$1;(statearr_21256_21291[2] = inst_21236);
(statearr_21256_21291[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 6))
{var inst_21243 = (state_21247[2]);var state_21247__$1 = state_21247;var statearr_21257_21292 = state_21247__$1;(statearr_21257_21292[2] = inst_21243);
(statearr_21257_21292[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 17))
{var state_21247__$1 = state_21247;var statearr_21258_21293 = state_21247__$1;(statearr_21258_21293[2] = null);
(statearr_21258_21293[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 3))
{var inst_21245 = (state_21247[2]);var state_21247__$1 = state_21247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21247__$1,inst_21245);
} else
{if((state_val_21248 === 12))
{var inst_21229 = (state_21247[2]);var state_21247__$1 = state_21247;var statearr_21259_21294 = state_21247__$1;(statearr_21259_21294[2] = inst_21229);
(statearr_21259_21294[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 2))
{var state_21247__$1 = state_21247;if(true)
{var statearr_21260_21295 = state_21247__$1;(statearr_21260_21295[1] = 4);
} else
{var statearr_21261_21296 = state_21247__$1;(statearr_21261_21296[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 23))
{var inst_21233 = (state_21247[2]);var state_21247__$1 = state_21247;var statearr_21262_21297 = state_21247__$1;(statearr_21262_21297[2] = inst_21233);
(statearr_21262_21297[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 19))
{var inst_21220 = (state_21247[2]);var state_21247__$1 = state_21247;var statearr_21263_21298 = state_21247__$1;(statearr_21263_21298[2] = inst_21220);
(statearr_21263_21298[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 11))
{var inst_21209 = (state_21247[10]);var inst_21212 = cljs.core.empty_QMARK_.call(null,inst_21209);var state_21247__$1 = state_21247;if(inst_21212)
{var statearr_21264_21299 = state_21247__$1;(statearr_21264_21299[1] = 13);
} else
{var statearr_21265_21300 = state_21247__$1;(statearr_21265_21300[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 9))
{var inst_21205 = (state_21247[7]);var state_21247__$1 = state_21247;if(cljs.core.truth_(inst_21205))
{var statearr_21266_21301 = state_21247__$1;(statearr_21266_21301[1] = 20);
} else
{var statearr_21267_21302 = state_21247__$1;(statearr_21267_21302[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 5))
{var state_21247__$1 = state_21247;var statearr_21268_21303 = state_21247__$1;(statearr_21268_21303[2] = null);
(statearr_21268_21303[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 14))
{var inst_21209 = (state_21247[10]);var inst_21215 = cljs.core.rest.call(null,inst_21209);var inst_21216 = cljs.core.first.call(null,inst_21209);var state_21247__$1 = (function (){var statearr_21269 = state_21247;(statearr_21269[11] = inst_21215);
return statearr_21269;
})();if(cljs.core.truth_(inst_21216))
{var statearr_21270_21304 = state_21247__$1;(statearr_21270_21304[1] = 16);
} else
{var statearr_21271_21305 = state_21247__$1;(statearr_21271_21305[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 16))
{var inst_21209 = (state_21247[10]);var inst_21218 = cljs.core.first.call(null,inst_21209);var state_21247__$1 = state_21247;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21247__$1,19,inst_21218);
} else
{if((state_val_21248 === 10))
{var inst_21206 = (state_21247[8]);var inst_21238 = (state_21247[2]);var inst_21239 = cljs.core.apply.call(null,handler,inst_21238,inst_21206);var state_21247__$1 = (function (){var statearr_21272 = state_21247;(statearr_21272[12] = inst_21239);
return statearr_21272;
})();var statearr_21273_21306 = state_21247__$1;(statearr_21273_21306[2] = null);
(statearr_21273_21306[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 18))
{var inst_21215 = (state_21247[11]);var inst_21210 = (state_21247[9]);var inst_21223 = (state_21247[2]);var inst_21224 = cljs.core.conj.call(null,inst_21210,inst_21223);var inst_21209 = inst_21215;var inst_21210__$1 = inst_21224;var state_21247__$1 = (function (){var statearr_21274 = state_21247;(statearr_21274[10] = inst_21209);
(statearr_21274[9] = inst_21210__$1);
return statearr_21274;
})();var statearr_21275_21307 = state_21247__$1;(statearr_21275_21307[2] = null);
(statearr_21275_21307[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21248 === 8))
{var inst_21205 = (state_21247[7]);var inst_21209 = inst_21205;var inst_21210 = cljs.core.PersistentVector.EMPTY;var state_21247__$1 = (function (){var statearr_21276 = state_21247;(statearr_21276[10] = inst_21209);
(statearr_21276[9] = inst_21210);
return statearr_21276;
})();var statearr_21277_21308 = state_21247__$1;(statearr_21277_21308[2] = null);
(statearr_21277_21308[1] = 11);
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_21281 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21281[0] = state_machine__5677__auto__);
(statearr_21281[1] = 1);
return statearr_21281;
});
var state_machine__5677__auto____1 = (function (state_21247){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_21247);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e21282){if((e21282 instanceof Object))
{var ex__5680__auto__ = e21282;var statearr_21283_21309 = state_21247;(statearr_21283_21309[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21247);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21310 = state_21247;
state_21247 = G__21310;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_21247){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_21247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_21284 = f__5692__auto__.call(null);(statearr_21284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_21284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
var G__21313__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__21312 = rseq;var rcomm = cljs.core.nth.call(null,vec__21312,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__21312,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__21313 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21313__delegate.call(this,req_args);};
G__21313.cljs$lang$maxFixedArity = 0;
G__21313.cljs$lang$applyTo = (function (arglist__21314){
var req_args = cljs.core.seq(arglist__21314);
return G__21313__delegate(req_args);
});
G__21313.cljs$core$IFn$_invoke$arity$variadic = G__21313__delegate;
return G__21313;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__,ch){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__,ch){
return (function (state_21332){var state_val_21333 = (state_21332[1]);if((state_val_21333 === 2))
{var inst_21329 = (state_21332[2]);var inst_21330 = console.log(inst_21329);var state_21332__$1 = state_21332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21332__$1,inst_21330);
} else
{if((state_val_21333 === 1))
{var state_21332__$1 = state_21332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21332__$1,2,ch);
} else
{return null;
}
}
});})(c__5691__auto__,ch))
;return ((function (switch__5676__auto__,c__5691__auto__,ch){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_21337 = [null,null,null,null,null,null,null];(statearr_21337[0] = state_machine__5677__auto__);
(statearr_21337[1] = 1);
return statearr_21337;
});
var state_machine__5677__auto____1 = (function (state_21332){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_21332);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e21338){if((e21338 instanceof Object))
{var ex__5680__auto__ = e21338;var statearr_21339_21341 = state_21332;(statearr_21339_21341[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21342 = state_21332;
state_21332 = G__21342;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_21332){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_21332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,ch))
})();var state__5693__auto__ = (function (){var statearr_21340 = f__5692__auto__.call(null);(statearr_21340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_21340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__,ch))
);
return c__5691__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__21343){
var f = cljs.core.first(arglist__21343);
var args = cljs.core.rest(arglist__21343);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__21346){var vec__21347 = p__21346;var k = cljs.core.nth.call(null,vec__21347,0,null);var v = cljs.core.nth.call(null,vec__21347,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
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
boundarylines.cljs$lang$applyTo = (function (arglist__21348){
var id = cljs.core.first(arglist__21348);
arglist__21348 = cljs.core.next(arglist__21348);
var tolerance = cljs.core.first(arglist__21348);
var opts = cljs.core.rest(arglist__21348);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__21349){
var id = cljs.core.first(arglist__21349);
var opts = cljs.core.rest(arglist__21349);
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
var portfolio_company_sites__delegate = function (p__21350){var vec__21352 = p__21350;var type_ids = cljs.core.nth.call(null,vec__21352,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__21350 = null;if (arguments.length > 0) {
  p__21350 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__21350);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__21353){
var p__21350 = cljs.core.seq(arglist__21353);
return portfolio_company_sites__delegate(p__21350);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__21354){var vec__21356 = p__21354;var type_ids = cljs.core.nth.call(null,vec__21356,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__21354 = null;if (arguments.length > 0) {
  p__21354 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__21354);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__21357){
var p__21354 = cljs.core.seq(arglist__21357);
return portfolio_company_sites_by_company__delegate(p__21354);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__21358){var vec__21360 = p__21358;var type_ids = cljs.core.nth.call(null,vec__21360,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__21358 = null;if (arguments.length > 0) {
  p__21358 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__21358);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__21361){
var p__21358 = cljs.core.seq(arglist__21361);
return portfolio_company_locations__delegate(p__21358);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__21362){var vec__21364 = p__21362;var type_ids = cljs.core.nth.call(null,vec__21364,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__21362 = null;if (arguments.length > 0) {
  p__21362 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__21362);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__21365){
var p__21362 = cljs.core.seq(arglist__21365);
return portfolio_company_site_stats__delegate(p__21362);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__21366){var vec__21368 = p__21366;var type_ids = cljs.core.nth.call(null,vec__21368,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__21366 = null;if (arguments.length > 0) {
  p__21366 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__21366);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__21369){
var p__21366 = cljs.core.seq(arglist__21369);
return portfolio_company_site_account_timelines__delegate(p__21366);
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
var investment_account_timelines__delegate = function (p__21370){var vec__21372 = p__21370;var type_ids = cljs.core.nth.call(null,vec__21372,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__21370 = null;if (arguments.length > 0) {
  p__21370 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__21370);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__21373){
var p__21370 = cljs.core.seq(arglist__21373);
return investment_account_timelines__delegate(p__21370);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__21374){var vec__21376 = p__21374;var type_ids = cljs.core.nth.call(null,vec__21376,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__21374 = null;if (arguments.length > 0) {
  p__21374 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__21374);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__21377){
var p__21374 = cljs.core.seq(arglist__21377);
return investment_stats__delegate(p__21374);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__21378){var vec__21380 = p__21378;var type_ids = cljs.core.nth.call(null,vec__21380,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__21378 = null;if (arguments.length > 0) {
  p__21378 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__21378);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__21381){
var p__21378 = cljs.core.seq(arglist__21381);
return investment_aggs__delegate(p__21378);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__21382){var vec__21384 = p__21382;var type_ids = cljs.core.nth.call(null,vec__21384,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__21382 = null;if (arguments.length > 0) {
  p__21382 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__21382);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__21385){
var p__21382 = cljs.core.seq(arglist__21385);
return investments__delegate(p__21382);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
