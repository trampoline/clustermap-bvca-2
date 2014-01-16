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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28399){var state_val_28400 = (state_28399[1]);if((state_val_28400 === 8))
{var inst_28388 = (state_28399[7]);var inst_28390 = (state_28399[2]);var inst_28391 = cljs.core.apply.call(null,handler,inst_28390,inst_28388);var state_28399__$1 = (function (){var statearr_28401 = state_28399;(statearr_28401[8] = inst_28391);
return statearr_28401;
})();var statearr_28402_28416 = state_28399__$1;(statearr_28402_28416[2] = null);
(statearr_28402_28416[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28400 === 7))
{var inst_28386 = (state_28399[2]);var inst_28387 = cljs.core.nth.call(null,inst_28386,0,null);var inst_28388 = cljs.core.nth.call(null,inst_28386,1,null);var state_28399__$1 = (function (){var statearr_28403 = state_28399;(statearr_28403[7] = inst_28388);
return statearr_28403;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28399__$1,8,inst_28387);
} else
{if((state_val_28400 === 6))
{var inst_28395 = (state_28399[2]);var state_28399__$1 = state_28399;var statearr_28404_28417 = state_28399__$1;(statearr_28404_28417[2] = inst_28395);
(statearr_28404_28417[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28400 === 5))
{var state_28399__$1 = state_28399;var statearr_28405_28418 = state_28399__$1;(statearr_28405_28418[2] = null);
(statearr_28405_28418[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28400 === 4))
{var state_28399__$1 = state_28399;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28399__$1,7,ocomm);
} else
{if((state_val_28400 === 3))
{var inst_28397 = (state_28399[2]);var state_28399__$1 = state_28399;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28399__$1,inst_28397);
} else
{if((state_val_28400 === 2))
{var state_28399__$1 = state_28399;if(true)
{var statearr_28406_28419 = state_28399__$1;(statearr_28406_28419[1] = 4);
} else
{var statearr_28407_28420 = state_28399__$1;(statearr_28407_28420[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28400 === 1))
{var state_28399__$1 = state_28399;var statearr_28408_28421 = state_28399__$1;(statearr_28408_28421[2] = null);
(statearr_28408_28421[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_28412 = [null,null,null,null,null,null,null,null,null];(statearr_28412[0] = state_machine__5507__auto__);
(statearr_28412[1] = 1);
return statearr_28412;
});
var state_machine__5507__auto____1 = (function (state_28399){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28399);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28413){if((e28413 instanceof Object))
{var ex__5510__auto__ = e28413;var statearr_28414_28422 = state_28399;(statearr_28414_28422[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28399);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28413;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28423 = state_28399;
state_28399 = G__28423;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28399){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28415 = f__5522__auto__.call(null);(statearr_28415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28415;
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
var G__28426__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__28425 = rseq;var rcomm = cljs.core.nth.call(null,vec__28425,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__28425,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__28426 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28426__delegate.call(this,req_args);};
G__28426.cljs$lang$maxFixedArity = 0;
G__28426.cljs$lang$applyTo = (function (arglist__28427){
var req_args = cljs.core.seq(arglist__28427);
return G__28426__delegate(req_args);
});
G__28426.cljs$core$IFn$_invoke$arity$variadic = G__28426__delegate;
return G__28426;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28445){var state_val_28446 = (state_28445[1]);if((state_val_28446 === 2))
{var inst_28442 = (state_28445[2]);var inst_28443 = console.log(inst_28442);var state_28445__$1 = state_28445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28445__$1,inst_28443);
} else
{if((state_val_28446 === 1))
{var state_28445__$1 = state_28445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28445__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28450 = [null,null,null,null,null,null,null];(statearr_28450[0] = state_machine__5507__auto__);
(statearr_28450[1] = 1);
return statearr_28450;
});
var state_machine__5507__auto____1 = (function (state_28445){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28445);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28451){if((e28451 instanceof Object))
{var ex__5510__auto__ = e28451;var statearr_28452_28454 = state_28445;(statearr_28452_28454[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28455 = state_28445;
state_28445 = G__28455;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28445){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28453 = f__5522__auto__.call(null);(statearr_28453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__28456){
var f = cljs.core.first(arglist__28456);
var args = cljs.core.rest(arglist__28456);
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
