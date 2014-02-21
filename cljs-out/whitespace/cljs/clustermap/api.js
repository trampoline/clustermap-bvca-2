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
var GET__delegate = function (url,p__30964){var map__30966 = p__30964;var map__30966__$1 = ((cljs.core.seq_QMARK_.call(null,map__30966))?cljs.core.apply.call(null,cljs.core.hash_map,map__30966):map__30966);var raw = cljs.core.get.call(null,map__30966__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__30964 = null;if (arguments.length > 1) {
  p__30964 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__30964);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__30967){
var url = cljs.core.first(arglist__30967);
var p__30964 = cljs.core.rest(arglist__30967);
return GET__delegate(url,p__30964);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31100){var state_val_31101 = (state_31100[1]);if((state_val_31101 === 1))
{var state_31100__$1 = state_31100;var statearr_31102_31138 = state_31100__$1;(statearr_31102_31138[2] = null);
(statearr_31102_31138[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 2))
{var state_31100__$1 = state_31100;if(true)
{var statearr_31103_31139 = state_31100__$1;(statearr_31103_31139[1] = 4);
} else
{var statearr_31104_31140 = state_31100__$1;(statearr_31104_31140[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 3))
{var inst_31098 = (state_31100[2]);var state_31100__$1 = state_31100;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31100__$1,inst_31098);
} else
{if((state_val_31101 === 4))
{var state_31100__$1 = state_31100;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31100__$1,7,ocomm);
} else
{if((state_val_31101 === 5))
{var state_31100__$1 = state_31100;var statearr_31105_31141 = state_31100__$1;(statearr_31105_31141[2] = null);
(statearr_31105_31141[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 6))
{var inst_31096 = (state_31100[2]);var state_31100__$1 = state_31100;var statearr_31106_31142 = state_31100__$1;(statearr_31106_31142[2] = inst_31096);
(statearr_31106_31142[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 7))
{var inst_31058 = (state_31100[7]);var inst_31057 = (state_31100[2]);var inst_31058__$1 = cljs.core.nth.call(null,inst_31057,0,null);var inst_31059 = cljs.core.nth.call(null,inst_31057,1,null);var inst_31060 = cljs.core.sequential_QMARK_.call(null,inst_31058__$1);var state_31100__$1 = (function (){var statearr_31107 = state_31100;(statearr_31107[7] = inst_31058__$1);
(statearr_31107[8] = inst_31059);
return statearr_31107;
})();if(inst_31060)
{var statearr_31108_31143 = state_31100__$1;(statearr_31108_31143[1] = 8);
} else
{var statearr_31109_31144 = state_31100__$1;(statearr_31109_31144[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 8))
{var inst_31058 = (state_31100[7]);var inst_31062 = inst_31058;var inst_31063 = cljs.core.PersistentVector.EMPTY;var state_31100__$1 = (function (){var statearr_31110 = state_31100;(statearr_31110[9] = inst_31063);
(statearr_31110[10] = inst_31062);
return statearr_31110;
})();var statearr_31111_31145 = state_31100__$1;(statearr_31111_31145[2] = null);
(statearr_31111_31145[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 9))
{var inst_31058 = (state_31100[7]);var state_31100__$1 = state_31100;if(cljs.core.truth_(inst_31058))
{var statearr_31112_31146 = state_31100__$1;(statearr_31112_31146[1] = 20);
} else
{var statearr_31113_31147 = state_31100__$1;(statearr_31113_31147[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 10))
{var inst_31059 = (state_31100[8]);var inst_31091 = (state_31100[2]);var inst_31092 = cljs.core.apply.call(null,handler,inst_31091,inst_31059);var state_31100__$1 = (function (){var statearr_31114 = state_31100;(statearr_31114[11] = inst_31092);
return statearr_31114;
})();var statearr_31115_31148 = state_31100__$1;(statearr_31115_31148[2] = null);
(statearr_31115_31148[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 11))
{var inst_31062 = (state_31100[10]);var inst_31065 = cljs.core.empty_QMARK_.call(null,inst_31062);var state_31100__$1 = state_31100;if(inst_31065)
{var statearr_31116_31149 = state_31100__$1;(statearr_31116_31149[1] = 13);
} else
{var statearr_31117_31150 = state_31100__$1;(statearr_31117_31150[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 12))
{var inst_31082 = (state_31100[2]);var state_31100__$1 = state_31100;var statearr_31118_31151 = state_31100__$1;(statearr_31118_31151[2] = inst_31082);
(statearr_31118_31151[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 13))
{var inst_31063 = (state_31100[9]);var state_31100__$1 = state_31100;var statearr_31119_31152 = state_31100__$1;(statearr_31119_31152[2] = inst_31063);
(statearr_31119_31152[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 14))
{var inst_31062 = (state_31100[10]);var inst_31068 = cljs.core.rest.call(null,inst_31062);var inst_31069 = cljs.core.first.call(null,inst_31062);var state_31100__$1 = (function (){var statearr_31120 = state_31100;(statearr_31120[12] = inst_31068);
return statearr_31120;
})();if(cljs.core.truth_(inst_31069))
{var statearr_31121_31153 = state_31100__$1;(statearr_31121_31153[1] = 16);
} else
{var statearr_31122_31154 = state_31100__$1;(statearr_31122_31154[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 15))
{var inst_31080 = (state_31100[2]);var state_31100__$1 = state_31100;var statearr_31123_31155 = state_31100__$1;(statearr_31123_31155[2] = inst_31080);
(statearr_31123_31155[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 16))
{var inst_31062 = (state_31100[10]);var inst_31071 = cljs.core.first.call(null,inst_31062);var state_31100__$1 = state_31100;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31100__$1,19,inst_31071);
} else
{if((state_val_31101 === 17))
{var state_31100__$1 = state_31100;var statearr_31124_31156 = state_31100__$1;(statearr_31124_31156[2] = null);
(statearr_31124_31156[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 18))
{var inst_31068 = (state_31100[12]);var inst_31063 = (state_31100[9]);var inst_31076 = (state_31100[2]);var inst_31077 = cljs.core.conj.call(null,inst_31063,inst_31076);var inst_31062 = inst_31068;var inst_31063__$1 = inst_31077;var state_31100__$1 = (function (){var statearr_31125 = state_31100;(statearr_31125[9] = inst_31063__$1);
(statearr_31125[10] = inst_31062);
return statearr_31125;
})();var statearr_31126_31157 = state_31100__$1;(statearr_31126_31157[2] = null);
(statearr_31126_31157[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 19))
{var inst_31073 = (state_31100[2]);var state_31100__$1 = state_31100;var statearr_31127_31158 = state_31100__$1;(statearr_31127_31158[2] = inst_31073);
(statearr_31127_31158[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 20))
{var inst_31058 = (state_31100[7]);var state_31100__$1 = state_31100;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31100__$1,23,inst_31058);
} else
{if((state_val_31101 === 21))
{var state_31100__$1 = state_31100;var statearr_31128_31159 = state_31100__$1;(statearr_31128_31159[2] = null);
(statearr_31128_31159[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 22))
{var inst_31089 = (state_31100[2]);var state_31100__$1 = state_31100;var statearr_31129_31160 = state_31100__$1;(statearr_31129_31160[2] = inst_31089);
(statearr_31129_31160[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31101 === 23))
{var inst_31086 = (state_31100[2]);var state_31100__$1 = state_31100;var statearr_31130_31161 = state_31100__$1;(statearr_31130_31161[2] = inst_31086);
(statearr_31130_31161[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_31134 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31134[0] = state_machine__5507__auto__);
(statearr_31134[1] = 1);
return statearr_31134;
});
var state_machine__5507__auto____1 = (function (state_31100){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31100);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31135){if((e31135 instanceof Object))
{var ex__5510__auto__ = e31135;var statearr_31136_31162 = state_31100;(statearr_31136_31162[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31100);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31163 = state_31100;
state_31100 = G__31163;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31100){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31137 = f__5522__auto__.call(null);(statearr_31137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31137;
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
var G__31166__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__31165 = rseq;var rcomm = cljs.core.nth.call(null,vec__31165,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__31165,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__31166 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31166__delegate.call(this,req_args);};
G__31166.cljs$lang$maxFixedArity = 0;
G__31166.cljs$lang$applyTo = (function (arglist__31167){
var req_args = cljs.core.seq(arglist__31167);
return G__31166__delegate(req_args);
});
G__31166.cljs$core$IFn$_invoke$arity$variadic = G__31166__delegate;
return G__31166;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31185){var state_val_31186 = (state_31185[1]);if((state_val_31186 === 2))
{var inst_31182 = (state_31185[2]);var inst_31183 = console.log(inst_31182);var state_31185__$1 = state_31185;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31185__$1,inst_31183);
} else
{if((state_val_31186 === 1))
{var state_31185__$1 = state_31185;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31185__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_31190 = [null,null,null,null,null,null,null];(statearr_31190[0] = state_machine__5507__auto__);
(statearr_31190[1] = 1);
return statearr_31190;
});
var state_machine__5507__auto____1 = (function (state_31185){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31185);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31191){if((e31191 instanceof Object))
{var ex__5510__auto__ = e31191;var statearr_31192_31194 = state_31185;(statearr_31192_31194[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31185);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31195 = state_31185;
state_31185 = G__31195;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31185){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31193 = f__5522__auto__.call(null);(statearr_31193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__31196){
var f = cljs.core.first(arglist__31196);
var args = cljs.core.rest(arglist__31196);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__31199){var vec__31200 = p__31199;var k = cljs.core.nth.call(null,vec__31200,0,null);var v = cljs.core.nth.call(null,vec__31200,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__31201){
var id = cljs.core.first(arglist__31201);
arglist__31201 = cljs.core.next(arglist__31201);
var tolerance = cljs.core.first(arglist__31201);
var opts = cljs.core.rest(arglist__31201);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__31202){
var id = cljs.core.first(arglist__31202);
var opts = cljs.core.rest(arglist__31202);
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
var constituencies__delegate = function (p__31203){var vec__31205 = p__31203;var type_ids = cljs.core.nth.call(null,vec__31205,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__31203 = null;if (arguments.length > 0) {
  p__31203 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__31203);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__31206){
var p__31203 = cljs.core.seq(arglist__31206);
return constituencies__delegate(p__31203);
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
var portfolio_companies__delegate = function (p__31207){var vec__31209 = p__31207;var type_ids = cljs.core.nth.call(null,vec__31209,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null));return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_companies = function (var_args){
var p__31207 = null;if (arguments.length > 0) {
  p__31207 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__31207);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__31210){
var p__31207 = cljs.core.seq(arglist__31210);
return portfolio_companies__delegate(p__31207);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__31211){var vec__31213 = p__31211;var type_ids = cljs.core.nth.call(null,vec__31213,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__31211 = null;if (arguments.length > 0) {
  p__31211 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__31211);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__31214){
var p__31211 = cljs.core.seq(arglist__31214);
return portfolio_company_stats__delegate(p__31211);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__31215){var vec__31217 = p__31215;var type_ids = cljs.core.nth.call(null,vec__31217,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__31215 = null;if (arguments.length > 0) {
  p__31215 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__31215);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__31218){
var p__31215 = cljs.core.seq(arglist__31218);
return portfolio_company_account_stats__delegate(p__31215);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__31219){var vec__31221 = p__31219;var type_ids = cljs.core.nth.call(null,vec__31221,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__31219 = null;if (arguments.length > 0) {
  p__31219 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__31219);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__31222){
var p__31219 = cljs.core.seq(arglist__31222);
return portfolio_company_sites__delegate(p__31219);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__31223){var vec__31225 = p__31223;var type_ids = cljs.core.nth.call(null,vec__31225,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__31223 = null;if (arguments.length > 0) {
  p__31223 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__31223);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__31226){
var p__31223 = cljs.core.seq(arglist__31226);
return portfolio_company_sites_by_company__delegate(p__31223);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__31227){var vec__31229 = p__31227;var type_ids = cljs.core.nth.call(null,vec__31229,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__31227 = null;if (arguments.length > 0) {
  p__31227 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__31227);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__31230){
var p__31227 = cljs.core.seq(arglist__31230);
return portfolio_company_locations__delegate(p__31227);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__31231){var vec__31233 = p__31231;var type_ids = cljs.core.nth.call(null,vec__31233,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__31231 = null;if (arguments.length > 0) {
  p__31231 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__31231);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__31234){
var p__31231 = cljs.core.seq(arglist__31234);
return portfolio_company_site_stats__delegate(p__31231);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__31235){var vec__31237 = p__31235;var type_ids = cljs.core.nth.call(null,vec__31237,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__31235 = null;if (arguments.length > 0) {
  p__31235 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__31235);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__31238){
var p__31235 = cljs.core.seq(arglist__31238);
return portfolio_company_site_account_timelines__delegate(p__31235);
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
var investor_comapnies__delegate = function (p__31239){var vec__31241 = p__31239;var type_ids = cljs.core.nth.call(null,vec__31241,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__31239 = null;if (arguments.length > 0) {
  p__31239 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__31239);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__31242){
var p__31239 = cljs.core.seq(arglist__31242);
return investor_comapnies__delegate(p__31239);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
