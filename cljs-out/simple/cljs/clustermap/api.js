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
var GET__delegate = function (url,p__8499){var map__8501 = p__8499;var map__8501__$1 = ((cljs.core.seq_QMARK_.call(null,map__8501))?cljs.core.apply.call(null,cljs.core.hash_map,map__8501):map__8501);var raw = cljs.core.get.call(null,map__8501__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,((function (comm,map__8501,map__8501__$1,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__8501,map__8501__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}
});})(comm,map__8501,map__8501__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__8501,map__8501__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__8499 = null;if (arguments.length > 1) {
  p__8499 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__8499);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__8502){
var url = cljs.core.first(arglist__8502);
var p__8499 = cljs.core.rest(arglist__8502);
return GET__delegate(url,p__8499);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_8635){var state_val_8636 = (state_8635[1]);if((state_val_8636 === 7))
{var inst_8593 = (state_8635[7]);var inst_8592 = (state_8635[2]);var inst_8593__$1 = cljs.core.nth.call(null,inst_8592,0,null);var inst_8594 = cljs.core.nth.call(null,inst_8592,1,null);var inst_8595 = cljs.core.sequential_QMARK_.call(null,inst_8593__$1);var state_8635__$1 = (function (){var statearr_8637 = state_8635;(statearr_8637[7] = inst_8593__$1);
(statearr_8637[8] = inst_8594);
return statearr_8637;
})();if(inst_8595)
{var statearr_8638_8673 = state_8635__$1;(statearr_8638_8673[1] = 8);
} else
{var statearr_8639_8674 = state_8635__$1;(statearr_8639_8674[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 20))
{var inst_8593 = (state_8635[7]);var state_8635__$1 = state_8635;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8635__$1,23,inst_8593);
} else
{if((state_val_8636 === 1))
{var state_8635__$1 = state_8635;var statearr_8640_8675 = state_8635__$1;(statearr_8640_8675[2] = null);
(statearr_8640_8675[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 4))
{var state_8635__$1 = state_8635;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8635__$1,7,ocomm);
} else
{if((state_val_8636 === 15))
{var inst_8615 = (state_8635[2]);var state_8635__$1 = state_8635;var statearr_8641_8676 = state_8635__$1;(statearr_8641_8676[2] = inst_8615);
(statearr_8641_8676[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 21))
{var state_8635__$1 = state_8635;var statearr_8642_8677 = state_8635__$1;(statearr_8642_8677[2] = null);
(statearr_8642_8677[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 13))
{var inst_8598 = (state_8635[9]);var state_8635__$1 = state_8635;var statearr_8643_8678 = state_8635__$1;(statearr_8643_8678[2] = inst_8598);
(statearr_8643_8678[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 22))
{var inst_8624 = (state_8635[2]);var state_8635__$1 = state_8635;var statearr_8644_8679 = state_8635__$1;(statearr_8644_8679[2] = inst_8624);
(statearr_8644_8679[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 6))
{var inst_8631 = (state_8635[2]);var state_8635__$1 = state_8635;var statearr_8645_8680 = state_8635__$1;(statearr_8645_8680[2] = inst_8631);
(statearr_8645_8680[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 17))
{var state_8635__$1 = state_8635;var statearr_8646_8681 = state_8635__$1;(statearr_8646_8681[2] = null);
(statearr_8646_8681[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 3))
{var inst_8633 = (state_8635[2]);var state_8635__$1 = state_8635;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8635__$1,inst_8633);
} else
{if((state_val_8636 === 12))
{var inst_8617 = (state_8635[2]);var state_8635__$1 = state_8635;var statearr_8647_8682 = state_8635__$1;(statearr_8647_8682[2] = inst_8617);
(statearr_8647_8682[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 2))
{var state_8635__$1 = state_8635;if(true)
{var statearr_8648_8683 = state_8635__$1;(statearr_8648_8683[1] = 4);
} else
{var statearr_8649_8684 = state_8635__$1;(statearr_8649_8684[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 23))
{var inst_8621 = (state_8635[2]);var state_8635__$1 = state_8635;var statearr_8650_8685 = state_8635__$1;(statearr_8650_8685[2] = inst_8621);
(statearr_8650_8685[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 19))
{var inst_8608 = (state_8635[2]);var state_8635__$1 = state_8635;var statearr_8651_8686 = state_8635__$1;(statearr_8651_8686[2] = inst_8608);
(statearr_8651_8686[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 11))
{var inst_8597 = (state_8635[10]);var inst_8600 = cljs.core.empty_QMARK_.call(null,inst_8597);var state_8635__$1 = state_8635;if(inst_8600)
{var statearr_8652_8687 = state_8635__$1;(statearr_8652_8687[1] = 13);
} else
{var statearr_8653_8688 = state_8635__$1;(statearr_8653_8688[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 9))
{var inst_8593 = (state_8635[7]);var state_8635__$1 = state_8635;if(cljs.core.truth_(inst_8593))
{var statearr_8654_8689 = state_8635__$1;(statearr_8654_8689[1] = 20);
} else
{var statearr_8655_8690 = state_8635__$1;(statearr_8655_8690[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 5))
{var state_8635__$1 = state_8635;var statearr_8656_8691 = state_8635__$1;(statearr_8656_8691[2] = null);
(statearr_8656_8691[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 14))
{var inst_8597 = (state_8635[10]);var inst_8603 = cljs.core.rest.call(null,inst_8597);var inst_8604 = cljs.core.first.call(null,inst_8597);var state_8635__$1 = (function (){var statearr_8657 = state_8635;(statearr_8657[11] = inst_8603);
return statearr_8657;
})();if(cljs.core.truth_(inst_8604))
{var statearr_8658_8692 = state_8635__$1;(statearr_8658_8692[1] = 16);
} else
{var statearr_8659_8693 = state_8635__$1;(statearr_8659_8693[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 16))
{var inst_8597 = (state_8635[10]);var inst_8606 = cljs.core.first.call(null,inst_8597);var state_8635__$1 = state_8635;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8635__$1,19,inst_8606);
} else
{if((state_val_8636 === 10))
{var inst_8594 = (state_8635[8]);var inst_8626 = (state_8635[2]);var inst_8627 = cljs.core.apply.call(null,handler,inst_8626,inst_8594);var state_8635__$1 = (function (){var statearr_8660 = state_8635;(statearr_8660[12] = inst_8627);
return statearr_8660;
})();var statearr_8661_8694 = state_8635__$1;(statearr_8661_8694[2] = null);
(statearr_8661_8694[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 18))
{var inst_8598 = (state_8635[9]);var inst_8603 = (state_8635[11]);var inst_8611 = (state_8635[2]);var inst_8612 = cljs.core.conj.call(null,inst_8598,inst_8611);var inst_8597 = inst_8603;var inst_8598__$1 = inst_8612;var state_8635__$1 = (function (){var statearr_8662 = state_8635;(statearr_8662[9] = inst_8598__$1);
(statearr_8662[10] = inst_8597);
return statearr_8662;
})();var statearr_8663_8695 = state_8635__$1;(statearr_8663_8695[2] = null);
(statearr_8663_8695[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8636 === 8))
{var inst_8593 = (state_8635[7]);var inst_8597 = inst_8593;var inst_8598 = cljs.core.PersistentVector.EMPTY;var state_8635__$1 = (function (){var statearr_8664 = state_8635;(statearr_8664[9] = inst_8598);
(statearr_8664[10] = inst_8597);
return statearr_8664;
})();var statearr_8665_8696 = state_8635__$1;(statearr_8665_8696[2] = null);
(statearr_8665_8696[1] = 11);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_8669 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8669[0] = state_machine__5675__auto__);
(statearr_8669[1] = 1);
return statearr_8669;
});
var state_machine__5675__auto____1 = (function (state_8635){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_8635);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e8670){if((e8670 instanceof Object))
{var ex__5678__auto__ = e8670;var statearr_8671_8697 = state_8635;(statearr_8671_8697[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8635);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8698 = state_8635;
state_8635 = G__8698;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_8635){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_8635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_8672 = f__5690__auto__.call(null);(statearr_8672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_8672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
var G__8701__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__8700 = rseq;var rcomm = cljs.core.nth.call(null,vec__8700,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__8700,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__8701 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8701__delegate.call(this,req_args);};
G__8701.cljs$lang$maxFixedArity = 0;
G__8701.cljs$lang$applyTo = (function (arglist__8702){
var req_args = cljs.core.seq(arglist__8702);
return G__8701__delegate(req_args);
});
G__8701.cljs$core$IFn$_invoke$arity$variadic = G__8701__delegate;
return G__8701;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__,ch){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__,ch){
return (function (state_8720){var state_val_8721 = (state_8720[1]);if((state_val_8721 === 2))
{var inst_8717 = (state_8720[2]);var inst_8718 = console.log(inst_8717);var state_8720__$1 = state_8720;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8720__$1,inst_8718);
} else
{if((state_val_8721 === 1))
{var state_8720__$1 = state_8720;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8720__$1,2,ch);
} else
{return null;
}
}
});})(c__5689__auto__,ch))
;return ((function (switch__5674__auto__,c__5689__auto__,ch){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_8725 = [null,null,null,null,null,null,null];(statearr_8725[0] = state_machine__5675__auto__);
(statearr_8725[1] = 1);
return statearr_8725;
});
var state_machine__5675__auto____1 = (function (state_8720){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_8720);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e8726){if((e8726 instanceof Object))
{var ex__5678__auto__ = e8726;var statearr_8727_8729 = state_8720;(statearr_8727_8729[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8720);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8726;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8730 = state_8720;
state_8720 = G__8730;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_8720){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_8720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__,ch))
})();var state__5691__auto__ = (function (){var statearr_8728 = f__5690__auto__.call(null);(statearr_8728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_8728;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__,ch))
);
return c__5689__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__8731){
var f = cljs.core.first(arglist__8731);
var args = cljs.core.rest(arglist__8731);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__8734){var vec__8735 = p__8734;var k = cljs.core.nth.call(null,vec__8735,0,null);var v = cljs.core.nth.call(null,vec__8735,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
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
boundarylines.cljs$lang$applyTo = (function (arglist__8736){
var id = cljs.core.first(arglist__8736);
arglist__8736 = cljs.core.next(arglist__8736);
var tolerance = cljs.core.first(arglist__8736);
var opts = cljs.core.rest(arglist__8736);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__8737){
var id = cljs.core.first(arglist__8737);
var opts = cljs.core.rest(arglist__8737);
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
var portfolio_company_sites__delegate = function (p__8738){var vec__8740 = p__8738;var type_ids = cljs.core.nth.call(null,vec__8740,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__8738 = null;if (arguments.length > 0) {
  p__8738 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__8738);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__8741){
var p__8738 = cljs.core.seq(arglist__8741);
return portfolio_company_sites__delegate(p__8738);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__8742){var vec__8744 = p__8742;var type_ids = cljs.core.nth.call(null,vec__8744,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__8742 = null;if (arguments.length > 0) {
  p__8742 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__8742);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__8745){
var p__8742 = cljs.core.seq(arglist__8745);
return portfolio_company_sites_by_company__delegate(p__8742);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__8746){var vec__8748 = p__8746;var type_ids = cljs.core.nth.call(null,vec__8748,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__8746 = null;if (arguments.length > 0) {
  p__8746 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__8746);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__8749){
var p__8746 = cljs.core.seq(arglist__8749);
return portfolio_company_locations__delegate(p__8746);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__8750){var vec__8752 = p__8750;var type_ids = cljs.core.nth.call(null,vec__8752,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__8750 = null;if (arguments.length > 0) {
  p__8750 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__8750);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__8753){
var p__8750 = cljs.core.seq(arglist__8753);
return portfolio_company_site_stats__delegate(p__8750);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__8754){var vec__8756 = p__8754;var type_ids = cljs.core.nth.call(null,vec__8756,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__8754 = null;if (arguments.length > 0) {
  p__8754 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__8754);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__8757){
var p__8754 = cljs.core.seq(arglist__8757);
return portfolio_company_site_account_timelines__delegate(p__8754);
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
var investment_account_timelines__delegate = function (p__8758){var vec__8760 = p__8758;var type_ids = cljs.core.nth.call(null,vec__8760,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__8758 = null;if (arguments.length > 0) {
  p__8758 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__8758);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__8761){
var p__8758 = cljs.core.seq(arglist__8761);
return investment_account_timelines__delegate(p__8758);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__8762){var vec__8764 = p__8762;var type_ids = cljs.core.nth.call(null,vec__8764,0,null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__8762 = null;if (arguments.length > 0) {
  p__8762 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__8762);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__8765){
var p__8762 = cljs.core.seq(arglist__8765);
return investment_stats__delegate(p__8762);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__8766){var vec__8768 = p__8766;var type_ids = cljs.core.nth.call(null,vec__8768,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__8766 = null;if (arguments.length > 0) {
  p__8766 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__8766);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__8769){
var p__8766 = cljs.core.seq(arglist__8769);
return investment_aggs__delegate(p__8766);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__8770){var vec__8772 = p__8770;var type_ids = cljs.core.nth.call(null,vec__8772,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__8770 = null;if (arguments.length > 0) {
  p__8770 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__8770);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__8773){
var p__8770 = cljs.core.seq(arglist__8773);
return investments__delegate(p__8770);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
