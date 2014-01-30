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
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__29732){var map__29734 = p__29732;var map__29734__$1 = ((cljs.core.seq_QMARK_.call(null,map__29734))?cljs.core.apply.call(null,cljs.core.hash_map,map__29734):map__29734);var raw = cljs.core.get.call(null,map__29734__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}
}).call(null,(JSON.parse.call(null,event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__29732 = null;if (arguments.length > 1) {
  p__29732 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__29732);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__29735){
var url = cljs.core.first(arglist__29735);
var p__29732 = cljs.core.rest(arglist__29735);
return GET__delegate(url,p__29732);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29868){var state_val_29869 = (state_29868[1]);if((state_val_29869 === 1))
{var state_29868__$1 = state_29868;var statearr_29870_29906 = state_29868__$1;(statearr_29870_29906[2] = null);
(statearr_29870_29906[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 2))
{var state_29868__$1 = state_29868;if(true)
{var statearr_29871_29907 = state_29868__$1;(statearr_29871_29907[1] = 4);
} else
{var statearr_29872_29908 = state_29868__$1;(statearr_29872_29908[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 3))
{var inst_29866 = (state_29868[2]);var state_29868__$1 = state_29868;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29868__$1,inst_29866);
} else
{if((state_val_29869 === 4))
{var state_29868__$1 = state_29868;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29868__$1,7,ocomm);
} else
{if((state_val_29869 === 5))
{var state_29868__$1 = state_29868;var statearr_29873_29909 = state_29868__$1;(statearr_29873_29909[2] = null);
(statearr_29873_29909[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 6))
{var inst_29864 = (state_29868[2]);var state_29868__$1 = state_29868;var statearr_29874_29910 = state_29868__$1;(statearr_29874_29910[2] = inst_29864);
(statearr_29874_29910[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 7))
{var inst_29826 = (state_29868[7]);var inst_29825 = (state_29868[2]);var inst_29826__$1 = cljs.core.nth.call(null,inst_29825,0,null);var inst_29827 = cljs.core.nth.call(null,inst_29825,1,null);var inst_29828 = cljs.core.sequential_QMARK_.call(null,inst_29826__$1);var state_29868__$1 = (function (){var statearr_29875 = state_29868;(statearr_29875[7] = inst_29826__$1);
(statearr_29875[8] = inst_29827);
return statearr_29875;
})();if(inst_29828)
{var statearr_29876_29911 = state_29868__$1;(statearr_29876_29911[1] = 8);
} else
{var statearr_29877_29912 = state_29868__$1;(statearr_29877_29912[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 8))
{var inst_29826 = (state_29868[7]);var inst_29830 = inst_29826;var inst_29831 = cljs.core.PersistentVector.EMPTY;var state_29868__$1 = (function (){var statearr_29878 = state_29868;(statearr_29878[9] = inst_29831);
(statearr_29878[10] = inst_29830);
return statearr_29878;
})();var statearr_29879_29913 = state_29868__$1;(statearr_29879_29913[2] = null);
(statearr_29879_29913[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 9))
{var inst_29826 = (state_29868[7]);var state_29868__$1 = state_29868;if(cljs.core.truth_(inst_29826))
{var statearr_29880_29914 = state_29868__$1;(statearr_29880_29914[1] = 20);
} else
{var statearr_29881_29915 = state_29868__$1;(statearr_29881_29915[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 10))
{var inst_29827 = (state_29868[8]);var inst_29859 = (state_29868[2]);var inst_29860 = cljs.core.apply.call(null,handler,inst_29859,inst_29827);var state_29868__$1 = (function (){var statearr_29882 = state_29868;(statearr_29882[11] = inst_29860);
return statearr_29882;
})();var statearr_29883_29916 = state_29868__$1;(statearr_29883_29916[2] = null);
(statearr_29883_29916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 11))
{var inst_29830 = (state_29868[10]);var inst_29833 = cljs.core.empty_QMARK_.call(null,inst_29830);var state_29868__$1 = state_29868;if(inst_29833)
{var statearr_29884_29917 = state_29868__$1;(statearr_29884_29917[1] = 13);
} else
{var statearr_29885_29918 = state_29868__$1;(statearr_29885_29918[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 12))
{var inst_29850 = (state_29868[2]);var state_29868__$1 = state_29868;var statearr_29886_29919 = state_29868__$1;(statearr_29886_29919[2] = inst_29850);
(statearr_29886_29919[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 13))
{var inst_29831 = (state_29868[9]);var state_29868__$1 = state_29868;var statearr_29887_29920 = state_29868__$1;(statearr_29887_29920[2] = inst_29831);
(statearr_29887_29920[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 14))
{var inst_29830 = (state_29868[10]);var inst_29836 = cljs.core.rest.call(null,inst_29830);var inst_29837 = cljs.core.first.call(null,inst_29830);var state_29868__$1 = (function (){var statearr_29888 = state_29868;(statearr_29888[12] = inst_29836);
return statearr_29888;
})();if(cljs.core.truth_(inst_29837))
{var statearr_29889_29921 = state_29868__$1;(statearr_29889_29921[1] = 16);
} else
{var statearr_29890_29922 = state_29868__$1;(statearr_29890_29922[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 15))
{var inst_29848 = (state_29868[2]);var state_29868__$1 = state_29868;var statearr_29891_29923 = state_29868__$1;(statearr_29891_29923[2] = inst_29848);
(statearr_29891_29923[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 16))
{var inst_29830 = (state_29868[10]);var inst_29839 = cljs.core.first.call(null,inst_29830);var state_29868__$1 = state_29868;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29868__$1,19,inst_29839);
} else
{if((state_val_29869 === 17))
{var state_29868__$1 = state_29868;var statearr_29892_29924 = state_29868__$1;(statearr_29892_29924[2] = null);
(statearr_29892_29924[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 18))
{var inst_29831 = (state_29868[9]);var inst_29836 = (state_29868[12]);var inst_29844 = (state_29868[2]);var inst_29845 = cljs.core.conj.call(null,inst_29831,inst_29844);var inst_29830 = inst_29836;var inst_29831__$1 = inst_29845;var state_29868__$1 = (function (){var statearr_29893 = state_29868;(statearr_29893[9] = inst_29831__$1);
(statearr_29893[10] = inst_29830);
return statearr_29893;
})();var statearr_29894_29925 = state_29868__$1;(statearr_29894_29925[2] = null);
(statearr_29894_29925[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 19))
{var inst_29841 = (state_29868[2]);var state_29868__$1 = state_29868;var statearr_29895_29926 = state_29868__$1;(statearr_29895_29926[2] = inst_29841);
(statearr_29895_29926[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 20))
{var inst_29826 = (state_29868[7]);var state_29868__$1 = state_29868;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29868__$1,23,inst_29826);
} else
{if((state_val_29869 === 21))
{var state_29868__$1 = state_29868;var statearr_29896_29927 = state_29868__$1;(statearr_29896_29927[2] = null);
(statearr_29896_29927[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 22))
{var inst_29857 = (state_29868[2]);var state_29868__$1 = state_29868;var statearr_29897_29928 = state_29868__$1;(statearr_29897_29928[2] = inst_29857);
(statearr_29897_29928[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29869 === 23))
{var inst_29854 = (state_29868[2]);var state_29868__$1 = state_29868;var statearr_29898_29929 = state_29868__$1;(statearr_29898_29929[2] = inst_29854);
(statearr_29898_29929[1] = 22);
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
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_29902 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29902[0] = state_machine__5507__auto__);
(statearr_29902[1] = 1);
return statearr_29902;
});
var state_machine__5507__auto____1 = (function (state_29868){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29868);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29903){if((e29903 instanceof Object))
{var ex__5510__auto__ = e29903;var statearr_29904_29930 = state_29868;(statearr_29904_29930[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29868);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29903;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29931 = state_29868;
state_29868 = G__29931;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29868){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29905 = f__5522__auto__.call(null);(statearr_29905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29905;
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
var G__29934__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__29933 = rseq;var rcomm = cljs.core.nth.call(null,vec__29933,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__29933,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__29934 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29934__delegate.call(this,req_args);};
G__29934.cljs$lang$maxFixedArity = 0;
G__29934.cljs$lang$applyTo = (function (arglist__29935){
var req_args = cljs.core.seq(arglist__29935);
return G__29934__delegate(req_args);
});
G__29934.cljs$core$IFn$_invoke$arity$variadic = G__29934__delegate;
return G__29934;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29953){var state_val_29954 = (state_29953[1]);if((state_val_29954 === 2))
{var inst_29950 = (state_29953[2]);var inst_29951 = console.log(inst_29950);var state_29953__$1 = state_29953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29953__$1,inst_29951);
} else
{if((state_val_29954 === 1))
{var state_29953__$1 = state_29953;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29953__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_29958 = [null,null,null,null,null,null,null];(statearr_29958[0] = state_machine__5507__auto__);
(statearr_29958[1] = 1);
return statearr_29958;
});
var state_machine__5507__auto____1 = (function (state_29953){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29953);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29959){if((e29959 instanceof Object))
{var ex__5510__auto__ = e29959;var statearr_29960_29962 = state_29953;(statearr_29960_29962[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29953);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29963 = state_29953;
state_29953 = G__29963;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29953){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29961 = f__5522__auto__.call(null);(statearr_29961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__29964){
var f = cljs.core.first(arglist__29964);
var args = cljs.core.rest(arglist__29964);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__29967){var vec__29968 = p__29967;var k = cljs.core.nth.call(null,vec__29968,0,null);var v = cljs.core.nth.call(null,vec__29968,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > 0))
{return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituencies = (function constituencies(){return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies");
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/constituencies/"),cljs.core.str(id)].join(''));
});
clustermap.api.portfolio_companies_summary = (function portfolio_companies_summary(){return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/portfolio-companies-summary");
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__29969){var vec__29971 = p__29969;var type_ids = cljs.core.nth.call(null,vec__29971,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__29969 = null;if (arguments.length > 0) {
  p__29969 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__29969);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__29972){
var p__29969 = cljs.core.seq(arglist__29972);
return portfolio_company_sites__delegate(p__29969);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__29973){var vec__29975 = p__29973;var type_ids = cljs.core.nth.call(null,vec__29975,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__29973 = null;if (arguments.length > 0) {
  p__29973 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__29973);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__29976){
var p__29973 = cljs.core.seq(arglist__29976);
return portfolio_company_locations__delegate(p__29973);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__29977){var vec__29979 = p__29977;var type_ids = cljs.core.nth.call(null,vec__29979,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__29977 = null;if (arguments.length > 0) {
  p__29977 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__29977);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__29980){
var p__29977 = cljs.core.seq(arglist__29980);
return portfolio_company_stats__delegate(p__29977);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__29981){var vec__29983 = p__29981;var type_ids = cljs.core.nth.call(null,vec__29983,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__29981 = null;if (arguments.length > 0) {
  p__29981 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__29981);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__29984){
var p__29981 = cljs.core.seq(arglist__29984);
return portfolio_company_site_stats__delegate(p__29981);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__29985){var vec__29987 = p__29985;var type_ids = cljs.core.nth.call(null,vec__29987,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__29985 = null;if (arguments.length > 0) {
  p__29985 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__29985);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__29988){
var p__29985 = cljs.core.seq(arglist__29988);
return portfolio_company_site_account_timelines__delegate(p__29985);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__29989){var vec__29991 = p__29989;var type_ids = cljs.core.nth.call(null,vec__29991,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__29989 = null;if (arguments.length > 0) {
  p__29989 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__29989);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__29992){
var p__29989 = cljs.core.seq(arglist__29992);
return portfolio_company_account_stats__delegate(p__29989);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/investor-companies-summary");
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_index = (function() { 
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,[cljs.core.str("/api/boundaryline-collection-index/"),cljs.core.str(id)].join(''),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__29993){
var id = cljs.core.first(arglist__29993);
var opts = cljs.core.rest(arglist__29993);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,[cljs.core.str("/api/boundarylines/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(tolerance)].join(''),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__29994){
var id = cljs.core.first(arglist__29994);
arglist__29994 = cljs.core.next(arglist__29994);
var tolerance = cljs.core.first(arglist__29994);
var opts = cljs.core.rest(arglist__29994);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
