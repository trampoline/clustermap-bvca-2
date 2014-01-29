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
var GET__delegate = function (url,p__19713){var map__19715 = p__19713;var map__19715__$1 = ((cljs.core.seq_QMARK_(map__19715))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19715):map__19715);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19715__$1,cljs.core.constant$keyword$212);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$193,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__19713 = null;if (arguments.length > 1) {
  p__19713 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19713);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19716){
var url = cljs.core.first(arglist__19716);
var p__19713 = cljs.core.rest(arglist__19716);
return GET__delegate(url,p__19713);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19849){var state_val_19850 = (state_19849[1]);if((state_val_19850 === 1))
{var state_19849__$1 = state_19849;var statearr_19851_19887 = state_19849__$1;(statearr_19851_19887[2] = null);
(statearr_19851_19887[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 2))
{var state_19849__$1 = state_19849;if(true)
{var statearr_19852_19888 = state_19849__$1;(statearr_19852_19888[1] = 4);
} else
{var statearr_19853_19889 = state_19849__$1;(statearr_19853_19889[1] = 5);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 3))
{var inst_19847 = (state_19849[2]);var state_19849__$1 = state_19849;return cljs.core.async.impl.ioc_helpers.return_chan(state_19849__$1,inst_19847);
} else
{if((state_val_19850 === 4))
{var state_19849__$1 = state_19849;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19849__$1,7,ocomm);
} else
{if((state_val_19850 === 5))
{var state_19849__$1 = state_19849;var statearr_19854_19890 = state_19849__$1;(statearr_19854_19890[2] = null);
(statearr_19854_19890[1] = 6);
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 6))
{var inst_19845 = (state_19849[2]);var state_19849__$1 = state_19849;var statearr_19855_19891 = state_19849__$1;(statearr_19855_19891[2] = inst_19845);
(statearr_19855_19891[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 7))
{var inst_19807 = (state_19849[7]);var inst_19806 = (state_19849[2]);var inst_19807__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19806,0,null);var inst_19808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19806,1,null);var inst_19809 = cljs.core.sequential_QMARK_(inst_19807__$1);var state_19849__$1 = (function (){var statearr_19856 = state_19849;(statearr_19856[7] = inst_19807__$1);
(statearr_19856[8] = inst_19808);
return statearr_19856;
})();if(inst_19809)
{var statearr_19857_19892 = state_19849__$1;(statearr_19857_19892[1] = 8);
} else
{var statearr_19858_19893 = state_19849__$1;(statearr_19858_19893[1] = 9);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 8))
{var inst_19807 = (state_19849[7]);var inst_19811 = inst_19807;var inst_19812 = cljs.core.PersistentVector.EMPTY;var state_19849__$1 = (function (){var statearr_19859 = state_19849;(statearr_19859[9] = inst_19811);
(statearr_19859[10] = inst_19812);
return statearr_19859;
})();var statearr_19860_19894 = state_19849__$1;(statearr_19860_19894[2] = null);
(statearr_19860_19894[1] = 11);
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 9))
{var inst_19807 = (state_19849[7]);var state_19849__$1 = state_19849;if(cljs.core.truth_(inst_19807))
{var statearr_19861_19895 = state_19849__$1;(statearr_19861_19895[1] = 20);
} else
{var statearr_19862_19896 = state_19849__$1;(statearr_19862_19896[1] = 21);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 10))
{var inst_19808 = (state_19849[8]);var inst_19840 = (state_19849[2]);var inst_19841 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_19840,inst_19808);var state_19849__$1 = (function (){var statearr_19863 = state_19849;(statearr_19863[11] = inst_19841);
return statearr_19863;
})();var statearr_19864_19897 = state_19849__$1;(statearr_19864_19897[2] = null);
(statearr_19864_19897[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 11))
{var inst_19811 = (state_19849[9]);var inst_19814 = cljs.core.empty_QMARK_(inst_19811);var state_19849__$1 = state_19849;if(inst_19814)
{var statearr_19865_19898 = state_19849__$1;(statearr_19865_19898[1] = 13);
} else
{var statearr_19866_19899 = state_19849__$1;(statearr_19866_19899[1] = 14);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 12))
{var inst_19831 = (state_19849[2]);var state_19849__$1 = state_19849;var statearr_19867_19900 = state_19849__$1;(statearr_19867_19900[2] = inst_19831);
(statearr_19867_19900[1] = 10);
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 13))
{var inst_19812 = (state_19849[10]);var state_19849__$1 = state_19849;var statearr_19868_19901 = state_19849__$1;(statearr_19868_19901[2] = inst_19812);
(statearr_19868_19901[1] = 15);
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 14))
{var inst_19811 = (state_19849[9]);var inst_19817 = cljs.core.rest(inst_19811);var inst_19818 = cljs.core.first(inst_19811);var state_19849__$1 = (function (){var statearr_19869 = state_19849;(statearr_19869[12] = inst_19817);
return statearr_19869;
})();if(cljs.core.truth_(inst_19818))
{var statearr_19870_19902 = state_19849__$1;(statearr_19870_19902[1] = 16);
} else
{var statearr_19871_19903 = state_19849__$1;(statearr_19871_19903[1] = 17);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 15))
{var inst_19829 = (state_19849[2]);var state_19849__$1 = state_19849;var statearr_19872_19904 = state_19849__$1;(statearr_19872_19904[2] = inst_19829);
(statearr_19872_19904[1] = 12);
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 16))
{var inst_19811 = (state_19849[9]);var inst_19820 = cljs.core.first(inst_19811);var state_19849__$1 = state_19849;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19849__$1,19,inst_19820);
} else
{if((state_val_19850 === 17))
{var state_19849__$1 = state_19849;var statearr_19873_19905 = state_19849__$1;(statearr_19873_19905[2] = null);
(statearr_19873_19905[1] = 18);
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 18))
{var inst_19817 = (state_19849[12]);var inst_19812 = (state_19849[10]);var inst_19825 = (state_19849[2]);var inst_19826 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19812,inst_19825);var inst_19811 = inst_19817;var inst_19812__$1 = inst_19826;var state_19849__$1 = (function (){var statearr_19874 = state_19849;(statearr_19874[9] = inst_19811);
(statearr_19874[10] = inst_19812__$1);
return statearr_19874;
})();var statearr_19875_19906 = state_19849__$1;(statearr_19875_19906[2] = null);
(statearr_19875_19906[1] = 11);
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 19))
{var inst_19822 = (state_19849[2]);var state_19849__$1 = state_19849;var statearr_19876_19907 = state_19849__$1;(statearr_19876_19907[2] = inst_19822);
(statearr_19876_19907[1] = 18);
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 20))
{var inst_19807 = (state_19849[7]);var state_19849__$1 = state_19849;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19849__$1,23,inst_19807);
} else
{if((state_val_19850 === 21))
{var state_19849__$1 = state_19849;var statearr_19877_19908 = state_19849__$1;(statearr_19877_19908[2] = null);
(statearr_19877_19908[1] = 22);
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 22))
{var inst_19838 = (state_19849[2]);var state_19849__$1 = state_19849;var statearr_19878_19909 = state_19849__$1;(statearr_19878_19909[2] = inst_19838);
(statearr_19878_19909[1] = 10);
return cljs.core.constant$keyword$198;
} else
{if((state_val_19850 === 23))
{var inst_19835 = (state_19849[2]);var state_19849__$1 = state_19849;var statearr_19879_19910 = state_19849__$1;(statearr_19879_19910[2] = inst_19835);
(statearr_19879_19910[1] = 22);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_19883 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19883[0] = state_machine__5507__auto__);
(statearr_19883[1] = 1);
return statearr_19883;
});
var state_machine__5507__auto____1 = (function (state_19849){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19849);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19884){if((e19884 instanceof Object))
{var ex__5510__auto__ = e19884;var statearr_19885_19911 = state_19849;(statearr_19885_19911[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19849);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e19884;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__19912 = state_19849;
state_19849 = G__19912;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19849){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19886 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19886;
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
var G__19915__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__19914 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19914,0,null);var result_handler_args = cljs.core.nthnext(vec__19914,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__19915 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19915__delegate.call(this,req_args);};
G__19915.cljs$lang$maxFixedArity = 0;
G__19915.cljs$lang$applyTo = (function (arglist__19916){
var req_args = cljs.core.seq(arglist__19916);
return G__19915__delegate(req_args);
});
G__19915.cljs$core$IFn$_invoke$arity$variadic = G__19915__delegate;
return G__19915;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19934){var state_val_19935 = (state_19934[1]);if((state_val_19935 === 2))
{var inst_19931 = (state_19934[2]);var inst_19932 = console.log(inst_19931);var state_19934__$1 = state_19934;return cljs.core.async.impl.ioc_helpers.return_chan(state_19934__$1,inst_19932);
} else
{if((state_val_19935 === 1))
{var state_19934__$1 = state_19934;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19934__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19939 = [null,null,null,null,null,null,null];(statearr_19939[0] = state_machine__5507__auto__);
(statearr_19939[1] = 1);
return statearr_19939;
});
var state_machine__5507__auto____1 = (function (state_19934){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19934);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19940){if((e19940 instanceof Object))
{var ex__5510__auto__ = e19940;var statearr_19941_19943 = state_19934;(statearr_19941_19943[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19934);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e19940;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__19944 = state_19934;
state_19934 = G__19944;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19934){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19942 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__19945){
var f = cljs.core.first(arglist__19945);
var args = cljs.core.rest(arglist__19945);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19948){var vec__19949 = p__19948;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19949,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19949,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
var portfolio_company_sites__delegate = function (p__19950){var vec__19952 = p__19950;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19952,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__19950 = null;if (arguments.length > 0) {
  p__19950 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__19950);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__19953){
var p__19950 = cljs.core.seq(arglist__19953);
return portfolio_company_sites__delegate(p__19950);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__19954){var vec__19956 = p__19954;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19956,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__19954 = null;if (arguments.length > 0) {
  p__19954 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__19954);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__19957){
var p__19954 = cljs.core.seq(arglist__19957);
return portfolio_company_locations__delegate(p__19954);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__19958){var vec__19960 = p__19958;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19960,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__19958 = null;if (arguments.length > 0) {
  p__19958 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__19958);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__19961){
var p__19958 = cljs.core.seq(arglist__19961);
return portfolio_company_stats__delegate(p__19958);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__19962){var vec__19964 = p__19962;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19964,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__19962 = null;if (arguments.length > 0) {
  p__19962 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__19962);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__19965){
var p__19962 = cljs.core.seq(arglist__19965);
return portfolio_company_site_stats__delegate(p__19962);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__19966){var vec__19968 = p__19966;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19968,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__19966 = null;if (arguments.length > 0) {
  p__19966 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__19966);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__19969){
var p__19966 = cljs.core.seq(arglist__19969);
return portfolio_company_site_account_timelines__delegate(p__19966);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__19970){var vec__19972 = p__19970;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19972,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__19970 = null;if (arguments.length > 0) {
  p__19970 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__19970);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__19973){
var p__19970 = cljs.core.seq(arglist__19973);
return portfolio_company_account_stats__delegate(p__19970);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__19974){
var id = cljs.core.first(arglist__19974);
var opts = cljs.core.rest(arglist__19974);
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
boundarylines.cljs$lang$applyTo = (function (arglist__19975){
var id = cljs.core.first(arglist__19975);
arglist__19975 = cljs.core.next(arglist__19975);
var tolerance = cljs.core.first(arglist__19975);
var opts = cljs.core.rest(arglist__19975);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
