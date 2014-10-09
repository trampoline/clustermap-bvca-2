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
var AJAX__delegate = function (url,p__42543){var map__42547 = p__42543;var map__42547__$1 = ((cljs.core.seq_QMARK_(map__42547))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42547):map__42547);var opts = map__42547__$1;var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42547__$1,cljs.core.constant$keyword$1108);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42547__$1,cljs.core.constant$keyword$1109);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42547__$1,cljs.core.constant$keyword$1110);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__42547,map__42547__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__42547,map__42547__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$1089,true], 0));
}
});})(comm,map__42547,map__42547__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__42547,map__42547__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__42549 = method;var G__42549__$1 = (((G__42549 == null))?null:cljs.core.name(G__42549));var G__42549__$2 = (((G__42549__$1 == null))?null:clojure.string.upper_case(G__42549__$1));return G__42549__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__42543 = null;if (arguments.length > 1) {
  p__42543 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__42543);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__42550){
var url = cljs.core.first(arglist__42550);
var p__42543 = cljs.core.rest(arglist__42550);
return AJAX__delegate(url,p__42543);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__42551){var map__42553 = p__42551;var map__42553__$1 = ((cljs.core.seq_QMARK_(map__42553))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42553):map__42553);var opts = map__42553__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1109,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__42551 = null;if (arguments.length > 1) {
  p__42551 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__42551);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__42554){
var url = cljs.core.first(arglist__42554);
var p__42551 = cljs.core.rest(arglist__42554);
return GET__delegate(url,p__42551);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__42555){var map__42557 = p__42555;var map__42557__$1 = ((cljs.core.seq_QMARK_(map__42557))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42557):map__42557);var opts = map__42557__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1109,"POST",cljs.core.constant$keyword$1108,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__42555 = null;if (arguments.length > 2) {
  p__42555 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__42555);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__42558){
var url = cljs.core.first(arglist__42558);
arglist__42558 = cljs.core.next(arglist__42558);
var content = cljs.core.first(arglist__42558);
var p__42555 = cljs.core.rest(arglist__42558);
return POST__delegate(url,content,p__42555);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__42559){var map__42561 = p__42559;var map__42561__$1 = ((cljs.core.seq_QMARK_(map__42561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42561):map__42561);var opts = map__42561__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1109,"PUT",cljs.core.constant$keyword$1108,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__42559 = null;if (arguments.length > 2) {
  p__42559 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__42559);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__42562){
var url = cljs.core.first(arglist__42562);
arglist__42562 = cljs.core.next(arglist__42562);
var content = cljs.core.first(arglist__42562);
var p__42559 = cljs.core.rest(arglist__42562);
return PUT__delegate(url,content,p__42559);
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
return (function (state_42697){var state_val_42698 = (state_42697[(1)]);if((state_val_42698 === (7)))
{var inst_42654 = (state_42697[(7)]);var inst_42653 = (state_42697[(2)]);var inst_42654__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42653,(0),null);var inst_42655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42653,(1),null);var inst_42656 = cljs.core.sequential_QMARK_(inst_42654__$1);var state_42697__$1 = (function (){var statearr_42699 = state_42697;(statearr_42699[(7)] = inst_42654__$1);
(statearr_42699[(8)] = inst_42655);
return statearr_42699;
})();if(inst_42656)
{var statearr_42700_42735 = state_42697__$1;(statearr_42700_42735[(1)] = (8));
} else
{var statearr_42701_42736 = state_42697__$1;(statearr_42701_42736[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (20)))
{var inst_42654 = (state_42697[(7)]);var state_42697__$1 = state_42697;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42697__$1,(23),inst_42654);
} else
{if((state_val_42698 === (1)))
{var state_42697__$1 = state_42697;var statearr_42702_42737 = state_42697__$1;(statearr_42702_42737[(2)] = null);
(statearr_42702_42737[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (4)))
{var state_42697__$1 = state_42697;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42697__$1,(7),ocomm);
} else
{if((state_val_42698 === (15)))
{var inst_42677 = (state_42697[(2)]);var state_42697__$1 = state_42697;var statearr_42703_42738 = state_42697__$1;(statearr_42703_42738[(2)] = inst_42677);
(statearr_42703_42738[(1)] = (12));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (21)))
{var state_42697__$1 = state_42697;var statearr_42704_42739 = state_42697__$1;(statearr_42704_42739[(2)] = null);
(statearr_42704_42739[(1)] = (22));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (13)))
{var inst_42660 = (state_42697[(9)]);var state_42697__$1 = state_42697;var statearr_42705_42740 = state_42697__$1;(statearr_42705_42740[(2)] = inst_42660);
(statearr_42705_42740[(1)] = (15));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (22)))
{var inst_42686 = (state_42697[(2)]);var state_42697__$1 = state_42697;var statearr_42706_42741 = state_42697__$1;(statearr_42706_42741[(2)] = inst_42686);
(statearr_42706_42741[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (6)))
{var inst_42693 = (state_42697[(2)]);var state_42697__$1 = state_42697;var statearr_42707_42742 = state_42697__$1;(statearr_42707_42742[(2)] = inst_42693);
(statearr_42707_42742[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (17)))
{var state_42697__$1 = state_42697;var statearr_42708_42743 = state_42697__$1;(statearr_42708_42743[(2)] = null);
(statearr_42708_42743[(1)] = (18));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (3)))
{var inst_42695 = (state_42697[(2)]);var state_42697__$1 = state_42697;return cljs.core.async.impl.ioc_helpers.return_chan(state_42697__$1,inst_42695);
} else
{if((state_val_42698 === (12)))
{var inst_42679 = (state_42697[(2)]);var state_42697__$1 = state_42697;var statearr_42709_42744 = state_42697__$1;(statearr_42709_42744[(2)] = inst_42679);
(statearr_42709_42744[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (2)))
{var state_42697__$1 = state_42697;var statearr_42710_42745 = state_42697__$1;(statearr_42710_42745[(1)] = (4));

return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (23)))
{var inst_42683 = (state_42697[(2)]);var state_42697__$1 = state_42697;var statearr_42712_42746 = state_42697__$1;(statearr_42712_42746[(2)] = inst_42683);
(statearr_42712_42746[(1)] = (22));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (19)))
{var inst_42670 = (state_42697[(2)]);var state_42697__$1 = state_42697;var statearr_42713_42747 = state_42697__$1;(statearr_42713_42747[(2)] = inst_42670);
(statearr_42713_42747[(1)] = (18));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (11)))
{var inst_42659 = (state_42697[(10)]);var inst_42662 = cljs.core.empty_QMARK_(inst_42659);var state_42697__$1 = state_42697;if(inst_42662)
{var statearr_42714_42748 = state_42697__$1;(statearr_42714_42748[(1)] = (13));
} else
{var statearr_42715_42749 = state_42697__$1;(statearr_42715_42749[(1)] = (14));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (9)))
{var inst_42654 = (state_42697[(7)]);var state_42697__$1 = state_42697;if(cljs.core.truth_(inst_42654))
{var statearr_42716_42750 = state_42697__$1;(statearr_42716_42750[(1)] = (20));
} else
{var statearr_42717_42751 = state_42697__$1;(statearr_42717_42751[(1)] = (21));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (5)))
{var state_42697__$1 = state_42697;var statearr_42718_42752 = state_42697__$1;(statearr_42718_42752[(2)] = null);
(statearr_42718_42752[(1)] = (6));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (14)))
{var inst_42659 = (state_42697[(10)]);var inst_42665 = cljs.core.rest(inst_42659);var inst_42666 = cljs.core.first(inst_42659);var state_42697__$1 = (function (){var statearr_42719 = state_42697;(statearr_42719[(11)] = inst_42665);
return statearr_42719;
})();if(cljs.core.truth_(inst_42666))
{var statearr_42720_42753 = state_42697__$1;(statearr_42720_42753[(1)] = (16));
} else
{var statearr_42721_42754 = state_42697__$1;(statearr_42721_42754[(1)] = (17));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (16)))
{var inst_42659 = (state_42697[(10)]);var inst_42668 = cljs.core.first(inst_42659);var state_42697__$1 = state_42697;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42697__$1,(19),inst_42668);
} else
{if((state_val_42698 === (10)))
{var inst_42655 = (state_42697[(8)]);var inst_42688 = (state_42697[(2)]);var inst_42689 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_42688,inst_42655);var state_42697__$1 = (function (){var statearr_42722 = state_42697;(statearr_42722[(12)] = inst_42689);
return statearr_42722;
})();var statearr_42723_42755 = state_42697__$1;(statearr_42723_42755[(2)] = null);
(statearr_42723_42755[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (18)))
{var inst_42660 = (state_42697[(9)]);var inst_42665 = (state_42697[(11)]);var inst_42673 = (state_42697[(2)]);var inst_42674 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_42660,inst_42673);var inst_42659 = inst_42665;var inst_42660__$1 = inst_42674;var state_42697__$1 = (function (){var statearr_42724 = state_42697;(statearr_42724[(10)] = inst_42659);
(statearr_42724[(9)] = inst_42660__$1);
return statearr_42724;
})();var statearr_42725_42756 = state_42697__$1;(statearr_42725_42756[(2)] = null);
(statearr_42725_42756[(1)] = (11));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_42698 === (8)))
{var inst_42654 = (state_42697[(7)]);var inst_42658 = cljs.core.PersistentVector.EMPTY;var inst_42659 = inst_42654;var inst_42660 = inst_42658;var state_42697__$1 = (function (){var statearr_42726 = state_42697;(statearr_42726[(10)] = inst_42659);
(statearr_42726[(9)] = inst_42660);
return statearr_42726;
})();var statearr_42727_42757 = state_42697__$1;(statearr_42727_42757[(2)] = null);
(statearr_42727_42757[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_42731 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42731[(0)] = state_machine__5694__auto__);
(statearr_42731[(1)] = (1));
return statearr_42731;
});
var state_machine__5694__auto____1 = (function (state_42697){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42697);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42732){if((e42732 instanceof Object))
{var ex__5697__auto__ = e42732;var statearr_42733_42758 = state_42697;(statearr_42733_42758[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42697);
return cljs.core.constant$keyword$1094;
} else
{throw e42732;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__42759 = state_42697;
state_42697 = G__42759;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42697){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_42734 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_42734;
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
var G__42762__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__42761 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42761,(0),null);var result_handler_args = cljs.core.nthnext(vec__42761,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__42762 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__42762__delegate.call(this,req_args);};
G__42762.cljs$lang$maxFixedArity = 0;
G__42762.cljs$lang$applyTo = (function (arglist__42763){
var req_args = cljs.core.seq(arglist__42763);
return G__42762__delegate(req_args);
});
G__42762.cljs$core$IFn$_invoke$arity$variadic = G__42762__delegate;
return G__42762;
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
return (function (state_42781){var state_val_42782 = (state_42781[(1)]);if((state_val_42782 === (2)))
{var inst_42778 = (state_42781[(2)]);var inst_42779 = console.log(inst_42778);var state_42781__$1 = state_42781;return cljs.core.async.impl.ioc_helpers.return_chan(state_42781__$1,inst_42779);
} else
{if((state_val_42782 === (1)))
{var state_42781__$1 = state_42781;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42781__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42786 = [null,null,null,null,null,null,null];(statearr_42786[(0)] = state_machine__5694__auto__);
(statearr_42786[(1)] = (1));
return statearr_42786;
});
var state_machine__5694__auto____1 = (function (state_42781){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42781);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42787){if((e42787 instanceof Object))
{var ex__5697__auto__ = e42787;var statearr_42788_42790 = state_42781;(statearr_42788_42790[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42781);
return cljs.core.constant$keyword$1094;
} else
{throw e42787;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__42791 = state_42781;
state_42781 = G__42791;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42781){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_42789 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_42789;
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
log_api.cljs$lang$applyTo = (function (arglist__42792){
var f = cljs.core.first(arglist__42792);
var args = cljs.core.rest(arglist__42792);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42795){var vec__42796 = p__42795;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42796,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42796,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var c__5708__auto___42823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___42823,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___42823,r){
return (function (state_42814){var state_val_42815 = (state_42814[(1)]);if((state_val_42815 === (2)))
{var inst_42811 = (state_42814[(2)]);var inst_42812 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(r,inst_42811) : cljs.core.reset_BANG_.call(null,r,inst_42811));var state_42814__$1 = state_42814;return cljs.core.async.impl.ioc_helpers.return_chan(state_42814__$1,inst_42812);
} else
{if((state_val_42815 === (1)))
{var state_42814__$1 = state_42814;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42814__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___42823,r))
;return ((function (switch__5693__auto__,c__5708__auto___42823,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42819 = [null,null,null,null,null,null,null];(statearr_42819[(0)] = state_machine__5694__auto__);
(statearr_42819[(1)] = (1));
return statearr_42819;
});
var state_machine__5694__auto____1 = (function (state_42814){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42814);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42820){if((e42820 instanceof Object))
{var ex__5697__auto__ = e42820;var statearr_42821_42824 = state_42814;(statearr_42821_42824[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42814);
return cljs.core.constant$keyword$1094;
} else
{throw e42820;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__42825 = state_42814;
state_42814 = G__42825;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42814){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___42823,r))
})();var state__5710__auto__ = (function (){var statearr_42822 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___42823);
return statearr_42822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___42823,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__42826){
var id = cljs.core.first(arglist__42826);
arglist__42826 = cljs.core.next(arglist__42826);
var tolerance = cljs.core.first(arglist__42826);
var opts = cljs.core.rest(arglist__42826);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__42827){
var id = cljs.core.first(arglist__42827);
var opts = cljs.core.rest(arglist__42827);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__42828){
var ids = cljs.core.first(arglist__42828);
arglist__42828 = cljs.core.next(arglist__42828);
var tolerance = cljs.core.first(arglist__42828);
var opts = cljs.core.rest(arglist__42828);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__42829){var map__42831 = p__42829;var map__42831__$1 = ((cljs.core.seq_QMARK_(map__42831))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42831):map__42831);var opts = map__42831__$1;var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42831__$1,cljs.core.constant$keyword$1113);var opts__$1 = cljs.core.flatten(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$1113)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1114,bounds,cljs.core.constant$keyword$1113,boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__42829 = null;if (arguments.length > 3) {
  p__42829 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__42829);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__42832){
var collection_id = cljs.core.first(arglist__42832);
arglist__42832 = cljs.core.next(arglist__42832);
var tolerance = cljs.core.first(arglist__42832);
arglist__42832 = cljs.core.next(arglist__42832);
var bounds = cljs.core.first(arglist__42832);
var p__42829 = cljs.core.rest(arglist__42832);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__42829);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__42833){var vec__42835 = p__42833;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42835,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1115,filter,cljs.core.constant$keyword$1114,bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__42833 = null;if (arguments.length > 6) {
  p__42833 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__42833);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__42836){
var index = cljs.core.first(arglist__42836);
arglist__42836 = cljs.core.next(arglist__42836);
var type = cljs.core.first(arglist__42836);
arglist__42836 = cljs.core.next(arglist__42836);
var blcoll = cljs.core.first(arglist__42836);
arglist__42836 = cljs.core.next(arglist__42836);
var attr = cljs.core.first(arglist__42836);
arglist__42836 = cljs.core.next(arglist__42836);
var filter = cljs.core.first(arglist__42836);
arglist__42836 = cljs.core.next(arglist__42836);
var bounds = cljs.core.first(arglist__42836);
var p__42833 = cljs.core.rest(arglist__42836);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__42833);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__42837){var vec__42839 = p__42837;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42839,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1116,statsattrs,cljs.core.constant$keyword$1115,filter,cljs.core.constant$keyword$1114,bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__42837 = null;if (arguments.length > 5) {
  p__42837 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__42837);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__42840){
var index = cljs.core.first(arglist__42840);
arglist__42840 = cljs.core.next(arglist__42840);
var type = cljs.core.first(arglist__42840);
arglist__42840 = cljs.core.next(arglist__42840);
var statsattrs = cljs.core.first(arglist__42840);
arglist__42840 = cljs.core.next(arglist__42840);
var filter = cljs.core.first(arglist__42840);
arglist__42840 = cljs.core.next(arglist__42840);
var bounds = cljs.core.first(arglist__42840);
var p__42837 = cljs.core.rest(arglist__42840);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__42837);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__42841){var vec__42843 = p__42841;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42843,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1117,max_count,cljs.core.constant$keyword$1118,attrs,cljs.core.constant$keyword$1115,filter,cljs.core.constant$keyword$1114,bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__42841 = null;if (arguments.length > 7) {
  p__42841 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__42841);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__42844){
var index = cljs.core.first(arglist__42844);
arglist__42844 = cljs.core.next(arglist__42844);
var type = cljs.core.first(arglist__42844);
arglist__42844 = cljs.core.next(arglist__42844);
var location_attr = cljs.core.first(arglist__42844);
arglist__42844 = cljs.core.next(arglist__42844);
var attrs = cljs.core.first(arglist__42844);
arglist__42844 = cljs.core.next(arglist__42844);
var max_count = cljs.core.first(arglist__42844);
arglist__42844 = cljs.core.next(arglist__42844);
var filter = cljs.core.first(arglist__42844);
arglist__42844 = cljs.core.next(arglist__42844);
var bounds = cljs.core.first(arglist__42844);
var p__42841 = cljs.core.rest(arglist__42844);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__42841);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__42845){var vec__42847 = p__42845;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42847,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1115,filter_spec,cljs.core.constant$keyword$1114,bounds,cljs.core.constant$keyword$1119,sort_spec,cljs.core.constant$keyword$1120,from,cljs.core.constant$keyword$1121,size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__42845 = null;if (arguments.length > 7) {
  p__42845 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__42845);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__42848){
var index = cljs.core.first(arglist__42848);
arglist__42848 = cljs.core.next(arglist__42848);
var type = cljs.core.first(arglist__42848);
arglist__42848 = cljs.core.next(arglist__42848);
var filter_spec = cljs.core.first(arglist__42848);
arglist__42848 = cljs.core.next(arglist__42848);
var bounds = cljs.core.first(arglist__42848);
arglist__42848 = cljs.core.next(arglist__42848);
var sort_spec = cljs.core.first(arglist__42848);
arglist__42848 = cljs.core.next(arglist__42848);
var from = cljs.core.first(arglist__42848);
arglist__42848 = cljs.core.next(arglist__42848);
var size = cljs.core.first(arglist__42848);
var p__42845 = cljs.core.rest(arglist__42848);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__42845);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1122,filter_spec,cljs.core.constant$keyword$1114,bounds,cljs.core.constant$keyword$1123,time_variable,cljs.core.constant$keyword$1124,after,cljs.core.constant$keyword$1125,before,cljs.core.constant$keyword$1126,interval,cljs.core.constant$keyword$1127,metric_variables], null));
});
