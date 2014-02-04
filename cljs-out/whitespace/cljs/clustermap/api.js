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
var GET__delegate = function (url,p__29887){var map__29889 = p__29887;var map__29889__$1 = ((cljs.core.seq_QMARK_.call(null,map__29889))?cljs.core.apply.call(null,cljs.core.hash_map,map__29889):map__29889);var raw = cljs.core.get.call(null,map__29889__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__29887 = null;if (arguments.length > 1) {
  p__29887 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__29887);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__29890){
var url = cljs.core.first(arglist__29890);
var p__29887 = cljs.core.rest(arglist__29890);
return GET__delegate(url,p__29887);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30023){var state_val_30024 = (state_30023[1]);if((state_val_30024 === 1))
{var state_30023__$1 = state_30023;var statearr_30025_30061 = state_30023__$1;(statearr_30025_30061[2] = null);
(statearr_30025_30061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 2))
{var state_30023__$1 = state_30023;if(true)
{var statearr_30026_30062 = state_30023__$1;(statearr_30026_30062[1] = 4);
} else
{var statearr_30027_30063 = state_30023__$1;(statearr_30027_30063[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 3))
{var inst_30021 = (state_30023[2]);var state_30023__$1 = state_30023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30023__$1,inst_30021);
} else
{if((state_val_30024 === 4))
{var state_30023__$1 = state_30023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30023__$1,7,ocomm);
} else
{if((state_val_30024 === 5))
{var state_30023__$1 = state_30023;var statearr_30028_30064 = state_30023__$1;(statearr_30028_30064[2] = null);
(statearr_30028_30064[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 6))
{var inst_30019 = (state_30023[2]);var state_30023__$1 = state_30023;var statearr_30029_30065 = state_30023__$1;(statearr_30029_30065[2] = inst_30019);
(statearr_30029_30065[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 7))
{var inst_29981 = (state_30023[7]);var inst_29980 = (state_30023[2]);var inst_29981__$1 = cljs.core.nth.call(null,inst_29980,0,null);var inst_29982 = cljs.core.nth.call(null,inst_29980,1,null);var inst_29983 = cljs.core.sequential_QMARK_.call(null,inst_29981__$1);var state_30023__$1 = (function (){var statearr_30030 = state_30023;(statearr_30030[8] = inst_29982);
(statearr_30030[7] = inst_29981__$1);
return statearr_30030;
})();if(inst_29983)
{var statearr_30031_30066 = state_30023__$1;(statearr_30031_30066[1] = 8);
} else
{var statearr_30032_30067 = state_30023__$1;(statearr_30032_30067[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 8))
{var inst_29981 = (state_30023[7]);var inst_29985 = inst_29981;var inst_29986 = cljs.core.PersistentVector.EMPTY;var state_30023__$1 = (function (){var statearr_30033 = state_30023;(statearr_30033[9] = inst_29985);
(statearr_30033[10] = inst_29986);
return statearr_30033;
})();var statearr_30034_30068 = state_30023__$1;(statearr_30034_30068[2] = null);
(statearr_30034_30068[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 9))
{var inst_29981 = (state_30023[7]);var state_30023__$1 = state_30023;if(cljs.core.truth_(inst_29981))
{var statearr_30035_30069 = state_30023__$1;(statearr_30035_30069[1] = 20);
} else
{var statearr_30036_30070 = state_30023__$1;(statearr_30036_30070[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 10))
{var inst_29982 = (state_30023[8]);var inst_30014 = (state_30023[2]);var inst_30015 = cljs.core.apply.call(null,handler,inst_30014,inst_29982);var state_30023__$1 = (function (){var statearr_30037 = state_30023;(statearr_30037[11] = inst_30015);
return statearr_30037;
})();var statearr_30038_30071 = state_30023__$1;(statearr_30038_30071[2] = null);
(statearr_30038_30071[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 11))
{var inst_29985 = (state_30023[9]);var inst_29988 = cljs.core.empty_QMARK_.call(null,inst_29985);var state_30023__$1 = state_30023;if(inst_29988)
{var statearr_30039_30072 = state_30023__$1;(statearr_30039_30072[1] = 13);
} else
{var statearr_30040_30073 = state_30023__$1;(statearr_30040_30073[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 12))
{var inst_30005 = (state_30023[2]);var state_30023__$1 = state_30023;var statearr_30041_30074 = state_30023__$1;(statearr_30041_30074[2] = inst_30005);
(statearr_30041_30074[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 13))
{var inst_29986 = (state_30023[10]);var state_30023__$1 = state_30023;var statearr_30042_30075 = state_30023__$1;(statearr_30042_30075[2] = inst_29986);
(statearr_30042_30075[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 14))
{var inst_29985 = (state_30023[9]);var inst_29991 = cljs.core.rest.call(null,inst_29985);var inst_29992 = cljs.core.first.call(null,inst_29985);var state_30023__$1 = (function (){var statearr_30043 = state_30023;(statearr_30043[12] = inst_29991);
return statearr_30043;
})();if(cljs.core.truth_(inst_29992))
{var statearr_30044_30076 = state_30023__$1;(statearr_30044_30076[1] = 16);
} else
{var statearr_30045_30077 = state_30023__$1;(statearr_30045_30077[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 15))
{var inst_30003 = (state_30023[2]);var state_30023__$1 = state_30023;var statearr_30046_30078 = state_30023__$1;(statearr_30046_30078[2] = inst_30003);
(statearr_30046_30078[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 16))
{var inst_29985 = (state_30023[9]);var inst_29994 = cljs.core.first.call(null,inst_29985);var state_30023__$1 = state_30023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30023__$1,19,inst_29994);
} else
{if((state_val_30024 === 17))
{var state_30023__$1 = state_30023;var statearr_30047_30079 = state_30023__$1;(statearr_30047_30079[2] = null);
(statearr_30047_30079[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 18))
{var inst_29986 = (state_30023[10]);var inst_29991 = (state_30023[12]);var inst_29999 = (state_30023[2]);var inst_30000 = cljs.core.conj.call(null,inst_29986,inst_29999);var inst_29985 = inst_29991;var inst_29986__$1 = inst_30000;var state_30023__$1 = (function (){var statearr_30048 = state_30023;(statearr_30048[9] = inst_29985);
(statearr_30048[10] = inst_29986__$1);
return statearr_30048;
})();var statearr_30049_30080 = state_30023__$1;(statearr_30049_30080[2] = null);
(statearr_30049_30080[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 19))
{var inst_29996 = (state_30023[2]);var state_30023__$1 = state_30023;var statearr_30050_30081 = state_30023__$1;(statearr_30050_30081[2] = inst_29996);
(statearr_30050_30081[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 20))
{var inst_29981 = (state_30023[7]);var state_30023__$1 = state_30023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30023__$1,23,inst_29981);
} else
{if((state_val_30024 === 21))
{var state_30023__$1 = state_30023;var statearr_30051_30082 = state_30023__$1;(statearr_30051_30082[2] = null);
(statearr_30051_30082[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 22))
{var inst_30012 = (state_30023[2]);var state_30023__$1 = state_30023;var statearr_30052_30083 = state_30023__$1;(statearr_30052_30083[2] = inst_30012);
(statearr_30052_30083[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30024 === 23))
{var inst_30009 = (state_30023[2]);var state_30023__$1 = state_30023;var statearr_30053_30084 = state_30023__$1;(statearr_30053_30084[2] = inst_30009);
(statearr_30053_30084[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_30057 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30057[0] = state_machine__5507__auto__);
(statearr_30057[1] = 1);
return statearr_30057;
});
var state_machine__5507__auto____1 = (function (state_30023){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30023);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30058){if((e30058 instanceof Object))
{var ex__5510__auto__ = e30058;var statearr_30059_30085 = state_30023;(statearr_30059_30085[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30023);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30058;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30086 = state_30023;
state_30023 = G__30086;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30023){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30060 = f__5522__auto__.call(null);(statearr_30060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30060;
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
var G__30089__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__30088 = rseq;var rcomm = cljs.core.nth.call(null,vec__30088,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__30088,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__30089 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30089__delegate.call(this,req_args);};
G__30089.cljs$lang$maxFixedArity = 0;
G__30089.cljs$lang$applyTo = (function (arglist__30090){
var req_args = cljs.core.seq(arglist__30090);
return G__30089__delegate(req_args);
});
G__30089.cljs$core$IFn$_invoke$arity$variadic = G__30089__delegate;
return G__30089;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30108){var state_val_30109 = (state_30108[1]);if((state_val_30109 === 2))
{var inst_30105 = (state_30108[2]);var inst_30106 = console.log(inst_30105);var state_30108__$1 = state_30108;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30108__$1,inst_30106);
} else
{if((state_val_30109 === 1))
{var state_30108__$1 = state_30108;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30108__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30113 = [null,null,null,null,null,null,null];(statearr_30113[0] = state_machine__5507__auto__);
(statearr_30113[1] = 1);
return statearr_30113;
});
var state_machine__5507__auto____1 = (function (state_30108){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30108);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30114){if((e30114 instanceof Object))
{var ex__5510__auto__ = e30114;var statearr_30115_30117 = state_30108;(statearr_30115_30117[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30108);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30114;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30118 = state_30108;
state_30108 = G__30118;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30108){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30116 = f__5522__auto__.call(null);(statearr_30116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30116;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__30119){
var f = cljs.core.first(arglist__30119);
var args = cljs.core.rest(arglist__30119);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__30122){var vec__30123 = p__30122;var k = cljs.core.nth.call(null,vec__30123,0,null);var v = cljs.core.nth.call(null,vec__30123,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__30124){
var id = cljs.core.first(arglist__30124);
arglist__30124 = cljs.core.next(arglist__30124);
var tolerance = cljs.core.first(arglist__30124);
var opts = cljs.core.rest(arglist__30124);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__30125){
var id = cljs.core.first(arglist__30125);
var opts = cljs.core.rest(arglist__30125);
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
var constituencies__delegate = function (p__30126){var vec__30128 = p__30126;var type_ids = cljs.core.nth.call(null,vec__30128,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__30126 = null;if (arguments.length > 0) {
  p__30126 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__30126);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__30129){
var p__30126 = cljs.core.seq(arglist__30129);
return constituencies__delegate(p__30126);
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
var portfolio_companies__delegate = function (p__30130){var vec__30132 = p__30130;var type_ids = cljs.core.nth.call(null,vec__30132,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__30130 = null;if (arguments.length > 0) {
  p__30130 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__30130);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__30133){
var p__30130 = cljs.core.seq(arglist__30133);
return portfolio_companies__delegate(p__30130);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__30134){var vec__30136 = p__30134;var type_ids = cljs.core.nth.call(null,vec__30136,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__30134 = null;if (arguments.length > 0) {
  p__30134 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__30134);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__30137){
var p__30134 = cljs.core.seq(arglist__30137);
return portfolio_company_stats__delegate(p__30134);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__30138){var vec__30140 = p__30138;var type_ids = cljs.core.nth.call(null,vec__30140,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__30138 = null;if (arguments.length > 0) {
  p__30138 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__30138);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__30141){
var p__30138 = cljs.core.seq(arglist__30141);
return portfolio_company_account_stats__delegate(p__30138);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__30142){var vec__30144 = p__30142;var type_ids = cljs.core.nth.call(null,vec__30144,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__30142 = null;if (arguments.length > 0) {
  p__30142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__30142);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__30145){
var p__30142 = cljs.core.seq(arglist__30145);
return portfolio_company_sites__delegate(p__30142);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__30146){var vec__30148 = p__30146;var type_ids = cljs.core.nth.call(null,vec__30148,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__30146 = null;if (arguments.length > 0) {
  p__30146 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__30146);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__30149){
var p__30146 = cljs.core.seq(arglist__30149);
return portfolio_company_locations__delegate(p__30146);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__30150){var vec__30152 = p__30150;var type_ids = cljs.core.nth.call(null,vec__30152,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__30150 = null;if (arguments.length > 0) {
  p__30150 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__30150);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__30153){
var p__30150 = cljs.core.seq(arglist__30153);
return portfolio_company_site_stats__delegate(p__30150);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__30154){var vec__30156 = p__30154;var type_ids = cljs.core.nth.call(null,vec__30156,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__30154 = null;if (arguments.length > 0) {
  p__30154 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__30154);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__30157){
var p__30154 = cljs.core.seq(arglist__30157);
return portfolio_company_site_account_timelines__delegate(p__30154);
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
var investor_comapnies__delegate = function (p__30158){var vec__30160 = p__30158;var type_ids = cljs.core.nth.call(null,vec__30160,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__30158 = null;if (arguments.length > 0) {
  p__30158 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__30158);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__30161){
var p__30158 = cljs.core.seq(arglist__30161);
return investor_comapnies__delegate(p__30158);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
