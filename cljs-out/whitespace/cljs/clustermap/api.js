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
var GET__delegate = function (url,p__42644){var map__42646 = p__42644;var map__42646__$1 = ((cljs.core.seq_QMARK_.call(null,map__42646))?cljs.core.apply.call(null,cljs.core.hash_map,map__42646):map__42646);var raw = cljs.core.get.call(null,map__42646__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__42644 = null;if (arguments.length > 1) {
  p__42644 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__42644);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__42647){
var url = cljs.core.first(arglist__42647);
var p__42644 = cljs.core.rest(arglist__42647);
return GET__delegate(url,p__42644);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_42780){var state_val_42781 = (state_42780[1]);if((state_val_42781 === 1))
{var state_42780__$1 = state_42780;var statearr_42782_42818 = state_42780__$1;(statearr_42782_42818[2] = null);
(statearr_42782_42818[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 2))
{var state_42780__$1 = state_42780;if(true)
{var statearr_42783_42819 = state_42780__$1;(statearr_42783_42819[1] = 4);
} else
{var statearr_42784_42820 = state_42780__$1;(statearr_42784_42820[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 3))
{var inst_42778 = (state_42780[2]);var state_42780__$1 = state_42780;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42780__$1,inst_42778);
} else
{if((state_val_42781 === 4))
{var state_42780__$1 = state_42780;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42780__$1,7,ocomm);
} else
{if((state_val_42781 === 5))
{var state_42780__$1 = state_42780;var statearr_42785_42821 = state_42780__$1;(statearr_42785_42821[2] = null);
(statearr_42785_42821[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 6))
{var inst_42776 = (state_42780[2]);var state_42780__$1 = state_42780;var statearr_42786_42822 = state_42780__$1;(statearr_42786_42822[2] = inst_42776);
(statearr_42786_42822[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 7))
{var inst_42738 = (state_42780[7]);var inst_42737 = (state_42780[2]);var inst_42738__$1 = cljs.core.nth.call(null,inst_42737,0,null);var inst_42739 = cljs.core.nth.call(null,inst_42737,1,null);var inst_42740 = cljs.core.sequential_QMARK_.call(null,inst_42738__$1);var state_42780__$1 = (function (){var statearr_42787 = state_42780;(statearr_42787[8] = inst_42739);
(statearr_42787[7] = inst_42738__$1);
return statearr_42787;
})();if(inst_42740)
{var statearr_42788_42823 = state_42780__$1;(statearr_42788_42823[1] = 8);
} else
{var statearr_42789_42824 = state_42780__$1;(statearr_42789_42824[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 8))
{var inst_42738 = (state_42780[7]);var inst_42742 = inst_42738;var inst_42743 = cljs.core.PersistentVector.EMPTY;var state_42780__$1 = (function (){var statearr_42790 = state_42780;(statearr_42790[9] = inst_42742);
(statearr_42790[10] = inst_42743);
return statearr_42790;
})();var statearr_42791_42825 = state_42780__$1;(statearr_42791_42825[2] = null);
(statearr_42791_42825[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 9))
{var inst_42738 = (state_42780[7]);var state_42780__$1 = state_42780;if(cljs.core.truth_(inst_42738))
{var statearr_42792_42826 = state_42780__$1;(statearr_42792_42826[1] = 20);
} else
{var statearr_42793_42827 = state_42780__$1;(statearr_42793_42827[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 10))
{var inst_42739 = (state_42780[8]);var inst_42771 = (state_42780[2]);var inst_42772 = cljs.core.apply.call(null,handler,inst_42771,inst_42739);var state_42780__$1 = (function (){var statearr_42794 = state_42780;(statearr_42794[11] = inst_42772);
return statearr_42794;
})();var statearr_42795_42828 = state_42780__$1;(statearr_42795_42828[2] = null);
(statearr_42795_42828[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 11))
{var inst_42742 = (state_42780[9]);var inst_42745 = cljs.core.empty_QMARK_.call(null,inst_42742);var state_42780__$1 = state_42780;if(inst_42745)
{var statearr_42796_42829 = state_42780__$1;(statearr_42796_42829[1] = 13);
} else
{var statearr_42797_42830 = state_42780__$1;(statearr_42797_42830[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 12))
{var inst_42762 = (state_42780[2]);var state_42780__$1 = state_42780;var statearr_42798_42831 = state_42780__$1;(statearr_42798_42831[2] = inst_42762);
(statearr_42798_42831[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 13))
{var inst_42743 = (state_42780[10]);var state_42780__$1 = state_42780;var statearr_42799_42832 = state_42780__$1;(statearr_42799_42832[2] = inst_42743);
(statearr_42799_42832[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 14))
{var inst_42742 = (state_42780[9]);var inst_42748 = cljs.core.rest.call(null,inst_42742);var inst_42749 = cljs.core.first.call(null,inst_42742);var state_42780__$1 = (function (){var statearr_42800 = state_42780;(statearr_42800[12] = inst_42748);
return statearr_42800;
})();if(cljs.core.truth_(inst_42749))
{var statearr_42801_42833 = state_42780__$1;(statearr_42801_42833[1] = 16);
} else
{var statearr_42802_42834 = state_42780__$1;(statearr_42802_42834[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 15))
{var inst_42760 = (state_42780[2]);var state_42780__$1 = state_42780;var statearr_42803_42835 = state_42780__$1;(statearr_42803_42835[2] = inst_42760);
(statearr_42803_42835[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 16))
{var inst_42742 = (state_42780[9]);var inst_42751 = cljs.core.first.call(null,inst_42742);var state_42780__$1 = state_42780;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42780__$1,19,inst_42751);
} else
{if((state_val_42781 === 17))
{var state_42780__$1 = state_42780;var statearr_42804_42836 = state_42780__$1;(statearr_42804_42836[2] = null);
(statearr_42804_42836[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 18))
{var inst_42743 = (state_42780[10]);var inst_42748 = (state_42780[12]);var inst_42756 = (state_42780[2]);var inst_42757 = cljs.core.conj.call(null,inst_42743,inst_42756);var inst_42742 = inst_42748;var inst_42743__$1 = inst_42757;var state_42780__$1 = (function (){var statearr_42805 = state_42780;(statearr_42805[9] = inst_42742);
(statearr_42805[10] = inst_42743__$1);
return statearr_42805;
})();var statearr_42806_42837 = state_42780__$1;(statearr_42806_42837[2] = null);
(statearr_42806_42837[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 19))
{var inst_42753 = (state_42780[2]);var state_42780__$1 = state_42780;var statearr_42807_42838 = state_42780__$1;(statearr_42807_42838[2] = inst_42753);
(statearr_42807_42838[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 20))
{var inst_42738 = (state_42780[7]);var state_42780__$1 = state_42780;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42780__$1,23,inst_42738);
} else
{if((state_val_42781 === 21))
{var state_42780__$1 = state_42780;var statearr_42808_42839 = state_42780__$1;(statearr_42808_42839[2] = null);
(statearr_42808_42839[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 22))
{var inst_42769 = (state_42780[2]);var state_42780__$1 = state_42780;var statearr_42809_42840 = state_42780__$1;(statearr_42809_42840[2] = inst_42769);
(statearr_42809_42840[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42781 === 23))
{var inst_42766 = (state_42780[2]);var state_42780__$1 = state_42780;var statearr_42810_42841 = state_42780__$1;(statearr_42810_42841[2] = inst_42766);
(statearr_42810_42841[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_42814 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42814[0] = state_machine__5548__auto__);
(statearr_42814[1] = 1);
return statearr_42814;
});
var state_machine__5548__auto____1 = (function (state_42780){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_42780);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e42815){if((e42815 instanceof Object))
{var ex__5551__auto__ = e42815;var statearr_42816_42842 = state_42780;(statearr_42816_42842[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42780);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42815;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42843 = state_42780;
state_42780 = G__42843;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_42780){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_42780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_42817 = f__5563__auto__.call(null);(statearr_42817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_42817;
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
var G__42846__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__42845 = rseq;var rcomm = cljs.core.nth.call(null,vec__42845,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__42845,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__42846 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__42846__delegate.call(this,req_args);};
G__42846.cljs$lang$maxFixedArity = 0;
G__42846.cljs$lang$applyTo = (function (arglist__42847){
var req_args = cljs.core.seq(arglist__42847);
return G__42846__delegate(req_args);
});
G__42846.cljs$core$IFn$_invoke$arity$variadic = G__42846__delegate;
return G__42846;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_42865){var state_val_42866 = (state_42865[1]);if((state_val_42866 === 2))
{var inst_42862 = (state_42865[2]);var inst_42863 = console.log(inst_42862);var state_42865__$1 = state_42865;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42865__$1,inst_42863);
} else
{if((state_val_42866 === 1))
{var state_42865__$1 = state_42865;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42865__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_42870 = [null,null,null,null,null,null,null];(statearr_42870[0] = state_machine__5548__auto__);
(statearr_42870[1] = 1);
return statearr_42870;
});
var state_machine__5548__auto____1 = (function (state_42865){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_42865);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e42871){if((e42871 instanceof Object))
{var ex__5551__auto__ = e42871;var statearr_42872_42874 = state_42865;(statearr_42872_42874[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42865);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42871;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42875 = state_42865;
state_42865 = G__42875;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_42865){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_42865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_42873 = f__5563__auto__.call(null);(statearr_42873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_42873;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__42876){
var f = cljs.core.first(arglist__42876);
var args = cljs.core.rest(arglist__42876);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__42879){var vec__42880 = p__42879;var k = cljs.core.nth.call(null,vec__42880,0,null);var v = cljs.core.nth.call(null,vec__42880,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__42881){
var id = cljs.core.first(arglist__42881);
arglist__42881 = cljs.core.next(arglist__42881);
var tolerance = cljs.core.first(arglist__42881);
var opts = cljs.core.rest(arglist__42881);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__42882){
var id = cljs.core.first(arglist__42882);
var opts = cljs.core.rest(arglist__42882);
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
var portfolio_company_sites__delegate = function (p__42883){var vec__42885 = p__42883;var type_ids = cljs.core.nth.call(null,vec__42885,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__42883 = null;if (arguments.length > 0) {
  p__42883 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__42883);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__42886){
var p__42883 = cljs.core.seq(arglist__42886);
return portfolio_company_sites__delegate(p__42883);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__42887){var vec__42889 = p__42887;var type_ids = cljs.core.nth.call(null,vec__42889,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__42887 = null;if (arguments.length > 0) {
  p__42887 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__42887);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__42890){
var p__42887 = cljs.core.seq(arglist__42890);
return portfolio_company_sites_by_company__delegate(p__42887);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__42891){var vec__42893 = p__42891;var type_ids = cljs.core.nth.call(null,vec__42893,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__42891 = null;if (arguments.length > 0) {
  p__42891 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__42891);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__42894){
var p__42891 = cljs.core.seq(arglist__42894);
return portfolio_company_locations__delegate(p__42891);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__42895){var vec__42897 = p__42895;var type_ids = cljs.core.nth.call(null,vec__42897,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__42895 = null;if (arguments.length > 0) {
  p__42895 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__42895);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__42898){
var p__42895 = cljs.core.seq(arglist__42898);
return portfolio_company_site_stats__delegate(p__42895);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__42899){var vec__42901 = p__42899;var type_ids = cljs.core.nth.call(null,vec__42901,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__42899 = null;if (arguments.length > 0) {
  p__42899 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__42899);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__42902){
var p__42899 = cljs.core.seq(arglist__42902);
return portfolio_company_site_account_timelines__delegate(p__42899);
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
var investment_account_timelines__delegate = function (p__42903){var vec__42905 = p__42903;var type_ids = cljs.core.nth.call(null,vec__42905,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__42903 = null;if (arguments.length > 0) {
  p__42903 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__42903);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__42906){
var p__42903 = cljs.core.seq(arglist__42906);
return investment_account_timelines__delegate(p__42903);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__42907){var vec__42909 = p__42907;var type_ids = cljs.core.nth.call(null,vec__42909,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__42907 = null;if (arguments.length > 0) {
  p__42907 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__42907);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__42910){
var p__42907 = cljs.core.seq(arglist__42910);
return investment_stats__delegate(p__42907);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__42911){var vec__42913 = p__42911;var type_ids = cljs.core.nth.call(null,vec__42913,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__42911 = null;if (arguments.length > 0) {
  p__42911 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__42911);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__42914){
var p__42911 = cljs.core.seq(arglist__42914);
return investment_aggs__delegate(p__42911);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__42915){var vec__42917 = p__42915;var type_ids = cljs.core.nth.call(null,vec__42917,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__42915 = null;if (arguments.length > 0) {
  p__42915 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__42915);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__42918){
var p__42915 = cljs.core.seq(arglist__42918);
return investments__delegate(p__42915);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
