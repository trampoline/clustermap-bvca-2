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
clustermap.api.GET = (function GET(url){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"]));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
});
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19217){var state_val_19218 = (state_19217[1]);if((state_val_19218 === 1))
{var state_19217__$1 = state_19217;var statearr_19219_19247 = state_19217__$1;(statearr_19219_19247[2] = null);
(statearr_19219_19247[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_19218 === 2))
{var state_19217__$1 = state_19217;if(true)
{var statearr_19220_19248 = state_19217__$1;(statearr_19220_19248[1] = 4);
} else
{var statearr_19221_19249 = state_19217__$1;(statearr_19221_19249[1] = 5);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_19218 === 3))
{var inst_19215 = (state_19217[2]);var state_19217__$1 = state_19217;return cljs.core.async.impl.ioc_helpers.return_chan(state_19217__$1,inst_19215);
} else
{if((state_val_19218 === 4))
{var state_19217__$1 = state_19217;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19217__$1,7,ocomm);
} else
{if((state_val_19218 === 5))
{var state_19217__$1 = state_19217;var statearr_19222_19250 = state_19217__$1;(statearr_19222_19250[2] = null);
(statearr_19222_19250[1] = 6);
return cljs.core.constant$keyword$135;
} else
{if((state_val_19218 === 6))
{var inst_19213 = (state_19217[2]);var state_19217__$1 = state_19217;var statearr_19223_19251 = state_19217__$1;(statearr_19223_19251[2] = inst_19213);
(statearr_19223_19251[1] = 3);
return cljs.core.constant$keyword$135;
} else
{if((state_val_19218 === 7))
{var inst_19184 = (state_19217[7]);var inst_19183 = (state_19217[2]);var inst_19184__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19183,0,null);var inst_19185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19183,1,null);var inst_19186 = cljs.core.sequential_QMARK_(inst_19184__$1);var state_19217__$1 = (function (){var statearr_19224 = state_19217;(statearr_19224[7] = inst_19184__$1);
(statearr_19224[8] = inst_19185);
return statearr_19224;
})();if(inst_19186)
{var statearr_19225_19252 = state_19217__$1;(statearr_19225_19252[1] = 8);
} else
{var statearr_19226_19253 = state_19217__$1;(statearr_19226_19253[1] = 9);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_19218 === 8))
{var inst_19184 = (state_19217[7]);var inst_19188 = inst_19184;var inst_19189 = cljs.core.PersistentVector.EMPTY;var state_19217__$1 = (function (){var statearr_19227 = state_19217;(statearr_19227[9] = inst_19189);
(statearr_19227[10] = inst_19188);
return statearr_19227;
})();var statearr_19228_19254 = state_19217__$1;(statearr_19228_19254[2] = null);
(statearr_19228_19254[1] = 11);
return cljs.core.constant$keyword$135;
} else
{if((state_val_19218 === 9))
{var inst_19184 = (state_19217[7]);var state_19217__$1 = state_19217;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19217__$1,17,inst_19184);
} else
{if((state_val_19218 === 10))
{var inst_19185 = (state_19217[8]);var inst_19208 = (state_19217[2]);var inst_19209 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_19208,inst_19185);var state_19217__$1 = (function (){var statearr_19229 = state_19217;(statearr_19229[11] = inst_19209);
return statearr_19229;
})();var statearr_19230_19255 = state_19217__$1;(statearr_19230_19255[2] = null);
(statearr_19230_19255[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_19218 === 11))
{var inst_19188 = (state_19217[10]);var inst_19191 = cljs.core.empty_QMARK_(inst_19188);var state_19217__$1 = state_19217;if(inst_19191)
{var statearr_19231_19256 = state_19217__$1;(statearr_19231_19256[1] = 13);
} else
{var statearr_19232_19257 = state_19217__$1;(statearr_19232_19257[1] = 14);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_19218 === 12))
{var inst_19203 = (state_19217[2]);var state_19217__$1 = state_19217;var statearr_19233_19258 = state_19217__$1;(statearr_19233_19258[2] = inst_19203);
(statearr_19233_19258[1] = 10);
return cljs.core.constant$keyword$135;
} else
{if((state_val_19218 === 13))
{var inst_19189 = (state_19217[9]);var state_19217__$1 = state_19217;var statearr_19234_19259 = state_19217__$1;(statearr_19234_19259[2] = inst_19189);
(statearr_19234_19259[1] = 15);
return cljs.core.constant$keyword$135;
} else
{if((state_val_19218 === 14))
{var inst_19188 = (state_19217[10]);var inst_19194 = cljs.core.rest(inst_19188);var inst_19195 = cljs.core.first(inst_19188);var state_19217__$1 = (function (){var statearr_19235 = state_19217;(statearr_19235[12] = inst_19194);
return statearr_19235;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19217__$1,16,inst_19195);
} else
{if((state_val_19218 === 15))
{var inst_19201 = (state_19217[2]);var state_19217__$1 = state_19217;var statearr_19236_19260 = state_19217__$1;(statearr_19236_19260[2] = inst_19201);
(statearr_19236_19260[1] = 12);
return cljs.core.constant$keyword$135;
} else
{if((state_val_19218 === 16))
{var inst_19194 = (state_19217[12]);var inst_19189 = (state_19217[9]);var inst_19197 = (state_19217[2]);var inst_19198 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19189,inst_19197);var inst_19188 = inst_19194;var inst_19189__$1 = inst_19198;var state_19217__$1 = (function (){var statearr_19237 = state_19217;(statearr_19237[9] = inst_19189__$1);
(statearr_19237[10] = inst_19188);
return statearr_19237;
})();var statearr_19238_19261 = state_19217__$1;(statearr_19238_19261[2] = null);
(statearr_19238_19261[1] = 11);
return cljs.core.constant$keyword$135;
} else
{if((state_val_19218 === 17))
{var inst_19206 = (state_19217[2]);var state_19217__$1 = state_19217;var statearr_19239_19262 = state_19217__$1;(statearr_19239_19262[2] = inst_19206);
(statearr_19239_19262[1] = 10);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_19243 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19243[0] = state_machine__5507__auto__);
(statearr_19243[1] = 1);
return statearr_19243;
});
var state_machine__5507__auto____1 = (function (state_19217){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19217);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19244){if((e19244 instanceof Object))
{var ex__5510__auto__ = e19244;var statearr_19245_19263 = state_19217;(statearr_19245_19263[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19217);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e19244;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__19264 = state_19217;
state_19217 = G__19264;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19217){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19246 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19246;
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
var G__19267__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__19266 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19266,0,null);var result_handler_args = cljs.core.nthnext(vec__19266,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__19267 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19267__delegate.call(this,req_args);};
G__19267.cljs$lang$maxFixedArity = 0;
G__19267.cljs$lang$applyTo = (function (arglist__19268){
var req_args = cljs.core.seq(arglist__19268);
return G__19267__delegate(req_args);
});
G__19267.cljs$core$IFn$_invoke$arity$variadic = G__19267__delegate;
return G__19267;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19286){var state_val_19287 = (state_19286[1]);if((state_val_19287 === 2))
{var inst_19283 = (state_19286[2]);var inst_19284 = console.log(inst_19283);var state_19286__$1 = state_19286;return cljs.core.async.impl.ioc_helpers.return_chan(state_19286__$1,inst_19284);
} else
{if((state_val_19287 === 1))
{var state_19286__$1 = state_19286;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19286__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19291 = [null,null,null,null,null,null,null];(statearr_19291[0] = state_machine__5507__auto__);
(statearr_19291[1] = 1);
return statearr_19291;
});
var state_machine__5507__auto____1 = (function (state_19286){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19286);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19292){if((e19292 instanceof Object))
{var ex__5510__auto__ = e19292;var statearr_19293_19295 = state_19286;(statearr_19293_19295[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19286);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e19292;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__19296 = state_19286;
state_19286 = G__19296;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19286){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19294 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19294;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__19297){
var f = cljs.core.first(arglist__19297);
var args = cljs.core.rest(arglist__19297);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19300){var vec__19301 = p__19300;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19301,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19301,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
}),m));
});
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > 0))
{return clustermap.api.GET([cljs.core.str("/api/bvca/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__19302){var vec__19304 = p__19302;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19304,0,null);return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__19302 = null;if (arguments.length > 0) {
  p__19302 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__19302);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__19305){
var p__19302 = cljs.core.seq(arglist__19305);
return portfolio_company_sites__delegate(p__19302);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
clustermap.api.constituencies = (function constituencies(){return clustermap.api.GET("/api/bvca/constituencies");
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET([cljs.core.str("/api/bvca/constituencies/"),cljs.core.str(id)].join(''));
});
clustermap.api.portfolio_companies_summary = (function portfolio_companies_summary(){return clustermap.api.GET("/api/bvca/portfolio-companies-summary");
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__19306){var vec__19308 = p__19306;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19308,0,null);return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__19306 = null;if (arguments.length > 0) {
  p__19306 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__19306);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__19309){
var p__19306 = cljs.core.seq(arglist__19309);
return portfolio_company_stats__delegate(p__19306);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__19310){var vec__19312 = p__19310;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19312,0,null);return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__19310 = null;if (arguments.length > 0) {
  p__19310 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__19310);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__19313){
var p__19310 = cljs.core.seq(arglist__19313);
return portfolio_company_site_stats__delegate(p__19310);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__19314){var vec__19316 = p__19314;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19316,0,null);return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__19314 = null;if (arguments.length > 0) {
  p__19314 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__19314);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__19317){
var p__19314 = cljs.core.seq(arglist__19317);
return portfolio_company_account_stats__delegate(p__19314);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET("/api/bvca/investor-companies-summary");
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET([cljs.core.str("/api/bvca/investor-companies/"),cljs.core.str(id)].join(''));
});
