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
var GET__delegate = function (url,p__19521){var map__19523 = p__19521;var map__19523__$1 = ((cljs.core.seq_QMARK_(map__19523))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19523):map__19523);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19523__$1,cljs.core.constant$keyword$184);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$165,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__19521 = null;if (arguments.length > 1) {
  p__19521 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19521);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19524){
var url = cljs.core.first(arglist__19524);
var p__19521 = cljs.core.rest(arglist__19524);
return GET__delegate(url,p__19521);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19631){var state_val_19632 = (state_19631[1]);if((state_val_19632 === 1))
{var state_19631__$1 = state_19631;var statearr_19633_19661 = state_19631__$1;(statearr_19633_19661[2] = null);
(statearr_19633_19661[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19632 === 2))
{var state_19631__$1 = state_19631;if(true)
{var statearr_19634_19662 = state_19631__$1;(statearr_19634_19662[1] = 4);
} else
{var statearr_19635_19663 = state_19631__$1;(statearr_19635_19663[1] = 5);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_19632 === 3))
{var inst_19629 = (state_19631[2]);var state_19631__$1 = state_19631;return cljs.core.async.impl.ioc_helpers.return_chan(state_19631__$1,inst_19629);
} else
{if((state_val_19632 === 4))
{var state_19631__$1 = state_19631;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19631__$1,7,ocomm);
} else
{if((state_val_19632 === 5))
{var state_19631__$1 = state_19631;var statearr_19636_19664 = state_19631__$1;(statearr_19636_19664[2] = null);
(statearr_19636_19664[1] = 6);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19632 === 6))
{var inst_19627 = (state_19631[2]);var state_19631__$1 = state_19631;var statearr_19637_19665 = state_19631__$1;(statearr_19637_19665[2] = inst_19627);
(statearr_19637_19665[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19632 === 7))
{var inst_19598 = (state_19631[7]);var inst_19597 = (state_19631[2]);var inst_19598__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19597,0,null);var inst_19599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19597,1,null);var inst_19600 = cljs.core.sequential_QMARK_(inst_19598__$1);var state_19631__$1 = (function (){var statearr_19638 = state_19631;(statearr_19638[8] = inst_19599);
(statearr_19638[7] = inst_19598__$1);
return statearr_19638;
})();if(inst_19600)
{var statearr_19639_19666 = state_19631__$1;(statearr_19639_19666[1] = 8);
} else
{var statearr_19640_19667 = state_19631__$1;(statearr_19640_19667[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_19632 === 8))
{var inst_19598 = (state_19631[7]);var inst_19602 = inst_19598;var inst_19603 = cljs.core.PersistentVector.EMPTY;var state_19631__$1 = (function (){var statearr_19641 = state_19631;(statearr_19641[9] = inst_19603);
(statearr_19641[10] = inst_19602);
return statearr_19641;
})();var statearr_19642_19668 = state_19631__$1;(statearr_19642_19668[2] = null);
(statearr_19642_19668[1] = 11);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19632 === 9))
{var inst_19598 = (state_19631[7]);var state_19631__$1 = state_19631;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19631__$1,17,inst_19598);
} else
{if((state_val_19632 === 10))
{var inst_19599 = (state_19631[8]);var inst_19622 = (state_19631[2]);var inst_19623 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_19622,inst_19599);var state_19631__$1 = (function (){var statearr_19643 = state_19631;(statearr_19643[11] = inst_19623);
return statearr_19643;
})();var statearr_19644_19669 = state_19631__$1;(statearr_19644_19669[2] = null);
(statearr_19644_19669[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19632 === 11))
{var inst_19602 = (state_19631[10]);var inst_19605 = cljs.core.empty_QMARK_(inst_19602);var state_19631__$1 = state_19631;if(inst_19605)
{var statearr_19645_19670 = state_19631__$1;(statearr_19645_19670[1] = 13);
} else
{var statearr_19646_19671 = state_19631__$1;(statearr_19646_19671[1] = 14);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_19632 === 12))
{var inst_19617 = (state_19631[2]);var state_19631__$1 = state_19631;var statearr_19647_19672 = state_19631__$1;(statearr_19647_19672[2] = inst_19617);
(statearr_19647_19672[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19632 === 13))
{var inst_19603 = (state_19631[9]);var state_19631__$1 = state_19631;var statearr_19648_19673 = state_19631__$1;(statearr_19648_19673[2] = inst_19603);
(statearr_19648_19673[1] = 15);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19632 === 14))
{var inst_19602 = (state_19631[10]);var inst_19608 = cljs.core.rest(inst_19602);var inst_19609 = cljs.core.first(inst_19602);var state_19631__$1 = (function (){var statearr_19649 = state_19631;(statearr_19649[12] = inst_19608);
return statearr_19649;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19631__$1,16,inst_19609);
} else
{if((state_val_19632 === 15))
{var inst_19615 = (state_19631[2]);var state_19631__$1 = state_19631;var statearr_19650_19674 = state_19631__$1;(statearr_19650_19674[2] = inst_19615);
(statearr_19650_19674[1] = 12);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19632 === 16))
{var inst_19608 = (state_19631[12]);var inst_19603 = (state_19631[9]);var inst_19611 = (state_19631[2]);var inst_19612 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19603,inst_19611);var inst_19602 = inst_19608;var inst_19603__$1 = inst_19612;var state_19631__$1 = (function (){var statearr_19651 = state_19631;(statearr_19651[9] = inst_19603__$1);
(statearr_19651[10] = inst_19602);
return statearr_19651;
})();var statearr_19652_19675 = state_19631__$1;(statearr_19652_19675[2] = null);
(statearr_19652_19675[1] = 11);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19632 === 17))
{var inst_19620 = (state_19631[2]);var state_19631__$1 = state_19631;var statearr_19653_19676 = state_19631__$1;(statearr_19653_19676[2] = inst_19620);
(statearr_19653_19676[1] = 10);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_19657 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19657[0] = state_machine__5507__auto__);
(statearr_19657[1] = 1);
return statearr_19657;
});
var state_machine__5507__auto____1 = (function (state_19631){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19631);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19658){if((e19658 instanceof Object))
{var ex__5510__auto__ = e19658;var statearr_19659_19677 = state_19631;(statearr_19659_19677[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19631);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e19658;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__19678 = state_19631;
state_19631 = G__19678;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19631){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19660 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19660;
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
var G__19681__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__19680 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19680,0,null);var result_handler_args = cljs.core.nthnext(vec__19680,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__19681 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19681__delegate.call(this,req_args);};
G__19681.cljs$lang$maxFixedArity = 0;
G__19681.cljs$lang$applyTo = (function (arglist__19682){
var req_args = cljs.core.seq(arglist__19682);
return G__19681__delegate(req_args);
});
G__19681.cljs$core$IFn$_invoke$arity$variadic = G__19681__delegate;
return G__19681;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19700){var state_val_19701 = (state_19700[1]);if((state_val_19701 === 2))
{var inst_19697 = (state_19700[2]);var inst_19698 = console.log(inst_19697);var state_19700__$1 = state_19700;return cljs.core.async.impl.ioc_helpers.return_chan(state_19700__$1,inst_19698);
} else
{if((state_val_19701 === 1))
{var state_19700__$1 = state_19700;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19700__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19705 = [null,null,null,null,null,null,null];(statearr_19705[0] = state_machine__5507__auto__);
(statearr_19705[1] = 1);
return statearr_19705;
});
var state_machine__5507__auto____1 = (function (state_19700){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19700);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19706){if((e19706 instanceof Object))
{var ex__5510__auto__ = e19706;var statearr_19707_19709 = state_19700;(statearr_19707_19709[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19700);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e19706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__19710 = state_19700;
state_19700 = G__19710;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19700){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19708 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__19711){
var f = cljs.core.first(arglist__19711);
var args = cljs.core.rest(arglist__19711);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19714){var vec__19715 = p__19714;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19715,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19715,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > 0))
{return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituencies = (function constituencies(){return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies"], 0));
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/constituencies/"),cljs.core.str(id)].join(''));
});
clustermap.api.portfolio_companies_summary = (function portfolio_companies_summary(){return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/portfolio-companies-summary"], 0));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__19716){var vec__19718 = p__19716;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19718,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__19716 = null;if (arguments.length > 0) {
  p__19716 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__19716);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__19719){
var p__19716 = cljs.core.seq(arglist__19719);
return portfolio_company_sites__delegate(p__19716);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__19720){var vec__19722 = p__19720;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19722,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__19720 = null;if (arguments.length > 0) {
  p__19720 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__19720);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__19723){
var p__19720 = cljs.core.seq(arglist__19723);
return portfolio_company_locations__delegate(p__19720);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__19724){var vec__19726 = p__19724;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__19724 = null;if (arguments.length > 0) {
  p__19724 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__19724);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__19727){
var p__19724 = cljs.core.seq(arglist__19727);
return portfolio_company_stats__delegate(p__19724);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__19728){var vec__19730 = p__19728;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19730,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__19728 = null;if (arguments.length > 0) {
  p__19728 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__19728);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__19731){
var p__19728 = cljs.core.seq(arglist__19731);
return portfolio_company_site_stats__delegate(p__19728);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__19732){var vec__19734 = p__19732;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19734,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__19732 = null;if (arguments.length > 0) {
  p__19732 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__19732);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__19735){
var p__19732 = cljs.core.seq(arglist__19735);
return portfolio_company_account_stats__delegate(p__19732);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/investor-companies-summary"], 0));
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_index = (function() { 
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,[cljs.core.str("/api/boundaryline-collection-index/"),cljs.core.str(id)].join(''),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__19736){
var id = cljs.core.first(arglist__19736);
var opts = cljs.core.rest(arglist__19736);
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
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,[cljs.core.str("/api/boundarylines/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(tolerance)].join(''),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__19737){
var id = cljs.core.first(arglist__19737);
arglist__19737 = cljs.core.next(arglist__19737);
var tolerance = cljs.core.first(arglist__19737);
var opts = cljs.core.rest(arglist__19737);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
