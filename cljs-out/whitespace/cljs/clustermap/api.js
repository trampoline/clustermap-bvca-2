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
var GET__delegate = function (url,p__42692){var map__42694 = p__42692;var map__42694__$1 = ((cljs.core.seq_QMARK_.call(null,map__42694))?cljs.core.apply.call(null,cljs.core.hash_map,map__42694):map__42694);var raw = cljs.core.get.call(null,map__42694__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__42692 = null;if (arguments.length > 1) {
  p__42692 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__42692);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__42695){
var url = cljs.core.first(arglist__42695);
var p__42692 = cljs.core.rest(arglist__42695);
return GET__delegate(url,p__42692);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_42828){var state_val_42829 = (state_42828[1]);if((state_val_42829 === 1))
{var state_42828__$1 = state_42828;var statearr_42830_42866 = state_42828__$1;(statearr_42830_42866[2] = null);
(statearr_42830_42866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 2))
{var state_42828__$1 = state_42828;if(true)
{var statearr_42831_42867 = state_42828__$1;(statearr_42831_42867[1] = 4);
} else
{var statearr_42832_42868 = state_42828__$1;(statearr_42832_42868[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 3))
{var inst_42826 = (state_42828[2]);var state_42828__$1 = state_42828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42828__$1,inst_42826);
} else
{if((state_val_42829 === 4))
{var state_42828__$1 = state_42828;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42828__$1,7,ocomm);
} else
{if((state_val_42829 === 5))
{var state_42828__$1 = state_42828;var statearr_42833_42869 = state_42828__$1;(statearr_42833_42869[2] = null);
(statearr_42833_42869[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 6))
{var inst_42824 = (state_42828[2]);var state_42828__$1 = state_42828;var statearr_42834_42870 = state_42828__$1;(statearr_42834_42870[2] = inst_42824);
(statearr_42834_42870[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 7))
{var inst_42786 = (state_42828[7]);var inst_42785 = (state_42828[2]);var inst_42786__$1 = cljs.core.nth.call(null,inst_42785,0,null);var inst_42787 = cljs.core.nth.call(null,inst_42785,1,null);var inst_42788 = cljs.core.sequential_QMARK_.call(null,inst_42786__$1);var state_42828__$1 = (function (){var statearr_42835 = state_42828;(statearr_42835[7] = inst_42786__$1);
(statearr_42835[8] = inst_42787);
return statearr_42835;
})();if(inst_42788)
{var statearr_42836_42871 = state_42828__$1;(statearr_42836_42871[1] = 8);
} else
{var statearr_42837_42872 = state_42828__$1;(statearr_42837_42872[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 8))
{var inst_42786 = (state_42828[7]);var inst_42790 = inst_42786;var inst_42791 = cljs.core.PersistentVector.EMPTY;var state_42828__$1 = (function (){var statearr_42838 = state_42828;(statearr_42838[9] = inst_42791);
(statearr_42838[10] = inst_42790);
return statearr_42838;
})();var statearr_42839_42873 = state_42828__$1;(statearr_42839_42873[2] = null);
(statearr_42839_42873[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 9))
{var inst_42786 = (state_42828[7]);var state_42828__$1 = state_42828;if(cljs.core.truth_(inst_42786))
{var statearr_42840_42874 = state_42828__$1;(statearr_42840_42874[1] = 20);
} else
{var statearr_42841_42875 = state_42828__$1;(statearr_42841_42875[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 10))
{var inst_42787 = (state_42828[8]);var inst_42819 = (state_42828[2]);var inst_42820 = cljs.core.apply.call(null,handler,inst_42819,inst_42787);var state_42828__$1 = (function (){var statearr_42842 = state_42828;(statearr_42842[11] = inst_42820);
return statearr_42842;
})();var statearr_42843_42876 = state_42828__$1;(statearr_42843_42876[2] = null);
(statearr_42843_42876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 11))
{var inst_42790 = (state_42828[10]);var inst_42793 = cljs.core.empty_QMARK_.call(null,inst_42790);var state_42828__$1 = state_42828;if(inst_42793)
{var statearr_42844_42877 = state_42828__$1;(statearr_42844_42877[1] = 13);
} else
{var statearr_42845_42878 = state_42828__$1;(statearr_42845_42878[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 12))
{var inst_42810 = (state_42828[2]);var state_42828__$1 = state_42828;var statearr_42846_42879 = state_42828__$1;(statearr_42846_42879[2] = inst_42810);
(statearr_42846_42879[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 13))
{var inst_42791 = (state_42828[9]);var state_42828__$1 = state_42828;var statearr_42847_42880 = state_42828__$1;(statearr_42847_42880[2] = inst_42791);
(statearr_42847_42880[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 14))
{var inst_42790 = (state_42828[10]);var inst_42796 = cljs.core.rest.call(null,inst_42790);var inst_42797 = cljs.core.first.call(null,inst_42790);var state_42828__$1 = (function (){var statearr_42848 = state_42828;(statearr_42848[12] = inst_42796);
return statearr_42848;
})();if(cljs.core.truth_(inst_42797))
{var statearr_42849_42881 = state_42828__$1;(statearr_42849_42881[1] = 16);
} else
{var statearr_42850_42882 = state_42828__$1;(statearr_42850_42882[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 15))
{var inst_42808 = (state_42828[2]);var state_42828__$1 = state_42828;var statearr_42851_42883 = state_42828__$1;(statearr_42851_42883[2] = inst_42808);
(statearr_42851_42883[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 16))
{var inst_42790 = (state_42828[10]);var inst_42799 = cljs.core.first.call(null,inst_42790);var state_42828__$1 = state_42828;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42828__$1,19,inst_42799);
} else
{if((state_val_42829 === 17))
{var state_42828__$1 = state_42828;var statearr_42852_42884 = state_42828__$1;(statearr_42852_42884[2] = null);
(statearr_42852_42884[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 18))
{var inst_42791 = (state_42828[9]);var inst_42796 = (state_42828[12]);var inst_42804 = (state_42828[2]);var inst_42805 = cljs.core.conj.call(null,inst_42791,inst_42804);var inst_42790 = inst_42796;var inst_42791__$1 = inst_42805;var state_42828__$1 = (function (){var statearr_42853 = state_42828;(statearr_42853[9] = inst_42791__$1);
(statearr_42853[10] = inst_42790);
return statearr_42853;
})();var statearr_42854_42885 = state_42828__$1;(statearr_42854_42885[2] = null);
(statearr_42854_42885[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 19))
{var inst_42801 = (state_42828[2]);var state_42828__$1 = state_42828;var statearr_42855_42886 = state_42828__$1;(statearr_42855_42886[2] = inst_42801);
(statearr_42855_42886[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 20))
{var inst_42786 = (state_42828[7]);var state_42828__$1 = state_42828;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42828__$1,23,inst_42786);
} else
{if((state_val_42829 === 21))
{var state_42828__$1 = state_42828;var statearr_42856_42887 = state_42828__$1;(statearr_42856_42887[2] = null);
(statearr_42856_42887[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 22))
{var inst_42817 = (state_42828[2]);var state_42828__$1 = state_42828;var statearr_42857_42888 = state_42828__$1;(statearr_42857_42888[2] = inst_42817);
(statearr_42857_42888[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42829 === 23))
{var inst_42814 = (state_42828[2]);var state_42828__$1 = state_42828;var statearr_42858_42889 = state_42828__$1;(statearr_42858_42889[2] = inst_42814);
(statearr_42858_42889[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_42862 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42862[0] = state_machine__5548__auto__);
(statearr_42862[1] = 1);
return statearr_42862;
});
var state_machine__5548__auto____1 = (function (state_42828){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_42828);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e42863){if((e42863 instanceof Object))
{var ex__5551__auto__ = e42863;var statearr_42864_42890 = state_42828;(statearr_42864_42890[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42828);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42863;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42891 = state_42828;
state_42828 = G__42891;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_42828){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_42828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_42865 = f__5563__auto__.call(null);(statearr_42865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_42865;
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
var G__42894__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__42893 = rseq;var rcomm = cljs.core.nth.call(null,vec__42893,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__42893,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__42894 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__42894__delegate.call(this,req_args);};
G__42894.cljs$lang$maxFixedArity = 0;
G__42894.cljs$lang$applyTo = (function (arglist__42895){
var req_args = cljs.core.seq(arglist__42895);
return G__42894__delegate(req_args);
});
G__42894.cljs$core$IFn$_invoke$arity$variadic = G__42894__delegate;
return G__42894;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_42913){var state_val_42914 = (state_42913[1]);if((state_val_42914 === 2))
{var inst_42910 = (state_42913[2]);var inst_42911 = console.log(inst_42910);var state_42913__$1 = state_42913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42913__$1,inst_42911);
} else
{if((state_val_42914 === 1))
{var state_42913__$1 = state_42913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42913__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_42918 = [null,null,null,null,null,null,null];(statearr_42918[0] = state_machine__5548__auto__);
(statearr_42918[1] = 1);
return statearr_42918;
});
var state_machine__5548__auto____1 = (function (state_42913){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_42913);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e42919){if((e42919 instanceof Object))
{var ex__5551__auto__ = e42919;var statearr_42920_42922 = state_42913;(statearr_42920_42922[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42913);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42919;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42923 = state_42913;
state_42913 = G__42923;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_42913){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_42913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_42921 = f__5563__auto__.call(null);(statearr_42921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_42921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__42924){
var f = cljs.core.first(arglist__42924);
var args = cljs.core.rest(arglist__42924);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__42927){var vec__42928 = p__42927;var k = cljs.core.nth.call(null,vec__42928,0,null);var v = cljs.core.nth.call(null,vec__42928,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__42929){
var id = cljs.core.first(arglist__42929);
arglist__42929 = cljs.core.next(arglist__42929);
var tolerance = cljs.core.first(arglist__42929);
var opts = cljs.core.rest(arglist__42929);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__42930){
var id = cljs.core.first(arglist__42930);
var opts = cljs.core.rest(arglist__42930);
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
var portfolio_company_sites__delegate = function (p__42931){var vec__42933 = p__42931;var type_ids = cljs.core.nth.call(null,vec__42933,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__42931 = null;if (arguments.length > 0) {
  p__42931 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__42931);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__42934){
var p__42931 = cljs.core.seq(arglist__42934);
return portfolio_company_sites__delegate(p__42931);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__42935){var vec__42937 = p__42935;var type_ids = cljs.core.nth.call(null,vec__42937,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__42935 = null;if (arguments.length > 0) {
  p__42935 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__42935);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__42938){
var p__42935 = cljs.core.seq(arglist__42938);
return portfolio_company_sites_by_company__delegate(p__42935);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__42939){var vec__42941 = p__42939;var type_ids = cljs.core.nth.call(null,vec__42941,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__42939 = null;if (arguments.length > 0) {
  p__42939 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__42939);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__42942){
var p__42939 = cljs.core.seq(arglist__42942);
return portfolio_company_locations__delegate(p__42939);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__42943){var vec__42945 = p__42943;var type_ids = cljs.core.nth.call(null,vec__42945,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__42943 = null;if (arguments.length > 0) {
  p__42943 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__42943);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__42946){
var p__42943 = cljs.core.seq(arglist__42946);
return portfolio_company_site_stats__delegate(p__42943);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__42947){var vec__42949 = p__42947;var type_ids = cljs.core.nth.call(null,vec__42949,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__42947 = null;if (arguments.length > 0) {
  p__42947 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__42947);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__42950){
var p__42947 = cljs.core.seq(arglist__42950);
return portfolio_company_site_account_timelines__delegate(p__42947);
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
var investment_account_timelines__delegate = function (p__42951){var vec__42953 = p__42951;var type_ids = cljs.core.nth.call(null,vec__42953,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__42951 = null;if (arguments.length > 0) {
  p__42951 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__42951);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__42954){
var p__42951 = cljs.core.seq(arglist__42954);
return investment_account_timelines__delegate(p__42951);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__42955){var vec__42957 = p__42955;var type_ids = cljs.core.nth.call(null,vec__42957,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__42955 = null;if (arguments.length > 0) {
  p__42955 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__42955);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__42958){
var p__42955 = cljs.core.seq(arglist__42958);
return investment_stats__delegate(p__42955);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__42959){var vec__42961 = p__42959;var type_ids = cljs.core.nth.call(null,vec__42961,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__42959 = null;if (arguments.length > 0) {
  p__42959 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__42959);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__42962){
var p__42959 = cljs.core.seq(arglist__42962);
return investment_aggs__delegate(p__42959);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__42963){var vec__42965 = p__42963;var type_ids = cljs.core.nth.call(null,vec__42965,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__42963 = null;if (arguments.length > 0) {
  p__42963 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__42963);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__42966){
var p__42963 = cljs.core.seq(arglist__42966);
return investments__delegate(p__42963);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
