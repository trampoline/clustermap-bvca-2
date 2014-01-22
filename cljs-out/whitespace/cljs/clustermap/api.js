// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
clustermap.api.GET = (function GET(url){var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(JSON.parse.call(null,event.target.getResponseText())["data"]));
return cljs.core.async.close_BANG_.call(null,comm);
}));
return comm;
});
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28774){var state_val_28775 = (state_28774[1]);if((state_val_28775 === 1))
{var state_28774__$1 = state_28774;var statearr_28776_28804 = state_28774__$1;(statearr_28776_28804[2] = null);
(statearr_28776_28804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28775 === 2))
{var state_28774__$1 = state_28774;if(true)
{var statearr_28777_28805 = state_28774__$1;(statearr_28777_28805[1] = 4);
} else
{var statearr_28778_28806 = state_28774__$1;(statearr_28778_28806[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28775 === 3))
{var inst_28772 = (state_28774[2]);var state_28774__$1 = state_28774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28774__$1,inst_28772);
} else
{if((state_val_28775 === 4))
{var state_28774__$1 = state_28774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,7,ocomm);
} else
{if((state_val_28775 === 5))
{var state_28774__$1 = state_28774;var statearr_28779_28807 = state_28774__$1;(statearr_28779_28807[2] = null);
(statearr_28779_28807[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28775 === 6))
{var inst_28770 = (state_28774[2]);var state_28774__$1 = state_28774;var statearr_28780_28808 = state_28774__$1;(statearr_28780_28808[2] = inst_28770);
(statearr_28780_28808[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28775 === 7))
{var inst_28741 = (state_28774[7]);var inst_28740 = (state_28774[2]);var inst_28741__$1 = cljs.core.nth.call(null,inst_28740,0,null);var inst_28742 = cljs.core.nth.call(null,inst_28740,1,null);var inst_28743 = cljs.core.sequential_QMARK_.call(null,inst_28741__$1);var state_28774__$1 = (function (){var statearr_28781 = state_28774;(statearr_28781[8] = inst_28742);
(statearr_28781[7] = inst_28741__$1);
return statearr_28781;
})();if(inst_28743)
{var statearr_28782_28809 = state_28774__$1;(statearr_28782_28809[1] = 8);
} else
{var statearr_28783_28810 = state_28774__$1;(statearr_28783_28810[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28775 === 8))
{var inst_28741 = (state_28774[7]);var inst_28745 = inst_28741;var inst_28746 = cljs.core.PersistentVector.EMPTY;var state_28774__$1 = (function (){var statearr_28784 = state_28774;(statearr_28784[9] = inst_28746);
(statearr_28784[10] = inst_28745);
return statearr_28784;
})();var statearr_28785_28811 = state_28774__$1;(statearr_28785_28811[2] = null);
(statearr_28785_28811[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28775 === 9))
{var inst_28741 = (state_28774[7]);var state_28774__$1 = state_28774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,17,inst_28741);
} else
{if((state_val_28775 === 10))
{var inst_28742 = (state_28774[8]);var inst_28765 = (state_28774[2]);var inst_28766 = cljs.core.apply.call(null,handler,inst_28765,inst_28742);var state_28774__$1 = (function (){var statearr_28786 = state_28774;(statearr_28786[11] = inst_28766);
return statearr_28786;
})();var statearr_28787_28812 = state_28774__$1;(statearr_28787_28812[2] = null);
(statearr_28787_28812[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28775 === 11))
{var inst_28745 = (state_28774[10]);var inst_28748 = cljs.core.empty_QMARK_.call(null,inst_28745);var state_28774__$1 = state_28774;if(inst_28748)
{var statearr_28788_28813 = state_28774__$1;(statearr_28788_28813[1] = 13);
} else
{var statearr_28789_28814 = state_28774__$1;(statearr_28789_28814[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28775 === 12))
{var inst_28760 = (state_28774[2]);var state_28774__$1 = state_28774;var statearr_28790_28815 = state_28774__$1;(statearr_28790_28815[2] = inst_28760);
(statearr_28790_28815[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28775 === 13))
{var inst_28746 = (state_28774[9]);var state_28774__$1 = state_28774;var statearr_28791_28816 = state_28774__$1;(statearr_28791_28816[2] = inst_28746);
(statearr_28791_28816[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28775 === 14))
{var inst_28745 = (state_28774[10]);var inst_28751 = cljs.core.rest.call(null,inst_28745);var inst_28752 = cljs.core.first.call(null,inst_28745);var state_28774__$1 = (function (){var statearr_28792 = state_28774;(statearr_28792[12] = inst_28751);
return statearr_28792;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,16,inst_28752);
} else
{if((state_val_28775 === 15))
{var inst_28758 = (state_28774[2]);var state_28774__$1 = state_28774;var statearr_28793_28817 = state_28774__$1;(statearr_28793_28817[2] = inst_28758);
(statearr_28793_28817[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28775 === 16))
{var inst_28751 = (state_28774[12]);var inst_28746 = (state_28774[9]);var inst_28754 = (state_28774[2]);var inst_28755 = cljs.core.conj.call(null,inst_28746,inst_28754);var inst_28745 = inst_28751;var inst_28746__$1 = inst_28755;var state_28774__$1 = (function (){var statearr_28794 = state_28774;(statearr_28794[9] = inst_28746__$1);
(statearr_28794[10] = inst_28745);
return statearr_28794;
})();var statearr_28795_28818 = state_28774__$1;(statearr_28795_28818[2] = null);
(statearr_28795_28818[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28775 === 17))
{var inst_28763 = (state_28774[2]);var state_28774__$1 = state_28774;var statearr_28796_28819 = state_28774__$1;(statearr_28796_28819[2] = inst_28763);
(statearr_28796_28819[1] = 10);
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
}
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
var state_machine__5507__auto____0 = (function (){var statearr_28800 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28800[0] = state_machine__5507__auto__);
(statearr_28800[1] = 1);
return statearr_28800;
});
var state_machine__5507__auto____1 = (function (state_28774){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28774);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28801){if((e28801 instanceof Object))
{var ex__5510__auto__ = e28801;var statearr_28802_28820 = state_28774;(statearr_28802_28820[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28774);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28821 = state_28774;
state_28774 = G__28821;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28774){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28803 = f__5522__auto__.call(null);(statearr_28803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28803;
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
var G__28824__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__28823 = rseq;var rcomm = cljs.core.nth.call(null,vec__28823,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__28823,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__28824 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28824__delegate.call(this,req_args);};
G__28824.cljs$lang$maxFixedArity = 0;
G__28824.cljs$lang$applyTo = (function (arglist__28825){
var req_args = cljs.core.seq(arglist__28825);
return G__28824__delegate(req_args);
});
G__28824.cljs$core$IFn$_invoke$arity$variadic = G__28824__delegate;
return G__28824;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28843){var state_val_28844 = (state_28843[1]);if((state_val_28844 === 2))
{var inst_28840 = (state_28843[2]);var inst_28841 = console.log(inst_28840);var state_28843__$1 = state_28843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28843__$1,inst_28841);
} else
{if((state_val_28844 === 1))
{var state_28843__$1 = state_28843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28843__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28848 = [null,null,null,null,null,null,null];(statearr_28848[0] = state_machine__5507__auto__);
(statearr_28848[1] = 1);
return statearr_28848;
});
var state_machine__5507__auto____1 = (function (state_28843){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28843);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28849){if((e28849 instanceof Object))
{var ex__5510__auto__ = e28849;var statearr_28850_28852 = state_28843;(statearr_28850_28852[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28843);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28849;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28853 = state_28843;
state_28843 = G__28853;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28843){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28851 = f__5522__auto__.call(null);(statearr_28851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__28854){
var f = cljs.core.first(arglist__28854);
var args = cljs.core.rest(arglist__28854);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__28857){var vec__28858 = p__28857;var k = cljs.core.nth.call(null,vec__28858,0,null);var v = cljs.core.nth.call(null,vec__28858,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
}),m));
});
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > 0))
{return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__28859){var vec__28861 = p__28859;var type_ids = cljs.core.nth.call(null,vec__28861,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__28859 = null;if (arguments.length > 0) {
  p__28859 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__28859);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__28862){
var p__28859 = cljs.core.seq(arglist__28862);
return portfolio_company_sites__delegate(p__28859);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
clustermap.api.constituencies = (function constituencies(){return clustermap.api.GET.call(null,"/api/bvca/constituencies");
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/constituencies/"),cljs.core.str(id)].join(''));
});
clustermap.api.portfolio_companies_summary = (function portfolio_companies_summary(){return clustermap.api.GET.call(null,"/api/bvca/portfolio-companies-summary");
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__28863){var vec__28865 = p__28863;var type_ids = cljs.core.nth.call(null,vec__28865,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__28863 = null;if (arguments.length > 0) {
  p__28863 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__28863);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__28866){
var p__28863 = cljs.core.seq(arglist__28866);
return portfolio_company_stats__delegate(p__28863);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__28867){var vec__28869 = p__28867;var type_ids = cljs.core.nth.call(null,vec__28869,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__28867 = null;if (arguments.length > 0) {
  p__28867 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__28867);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__28870){
var p__28867 = cljs.core.seq(arglist__28870);
return portfolio_company_site_stats__delegate(p__28867);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__28871){var vec__28873 = p__28871;var type_ids = cljs.core.nth.call(null,vec__28873,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__28871 = null;if (arguments.length > 0) {
  p__28871 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__28871);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__28874){
var p__28871 = cljs.core.seq(arglist__28874);
return portfolio_company_account_stats__delegate(p__28871);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET.call(null,"/api/bvca/investor-companies-summary");
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/investor-companies/"),cljs.core.str(id)].join(''));
});
