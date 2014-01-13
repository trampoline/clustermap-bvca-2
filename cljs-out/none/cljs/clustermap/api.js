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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20289){var state_val_20290 = (state_20289[1]);if((state_val_20290 === 8))
{var inst_20278 = (state_20289[7]);var inst_20280 = (state_20289[2]);var inst_20281 = cljs.core.apply.call(null,handler,inst_20280,inst_20278);var state_20289__$1 = (function (){var statearr_20291 = state_20289;(statearr_20291[8] = inst_20281);
return statearr_20291;
})();var statearr_20292_20306 = state_20289__$1;(statearr_20292_20306[2] = null);
(statearr_20292_20306[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20290 === 7))
{var inst_20276 = (state_20289[2]);var inst_20277 = cljs.core.nth.call(null,inst_20276,0,null);var inst_20278 = cljs.core.nth.call(null,inst_20276,1,null);var state_20289__$1 = (function (){var statearr_20293 = state_20289;(statearr_20293[7] = inst_20278);
return statearr_20293;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20289__$1,8,inst_20277);
} else
{if((state_val_20290 === 6))
{var inst_20285 = (state_20289[2]);var state_20289__$1 = state_20289;var statearr_20294_20307 = state_20289__$1;(statearr_20294_20307[2] = inst_20285);
(statearr_20294_20307[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20290 === 5))
{var state_20289__$1 = state_20289;var statearr_20295_20308 = state_20289__$1;(statearr_20295_20308[2] = null);
(statearr_20295_20308[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20290 === 4))
{var state_20289__$1 = state_20289;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20289__$1,7,ocomm);
} else
{if((state_val_20290 === 3))
{var inst_20287 = (state_20289[2]);var state_20289__$1 = state_20289;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20289__$1,inst_20287);
} else
{if((state_val_20290 === 2))
{var state_20289__$1 = state_20289;if(true)
{var statearr_20296_20309 = state_20289__$1;(statearr_20296_20309[1] = 4);
} else
{var statearr_20297_20310 = state_20289__$1;(statearr_20297_20310[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20290 === 1))
{var state_20289__$1 = state_20289;var statearr_20298_20311 = state_20289__$1;(statearr_20298_20311[2] = null);
(statearr_20298_20311[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_20302 = [null,null,null,null,null,null,null,null,null];(statearr_20302[0] = state_machine__5507__auto__);
(statearr_20302[1] = 1);
return statearr_20302;
});
var state_machine__5507__auto____1 = (function (state_20289){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_20289);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20303){if((e20303 instanceof Object))
{var ex__5510__auto__ = e20303;var statearr_20304_20312 = state_20289;(statearr_20304_20312[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20289);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20313 = state_20289;
state_20289 = G__20313;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20289){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20305 = f__5522__auto__.call(null);(statearr_20305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20305;
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
var G__20316__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20315 = rseq;var rcomm = cljs.core.nth.call(null,vec__20315,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__20315,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20316 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20316__delegate.call(this,req_args);};
G__20316.cljs$lang$maxFixedArity = 0;
G__20316.cljs$lang$applyTo = (function (arglist__20317){
var req_args = cljs.core.seq(arglist__20317);
return G__20316__delegate(req_args);
});
G__20316.cljs$core$IFn$_invoke$arity$variadic = G__20316__delegate;
return G__20316;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20335){var state_val_20336 = (state_20335[1]);if((state_val_20336 === 2))
{var inst_20332 = (state_20335[2]);var inst_20333 = console.log(inst_20332);var state_20335__$1 = state_20335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20335__$1,inst_20333);
} else
{if((state_val_20336 === 1))
{var state_20335__$1 = state_20335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20335__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20340 = [null,null,null,null,null,null,null];(statearr_20340[0] = state_machine__5507__auto__);
(statearr_20340[1] = 1);
return statearr_20340;
});
var state_machine__5507__auto____1 = (function (state_20335){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_20335);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20341){if((e20341 instanceof Object))
{var ex__5510__auto__ = e20341;var statearr_20342_20344 = state_20335;(statearr_20342_20344[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20345 = state_20335;
state_20335 = G__20345;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20335){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20343 = f__5522__auto__.call(null);(statearr_20343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20346){
var f = cljs.core.first(arglist__20346);
var args = cljs.core.rest(arglist__20346);
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
clustermap.api.all_portfolio_company_sites = (function all_portfolio_company_sites(){return clustermap.api.GET.call(null,"/api/bvca/all-portfolio-company-sites");
});
clustermap.api.all_constituencies = (function all_constituencies(){return clustermap.api.GET.call(null,"/api/bvca/all-constituencies");
});
clustermap.api.constituency_detail = (function constituency_detail(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/constituency-detail/"),cljs.core.str(id)].join(''));
});
clustermap.api.all_portfolio_companies_summary = (function all_portfolio_companies_summary(){return clustermap.api.GET.call(null,"/api/bvca/all-portfolio-companies-summary");
});
clustermap.api.portfolio_company_detail = (function portfolio_company_detail(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-detail/"),cljs.core.str(id)].join(''));
});
clustermap.api.all_investor_companies_summary = (function all_investor_companies_summary(){return clustermap.api.GET.call(null,"/api/bvca/all-investor-companies-summary");
});
clustermap.api.investor_company_detail = (function investor_company_detail(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/investor-company-detail/"),cljs.core.str(id)].join(''));
});

//# sourceMappingURL=api.js.map