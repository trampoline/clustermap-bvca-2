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
var GET__delegate = function (url,p__19528){var map__19530 = p__19528;var map__19530__$1 = ((cljs.core.seq_QMARK_(map__19530))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19530):map__19530);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19530__$1,cljs.core.constant$keyword$184);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
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
var p__19528 = null;if (arguments.length > 1) {
  p__19528 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19528);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19531){
var url = cljs.core.first(arglist__19531);
var p__19528 = cljs.core.rest(arglist__19531);
return GET__delegate(url,p__19528);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19638){var state_val_19639 = (state_19638[1]);if((state_val_19639 === 1))
{var state_19638__$1 = state_19638;var statearr_19640_19668 = state_19638__$1;(statearr_19640_19668[2] = null);
(statearr_19640_19668[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19639 === 2))
{var state_19638__$1 = state_19638;if(true)
{var statearr_19641_19669 = state_19638__$1;(statearr_19641_19669[1] = 4);
} else
{var statearr_19642_19670 = state_19638__$1;(statearr_19642_19670[1] = 5);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_19639 === 3))
{var inst_19636 = (state_19638[2]);var state_19638__$1 = state_19638;return cljs.core.async.impl.ioc_helpers.return_chan(state_19638__$1,inst_19636);
} else
{if((state_val_19639 === 4))
{var state_19638__$1 = state_19638;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19638__$1,7,ocomm);
} else
{if((state_val_19639 === 5))
{var state_19638__$1 = state_19638;var statearr_19643_19671 = state_19638__$1;(statearr_19643_19671[2] = null);
(statearr_19643_19671[1] = 6);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19639 === 6))
{var inst_19634 = (state_19638[2]);var state_19638__$1 = state_19638;var statearr_19644_19672 = state_19638__$1;(statearr_19644_19672[2] = inst_19634);
(statearr_19644_19672[1] = 3);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19639 === 7))
{var inst_19605 = (state_19638[7]);var inst_19604 = (state_19638[2]);var inst_19605__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19604,0,null);var inst_19606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19604,1,null);var inst_19607 = cljs.core.sequential_QMARK_(inst_19605__$1);var state_19638__$1 = (function (){var statearr_19645 = state_19638;(statearr_19645[8] = inst_19606);
(statearr_19645[7] = inst_19605__$1);
return statearr_19645;
})();if(inst_19607)
{var statearr_19646_19673 = state_19638__$1;(statearr_19646_19673[1] = 8);
} else
{var statearr_19647_19674 = state_19638__$1;(statearr_19647_19674[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_19639 === 8))
{var inst_19605 = (state_19638[7]);var inst_19609 = inst_19605;var inst_19610 = cljs.core.PersistentVector.EMPTY;var state_19638__$1 = (function (){var statearr_19648 = state_19638;(statearr_19648[9] = inst_19610);
(statearr_19648[10] = inst_19609);
return statearr_19648;
})();var statearr_19649_19675 = state_19638__$1;(statearr_19649_19675[2] = null);
(statearr_19649_19675[1] = 11);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19639 === 9))
{var inst_19605 = (state_19638[7]);var state_19638__$1 = state_19638;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19638__$1,17,inst_19605);
} else
{if((state_val_19639 === 10))
{var inst_19606 = (state_19638[8]);var inst_19629 = (state_19638[2]);var inst_19630 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_19629,inst_19606);var state_19638__$1 = (function (){var statearr_19650 = state_19638;(statearr_19650[11] = inst_19630);
return statearr_19650;
})();var statearr_19651_19676 = state_19638__$1;(statearr_19651_19676[2] = null);
(statearr_19651_19676[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19639 === 11))
{var inst_19609 = (state_19638[10]);var inst_19612 = cljs.core.empty_QMARK_(inst_19609);var state_19638__$1 = state_19638;if(inst_19612)
{var statearr_19652_19677 = state_19638__$1;(statearr_19652_19677[1] = 13);
} else
{var statearr_19653_19678 = state_19638__$1;(statearr_19653_19678[1] = 14);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_19639 === 12))
{var inst_19624 = (state_19638[2]);var state_19638__$1 = state_19638;var statearr_19654_19679 = state_19638__$1;(statearr_19654_19679[2] = inst_19624);
(statearr_19654_19679[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19639 === 13))
{var inst_19610 = (state_19638[9]);var state_19638__$1 = state_19638;var statearr_19655_19680 = state_19638__$1;(statearr_19655_19680[2] = inst_19610);
(statearr_19655_19680[1] = 15);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19639 === 14))
{var inst_19609 = (state_19638[10]);var inst_19615 = cljs.core.rest(inst_19609);var inst_19616 = cljs.core.first(inst_19609);var state_19638__$1 = (function (){var statearr_19656 = state_19638;(statearr_19656[12] = inst_19615);
return statearr_19656;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19638__$1,16,inst_19616);
} else
{if((state_val_19639 === 15))
{var inst_19622 = (state_19638[2]);var state_19638__$1 = state_19638;var statearr_19657_19681 = state_19638__$1;(statearr_19657_19681[2] = inst_19622);
(statearr_19657_19681[1] = 12);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19639 === 16))
{var inst_19610 = (state_19638[9]);var inst_19615 = (state_19638[12]);var inst_19618 = (state_19638[2]);var inst_19619 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19610,inst_19618);var inst_19609 = inst_19615;var inst_19610__$1 = inst_19619;var state_19638__$1 = (function (){var statearr_19658 = state_19638;(statearr_19658[9] = inst_19610__$1);
(statearr_19658[10] = inst_19609);
return statearr_19658;
})();var statearr_19659_19682 = state_19638__$1;(statearr_19659_19682[2] = null);
(statearr_19659_19682[1] = 11);
return cljs.core.constant$keyword$170;
} else
{if((state_val_19639 === 17))
{var inst_19627 = (state_19638[2]);var state_19638__$1 = state_19638;var statearr_19660_19683 = state_19638__$1;(statearr_19660_19683[2] = inst_19627);
(statearr_19660_19683[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_19664 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19664[0] = state_machine__5507__auto__);
(statearr_19664[1] = 1);
return statearr_19664;
});
var state_machine__5507__auto____1 = (function (state_19638){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19638);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19665){if((e19665 instanceof Object))
{var ex__5510__auto__ = e19665;var statearr_19666_19684 = state_19638;(statearr_19666_19684[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19638);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e19665;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__19685 = state_19638;
state_19638 = G__19685;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19638){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19667 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19667;
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
var G__19688__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__19687 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19687,0,null);var result_handler_args = cljs.core.nthnext(vec__19687,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__19688 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19688__delegate.call(this,req_args);};
G__19688.cljs$lang$maxFixedArity = 0;
G__19688.cljs$lang$applyTo = (function (arglist__19689){
var req_args = cljs.core.seq(arglist__19689);
return G__19688__delegate(req_args);
});
G__19688.cljs$core$IFn$_invoke$arity$variadic = G__19688__delegate;
return G__19688;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19707){var state_val_19708 = (state_19707[1]);if((state_val_19708 === 2))
{var inst_19704 = (state_19707[2]);var inst_19705 = console.log(inst_19704);var state_19707__$1 = state_19707;return cljs.core.async.impl.ioc_helpers.return_chan(state_19707__$1,inst_19705);
} else
{if((state_val_19708 === 1))
{var state_19707__$1 = state_19707;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19707__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19712 = [null,null,null,null,null,null,null];(statearr_19712[0] = state_machine__5507__auto__);
(statearr_19712[1] = 1);
return statearr_19712;
});
var state_machine__5507__auto____1 = (function (state_19707){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19707);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19713){if((e19713 instanceof Object))
{var ex__5510__auto__ = e19713;var statearr_19714_19716 = state_19707;(statearr_19714_19716[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19707);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e19713;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__19717 = state_19707;
state_19707 = G__19717;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19707){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19715 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19715;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__19718){
var f = cljs.core.first(arglist__19718);
var args = cljs.core.rest(arglist__19718);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19721){var vec__19722 = p__19721;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19722,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19722,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
var portfolio_company_sites__delegate = function (p__19723){var vec__19725 = p__19723;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19725,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__19723 = null;if (arguments.length > 0) {
  p__19723 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__19723);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__19726){
var p__19723 = cljs.core.seq(arglist__19726);
return portfolio_company_sites__delegate(p__19723);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__19727){var vec__19729 = p__19727;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19729,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__19727 = null;if (arguments.length > 0) {
  p__19727 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__19727);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__19730){
var p__19727 = cljs.core.seq(arglist__19730);
return portfolio_company_locations__delegate(p__19727);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__19731){var vec__19733 = p__19731;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19733,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__19731 = null;if (arguments.length > 0) {
  p__19731 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__19731);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__19734){
var p__19731 = cljs.core.seq(arglist__19734);
return portfolio_company_stats__delegate(p__19731);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__19735){var vec__19737 = p__19735;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19737,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__19735 = null;if (arguments.length > 0) {
  p__19735 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__19735);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__19738){
var p__19735 = cljs.core.seq(arglist__19738);
return portfolio_company_site_stats__delegate(p__19735);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__19739){var vec__19741 = p__19739;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19741,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__19739 = null;if (arguments.length > 0) {
  p__19739 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__19739);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__19742){
var p__19739 = cljs.core.seq(arglist__19742);
return portfolio_company_account_stats__delegate(p__19739);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__19743){
var id = cljs.core.first(arglist__19743);
var opts = cljs.core.rest(arglist__19743);
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
boundarylines.cljs$lang$applyTo = (function (arglist__19744){
var id = cljs.core.first(arglist__19744);
arglist__19744 = cljs.core.next(arglist__19744);
var tolerance = cljs.core.first(arglist__19744);
var opts = cljs.core.rest(arglist__19744);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
