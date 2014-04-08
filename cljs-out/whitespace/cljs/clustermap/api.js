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
var GET__delegate = function (url,p__42512){var map__42514 = p__42512;var map__42514__$1 = ((cljs.core.seq_QMARK_.call(null,map__42514))?cljs.core.apply.call(null,cljs.core.hash_map,map__42514):map__42514);var raw = cljs.core.get.call(null,map__42514__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}
}).call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__42512 = null;if (arguments.length > 1) {
  p__42512 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__42512);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__42515){
var url = cljs.core.first(arglist__42515);
var p__42512 = cljs.core.rest(arglist__42515);
return GET__delegate(url,p__42512);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_42648){var state_val_42649 = (state_42648[1]);if((state_val_42649 === 1))
{var state_42648__$1 = state_42648;var statearr_42650_42686 = state_42648__$1;(statearr_42650_42686[2] = null);
(statearr_42650_42686[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 2))
{var state_42648__$1 = state_42648;if(true)
{var statearr_42651_42687 = state_42648__$1;(statearr_42651_42687[1] = 4);
} else
{var statearr_42652_42688 = state_42648__$1;(statearr_42652_42688[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 3))
{var inst_42646 = (state_42648[2]);var state_42648__$1 = state_42648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42648__$1,inst_42646);
} else
{if((state_val_42649 === 4))
{var state_42648__$1 = state_42648;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42648__$1,7,ocomm);
} else
{if((state_val_42649 === 5))
{var state_42648__$1 = state_42648;var statearr_42653_42689 = state_42648__$1;(statearr_42653_42689[2] = null);
(statearr_42653_42689[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 6))
{var inst_42644 = (state_42648[2]);var state_42648__$1 = state_42648;var statearr_42654_42690 = state_42648__$1;(statearr_42654_42690[2] = inst_42644);
(statearr_42654_42690[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 7))
{var inst_42606 = (state_42648[7]);var inst_42605 = (state_42648[2]);var inst_42606__$1 = cljs.core.nth.call(null,inst_42605,0,null);var inst_42607 = cljs.core.nth.call(null,inst_42605,1,null);var inst_42608 = cljs.core.sequential_QMARK_.call(null,inst_42606__$1);var state_42648__$1 = (function (){var statearr_42655 = state_42648;(statearr_42655[8] = inst_42607);
(statearr_42655[7] = inst_42606__$1);
return statearr_42655;
})();if(inst_42608)
{var statearr_42656_42691 = state_42648__$1;(statearr_42656_42691[1] = 8);
} else
{var statearr_42657_42692 = state_42648__$1;(statearr_42657_42692[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 8))
{var inst_42606 = (state_42648[7]);var inst_42610 = inst_42606;var inst_42611 = cljs.core.PersistentVector.EMPTY;var state_42648__$1 = (function (){var statearr_42658 = state_42648;(statearr_42658[9] = inst_42610);
(statearr_42658[10] = inst_42611);
return statearr_42658;
})();var statearr_42659_42693 = state_42648__$1;(statearr_42659_42693[2] = null);
(statearr_42659_42693[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 9))
{var inst_42606 = (state_42648[7]);var state_42648__$1 = state_42648;if(cljs.core.truth_(inst_42606))
{var statearr_42660_42694 = state_42648__$1;(statearr_42660_42694[1] = 20);
} else
{var statearr_42661_42695 = state_42648__$1;(statearr_42661_42695[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 10))
{var inst_42607 = (state_42648[8]);var inst_42639 = (state_42648[2]);var inst_42640 = cljs.core.apply.call(null,handler,inst_42639,inst_42607);var state_42648__$1 = (function (){var statearr_42662 = state_42648;(statearr_42662[11] = inst_42640);
return statearr_42662;
})();var statearr_42663_42696 = state_42648__$1;(statearr_42663_42696[2] = null);
(statearr_42663_42696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 11))
{var inst_42610 = (state_42648[9]);var inst_42613 = cljs.core.empty_QMARK_.call(null,inst_42610);var state_42648__$1 = state_42648;if(inst_42613)
{var statearr_42664_42697 = state_42648__$1;(statearr_42664_42697[1] = 13);
} else
{var statearr_42665_42698 = state_42648__$1;(statearr_42665_42698[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 12))
{var inst_42630 = (state_42648[2]);var state_42648__$1 = state_42648;var statearr_42666_42699 = state_42648__$1;(statearr_42666_42699[2] = inst_42630);
(statearr_42666_42699[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 13))
{var inst_42611 = (state_42648[10]);var state_42648__$1 = state_42648;var statearr_42667_42700 = state_42648__$1;(statearr_42667_42700[2] = inst_42611);
(statearr_42667_42700[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 14))
{var inst_42610 = (state_42648[9]);var inst_42616 = cljs.core.rest.call(null,inst_42610);var inst_42617 = cljs.core.first.call(null,inst_42610);var state_42648__$1 = (function (){var statearr_42668 = state_42648;(statearr_42668[12] = inst_42616);
return statearr_42668;
})();if(cljs.core.truth_(inst_42617))
{var statearr_42669_42701 = state_42648__$1;(statearr_42669_42701[1] = 16);
} else
{var statearr_42670_42702 = state_42648__$1;(statearr_42670_42702[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 15))
{var inst_42628 = (state_42648[2]);var state_42648__$1 = state_42648;var statearr_42671_42703 = state_42648__$1;(statearr_42671_42703[2] = inst_42628);
(statearr_42671_42703[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 16))
{var inst_42610 = (state_42648[9]);var inst_42619 = cljs.core.first.call(null,inst_42610);var state_42648__$1 = state_42648;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42648__$1,19,inst_42619);
} else
{if((state_val_42649 === 17))
{var state_42648__$1 = state_42648;var statearr_42672_42704 = state_42648__$1;(statearr_42672_42704[2] = null);
(statearr_42672_42704[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 18))
{var inst_42611 = (state_42648[10]);var inst_42616 = (state_42648[12]);var inst_42624 = (state_42648[2]);var inst_42625 = cljs.core.conj.call(null,inst_42611,inst_42624);var inst_42610 = inst_42616;var inst_42611__$1 = inst_42625;var state_42648__$1 = (function (){var statearr_42673 = state_42648;(statearr_42673[9] = inst_42610);
(statearr_42673[10] = inst_42611__$1);
return statearr_42673;
})();var statearr_42674_42705 = state_42648__$1;(statearr_42674_42705[2] = null);
(statearr_42674_42705[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 19))
{var inst_42621 = (state_42648[2]);var state_42648__$1 = state_42648;var statearr_42675_42706 = state_42648__$1;(statearr_42675_42706[2] = inst_42621);
(statearr_42675_42706[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 20))
{var inst_42606 = (state_42648[7]);var state_42648__$1 = state_42648;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42648__$1,23,inst_42606);
} else
{if((state_val_42649 === 21))
{var state_42648__$1 = state_42648;var statearr_42676_42707 = state_42648__$1;(statearr_42676_42707[2] = null);
(statearr_42676_42707[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 22))
{var inst_42637 = (state_42648[2]);var state_42648__$1 = state_42648;var statearr_42677_42708 = state_42648__$1;(statearr_42677_42708[2] = inst_42637);
(statearr_42677_42708[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42649 === 23))
{var inst_42634 = (state_42648[2]);var state_42648__$1 = state_42648;var statearr_42678_42709 = state_42648__$1;(statearr_42678_42709[2] = inst_42634);
(statearr_42678_42709[1] = 22);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_42682 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42682[0] = state_machine__5548__auto__);
(statearr_42682[1] = 1);
return statearr_42682;
});
var state_machine__5548__auto____1 = (function (state_42648){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_42648);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e42683){if((e42683 instanceof Object))
{var ex__5551__auto__ = e42683;var statearr_42684_42710 = state_42648;(statearr_42684_42710[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42648);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42683;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42711 = state_42648;
state_42648 = G__42711;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_42648){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_42648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_42685 = f__5563__auto__.call(null);(statearr_42685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_42685;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return (function() { 
var G__42714__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__42713 = rseq;var rcomm = cljs.core.nth.call(null,vec__42713,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__42713,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__42714 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__42714__delegate.call(this,req_args);};
G__42714.cljs$lang$maxFixedArity = 0;
G__42714.cljs$lang$applyTo = (function (arglist__42715){
var req_args = cljs.core.seq(arglist__42715);
return G__42714__delegate(req_args);
});
G__42714.cljs$core$IFn$_invoke$arity$variadic = G__42714__delegate;
return G__42714;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_42733){var state_val_42734 = (state_42733[1]);if((state_val_42734 === 2))
{var inst_42730 = (state_42733[2]);var inst_42731 = console.log(inst_42730);var state_42733__$1 = state_42733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42733__$1,inst_42731);
} else
{if((state_val_42734 === 1))
{var state_42733__$1 = state_42733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42733__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_42738 = [null,null,null,null,null,null,null];(statearr_42738[0] = state_machine__5548__auto__);
(statearr_42738[1] = 1);
return statearr_42738;
});
var state_machine__5548__auto____1 = (function (state_42733){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_42733);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e42739){if((e42739 instanceof Object))
{var ex__5551__auto__ = e42739;var statearr_42740_42742 = state_42733;(statearr_42740_42742[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42739;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42743 = state_42733;
state_42733 = G__42743;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_42733){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_42733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_42741 = f__5563__auto__.call(null);(statearr_42741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_42741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__42744){
var f = cljs.core.first(arglist__42744);
var args = cljs.core.rest(arglist__42744);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__42747){var vec__42748 = p__42747;var k = cljs.core.nth.call(null,vec__42748,0,null);var v = cljs.core.nth.call(null,vec__42748,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__42749){
var id = cljs.core.first(arglist__42749);
arglist__42749 = cljs.core.next(arglist__42749);
var tolerance = cljs.core.first(arglist__42749);
var opts = cljs.core.rest(arglist__42749);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__42750){
var id = cljs.core.first(arglist__42750);
var opts = cljs.core.rest(arglist__42750);
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
var portfolio_company_sites__delegate = function (p__42751){var vec__42753 = p__42751;var type_ids = cljs.core.nth.call(null,vec__42753,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__42751 = null;if (arguments.length > 0) {
  p__42751 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__42751);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__42754){
var p__42751 = cljs.core.seq(arglist__42754);
return portfolio_company_sites__delegate(p__42751);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__42755){var vec__42757 = p__42755;var type_ids = cljs.core.nth.call(null,vec__42757,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__42755 = null;if (arguments.length > 0) {
  p__42755 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__42755);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__42758){
var p__42755 = cljs.core.seq(arglist__42758);
return portfolio_company_sites_by_company__delegate(p__42755);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__42759){var vec__42761 = p__42759;var type_ids = cljs.core.nth.call(null,vec__42761,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__42759 = null;if (arguments.length > 0) {
  p__42759 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__42759);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__42762){
var p__42759 = cljs.core.seq(arglist__42762);
return portfolio_company_locations__delegate(p__42759);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__42763){var vec__42765 = p__42763;var type_ids = cljs.core.nth.call(null,vec__42765,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__42763 = null;if (arguments.length > 0) {
  p__42763 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__42763);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__42766){
var p__42763 = cljs.core.seq(arglist__42766);
return portfolio_company_site_stats__delegate(p__42763);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__42767){var vec__42769 = p__42767;var type_ids = cljs.core.nth.call(null,vec__42769,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__42767 = null;if (arguments.length > 0) {
  p__42767 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__42767);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__42770){
var p__42767 = cljs.core.seq(arglist__42770);
return portfolio_company_site_account_timelines__delegate(p__42767);
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
var investment_account_timelines__delegate = function (p__42771){var vec__42773 = p__42771;var type_ids = cljs.core.nth.call(null,vec__42773,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__42771 = null;if (arguments.length > 0) {
  p__42771 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__42771);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__42774){
var p__42771 = cljs.core.seq(arglist__42774);
return investment_account_timelines__delegate(p__42771);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__42775){var vec__42777 = p__42775;var type_ids = cljs.core.nth.call(null,vec__42777,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__42775 = null;if (arguments.length > 0) {
  p__42775 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__42775);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__42778){
var p__42775 = cljs.core.seq(arglist__42778);
return investment_stats__delegate(p__42775);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__42779){var vec__42781 = p__42779;var type_ids = cljs.core.nth.call(null,vec__42781,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__42779 = null;if (arguments.length > 0) {
  p__42779 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__42779);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__42782){
var p__42779 = cljs.core.seq(arglist__42782);
return investment_aggs__delegate(p__42779);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__42783){var vec__42785 = p__42783;var type_ids = cljs.core.nth.call(null,vec__42785,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__42783 = null;if (arguments.length > 0) {
  p__42783 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__42783);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__42786){
var p__42783 = cljs.core.seq(arglist__42786);
return investments__delegate(p__42783);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
