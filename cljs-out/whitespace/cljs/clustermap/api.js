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
var GET__delegate = function (url,p__29318){var map__29320 = p__29318;var map__29320__$1 = ((cljs.core.seq_QMARK_.call(null,map__29320))?cljs.core.apply.call(null,cljs.core.hash_map,map__29320):map__29320);var raw = cljs.core.get.call(null,map__29320__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__29318 = null;if (arguments.length > 1) {
  p__29318 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__29318);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__29321){
var url = cljs.core.first(arglist__29321);
var p__29318 = cljs.core.rest(arglist__29321);
return GET__delegate(url,p__29318);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29428){var state_val_29429 = (state_29428[1]);if((state_val_29429 === 1))
{var state_29428__$1 = state_29428;var statearr_29430_29458 = state_29428__$1;(statearr_29430_29458[2] = null);
(statearr_29430_29458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29429 === 2))
{var state_29428__$1 = state_29428;if(true)
{var statearr_29431_29459 = state_29428__$1;(statearr_29431_29459[1] = 4);
} else
{var statearr_29432_29460 = state_29428__$1;(statearr_29432_29460[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29429 === 3))
{var inst_29426 = (state_29428[2]);var state_29428__$1 = state_29428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29428__$1,inst_29426);
} else
{if((state_val_29429 === 4))
{var state_29428__$1 = state_29428;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29428__$1,7,ocomm);
} else
{if((state_val_29429 === 5))
{var state_29428__$1 = state_29428;var statearr_29433_29461 = state_29428__$1;(statearr_29433_29461[2] = null);
(statearr_29433_29461[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29429 === 6))
{var inst_29424 = (state_29428[2]);var state_29428__$1 = state_29428;var statearr_29434_29462 = state_29428__$1;(statearr_29434_29462[2] = inst_29424);
(statearr_29434_29462[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29429 === 7))
{var inst_29395 = (state_29428[7]);var inst_29394 = (state_29428[2]);var inst_29395__$1 = cljs.core.nth.call(null,inst_29394,0,null);var inst_29396 = cljs.core.nth.call(null,inst_29394,1,null);var inst_29397 = cljs.core.sequential_QMARK_.call(null,inst_29395__$1);var state_29428__$1 = (function (){var statearr_29435 = state_29428;(statearr_29435[7] = inst_29395__$1);
(statearr_29435[8] = inst_29396);
return statearr_29435;
})();if(inst_29397)
{var statearr_29436_29463 = state_29428__$1;(statearr_29436_29463[1] = 8);
} else
{var statearr_29437_29464 = state_29428__$1;(statearr_29437_29464[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29429 === 8))
{var inst_29395 = (state_29428[7]);var inst_29399 = inst_29395;var inst_29400 = cljs.core.PersistentVector.EMPTY;var state_29428__$1 = (function (){var statearr_29438 = state_29428;(statearr_29438[9] = inst_29399);
(statearr_29438[10] = inst_29400);
return statearr_29438;
})();var statearr_29439_29465 = state_29428__$1;(statearr_29439_29465[2] = null);
(statearr_29439_29465[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29429 === 9))
{var inst_29395 = (state_29428[7]);var state_29428__$1 = state_29428;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29428__$1,17,inst_29395);
} else
{if((state_val_29429 === 10))
{var inst_29396 = (state_29428[8]);var inst_29419 = (state_29428[2]);var inst_29420 = cljs.core.apply.call(null,handler,inst_29419,inst_29396);var state_29428__$1 = (function (){var statearr_29440 = state_29428;(statearr_29440[11] = inst_29420);
return statearr_29440;
})();var statearr_29441_29466 = state_29428__$1;(statearr_29441_29466[2] = null);
(statearr_29441_29466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29429 === 11))
{var inst_29399 = (state_29428[9]);var inst_29402 = cljs.core.empty_QMARK_.call(null,inst_29399);var state_29428__$1 = state_29428;if(inst_29402)
{var statearr_29442_29467 = state_29428__$1;(statearr_29442_29467[1] = 13);
} else
{var statearr_29443_29468 = state_29428__$1;(statearr_29443_29468[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29429 === 12))
{var inst_29414 = (state_29428[2]);var state_29428__$1 = state_29428;var statearr_29444_29469 = state_29428__$1;(statearr_29444_29469[2] = inst_29414);
(statearr_29444_29469[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29429 === 13))
{var inst_29400 = (state_29428[10]);var state_29428__$1 = state_29428;var statearr_29445_29470 = state_29428__$1;(statearr_29445_29470[2] = inst_29400);
(statearr_29445_29470[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29429 === 14))
{var inst_29399 = (state_29428[9]);var inst_29405 = cljs.core.rest.call(null,inst_29399);var inst_29406 = cljs.core.first.call(null,inst_29399);var state_29428__$1 = (function (){var statearr_29446 = state_29428;(statearr_29446[12] = inst_29405);
return statearr_29446;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29428__$1,16,inst_29406);
} else
{if((state_val_29429 === 15))
{var inst_29412 = (state_29428[2]);var state_29428__$1 = state_29428;var statearr_29447_29471 = state_29428__$1;(statearr_29447_29471[2] = inst_29412);
(statearr_29447_29471[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29429 === 16))
{var inst_29405 = (state_29428[12]);var inst_29400 = (state_29428[10]);var inst_29408 = (state_29428[2]);var inst_29409 = cljs.core.conj.call(null,inst_29400,inst_29408);var inst_29399 = inst_29405;var inst_29400__$1 = inst_29409;var state_29428__$1 = (function (){var statearr_29448 = state_29428;(statearr_29448[9] = inst_29399);
(statearr_29448[10] = inst_29400__$1);
return statearr_29448;
})();var statearr_29449_29472 = state_29428__$1;(statearr_29449_29472[2] = null);
(statearr_29449_29472[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29429 === 17))
{var inst_29417 = (state_29428[2]);var state_29428__$1 = state_29428;var statearr_29450_29473 = state_29428__$1;(statearr_29450_29473[2] = inst_29417);
(statearr_29450_29473[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_29454 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29454[0] = state_machine__5507__auto__);
(statearr_29454[1] = 1);
return statearr_29454;
});
var state_machine__5507__auto____1 = (function (state_29428){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29428);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29455){if((e29455 instanceof Object))
{var ex__5510__auto__ = e29455;var statearr_29456_29474 = state_29428;(statearr_29456_29474[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29428);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29455;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29475 = state_29428;
state_29428 = G__29475;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29428){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29457 = f__5522__auto__.call(null);(statearr_29457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29457;
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
var G__29478__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__29477 = rseq;var rcomm = cljs.core.nth.call(null,vec__29477,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__29477,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__29478 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29478__delegate.call(this,req_args);};
G__29478.cljs$lang$maxFixedArity = 0;
G__29478.cljs$lang$applyTo = (function (arglist__29479){
var req_args = cljs.core.seq(arglist__29479);
return G__29478__delegate(req_args);
});
G__29478.cljs$core$IFn$_invoke$arity$variadic = G__29478__delegate;
return G__29478;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29497){var state_val_29498 = (state_29497[1]);if((state_val_29498 === 2))
{var inst_29494 = (state_29497[2]);var inst_29495 = console.log(inst_29494);var state_29497__$1 = state_29497;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29497__$1,inst_29495);
} else
{if((state_val_29498 === 1))
{var state_29497__$1 = state_29497;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29497__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_29502 = [null,null,null,null,null,null,null];(statearr_29502[0] = state_machine__5507__auto__);
(statearr_29502[1] = 1);
return statearr_29502;
});
var state_machine__5507__auto____1 = (function (state_29497){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29497);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29503){if((e29503 instanceof Object))
{var ex__5510__auto__ = e29503;var statearr_29504_29506 = state_29497;(statearr_29504_29506[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29497);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29503;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29507 = state_29497;
state_29497 = G__29507;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29497){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29505 = f__5522__auto__.call(null);(statearr_29505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29505;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__29508){
var f = cljs.core.first(arglist__29508);
var args = cljs.core.rest(arglist__29508);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__29511){var vec__29512 = p__29511;var k = cljs.core.nth.call(null,vec__29512,0,null);var v = cljs.core.nth.call(null,vec__29512,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
var portfolio_company_sites__delegate = function (p__29513){var vec__29515 = p__29513;var type_ids = cljs.core.nth.call(null,vec__29515,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__29513 = null;if (arguments.length > 0) {
  p__29513 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__29513);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__29516){
var p__29513 = cljs.core.seq(arglist__29516);
return portfolio_company_sites__delegate(p__29513);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__29517){var vec__29519 = p__29517;var type_ids = cljs.core.nth.call(null,vec__29519,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__29517 = null;if (arguments.length > 0) {
  p__29517 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__29517);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__29520){
var p__29517 = cljs.core.seq(arglist__29520);
return portfolio_company_locations__delegate(p__29517);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__29521){var vec__29523 = p__29521;var type_ids = cljs.core.nth.call(null,vec__29523,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__29521 = null;if (arguments.length > 0) {
  p__29521 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__29521);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__29524){
var p__29521 = cljs.core.seq(arglist__29524);
return portfolio_company_stats__delegate(p__29521);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__29525){var vec__29527 = p__29525;var type_ids = cljs.core.nth.call(null,vec__29527,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__29525 = null;if (arguments.length > 0) {
  p__29525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__29525);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__29528){
var p__29525 = cljs.core.seq(arglist__29528);
return portfolio_company_site_stats__delegate(p__29525);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__29529){var vec__29531 = p__29529;var type_ids = cljs.core.nth.call(null,vec__29531,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__29529 = null;if (arguments.length > 0) {
  p__29529 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__29529);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__29532){
var p__29529 = cljs.core.seq(arglist__29532);
return portfolio_company_account_stats__delegate(p__29529);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__29533){
var id = cljs.core.first(arglist__29533);
var opts = cljs.core.rest(arglist__29533);
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
boundarylines.cljs$lang$applyTo = (function (arglist__29534){
var id = cljs.core.first(arglist__29534);
arglist__29534 = cljs.core.next(arglist__29534);
var tolerance = cljs.core.first(arglist__29534);
var opts = cljs.core.rest(arglist__29534);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
