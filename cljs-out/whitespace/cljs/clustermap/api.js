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
var GET__delegate = function (url,p__29304){var map__29306 = p__29304;var map__29306__$1 = ((cljs.core.seq_QMARK_.call(null,map__29306))?cljs.core.apply.call(null,cljs.core.hash_map,map__29306):map__29306);var raw = cljs.core.get.call(null,map__29306__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__29304 = null;if (arguments.length > 1) {
  p__29304 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__29304);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__29307){
var url = cljs.core.first(arglist__29307);
var p__29304 = cljs.core.rest(arglist__29307);
return GET__delegate(url,p__29304);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29414){var state_val_29415 = (state_29414[1]);if((state_val_29415 === 1))
{var state_29414__$1 = state_29414;var statearr_29416_29444 = state_29414__$1;(statearr_29416_29444[2] = null);
(statearr_29416_29444[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29415 === 2))
{var state_29414__$1 = state_29414;if(true)
{var statearr_29417_29445 = state_29414__$1;(statearr_29417_29445[1] = 4);
} else
{var statearr_29418_29446 = state_29414__$1;(statearr_29418_29446[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29415 === 3))
{var inst_29412 = (state_29414[2]);var state_29414__$1 = state_29414;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29414__$1,inst_29412);
} else
{if((state_val_29415 === 4))
{var state_29414__$1 = state_29414;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29414__$1,7,ocomm);
} else
{if((state_val_29415 === 5))
{var state_29414__$1 = state_29414;var statearr_29419_29447 = state_29414__$1;(statearr_29419_29447[2] = null);
(statearr_29419_29447[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29415 === 6))
{var inst_29410 = (state_29414[2]);var state_29414__$1 = state_29414;var statearr_29420_29448 = state_29414__$1;(statearr_29420_29448[2] = inst_29410);
(statearr_29420_29448[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29415 === 7))
{var inst_29381 = (state_29414[7]);var inst_29380 = (state_29414[2]);var inst_29381__$1 = cljs.core.nth.call(null,inst_29380,0,null);var inst_29382 = cljs.core.nth.call(null,inst_29380,1,null);var inst_29383 = cljs.core.sequential_QMARK_.call(null,inst_29381__$1);var state_29414__$1 = (function (){var statearr_29421 = state_29414;(statearr_29421[7] = inst_29381__$1);
(statearr_29421[8] = inst_29382);
return statearr_29421;
})();if(inst_29383)
{var statearr_29422_29449 = state_29414__$1;(statearr_29422_29449[1] = 8);
} else
{var statearr_29423_29450 = state_29414__$1;(statearr_29423_29450[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29415 === 8))
{var inst_29381 = (state_29414[7]);var inst_29385 = inst_29381;var inst_29386 = cljs.core.PersistentVector.EMPTY;var state_29414__$1 = (function (){var statearr_29424 = state_29414;(statearr_29424[9] = inst_29386);
(statearr_29424[10] = inst_29385);
return statearr_29424;
})();var statearr_29425_29451 = state_29414__$1;(statearr_29425_29451[2] = null);
(statearr_29425_29451[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29415 === 9))
{var inst_29381 = (state_29414[7]);var state_29414__$1 = state_29414;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29414__$1,17,inst_29381);
} else
{if((state_val_29415 === 10))
{var inst_29382 = (state_29414[8]);var inst_29405 = (state_29414[2]);var inst_29406 = cljs.core.apply.call(null,handler,inst_29405,inst_29382);var state_29414__$1 = (function (){var statearr_29426 = state_29414;(statearr_29426[11] = inst_29406);
return statearr_29426;
})();var statearr_29427_29452 = state_29414__$1;(statearr_29427_29452[2] = null);
(statearr_29427_29452[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29415 === 11))
{var inst_29385 = (state_29414[10]);var inst_29388 = cljs.core.empty_QMARK_.call(null,inst_29385);var state_29414__$1 = state_29414;if(inst_29388)
{var statearr_29428_29453 = state_29414__$1;(statearr_29428_29453[1] = 13);
} else
{var statearr_29429_29454 = state_29414__$1;(statearr_29429_29454[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29415 === 12))
{var inst_29400 = (state_29414[2]);var state_29414__$1 = state_29414;var statearr_29430_29455 = state_29414__$1;(statearr_29430_29455[2] = inst_29400);
(statearr_29430_29455[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29415 === 13))
{var inst_29386 = (state_29414[9]);var state_29414__$1 = state_29414;var statearr_29431_29456 = state_29414__$1;(statearr_29431_29456[2] = inst_29386);
(statearr_29431_29456[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29415 === 14))
{var inst_29385 = (state_29414[10]);var inst_29391 = cljs.core.rest.call(null,inst_29385);var inst_29392 = cljs.core.first.call(null,inst_29385);var state_29414__$1 = (function (){var statearr_29432 = state_29414;(statearr_29432[12] = inst_29391);
return statearr_29432;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29414__$1,16,inst_29392);
} else
{if((state_val_29415 === 15))
{var inst_29398 = (state_29414[2]);var state_29414__$1 = state_29414;var statearr_29433_29457 = state_29414__$1;(statearr_29433_29457[2] = inst_29398);
(statearr_29433_29457[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29415 === 16))
{var inst_29391 = (state_29414[12]);var inst_29386 = (state_29414[9]);var inst_29394 = (state_29414[2]);var inst_29395 = cljs.core.conj.call(null,inst_29386,inst_29394);var inst_29385 = inst_29391;var inst_29386__$1 = inst_29395;var state_29414__$1 = (function (){var statearr_29434 = state_29414;(statearr_29434[9] = inst_29386__$1);
(statearr_29434[10] = inst_29385);
return statearr_29434;
})();var statearr_29435_29458 = state_29414__$1;(statearr_29435_29458[2] = null);
(statearr_29435_29458[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29415 === 17))
{var inst_29403 = (state_29414[2]);var state_29414__$1 = state_29414;var statearr_29436_29459 = state_29414__$1;(statearr_29436_29459[2] = inst_29403);
(statearr_29436_29459[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_29440 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29440[0] = state_machine__5507__auto__);
(statearr_29440[1] = 1);
return statearr_29440;
});
var state_machine__5507__auto____1 = (function (state_29414){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29414);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29441){if((e29441 instanceof Object))
{var ex__5510__auto__ = e29441;var statearr_29442_29460 = state_29414;(statearr_29442_29460[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29414);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29441;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29461 = state_29414;
state_29414 = G__29461;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29414){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29443 = f__5522__auto__.call(null);(statearr_29443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29443;
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
var G__29464__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__29463 = rseq;var rcomm = cljs.core.nth.call(null,vec__29463,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__29463,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__29464 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29464__delegate.call(this,req_args);};
G__29464.cljs$lang$maxFixedArity = 0;
G__29464.cljs$lang$applyTo = (function (arglist__29465){
var req_args = cljs.core.seq(arglist__29465);
return G__29464__delegate(req_args);
});
G__29464.cljs$core$IFn$_invoke$arity$variadic = G__29464__delegate;
return G__29464;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29483){var state_val_29484 = (state_29483[1]);if((state_val_29484 === 2))
{var inst_29480 = (state_29483[2]);var inst_29481 = console.log(inst_29480);var state_29483__$1 = state_29483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29483__$1,inst_29481);
} else
{if((state_val_29484 === 1))
{var state_29483__$1 = state_29483;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29483__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_29488 = [null,null,null,null,null,null,null];(statearr_29488[0] = state_machine__5507__auto__);
(statearr_29488[1] = 1);
return statearr_29488;
});
var state_machine__5507__auto____1 = (function (state_29483){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29483);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29489){if((e29489 instanceof Object))
{var ex__5510__auto__ = e29489;var statearr_29490_29492 = state_29483;(statearr_29490_29492[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29483);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29493 = state_29483;
state_29483 = G__29493;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29483){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29491 = f__5522__auto__.call(null);(statearr_29491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__29494){
var f = cljs.core.first(arglist__29494);
var args = cljs.core.rest(arglist__29494);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__29497){var vec__29498 = p__29497;var k = cljs.core.nth.call(null,vec__29498,0,null);var v = cljs.core.nth.call(null,vec__29498,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
var portfolio_company_sites__delegate = function (p__29499){var vec__29501 = p__29499;var type_ids = cljs.core.nth.call(null,vec__29501,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__29499 = null;if (arguments.length > 0) {
  p__29499 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__29499);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__29502){
var p__29499 = cljs.core.seq(arglist__29502);
return portfolio_company_sites__delegate(p__29499);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__29503){var vec__29505 = p__29503;var type_ids = cljs.core.nth.call(null,vec__29505,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__29503 = null;if (arguments.length > 0) {
  p__29503 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__29503);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__29506){
var p__29503 = cljs.core.seq(arglist__29506);
return portfolio_company_locations__delegate(p__29503);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__29507){var vec__29509 = p__29507;var type_ids = cljs.core.nth.call(null,vec__29509,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__29507 = null;if (arguments.length > 0) {
  p__29507 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__29507);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__29510){
var p__29507 = cljs.core.seq(arglist__29510);
return portfolio_company_stats__delegate(p__29507);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__29511){var vec__29513 = p__29511;var type_ids = cljs.core.nth.call(null,vec__29513,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__29511 = null;if (arguments.length > 0) {
  p__29511 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__29511);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__29514){
var p__29511 = cljs.core.seq(arglist__29514);
return portfolio_company_site_stats__delegate(p__29511);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__29515){var vec__29517 = p__29515;var type_ids = cljs.core.nth.call(null,vec__29517,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__29515 = null;if (arguments.length > 0) {
  p__29515 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__29515);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__29518){
var p__29515 = cljs.core.seq(arglist__29518);
return portfolio_company_account_stats__delegate(p__29515);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__29519){
var id = cljs.core.first(arglist__29519);
var opts = cljs.core.rest(arglist__29519);
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
boundarylines.cljs$lang$applyTo = (function (arglist__29520){
var id = cljs.core.first(arglist__29520);
arglist__29520 = cljs.core.next(arglist__29520);
var tolerance = cljs.core.first(arglist__29520);
var opts = cljs.core.rest(arglist__29520);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
