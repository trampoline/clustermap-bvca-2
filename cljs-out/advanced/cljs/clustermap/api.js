// Compiled by ClojureScript 0.0-2356
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
var AJAX__delegate = function (url,p__50680){var map__50691 = p__50680;var map__50691__$1 = ((cljs.core.seq_QMARK_(map__50691))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50691):map__50691);var opts = map__50691__$1;var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50691__$1,cljs.core.constant$keyword$1136);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50691__$1,cljs.core.constant$keyword$1137);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50691__$1,cljs.core.constant$keyword$1138);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__50692_50701 = url;var G__50693_50702 = ((function (G__50692_50701,comm,map__50691,map__50691__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (G__50692_50701,comm,map__50691,map__50691__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$1115,true], 0));
}
});})(G__50692_50701,comm,map__50691,map__50691__$1,opts,content,method,raw))
.call(null,((function (){var G__50697 = event.target.getResponseText();return JSON.parse(G__50697);
})()["data"])));
return cljs.core.async.close_BANG_(comm);
});})(G__50692_50701,comm,map__50691,map__50691__$1,opts,content,method,raw))
;var G__50694_50703 = (function (){var or__3637__auto__ = (function (){var G__50699 = method;var G__50699__$1 = (((G__50699 == null))?null:cljs.core.name(G__50699));var G__50699__$2 = (((G__50699__$1 == null))?null:clojure.string.upper_case(G__50699__$1));return G__50699__$2;
})();if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "GET";
}
})();var G__50695_50704 = (cljs.core.truth_(content)?(function (){var G__50700 = cljs.core.clj__GT_js(content);return JSON.stringify(G__50700);
})():null);var G__50696_50705 = (cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null);goog.net.XhrIo.send(G__50692_50701,G__50693_50702,G__50694_50703,G__50695_50704,G__50696_50705);
return comm;
};
var AJAX = function (url,var_args){
var p__50680 = null;if (arguments.length > 1) {
  p__50680 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__50680);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__50706){
var url = cljs.core.first(arglist__50706);
var p__50680 = cljs.core.rest(arglist__50706);
return AJAX__delegate(url,p__50680);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__50707){var map__50709 = p__50707;var map__50709__$1 = ((cljs.core.seq_QMARK_(map__50709))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50709):map__50709);var opts = map__50709__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1137,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__50707 = null;if (arguments.length > 1) {
  p__50707 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__50707);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__50710){
var url = cljs.core.first(arglist__50710);
var p__50707 = cljs.core.rest(arglist__50710);
return GET__delegate(url,p__50707);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__50711){var map__50713 = p__50711;var map__50713__$1 = ((cljs.core.seq_QMARK_(map__50713))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50713):map__50713);var opts = map__50713__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1137,"POST",cljs.core.constant$keyword$1136,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__50711 = null;if (arguments.length > 2) {
  p__50711 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__50711);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__50714){
var url = cljs.core.first(arglist__50714);
arglist__50714 = cljs.core.next(arglist__50714);
var content = cljs.core.first(arglist__50714);
var p__50711 = cljs.core.rest(arglist__50714);
return POST__delegate(url,content,p__50711);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__50715){var map__50717 = p__50715;var map__50717__$1 = ((cljs.core.seq_QMARK_(map__50717))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50717):map__50717);var opts = map__50717__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1137,"PUT",cljs.core.constant$keyword$1136,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__50715 = null;if (arguments.length > 2) {
  p__50715 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__50715);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__50718){
var url = cljs.core.first(arglist__50718);
arglist__50718 = cljs.core.next(arglist__50718);
var content = cljs.core.first(arglist__50718);
var p__50715 = cljs.core.rest(arglist__50718);
return PUT__delegate(url,content,p__50715);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_50853){var state_val_50854 = (state_50853[(1)]);if((state_val_50854 === (7)))
{var inst_50810 = (state_50853[(7)]);var inst_50809 = (state_50853[(2)]);var inst_50810__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50809,(0),null);var inst_50811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50809,(1),null);var inst_50812 = cljs.core.sequential_QMARK_(inst_50810__$1);var state_50853__$1 = (function (){var statearr_50855 = state_50853;(statearr_50855[(8)] = inst_50811);
(statearr_50855[(7)] = inst_50810__$1);
return statearr_50855;
})();if(inst_50812)
{var statearr_50856_50891 = state_50853__$1;(statearr_50856_50891[(1)] = (8));
} else
{var statearr_50857_50892 = state_50853__$1;(statearr_50857_50892[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (20)))
{var inst_50810 = (state_50853[(7)]);var state_50853__$1 = state_50853;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50853__$1,(23),inst_50810);
} else
{if((state_val_50854 === (1)))
{var state_50853__$1 = state_50853;var statearr_50858_50893 = state_50853__$1;(statearr_50858_50893[(2)] = null);
(statearr_50858_50893[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (4)))
{var state_50853__$1 = state_50853;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50853__$1,(7),ocomm);
} else
{if((state_val_50854 === (15)))
{var inst_50833 = (state_50853[(2)]);var state_50853__$1 = state_50853;var statearr_50859_50894 = state_50853__$1;(statearr_50859_50894[(2)] = inst_50833);
(statearr_50859_50894[(1)] = (12));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (21)))
{var state_50853__$1 = state_50853;var statearr_50860_50895 = state_50853__$1;(statearr_50860_50895[(2)] = null);
(statearr_50860_50895[(1)] = (22));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (13)))
{var inst_50816 = (state_50853[(9)]);var state_50853__$1 = state_50853;var statearr_50861_50896 = state_50853__$1;(statearr_50861_50896[(2)] = inst_50816);
(statearr_50861_50896[(1)] = (15));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (22)))
{var inst_50842 = (state_50853[(2)]);var state_50853__$1 = state_50853;var statearr_50862_50897 = state_50853__$1;(statearr_50862_50897[(2)] = inst_50842);
(statearr_50862_50897[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (6)))
{var inst_50849 = (state_50853[(2)]);var state_50853__$1 = state_50853;var statearr_50863_50898 = state_50853__$1;(statearr_50863_50898[(2)] = inst_50849);
(statearr_50863_50898[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (17)))
{var state_50853__$1 = state_50853;var statearr_50864_50899 = state_50853__$1;(statearr_50864_50899[(2)] = null);
(statearr_50864_50899[(1)] = (18));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (3)))
{var inst_50851 = (state_50853[(2)]);var state_50853__$1 = state_50853;return cljs.core.async.impl.ioc_helpers.return_chan(state_50853__$1,inst_50851);
} else
{if((state_val_50854 === (12)))
{var inst_50835 = (state_50853[(2)]);var state_50853__$1 = state_50853;var statearr_50865_50900 = state_50853__$1;(statearr_50865_50900[(2)] = inst_50835);
(statearr_50865_50900[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (2)))
{var state_50853__$1 = state_50853;var statearr_50866_50901 = state_50853__$1;(statearr_50866_50901[(1)] = (4));

return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (23)))
{var inst_50839 = (state_50853[(2)]);var state_50853__$1 = state_50853;var statearr_50868_50902 = state_50853__$1;(statearr_50868_50902[(2)] = inst_50839);
(statearr_50868_50902[(1)] = (22));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (19)))
{var inst_50826 = (state_50853[(2)]);var state_50853__$1 = state_50853;var statearr_50869_50903 = state_50853__$1;(statearr_50869_50903[(2)] = inst_50826);
(statearr_50869_50903[(1)] = (18));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (11)))
{var inst_50815 = (state_50853[(10)]);var inst_50818 = cljs.core.empty_QMARK_(inst_50815);var state_50853__$1 = state_50853;if(inst_50818)
{var statearr_50870_50904 = state_50853__$1;(statearr_50870_50904[(1)] = (13));
} else
{var statearr_50871_50905 = state_50853__$1;(statearr_50871_50905[(1)] = (14));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (9)))
{var inst_50810 = (state_50853[(7)]);var state_50853__$1 = state_50853;if(cljs.core.truth_(inst_50810))
{var statearr_50872_50906 = state_50853__$1;(statearr_50872_50906[(1)] = (20));
} else
{var statearr_50873_50907 = state_50853__$1;(statearr_50873_50907[(1)] = (21));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (5)))
{var state_50853__$1 = state_50853;var statearr_50874_50908 = state_50853__$1;(statearr_50874_50908[(2)] = null);
(statearr_50874_50908[(1)] = (6));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (14)))
{var inst_50815 = (state_50853[(10)]);var inst_50821 = cljs.core.rest(inst_50815);var inst_50822 = cljs.core.first(inst_50815);var state_50853__$1 = (function (){var statearr_50875 = state_50853;(statearr_50875[(11)] = inst_50821);
return statearr_50875;
})();if(cljs.core.truth_(inst_50822))
{var statearr_50876_50909 = state_50853__$1;(statearr_50876_50909[(1)] = (16));
} else
{var statearr_50877_50910 = state_50853__$1;(statearr_50877_50910[(1)] = (17));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (16)))
{var inst_50815 = (state_50853[(10)]);var inst_50824 = cljs.core.first(inst_50815);var state_50853__$1 = state_50853;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50853__$1,(19),inst_50824);
} else
{if((state_val_50854 === (10)))
{var inst_50811 = (state_50853[(8)]);var inst_50844 = (state_50853[(2)]);var inst_50845 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_50844,inst_50811);var state_50853__$1 = (function (){var statearr_50878 = state_50853;(statearr_50878[(12)] = inst_50845);
return statearr_50878;
})();var statearr_50879_50911 = state_50853__$1;(statearr_50879_50911[(2)] = null);
(statearr_50879_50911[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (18)))
{var inst_50821 = (state_50853[(11)]);var inst_50816 = (state_50853[(9)]);var inst_50829 = (state_50853[(2)]);var inst_50830 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_50816,inst_50829);var inst_50815 = inst_50821;var inst_50816__$1 = inst_50830;var state_50853__$1 = (function (){var statearr_50880 = state_50853;(statearr_50880[(10)] = inst_50815);
(statearr_50880[(9)] = inst_50816__$1);
return statearr_50880;
})();var statearr_50881_50912 = state_50853__$1;(statearr_50881_50912[(2)] = null);
(statearr_50881_50912[(1)] = (11));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_50854 === (8)))
{var inst_50810 = (state_50853[(7)]);var inst_50814 = cljs.core.PersistentVector.EMPTY;var inst_50815 = inst_50810;var inst_50816 = inst_50814;var state_50853__$1 = (function (){var statearr_50882 = state_50853;(statearr_50882[(10)] = inst_50815);
(statearr_50882[(9)] = inst_50816);
return statearr_50882;
})();var statearr_50883_50913 = state_50853__$1;(statearr_50883_50913[(2)] = null);
(statearr_50883_50913[(1)] = (11));
return cljs.core.constant$keyword$1120;
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
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_50887 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50887[(0)] = state_machine__5805__auto__);
(statearr_50887[(1)] = (1));
return statearr_50887;
});
var state_machine__5805__auto____1 = (function (state_50853){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_50853);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e50888){if((e50888 instanceof Object))
{var ex__5808__auto__ = e50888;var statearr_50889_50914 = state_50853;(statearr_50889_50914[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50853);
return cljs.core.constant$keyword$1120;
} else
{throw e50888;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__50915 = state_50853;
state_50853 = G__50915;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_50853){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_50853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_50890 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_50890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_50890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
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
var G__50918__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__50917 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50917,(0),null);var result_handler_args = cljs.core.nthnext(vec__50917,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__50918 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__50918__delegate.call(this,req_args);};
G__50918.cljs$lang$maxFixedArity = 0;
G__50918.cljs$lang$applyTo = (function (arglist__50919){
var req_args = cljs.core.seq(arglist__50919);
return G__50918__delegate(req_args);
});
G__50918.cljs$core$IFn$_invoke$arity$variadic = G__50918__delegate;
return G__50918;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__,ch){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,ch){
return (function (state_50937){var state_val_50938 = (state_50937[(1)]);if((state_val_50938 === (2)))
{var inst_50934 = (state_50937[(2)]);var inst_50935 = console.log(inst_50934);var state_50937__$1 = state_50937;return cljs.core.async.impl.ioc_helpers.return_chan(state_50937__$1,inst_50935);
} else
{if((state_val_50938 === (1)))
{var state_50937__$1 = state_50937;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50937__$1,(2),ch);
} else
{return null;
}
}
});})(c__5819__auto__,ch))
;return ((function (switch__5804__auto__,c__5819__auto__,ch){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_50942 = [null,null,null,null,null,null,null];(statearr_50942[(0)] = state_machine__5805__auto__);
(statearr_50942[(1)] = (1));
return statearr_50942;
});
var state_machine__5805__auto____1 = (function (state_50937){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_50937);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e50943){if((e50943 instanceof Object))
{var ex__5808__auto__ = e50943;var statearr_50944_50946 = state_50937;(statearr_50944_50946[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50937);
return cljs.core.constant$keyword$1120;
} else
{throw e50943;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__50947 = state_50937;
state_50937 = G__50947;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_50937){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_50937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,ch))
})();var state__5821__auto__ = (function (){var statearr_50945 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_50945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_50945;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__,ch))
);
return c__5819__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__50948){
var f = cljs.core.first(arglist__50948);
var args = cljs.core.rest(arglist__50948);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50952){var vec__50953 = p__50952;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50953,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50953,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__50954 = cljs.core.clj__GT_js(v);return JSON.stringify(G__50954);
})()));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = (function (){var G__50971 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50971) : cljs.core.atom.call(null,G__50971));
})();var c__5819__auto___50987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___50987,r){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___50987,r){
return (function (state_50976){var state_val_50977 = (state_50976[(1)]);if((state_val_50977 === (2)))
{var inst_50973 = (state_50976[(2)]);var inst_50974 = (function (){var G__50978 = r;var G__50979 = inst_50973;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50978,G__50979) : cljs.core.reset_BANG_.call(null,G__50978,G__50979));
})();var state_50976__$1 = state_50976;return cljs.core.async.impl.ioc_helpers.return_chan(state_50976__$1,inst_50974);
} else
{if((state_val_50977 === (1)))
{var state_50976__$1 = state_50976;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50976__$1,(2),comm);
} else
{return null;
}
}
});})(c__5819__auto___50987,r))
;return ((function (switch__5804__auto__,c__5819__auto___50987,r){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_50983 = [null,null,null,null,null,null,null];(statearr_50983[(0)] = state_machine__5805__auto__);
(statearr_50983[(1)] = (1));
return statearr_50983;
});
var state_machine__5805__auto____1 = (function (state_50976){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_50976);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e50984){if((e50984 instanceof Object))
{var ex__5808__auto__ = e50984;var statearr_50985_50988 = state_50976;(statearr_50985_50988[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50976);
return cljs.core.constant$keyword$1120;
} else
{throw e50984;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__50989 = state_50976;
state_50976 = G__50989;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_50976){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_50976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___50987,r))
})();var state__5821__auto__ = (function (){var statearr_50986 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_50986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___50987);
return statearr_50986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___50987,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__50990){
var id = cljs.core.first(arglist__50990);
arglist__50990 = cljs.core.next(arglist__50990);
var tolerance = cljs.core.first(arglist__50990);
var opts = cljs.core.rest(arglist__50990);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__50991){
var id = cljs.core.first(arglist__50991);
var opts = cljs.core.rest(arglist__50991);
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
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1139,ids,cljs.core.constant$keyword$1140,tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__50992){
var ids = cljs.core.first(arglist__50992);
arglist__50992 = cljs.core.next(arglist__50992);
var tolerance = cljs.core.first(arglist__50992);
var opts = cljs.core.rest(arglist__50992);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__50993){var map__50995 = p__50993;var map__50995__$1 = ((cljs.core.seq_QMARK_(map__50995))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50995):map__50995);var opts = map__50995__$1;var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50995__$1,cljs.core.constant$keyword$1141);var opts__$1 = cljs.core.flatten(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$1141)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1142,bounds,cljs.core.constant$keyword$1141,boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__50993 = null;if (arguments.length > 3) {
  p__50993 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__50993);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__50996){
var collection_id = cljs.core.first(arglist__50996);
arglist__50996 = cljs.core.next(arglist__50996);
var tolerance = cljs.core.first(arglist__50996);
arglist__50996 = cljs.core.next(arglist__50996);
var bounds = cljs.core.first(arglist__50996);
var p__50993 = cljs.core.rest(arglist__50996);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__50993);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__50997){var vec__50999 = p__50997;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50999,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1143,filter,cljs.core.constant$keyword$1142,bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__50997 = null;if (arguments.length > 6) {
  p__50997 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__50997);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__51000){
var index = cljs.core.first(arglist__51000);
arglist__51000 = cljs.core.next(arglist__51000);
var type = cljs.core.first(arglist__51000);
arglist__51000 = cljs.core.next(arglist__51000);
var blcoll = cljs.core.first(arglist__51000);
arglist__51000 = cljs.core.next(arglist__51000);
var attr = cljs.core.first(arglist__51000);
arglist__51000 = cljs.core.next(arglist__51000);
var filter = cljs.core.first(arglist__51000);
arglist__51000 = cljs.core.next(arglist__51000);
var bounds = cljs.core.first(arglist__51000);
var p__50997 = cljs.core.rest(arglist__51000);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__50997);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__51001){var vec__51003 = p__51001;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51003,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1144,statsattrs,cljs.core.constant$keyword$1143,filter,cljs.core.constant$keyword$1142,bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__51001 = null;if (arguments.length > 5) {
  p__51001 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__51001);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__51004){
var index = cljs.core.first(arglist__51004);
arglist__51004 = cljs.core.next(arglist__51004);
var type = cljs.core.first(arglist__51004);
arglist__51004 = cljs.core.next(arglist__51004);
var statsattrs = cljs.core.first(arglist__51004);
arglist__51004 = cljs.core.next(arglist__51004);
var filter = cljs.core.first(arglist__51004);
arglist__51004 = cljs.core.next(arglist__51004);
var bounds = cljs.core.first(arglist__51004);
var p__51001 = cljs.core.rest(arglist__51004);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__51001);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__51005){var vec__51007 = p__51005;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51007,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1145,max_count,cljs.core.constant$keyword$1146,attrs,cljs.core.constant$keyword$1143,filter,cljs.core.constant$keyword$1142,bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__51005 = null;if (arguments.length > 7) {
  p__51005 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__51005);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__51008){
var index = cljs.core.first(arglist__51008);
arglist__51008 = cljs.core.next(arglist__51008);
var type = cljs.core.first(arglist__51008);
arglist__51008 = cljs.core.next(arglist__51008);
var location_attr = cljs.core.first(arglist__51008);
arglist__51008 = cljs.core.next(arglist__51008);
var attrs = cljs.core.first(arglist__51008);
arglist__51008 = cljs.core.next(arglist__51008);
var max_count = cljs.core.first(arglist__51008);
arglist__51008 = cljs.core.next(arglist__51008);
var filter = cljs.core.first(arglist__51008);
arglist__51008 = cljs.core.next(arglist__51008);
var bounds = cljs.core.first(arglist__51008);
var p__51005 = cljs.core.rest(arglist__51008);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__51005);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__51009){var vec__51011 = p__51009;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51011,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1143,filter_spec,cljs.core.constant$keyword$1142,bounds,cljs.core.constant$keyword$1147,sort_spec,cljs.core.constant$keyword$1148,from,cljs.core.constant$keyword$1149,size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__51009 = null;if (arguments.length > 7) {
  p__51009 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__51009);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__51012){
var index = cljs.core.first(arglist__51012);
arglist__51012 = cljs.core.next(arglist__51012);
var type = cljs.core.first(arglist__51012);
arglist__51012 = cljs.core.next(arglist__51012);
var filter_spec = cljs.core.first(arglist__51012);
arglist__51012 = cljs.core.next(arglist__51012);
var bounds = cljs.core.first(arglist__51012);
arglist__51012 = cljs.core.next(arglist__51012);
var sort_spec = cljs.core.first(arglist__51012);
arglist__51012 = cljs.core.next(arglist__51012);
var from = cljs.core.first(arglist__51012);
arglist__51012 = cljs.core.next(arglist__51012);
var size = cljs.core.first(arglist__51012);
var p__51009 = cljs.core.rest(arglist__51012);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__51009);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1150,filter_spec,cljs.core.constant$keyword$1142,bounds,cljs.core.constant$keyword$1151,time_variable,cljs.core.constant$keyword$1152,after,cljs.core.constant$keyword$1153,before,cljs.core.constant$keyword$1154,interval,cljs.core.constant$keyword$1155,metric_variables], null));
});
