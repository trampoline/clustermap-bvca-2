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
var GET__delegate = function (url,p__17946){var map__17948 = p__17946;var map__17948__$1 = ((cljs.core.seq_QMARK_.call(null,map__17948))?cljs.core.apply.call(null,cljs.core.hash_map,map__17948):map__17948);var raw = cljs.core.get.call(null,map__17948__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__17946 = null;if (arguments.length > 1) {
  p__17946 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__17946);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__17949){
var url = cljs.core.first(arglist__17949);
var p__17946 = cljs.core.rest(arglist__17949);
return GET__delegate(url,p__17946);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18056){var state_val_18057 = (state_18056[1]);if((state_val_18057 === 1))
{var state_18056__$1 = state_18056;var statearr_18058_18086 = state_18056__$1;(statearr_18058_18086[2] = null);
(statearr_18058_18086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18057 === 2))
{var state_18056__$1 = state_18056;if(true)
{var statearr_18059_18087 = state_18056__$1;(statearr_18059_18087[1] = 4);
} else
{var statearr_18060_18088 = state_18056__$1;(statearr_18060_18088[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18057 === 3))
{var inst_18054 = (state_18056[2]);var state_18056__$1 = state_18056;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18056__$1,inst_18054);
} else
{if((state_val_18057 === 4))
{var state_18056__$1 = state_18056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18056__$1,7,ocomm);
} else
{if((state_val_18057 === 5))
{var state_18056__$1 = state_18056;var statearr_18061_18089 = state_18056__$1;(statearr_18061_18089[2] = null);
(statearr_18061_18089[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18057 === 6))
{var inst_18052 = (state_18056[2]);var state_18056__$1 = state_18056;var statearr_18062_18090 = state_18056__$1;(statearr_18062_18090[2] = inst_18052);
(statearr_18062_18090[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18057 === 7))
{var inst_18023 = (state_18056[7]);var inst_18022 = (state_18056[2]);var inst_18023__$1 = cljs.core.nth.call(null,inst_18022,0,null);var inst_18024 = cljs.core.nth.call(null,inst_18022,1,null);var inst_18025 = cljs.core.sequential_QMARK_.call(null,inst_18023__$1);var state_18056__$1 = (function (){var statearr_18063 = state_18056;(statearr_18063[7] = inst_18023__$1);
(statearr_18063[8] = inst_18024);
return statearr_18063;
})();if(inst_18025)
{var statearr_18064_18091 = state_18056__$1;(statearr_18064_18091[1] = 8);
} else
{var statearr_18065_18092 = state_18056__$1;(statearr_18065_18092[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18057 === 8))
{var inst_18023 = (state_18056[7]);var inst_18027 = inst_18023;var inst_18028 = cljs.core.PersistentVector.EMPTY;var state_18056__$1 = (function (){var statearr_18066 = state_18056;(statearr_18066[9] = inst_18028);
(statearr_18066[10] = inst_18027);
return statearr_18066;
})();var statearr_18067_18093 = state_18056__$1;(statearr_18067_18093[2] = null);
(statearr_18067_18093[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18057 === 9))
{var inst_18023 = (state_18056[7]);var state_18056__$1 = state_18056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18056__$1,17,inst_18023);
} else
{if((state_val_18057 === 10))
{var inst_18024 = (state_18056[8]);var inst_18047 = (state_18056[2]);var inst_18048 = cljs.core.apply.call(null,handler,inst_18047,inst_18024);var state_18056__$1 = (function (){var statearr_18068 = state_18056;(statearr_18068[11] = inst_18048);
return statearr_18068;
})();var statearr_18069_18094 = state_18056__$1;(statearr_18069_18094[2] = null);
(statearr_18069_18094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18057 === 11))
{var inst_18027 = (state_18056[10]);var inst_18030 = cljs.core.empty_QMARK_.call(null,inst_18027);var state_18056__$1 = state_18056;if(inst_18030)
{var statearr_18070_18095 = state_18056__$1;(statearr_18070_18095[1] = 13);
} else
{var statearr_18071_18096 = state_18056__$1;(statearr_18071_18096[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18057 === 12))
{var inst_18042 = (state_18056[2]);var state_18056__$1 = state_18056;var statearr_18072_18097 = state_18056__$1;(statearr_18072_18097[2] = inst_18042);
(statearr_18072_18097[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18057 === 13))
{var inst_18028 = (state_18056[9]);var state_18056__$1 = state_18056;var statearr_18073_18098 = state_18056__$1;(statearr_18073_18098[2] = inst_18028);
(statearr_18073_18098[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18057 === 14))
{var inst_18027 = (state_18056[10]);var inst_18033 = cljs.core.rest.call(null,inst_18027);var inst_18034 = cljs.core.first.call(null,inst_18027);var state_18056__$1 = (function (){var statearr_18074 = state_18056;(statearr_18074[12] = inst_18033);
return statearr_18074;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18056__$1,16,inst_18034);
} else
{if((state_val_18057 === 15))
{var inst_18040 = (state_18056[2]);var state_18056__$1 = state_18056;var statearr_18075_18099 = state_18056__$1;(statearr_18075_18099[2] = inst_18040);
(statearr_18075_18099[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18057 === 16))
{var inst_18028 = (state_18056[9]);var inst_18033 = (state_18056[12]);var inst_18036 = (state_18056[2]);var inst_18037 = cljs.core.conj.call(null,inst_18028,inst_18036);var inst_18027 = inst_18033;var inst_18028__$1 = inst_18037;var state_18056__$1 = (function (){var statearr_18076 = state_18056;(statearr_18076[9] = inst_18028__$1);
(statearr_18076[10] = inst_18027);
return statearr_18076;
})();var statearr_18077_18100 = state_18056__$1;(statearr_18077_18100[2] = null);
(statearr_18077_18100[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18057 === 17))
{var inst_18045 = (state_18056[2]);var state_18056__$1 = state_18056;var statearr_18078_18101 = state_18056__$1;(statearr_18078_18101[2] = inst_18045);
(statearr_18078_18101[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_18082 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18082[0] = state_machine__5507__auto__);
(statearr_18082[1] = 1);
return statearr_18082;
});
var state_machine__5507__auto____1 = (function (state_18056){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_18056);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18083){if((e18083 instanceof Object))
{var ex__5510__auto__ = e18083;var statearr_18084_18102 = state_18056;(statearr_18084_18102[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18056);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18083;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18103 = state_18056;
state_18056 = G__18103;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18056){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18085 = f__5522__auto__.call(null);(statearr_18085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18085;
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
var G__18106__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__18105 = rseq;var rcomm = cljs.core.nth.call(null,vec__18105,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__18105,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__18106 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18106__delegate.call(this,req_args);};
G__18106.cljs$lang$maxFixedArity = 0;
G__18106.cljs$lang$applyTo = (function (arglist__18107){
var req_args = cljs.core.seq(arglist__18107);
return G__18106__delegate(req_args);
});
G__18106.cljs$core$IFn$_invoke$arity$variadic = G__18106__delegate;
return G__18106;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_18125){var state_val_18126 = (state_18125[1]);if((state_val_18126 === 2))
{var inst_18122 = (state_18125[2]);var inst_18123 = console.log(inst_18122);var state_18125__$1 = state_18125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18125__$1,inst_18123);
} else
{if((state_val_18126 === 1))
{var state_18125__$1 = state_18125;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18125__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_18130 = [null,null,null,null,null,null,null];(statearr_18130[0] = state_machine__5507__auto__);
(statearr_18130[1] = 1);
return statearr_18130;
});
var state_machine__5507__auto____1 = (function (state_18125){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_18125);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e18131){if((e18131 instanceof Object))
{var ex__5510__auto__ = e18131;var statearr_18132_18134 = state_18125;(statearr_18132_18134[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18125);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18135 = state_18125;
state_18125 = G__18135;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_18125){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_18125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_18133 = f__5522__auto__.call(null);(statearr_18133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_18133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__18136){
var f = cljs.core.first(arglist__18136);
var args = cljs.core.rest(arglist__18136);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__18139){var vec__18140 = p__18139;var k = cljs.core.nth.call(null,vec__18140,0,null);var v = cljs.core.nth.call(null,vec__18140,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
var portfolio_company_sites__delegate = function (p__18141){var vec__18143 = p__18141;var type_ids = cljs.core.nth.call(null,vec__18143,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__18141 = null;if (arguments.length > 0) {
  p__18141 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__18141);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__18144){
var p__18141 = cljs.core.seq(arglist__18144);
return portfolio_company_sites__delegate(p__18141);
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
var portfolio_company_stats__delegate = function (p__18145){var vec__18147 = p__18145;var type_ids = cljs.core.nth.call(null,vec__18147,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__18145 = null;if (arguments.length > 0) {
  p__18145 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__18145);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__18148){
var p__18145 = cljs.core.seq(arglist__18148);
return portfolio_company_stats__delegate(p__18145);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__18149){var vec__18151 = p__18149;var type_ids = cljs.core.nth.call(null,vec__18151,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__18149 = null;if (arguments.length > 0) {
  p__18149 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__18149);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__18152){
var p__18149 = cljs.core.seq(arglist__18152);
return portfolio_company_site_stats__delegate(p__18149);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__18153){var vec__18155 = p__18153;var type_ids = cljs.core.nth.call(null,vec__18155,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__18153 = null;if (arguments.length > 0) {
  p__18153 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__18153);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__18156){
var p__18153 = cljs.core.seq(arglist__18156);
return portfolio_company_account_stats__delegate(p__18153);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET.call(null,"/api/bvca/investor-companies-summary");
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collections = (function() { 
var boundaryline_collections__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,[cljs.core.str("/api/boundaryline-collections/"),cljs.core.str(id)].join(''),opts);
};
var boundaryline_collections = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collections__delegate.call(this,id,opts);};
boundaryline_collections.cljs$lang$maxFixedArity = 1;
boundaryline_collections.cljs$lang$applyTo = (function (arglist__18157){
var id = cljs.core.first(arglist__18157);
var opts = cljs.core.rest(arglist__18157);
return boundaryline_collections__delegate(id,opts);
});
boundaryline_collections.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collections__delegate;
return boundaryline_collections;
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
boundarylines.cljs$lang$applyTo = (function (arglist__18158){
var id = cljs.core.first(arglist__18158);
arglist__18158 = cljs.core.next(arglist__18158);
var tolerance = cljs.core.first(arglist__18158);
var opts = cljs.core.rest(arglist__18158);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;

//# sourceMappingURL=api.js.map