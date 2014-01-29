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
var GET__delegate = function (url,p__19726){var map__19728 = p__19726;var map__19728__$1 = ((cljs.core.seq_QMARK_(map__19728))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19728):map__19728);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19728__$1,cljs.core.constant$keyword$211);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$192,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__19726 = null;if (arguments.length > 1) {
  p__19726 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19726);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19729){
var url = cljs.core.first(arglist__19729);
var p__19726 = cljs.core.rest(arglist__19729);
return GET__delegate(url,p__19726);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19862){var state_val_19863 = (state_19862[1]);if((state_val_19863 === 1))
{var state_19862__$1 = state_19862;var statearr_19864_19900 = state_19862__$1;(statearr_19864_19900[2] = null);
(statearr_19864_19900[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 2))
{var state_19862__$1 = state_19862;if(true)
{var statearr_19865_19901 = state_19862__$1;(statearr_19865_19901[1] = 4);
} else
{var statearr_19866_19902 = state_19862__$1;(statearr_19866_19902[1] = 5);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 3))
{var inst_19860 = (state_19862[2]);var state_19862__$1 = state_19862;return cljs.core.async.impl.ioc_helpers.return_chan(state_19862__$1,inst_19860);
} else
{if((state_val_19863 === 4))
{var state_19862__$1 = state_19862;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19862__$1,7,ocomm);
} else
{if((state_val_19863 === 5))
{var state_19862__$1 = state_19862;var statearr_19867_19903 = state_19862__$1;(statearr_19867_19903[2] = null);
(statearr_19867_19903[1] = 6);
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 6))
{var inst_19858 = (state_19862[2]);var state_19862__$1 = state_19862;var statearr_19868_19904 = state_19862__$1;(statearr_19868_19904[2] = inst_19858);
(statearr_19868_19904[1] = 3);
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 7))
{var inst_19820 = (state_19862[7]);var inst_19819 = (state_19862[2]);var inst_19820__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19819,0,null);var inst_19821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19819,1,null);var inst_19822 = cljs.core.sequential_QMARK_(inst_19820__$1);var state_19862__$1 = (function (){var statearr_19869 = state_19862;(statearr_19869[8] = inst_19821);
(statearr_19869[7] = inst_19820__$1);
return statearr_19869;
})();if(inst_19822)
{var statearr_19870_19905 = state_19862__$1;(statearr_19870_19905[1] = 8);
} else
{var statearr_19871_19906 = state_19862__$1;(statearr_19871_19906[1] = 9);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 8))
{var inst_19820 = (state_19862[7]);var inst_19824 = inst_19820;var inst_19825 = cljs.core.PersistentVector.EMPTY;var state_19862__$1 = (function (){var statearr_19872 = state_19862;(statearr_19872[9] = inst_19825);
(statearr_19872[10] = inst_19824);
return statearr_19872;
})();var statearr_19873_19907 = state_19862__$1;(statearr_19873_19907[2] = null);
(statearr_19873_19907[1] = 11);
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 9))
{var inst_19820 = (state_19862[7]);var state_19862__$1 = state_19862;if(cljs.core.truth_(inst_19820))
{var statearr_19874_19908 = state_19862__$1;(statearr_19874_19908[1] = 20);
} else
{var statearr_19875_19909 = state_19862__$1;(statearr_19875_19909[1] = 21);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 10))
{var inst_19821 = (state_19862[8]);var inst_19853 = (state_19862[2]);var inst_19854 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_19853,inst_19821);var state_19862__$1 = (function (){var statearr_19876 = state_19862;(statearr_19876[11] = inst_19854);
return statearr_19876;
})();var statearr_19877_19910 = state_19862__$1;(statearr_19877_19910[2] = null);
(statearr_19877_19910[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 11))
{var inst_19824 = (state_19862[10]);var inst_19827 = cljs.core.empty_QMARK_(inst_19824);var state_19862__$1 = state_19862;if(inst_19827)
{var statearr_19878_19911 = state_19862__$1;(statearr_19878_19911[1] = 13);
} else
{var statearr_19879_19912 = state_19862__$1;(statearr_19879_19912[1] = 14);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 12))
{var inst_19844 = (state_19862[2]);var state_19862__$1 = state_19862;var statearr_19880_19913 = state_19862__$1;(statearr_19880_19913[2] = inst_19844);
(statearr_19880_19913[1] = 10);
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 13))
{var inst_19825 = (state_19862[9]);var state_19862__$1 = state_19862;var statearr_19881_19914 = state_19862__$1;(statearr_19881_19914[2] = inst_19825);
(statearr_19881_19914[1] = 15);
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 14))
{var inst_19824 = (state_19862[10]);var inst_19830 = cljs.core.rest(inst_19824);var inst_19831 = cljs.core.first(inst_19824);var state_19862__$1 = (function (){var statearr_19882 = state_19862;(statearr_19882[12] = inst_19830);
return statearr_19882;
})();if(cljs.core.truth_(inst_19831))
{var statearr_19883_19915 = state_19862__$1;(statearr_19883_19915[1] = 16);
} else
{var statearr_19884_19916 = state_19862__$1;(statearr_19884_19916[1] = 17);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 15))
{var inst_19842 = (state_19862[2]);var state_19862__$1 = state_19862;var statearr_19885_19917 = state_19862__$1;(statearr_19885_19917[2] = inst_19842);
(statearr_19885_19917[1] = 12);
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 16))
{var inst_19824 = (state_19862[10]);var inst_19833 = cljs.core.first(inst_19824);var state_19862__$1 = state_19862;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19862__$1,19,inst_19833);
} else
{if((state_val_19863 === 17))
{var state_19862__$1 = state_19862;var statearr_19886_19918 = state_19862__$1;(statearr_19886_19918[2] = null);
(statearr_19886_19918[1] = 18);
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 18))
{var inst_19825 = (state_19862[9]);var inst_19830 = (state_19862[12]);var inst_19838 = (state_19862[2]);var inst_19839 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19825,inst_19838);var inst_19824 = inst_19830;var inst_19825__$1 = inst_19839;var state_19862__$1 = (function (){var statearr_19887 = state_19862;(statearr_19887[9] = inst_19825__$1);
(statearr_19887[10] = inst_19824);
return statearr_19887;
})();var statearr_19888_19919 = state_19862__$1;(statearr_19888_19919[2] = null);
(statearr_19888_19919[1] = 11);
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 19))
{var inst_19835 = (state_19862[2]);var state_19862__$1 = state_19862;var statearr_19889_19920 = state_19862__$1;(statearr_19889_19920[2] = inst_19835);
(statearr_19889_19920[1] = 18);
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 20))
{var inst_19820 = (state_19862[7]);var state_19862__$1 = state_19862;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19862__$1,23,inst_19820);
} else
{if((state_val_19863 === 21))
{var state_19862__$1 = state_19862;var statearr_19890_19921 = state_19862__$1;(statearr_19890_19921[2] = null);
(statearr_19890_19921[1] = 22);
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 22))
{var inst_19851 = (state_19862[2]);var state_19862__$1 = state_19862;var statearr_19891_19922 = state_19862__$1;(statearr_19891_19922[2] = inst_19851);
(statearr_19891_19922[1] = 10);
return cljs.core.constant$keyword$197;
} else
{if((state_val_19863 === 23))
{var inst_19848 = (state_19862[2]);var state_19862__$1 = state_19862;var statearr_19892_19923 = state_19862__$1;(statearr_19892_19923[2] = inst_19848);
(statearr_19892_19923[1] = 22);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_19896 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19896[0] = state_machine__5507__auto__);
(statearr_19896[1] = 1);
return statearr_19896;
});
var state_machine__5507__auto____1 = (function (state_19862){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19862);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19897){if((e19897 instanceof Object))
{var ex__5510__auto__ = e19897;var statearr_19898_19924 = state_19862;(statearr_19898_19924[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19862);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e19897;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__19925 = state_19862;
state_19862 = G__19925;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19862){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19899 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19899;
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
var G__19928__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__19927 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19927,0,null);var result_handler_args = cljs.core.nthnext(vec__19927,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__19928 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19928__delegate.call(this,req_args);};
G__19928.cljs$lang$maxFixedArity = 0;
G__19928.cljs$lang$applyTo = (function (arglist__19929){
var req_args = cljs.core.seq(arglist__19929);
return G__19928__delegate(req_args);
});
G__19928.cljs$core$IFn$_invoke$arity$variadic = G__19928__delegate;
return G__19928;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19947){var state_val_19948 = (state_19947[1]);if((state_val_19948 === 2))
{var inst_19944 = (state_19947[2]);var inst_19945 = console.log(inst_19944);var state_19947__$1 = state_19947;return cljs.core.async.impl.ioc_helpers.return_chan(state_19947__$1,inst_19945);
} else
{if((state_val_19948 === 1))
{var state_19947__$1 = state_19947;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19947__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19952 = [null,null,null,null,null,null,null];(statearr_19952[0] = state_machine__5507__auto__);
(statearr_19952[1] = 1);
return statearr_19952;
});
var state_machine__5507__auto____1 = (function (state_19947){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19947);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19953){if((e19953 instanceof Object))
{var ex__5510__auto__ = e19953;var statearr_19954_19956 = state_19947;(statearr_19954_19956[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19947);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e19953;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__19957 = state_19947;
state_19947 = G__19957;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19947){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19955 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19955;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__19958){
var f = cljs.core.first(arglist__19958);
var args = cljs.core.rest(arglist__19958);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19961){var vec__19962 = p__19961;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19962,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19962,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
var portfolio_company_sites__delegate = function (p__19963){var vec__19965 = p__19963;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19965,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__19963 = null;if (arguments.length > 0) {
  p__19963 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__19963);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__19966){
var p__19963 = cljs.core.seq(arglist__19966);
return portfolio_company_sites__delegate(p__19963);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__19967){var vec__19969 = p__19967;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19969,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__19967 = null;if (arguments.length > 0) {
  p__19967 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__19967);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__19970){
var p__19967 = cljs.core.seq(arglist__19970);
return portfolio_company_locations__delegate(p__19967);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__19971){var vec__19973 = p__19971;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19973,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__19971 = null;if (arguments.length > 0) {
  p__19971 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__19971);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__19974){
var p__19971 = cljs.core.seq(arglist__19974);
return portfolio_company_stats__delegate(p__19971);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__19975){var vec__19977 = p__19975;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19977,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__19975 = null;if (arguments.length > 0) {
  p__19975 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__19975);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__19978){
var p__19975 = cljs.core.seq(arglist__19978);
return portfolio_company_site_stats__delegate(p__19975);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__19979){var vec__19981 = p__19979;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19981,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__19979 = null;if (arguments.length > 0) {
  p__19979 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__19979);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__19982){
var p__19979 = cljs.core.seq(arglist__19982);
return portfolio_company_site_account_timelines__delegate(p__19979);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__19983){var vec__19985 = p__19983;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19985,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__19983 = null;if (arguments.length > 0) {
  p__19983 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__19983);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__19986){
var p__19983 = cljs.core.seq(arglist__19986);
return portfolio_company_account_stats__delegate(p__19983);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__19987){
var id = cljs.core.first(arglist__19987);
var opts = cljs.core.rest(arglist__19987);
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
boundarylines.cljs$lang$applyTo = (function (arglist__19988){
var id = cljs.core.first(arglist__19988);
arglist__19988 = cljs.core.next(arglist__19988);
var tolerance = cljs.core.first(arglist__19988);
var opts = cljs.core.rest(arglist__19988);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
