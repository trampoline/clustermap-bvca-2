// Compiled by ClojureScript 0.0-2261
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
var GET__delegate = function (url,p__32736){var map__32738 = p__32736;var map__32738__$1 = ((cljs.core.seq_QMARK_(map__32738))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32738):map__32738);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32738__$1,cljs.core.constant$keyword$759);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__32738,map__32738__$1,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__32738,map__32738__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$740,true], 0));
}
});})(comm,map__32738,map__32738__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__32738,map__32738__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__32736 = null;if (arguments.length > 1) {
  p__32736 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__32736);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__32739){
var url = cljs.core.first(arglist__32739);
var p__32736 = cljs.core.rest(arglist__32739);
return GET__delegate(url,p__32736);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_32872){var state_val_32873 = (state_32872[(1)]);if((state_val_32873 === (7)))
{var inst_32830 = (state_32872[(7)]);var inst_32829 = (state_32872[(2)]);var inst_32830__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32829,(0),null);var inst_32831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32829,(1),null);var inst_32832 = cljs.core.sequential_QMARK_(inst_32830__$1);var state_32872__$1 = (function (){var statearr_32874 = state_32872;(statearr_32874[(8)] = inst_32831);
(statearr_32874[(7)] = inst_32830__$1);
return statearr_32874;
})();if(inst_32832)
{var statearr_32875_32910 = state_32872__$1;(statearr_32875_32910[(1)] = (8));
} else
{var statearr_32876_32911 = state_32872__$1;(statearr_32876_32911[(1)] = (9));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (20)))
{var inst_32830 = (state_32872[(7)]);var state_32872__$1 = state_32872;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32872__$1,(23),inst_32830);
} else
{if((state_val_32873 === (1)))
{var state_32872__$1 = state_32872;var statearr_32877_32912 = state_32872__$1;(statearr_32877_32912[(2)] = null);
(statearr_32877_32912[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (4)))
{var state_32872__$1 = state_32872;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32872__$1,(7),ocomm);
} else
{if((state_val_32873 === (15)))
{var inst_32852 = (state_32872[(2)]);var state_32872__$1 = state_32872;var statearr_32878_32913 = state_32872__$1;(statearr_32878_32913[(2)] = inst_32852);
(statearr_32878_32913[(1)] = (12));
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (21)))
{var state_32872__$1 = state_32872;var statearr_32879_32914 = state_32872__$1;(statearr_32879_32914[(2)] = null);
(statearr_32879_32914[(1)] = (22));
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (13)))
{var inst_32835 = (state_32872[(9)]);var state_32872__$1 = state_32872;var statearr_32880_32915 = state_32872__$1;(statearr_32880_32915[(2)] = inst_32835);
(statearr_32880_32915[(1)] = (15));
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (22)))
{var inst_32861 = (state_32872[(2)]);var state_32872__$1 = state_32872;var statearr_32881_32916 = state_32872__$1;(statearr_32881_32916[(2)] = inst_32861);
(statearr_32881_32916[(1)] = (10));
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (6)))
{var inst_32868 = (state_32872[(2)]);var state_32872__$1 = state_32872;var statearr_32882_32917 = state_32872__$1;(statearr_32882_32917[(2)] = inst_32868);
(statearr_32882_32917[(1)] = (3));
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (17)))
{var state_32872__$1 = state_32872;var statearr_32883_32918 = state_32872__$1;(statearr_32883_32918[(2)] = null);
(statearr_32883_32918[(1)] = (18));
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (3)))
{var inst_32870 = (state_32872[(2)]);var state_32872__$1 = state_32872;return cljs.core.async.impl.ioc_helpers.return_chan(state_32872__$1,inst_32870);
} else
{if((state_val_32873 === (12)))
{var inst_32854 = (state_32872[(2)]);var state_32872__$1 = state_32872;var statearr_32884_32919 = state_32872__$1;(statearr_32884_32919[(2)] = inst_32854);
(statearr_32884_32919[(1)] = (10));
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (2)))
{var state_32872__$1 = state_32872;if(true)
{var statearr_32885_32920 = state_32872__$1;(statearr_32885_32920[(1)] = (4));
} else
{var statearr_32886_32921 = state_32872__$1;(statearr_32886_32921[(1)] = (5));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (23)))
{var inst_32858 = (state_32872[(2)]);var state_32872__$1 = state_32872;var statearr_32887_32922 = state_32872__$1;(statearr_32887_32922[(2)] = inst_32858);
(statearr_32887_32922[(1)] = (22));
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (19)))
{var inst_32845 = (state_32872[(2)]);var state_32872__$1 = state_32872;var statearr_32888_32923 = state_32872__$1;(statearr_32888_32923[(2)] = inst_32845);
(statearr_32888_32923[(1)] = (18));
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (11)))
{var inst_32834 = (state_32872[(10)]);var inst_32837 = cljs.core.empty_QMARK_(inst_32834);var state_32872__$1 = state_32872;if(inst_32837)
{var statearr_32889_32924 = state_32872__$1;(statearr_32889_32924[(1)] = (13));
} else
{var statearr_32890_32925 = state_32872__$1;(statearr_32890_32925[(1)] = (14));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (9)))
{var inst_32830 = (state_32872[(7)]);var state_32872__$1 = state_32872;if(cljs.core.truth_(inst_32830))
{var statearr_32891_32926 = state_32872__$1;(statearr_32891_32926[(1)] = (20));
} else
{var statearr_32892_32927 = state_32872__$1;(statearr_32892_32927[(1)] = (21));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (5)))
{var state_32872__$1 = state_32872;var statearr_32893_32928 = state_32872__$1;(statearr_32893_32928[(2)] = null);
(statearr_32893_32928[(1)] = (6));
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (14)))
{var inst_32834 = (state_32872[(10)]);var inst_32840 = cljs.core.rest(inst_32834);var inst_32841 = cljs.core.first(inst_32834);var state_32872__$1 = (function (){var statearr_32894 = state_32872;(statearr_32894[(11)] = inst_32840);
return statearr_32894;
})();if(cljs.core.truth_(inst_32841))
{var statearr_32895_32929 = state_32872__$1;(statearr_32895_32929[(1)] = (16));
} else
{var statearr_32896_32930 = state_32872__$1;(statearr_32896_32930[(1)] = (17));
}
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (16)))
{var inst_32834 = (state_32872[(10)]);var inst_32843 = cljs.core.first(inst_32834);var state_32872__$1 = state_32872;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32872__$1,(19),inst_32843);
} else
{if((state_val_32873 === (10)))
{var inst_32831 = (state_32872[(8)]);var inst_32863 = (state_32872[(2)]);var inst_32864 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_32863,inst_32831);var state_32872__$1 = (function (){var statearr_32897 = state_32872;(statearr_32897[(12)] = inst_32864);
return statearr_32897;
})();var statearr_32898_32931 = state_32872__$1;(statearr_32898_32931[(2)] = null);
(statearr_32898_32931[(1)] = (2));
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (18)))
{var inst_32835 = (state_32872[(9)]);var inst_32840 = (state_32872[(11)]);var inst_32848 = (state_32872[(2)]);var inst_32849 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_32835,inst_32848);var inst_32834 = inst_32840;var inst_32835__$1 = inst_32849;var state_32872__$1 = (function (){var statearr_32899 = state_32872;(statearr_32899[(9)] = inst_32835__$1);
(statearr_32899[(10)] = inst_32834);
return statearr_32899;
})();var statearr_32900_32932 = state_32872__$1;(statearr_32900_32932[(2)] = null);
(statearr_32900_32932[(1)] = (11));
return cljs.core.constant$keyword$745;
} else
{if((state_val_32873 === (8)))
{var inst_32830 = (state_32872[(7)]);var inst_32834 = inst_32830;var inst_32835 = cljs.core.PersistentVector.EMPTY;var state_32872__$1 = (function (){var statearr_32901 = state_32872;(statearr_32901[(9)] = inst_32835);
(statearr_32901[(10)] = inst_32834);
return statearr_32901;
})();var statearr_32902_32933 = state_32872__$1;(statearr_32902_32933[(2)] = null);
(statearr_32902_32933[(1)] = (11));
return cljs.core.constant$keyword$745;
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_32906 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32906[(0)] = state_machine__5679__auto__);
(statearr_32906[(1)] = (1));
return statearr_32906;
});
var state_machine__5679__auto____1 = (function (state_32872){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_32872);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e32907){if((e32907 instanceof Object))
{var ex__5682__auto__ = e32907;var statearr_32908_32934 = state_32872;(statearr_32908_32934[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32872);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e32907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__32935 = state_32872;
state_32872 = G__32935;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_32872){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_32872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_32909 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_32909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_32909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__32938__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__32937 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32937,(0),null);var result_handler_args = cljs.core.nthnext(vec__32937,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__32938 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__32938__delegate.call(this,req_args);};
G__32938.cljs$lang$maxFixedArity = 0;
G__32938.cljs$lang$applyTo = (function (arglist__32939){
var req_args = cljs.core.seq(arglist__32939);
return G__32938__delegate(req_args);
});
G__32938.cljs$core$IFn$_invoke$arity$variadic = G__32938__delegate;
return G__32938;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,ch){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,ch){
return (function (state_32957){var state_val_32958 = (state_32957[(1)]);if((state_val_32958 === (2)))
{var inst_32954 = (state_32957[(2)]);var inst_32955 = console.log(inst_32954);var state_32957__$1 = state_32957;return cljs.core.async.impl.ioc_helpers.return_chan(state_32957__$1,inst_32955);
} else
{if((state_val_32958 === (1)))
{var state_32957__$1 = state_32957;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32957__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_32962 = [null,null,null,null,null,null,null];(statearr_32962[(0)] = state_machine__5679__auto__);
(statearr_32962[(1)] = (1));
return statearr_32962;
});
var state_machine__5679__auto____1 = (function (state_32957){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_32957);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e32963){if((e32963 instanceof Object))
{var ex__5682__auto__ = e32963;var statearr_32964_32966 = state_32957;(statearr_32964_32966[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32957);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e32963;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__32967 = state_32957;
state_32957 = G__32967;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_32957){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_32957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_32965 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_32965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_32965;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,ch))
);
return c__5693__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__32968){
var f = cljs.core.first(arglist__32968);
var args = cljs.core.rest(arglist__32968);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32971){var vec__32972 = p__32971;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32972,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32972,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var c__5693__auto___32999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___32999,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___32999,r){
return (function (state_32990){var state_val_32991 = (state_32990[(1)]);if((state_val_32991 === (2)))
{var inst_32987 = (state_32990[(2)]);var inst_32988 = cljs.core.reset_BANG_(r,inst_32987);var state_32990__$1 = state_32990;return cljs.core.async.impl.ioc_helpers.return_chan(state_32990__$1,inst_32988);
} else
{if((state_val_32991 === (1)))
{var state_32990__$1 = state_32990;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32990__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___32999,r))
;return ((function (switch__5678__auto__,c__5693__auto___32999,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_32995 = [null,null,null,null,null,null,null];(statearr_32995[(0)] = state_machine__5679__auto__);
(statearr_32995[(1)] = (1));
return statearr_32995;
});
var state_machine__5679__auto____1 = (function (state_32990){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_32990);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$745))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e32996){if((e32996 instanceof Object))
{var ex__5682__auto__ = e32996;var statearr_32997_33000 = state_32990;(statearr_32997_33000[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32990);
return cljs.core.constant$keyword$745;
} else
{if(cljs.core.constant$keyword$736)
{throw e32996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$745))
{{
var G__33001 = state_32990;
state_32990 = G__33001;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_32990){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_32990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___32999,r))
})();var state__5695__auto__ = (function (){var statearr_32998 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_32998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___32999);
return statearr_32998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___32999,r))
);
return r;
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__33002){
var id = cljs.core.first(arglist__33002);
arglist__33002 = cljs.core.next(arglist__33002);
var tolerance = cljs.core.first(arglist__33002);
var opts = cljs.core.rest(arglist__33002);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__33003){
var id = cljs.core.first(arglist__33003);
var opts = cljs.core.rest(arglist__33003);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,p__33004){var vec__33006 = p__33004;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33006,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,var_args){
var p__33004 = null;if (arguments.length > 4) {
  p__33004 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,p__33004);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 4;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__33007){
var index = cljs.core.first(arglist__33007);
arglist__33007 = cljs.core.next(arglist__33007);
var type = cljs.core.first(arglist__33007);
arglist__33007 = cljs.core.next(arglist__33007);
var blcoll = cljs.core.first(arglist__33007);
arglist__33007 = cljs.core.next(arglist__33007);
var attr = cljs.core.first(arglist__33007);
var p__33004 = cljs.core.rest(arglist__33007);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,p__33004);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > (0)))
{return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/constituencies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__33008){var vec__33010 = p__33008;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33010,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$760,(100),cljs.core.constant$keyword$761,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$762,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__33008 = null;if (arguments.length > 0) {
  p__33008 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__33008);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__33011){
var p__33008 = cljs.core.seq(arglist__33011);
return portfolio_company_sites__delegate(p__33008);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__33012){var vec__33014 = p__33012;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33014,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$760,(100),cljs.core.constant$keyword$761,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$762,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__33012 = null;if (arguments.length > 0) {
  p__33012 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__33012);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__33015){
var p__33012 = cljs.core.seq(arglist__33015);
return portfolio_company_sites_by_company__delegate(p__33012);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__33016){var vec__33018 = p__33016;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33018,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__33016 = null;if (arguments.length > 0) {
  p__33016 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__33016);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__33019){
var p__33016 = cljs.core.seq(arglist__33019);
return portfolio_company_locations__delegate(p__33016);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__33020){var vec__33022 = p__33020;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33022,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__33020 = null;if (arguments.length > 0) {
  p__33020 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__33020);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__33023){
var p__33020 = cljs.core.seq(arglist__33023);
return portfolio_company_site_stats__delegate(p__33020);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__33024){var vec__33026 = p__33024;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33026,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__33024 = null;if (arguments.length > 0) {
  p__33024 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__33024);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__33027){
var p__33024 = cljs.core.seq(arglist__33027);
return portfolio_company_site_account_timelines__delegate(p__33024);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investor-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__33028){var vec__33030 = p__33028;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33030,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_account_timelines = function (var_args){
var p__33028 = null;if (arguments.length > 0) {
  p__33028 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__33028);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__33031){
var p__33028 = cljs.core.seq(arglist__33031);
return investment_account_timelines__delegate(p__33028);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__33032){var vec__33034 = p__33032;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33034,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_stats = function (var_args){
var p__33032 = null;if (arguments.length > 0) {
  p__33032 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__33032);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__33035){
var p__33032 = cljs.core.seq(arglist__33035);
return investment_stats__delegate(p__33032);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__33036){var vec__33038 = p__33036;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33038,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$760,(50),cljs.core.constant$keyword$763,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$764,"desc"], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__33036 = null;if (arguments.length > 0) {
  p__33036 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__33036);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__33039){
var p__33036 = cljs.core.seq(arglist__33039);
return investment_aggs__delegate(p__33036);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__33040){var vec__33042 = p__33040;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33042,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$760,(50),cljs.core.constant$keyword$763,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$765,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$766,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investments = function (var_args){
var p__33040 = null;if (arguments.length > 0) {
  p__33040 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__33040);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__33043){
var p__33040 = cljs.core.seq(arglist__33043);
return investments__delegate(p__33040);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
