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
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_27546){var state_val_27547 = (state_27546[1]);if((state_val_27547 === 2))
{var inst_27543 = (state_27546[2]);var inst_27544 = console.log(inst_27543);var state_27546__$1 = state_27546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27546__$1,inst_27544);
} else
{if((state_val_27547 === 1))
{var state_27546__$1 = state_27546;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27546__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_27551 = [null,null,null,null,null,null,null];(statearr_27551[0] = state_machine__5507__auto__);
(statearr_27551[1] = 1);
return statearr_27551;
});
var state_machine__5507__auto____1 = (function (state_27546){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_27546);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e27552){if((e27552 instanceof Object))
{var ex__5510__auto__ = e27552;var statearr_27553_27555 = state_27546;(statearr_27553_27555[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27546);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27552;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27556 = state_27546;
state_27546 = G__27556;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_27546){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_27546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_27554 = f__5522__auto__.call(null);(statearr_27554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_27554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__27557){
var f = cljs.core.first(arglist__27557);
var args = cljs.core.rest(arglist__27557);
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
