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
var GET__delegate = function (url,p__30652){var map__30654 = p__30652;var map__30654__$1 = ((cljs.core.seq_QMARK_.call(null,map__30654))?cljs.core.apply.call(null,cljs.core.hash_map,map__30654):map__30654);var raw = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__30652 = null;if (arguments.length > 1) {
  p__30652 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__30652);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__30655){
var url = cljs.core.first(arglist__30655);
var p__30652 = cljs.core.rest(arglist__30655);
return GET__delegate(url,p__30652);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30788){var state_val_30789 = (state_30788[1]);if((state_val_30789 === 1))
{var state_30788__$1 = state_30788;var statearr_30790_30826 = state_30788__$1;(statearr_30790_30826[2] = null);
(statearr_30790_30826[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 2))
{var state_30788__$1 = state_30788;if(true)
{var statearr_30791_30827 = state_30788__$1;(statearr_30791_30827[1] = 4);
} else
{var statearr_30792_30828 = state_30788__$1;(statearr_30792_30828[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 3))
{var inst_30786 = (state_30788[2]);var state_30788__$1 = state_30788;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30788__$1,inst_30786);
} else
{if((state_val_30789 === 4))
{var state_30788__$1 = state_30788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30788__$1,7,ocomm);
} else
{if((state_val_30789 === 5))
{var state_30788__$1 = state_30788;var statearr_30793_30829 = state_30788__$1;(statearr_30793_30829[2] = null);
(statearr_30793_30829[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 6))
{var inst_30784 = (state_30788[2]);var state_30788__$1 = state_30788;var statearr_30794_30830 = state_30788__$1;(statearr_30794_30830[2] = inst_30784);
(statearr_30794_30830[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 7))
{var inst_30746 = (state_30788[7]);var inst_30745 = (state_30788[2]);var inst_30746__$1 = cljs.core.nth.call(null,inst_30745,0,null);var inst_30747 = cljs.core.nth.call(null,inst_30745,1,null);var inst_30748 = cljs.core.sequential_QMARK_.call(null,inst_30746__$1);var state_30788__$1 = (function (){var statearr_30795 = state_30788;(statearr_30795[7] = inst_30746__$1);
(statearr_30795[8] = inst_30747);
return statearr_30795;
})();if(inst_30748)
{var statearr_30796_30831 = state_30788__$1;(statearr_30796_30831[1] = 8);
} else
{var statearr_30797_30832 = state_30788__$1;(statearr_30797_30832[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 8))
{var inst_30746 = (state_30788[7]);var inst_30750 = inst_30746;var inst_30751 = cljs.core.PersistentVector.EMPTY;var state_30788__$1 = (function (){var statearr_30798 = state_30788;(statearr_30798[9] = inst_30750);
(statearr_30798[10] = inst_30751);
return statearr_30798;
})();var statearr_30799_30833 = state_30788__$1;(statearr_30799_30833[2] = null);
(statearr_30799_30833[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 9))
{var inst_30746 = (state_30788[7]);var state_30788__$1 = state_30788;if(cljs.core.truth_(inst_30746))
{var statearr_30800_30834 = state_30788__$1;(statearr_30800_30834[1] = 20);
} else
{var statearr_30801_30835 = state_30788__$1;(statearr_30801_30835[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 10))
{var inst_30747 = (state_30788[8]);var inst_30779 = (state_30788[2]);var inst_30780 = cljs.core.apply.call(null,handler,inst_30779,inst_30747);var state_30788__$1 = (function (){var statearr_30802 = state_30788;(statearr_30802[11] = inst_30780);
return statearr_30802;
})();var statearr_30803_30836 = state_30788__$1;(statearr_30803_30836[2] = null);
(statearr_30803_30836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 11))
{var inst_30750 = (state_30788[9]);var inst_30753 = cljs.core.empty_QMARK_.call(null,inst_30750);var state_30788__$1 = state_30788;if(inst_30753)
{var statearr_30804_30837 = state_30788__$1;(statearr_30804_30837[1] = 13);
} else
{var statearr_30805_30838 = state_30788__$1;(statearr_30805_30838[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 12))
{var inst_30770 = (state_30788[2]);var state_30788__$1 = state_30788;var statearr_30806_30839 = state_30788__$1;(statearr_30806_30839[2] = inst_30770);
(statearr_30806_30839[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 13))
{var inst_30751 = (state_30788[10]);var state_30788__$1 = state_30788;var statearr_30807_30840 = state_30788__$1;(statearr_30807_30840[2] = inst_30751);
(statearr_30807_30840[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 14))
{var inst_30750 = (state_30788[9]);var inst_30756 = cljs.core.rest.call(null,inst_30750);var inst_30757 = cljs.core.first.call(null,inst_30750);var state_30788__$1 = (function (){var statearr_30808 = state_30788;(statearr_30808[12] = inst_30756);
return statearr_30808;
})();if(cljs.core.truth_(inst_30757))
{var statearr_30809_30841 = state_30788__$1;(statearr_30809_30841[1] = 16);
} else
{var statearr_30810_30842 = state_30788__$1;(statearr_30810_30842[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 15))
{var inst_30768 = (state_30788[2]);var state_30788__$1 = state_30788;var statearr_30811_30843 = state_30788__$1;(statearr_30811_30843[2] = inst_30768);
(statearr_30811_30843[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 16))
{var inst_30750 = (state_30788[9]);var inst_30759 = cljs.core.first.call(null,inst_30750);var state_30788__$1 = state_30788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30788__$1,19,inst_30759);
} else
{if((state_val_30789 === 17))
{var state_30788__$1 = state_30788;var statearr_30812_30844 = state_30788__$1;(statearr_30812_30844[2] = null);
(statearr_30812_30844[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 18))
{var inst_30751 = (state_30788[10]);var inst_30756 = (state_30788[12]);var inst_30764 = (state_30788[2]);var inst_30765 = cljs.core.conj.call(null,inst_30751,inst_30764);var inst_30750 = inst_30756;var inst_30751__$1 = inst_30765;var state_30788__$1 = (function (){var statearr_30813 = state_30788;(statearr_30813[9] = inst_30750);
(statearr_30813[10] = inst_30751__$1);
return statearr_30813;
})();var statearr_30814_30845 = state_30788__$1;(statearr_30814_30845[2] = null);
(statearr_30814_30845[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 19))
{var inst_30761 = (state_30788[2]);var state_30788__$1 = state_30788;var statearr_30815_30846 = state_30788__$1;(statearr_30815_30846[2] = inst_30761);
(statearr_30815_30846[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 20))
{var inst_30746 = (state_30788[7]);var state_30788__$1 = state_30788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30788__$1,23,inst_30746);
} else
{if((state_val_30789 === 21))
{var state_30788__$1 = state_30788;var statearr_30816_30847 = state_30788__$1;(statearr_30816_30847[2] = null);
(statearr_30816_30847[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 22))
{var inst_30777 = (state_30788[2]);var state_30788__$1 = state_30788;var statearr_30817_30848 = state_30788__$1;(statearr_30817_30848[2] = inst_30777);
(statearr_30817_30848[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 23))
{var inst_30774 = (state_30788[2]);var state_30788__$1 = state_30788;var statearr_30818_30849 = state_30788__$1;(statearr_30818_30849[2] = inst_30774);
(statearr_30818_30849[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_30822 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30822[0] = state_machine__5507__auto__);
(statearr_30822[1] = 1);
return statearr_30822;
});
var state_machine__5507__auto____1 = (function (state_30788){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30788);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30823){if((e30823 instanceof Object))
{var ex__5510__auto__ = e30823;var statearr_30824_30850 = state_30788;(statearr_30824_30850[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30788);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30851 = state_30788;
state_30788 = G__30851;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30788){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30825 = f__5522__auto__.call(null);(statearr_30825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30825;
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
var G__30854__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__30853 = rseq;var rcomm = cljs.core.nth.call(null,vec__30853,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__30853,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__30854 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30854__delegate.call(this,req_args);};
G__30854.cljs$lang$maxFixedArity = 0;
G__30854.cljs$lang$applyTo = (function (arglist__30855){
var req_args = cljs.core.seq(arglist__30855);
return G__30854__delegate(req_args);
});
G__30854.cljs$core$IFn$_invoke$arity$variadic = G__30854__delegate;
return G__30854;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30873){var state_val_30874 = (state_30873[1]);if((state_val_30874 === 2))
{var inst_30870 = (state_30873[2]);var inst_30871 = console.log(inst_30870);var state_30873__$1 = state_30873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30873__$1,inst_30871);
} else
{if((state_val_30874 === 1))
{var state_30873__$1 = state_30873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30873__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30878 = [null,null,null,null,null,null,null];(statearr_30878[0] = state_machine__5507__auto__);
(statearr_30878[1] = 1);
return statearr_30878;
});
var state_machine__5507__auto____1 = (function (state_30873){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30873);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30879){if((e30879 instanceof Object))
{var ex__5510__auto__ = e30879;var statearr_30880_30882 = state_30873;(statearr_30880_30882[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30873);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30879;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30883 = state_30873;
state_30873 = G__30883;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30873){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30881 = f__5522__auto__.call(null);(statearr_30881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30881;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__30884){
var f = cljs.core.first(arglist__30884);
var args = cljs.core.rest(arglist__30884);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__30887){var vec__30888 = p__30887;var k = cljs.core.nth.call(null,vec__30888,0,null);var v = cljs.core.nth.call(null,vec__30888,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__30889){
var id = cljs.core.first(arglist__30889);
arglist__30889 = cljs.core.next(arglist__30889);
var tolerance = cljs.core.first(arglist__30889);
var opts = cljs.core.rest(arglist__30889);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__30890){
var id = cljs.core.first(arglist__30890);
var opts = cljs.core.rest(arglist__30890);
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
var constituencies__delegate = function (p__30891){var vec__30893 = p__30891;var type_ids = cljs.core.nth.call(null,vec__30893,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__30891 = null;if (arguments.length > 0) {
  p__30891 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__30891);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__30894){
var p__30891 = cljs.core.seq(arglist__30894);
return constituencies__delegate(p__30891);
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
var portfolio_companies__delegate = function (p__30895){var vec__30897 = p__30895;var type_ids = cljs.core.nth.call(null,vec__30897,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null));return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_companies = function (var_args){
var p__30895 = null;if (arguments.length > 0) {
  p__30895 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__30895);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__30898){
var p__30895 = cljs.core.seq(arglist__30898);
return portfolio_companies__delegate(p__30895);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__30899){var vec__30901 = p__30899;var type_ids = cljs.core.nth.call(null,vec__30901,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__30899 = null;if (arguments.length > 0) {
  p__30899 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__30899);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__30902){
var p__30899 = cljs.core.seq(arglist__30902);
return portfolio_company_stats__delegate(p__30899);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__30903){var vec__30905 = p__30903;var type_ids = cljs.core.nth.call(null,vec__30905,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__30903 = null;if (arguments.length > 0) {
  p__30903 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__30903);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__30906){
var p__30903 = cljs.core.seq(arglist__30906);
return portfolio_company_account_stats__delegate(p__30903);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__30907){var vec__30909 = p__30907;var type_ids = cljs.core.nth.call(null,vec__30909,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__30907 = null;if (arguments.length > 0) {
  p__30907 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__30907);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__30910){
var p__30907 = cljs.core.seq(arglist__30910);
return portfolio_company_sites__delegate(p__30907);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__30911){var vec__30913 = p__30911;var type_ids = cljs.core.nth.call(null,vec__30913,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__30911 = null;if (arguments.length > 0) {
  p__30911 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__30911);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__30914){
var p__30911 = cljs.core.seq(arglist__30914);
return portfolio_company_locations__delegate(p__30911);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__30915){var vec__30917 = p__30915;var type_ids = cljs.core.nth.call(null,vec__30917,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__30915 = null;if (arguments.length > 0) {
  p__30915 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__30915);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__30918){
var p__30915 = cljs.core.seq(arglist__30918);
return portfolio_company_site_stats__delegate(p__30915);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__30919){var vec__30921 = p__30919;var type_ids = cljs.core.nth.call(null,vec__30921,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__30919 = null;if (arguments.length > 0) {
  p__30919 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__30919);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__30922){
var p__30919 = cljs.core.seq(arglist__30922);
return portfolio_company_site_account_timelines__delegate(p__30919);
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
var investor_comapnies__delegate = function (p__30923){var vec__30925 = p__30923;var type_ids = cljs.core.nth.call(null,vec__30925,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__30923 = null;if (arguments.length > 0) {
  p__30923 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__30923);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__30926){
var p__30923 = cljs.core.seq(arglist__30926);
return investor_comapnies__delegate(p__30923);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
