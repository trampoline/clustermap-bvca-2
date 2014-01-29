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
var GET__delegate = function (url,p__19724){var map__19726 = p__19724;var map__19726__$1 = ((cljs.core.seq_QMARK_(map__19726))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19726):map__19726);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19726__$1,cljs.core.constant$keyword$210);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$191,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__19724 = null;if (arguments.length > 1) {
  p__19724 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19724);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19727){
var url = cljs.core.first(arglist__19727);
var p__19724 = cljs.core.rest(arglist__19727);
return GET__delegate(url,p__19724);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19860){var state_val_19861 = (state_19860[1]);if((state_val_19861 === 1))
{var state_19860__$1 = state_19860;var statearr_19862_19898 = state_19860__$1;(statearr_19862_19898[2] = null);
(statearr_19862_19898[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 2))
{var state_19860__$1 = state_19860;if(true)
{var statearr_19863_19899 = state_19860__$1;(statearr_19863_19899[1] = 4);
} else
{var statearr_19864_19900 = state_19860__$1;(statearr_19864_19900[1] = 5);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 3))
{var inst_19858 = (state_19860[2]);var state_19860__$1 = state_19860;return cljs.core.async.impl.ioc_helpers.return_chan(state_19860__$1,inst_19858);
} else
{if((state_val_19861 === 4))
{var state_19860__$1 = state_19860;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19860__$1,7,ocomm);
} else
{if((state_val_19861 === 5))
{var state_19860__$1 = state_19860;var statearr_19865_19901 = state_19860__$1;(statearr_19865_19901[2] = null);
(statearr_19865_19901[1] = 6);
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 6))
{var inst_19856 = (state_19860[2]);var state_19860__$1 = state_19860;var statearr_19866_19902 = state_19860__$1;(statearr_19866_19902[2] = inst_19856);
(statearr_19866_19902[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 7))
{var inst_19818 = (state_19860[7]);var inst_19817 = (state_19860[2]);var inst_19818__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19817,0,null);var inst_19819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19817,1,null);var inst_19820 = cljs.core.sequential_QMARK_(inst_19818__$1);var state_19860__$1 = (function (){var statearr_19867 = state_19860;(statearr_19867[7] = inst_19818__$1);
(statearr_19867[8] = inst_19819);
return statearr_19867;
})();if(inst_19820)
{var statearr_19868_19903 = state_19860__$1;(statearr_19868_19903[1] = 8);
} else
{var statearr_19869_19904 = state_19860__$1;(statearr_19869_19904[1] = 9);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 8))
{var inst_19818 = (state_19860[7]);var inst_19822 = inst_19818;var inst_19823 = cljs.core.PersistentVector.EMPTY;var state_19860__$1 = (function (){var statearr_19870 = state_19860;(statearr_19870[9] = inst_19823);
(statearr_19870[10] = inst_19822);
return statearr_19870;
})();var statearr_19871_19905 = state_19860__$1;(statearr_19871_19905[2] = null);
(statearr_19871_19905[1] = 11);
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 9))
{var inst_19818 = (state_19860[7]);var state_19860__$1 = state_19860;if(cljs.core.truth_(inst_19818))
{var statearr_19872_19906 = state_19860__$1;(statearr_19872_19906[1] = 20);
} else
{var statearr_19873_19907 = state_19860__$1;(statearr_19873_19907[1] = 21);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 10))
{var inst_19819 = (state_19860[8]);var inst_19851 = (state_19860[2]);var inst_19852 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_19851,inst_19819);var state_19860__$1 = (function (){var statearr_19874 = state_19860;(statearr_19874[11] = inst_19852);
return statearr_19874;
})();var statearr_19875_19908 = state_19860__$1;(statearr_19875_19908[2] = null);
(statearr_19875_19908[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 11))
{var inst_19822 = (state_19860[10]);var inst_19825 = cljs.core.empty_QMARK_(inst_19822);var state_19860__$1 = state_19860;if(inst_19825)
{var statearr_19876_19909 = state_19860__$1;(statearr_19876_19909[1] = 13);
} else
{var statearr_19877_19910 = state_19860__$1;(statearr_19877_19910[1] = 14);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 12))
{var inst_19842 = (state_19860[2]);var state_19860__$1 = state_19860;var statearr_19878_19911 = state_19860__$1;(statearr_19878_19911[2] = inst_19842);
(statearr_19878_19911[1] = 10);
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 13))
{var inst_19823 = (state_19860[9]);var state_19860__$1 = state_19860;var statearr_19879_19912 = state_19860__$1;(statearr_19879_19912[2] = inst_19823);
(statearr_19879_19912[1] = 15);
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 14))
{var inst_19822 = (state_19860[10]);var inst_19828 = cljs.core.rest(inst_19822);var inst_19829 = cljs.core.first(inst_19822);var state_19860__$1 = (function (){var statearr_19880 = state_19860;(statearr_19880[12] = inst_19828);
return statearr_19880;
})();if(cljs.core.truth_(inst_19829))
{var statearr_19881_19913 = state_19860__$1;(statearr_19881_19913[1] = 16);
} else
{var statearr_19882_19914 = state_19860__$1;(statearr_19882_19914[1] = 17);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 15))
{var inst_19840 = (state_19860[2]);var state_19860__$1 = state_19860;var statearr_19883_19915 = state_19860__$1;(statearr_19883_19915[2] = inst_19840);
(statearr_19883_19915[1] = 12);
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 16))
{var inst_19822 = (state_19860[10]);var inst_19831 = cljs.core.first(inst_19822);var state_19860__$1 = state_19860;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19860__$1,19,inst_19831);
} else
{if((state_val_19861 === 17))
{var state_19860__$1 = state_19860;var statearr_19884_19916 = state_19860__$1;(statearr_19884_19916[2] = null);
(statearr_19884_19916[1] = 18);
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 18))
{var inst_19823 = (state_19860[9]);var inst_19828 = (state_19860[12]);var inst_19836 = (state_19860[2]);var inst_19837 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19823,inst_19836);var inst_19822 = inst_19828;var inst_19823__$1 = inst_19837;var state_19860__$1 = (function (){var statearr_19885 = state_19860;(statearr_19885[9] = inst_19823__$1);
(statearr_19885[10] = inst_19822);
return statearr_19885;
})();var statearr_19886_19917 = state_19860__$1;(statearr_19886_19917[2] = null);
(statearr_19886_19917[1] = 11);
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 19))
{var inst_19833 = (state_19860[2]);var state_19860__$1 = state_19860;var statearr_19887_19918 = state_19860__$1;(statearr_19887_19918[2] = inst_19833);
(statearr_19887_19918[1] = 18);
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 20))
{var inst_19818 = (state_19860[7]);var state_19860__$1 = state_19860;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19860__$1,23,inst_19818);
} else
{if((state_val_19861 === 21))
{var state_19860__$1 = state_19860;var statearr_19888_19919 = state_19860__$1;(statearr_19888_19919[2] = null);
(statearr_19888_19919[1] = 22);
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 22))
{var inst_19849 = (state_19860[2]);var state_19860__$1 = state_19860;var statearr_19889_19920 = state_19860__$1;(statearr_19889_19920[2] = inst_19849);
(statearr_19889_19920[1] = 10);
return cljs.core.constant$keyword$196;
} else
{if((state_val_19861 === 23))
{var inst_19846 = (state_19860[2]);var state_19860__$1 = state_19860;var statearr_19890_19921 = state_19860__$1;(statearr_19890_19921[2] = inst_19846);
(statearr_19890_19921[1] = 22);
return cljs.core.constant$keyword$196;
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
var state_machine__5507__auto____0 = (function (){var statearr_19894 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19894[0] = state_machine__5507__auto__);
(statearr_19894[1] = 1);
return statearr_19894;
});
var state_machine__5507__auto____1 = (function (state_19860){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19860);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19895){if((e19895 instanceof Object))
{var ex__5510__auto__ = e19895;var statearr_19896_19922 = state_19860;(statearr_19896_19922[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19860);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e19895;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__19923 = state_19860;
state_19860 = G__19923;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19860){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19897 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return (function() { 
var G__19926__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__19925 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19925,0,null);var result_handler_args = cljs.core.nthnext(vec__19925,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__19926 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19926__delegate.call(this,req_args);};
G__19926.cljs$lang$maxFixedArity = 0;
G__19926.cljs$lang$applyTo = (function (arglist__19927){
var req_args = cljs.core.seq(arglist__19927);
return G__19926__delegate(req_args);
});
G__19926.cljs$core$IFn$_invoke$arity$variadic = G__19926__delegate;
return G__19926;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19945){var state_val_19946 = (state_19945[1]);if((state_val_19946 === 2))
{var inst_19942 = (state_19945[2]);var inst_19943 = console.log(inst_19942);var state_19945__$1 = state_19945;return cljs.core.async.impl.ioc_helpers.return_chan(state_19945__$1,inst_19943);
} else
{if((state_val_19946 === 1))
{var state_19945__$1 = state_19945;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19945__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19950 = [null,null,null,null,null,null,null];(statearr_19950[0] = state_machine__5507__auto__);
(statearr_19950[1] = 1);
return statearr_19950;
});
var state_machine__5507__auto____1 = (function (state_19945){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19945);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19951){if((e19951 instanceof Object))
{var ex__5510__auto__ = e19951;var statearr_19952_19954 = state_19945;(statearr_19952_19954[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19945);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e19951;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__19955 = state_19945;
state_19945 = G__19955;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19945){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19953 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19953;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__19956){
var f = cljs.core.first(arglist__19956);
var args = cljs.core.rest(arglist__19956);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19959){var vec__19960 = p__19959;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19960,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19960,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > 0))
{return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituencies = (function constituencies(){return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies"], 0));
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/constituencies/"),cljs.core.str(id)].join(''));
});
clustermap.api.portfolio_companies_summary = (function portfolio_companies_summary(){return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/portfolio-companies-summary"], 0));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__19961){var vec__19963 = p__19961;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19963,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__19961 = null;if (arguments.length > 0) {
  p__19961 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__19961);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__19964){
var p__19961 = cljs.core.seq(arglist__19964);
return portfolio_company_sites__delegate(p__19961);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__19965){var vec__19967 = p__19965;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19967,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__19965 = null;if (arguments.length > 0) {
  p__19965 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__19965);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__19968){
var p__19965 = cljs.core.seq(arglist__19968);
return portfolio_company_locations__delegate(p__19965);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__19969){var vec__19971 = p__19969;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19971,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__19969 = null;if (arguments.length > 0) {
  p__19969 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__19969);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__19972){
var p__19969 = cljs.core.seq(arglist__19972);
return portfolio_company_stats__delegate(p__19969);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__19973){var vec__19975 = p__19973;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19975,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__19973 = null;if (arguments.length > 0) {
  p__19973 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__19973);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__19976){
var p__19973 = cljs.core.seq(arglist__19976);
return portfolio_company_site_stats__delegate(p__19973);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__19977){var vec__19979 = p__19977;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19979,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__19977 = null;if (arguments.length > 0) {
  p__19977 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__19977);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__19980){
var p__19977 = cljs.core.seq(arglist__19980);
return portfolio_company_site_account_timelines__delegate(p__19977);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__19981){var vec__19983 = p__19981;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19983,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__19981 = null;if (arguments.length > 0) {
  p__19981 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__19981);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__19984){
var p__19981 = cljs.core.seq(arglist__19984);
return portfolio_company_account_stats__delegate(p__19981);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
clustermap.api.investor_companies_summary = (function investor_companies_summary(){return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/investor-companies-summary"], 0));
});
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_index = (function() { 
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,[cljs.core.str("/api/boundaryline-collection-index/"),cljs.core.str(id)].join(''),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__19985){
var id = cljs.core.first(arglist__19985);
var opts = cljs.core.rest(arglist__19985);
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
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,[cljs.core.str("/api/boundarylines/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(tolerance)].join(''),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__19986){
var id = cljs.core.first(arglist__19986);
arglist__19986 = cljs.core.next(arglist__19986);
var tolerance = cljs.core.first(arglist__19986);
var opts = cljs.core.rest(arglist__19986);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
