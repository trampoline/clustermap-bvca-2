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
var GET__delegate = function (url,p__19174){var map__19176 = p__19174;var map__19176__$1 = ((cljs.core.seq_QMARK_(map__19176))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19176):map__19176);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19176__$1,cljs.core.constant$keyword$173);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$154,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__19174 = null;if (arguments.length > 1) {
  p__19174 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19174);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19177){
var url = cljs.core.first(arglist__19177);
var p__19174 = cljs.core.rest(arglist__19177);
return GET__delegate(url,p__19174);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19284){var state_val_19285 = (state_19284[1]);if((state_val_19285 === 1))
{var state_19284__$1 = state_19284;var statearr_19286_19314 = state_19284__$1;(statearr_19286_19314[2] = null);
(statearr_19286_19314[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_19285 === 2))
{var state_19284__$1 = state_19284;if(true)
{var statearr_19287_19315 = state_19284__$1;(statearr_19287_19315[1] = 4);
} else
{var statearr_19288_19316 = state_19284__$1;(statearr_19288_19316[1] = 5);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_19285 === 3))
{var inst_19282 = (state_19284[2]);var state_19284__$1 = state_19284;return cljs.core.async.impl.ioc_helpers.return_chan(state_19284__$1,inst_19282);
} else
{if((state_val_19285 === 4))
{var state_19284__$1 = state_19284;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19284__$1,7,ocomm);
} else
{if((state_val_19285 === 5))
{var state_19284__$1 = state_19284;var statearr_19289_19317 = state_19284__$1;(statearr_19289_19317[2] = null);
(statearr_19289_19317[1] = 6);
return cljs.core.constant$keyword$159;
} else
{if((state_val_19285 === 6))
{var inst_19280 = (state_19284[2]);var state_19284__$1 = state_19284;var statearr_19290_19318 = state_19284__$1;(statearr_19290_19318[2] = inst_19280);
(statearr_19290_19318[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_19285 === 7))
{var inst_19251 = (state_19284[7]);var inst_19250 = (state_19284[2]);var inst_19251__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19250,0,null);var inst_19252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19250,1,null);var inst_19253 = cljs.core.sequential_QMARK_(inst_19251__$1);var state_19284__$1 = (function (){var statearr_19291 = state_19284;(statearr_19291[7] = inst_19251__$1);
(statearr_19291[8] = inst_19252);
return statearr_19291;
})();if(inst_19253)
{var statearr_19292_19319 = state_19284__$1;(statearr_19292_19319[1] = 8);
} else
{var statearr_19293_19320 = state_19284__$1;(statearr_19293_19320[1] = 9);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_19285 === 8))
{var inst_19251 = (state_19284[7]);var inst_19255 = inst_19251;var inst_19256 = cljs.core.PersistentVector.EMPTY;var state_19284__$1 = (function (){var statearr_19294 = state_19284;(statearr_19294[9] = inst_19255);
(statearr_19294[10] = inst_19256);
return statearr_19294;
})();var statearr_19295_19321 = state_19284__$1;(statearr_19295_19321[2] = null);
(statearr_19295_19321[1] = 11);
return cljs.core.constant$keyword$159;
} else
{if((state_val_19285 === 9))
{var inst_19251 = (state_19284[7]);var state_19284__$1 = state_19284;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19284__$1,17,inst_19251);
} else
{if((state_val_19285 === 10))
{var inst_19252 = (state_19284[8]);var inst_19275 = (state_19284[2]);var inst_19276 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_19275,inst_19252);var state_19284__$1 = (function (){var statearr_19296 = state_19284;(statearr_19296[11] = inst_19276);
return statearr_19296;
})();var statearr_19297_19322 = state_19284__$1;(statearr_19297_19322[2] = null);
(statearr_19297_19322[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_19285 === 11))
{var inst_19255 = (state_19284[9]);var inst_19258 = cljs.core.empty_QMARK_(inst_19255);var state_19284__$1 = state_19284;if(inst_19258)
{var statearr_19298_19323 = state_19284__$1;(statearr_19298_19323[1] = 13);
} else
{var statearr_19299_19324 = state_19284__$1;(statearr_19299_19324[1] = 14);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_19285 === 12))
{var inst_19270 = (state_19284[2]);var state_19284__$1 = state_19284;var statearr_19300_19325 = state_19284__$1;(statearr_19300_19325[2] = inst_19270);
(statearr_19300_19325[1] = 10);
return cljs.core.constant$keyword$159;
} else
{if((state_val_19285 === 13))
{var inst_19256 = (state_19284[10]);var state_19284__$1 = state_19284;var statearr_19301_19326 = state_19284__$1;(statearr_19301_19326[2] = inst_19256);
(statearr_19301_19326[1] = 15);
return cljs.core.constant$keyword$159;
} else
{if((state_val_19285 === 14))
{var inst_19255 = (state_19284[9]);var inst_19261 = cljs.core.rest(inst_19255);var inst_19262 = cljs.core.first(inst_19255);var state_19284__$1 = (function (){var statearr_19302 = state_19284;(statearr_19302[12] = inst_19261);
return statearr_19302;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19284__$1,16,inst_19262);
} else
{if((state_val_19285 === 15))
{var inst_19268 = (state_19284[2]);var state_19284__$1 = state_19284;var statearr_19303_19327 = state_19284__$1;(statearr_19303_19327[2] = inst_19268);
(statearr_19303_19327[1] = 12);
return cljs.core.constant$keyword$159;
} else
{if((state_val_19285 === 16))
{var inst_19256 = (state_19284[10]);var inst_19261 = (state_19284[12]);var inst_19264 = (state_19284[2]);var inst_19265 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19256,inst_19264);var inst_19255 = inst_19261;var inst_19256__$1 = inst_19265;var state_19284__$1 = (function (){var statearr_19304 = state_19284;(statearr_19304[9] = inst_19255);
(statearr_19304[10] = inst_19256__$1);
return statearr_19304;
})();var statearr_19305_19328 = state_19284__$1;(statearr_19305_19328[2] = null);
(statearr_19305_19328[1] = 11);
return cljs.core.constant$keyword$159;
} else
{if((state_val_19285 === 17))
{var inst_19273 = (state_19284[2]);var state_19284__$1 = state_19284;var statearr_19306_19329 = state_19284__$1;(statearr_19306_19329[2] = inst_19273);
(statearr_19306_19329[1] = 10);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_19310 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19310[0] = state_machine__5507__auto__);
(statearr_19310[1] = 1);
return statearr_19310;
});
var state_machine__5507__auto____1 = (function (state_19284){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19284);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19311){if((e19311 instanceof Object))
{var ex__5510__auto__ = e19311;var statearr_19312_19330 = state_19284;(statearr_19312_19330[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19284);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e19311;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__19331 = state_19284;
state_19284 = G__19331;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19284){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19313 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19313;
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
var G__19334__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__19333 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19333,0,null);var result_handler_args = cljs.core.nthnext(vec__19333,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__19334 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19334__delegate.call(this,req_args);};
G__19334.cljs$lang$maxFixedArity = 0;
G__19334.cljs$lang$applyTo = (function (arglist__19335){
var req_args = cljs.core.seq(arglist__19335);
return G__19334__delegate(req_args);
});
G__19334.cljs$core$IFn$_invoke$arity$variadic = G__19334__delegate;
return G__19334;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19353){var state_val_19354 = (state_19353[1]);if((state_val_19354 === 2))
{var inst_19350 = (state_19353[2]);var inst_19351 = console.log(inst_19350);var state_19353__$1 = state_19353;return cljs.core.async.impl.ioc_helpers.return_chan(state_19353__$1,inst_19351);
} else
{if((state_val_19354 === 1))
{var state_19353__$1 = state_19353;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19353__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19358 = [null,null,null,null,null,null,null];(statearr_19358[0] = state_machine__5507__auto__);
(statearr_19358[1] = 1);
return statearr_19358;
});
var state_machine__5507__auto____1 = (function (state_19353){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19353);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19359){if((e19359 instanceof Object))
{var ex__5510__auto__ = e19359;var statearr_19360_19362 = state_19353;(statearr_19360_19362[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19353);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e19359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__19363 = state_19353;
state_19353 = G__19363;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19353){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19361 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19361;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__19364){
var f = cljs.core.first(arglist__19364);
var args = cljs.core.rest(arglist__19364);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19367){var vec__19368 = p__19367;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19368,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19368,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
var portfolio_company_sites__delegate = function (p__19369){var vec__19371 = p__19369;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19371,0,null);return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__19369 = null;if (arguments.length > 0) {
  p__19369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__19369);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__19372){
var p__19369 = cljs.core.seq(arglist__19372);
return portfolio_company_sites__delegate(p__19369);
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
var portfolio_company_stats__delegate = function (p__19373){var vec__19375 = p__19373;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19375,0,null);return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__19373 = null;if (arguments.length > 0) {
  p__19373 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__19373);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__19376){
var p__19373 = cljs.core.seq(arglist__19376);
return portfolio_company_stats__delegate(p__19373);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__19377){var vec__19379 = p__19377;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19379,0,null);return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__19377 = null;if (arguments.length > 0) {
  p__19377 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__19377);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__19380){
var p__19377 = cljs.core.seq(arglist__19380);
return portfolio_company_site_stats__delegate(p__19377);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__19381){var vec__19383 = p__19381;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19383,0,null);return clustermap.api.GET([cljs.core.str("/api/bvca/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__19381 = null;if (arguments.length > 0) {
  p__19381 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__19381);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__19384){
var p__19381 = cljs.core.seq(arglist__19384);
return portfolio_company_account_stats__delegate(p__19381);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET("/api/bvca/investor-companies-summary");
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET([cljs.core.str("/api/bvca/investor-companies/"),cljs.core.str(id)].join(''));
});
