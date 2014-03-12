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
var GET__delegate = function (url,p__42680){var map__42682 = p__42680;var map__42682__$1 = ((cljs.core.seq_QMARK_.call(null,map__42682))?cljs.core.apply.call(null,cljs.core.hash_map,map__42682):map__42682);var raw = cljs.core.get.call(null,map__42682__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__42680 = null;if (arguments.length > 1) {
  p__42680 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__42680);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__42683){
var url = cljs.core.first(arglist__42683);
var p__42680 = cljs.core.rest(arglist__42683);
return GET__delegate(url,p__42680);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_42816){var state_val_42817 = (state_42816[1]);if((state_val_42817 === 1))
{var state_42816__$1 = state_42816;var statearr_42818_42854 = state_42816__$1;(statearr_42818_42854[2] = null);
(statearr_42818_42854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 2))
{var state_42816__$1 = state_42816;if(true)
{var statearr_42819_42855 = state_42816__$1;(statearr_42819_42855[1] = 4);
} else
{var statearr_42820_42856 = state_42816__$1;(statearr_42820_42856[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 3))
{var inst_42814 = (state_42816[2]);var state_42816__$1 = state_42816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42816__$1,inst_42814);
} else
{if((state_val_42817 === 4))
{var state_42816__$1 = state_42816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42816__$1,7,ocomm);
} else
{if((state_val_42817 === 5))
{var state_42816__$1 = state_42816;var statearr_42821_42857 = state_42816__$1;(statearr_42821_42857[2] = null);
(statearr_42821_42857[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 6))
{var inst_42812 = (state_42816[2]);var state_42816__$1 = state_42816;var statearr_42822_42858 = state_42816__$1;(statearr_42822_42858[2] = inst_42812);
(statearr_42822_42858[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 7))
{var inst_42774 = (state_42816[7]);var inst_42773 = (state_42816[2]);var inst_42774__$1 = cljs.core.nth.call(null,inst_42773,0,null);var inst_42775 = cljs.core.nth.call(null,inst_42773,1,null);var inst_42776 = cljs.core.sequential_QMARK_.call(null,inst_42774__$1);var state_42816__$1 = (function (){var statearr_42823 = state_42816;(statearr_42823[7] = inst_42774__$1);
(statearr_42823[8] = inst_42775);
return statearr_42823;
})();if(inst_42776)
{var statearr_42824_42859 = state_42816__$1;(statearr_42824_42859[1] = 8);
} else
{var statearr_42825_42860 = state_42816__$1;(statearr_42825_42860[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 8))
{var inst_42774 = (state_42816[7]);var inst_42778 = inst_42774;var inst_42779 = cljs.core.PersistentVector.EMPTY;var state_42816__$1 = (function (){var statearr_42826 = state_42816;(statearr_42826[9] = inst_42778);
(statearr_42826[10] = inst_42779);
return statearr_42826;
})();var statearr_42827_42861 = state_42816__$1;(statearr_42827_42861[2] = null);
(statearr_42827_42861[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 9))
{var inst_42774 = (state_42816[7]);var state_42816__$1 = state_42816;if(cljs.core.truth_(inst_42774))
{var statearr_42828_42862 = state_42816__$1;(statearr_42828_42862[1] = 20);
} else
{var statearr_42829_42863 = state_42816__$1;(statearr_42829_42863[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 10))
{var inst_42775 = (state_42816[8]);var inst_42807 = (state_42816[2]);var inst_42808 = cljs.core.apply.call(null,handler,inst_42807,inst_42775);var state_42816__$1 = (function (){var statearr_42830 = state_42816;(statearr_42830[11] = inst_42808);
return statearr_42830;
})();var statearr_42831_42864 = state_42816__$1;(statearr_42831_42864[2] = null);
(statearr_42831_42864[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 11))
{var inst_42778 = (state_42816[9]);var inst_42781 = cljs.core.empty_QMARK_.call(null,inst_42778);var state_42816__$1 = state_42816;if(inst_42781)
{var statearr_42832_42865 = state_42816__$1;(statearr_42832_42865[1] = 13);
} else
{var statearr_42833_42866 = state_42816__$1;(statearr_42833_42866[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 12))
{var inst_42798 = (state_42816[2]);var state_42816__$1 = state_42816;var statearr_42834_42867 = state_42816__$1;(statearr_42834_42867[2] = inst_42798);
(statearr_42834_42867[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 13))
{var inst_42779 = (state_42816[10]);var state_42816__$1 = state_42816;var statearr_42835_42868 = state_42816__$1;(statearr_42835_42868[2] = inst_42779);
(statearr_42835_42868[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 14))
{var inst_42778 = (state_42816[9]);var inst_42784 = cljs.core.rest.call(null,inst_42778);var inst_42785 = cljs.core.first.call(null,inst_42778);var state_42816__$1 = (function (){var statearr_42836 = state_42816;(statearr_42836[12] = inst_42784);
return statearr_42836;
})();if(cljs.core.truth_(inst_42785))
{var statearr_42837_42869 = state_42816__$1;(statearr_42837_42869[1] = 16);
} else
{var statearr_42838_42870 = state_42816__$1;(statearr_42838_42870[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 15))
{var inst_42796 = (state_42816[2]);var state_42816__$1 = state_42816;var statearr_42839_42871 = state_42816__$1;(statearr_42839_42871[2] = inst_42796);
(statearr_42839_42871[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 16))
{var inst_42778 = (state_42816[9]);var inst_42787 = cljs.core.first.call(null,inst_42778);var state_42816__$1 = state_42816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42816__$1,19,inst_42787);
} else
{if((state_val_42817 === 17))
{var state_42816__$1 = state_42816;var statearr_42840_42872 = state_42816__$1;(statearr_42840_42872[2] = null);
(statearr_42840_42872[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 18))
{var inst_42784 = (state_42816[12]);var inst_42779 = (state_42816[10]);var inst_42792 = (state_42816[2]);var inst_42793 = cljs.core.conj.call(null,inst_42779,inst_42792);var inst_42778 = inst_42784;var inst_42779__$1 = inst_42793;var state_42816__$1 = (function (){var statearr_42841 = state_42816;(statearr_42841[9] = inst_42778);
(statearr_42841[10] = inst_42779__$1);
return statearr_42841;
})();var statearr_42842_42873 = state_42816__$1;(statearr_42842_42873[2] = null);
(statearr_42842_42873[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 19))
{var inst_42789 = (state_42816[2]);var state_42816__$1 = state_42816;var statearr_42843_42874 = state_42816__$1;(statearr_42843_42874[2] = inst_42789);
(statearr_42843_42874[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 20))
{var inst_42774 = (state_42816[7]);var state_42816__$1 = state_42816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42816__$1,23,inst_42774);
} else
{if((state_val_42817 === 21))
{var state_42816__$1 = state_42816;var statearr_42844_42875 = state_42816__$1;(statearr_42844_42875[2] = null);
(statearr_42844_42875[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 22))
{var inst_42805 = (state_42816[2]);var state_42816__$1 = state_42816;var statearr_42845_42876 = state_42816__$1;(statearr_42845_42876[2] = inst_42805);
(statearr_42845_42876[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42817 === 23))
{var inst_42802 = (state_42816[2]);var state_42816__$1 = state_42816;var statearr_42846_42877 = state_42816__$1;(statearr_42846_42877[2] = inst_42802);
(statearr_42846_42877[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_42850 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42850[0] = state_machine__5548__auto__);
(statearr_42850[1] = 1);
return statearr_42850;
});
var state_machine__5548__auto____1 = (function (state_42816){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_42816);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e42851){if((e42851 instanceof Object))
{var ex__5551__auto__ = e42851;var statearr_42852_42878 = state_42816;(statearr_42852_42878[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42816);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42851;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42879 = state_42816;
state_42816 = G__42879;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_42816){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_42816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_42853 = f__5563__auto__.call(null);(statearr_42853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_42853;
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
var G__42882__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__42881 = rseq;var rcomm = cljs.core.nth.call(null,vec__42881,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__42881,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__42882 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__42882__delegate.call(this,req_args);};
G__42882.cljs$lang$maxFixedArity = 0;
G__42882.cljs$lang$applyTo = (function (arglist__42883){
var req_args = cljs.core.seq(arglist__42883);
return G__42882__delegate(req_args);
});
G__42882.cljs$core$IFn$_invoke$arity$variadic = G__42882__delegate;
return G__42882;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_42901){var state_val_42902 = (state_42901[1]);if((state_val_42902 === 2))
{var inst_42898 = (state_42901[2]);var inst_42899 = console.log(inst_42898);var state_42901__$1 = state_42901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42901__$1,inst_42899);
} else
{if((state_val_42902 === 1))
{var state_42901__$1 = state_42901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42901__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_42906 = [null,null,null,null,null,null,null];(statearr_42906[0] = state_machine__5548__auto__);
(statearr_42906[1] = 1);
return statearr_42906;
});
var state_machine__5548__auto____1 = (function (state_42901){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_42901);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e42907){if((e42907 instanceof Object))
{var ex__5551__auto__ = e42907;var statearr_42908_42910 = state_42901;(statearr_42908_42910[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42901);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42911 = state_42901;
state_42901 = G__42911;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_42901){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_42901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_42909 = f__5563__auto__.call(null);(statearr_42909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_42909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__42912){
var f = cljs.core.first(arglist__42912);
var args = cljs.core.rest(arglist__42912);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__42915){var vec__42916 = p__42915;var k = cljs.core.nth.call(null,vec__42916,0,null);var v = cljs.core.nth.call(null,vec__42916,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__42917){
var id = cljs.core.first(arglist__42917);
arglist__42917 = cljs.core.next(arglist__42917);
var tolerance = cljs.core.first(arglist__42917);
var opts = cljs.core.rest(arglist__42917);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__42918){
var id = cljs.core.first(arglist__42918);
var opts = cljs.core.rest(arglist__42918);
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
var portfolio_company_sites__delegate = function (p__42919){var vec__42921 = p__42919;var type_ids = cljs.core.nth.call(null,vec__42921,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__42919 = null;if (arguments.length > 0) {
  p__42919 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__42919);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__42922){
var p__42919 = cljs.core.seq(arglist__42922);
return portfolio_company_sites__delegate(p__42919);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__42923){var vec__42925 = p__42923;var type_ids = cljs.core.nth.call(null,vec__42925,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__42923 = null;if (arguments.length > 0) {
  p__42923 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__42923);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__42926){
var p__42923 = cljs.core.seq(arglist__42926);
return portfolio_company_sites_by_company__delegate(p__42923);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__42927){var vec__42929 = p__42927;var type_ids = cljs.core.nth.call(null,vec__42929,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__42927 = null;if (arguments.length > 0) {
  p__42927 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__42927);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__42930){
var p__42927 = cljs.core.seq(arglist__42930);
return portfolio_company_locations__delegate(p__42927);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__42931){var vec__42933 = p__42931;var type_ids = cljs.core.nth.call(null,vec__42933,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__42931 = null;if (arguments.length > 0) {
  p__42931 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__42931);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__42934){
var p__42931 = cljs.core.seq(arglist__42934);
return portfolio_company_site_stats__delegate(p__42931);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__42935){var vec__42937 = p__42935;var type_ids = cljs.core.nth.call(null,vec__42937,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__42935 = null;if (arguments.length > 0) {
  p__42935 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__42935);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__42938){
var p__42935 = cljs.core.seq(arglist__42938);
return portfolio_company_site_account_timelines__delegate(p__42935);
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
var investment_account_timelines__delegate = function (p__42939){var vec__42941 = p__42939;var type_ids = cljs.core.nth.call(null,vec__42941,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__42939 = null;if (arguments.length > 0) {
  p__42939 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__42939);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__42942){
var p__42939 = cljs.core.seq(arglist__42942);
return investment_account_timelines__delegate(p__42939);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__42943){var vec__42945 = p__42943;var type_ids = cljs.core.nth.call(null,vec__42945,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__42943 = null;if (arguments.length > 0) {
  p__42943 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__42943);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__42946){
var p__42943 = cljs.core.seq(arglist__42946);
return investment_stats__delegate(p__42943);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__42947){var vec__42949 = p__42947;var type_ids = cljs.core.nth.call(null,vec__42949,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__42947 = null;if (arguments.length > 0) {
  p__42947 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__42947);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__42950){
var p__42947 = cljs.core.seq(arglist__42950);
return investment_aggs__delegate(p__42947);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__42951){var vec__42953 = p__42951;var type_ids = cljs.core.nth.call(null,vec__42953,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__42951 = null;if (arguments.length > 0) {
  p__42951 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__42951);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__42954){
var p__42951 = cljs.core.seq(arglist__42954);
return investments__delegate(p__42951);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
