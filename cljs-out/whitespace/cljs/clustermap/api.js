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
var GET__delegate = function (url,p__42752){var map__42754 = p__42752;var map__42754__$1 = ((cljs.core.seq_QMARK_.call(null,map__42754))?cljs.core.apply.call(null,cljs.core.hash_map,map__42754):map__42754);var raw = cljs.core.get.call(null,map__42754__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__42752 = null;if (arguments.length > 1) {
  p__42752 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__42752);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__42755){
var url = cljs.core.first(arglist__42755);
var p__42752 = cljs.core.rest(arglist__42755);
return GET__delegate(url,p__42752);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_42888){var state_val_42889 = (state_42888[1]);if((state_val_42889 === 1))
{var state_42888__$1 = state_42888;var statearr_42890_42926 = state_42888__$1;(statearr_42890_42926[2] = null);
(statearr_42890_42926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 2))
{var state_42888__$1 = state_42888;if(true)
{var statearr_42891_42927 = state_42888__$1;(statearr_42891_42927[1] = 4);
} else
{var statearr_42892_42928 = state_42888__$1;(statearr_42892_42928[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 3))
{var inst_42886 = (state_42888[2]);var state_42888__$1 = state_42888;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42888__$1,inst_42886);
} else
{if((state_val_42889 === 4))
{var state_42888__$1 = state_42888;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42888__$1,7,ocomm);
} else
{if((state_val_42889 === 5))
{var state_42888__$1 = state_42888;var statearr_42893_42929 = state_42888__$1;(statearr_42893_42929[2] = null);
(statearr_42893_42929[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 6))
{var inst_42884 = (state_42888[2]);var state_42888__$1 = state_42888;var statearr_42894_42930 = state_42888__$1;(statearr_42894_42930[2] = inst_42884);
(statearr_42894_42930[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 7))
{var inst_42846 = (state_42888[7]);var inst_42845 = (state_42888[2]);var inst_42846__$1 = cljs.core.nth.call(null,inst_42845,0,null);var inst_42847 = cljs.core.nth.call(null,inst_42845,1,null);var inst_42848 = cljs.core.sequential_QMARK_.call(null,inst_42846__$1);var state_42888__$1 = (function (){var statearr_42895 = state_42888;(statearr_42895[7] = inst_42846__$1);
(statearr_42895[8] = inst_42847);
return statearr_42895;
})();if(inst_42848)
{var statearr_42896_42931 = state_42888__$1;(statearr_42896_42931[1] = 8);
} else
{var statearr_42897_42932 = state_42888__$1;(statearr_42897_42932[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 8))
{var inst_42846 = (state_42888[7]);var inst_42850 = inst_42846;var inst_42851 = cljs.core.PersistentVector.EMPTY;var state_42888__$1 = (function (){var statearr_42898 = state_42888;(statearr_42898[9] = inst_42850);
(statearr_42898[10] = inst_42851);
return statearr_42898;
})();var statearr_42899_42933 = state_42888__$1;(statearr_42899_42933[2] = null);
(statearr_42899_42933[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 9))
{var inst_42846 = (state_42888[7]);var state_42888__$1 = state_42888;if(cljs.core.truth_(inst_42846))
{var statearr_42900_42934 = state_42888__$1;(statearr_42900_42934[1] = 20);
} else
{var statearr_42901_42935 = state_42888__$1;(statearr_42901_42935[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 10))
{var inst_42847 = (state_42888[8]);var inst_42879 = (state_42888[2]);var inst_42880 = cljs.core.apply.call(null,handler,inst_42879,inst_42847);var state_42888__$1 = (function (){var statearr_42902 = state_42888;(statearr_42902[11] = inst_42880);
return statearr_42902;
})();var statearr_42903_42936 = state_42888__$1;(statearr_42903_42936[2] = null);
(statearr_42903_42936[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 11))
{var inst_42850 = (state_42888[9]);var inst_42853 = cljs.core.empty_QMARK_.call(null,inst_42850);var state_42888__$1 = state_42888;if(inst_42853)
{var statearr_42904_42937 = state_42888__$1;(statearr_42904_42937[1] = 13);
} else
{var statearr_42905_42938 = state_42888__$1;(statearr_42905_42938[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 12))
{var inst_42870 = (state_42888[2]);var state_42888__$1 = state_42888;var statearr_42906_42939 = state_42888__$1;(statearr_42906_42939[2] = inst_42870);
(statearr_42906_42939[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 13))
{var inst_42851 = (state_42888[10]);var state_42888__$1 = state_42888;var statearr_42907_42940 = state_42888__$1;(statearr_42907_42940[2] = inst_42851);
(statearr_42907_42940[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 14))
{var inst_42850 = (state_42888[9]);var inst_42856 = cljs.core.rest.call(null,inst_42850);var inst_42857 = cljs.core.first.call(null,inst_42850);var state_42888__$1 = (function (){var statearr_42908 = state_42888;(statearr_42908[12] = inst_42856);
return statearr_42908;
})();if(cljs.core.truth_(inst_42857))
{var statearr_42909_42941 = state_42888__$1;(statearr_42909_42941[1] = 16);
} else
{var statearr_42910_42942 = state_42888__$1;(statearr_42910_42942[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 15))
{var inst_42868 = (state_42888[2]);var state_42888__$1 = state_42888;var statearr_42911_42943 = state_42888__$1;(statearr_42911_42943[2] = inst_42868);
(statearr_42911_42943[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 16))
{var inst_42850 = (state_42888[9]);var inst_42859 = cljs.core.first.call(null,inst_42850);var state_42888__$1 = state_42888;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42888__$1,19,inst_42859);
} else
{if((state_val_42889 === 17))
{var state_42888__$1 = state_42888;var statearr_42912_42944 = state_42888__$1;(statearr_42912_42944[2] = null);
(statearr_42912_42944[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 18))
{var inst_42851 = (state_42888[10]);var inst_42856 = (state_42888[12]);var inst_42864 = (state_42888[2]);var inst_42865 = cljs.core.conj.call(null,inst_42851,inst_42864);var inst_42850 = inst_42856;var inst_42851__$1 = inst_42865;var state_42888__$1 = (function (){var statearr_42913 = state_42888;(statearr_42913[9] = inst_42850);
(statearr_42913[10] = inst_42851__$1);
return statearr_42913;
})();var statearr_42914_42945 = state_42888__$1;(statearr_42914_42945[2] = null);
(statearr_42914_42945[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 19))
{var inst_42861 = (state_42888[2]);var state_42888__$1 = state_42888;var statearr_42915_42946 = state_42888__$1;(statearr_42915_42946[2] = inst_42861);
(statearr_42915_42946[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 20))
{var inst_42846 = (state_42888[7]);var state_42888__$1 = state_42888;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42888__$1,23,inst_42846);
} else
{if((state_val_42889 === 21))
{var state_42888__$1 = state_42888;var statearr_42916_42947 = state_42888__$1;(statearr_42916_42947[2] = null);
(statearr_42916_42947[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 22))
{var inst_42877 = (state_42888[2]);var state_42888__$1 = state_42888;var statearr_42917_42948 = state_42888__$1;(statearr_42917_42948[2] = inst_42877);
(statearr_42917_42948[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42889 === 23))
{var inst_42874 = (state_42888[2]);var state_42888__$1 = state_42888;var statearr_42918_42949 = state_42888__$1;(statearr_42918_42949[2] = inst_42874);
(statearr_42918_42949[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_42922 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42922[0] = state_machine__5548__auto__);
(statearr_42922[1] = 1);
return statearr_42922;
});
var state_machine__5548__auto____1 = (function (state_42888){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_42888);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e42923){if((e42923 instanceof Object))
{var ex__5551__auto__ = e42923;var statearr_42924_42950 = state_42888;(statearr_42924_42950[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42888);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42923;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42951 = state_42888;
state_42888 = G__42951;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_42888){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_42888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_42925 = f__5563__auto__.call(null);(statearr_42925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_42925;
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
var G__42954__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__42953 = rseq;var rcomm = cljs.core.nth.call(null,vec__42953,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__42953,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__42954 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__42954__delegate.call(this,req_args);};
G__42954.cljs$lang$maxFixedArity = 0;
G__42954.cljs$lang$applyTo = (function (arglist__42955){
var req_args = cljs.core.seq(arglist__42955);
return G__42954__delegate(req_args);
});
G__42954.cljs$core$IFn$_invoke$arity$variadic = G__42954__delegate;
return G__42954;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_42973){var state_val_42974 = (state_42973[1]);if((state_val_42974 === 2))
{var inst_42970 = (state_42973[2]);var inst_42971 = console.log(inst_42970);var state_42973__$1 = state_42973;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42973__$1,inst_42971);
} else
{if((state_val_42974 === 1))
{var state_42973__$1 = state_42973;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42973__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_42978 = [null,null,null,null,null,null,null];(statearr_42978[0] = state_machine__5548__auto__);
(statearr_42978[1] = 1);
return statearr_42978;
});
var state_machine__5548__auto____1 = (function (state_42973){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_42973);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e42979){if((e42979 instanceof Object))
{var ex__5551__auto__ = e42979;var statearr_42980_42982 = state_42973;(statearr_42980_42982[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42973);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42979;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42983 = state_42973;
state_42973 = G__42983;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_42973){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_42973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_42981 = f__5563__auto__.call(null);(statearr_42981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_42981;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__42984){
var f = cljs.core.first(arglist__42984);
var args = cljs.core.rest(arglist__42984);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__42987){var vec__42988 = p__42987;var k = cljs.core.nth.call(null,vec__42988,0,null);var v = cljs.core.nth.call(null,vec__42988,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__42989){
var id = cljs.core.first(arglist__42989);
arglist__42989 = cljs.core.next(arglist__42989);
var tolerance = cljs.core.first(arglist__42989);
var opts = cljs.core.rest(arglist__42989);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__42990){
var id = cljs.core.first(arglist__42990);
var opts = cljs.core.rest(arglist__42990);
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
var portfolio_company_sites__delegate = function (p__42991){var vec__42993 = p__42991;var type_ids = cljs.core.nth.call(null,vec__42993,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__42991 = null;if (arguments.length > 0) {
  p__42991 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__42991);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__42994){
var p__42991 = cljs.core.seq(arglist__42994);
return portfolio_company_sites__delegate(p__42991);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__42995){var vec__42997 = p__42995;var type_ids = cljs.core.nth.call(null,vec__42997,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__42995 = null;if (arguments.length > 0) {
  p__42995 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__42995);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__42998){
var p__42995 = cljs.core.seq(arglist__42998);
return portfolio_company_sites_by_company__delegate(p__42995);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__42999){var vec__43001 = p__42999;var type_ids = cljs.core.nth.call(null,vec__43001,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__42999 = null;if (arguments.length > 0) {
  p__42999 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__42999);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__43002){
var p__42999 = cljs.core.seq(arglist__43002);
return portfolio_company_locations__delegate(p__42999);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__43003){var vec__43005 = p__43003;var type_ids = cljs.core.nth.call(null,vec__43005,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__43003 = null;if (arguments.length > 0) {
  p__43003 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__43003);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__43006){
var p__43003 = cljs.core.seq(arglist__43006);
return portfolio_company_site_stats__delegate(p__43003);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__43007){var vec__43009 = p__43007;var type_ids = cljs.core.nth.call(null,vec__43009,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__43007 = null;if (arguments.length > 0) {
  p__43007 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__43007);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__43010){
var p__43007 = cljs.core.seq(arglist__43010);
return portfolio_company_site_account_timelines__delegate(p__43007);
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
var investment_account_timelines__delegate = function (p__43011){var vec__43013 = p__43011;var type_ids = cljs.core.nth.call(null,vec__43013,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__43011 = null;if (arguments.length > 0) {
  p__43011 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__43011);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__43014){
var p__43011 = cljs.core.seq(arglist__43014);
return investment_account_timelines__delegate(p__43011);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__43015){var vec__43017 = p__43015;var type_ids = cljs.core.nth.call(null,vec__43017,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__43015 = null;if (arguments.length > 0) {
  p__43015 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__43015);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__43018){
var p__43015 = cljs.core.seq(arglist__43018);
return investment_stats__delegate(p__43015);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__43019){var vec__43021 = p__43019;var type_ids = cljs.core.nth.call(null,vec__43021,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__43019 = null;if (arguments.length > 0) {
  p__43019 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__43019);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__43022){
var p__43019 = cljs.core.seq(arglist__43022);
return investment_aggs__delegate(p__43019);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__43023){var vec__43025 = p__43023;var type_ids = cljs.core.nth.call(null,vec__43025,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__43023 = null;if (arguments.length > 0) {
  p__43023 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__43023);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__43026){
var p__43023 = cljs.core.seq(arglist__43026);
return investments__delegate(p__43023);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
