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
var GET__delegate = function (url,p__30592){var map__30594 = p__30592;var map__30594__$1 = ((cljs.core.seq_QMARK_.call(null,map__30594))?cljs.core.apply.call(null,cljs.core.hash_map,map__30594):map__30594);var raw = cljs.core.get.call(null,map__30594__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__30592 = null;if (arguments.length > 1) {
  p__30592 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__30592);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__30595){
var url = cljs.core.first(arglist__30595);
var p__30592 = cljs.core.rest(arglist__30595);
return GET__delegate(url,p__30592);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30728){var state_val_30729 = (state_30728[1]);if((state_val_30729 === 1))
{var state_30728__$1 = state_30728;var statearr_30730_30766 = state_30728__$1;(statearr_30730_30766[2] = null);
(statearr_30730_30766[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 2))
{var state_30728__$1 = state_30728;if(true)
{var statearr_30731_30767 = state_30728__$1;(statearr_30731_30767[1] = 4);
} else
{var statearr_30732_30768 = state_30728__$1;(statearr_30732_30768[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 3))
{var inst_30726 = (state_30728[2]);var state_30728__$1 = state_30728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30728__$1,inst_30726);
} else
{if((state_val_30729 === 4))
{var state_30728__$1 = state_30728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30728__$1,7,ocomm);
} else
{if((state_val_30729 === 5))
{var state_30728__$1 = state_30728;var statearr_30733_30769 = state_30728__$1;(statearr_30733_30769[2] = null);
(statearr_30733_30769[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 6))
{var inst_30724 = (state_30728[2]);var state_30728__$1 = state_30728;var statearr_30734_30770 = state_30728__$1;(statearr_30734_30770[2] = inst_30724);
(statearr_30734_30770[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 7))
{var inst_30686 = (state_30728[7]);var inst_30685 = (state_30728[2]);var inst_30686__$1 = cljs.core.nth.call(null,inst_30685,0,null);var inst_30687 = cljs.core.nth.call(null,inst_30685,1,null);var inst_30688 = cljs.core.sequential_QMARK_.call(null,inst_30686__$1);var state_30728__$1 = (function (){var statearr_30735 = state_30728;(statearr_30735[7] = inst_30686__$1);
(statearr_30735[8] = inst_30687);
return statearr_30735;
})();if(inst_30688)
{var statearr_30736_30771 = state_30728__$1;(statearr_30736_30771[1] = 8);
} else
{var statearr_30737_30772 = state_30728__$1;(statearr_30737_30772[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 8))
{var inst_30686 = (state_30728[7]);var inst_30690 = inst_30686;var inst_30691 = cljs.core.PersistentVector.EMPTY;var state_30728__$1 = (function (){var statearr_30738 = state_30728;(statearr_30738[9] = inst_30691);
(statearr_30738[10] = inst_30690);
return statearr_30738;
})();var statearr_30739_30773 = state_30728__$1;(statearr_30739_30773[2] = null);
(statearr_30739_30773[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 9))
{var inst_30686 = (state_30728[7]);var state_30728__$1 = state_30728;if(cljs.core.truth_(inst_30686))
{var statearr_30740_30774 = state_30728__$1;(statearr_30740_30774[1] = 20);
} else
{var statearr_30741_30775 = state_30728__$1;(statearr_30741_30775[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 10))
{var inst_30687 = (state_30728[8]);var inst_30719 = (state_30728[2]);var inst_30720 = cljs.core.apply.call(null,handler,inst_30719,inst_30687);var state_30728__$1 = (function (){var statearr_30742 = state_30728;(statearr_30742[11] = inst_30720);
return statearr_30742;
})();var statearr_30743_30776 = state_30728__$1;(statearr_30743_30776[2] = null);
(statearr_30743_30776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 11))
{var inst_30690 = (state_30728[10]);var inst_30693 = cljs.core.empty_QMARK_.call(null,inst_30690);var state_30728__$1 = state_30728;if(inst_30693)
{var statearr_30744_30777 = state_30728__$1;(statearr_30744_30777[1] = 13);
} else
{var statearr_30745_30778 = state_30728__$1;(statearr_30745_30778[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 12))
{var inst_30710 = (state_30728[2]);var state_30728__$1 = state_30728;var statearr_30746_30779 = state_30728__$1;(statearr_30746_30779[2] = inst_30710);
(statearr_30746_30779[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 13))
{var inst_30691 = (state_30728[9]);var state_30728__$1 = state_30728;var statearr_30747_30780 = state_30728__$1;(statearr_30747_30780[2] = inst_30691);
(statearr_30747_30780[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 14))
{var inst_30690 = (state_30728[10]);var inst_30696 = cljs.core.rest.call(null,inst_30690);var inst_30697 = cljs.core.first.call(null,inst_30690);var state_30728__$1 = (function (){var statearr_30748 = state_30728;(statearr_30748[12] = inst_30696);
return statearr_30748;
})();if(cljs.core.truth_(inst_30697))
{var statearr_30749_30781 = state_30728__$1;(statearr_30749_30781[1] = 16);
} else
{var statearr_30750_30782 = state_30728__$1;(statearr_30750_30782[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 15))
{var inst_30708 = (state_30728[2]);var state_30728__$1 = state_30728;var statearr_30751_30783 = state_30728__$1;(statearr_30751_30783[2] = inst_30708);
(statearr_30751_30783[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 16))
{var inst_30690 = (state_30728[10]);var inst_30699 = cljs.core.first.call(null,inst_30690);var state_30728__$1 = state_30728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30728__$1,19,inst_30699);
} else
{if((state_val_30729 === 17))
{var state_30728__$1 = state_30728;var statearr_30752_30784 = state_30728__$1;(statearr_30752_30784[2] = null);
(statearr_30752_30784[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 18))
{var inst_30691 = (state_30728[9]);var inst_30696 = (state_30728[12]);var inst_30704 = (state_30728[2]);var inst_30705 = cljs.core.conj.call(null,inst_30691,inst_30704);var inst_30690 = inst_30696;var inst_30691__$1 = inst_30705;var state_30728__$1 = (function (){var statearr_30753 = state_30728;(statearr_30753[9] = inst_30691__$1);
(statearr_30753[10] = inst_30690);
return statearr_30753;
})();var statearr_30754_30785 = state_30728__$1;(statearr_30754_30785[2] = null);
(statearr_30754_30785[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 19))
{var inst_30701 = (state_30728[2]);var state_30728__$1 = state_30728;var statearr_30755_30786 = state_30728__$1;(statearr_30755_30786[2] = inst_30701);
(statearr_30755_30786[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 20))
{var inst_30686 = (state_30728[7]);var state_30728__$1 = state_30728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30728__$1,23,inst_30686);
} else
{if((state_val_30729 === 21))
{var state_30728__$1 = state_30728;var statearr_30756_30787 = state_30728__$1;(statearr_30756_30787[2] = null);
(statearr_30756_30787[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 22))
{var inst_30717 = (state_30728[2]);var state_30728__$1 = state_30728;var statearr_30757_30788 = state_30728__$1;(statearr_30757_30788[2] = inst_30717);
(statearr_30757_30788[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30729 === 23))
{var inst_30714 = (state_30728[2]);var state_30728__$1 = state_30728;var statearr_30758_30789 = state_30728__$1;(statearr_30758_30789[2] = inst_30714);
(statearr_30758_30789[1] = 22);
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
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30762 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30762[0] = state_machine__5507__auto__);
(statearr_30762[1] = 1);
return statearr_30762;
});
var state_machine__5507__auto____1 = (function (state_30728){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30728);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30763){if((e30763 instanceof Object))
{var ex__5510__auto__ = e30763;var statearr_30764_30790 = state_30728;(statearr_30764_30790[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30728);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30763;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30791 = state_30728;
state_30728 = G__30791;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30728){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30765 = f__5522__auto__.call(null);(statearr_30765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30765;
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
var G__30794__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__30793 = rseq;var rcomm = cljs.core.nth.call(null,vec__30793,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__30793,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__30794 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30794__delegate.call(this,req_args);};
G__30794.cljs$lang$maxFixedArity = 0;
G__30794.cljs$lang$applyTo = (function (arglist__30795){
var req_args = cljs.core.seq(arglist__30795);
return G__30794__delegate(req_args);
});
G__30794.cljs$core$IFn$_invoke$arity$variadic = G__30794__delegate;
return G__30794;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30813){var state_val_30814 = (state_30813[1]);if((state_val_30814 === 2))
{var inst_30810 = (state_30813[2]);var inst_30811 = console.log(inst_30810);var state_30813__$1 = state_30813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30813__$1,inst_30811);
} else
{if((state_val_30814 === 1))
{var state_30813__$1 = state_30813;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30813__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30818 = [null,null,null,null,null,null,null];(statearr_30818[0] = state_machine__5507__auto__);
(statearr_30818[1] = 1);
return statearr_30818;
});
var state_machine__5507__auto____1 = (function (state_30813){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30813);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30819){if((e30819 instanceof Object))
{var ex__5510__auto__ = e30819;var statearr_30820_30822 = state_30813;(statearr_30820_30822[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30813);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30823 = state_30813;
state_30813 = G__30823;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30813){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30821 = f__5522__auto__.call(null);(statearr_30821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__30824){
var f = cljs.core.first(arglist__30824);
var args = cljs.core.rest(arglist__30824);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__30827){var vec__30828 = p__30827;var k = cljs.core.nth.call(null,vec__30828,0,null);var v = cljs.core.nth.call(null,vec__30828,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
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
boundarylines.cljs$lang$applyTo = (function (arglist__30829){
var id = cljs.core.first(arglist__30829);
arglist__30829 = cljs.core.next(arglist__30829);
var tolerance = cljs.core.first(arglist__30829);
var opts = cljs.core.rest(arglist__30829);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,[cljs.core.str("/api/boundaryline-collection-index/"),cljs.core.str(id)].join(''),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__30830){
var id = cljs.core.first(arglist__30830);
var opts = cljs.core.rest(arglist__30830);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > 0))
{return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/constituencies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.constituencies = (function() { 
var constituencies__delegate = function (p__30831){var vec__30833 = p__30831;var type_ids = cljs.core.nth.call(null,vec__30833,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__30831 = null;if (arguments.length > 0) {
  p__30831 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__30831);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__30834){
var p__30831 = cljs.core.seq(arglist__30834);
return constituencies__delegate(p__30831);
});
constituencies.cljs$core$IFn$_invoke$arity$variadic = constituencies__delegate;
return constituencies;
})()
;
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_companies = (function() { 
var portfolio_companies__delegate = function (p__30835){var vec__30837 = p__30835;var type_ids = cljs.core.nth.call(null,vec__30837,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__30835 = null;if (arguments.length > 0) {
  p__30835 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__30835);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__30838){
var p__30835 = cljs.core.seq(arglist__30838);
return portfolio_companies__delegate(p__30835);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__30839){var vec__30841 = p__30839;var type_ids = cljs.core.nth.call(null,vec__30841,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__30839 = null;if (arguments.length > 0) {
  p__30839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__30839);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__30842){
var p__30839 = cljs.core.seq(arglist__30842);
return portfolio_company_stats__delegate(p__30839);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__30843){var vec__30845 = p__30843;var type_ids = cljs.core.nth.call(null,vec__30845,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__30843 = null;if (arguments.length > 0) {
  p__30843 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__30843);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__30846){
var p__30843 = cljs.core.seq(arglist__30846);
return portfolio_company_account_stats__delegate(p__30843);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__30847){var vec__30849 = p__30847;var type_ids = cljs.core.nth.call(null,vec__30849,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?boundarylinecolls.uk_constituencies"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__30847 = null;if (arguments.length > 0) {
  p__30847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__30847);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__30850){
var p__30847 = cljs.core.seq(arglist__30850);
return portfolio_company_sites__delegate(p__30847);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__30851){var vec__30853 = p__30851;var type_ids = cljs.core.nth.call(null,vec__30853,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__30851 = null;if (arguments.length > 0) {
  p__30851 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__30851);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__30854){
var p__30851 = cljs.core.seq(arglist__30854);
return portfolio_company_locations__delegate(p__30851);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__30855){var vec__30857 = p__30855;var type_ids = cljs.core.nth.call(null,vec__30857,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__30855 = null;if (arguments.length > 0) {
  p__30855 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__30855);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__30858){
var p__30855 = cljs.core.seq(arglist__30858);
return portfolio_company_site_stats__delegate(p__30855);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__30859){var vec__30861 = p__30859;var type_ids = cljs.core.nth.call(null,vec__30861,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__30859 = null;if (arguments.length > 0) {
  p__30859 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__30859);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__30862){
var p__30859 = cljs.core.seq(arglist__30862);
return portfolio_company_site_account_timelines__delegate(p__30859);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.investor_comapnies = (function() { 
var investor_comapnies__delegate = function (p__30863){var vec__30865 = p__30863;var type_ids = cljs.core.nth.call(null,vec__30865,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__30863 = null;if (arguments.length > 0) {
  p__30863 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__30863);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__30866){
var p__30863 = cljs.core.seq(arglist__30866);
return investor_comapnies__delegate(p__30863);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
