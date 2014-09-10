// Compiled by ClojureScript 0.0-2268
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
var AJAX__delegate = function (url,p__34663){var map__34667 = p__34663;var map__34667__$1 = ((cljs.core.seq_QMARK_(map__34667))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34667):map__34667);var opts = map__34667__$1;var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34667__$1,cljs.core.constant$keyword$801);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34667__$1,cljs.core.constant$keyword$802);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34667__$1,cljs.core.constant$keyword$803);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__34667,map__34667__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__34667,map__34667__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$782,true], 0));
}
});})(comm,map__34667,map__34667__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__34667,map__34667__$1,opts,content,method,raw))
,(function (){var or__3541__auto__ = (function (){var G__34669 = method;var G__34669__$1 = (((G__34669 == null))?null:cljs.core.name(G__34669));var G__34669__$2 = (((G__34669__$1 == null))?null:clojure.string.upper_case(G__34669__$1));return G__34669__$2;
})();if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__34663 = null;if (arguments.length > 1) {
  p__34663 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__34663);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__34670){
var url = cljs.core.first(arglist__34670);
var p__34663 = cljs.core.rest(arglist__34670);
return AJAX__delegate(url,p__34663);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__34671){var map__34673 = p__34671;var map__34673__$1 = ((cljs.core.seq_QMARK_(map__34673))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34673):map__34673);var opts = map__34673__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$802,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__34671 = null;if (arguments.length > 1) {
  p__34671 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__34671);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__34674){
var url = cljs.core.first(arglist__34674);
var p__34671 = cljs.core.rest(arglist__34674);
return GET__delegate(url,p__34671);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__34675){var map__34677 = p__34675;var map__34677__$1 = ((cljs.core.seq_QMARK_(map__34677))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34677):map__34677);var opts = map__34677__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$802,"POST",cljs.core.constant$keyword$801,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__34675 = null;if (arguments.length > 2) {
  p__34675 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__34675);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__34678){
var url = cljs.core.first(arglist__34678);
arglist__34678 = cljs.core.next(arglist__34678);
var content = cljs.core.first(arglist__34678);
var p__34675 = cljs.core.rest(arglist__34678);
return POST__delegate(url,content,p__34675);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__34679){var map__34681 = p__34679;var map__34681__$1 = ((cljs.core.seq_QMARK_(map__34681))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34681):map__34681);var opts = map__34681__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$802,"PUT",cljs.core.constant$keyword$801,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__34679 = null;if (arguments.length > 2) {
  p__34679 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__34679);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__34682){
var url = cljs.core.first(arglist__34682);
arglist__34682 = cljs.core.next(arglist__34682);
var content = cljs.core.first(arglist__34682);
var p__34679 = cljs.core.rest(arglist__34682);
return PUT__delegate(url,content,p__34679);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_34815){var state_val_34816 = (state_34815[(1)]);if((state_val_34816 === (7)))
{var inst_34773 = (state_34815[(7)]);var inst_34772 = (state_34815[(2)]);var inst_34773__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34772,(0),null);var inst_34774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34772,(1),null);var inst_34775 = cljs.core.sequential_QMARK_(inst_34773__$1);var state_34815__$1 = (function (){var statearr_34817 = state_34815;(statearr_34817[(7)] = inst_34773__$1);
(statearr_34817[(8)] = inst_34774);
return statearr_34817;
})();if(inst_34775)
{var statearr_34818_34853 = state_34815__$1;(statearr_34818_34853[(1)] = (8));
} else
{var statearr_34819_34854 = state_34815__$1;(statearr_34819_34854[(1)] = (9));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (20)))
{var inst_34773 = (state_34815[(7)]);var state_34815__$1 = state_34815;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34815__$1,(23),inst_34773);
} else
{if((state_val_34816 === (1)))
{var state_34815__$1 = state_34815;var statearr_34820_34855 = state_34815__$1;(statearr_34820_34855[(2)] = null);
(statearr_34820_34855[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (4)))
{var state_34815__$1 = state_34815;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34815__$1,(7),ocomm);
} else
{if((state_val_34816 === (15)))
{var inst_34795 = (state_34815[(2)]);var state_34815__$1 = state_34815;var statearr_34821_34856 = state_34815__$1;(statearr_34821_34856[(2)] = inst_34795);
(statearr_34821_34856[(1)] = (12));
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (21)))
{var state_34815__$1 = state_34815;var statearr_34822_34857 = state_34815__$1;(statearr_34822_34857[(2)] = null);
(statearr_34822_34857[(1)] = (22));
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (13)))
{var inst_34778 = (state_34815[(9)]);var state_34815__$1 = state_34815;var statearr_34823_34858 = state_34815__$1;(statearr_34823_34858[(2)] = inst_34778);
(statearr_34823_34858[(1)] = (15));
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (22)))
{var inst_34804 = (state_34815[(2)]);var state_34815__$1 = state_34815;var statearr_34824_34859 = state_34815__$1;(statearr_34824_34859[(2)] = inst_34804);
(statearr_34824_34859[(1)] = (10));
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (6)))
{var inst_34811 = (state_34815[(2)]);var state_34815__$1 = state_34815;var statearr_34825_34860 = state_34815__$1;(statearr_34825_34860[(2)] = inst_34811);
(statearr_34825_34860[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (17)))
{var state_34815__$1 = state_34815;var statearr_34826_34861 = state_34815__$1;(statearr_34826_34861[(2)] = null);
(statearr_34826_34861[(1)] = (18));
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (3)))
{var inst_34813 = (state_34815[(2)]);var state_34815__$1 = state_34815;return cljs.core.async.impl.ioc_helpers.return_chan(state_34815__$1,inst_34813);
} else
{if((state_val_34816 === (12)))
{var inst_34797 = (state_34815[(2)]);var state_34815__$1 = state_34815;var statearr_34827_34862 = state_34815__$1;(statearr_34827_34862[(2)] = inst_34797);
(statearr_34827_34862[(1)] = (10));
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (2)))
{var state_34815__$1 = state_34815;if(true)
{var statearr_34828_34863 = state_34815__$1;(statearr_34828_34863[(1)] = (4));
} else
{var statearr_34829_34864 = state_34815__$1;(statearr_34829_34864[(1)] = (5));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (23)))
{var inst_34801 = (state_34815[(2)]);var state_34815__$1 = state_34815;var statearr_34830_34865 = state_34815__$1;(statearr_34830_34865[(2)] = inst_34801);
(statearr_34830_34865[(1)] = (22));
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (19)))
{var inst_34788 = (state_34815[(2)]);var state_34815__$1 = state_34815;var statearr_34831_34866 = state_34815__$1;(statearr_34831_34866[(2)] = inst_34788);
(statearr_34831_34866[(1)] = (18));
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (11)))
{var inst_34777 = (state_34815[(10)]);var inst_34780 = cljs.core.empty_QMARK_(inst_34777);var state_34815__$1 = state_34815;if(inst_34780)
{var statearr_34832_34867 = state_34815__$1;(statearr_34832_34867[(1)] = (13));
} else
{var statearr_34833_34868 = state_34815__$1;(statearr_34833_34868[(1)] = (14));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (9)))
{var inst_34773 = (state_34815[(7)]);var state_34815__$1 = state_34815;if(cljs.core.truth_(inst_34773))
{var statearr_34834_34869 = state_34815__$1;(statearr_34834_34869[(1)] = (20));
} else
{var statearr_34835_34870 = state_34815__$1;(statearr_34835_34870[(1)] = (21));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (5)))
{var state_34815__$1 = state_34815;var statearr_34836_34871 = state_34815__$1;(statearr_34836_34871[(2)] = null);
(statearr_34836_34871[(1)] = (6));
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (14)))
{var inst_34777 = (state_34815[(10)]);var inst_34783 = cljs.core.rest(inst_34777);var inst_34784 = cljs.core.first(inst_34777);var state_34815__$1 = (function (){var statearr_34837 = state_34815;(statearr_34837[(11)] = inst_34783);
return statearr_34837;
})();if(cljs.core.truth_(inst_34784))
{var statearr_34838_34872 = state_34815__$1;(statearr_34838_34872[(1)] = (16));
} else
{var statearr_34839_34873 = state_34815__$1;(statearr_34839_34873[(1)] = (17));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (16)))
{var inst_34777 = (state_34815[(10)]);var inst_34786 = cljs.core.first(inst_34777);var state_34815__$1 = state_34815;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34815__$1,(19),inst_34786);
} else
{if((state_val_34816 === (10)))
{var inst_34774 = (state_34815[(8)]);var inst_34806 = (state_34815[(2)]);var inst_34807 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_34806,inst_34774);var state_34815__$1 = (function (){var statearr_34840 = state_34815;(statearr_34840[(12)] = inst_34807);
return statearr_34840;
})();var statearr_34841_34874 = state_34815__$1;(statearr_34841_34874[(2)] = null);
(statearr_34841_34874[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (18)))
{var inst_34778 = (state_34815[(9)]);var inst_34783 = (state_34815[(11)]);var inst_34791 = (state_34815[(2)]);var inst_34792 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_34778,inst_34791);var inst_34777 = inst_34783;var inst_34778__$1 = inst_34792;var state_34815__$1 = (function (){var statearr_34842 = state_34815;(statearr_34842[(9)] = inst_34778__$1);
(statearr_34842[(10)] = inst_34777);
return statearr_34842;
})();var statearr_34843_34875 = state_34815__$1;(statearr_34843_34875[(2)] = null);
(statearr_34843_34875[(1)] = (11));
return cljs.core.constant$keyword$787;
} else
{if((state_val_34816 === (8)))
{var inst_34773 = (state_34815[(7)]);var inst_34777 = inst_34773;var inst_34778 = cljs.core.PersistentVector.EMPTY;var state_34815__$1 = (function (){var statearr_34844 = state_34815;(statearr_34844[(9)] = inst_34778);
(statearr_34844[(10)] = inst_34777);
return statearr_34844;
})();var statearr_34845_34876 = state_34815__$1;(statearr_34845_34876[(2)] = null);
(statearr_34845_34876[(1)] = (11));
return cljs.core.constant$keyword$787;
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_34849 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34849[(0)] = state_machine__5677__auto__);
(statearr_34849[(1)] = (1));
return statearr_34849;
});
var state_machine__5677__auto____1 = (function (state_34815){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_34815);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e34850){if((e34850 instanceof Object))
{var ex__5680__auto__ = e34850;var statearr_34851_34877 = state_34815;(statearr_34851_34877[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34815);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e34850;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__34878 = state_34815;
state_34815 = G__34878;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_34815){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_34815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_34852 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_34852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_34852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
var G__34881__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__34880 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34880,(0),null);var result_handler_args = cljs.core.nthnext(vec__34880,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__34881 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__34881__delegate.call(this,req_args);};
G__34881.cljs$lang$maxFixedArity = 0;
G__34881.cljs$lang$applyTo = (function (arglist__34882){
var req_args = cljs.core.seq(arglist__34882);
return G__34881__delegate(req_args);
});
G__34881.cljs$core$IFn$_invoke$arity$variadic = G__34881__delegate;
return G__34881;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto__,ch){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__,ch){
return (function (state_34900){var state_val_34901 = (state_34900[(1)]);if((state_val_34901 === (2)))
{var inst_34897 = (state_34900[(2)]);var inst_34898 = console.log(inst_34897);var state_34900__$1 = state_34900;return cljs.core.async.impl.ioc_helpers.return_chan(state_34900__$1,inst_34898);
} else
{if((state_val_34901 === (1)))
{var state_34900__$1 = state_34900;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34900__$1,(2),ch);
} else
{return null;
}
}
});})(c__5691__auto__,ch))
;return ((function (switch__5676__auto__,c__5691__auto__,ch){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_34905 = [null,null,null,null,null,null,null];(statearr_34905[(0)] = state_machine__5677__auto__);
(statearr_34905[(1)] = (1));
return statearr_34905;
});
var state_machine__5677__auto____1 = (function (state_34900){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_34900);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e34906){if((e34906 instanceof Object))
{var ex__5680__auto__ = e34906;var statearr_34907_34909 = state_34900;(statearr_34907_34909[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34900);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e34906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__34910 = state_34900;
state_34900 = G__34910;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_34900){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_34900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,ch))
})();var state__5693__auto__ = (function (){var statearr_34908 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_34908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_34908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__,ch))
);
return c__5691__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__34911){
var f = cljs.core.first(arglist__34911);
var args = cljs.core.rest(arglist__34911);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34914){var vec__34915 = p__34914;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34915,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34915,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var c__5691__auto___34942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto___34942,r){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___34942,r){
return (function (state_34933){var state_val_34934 = (state_34933[(1)]);if((state_val_34934 === (2)))
{var inst_34930 = (state_34933[(2)]);var inst_34931 = cljs.core.reset_BANG_(r,inst_34930);var state_34933__$1 = state_34933;return cljs.core.async.impl.ioc_helpers.return_chan(state_34933__$1,inst_34931);
} else
{if((state_val_34934 === (1)))
{var state_34933__$1 = state_34933;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34933__$1,(2),comm);
} else
{return null;
}
}
});})(c__5691__auto___34942,r))
;return ((function (switch__5676__auto__,c__5691__auto___34942,r){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_34938 = [null,null,null,null,null,null,null];(statearr_34938[(0)] = state_machine__5677__auto__);
(statearr_34938[(1)] = (1));
return statearr_34938;
});
var state_machine__5677__auto____1 = (function (state_34933){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_34933);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e34939){if((e34939 instanceof Object))
{var ex__5680__auto__ = e34939;var statearr_34940_34943 = state_34933;(statearr_34940_34943[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34933);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e34939;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__34944 = state_34933;
state_34933 = G__34944;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_34933){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_34933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___34942,r))
})();var state__5693__auto__ = (function (){var statearr_34941 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_34941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___34942);
return statearr_34941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___34942,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__34945){
var id = cljs.core.first(arglist__34945);
arglist__34945 = cljs.core.next(arglist__34945);
var tolerance = cljs.core.first(arglist__34945);
var opts = cljs.core.rest(arglist__34945);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__34946){
var id = cljs.core.first(arglist__34946);
var opts = cljs.core.rest(arglist__34946);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* fetch a whole set of boundarylines in one api hit
* @param {...*} var_args
*/
clustermap.api.boundaryline_set = (function() { 
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$804,ids,cljs.core.constant$keyword$805,tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__34947){
var ids = cljs.core.first(arglist__34947);
arglist__34947 = cljs.core.next(arglist__34947);
var tolerance = cljs.core.first(arglist__34947);
var opts = cljs.core.rest(arglist__34947);
return boundaryline_set__delegate(ids,tolerance,opts);
});
boundaryline_set.cljs$core$IFn$_invoke$arity$variadic = boundaryline_set__delegate;
return boundaryline_set;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_view = (function() { 
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__34948){var map__34950 = p__34948;var map__34950__$1 = ((cljs.core.seq_QMARK_(map__34950))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34950):map__34950);var opts = map__34950__$1;var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34950__$1,cljs.core.constant$keyword$806);var opts__$1 = cljs.core.flatten(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$806)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$807,bounds,cljs.core.constant$keyword$806,boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__34948 = null;if (arguments.length > 3) {
  p__34948 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__34948);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__34951){
var collection_id = cljs.core.first(arglist__34951);
arglist__34951 = cljs.core.next(arglist__34951);
var tolerance = cljs.core.first(arglist__34951);
arglist__34951 = cljs.core.next(arglist__34951);
var bounds = cljs.core.first(arglist__34951);
var p__34948 = cljs.core.rest(arglist__34951);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__34948);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__34952){var vec__34954 = p__34952;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34954,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$808,filter,cljs.core.constant$keyword$807,bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__34952 = null;if (arguments.length > 6) {
  p__34952 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__34952);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__34955){
var index = cljs.core.first(arglist__34955);
arglist__34955 = cljs.core.next(arglist__34955);
var type = cljs.core.first(arglist__34955);
arglist__34955 = cljs.core.next(arglist__34955);
var blcoll = cljs.core.first(arglist__34955);
arglist__34955 = cljs.core.next(arglist__34955);
var attr = cljs.core.first(arglist__34955);
arglist__34955 = cljs.core.next(arglist__34955);
var filter = cljs.core.first(arglist__34955);
arglist__34955 = cljs.core.next(arglist__34955);
var bounds = cljs.core.first(arglist__34955);
var p__34952 = cljs.core.rest(arglist__34955);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__34952);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__34956){var vec__34958 = p__34956;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$809,max_count,cljs.core.constant$keyword$810,attrs,cljs.core.constant$keyword$808,filter,cljs.core.constant$keyword$807,bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__34956 = null;if (arguments.length > 7) {
  p__34956 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__34956);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__34959){
var index = cljs.core.first(arglist__34959);
arglist__34959 = cljs.core.next(arglist__34959);
var type = cljs.core.first(arglist__34959);
arglist__34959 = cljs.core.next(arglist__34959);
var location_attr = cljs.core.first(arglist__34959);
arglist__34959 = cljs.core.next(arglist__34959);
var attrs = cljs.core.first(arglist__34959);
arglist__34959 = cljs.core.next(arglist__34959);
var max_count = cljs.core.first(arglist__34959);
arglist__34959 = cljs.core.next(arglist__34959);
var filter = cljs.core.first(arglist__34959);
arglist__34959 = cljs.core.next(arglist__34959);
var bounds = cljs.core.first(arglist__34959);
var p__34956 = cljs.core.rest(arglist__34959);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__34956);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
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
var portfolio_company_sites__delegate = function (p__34960){var vec__34962 = p__34960;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34962,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$811,(100),cljs.core.constant$keyword$812,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$813,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__34960 = null;if (arguments.length > 0) {
  p__34960 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__34960);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__34963){
var p__34960 = cljs.core.seq(arglist__34963);
return portfolio_company_sites__delegate(p__34960);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__34964){var vec__34966 = p__34964;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34966,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$811,(100),cljs.core.constant$keyword$812,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$813,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__34964 = null;if (arguments.length > 0) {
  p__34964 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__34964);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__34967){
var p__34964 = cljs.core.seq(arglist__34967);
return portfolio_company_sites_by_company__delegate(p__34964);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__34968){var vec__34970 = p__34968;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34970,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__34968 = null;if (arguments.length > 0) {
  p__34968 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__34968);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__34971){
var p__34968 = cljs.core.seq(arglist__34971);
return portfolio_company_locations__delegate(p__34968);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__34972){var vec__34974 = p__34972;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34974,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__34972 = null;if (arguments.length > 0) {
  p__34972 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__34972);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__34975){
var p__34972 = cljs.core.seq(arglist__34975);
return portfolio_company_site_stats__delegate(p__34972);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__34976){var vec__34978 = p__34976;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34978,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__34976 = null;if (arguments.length > 0) {
  p__34976 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__34976);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__34979){
var p__34976 = cljs.core.seq(arglist__34979);
return portfolio_company_site_account_timelines__delegate(p__34976);
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
var investment_account_timelines__delegate = function (p__34980){var vec__34982 = p__34980;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34982,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_account_timelines = function (var_args){
var p__34980 = null;if (arguments.length > 0) {
  p__34980 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__34980);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__34983){
var p__34980 = cljs.core.seq(arglist__34983);
return investment_account_timelines__delegate(p__34980);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__34984){var vec__34986 = p__34984;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34986,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_stats = function (var_args){
var p__34984 = null;if (arguments.length > 0) {
  p__34984 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__34984);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__34987){
var p__34984 = cljs.core.seq(arglist__34987);
return investment_stats__delegate(p__34984);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__34988){var vec__34990 = p__34988;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34990,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$811,(50),cljs.core.constant$keyword$814,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$815,"desc"], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__34988 = null;if (arguments.length > 0) {
  p__34988 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__34988);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__34991){
var p__34988 = cljs.core.seq(arglist__34991);
return investment_aggs__delegate(p__34988);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__34992){var vec__34994 = p__34992;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$811,(50),cljs.core.constant$keyword$814,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$816,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$817,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investments = function (var_args){
var p__34992 = null;if (arguments.length > 0) {
  p__34992 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__34992);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__34995){
var p__34992 = cljs.core.seq(arglist__34995);
return investments__delegate(p__34992);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
