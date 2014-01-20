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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28623){var state_val_28624 = (state_28623[1]);if((state_val_28624 === 8))
{var inst_28612 = (state_28623[7]);var inst_28614 = (state_28623[2]);var inst_28615 = cljs.core.apply.call(null,handler,inst_28614,inst_28612);var state_28623__$1 = (function (){var statearr_28625 = state_28623;(statearr_28625[8] = inst_28615);
return statearr_28625;
})();var statearr_28626_28640 = state_28623__$1;(statearr_28626_28640[2] = null);
(statearr_28626_28640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 7))
{var inst_28610 = (state_28623[2]);var inst_28611 = cljs.core.nth.call(null,inst_28610,0,null);var inst_28612 = cljs.core.nth.call(null,inst_28610,1,null);var state_28623__$1 = (function (){var statearr_28627 = state_28623;(statearr_28627[7] = inst_28612);
return statearr_28627;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28623__$1,8,inst_28611);
} else
{if((state_val_28624 === 6))
{var inst_28619 = (state_28623[2]);var state_28623__$1 = state_28623;var statearr_28628_28641 = state_28623__$1;(statearr_28628_28641[2] = inst_28619);
(statearr_28628_28641[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 5))
{var state_28623__$1 = state_28623;var statearr_28629_28642 = state_28623__$1;(statearr_28629_28642[2] = null);
(statearr_28629_28642[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 4))
{var state_28623__$1 = state_28623;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28623__$1,7,ocomm);
} else
{if((state_val_28624 === 3))
{var inst_28621 = (state_28623[2]);var state_28623__$1 = state_28623;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28623__$1,inst_28621);
} else
{if((state_val_28624 === 2))
{var state_28623__$1 = state_28623;if(true)
{var statearr_28630_28643 = state_28623__$1;(statearr_28630_28643[1] = 4);
} else
{var statearr_28631_28644 = state_28623__$1;(statearr_28631_28644[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 1))
{var state_28623__$1 = state_28623;var statearr_28632_28645 = state_28623__$1;(statearr_28632_28645[2] = null);
(statearr_28632_28645[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_28636 = [null,null,null,null,null,null,null,null,null];(statearr_28636[0] = state_machine__5507__auto__);
(statearr_28636[1] = 1);
return statearr_28636;
});
var state_machine__5507__auto____1 = (function (state_28623){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28623);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28637){if((e28637 instanceof Object))
{var ex__5510__auto__ = e28637;var statearr_28638_28646 = state_28623;(statearr_28638_28646[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28623);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28637;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28647 = state_28623;
state_28623 = G__28647;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28623){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28639 = f__5522__auto__.call(null);(statearr_28639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28639;
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
var G__28650__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__28649 = rseq;var rcomm = cljs.core.nth.call(null,vec__28649,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__28649,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__28650 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28650__delegate.call(this,req_args);};
G__28650.cljs$lang$maxFixedArity = 0;
G__28650.cljs$lang$applyTo = (function (arglist__28651){
var req_args = cljs.core.seq(arglist__28651);
return G__28650__delegate(req_args);
});
G__28650.cljs$core$IFn$_invoke$arity$variadic = G__28650__delegate;
return G__28650;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28669){var state_val_28670 = (state_28669[1]);if((state_val_28670 === 2))
{var inst_28666 = (state_28669[2]);var inst_28667 = console.log(inst_28666);var state_28669__$1 = state_28669;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28669__$1,inst_28667);
} else
{if((state_val_28670 === 1))
{var state_28669__$1 = state_28669;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28669__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28674 = [null,null,null,null,null,null,null];(statearr_28674[0] = state_machine__5507__auto__);
(statearr_28674[1] = 1);
return statearr_28674;
});
var state_machine__5507__auto____1 = (function (state_28669){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28669);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28675){if((e28675 instanceof Object))
{var ex__5510__auto__ = e28675;var statearr_28676_28678 = state_28669;(statearr_28676_28678[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28669);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28675;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28679 = state_28669;
state_28669 = G__28679;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28669){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28677 = f__5522__auto__.call(null);(statearr_28677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28677;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__28680){
var f = cljs.core.first(arglist__28680);
var args = cljs.core.rest(arglist__28680);
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
