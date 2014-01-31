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
var GET__delegate = function (url,p__29712){var map__29714 = p__29712;var map__29714__$1 = ((cljs.core.seq_QMARK_.call(null,map__29714))?cljs.core.apply.call(null,cljs.core.hash_map,map__29714):map__29714);var raw = cljs.core.get.call(null,map__29714__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__29712 = null;if (arguments.length > 1) {
  p__29712 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__29712);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__29715){
var url = cljs.core.first(arglist__29715);
var p__29712 = cljs.core.rest(arglist__29715);
return GET__delegate(url,p__29712);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29848){var state_val_29849 = (state_29848[1]);if((state_val_29849 === 1))
{var state_29848__$1 = state_29848;var statearr_29850_29886 = state_29848__$1;(statearr_29850_29886[2] = null);
(statearr_29850_29886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 2))
{var state_29848__$1 = state_29848;if(true)
{var statearr_29851_29887 = state_29848__$1;(statearr_29851_29887[1] = 4);
} else
{var statearr_29852_29888 = state_29848__$1;(statearr_29852_29888[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 3))
{var inst_29846 = (state_29848[2]);var state_29848__$1 = state_29848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29848__$1,inst_29846);
} else
{if((state_val_29849 === 4))
{var state_29848__$1 = state_29848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29848__$1,7,ocomm);
} else
{if((state_val_29849 === 5))
{var state_29848__$1 = state_29848;var statearr_29853_29889 = state_29848__$1;(statearr_29853_29889[2] = null);
(statearr_29853_29889[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 6))
{var inst_29844 = (state_29848[2]);var state_29848__$1 = state_29848;var statearr_29854_29890 = state_29848__$1;(statearr_29854_29890[2] = inst_29844);
(statearr_29854_29890[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 7))
{var inst_29806 = (state_29848[7]);var inst_29805 = (state_29848[2]);var inst_29806__$1 = cljs.core.nth.call(null,inst_29805,0,null);var inst_29807 = cljs.core.nth.call(null,inst_29805,1,null);var inst_29808 = cljs.core.sequential_QMARK_.call(null,inst_29806__$1);var state_29848__$1 = (function (){var statearr_29855 = state_29848;(statearr_29855[7] = inst_29806__$1);
(statearr_29855[8] = inst_29807);
return statearr_29855;
})();if(inst_29808)
{var statearr_29856_29891 = state_29848__$1;(statearr_29856_29891[1] = 8);
} else
{var statearr_29857_29892 = state_29848__$1;(statearr_29857_29892[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 8))
{var inst_29806 = (state_29848[7]);var inst_29810 = inst_29806;var inst_29811 = cljs.core.PersistentVector.EMPTY;var state_29848__$1 = (function (){var statearr_29858 = state_29848;(statearr_29858[9] = inst_29810);
(statearr_29858[10] = inst_29811);
return statearr_29858;
})();var statearr_29859_29893 = state_29848__$1;(statearr_29859_29893[2] = null);
(statearr_29859_29893[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 9))
{var inst_29806 = (state_29848[7]);var state_29848__$1 = state_29848;if(cljs.core.truth_(inst_29806))
{var statearr_29860_29894 = state_29848__$1;(statearr_29860_29894[1] = 20);
} else
{var statearr_29861_29895 = state_29848__$1;(statearr_29861_29895[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 10))
{var inst_29807 = (state_29848[8]);var inst_29839 = (state_29848[2]);var inst_29840 = cljs.core.apply.call(null,handler,inst_29839,inst_29807);var state_29848__$1 = (function (){var statearr_29862 = state_29848;(statearr_29862[11] = inst_29840);
return statearr_29862;
})();var statearr_29863_29896 = state_29848__$1;(statearr_29863_29896[2] = null);
(statearr_29863_29896[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 11))
{var inst_29810 = (state_29848[9]);var inst_29813 = cljs.core.empty_QMARK_.call(null,inst_29810);var state_29848__$1 = state_29848;if(inst_29813)
{var statearr_29864_29897 = state_29848__$1;(statearr_29864_29897[1] = 13);
} else
{var statearr_29865_29898 = state_29848__$1;(statearr_29865_29898[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 12))
{var inst_29830 = (state_29848[2]);var state_29848__$1 = state_29848;var statearr_29866_29899 = state_29848__$1;(statearr_29866_29899[2] = inst_29830);
(statearr_29866_29899[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 13))
{var inst_29811 = (state_29848[10]);var state_29848__$1 = state_29848;var statearr_29867_29900 = state_29848__$1;(statearr_29867_29900[2] = inst_29811);
(statearr_29867_29900[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 14))
{var inst_29810 = (state_29848[9]);var inst_29816 = cljs.core.rest.call(null,inst_29810);var inst_29817 = cljs.core.first.call(null,inst_29810);var state_29848__$1 = (function (){var statearr_29868 = state_29848;(statearr_29868[12] = inst_29816);
return statearr_29868;
})();if(cljs.core.truth_(inst_29817))
{var statearr_29869_29901 = state_29848__$1;(statearr_29869_29901[1] = 16);
} else
{var statearr_29870_29902 = state_29848__$1;(statearr_29870_29902[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 15))
{var inst_29828 = (state_29848[2]);var state_29848__$1 = state_29848;var statearr_29871_29903 = state_29848__$1;(statearr_29871_29903[2] = inst_29828);
(statearr_29871_29903[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 16))
{var inst_29810 = (state_29848[9]);var inst_29819 = cljs.core.first.call(null,inst_29810);var state_29848__$1 = state_29848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29848__$1,19,inst_29819);
} else
{if((state_val_29849 === 17))
{var state_29848__$1 = state_29848;var statearr_29872_29904 = state_29848__$1;(statearr_29872_29904[2] = null);
(statearr_29872_29904[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 18))
{var inst_29816 = (state_29848[12]);var inst_29811 = (state_29848[10]);var inst_29824 = (state_29848[2]);var inst_29825 = cljs.core.conj.call(null,inst_29811,inst_29824);var inst_29810 = inst_29816;var inst_29811__$1 = inst_29825;var state_29848__$1 = (function (){var statearr_29873 = state_29848;(statearr_29873[9] = inst_29810);
(statearr_29873[10] = inst_29811__$1);
return statearr_29873;
})();var statearr_29874_29905 = state_29848__$1;(statearr_29874_29905[2] = null);
(statearr_29874_29905[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 19))
{var inst_29821 = (state_29848[2]);var state_29848__$1 = state_29848;var statearr_29875_29906 = state_29848__$1;(statearr_29875_29906[2] = inst_29821);
(statearr_29875_29906[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 20))
{var inst_29806 = (state_29848[7]);var state_29848__$1 = state_29848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29848__$1,23,inst_29806);
} else
{if((state_val_29849 === 21))
{var state_29848__$1 = state_29848;var statearr_29876_29907 = state_29848__$1;(statearr_29876_29907[2] = null);
(statearr_29876_29907[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 22))
{var inst_29837 = (state_29848[2]);var state_29848__$1 = state_29848;var statearr_29877_29908 = state_29848__$1;(statearr_29877_29908[2] = inst_29837);
(statearr_29877_29908[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29849 === 23))
{var inst_29834 = (state_29848[2]);var state_29848__$1 = state_29848;var statearr_29878_29909 = state_29848__$1;(statearr_29878_29909[2] = inst_29834);
(statearr_29878_29909[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_29882 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29882[0] = state_machine__5507__auto__);
(statearr_29882[1] = 1);
return statearr_29882;
});
var state_machine__5507__auto____1 = (function (state_29848){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29848);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29883){if((e29883 instanceof Object))
{var ex__5510__auto__ = e29883;var statearr_29884_29910 = state_29848;(statearr_29884_29910[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29848);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29911 = state_29848;
state_29848 = G__29911;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29848){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29885 = f__5522__auto__.call(null);(statearr_29885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29885;
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
var G__29914__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__29913 = rseq;var rcomm = cljs.core.nth.call(null,vec__29913,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__29913,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__29914 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29914__delegate.call(this,req_args);};
G__29914.cljs$lang$maxFixedArity = 0;
G__29914.cljs$lang$applyTo = (function (arglist__29915){
var req_args = cljs.core.seq(arglist__29915);
return G__29914__delegate(req_args);
});
G__29914.cljs$core$IFn$_invoke$arity$variadic = G__29914__delegate;
return G__29914;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29933){var state_val_29934 = (state_29933[1]);if((state_val_29934 === 2))
{var inst_29930 = (state_29933[2]);var inst_29931 = console.log(inst_29930);var state_29933__$1 = state_29933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29933__$1,inst_29931);
} else
{if((state_val_29934 === 1))
{var state_29933__$1 = state_29933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29933__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_29938 = [null,null,null,null,null,null,null];(statearr_29938[0] = state_machine__5507__auto__);
(statearr_29938[1] = 1);
return statearr_29938;
});
var state_machine__5507__auto____1 = (function (state_29933){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29933);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29939){if((e29939 instanceof Object))
{var ex__5510__auto__ = e29939;var statearr_29940_29942 = state_29933;(statearr_29940_29942[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29933);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29939;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29943 = state_29933;
state_29933 = G__29943;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29933){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29941 = f__5522__auto__.call(null);(statearr_29941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__29944){
var f = cljs.core.first(arglist__29944);
var args = cljs.core.rest(arglist__29944);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__29947){var vec__29948 = p__29947;var k = cljs.core.nth.call(null,vec__29948,0,null);var v = cljs.core.nth.call(null,vec__29948,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__29949){
var id = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var tolerance = cljs.core.first(arglist__29949);
var opts = cljs.core.rest(arglist__29949);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__29950){
var id = cljs.core.first(arglist__29950);
var opts = cljs.core.rest(arglist__29950);
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
var constituencies__delegate = function (p__29951){var vec__29953 = p__29951;var type_ids = cljs.core.nth.call(null,vec__29953,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__29951 = null;if (arguments.length > 0) {
  p__29951 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__29951);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__29954){
var p__29951 = cljs.core.seq(arglist__29954);
return constituencies__delegate(p__29951);
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
var portfolio_companies__delegate = function (p__29955){var vec__29957 = p__29955;var type_ids = cljs.core.nth.call(null,vec__29957,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__29955 = null;if (arguments.length > 0) {
  p__29955 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__29955);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__29958){
var p__29955 = cljs.core.seq(arglist__29958);
return portfolio_companies__delegate(p__29955);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__29959){var vec__29961 = p__29959;var type_ids = cljs.core.nth.call(null,vec__29961,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__29959 = null;if (arguments.length > 0) {
  p__29959 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__29959);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__29962){
var p__29959 = cljs.core.seq(arglist__29962);
return portfolio_company_stats__delegate(p__29959);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__29963){var vec__29965 = p__29963;var type_ids = cljs.core.nth.call(null,vec__29965,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__29963 = null;if (arguments.length > 0) {
  p__29963 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__29963);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__29966){
var p__29963 = cljs.core.seq(arglist__29966);
return portfolio_company_account_stats__delegate(p__29963);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__29967){var vec__29969 = p__29967;var type_ids = cljs.core.nth.call(null,vec__29969,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__29967 = null;if (arguments.length > 0) {
  p__29967 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__29967);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__29970){
var p__29967 = cljs.core.seq(arglist__29970);
return portfolio_company_sites__delegate(p__29967);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__29971){var vec__29973 = p__29971;var type_ids = cljs.core.nth.call(null,vec__29973,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__29971 = null;if (arguments.length > 0) {
  p__29971 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__29971);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__29974){
var p__29971 = cljs.core.seq(arglist__29974);
return portfolio_company_locations__delegate(p__29971);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__29975){var vec__29977 = p__29975;var type_ids = cljs.core.nth.call(null,vec__29977,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__29975 = null;if (arguments.length > 0) {
  p__29975 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__29975);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__29978){
var p__29975 = cljs.core.seq(arglist__29978);
return portfolio_company_site_stats__delegate(p__29975);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__29979){var vec__29981 = p__29979;var type_ids = cljs.core.nth.call(null,vec__29981,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__29979 = null;if (arguments.length > 0) {
  p__29979 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__29979);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__29982){
var p__29979 = cljs.core.seq(arglist__29982);
return portfolio_company_site_account_timelines__delegate(p__29979);
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
var investor_comapnies__delegate = function (p__29983){var vec__29985 = p__29983;var type_ids = cljs.core.nth.call(null,vec__29985,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__29983 = null;if (arguments.length > 0) {
  p__29983 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__29983);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__29986){
var p__29983 = cljs.core.seq(arglist__29986);
return investor_comapnies__delegate(p__29983);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
