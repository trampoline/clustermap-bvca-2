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
var GET__delegate = function (url,p__29694){var map__29696 = p__29694;var map__29696__$1 = ((cljs.core.seq_QMARK_.call(null,map__29696))?cljs.core.apply.call(null,cljs.core.hash_map,map__29696):map__29696);var raw = cljs.core.get.call(null,map__29696__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__29694 = null;if (arguments.length > 1) {
  p__29694 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__29694);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__29697){
var url = cljs.core.first(arglist__29697);
var p__29694 = cljs.core.rest(arglist__29697);
return GET__delegate(url,p__29694);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29830){var state_val_29831 = (state_29830[1]);if((state_val_29831 === 1))
{var state_29830__$1 = state_29830;var statearr_29832_29868 = state_29830__$1;(statearr_29832_29868[2] = null);
(statearr_29832_29868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 2))
{var state_29830__$1 = state_29830;if(true)
{var statearr_29833_29869 = state_29830__$1;(statearr_29833_29869[1] = 4);
} else
{var statearr_29834_29870 = state_29830__$1;(statearr_29834_29870[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 3))
{var inst_29828 = (state_29830[2]);var state_29830__$1 = state_29830;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29830__$1,inst_29828);
} else
{if((state_val_29831 === 4))
{var state_29830__$1 = state_29830;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29830__$1,7,ocomm);
} else
{if((state_val_29831 === 5))
{var state_29830__$1 = state_29830;var statearr_29835_29871 = state_29830__$1;(statearr_29835_29871[2] = null);
(statearr_29835_29871[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 6))
{var inst_29826 = (state_29830[2]);var state_29830__$1 = state_29830;var statearr_29836_29872 = state_29830__$1;(statearr_29836_29872[2] = inst_29826);
(statearr_29836_29872[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 7))
{var inst_29788 = (state_29830[7]);var inst_29787 = (state_29830[2]);var inst_29788__$1 = cljs.core.nth.call(null,inst_29787,0,null);var inst_29789 = cljs.core.nth.call(null,inst_29787,1,null);var inst_29790 = cljs.core.sequential_QMARK_.call(null,inst_29788__$1);var state_29830__$1 = (function (){var statearr_29837 = state_29830;(statearr_29837[8] = inst_29789);
(statearr_29837[7] = inst_29788__$1);
return statearr_29837;
})();if(inst_29790)
{var statearr_29838_29873 = state_29830__$1;(statearr_29838_29873[1] = 8);
} else
{var statearr_29839_29874 = state_29830__$1;(statearr_29839_29874[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 8))
{var inst_29788 = (state_29830[7]);var inst_29792 = inst_29788;var inst_29793 = cljs.core.PersistentVector.EMPTY;var state_29830__$1 = (function (){var statearr_29840 = state_29830;(statearr_29840[9] = inst_29793);
(statearr_29840[10] = inst_29792);
return statearr_29840;
})();var statearr_29841_29875 = state_29830__$1;(statearr_29841_29875[2] = null);
(statearr_29841_29875[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 9))
{var inst_29788 = (state_29830[7]);var state_29830__$1 = state_29830;if(cljs.core.truth_(inst_29788))
{var statearr_29842_29876 = state_29830__$1;(statearr_29842_29876[1] = 20);
} else
{var statearr_29843_29877 = state_29830__$1;(statearr_29843_29877[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 10))
{var inst_29789 = (state_29830[8]);var inst_29821 = (state_29830[2]);var inst_29822 = cljs.core.apply.call(null,handler,inst_29821,inst_29789);var state_29830__$1 = (function (){var statearr_29844 = state_29830;(statearr_29844[11] = inst_29822);
return statearr_29844;
})();var statearr_29845_29878 = state_29830__$1;(statearr_29845_29878[2] = null);
(statearr_29845_29878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 11))
{var inst_29792 = (state_29830[10]);var inst_29795 = cljs.core.empty_QMARK_.call(null,inst_29792);var state_29830__$1 = state_29830;if(inst_29795)
{var statearr_29846_29879 = state_29830__$1;(statearr_29846_29879[1] = 13);
} else
{var statearr_29847_29880 = state_29830__$1;(statearr_29847_29880[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 12))
{var inst_29812 = (state_29830[2]);var state_29830__$1 = state_29830;var statearr_29848_29881 = state_29830__$1;(statearr_29848_29881[2] = inst_29812);
(statearr_29848_29881[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 13))
{var inst_29793 = (state_29830[9]);var state_29830__$1 = state_29830;var statearr_29849_29882 = state_29830__$1;(statearr_29849_29882[2] = inst_29793);
(statearr_29849_29882[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 14))
{var inst_29792 = (state_29830[10]);var inst_29798 = cljs.core.rest.call(null,inst_29792);var inst_29799 = cljs.core.first.call(null,inst_29792);var state_29830__$1 = (function (){var statearr_29850 = state_29830;(statearr_29850[12] = inst_29798);
return statearr_29850;
})();if(cljs.core.truth_(inst_29799))
{var statearr_29851_29883 = state_29830__$1;(statearr_29851_29883[1] = 16);
} else
{var statearr_29852_29884 = state_29830__$1;(statearr_29852_29884[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 15))
{var inst_29810 = (state_29830[2]);var state_29830__$1 = state_29830;var statearr_29853_29885 = state_29830__$1;(statearr_29853_29885[2] = inst_29810);
(statearr_29853_29885[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 16))
{var inst_29792 = (state_29830[10]);var inst_29801 = cljs.core.first.call(null,inst_29792);var state_29830__$1 = state_29830;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29830__$1,19,inst_29801);
} else
{if((state_val_29831 === 17))
{var state_29830__$1 = state_29830;var statearr_29854_29886 = state_29830__$1;(statearr_29854_29886[2] = null);
(statearr_29854_29886[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 18))
{var inst_29798 = (state_29830[12]);var inst_29793 = (state_29830[9]);var inst_29806 = (state_29830[2]);var inst_29807 = cljs.core.conj.call(null,inst_29793,inst_29806);var inst_29792 = inst_29798;var inst_29793__$1 = inst_29807;var state_29830__$1 = (function (){var statearr_29855 = state_29830;(statearr_29855[9] = inst_29793__$1);
(statearr_29855[10] = inst_29792);
return statearr_29855;
})();var statearr_29856_29887 = state_29830__$1;(statearr_29856_29887[2] = null);
(statearr_29856_29887[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 19))
{var inst_29803 = (state_29830[2]);var state_29830__$1 = state_29830;var statearr_29857_29888 = state_29830__$1;(statearr_29857_29888[2] = inst_29803);
(statearr_29857_29888[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 20))
{var inst_29788 = (state_29830[7]);var state_29830__$1 = state_29830;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29830__$1,23,inst_29788);
} else
{if((state_val_29831 === 21))
{var state_29830__$1 = state_29830;var statearr_29858_29889 = state_29830__$1;(statearr_29858_29889[2] = null);
(statearr_29858_29889[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 22))
{var inst_29819 = (state_29830[2]);var state_29830__$1 = state_29830;var statearr_29859_29890 = state_29830__$1;(statearr_29859_29890[2] = inst_29819);
(statearr_29859_29890[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29831 === 23))
{var inst_29816 = (state_29830[2]);var state_29830__$1 = state_29830;var statearr_29860_29891 = state_29830__$1;(statearr_29860_29891[2] = inst_29816);
(statearr_29860_29891[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_29864 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29864[0] = state_machine__5507__auto__);
(statearr_29864[1] = 1);
return statearr_29864;
});
var state_machine__5507__auto____1 = (function (state_29830){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29830);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29865){if((e29865 instanceof Object))
{var ex__5510__auto__ = e29865;var statearr_29866_29892 = state_29830;(statearr_29866_29892[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29830);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29893 = state_29830;
state_29830 = G__29893;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29830){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29867 = f__5522__auto__.call(null);(statearr_29867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29867;
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
var G__29896__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__29895 = rseq;var rcomm = cljs.core.nth.call(null,vec__29895,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__29895,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__29896 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29896__delegate.call(this,req_args);};
G__29896.cljs$lang$maxFixedArity = 0;
G__29896.cljs$lang$applyTo = (function (arglist__29897){
var req_args = cljs.core.seq(arglist__29897);
return G__29896__delegate(req_args);
});
G__29896.cljs$core$IFn$_invoke$arity$variadic = G__29896__delegate;
return G__29896;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29915){var state_val_29916 = (state_29915[1]);if((state_val_29916 === 2))
{var inst_29912 = (state_29915[2]);var inst_29913 = console.log(inst_29912);var state_29915__$1 = state_29915;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29915__$1,inst_29913);
} else
{if((state_val_29916 === 1))
{var state_29915__$1 = state_29915;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29915__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_29920 = [null,null,null,null,null,null,null];(statearr_29920[0] = state_machine__5507__auto__);
(statearr_29920[1] = 1);
return statearr_29920;
});
var state_machine__5507__auto____1 = (function (state_29915){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29915);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29921){if((e29921 instanceof Object))
{var ex__5510__auto__ = e29921;var statearr_29922_29924 = state_29915;(statearr_29922_29924[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29915);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29921;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29925 = state_29915;
state_29915 = G__29925;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29915){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29923 = f__5522__auto__.call(null);(statearr_29923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29923;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__29926){
var f = cljs.core.first(arglist__29926);
var args = cljs.core.rest(arglist__29926);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__29929){var vec__29930 = p__29929;var k = cljs.core.nth.call(null,vec__29930,0,null);var v = cljs.core.nth.call(null,vec__29930,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
var portfolio_company_sites__delegate = function (p__29931){var vec__29933 = p__29931;var type_ids = cljs.core.nth.call(null,vec__29933,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__29931 = null;if (arguments.length > 0) {
  p__29931 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__29931);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__29934){
var p__29931 = cljs.core.seq(arglist__29934);
return portfolio_company_sites__delegate(p__29931);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__29935){var vec__29937 = p__29935;var type_ids = cljs.core.nth.call(null,vec__29937,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__29935 = null;if (arguments.length > 0) {
  p__29935 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__29935);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__29938){
var p__29935 = cljs.core.seq(arglist__29938);
return portfolio_company_locations__delegate(p__29935);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__29939){var vec__29941 = p__29939;var type_ids = cljs.core.nth.call(null,vec__29941,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__29939 = null;if (arguments.length > 0) {
  p__29939 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__29939);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__29942){
var p__29939 = cljs.core.seq(arglist__29942);
return portfolio_company_stats__delegate(p__29939);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__29943){var vec__29945 = p__29943;var type_ids = cljs.core.nth.call(null,vec__29945,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__29943 = null;if (arguments.length > 0) {
  p__29943 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__29943);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__29946){
var p__29943 = cljs.core.seq(arglist__29946);
return portfolio_company_site_stats__delegate(p__29943);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__29947){var vec__29949 = p__29947;var type_ids = cljs.core.nth.call(null,vec__29949,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__29947 = null;if (arguments.length > 0) {
  p__29947 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__29947);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__29950){
var p__29947 = cljs.core.seq(arglist__29950);
return portfolio_company_site_account_timelines__delegate(p__29947);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__29951){var vec__29953 = p__29951;var type_ids = cljs.core.nth.call(null,vec__29953,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__29951 = null;if (arguments.length > 0) {
  p__29951 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__29951);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__29954){
var p__29951 = cljs.core.seq(arglist__29954);
return portfolio_company_account_stats__delegate(p__29951);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__29955){
var id = cljs.core.first(arglist__29955);
var opts = cljs.core.rest(arglist__29955);
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
boundarylines.cljs$lang$applyTo = (function (arglist__29956){
var id = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var tolerance = cljs.core.first(arglist__29956);
var opts = cljs.core.rest(arglist__29956);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
