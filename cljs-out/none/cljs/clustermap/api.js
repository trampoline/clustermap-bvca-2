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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8365){var state_val_8366 = (state_8365[1]);if((state_val_8366 === 8))
{var inst_8356 = (state_8365[2]);var inst_8357 = handler.call(null,inst_8356);var state_8365__$1 = (function (){var statearr_8367 = state_8365;(statearr_8367[7] = inst_8357);
return statearr_8367;
})();var statearr_8368_8381 = state_8365__$1;(statearr_8368_8381[2] = null);
(statearr_8368_8381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8366 === 7))
{var inst_8354 = (state_8365[2]);var state_8365__$1 = state_8365;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8365__$1,8,inst_8354);
} else
{if((state_val_8366 === 6))
{var inst_8361 = (state_8365[2]);var state_8365__$1 = state_8365;var statearr_8369_8382 = state_8365__$1;(statearr_8369_8382[2] = inst_8361);
(statearr_8369_8382[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8366 === 5))
{var state_8365__$1 = state_8365;var statearr_8370_8383 = state_8365__$1;(statearr_8370_8383[2] = null);
(statearr_8370_8383[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8366 === 4))
{var state_8365__$1 = state_8365;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8365__$1,7,ocomm);
} else
{if((state_val_8366 === 3))
{var inst_8363 = (state_8365[2]);var state_8365__$1 = state_8365;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8365__$1,inst_8363);
} else
{if((state_val_8366 === 2))
{var state_8365__$1 = state_8365;if(true)
{var statearr_8371_8384 = state_8365__$1;(statearr_8371_8384[1] = 4);
} else
{var statearr_8372_8385 = state_8365__$1;(statearr_8372_8385[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8366 === 1))
{var state_8365__$1 = state_8365;var statearr_8373_8386 = state_8365__$1;(statearr_8373_8386[2] = null);
(statearr_8373_8386[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_8377 = [null,null,null,null,null,null,null,null];(statearr_8377[0] = state_machine__5507__auto__);
(statearr_8377[1] = 1);
return statearr_8377;
});
var state_machine__5507__auto____1 = (function (state_8365){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8365);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8378){if((e8378 instanceof Object))
{var ex__5510__auto__ = e8378;var statearr_8379_8387 = state_8365;(statearr_8379_8387[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8365);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8378;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8388 = state_8365;
state_8365 = G__8388;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8365){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8380 = f__5522__auto__.call(null);(statearr_8380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8380;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value
* - result-handler: single-param function of API result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return (function() { 
var G__8389__delegate = function (req_args){var rcomm = cljs.core.apply.call(null,request_handler,req_args);return cljs.core.async.put_BANG_.call(null,ocomm,rcomm);
};
var G__8389 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8389__delegate.call(this,req_args);};
G__8389.cljs$lang$maxFixedArity = 0;
G__8389.cljs$lang$applyTo = (function (arglist__8390){
var req_args = cljs.core.seq(arglist__8390);
return G__8389__delegate(req_args);
});
G__8389.cljs$core$IFn$_invoke$arity$variadic = G__8389__delegate;
return G__8389;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8408){var state_val_8409 = (state_8408[1]);if((state_val_8409 === 2))
{var inst_8405 = (state_8408[2]);var inst_8406 = console.log(inst_8405);var state_8408__$1 = state_8408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8408__$1,inst_8406);
} else
{if((state_val_8409 === 1))
{var state_8408__$1 = state_8408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8408__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8413 = [null,null,null,null,null,null,null];(statearr_8413[0] = state_machine__5507__auto__);
(statearr_8413[1] = 1);
return statearr_8413;
});
var state_machine__5507__auto____1 = (function (state_8408){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_8408);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8414){if((e8414 instanceof Object))
{var ex__5510__auto__ = e8414;var statearr_8415_8417 = state_8408;(statearr_8415_8417[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8408);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8414;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8418 = state_8408;
state_8408 = G__8418;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8408){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8416 = f__5522__auto__.call(null);(statearr_8416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8416;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__8419){
var f = cljs.core.first(arglist__8419);
var args = cljs.core.rest(arglist__8419);
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