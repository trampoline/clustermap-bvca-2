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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27895){var state_val_27896 = (state_27895[1]);if((state_val_27896 === 8))
{var inst_27884 = (state_27895[7]);var inst_27886 = (state_27895[2]);var inst_27887 = cljs.core.apply.call(null,handler,inst_27886,inst_27884);var state_27895__$1 = (function (){var statearr_27897 = state_27895;(statearr_27897[8] = inst_27887);
return statearr_27897;
})();var statearr_27898_27912 = state_27895__$1;(statearr_27898_27912[2] = null);
(statearr_27898_27912[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27896 === 7))
{var inst_27882 = (state_27895[2]);var inst_27883 = cljs.core.nth.call(null,inst_27882,0,null);var inst_27884 = cljs.core.nth.call(null,inst_27882,1,null);var state_27895__$1 = (function (){var statearr_27899 = state_27895;(statearr_27899[7] = inst_27884);
return statearr_27899;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27895__$1,8,inst_27883);
} else
{if((state_val_27896 === 6))
{var inst_27891 = (state_27895[2]);var state_27895__$1 = state_27895;var statearr_27900_27913 = state_27895__$1;(statearr_27900_27913[2] = inst_27891);
(statearr_27900_27913[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27896 === 5))
{var state_27895__$1 = state_27895;var statearr_27901_27914 = state_27895__$1;(statearr_27901_27914[2] = null);
(statearr_27901_27914[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27896 === 4))
{var state_27895__$1 = state_27895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27895__$1,7,ocomm);
} else
{if((state_val_27896 === 3))
{var inst_27893 = (state_27895[2]);var state_27895__$1 = state_27895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27895__$1,inst_27893);
} else
{if((state_val_27896 === 2))
{var state_27895__$1 = state_27895;if(true)
{var statearr_27902_27915 = state_27895__$1;(statearr_27902_27915[1] = 4);
} else
{var statearr_27903_27916 = state_27895__$1;(statearr_27903_27916[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27896 === 1))
{var state_27895__$1 = state_27895;var statearr_27904_27917 = state_27895__$1;(statearr_27904_27917[2] = null);
(statearr_27904_27917[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_27908 = [null,null,null,null,null,null,null,null,null];(statearr_27908[0] = state_machine__5507__auto__);
(statearr_27908[1] = 1);
return statearr_27908;
});
var state_machine__5507__auto____1 = (function (state_27895){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27895);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27909){if((e27909 instanceof Object))
{var ex__5510__auto__ = e27909;var statearr_27910_27918 = state_27895;(statearr_27910_27918[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27895);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27909;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27919 = state_27895;
state_27895 = G__27919;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27895){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27911 = f__5522__auto__.call(null);(statearr_27911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27911;
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
var G__27922__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__27921 = rseq;var rcomm = cljs.core.nth.call(null,vec__27921,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__27921,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__27922 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27922__delegate.call(this,req_args);};
G__27922.cljs$lang$maxFixedArity = 0;
G__27922.cljs$lang$applyTo = (function (arglist__27923){
var req_args = cljs.core.seq(arglist__27923);
return G__27922__delegate(req_args);
});
G__27922.cljs$core$IFn$_invoke$arity$variadic = G__27922__delegate;
return G__27922;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27941){var state_val_27942 = (state_27941[1]);if((state_val_27942 === 2))
{var inst_27938 = (state_27941[2]);var inst_27939 = console.log(inst_27938);var state_27941__$1 = state_27941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27941__$1,inst_27939);
} else
{if((state_val_27942 === 1))
{var state_27941__$1 = state_27941;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27941__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_27946 = [null,null,null,null,null,null,null];(statearr_27946[0] = state_machine__5507__auto__);
(statearr_27946[1] = 1);
return statearr_27946;
});
var state_machine__5507__auto____1 = (function (state_27941){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27941);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27947){if((e27947 instanceof Object))
{var ex__5510__auto__ = e27947;var statearr_27948_27950 = state_27941;(statearr_27948_27950[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27941);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27951 = state_27941;
state_27941 = G__27951;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27941){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27949 = f__5522__auto__.call(null);(statearr_27949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__27952){
var f = cljs.core.first(arglist__27952);
var args = cljs.core.rest(arglist__27952);
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
