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
var GET__delegate = function (url,p__20774){var map__20776 = p__20774;var map__20776__$1 = ((cljs.core.seq_QMARK_.call(null,map__20776))?cljs.core.apply.call(null,cljs.core.hash_map,map__20776):map__20776);var raw = cljs.core.get.call(null,map__20776__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__20774 = null;if (arguments.length > 1) {
  p__20774 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20774);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20777){
var url = cljs.core.first(arglist__20777);
var p__20774 = cljs.core.rest(arglist__20777);
return GET__delegate(url,p__20774);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_20910){var state_val_20911 = (state_20910[1]);if((state_val_20911 === 1))
{var state_20910__$1 = state_20910;var statearr_20912_20948 = state_20910__$1;(statearr_20912_20948[2] = null);
(statearr_20912_20948[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 2))
{var state_20910__$1 = state_20910;if(true)
{var statearr_20913_20949 = state_20910__$1;(statearr_20913_20949[1] = 4);
} else
{var statearr_20914_20950 = state_20910__$1;(statearr_20914_20950[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 3))
{var inst_20908 = (state_20910[2]);var state_20910__$1 = state_20910;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20910__$1,inst_20908);
} else
{if((state_val_20911 === 4))
{var state_20910__$1 = state_20910;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20910__$1,7,ocomm);
} else
{if((state_val_20911 === 5))
{var state_20910__$1 = state_20910;var statearr_20915_20951 = state_20910__$1;(statearr_20915_20951[2] = null);
(statearr_20915_20951[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 6))
{var inst_20906 = (state_20910[2]);var state_20910__$1 = state_20910;var statearr_20916_20952 = state_20910__$1;(statearr_20916_20952[2] = inst_20906);
(statearr_20916_20952[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 7))
{var inst_20868 = (state_20910[7]);var inst_20867 = (state_20910[2]);var inst_20868__$1 = cljs.core.nth.call(null,inst_20867,0,null);var inst_20869 = cljs.core.nth.call(null,inst_20867,1,null);var inst_20870 = cljs.core.sequential_QMARK_.call(null,inst_20868__$1);var state_20910__$1 = (function (){var statearr_20917 = state_20910;(statearr_20917[7] = inst_20868__$1);
(statearr_20917[8] = inst_20869);
return statearr_20917;
})();if(inst_20870)
{var statearr_20918_20953 = state_20910__$1;(statearr_20918_20953[1] = 8);
} else
{var statearr_20919_20954 = state_20910__$1;(statearr_20919_20954[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 8))
{var inst_20868 = (state_20910[7]);var inst_20872 = inst_20868;var inst_20873 = cljs.core.PersistentVector.EMPTY;var state_20910__$1 = (function (){var statearr_20920 = state_20910;(statearr_20920[9] = inst_20872);
(statearr_20920[10] = inst_20873);
return statearr_20920;
})();var statearr_20921_20955 = state_20910__$1;(statearr_20921_20955[2] = null);
(statearr_20921_20955[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 9))
{var inst_20868 = (state_20910[7]);var state_20910__$1 = state_20910;if(cljs.core.truth_(inst_20868))
{var statearr_20922_20956 = state_20910__$1;(statearr_20922_20956[1] = 20);
} else
{var statearr_20923_20957 = state_20910__$1;(statearr_20923_20957[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 10))
{var inst_20869 = (state_20910[8]);var inst_20901 = (state_20910[2]);var inst_20902 = cljs.core.apply.call(null,handler,inst_20901,inst_20869);var state_20910__$1 = (function (){var statearr_20924 = state_20910;(statearr_20924[11] = inst_20902);
return statearr_20924;
})();var statearr_20925_20958 = state_20910__$1;(statearr_20925_20958[2] = null);
(statearr_20925_20958[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 11))
{var inst_20872 = (state_20910[9]);var inst_20875 = cljs.core.empty_QMARK_.call(null,inst_20872);var state_20910__$1 = state_20910;if(inst_20875)
{var statearr_20926_20959 = state_20910__$1;(statearr_20926_20959[1] = 13);
} else
{var statearr_20927_20960 = state_20910__$1;(statearr_20927_20960[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 12))
{var inst_20892 = (state_20910[2]);var state_20910__$1 = state_20910;var statearr_20928_20961 = state_20910__$1;(statearr_20928_20961[2] = inst_20892);
(statearr_20928_20961[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 13))
{var inst_20873 = (state_20910[10]);var state_20910__$1 = state_20910;var statearr_20929_20962 = state_20910__$1;(statearr_20929_20962[2] = inst_20873);
(statearr_20929_20962[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 14))
{var inst_20872 = (state_20910[9]);var inst_20878 = cljs.core.rest.call(null,inst_20872);var inst_20879 = cljs.core.first.call(null,inst_20872);var state_20910__$1 = (function (){var statearr_20930 = state_20910;(statearr_20930[12] = inst_20878);
return statearr_20930;
})();if(cljs.core.truth_(inst_20879))
{var statearr_20931_20963 = state_20910__$1;(statearr_20931_20963[1] = 16);
} else
{var statearr_20932_20964 = state_20910__$1;(statearr_20932_20964[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 15))
{var inst_20890 = (state_20910[2]);var state_20910__$1 = state_20910;var statearr_20933_20965 = state_20910__$1;(statearr_20933_20965[2] = inst_20890);
(statearr_20933_20965[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 16))
{var inst_20872 = (state_20910[9]);var inst_20881 = cljs.core.first.call(null,inst_20872);var state_20910__$1 = state_20910;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20910__$1,19,inst_20881);
} else
{if((state_val_20911 === 17))
{var state_20910__$1 = state_20910;var statearr_20934_20966 = state_20910__$1;(statearr_20934_20966[2] = null);
(statearr_20934_20966[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 18))
{var inst_20873 = (state_20910[10]);var inst_20878 = (state_20910[12]);var inst_20886 = (state_20910[2]);var inst_20887 = cljs.core.conj.call(null,inst_20873,inst_20886);var inst_20872 = inst_20878;var inst_20873__$1 = inst_20887;var state_20910__$1 = (function (){var statearr_20935 = state_20910;(statearr_20935[9] = inst_20872);
(statearr_20935[10] = inst_20873__$1);
return statearr_20935;
})();var statearr_20936_20967 = state_20910__$1;(statearr_20936_20967[2] = null);
(statearr_20936_20967[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 19))
{var inst_20883 = (state_20910[2]);var state_20910__$1 = state_20910;var statearr_20937_20968 = state_20910__$1;(statearr_20937_20968[2] = inst_20883);
(statearr_20937_20968[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 20))
{var inst_20868 = (state_20910[7]);var state_20910__$1 = state_20910;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20910__$1,23,inst_20868);
} else
{if((state_val_20911 === 21))
{var state_20910__$1 = state_20910;var statearr_20938_20969 = state_20910__$1;(statearr_20938_20969[2] = null);
(statearr_20938_20969[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 22))
{var inst_20899 = (state_20910[2]);var state_20910__$1 = state_20910;var statearr_20939_20970 = state_20910__$1;(statearr_20939_20970[2] = inst_20899);
(statearr_20939_20970[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 23))
{var inst_20896 = (state_20910[2]);var state_20910__$1 = state_20910;var statearr_20940_20971 = state_20910__$1;(statearr_20940_20971[2] = inst_20896);
(statearr_20940_20971[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_20944 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20944[0] = state_machine__5548__auto__);
(statearr_20944[1] = 1);
return statearr_20944;
});
var state_machine__5548__auto____1 = (function (state_20910){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_20910);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e20945){if((e20945 instanceof Object))
{var ex__5551__auto__ = e20945;var statearr_20946_20972 = state_20910;(statearr_20946_20972[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20910);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20973 = state_20910;
state_20910 = G__20973;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_20910){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_20910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_20947 = f__5563__auto__.call(null);(statearr_20947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_20947;
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
var G__20976__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20975 = rseq;var rcomm = cljs.core.nth.call(null,vec__20975,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__20975,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20976 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20976__delegate.call(this,req_args);};
G__20976.cljs$lang$maxFixedArity = 0;
G__20976.cljs$lang$applyTo = (function (arglist__20977){
var req_args = cljs.core.seq(arglist__20977);
return G__20976__delegate(req_args);
});
G__20976.cljs$core$IFn$_invoke$arity$variadic = G__20976__delegate;
return G__20976;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_20995){var state_val_20996 = (state_20995[1]);if((state_val_20996 === 2))
{var inst_20992 = (state_20995[2]);var inst_20993 = console.log(inst_20992);var state_20995__$1 = state_20995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20995__$1,inst_20993);
} else
{if((state_val_20996 === 1))
{var state_20995__$1 = state_20995;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20995__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_21000 = [null,null,null,null,null,null,null];(statearr_21000[0] = state_machine__5548__auto__);
(statearr_21000[1] = 1);
return statearr_21000;
});
var state_machine__5548__auto____1 = (function (state_20995){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_20995);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e21001){if((e21001 instanceof Object))
{var ex__5551__auto__ = e21001;var statearr_21002_21004 = state_20995;(statearr_21002_21004[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20995);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21001;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21005 = state_20995;
state_20995 = G__21005;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_20995){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_20995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_21003 = f__5563__auto__.call(null);(statearr_21003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_21003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__21006){
var f = cljs.core.first(arglist__21006);
var args = cljs.core.rest(arglist__21006);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__21009){var vec__21010 = p__21009;var k = cljs.core.nth.call(null,vec__21010,0,null);var v = cljs.core.nth.call(null,vec__21010,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__21011){
var id = cljs.core.first(arglist__21011);
arglist__21011 = cljs.core.next(arglist__21011);
var tolerance = cljs.core.first(arglist__21011);
var opts = cljs.core.rest(arglist__21011);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__21012){
var id = cljs.core.first(arglist__21012);
var opts = cljs.core.rest(arglist__21012);
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
var portfolio_company_sites__delegate = function (p__21013){var vec__21015 = p__21013;var type_ids = cljs.core.nth.call(null,vec__21015,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__21013 = null;if (arguments.length > 0) {
  p__21013 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__21013);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__21016){
var p__21013 = cljs.core.seq(arglist__21016);
return portfolio_company_sites__delegate(p__21013);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__21017){var vec__21019 = p__21017;var type_ids = cljs.core.nth.call(null,vec__21019,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__21017 = null;if (arguments.length > 0) {
  p__21017 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__21017);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__21020){
var p__21017 = cljs.core.seq(arglist__21020);
return portfolio_company_sites_by_company__delegate(p__21017);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__21021){var vec__21023 = p__21021;var type_ids = cljs.core.nth.call(null,vec__21023,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__21021 = null;if (arguments.length > 0) {
  p__21021 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__21021);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__21024){
var p__21021 = cljs.core.seq(arglist__21024);
return portfolio_company_locations__delegate(p__21021);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__21025){var vec__21027 = p__21025;var type_ids = cljs.core.nth.call(null,vec__21027,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__21025 = null;if (arguments.length > 0) {
  p__21025 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__21025);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__21028){
var p__21025 = cljs.core.seq(arglist__21028);
return portfolio_company_site_stats__delegate(p__21025);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__21029){var vec__21031 = p__21029;var type_ids = cljs.core.nth.call(null,vec__21031,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__21029 = null;if (arguments.length > 0) {
  p__21029 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__21029);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__21032){
var p__21029 = cljs.core.seq(arglist__21032);
return portfolio_company_site_account_timelines__delegate(p__21029);
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
var investment_account_timelines__delegate = function (p__21033){var vec__21035 = p__21033;var type_ids = cljs.core.nth.call(null,vec__21035,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__21033 = null;if (arguments.length > 0) {
  p__21033 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__21033);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__21036){
var p__21033 = cljs.core.seq(arglist__21036);
return investment_account_timelines__delegate(p__21033);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__21037){var vec__21039 = p__21037;var type_ids = cljs.core.nth.call(null,vec__21039,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__21037 = null;if (arguments.length > 0) {
  p__21037 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__21037);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__21040){
var p__21037 = cljs.core.seq(arglist__21040);
return investment_stats__delegate(p__21037);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__21041){var vec__21043 = p__21041;var type_ids = cljs.core.nth.call(null,vec__21043,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__21041 = null;if (arguments.length > 0) {
  p__21041 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__21041);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__21044){
var p__21041 = cljs.core.seq(arglist__21044);
return investment_aggs__delegate(p__21041);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__21045){var vec__21047 = p__21045;var type_ids = cljs.core.nth.call(null,vec__21047,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__21045 = null;if (arguments.length > 0) {
  p__21045 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__21045);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__21048){
var p__21045 = cljs.core.seq(arglist__21048);
return investments__delegate(p__21045);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map