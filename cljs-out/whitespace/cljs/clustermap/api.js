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
var GET__delegate = function (url,p__31464){var map__31466 = p__31464;var map__31466__$1 = ((cljs.core.seq_QMARK_.call(null,map__31466))?cljs.core.apply.call(null,cljs.core.hash_map,map__31466):map__31466);var raw = cljs.core.get.call(null,map__31466__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__31464 = null;if (arguments.length > 1) {
  p__31464 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__31464);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__31467){
var url = cljs.core.first(arglist__31467);
var p__31464 = cljs.core.rest(arglist__31467);
return GET__delegate(url,p__31464);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31600){var state_val_31601 = (state_31600[1]);if((state_val_31601 === 1))
{var state_31600__$1 = state_31600;var statearr_31602_31638 = state_31600__$1;(statearr_31602_31638[2] = null);
(statearr_31602_31638[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 2))
{var state_31600__$1 = state_31600;if(true)
{var statearr_31603_31639 = state_31600__$1;(statearr_31603_31639[1] = 4);
} else
{var statearr_31604_31640 = state_31600__$1;(statearr_31604_31640[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 3))
{var inst_31598 = (state_31600[2]);var state_31600__$1 = state_31600;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31600__$1,inst_31598);
} else
{if((state_val_31601 === 4))
{var state_31600__$1 = state_31600;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31600__$1,7,ocomm);
} else
{if((state_val_31601 === 5))
{var state_31600__$1 = state_31600;var statearr_31605_31641 = state_31600__$1;(statearr_31605_31641[2] = null);
(statearr_31605_31641[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 6))
{var inst_31596 = (state_31600[2]);var state_31600__$1 = state_31600;var statearr_31606_31642 = state_31600__$1;(statearr_31606_31642[2] = inst_31596);
(statearr_31606_31642[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 7))
{var inst_31558 = (state_31600[7]);var inst_31557 = (state_31600[2]);var inst_31558__$1 = cljs.core.nth.call(null,inst_31557,0,null);var inst_31559 = cljs.core.nth.call(null,inst_31557,1,null);var inst_31560 = cljs.core.sequential_QMARK_.call(null,inst_31558__$1);var state_31600__$1 = (function (){var statearr_31607 = state_31600;(statearr_31607[7] = inst_31558__$1);
(statearr_31607[8] = inst_31559);
return statearr_31607;
})();if(inst_31560)
{var statearr_31608_31643 = state_31600__$1;(statearr_31608_31643[1] = 8);
} else
{var statearr_31609_31644 = state_31600__$1;(statearr_31609_31644[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 8))
{var inst_31558 = (state_31600[7]);var inst_31562 = inst_31558;var inst_31563 = cljs.core.PersistentVector.EMPTY;var state_31600__$1 = (function (){var statearr_31610 = state_31600;(statearr_31610[9] = inst_31563);
(statearr_31610[10] = inst_31562);
return statearr_31610;
})();var statearr_31611_31645 = state_31600__$1;(statearr_31611_31645[2] = null);
(statearr_31611_31645[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 9))
{var inst_31558 = (state_31600[7]);var state_31600__$1 = state_31600;if(cljs.core.truth_(inst_31558))
{var statearr_31612_31646 = state_31600__$1;(statearr_31612_31646[1] = 20);
} else
{var statearr_31613_31647 = state_31600__$1;(statearr_31613_31647[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 10))
{var inst_31559 = (state_31600[8]);var inst_31591 = (state_31600[2]);var inst_31592 = cljs.core.apply.call(null,handler,inst_31591,inst_31559);var state_31600__$1 = (function (){var statearr_31614 = state_31600;(statearr_31614[11] = inst_31592);
return statearr_31614;
})();var statearr_31615_31648 = state_31600__$1;(statearr_31615_31648[2] = null);
(statearr_31615_31648[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 11))
{var inst_31562 = (state_31600[10]);var inst_31565 = cljs.core.empty_QMARK_.call(null,inst_31562);var state_31600__$1 = state_31600;if(inst_31565)
{var statearr_31616_31649 = state_31600__$1;(statearr_31616_31649[1] = 13);
} else
{var statearr_31617_31650 = state_31600__$1;(statearr_31617_31650[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 12))
{var inst_31582 = (state_31600[2]);var state_31600__$1 = state_31600;var statearr_31618_31651 = state_31600__$1;(statearr_31618_31651[2] = inst_31582);
(statearr_31618_31651[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 13))
{var inst_31563 = (state_31600[9]);var state_31600__$1 = state_31600;var statearr_31619_31652 = state_31600__$1;(statearr_31619_31652[2] = inst_31563);
(statearr_31619_31652[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 14))
{var inst_31562 = (state_31600[10]);var inst_31568 = cljs.core.rest.call(null,inst_31562);var inst_31569 = cljs.core.first.call(null,inst_31562);var state_31600__$1 = (function (){var statearr_31620 = state_31600;(statearr_31620[12] = inst_31568);
return statearr_31620;
})();if(cljs.core.truth_(inst_31569))
{var statearr_31621_31653 = state_31600__$1;(statearr_31621_31653[1] = 16);
} else
{var statearr_31622_31654 = state_31600__$1;(statearr_31622_31654[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 15))
{var inst_31580 = (state_31600[2]);var state_31600__$1 = state_31600;var statearr_31623_31655 = state_31600__$1;(statearr_31623_31655[2] = inst_31580);
(statearr_31623_31655[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 16))
{var inst_31562 = (state_31600[10]);var inst_31571 = cljs.core.first.call(null,inst_31562);var state_31600__$1 = state_31600;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31600__$1,19,inst_31571);
} else
{if((state_val_31601 === 17))
{var state_31600__$1 = state_31600;var statearr_31624_31656 = state_31600__$1;(statearr_31624_31656[2] = null);
(statearr_31624_31656[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 18))
{var inst_31568 = (state_31600[12]);var inst_31563 = (state_31600[9]);var inst_31576 = (state_31600[2]);var inst_31577 = cljs.core.conj.call(null,inst_31563,inst_31576);var inst_31562 = inst_31568;var inst_31563__$1 = inst_31577;var state_31600__$1 = (function (){var statearr_31625 = state_31600;(statearr_31625[9] = inst_31563__$1);
(statearr_31625[10] = inst_31562);
return statearr_31625;
})();var statearr_31626_31657 = state_31600__$1;(statearr_31626_31657[2] = null);
(statearr_31626_31657[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 19))
{var inst_31573 = (state_31600[2]);var state_31600__$1 = state_31600;var statearr_31627_31658 = state_31600__$1;(statearr_31627_31658[2] = inst_31573);
(statearr_31627_31658[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 20))
{var inst_31558 = (state_31600[7]);var state_31600__$1 = state_31600;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31600__$1,23,inst_31558);
} else
{if((state_val_31601 === 21))
{var state_31600__$1 = state_31600;var statearr_31628_31659 = state_31600__$1;(statearr_31628_31659[2] = null);
(statearr_31628_31659[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 22))
{var inst_31589 = (state_31600[2]);var state_31600__$1 = state_31600;var statearr_31629_31660 = state_31600__$1;(statearr_31629_31660[2] = inst_31589);
(statearr_31629_31660[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31601 === 23))
{var inst_31586 = (state_31600[2]);var state_31600__$1 = state_31600;var statearr_31630_31661 = state_31600__$1;(statearr_31630_31661[2] = inst_31586);
(statearr_31630_31661[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_31634 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31634[0] = state_machine__5507__auto__);
(statearr_31634[1] = 1);
return statearr_31634;
});
var state_machine__5507__auto____1 = (function (state_31600){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31600);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31635){if((e31635 instanceof Object))
{var ex__5510__auto__ = e31635;var statearr_31636_31662 = state_31600;(statearr_31636_31662[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31600);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31663 = state_31600;
state_31600 = G__31663;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31600){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31637 = f__5522__auto__.call(null);(statearr_31637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31637;
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
var G__31666__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__31665 = rseq;var rcomm = cljs.core.nth.call(null,vec__31665,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__31665,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__31666 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31666__delegate.call(this,req_args);};
G__31666.cljs$lang$maxFixedArity = 0;
G__31666.cljs$lang$applyTo = (function (arglist__31667){
var req_args = cljs.core.seq(arglist__31667);
return G__31666__delegate(req_args);
});
G__31666.cljs$core$IFn$_invoke$arity$variadic = G__31666__delegate;
return G__31666;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31685){var state_val_31686 = (state_31685[1]);if((state_val_31686 === 2))
{var inst_31682 = (state_31685[2]);var inst_31683 = console.log(inst_31682);var state_31685__$1 = state_31685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31685__$1,inst_31683);
} else
{if((state_val_31686 === 1))
{var state_31685__$1 = state_31685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31685__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_31690 = [null,null,null,null,null,null,null];(statearr_31690[0] = state_machine__5507__auto__);
(statearr_31690[1] = 1);
return statearr_31690;
});
var state_machine__5507__auto____1 = (function (state_31685){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31685);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31691){if((e31691 instanceof Object))
{var ex__5510__auto__ = e31691;var statearr_31692_31694 = state_31685;(statearr_31692_31694[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31685);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31691;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31695 = state_31685;
state_31685 = G__31695;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31685){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31693 = f__5522__auto__.call(null);(statearr_31693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__31696){
var f = cljs.core.first(arglist__31696);
var args = cljs.core.rest(arglist__31696);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__31699){var vec__31700 = p__31699;var k = cljs.core.nth.call(null,vec__31700,0,null);var v = cljs.core.nth.call(null,vec__31700,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__31701){
var id = cljs.core.first(arglist__31701);
arglist__31701 = cljs.core.next(arglist__31701);
var tolerance = cljs.core.first(arglist__31701);
var opts = cljs.core.rest(arglist__31701);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__31702){
var id = cljs.core.first(arglist__31702);
var opts = cljs.core.rest(arglist__31702);
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
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__31703){var vec__31705 = p__31703;var type_ids = cljs.core.nth.call(null,vec__31705,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__31703 = null;if (arguments.length > 0) {
  p__31703 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__31703);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__31706){
var p__31703 = cljs.core.seq(arglist__31706);
return portfolio_company_sites__delegate(p__31703);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__31707){var vec__31709 = p__31707;var type_ids = cljs.core.nth.call(null,vec__31709,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__31707 = null;if (arguments.length > 0) {
  p__31707 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__31707);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__31710){
var p__31707 = cljs.core.seq(arglist__31710);
return portfolio_company_sites_by_company__delegate(p__31707);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__31711){var vec__31713 = p__31711;var type_ids = cljs.core.nth.call(null,vec__31713,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__31711 = null;if (arguments.length > 0) {
  p__31711 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__31711);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__31714){
var p__31711 = cljs.core.seq(arglist__31714);
return portfolio_company_locations__delegate(p__31711);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__31715){var vec__31717 = p__31715;var type_ids = cljs.core.nth.call(null,vec__31717,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__31715 = null;if (arguments.length > 0) {
  p__31715 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__31715);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__31718){
var p__31715 = cljs.core.seq(arglist__31718);
return portfolio_company_site_stats__delegate(p__31715);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__31719){var vec__31721 = p__31719;var type_ids = cljs.core.nth.call(null,vec__31721,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__31719 = null;if (arguments.length > 0) {
  p__31719 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__31719);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__31722){
var p__31719 = cljs.core.seq(arglist__31722);
return portfolio_company_site_account_timelines__delegate(p__31719);
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
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__31723){var vec__31725 = p__31723;var type_ids = cljs.core.nth.call(null,vec__31725,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__31723 = null;if (arguments.length > 0) {
  p__31723 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__31723);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__31726){
var p__31723 = cljs.core.seq(arglist__31726);
return investment_account_timelines__delegate(p__31723);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__31727){var vec__31729 = p__31727;var type_ids = cljs.core.nth.call(null,vec__31729,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__31727 = null;if (arguments.length > 0) {
  p__31727 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__31727);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__31730){
var p__31727 = cljs.core.seq(arglist__31730);
return investment_stats__delegate(p__31727);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__31731){var vec__31733 = p__31731;var type_ids = cljs.core.nth.call(null,vec__31733,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__31731 = null;if (arguments.length > 0) {
  p__31731 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__31731);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__31734){
var p__31731 = cljs.core.seq(arglist__31734);
return investment_aggs__delegate(p__31731);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__31735){var vec__31737 = p__31735;var type_ids = cljs.core.nth.call(null,vec__31737,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__31735 = null;if (arguments.length > 0) {
  p__31735 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__31735);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__31738){
var p__31735 = cljs.core.seq(arglist__31738);
return investments__delegate(p__31735);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
