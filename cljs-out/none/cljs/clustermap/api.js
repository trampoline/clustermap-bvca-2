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
var GET__delegate = function (url,p__20686){var map__20688 = p__20686;var map__20688__$1 = ((cljs.core.seq_QMARK_.call(null,map__20688))?cljs.core.apply.call(null,cljs.core.hash_map,map__20688):map__20688);var raw = cljs.core.get.call(null,map__20688__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__20686 = null;if (arguments.length > 1) {
  p__20686 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20686);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20689){
var url = cljs.core.first(arglist__20689);
var p__20686 = cljs.core.rest(arglist__20689);
return GET__delegate(url,p__20686);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_20822){var state_val_20823 = (state_20822[1]);if((state_val_20823 === 1))
{var state_20822__$1 = state_20822;var statearr_20824_20860 = state_20822__$1;(statearr_20824_20860[2] = null);
(statearr_20824_20860[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 2))
{var state_20822__$1 = state_20822;if(true)
{var statearr_20825_20861 = state_20822__$1;(statearr_20825_20861[1] = 4);
} else
{var statearr_20826_20862 = state_20822__$1;(statearr_20826_20862[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 3))
{var inst_20820 = (state_20822[2]);var state_20822__$1 = state_20822;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20822__$1,inst_20820);
} else
{if((state_val_20823 === 4))
{var state_20822__$1 = state_20822;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20822__$1,7,ocomm);
} else
{if((state_val_20823 === 5))
{var state_20822__$1 = state_20822;var statearr_20827_20863 = state_20822__$1;(statearr_20827_20863[2] = null);
(statearr_20827_20863[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 6))
{var inst_20818 = (state_20822[2]);var state_20822__$1 = state_20822;var statearr_20828_20864 = state_20822__$1;(statearr_20828_20864[2] = inst_20818);
(statearr_20828_20864[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 7))
{var inst_20780 = (state_20822[7]);var inst_20779 = (state_20822[2]);var inst_20780__$1 = cljs.core.nth.call(null,inst_20779,0,null);var inst_20781 = cljs.core.nth.call(null,inst_20779,1,null);var inst_20782 = cljs.core.sequential_QMARK_.call(null,inst_20780__$1);var state_20822__$1 = (function (){var statearr_20829 = state_20822;(statearr_20829[8] = inst_20781);
(statearr_20829[7] = inst_20780__$1);
return statearr_20829;
})();if(inst_20782)
{var statearr_20830_20865 = state_20822__$1;(statearr_20830_20865[1] = 8);
} else
{var statearr_20831_20866 = state_20822__$1;(statearr_20831_20866[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 8))
{var inst_20780 = (state_20822[7]);var inst_20784 = inst_20780;var inst_20785 = cljs.core.PersistentVector.EMPTY;var state_20822__$1 = (function (){var statearr_20832 = state_20822;(statearr_20832[9] = inst_20784);
(statearr_20832[10] = inst_20785);
return statearr_20832;
})();var statearr_20833_20867 = state_20822__$1;(statearr_20833_20867[2] = null);
(statearr_20833_20867[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 9))
{var inst_20780 = (state_20822[7]);var state_20822__$1 = state_20822;if(cljs.core.truth_(inst_20780))
{var statearr_20834_20868 = state_20822__$1;(statearr_20834_20868[1] = 20);
} else
{var statearr_20835_20869 = state_20822__$1;(statearr_20835_20869[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 10))
{var inst_20781 = (state_20822[8]);var inst_20813 = (state_20822[2]);var inst_20814 = cljs.core.apply.call(null,handler,inst_20813,inst_20781);var state_20822__$1 = (function (){var statearr_20836 = state_20822;(statearr_20836[11] = inst_20814);
return statearr_20836;
})();var statearr_20837_20870 = state_20822__$1;(statearr_20837_20870[2] = null);
(statearr_20837_20870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 11))
{var inst_20784 = (state_20822[9]);var inst_20787 = cljs.core.empty_QMARK_.call(null,inst_20784);var state_20822__$1 = state_20822;if(inst_20787)
{var statearr_20838_20871 = state_20822__$1;(statearr_20838_20871[1] = 13);
} else
{var statearr_20839_20872 = state_20822__$1;(statearr_20839_20872[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 12))
{var inst_20804 = (state_20822[2]);var state_20822__$1 = state_20822;var statearr_20840_20873 = state_20822__$1;(statearr_20840_20873[2] = inst_20804);
(statearr_20840_20873[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 13))
{var inst_20785 = (state_20822[10]);var state_20822__$1 = state_20822;var statearr_20841_20874 = state_20822__$1;(statearr_20841_20874[2] = inst_20785);
(statearr_20841_20874[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 14))
{var inst_20784 = (state_20822[9]);var inst_20790 = cljs.core.rest.call(null,inst_20784);var inst_20791 = cljs.core.first.call(null,inst_20784);var state_20822__$1 = (function (){var statearr_20842 = state_20822;(statearr_20842[12] = inst_20790);
return statearr_20842;
})();if(cljs.core.truth_(inst_20791))
{var statearr_20843_20875 = state_20822__$1;(statearr_20843_20875[1] = 16);
} else
{var statearr_20844_20876 = state_20822__$1;(statearr_20844_20876[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 15))
{var inst_20802 = (state_20822[2]);var state_20822__$1 = state_20822;var statearr_20845_20877 = state_20822__$1;(statearr_20845_20877[2] = inst_20802);
(statearr_20845_20877[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 16))
{var inst_20784 = (state_20822[9]);var inst_20793 = cljs.core.first.call(null,inst_20784);var state_20822__$1 = state_20822;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20822__$1,19,inst_20793);
} else
{if((state_val_20823 === 17))
{var state_20822__$1 = state_20822;var statearr_20846_20878 = state_20822__$1;(statearr_20846_20878[2] = null);
(statearr_20846_20878[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 18))
{var inst_20785 = (state_20822[10]);var inst_20790 = (state_20822[12]);var inst_20798 = (state_20822[2]);var inst_20799 = cljs.core.conj.call(null,inst_20785,inst_20798);var inst_20784 = inst_20790;var inst_20785__$1 = inst_20799;var state_20822__$1 = (function (){var statearr_20847 = state_20822;(statearr_20847[9] = inst_20784);
(statearr_20847[10] = inst_20785__$1);
return statearr_20847;
})();var statearr_20848_20879 = state_20822__$1;(statearr_20848_20879[2] = null);
(statearr_20848_20879[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 19))
{var inst_20795 = (state_20822[2]);var state_20822__$1 = state_20822;var statearr_20849_20880 = state_20822__$1;(statearr_20849_20880[2] = inst_20795);
(statearr_20849_20880[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 20))
{var inst_20780 = (state_20822[7]);var state_20822__$1 = state_20822;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20822__$1,23,inst_20780);
} else
{if((state_val_20823 === 21))
{var state_20822__$1 = state_20822;var statearr_20850_20881 = state_20822__$1;(statearr_20850_20881[2] = null);
(statearr_20850_20881[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 22))
{var inst_20811 = (state_20822[2]);var state_20822__$1 = state_20822;var statearr_20851_20882 = state_20822__$1;(statearr_20851_20882[2] = inst_20811);
(statearr_20851_20882[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20823 === 23))
{var inst_20808 = (state_20822[2]);var state_20822__$1 = state_20822;var statearr_20852_20883 = state_20822__$1;(statearr_20852_20883[2] = inst_20808);
(statearr_20852_20883[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_20856 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20856[0] = state_machine__5548__auto__);
(statearr_20856[1] = 1);
return statearr_20856;
});
var state_machine__5548__auto____1 = (function (state_20822){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_20822);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e20857){if((e20857 instanceof Object))
{var ex__5551__auto__ = e20857;var statearr_20858_20884 = state_20822;(statearr_20858_20884[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20822);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20857;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20885 = state_20822;
state_20822 = G__20885;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_20822){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_20822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_20859 = f__5563__auto__.call(null);(statearr_20859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_20859;
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
var G__20888__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20887 = rseq;var rcomm = cljs.core.nth.call(null,vec__20887,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__20887,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20888 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20888__delegate.call(this,req_args);};
G__20888.cljs$lang$maxFixedArity = 0;
G__20888.cljs$lang$applyTo = (function (arglist__20889){
var req_args = cljs.core.seq(arglist__20889);
return G__20888__delegate(req_args);
});
G__20888.cljs$core$IFn$_invoke$arity$variadic = G__20888__delegate;
return G__20888;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_20907){var state_val_20908 = (state_20907[1]);if((state_val_20908 === 2))
{var inst_20904 = (state_20907[2]);var inst_20905 = console.log(inst_20904);var state_20907__$1 = state_20907;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20907__$1,inst_20905);
} else
{if((state_val_20908 === 1))
{var state_20907__$1 = state_20907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20907__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_20912 = [null,null,null,null,null,null,null];(statearr_20912[0] = state_machine__5548__auto__);
(statearr_20912[1] = 1);
return statearr_20912;
});
var state_machine__5548__auto____1 = (function (state_20907){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_20907);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e20913){if((e20913 instanceof Object))
{var ex__5551__auto__ = e20913;var statearr_20914_20916 = state_20907;(statearr_20914_20916[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20907);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20917 = state_20907;
state_20907 = G__20917;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_20907){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_20907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_20915 = f__5563__auto__.call(null);(statearr_20915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_20915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20918){
var f = cljs.core.first(arglist__20918);
var args = cljs.core.rest(arglist__20918);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__20921){var vec__20922 = p__20921;var k = cljs.core.nth.call(null,vec__20922,0,null);var v = cljs.core.nth.call(null,vec__20922,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20923){
var id = cljs.core.first(arglist__20923);
arglist__20923 = cljs.core.next(arglist__20923);
var tolerance = cljs.core.first(arglist__20923);
var opts = cljs.core.rest(arglist__20923);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20924){
var id = cljs.core.first(arglist__20924);
var opts = cljs.core.rest(arglist__20924);
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
var portfolio_company_sites__delegate = function (p__20925){var vec__20927 = p__20925;var type_ids = cljs.core.nth.call(null,vec__20927,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20925 = null;if (arguments.length > 0) {
  p__20925 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20925);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20928){
var p__20925 = cljs.core.seq(arglist__20928);
return portfolio_company_sites__delegate(p__20925);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__20929){var vec__20931 = p__20929;var type_ids = cljs.core.nth.call(null,vec__20931,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__20929 = null;if (arguments.length > 0) {
  p__20929 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__20929);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__20932){
var p__20929 = cljs.core.seq(arglist__20932);
return portfolio_company_sites_by_company__delegate(p__20929);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20933){var vec__20935 = p__20933;var type_ids = cljs.core.nth.call(null,vec__20935,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20933 = null;if (arguments.length > 0) {
  p__20933 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20933);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20936){
var p__20933 = cljs.core.seq(arglist__20936);
return portfolio_company_locations__delegate(p__20933);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20937){var vec__20939 = p__20937;var type_ids = cljs.core.nth.call(null,vec__20939,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20937 = null;if (arguments.length > 0) {
  p__20937 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20937);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20940){
var p__20937 = cljs.core.seq(arglist__20940);
return portfolio_company_site_stats__delegate(p__20937);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20941){var vec__20943 = p__20941;var type_ids = cljs.core.nth.call(null,vec__20943,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20941 = null;if (arguments.length > 0) {
  p__20941 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20941);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20944){
var p__20941 = cljs.core.seq(arglist__20944);
return portfolio_company_site_account_timelines__delegate(p__20941);
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
var investment_account_timelines__delegate = function (p__20945){var vec__20947 = p__20945;var type_ids = cljs.core.nth.call(null,vec__20947,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__20945 = null;if (arguments.length > 0) {
  p__20945 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__20945);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__20948){
var p__20945 = cljs.core.seq(arglist__20948);
return investment_account_timelines__delegate(p__20945);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__20949){var vec__20951 = p__20949;var type_ids = cljs.core.nth.call(null,vec__20951,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__20949 = null;if (arguments.length > 0) {
  p__20949 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__20949);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__20952){
var p__20949 = cljs.core.seq(arglist__20952);
return investment_stats__delegate(p__20949);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__20953){var vec__20955 = p__20953;var type_ids = cljs.core.nth.call(null,vec__20955,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__20953 = null;if (arguments.length > 0) {
  p__20953 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__20953);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__20956){
var p__20953 = cljs.core.seq(arglist__20956);
return investment_aggs__delegate(p__20953);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__20957){var vec__20959 = p__20957;var type_ids = cljs.core.nth.call(null,vec__20959,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__20957 = null;if (arguments.length > 0) {
  p__20957 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__20957);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__20960){
var p__20957 = cljs.core.seq(arglist__20960);
return investments__delegate(p__20957);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map