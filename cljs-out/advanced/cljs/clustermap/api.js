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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18756){var state_val_18757 = (state_18756[1]);if((state_val_18757 === 8))
{var inst_18745 = (state_18756[7]);var inst_18747 = (state_18756[2]);var inst_18748 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_18747,inst_18745);var state_18756__$1 = (function (){var statearr_18758 = state_18756;(statearr_18758[8] = inst_18748);
return statearr_18758;
})();var statearr_18759_18773 = state_18756__$1;(statearr_18759_18773[2] = null);
(statearr_18759_18773[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_18757 === 7))
{var inst_18743 = (state_18756[2]);var inst_18744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18743,0,null);var inst_18745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18743,1,null);var state_18756__$1 = (function (){var statearr_18760 = state_18756;(statearr_18760[7] = inst_18745);
return statearr_18760;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18756__$1,8,inst_18744);
} else
{if((state_val_18757 === 6))
{var inst_18752 = (state_18756[2]);var state_18756__$1 = state_18756;var statearr_18761_18774 = state_18756__$1;(statearr_18761_18774[2] = inst_18752);
(statearr_18761_18774[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_18757 === 5))
{var state_18756__$1 = state_18756;var statearr_18762_18775 = state_18756__$1;(statearr_18762_18775[2] = null);
(statearr_18762_18775[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_18757 === 4))
{var state_18756__$1 = state_18756;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18756__$1,7,ocomm);
} else
{if((state_val_18757 === 3))
{var inst_18754 = (state_18756[2]);var state_18756__$1 = state_18756;return cljs.core.async.impl.ioc_helpers.return_chan(state_18756__$1,inst_18754);
} else
{if((state_val_18757 === 2))
{var state_18756__$1 = state_18756;if(true)
{var statearr_18763_18776 = state_18756__$1;(statearr_18763_18776[1] = 4);
} else
{var statearr_18764_18777 = state_18756__$1;(statearr_18764_18777[1] = 5);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_18757 === 1))
{var state_18756__$1 = state_18756;var statearr_18765_18778 = state_18756__$1;(statearr_18765_18778[2] = null);
(statearr_18765_18778[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_18769 = [null,null,null,null,null,null,null,null,null];(statearr_18769[0] = state_machine__5507__auto__);
(statearr_18769[1] = 1);
return statearr_18769;
});
var state_machine__5507__auto____1 = (function (state_18756){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18756);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18770){if((e18770 instanceof Object))
{var ex__5510__auto__ = e18770;var statearr_18771_18779 = state_18756;(statearr_18771_18779[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18756);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e18770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__18780 = state_18756;
state_18756 = G__18780;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18756){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18772 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18772;
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
var G__18783__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__18782 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18782,0,null);var result_handler_args = cljs.core.nthnext(vec__18782,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__18783 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18783__delegate.call(this,req_args);};
G__18783.cljs$lang$maxFixedArity = 0;
G__18783.cljs$lang$applyTo = (function (arglist__18784){
var req_args = cljs.core.seq(arglist__18784);
return G__18783__delegate(req_args);
});
G__18783.cljs$core$IFn$_invoke$arity$variadic = G__18783__delegate;
return G__18783;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18802){var state_val_18803 = (state_18802[1]);if((state_val_18803 === 2))
{var inst_18799 = (state_18802[2]);var inst_18800 = console.log(inst_18799);var state_18802__$1 = state_18802;return cljs.core.async.impl.ioc_helpers.return_chan(state_18802__$1,inst_18800);
} else
{if((state_val_18803 === 1))
{var state_18802__$1 = state_18802;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18802__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18807 = [null,null,null,null,null,null,null];(statearr_18807[0] = state_machine__5507__auto__);
(statearr_18807[1] = 1);
return statearr_18807;
});
var state_machine__5507__auto____1 = (function (state_18802){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_18802);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18808){if((e18808 instanceof Object))
{var ex__5510__auto__ = e18808;var statearr_18809_18811 = state_18802;(statearr_18809_18811[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_18802);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e18808;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__18812 = state_18802;
state_18802 = G__18812;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18802){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18810 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_18810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18810;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__18813){
var f = cljs.core.first(arglist__18813);
var args = cljs.core.rest(arglist__18813);
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
clustermap.api.all_portfolio_company_sites = (function all_portfolio_company_sites(){return clustermap.api.GET("/api/bvca/all-portfolio-company-sites");
});
clustermap.api.all_constituencies = (function all_constituencies(){return clustermap.api.GET("/api/bvca/all-constituencies");
});
clustermap.api.constituency_detail = (function constituency_detail(id){return clustermap.api.GET([cljs.core.str("/api/bvca/constituency-detail/"),cljs.core.str(id)].join(''));
});
clustermap.api.all_portfolio_companies_summary = (function all_portfolio_companies_summary(){return clustermap.api.GET("/api/bvca/all-portfolio-companies-summary");
});
clustermap.api.portfolio_company_detail = (function portfolio_company_detail(id){return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-company-detail/"),cljs.core.str(id)].join(''));
});
clustermap.api.all_investor_companies_summary = (function all_investor_companies_summary(){return clustermap.api.GET("/api/bvca/all-investor-companies-summary");
});
clustermap.api.investor_company_detail = (function investor_company_detail(id){return clustermap.api.GET([cljs.core.str("/api/bvca/investor-company-detail/"),cljs.core.str(id)].join(''));
});
