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
var GET__delegate = function (url,p__31603){var map__31605 = p__31603;var map__31605__$1 = ((cljs.core.seq_QMARK_(map__31605))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31605):map__31605);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31605__$1,cljs.core.constant$keyword$569);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$550,true], 0));
}
}).call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__31603 = null;if (arguments.length > 1) {
  p__31603 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__31603);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__31606){
var url = cljs.core.first(arglist__31606);
var p__31603 = cljs.core.rest(arglist__31606);
return GET__delegate(url,p__31603);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_31739){var state_val_31740 = (state_31739[1]);if((state_val_31740 === 1))
{var state_31739__$1 = state_31739;var statearr_31741_31777 = state_31739__$1;(statearr_31741_31777[2] = null);
(statearr_31741_31777[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 2))
{var state_31739__$1 = state_31739;if(true)
{var statearr_31742_31778 = state_31739__$1;(statearr_31742_31778[1] = 4);
} else
{var statearr_31743_31779 = state_31739__$1;(statearr_31743_31779[1] = 5);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 3))
{var inst_31737 = (state_31739[2]);var state_31739__$1 = state_31739;return cljs.core.async.impl.ioc_helpers.return_chan(state_31739__$1,inst_31737);
} else
{if((state_val_31740 === 4))
{var state_31739__$1 = state_31739;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31739__$1,7,ocomm);
} else
{if((state_val_31740 === 5))
{var state_31739__$1 = state_31739;var statearr_31744_31780 = state_31739__$1;(statearr_31744_31780[2] = null);
(statearr_31744_31780[1] = 6);
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 6))
{var inst_31735 = (state_31739[2]);var state_31739__$1 = state_31739;var statearr_31745_31781 = state_31739__$1;(statearr_31745_31781[2] = inst_31735);
(statearr_31745_31781[1] = 3);
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 7))
{var inst_31697 = (state_31739[7]);var inst_31696 = (state_31739[2]);var inst_31697__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31696,0,null);var inst_31698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31696,1,null);var inst_31699 = cljs.core.sequential_QMARK_(inst_31697__$1);var state_31739__$1 = (function (){var statearr_31746 = state_31739;(statearr_31746[7] = inst_31697__$1);
(statearr_31746[8] = inst_31698);
return statearr_31746;
})();if(inst_31699)
{var statearr_31747_31782 = state_31739__$1;(statearr_31747_31782[1] = 8);
} else
{var statearr_31748_31783 = state_31739__$1;(statearr_31748_31783[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 8))
{var inst_31697 = (state_31739[7]);var inst_31701 = inst_31697;var inst_31702 = cljs.core.PersistentVector.EMPTY;var state_31739__$1 = (function (){var statearr_31749 = state_31739;(statearr_31749[9] = inst_31701);
(statearr_31749[10] = inst_31702);
return statearr_31749;
})();var statearr_31750_31784 = state_31739__$1;(statearr_31750_31784[2] = null);
(statearr_31750_31784[1] = 11);
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 9))
{var inst_31697 = (state_31739[7]);var state_31739__$1 = state_31739;if(cljs.core.truth_(inst_31697))
{var statearr_31751_31785 = state_31739__$1;(statearr_31751_31785[1] = 20);
} else
{var statearr_31752_31786 = state_31739__$1;(statearr_31752_31786[1] = 21);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 10))
{var inst_31698 = (state_31739[8]);var inst_31730 = (state_31739[2]);var inst_31731 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_31730,inst_31698);var state_31739__$1 = (function (){var statearr_31753 = state_31739;(statearr_31753[11] = inst_31731);
return statearr_31753;
})();var statearr_31754_31787 = state_31739__$1;(statearr_31754_31787[2] = null);
(statearr_31754_31787[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 11))
{var inst_31701 = (state_31739[9]);var inst_31704 = cljs.core.empty_QMARK_(inst_31701);var state_31739__$1 = state_31739;if(inst_31704)
{var statearr_31755_31788 = state_31739__$1;(statearr_31755_31788[1] = 13);
} else
{var statearr_31756_31789 = state_31739__$1;(statearr_31756_31789[1] = 14);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 12))
{var inst_31721 = (state_31739[2]);var state_31739__$1 = state_31739;var statearr_31757_31790 = state_31739__$1;(statearr_31757_31790[2] = inst_31721);
(statearr_31757_31790[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 13))
{var inst_31702 = (state_31739[10]);var state_31739__$1 = state_31739;var statearr_31758_31791 = state_31739__$1;(statearr_31758_31791[2] = inst_31702);
(statearr_31758_31791[1] = 15);
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 14))
{var inst_31701 = (state_31739[9]);var inst_31707 = cljs.core.rest(inst_31701);var inst_31708 = cljs.core.first(inst_31701);var state_31739__$1 = (function (){var statearr_31759 = state_31739;(statearr_31759[12] = inst_31707);
return statearr_31759;
})();if(cljs.core.truth_(inst_31708))
{var statearr_31760_31792 = state_31739__$1;(statearr_31760_31792[1] = 16);
} else
{var statearr_31761_31793 = state_31739__$1;(statearr_31761_31793[1] = 17);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 15))
{var inst_31719 = (state_31739[2]);var state_31739__$1 = state_31739;var statearr_31762_31794 = state_31739__$1;(statearr_31762_31794[2] = inst_31719);
(statearr_31762_31794[1] = 12);
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 16))
{var inst_31701 = (state_31739[9]);var inst_31710 = cljs.core.first(inst_31701);var state_31739__$1 = state_31739;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31739__$1,19,inst_31710);
} else
{if((state_val_31740 === 17))
{var state_31739__$1 = state_31739;var statearr_31763_31795 = state_31739__$1;(statearr_31763_31795[2] = null);
(statearr_31763_31795[1] = 18);
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 18))
{var inst_31702 = (state_31739[10]);var inst_31707 = (state_31739[12]);var inst_31715 = (state_31739[2]);var inst_31716 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_31702,inst_31715);var inst_31701 = inst_31707;var inst_31702__$1 = inst_31716;var state_31739__$1 = (function (){var statearr_31764 = state_31739;(statearr_31764[9] = inst_31701);
(statearr_31764[10] = inst_31702__$1);
return statearr_31764;
})();var statearr_31765_31796 = state_31739__$1;(statearr_31765_31796[2] = null);
(statearr_31765_31796[1] = 11);
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 19))
{var inst_31712 = (state_31739[2]);var state_31739__$1 = state_31739;var statearr_31766_31797 = state_31739__$1;(statearr_31766_31797[2] = inst_31712);
(statearr_31766_31797[1] = 18);
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 20))
{var inst_31697 = (state_31739[7]);var state_31739__$1 = state_31739;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31739__$1,23,inst_31697);
} else
{if((state_val_31740 === 21))
{var state_31739__$1 = state_31739;var statearr_31767_31798 = state_31739__$1;(statearr_31767_31798[2] = null);
(statearr_31767_31798[1] = 22);
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 22))
{var inst_31728 = (state_31739[2]);var state_31739__$1 = state_31739;var statearr_31768_31799 = state_31739__$1;(statearr_31768_31799[2] = inst_31728);
(statearr_31768_31799[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_31740 === 23))
{var inst_31725 = (state_31739[2]);var state_31739__$1 = state_31739;var statearr_31769_31800 = state_31739__$1;(statearr_31769_31800[2] = inst_31725);
(statearr_31769_31800[1] = 22);
return cljs.core.constant$keyword$555;
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
var state_machine__5548__auto____0 = (function (){var statearr_31773 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31773[0] = state_machine__5548__auto__);
(statearr_31773[1] = 1);
return statearr_31773;
});
var state_machine__5548__auto____1 = (function (state_31739){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_31739);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e31774){if((e31774 instanceof Object))
{var ex__5551__auto__ = e31774;var statearr_31775_31801 = state_31739;(statearr_31775_31801[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31739);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e31774;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__31802 = state_31739;
state_31739 = G__31802;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_31739){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_31739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_31776 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_31776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_31776;
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
var G__31805__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__31804 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31804,0,null);var result_handler_args = cljs.core.nthnext(vec__31804,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__31805 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31805__delegate.call(this,req_args);};
G__31805.cljs$lang$maxFixedArity = 0;
G__31805.cljs$lang$applyTo = (function (arglist__31806){
var req_args = cljs.core.seq(arglist__31806);
return G__31805__delegate(req_args);
});
G__31805.cljs$core$IFn$_invoke$arity$variadic = G__31805__delegate;
return G__31805;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_31824){var state_val_31825 = (state_31824[1]);if((state_val_31825 === 2))
{var inst_31821 = (state_31824[2]);var inst_31822 = console.log(inst_31821);var state_31824__$1 = state_31824;return cljs.core.async.impl.ioc_helpers.return_chan(state_31824__$1,inst_31822);
} else
{if((state_val_31825 === 1))
{var state_31824__$1 = state_31824;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31824__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_31829 = [null,null,null,null,null,null,null];(statearr_31829[0] = state_machine__5548__auto__);
(statearr_31829[1] = 1);
return statearr_31829;
});
var state_machine__5548__auto____1 = (function (state_31824){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_31824);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e31830){if((e31830 instanceof Object))
{var ex__5551__auto__ = e31830;var statearr_31831_31833 = state_31824;(statearr_31831_31833[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31824);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e31830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__31834 = state_31824;
state_31824 = G__31834;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_31824){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_31824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_31832 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_31832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_31832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__31835){
var f = cljs.core.first(arglist__31835);
var args = cljs.core.rest(arglist__31835);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31838){var vec__31839 = p__31838;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31839,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31839,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__31840){
var id = cljs.core.first(arglist__31840);
arglist__31840 = cljs.core.next(arglist__31840);
var tolerance = cljs.core.first(arglist__31840);
var opts = cljs.core.rest(arglist__31840);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__31841){
var id = cljs.core.first(arglist__31841);
var opts = cljs.core.rest(arglist__31841);
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
var portfolio_company_sites__delegate = function (p__31842){var vec__31844 = p__31842;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31844,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$570,100,cljs.core.constant$keyword$571,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__31842 = null;if (arguments.length > 0) {
  p__31842 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__31842);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__31845){
var p__31842 = cljs.core.seq(arglist__31845);
return portfolio_company_sites__delegate(p__31842);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__31846){var vec__31848 = p__31846;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31848,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$570,100,cljs.core.constant$keyword$571,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__31846 = null;if (arguments.length > 0) {
  p__31846 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__31846);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__31849){
var p__31846 = cljs.core.seq(arglist__31849);
return portfolio_company_sites_by_company__delegate(p__31846);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__31850){var vec__31852 = p__31850;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31852,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__31850 = null;if (arguments.length > 0) {
  p__31850 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__31850);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__31853){
var p__31850 = cljs.core.seq(arglist__31853);
return portfolio_company_locations__delegate(p__31850);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__31854){var vec__31856 = p__31854;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31856,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__31854 = null;if (arguments.length > 0) {
  p__31854 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__31854);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__31857){
var p__31854 = cljs.core.seq(arglist__31857);
return portfolio_company_site_stats__delegate(p__31854);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__31858){var vec__31860 = p__31858;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31860,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__31858 = null;if (arguments.length > 0) {
  p__31858 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__31858);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__31861){
var p__31858 = cljs.core.seq(arglist__31861);
return portfolio_company_site_account_timelines__delegate(p__31858);
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
var investment_account_timelines__delegate = function (p__31862){var vec__31864 = p__31862;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31864,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__31862 = null;if (arguments.length > 0) {
  p__31862 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__31862);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__31865){
var p__31862 = cljs.core.seq(arglist__31865);
return investment_account_timelines__delegate(p__31862);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__31866){var vec__31868 = p__31866;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31868,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__31866 = null;if (arguments.length > 0) {
  p__31866 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__31866);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__31869){
var p__31866 = cljs.core.seq(arglist__31869);
return investment_stats__delegate(p__31866);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__31870){var vec__31872 = p__31870;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31872,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$570,50,cljs.core.constant$keyword$573,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"desc"], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__31870 = null;if (arguments.length > 0) {
  p__31870 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__31870);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__31873){
var p__31870 = cljs.core.seq(arglist__31873);
return investment_aggs__delegate(p__31870);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__31874){var vec__31876 = p__31874;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31876,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$570,50,cljs.core.constant$keyword$573,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$575,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$576,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__31874 = null;if (arguments.length > 0) {
  p__31874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__31874);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__31877){
var p__31874 = cljs.core.seq(arglist__31877);
return investments__delegate(p__31874);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
