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
var GET__delegate = function (url,p__29103){var map__29105 = p__29103;var map__29105__$1 = ((cljs.core.seq_QMARK_.call(null,map__29105))?cljs.core.apply.call(null,cljs.core.hash_map,map__29105):map__29105);var raw = cljs.core.get.call(null,map__29105__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__29103 = null;if (arguments.length > 1) {
  p__29103 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__29103);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__29106){
var url = cljs.core.first(arglist__29106);
var p__29103 = cljs.core.rest(arglist__29106);
return GET__delegate(url,p__29103);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29213){var state_val_29214 = (state_29213[1]);if((state_val_29214 === 1))
{var state_29213__$1 = state_29213;var statearr_29215_29243 = state_29213__$1;(statearr_29215_29243[2] = null);
(statearr_29215_29243[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29214 === 2))
{var state_29213__$1 = state_29213;if(true)
{var statearr_29216_29244 = state_29213__$1;(statearr_29216_29244[1] = 4);
} else
{var statearr_29217_29245 = state_29213__$1;(statearr_29217_29245[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29214 === 3))
{var inst_29211 = (state_29213[2]);var state_29213__$1 = state_29213;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29213__$1,inst_29211);
} else
{if((state_val_29214 === 4))
{var state_29213__$1 = state_29213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29213__$1,7,ocomm);
} else
{if((state_val_29214 === 5))
{var state_29213__$1 = state_29213;var statearr_29218_29246 = state_29213__$1;(statearr_29218_29246[2] = null);
(statearr_29218_29246[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29214 === 6))
{var inst_29209 = (state_29213[2]);var state_29213__$1 = state_29213;var statearr_29219_29247 = state_29213__$1;(statearr_29219_29247[2] = inst_29209);
(statearr_29219_29247[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29214 === 7))
{var inst_29180 = (state_29213[7]);var inst_29179 = (state_29213[2]);var inst_29180__$1 = cljs.core.nth.call(null,inst_29179,0,null);var inst_29181 = cljs.core.nth.call(null,inst_29179,1,null);var inst_29182 = cljs.core.sequential_QMARK_.call(null,inst_29180__$1);var state_29213__$1 = (function (){var statearr_29220 = state_29213;(statearr_29220[8] = inst_29181);
(statearr_29220[7] = inst_29180__$1);
return statearr_29220;
})();if(inst_29182)
{var statearr_29221_29248 = state_29213__$1;(statearr_29221_29248[1] = 8);
} else
{var statearr_29222_29249 = state_29213__$1;(statearr_29222_29249[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29214 === 8))
{var inst_29180 = (state_29213[7]);var inst_29184 = inst_29180;var inst_29185 = cljs.core.PersistentVector.EMPTY;var state_29213__$1 = (function (){var statearr_29223 = state_29213;(statearr_29223[9] = inst_29184);
(statearr_29223[10] = inst_29185);
return statearr_29223;
})();var statearr_29224_29250 = state_29213__$1;(statearr_29224_29250[2] = null);
(statearr_29224_29250[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29214 === 9))
{var inst_29180 = (state_29213[7]);var state_29213__$1 = state_29213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29213__$1,17,inst_29180);
} else
{if((state_val_29214 === 10))
{var inst_29181 = (state_29213[8]);var inst_29204 = (state_29213[2]);var inst_29205 = cljs.core.apply.call(null,handler,inst_29204,inst_29181);var state_29213__$1 = (function (){var statearr_29225 = state_29213;(statearr_29225[11] = inst_29205);
return statearr_29225;
})();var statearr_29226_29251 = state_29213__$1;(statearr_29226_29251[2] = null);
(statearr_29226_29251[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29214 === 11))
{var inst_29184 = (state_29213[9]);var inst_29187 = cljs.core.empty_QMARK_.call(null,inst_29184);var state_29213__$1 = state_29213;if(inst_29187)
{var statearr_29227_29252 = state_29213__$1;(statearr_29227_29252[1] = 13);
} else
{var statearr_29228_29253 = state_29213__$1;(statearr_29228_29253[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29214 === 12))
{var inst_29199 = (state_29213[2]);var state_29213__$1 = state_29213;var statearr_29229_29254 = state_29213__$1;(statearr_29229_29254[2] = inst_29199);
(statearr_29229_29254[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29214 === 13))
{var inst_29185 = (state_29213[10]);var state_29213__$1 = state_29213;var statearr_29230_29255 = state_29213__$1;(statearr_29230_29255[2] = inst_29185);
(statearr_29230_29255[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29214 === 14))
{var inst_29184 = (state_29213[9]);var inst_29190 = cljs.core.rest.call(null,inst_29184);var inst_29191 = cljs.core.first.call(null,inst_29184);var state_29213__$1 = (function (){var statearr_29231 = state_29213;(statearr_29231[12] = inst_29190);
return statearr_29231;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29213__$1,16,inst_29191);
} else
{if((state_val_29214 === 15))
{var inst_29197 = (state_29213[2]);var state_29213__$1 = state_29213;var statearr_29232_29256 = state_29213__$1;(statearr_29232_29256[2] = inst_29197);
(statearr_29232_29256[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29214 === 16))
{var inst_29190 = (state_29213[12]);var inst_29185 = (state_29213[10]);var inst_29193 = (state_29213[2]);var inst_29194 = cljs.core.conj.call(null,inst_29185,inst_29193);var inst_29184 = inst_29190;var inst_29185__$1 = inst_29194;var state_29213__$1 = (function (){var statearr_29233 = state_29213;(statearr_29233[9] = inst_29184);
(statearr_29233[10] = inst_29185__$1);
return statearr_29233;
})();var statearr_29234_29257 = state_29213__$1;(statearr_29234_29257[2] = null);
(statearr_29234_29257[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29214 === 17))
{var inst_29202 = (state_29213[2]);var state_29213__$1 = state_29213;var statearr_29235_29258 = state_29213__$1;(statearr_29235_29258[2] = inst_29202);
(statearr_29235_29258[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_29239 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29239[0] = state_machine__5507__auto__);
(statearr_29239[1] = 1);
return statearr_29239;
});
var state_machine__5507__auto____1 = (function (state_29213){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29213);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29240){if((e29240 instanceof Object))
{var ex__5510__auto__ = e29240;var statearr_29241_29259 = state_29213;(statearr_29241_29259[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29213);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29240;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29260 = state_29213;
state_29213 = G__29260;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29213){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29242 = f__5522__auto__.call(null);(statearr_29242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29242;
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
var G__29263__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__29262 = rseq;var rcomm = cljs.core.nth.call(null,vec__29262,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__29262,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__29263 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29263__delegate.call(this,req_args);};
G__29263.cljs$lang$maxFixedArity = 0;
G__29263.cljs$lang$applyTo = (function (arglist__29264){
var req_args = cljs.core.seq(arglist__29264);
return G__29263__delegate(req_args);
});
G__29263.cljs$core$IFn$_invoke$arity$variadic = G__29263__delegate;
return G__29263;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29282){var state_val_29283 = (state_29282[1]);if((state_val_29283 === 2))
{var inst_29279 = (state_29282[2]);var inst_29280 = console.log(inst_29279);var state_29282__$1 = state_29282;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29282__$1,inst_29280);
} else
{if((state_val_29283 === 1))
{var state_29282__$1 = state_29282;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29282__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_29287 = [null,null,null,null,null,null,null];(statearr_29287[0] = state_machine__5507__auto__);
(statearr_29287[1] = 1);
return statearr_29287;
});
var state_machine__5507__auto____1 = (function (state_29282){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29282);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29288){if((e29288 instanceof Object))
{var ex__5510__auto__ = e29288;var statearr_29289_29291 = state_29282;(statearr_29289_29291[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29282);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29292 = state_29282;
state_29282 = G__29292;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29282){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29290 = f__5522__auto__.call(null);(statearr_29290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__29293){
var f = cljs.core.first(arglist__29293);
var args = cljs.core.rest(arglist__29293);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__29296){var vec__29297 = p__29296;var k = cljs.core.nth.call(null,vec__29297,0,null);var v = cljs.core.nth.call(null,vec__29297,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
}),m));
});
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > 0))
{return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
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
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__29298){var vec__29300 = p__29298;var type_ids = cljs.core.nth.call(null,vec__29300,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__29298 = null;if (arguments.length > 0) {
  p__29298 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__29298);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__29301){
var p__29298 = cljs.core.seq(arglist__29301);
return portfolio_company_sites__delegate(p__29298);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__29302){var vec__29304 = p__29302;var type_ids = cljs.core.nth.call(null,vec__29304,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__29302 = null;if (arguments.length > 0) {
  p__29302 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__29302);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__29305){
var p__29302 = cljs.core.seq(arglist__29305);
return portfolio_company_locations__delegate(p__29302);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__29306){var vec__29308 = p__29306;var type_ids = cljs.core.nth.call(null,vec__29308,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__29306 = null;if (arguments.length > 0) {
  p__29306 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__29306);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__29309){
var p__29306 = cljs.core.seq(arglist__29309);
return portfolio_company_stats__delegate(p__29306);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__29310){var vec__29312 = p__29310;var type_ids = cljs.core.nth.call(null,vec__29312,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__29310 = null;if (arguments.length > 0) {
  p__29310 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__29310);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__29313){
var p__29310 = cljs.core.seq(arglist__29313);
return portfolio_company_site_stats__delegate(p__29310);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__29314){var vec__29316 = p__29314;var type_ids = cljs.core.nth.call(null,vec__29316,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/bvca/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__29314 = null;if (arguments.length > 0) {
  p__29314 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__29314);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__29317){
var p__29314 = cljs.core.seq(arglist__29317);
return portfolio_company_account_stats__delegate(p__29314);
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
boundaryline_collections.cljs$lang$applyTo = (function (arglist__29318){
var id = cljs.core.first(arglist__29318);
var opts = cljs.core.rest(arglist__29318);
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
boundarylines.cljs$lang$applyTo = (function (arglist__29319){
var id = cljs.core.first(arglist__29319);
arglist__29319 = cljs.core.next(arglist__29319);
var tolerance = cljs.core.first(arglist__29319);
var opts = cljs.core.rest(arglist__29319);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
