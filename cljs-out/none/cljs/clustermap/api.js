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
var GET__delegate = function (url,p__21109){var map__21111 = p__21109;var map__21111__$1 = ((cljs.core.seq_QMARK_.call(null,map__21111))?cljs.core.apply.call(null,cljs.core.hash_map,map__21111):map__21111);var raw = cljs.core.get.call(null,map__21111__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,((function (comm,map__21111,map__21111__$1,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__21111,map__21111__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}
});})(comm,map__21111,map__21111__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__21111,map__21111__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__21109 = null;if (arguments.length > 1) {
  p__21109 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__21109);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__21112){
var url = cljs.core.first(arglist__21112);
var p__21109 = cljs.core.rest(arglist__21112);
return GET__delegate(url,p__21109);
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
return (function (state_21245){var state_val_21246 = (state_21245[1]);if((state_val_21246 === 7))
{var inst_21203 = (state_21245[7]);var inst_21202 = (state_21245[2]);var inst_21203__$1 = cljs.core.nth.call(null,inst_21202,0,null);var inst_21204 = cljs.core.nth.call(null,inst_21202,1,null);var inst_21205 = cljs.core.sequential_QMARK_.call(null,inst_21203__$1);var state_21245__$1 = (function (){var statearr_21247 = state_21245;(statearr_21247[7] = inst_21203__$1);
(statearr_21247[8] = inst_21204);
return statearr_21247;
})();if(inst_21205)
{var statearr_21248_21283 = state_21245__$1;(statearr_21248_21283[1] = 8);
} else
{var statearr_21249_21284 = state_21245__$1;(statearr_21249_21284[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 20))
{var inst_21203 = (state_21245[7]);var state_21245__$1 = state_21245;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21245__$1,23,inst_21203);
} else
{if((state_val_21246 === 1))
{var state_21245__$1 = state_21245;var statearr_21250_21285 = state_21245__$1;(statearr_21250_21285[2] = null);
(statearr_21250_21285[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 4))
{var state_21245__$1 = state_21245;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21245__$1,7,ocomm);
} else
{if((state_val_21246 === 15))
{var inst_21225 = (state_21245[2]);var state_21245__$1 = state_21245;var statearr_21251_21286 = state_21245__$1;(statearr_21251_21286[2] = inst_21225);
(statearr_21251_21286[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 21))
{var state_21245__$1 = state_21245;var statearr_21252_21287 = state_21245__$1;(statearr_21252_21287[2] = null);
(statearr_21252_21287[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 13))
{var inst_21208 = (state_21245[9]);var state_21245__$1 = state_21245;var statearr_21253_21288 = state_21245__$1;(statearr_21253_21288[2] = inst_21208);
(statearr_21253_21288[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 22))
{var inst_21234 = (state_21245[2]);var state_21245__$1 = state_21245;var statearr_21254_21289 = state_21245__$1;(statearr_21254_21289[2] = inst_21234);
(statearr_21254_21289[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 6))
{var inst_21241 = (state_21245[2]);var state_21245__$1 = state_21245;var statearr_21255_21290 = state_21245__$1;(statearr_21255_21290[2] = inst_21241);
(statearr_21255_21290[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 17))
{var state_21245__$1 = state_21245;var statearr_21256_21291 = state_21245__$1;(statearr_21256_21291[2] = null);
(statearr_21256_21291[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 3))
{var inst_21243 = (state_21245[2]);var state_21245__$1 = state_21245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21245__$1,inst_21243);
} else
{if((state_val_21246 === 12))
{var inst_21227 = (state_21245[2]);var state_21245__$1 = state_21245;var statearr_21257_21292 = state_21245__$1;(statearr_21257_21292[2] = inst_21227);
(statearr_21257_21292[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 2))
{var state_21245__$1 = state_21245;if(true)
{var statearr_21258_21293 = state_21245__$1;(statearr_21258_21293[1] = 4);
} else
{var statearr_21259_21294 = state_21245__$1;(statearr_21259_21294[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 23))
{var inst_21231 = (state_21245[2]);var state_21245__$1 = state_21245;var statearr_21260_21295 = state_21245__$1;(statearr_21260_21295[2] = inst_21231);
(statearr_21260_21295[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 19))
{var inst_21218 = (state_21245[2]);var state_21245__$1 = state_21245;var statearr_21261_21296 = state_21245__$1;(statearr_21261_21296[2] = inst_21218);
(statearr_21261_21296[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 11))
{var inst_21207 = (state_21245[10]);var inst_21210 = cljs.core.empty_QMARK_.call(null,inst_21207);var state_21245__$1 = state_21245;if(inst_21210)
{var statearr_21262_21297 = state_21245__$1;(statearr_21262_21297[1] = 13);
} else
{var statearr_21263_21298 = state_21245__$1;(statearr_21263_21298[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 9))
{var inst_21203 = (state_21245[7]);var state_21245__$1 = state_21245;if(cljs.core.truth_(inst_21203))
{var statearr_21264_21299 = state_21245__$1;(statearr_21264_21299[1] = 20);
} else
{var statearr_21265_21300 = state_21245__$1;(statearr_21265_21300[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 5))
{var state_21245__$1 = state_21245;var statearr_21266_21301 = state_21245__$1;(statearr_21266_21301[2] = null);
(statearr_21266_21301[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 14))
{var inst_21207 = (state_21245[10]);var inst_21213 = cljs.core.rest.call(null,inst_21207);var inst_21214 = cljs.core.first.call(null,inst_21207);var state_21245__$1 = (function (){var statearr_21267 = state_21245;(statearr_21267[11] = inst_21213);
return statearr_21267;
})();if(cljs.core.truth_(inst_21214))
{var statearr_21268_21302 = state_21245__$1;(statearr_21268_21302[1] = 16);
} else
{var statearr_21269_21303 = state_21245__$1;(statearr_21269_21303[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 16))
{var inst_21207 = (state_21245[10]);var inst_21216 = cljs.core.first.call(null,inst_21207);var state_21245__$1 = state_21245;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21245__$1,19,inst_21216);
} else
{if((state_val_21246 === 10))
{var inst_21204 = (state_21245[8]);var inst_21236 = (state_21245[2]);var inst_21237 = cljs.core.apply.call(null,handler,inst_21236,inst_21204);var state_21245__$1 = (function (){var statearr_21270 = state_21245;(statearr_21270[12] = inst_21237);
return statearr_21270;
})();var statearr_21271_21304 = state_21245__$1;(statearr_21271_21304[2] = null);
(statearr_21271_21304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 18))
{var inst_21213 = (state_21245[11]);var inst_21208 = (state_21245[9]);var inst_21221 = (state_21245[2]);var inst_21222 = cljs.core.conj.call(null,inst_21208,inst_21221);var inst_21207 = inst_21213;var inst_21208__$1 = inst_21222;var state_21245__$1 = (function (){var statearr_21272 = state_21245;(statearr_21272[10] = inst_21207);
(statearr_21272[9] = inst_21208__$1);
return statearr_21272;
})();var statearr_21273_21305 = state_21245__$1;(statearr_21273_21305[2] = null);
(statearr_21273_21305[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21246 === 8))
{var inst_21203 = (state_21245[7]);var inst_21207 = inst_21203;var inst_21208 = cljs.core.PersistentVector.EMPTY;var state_21245__$1 = (function (){var statearr_21274 = state_21245;(statearr_21274[10] = inst_21207);
(statearr_21274[9] = inst_21208);
return statearr_21274;
})();var statearr_21275_21306 = state_21245__$1;(statearr_21275_21306[2] = null);
(statearr_21275_21306[1] = 11);
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
var state_machine__5675__auto____0 = (function (){var statearr_21279 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21279[0] = state_machine__5675__auto__);
(statearr_21279[1] = 1);
return statearr_21279;
});
var state_machine__5675__auto____1 = (function (state_21245){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_21245);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e21280){if((e21280 instanceof Object))
{var ex__5678__auto__ = e21280;var statearr_21281_21307 = state_21245;(statearr_21281_21307[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21245);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21308 = state_21245;
state_21245 = G__21308;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_21245){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_21245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_21282 = f__5690__auto__.call(null);(statearr_21282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_21282;
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
var G__21311__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__21310 = rseq;var rcomm = cljs.core.nth.call(null,vec__21310,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__21310,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__21311 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21311__delegate.call(this,req_args);};
G__21311.cljs$lang$maxFixedArity = 0;
G__21311.cljs$lang$applyTo = (function (arglist__21312){
var req_args = cljs.core.seq(arglist__21312);
return G__21311__delegate(req_args);
});
G__21311.cljs$core$IFn$_invoke$arity$variadic = G__21311__delegate;
return G__21311;
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
return (function (state_21330){var state_val_21331 = (state_21330[1]);if((state_val_21331 === 2))
{var inst_21327 = (state_21330[2]);var inst_21328 = console.log(inst_21327);var state_21330__$1 = state_21330;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21330__$1,inst_21328);
} else
{if((state_val_21331 === 1))
{var state_21330__$1 = state_21330;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21330__$1,2,ch);
} else
{return null;
}
}
});})(c__5689__auto__,ch))
;return ((function (switch__5674__auto__,c__5689__auto__,ch){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_21335 = [null,null,null,null,null,null,null];(statearr_21335[0] = state_machine__5675__auto__);
(statearr_21335[1] = 1);
return statearr_21335;
});
var state_machine__5675__auto____1 = (function (state_21330){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_21330);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e21336){if((e21336 instanceof Object))
{var ex__5678__auto__ = e21336;var statearr_21337_21339 = state_21330;(statearr_21337_21339[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21330);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21336;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21340 = state_21330;
state_21330 = G__21340;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_21330){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_21330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__,ch))
})();var state__5691__auto__ = (function (){var statearr_21338 = f__5690__auto__.call(null);(statearr_21338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_21338;
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
log_api.cljs$lang$applyTo = (function (arglist__21341){
var f = cljs.core.first(arglist__21341);
var args = cljs.core.rest(arglist__21341);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__21344){var vec__21345 = p__21344;var k = cljs.core.nth.call(null,vec__21345,0,null);var v = cljs.core.nth.call(null,vec__21345,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
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
boundarylines.cljs$lang$applyTo = (function (arglist__21346){
var id = cljs.core.first(arglist__21346);
arglist__21346 = cljs.core.next(arglist__21346);
var tolerance = cljs.core.first(arglist__21346);
var opts = cljs.core.rest(arglist__21346);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__21347){
var id = cljs.core.first(arglist__21347);
var opts = cljs.core.rest(arglist__21347);
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
var portfolio_company_sites__delegate = function (p__21348){var vec__21350 = p__21348;var type_ids = cljs.core.nth.call(null,vec__21350,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__21348 = null;if (arguments.length > 0) {
  p__21348 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__21348);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__21351){
var p__21348 = cljs.core.seq(arglist__21351);
return portfolio_company_sites__delegate(p__21348);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__21352){var vec__21354 = p__21352;var type_ids = cljs.core.nth.call(null,vec__21354,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__21352 = null;if (arguments.length > 0) {
  p__21352 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__21352);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__21355){
var p__21352 = cljs.core.seq(arglist__21355);
return portfolio_company_sites_by_company__delegate(p__21352);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__21356){var vec__21358 = p__21356;var type_ids = cljs.core.nth.call(null,vec__21358,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__21356 = null;if (arguments.length > 0) {
  p__21356 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__21356);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__21359){
var p__21356 = cljs.core.seq(arglist__21359);
return portfolio_company_locations__delegate(p__21356);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__21360){var vec__21362 = p__21360;var type_ids = cljs.core.nth.call(null,vec__21362,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__21360 = null;if (arguments.length > 0) {
  p__21360 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__21360);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__21363){
var p__21360 = cljs.core.seq(arglist__21363);
return portfolio_company_site_stats__delegate(p__21360);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__21364){var vec__21366 = p__21364;var type_ids = cljs.core.nth.call(null,vec__21366,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__21364 = null;if (arguments.length > 0) {
  p__21364 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__21364);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__21367){
var p__21364 = cljs.core.seq(arglist__21367);
return portfolio_company_site_account_timelines__delegate(p__21364);
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
var investment_account_timelines__delegate = function (p__21368){var vec__21370 = p__21368;var type_ids = cljs.core.nth.call(null,vec__21370,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__21368 = null;if (arguments.length > 0) {
  p__21368 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__21368);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__21371){
var p__21368 = cljs.core.seq(arglist__21371);
return investment_account_timelines__delegate(p__21368);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__21372){var vec__21374 = p__21372;var type_ids = cljs.core.nth.call(null,vec__21374,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__21372 = null;if (arguments.length > 0) {
  p__21372 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__21372);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__21375){
var p__21372 = cljs.core.seq(arglist__21375);
return investment_stats__delegate(p__21372);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__21376){var vec__21378 = p__21376;var type_ids = cljs.core.nth.call(null,vec__21378,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__21376 = null;if (arguments.length > 0) {
  p__21376 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__21376);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__21379){
var p__21376 = cljs.core.seq(arglist__21379);
return investment_aggs__delegate(p__21376);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__21380){var vec__21382 = p__21380;var type_ids = cljs.core.nth.call(null,vec__21382,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__21380 = null;if (arguments.length > 0) {
  p__21380 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__21380);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__21383){
var p__21380 = cljs.core.seq(arglist__21383);
return investments__delegate(p__21380);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map