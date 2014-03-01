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
var GET__delegate = function (url,p__20611){var map__20613 = p__20611;var map__20613__$1 = ((cljs.core.seq_QMARK_(map__20613))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20613):map__20613);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20613__$1,cljs.core.constant$keyword$286);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$267,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__20611 = null;if (arguments.length > 1) {
  p__20611 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20611);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20614){
var url = cljs.core.first(arglist__20614);
var p__20611 = cljs.core.rest(arglist__20614);
return GET__delegate(url,p__20611);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20747){var state_val_20748 = (state_20747[1]);if((state_val_20748 === 1))
{var state_20747__$1 = state_20747;var statearr_20749_20785 = state_20747__$1;(statearr_20749_20785[2] = null);
(statearr_20749_20785[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 2))
{var state_20747__$1 = state_20747;if(true)
{var statearr_20750_20786 = state_20747__$1;(statearr_20750_20786[1] = 4);
} else
{var statearr_20751_20787 = state_20747__$1;(statearr_20751_20787[1] = 5);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 3))
{var inst_20745 = (state_20747[2]);var state_20747__$1 = state_20747;return cljs.core.async.impl.ioc_helpers.return_chan(state_20747__$1,inst_20745);
} else
{if((state_val_20748 === 4))
{var state_20747__$1 = state_20747;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20747__$1,7,ocomm);
} else
{if((state_val_20748 === 5))
{var state_20747__$1 = state_20747;var statearr_20752_20788 = state_20747__$1;(statearr_20752_20788[2] = null);
(statearr_20752_20788[1] = 6);
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 6))
{var inst_20743 = (state_20747[2]);var state_20747__$1 = state_20747;var statearr_20753_20789 = state_20747__$1;(statearr_20753_20789[2] = inst_20743);
(statearr_20753_20789[1] = 3);
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 7))
{var inst_20705 = (state_20747[7]);var inst_20704 = (state_20747[2]);var inst_20705__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20704,0,null);var inst_20706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20704,1,null);var inst_20707 = cljs.core.sequential_QMARK_(inst_20705__$1);var state_20747__$1 = (function (){var statearr_20754 = state_20747;(statearr_20754[8] = inst_20706);
(statearr_20754[7] = inst_20705__$1);
return statearr_20754;
})();if(inst_20707)
{var statearr_20755_20790 = state_20747__$1;(statearr_20755_20790[1] = 8);
} else
{var statearr_20756_20791 = state_20747__$1;(statearr_20756_20791[1] = 9);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 8))
{var inst_20705 = (state_20747[7]);var inst_20709 = inst_20705;var inst_20710 = cljs.core.PersistentVector.EMPTY;var state_20747__$1 = (function (){var statearr_20757 = state_20747;(statearr_20757[9] = inst_20709);
(statearr_20757[10] = inst_20710);
return statearr_20757;
})();var statearr_20758_20792 = state_20747__$1;(statearr_20758_20792[2] = null);
(statearr_20758_20792[1] = 11);
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 9))
{var inst_20705 = (state_20747[7]);var state_20747__$1 = state_20747;if(cljs.core.truth_(inst_20705))
{var statearr_20759_20793 = state_20747__$1;(statearr_20759_20793[1] = 20);
} else
{var statearr_20760_20794 = state_20747__$1;(statearr_20760_20794[1] = 21);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 10))
{var inst_20706 = (state_20747[8]);var inst_20738 = (state_20747[2]);var inst_20739 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20738,inst_20706);var state_20747__$1 = (function (){var statearr_20761 = state_20747;(statearr_20761[11] = inst_20739);
return statearr_20761;
})();var statearr_20762_20795 = state_20747__$1;(statearr_20762_20795[2] = null);
(statearr_20762_20795[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 11))
{var inst_20709 = (state_20747[9]);var inst_20712 = cljs.core.empty_QMARK_(inst_20709);var state_20747__$1 = state_20747;if(inst_20712)
{var statearr_20763_20796 = state_20747__$1;(statearr_20763_20796[1] = 13);
} else
{var statearr_20764_20797 = state_20747__$1;(statearr_20764_20797[1] = 14);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 12))
{var inst_20729 = (state_20747[2]);var state_20747__$1 = state_20747;var statearr_20765_20798 = state_20747__$1;(statearr_20765_20798[2] = inst_20729);
(statearr_20765_20798[1] = 10);
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 13))
{var inst_20710 = (state_20747[10]);var state_20747__$1 = state_20747;var statearr_20766_20799 = state_20747__$1;(statearr_20766_20799[2] = inst_20710);
(statearr_20766_20799[1] = 15);
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 14))
{var inst_20709 = (state_20747[9]);var inst_20715 = cljs.core.rest(inst_20709);var inst_20716 = cljs.core.first(inst_20709);var state_20747__$1 = (function (){var statearr_20767 = state_20747;(statearr_20767[12] = inst_20715);
return statearr_20767;
})();if(cljs.core.truth_(inst_20716))
{var statearr_20768_20800 = state_20747__$1;(statearr_20768_20800[1] = 16);
} else
{var statearr_20769_20801 = state_20747__$1;(statearr_20769_20801[1] = 17);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 15))
{var inst_20727 = (state_20747[2]);var state_20747__$1 = state_20747;var statearr_20770_20802 = state_20747__$1;(statearr_20770_20802[2] = inst_20727);
(statearr_20770_20802[1] = 12);
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 16))
{var inst_20709 = (state_20747[9]);var inst_20718 = cljs.core.first(inst_20709);var state_20747__$1 = state_20747;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20747__$1,19,inst_20718);
} else
{if((state_val_20748 === 17))
{var state_20747__$1 = state_20747;var statearr_20771_20803 = state_20747__$1;(statearr_20771_20803[2] = null);
(statearr_20771_20803[1] = 18);
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 18))
{var inst_20710 = (state_20747[10]);var inst_20715 = (state_20747[12]);var inst_20723 = (state_20747[2]);var inst_20724 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_20710,inst_20723);var inst_20709 = inst_20715;var inst_20710__$1 = inst_20724;var state_20747__$1 = (function (){var statearr_20772 = state_20747;(statearr_20772[9] = inst_20709);
(statearr_20772[10] = inst_20710__$1);
return statearr_20772;
})();var statearr_20773_20804 = state_20747__$1;(statearr_20773_20804[2] = null);
(statearr_20773_20804[1] = 11);
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 19))
{var inst_20720 = (state_20747[2]);var state_20747__$1 = state_20747;var statearr_20774_20805 = state_20747__$1;(statearr_20774_20805[2] = inst_20720);
(statearr_20774_20805[1] = 18);
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 20))
{var inst_20705 = (state_20747[7]);var state_20747__$1 = state_20747;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20747__$1,23,inst_20705);
} else
{if((state_val_20748 === 21))
{var state_20747__$1 = state_20747;var statearr_20775_20806 = state_20747__$1;(statearr_20775_20806[2] = null);
(statearr_20775_20806[1] = 22);
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 22))
{var inst_20736 = (state_20747[2]);var state_20747__$1 = state_20747;var statearr_20776_20807 = state_20747__$1;(statearr_20776_20807[2] = inst_20736);
(statearr_20776_20807[1] = 10);
return cljs.core.constant$keyword$272;
} else
{if((state_val_20748 === 23))
{var inst_20733 = (state_20747[2]);var state_20747__$1 = state_20747;var statearr_20777_20808 = state_20747__$1;(statearr_20777_20808[2] = inst_20733);
(statearr_20777_20808[1] = 22);
return cljs.core.constant$keyword$272;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20781 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20781[0] = state_machine__5507__auto__);
(statearr_20781[1] = 1);
return statearr_20781;
});
var state_machine__5507__auto____1 = (function (state_20747){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20747);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20782){if((e20782 instanceof Object))
{var ex__5510__auto__ = e20782;var statearr_20783_20809 = state_20747;(statearr_20783_20809[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20747);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e20782;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__20810 = state_20747;
state_20747 = G__20810;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20747){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20784 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20784;
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
var G__20813__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20812 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20812,0,null);var result_handler_args = cljs.core.nthnext(vec__20812,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20813 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20813__delegate.call(this,req_args);};
G__20813.cljs$lang$maxFixedArity = 0;
G__20813.cljs$lang$applyTo = (function (arglist__20814){
var req_args = cljs.core.seq(arglist__20814);
return G__20813__delegate(req_args);
});
G__20813.cljs$core$IFn$_invoke$arity$variadic = G__20813__delegate;
return G__20813;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20832){var state_val_20833 = (state_20832[1]);if((state_val_20833 === 2))
{var inst_20829 = (state_20832[2]);var inst_20830 = console.log(inst_20829);var state_20832__$1 = state_20832;return cljs.core.async.impl.ioc_helpers.return_chan(state_20832__$1,inst_20830);
} else
{if((state_val_20833 === 1))
{var state_20832__$1 = state_20832;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20832__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20837 = [null,null,null,null,null,null,null];(statearr_20837[0] = state_machine__5507__auto__);
(statearr_20837[1] = 1);
return statearr_20837;
});
var state_machine__5507__auto____1 = (function (state_20832){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20832);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20838){if((e20838 instanceof Object))
{var ex__5510__auto__ = e20838;var statearr_20839_20841 = state_20832;(statearr_20839_20841[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20832);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e20838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__20842 = state_20832;
state_20832 = G__20842;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20832){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20840 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20843){
var f = cljs.core.first(arglist__20843);
var args = cljs.core.rest(arglist__20843);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20846){var vec__20847 = p__20846;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20847,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20847,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20848){
var id = cljs.core.first(arglist__20848);
arglist__20848 = cljs.core.next(arglist__20848);
var tolerance = cljs.core.first(arglist__20848);
var opts = cljs.core.rest(arglist__20848);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20849){
var id = cljs.core.first(arglist__20849);
var opts = cljs.core.rest(arglist__20849);
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
var portfolio_company_sites__delegate = function (p__20850){var vec__20852 = p__20850;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20852,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,100,cljs.core.constant$keyword$288,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$289,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20850 = null;if (arguments.length > 0) {
  p__20850 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20850);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20853){
var p__20850 = cljs.core.seq(arglist__20853);
return portfolio_company_sites__delegate(p__20850);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__20854){var vec__20856 = p__20854;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,100,cljs.core.constant$keyword$288,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$289,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__20854 = null;if (arguments.length > 0) {
  p__20854 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__20854);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__20857){
var p__20854 = cljs.core.seq(arglist__20857);
return portfolio_company_sites_by_company__delegate(p__20854);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20858){var vec__20860 = p__20858;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20860,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20858 = null;if (arguments.length > 0) {
  p__20858 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20858);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20861){
var p__20858 = cljs.core.seq(arglist__20861);
return portfolio_company_locations__delegate(p__20858);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20862){var vec__20864 = p__20862;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20864,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20862 = null;if (arguments.length > 0) {
  p__20862 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20862);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20865){
var p__20862 = cljs.core.seq(arglist__20865);
return portfolio_company_site_stats__delegate(p__20862);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20866){var vec__20868 = p__20866;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20868,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20866 = null;if (arguments.length > 0) {
  p__20866 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20866);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20869){
var p__20866 = cljs.core.seq(arglist__20869);
return portfolio_company_site_account_timelines__delegate(p__20866);
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
var investment_account_timelines__delegate = function (p__20870){var vec__20872 = p__20870;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20872,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__20870 = null;if (arguments.length > 0) {
  p__20870 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__20870);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__20873){
var p__20870 = cljs.core.seq(arglist__20873);
return investment_account_timelines__delegate(p__20870);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__20874){var vec__20876 = p__20874;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20876,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__20874 = null;if (arguments.length > 0) {
  p__20874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__20874);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__20877){
var p__20874 = cljs.core.seq(arglist__20877);
return investment_stats__delegate(p__20874);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__20878){var vec__20880 = p__20878;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20880,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,50,cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$291,"desc"], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__20878 = null;if (arguments.length > 0) {
  p__20878 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__20878);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__20881){
var p__20878 = cljs.core.seq(arglist__20881);
return investment_aggs__delegate(p__20878);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__20882){var vec__20884 = p__20882;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20884,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,50,cljs.core.constant$keyword$290,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$293,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__20882 = null;if (arguments.length > 0) {
  p__20882 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__20882);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__20885){
var p__20882 = cljs.core.seq(arglist__20885);
return investments__delegate(p__20882);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
