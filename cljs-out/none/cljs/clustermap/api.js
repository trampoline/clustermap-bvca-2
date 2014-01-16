// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
clustermap.api.GET = (function GET(url){var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(JSON.parse.call(null,event.target.getResponseText())["data"]));
return cljs.core.async.close_BANG_.call(null,comm);
}));
return comm;
});
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8372){var state_val_8373 = (state_8372[1]);if((state_val_8373 === 8))
{var inst_8361 = (state_8372[7]);var inst_8363 = (state_8372[2]);var inst_8364 = cljs.core.apply.call(null,handler,inst_8363,inst_8361);var state_8372__$1 = (function (){var statearr_8374 = state_8372;(statearr_8374[8] = inst_8364);
return statearr_8374;
})();var statearr_8375_8389 = state_8372__$1;(statearr_8375_8389[2] = null);
(statearr_8375_8389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8373 === 7))
{var inst_8359 = (state_8372[2]);var inst_8360 = cljs.core.nth.call(null,inst_8359,0,null);var inst_8361 = cljs.core.nth.call(null,inst_8359,1,null);var state_8372__$1 = (function (){var statearr_8376 = state_8372;(statearr_8376[7] = inst_8361);
return statearr_8376;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8372__$1,8,inst_8360);
} else
{if((state_val_8373 === 6))
{var inst_8368 = (state_8372[2]);var state_8372__$1 = state_8372;var statearr_8377_8390 = state_8372__$1;(statearr_8377_8390[2] = inst_8368);
(statearr_8377_8390[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8373 === 5))
{var state_8372__$1 = state_8372;var statearr_8378_8391 = state_8372__$1;(statearr_8378_8391[2] = null);
(statearr_8378_8391[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8373 === 4))
{var state_8372__$1 = state_8372;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8372__$1,7,ocomm);
} else
{if((state_val_8373 === 3))
{var inst_8370 = (state_8372[2]);var state_8372__$1 = state_8372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8372__$1,inst_8370);
} else
{if((state_val_8373 === 2))
{var state_8372__$1 = state_8372;if(true)
{var statearr_8379_8392 = state_8372__$1;(statearr_8379_8392[1] = 4);
} else
{var statearr_8380_8393 = state_8372__$1;(statearr_8380_8393[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8373 === 1))
{var state_8372__$1 = state_8372;var statearr_8381_8394 = state_8372__$1;(statearr_8381_8394[2] = null);
(statearr_8381_8394[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8385 = [null,null,null,null,null,null,null,null,null];(statearr_8385[0] = state_machine__5507__auto__);
(statearr_8385[1] = 1);
return statearr_8385;
});
var state_machine__5507__auto____1 = (function (state_8372){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8372);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8386){if((e8386 instanceof Object))
{var ex__5510__auto__ = e8386;var statearr_8387_8395 = state_8372;(statearr_8387_8395[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8372);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8396 = state_8372;
state_8372 = G__8396;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8372){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8388 = f__5522__auto__.call(null);(statearr_8388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8388;
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
var G__8399__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__8398 = rseq;var rcomm = cljs.core.nth.call(null,vec__8398,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__8398,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__8399 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8399__delegate.call(this,req_args);};
G__8399.cljs$lang$maxFixedArity = 0;
G__8399.cljs$lang$applyTo = (function (arglist__8400){
var req_args = cljs.core.seq(arglist__8400);
return G__8399__delegate(req_args);
});
G__8399.cljs$core$IFn$_invoke$arity$variadic = G__8399__delegate;
return G__8399;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8418){var state_val_8419 = (state_8418[1]);if((state_val_8419 === 2))
{var inst_8415 = (state_8418[2]);var inst_8416 = console.log(inst_8415);var state_8418__$1 = state_8418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8418__$1,inst_8416);
} else
{if((state_val_8419 === 1))
{var state_8418__$1 = state_8418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8418__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8423 = [null,null,null,null,null,null,null];(statearr_8423[0] = state_machine__5507__auto__);
(statearr_8423[1] = 1);
return statearr_8423;
});
var state_machine__5507__auto____1 = (function (state_8418){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8418);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8424){if((e8424 instanceof Object))
{var ex__5510__auto__ = e8424;var statearr_8425_8427 = state_8418;(statearr_8425_8427[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8418);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8428 = state_8418;
state_8418 = G__8428;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8418){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8426 = f__5522__auto__.call(null);(statearr_8426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__8429){
var f = cljs.core.first(arglist__8429);
var args = cljs.core.rest(arglist__8429);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > 0))
{return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.portfolio_company_sites = (function portfolio_company_sites(){return clustermap.api.GET.call(null,"/api/bvca/portfolio-company-sites");
});
clustermap.api.constituencies = (function constituencies(){return clustermap.api.GET.call(null,"/api/bvca/constituencies");
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/constituencies/"),cljs.core.str(id)].join(''));
});
clustermap.api.portfolio_companies_summary = (function portfolio_companies_summary(){return clustermap.api.GET.call(null,"/api/bvca/portfolio-companies-summary");
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-companies/"),cljs.core.str(id)].join(''));
});
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET.call(null,"/api/bvca/investor-companies-summary");
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/investor-companies/"),cljs.core.str(id)].join(''));
});

//# sourceMappingURL=api.js.map