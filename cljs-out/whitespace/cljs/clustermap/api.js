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
var GET__delegate = function (url,p__30956){var map__30958 = p__30956;var map__30958__$1 = ((cljs.core.seq_QMARK_.call(null,map__30958))?cljs.core.apply.call(null,cljs.core.hash_map,map__30958):map__30958);var raw = cljs.core.get.call(null,map__30958__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__30956 = null;if (arguments.length > 1) {
  p__30956 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__30956);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__30959){
var url = cljs.core.first(arglist__30959);
var p__30956 = cljs.core.rest(arglist__30959);
return GET__delegate(url,p__30956);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31092){var state_val_31093 = (state_31092[1]);if((state_val_31093 === 1))
{var state_31092__$1 = state_31092;var statearr_31094_31130 = state_31092__$1;(statearr_31094_31130[2] = null);
(statearr_31094_31130[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 2))
{var state_31092__$1 = state_31092;if(true)
{var statearr_31095_31131 = state_31092__$1;(statearr_31095_31131[1] = 4);
} else
{var statearr_31096_31132 = state_31092__$1;(statearr_31096_31132[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 3))
{var inst_31090 = (state_31092[2]);var state_31092__$1 = state_31092;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31092__$1,inst_31090);
} else
{if((state_val_31093 === 4))
{var state_31092__$1 = state_31092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31092__$1,7,ocomm);
} else
{if((state_val_31093 === 5))
{var state_31092__$1 = state_31092;var statearr_31097_31133 = state_31092__$1;(statearr_31097_31133[2] = null);
(statearr_31097_31133[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 6))
{var inst_31088 = (state_31092[2]);var state_31092__$1 = state_31092;var statearr_31098_31134 = state_31092__$1;(statearr_31098_31134[2] = inst_31088);
(statearr_31098_31134[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 7))
{var inst_31050 = (state_31092[7]);var inst_31049 = (state_31092[2]);var inst_31050__$1 = cljs.core.nth.call(null,inst_31049,0,null);var inst_31051 = cljs.core.nth.call(null,inst_31049,1,null);var inst_31052 = cljs.core.sequential_QMARK_.call(null,inst_31050__$1);var state_31092__$1 = (function (){var statearr_31099 = state_31092;(statearr_31099[7] = inst_31050__$1);
(statearr_31099[8] = inst_31051);
return statearr_31099;
})();if(inst_31052)
{var statearr_31100_31135 = state_31092__$1;(statearr_31100_31135[1] = 8);
} else
{var statearr_31101_31136 = state_31092__$1;(statearr_31101_31136[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 8))
{var inst_31050 = (state_31092[7]);var inst_31054 = inst_31050;var inst_31055 = cljs.core.PersistentVector.EMPTY;var state_31092__$1 = (function (){var statearr_31102 = state_31092;(statearr_31102[9] = inst_31055);
(statearr_31102[10] = inst_31054);
return statearr_31102;
})();var statearr_31103_31137 = state_31092__$1;(statearr_31103_31137[2] = null);
(statearr_31103_31137[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 9))
{var inst_31050 = (state_31092[7]);var state_31092__$1 = state_31092;if(cljs.core.truth_(inst_31050))
{var statearr_31104_31138 = state_31092__$1;(statearr_31104_31138[1] = 20);
} else
{var statearr_31105_31139 = state_31092__$1;(statearr_31105_31139[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 10))
{var inst_31051 = (state_31092[8]);var inst_31083 = (state_31092[2]);var inst_31084 = cljs.core.apply.call(null,handler,inst_31083,inst_31051);var state_31092__$1 = (function (){var statearr_31106 = state_31092;(statearr_31106[11] = inst_31084);
return statearr_31106;
})();var statearr_31107_31140 = state_31092__$1;(statearr_31107_31140[2] = null);
(statearr_31107_31140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 11))
{var inst_31054 = (state_31092[10]);var inst_31057 = cljs.core.empty_QMARK_.call(null,inst_31054);var state_31092__$1 = state_31092;if(inst_31057)
{var statearr_31108_31141 = state_31092__$1;(statearr_31108_31141[1] = 13);
} else
{var statearr_31109_31142 = state_31092__$1;(statearr_31109_31142[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 12))
{var inst_31074 = (state_31092[2]);var state_31092__$1 = state_31092;var statearr_31110_31143 = state_31092__$1;(statearr_31110_31143[2] = inst_31074);
(statearr_31110_31143[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 13))
{var inst_31055 = (state_31092[9]);var state_31092__$1 = state_31092;var statearr_31111_31144 = state_31092__$1;(statearr_31111_31144[2] = inst_31055);
(statearr_31111_31144[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 14))
{var inst_31054 = (state_31092[10]);var inst_31060 = cljs.core.rest.call(null,inst_31054);var inst_31061 = cljs.core.first.call(null,inst_31054);var state_31092__$1 = (function (){var statearr_31112 = state_31092;(statearr_31112[12] = inst_31060);
return statearr_31112;
})();if(cljs.core.truth_(inst_31061))
{var statearr_31113_31145 = state_31092__$1;(statearr_31113_31145[1] = 16);
} else
{var statearr_31114_31146 = state_31092__$1;(statearr_31114_31146[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 15))
{var inst_31072 = (state_31092[2]);var state_31092__$1 = state_31092;var statearr_31115_31147 = state_31092__$1;(statearr_31115_31147[2] = inst_31072);
(statearr_31115_31147[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 16))
{var inst_31054 = (state_31092[10]);var inst_31063 = cljs.core.first.call(null,inst_31054);var state_31092__$1 = state_31092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31092__$1,19,inst_31063);
} else
{if((state_val_31093 === 17))
{var state_31092__$1 = state_31092;var statearr_31116_31148 = state_31092__$1;(statearr_31116_31148[2] = null);
(statearr_31116_31148[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 18))
{var inst_31060 = (state_31092[12]);var inst_31055 = (state_31092[9]);var inst_31068 = (state_31092[2]);var inst_31069 = cljs.core.conj.call(null,inst_31055,inst_31068);var inst_31054 = inst_31060;var inst_31055__$1 = inst_31069;var state_31092__$1 = (function (){var statearr_31117 = state_31092;(statearr_31117[9] = inst_31055__$1);
(statearr_31117[10] = inst_31054);
return statearr_31117;
})();var statearr_31118_31149 = state_31092__$1;(statearr_31118_31149[2] = null);
(statearr_31118_31149[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 19))
{var inst_31065 = (state_31092[2]);var state_31092__$1 = state_31092;var statearr_31119_31150 = state_31092__$1;(statearr_31119_31150[2] = inst_31065);
(statearr_31119_31150[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 20))
{var inst_31050 = (state_31092[7]);var state_31092__$1 = state_31092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31092__$1,23,inst_31050);
} else
{if((state_val_31093 === 21))
{var state_31092__$1 = state_31092;var statearr_31120_31151 = state_31092__$1;(statearr_31120_31151[2] = null);
(statearr_31120_31151[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 22))
{var inst_31081 = (state_31092[2]);var state_31092__$1 = state_31092;var statearr_31121_31152 = state_31092__$1;(statearr_31121_31152[2] = inst_31081);
(statearr_31121_31152[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31093 === 23))
{var inst_31078 = (state_31092[2]);var state_31092__$1 = state_31092;var statearr_31122_31153 = state_31092__$1;(statearr_31122_31153[2] = inst_31078);
(statearr_31122_31153[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_31126 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31126[0] = state_machine__5507__auto__);
(statearr_31126[1] = 1);
return statearr_31126;
});
var state_machine__5507__auto____1 = (function (state_31092){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31092);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31127){if((e31127 instanceof Object))
{var ex__5510__auto__ = e31127;var statearr_31128_31154 = state_31092;(statearr_31128_31154[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31092);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31155 = state_31092;
state_31092 = G__31155;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31092){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31129 = f__5522__auto__.call(null);(statearr_31129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31129;
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
var G__31158__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__31157 = rseq;var rcomm = cljs.core.nth.call(null,vec__31157,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__31157,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__31158 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31158__delegate.call(this,req_args);};
G__31158.cljs$lang$maxFixedArity = 0;
G__31158.cljs$lang$applyTo = (function (arglist__31159){
var req_args = cljs.core.seq(arglist__31159);
return G__31158__delegate(req_args);
});
G__31158.cljs$core$IFn$_invoke$arity$variadic = G__31158__delegate;
return G__31158;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31177){var state_val_31178 = (state_31177[1]);if((state_val_31178 === 2))
{var inst_31174 = (state_31177[2]);var inst_31175 = console.log(inst_31174);var state_31177__$1 = state_31177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31177__$1,inst_31175);
} else
{if((state_val_31178 === 1))
{var state_31177__$1 = state_31177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31177__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_31182 = [null,null,null,null,null,null,null];(statearr_31182[0] = state_machine__5507__auto__);
(statearr_31182[1] = 1);
return statearr_31182;
});
var state_machine__5507__auto____1 = (function (state_31177){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31177);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31183){if((e31183 instanceof Object))
{var ex__5510__auto__ = e31183;var statearr_31184_31186 = state_31177;(statearr_31184_31186[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31177);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31183;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31187 = state_31177;
state_31177 = G__31187;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31177){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31185 = f__5522__auto__.call(null);(statearr_31185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31185;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__31188){
var f = cljs.core.first(arglist__31188);
var args = cljs.core.rest(arglist__31188);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__31191){var vec__31192 = p__31191;var k = cljs.core.nth.call(null,vec__31192,0,null);var v = cljs.core.nth.call(null,vec__31192,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__31193){
var id = cljs.core.first(arglist__31193);
arglist__31193 = cljs.core.next(arglist__31193);
var tolerance = cljs.core.first(arglist__31193);
var opts = cljs.core.rest(arglist__31193);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__31194){
var id = cljs.core.first(arglist__31194);
var opts = cljs.core.rest(arglist__31194);
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
var constituencies__delegate = function (p__31195){var vec__31197 = p__31195;var type_ids = cljs.core.nth.call(null,vec__31197,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__31195 = null;if (arguments.length > 0) {
  p__31195 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__31195);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__31198){
var p__31195 = cljs.core.seq(arglist__31198);
return constituencies__delegate(p__31195);
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
var portfolio_companies__delegate = function (p__31199){var vec__31201 = p__31199;var type_ids = cljs.core.nth.call(null,vec__31201,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null));return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_companies = function (var_args){
var p__31199 = null;if (arguments.length > 0) {
  p__31199 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__31199);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__31202){
var p__31199 = cljs.core.seq(arglist__31202);
return portfolio_companies__delegate(p__31199);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__31203){var vec__31205 = p__31203;var type_ids = cljs.core.nth.call(null,vec__31205,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__31203 = null;if (arguments.length > 0) {
  p__31203 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__31203);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__31206){
var p__31203 = cljs.core.seq(arglist__31206);
return portfolio_company_stats__delegate(p__31203);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__31207){var vec__31209 = p__31207;var type_ids = cljs.core.nth.call(null,vec__31209,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__31207 = null;if (arguments.length > 0) {
  p__31207 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__31207);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__31210){
var p__31207 = cljs.core.seq(arglist__31210);
return portfolio_company_account_stats__delegate(p__31207);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__31211){var vec__31213 = p__31211;var type_ids = cljs.core.nth.call(null,vec__31213,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__31211 = null;if (arguments.length > 0) {
  p__31211 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__31211);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__31214){
var p__31211 = cljs.core.seq(arglist__31214);
return portfolio_company_sites__delegate(p__31211);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__31215){var vec__31217 = p__31215;var type_ids = cljs.core.nth.call(null,vec__31217,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__31215 = null;if (arguments.length > 0) {
  p__31215 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__31215);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__31218){
var p__31215 = cljs.core.seq(arglist__31218);
return portfolio_company_sites_by_company__delegate(p__31215);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__31219){var vec__31221 = p__31219;var type_ids = cljs.core.nth.call(null,vec__31221,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__31219 = null;if (arguments.length > 0) {
  p__31219 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__31219);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__31222){
var p__31219 = cljs.core.seq(arglist__31222);
return portfolio_company_locations__delegate(p__31219);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__31223){var vec__31225 = p__31223;var type_ids = cljs.core.nth.call(null,vec__31225,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__31223 = null;if (arguments.length > 0) {
  p__31223 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__31223);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__31226){
var p__31223 = cljs.core.seq(arglist__31226);
return portfolio_company_site_stats__delegate(p__31223);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__31227){var vec__31229 = p__31227;var type_ids = cljs.core.nth.call(null,vec__31229,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__31227 = null;if (arguments.length > 0) {
  p__31227 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__31227);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__31230){
var p__31227 = cljs.core.seq(arglist__31230);
return portfolio_company_site_account_timelines__delegate(p__31227);
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
var investor_comapnies__delegate = function (p__31231){var vec__31233 = p__31231;var type_ids = cljs.core.nth.call(null,vec__31233,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__31231 = null;if (arguments.length > 0) {
  p__31231 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__31231);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__31234){
var p__31231 = cljs.core.seq(arglist__31234);
return investor_comapnies__delegate(p__31231);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
