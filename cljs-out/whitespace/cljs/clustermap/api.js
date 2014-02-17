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
var GET__delegate = function (url,p__30704){var map__30706 = p__30704;var map__30706__$1 = ((cljs.core.seq_QMARK_.call(null,map__30706))?cljs.core.apply.call(null,cljs.core.hash_map,map__30706):map__30706);var raw = cljs.core.get.call(null,map__30706__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__30704 = null;if (arguments.length > 1) {
  p__30704 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__30704);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__30707){
var url = cljs.core.first(arglist__30707);
var p__30704 = cljs.core.rest(arglist__30707);
return GET__delegate(url,p__30704);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30840){var state_val_30841 = (state_30840[1]);if((state_val_30841 === 1))
{var state_30840__$1 = state_30840;var statearr_30842_30878 = state_30840__$1;(statearr_30842_30878[2] = null);
(statearr_30842_30878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 2))
{var state_30840__$1 = state_30840;if(true)
{var statearr_30843_30879 = state_30840__$1;(statearr_30843_30879[1] = 4);
} else
{var statearr_30844_30880 = state_30840__$1;(statearr_30844_30880[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 3))
{var inst_30838 = (state_30840[2]);var state_30840__$1 = state_30840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30840__$1,inst_30838);
} else
{if((state_val_30841 === 4))
{var state_30840__$1 = state_30840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30840__$1,7,ocomm);
} else
{if((state_val_30841 === 5))
{var state_30840__$1 = state_30840;var statearr_30845_30881 = state_30840__$1;(statearr_30845_30881[2] = null);
(statearr_30845_30881[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 6))
{var inst_30836 = (state_30840[2]);var state_30840__$1 = state_30840;var statearr_30846_30882 = state_30840__$1;(statearr_30846_30882[2] = inst_30836);
(statearr_30846_30882[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 7))
{var inst_30798 = (state_30840[7]);var inst_30797 = (state_30840[2]);var inst_30798__$1 = cljs.core.nth.call(null,inst_30797,0,null);var inst_30799 = cljs.core.nth.call(null,inst_30797,1,null);var inst_30800 = cljs.core.sequential_QMARK_.call(null,inst_30798__$1);var state_30840__$1 = (function (){var statearr_30847 = state_30840;(statearr_30847[8] = inst_30799);
(statearr_30847[7] = inst_30798__$1);
return statearr_30847;
})();if(inst_30800)
{var statearr_30848_30883 = state_30840__$1;(statearr_30848_30883[1] = 8);
} else
{var statearr_30849_30884 = state_30840__$1;(statearr_30849_30884[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 8))
{var inst_30798 = (state_30840[7]);var inst_30802 = inst_30798;var inst_30803 = cljs.core.PersistentVector.EMPTY;var state_30840__$1 = (function (){var statearr_30850 = state_30840;(statearr_30850[9] = inst_30802);
(statearr_30850[10] = inst_30803);
return statearr_30850;
})();var statearr_30851_30885 = state_30840__$1;(statearr_30851_30885[2] = null);
(statearr_30851_30885[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 9))
{var inst_30798 = (state_30840[7]);var state_30840__$1 = state_30840;if(cljs.core.truth_(inst_30798))
{var statearr_30852_30886 = state_30840__$1;(statearr_30852_30886[1] = 20);
} else
{var statearr_30853_30887 = state_30840__$1;(statearr_30853_30887[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 10))
{var inst_30799 = (state_30840[8]);var inst_30831 = (state_30840[2]);var inst_30832 = cljs.core.apply.call(null,handler,inst_30831,inst_30799);var state_30840__$1 = (function (){var statearr_30854 = state_30840;(statearr_30854[11] = inst_30832);
return statearr_30854;
})();var statearr_30855_30888 = state_30840__$1;(statearr_30855_30888[2] = null);
(statearr_30855_30888[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 11))
{var inst_30802 = (state_30840[9]);var inst_30805 = cljs.core.empty_QMARK_.call(null,inst_30802);var state_30840__$1 = state_30840;if(inst_30805)
{var statearr_30856_30889 = state_30840__$1;(statearr_30856_30889[1] = 13);
} else
{var statearr_30857_30890 = state_30840__$1;(statearr_30857_30890[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 12))
{var inst_30822 = (state_30840[2]);var state_30840__$1 = state_30840;var statearr_30858_30891 = state_30840__$1;(statearr_30858_30891[2] = inst_30822);
(statearr_30858_30891[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 13))
{var inst_30803 = (state_30840[10]);var state_30840__$1 = state_30840;var statearr_30859_30892 = state_30840__$1;(statearr_30859_30892[2] = inst_30803);
(statearr_30859_30892[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 14))
{var inst_30802 = (state_30840[9]);var inst_30808 = cljs.core.rest.call(null,inst_30802);var inst_30809 = cljs.core.first.call(null,inst_30802);var state_30840__$1 = (function (){var statearr_30860 = state_30840;(statearr_30860[12] = inst_30808);
return statearr_30860;
})();if(cljs.core.truth_(inst_30809))
{var statearr_30861_30893 = state_30840__$1;(statearr_30861_30893[1] = 16);
} else
{var statearr_30862_30894 = state_30840__$1;(statearr_30862_30894[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 15))
{var inst_30820 = (state_30840[2]);var state_30840__$1 = state_30840;var statearr_30863_30895 = state_30840__$1;(statearr_30863_30895[2] = inst_30820);
(statearr_30863_30895[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 16))
{var inst_30802 = (state_30840[9]);var inst_30811 = cljs.core.first.call(null,inst_30802);var state_30840__$1 = state_30840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30840__$1,19,inst_30811);
} else
{if((state_val_30841 === 17))
{var state_30840__$1 = state_30840;var statearr_30864_30896 = state_30840__$1;(statearr_30864_30896[2] = null);
(statearr_30864_30896[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 18))
{var inst_30808 = (state_30840[12]);var inst_30803 = (state_30840[10]);var inst_30816 = (state_30840[2]);var inst_30817 = cljs.core.conj.call(null,inst_30803,inst_30816);var inst_30802 = inst_30808;var inst_30803__$1 = inst_30817;var state_30840__$1 = (function (){var statearr_30865 = state_30840;(statearr_30865[9] = inst_30802);
(statearr_30865[10] = inst_30803__$1);
return statearr_30865;
})();var statearr_30866_30897 = state_30840__$1;(statearr_30866_30897[2] = null);
(statearr_30866_30897[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 19))
{var inst_30813 = (state_30840[2]);var state_30840__$1 = state_30840;var statearr_30867_30898 = state_30840__$1;(statearr_30867_30898[2] = inst_30813);
(statearr_30867_30898[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 20))
{var inst_30798 = (state_30840[7]);var state_30840__$1 = state_30840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30840__$1,23,inst_30798);
} else
{if((state_val_30841 === 21))
{var state_30840__$1 = state_30840;var statearr_30868_30899 = state_30840__$1;(statearr_30868_30899[2] = null);
(statearr_30868_30899[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 22))
{var inst_30829 = (state_30840[2]);var state_30840__$1 = state_30840;var statearr_30869_30900 = state_30840__$1;(statearr_30869_30900[2] = inst_30829);
(statearr_30869_30900[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30841 === 23))
{var inst_30826 = (state_30840[2]);var state_30840__$1 = state_30840;var statearr_30870_30901 = state_30840__$1;(statearr_30870_30901[2] = inst_30826);
(statearr_30870_30901[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_30874 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30874[0] = state_machine__5507__auto__);
(statearr_30874[1] = 1);
return statearr_30874;
});
var state_machine__5507__auto____1 = (function (state_30840){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30840);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30875){if((e30875 instanceof Object))
{var ex__5510__auto__ = e30875;var statearr_30876_30902 = state_30840;(statearr_30876_30902[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30840);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30875;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30903 = state_30840;
state_30840 = G__30903;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30840){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30877 = f__5522__auto__.call(null);(statearr_30877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30877;
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
var G__30906__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__30905 = rseq;var rcomm = cljs.core.nth.call(null,vec__30905,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__30905,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__30906 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30906__delegate.call(this,req_args);};
G__30906.cljs$lang$maxFixedArity = 0;
G__30906.cljs$lang$applyTo = (function (arglist__30907){
var req_args = cljs.core.seq(arglist__30907);
return G__30906__delegate(req_args);
});
G__30906.cljs$core$IFn$_invoke$arity$variadic = G__30906__delegate;
return G__30906;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30925){var state_val_30926 = (state_30925[1]);if((state_val_30926 === 2))
{var inst_30922 = (state_30925[2]);var inst_30923 = console.log(inst_30922);var state_30925__$1 = state_30925;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30925__$1,inst_30923);
} else
{if((state_val_30926 === 1))
{var state_30925__$1 = state_30925;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30925__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30930 = [null,null,null,null,null,null,null];(statearr_30930[0] = state_machine__5507__auto__);
(statearr_30930[1] = 1);
return statearr_30930;
});
var state_machine__5507__auto____1 = (function (state_30925){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30925);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30931){if((e30931 instanceof Object))
{var ex__5510__auto__ = e30931;var statearr_30932_30934 = state_30925;(statearr_30932_30934[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30925);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30935 = state_30925;
state_30925 = G__30935;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30925){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30933 = f__5522__auto__.call(null);(statearr_30933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__30936){
var f = cljs.core.first(arglist__30936);
var args = cljs.core.rest(arglist__30936);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__30939){var vec__30940 = p__30939;var k = cljs.core.nth.call(null,vec__30940,0,null);var v = cljs.core.nth.call(null,vec__30940,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__30941){
var id = cljs.core.first(arglist__30941);
arglist__30941 = cljs.core.next(arglist__30941);
var tolerance = cljs.core.first(arglist__30941);
var opts = cljs.core.rest(arglist__30941);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__30942){
var id = cljs.core.first(arglist__30942);
var opts = cljs.core.rest(arglist__30942);
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
var constituencies__delegate = function (p__30943){var vec__30945 = p__30943;var type_ids = cljs.core.nth.call(null,vec__30945,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__30943 = null;if (arguments.length > 0) {
  p__30943 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__30943);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__30946){
var p__30943 = cljs.core.seq(arglist__30946);
return constituencies__delegate(p__30943);
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
var portfolio_companies__delegate = function (p__30947){var vec__30949 = p__30947;var type_ids = cljs.core.nth.call(null,vec__30949,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null));return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_companies = function (var_args){
var p__30947 = null;if (arguments.length > 0) {
  p__30947 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__30947);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__30950){
var p__30947 = cljs.core.seq(arglist__30950);
return portfolio_companies__delegate(p__30947);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__30951){var vec__30953 = p__30951;var type_ids = cljs.core.nth.call(null,vec__30953,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__30951 = null;if (arguments.length > 0) {
  p__30951 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__30951);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__30954){
var p__30951 = cljs.core.seq(arglist__30954);
return portfolio_company_stats__delegate(p__30951);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__30955){var vec__30957 = p__30955;var type_ids = cljs.core.nth.call(null,vec__30957,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__30955 = null;if (arguments.length > 0) {
  p__30955 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__30955);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__30958){
var p__30955 = cljs.core.seq(arglist__30958);
return portfolio_company_account_stats__delegate(p__30955);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__30959){var vec__30961 = p__30959;var type_ids = cljs.core.nth.call(null,vec__30961,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__30959 = null;if (arguments.length > 0) {
  p__30959 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__30959);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__30962){
var p__30959 = cljs.core.seq(arglist__30962);
return portfolio_company_sites__delegate(p__30959);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__30963){var vec__30965 = p__30963;var type_ids = cljs.core.nth.call(null,vec__30965,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__30963 = null;if (arguments.length > 0) {
  p__30963 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__30963);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__30966){
var p__30963 = cljs.core.seq(arglist__30966);
return portfolio_company_locations__delegate(p__30963);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__30967){var vec__30969 = p__30967;var type_ids = cljs.core.nth.call(null,vec__30969,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__30967 = null;if (arguments.length > 0) {
  p__30967 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__30967);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__30970){
var p__30967 = cljs.core.seq(arglist__30970);
return portfolio_company_site_stats__delegate(p__30967);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__30971){var vec__30973 = p__30971;var type_ids = cljs.core.nth.call(null,vec__30973,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__30971 = null;if (arguments.length > 0) {
  p__30971 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__30971);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__30974){
var p__30971 = cljs.core.seq(arglist__30974);
return portfolio_company_site_account_timelines__delegate(p__30971);
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
var investor_comapnies__delegate = function (p__30975){var vec__30977 = p__30975;var type_ids = cljs.core.nth.call(null,vec__30977,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__30975 = null;if (arguments.length > 0) {
  p__30975 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__30975);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__30978){
var p__30975 = cljs.core.seq(arglist__30978);
return investor_comapnies__delegate(p__30975);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
