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
var GET__delegate = function (url,p__29382){var map__29384 = p__29382;var map__29384__$1 = ((cljs.core.seq_QMARK_.call(null,map__29384))?cljs.core.apply.call(null,cljs.core.hash_map,map__29384):map__29384);var raw = cljs.core.get.call(null,map__29384__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__29382 = null;if (arguments.length > 1) {
  p__29382 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__29382);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__29385){
var url = cljs.core.first(arglist__29385);
var p__29382 = cljs.core.rest(arglist__29385);
return GET__delegate(url,p__29382);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29492){var state_val_29493 = (state_29492[1]);if((state_val_29493 === 1))
{var state_29492__$1 = state_29492;var statearr_29494_29522 = state_29492__$1;(statearr_29494_29522[2] = null);
(statearr_29494_29522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 2))
{var state_29492__$1 = state_29492;if(true)
{var statearr_29495_29523 = state_29492__$1;(statearr_29495_29523[1] = 4);
} else
{var statearr_29496_29524 = state_29492__$1;(statearr_29496_29524[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 3))
{var inst_29490 = (state_29492[2]);var state_29492__$1 = state_29492;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29492__$1,inst_29490);
} else
{if((state_val_29493 === 4))
{var state_29492__$1 = state_29492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29492__$1,7,ocomm);
} else
{if((state_val_29493 === 5))
{var state_29492__$1 = state_29492;var statearr_29497_29525 = state_29492__$1;(statearr_29497_29525[2] = null);
(statearr_29497_29525[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 6))
{var inst_29488 = (state_29492[2]);var state_29492__$1 = state_29492;var statearr_29498_29526 = state_29492__$1;(statearr_29498_29526[2] = inst_29488);
(statearr_29498_29526[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 7))
{var inst_29459 = (state_29492[7]);var inst_29458 = (state_29492[2]);var inst_29459__$1 = cljs.core.nth.call(null,inst_29458,0,null);var inst_29460 = cljs.core.nth.call(null,inst_29458,1,null);var inst_29461 = cljs.core.sequential_QMARK_.call(null,inst_29459__$1);var state_29492__$1 = (function (){var statearr_29499 = state_29492;(statearr_29499[7] = inst_29459__$1);
(statearr_29499[8] = inst_29460);
return statearr_29499;
})();if(inst_29461)
{var statearr_29500_29527 = state_29492__$1;(statearr_29500_29527[1] = 8);
} else
{var statearr_29501_29528 = state_29492__$1;(statearr_29501_29528[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 8))
{var inst_29459 = (state_29492[7]);var inst_29463 = inst_29459;var inst_29464 = cljs.core.PersistentVector.EMPTY;var state_29492__$1 = (function (){var statearr_29502 = state_29492;(statearr_29502[9] = inst_29463);
(statearr_29502[10] = inst_29464);
return statearr_29502;
})();var statearr_29503_29529 = state_29492__$1;(statearr_29503_29529[2] = null);
(statearr_29503_29529[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 9))
{var inst_29459 = (state_29492[7]);var state_29492__$1 = state_29492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29492__$1,17,inst_29459);
} else
{if((state_val_29493 === 10))
{var inst_29460 = (state_29492[8]);var inst_29483 = (state_29492[2]);var inst_29484 = cljs.core.apply.call(null,handler,inst_29483,inst_29460);var state_29492__$1 = (function (){var statearr_29504 = state_29492;(statearr_29504[11] = inst_29484);
return statearr_29504;
})();var statearr_29505_29530 = state_29492__$1;(statearr_29505_29530[2] = null);
(statearr_29505_29530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 11))
{var inst_29463 = (state_29492[9]);var inst_29466 = cljs.core.empty_QMARK_.call(null,inst_29463);var state_29492__$1 = state_29492;if(inst_29466)
{var statearr_29506_29531 = state_29492__$1;(statearr_29506_29531[1] = 13);
} else
{var statearr_29507_29532 = state_29492__$1;(statearr_29507_29532[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 12))
{var inst_29478 = (state_29492[2]);var state_29492__$1 = state_29492;var statearr_29508_29533 = state_29492__$1;(statearr_29508_29533[2] = inst_29478);
(statearr_29508_29533[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 13))
{var inst_29464 = (state_29492[10]);var state_29492__$1 = state_29492;var statearr_29509_29534 = state_29492__$1;(statearr_29509_29534[2] = inst_29464);
(statearr_29509_29534[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 14))
{var inst_29463 = (state_29492[9]);var inst_29469 = cljs.core.rest.call(null,inst_29463);var inst_29470 = cljs.core.first.call(null,inst_29463);var state_29492__$1 = (function (){var statearr_29510 = state_29492;(statearr_29510[12] = inst_29469);
return statearr_29510;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29492__$1,16,inst_29470);
} else
{if((state_val_29493 === 15))
{var inst_29476 = (state_29492[2]);var state_29492__$1 = state_29492;var statearr_29511_29535 = state_29492__$1;(statearr_29511_29535[2] = inst_29476);
(statearr_29511_29535[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 16))
{var inst_29469 = (state_29492[12]);var inst_29464 = (state_29492[10]);var inst_29472 = (state_29492[2]);var inst_29473 = cljs.core.conj.call(null,inst_29464,inst_29472);var inst_29463 = inst_29469;var inst_29464__$1 = inst_29473;var state_29492__$1 = (function (){var statearr_29512 = state_29492;(statearr_29512[9] = inst_29463);
(statearr_29512[10] = inst_29464__$1);
return statearr_29512;
})();var statearr_29513_29536 = state_29492__$1;(statearr_29513_29536[2] = null);
(statearr_29513_29536[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 17))
{var inst_29481 = (state_29492[2]);var state_29492__$1 = state_29492;var statearr_29514_29537 = state_29492__$1;(statearr_29514_29537[2] = inst_29481);
(statearr_29514_29537[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_29518 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29518[0] = state_machine__5507__auto__);
(statearr_29518[1] = 1);
return statearr_29518;
});
var state_machine__5507__auto____1 = (function (state_29492){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29492);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29519){if((e29519 instanceof Object))
{var ex__5510__auto__ = e29519;var statearr_29520_29538 = state_29492;(statearr_29520_29538[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29492);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29539 = state_29492;
state_29492 = G__29539;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29492){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29521 = f__5522__auto__.call(null);(statearr_29521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29521;
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
var G__29542__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__29541 = rseq;var rcomm = cljs.core.nth.call(null,vec__29541,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__29541,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__29542 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29542__delegate.call(this,req_args);};
G__29542.cljs$lang$maxFixedArity = 0;
G__29542.cljs$lang$applyTo = (function (arglist__29543){
var req_args = cljs.core.seq(arglist__29543);
return G__29542__delegate(req_args);
});
G__29542.cljs$core$IFn$_invoke$arity$variadic = G__29542__delegate;
return G__29542;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29561){var state_val_29562 = (state_29561[1]);if((state_val_29562 === 2))
{var inst_29558 = (state_29561[2]);var inst_29559 = console.log(inst_29558);var state_29561__$1 = state_29561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29561__$1,inst_29559);
} else
{if((state_val_29562 === 1))
{var state_29561__$1 = state_29561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29561__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_29566 = [null,null,null,null,null,null,null];(statearr_29566[0] = state_machine__5507__auto__);
(statearr_29566[1] = 1);
return statearr_29566;
});
var state_machine__5507__auto____1 = (function (state_29561){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29561);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29567){if((e29567 instanceof Object))
{var ex__5510__auto__ = e29567;var statearr_29568_29570 = state_29561;(statearr_29568_29570[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29561);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29571 = state_29561;
state_29561 = G__29571;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29561){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29569 = f__5522__auto__.call(null);(statearr_29569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__29572){
var f = cljs.core.first(arglist__29572);
var args = cljs.core.rest(arglist__29572);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__29575){var vec__29576 = p__29575;var k = cljs.core.nth.call(null,vec__29576,0,null);var v = cljs.core.nth.call(null,vec__29576,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
var portfolio_company_sites__delegate = function (p__29577){var vec__29579 = p__29577;var type_ids = cljs.core.nth.call(null,vec__29579,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__29577 = null;if (arguments.length > 0) {
  p__29577 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__29577);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__29580){
var p__29577 = cljs.core.seq(arglist__29580);
return portfolio_company_sites__delegate(p__29577);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__29581){var vec__29583 = p__29581;var type_ids = cljs.core.nth.call(null,vec__29583,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__29581 = null;if (arguments.length > 0) {
  p__29581 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__29581);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__29584){
var p__29581 = cljs.core.seq(arglist__29584);
return portfolio_company_locations__delegate(p__29581);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__29585){var vec__29587 = p__29585;var type_ids = cljs.core.nth.call(null,vec__29587,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__29585 = null;if (arguments.length > 0) {
  p__29585 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__29585);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__29588){
var p__29585 = cljs.core.seq(arglist__29588);
return portfolio_company_stats__delegate(p__29585);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__29589){var vec__29591 = p__29589;var type_ids = cljs.core.nth.call(null,vec__29591,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__29589 = null;if (arguments.length > 0) {
  p__29589 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__29589);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__29592){
var p__29589 = cljs.core.seq(arglist__29592);
return portfolio_company_site_stats__delegate(p__29589);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__29593){var vec__29595 = p__29593;var type_ids = cljs.core.nth.call(null,vec__29595,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__29593 = null;if (arguments.length > 0) {
  p__29593 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__29593);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__29596){
var p__29593 = cljs.core.seq(arglist__29596);
return portfolio_company_site_account_timelines__delegate(p__29593);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__29597){var vec__29599 = p__29597;var type_ids = cljs.core.nth.call(null,vec__29599,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__29597 = null;if (arguments.length > 0) {
  p__29597 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__29597);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__29600){
var p__29597 = cljs.core.seq(arglist__29600);
return portfolio_company_account_stats__delegate(p__29597);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__29601){
var id = cljs.core.first(arglist__29601);
var opts = cljs.core.rest(arglist__29601);
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
boundarylines.cljs$lang$applyTo = (function (arglist__29602){
var id = cljs.core.first(arglist__29602);
arglist__29602 = cljs.core.next(arglist__29602);
var tolerance = cljs.core.first(arglist__29602);
var opts = cljs.core.rest(arglist__29602);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
