// Compiled by ClojureScript 0.0-2227
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
var GET__delegate = function (url,p__8501){var map__8503 = p__8501;var map__8503__$1 = ((cljs.core.seq_QMARK_.call(null,map__8503))?cljs.core.apply.call(null,cljs.core.hash_map,map__8503):map__8503);var raw = cljs.core.get.call(null,map__8503__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,((function (comm,map__8503,map__8503__$1,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__8503,map__8503__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}
});})(comm,map__8503,map__8503__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__8503,map__8503__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__8501 = null;if (arguments.length > 1) {
  p__8501 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__8501);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__8504){
var url = cljs.core.first(arglist__8504);
var p__8501 = cljs.core.rest(arglist__8504);
return GET__delegate(url,p__8501);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_8637){var state_val_8638 = (state_8637[1]);if((state_val_8638 === 7))
{var inst_8595 = (state_8637[7]);var inst_8594 = (state_8637[2]);var inst_8595__$1 = cljs.core.nth.call(null,inst_8594,0,null);var inst_8596 = cljs.core.nth.call(null,inst_8594,1,null);var inst_8597 = cljs.core.sequential_QMARK_.call(null,inst_8595__$1);var state_8637__$1 = (function (){var statearr_8639 = state_8637;(statearr_8639[7] = inst_8595__$1);
(statearr_8639[8] = inst_8596);
return statearr_8639;
})();if(inst_8597)
{var statearr_8640_8675 = state_8637__$1;(statearr_8640_8675[1] = 8);
} else
{var statearr_8641_8676 = state_8637__$1;(statearr_8641_8676[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 20))
{var inst_8595 = (state_8637[7]);var state_8637__$1 = state_8637;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8637__$1,23,inst_8595);
} else
{if((state_val_8638 === 1))
{var state_8637__$1 = state_8637;var statearr_8642_8677 = state_8637__$1;(statearr_8642_8677[2] = null);
(statearr_8642_8677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 4))
{var state_8637__$1 = state_8637;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8637__$1,7,ocomm);
} else
{if((state_val_8638 === 15))
{var inst_8617 = (state_8637[2]);var state_8637__$1 = state_8637;var statearr_8643_8678 = state_8637__$1;(statearr_8643_8678[2] = inst_8617);
(statearr_8643_8678[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 21))
{var state_8637__$1 = state_8637;var statearr_8644_8679 = state_8637__$1;(statearr_8644_8679[2] = null);
(statearr_8644_8679[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 13))
{var inst_8600 = (state_8637[9]);var state_8637__$1 = state_8637;var statearr_8645_8680 = state_8637__$1;(statearr_8645_8680[2] = inst_8600);
(statearr_8645_8680[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 22))
{var inst_8626 = (state_8637[2]);var state_8637__$1 = state_8637;var statearr_8646_8681 = state_8637__$1;(statearr_8646_8681[2] = inst_8626);
(statearr_8646_8681[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 6))
{var inst_8633 = (state_8637[2]);var state_8637__$1 = state_8637;var statearr_8647_8682 = state_8637__$1;(statearr_8647_8682[2] = inst_8633);
(statearr_8647_8682[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 17))
{var state_8637__$1 = state_8637;var statearr_8648_8683 = state_8637__$1;(statearr_8648_8683[2] = null);
(statearr_8648_8683[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 3))
{var inst_8635 = (state_8637[2]);var state_8637__$1 = state_8637;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8637__$1,inst_8635);
} else
{if((state_val_8638 === 12))
{var inst_8619 = (state_8637[2]);var state_8637__$1 = state_8637;var statearr_8649_8684 = state_8637__$1;(statearr_8649_8684[2] = inst_8619);
(statearr_8649_8684[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 2))
{var state_8637__$1 = state_8637;if(true)
{var statearr_8650_8685 = state_8637__$1;(statearr_8650_8685[1] = 4);
} else
{var statearr_8651_8686 = state_8637__$1;(statearr_8651_8686[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 23))
{var inst_8623 = (state_8637[2]);var state_8637__$1 = state_8637;var statearr_8652_8687 = state_8637__$1;(statearr_8652_8687[2] = inst_8623);
(statearr_8652_8687[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 19))
{var inst_8610 = (state_8637[2]);var state_8637__$1 = state_8637;var statearr_8653_8688 = state_8637__$1;(statearr_8653_8688[2] = inst_8610);
(statearr_8653_8688[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 11))
{var inst_8599 = (state_8637[10]);var inst_8602 = cljs.core.empty_QMARK_.call(null,inst_8599);var state_8637__$1 = state_8637;if(inst_8602)
{var statearr_8654_8689 = state_8637__$1;(statearr_8654_8689[1] = 13);
} else
{var statearr_8655_8690 = state_8637__$1;(statearr_8655_8690[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 9))
{var inst_8595 = (state_8637[7]);var state_8637__$1 = state_8637;if(cljs.core.truth_(inst_8595))
{var statearr_8656_8691 = state_8637__$1;(statearr_8656_8691[1] = 20);
} else
{var statearr_8657_8692 = state_8637__$1;(statearr_8657_8692[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 5))
{var state_8637__$1 = state_8637;var statearr_8658_8693 = state_8637__$1;(statearr_8658_8693[2] = null);
(statearr_8658_8693[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 14))
{var inst_8599 = (state_8637[10]);var inst_8605 = cljs.core.rest.call(null,inst_8599);var inst_8606 = cljs.core.first.call(null,inst_8599);var state_8637__$1 = (function (){var statearr_8659 = state_8637;(statearr_8659[11] = inst_8605);
return statearr_8659;
})();if(cljs.core.truth_(inst_8606))
{var statearr_8660_8694 = state_8637__$1;(statearr_8660_8694[1] = 16);
} else
{var statearr_8661_8695 = state_8637__$1;(statearr_8661_8695[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 16))
{var inst_8599 = (state_8637[10]);var inst_8608 = cljs.core.first.call(null,inst_8599);var state_8637__$1 = state_8637;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8637__$1,19,inst_8608);
} else
{if((state_val_8638 === 10))
{var inst_8596 = (state_8637[8]);var inst_8628 = (state_8637[2]);var inst_8629 = cljs.core.apply.call(null,handler,inst_8628,inst_8596);var state_8637__$1 = (function (){var statearr_8662 = state_8637;(statearr_8662[12] = inst_8629);
return statearr_8662;
})();var statearr_8663_8696 = state_8637__$1;(statearr_8663_8696[2] = null);
(statearr_8663_8696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 18))
{var inst_8600 = (state_8637[9]);var inst_8605 = (state_8637[11]);var inst_8613 = (state_8637[2]);var inst_8614 = cljs.core.conj.call(null,inst_8600,inst_8613);var inst_8599 = inst_8605;var inst_8600__$1 = inst_8614;var state_8637__$1 = (function (){var statearr_8664 = state_8637;(statearr_8664[10] = inst_8599);
(statearr_8664[9] = inst_8600__$1);
return statearr_8664;
})();var statearr_8665_8697 = state_8637__$1;(statearr_8665_8697[2] = null);
(statearr_8665_8697[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8638 === 8))
{var inst_8595 = (state_8637[7]);var inst_8599 = inst_8595;var inst_8600 = cljs.core.PersistentVector.EMPTY;var state_8637__$1 = (function (){var statearr_8666 = state_8637;(statearr_8666[10] = inst_8599);
(statearr_8666[9] = inst_8600);
return statearr_8666;
})();var statearr_8667_8698 = state_8637__$1;(statearr_8667_8698[2] = null);
(statearr_8667_8698[1] = 11);
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_8671 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8671[0] = state_machine__5677__auto__);
(statearr_8671[1] = 1);
return statearr_8671;
});
var state_machine__5677__auto____1 = (function (state_8637){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_8637);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e8672){if((e8672 instanceof Object))
{var ex__5680__auto__ = e8672;var statearr_8673_8699 = state_8637;(statearr_8673_8699[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8637);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8672;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8700 = state_8637;
state_8637 = G__8700;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_8637){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_8637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_8674 = f__5692__auto__.call(null);(statearr_8674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_8674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__8703__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__8702 = rseq;var rcomm = cljs.core.nth.call(null,vec__8702,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__8702,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__8703 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8703__delegate.call(this,req_args);};
G__8703.cljs$lang$maxFixedArity = 0;
G__8703.cljs$lang$applyTo = (function (arglist__8704){
var req_args = cljs.core.seq(arglist__8704);
return G__8703__delegate(req_args);
});
G__8703.cljs$core$IFn$_invoke$arity$variadic = G__8703__delegate;
return G__8703;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__,ch){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__,ch){
return (function (state_8722){var state_val_8723 = (state_8722[1]);if((state_val_8723 === 2))
{var inst_8719 = (state_8722[2]);var inst_8720 = console.log(inst_8719);var state_8722__$1 = state_8722;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8722__$1,inst_8720);
} else
{if((state_val_8723 === 1))
{var state_8722__$1 = state_8722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8722__$1,2,ch);
} else
{return null;
}
}
});})(c__5691__auto__,ch))
;return ((function (switch__5676__auto__,c__5691__auto__,ch){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_8727 = [null,null,null,null,null,null,null];(statearr_8727[0] = state_machine__5677__auto__);
(statearr_8727[1] = 1);
return statearr_8727;
});
var state_machine__5677__auto____1 = (function (state_8722){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_8722);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e8728){if((e8728 instanceof Object))
{var ex__5680__auto__ = e8728;var statearr_8729_8731 = state_8722;(statearr_8729_8731[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8722);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8732 = state_8722;
state_8722 = G__8732;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_8722){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_8722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,ch))
})();var state__5693__auto__ = (function (){var statearr_8730 = f__5692__auto__.call(null);(statearr_8730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_8730;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__,ch))
);
return c__5691__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__8733){
var f = cljs.core.first(arglist__8733);
var args = cljs.core.rest(arglist__8733);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__8736){var vec__8737 = p__8736;var k = cljs.core.nth.call(null,vec__8737,0,null);var v = cljs.core.nth.call(null,vec__8737,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__8738){
var id = cljs.core.first(arglist__8738);
arglist__8738 = cljs.core.next(arglist__8738);
var tolerance = cljs.core.first(arglist__8738);
var opts = cljs.core.rest(arglist__8738);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__8739){
var id = cljs.core.first(arglist__8739);
var opts = cljs.core.rest(arglist__8739);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > 0))
{return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/constituencies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__8740){var vec__8742 = p__8740;var type_ids = cljs.core.nth.call(null,vec__8742,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__8740 = null;if (arguments.length > 0) {
  p__8740 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__8740);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__8743){
var p__8740 = cljs.core.seq(arglist__8743);
return portfolio_company_sites__delegate(p__8740);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__8744){var vec__8746 = p__8744;var type_ids = cljs.core.nth.call(null,vec__8746,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__8744 = null;if (arguments.length > 0) {
  p__8744 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__8744);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__8747){
var p__8744 = cljs.core.seq(arglist__8747);
return portfolio_company_sites_by_company__delegate(p__8744);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__8748){var vec__8750 = p__8748;var type_ids = cljs.core.nth.call(null,vec__8750,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__8748 = null;if (arguments.length > 0) {
  p__8748 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__8748);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__8751){
var p__8748 = cljs.core.seq(arglist__8751);
return portfolio_company_locations__delegate(p__8748);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__8752){var vec__8754 = p__8752;var type_ids = cljs.core.nth.call(null,vec__8754,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__8752 = null;if (arguments.length > 0) {
  p__8752 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__8752);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__8755){
var p__8752 = cljs.core.seq(arglist__8755);
return portfolio_company_site_stats__delegate(p__8752);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__8756){var vec__8758 = p__8756;var type_ids = cljs.core.nth.call(null,vec__8758,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__8756 = null;if (arguments.length > 0) {
  p__8756 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__8756);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__8759){
var p__8756 = cljs.core.seq(arglist__8759);
return portfolio_company_site_account_timelines__delegate(p__8756);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investor-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__8760){var vec__8762 = p__8760;var type_ids = cljs.core.nth.call(null,vec__8762,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__8760 = null;if (arguments.length > 0) {
  p__8760 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__8760);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__8763){
var p__8760 = cljs.core.seq(arglist__8763);
return investment_account_timelines__delegate(p__8760);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__8764){var vec__8766 = p__8764;var type_ids = cljs.core.nth.call(null,vec__8766,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__8764 = null;if (arguments.length > 0) {
  p__8764 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__8764);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__8767){
var p__8764 = cljs.core.seq(arglist__8767);
return investment_stats__delegate(p__8764);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__8768){var vec__8770 = p__8768;var type_ids = cljs.core.nth.call(null,vec__8770,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__8768 = null;if (arguments.length > 0) {
  p__8768 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__8768);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__8771){
var p__8768 = cljs.core.seq(arglist__8771);
return investment_aggs__delegate(p__8768);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__8772){var vec__8774 = p__8772;var type_ids = cljs.core.nth.call(null,vec__8774,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__8772 = null;if (arguments.length > 0) {
  p__8772 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__8772);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__8775){
var p__8772 = cljs.core.seq(arglist__8775);
return investments__delegate(p__8772);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
