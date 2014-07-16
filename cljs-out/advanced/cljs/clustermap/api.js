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
clustermap.api.AJAX = (function() { 
var AJAX__delegate = function (url,p__33758){var map__33762 = p__33758;var map__33762__$1 = ((cljs.core.seq_QMARK_(map__33762))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33762):map__33762);var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33762__$1,cljs.core.constant$keyword$781);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33762__$1,cljs.core.constant$keyword$782);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33762__$1,cljs.core.constant$keyword$783);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__33762,map__33762__$1,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__33762,map__33762__$1,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$762,true], 0));
}
});})(comm,map__33762,map__33762__$1,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__33762,map__33762__$1,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__33764 = method;var G__33764__$1 = (((G__33764 == null))?null:cljs.core.name(G__33764));var G__33764__$2 = (((G__33764__$1 == null))?null:clojure.string.upper_case(G__33764__$1));return G__33764__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__33758 = null;if (arguments.length > 1) {
  p__33758 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__33758);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__33765){
var url = cljs.core.first(arglist__33765);
var p__33758 = cljs.core.rest(arglist__33765);
return AJAX__delegate(url,p__33758);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__33766){var map__33768 = p__33766;var map__33768__$1 = ((cljs.core.seq_QMARK_(map__33768))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33768):map__33768);var opts = map__33768__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$782,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__33766 = null;if (arguments.length > 1) {
  p__33766 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__33766);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__33769){
var url = cljs.core.first(arglist__33769);
var p__33766 = cljs.core.rest(arglist__33769);
return GET__delegate(url,p__33766);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__33770){var map__33772 = p__33770;var map__33772__$1 = ((cljs.core.seq_QMARK_(map__33772))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33772):map__33772);var opts = map__33772__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$782,"POST",cljs.core.constant$keyword$781,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__33770 = null;if (arguments.length > 2) {
  p__33770 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__33770);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__33773){
var url = cljs.core.first(arglist__33773);
arglist__33773 = cljs.core.next(arglist__33773);
var content = cljs.core.first(arglist__33773);
var p__33770 = cljs.core.rest(arglist__33773);
return POST__delegate(url,content,p__33770);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__33774){var map__33776 = p__33774;var map__33776__$1 = ((cljs.core.seq_QMARK_(map__33776))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33776):map__33776);var opts = map__33776__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$782,"PUT",cljs.core.constant$keyword$781,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__33774 = null;if (arguments.length > 2) {
  p__33774 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__33774);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__33777){
var url = cljs.core.first(arglist__33777);
arglist__33777 = cljs.core.next(arglist__33777);
var content = cljs.core.first(arglist__33777);
var p__33774 = cljs.core.rest(arglist__33777);
return PUT__delegate(url,content,p__33774);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
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
return (function (state_33910){var state_val_33911 = (state_33910[(1)]);if((state_val_33911 === (7)))
{var inst_33868 = (state_33910[(7)]);var inst_33867 = (state_33910[(2)]);var inst_33868__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33867,(0),null);var inst_33869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33867,(1),null);var inst_33870 = cljs.core.sequential_QMARK_(inst_33868__$1);var state_33910__$1 = (function (){var statearr_33912 = state_33910;(statearr_33912[(8)] = inst_33869);
(statearr_33912[(7)] = inst_33868__$1);
return statearr_33912;
})();if(inst_33870)
{var statearr_33913_33948 = state_33910__$1;(statearr_33913_33948[(1)] = (8));
} else
{var statearr_33914_33949 = state_33910__$1;(statearr_33914_33949[(1)] = (9));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (20)))
{var inst_33868 = (state_33910[(7)]);var state_33910__$1 = state_33910;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33910__$1,(23),inst_33868);
} else
{if((state_val_33911 === (1)))
{var state_33910__$1 = state_33910;var statearr_33915_33950 = state_33910__$1;(statearr_33915_33950[(2)] = null);
(statearr_33915_33950[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (4)))
{var state_33910__$1 = state_33910;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33910__$1,(7),ocomm);
} else
{if((state_val_33911 === (15)))
{var inst_33890 = (state_33910[(2)]);var state_33910__$1 = state_33910;var statearr_33916_33951 = state_33910__$1;(statearr_33916_33951[(2)] = inst_33890);
(statearr_33916_33951[(1)] = (12));
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (21)))
{var state_33910__$1 = state_33910;var statearr_33917_33952 = state_33910__$1;(statearr_33917_33952[(2)] = null);
(statearr_33917_33952[(1)] = (22));
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (13)))
{var inst_33873 = (state_33910[(9)]);var state_33910__$1 = state_33910;var statearr_33918_33953 = state_33910__$1;(statearr_33918_33953[(2)] = inst_33873);
(statearr_33918_33953[(1)] = (15));
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (22)))
{var inst_33899 = (state_33910[(2)]);var state_33910__$1 = state_33910;var statearr_33919_33954 = state_33910__$1;(statearr_33919_33954[(2)] = inst_33899);
(statearr_33919_33954[(1)] = (10));
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (6)))
{var inst_33906 = (state_33910[(2)]);var state_33910__$1 = state_33910;var statearr_33920_33955 = state_33910__$1;(statearr_33920_33955[(2)] = inst_33906);
(statearr_33920_33955[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (17)))
{var state_33910__$1 = state_33910;var statearr_33921_33956 = state_33910__$1;(statearr_33921_33956[(2)] = null);
(statearr_33921_33956[(1)] = (18));
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (3)))
{var inst_33908 = (state_33910[(2)]);var state_33910__$1 = state_33910;return cljs.core.async.impl.ioc_helpers.return_chan(state_33910__$1,inst_33908);
} else
{if((state_val_33911 === (12)))
{var inst_33892 = (state_33910[(2)]);var state_33910__$1 = state_33910;var statearr_33922_33957 = state_33910__$1;(statearr_33922_33957[(2)] = inst_33892);
(statearr_33922_33957[(1)] = (10));
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (2)))
{var state_33910__$1 = state_33910;if(true)
{var statearr_33923_33958 = state_33910__$1;(statearr_33923_33958[(1)] = (4));
} else
{var statearr_33924_33959 = state_33910__$1;(statearr_33924_33959[(1)] = (5));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (23)))
{var inst_33896 = (state_33910[(2)]);var state_33910__$1 = state_33910;var statearr_33925_33960 = state_33910__$1;(statearr_33925_33960[(2)] = inst_33896);
(statearr_33925_33960[(1)] = (22));
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (19)))
{var inst_33883 = (state_33910[(2)]);var state_33910__$1 = state_33910;var statearr_33926_33961 = state_33910__$1;(statearr_33926_33961[(2)] = inst_33883);
(statearr_33926_33961[(1)] = (18));
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (11)))
{var inst_33872 = (state_33910[(10)]);var inst_33875 = cljs.core.empty_QMARK_(inst_33872);var state_33910__$1 = state_33910;if(inst_33875)
{var statearr_33927_33962 = state_33910__$1;(statearr_33927_33962[(1)] = (13));
} else
{var statearr_33928_33963 = state_33910__$1;(statearr_33928_33963[(1)] = (14));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (9)))
{var inst_33868 = (state_33910[(7)]);var state_33910__$1 = state_33910;if(cljs.core.truth_(inst_33868))
{var statearr_33929_33964 = state_33910__$1;(statearr_33929_33964[(1)] = (20));
} else
{var statearr_33930_33965 = state_33910__$1;(statearr_33930_33965[(1)] = (21));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (5)))
{var state_33910__$1 = state_33910;var statearr_33931_33966 = state_33910__$1;(statearr_33931_33966[(2)] = null);
(statearr_33931_33966[(1)] = (6));
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (14)))
{var inst_33872 = (state_33910[(10)]);var inst_33878 = cljs.core.rest(inst_33872);var inst_33879 = cljs.core.first(inst_33872);var state_33910__$1 = (function (){var statearr_33932 = state_33910;(statearr_33932[(11)] = inst_33878);
return statearr_33932;
})();if(cljs.core.truth_(inst_33879))
{var statearr_33933_33967 = state_33910__$1;(statearr_33933_33967[(1)] = (16));
} else
{var statearr_33934_33968 = state_33910__$1;(statearr_33934_33968[(1)] = (17));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (16)))
{var inst_33872 = (state_33910[(10)]);var inst_33881 = cljs.core.first(inst_33872);var state_33910__$1 = state_33910;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33910__$1,(19),inst_33881);
} else
{if((state_val_33911 === (10)))
{var inst_33869 = (state_33910[(8)]);var inst_33901 = (state_33910[(2)]);var inst_33902 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_33901,inst_33869);var state_33910__$1 = (function (){var statearr_33935 = state_33910;(statearr_33935[(12)] = inst_33902);
return statearr_33935;
})();var statearr_33936_33969 = state_33910__$1;(statearr_33936_33969[(2)] = null);
(statearr_33936_33969[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (18)))
{var inst_33878 = (state_33910[(11)]);var inst_33873 = (state_33910[(9)]);var inst_33886 = (state_33910[(2)]);var inst_33887 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_33873,inst_33886);var inst_33872 = inst_33878;var inst_33873__$1 = inst_33887;var state_33910__$1 = (function (){var statearr_33937 = state_33910;(statearr_33937[(10)] = inst_33872);
(statearr_33937[(9)] = inst_33873__$1);
return statearr_33937;
})();var statearr_33938_33970 = state_33910__$1;(statearr_33938_33970[(2)] = null);
(statearr_33938_33970[(1)] = (11));
return cljs.core.constant$keyword$767;
} else
{if((state_val_33911 === (8)))
{var inst_33868 = (state_33910[(7)]);var inst_33872 = inst_33868;var inst_33873 = cljs.core.PersistentVector.EMPTY;var state_33910__$1 = (function (){var statearr_33939 = state_33910;(statearr_33939[(10)] = inst_33872);
(statearr_33939[(9)] = inst_33873);
return statearr_33939;
})();var statearr_33940_33971 = state_33910__$1;(statearr_33940_33971[(2)] = null);
(statearr_33940_33971[(1)] = (11));
return cljs.core.constant$keyword$767;
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
var state_machine__5679__auto____0 = (function (){var statearr_33944 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33944[(0)] = state_machine__5679__auto__);
(statearr_33944[(1)] = (1));
return statearr_33944;
});
var state_machine__5679__auto____1 = (function (state_33910){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_33910);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e33945){if((e33945 instanceof Object))
{var ex__5682__auto__ = e33945;var statearr_33946_33972 = state_33910;(statearr_33946_33972[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33910);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e33945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__33973 = state_33910;
state_33910 = G__33973;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_33910){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_33910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_33947 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_33947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_33947;
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
var G__33976__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__33975 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33975,(0),null);var result_handler_args = cljs.core.nthnext(vec__33975,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__33976 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__33976__delegate.call(this,req_args);};
G__33976.cljs$lang$maxFixedArity = 0;
G__33976.cljs$lang$applyTo = (function (arglist__33977){
var req_args = cljs.core.seq(arglist__33977);
return G__33976__delegate(req_args);
});
G__33976.cljs$core$IFn$_invoke$arity$variadic = G__33976__delegate;
return G__33976;
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
return (function (state_33995){var state_val_33996 = (state_33995[(1)]);if((state_val_33996 === (2)))
{var inst_33992 = (state_33995[(2)]);var inst_33993 = console.log(inst_33992);var state_33995__$1 = state_33995;return cljs.core.async.impl.ioc_helpers.return_chan(state_33995__$1,inst_33993);
} else
{if((state_val_33996 === (1)))
{var state_33995__$1 = state_33995;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33995__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34000 = [null,null,null,null,null,null,null];(statearr_34000[(0)] = state_machine__5679__auto__);
(statearr_34000[(1)] = (1));
return statearr_34000;
});
var state_machine__5679__auto____1 = (function (state_33995){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_33995);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34001){if((e34001 instanceof Object))
{var ex__5682__auto__ = e34001;var statearr_34002_34004 = state_33995;(statearr_34002_34004[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33995);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e34001;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__34005 = state_33995;
state_33995 = G__34005;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_33995){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_33995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_34003 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34003;
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
log_api.cljs$lang$applyTo = (function (arglist__34006){
var f = cljs.core.first(arglist__34006);
var args = cljs.core.rest(arglist__34006);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34009){var vec__34010 = p__34009;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34010,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34010,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var c__5693__auto___34037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___34037,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___34037,r){
return (function (state_34028){var state_val_34029 = (state_34028[(1)]);if((state_val_34029 === (2)))
{var inst_34025 = (state_34028[(2)]);var inst_34026 = cljs.core.reset_BANG_(r,inst_34025);var state_34028__$1 = state_34028;return cljs.core.async.impl.ioc_helpers.return_chan(state_34028__$1,inst_34026);
} else
{if((state_val_34029 === (1)))
{var state_34028__$1 = state_34028;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34028__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___34037,r))
;return ((function (switch__5678__auto__,c__5693__auto___34037,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34033 = [null,null,null,null,null,null,null];(statearr_34033[(0)] = state_machine__5679__auto__);
(statearr_34033[(1)] = (1));
return statearr_34033;
});
var state_machine__5679__auto____1 = (function (state_34028){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34028);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34034){if((e34034 instanceof Object))
{var ex__5682__auto__ = e34034;var statearr_34035_34038 = state_34028;(statearr_34035_34038[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34028);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e34034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__34039 = state_34028;
state_34028 = G__34039;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34028){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___34037,r))
})();var state__5695__auto__ = (function (){var statearr_34036 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___34037);
return statearr_34036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___34037,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__34040){
var id = cljs.core.first(arglist__34040);
arglist__34040 = cljs.core.next(arglist__34040);
var tolerance = cljs.core.first(arglist__34040);
var opts = cljs.core.rest(arglist__34040);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__34041){
var id = cljs.core.first(arglist__34041);
var opts = cljs.core.rest(arglist__34041);
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
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,p__34042){var vec__34044 = p__34042;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34044,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$784,filter], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,var_args){
var p__34042 = null;if (arguments.length > 5) {
  p__34042 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,p__34042);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 5;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__34045){
var index = cljs.core.first(arglist__34045);
arglist__34045 = cljs.core.next(arglist__34045);
var type = cljs.core.first(arglist__34045);
arglist__34045 = cljs.core.next(arglist__34045);
var blcoll = cljs.core.first(arglist__34045);
arglist__34045 = cljs.core.next(arglist__34045);
var attr = cljs.core.first(arglist__34045);
arglist__34045 = cljs.core.next(arglist__34045);
var filter = cljs.core.first(arglist__34045);
var p__34042 = cljs.core.rest(arglist__34045);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,p__34042);
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
var portfolio_company_sites__delegate = function (p__34046){var vec__34048 = p__34046;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34048,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$785,(100),cljs.core.constant$keyword$786,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$787,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__34046 = null;if (arguments.length > 0) {
  p__34046 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__34046);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__34049){
var p__34046 = cljs.core.seq(arglist__34049);
return portfolio_company_sites__delegate(p__34046);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__34050){var vec__34052 = p__34050;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34052,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$785,(100),cljs.core.constant$keyword$786,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$787,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__34050 = null;if (arguments.length > 0) {
  p__34050 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__34050);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__34053){
var p__34050 = cljs.core.seq(arglist__34053);
return portfolio_company_sites_by_company__delegate(p__34050);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__34054){var vec__34056 = p__34054;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34056,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__34054 = null;if (arguments.length > 0) {
  p__34054 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__34054);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__34057){
var p__34054 = cljs.core.seq(arglist__34057);
return portfolio_company_locations__delegate(p__34054);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__34058){var vec__34060 = p__34058;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34060,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__34058 = null;if (arguments.length > 0) {
  p__34058 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__34058);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__34061){
var p__34058 = cljs.core.seq(arglist__34061);
return portfolio_company_site_stats__delegate(p__34058);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__34062){var vec__34064 = p__34062;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34064,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__34062 = null;if (arguments.length > 0) {
  p__34062 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__34062);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__34065){
var p__34062 = cljs.core.seq(arglist__34065);
return portfolio_company_site_account_timelines__delegate(p__34062);
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
var investment_account_timelines__delegate = function (p__34066){var vec__34068 = p__34066;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34068,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_account_timelines = function (var_args){
var p__34066 = null;if (arguments.length > 0) {
  p__34066 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__34066);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__34069){
var p__34066 = cljs.core.seq(arglist__34069);
return investment_account_timelines__delegate(p__34066);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__34070){var vec__34072 = p__34070;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34072,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_stats = function (var_args){
var p__34070 = null;if (arguments.length > 0) {
  p__34070 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__34070);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__34073){
var p__34070 = cljs.core.seq(arglist__34073);
return investment_stats__delegate(p__34070);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__34074){var vec__34076 = p__34074;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34076,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$785,(50),cljs.core.constant$keyword$788,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$789,"desc"], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__34074 = null;if (arguments.length > 0) {
  p__34074 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__34074);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__34077){
var p__34074 = cljs.core.seq(arglist__34077);
return investment_aggs__delegate(p__34074);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__34078){var vec__34080 = p__34078;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34080,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$785,(50),cljs.core.constant$keyword$788,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$790,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$791,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investments = function (var_args){
var p__34078 = null;if (arguments.length > 0) {
  p__34078 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__34078);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__34081){
var p__34078 = cljs.core.seq(arglist__34081);
return investments__delegate(p__34078);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
