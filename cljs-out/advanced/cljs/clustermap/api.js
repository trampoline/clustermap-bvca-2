// Compiled by ClojureScript 0.0-2322
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
var AJAX__delegate = function (url,p__42549){var map__42553 = p__42549;var map__42553__$1 = ((cljs.core.seq_QMARK_(map__42553))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42553):map__42553);var opts = map__42553__$1;var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42553__$1,cljs.core.constant$keyword$1108);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42553__$1,cljs.core.constant$keyword$1109);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42553__$1,cljs.core.constant$keyword$1110);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__42553,map__42553__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__42553,map__42553__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$1089,true], 0));
}
});})(comm,map__42553,map__42553__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__42553,map__42553__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__42555 = method;var G__42555__$1 = (((G__42555 == null))?null:cljs.core.name(G__42555));var G__42555__$2 = (((G__42555__$1 == null))?null:clojure.string.upper_case(G__42555__$1));return G__42555__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__42549 = null;if (arguments.length > 1) {
  p__42549 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__42549);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__42556){
var url = cljs.core.first(arglist__42556);
var p__42549 = cljs.core.rest(arglist__42556);
return AJAX__delegate(url,p__42549);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__42557){var map__42559 = p__42557;var map__42559__$1 = ((cljs.core.seq_QMARK_(map__42559))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42559):map__42559);var opts = map__42559__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1109,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__42557 = null;if (arguments.length > 1) {
  p__42557 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__42557);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__42560){
var url = cljs.core.first(arglist__42560);
var p__42557 = cljs.core.rest(arglist__42560);
return GET__delegate(url,p__42557);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__42561){var map__42563 = p__42561;var map__42563__$1 = ((cljs.core.seq_QMARK_(map__42563))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42563):map__42563);var opts = map__42563__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1109,"POST",cljs.core.constant$keyword$1108,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__42561 = null;if (arguments.length > 2) {
  p__42561 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__42561);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__42564){
var url = cljs.core.first(arglist__42564);
arglist__42564 = cljs.core.next(arglist__42564);
var content = cljs.core.first(arglist__42564);
var p__42561 = cljs.core.rest(arglist__42564);
return POST__delegate(url,content,p__42561);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__42565){var map__42567 = p__42565;var map__42567__$1 = ((cljs.core.seq_QMARK_(map__42567))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42567):map__42567);var opts = map__42567__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1109,"PUT",cljs.core.constant$keyword$1108,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__42565 = null;if (arguments.length > 2) {
  p__42565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__42565);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__42568){
var url = cljs.core.first(arglist__42568);
arglist__42568 = cljs.core.next(arglist__42568);
var content = cljs.core.first(arglist__42568);
var p__42565 = cljs.core.rest(arglist__42568);
return PUT__delegate(url,content,p__42565);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_42703){var state_val_42704 = (state_42703[(1)]);if((state_val_42704 === (7)))
{var inst_42660 = (state_42703[(7)]);var inst_42659 = (state_42703[(2)]);var inst_42660__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42659,(0),null);var inst_42661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42659,(1),null);var inst_42662 = cljs.core.sequential_QMARK_(inst_42660__$1);var state_42703__$1 = (function (){var statearr_42705 = state_42703;(statearr_42705[(7)] = inst_42660__$1);
(statearr_42705[(8)] = inst_42661);
return statearr_42705;
})();if(inst_42662)
{var statearr_42706_42741 = state_42703__$1;(statearr_42706_42741[(1)] = (8));
} else
{var statearr_42707_42742 = state_42703__$1;(statearr_42707_42742[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (20)))
{var inst_42660 = (state_42703[(7)]);var state_42703__$1 = state_42703;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42703__$1,(23),inst_42660);
} else
{if((state_val_42704 === (1)))
{var state_42703__$1 = state_42703;var statearr_42708_42743 = state_42703__$1;(statearr_42708_42743[(2)] = null);
(statearr_42708_42743[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (4)))
{var state_42703__$1 = state_42703;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42703__$1,(7),ocomm);
} else
{if((state_val_42704 === (15)))
{var inst_42683 = (state_42703[(2)]);var state_42703__$1 = state_42703;var statearr_42709_42744 = state_42703__$1;(statearr_42709_42744[(2)] = inst_42683);
(statearr_42709_42744[(1)] = (12));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (21)))
{var state_42703__$1 = state_42703;var statearr_42710_42745 = state_42703__$1;(statearr_42710_42745[(2)] = null);
(statearr_42710_42745[(1)] = (22));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (13)))
{var inst_42666 = (state_42703[(9)]);var state_42703__$1 = state_42703;var statearr_42711_42746 = state_42703__$1;(statearr_42711_42746[(2)] = inst_42666);
(statearr_42711_42746[(1)] = (15));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (22)))
{var inst_42692 = (state_42703[(2)]);var state_42703__$1 = state_42703;var statearr_42712_42747 = state_42703__$1;(statearr_42712_42747[(2)] = inst_42692);
(statearr_42712_42747[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (6)))
{var inst_42699 = (state_42703[(2)]);var state_42703__$1 = state_42703;var statearr_42713_42748 = state_42703__$1;(statearr_42713_42748[(2)] = inst_42699);
(statearr_42713_42748[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (17)))
{var state_42703__$1 = state_42703;var statearr_42714_42749 = state_42703__$1;(statearr_42714_42749[(2)] = null);
(statearr_42714_42749[(1)] = (18));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (3)))
{var inst_42701 = (state_42703[(2)]);var state_42703__$1 = state_42703;return cljs.core.async.impl.ioc_helpers.return_chan(state_42703__$1,inst_42701);
} else
{if((state_val_42704 === (12)))
{var inst_42685 = (state_42703[(2)]);var state_42703__$1 = state_42703;var statearr_42715_42750 = state_42703__$1;(statearr_42715_42750[(2)] = inst_42685);
(statearr_42715_42750[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (2)))
{var state_42703__$1 = state_42703;var statearr_42716_42751 = state_42703__$1;(statearr_42716_42751[(1)] = (4));

return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (23)))
{var inst_42689 = (state_42703[(2)]);var state_42703__$1 = state_42703;var statearr_42718_42752 = state_42703__$1;(statearr_42718_42752[(2)] = inst_42689);
(statearr_42718_42752[(1)] = (22));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (19)))
{var inst_42676 = (state_42703[(2)]);var state_42703__$1 = state_42703;var statearr_42719_42753 = state_42703__$1;(statearr_42719_42753[(2)] = inst_42676);
(statearr_42719_42753[(1)] = (18));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (11)))
{var inst_42665 = (state_42703[(10)]);var inst_42668 = cljs.core.empty_QMARK_(inst_42665);var state_42703__$1 = state_42703;if(inst_42668)
{var statearr_42720_42754 = state_42703__$1;(statearr_42720_42754[(1)] = (13));
} else
{var statearr_42721_42755 = state_42703__$1;(statearr_42721_42755[(1)] = (14));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (9)))
{var inst_42660 = (state_42703[(7)]);var state_42703__$1 = state_42703;if(cljs.core.truth_(inst_42660))
{var statearr_42722_42756 = state_42703__$1;(statearr_42722_42756[(1)] = (20));
} else
{var statearr_42723_42757 = state_42703__$1;(statearr_42723_42757[(1)] = (21));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (5)))
{var state_42703__$1 = state_42703;var statearr_42724_42758 = state_42703__$1;(statearr_42724_42758[(2)] = null);
(statearr_42724_42758[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (14)))
{var inst_42665 = (state_42703[(10)]);var inst_42671 = cljs.core.rest(inst_42665);var inst_42672 = cljs.core.first(inst_42665);var state_42703__$1 = (function (){var statearr_42725 = state_42703;(statearr_42725[(11)] = inst_42671);
return statearr_42725;
})();if(cljs.core.truth_(inst_42672))
{var statearr_42726_42759 = state_42703__$1;(statearr_42726_42759[(1)] = (16));
} else
{var statearr_42727_42760 = state_42703__$1;(statearr_42727_42760[(1)] = (17));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (16)))
{var inst_42665 = (state_42703[(10)]);var inst_42674 = cljs.core.first(inst_42665);var state_42703__$1 = state_42703;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42703__$1,(19),inst_42674);
} else
{if((state_val_42704 === (10)))
{var inst_42661 = (state_42703[(8)]);var inst_42694 = (state_42703[(2)]);var inst_42695 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_42694,inst_42661);var state_42703__$1 = (function (){var statearr_42728 = state_42703;(statearr_42728[(12)] = inst_42695);
return statearr_42728;
})();var statearr_42729_42761 = state_42703__$1;(statearr_42729_42761[(2)] = null);
(statearr_42729_42761[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (18)))
{var inst_42666 = (state_42703[(9)]);var inst_42671 = (state_42703[(11)]);var inst_42679 = (state_42703[(2)]);var inst_42680 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_42666,inst_42679);var inst_42665 = inst_42671;var inst_42666__$1 = inst_42680;var state_42703__$1 = (function (){var statearr_42730 = state_42703;(statearr_42730[(9)] = inst_42666__$1);
(statearr_42730[(10)] = inst_42665);
return statearr_42730;
})();var statearr_42731_42762 = state_42703__$1;(statearr_42731_42762[(2)] = null);
(statearr_42731_42762[(1)] = (11));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42704 === (8)))
{var inst_42660 = (state_42703[(7)]);var inst_42664 = cljs.core.PersistentVector.EMPTY;var inst_42665 = inst_42660;var inst_42666 = inst_42664;var state_42703__$1 = (function (){var statearr_42732 = state_42703;(statearr_42732[(9)] = inst_42666);
(statearr_42732[(10)] = inst_42665);
return statearr_42732;
})();var statearr_42733_42763 = state_42703__$1;(statearr_42733_42763[(2)] = null);
(statearr_42733_42763[(1)] = (11));
return cljs.core.constant$keyword$1094;
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42737 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42737[(0)] = state_machine__5694__auto__);
(statearr_42737[(1)] = (1));
return statearr_42737;
});
var state_machine__5694__auto____1 = (function (state_42703){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42703);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42738){if((e42738 instanceof Object))
{var ex__5697__auto__ = e42738;var statearr_42739_42764 = state_42703;(statearr_42739_42764[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42703);
return cljs.core.constant$keyword$1094;
} else
{throw e42738;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__42765 = state_42703;
state_42703 = G__42765;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42703){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_42740 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_42740;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
var G__42768__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__42767 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42767,(0),null);var result_handler_args = cljs.core.nthnext(vec__42767,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__42768 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__42768__delegate.call(this,req_args);};
G__42768.cljs$lang$maxFixedArity = 0;
G__42768.cljs$lang$applyTo = (function (arglist__42769){
var req_args = cljs.core.seq(arglist__42769);
return G__42768__delegate(req_args);
});
G__42768.cljs$core$IFn$_invoke$arity$variadic = G__42768__delegate;
return G__42768;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,ch){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,ch){
return (function (state_42787){var state_val_42788 = (state_42787[(1)]);if((state_val_42788 === (2)))
{var inst_42784 = (state_42787[(2)]);var inst_42785 = console.log(inst_42784);var state_42787__$1 = state_42787;return cljs.core.async.impl.ioc_helpers.return_chan(state_42787__$1,inst_42785);
} else
{if((state_val_42788 === (1)))
{var state_42787__$1 = state_42787;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42787__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42792 = [null,null,null,null,null,null,null];(statearr_42792[(0)] = state_machine__5694__auto__);
(statearr_42792[(1)] = (1));
return statearr_42792;
});
var state_machine__5694__auto____1 = (function (state_42787){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42787);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42793){if((e42793 instanceof Object))
{var ex__5697__auto__ = e42793;var statearr_42794_42796 = state_42787;(statearr_42794_42796[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42787);
return cljs.core.constant$keyword$1094;
} else
{throw e42793;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__42797 = state_42787;
state_42787 = G__42797;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42787){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_42795 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_42795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,ch))
);
return c__5708__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__42798){
var f = cljs.core.first(arglist__42798);
var args = cljs.core.rest(arglist__42798);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42801){var vec__42802 = p__42801;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42802,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42802,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var c__5708__auto___42829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42829,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42829,r){
return (function (state_42820){var state_val_42821 = (state_42820[(1)]);if((state_val_42821 === (2)))
{var inst_42817 = (state_42820[(2)]);var inst_42818 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(r,inst_42817) : cljs.core.reset_BANG_.call(null,r,inst_42817));var state_42820__$1 = state_42820;return cljs.core.async.impl.ioc_helpers.return_chan(state_42820__$1,inst_42818);
} else
{if((state_val_42821 === (1)))
{var state_42820__$1 = state_42820;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42820__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___42829,r))
;return ((function (switch__5693__auto__,c__5708__auto___42829,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42825 = [null,null,null,null,null,null,null];(statearr_42825[(0)] = state_machine__5694__auto__);
(statearr_42825[(1)] = (1));
return statearr_42825;
});
var state_machine__5694__auto____1 = (function (state_42820){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42820);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42826){if((e42826 instanceof Object))
{var ex__5697__auto__ = e42826;var statearr_42827_42830 = state_42820;(statearr_42827_42830[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42820);
return cljs.core.constant$keyword$1094;
} else
{throw e42826;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__42831 = state_42820;
state_42820 = G__42831;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42820){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42829,r))
})();var state__5710__auto__ = (function (){var statearr_42828 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42829);
return statearr_42828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42829,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__42832){
var id = cljs.core.first(arglist__42832);
arglist__42832 = cljs.core.next(arglist__42832);
var tolerance = cljs.core.first(arglist__42832);
var opts = cljs.core.rest(arglist__42832);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__42833){
var id = cljs.core.first(arglist__42833);
var opts = cljs.core.rest(arglist__42833);
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
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1111,ids,cljs.core.constant$keyword$1112,tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__42834){
var ids = cljs.core.first(arglist__42834);
arglist__42834 = cljs.core.next(arglist__42834);
var tolerance = cljs.core.first(arglist__42834);
var opts = cljs.core.rest(arglist__42834);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__42835){var map__42837 = p__42835;var map__42837__$1 = ((cljs.core.seq_QMARK_(map__42837))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42837):map__42837);var opts = map__42837__$1;var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42837__$1,cljs.core.constant$keyword$1113);var opts__$1 = cljs.core.flatten(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$1113)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1114,bounds,cljs.core.constant$keyword$1113,boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__42835 = null;if (arguments.length > 3) {
  p__42835 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__42835);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__42838){
var collection_id = cljs.core.first(arglist__42838);
arglist__42838 = cljs.core.next(arglist__42838);
var tolerance = cljs.core.first(arglist__42838);
arglist__42838 = cljs.core.next(arglist__42838);
var bounds = cljs.core.first(arglist__42838);
var p__42835 = cljs.core.rest(arglist__42838);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__42835);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__42839){var vec__42841 = p__42839;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42841,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1115,filter,cljs.core.constant$keyword$1114,bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__42839 = null;if (arguments.length > 6) {
  p__42839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__42839);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__42842){
var index = cljs.core.first(arglist__42842);
arglist__42842 = cljs.core.next(arglist__42842);
var type = cljs.core.first(arglist__42842);
arglist__42842 = cljs.core.next(arglist__42842);
var blcoll = cljs.core.first(arglist__42842);
arglist__42842 = cljs.core.next(arglist__42842);
var attr = cljs.core.first(arglist__42842);
arglist__42842 = cljs.core.next(arglist__42842);
var filter = cljs.core.first(arglist__42842);
arglist__42842 = cljs.core.next(arglist__42842);
var bounds = cljs.core.first(arglist__42842);
var p__42839 = cljs.core.rest(arglist__42842);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__42839);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__42843){var vec__42845 = p__42843;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42845,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1116,statsattrs,cljs.core.constant$keyword$1115,filter,cljs.core.constant$keyword$1114,bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__42843 = null;if (arguments.length > 5) {
  p__42843 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__42843);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__42846){
var index = cljs.core.first(arglist__42846);
arglist__42846 = cljs.core.next(arglist__42846);
var type = cljs.core.first(arglist__42846);
arglist__42846 = cljs.core.next(arglist__42846);
var statsattrs = cljs.core.first(arglist__42846);
arglist__42846 = cljs.core.next(arglist__42846);
var filter = cljs.core.first(arglist__42846);
arglist__42846 = cljs.core.next(arglist__42846);
var bounds = cljs.core.first(arglist__42846);
var p__42843 = cljs.core.rest(arglist__42846);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__42843);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__42847){var vec__42849 = p__42847;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42849,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1117,max_count,cljs.core.constant$keyword$1118,attrs,cljs.core.constant$keyword$1115,filter,cljs.core.constant$keyword$1114,bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__42847 = null;if (arguments.length > 7) {
  p__42847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__42847);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__42850){
var index = cljs.core.first(arglist__42850);
arglist__42850 = cljs.core.next(arglist__42850);
var type = cljs.core.first(arglist__42850);
arglist__42850 = cljs.core.next(arglist__42850);
var location_attr = cljs.core.first(arglist__42850);
arglist__42850 = cljs.core.next(arglist__42850);
var attrs = cljs.core.first(arglist__42850);
arglist__42850 = cljs.core.next(arglist__42850);
var max_count = cljs.core.first(arglist__42850);
arglist__42850 = cljs.core.next(arglist__42850);
var filter = cljs.core.first(arglist__42850);
arglist__42850 = cljs.core.next(arglist__42850);
var bounds = cljs.core.first(arglist__42850);
var p__42847 = cljs.core.rest(arglist__42850);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__42847);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__42851){var vec__42853 = p__42851;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42853,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1115,filter_spec,cljs.core.constant$keyword$1114,bounds,cljs.core.constant$keyword$1119,sort_spec,cljs.core.constant$keyword$1120,from,cljs.core.constant$keyword$1121,size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__42851 = null;if (arguments.length > 7) {
  p__42851 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__42851);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__42854){
var index = cljs.core.first(arglist__42854);
arglist__42854 = cljs.core.next(arglist__42854);
var type = cljs.core.first(arglist__42854);
arglist__42854 = cljs.core.next(arglist__42854);
var filter_spec = cljs.core.first(arglist__42854);
arglist__42854 = cljs.core.next(arglist__42854);
var bounds = cljs.core.first(arglist__42854);
arglist__42854 = cljs.core.next(arglist__42854);
var sort_spec = cljs.core.first(arglist__42854);
arglist__42854 = cljs.core.next(arglist__42854);
var from = cljs.core.first(arglist__42854);
arglist__42854 = cljs.core.next(arglist__42854);
var size = cljs.core.first(arglist__42854);
var p__42851 = cljs.core.rest(arglist__42854);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__42851);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1122,filter_spec,cljs.core.constant$keyword$1114,bounds,cljs.core.constant$keyword$1123,time_variable,cljs.core.constant$keyword$1124,after,cljs.core.constant$keyword$1125,before,cljs.core.constant$keyword$1126,interval,cljs.core.constant$keyword$1127,metric_variables], null));
});
