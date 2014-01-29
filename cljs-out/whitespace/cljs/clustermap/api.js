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
var GET__delegate = function (url,p__29542){var map__29544 = p__29542;var map__29544__$1 = ((cljs.core.seq_QMARK_.call(null,map__29544))?cljs.core.apply.call(null,cljs.core.hash_map,map__29544):map__29544);var raw = cljs.core.get.call(null,map__29544__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__29542 = null;if (arguments.length > 1) {
  p__29542 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__29542);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__29545){
var url = cljs.core.first(arglist__29545);
var p__29542 = cljs.core.rest(arglist__29545);
return GET__delegate(url,p__29542);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29678){var state_val_29679 = (state_29678[1]);if((state_val_29679 === 1))
{var state_29678__$1 = state_29678;var statearr_29680_29716 = state_29678__$1;(statearr_29680_29716[2] = null);
(statearr_29680_29716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 2))
{var state_29678__$1 = state_29678;if(true)
{var statearr_29681_29717 = state_29678__$1;(statearr_29681_29717[1] = 4);
} else
{var statearr_29682_29718 = state_29678__$1;(statearr_29682_29718[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 3))
{var inst_29676 = (state_29678[2]);var state_29678__$1 = state_29678;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29678__$1,inst_29676);
} else
{if((state_val_29679 === 4))
{var state_29678__$1 = state_29678;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29678__$1,7,ocomm);
} else
{if((state_val_29679 === 5))
{var state_29678__$1 = state_29678;var statearr_29683_29719 = state_29678__$1;(statearr_29683_29719[2] = null);
(statearr_29683_29719[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 6))
{var inst_29674 = (state_29678[2]);var state_29678__$1 = state_29678;var statearr_29684_29720 = state_29678__$1;(statearr_29684_29720[2] = inst_29674);
(statearr_29684_29720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 7))
{var inst_29636 = (state_29678[7]);var inst_29635 = (state_29678[2]);var inst_29636__$1 = cljs.core.nth.call(null,inst_29635,0,null);var inst_29637 = cljs.core.nth.call(null,inst_29635,1,null);var inst_29638 = cljs.core.sequential_QMARK_.call(null,inst_29636__$1);var state_29678__$1 = (function (){var statearr_29685 = state_29678;(statearr_29685[8] = inst_29637);
(statearr_29685[7] = inst_29636__$1);
return statearr_29685;
})();if(inst_29638)
{var statearr_29686_29721 = state_29678__$1;(statearr_29686_29721[1] = 8);
} else
{var statearr_29687_29722 = state_29678__$1;(statearr_29687_29722[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 8))
{var inst_29636 = (state_29678[7]);var inst_29640 = inst_29636;var inst_29641 = cljs.core.PersistentVector.EMPTY;var state_29678__$1 = (function (){var statearr_29688 = state_29678;(statearr_29688[9] = inst_29641);
(statearr_29688[10] = inst_29640);
return statearr_29688;
})();var statearr_29689_29723 = state_29678__$1;(statearr_29689_29723[2] = null);
(statearr_29689_29723[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 9))
{var inst_29636 = (state_29678[7]);var state_29678__$1 = state_29678;if(cljs.core.truth_(inst_29636))
{var statearr_29690_29724 = state_29678__$1;(statearr_29690_29724[1] = 20);
} else
{var statearr_29691_29725 = state_29678__$1;(statearr_29691_29725[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 10))
{var inst_29637 = (state_29678[8]);var inst_29669 = (state_29678[2]);var inst_29670 = cljs.core.apply.call(null,handler,inst_29669,inst_29637);var state_29678__$1 = (function (){var statearr_29692 = state_29678;(statearr_29692[11] = inst_29670);
return statearr_29692;
})();var statearr_29693_29726 = state_29678__$1;(statearr_29693_29726[2] = null);
(statearr_29693_29726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 11))
{var inst_29640 = (state_29678[10]);var inst_29643 = cljs.core.empty_QMARK_.call(null,inst_29640);var state_29678__$1 = state_29678;if(inst_29643)
{var statearr_29694_29727 = state_29678__$1;(statearr_29694_29727[1] = 13);
} else
{var statearr_29695_29728 = state_29678__$1;(statearr_29695_29728[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 12))
{var inst_29660 = (state_29678[2]);var state_29678__$1 = state_29678;var statearr_29696_29729 = state_29678__$1;(statearr_29696_29729[2] = inst_29660);
(statearr_29696_29729[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 13))
{var inst_29641 = (state_29678[9]);var state_29678__$1 = state_29678;var statearr_29697_29730 = state_29678__$1;(statearr_29697_29730[2] = inst_29641);
(statearr_29697_29730[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 14))
{var inst_29640 = (state_29678[10]);var inst_29646 = cljs.core.rest.call(null,inst_29640);var inst_29647 = cljs.core.first.call(null,inst_29640);var state_29678__$1 = (function (){var statearr_29698 = state_29678;(statearr_29698[12] = inst_29646);
return statearr_29698;
})();if(cljs.core.truth_(inst_29647))
{var statearr_29699_29731 = state_29678__$1;(statearr_29699_29731[1] = 16);
} else
{var statearr_29700_29732 = state_29678__$1;(statearr_29700_29732[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 15))
{var inst_29658 = (state_29678[2]);var state_29678__$1 = state_29678;var statearr_29701_29733 = state_29678__$1;(statearr_29701_29733[2] = inst_29658);
(statearr_29701_29733[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 16))
{var inst_29640 = (state_29678[10]);var inst_29649 = cljs.core.first.call(null,inst_29640);var state_29678__$1 = state_29678;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29678__$1,19,inst_29649);
} else
{if((state_val_29679 === 17))
{var state_29678__$1 = state_29678;var statearr_29702_29734 = state_29678__$1;(statearr_29702_29734[2] = null);
(statearr_29702_29734[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 18))
{var inst_29646 = (state_29678[12]);var inst_29641 = (state_29678[9]);var inst_29654 = (state_29678[2]);var inst_29655 = cljs.core.conj.call(null,inst_29641,inst_29654);var inst_29640 = inst_29646;var inst_29641__$1 = inst_29655;var state_29678__$1 = (function (){var statearr_29703 = state_29678;(statearr_29703[9] = inst_29641__$1);
(statearr_29703[10] = inst_29640);
return statearr_29703;
})();var statearr_29704_29735 = state_29678__$1;(statearr_29704_29735[2] = null);
(statearr_29704_29735[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 19))
{var inst_29651 = (state_29678[2]);var state_29678__$1 = state_29678;var statearr_29705_29736 = state_29678__$1;(statearr_29705_29736[2] = inst_29651);
(statearr_29705_29736[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 20))
{var inst_29636 = (state_29678[7]);var state_29678__$1 = state_29678;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29678__$1,23,inst_29636);
} else
{if((state_val_29679 === 21))
{var state_29678__$1 = state_29678;var statearr_29706_29737 = state_29678__$1;(statearr_29706_29737[2] = null);
(statearr_29706_29737[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 22))
{var inst_29667 = (state_29678[2]);var state_29678__$1 = state_29678;var statearr_29707_29738 = state_29678__$1;(statearr_29707_29738[2] = inst_29667);
(statearr_29707_29738[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29679 === 23))
{var inst_29664 = (state_29678[2]);var state_29678__$1 = state_29678;var statearr_29708_29739 = state_29678__$1;(statearr_29708_29739[2] = inst_29664);
(statearr_29708_29739[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_29712 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29712[0] = state_machine__5507__auto__);
(statearr_29712[1] = 1);
return statearr_29712;
});
var state_machine__5507__auto____1 = (function (state_29678){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29678);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29713){if((e29713 instanceof Object))
{var ex__5510__auto__ = e29713;var statearr_29714_29740 = state_29678;(statearr_29714_29740[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29678);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29713;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29741 = state_29678;
state_29678 = G__29741;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29678){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29715 = f__5522__auto__.call(null);(statearr_29715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29715;
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
var G__29744__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__29743 = rseq;var rcomm = cljs.core.nth.call(null,vec__29743,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__29743,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__29744 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29744__delegate.call(this,req_args);};
G__29744.cljs$lang$maxFixedArity = 0;
G__29744.cljs$lang$applyTo = (function (arglist__29745){
var req_args = cljs.core.seq(arglist__29745);
return G__29744__delegate(req_args);
});
G__29744.cljs$core$IFn$_invoke$arity$variadic = G__29744__delegate;
return G__29744;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29763){var state_val_29764 = (state_29763[1]);if((state_val_29764 === 2))
{var inst_29760 = (state_29763[2]);var inst_29761 = console.log(inst_29760);var state_29763__$1 = state_29763;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29763__$1,inst_29761);
} else
{if((state_val_29764 === 1))
{var state_29763__$1 = state_29763;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29763__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_29768 = [null,null,null,null,null,null,null];(statearr_29768[0] = state_machine__5507__auto__);
(statearr_29768[1] = 1);
return statearr_29768;
});
var state_machine__5507__auto____1 = (function (state_29763){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29763);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29769){if((e29769 instanceof Object))
{var ex__5510__auto__ = e29769;var statearr_29770_29772 = state_29763;(statearr_29770_29772[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29763);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29769;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29773 = state_29763;
state_29763 = G__29773;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29763){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29771 = f__5522__auto__.call(null);(statearr_29771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__29774){
var f = cljs.core.first(arglist__29774);
var args = cljs.core.rest(arglist__29774);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__29777){var vec__29778 = p__29777;var k = cljs.core.nth.call(null,vec__29778,0,null);var v = cljs.core.nth.call(null,vec__29778,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > 0))
{return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituencies = (function constituencies(){return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies");
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/constituencies/"),cljs.core.str(id)].join(''));
});
clustermap.api.portfolio_companies_summary = (function portfolio_companies_summary(){return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/portfolio-companies-summary");
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__29779){var vec__29781 = p__29779;var type_ids = cljs.core.nth.call(null,vec__29781,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__29779 = null;if (arguments.length > 0) {
  p__29779 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__29779);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__29782){
var p__29779 = cljs.core.seq(arglist__29782);
return portfolio_company_sites__delegate(p__29779);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__29783){var vec__29785 = p__29783;var type_ids = cljs.core.nth.call(null,vec__29785,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__29783 = null;if (arguments.length > 0) {
  p__29783 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__29783);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__29786){
var p__29783 = cljs.core.seq(arglist__29786);
return portfolio_company_locations__delegate(p__29783);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__29787){var vec__29789 = p__29787;var type_ids = cljs.core.nth.call(null,vec__29789,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__29787 = null;if (arguments.length > 0) {
  p__29787 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__29787);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__29790){
var p__29787 = cljs.core.seq(arglist__29790);
return portfolio_company_stats__delegate(p__29787);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__29791){var vec__29793 = p__29791;var type_ids = cljs.core.nth.call(null,vec__29793,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__29791 = null;if (arguments.length > 0) {
  p__29791 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__29791);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__29794){
var p__29791 = cljs.core.seq(arglist__29794);
return portfolio_company_site_stats__delegate(p__29791);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__29795){var vec__29797 = p__29795;var type_ids = cljs.core.nth.call(null,vec__29797,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__29795 = null;if (arguments.length > 0) {
  p__29795 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__29795);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__29798){
var p__29795 = cljs.core.seq(arglist__29798);
return portfolio_company_site_account_timelines__delegate(p__29795);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__29799){var vec__29801 = p__29799;var type_ids = cljs.core.nth.call(null,vec__29801,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__29799 = null;if (arguments.length > 0) {
  p__29799 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__29799);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__29802){
var p__29799 = cljs.core.seq(arglist__29802);
return portfolio_company_account_stats__delegate(p__29799);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/investor-companies-summary");
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__29803){
var id = cljs.core.first(arglist__29803);
var opts = cljs.core.rest(arglist__29803);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
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
boundarylines.cljs$lang$applyTo = (function (arglist__29804){
var id = cljs.core.first(arglist__29804);
arglist__29804 = cljs.core.next(arglist__29804);
var tolerance = cljs.core.first(arglist__29804);
var opts = cljs.core.rest(arglist__29804);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
