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
var AJAX__delegate = function (url,p__33640){var map__33644 = p__33640;var map__33644__$1 = ((cljs.core.seq_QMARK_(map__33644))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33644):map__33644);var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33644__$1,cljs.core.constant$keyword$779);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33644__$1,cljs.core.constant$keyword$780);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33644__$1,cljs.core.constant$keyword$781);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__33644,map__33644__$1,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__33644,map__33644__$1,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$760,true], 0));
}
});})(comm,map__33644,map__33644__$1,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__33644,map__33644__$1,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__33646 = method;var G__33646__$1 = (((G__33646 == null))?null:cljs.core.name(G__33646));var G__33646__$2 = (((G__33646__$1 == null))?null:clojure.string.upper_case(G__33646__$1));return G__33646__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__33640 = null;if (arguments.length > 1) {
  p__33640 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__33640);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__33647){
var url = cljs.core.first(arglist__33647);
var p__33640 = cljs.core.rest(arglist__33647);
return AJAX__delegate(url,p__33640);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__33648){var map__33650 = p__33648;var map__33650__$1 = ((cljs.core.seq_QMARK_(map__33650))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33650):map__33650);var opts = map__33650__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$780,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__33648 = null;if (arguments.length > 1) {
  p__33648 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__33648);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__33651){
var url = cljs.core.first(arglist__33651);
var p__33648 = cljs.core.rest(arglist__33651);
return GET__delegate(url,p__33648);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__33652){var map__33654 = p__33652;var map__33654__$1 = ((cljs.core.seq_QMARK_(map__33654))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33654):map__33654);var opts = map__33654__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$780,"POST",cljs.core.constant$keyword$779,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__33652 = null;if (arguments.length > 2) {
  p__33652 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__33652);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__33655){
var url = cljs.core.first(arglist__33655);
arglist__33655 = cljs.core.next(arglist__33655);
var content = cljs.core.first(arglist__33655);
var p__33652 = cljs.core.rest(arglist__33655);
return POST__delegate(url,content,p__33652);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__33656){var map__33658 = p__33656;var map__33658__$1 = ((cljs.core.seq_QMARK_(map__33658))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33658):map__33658);var opts = map__33658__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$780,"PUT",cljs.core.constant$keyword$779,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__33656 = null;if (arguments.length > 2) {
  p__33656 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__33656);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__33659){
var url = cljs.core.first(arglist__33659);
arglist__33659 = cljs.core.next(arglist__33659);
var content = cljs.core.first(arglist__33659);
var p__33656 = cljs.core.rest(arglist__33659);
return PUT__delegate(url,content,p__33656);
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
return (function (state_33792){var state_val_33793 = (state_33792[(1)]);if((state_val_33793 === (7)))
{var inst_33750 = (state_33792[(7)]);var inst_33749 = (state_33792[(2)]);var inst_33750__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33749,(0),null);var inst_33751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33749,(1),null);var inst_33752 = cljs.core.sequential_QMARK_(inst_33750__$1);var state_33792__$1 = (function (){var statearr_33794 = state_33792;(statearr_33794[(8)] = inst_33751);
(statearr_33794[(7)] = inst_33750__$1);
return statearr_33794;
})();if(inst_33752)
{var statearr_33795_33830 = state_33792__$1;(statearr_33795_33830[(1)] = (8));
} else
{var statearr_33796_33831 = state_33792__$1;(statearr_33796_33831[(1)] = (9));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (20)))
{var inst_33750 = (state_33792[(7)]);var state_33792__$1 = state_33792;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33792__$1,(23),inst_33750);
} else
{if((state_val_33793 === (1)))
{var state_33792__$1 = state_33792;var statearr_33797_33832 = state_33792__$1;(statearr_33797_33832[(2)] = null);
(statearr_33797_33832[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (4)))
{var state_33792__$1 = state_33792;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33792__$1,(7),ocomm);
} else
{if((state_val_33793 === (15)))
{var inst_33772 = (state_33792[(2)]);var state_33792__$1 = state_33792;var statearr_33798_33833 = state_33792__$1;(statearr_33798_33833[(2)] = inst_33772);
(statearr_33798_33833[(1)] = (12));
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (21)))
{var state_33792__$1 = state_33792;var statearr_33799_33834 = state_33792__$1;(statearr_33799_33834[(2)] = null);
(statearr_33799_33834[(1)] = (22));
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (13)))
{var inst_33755 = (state_33792[(9)]);var state_33792__$1 = state_33792;var statearr_33800_33835 = state_33792__$1;(statearr_33800_33835[(2)] = inst_33755);
(statearr_33800_33835[(1)] = (15));
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (22)))
{var inst_33781 = (state_33792[(2)]);var state_33792__$1 = state_33792;var statearr_33801_33836 = state_33792__$1;(statearr_33801_33836[(2)] = inst_33781);
(statearr_33801_33836[(1)] = (10));
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (6)))
{var inst_33788 = (state_33792[(2)]);var state_33792__$1 = state_33792;var statearr_33802_33837 = state_33792__$1;(statearr_33802_33837[(2)] = inst_33788);
(statearr_33802_33837[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (17)))
{var state_33792__$1 = state_33792;var statearr_33803_33838 = state_33792__$1;(statearr_33803_33838[(2)] = null);
(statearr_33803_33838[(1)] = (18));
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (3)))
{var inst_33790 = (state_33792[(2)]);var state_33792__$1 = state_33792;return cljs.core.async.impl.ioc_helpers.return_chan(state_33792__$1,inst_33790);
} else
{if((state_val_33793 === (12)))
{var inst_33774 = (state_33792[(2)]);var state_33792__$1 = state_33792;var statearr_33804_33839 = state_33792__$1;(statearr_33804_33839[(2)] = inst_33774);
(statearr_33804_33839[(1)] = (10));
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (2)))
{var state_33792__$1 = state_33792;if(true)
{var statearr_33805_33840 = state_33792__$1;(statearr_33805_33840[(1)] = (4));
} else
{var statearr_33806_33841 = state_33792__$1;(statearr_33806_33841[(1)] = (5));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (23)))
{var inst_33778 = (state_33792[(2)]);var state_33792__$1 = state_33792;var statearr_33807_33842 = state_33792__$1;(statearr_33807_33842[(2)] = inst_33778);
(statearr_33807_33842[(1)] = (22));
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (19)))
{var inst_33765 = (state_33792[(2)]);var state_33792__$1 = state_33792;var statearr_33808_33843 = state_33792__$1;(statearr_33808_33843[(2)] = inst_33765);
(statearr_33808_33843[(1)] = (18));
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (11)))
{var inst_33754 = (state_33792[(10)]);var inst_33757 = cljs.core.empty_QMARK_(inst_33754);var state_33792__$1 = state_33792;if(inst_33757)
{var statearr_33809_33844 = state_33792__$1;(statearr_33809_33844[(1)] = (13));
} else
{var statearr_33810_33845 = state_33792__$1;(statearr_33810_33845[(1)] = (14));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (9)))
{var inst_33750 = (state_33792[(7)]);var state_33792__$1 = state_33792;if(cljs.core.truth_(inst_33750))
{var statearr_33811_33846 = state_33792__$1;(statearr_33811_33846[(1)] = (20));
} else
{var statearr_33812_33847 = state_33792__$1;(statearr_33812_33847[(1)] = (21));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (5)))
{var state_33792__$1 = state_33792;var statearr_33813_33848 = state_33792__$1;(statearr_33813_33848[(2)] = null);
(statearr_33813_33848[(1)] = (6));
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (14)))
{var inst_33754 = (state_33792[(10)]);var inst_33760 = cljs.core.rest(inst_33754);var inst_33761 = cljs.core.first(inst_33754);var state_33792__$1 = (function (){var statearr_33814 = state_33792;(statearr_33814[(11)] = inst_33760);
return statearr_33814;
})();if(cljs.core.truth_(inst_33761))
{var statearr_33815_33849 = state_33792__$1;(statearr_33815_33849[(1)] = (16));
} else
{var statearr_33816_33850 = state_33792__$1;(statearr_33816_33850[(1)] = (17));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (16)))
{var inst_33754 = (state_33792[(10)]);var inst_33763 = cljs.core.first(inst_33754);var state_33792__$1 = state_33792;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33792__$1,(19),inst_33763);
} else
{if((state_val_33793 === (10)))
{var inst_33751 = (state_33792[(8)]);var inst_33783 = (state_33792[(2)]);var inst_33784 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_33783,inst_33751);var state_33792__$1 = (function (){var statearr_33817 = state_33792;(statearr_33817[(12)] = inst_33784);
return statearr_33817;
})();var statearr_33818_33851 = state_33792__$1;(statearr_33818_33851[(2)] = null);
(statearr_33818_33851[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (18)))
{var inst_33760 = (state_33792[(11)]);var inst_33755 = (state_33792[(9)]);var inst_33768 = (state_33792[(2)]);var inst_33769 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_33755,inst_33768);var inst_33754 = inst_33760;var inst_33755__$1 = inst_33769;var state_33792__$1 = (function (){var statearr_33819 = state_33792;(statearr_33819[(10)] = inst_33754);
(statearr_33819[(9)] = inst_33755__$1);
return statearr_33819;
})();var statearr_33820_33852 = state_33792__$1;(statearr_33820_33852[(2)] = null);
(statearr_33820_33852[(1)] = (11));
return cljs.core.constant$keyword$765;
} else
{if((state_val_33793 === (8)))
{var inst_33750 = (state_33792[(7)]);var inst_33754 = inst_33750;var inst_33755 = cljs.core.PersistentVector.EMPTY;var state_33792__$1 = (function (){var statearr_33821 = state_33792;(statearr_33821[(10)] = inst_33754);
(statearr_33821[(9)] = inst_33755);
return statearr_33821;
})();var statearr_33822_33853 = state_33792__$1;(statearr_33822_33853[(2)] = null);
(statearr_33822_33853[(1)] = (11));
return cljs.core.constant$keyword$765;
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
var state_machine__5679__auto____0 = (function (){var statearr_33826 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33826[(0)] = state_machine__5679__auto__);
(statearr_33826[(1)] = (1));
return statearr_33826;
});
var state_machine__5679__auto____1 = (function (state_33792){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_33792);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e33827){if((e33827 instanceof Object))
{var ex__5682__auto__ = e33827;var statearr_33828_33854 = state_33792;(statearr_33828_33854[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33792);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e33827;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__33855 = state_33792;
state_33792 = G__33855;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_33792){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_33792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_33829 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_33829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_33829;
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
var G__33858__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__33857 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33857,(0),null);var result_handler_args = cljs.core.nthnext(vec__33857,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__33858 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__33858__delegate.call(this,req_args);};
G__33858.cljs$lang$maxFixedArity = 0;
G__33858.cljs$lang$applyTo = (function (arglist__33859){
var req_args = cljs.core.seq(arglist__33859);
return G__33858__delegate(req_args);
});
G__33858.cljs$core$IFn$_invoke$arity$variadic = G__33858__delegate;
return G__33858;
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
return (function (state_33877){var state_val_33878 = (state_33877[(1)]);if((state_val_33878 === (2)))
{var inst_33874 = (state_33877[(2)]);var inst_33875 = console.log(inst_33874);var state_33877__$1 = state_33877;return cljs.core.async.impl.ioc_helpers.return_chan(state_33877__$1,inst_33875);
} else
{if((state_val_33878 === (1)))
{var state_33877__$1 = state_33877;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33877__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_33882 = [null,null,null,null,null,null,null];(statearr_33882[(0)] = state_machine__5679__auto__);
(statearr_33882[(1)] = (1));
return statearr_33882;
});
var state_machine__5679__auto____1 = (function (state_33877){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_33877);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e33883){if((e33883 instanceof Object))
{var ex__5682__auto__ = e33883;var statearr_33884_33886 = state_33877;(statearr_33884_33886[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33877);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e33883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__33887 = state_33877;
state_33877 = G__33887;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_33877){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_33877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_33885 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_33885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_33885;
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
log_api.cljs$lang$applyTo = (function (arglist__33888){
var f = cljs.core.first(arglist__33888);
var args = cljs.core.rest(arglist__33888);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33891){var vec__33892 = p__33891;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33892,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33892,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var c__5693__auto___33919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___33919,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___33919,r){
return (function (state_33910){var state_val_33911 = (state_33910[(1)]);if((state_val_33911 === (2)))
{var inst_33907 = (state_33910[(2)]);var inst_33908 = cljs.core.reset_BANG_(r,inst_33907);var state_33910__$1 = state_33910;return cljs.core.async.impl.ioc_helpers.return_chan(state_33910__$1,inst_33908);
} else
{if((state_val_33911 === (1)))
{var state_33910__$1 = state_33910;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33910__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___33919,r))
;return ((function (switch__5678__auto__,c__5693__auto___33919,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_33915 = [null,null,null,null,null,null,null];(statearr_33915[(0)] = state_machine__5679__auto__);
(statearr_33915[(1)] = (1));
return statearr_33915;
});
var state_machine__5679__auto____1 = (function (state_33910){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_33910);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e33916){if((e33916 instanceof Object))
{var ex__5682__auto__ = e33916;var statearr_33917_33920 = state_33910;(statearr_33917_33920[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33910);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e33916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__33921 = state_33910;
state_33910 = G__33921;
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
;})(switch__5678__auto__,c__5693__auto___33919,r))
})();var state__5695__auto__ = (function (){var statearr_33918 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_33918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___33919);
return statearr_33918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___33919,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__33922){
var id = cljs.core.first(arglist__33922);
arglist__33922 = cljs.core.next(arglist__33922);
var tolerance = cljs.core.first(arglist__33922);
var opts = cljs.core.rest(arglist__33922);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__33923){
var id = cljs.core.first(arglist__33923);
var opts = cljs.core.rest(arglist__33923);
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
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,p__33924){var vec__33926 = p__33924;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33926,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$782,filter], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,var_args){
var p__33924 = null;if (arguments.length > 5) {
  p__33924 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,p__33924);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 5;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__33927){
var index = cljs.core.first(arglist__33927);
arglist__33927 = cljs.core.next(arglist__33927);
var type = cljs.core.first(arglist__33927);
arglist__33927 = cljs.core.next(arglist__33927);
var blcoll = cljs.core.first(arglist__33927);
arglist__33927 = cljs.core.next(arglist__33927);
var attr = cljs.core.first(arglist__33927);
arglist__33927 = cljs.core.next(arglist__33927);
var filter = cljs.core.first(arglist__33927);
var p__33924 = cljs.core.rest(arglist__33927);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,p__33924);
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
var portfolio_company_sites__delegate = function (p__33928){var vec__33930 = p__33928;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33930,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$783,(100),cljs.core.constant$keyword$784,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$785,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__33928 = null;if (arguments.length > 0) {
  p__33928 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__33928);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__33931){
var p__33928 = cljs.core.seq(arglist__33931);
return portfolio_company_sites__delegate(p__33928);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__33932){var vec__33934 = p__33932;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33934,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$783,(100),cljs.core.constant$keyword$784,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$785,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__33932 = null;if (arguments.length > 0) {
  p__33932 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__33932);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__33935){
var p__33932 = cljs.core.seq(arglist__33935);
return portfolio_company_sites_by_company__delegate(p__33932);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__33936){var vec__33938 = p__33936;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33938,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__33936 = null;if (arguments.length > 0) {
  p__33936 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__33936);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__33939){
var p__33936 = cljs.core.seq(arglist__33939);
return portfolio_company_locations__delegate(p__33936);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__33940){var vec__33942 = p__33940;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33942,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__33940 = null;if (arguments.length > 0) {
  p__33940 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__33940);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__33943){
var p__33940 = cljs.core.seq(arglist__33943);
return portfolio_company_site_stats__delegate(p__33940);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__33944){var vec__33946 = p__33944;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33946,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__33944 = null;if (arguments.length > 0) {
  p__33944 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__33944);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__33947){
var p__33944 = cljs.core.seq(arglist__33947);
return portfolio_company_site_account_timelines__delegate(p__33944);
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
var investment_account_timelines__delegate = function (p__33948){var vec__33950 = p__33948;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33950,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_account_timelines = function (var_args){
var p__33948 = null;if (arguments.length > 0) {
  p__33948 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__33948);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__33951){
var p__33948 = cljs.core.seq(arglist__33951);
return investment_account_timelines__delegate(p__33948);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__33952){var vec__33954 = p__33952;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33954,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_stats = function (var_args){
var p__33952 = null;if (arguments.length > 0) {
  p__33952 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__33952);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__33955){
var p__33952 = cljs.core.seq(arglist__33955);
return investment_stats__delegate(p__33952);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__33956){var vec__33958 = p__33956;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33958,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$783,(50),cljs.core.constant$keyword$786,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$787,"desc"], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__33956 = null;if (arguments.length > 0) {
  p__33956 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__33956);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__33959){
var p__33956 = cljs.core.seq(arglist__33959);
return investment_aggs__delegate(p__33956);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__33960){var vec__33962 = p__33960;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33962,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$783,(50),cljs.core.constant$keyword$786,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$788,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$789,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investments = function (var_args){
var p__33960 = null;if (arguments.length > 0) {
  p__33960 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__33960);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__33963){
var p__33960 = cljs.core.seq(arglist__33963);
return investments__delegate(p__33960);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
