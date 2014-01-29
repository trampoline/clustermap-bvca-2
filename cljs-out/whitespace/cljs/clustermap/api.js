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
var GET__delegate = function (url,p__29698){var map__29700 = p__29698;var map__29700__$1 = ((cljs.core.seq_QMARK_.call(null,map__29700))?cljs.core.apply.call(null,cljs.core.hash_map,map__29700):map__29700);var raw = cljs.core.get.call(null,map__29700__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__29698 = null;if (arguments.length > 1) {
  p__29698 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__29698);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__29701){
var url = cljs.core.first(arglist__29701);
var p__29698 = cljs.core.rest(arglist__29701);
return GET__delegate(url,p__29698);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29834){var state_val_29835 = (state_29834[1]);if((state_val_29835 === 1))
{var state_29834__$1 = state_29834;var statearr_29836_29872 = state_29834__$1;(statearr_29836_29872[2] = null);
(statearr_29836_29872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 2))
{var state_29834__$1 = state_29834;if(true)
{var statearr_29837_29873 = state_29834__$1;(statearr_29837_29873[1] = 4);
} else
{var statearr_29838_29874 = state_29834__$1;(statearr_29838_29874[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 3))
{var inst_29832 = (state_29834[2]);var state_29834__$1 = state_29834;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29834__$1,inst_29832);
} else
{if((state_val_29835 === 4))
{var state_29834__$1 = state_29834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29834__$1,7,ocomm);
} else
{if((state_val_29835 === 5))
{var state_29834__$1 = state_29834;var statearr_29839_29875 = state_29834__$1;(statearr_29839_29875[2] = null);
(statearr_29839_29875[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 6))
{var inst_29830 = (state_29834[2]);var state_29834__$1 = state_29834;var statearr_29840_29876 = state_29834__$1;(statearr_29840_29876[2] = inst_29830);
(statearr_29840_29876[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 7))
{var inst_29792 = (state_29834[7]);var inst_29791 = (state_29834[2]);var inst_29792__$1 = cljs.core.nth.call(null,inst_29791,0,null);var inst_29793 = cljs.core.nth.call(null,inst_29791,1,null);var inst_29794 = cljs.core.sequential_QMARK_.call(null,inst_29792__$1);var state_29834__$1 = (function (){var statearr_29841 = state_29834;(statearr_29841[8] = inst_29793);
(statearr_29841[7] = inst_29792__$1);
return statearr_29841;
})();if(inst_29794)
{var statearr_29842_29877 = state_29834__$1;(statearr_29842_29877[1] = 8);
} else
{var statearr_29843_29878 = state_29834__$1;(statearr_29843_29878[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 8))
{var inst_29792 = (state_29834[7]);var inst_29796 = inst_29792;var inst_29797 = cljs.core.PersistentVector.EMPTY;var state_29834__$1 = (function (){var statearr_29844 = state_29834;(statearr_29844[9] = inst_29796);
(statearr_29844[10] = inst_29797);
return statearr_29844;
})();var statearr_29845_29879 = state_29834__$1;(statearr_29845_29879[2] = null);
(statearr_29845_29879[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 9))
{var inst_29792 = (state_29834[7]);var state_29834__$1 = state_29834;if(cljs.core.truth_(inst_29792))
{var statearr_29846_29880 = state_29834__$1;(statearr_29846_29880[1] = 20);
} else
{var statearr_29847_29881 = state_29834__$1;(statearr_29847_29881[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 10))
{var inst_29793 = (state_29834[8]);var inst_29825 = (state_29834[2]);var inst_29826 = cljs.core.apply.call(null,handler,inst_29825,inst_29793);var state_29834__$1 = (function (){var statearr_29848 = state_29834;(statearr_29848[11] = inst_29826);
return statearr_29848;
})();var statearr_29849_29882 = state_29834__$1;(statearr_29849_29882[2] = null);
(statearr_29849_29882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 11))
{var inst_29796 = (state_29834[9]);var inst_29799 = cljs.core.empty_QMARK_.call(null,inst_29796);var state_29834__$1 = state_29834;if(inst_29799)
{var statearr_29850_29883 = state_29834__$1;(statearr_29850_29883[1] = 13);
} else
{var statearr_29851_29884 = state_29834__$1;(statearr_29851_29884[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 12))
{var inst_29816 = (state_29834[2]);var state_29834__$1 = state_29834;var statearr_29852_29885 = state_29834__$1;(statearr_29852_29885[2] = inst_29816);
(statearr_29852_29885[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 13))
{var inst_29797 = (state_29834[10]);var state_29834__$1 = state_29834;var statearr_29853_29886 = state_29834__$1;(statearr_29853_29886[2] = inst_29797);
(statearr_29853_29886[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 14))
{var inst_29796 = (state_29834[9]);var inst_29802 = cljs.core.rest.call(null,inst_29796);var inst_29803 = cljs.core.first.call(null,inst_29796);var state_29834__$1 = (function (){var statearr_29854 = state_29834;(statearr_29854[12] = inst_29802);
return statearr_29854;
})();if(cljs.core.truth_(inst_29803))
{var statearr_29855_29887 = state_29834__$1;(statearr_29855_29887[1] = 16);
} else
{var statearr_29856_29888 = state_29834__$1;(statearr_29856_29888[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 15))
{var inst_29814 = (state_29834[2]);var state_29834__$1 = state_29834;var statearr_29857_29889 = state_29834__$1;(statearr_29857_29889[2] = inst_29814);
(statearr_29857_29889[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 16))
{var inst_29796 = (state_29834[9]);var inst_29805 = cljs.core.first.call(null,inst_29796);var state_29834__$1 = state_29834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29834__$1,19,inst_29805);
} else
{if((state_val_29835 === 17))
{var state_29834__$1 = state_29834;var statearr_29858_29890 = state_29834__$1;(statearr_29858_29890[2] = null);
(statearr_29858_29890[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 18))
{var inst_29797 = (state_29834[10]);var inst_29802 = (state_29834[12]);var inst_29810 = (state_29834[2]);var inst_29811 = cljs.core.conj.call(null,inst_29797,inst_29810);var inst_29796 = inst_29802;var inst_29797__$1 = inst_29811;var state_29834__$1 = (function (){var statearr_29859 = state_29834;(statearr_29859[9] = inst_29796);
(statearr_29859[10] = inst_29797__$1);
return statearr_29859;
})();var statearr_29860_29891 = state_29834__$1;(statearr_29860_29891[2] = null);
(statearr_29860_29891[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 19))
{var inst_29807 = (state_29834[2]);var state_29834__$1 = state_29834;var statearr_29861_29892 = state_29834__$1;(statearr_29861_29892[2] = inst_29807);
(statearr_29861_29892[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 20))
{var inst_29792 = (state_29834[7]);var state_29834__$1 = state_29834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29834__$1,23,inst_29792);
} else
{if((state_val_29835 === 21))
{var state_29834__$1 = state_29834;var statearr_29862_29893 = state_29834__$1;(statearr_29862_29893[2] = null);
(statearr_29862_29893[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 22))
{var inst_29823 = (state_29834[2]);var state_29834__$1 = state_29834;var statearr_29863_29894 = state_29834__$1;(statearr_29863_29894[2] = inst_29823);
(statearr_29863_29894[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29835 === 23))
{var inst_29820 = (state_29834[2]);var state_29834__$1 = state_29834;var statearr_29864_29895 = state_29834__$1;(statearr_29864_29895[2] = inst_29820);
(statearr_29864_29895[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_29868 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29868[0] = state_machine__5507__auto__);
(statearr_29868[1] = 1);
return statearr_29868;
});
var state_machine__5507__auto____1 = (function (state_29834){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29834);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29869){if((e29869 instanceof Object))
{var ex__5510__auto__ = e29869;var statearr_29870_29896 = state_29834;(statearr_29870_29896[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29834);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29897 = state_29834;
state_29834 = G__29897;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29834){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29871 = f__5522__auto__.call(null);(statearr_29871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29871;
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
var G__29900__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__29899 = rseq;var rcomm = cljs.core.nth.call(null,vec__29899,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__29899,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__29900 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29900__delegate.call(this,req_args);};
G__29900.cljs$lang$maxFixedArity = 0;
G__29900.cljs$lang$applyTo = (function (arglist__29901){
var req_args = cljs.core.seq(arglist__29901);
return G__29900__delegate(req_args);
});
G__29900.cljs$core$IFn$_invoke$arity$variadic = G__29900__delegate;
return G__29900;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29919){var state_val_29920 = (state_29919[1]);if((state_val_29920 === 2))
{var inst_29916 = (state_29919[2]);var inst_29917 = console.log(inst_29916);var state_29919__$1 = state_29919;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29919__$1,inst_29917);
} else
{if((state_val_29920 === 1))
{var state_29919__$1 = state_29919;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29919__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_29924 = [null,null,null,null,null,null,null];(statearr_29924[0] = state_machine__5507__auto__);
(statearr_29924[1] = 1);
return statearr_29924;
});
var state_machine__5507__auto____1 = (function (state_29919){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29919);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29925){if((e29925 instanceof Object))
{var ex__5510__auto__ = e29925;var statearr_29926_29928 = state_29919;(statearr_29926_29928[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29919);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29929 = state_29919;
state_29919 = G__29929;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29919){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29927 = f__5522__auto__.call(null);(statearr_29927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_29927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__29930){
var f = cljs.core.first(arglist__29930);
var args = cljs.core.rest(arglist__29930);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__29933){var vec__29934 = p__29933;var k = cljs.core.nth.call(null,vec__29934,0,null);var v = cljs.core.nth.call(null,vec__29934,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
var portfolio_company_sites__delegate = function (p__29935){var vec__29937 = p__29935;var type_ids = cljs.core.nth.call(null,vec__29937,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__29935 = null;if (arguments.length > 0) {
  p__29935 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__29935);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__29938){
var p__29935 = cljs.core.seq(arglist__29938);
return portfolio_company_sites__delegate(p__29935);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__29939){var vec__29941 = p__29939;var type_ids = cljs.core.nth.call(null,vec__29941,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__29939 = null;if (arguments.length > 0) {
  p__29939 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__29939);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__29942){
var p__29939 = cljs.core.seq(arglist__29942);
return portfolio_company_locations__delegate(p__29939);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__29943){var vec__29945 = p__29943;var type_ids = cljs.core.nth.call(null,vec__29945,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__29943 = null;if (arguments.length > 0) {
  p__29943 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__29943);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__29946){
var p__29943 = cljs.core.seq(arglist__29946);
return portfolio_company_stats__delegate(p__29943);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__29947){var vec__29949 = p__29947;var type_ids = cljs.core.nth.call(null,vec__29949,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__29947 = null;if (arguments.length > 0) {
  p__29947 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__29947);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__29950){
var p__29947 = cljs.core.seq(arglist__29950);
return portfolio_company_site_stats__delegate(p__29947);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__29951){var vec__29953 = p__29951;var type_ids = cljs.core.nth.call(null,vec__29953,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__29951 = null;if (arguments.length > 0) {
  p__29951 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__29951);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__29954){
var p__29951 = cljs.core.seq(arglist__29954);
return portfolio_company_site_account_timelines__delegate(p__29951);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__29955){var vec__29957 = p__29955;var type_ids = cljs.core.nth.call(null,vec__29957,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__29955 = null;if (arguments.length > 0) {
  p__29955 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__29955);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__29958){
var p__29955 = cljs.core.seq(arglist__29958);
return portfolio_company_account_stats__delegate(p__29955);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__29959){
var id = cljs.core.first(arglist__29959);
var opts = cljs.core.rest(arglist__29959);
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
boundarylines.cljs$lang$applyTo = (function (arglist__29960){
var id = cljs.core.first(arglist__29960);
arglist__29960 = cljs.core.next(arglist__29960);
var tolerance = cljs.core.first(arglist__29960);
var opts = cljs.core.rest(arglist__29960);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
