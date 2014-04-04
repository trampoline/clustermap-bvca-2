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
var GET__delegate = function (url,p__42488){var map__42490 = p__42488;var map__42490__$1 = ((cljs.core.seq_QMARK_.call(null,map__42490))?cljs.core.apply.call(null,cljs.core.hash_map,map__42490):map__42490);var raw = cljs.core.get.call(null,map__42490__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__42488 = null;if (arguments.length > 1) {
  p__42488 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__42488);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__42491){
var url = cljs.core.first(arglist__42491);
var p__42488 = cljs.core.rest(arglist__42491);
return GET__delegate(url,p__42488);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_42624){var state_val_42625 = (state_42624[1]);if((state_val_42625 === 1))
{var state_42624__$1 = state_42624;var statearr_42626_42662 = state_42624__$1;(statearr_42626_42662[2] = null);
(statearr_42626_42662[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 2))
{var state_42624__$1 = state_42624;if(true)
{var statearr_42627_42663 = state_42624__$1;(statearr_42627_42663[1] = 4);
} else
{var statearr_42628_42664 = state_42624__$1;(statearr_42628_42664[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 3))
{var inst_42622 = (state_42624[2]);var state_42624__$1 = state_42624;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42624__$1,inst_42622);
} else
{if((state_val_42625 === 4))
{var state_42624__$1 = state_42624;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42624__$1,7,ocomm);
} else
{if((state_val_42625 === 5))
{var state_42624__$1 = state_42624;var statearr_42629_42665 = state_42624__$1;(statearr_42629_42665[2] = null);
(statearr_42629_42665[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 6))
{var inst_42620 = (state_42624[2]);var state_42624__$1 = state_42624;var statearr_42630_42666 = state_42624__$1;(statearr_42630_42666[2] = inst_42620);
(statearr_42630_42666[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 7))
{var inst_42582 = (state_42624[7]);var inst_42581 = (state_42624[2]);var inst_42582__$1 = cljs.core.nth.call(null,inst_42581,0,null);var inst_42583 = cljs.core.nth.call(null,inst_42581,1,null);var inst_42584 = cljs.core.sequential_QMARK_.call(null,inst_42582__$1);var state_42624__$1 = (function (){var statearr_42631 = state_42624;(statearr_42631[8] = inst_42583);
(statearr_42631[7] = inst_42582__$1);
return statearr_42631;
})();if(inst_42584)
{var statearr_42632_42667 = state_42624__$1;(statearr_42632_42667[1] = 8);
} else
{var statearr_42633_42668 = state_42624__$1;(statearr_42633_42668[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 8))
{var inst_42582 = (state_42624[7]);var inst_42586 = inst_42582;var inst_42587 = cljs.core.PersistentVector.EMPTY;var state_42624__$1 = (function (){var statearr_42634 = state_42624;(statearr_42634[9] = inst_42586);
(statearr_42634[10] = inst_42587);
return statearr_42634;
})();var statearr_42635_42669 = state_42624__$1;(statearr_42635_42669[2] = null);
(statearr_42635_42669[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 9))
{var inst_42582 = (state_42624[7]);var state_42624__$1 = state_42624;if(cljs.core.truth_(inst_42582))
{var statearr_42636_42670 = state_42624__$1;(statearr_42636_42670[1] = 20);
} else
{var statearr_42637_42671 = state_42624__$1;(statearr_42637_42671[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 10))
{var inst_42583 = (state_42624[8]);var inst_42615 = (state_42624[2]);var inst_42616 = cljs.core.apply.call(null,handler,inst_42615,inst_42583);var state_42624__$1 = (function (){var statearr_42638 = state_42624;(statearr_42638[11] = inst_42616);
return statearr_42638;
})();var statearr_42639_42672 = state_42624__$1;(statearr_42639_42672[2] = null);
(statearr_42639_42672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 11))
{var inst_42586 = (state_42624[9]);var inst_42589 = cljs.core.empty_QMARK_.call(null,inst_42586);var state_42624__$1 = state_42624;if(inst_42589)
{var statearr_42640_42673 = state_42624__$1;(statearr_42640_42673[1] = 13);
} else
{var statearr_42641_42674 = state_42624__$1;(statearr_42641_42674[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 12))
{var inst_42606 = (state_42624[2]);var state_42624__$1 = state_42624;var statearr_42642_42675 = state_42624__$1;(statearr_42642_42675[2] = inst_42606);
(statearr_42642_42675[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 13))
{var inst_42587 = (state_42624[10]);var state_42624__$1 = state_42624;var statearr_42643_42676 = state_42624__$1;(statearr_42643_42676[2] = inst_42587);
(statearr_42643_42676[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 14))
{var inst_42586 = (state_42624[9]);var inst_42592 = cljs.core.rest.call(null,inst_42586);var inst_42593 = cljs.core.first.call(null,inst_42586);var state_42624__$1 = (function (){var statearr_42644 = state_42624;(statearr_42644[12] = inst_42592);
return statearr_42644;
})();if(cljs.core.truth_(inst_42593))
{var statearr_42645_42677 = state_42624__$1;(statearr_42645_42677[1] = 16);
} else
{var statearr_42646_42678 = state_42624__$1;(statearr_42646_42678[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 15))
{var inst_42604 = (state_42624[2]);var state_42624__$1 = state_42624;var statearr_42647_42679 = state_42624__$1;(statearr_42647_42679[2] = inst_42604);
(statearr_42647_42679[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 16))
{var inst_42586 = (state_42624[9]);var inst_42595 = cljs.core.first.call(null,inst_42586);var state_42624__$1 = state_42624;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42624__$1,19,inst_42595);
} else
{if((state_val_42625 === 17))
{var state_42624__$1 = state_42624;var statearr_42648_42680 = state_42624__$1;(statearr_42648_42680[2] = null);
(statearr_42648_42680[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 18))
{var inst_42587 = (state_42624[10]);var inst_42592 = (state_42624[12]);var inst_42600 = (state_42624[2]);var inst_42601 = cljs.core.conj.call(null,inst_42587,inst_42600);var inst_42586 = inst_42592;var inst_42587__$1 = inst_42601;var state_42624__$1 = (function (){var statearr_42649 = state_42624;(statearr_42649[9] = inst_42586);
(statearr_42649[10] = inst_42587__$1);
return statearr_42649;
})();var statearr_42650_42681 = state_42624__$1;(statearr_42650_42681[2] = null);
(statearr_42650_42681[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 19))
{var inst_42597 = (state_42624[2]);var state_42624__$1 = state_42624;var statearr_42651_42682 = state_42624__$1;(statearr_42651_42682[2] = inst_42597);
(statearr_42651_42682[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 20))
{var inst_42582 = (state_42624[7]);var state_42624__$1 = state_42624;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42624__$1,23,inst_42582);
} else
{if((state_val_42625 === 21))
{var state_42624__$1 = state_42624;var statearr_42652_42683 = state_42624__$1;(statearr_42652_42683[2] = null);
(statearr_42652_42683[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 22))
{var inst_42613 = (state_42624[2]);var state_42624__$1 = state_42624;var statearr_42653_42684 = state_42624__$1;(statearr_42653_42684[2] = inst_42613);
(statearr_42653_42684[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42625 === 23))
{var inst_42610 = (state_42624[2]);var state_42624__$1 = state_42624;var statearr_42654_42685 = state_42624__$1;(statearr_42654_42685[2] = inst_42610);
(statearr_42654_42685[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_42658 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42658[0] = state_machine__5548__auto__);
(statearr_42658[1] = 1);
return statearr_42658;
});
var state_machine__5548__auto____1 = (function (state_42624){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_42624);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e42659){if((e42659 instanceof Object))
{var ex__5551__auto__ = e42659;var statearr_42660_42686 = state_42624;(statearr_42660_42686[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42624);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42687 = state_42624;
state_42624 = G__42687;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_42624){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_42624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_42661 = f__5563__auto__.call(null);(statearr_42661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_42661;
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
var G__42690__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__42689 = rseq;var rcomm = cljs.core.nth.call(null,vec__42689,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__42689,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__42690 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__42690__delegate.call(this,req_args);};
G__42690.cljs$lang$maxFixedArity = 0;
G__42690.cljs$lang$applyTo = (function (arglist__42691){
var req_args = cljs.core.seq(arglist__42691);
return G__42690__delegate(req_args);
});
G__42690.cljs$core$IFn$_invoke$arity$variadic = G__42690__delegate;
return G__42690;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_42709){var state_val_42710 = (state_42709[1]);if((state_val_42710 === 2))
{var inst_42706 = (state_42709[2]);var inst_42707 = console.log(inst_42706);var state_42709__$1 = state_42709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42709__$1,inst_42707);
} else
{if((state_val_42710 === 1))
{var state_42709__$1 = state_42709;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42709__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_42714 = [null,null,null,null,null,null,null];(statearr_42714[0] = state_machine__5548__auto__);
(statearr_42714[1] = 1);
return statearr_42714;
});
var state_machine__5548__auto____1 = (function (state_42709){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_42709);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e42715){if((e42715 instanceof Object))
{var ex__5551__auto__ = e42715;var statearr_42716_42718 = state_42709;(statearr_42716_42718[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42709);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42715;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42719 = state_42709;
state_42709 = G__42719;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_42709){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_42709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_42717 = f__5563__auto__.call(null);(statearr_42717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_42717;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__42720){
var f = cljs.core.first(arglist__42720);
var args = cljs.core.rest(arglist__42720);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__42723){var vec__42724 = p__42723;var k = cljs.core.nth.call(null,vec__42724,0,null);var v = cljs.core.nth.call(null,vec__42724,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__42725){
var id = cljs.core.first(arglist__42725);
arglist__42725 = cljs.core.next(arglist__42725);
var tolerance = cljs.core.first(arglist__42725);
var opts = cljs.core.rest(arglist__42725);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__42726){
var id = cljs.core.first(arglist__42726);
var opts = cljs.core.rest(arglist__42726);
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
var portfolio_company_sites__delegate = function (p__42727){var vec__42729 = p__42727;var type_ids = cljs.core.nth.call(null,vec__42729,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__42727 = null;if (arguments.length > 0) {
  p__42727 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__42727);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__42730){
var p__42727 = cljs.core.seq(arglist__42730);
return portfolio_company_sites__delegate(p__42727);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__42731){var vec__42733 = p__42731;var type_ids = cljs.core.nth.call(null,vec__42733,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__42731 = null;if (arguments.length > 0) {
  p__42731 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__42731);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__42734){
var p__42731 = cljs.core.seq(arglist__42734);
return portfolio_company_sites_by_company__delegate(p__42731);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__42735){var vec__42737 = p__42735;var type_ids = cljs.core.nth.call(null,vec__42737,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__42735 = null;if (arguments.length > 0) {
  p__42735 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__42735);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__42738){
var p__42735 = cljs.core.seq(arglist__42738);
return portfolio_company_locations__delegate(p__42735);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__42739){var vec__42741 = p__42739;var type_ids = cljs.core.nth.call(null,vec__42741,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__42739 = null;if (arguments.length > 0) {
  p__42739 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__42739);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__42742){
var p__42739 = cljs.core.seq(arglist__42742);
return portfolio_company_site_stats__delegate(p__42739);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__42743){var vec__42745 = p__42743;var type_ids = cljs.core.nth.call(null,vec__42745,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__42743 = null;if (arguments.length > 0) {
  p__42743 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__42743);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__42746){
var p__42743 = cljs.core.seq(arglist__42746);
return portfolio_company_site_account_timelines__delegate(p__42743);
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
var investment_account_timelines__delegate = function (p__42747){var vec__42749 = p__42747;var type_ids = cljs.core.nth.call(null,vec__42749,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__42747 = null;if (arguments.length > 0) {
  p__42747 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__42747);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__42750){
var p__42747 = cljs.core.seq(arglist__42750);
return investment_account_timelines__delegate(p__42747);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__42751){var vec__42753 = p__42751;var type_ids = cljs.core.nth.call(null,vec__42753,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__42751 = null;if (arguments.length > 0) {
  p__42751 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__42751);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__42754){
var p__42751 = cljs.core.seq(arglist__42754);
return investment_stats__delegate(p__42751);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__42755){var vec__42757 = p__42755;var type_ids = cljs.core.nth.call(null,vec__42757,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__42755 = null;if (arguments.length > 0) {
  p__42755 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__42755);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__42758){
var p__42755 = cljs.core.seq(arglist__42758);
return investment_aggs__delegate(p__42755);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__42759){var vec__42761 = p__42759;var type_ids = cljs.core.nth.call(null,vec__42761,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__42759 = null;if (arguments.length > 0) {
  p__42759 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__42759);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__42762){
var p__42759 = cljs.core.seq(arglist__42762);
return investments__delegate(p__42759);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
