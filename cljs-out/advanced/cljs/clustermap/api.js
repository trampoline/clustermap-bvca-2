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
var GET__delegate = function (url,p__19743){var map__19745 = p__19743;var map__19745__$1 = ((cljs.core.seq_QMARK_(map__19745))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19745):map__19745);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19745__$1,cljs.core.constant$keyword$214);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$195,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__19743 = null;if (arguments.length > 1) {
  p__19743 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19743);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19746){
var url = cljs.core.first(arglist__19746);
var p__19743 = cljs.core.rest(arglist__19746);
return GET__delegate(url,p__19743);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19879){var state_val_19880 = (state_19879[1]);if((state_val_19880 === 1))
{var state_19879__$1 = state_19879;var statearr_19881_19917 = state_19879__$1;(statearr_19881_19917[2] = null);
(statearr_19881_19917[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 2))
{var state_19879__$1 = state_19879;if(true)
{var statearr_19882_19918 = state_19879__$1;(statearr_19882_19918[1] = 4);
} else
{var statearr_19883_19919 = state_19879__$1;(statearr_19883_19919[1] = 5);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 3))
{var inst_19877 = (state_19879[2]);var state_19879__$1 = state_19879;return cljs.core.async.impl.ioc_helpers.return_chan(state_19879__$1,inst_19877);
} else
{if((state_val_19880 === 4))
{var state_19879__$1 = state_19879;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19879__$1,7,ocomm);
} else
{if((state_val_19880 === 5))
{var state_19879__$1 = state_19879;var statearr_19884_19920 = state_19879__$1;(statearr_19884_19920[2] = null);
(statearr_19884_19920[1] = 6);
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 6))
{var inst_19875 = (state_19879[2]);var state_19879__$1 = state_19879;var statearr_19885_19921 = state_19879__$1;(statearr_19885_19921[2] = inst_19875);
(statearr_19885_19921[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 7))
{var inst_19837 = (state_19879[7]);var inst_19836 = (state_19879[2]);var inst_19837__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19836,0,null);var inst_19838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19836,1,null);var inst_19839 = cljs.core.sequential_QMARK_(inst_19837__$1);var state_19879__$1 = (function (){var statearr_19886 = state_19879;(statearr_19886[8] = inst_19838);
(statearr_19886[7] = inst_19837__$1);
return statearr_19886;
})();if(inst_19839)
{var statearr_19887_19922 = state_19879__$1;(statearr_19887_19922[1] = 8);
} else
{var statearr_19888_19923 = state_19879__$1;(statearr_19888_19923[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 8))
{var inst_19837 = (state_19879[7]);var inst_19841 = inst_19837;var inst_19842 = cljs.core.PersistentVector.EMPTY;var state_19879__$1 = (function (){var statearr_19889 = state_19879;(statearr_19889[9] = inst_19841);
(statearr_19889[10] = inst_19842);
return statearr_19889;
})();var statearr_19890_19924 = state_19879__$1;(statearr_19890_19924[2] = null);
(statearr_19890_19924[1] = 11);
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 9))
{var inst_19837 = (state_19879[7]);var state_19879__$1 = state_19879;if(cljs.core.truth_(inst_19837))
{var statearr_19891_19925 = state_19879__$1;(statearr_19891_19925[1] = 20);
} else
{var statearr_19892_19926 = state_19879__$1;(statearr_19892_19926[1] = 21);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 10))
{var inst_19838 = (state_19879[8]);var inst_19870 = (state_19879[2]);var inst_19871 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_19870,inst_19838);var state_19879__$1 = (function (){var statearr_19893 = state_19879;(statearr_19893[11] = inst_19871);
return statearr_19893;
})();var statearr_19894_19927 = state_19879__$1;(statearr_19894_19927[2] = null);
(statearr_19894_19927[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 11))
{var inst_19841 = (state_19879[9]);var inst_19844 = cljs.core.empty_QMARK_(inst_19841);var state_19879__$1 = state_19879;if(inst_19844)
{var statearr_19895_19928 = state_19879__$1;(statearr_19895_19928[1] = 13);
} else
{var statearr_19896_19929 = state_19879__$1;(statearr_19896_19929[1] = 14);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 12))
{var inst_19861 = (state_19879[2]);var state_19879__$1 = state_19879;var statearr_19897_19930 = state_19879__$1;(statearr_19897_19930[2] = inst_19861);
(statearr_19897_19930[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 13))
{var inst_19842 = (state_19879[10]);var state_19879__$1 = state_19879;var statearr_19898_19931 = state_19879__$1;(statearr_19898_19931[2] = inst_19842);
(statearr_19898_19931[1] = 15);
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 14))
{var inst_19841 = (state_19879[9]);var inst_19847 = cljs.core.rest(inst_19841);var inst_19848 = cljs.core.first(inst_19841);var state_19879__$1 = (function (){var statearr_19899 = state_19879;(statearr_19899[12] = inst_19847);
return statearr_19899;
})();if(cljs.core.truth_(inst_19848))
{var statearr_19900_19932 = state_19879__$1;(statearr_19900_19932[1] = 16);
} else
{var statearr_19901_19933 = state_19879__$1;(statearr_19901_19933[1] = 17);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 15))
{var inst_19859 = (state_19879[2]);var state_19879__$1 = state_19879;var statearr_19902_19934 = state_19879__$1;(statearr_19902_19934[2] = inst_19859);
(statearr_19902_19934[1] = 12);
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 16))
{var inst_19841 = (state_19879[9]);var inst_19850 = cljs.core.first(inst_19841);var state_19879__$1 = state_19879;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19879__$1,19,inst_19850);
} else
{if((state_val_19880 === 17))
{var state_19879__$1 = state_19879;var statearr_19903_19935 = state_19879__$1;(statearr_19903_19935[2] = null);
(statearr_19903_19935[1] = 18);
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 18))
{var inst_19847 = (state_19879[12]);var inst_19842 = (state_19879[10]);var inst_19855 = (state_19879[2]);var inst_19856 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19842,inst_19855);var inst_19841 = inst_19847;var inst_19842__$1 = inst_19856;var state_19879__$1 = (function (){var statearr_19904 = state_19879;(statearr_19904[9] = inst_19841);
(statearr_19904[10] = inst_19842__$1);
return statearr_19904;
})();var statearr_19905_19936 = state_19879__$1;(statearr_19905_19936[2] = null);
(statearr_19905_19936[1] = 11);
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 19))
{var inst_19852 = (state_19879[2]);var state_19879__$1 = state_19879;var statearr_19906_19937 = state_19879__$1;(statearr_19906_19937[2] = inst_19852);
(statearr_19906_19937[1] = 18);
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 20))
{var inst_19837 = (state_19879[7]);var state_19879__$1 = state_19879;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19879__$1,23,inst_19837);
} else
{if((state_val_19880 === 21))
{var state_19879__$1 = state_19879;var statearr_19907_19938 = state_19879__$1;(statearr_19907_19938[2] = null);
(statearr_19907_19938[1] = 22);
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 22))
{var inst_19868 = (state_19879[2]);var state_19879__$1 = state_19879;var statearr_19908_19939 = state_19879__$1;(statearr_19908_19939[2] = inst_19868);
(statearr_19908_19939[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_19880 === 23))
{var inst_19865 = (state_19879[2]);var state_19879__$1 = state_19879;var statearr_19909_19940 = state_19879__$1;(statearr_19909_19940[2] = inst_19865);
(statearr_19909_19940[1] = 22);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_19913 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19913[0] = state_machine__5507__auto__);
(statearr_19913[1] = 1);
return statearr_19913;
});
var state_machine__5507__auto____1 = (function (state_19879){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19879);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19914){if((e19914 instanceof Object))
{var ex__5510__auto__ = e19914;var statearr_19915_19941 = state_19879;(statearr_19915_19941[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19879);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e19914;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__19942 = state_19879;
state_19879 = G__19942;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19879){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19916 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19916;
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
var G__19945__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__19944 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19944,0,null);var result_handler_args = cljs.core.nthnext(vec__19944,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__19945 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19945__delegate.call(this,req_args);};
G__19945.cljs$lang$maxFixedArity = 0;
G__19945.cljs$lang$applyTo = (function (arglist__19946){
var req_args = cljs.core.seq(arglist__19946);
return G__19945__delegate(req_args);
});
G__19945.cljs$core$IFn$_invoke$arity$variadic = G__19945__delegate;
return G__19945;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19964){var state_val_19965 = (state_19964[1]);if((state_val_19965 === 2))
{var inst_19961 = (state_19964[2]);var inst_19962 = console.log(inst_19961);var state_19964__$1 = state_19964;return cljs.core.async.impl.ioc_helpers.return_chan(state_19964__$1,inst_19962);
} else
{if((state_val_19965 === 1))
{var state_19964__$1 = state_19964;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19964__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19969 = [null,null,null,null,null,null,null];(statearr_19969[0] = state_machine__5507__auto__);
(statearr_19969[1] = 1);
return statearr_19969;
});
var state_machine__5507__auto____1 = (function (state_19964){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19964);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19970){if((e19970 instanceof Object))
{var ex__5510__auto__ = e19970;var statearr_19971_19973 = state_19964;(statearr_19971_19973[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19964);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e19970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__19974 = state_19964;
state_19964 = G__19974;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19964){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19972 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__19975){
var f = cljs.core.first(arglist__19975);
var args = cljs.core.rest(arglist__19975);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19978){var vec__19979 = p__19978;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19979,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19979,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
var portfolio_company_sites__delegate = function (p__19980){var vec__19982 = p__19980;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19982,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__19980 = null;if (arguments.length > 0) {
  p__19980 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__19980);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__19983){
var p__19980 = cljs.core.seq(arglist__19983);
return portfolio_company_sites__delegate(p__19980);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__19984){var vec__19986 = p__19984;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19986,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__19984 = null;if (arguments.length > 0) {
  p__19984 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__19984);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__19987){
var p__19984 = cljs.core.seq(arglist__19987);
return portfolio_company_locations__delegate(p__19984);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__19988){var vec__19990 = p__19988;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19990,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__19988 = null;if (arguments.length > 0) {
  p__19988 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__19988);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__19991){
var p__19988 = cljs.core.seq(arglist__19991);
return portfolio_company_stats__delegate(p__19988);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__19992){var vec__19994 = p__19992;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19994,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__19992 = null;if (arguments.length > 0) {
  p__19992 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__19992);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__19995){
var p__19992 = cljs.core.seq(arglist__19995);
return portfolio_company_site_stats__delegate(p__19992);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__19996){var vec__19998 = p__19996;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19998,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__19996 = null;if (arguments.length > 0) {
  p__19996 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__19996);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__19999){
var p__19996 = cljs.core.seq(arglist__19999);
return portfolio_company_site_account_timelines__delegate(p__19996);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20000){var vec__20002 = p__20000;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20002,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20000 = null;if (arguments.length > 0) {
  p__20000 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20000);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20003){
var p__20000 = cljs.core.seq(arglist__20003);
return portfolio_company_account_stats__delegate(p__20000);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20004){
var id = cljs.core.first(arglist__20004);
var opts = cljs.core.rest(arglist__20004);
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
boundarylines.cljs$lang$applyTo = (function (arglist__20005){
var id = cljs.core.first(arglist__20005);
arglist__20005 = cljs.core.next(arglist__20005);
var tolerance = cljs.core.first(arglist__20005);
var opts = cljs.core.rest(arglist__20005);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
