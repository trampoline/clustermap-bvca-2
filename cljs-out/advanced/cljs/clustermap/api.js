// Compiled by ClojureScript 0.0-2173
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
var GET__delegate = function (url,p__31587){var map__31589 = p__31587;var map__31589__$1 = ((cljs.core.seq_QMARK_(map__31589))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31589):map__31589);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31589__$1,cljs.core.constant$keyword$567);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$548,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__31587 = null;if (arguments.length > 1) {
  p__31587 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__31587);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__31590){
var url = cljs.core.first(arglist__31590);
var p__31587 = cljs.core.rest(arglist__31590);
return GET__delegate(url,p__31587);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_31723){var state_val_31724 = (state_31723[1]);if((state_val_31724 === 1))
{var state_31723__$1 = state_31723;var statearr_31725_31761 = state_31723__$1;(statearr_31725_31761[2] = null);
(statearr_31725_31761[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 2))
{var state_31723__$1 = state_31723;if(true)
{var statearr_31726_31762 = state_31723__$1;(statearr_31726_31762[1] = 4);
} else
{var statearr_31727_31763 = state_31723__$1;(statearr_31727_31763[1] = 5);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 3))
{var inst_31721 = (state_31723[2]);var state_31723__$1 = state_31723;return cljs.core.async.impl.ioc_helpers.return_chan(state_31723__$1,inst_31721);
} else
{if((state_val_31724 === 4))
{var state_31723__$1 = state_31723;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31723__$1,7,ocomm);
} else
{if((state_val_31724 === 5))
{var state_31723__$1 = state_31723;var statearr_31728_31764 = state_31723__$1;(statearr_31728_31764[2] = null);
(statearr_31728_31764[1] = 6);
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 6))
{var inst_31719 = (state_31723[2]);var state_31723__$1 = state_31723;var statearr_31729_31765 = state_31723__$1;(statearr_31729_31765[2] = inst_31719);
(statearr_31729_31765[1] = 3);
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 7))
{var inst_31681 = (state_31723[7]);var inst_31680 = (state_31723[2]);var inst_31681__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31680,0,null);var inst_31682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31680,1,null);var inst_31683 = cljs.core.sequential_QMARK_(inst_31681__$1);var state_31723__$1 = (function (){var statearr_31730 = state_31723;(statearr_31730[8] = inst_31682);
(statearr_31730[7] = inst_31681__$1);
return statearr_31730;
})();if(inst_31683)
{var statearr_31731_31766 = state_31723__$1;(statearr_31731_31766[1] = 8);
} else
{var statearr_31732_31767 = state_31723__$1;(statearr_31732_31767[1] = 9);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 8))
{var inst_31681 = (state_31723[7]);var inst_31685 = inst_31681;var inst_31686 = cljs.core.PersistentVector.EMPTY;var state_31723__$1 = (function (){var statearr_31733 = state_31723;(statearr_31733[9] = inst_31685);
(statearr_31733[10] = inst_31686);
return statearr_31733;
})();var statearr_31734_31768 = state_31723__$1;(statearr_31734_31768[2] = null);
(statearr_31734_31768[1] = 11);
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 9))
{var inst_31681 = (state_31723[7]);var state_31723__$1 = state_31723;if(cljs.core.truth_(inst_31681))
{var statearr_31735_31769 = state_31723__$1;(statearr_31735_31769[1] = 20);
} else
{var statearr_31736_31770 = state_31723__$1;(statearr_31736_31770[1] = 21);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 10))
{var inst_31682 = (state_31723[8]);var inst_31714 = (state_31723[2]);var inst_31715 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_31714,inst_31682);var state_31723__$1 = (function (){var statearr_31737 = state_31723;(statearr_31737[11] = inst_31715);
return statearr_31737;
})();var statearr_31738_31771 = state_31723__$1;(statearr_31738_31771[2] = null);
(statearr_31738_31771[1] = 2);
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 11))
{var inst_31685 = (state_31723[9]);var inst_31688 = cljs.core.empty_QMARK_(inst_31685);var state_31723__$1 = state_31723;if(inst_31688)
{var statearr_31739_31772 = state_31723__$1;(statearr_31739_31772[1] = 13);
} else
{var statearr_31740_31773 = state_31723__$1;(statearr_31740_31773[1] = 14);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 12))
{var inst_31705 = (state_31723[2]);var state_31723__$1 = state_31723;var statearr_31741_31774 = state_31723__$1;(statearr_31741_31774[2] = inst_31705);
(statearr_31741_31774[1] = 10);
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 13))
{var inst_31686 = (state_31723[10]);var state_31723__$1 = state_31723;var statearr_31742_31775 = state_31723__$1;(statearr_31742_31775[2] = inst_31686);
(statearr_31742_31775[1] = 15);
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 14))
{var inst_31685 = (state_31723[9]);var inst_31691 = cljs.core.rest(inst_31685);var inst_31692 = cljs.core.first(inst_31685);var state_31723__$1 = (function (){var statearr_31743 = state_31723;(statearr_31743[12] = inst_31691);
return statearr_31743;
})();if(cljs.core.truth_(inst_31692))
{var statearr_31744_31776 = state_31723__$1;(statearr_31744_31776[1] = 16);
} else
{var statearr_31745_31777 = state_31723__$1;(statearr_31745_31777[1] = 17);
}
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 15))
{var inst_31703 = (state_31723[2]);var state_31723__$1 = state_31723;var statearr_31746_31778 = state_31723__$1;(statearr_31746_31778[2] = inst_31703);
(statearr_31746_31778[1] = 12);
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 16))
{var inst_31685 = (state_31723[9]);var inst_31694 = cljs.core.first(inst_31685);var state_31723__$1 = state_31723;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31723__$1,19,inst_31694);
} else
{if((state_val_31724 === 17))
{var state_31723__$1 = state_31723;var statearr_31747_31779 = state_31723__$1;(statearr_31747_31779[2] = null);
(statearr_31747_31779[1] = 18);
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 18))
{var inst_31691 = (state_31723[12]);var inst_31686 = (state_31723[10]);var inst_31699 = (state_31723[2]);var inst_31700 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_31686,inst_31699);var inst_31685 = inst_31691;var inst_31686__$1 = inst_31700;var state_31723__$1 = (function (){var statearr_31748 = state_31723;(statearr_31748[9] = inst_31685);
(statearr_31748[10] = inst_31686__$1);
return statearr_31748;
})();var statearr_31749_31780 = state_31723__$1;(statearr_31749_31780[2] = null);
(statearr_31749_31780[1] = 11);
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 19))
{var inst_31696 = (state_31723[2]);var state_31723__$1 = state_31723;var statearr_31750_31781 = state_31723__$1;(statearr_31750_31781[2] = inst_31696);
(statearr_31750_31781[1] = 18);
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 20))
{var inst_31681 = (state_31723[7]);var state_31723__$1 = state_31723;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31723__$1,23,inst_31681);
} else
{if((state_val_31724 === 21))
{var state_31723__$1 = state_31723;var statearr_31751_31782 = state_31723__$1;(statearr_31751_31782[2] = null);
(statearr_31751_31782[1] = 22);
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 22))
{var inst_31712 = (state_31723[2]);var state_31723__$1 = state_31723;var statearr_31752_31783 = state_31723__$1;(statearr_31752_31783[2] = inst_31712);
(statearr_31752_31783[1] = 10);
return cljs.core.constant$keyword$553;
} else
{if((state_val_31724 === 23))
{var inst_31709 = (state_31723[2]);var state_31723__$1 = state_31723;var statearr_31753_31784 = state_31723__$1;(statearr_31753_31784[2] = inst_31709);
(statearr_31753_31784[1] = 22);
return cljs.core.constant$keyword$553;
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
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_31757 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31757[0] = state_machine__5548__auto__);
(statearr_31757[1] = 1);
return statearr_31757;
});
var state_machine__5548__auto____1 = (function (state_31723){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_31723);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e31758){if((e31758 instanceof Object))
{var ex__5551__auto__ = e31758;var statearr_31759_31785 = state_31723;(statearr_31759_31785[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31723);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e31758;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__31786 = state_31723;
state_31723 = G__31786;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_31723){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_31723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_31760 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_31760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_31760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return (function() { 
var G__31789__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__31788 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31788,0,null);var result_handler_args = cljs.core.nthnext(vec__31788,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__31789 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31789__delegate.call(this,req_args);};
G__31789.cljs$lang$maxFixedArity = 0;
G__31789.cljs$lang$applyTo = (function (arglist__31790){
var req_args = cljs.core.seq(arglist__31790);
return G__31789__delegate(req_args);
});
G__31789.cljs$core$IFn$_invoke$arity$variadic = G__31789__delegate;
return G__31789;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_31808){var state_val_31809 = (state_31808[1]);if((state_val_31809 === 2))
{var inst_31805 = (state_31808[2]);var inst_31806 = console.log(inst_31805);var state_31808__$1 = state_31808;return cljs.core.async.impl.ioc_helpers.return_chan(state_31808__$1,inst_31806);
} else
{if((state_val_31809 === 1))
{var state_31808__$1 = state_31808;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31808__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_31813 = [null,null,null,null,null,null,null];(statearr_31813[0] = state_machine__5548__auto__);
(statearr_31813[1] = 1);
return statearr_31813;
});
var state_machine__5548__auto____1 = (function (state_31808){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_31808);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$553))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e31814){if((e31814 instanceof Object))
{var ex__5551__auto__ = e31814;var statearr_31815_31817 = state_31808;(statearr_31815_31817[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31808);
return cljs.core.constant$keyword$553;
} else
{if(cljs.core.constant$keyword$542)
{throw e31814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$553))
{{
var G__31818 = state_31808;
state_31808 = G__31818;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_31808){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_31808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_31816 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_31816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_31816;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__31819){
var f = cljs.core.first(arglist__31819);
var args = cljs.core.rest(arglist__31819);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31822){var vec__31823 = p__31822;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31823,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31823,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
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
boundarylines.cljs$lang$applyTo = (function (arglist__31824){
var id = cljs.core.first(arglist__31824);
arglist__31824 = cljs.core.next(arglist__31824);
var tolerance = cljs.core.first(arglist__31824);
var opts = cljs.core.rest(arglist__31824);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__31825){
var id = cljs.core.first(arglist__31825);
var opts = cljs.core.rest(arglist__31825);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > 0))
{return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/constituencies/"),cljs.core.str(id)].join(''));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__31826){var vec__31828 = p__31826;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31828,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$568,100,cljs.core.constant$keyword$569,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$570,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__31826 = null;if (arguments.length > 0) {
  p__31826 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__31826);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__31829){
var p__31826 = cljs.core.seq(arglist__31829);
return portfolio_company_sites__delegate(p__31826);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__31830){var vec__31832 = p__31830;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31832,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$568,100,cljs.core.constant$keyword$569,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$570,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__31830 = null;if (arguments.length > 0) {
  p__31830 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__31830);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__31833){
var p__31830 = cljs.core.seq(arglist__31833);
return portfolio_company_sites_by_company__delegate(p__31830);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__31834){var vec__31836 = p__31834;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31836,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__31834 = null;if (arguments.length > 0) {
  p__31834 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__31834);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__31837){
var p__31834 = cljs.core.seq(arglist__31837);
return portfolio_company_locations__delegate(p__31834);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__31838){var vec__31840 = p__31838;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31840,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__31838 = null;if (arguments.length > 0) {
  p__31838 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__31838);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__31841){
var p__31838 = cljs.core.seq(arglist__31841);
return portfolio_company_site_stats__delegate(p__31838);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__31842){var vec__31844 = p__31842;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31844,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__31842 = null;if (arguments.length > 0) {
  p__31842 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__31842);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__31845){
var p__31842 = cljs.core.seq(arglist__31845);
return portfolio_company_site_account_timelines__delegate(p__31842);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__31846){var vec__31848 = p__31846;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31848,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__31846 = null;if (arguments.length > 0) {
  p__31846 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__31846);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__31849){
var p__31846 = cljs.core.seq(arglist__31849);
return investment_account_timelines__delegate(p__31846);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__31850){var vec__31852 = p__31850;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31852,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__31850 = null;if (arguments.length > 0) {
  p__31850 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__31850);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__31853){
var p__31850 = cljs.core.seq(arglist__31853);
return investment_stats__delegate(p__31850);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__31854){var vec__31856 = p__31854;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31856,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$568,50,cljs.core.constant$keyword$571,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,"desc"], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__31854 = null;if (arguments.length > 0) {
  p__31854 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__31854);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__31857){
var p__31854 = cljs.core.seq(arglist__31857);
return investment_aggs__delegate(p__31854);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__31858){var vec__31860 = p__31858;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31860,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$568,50,cljs.core.constant$keyword$571,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$573,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__31858 = null;if (arguments.length > 0) {
  p__31858 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__31858);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__31861){
var p__31858 = cljs.core.seq(arglist__31861);
return investments__delegate(p__31858);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
