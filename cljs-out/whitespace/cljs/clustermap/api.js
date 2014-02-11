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
var GET__delegate = function (url,p__30004){var map__30006 = p__30004;var map__30006__$1 = ((cljs.core.seq_QMARK_.call(null,map__30006))?cljs.core.apply.call(null,cljs.core.hash_map,map__30006):map__30006);var raw = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}
}).call(null,(JSON.parse.call(null,event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__30004 = null;if (arguments.length > 1) {
  p__30004 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__30004);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__30007){
var url = cljs.core.first(arglist__30007);
var p__30004 = cljs.core.rest(arglist__30007);
return GET__delegate(url,p__30004);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30140){var state_val_30141 = (state_30140[1]);if((state_val_30141 === 1))
{var state_30140__$1 = state_30140;var statearr_30142_30178 = state_30140__$1;(statearr_30142_30178[2] = null);
(statearr_30142_30178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 2))
{var state_30140__$1 = state_30140;if(true)
{var statearr_30143_30179 = state_30140__$1;(statearr_30143_30179[1] = 4);
} else
{var statearr_30144_30180 = state_30140__$1;(statearr_30144_30180[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 3))
{var inst_30138 = (state_30140[2]);var state_30140__$1 = state_30140;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30140__$1,inst_30138);
} else
{if((state_val_30141 === 4))
{var state_30140__$1 = state_30140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30140__$1,7,ocomm);
} else
{if((state_val_30141 === 5))
{var state_30140__$1 = state_30140;var statearr_30145_30181 = state_30140__$1;(statearr_30145_30181[2] = null);
(statearr_30145_30181[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 6))
{var inst_30136 = (state_30140[2]);var state_30140__$1 = state_30140;var statearr_30146_30182 = state_30140__$1;(statearr_30146_30182[2] = inst_30136);
(statearr_30146_30182[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 7))
{var inst_30098 = (state_30140[7]);var inst_30097 = (state_30140[2]);var inst_30098__$1 = cljs.core.nth.call(null,inst_30097,0,null);var inst_30099 = cljs.core.nth.call(null,inst_30097,1,null);var inst_30100 = cljs.core.sequential_QMARK_.call(null,inst_30098__$1);var state_30140__$1 = (function (){var statearr_30147 = state_30140;(statearr_30147[8] = inst_30099);
(statearr_30147[7] = inst_30098__$1);
return statearr_30147;
})();if(inst_30100)
{var statearr_30148_30183 = state_30140__$1;(statearr_30148_30183[1] = 8);
} else
{var statearr_30149_30184 = state_30140__$1;(statearr_30149_30184[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 8))
{var inst_30098 = (state_30140[7]);var inst_30102 = inst_30098;var inst_30103 = cljs.core.PersistentVector.EMPTY;var state_30140__$1 = (function (){var statearr_30150 = state_30140;(statearr_30150[9] = inst_30102);
(statearr_30150[10] = inst_30103);
return statearr_30150;
})();var statearr_30151_30185 = state_30140__$1;(statearr_30151_30185[2] = null);
(statearr_30151_30185[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 9))
{var inst_30098 = (state_30140[7]);var state_30140__$1 = state_30140;if(cljs.core.truth_(inst_30098))
{var statearr_30152_30186 = state_30140__$1;(statearr_30152_30186[1] = 20);
} else
{var statearr_30153_30187 = state_30140__$1;(statearr_30153_30187[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 10))
{var inst_30099 = (state_30140[8]);var inst_30131 = (state_30140[2]);var inst_30132 = cljs.core.apply.call(null,handler,inst_30131,inst_30099);var state_30140__$1 = (function (){var statearr_30154 = state_30140;(statearr_30154[11] = inst_30132);
return statearr_30154;
})();var statearr_30155_30188 = state_30140__$1;(statearr_30155_30188[2] = null);
(statearr_30155_30188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 11))
{var inst_30102 = (state_30140[9]);var inst_30105 = cljs.core.empty_QMARK_.call(null,inst_30102);var state_30140__$1 = state_30140;if(inst_30105)
{var statearr_30156_30189 = state_30140__$1;(statearr_30156_30189[1] = 13);
} else
{var statearr_30157_30190 = state_30140__$1;(statearr_30157_30190[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 12))
{var inst_30122 = (state_30140[2]);var state_30140__$1 = state_30140;var statearr_30158_30191 = state_30140__$1;(statearr_30158_30191[2] = inst_30122);
(statearr_30158_30191[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 13))
{var inst_30103 = (state_30140[10]);var state_30140__$1 = state_30140;var statearr_30159_30192 = state_30140__$1;(statearr_30159_30192[2] = inst_30103);
(statearr_30159_30192[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 14))
{var inst_30102 = (state_30140[9]);var inst_30108 = cljs.core.rest.call(null,inst_30102);var inst_30109 = cljs.core.first.call(null,inst_30102);var state_30140__$1 = (function (){var statearr_30160 = state_30140;(statearr_30160[12] = inst_30108);
return statearr_30160;
})();if(cljs.core.truth_(inst_30109))
{var statearr_30161_30193 = state_30140__$1;(statearr_30161_30193[1] = 16);
} else
{var statearr_30162_30194 = state_30140__$1;(statearr_30162_30194[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 15))
{var inst_30120 = (state_30140[2]);var state_30140__$1 = state_30140;var statearr_30163_30195 = state_30140__$1;(statearr_30163_30195[2] = inst_30120);
(statearr_30163_30195[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 16))
{var inst_30102 = (state_30140[9]);var inst_30111 = cljs.core.first.call(null,inst_30102);var state_30140__$1 = state_30140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30140__$1,19,inst_30111);
} else
{if((state_val_30141 === 17))
{var state_30140__$1 = state_30140;var statearr_30164_30196 = state_30140__$1;(statearr_30164_30196[2] = null);
(statearr_30164_30196[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 18))
{var inst_30108 = (state_30140[12]);var inst_30103 = (state_30140[10]);var inst_30116 = (state_30140[2]);var inst_30117 = cljs.core.conj.call(null,inst_30103,inst_30116);var inst_30102 = inst_30108;var inst_30103__$1 = inst_30117;var state_30140__$1 = (function (){var statearr_30165 = state_30140;(statearr_30165[9] = inst_30102);
(statearr_30165[10] = inst_30103__$1);
return statearr_30165;
})();var statearr_30166_30197 = state_30140__$1;(statearr_30166_30197[2] = null);
(statearr_30166_30197[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 19))
{var inst_30113 = (state_30140[2]);var state_30140__$1 = state_30140;var statearr_30167_30198 = state_30140__$1;(statearr_30167_30198[2] = inst_30113);
(statearr_30167_30198[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 20))
{var inst_30098 = (state_30140[7]);var state_30140__$1 = state_30140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30140__$1,23,inst_30098);
} else
{if((state_val_30141 === 21))
{var state_30140__$1 = state_30140;var statearr_30168_30199 = state_30140__$1;(statearr_30168_30199[2] = null);
(statearr_30168_30199[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 22))
{var inst_30129 = (state_30140[2]);var state_30140__$1 = state_30140;var statearr_30169_30200 = state_30140__$1;(statearr_30169_30200[2] = inst_30129);
(statearr_30169_30200[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30141 === 23))
{var inst_30126 = (state_30140[2]);var state_30140__$1 = state_30140;var statearr_30170_30201 = state_30140__$1;(statearr_30170_30201[2] = inst_30126);
(statearr_30170_30201[1] = 22);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30174 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30174[0] = state_machine__5507__auto__);
(statearr_30174[1] = 1);
return statearr_30174;
});
var state_machine__5507__auto____1 = (function (state_30140){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30140);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30175){if((e30175 instanceof Object))
{var ex__5510__auto__ = e30175;var statearr_30176_30202 = state_30140;(statearr_30176_30202[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30140);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30175;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30203 = state_30140;
state_30140 = G__30203;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30140){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30177 = f__5522__auto__.call(null);(statearr_30177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30177;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return (function() { 
var G__30206__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__30205 = rseq;var rcomm = cljs.core.nth.call(null,vec__30205,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__30205,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__30206 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30206__delegate.call(this,req_args);};
G__30206.cljs$lang$maxFixedArity = 0;
G__30206.cljs$lang$applyTo = (function (arglist__30207){
var req_args = cljs.core.seq(arglist__30207);
return G__30206__delegate(req_args);
});
G__30206.cljs$core$IFn$_invoke$arity$variadic = G__30206__delegate;
return G__30206;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30225){var state_val_30226 = (state_30225[1]);if((state_val_30226 === 2))
{var inst_30222 = (state_30225[2]);var inst_30223 = console.log(inst_30222);var state_30225__$1 = state_30225;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30225__$1,inst_30223);
} else
{if((state_val_30226 === 1))
{var state_30225__$1 = state_30225;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30225__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30230 = [null,null,null,null,null,null,null];(statearr_30230[0] = state_machine__5507__auto__);
(statearr_30230[1] = 1);
return statearr_30230;
});
var state_machine__5507__auto____1 = (function (state_30225){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30225);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30231){if((e30231 instanceof Object))
{var ex__5510__auto__ = e30231;var statearr_30232_30234 = state_30225;(statearr_30232_30234[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30225);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30235 = state_30225;
state_30225 = G__30235;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30225){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30233 = f__5522__auto__.call(null);(statearr_30233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__30236){
var f = cljs.core.first(arglist__30236);
var args = cljs.core.rest(arglist__30236);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__30239){var vec__30240 = p__30239;var k = cljs.core.nth.call(null,vec__30240,0,null);var v = cljs.core.nth.call(null,vec__30240,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,[cljs.core.str("/api/boundarylines/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(tolerance)].join(''),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__30241){
var id = cljs.core.first(arglist__30241);
arglist__30241 = cljs.core.next(arglist__30241);
var tolerance = cljs.core.first(arglist__30241);
var opts = cljs.core.rest(arglist__30241);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,[cljs.core.str("/api/boundaryline-collection-index/"),cljs.core.str(id)].join(''),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__30242){
var id = cljs.core.first(arglist__30242);
var opts = cljs.core.rest(arglist__30242);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > 0))
{return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/constituencies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.constituencies = (function() { 
var constituencies__delegate = function (p__30243){var vec__30245 = p__30243;var type_ids = cljs.core.nth.call(null,vec__30245,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__30243 = null;if (arguments.length > 0) {
  p__30243 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__30243);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__30246){
var p__30243 = cljs.core.seq(arglist__30246);
return constituencies__delegate(p__30243);
});
constituencies.cljs$core$IFn$_invoke$arity$variadic = constituencies__delegate;
return constituencies;
})()
;
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_companies = (function() { 
var portfolio_companies__delegate = function (p__30247){var vec__30249 = p__30247;var type_ids = cljs.core.nth.call(null,vec__30249,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__30247 = null;if (arguments.length > 0) {
  p__30247 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__30247);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__30250){
var p__30247 = cljs.core.seq(arglist__30250);
return portfolio_companies__delegate(p__30247);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__30251){var vec__30253 = p__30251;var type_ids = cljs.core.nth.call(null,vec__30253,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__30251 = null;if (arguments.length > 0) {
  p__30251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__30251);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__30254){
var p__30251 = cljs.core.seq(arglist__30254);
return portfolio_company_stats__delegate(p__30251);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__30255){var vec__30257 = p__30255;var type_ids = cljs.core.nth.call(null,vec__30257,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__30255 = null;if (arguments.length > 0) {
  p__30255 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__30255);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__30258){
var p__30255 = cljs.core.seq(arglist__30258);
return portfolio_company_account_stats__delegate(p__30255);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__30259){var vec__30261 = p__30259;var type_ids = cljs.core.nth.call(null,vec__30261,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__30259 = null;if (arguments.length > 0) {
  p__30259 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__30259);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__30262){
var p__30259 = cljs.core.seq(arglist__30262);
return portfolio_company_sites__delegate(p__30259);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__30263){var vec__30265 = p__30263;var type_ids = cljs.core.nth.call(null,vec__30265,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__30263 = null;if (arguments.length > 0) {
  p__30263 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__30263);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__30266){
var p__30263 = cljs.core.seq(arglist__30266);
return portfolio_company_locations__delegate(p__30263);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__30267){var vec__30269 = p__30267;var type_ids = cljs.core.nth.call(null,vec__30269,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__30267 = null;if (arguments.length > 0) {
  p__30267 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__30267);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__30270){
var p__30267 = cljs.core.seq(arglist__30270);
return portfolio_company_site_stats__delegate(p__30267);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__30271){var vec__30273 = p__30271;var type_ids = cljs.core.nth.call(null,vec__30273,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__30271 = null;if (arguments.length > 0) {
  p__30271 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__30271);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__30274){
var p__30271 = cljs.core.seq(arglist__30274);
return portfolio_company_site_account_timelines__delegate(p__30271);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.investor_comapnies = (function() { 
var investor_comapnies__delegate = function (p__30275){var vec__30277 = p__30275;var type_ids = cljs.core.nth.call(null,vec__30277,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__30275 = null;if (arguments.length > 0) {
  p__30275 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__30275);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__30278){
var p__30275 = cljs.core.seq(arglist__30278);
return investor_comapnies__delegate(p__30275);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
