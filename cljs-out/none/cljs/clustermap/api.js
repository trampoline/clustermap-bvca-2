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
var GET__delegate = function (url,p__20750){var map__20752 = p__20750;var map__20752__$1 = ((cljs.core.seq_QMARK_.call(null,map__20752))?cljs.core.apply.call(null,cljs.core.hash_map,map__20752):map__20752);var raw = cljs.core.get.call(null,map__20752__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__20750 = null;if (arguments.length > 1) {
  p__20750 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20750);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20753){
var url = cljs.core.first(arglist__20753);
var p__20750 = cljs.core.rest(arglist__20753);
return GET__delegate(url,p__20750);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_20886){var state_val_20887 = (state_20886[1]);if((state_val_20887 === 1))
{var state_20886__$1 = state_20886;var statearr_20888_20924 = state_20886__$1;(statearr_20888_20924[2] = null);
(statearr_20888_20924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 2))
{var state_20886__$1 = state_20886;if(true)
{var statearr_20889_20925 = state_20886__$1;(statearr_20889_20925[1] = 4);
} else
{var statearr_20890_20926 = state_20886__$1;(statearr_20890_20926[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 3))
{var inst_20884 = (state_20886[2]);var state_20886__$1 = state_20886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20886__$1,inst_20884);
} else
{if((state_val_20887 === 4))
{var state_20886__$1 = state_20886;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20886__$1,7,ocomm);
} else
{if((state_val_20887 === 5))
{var state_20886__$1 = state_20886;var statearr_20891_20927 = state_20886__$1;(statearr_20891_20927[2] = null);
(statearr_20891_20927[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 6))
{var inst_20882 = (state_20886[2]);var state_20886__$1 = state_20886;var statearr_20892_20928 = state_20886__$1;(statearr_20892_20928[2] = inst_20882);
(statearr_20892_20928[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 7))
{var inst_20844 = (state_20886[7]);var inst_20843 = (state_20886[2]);var inst_20844__$1 = cljs.core.nth.call(null,inst_20843,0,null);var inst_20845 = cljs.core.nth.call(null,inst_20843,1,null);var inst_20846 = cljs.core.sequential_QMARK_.call(null,inst_20844__$1);var state_20886__$1 = (function (){var statearr_20893 = state_20886;(statearr_20893[7] = inst_20844__$1);
(statearr_20893[8] = inst_20845);
return statearr_20893;
})();if(inst_20846)
{var statearr_20894_20929 = state_20886__$1;(statearr_20894_20929[1] = 8);
} else
{var statearr_20895_20930 = state_20886__$1;(statearr_20895_20930[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 8))
{var inst_20844 = (state_20886[7]);var inst_20848 = inst_20844;var inst_20849 = cljs.core.PersistentVector.EMPTY;var state_20886__$1 = (function (){var statearr_20896 = state_20886;(statearr_20896[9] = inst_20849);
(statearr_20896[10] = inst_20848);
return statearr_20896;
})();var statearr_20897_20931 = state_20886__$1;(statearr_20897_20931[2] = null);
(statearr_20897_20931[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 9))
{var inst_20844 = (state_20886[7]);var state_20886__$1 = state_20886;if(cljs.core.truth_(inst_20844))
{var statearr_20898_20932 = state_20886__$1;(statearr_20898_20932[1] = 20);
} else
{var statearr_20899_20933 = state_20886__$1;(statearr_20899_20933[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 10))
{var inst_20845 = (state_20886[8]);var inst_20877 = (state_20886[2]);var inst_20878 = cljs.core.apply.call(null,handler,inst_20877,inst_20845);var state_20886__$1 = (function (){var statearr_20900 = state_20886;(statearr_20900[11] = inst_20878);
return statearr_20900;
})();var statearr_20901_20934 = state_20886__$1;(statearr_20901_20934[2] = null);
(statearr_20901_20934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 11))
{var inst_20848 = (state_20886[10]);var inst_20851 = cljs.core.empty_QMARK_.call(null,inst_20848);var state_20886__$1 = state_20886;if(inst_20851)
{var statearr_20902_20935 = state_20886__$1;(statearr_20902_20935[1] = 13);
} else
{var statearr_20903_20936 = state_20886__$1;(statearr_20903_20936[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 12))
{var inst_20868 = (state_20886[2]);var state_20886__$1 = state_20886;var statearr_20904_20937 = state_20886__$1;(statearr_20904_20937[2] = inst_20868);
(statearr_20904_20937[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 13))
{var inst_20849 = (state_20886[9]);var state_20886__$1 = state_20886;var statearr_20905_20938 = state_20886__$1;(statearr_20905_20938[2] = inst_20849);
(statearr_20905_20938[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 14))
{var inst_20848 = (state_20886[10]);var inst_20854 = cljs.core.rest.call(null,inst_20848);var inst_20855 = cljs.core.first.call(null,inst_20848);var state_20886__$1 = (function (){var statearr_20906 = state_20886;(statearr_20906[12] = inst_20854);
return statearr_20906;
})();if(cljs.core.truth_(inst_20855))
{var statearr_20907_20939 = state_20886__$1;(statearr_20907_20939[1] = 16);
} else
{var statearr_20908_20940 = state_20886__$1;(statearr_20908_20940[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 15))
{var inst_20866 = (state_20886[2]);var state_20886__$1 = state_20886;var statearr_20909_20941 = state_20886__$1;(statearr_20909_20941[2] = inst_20866);
(statearr_20909_20941[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 16))
{var inst_20848 = (state_20886[10]);var inst_20857 = cljs.core.first.call(null,inst_20848);var state_20886__$1 = state_20886;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20886__$1,19,inst_20857);
} else
{if((state_val_20887 === 17))
{var state_20886__$1 = state_20886;var statearr_20910_20942 = state_20886__$1;(statearr_20910_20942[2] = null);
(statearr_20910_20942[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 18))
{var inst_20854 = (state_20886[12]);var inst_20849 = (state_20886[9]);var inst_20862 = (state_20886[2]);var inst_20863 = cljs.core.conj.call(null,inst_20849,inst_20862);var inst_20848 = inst_20854;var inst_20849__$1 = inst_20863;var state_20886__$1 = (function (){var statearr_20911 = state_20886;(statearr_20911[9] = inst_20849__$1);
(statearr_20911[10] = inst_20848);
return statearr_20911;
})();var statearr_20912_20943 = state_20886__$1;(statearr_20912_20943[2] = null);
(statearr_20912_20943[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 19))
{var inst_20859 = (state_20886[2]);var state_20886__$1 = state_20886;var statearr_20913_20944 = state_20886__$1;(statearr_20913_20944[2] = inst_20859);
(statearr_20913_20944[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 20))
{var inst_20844 = (state_20886[7]);var state_20886__$1 = state_20886;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20886__$1,23,inst_20844);
} else
{if((state_val_20887 === 21))
{var state_20886__$1 = state_20886;var statearr_20914_20945 = state_20886__$1;(statearr_20914_20945[2] = null);
(statearr_20914_20945[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 22))
{var inst_20875 = (state_20886[2]);var state_20886__$1 = state_20886;var statearr_20915_20946 = state_20886__$1;(statearr_20915_20946[2] = inst_20875);
(statearr_20915_20946[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20887 === 23))
{var inst_20872 = (state_20886[2]);var state_20886__$1 = state_20886;var statearr_20916_20947 = state_20886__$1;(statearr_20916_20947[2] = inst_20872);
(statearr_20916_20947[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_20920 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20920[0] = state_machine__5548__auto__);
(statearr_20920[1] = 1);
return statearr_20920;
});
var state_machine__5548__auto____1 = (function (state_20886){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_20886);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e20921){if((e20921 instanceof Object))
{var ex__5551__auto__ = e20921;var statearr_20922_20948 = state_20886;(statearr_20922_20948[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20886);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20921;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20949 = state_20886;
state_20886 = G__20949;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_20886){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_20886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_20923 = f__5563__auto__.call(null);(statearr_20923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_20923;
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
var G__20952__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20951 = rseq;var rcomm = cljs.core.nth.call(null,vec__20951,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__20951,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20952 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20952__delegate.call(this,req_args);};
G__20952.cljs$lang$maxFixedArity = 0;
G__20952.cljs$lang$applyTo = (function (arglist__20953){
var req_args = cljs.core.seq(arglist__20953);
return G__20952__delegate(req_args);
});
G__20952.cljs$core$IFn$_invoke$arity$variadic = G__20952__delegate;
return G__20952;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_20971){var state_val_20972 = (state_20971[1]);if((state_val_20972 === 2))
{var inst_20968 = (state_20971[2]);var inst_20969 = console.log(inst_20968);var state_20971__$1 = state_20971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20971__$1,inst_20969);
} else
{if((state_val_20972 === 1))
{var state_20971__$1 = state_20971;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20971__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_20976 = [null,null,null,null,null,null,null];(statearr_20976[0] = state_machine__5548__auto__);
(statearr_20976[1] = 1);
return statearr_20976;
});
var state_machine__5548__auto____1 = (function (state_20971){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_20971);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e20977){if((e20977 instanceof Object))
{var ex__5551__auto__ = e20977;var statearr_20978_20980 = state_20971;(statearr_20978_20980[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20971);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20977;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20981 = state_20971;
state_20971 = G__20981;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_20971){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_20971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_20979 = f__5563__auto__.call(null);(statearr_20979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_20979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20982){
var f = cljs.core.first(arglist__20982);
var args = cljs.core.rest(arglist__20982);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__20985){var vec__20986 = p__20985;var k = cljs.core.nth.call(null,vec__20986,0,null);var v = cljs.core.nth.call(null,vec__20986,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20987){
var id = cljs.core.first(arglist__20987);
arglist__20987 = cljs.core.next(arglist__20987);
var tolerance = cljs.core.first(arglist__20987);
var opts = cljs.core.rest(arglist__20987);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20988){
var id = cljs.core.first(arglist__20988);
var opts = cljs.core.rest(arglist__20988);
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
var portfolio_company_sites__delegate = function (p__20989){var vec__20991 = p__20989;var type_ids = cljs.core.nth.call(null,vec__20991,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20989 = null;if (arguments.length > 0) {
  p__20989 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20989);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20992){
var p__20989 = cljs.core.seq(arglist__20992);
return portfolio_company_sites__delegate(p__20989);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__20993){var vec__20995 = p__20993;var type_ids = cljs.core.nth.call(null,vec__20995,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__20993 = null;if (arguments.length > 0) {
  p__20993 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__20993);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__20996){
var p__20993 = cljs.core.seq(arglist__20996);
return portfolio_company_sites_by_company__delegate(p__20993);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20997){var vec__20999 = p__20997;var type_ids = cljs.core.nth.call(null,vec__20999,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20997 = null;if (arguments.length > 0) {
  p__20997 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20997);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__21000){
var p__20997 = cljs.core.seq(arglist__21000);
return portfolio_company_locations__delegate(p__20997);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__21001){var vec__21003 = p__21001;var type_ids = cljs.core.nth.call(null,vec__21003,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__21001 = null;if (arguments.length > 0) {
  p__21001 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__21001);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__21004){
var p__21001 = cljs.core.seq(arglist__21004);
return portfolio_company_site_stats__delegate(p__21001);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__21005){var vec__21007 = p__21005;var type_ids = cljs.core.nth.call(null,vec__21007,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__21005 = null;if (arguments.length > 0) {
  p__21005 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__21005);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__21008){
var p__21005 = cljs.core.seq(arglist__21008);
return portfolio_company_site_account_timelines__delegate(p__21005);
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
var investment_account_timelines__delegate = function (p__21009){var vec__21011 = p__21009;var type_ids = cljs.core.nth.call(null,vec__21011,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__21009 = null;if (arguments.length > 0) {
  p__21009 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__21009);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__21012){
var p__21009 = cljs.core.seq(arglist__21012);
return investment_account_timelines__delegate(p__21009);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__21013){var vec__21015 = p__21013;var type_ids = cljs.core.nth.call(null,vec__21015,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__21013 = null;if (arguments.length > 0) {
  p__21013 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__21013);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__21016){
var p__21013 = cljs.core.seq(arglist__21016);
return investment_stats__delegate(p__21013);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__21017){var vec__21019 = p__21017;var type_ids = cljs.core.nth.call(null,vec__21019,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__21017 = null;if (arguments.length > 0) {
  p__21017 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__21017);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__21020){
var p__21017 = cljs.core.seq(arglist__21020);
return investment_aggs__delegate(p__21017);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__21021){var vec__21023 = p__21021;var type_ids = cljs.core.nth.call(null,vec__21023,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__21021 = null;if (arguments.length > 0) {
  p__21021 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__21021);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__21024){
var p__21021 = cljs.core.seq(arglist__21024);
return investments__delegate(p__21021);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map