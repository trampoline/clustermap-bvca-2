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
var GET__delegate = function (url,p__20738){var map__20740 = p__20738;var map__20740__$1 = ((cljs.core.seq_QMARK_.call(null,map__20740))?cljs.core.apply.call(null,cljs.core.hash_map,map__20740):map__20740);var raw = cljs.core.get.call(null,map__20740__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__20738 = null;if (arguments.length > 1) {
  p__20738 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20738);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20741){
var url = cljs.core.first(arglist__20741);
var p__20738 = cljs.core.rest(arglist__20741);
return GET__delegate(url,p__20738);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_20874){var state_val_20875 = (state_20874[1]);if((state_val_20875 === 1))
{var state_20874__$1 = state_20874;var statearr_20876_20912 = state_20874__$1;(statearr_20876_20912[2] = null);
(statearr_20876_20912[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 2))
{var state_20874__$1 = state_20874;if(true)
{var statearr_20877_20913 = state_20874__$1;(statearr_20877_20913[1] = 4);
} else
{var statearr_20878_20914 = state_20874__$1;(statearr_20878_20914[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 3))
{var inst_20872 = (state_20874[2]);var state_20874__$1 = state_20874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20874__$1,inst_20872);
} else
{if((state_val_20875 === 4))
{var state_20874__$1 = state_20874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20874__$1,7,ocomm);
} else
{if((state_val_20875 === 5))
{var state_20874__$1 = state_20874;var statearr_20879_20915 = state_20874__$1;(statearr_20879_20915[2] = null);
(statearr_20879_20915[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 6))
{var inst_20870 = (state_20874[2]);var state_20874__$1 = state_20874;var statearr_20880_20916 = state_20874__$1;(statearr_20880_20916[2] = inst_20870);
(statearr_20880_20916[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 7))
{var inst_20832 = (state_20874[7]);var inst_20831 = (state_20874[2]);var inst_20832__$1 = cljs.core.nth.call(null,inst_20831,0,null);var inst_20833 = cljs.core.nth.call(null,inst_20831,1,null);var inst_20834 = cljs.core.sequential_QMARK_.call(null,inst_20832__$1);var state_20874__$1 = (function (){var statearr_20881 = state_20874;(statearr_20881[8] = inst_20833);
(statearr_20881[7] = inst_20832__$1);
return statearr_20881;
})();if(inst_20834)
{var statearr_20882_20917 = state_20874__$1;(statearr_20882_20917[1] = 8);
} else
{var statearr_20883_20918 = state_20874__$1;(statearr_20883_20918[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 8))
{var inst_20832 = (state_20874[7]);var inst_20836 = inst_20832;var inst_20837 = cljs.core.PersistentVector.EMPTY;var state_20874__$1 = (function (){var statearr_20884 = state_20874;(statearr_20884[9] = inst_20836);
(statearr_20884[10] = inst_20837);
return statearr_20884;
})();var statearr_20885_20919 = state_20874__$1;(statearr_20885_20919[2] = null);
(statearr_20885_20919[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 9))
{var inst_20832 = (state_20874[7]);var state_20874__$1 = state_20874;if(cljs.core.truth_(inst_20832))
{var statearr_20886_20920 = state_20874__$1;(statearr_20886_20920[1] = 20);
} else
{var statearr_20887_20921 = state_20874__$1;(statearr_20887_20921[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 10))
{var inst_20833 = (state_20874[8]);var inst_20865 = (state_20874[2]);var inst_20866 = cljs.core.apply.call(null,handler,inst_20865,inst_20833);var state_20874__$1 = (function (){var statearr_20888 = state_20874;(statearr_20888[11] = inst_20866);
return statearr_20888;
})();var statearr_20889_20922 = state_20874__$1;(statearr_20889_20922[2] = null);
(statearr_20889_20922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 11))
{var inst_20836 = (state_20874[9]);var inst_20839 = cljs.core.empty_QMARK_.call(null,inst_20836);var state_20874__$1 = state_20874;if(inst_20839)
{var statearr_20890_20923 = state_20874__$1;(statearr_20890_20923[1] = 13);
} else
{var statearr_20891_20924 = state_20874__$1;(statearr_20891_20924[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 12))
{var inst_20856 = (state_20874[2]);var state_20874__$1 = state_20874;var statearr_20892_20925 = state_20874__$1;(statearr_20892_20925[2] = inst_20856);
(statearr_20892_20925[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 13))
{var inst_20837 = (state_20874[10]);var state_20874__$1 = state_20874;var statearr_20893_20926 = state_20874__$1;(statearr_20893_20926[2] = inst_20837);
(statearr_20893_20926[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 14))
{var inst_20836 = (state_20874[9]);var inst_20842 = cljs.core.rest.call(null,inst_20836);var inst_20843 = cljs.core.first.call(null,inst_20836);var state_20874__$1 = (function (){var statearr_20894 = state_20874;(statearr_20894[12] = inst_20842);
return statearr_20894;
})();if(cljs.core.truth_(inst_20843))
{var statearr_20895_20927 = state_20874__$1;(statearr_20895_20927[1] = 16);
} else
{var statearr_20896_20928 = state_20874__$1;(statearr_20896_20928[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 15))
{var inst_20854 = (state_20874[2]);var state_20874__$1 = state_20874;var statearr_20897_20929 = state_20874__$1;(statearr_20897_20929[2] = inst_20854);
(statearr_20897_20929[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 16))
{var inst_20836 = (state_20874[9]);var inst_20845 = cljs.core.first.call(null,inst_20836);var state_20874__$1 = state_20874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20874__$1,19,inst_20845);
} else
{if((state_val_20875 === 17))
{var state_20874__$1 = state_20874;var statearr_20898_20930 = state_20874__$1;(statearr_20898_20930[2] = null);
(statearr_20898_20930[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 18))
{var inst_20842 = (state_20874[12]);var inst_20837 = (state_20874[10]);var inst_20850 = (state_20874[2]);var inst_20851 = cljs.core.conj.call(null,inst_20837,inst_20850);var inst_20836 = inst_20842;var inst_20837__$1 = inst_20851;var state_20874__$1 = (function (){var statearr_20899 = state_20874;(statearr_20899[9] = inst_20836);
(statearr_20899[10] = inst_20837__$1);
return statearr_20899;
})();var statearr_20900_20931 = state_20874__$1;(statearr_20900_20931[2] = null);
(statearr_20900_20931[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 19))
{var inst_20847 = (state_20874[2]);var state_20874__$1 = state_20874;var statearr_20901_20932 = state_20874__$1;(statearr_20901_20932[2] = inst_20847);
(statearr_20901_20932[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 20))
{var inst_20832 = (state_20874[7]);var state_20874__$1 = state_20874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20874__$1,23,inst_20832);
} else
{if((state_val_20875 === 21))
{var state_20874__$1 = state_20874;var statearr_20902_20933 = state_20874__$1;(statearr_20902_20933[2] = null);
(statearr_20902_20933[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 22))
{var inst_20863 = (state_20874[2]);var state_20874__$1 = state_20874;var statearr_20903_20934 = state_20874__$1;(statearr_20903_20934[2] = inst_20863);
(statearr_20903_20934[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20875 === 23))
{var inst_20860 = (state_20874[2]);var state_20874__$1 = state_20874;var statearr_20904_20935 = state_20874__$1;(statearr_20904_20935[2] = inst_20860);
(statearr_20904_20935[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_20908 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20908[0] = state_machine__5548__auto__);
(statearr_20908[1] = 1);
return statearr_20908;
});
var state_machine__5548__auto____1 = (function (state_20874){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_20874);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e20909){if((e20909 instanceof Object))
{var ex__5551__auto__ = e20909;var statearr_20910_20936 = state_20874;(statearr_20910_20936[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20874);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20909;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20937 = state_20874;
state_20874 = G__20937;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_20874){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_20874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_20911 = f__5563__auto__.call(null);(statearr_20911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_20911;
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
var G__20940__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20939 = rseq;var rcomm = cljs.core.nth.call(null,vec__20939,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__20939,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20940 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20940__delegate.call(this,req_args);};
G__20940.cljs$lang$maxFixedArity = 0;
G__20940.cljs$lang$applyTo = (function (arglist__20941){
var req_args = cljs.core.seq(arglist__20941);
return G__20940__delegate(req_args);
});
G__20940.cljs$core$IFn$_invoke$arity$variadic = G__20940__delegate;
return G__20940;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_20959){var state_val_20960 = (state_20959[1]);if((state_val_20960 === 2))
{var inst_20956 = (state_20959[2]);var inst_20957 = console.log(inst_20956);var state_20959__$1 = state_20959;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20959__$1,inst_20957);
} else
{if((state_val_20960 === 1))
{var state_20959__$1 = state_20959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20959__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_20964 = [null,null,null,null,null,null,null];(statearr_20964[0] = state_machine__5548__auto__);
(statearr_20964[1] = 1);
return statearr_20964;
});
var state_machine__5548__auto____1 = (function (state_20959){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_20959);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e20965){if((e20965 instanceof Object))
{var ex__5551__auto__ = e20965;var statearr_20966_20968 = state_20959;(statearr_20966_20968[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20959);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20965;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20969 = state_20959;
state_20959 = G__20969;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_20959){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_20959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_20967 = f__5563__auto__.call(null);(statearr_20967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_20967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20970){
var f = cljs.core.first(arglist__20970);
var args = cljs.core.rest(arglist__20970);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__20973){var vec__20974 = p__20973;var k = cljs.core.nth.call(null,vec__20974,0,null);var v = cljs.core.nth.call(null,vec__20974,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20975){
var id = cljs.core.first(arglist__20975);
arglist__20975 = cljs.core.next(arglist__20975);
var tolerance = cljs.core.first(arglist__20975);
var opts = cljs.core.rest(arglist__20975);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20976){
var id = cljs.core.first(arglist__20976);
var opts = cljs.core.rest(arglist__20976);
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
var portfolio_company_sites__delegate = function (p__20977){var vec__20979 = p__20977;var type_ids = cljs.core.nth.call(null,vec__20979,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20977 = null;if (arguments.length > 0) {
  p__20977 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20977);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20980){
var p__20977 = cljs.core.seq(arglist__20980);
return portfolio_company_sites__delegate(p__20977);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__20981){var vec__20983 = p__20981;var type_ids = cljs.core.nth.call(null,vec__20983,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__20981 = null;if (arguments.length > 0) {
  p__20981 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__20981);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__20984){
var p__20981 = cljs.core.seq(arglist__20984);
return portfolio_company_sites_by_company__delegate(p__20981);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20985){var vec__20987 = p__20985;var type_ids = cljs.core.nth.call(null,vec__20987,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20985 = null;if (arguments.length > 0) {
  p__20985 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20985);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20988){
var p__20985 = cljs.core.seq(arglist__20988);
return portfolio_company_locations__delegate(p__20985);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20989){var vec__20991 = p__20989;var type_ids = cljs.core.nth.call(null,vec__20991,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20989 = null;if (arguments.length > 0) {
  p__20989 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20989);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20992){
var p__20989 = cljs.core.seq(arglist__20992);
return portfolio_company_site_stats__delegate(p__20989);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20993){var vec__20995 = p__20993;var type_ids = cljs.core.nth.call(null,vec__20995,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20993 = null;if (arguments.length > 0) {
  p__20993 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20993);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20996){
var p__20993 = cljs.core.seq(arglist__20996);
return portfolio_company_site_account_timelines__delegate(p__20993);
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
var investment_account_timelines__delegate = function (p__20997){var vec__20999 = p__20997;var type_ids = cljs.core.nth.call(null,vec__20999,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__20997 = null;if (arguments.length > 0) {
  p__20997 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__20997);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__21000){
var p__20997 = cljs.core.seq(arglist__21000);
return investment_account_timelines__delegate(p__20997);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__21001){var vec__21003 = p__21001;var type_ids = cljs.core.nth.call(null,vec__21003,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__21001 = null;if (arguments.length > 0) {
  p__21001 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__21001);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__21004){
var p__21001 = cljs.core.seq(arglist__21004);
return investment_stats__delegate(p__21001);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__21005){var vec__21007 = p__21005;var type_ids = cljs.core.nth.call(null,vec__21007,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__21005 = null;if (arguments.length > 0) {
  p__21005 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__21005);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__21008){
var p__21005 = cljs.core.seq(arglist__21008);
return investment_aggs__delegate(p__21005);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__21009){var vec__21011 = p__21009;var type_ids = cljs.core.nth.call(null,vec__21011,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__21009 = null;if (arguments.length > 0) {
  p__21009 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__21009);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__21012){
var p__21009 = cljs.core.seq(arglist__21012);
return investments__delegate(p__21009);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map