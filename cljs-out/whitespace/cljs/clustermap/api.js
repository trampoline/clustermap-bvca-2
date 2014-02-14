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
var GET__delegate = function (url,p__30568){var map__30570 = p__30568;var map__30570__$1 = ((cljs.core.seq_QMARK_.call(null,map__30570))?cljs.core.apply.call(null,cljs.core.hash_map,map__30570):map__30570);var raw = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__30568 = null;if (arguments.length > 1) {
  p__30568 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__30568);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__30571){
var url = cljs.core.first(arglist__30571);
var p__30568 = cljs.core.rest(arglist__30571);
return GET__delegate(url,p__30568);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30704){var state_val_30705 = (state_30704[1]);if((state_val_30705 === 1))
{var state_30704__$1 = state_30704;var statearr_30706_30742 = state_30704__$1;(statearr_30706_30742[2] = null);
(statearr_30706_30742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 2))
{var state_30704__$1 = state_30704;if(true)
{var statearr_30707_30743 = state_30704__$1;(statearr_30707_30743[1] = 4);
} else
{var statearr_30708_30744 = state_30704__$1;(statearr_30708_30744[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 3))
{var inst_30702 = (state_30704[2]);var state_30704__$1 = state_30704;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30704__$1,inst_30702);
} else
{if((state_val_30705 === 4))
{var state_30704__$1 = state_30704;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30704__$1,7,ocomm);
} else
{if((state_val_30705 === 5))
{var state_30704__$1 = state_30704;var statearr_30709_30745 = state_30704__$1;(statearr_30709_30745[2] = null);
(statearr_30709_30745[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 6))
{var inst_30700 = (state_30704[2]);var state_30704__$1 = state_30704;var statearr_30710_30746 = state_30704__$1;(statearr_30710_30746[2] = inst_30700);
(statearr_30710_30746[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 7))
{var inst_30662 = (state_30704[7]);var inst_30661 = (state_30704[2]);var inst_30662__$1 = cljs.core.nth.call(null,inst_30661,0,null);var inst_30663 = cljs.core.nth.call(null,inst_30661,1,null);var inst_30664 = cljs.core.sequential_QMARK_.call(null,inst_30662__$1);var state_30704__$1 = (function (){var statearr_30711 = state_30704;(statearr_30711[7] = inst_30662__$1);
(statearr_30711[8] = inst_30663);
return statearr_30711;
})();if(inst_30664)
{var statearr_30712_30747 = state_30704__$1;(statearr_30712_30747[1] = 8);
} else
{var statearr_30713_30748 = state_30704__$1;(statearr_30713_30748[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 8))
{var inst_30662 = (state_30704[7]);var inst_30666 = inst_30662;var inst_30667 = cljs.core.PersistentVector.EMPTY;var state_30704__$1 = (function (){var statearr_30714 = state_30704;(statearr_30714[9] = inst_30667);
(statearr_30714[10] = inst_30666);
return statearr_30714;
})();var statearr_30715_30749 = state_30704__$1;(statearr_30715_30749[2] = null);
(statearr_30715_30749[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 9))
{var inst_30662 = (state_30704[7]);var state_30704__$1 = state_30704;if(cljs.core.truth_(inst_30662))
{var statearr_30716_30750 = state_30704__$1;(statearr_30716_30750[1] = 20);
} else
{var statearr_30717_30751 = state_30704__$1;(statearr_30717_30751[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 10))
{var inst_30663 = (state_30704[8]);var inst_30695 = (state_30704[2]);var inst_30696 = cljs.core.apply.call(null,handler,inst_30695,inst_30663);var state_30704__$1 = (function (){var statearr_30718 = state_30704;(statearr_30718[11] = inst_30696);
return statearr_30718;
})();var statearr_30719_30752 = state_30704__$1;(statearr_30719_30752[2] = null);
(statearr_30719_30752[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 11))
{var inst_30666 = (state_30704[10]);var inst_30669 = cljs.core.empty_QMARK_.call(null,inst_30666);var state_30704__$1 = state_30704;if(inst_30669)
{var statearr_30720_30753 = state_30704__$1;(statearr_30720_30753[1] = 13);
} else
{var statearr_30721_30754 = state_30704__$1;(statearr_30721_30754[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 12))
{var inst_30686 = (state_30704[2]);var state_30704__$1 = state_30704;var statearr_30722_30755 = state_30704__$1;(statearr_30722_30755[2] = inst_30686);
(statearr_30722_30755[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 13))
{var inst_30667 = (state_30704[9]);var state_30704__$1 = state_30704;var statearr_30723_30756 = state_30704__$1;(statearr_30723_30756[2] = inst_30667);
(statearr_30723_30756[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 14))
{var inst_30666 = (state_30704[10]);var inst_30672 = cljs.core.rest.call(null,inst_30666);var inst_30673 = cljs.core.first.call(null,inst_30666);var state_30704__$1 = (function (){var statearr_30724 = state_30704;(statearr_30724[12] = inst_30672);
return statearr_30724;
})();if(cljs.core.truth_(inst_30673))
{var statearr_30725_30757 = state_30704__$1;(statearr_30725_30757[1] = 16);
} else
{var statearr_30726_30758 = state_30704__$1;(statearr_30726_30758[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 15))
{var inst_30684 = (state_30704[2]);var state_30704__$1 = state_30704;var statearr_30727_30759 = state_30704__$1;(statearr_30727_30759[2] = inst_30684);
(statearr_30727_30759[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 16))
{var inst_30666 = (state_30704[10]);var inst_30675 = cljs.core.first.call(null,inst_30666);var state_30704__$1 = state_30704;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30704__$1,19,inst_30675);
} else
{if((state_val_30705 === 17))
{var state_30704__$1 = state_30704;var statearr_30728_30760 = state_30704__$1;(statearr_30728_30760[2] = null);
(statearr_30728_30760[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 18))
{var inst_30667 = (state_30704[9]);var inst_30672 = (state_30704[12]);var inst_30680 = (state_30704[2]);var inst_30681 = cljs.core.conj.call(null,inst_30667,inst_30680);var inst_30666 = inst_30672;var inst_30667__$1 = inst_30681;var state_30704__$1 = (function (){var statearr_30729 = state_30704;(statearr_30729[9] = inst_30667__$1);
(statearr_30729[10] = inst_30666);
return statearr_30729;
})();var statearr_30730_30761 = state_30704__$1;(statearr_30730_30761[2] = null);
(statearr_30730_30761[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 19))
{var inst_30677 = (state_30704[2]);var state_30704__$1 = state_30704;var statearr_30731_30762 = state_30704__$1;(statearr_30731_30762[2] = inst_30677);
(statearr_30731_30762[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 20))
{var inst_30662 = (state_30704[7]);var state_30704__$1 = state_30704;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30704__$1,23,inst_30662);
} else
{if((state_val_30705 === 21))
{var state_30704__$1 = state_30704;var statearr_30732_30763 = state_30704__$1;(statearr_30732_30763[2] = null);
(statearr_30732_30763[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 22))
{var inst_30693 = (state_30704[2]);var state_30704__$1 = state_30704;var statearr_30733_30764 = state_30704__$1;(statearr_30733_30764[2] = inst_30693);
(statearr_30733_30764[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30705 === 23))
{var inst_30690 = (state_30704[2]);var state_30704__$1 = state_30704;var statearr_30734_30765 = state_30704__$1;(statearr_30734_30765[2] = inst_30690);
(statearr_30734_30765[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_30738 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30738[0] = state_machine__5507__auto__);
(statearr_30738[1] = 1);
return statearr_30738;
});
var state_machine__5507__auto____1 = (function (state_30704){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30704);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30739){if((e30739 instanceof Object))
{var ex__5510__auto__ = e30739;var statearr_30740_30766 = state_30704;(statearr_30740_30766[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30704);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30739;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30767 = state_30704;
state_30704 = G__30767;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30704){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30741 = f__5522__auto__.call(null);(statearr_30741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30741;
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
var G__30770__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__30769 = rseq;var rcomm = cljs.core.nth.call(null,vec__30769,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__30769,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__30770 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30770__delegate.call(this,req_args);};
G__30770.cljs$lang$maxFixedArity = 0;
G__30770.cljs$lang$applyTo = (function (arglist__30771){
var req_args = cljs.core.seq(arglist__30771);
return G__30770__delegate(req_args);
});
G__30770.cljs$core$IFn$_invoke$arity$variadic = G__30770__delegate;
return G__30770;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30789){var state_val_30790 = (state_30789[1]);if((state_val_30790 === 2))
{var inst_30786 = (state_30789[2]);var inst_30787 = console.log(inst_30786);var state_30789__$1 = state_30789;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30789__$1,inst_30787);
} else
{if((state_val_30790 === 1))
{var state_30789__$1 = state_30789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30789__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30794 = [null,null,null,null,null,null,null];(statearr_30794[0] = state_machine__5507__auto__);
(statearr_30794[1] = 1);
return statearr_30794;
});
var state_machine__5507__auto____1 = (function (state_30789){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30789);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30795){if((e30795 instanceof Object))
{var ex__5510__auto__ = e30795;var statearr_30796_30798 = state_30789;(statearr_30796_30798[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30789);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30799 = state_30789;
state_30789 = G__30799;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30789){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30797 = f__5522__auto__.call(null);(statearr_30797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__30800){
var f = cljs.core.first(arglist__30800);
var args = cljs.core.rest(arglist__30800);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__30803){var vec__30804 = p__30803;var k = cljs.core.nth.call(null,vec__30804,0,null);var v = cljs.core.nth.call(null,vec__30804,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__30805){
var id = cljs.core.first(arglist__30805);
arglist__30805 = cljs.core.next(arglist__30805);
var tolerance = cljs.core.first(arglist__30805);
var opts = cljs.core.rest(arglist__30805);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__30806){
var id = cljs.core.first(arglist__30806);
var opts = cljs.core.rest(arglist__30806);
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
var constituencies__delegate = function (p__30807){var vec__30809 = p__30807;var type_ids = cljs.core.nth.call(null,vec__30809,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__30807 = null;if (arguments.length > 0) {
  p__30807 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__30807);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__30810){
var p__30807 = cljs.core.seq(arglist__30810);
return constituencies__delegate(p__30807);
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
var portfolio_companies__delegate = function (p__30811){var vec__30813 = p__30811;var type_ids = cljs.core.nth.call(null,vec__30813,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__30811 = null;if (arguments.length > 0) {
  p__30811 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__30811);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__30814){
var p__30811 = cljs.core.seq(arglist__30814);
return portfolio_companies__delegate(p__30811);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__30815){var vec__30817 = p__30815;var type_ids = cljs.core.nth.call(null,vec__30817,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__30815 = null;if (arguments.length > 0) {
  p__30815 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__30815);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__30818){
var p__30815 = cljs.core.seq(arglist__30818);
return portfolio_company_stats__delegate(p__30815);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__30819){var vec__30821 = p__30819;var type_ids = cljs.core.nth.call(null,vec__30821,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__30819 = null;if (arguments.length > 0) {
  p__30819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__30819);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__30822){
var p__30819 = cljs.core.seq(arglist__30822);
return portfolio_company_account_stats__delegate(p__30819);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__30823){var vec__30825 = p__30823;var type_ids = cljs.core.nth.call(null,vec__30825,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?boundarylinecolls.uk_constituencies"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__30823 = null;if (arguments.length > 0) {
  p__30823 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__30823);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__30826){
var p__30823 = cljs.core.seq(arglist__30826);
return portfolio_company_sites__delegate(p__30823);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__30827){var vec__30829 = p__30827;var type_ids = cljs.core.nth.call(null,vec__30829,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__30827 = null;if (arguments.length > 0) {
  p__30827 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__30827);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__30830){
var p__30827 = cljs.core.seq(arglist__30830);
return portfolio_company_locations__delegate(p__30827);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__30831){var vec__30833 = p__30831;var type_ids = cljs.core.nth.call(null,vec__30833,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__30831 = null;if (arguments.length > 0) {
  p__30831 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__30831);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__30834){
var p__30831 = cljs.core.seq(arglist__30834);
return portfolio_company_site_stats__delegate(p__30831);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__30835){var vec__30837 = p__30835;var type_ids = cljs.core.nth.call(null,vec__30837,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__30835 = null;if (arguments.length > 0) {
  p__30835 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__30835);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__30838){
var p__30835 = cljs.core.seq(arglist__30838);
return portfolio_company_site_account_timelines__delegate(p__30835);
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
var investor_comapnies__delegate = function (p__30839){var vec__30841 = p__30839;var type_ids = cljs.core.nth.call(null,vec__30841,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__30839 = null;if (arguments.length > 0) {
  p__30839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__30839);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__30842){
var p__30839 = cljs.core.seq(arglist__30842);
return investor_comapnies__delegate(p__30839);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
