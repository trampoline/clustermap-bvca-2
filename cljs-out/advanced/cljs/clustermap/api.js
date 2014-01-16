// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
clustermap.api.GET = (function GET(url){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"]));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
});
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19008){var state_val_19009 = (state_19008[1]);if((state_val_19009 === 8))
{var inst_18997 = (state_19008[7]);var inst_18999 = (state_19008[2]);var inst_19000 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_18999,inst_18997);var state_19008__$1 = (function (){var statearr_19010 = state_19008;(statearr_19010[8] = inst_19000);
return statearr_19010;
})();var statearr_19011_19025 = state_19008__$1;(statearr_19011_19025[2] = null);
(statearr_19011_19025[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19009 === 7))
{var inst_18995 = (state_19008[2]);var inst_18996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18995,0,null);var inst_18997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18995,1,null);var state_19008__$1 = (function (){var statearr_19012 = state_19008;(statearr_19012[7] = inst_18997);
return statearr_19012;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19008__$1,8,inst_18996);
} else
{if((state_val_19009 === 6))
{var inst_19004 = (state_19008[2]);var state_19008__$1 = state_19008;var statearr_19013_19026 = state_19008__$1;(statearr_19013_19026[2] = inst_19004);
(statearr_19013_19026[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19009 === 5))
{var state_19008__$1 = state_19008;var statearr_19014_19027 = state_19008__$1;(statearr_19014_19027[2] = null);
(statearr_19014_19027[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_19009 === 4))
{var state_19008__$1 = state_19008;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19008__$1,7,ocomm);
} else
{if((state_val_19009 === 3))
{var inst_19006 = (state_19008[2]);var state_19008__$1 = state_19008;return cljs.core.async.impl.ioc_helpers.return_chan(state_19008__$1,inst_19006);
} else
{if((state_val_19009 === 2))
{var state_19008__$1 = state_19008;if(true)
{var statearr_19015_19028 = state_19008__$1;(statearr_19015_19028[1] = 4);
} else
{var statearr_19016_19029 = state_19008__$1;(statearr_19016_19029[1] = 5);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_19009 === 1))
{var state_19008__$1 = state_19008;var statearr_19017_19030 = state_19008__$1;(statearr_19017_19030[2] = null);
(statearr_19017_19030[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_19021 = [null,null,null,null,null,null,null,null,null];(statearr_19021[0] = state_machine__5507__auto__);
(statearr_19021[1] = 1);
return statearr_19021;
});
var state_machine__5507__auto____1 = (function (state_19008){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19008);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19022){if((e19022 instanceof Object))
{var ex__5510__auto__ = e19022;var statearr_19023_19031 = state_19008;(statearr_19023_19031[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19008);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e19022;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__19032 = state_19008;
state_19008 = G__19032;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19008){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19024 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return (function() { 
var G__19035__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__19034 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19034,0,null);var result_handler_args = cljs.core.nthnext(vec__19034,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__19035 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19035__delegate.call(this,req_args);};
G__19035.cljs$lang$maxFixedArity = 0;
G__19035.cljs$lang$applyTo = (function (arglist__19036){
var req_args = cljs.core.seq(arglist__19036);
return G__19035__delegate(req_args);
});
G__19035.cljs$core$IFn$_invoke$arity$variadic = G__19035__delegate;
return G__19035;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19054){var state_val_19055 = (state_19054[1]);if((state_val_19055 === 2))
{var inst_19051 = (state_19054[2]);var inst_19052 = console.log(inst_19051);var state_19054__$1 = state_19054;return cljs.core.async.impl.ioc_helpers.return_chan(state_19054__$1,inst_19052);
} else
{if((state_val_19055 === 1))
{var state_19054__$1 = state_19054;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19054__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19059 = [null,null,null,null,null,null,null];(statearr_19059[0] = state_machine__5507__auto__);
(statearr_19059[1] = 1);
return statearr_19059;
});
var state_machine__5507__auto____1 = (function (state_19054){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19054);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19060){if((e19060 instanceof Object))
{var ex__5510__auto__ = e19060;var statearr_19061_19063 = state_19054;(statearr_19061_19063[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19054);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e19060;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__19064 = state_19054;
state_19054 = G__19064;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19054){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19062 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19062;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__19065){
var f = cljs.core.first(arglist__19065);
var args = cljs.core.rest(arglist__19065);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > 0))
{return clustermap.api.GET([cljs.core.str("/api/bvca/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.portfolio_company_sites = (function portfolio_company_sites(){return clustermap.api.GET("/api/bvca/portfolio-company-sites");
});
clustermap.api.constituencies = (function constituencies(){return clustermap.api.GET("/api/bvca/constituencies");
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET([cljs.core.str("/api/bvca/constituencies/"),cljs.core.str(id)].join(''));
});
clustermap.api.portfolio_companies_summary = (function portfolio_companies_summary(){return clustermap.api.GET("/api/bvca/portfolio-companies-summary");
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-companies/"),cljs.core.str(id)].join(''));
});
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET("/api/bvca/investor-companies-summary");
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET([cljs.core.str("/api/bvca/investor-companies/"),cljs.core.str(id)].join(''));
});
