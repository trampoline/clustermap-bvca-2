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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18217){var state_val_18218 = (state_18217[1]);if((state_val_18218 === 8))
{var inst_18208 = (state_18217[2]);var inst_18209 = handler.call(null,inst_18208);var state_18217__$1 = (function (){var statearr_18219 = state_18217;(statearr_18219[7] = inst_18209);
return statearr_18219;
})();var statearr_18220_18233 = state_18217__$1;(statearr_18220_18233[2] = null);
(statearr_18220_18233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18218 === 7))
{var inst_18206 = (state_18217[2]);var state_18217__$1 = state_18217;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18217__$1,8,inst_18206);
} else
{if((state_val_18218 === 6))
{var inst_18213 = (state_18217[2]);var state_18217__$1 = state_18217;var statearr_18221_18234 = state_18217__$1;(statearr_18221_18234[2] = inst_18213);
(statearr_18221_18234[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18218 === 5))
{var state_18217__$1 = state_18217;var statearr_18222_18235 = state_18217__$1;(statearr_18222_18235[2] = null);
(statearr_18222_18235[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18218 === 4))
{var state_18217__$1 = state_18217;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18217__$1,7,ocomm);
} else
{if((state_val_18218 === 3))
{var inst_18215 = (state_18217[2]);var state_18217__$1 = state_18217;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18217__$1,inst_18215);
} else
{if((state_val_18218 === 2))
{var state_18217__$1 = state_18217;if(true)
{var statearr_18223_18236 = state_18217__$1;(statearr_18223_18236[1] = 4);
} else
{var statearr_18224_18237 = state_18217__$1;(statearr_18224_18237[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18218 === 1))
{var state_18217__$1 = state_18217;var statearr_18225_18238 = state_18217__$1;(statearr_18225_18238[2] = null);
(statearr_18225_18238[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_18229 = [null,null,null,null,null,null,null,null];(statearr_18229[0] = state_machine__5507__auto__);
(statearr_18229[1] = 1);
return statearr_18229;
});
var state_machine__5507__auto____1 = (function (state_18217){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_18217);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18230){if((e18230 instanceof Object))
{var ex__5510__auto__ = e18230;var statearr_18231_18239 = state_18217;(statearr_18231_18239[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18217);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18240 = state_18217;
state_18217 = G__18240;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18217){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18232 = f__5522__auto__.call(null);(statearr_18232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18232;
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
var G__18241__delegate = function (req_args){var rcomm = cljs.core.apply.call(null,request_handler,req_args);return cljs.core.async.put_BANG_.call(null,ocomm,rcomm);
};
var G__18241 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18241__delegate.call(this,req_args);};
G__18241.cljs$lang$maxFixedArity = 0;
G__18241.cljs$lang$applyTo = (function (arglist__18242){
var req_args = cljs.core.seq(arglist__18242);
return G__18241__delegate(req_args);
});
G__18241.cljs$core$IFn$_invoke$arity$variadic = G__18241__delegate;
return G__18241;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18260){var state_val_18261 = (state_18260[1]);if((state_val_18261 === 2))
{var inst_18257 = (state_18260[2]);var inst_18258 = console.log(inst_18257);var state_18260__$1 = state_18260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18260__$1,inst_18258);
} else
{if((state_val_18261 === 1))
{var state_18260__$1 = state_18260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18260__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18265 = [null,null,null,null,null,null,null];(statearr_18265[0] = state_machine__5507__auto__);
(statearr_18265[1] = 1);
return statearr_18265;
});
var state_machine__5507__auto____1 = (function (state_18260){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_18260);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18266){if((e18266 instanceof Object))
{var ex__5510__auto__ = e18266;var statearr_18267_18269 = state_18260;(statearr_18267_18269[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18260);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18266;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18270 = state_18260;
state_18260 = G__18270;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18260){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18268 = f__5522__auto__.call(null);(statearr_18268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18268;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__18271){
var f = cljs.core.first(arglist__18271);
var args = cljs.core.rest(arglist__18271);
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