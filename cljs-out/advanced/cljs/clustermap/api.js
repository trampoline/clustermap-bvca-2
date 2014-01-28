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
var GET__delegate = function (url,p__19560){var map__19562 = p__19560;var map__19562__$1 = ((cljs.core.seq_QMARK_(map__19562))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19562):map__19562);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19562__$1,cljs.core.constant$keyword$207);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$188,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__19560 = null;if (arguments.length > 1) {
  p__19560 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19560);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19563){
var url = cljs.core.first(arglist__19563);
var p__19560 = cljs.core.rest(arglist__19563);
return GET__delegate(url,p__19560);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19670){var state_val_19671 = (state_19670[1]);if((state_val_19671 === 1))
{var state_19670__$1 = state_19670;var statearr_19672_19700 = state_19670__$1;(statearr_19672_19700[2] = null);
(statearr_19672_19700[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_19671 === 2))
{var state_19670__$1 = state_19670;if(true)
{var statearr_19673_19701 = state_19670__$1;(statearr_19673_19701[1] = 4);
} else
{var statearr_19674_19702 = state_19670__$1;(statearr_19674_19702[1] = 5);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_19671 === 3))
{var inst_19668 = (state_19670[2]);var state_19670__$1 = state_19670;return cljs.core.async.impl.ioc_helpers.return_chan(state_19670__$1,inst_19668);
} else
{if((state_val_19671 === 4))
{var state_19670__$1 = state_19670;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19670__$1,7,ocomm);
} else
{if((state_val_19671 === 5))
{var state_19670__$1 = state_19670;var statearr_19675_19703 = state_19670__$1;(statearr_19675_19703[2] = null);
(statearr_19675_19703[1] = 6);
return cljs.core.constant$keyword$193;
} else
{if((state_val_19671 === 6))
{var inst_19666 = (state_19670[2]);var state_19670__$1 = state_19670;var statearr_19676_19704 = state_19670__$1;(statearr_19676_19704[2] = inst_19666);
(statearr_19676_19704[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_19671 === 7))
{var inst_19637 = (state_19670[7]);var inst_19636 = (state_19670[2]);var inst_19637__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19636,0,null);var inst_19638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19636,1,null);var inst_19639 = cljs.core.sequential_QMARK_(inst_19637__$1);var state_19670__$1 = (function (){var statearr_19677 = state_19670;(statearr_19677[8] = inst_19638);
(statearr_19677[7] = inst_19637__$1);
return statearr_19677;
})();if(inst_19639)
{var statearr_19678_19705 = state_19670__$1;(statearr_19678_19705[1] = 8);
} else
{var statearr_19679_19706 = state_19670__$1;(statearr_19679_19706[1] = 9);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_19671 === 8))
{var inst_19637 = (state_19670[7]);var inst_19641 = inst_19637;var inst_19642 = cljs.core.PersistentVector.EMPTY;var state_19670__$1 = (function (){var statearr_19680 = state_19670;(statearr_19680[9] = inst_19642);
(statearr_19680[10] = inst_19641);
return statearr_19680;
})();var statearr_19681_19707 = state_19670__$1;(statearr_19681_19707[2] = null);
(statearr_19681_19707[1] = 11);
return cljs.core.constant$keyword$193;
} else
{if((state_val_19671 === 9))
{var inst_19637 = (state_19670[7]);var state_19670__$1 = state_19670;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19670__$1,17,inst_19637);
} else
{if((state_val_19671 === 10))
{var inst_19638 = (state_19670[8]);var inst_19661 = (state_19670[2]);var inst_19662 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_19661,inst_19638);var state_19670__$1 = (function (){var statearr_19682 = state_19670;(statearr_19682[11] = inst_19662);
return statearr_19682;
})();var statearr_19683_19708 = state_19670__$1;(statearr_19683_19708[2] = null);
(statearr_19683_19708[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_19671 === 11))
{var inst_19641 = (state_19670[10]);var inst_19644 = cljs.core.empty_QMARK_(inst_19641);var state_19670__$1 = state_19670;if(inst_19644)
{var statearr_19684_19709 = state_19670__$1;(statearr_19684_19709[1] = 13);
} else
{var statearr_19685_19710 = state_19670__$1;(statearr_19685_19710[1] = 14);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_19671 === 12))
{var inst_19656 = (state_19670[2]);var state_19670__$1 = state_19670;var statearr_19686_19711 = state_19670__$1;(statearr_19686_19711[2] = inst_19656);
(statearr_19686_19711[1] = 10);
return cljs.core.constant$keyword$193;
} else
{if((state_val_19671 === 13))
{var inst_19642 = (state_19670[9]);var state_19670__$1 = state_19670;var statearr_19687_19712 = state_19670__$1;(statearr_19687_19712[2] = inst_19642);
(statearr_19687_19712[1] = 15);
return cljs.core.constant$keyword$193;
} else
{if((state_val_19671 === 14))
{var inst_19641 = (state_19670[10]);var inst_19647 = cljs.core.rest(inst_19641);var inst_19648 = cljs.core.first(inst_19641);var state_19670__$1 = (function (){var statearr_19688 = state_19670;(statearr_19688[12] = inst_19647);
return statearr_19688;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19670__$1,16,inst_19648);
} else
{if((state_val_19671 === 15))
{var inst_19654 = (state_19670[2]);var state_19670__$1 = state_19670;var statearr_19689_19713 = state_19670__$1;(statearr_19689_19713[2] = inst_19654);
(statearr_19689_19713[1] = 12);
return cljs.core.constant$keyword$193;
} else
{if((state_val_19671 === 16))
{var inst_19647 = (state_19670[12]);var inst_19642 = (state_19670[9]);var inst_19650 = (state_19670[2]);var inst_19651 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19642,inst_19650);var inst_19641 = inst_19647;var inst_19642__$1 = inst_19651;var state_19670__$1 = (function (){var statearr_19690 = state_19670;(statearr_19690[9] = inst_19642__$1);
(statearr_19690[10] = inst_19641);
return statearr_19690;
})();var statearr_19691_19714 = state_19670__$1;(statearr_19691_19714[2] = null);
(statearr_19691_19714[1] = 11);
return cljs.core.constant$keyword$193;
} else
{if((state_val_19671 === 17))
{var inst_19659 = (state_19670[2]);var state_19670__$1 = state_19670;var statearr_19692_19715 = state_19670__$1;(statearr_19692_19715[2] = inst_19659);
(statearr_19692_19715[1] = 10);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_19696 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19696[0] = state_machine__5507__auto__);
(statearr_19696[1] = 1);
return statearr_19696;
});
var state_machine__5507__auto____1 = (function (state_19670){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19670);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19697){if((e19697 instanceof Object))
{var ex__5510__auto__ = e19697;var statearr_19698_19716 = state_19670;(statearr_19698_19716[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19670);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e19697;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__19717 = state_19670;
state_19670 = G__19717;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19670){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19699 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19699;
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
var G__19720__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__19719 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19719,0,null);var result_handler_args = cljs.core.nthnext(vec__19719,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__19720 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19720__delegate.call(this,req_args);};
G__19720.cljs$lang$maxFixedArity = 0;
G__19720.cljs$lang$applyTo = (function (arglist__19721){
var req_args = cljs.core.seq(arglist__19721);
return G__19720__delegate(req_args);
});
G__19720.cljs$core$IFn$_invoke$arity$variadic = G__19720__delegate;
return G__19720;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19739){var state_val_19740 = (state_19739[1]);if((state_val_19740 === 2))
{var inst_19736 = (state_19739[2]);var inst_19737 = console.log(inst_19736);var state_19739__$1 = state_19739;return cljs.core.async.impl.ioc_helpers.return_chan(state_19739__$1,inst_19737);
} else
{if((state_val_19740 === 1))
{var state_19739__$1 = state_19739;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19739__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19744 = [null,null,null,null,null,null,null];(statearr_19744[0] = state_machine__5507__auto__);
(statearr_19744[1] = 1);
return statearr_19744;
});
var state_machine__5507__auto____1 = (function (state_19739){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19739);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19745){if((e19745 instanceof Object))
{var ex__5510__auto__ = e19745;var statearr_19746_19748 = state_19739;(statearr_19746_19748[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19739);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e19745;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__19749 = state_19739;
state_19739 = G__19749;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19739){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19747 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__19750){
var f = cljs.core.first(arglist__19750);
var args = cljs.core.rest(arglist__19750);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19753){var vec__19754 = p__19753;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19754,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19754,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
var portfolio_company_sites__delegate = function (p__19755){var vec__19757 = p__19755;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19757,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__19755 = null;if (arguments.length > 0) {
  p__19755 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__19755);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__19758){
var p__19755 = cljs.core.seq(arglist__19758);
return portfolio_company_sites__delegate(p__19755);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__19759){var vec__19761 = p__19759;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19761,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__19759 = null;if (arguments.length > 0) {
  p__19759 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__19759);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__19762){
var p__19759 = cljs.core.seq(arglist__19762);
return portfolio_company_locations__delegate(p__19759);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__19763){var vec__19765 = p__19763;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19765,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__19763 = null;if (arguments.length > 0) {
  p__19763 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__19763);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__19766){
var p__19763 = cljs.core.seq(arglist__19766);
return portfolio_company_stats__delegate(p__19763);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__19767){var vec__19769 = p__19767;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19769,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__19767 = null;if (arguments.length > 0) {
  p__19767 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__19767);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__19770){
var p__19767 = cljs.core.seq(arglist__19770);
return portfolio_company_site_stats__delegate(p__19767);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__19771){var vec__19773 = p__19771;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19773,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__19771 = null;if (arguments.length > 0) {
  p__19771 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__19771);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__19774){
var p__19771 = cljs.core.seq(arglist__19774);
return portfolio_company_site_account_timelines__delegate(p__19771);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__19775){var vec__19777 = p__19775;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19777,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__19775 = null;if (arguments.length > 0) {
  p__19775 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__19775);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__19778){
var p__19775 = cljs.core.seq(arglist__19778);
return portfolio_company_account_stats__delegate(p__19775);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__19779){
var id = cljs.core.first(arglist__19779);
var opts = cljs.core.rest(arglist__19779);
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
boundarylines.cljs$lang$applyTo = (function (arglist__19780){
var id = cljs.core.first(arglist__19780);
arglist__19780 = cljs.core.next(arglist__19780);
var tolerance = cljs.core.first(arglist__19780);
var opts = cljs.core.rest(arglist__19780);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
