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
var GET__delegate = function (url,p__29672){var map__29674 = p__29672;var map__29674__$1 = ((cljs.core.seq_QMARK_.call(null,map__29674))?cljs.core.apply.call(null,cljs.core.hash_map,map__29674):map__29674);var raw = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__29672 = null;if (arguments.length > 1) {
  p__29672 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__29672);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__29675){
var url = cljs.core.first(arglist__29675);
var p__29672 = cljs.core.rest(arglist__29675);
return GET__delegate(url,p__29672);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29808){var state_val_29809 = (state_29808[1]);if((state_val_29809 === 1))
{var state_29808__$1 = state_29808;var statearr_29810_29846 = state_29808__$1;(statearr_29810_29846[2] = null);
(statearr_29810_29846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 2))
{var state_29808__$1 = state_29808;if(true)
{var statearr_29811_29847 = state_29808__$1;(statearr_29811_29847[1] = 4);
} else
{var statearr_29812_29848 = state_29808__$1;(statearr_29812_29848[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 3))
{var inst_29806 = (state_29808[2]);var state_29808__$1 = state_29808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29808__$1,inst_29806);
} else
{if((state_val_29809 === 4))
{var state_29808__$1 = state_29808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29808__$1,7,ocomm);
} else
{if((state_val_29809 === 5))
{var state_29808__$1 = state_29808;var statearr_29813_29849 = state_29808__$1;(statearr_29813_29849[2] = null);
(statearr_29813_29849[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 6))
{var inst_29804 = (state_29808[2]);var state_29808__$1 = state_29808;var statearr_29814_29850 = state_29808__$1;(statearr_29814_29850[2] = inst_29804);
(statearr_29814_29850[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 7))
{var inst_29766 = (state_29808[7]);var inst_29765 = (state_29808[2]);var inst_29766__$1 = cljs.core.nth.call(null,inst_29765,0,null);var inst_29767 = cljs.core.nth.call(null,inst_29765,1,null);var inst_29768 = cljs.core.sequential_QMARK_.call(null,inst_29766__$1);var state_29808__$1 = (function (){var statearr_29815 = state_29808;(statearr_29815[8] = inst_29767);
(statearr_29815[7] = inst_29766__$1);
return statearr_29815;
})();if(inst_29768)
{var statearr_29816_29851 = state_29808__$1;(statearr_29816_29851[1] = 8);
} else
{var statearr_29817_29852 = state_29808__$1;(statearr_29817_29852[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 8))
{var inst_29766 = (state_29808[7]);var inst_29770 = inst_29766;var inst_29771 = cljs.core.PersistentVector.EMPTY;var state_29808__$1 = (function (){var statearr_29818 = state_29808;(statearr_29818[9] = inst_29771);
(statearr_29818[10] = inst_29770);
return statearr_29818;
})();var statearr_29819_29853 = state_29808__$1;(statearr_29819_29853[2] = null);
(statearr_29819_29853[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 9))
{var inst_29766 = (state_29808[7]);var state_29808__$1 = state_29808;if(cljs.core.truth_(inst_29766))
{var statearr_29820_29854 = state_29808__$1;(statearr_29820_29854[1] = 20);
} else
{var statearr_29821_29855 = state_29808__$1;(statearr_29821_29855[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 10))
{var inst_29767 = (state_29808[8]);var inst_29799 = (state_29808[2]);var inst_29800 = cljs.core.apply.call(null,handler,inst_29799,inst_29767);var state_29808__$1 = (function (){var statearr_29822 = state_29808;(statearr_29822[11] = inst_29800);
return statearr_29822;
})();var statearr_29823_29856 = state_29808__$1;(statearr_29823_29856[2] = null);
(statearr_29823_29856[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 11))
{var inst_29770 = (state_29808[10]);var inst_29773 = cljs.core.empty_QMARK_.call(null,inst_29770);var state_29808__$1 = state_29808;if(inst_29773)
{var statearr_29824_29857 = state_29808__$1;(statearr_29824_29857[1] = 13);
} else
{var statearr_29825_29858 = state_29808__$1;(statearr_29825_29858[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 12))
{var inst_29790 = (state_29808[2]);var state_29808__$1 = state_29808;var statearr_29826_29859 = state_29808__$1;(statearr_29826_29859[2] = inst_29790);
(statearr_29826_29859[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 13))
{var inst_29771 = (state_29808[9]);var state_29808__$1 = state_29808;var statearr_29827_29860 = state_29808__$1;(statearr_29827_29860[2] = inst_29771);
(statearr_29827_29860[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 14))
{var inst_29770 = (state_29808[10]);var inst_29776 = cljs.core.rest.call(null,inst_29770);var inst_29777 = cljs.core.first.call(null,inst_29770);var state_29808__$1 = (function (){var statearr_29828 = state_29808;(statearr_29828[12] = inst_29776);
return statearr_29828;
})();if(cljs.core.truth_(inst_29777))
{var statearr_29829_29861 = state_29808__$1;(statearr_29829_29861[1] = 16);
} else
{var statearr_29830_29862 = state_29808__$1;(statearr_29830_29862[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 15))
{var inst_29788 = (state_29808[2]);var state_29808__$1 = state_29808;var statearr_29831_29863 = state_29808__$1;(statearr_29831_29863[2] = inst_29788);
(statearr_29831_29863[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 16))
{var inst_29770 = (state_29808[10]);var inst_29779 = cljs.core.first.call(null,inst_29770);var state_29808__$1 = state_29808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29808__$1,19,inst_29779);
} else
{if((state_val_29809 === 17))
{var state_29808__$1 = state_29808;var statearr_29832_29864 = state_29808__$1;(statearr_29832_29864[2] = null);
(statearr_29832_29864[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 18))
{var inst_29776 = (state_29808[12]);var inst_29771 = (state_29808[9]);var inst_29784 = (state_29808[2]);var inst_29785 = cljs.core.conj.call(null,inst_29771,inst_29784);var inst_29770 = inst_29776;var inst_29771__$1 = inst_29785;var state_29808__$1 = (function (){var statearr_29833 = state_29808;(statearr_29833[9] = inst_29771__$1);
(statearr_29833[10] = inst_29770);
return statearr_29833;
})();var statearr_29834_29865 = state_29808__$1;(statearr_29834_29865[2] = null);
(statearr_29834_29865[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 19))
{var inst_29781 = (state_29808[2]);var state_29808__$1 = state_29808;var statearr_29835_29866 = state_29808__$1;(statearr_29835_29866[2] = inst_29781);
(statearr_29835_29866[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 20))
{var inst_29766 = (state_29808[7]);var state_29808__$1 = state_29808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29808__$1,23,inst_29766);
} else
{if((state_val_29809 === 21))
{var state_29808__$1 = state_29808;var statearr_29836_29867 = state_29808__$1;(statearr_29836_29867[2] = null);
(statearr_29836_29867[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 22))
{var inst_29797 = (state_29808[2]);var state_29808__$1 = state_29808;var statearr_29837_29868 = state_29808__$1;(statearr_29837_29868[2] = inst_29797);
(statearr_29837_29868[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29809 === 23))
{var inst_29794 = (state_29808[2]);var state_29808__$1 = state_29808;var statearr_29838_29869 = state_29808__$1;(statearr_29838_29869[2] = inst_29794);
(statearr_29838_29869[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_29842 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29842[0] = state_machine__5507__auto__);
(statearr_29842[1] = 1);
return statearr_29842;
});
var state_machine__5507__auto____1 = (function (state_29808){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29808);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29843){if((e29843 instanceof Object))
{var ex__5510__auto__ = e29843;var statearr_29844_29870 = state_29808;(statearr_29844_29870[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29871 = state_29808;
state_29808 = G__29871;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29808){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29845 = f__5522__auto__.call(null);(statearr_29845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29845;
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
var G__29874__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__29873 = rseq;var rcomm = cljs.core.nth.call(null,vec__29873,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__29873,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__29874 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29874__delegate.call(this,req_args);};
G__29874.cljs$lang$maxFixedArity = 0;
G__29874.cljs$lang$applyTo = (function (arglist__29875){
var req_args = cljs.core.seq(arglist__29875);
return G__29874__delegate(req_args);
});
G__29874.cljs$core$IFn$_invoke$arity$variadic = G__29874__delegate;
return G__29874;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29893){var state_val_29894 = (state_29893[1]);if((state_val_29894 === 2))
{var inst_29890 = (state_29893[2]);var inst_29891 = console.log(inst_29890);var state_29893__$1 = state_29893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29893__$1,inst_29891);
} else
{if((state_val_29894 === 1))
{var state_29893__$1 = state_29893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29893__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_29898 = [null,null,null,null,null,null,null];(statearr_29898[0] = state_machine__5507__auto__);
(statearr_29898[1] = 1);
return statearr_29898;
});
var state_machine__5507__auto____1 = (function (state_29893){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29893);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29899){if((e29899 instanceof Object))
{var ex__5510__auto__ = e29899;var statearr_29900_29902 = state_29893;(statearr_29900_29902[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29893);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29903 = state_29893;
state_29893 = G__29903;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29893){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29901 = f__5522__auto__.call(null);(statearr_29901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__29904){
var f = cljs.core.first(arglist__29904);
var args = cljs.core.rest(arglist__29904);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__29907){var vec__29908 = p__29907;var k = cljs.core.nth.call(null,vec__29908,0,null);var v = cljs.core.nth.call(null,vec__29908,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
var portfolio_company_sites__delegate = function (p__29909){var vec__29911 = p__29909;var type_ids = cljs.core.nth.call(null,vec__29911,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__29909 = null;if (arguments.length > 0) {
  p__29909 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__29909);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__29912){
var p__29909 = cljs.core.seq(arglist__29912);
return portfolio_company_sites__delegate(p__29909);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__29913){var vec__29915 = p__29913;var type_ids = cljs.core.nth.call(null,vec__29915,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__29913 = null;if (arguments.length > 0) {
  p__29913 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__29913);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__29916){
var p__29913 = cljs.core.seq(arglist__29916);
return portfolio_company_locations__delegate(p__29913);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__29917){var vec__29919 = p__29917;var type_ids = cljs.core.nth.call(null,vec__29919,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__29917 = null;if (arguments.length > 0) {
  p__29917 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__29917);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__29920){
var p__29917 = cljs.core.seq(arglist__29920);
return portfolio_company_stats__delegate(p__29917);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__29921){var vec__29923 = p__29921;var type_ids = cljs.core.nth.call(null,vec__29923,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__29921 = null;if (arguments.length > 0) {
  p__29921 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__29921);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__29924){
var p__29921 = cljs.core.seq(arglist__29924);
return portfolio_company_site_stats__delegate(p__29921);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__29925){var vec__29927 = p__29925;var type_ids = cljs.core.nth.call(null,vec__29927,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__29925 = null;if (arguments.length > 0) {
  p__29925 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__29925);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__29928){
var p__29925 = cljs.core.seq(arglist__29928);
return portfolio_company_site_account_timelines__delegate(p__29925);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__29929){var vec__29931 = p__29929;var type_ids = cljs.core.nth.call(null,vec__29931,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__29929 = null;if (arguments.length > 0) {
  p__29929 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__29929);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__29932){
var p__29929 = cljs.core.seq(arglist__29932);
return portfolio_company_account_stats__delegate(p__29929);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__29933){
var id = cljs.core.first(arglist__29933);
var opts = cljs.core.rest(arglist__29933);
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
boundarylines.cljs$lang$applyTo = (function (arglist__29934){
var id = cljs.core.first(arglist__29934);
arglist__29934 = cljs.core.next(arglist__29934);
var tolerance = cljs.core.first(arglist__29934);
var opts = cljs.core.rest(arglist__29934);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
