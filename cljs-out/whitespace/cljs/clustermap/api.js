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
var GET__delegate = function (url,p__30874){var map__30876 = p__30874;var map__30876__$1 = ((cljs.core.seq_QMARK_.call(null,map__30876))?cljs.core.apply.call(null,cljs.core.hash_map,map__30876):map__30876);var raw = cljs.core.get.call(null,map__30876__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__30874 = null;if (arguments.length > 1) {
  p__30874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__30874);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__30877){
var url = cljs.core.first(arglist__30877);
var p__30874 = cljs.core.rest(arglist__30877);
return GET__delegate(url,p__30874);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31010){var state_val_31011 = (state_31010[1]);if((state_val_31011 === 1))
{var state_31010__$1 = state_31010;var statearr_31012_31048 = state_31010__$1;(statearr_31012_31048[2] = null);
(statearr_31012_31048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 2))
{var state_31010__$1 = state_31010;if(true)
{var statearr_31013_31049 = state_31010__$1;(statearr_31013_31049[1] = 4);
} else
{var statearr_31014_31050 = state_31010__$1;(statearr_31014_31050[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 3))
{var inst_31008 = (state_31010[2]);var state_31010__$1 = state_31010;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31010__$1,inst_31008);
} else
{if((state_val_31011 === 4))
{var state_31010__$1 = state_31010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31010__$1,7,ocomm);
} else
{if((state_val_31011 === 5))
{var state_31010__$1 = state_31010;var statearr_31015_31051 = state_31010__$1;(statearr_31015_31051[2] = null);
(statearr_31015_31051[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 6))
{var inst_31006 = (state_31010[2]);var state_31010__$1 = state_31010;var statearr_31016_31052 = state_31010__$1;(statearr_31016_31052[2] = inst_31006);
(statearr_31016_31052[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 7))
{var inst_30968 = (state_31010[7]);var inst_30967 = (state_31010[2]);var inst_30968__$1 = cljs.core.nth.call(null,inst_30967,0,null);var inst_30969 = cljs.core.nth.call(null,inst_30967,1,null);var inst_30970 = cljs.core.sequential_QMARK_.call(null,inst_30968__$1);var state_31010__$1 = (function (){var statearr_31017 = state_31010;(statearr_31017[8] = inst_30969);
(statearr_31017[7] = inst_30968__$1);
return statearr_31017;
})();if(inst_30970)
{var statearr_31018_31053 = state_31010__$1;(statearr_31018_31053[1] = 8);
} else
{var statearr_31019_31054 = state_31010__$1;(statearr_31019_31054[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 8))
{var inst_30968 = (state_31010[7]);var inst_30972 = inst_30968;var inst_30973 = cljs.core.PersistentVector.EMPTY;var state_31010__$1 = (function (){var statearr_31020 = state_31010;(statearr_31020[9] = inst_30972);
(statearr_31020[10] = inst_30973);
return statearr_31020;
})();var statearr_31021_31055 = state_31010__$1;(statearr_31021_31055[2] = null);
(statearr_31021_31055[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 9))
{var inst_30968 = (state_31010[7]);var state_31010__$1 = state_31010;if(cljs.core.truth_(inst_30968))
{var statearr_31022_31056 = state_31010__$1;(statearr_31022_31056[1] = 20);
} else
{var statearr_31023_31057 = state_31010__$1;(statearr_31023_31057[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 10))
{var inst_30969 = (state_31010[8]);var inst_31001 = (state_31010[2]);var inst_31002 = cljs.core.apply.call(null,handler,inst_31001,inst_30969);var state_31010__$1 = (function (){var statearr_31024 = state_31010;(statearr_31024[11] = inst_31002);
return statearr_31024;
})();var statearr_31025_31058 = state_31010__$1;(statearr_31025_31058[2] = null);
(statearr_31025_31058[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 11))
{var inst_30972 = (state_31010[9]);var inst_30975 = cljs.core.empty_QMARK_.call(null,inst_30972);var state_31010__$1 = state_31010;if(inst_30975)
{var statearr_31026_31059 = state_31010__$1;(statearr_31026_31059[1] = 13);
} else
{var statearr_31027_31060 = state_31010__$1;(statearr_31027_31060[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 12))
{var inst_30992 = (state_31010[2]);var state_31010__$1 = state_31010;var statearr_31028_31061 = state_31010__$1;(statearr_31028_31061[2] = inst_30992);
(statearr_31028_31061[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 13))
{var inst_30973 = (state_31010[10]);var state_31010__$1 = state_31010;var statearr_31029_31062 = state_31010__$1;(statearr_31029_31062[2] = inst_30973);
(statearr_31029_31062[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 14))
{var inst_30972 = (state_31010[9]);var inst_30978 = cljs.core.rest.call(null,inst_30972);var inst_30979 = cljs.core.first.call(null,inst_30972);var state_31010__$1 = (function (){var statearr_31030 = state_31010;(statearr_31030[12] = inst_30978);
return statearr_31030;
})();if(cljs.core.truth_(inst_30979))
{var statearr_31031_31063 = state_31010__$1;(statearr_31031_31063[1] = 16);
} else
{var statearr_31032_31064 = state_31010__$1;(statearr_31032_31064[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 15))
{var inst_30990 = (state_31010[2]);var state_31010__$1 = state_31010;var statearr_31033_31065 = state_31010__$1;(statearr_31033_31065[2] = inst_30990);
(statearr_31033_31065[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 16))
{var inst_30972 = (state_31010[9]);var inst_30981 = cljs.core.first.call(null,inst_30972);var state_31010__$1 = state_31010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31010__$1,19,inst_30981);
} else
{if((state_val_31011 === 17))
{var state_31010__$1 = state_31010;var statearr_31034_31066 = state_31010__$1;(statearr_31034_31066[2] = null);
(statearr_31034_31066[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 18))
{var inst_30978 = (state_31010[12]);var inst_30973 = (state_31010[10]);var inst_30986 = (state_31010[2]);var inst_30987 = cljs.core.conj.call(null,inst_30973,inst_30986);var inst_30972 = inst_30978;var inst_30973__$1 = inst_30987;var state_31010__$1 = (function (){var statearr_31035 = state_31010;(statearr_31035[9] = inst_30972);
(statearr_31035[10] = inst_30973__$1);
return statearr_31035;
})();var statearr_31036_31067 = state_31010__$1;(statearr_31036_31067[2] = null);
(statearr_31036_31067[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 19))
{var inst_30983 = (state_31010[2]);var state_31010__$1 = state_31010;var statearr_31037_31068 = state_31010__$1;(statearr_31037_31068[2] = inst_30983);
(statearr_31037_31068[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 20))
{var inst_30968 = (state_31010[7]);var state_31010__$1 = state_31010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31010__$1,23,inst_30968);
} else
{if((state_val_31011 === 21))
{var state_31010__$1 = state_31010;var statearr_31038_31069 = state_31010__$1;(statearr_31038_31069[2] = null);
(statearr_31038_31069[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 22))
{var inst_30999 = (state_31010[2]);var state_31010__$1 = state_31010;var statearr_31039_31070 = state_31010__$1;(statearr_31039_31070[2] = inst_30999);
(statearr_31039_31070[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31011 === 23))
{var inst_30996 = (state_31010[2]);var state_31010__$1 = state_31010;var statearr_31040_31071 = state_31010__$1;(statearr_31040_31071[2] = inst_30996);
(statearr_31040_31071[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_31044 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31044[0] = state_machine__5507__auto__);
(statearr_31044[1] = 1);
return statearr_31044;
});
var state_machine__5507__auto____1 = (function (state_31010){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31010);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31045){if((e31045 instanceof Object))
{var ex__5510__auto__ = e31045;var statearr_31046_31072 = state_31010;(statearr_31046_31072[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31010);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31073 = state_31010;
state_31010 = G__31073;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31010){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31047 = f__5522__auto__.call(null);(statearr_31047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31047;
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
var G__31076__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__31075 = rseq;var rcomm = cljs.core.nth.call(null,vec__31075,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__31075,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__31076 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31076__delegate.call(this,req_args);};
G__31076.cljs$lang$maxFixedArity = 0;
G__31076.cljs$lang$applyTo = (function (arglist__31077){
var req_args = cljs.core.seq(arglist__31077);
return G__31076__delegate(req_args);
});
G__31076.cljs$core$IFn$_invoke$arity$variadic = G__31076__delegate;
return G__31076;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31095){var state_val_31096 = (state_31095[1]);if((state_val_31096 === 2))
{var inst_31092 = (state_31095[2]);var inst_31093 = console.log(inst_31092);var state_31095__$1 = state_31095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31095__$1,inst_31093);
} else
{if((state_val_31096 === 1))
{var state_31095__$1 = state_31095;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31095__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_31100 = [null,null,null,null,null,null,null];(statearr_31100[0] = state_machine__5507__auto__);
(statearr_31100[1] = 1);
return statearr_31100;
});
var state_machine__5507__auto____1 = (function (state_31095){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31095);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31101){if((e31101 instanceof Object))
{var ex__5510__auto__ = e31101;var statearr_31102_31104 = state_31095;(statearr_31102_31104[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31095);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31105 = state_31095;
state_31095 = G__31105;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31095){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31103 = f__5522__auto__.call(null);(statearr_31103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__31106){
var f = cljs.core.first(arglist__31106);
var args = cljs.core.rest(arglist__31106);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__31109){var vec__31110 = p__31109;var k = cljs.core.nth.call(null,vec__31110,0,null);var v = cljs.core.nth.call(null,vec__31110,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__31111){
var id = cljs.core.first(arglist__31111);
arglist__31111 = cljs.core.next(arglist__31111);
var tolerance = cljs.core.first(arglist__31111);
var opts = cljs.core.rest(arglist__31111);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__31112){
var id = cljs.core.first(arglist__31112);
var opts = cljs.core.rest(arglist__31112);
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
var constituencies__delegate = function (p__31113){var vec__31115 = p__31113;var type_ids = cljs.core.nth.call(null,vec__31115,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__31113 = null;if (arguments.length > 0) {
  p__31113 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__31113);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__31116){
var p__31113 = cljs.core.seq(arglist__31116);
return constituencies__delegate(p__31113);
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
var portfolio_companies__delegate = function (p__31117){var vec__31119 = p__31117;var type_ids = cljs.core.nth.call(null,vec__31119,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null));return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_companies = function (var_args){
var p__31117 = null;if (arguments.length > 0) {
  p__31117 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__31117);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__31120){
var p__31117 = cljs.core.seq(arglist__31120);
return portfolio_companies__delegate(p__31117);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__31121){var vec__31123 = p__31121;var type_ids = cljs.core.nth.call(null,vec__31123,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__31121 = null;if (arguments.length > 0) {
  p__31121 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__31121);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__31124){
var p__31121 = cljs.core.seq(arglist__31124);
return portfolio_company_stats__delegate(p__31121);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__31125){var vec__31127 = p__31125;var type_ids = cljs.core.nth.call(null,vec__31127,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__31125 = null;if (arguments.length > 0) {
  p__31125 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__31125);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__31128){
var p__31125 = cljs.core.seq(arglist__31128);
return portfolio_company_account_stats__delegate(p__31125);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__31129){var vec__31131 = p__31129;var type_ids = cljs.core.nth.call(null,vec__31131,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__31129 = null;if (arguments.length > 0) {
  p__31129 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__31129);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__31132){
var p__31129 = cljs.core.seq(arglist__31132);
return portfolio_company_sites__delegate(p__31129);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__31133){var vec__31135 = p__31133;var type_ids = cljs.core.nth.call(null,vec__31135,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__31133 = null;if (arguments.length > 0) {
  p__31133 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__31133);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__31136){
var p__31133 = cljs.core.seq(arglist__31136);
return portfolio_company_locations__delegate(p__31133);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__31137){var vec__31139 = p__31137;var type_ids = cljs.core.nth.call(null,vec__31139,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__31137 = null;if (arguments.length > 0) {
  p__31137 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__31137);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__31140){
var p__31137 = cljs.core.seq(arglist__31140);
return portfolio_company_site_stats__delegate(p__31137);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__31141){var vec__31143 = p__31141;var type_ids = cljs.core.nth.call(null,vec__31143,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__31141 = null;if (arguments.length > 0) {
  p__31141 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__31141);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__31144){
var p__31141 = cljs.core.seq(arglist__31144);
return portfolio_company_site_account_timelines__delegate(p__31141);
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
var investor_comapnies__delegate = function (p__31145){var vec__31147 = p__31145;var type_ids = cljs.core.nth.call(null,vec__31147,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__31145 = null;if (arguments.length > 0) {
  p__31145 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__31145);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__31148){
var p__31145 = cljs.core.seq(arglist__31148);
return investor_comapnies__delegate(p__31145);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
