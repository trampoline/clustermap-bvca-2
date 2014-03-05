// Compiled by ClojureScript 0.0-2173
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
var GET__delegate = function (url,p__20778){var map__20780 = p__20778;var map__20780__$1 = ((cljs.core.seq_QMARK_.call(null,map__20780))?cljs.core.apply.call(null,cljs.core.hash_map,map__20780):map__20780);var raw = cljs.core.get.call(null,map__20780__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__20778 = null;if (arguments.length > 1) {
  p__20778 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20778);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20781){
var url = cljs.core.first(arglist__20781);
var p__20778 = cljs.core.rest(arglist__20781);
return GET__delegate(url,p__20778);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_20914){var state_val_20915 = (state_20914[1]);if((state_val_20915 === 1))
{var state_20914__$1 = state_20914;var statearr_20916_20952 = state_20914__$1;(statearr_20916_20952[2] = null);
(statearr_20916_20952[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 2))
{var state_20914__$1 = state_20914;if(true)
{var statearr_20917_20953 = state_20914__$1;(statearr_20917_20953[1] = 4);
} else
{var statearr_20918_20954 = state_20914__$1;(statearr_20918_20954[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 3))
{var inst_20912 = (state_20914[2]);var state_20914__$1 = state_20914;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20914__$1,inst_20912);
} else
{if((state_val_20915 === 4))
{var state_20914__$1 = state_20914;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20914__$1,7,ocomm);
} else
{if((state_val_20915 === 5))
{var state_20914__$1 = state_20914;var statearr_20919_20955 = state_20914__$1;(statearr_20919_20955[2] = null);
(statearr_20919_20955[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 6))
{var inst_20910 = (state_20914[2]);var state_20914__$1 = state_20914;var statearr_20920_20956 = state_20914__$1;(statearr_20920_20956[2] = inst_20910);
(statearr_20920_20956[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 7))
{var inst_20872 = (state_20914[7]);var inst_20871 = (state_20914[2]);var inst_20872__$1 = cljs.core.nth.call(null,inst_20871,0,null);var inst_20873 = cljs.core.nth.call(null,inst_20871,1,null);var inst_20874 = cljs.core.sequential_QMARK_.call(null,inst_20872__$1);var state_20914__$1 = (function (){var statearr_20921 = state_20914;(statearr_20921[7] = inst_20872__$1);
(statearr_20921[8] = inst_20873);
return statearr_20921;
})();if(inst_20874)
{var statearr_20922_20957 = state_20914__$1;(statearr_20922_20957[1] = 8);
} else
{var statearr_20923_20958 = state_20914__$1;(statearr_20923_20958[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 8))
{var inst_20872 = (state_20914[7]);var inst_20876 = inst_20872;var inst_20877 = cljs.core.PersistentVector.EMPTY;var state_20914__$1 = (function (){var statearr_20924 = state_20914;(statearr_20924[9] = inst_20877);
(statearr_20924[10] = inst_20876);
return statearr_20924;
})();var statearr_20925_20959 = state_20914__$1;(statearr_20925_20959[2] = null);
(statearr_20925_20959[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 9))
{var inst_20872 = (state_20914[7]);var state_20914__$1 = state_20914;if(cljs.core.truth_(inst_20872))
{var statearr_20926_20960 = state_20914__$1;(statearr_20926_20960[1] = 20);
} else
{var statearr_20927_20961 = state_20914__$1;(statearr_20927_20961[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 10))
{var inst_20873 = (state_20914[8]);var inst_20905 = (state_20914[2]);var inst_20906 = cljs.core.apply.call(null,handler,inst_20905,inst_20873);var state_20914__$1 = (function (){var statearr_20928 = state_20914;(statearr_20928[11] = inst_20906);
return statearr_20928;
})();var statearr_20929_20962 = state_20914__$1;(statearr_20929_20962[2] = null);
(statearr_20929_20962[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 11))
{var inst_20876 = (state_20914[10]);var inst_20879 = cljs.core.empty_QMARK_.call(null,inst_20876);var state_20914__$1 = state_20914;if(inst_20879)
{var statearr_20930_20963 = state_20914__$1;(statearr_20930_20963[1] = 13);
} else
{var statearr_20931_20964 = state_20914__$1;(statearr_20931_20964[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 12))
{var inst_20896 = (state_20914[2]);var state_20914__$1 = state_20914;var statearr_20932_20965 = state_20914__$1;(statearr_20932_20965[2] = inst_20896);
(statearr_20932_20965[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 13))
{var inst_20877 = (state_20914[9]);var state_20914__$1 = state_20914;var statearr_20933_20966 = state_20914__$1;(statearr_20933_20966[2] = inst_20877);
(statearr_20933_20966[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 14))
{var inst_20876 = (state_20914[10]);var inst_20882 = cljs.core.rest.call(null,inst_20876);var inst_20883 = cljs.core.first.call(null,inst_20876);var state_20914__$1 = (function (){var statearr_20934 = state_20914;(statearr_20934[12] = inst_20882);
return statearr_20934;
})();if(cljs.core.truth_(inst_20883))
{var statearr_20935_20967 = state_20914__$1;(statearr_20935_20967[1] = 16);
} else
{var statearr_20936_20968 = state_20914__$1;(statearr_20936_20968[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 15))
{var inst_20894 = (state_20914[2]);var state_20914__$1 = state_20914;var statearr_20937_20969 = state_20914__$1;(statearr_20937_20969[2] = inst_20894);
(statearr_20937_20969[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 16))
{var inst_20876 = (state_20914[10]);var inst_20885 = cljs.core.first.call(null,inst_20876);var state_20914__$1 = state_20914;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20914__$1,19,inst_20885);
} else
{if((state_val_20915 === 17))
{var state_20914__$1 = state_20914;var statearr_20938_20970 = state_20914__$1;(statearr_20938_20970[2] = null);
(statearr_20938_20970[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 18))
{var inst_20882 = (state_20914[12]);var inst_20877 = (state_20914[9]);var inst_20890 = (state_20914[2]);var inst_20891 = cljs.core.conj.call(null,inst_20877,inst_20890);var inst_20876 = inst_20882;var inst_20877__$1 = inst_20891;var state_20914__$1 = (function (){var statearr_20939 = state_20914;(statearr_20939[9] = inst_20877__$1);
(statearr_20939[10] = inst_20876);
return statearr_20939;
})();var statearr_20940_20971 = state_20914__$1;(statearr_20940_20971[2] = null);
(statearr_20940_20971[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 19))
{var inst_20887 = (state_20914[2]);var state_20914__$1 = state_20914;var statearr_20941_20972 = state_20914__$1;(statearr_20941_20972[2] = inst_20887);
(statearr_20941_20972[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 20))
{var inst_20872 = (state_20914[7]);var state_20914__$1 = state_20914;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20914__$1,23,inst_20872);
} else
{if((state_val_20915 === 21))
{var state_20914__$1 = state_20914;var statearr_20942_20973 = state_20914__$1;(statearr_20942_20973[2] = null);
(statearr_20942_20973[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 22))
{var inst_20903 = (state_20914[2]);var state_20914__$1 = state_20914;var statearr_20943_20974 = state_20914__$1;(statearr_20943_20974[2] = inst_20903);
(statearr_20943_20974[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20915 === 23))
{var inst_20900 = (state_20914[2]);var state_20914__$1 = state_20914;var statearr_20944_20975 = state_20914__$1;(statearr_20944_20975[2] = inst_20900);
(statearr_20944_20975[1] = 22);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_20948 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20948[0] = state_machine__5548__auto__);
(statearr_20948[1] = 1);
return statearr_20948;
});
var state_machine__5548__auto____1 = (function (state_20914){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_20914);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e20949){if((e20949 instanceof Object))
{var ex__5551__auto__ = e20949;var statearr_20950_20976 = state_20914;(statearr_20950_20976[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20914);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20949;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20977 = state_20914;
state_20914 = G__20977;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_20914){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_20914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_20951 = f__5563__auto__.call(null);(statearr_20951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_20951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return (function() { 
var G__20980__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20979 = rseq;var rcomm = cljs.core.nth.call(null,vec__20979,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__20979,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20980 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20980__delegate.call(this,req_args);};
G__20980.cljs$lang$maxFixedArity = 0;
G__20980.cljs$lang$applyTo = (function (arglist__20981){
var req_args = cljs.core.seq(arglist__20981);
return G__20980__delegate(req_args);
});
G__20980.cljs$core$IFn$_invoke$arity$variadic = G__20980__delegate;
return G__20980;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_20999){var state_val_21000 = (state_20999[1]);if((state_val_21000 === 2))
{var inst_20996 = (state_20999[2]);var inst_20997 = console.log(inst_20996);var state_20999__$1 = state_20999;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20999__$1,inst_20997);
} else
{if((state_val_21000 === 1))
{var state_20999__$1 = state_20999;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20999__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_21004 = [null,null,null,null,null,null,null];(statearr_21004[0] = state_machine__5548__auto__);
(statearr_21004[1] = 1);
return statearr_21004;
});
var state_machine__5548__auto____1 = (function (state_20999){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_20999);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e21005){if((e21005 instanceof Object))
{var ex__5551__auto__ = e21005;var statearr_21006_21008 = state_20999;(statearr_21006_21008[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20999);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21005;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21009 = state_20999;
state_20999 = G__21009;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_20999){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_20999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_21007 = f__5563__auto__.call(null);(statearr_21007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_21007;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__21010){
var f = cljs.core.first(arglist__21010);
var args = cljs.core.rest(arglist__21010);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__21013){var vec__21014 = p__21013;var k = cljs.core.nth.call(null,vec__21014,0,null);var v = cljs.core.nth.call(null,vec__21014,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__21015){
var id = cljs.core.first(arglist__21015);
arglist__21015 = cljs.core.next(arglist__21015);
var tolerance = cljs.core.first(arglist__21015);
var opts = cljs.core.rest(arglist__21015);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__21016){
var id = cljs.core.first(arglist__21016);
var opts = cljs.core.rest(arglist__21016);
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
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__21017){var vec__21019 = p__21017;var type_ids = cljs.core.nth.call(null,vec__21019,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__21017 = null;if (arguments.length > 0) {
  p__21017 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__21017);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__21020){
var p__21017 = cljs.core.seq(arglist__21020);
return portfolio_company_sites__delegate(p__21017);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__21021){var vec__21023 = p__21021;var type_ids = cljs.core.nth.call(null,vec__21023,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__21021 = null;if (arguments.length > 0) {
  p__21021 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__21021);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__21024){
var p__21021 = cljs.core.seq(arglist__21024);
return portfolio_company_sites_by_company__delegate(p__21021);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__21025){var vec__21027 = p__21025;var type_ids = cljs.core.nth.call(null,vec__21027,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__21025 = null;if (arguments.length > 0) {
  p__21025 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__21025);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__21028){
var p__21025 = cljs.core.seq(arglist__21028);
return portfolio_company_locations__delegate(p__21025);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__21029){var vec__21031 = p__21029;var type_ids = cljs.core.nth.call(null,vec__21031,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__21029 = null;if (arguments.length > 0) {
  p__21029 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__21029);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__21032){
var p__21029 = cljs.core.seq(arglist__21032);
return portfolio_company_site_stats__delegate(p__21029);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__21033){var vec__21035 = p__21033;var type_ids = cljs.core.nth.call(null,vec__21035,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__21033 = null;if (arguments.length > 0) {
  p__21033 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__21033);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__21036){
var p__21033 = cljs.core.seq(arglist__21036);
return portfolio_company_site_account_timelines__delegate(p__21033);
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
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__21037){var vec__21039 = p__21037;var type_ids = cljs.core.nth.call(null,vec__21039,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__21037 = null;if (arguments.length > 0) {
  p__21037 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__21037);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__21040){
var p__21037 = cljs.core.seq(arglist__21040);
return investment_account_timelines__delegate(p__21037);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__21041){var vec__21043 = p__21041;var type_ids = cljs.core.nth.call(null,vec__21043,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__21041 = null;if (arguments.length > 0) {
  p__21041 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__21041);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__21044){
var p__21041 = cljs.core.seq(arglist__21044);
return investment_stats__delegate(p__21041);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__21045){var vec__21047 = p__21045;var type_ids = cljs.core.nth.call(null,vec__21047,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__21045 = null;if (arguments.length > 0) {
  p__21045 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__21045);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__21048){
var p__21045 = cljs.core.seq(arglist__21048);
return investment_aggs__delegate(p__21045);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__21049){var vec__21051 = p__21049;var type_ids = cljs.core.nth.call(null,vec__21051,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__21049 = null;if (arguments.length > 0) {
  p__21049 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__21049);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__21052){
var p__21049 = cljs.core.seq(arglist__21052);
return investments__delegate(p__21049);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map