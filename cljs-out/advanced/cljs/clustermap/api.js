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
var AJAX__delegate = function (url,p__36483){var map__36487 = p__36483;var map__36487__$1 = ((cljs.core.seq_QMARK_(map__36487))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36487):map__36487);var opts = map__36487__$1;var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36487__$1,cljs.core.constant$keyword$886);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36487__$1,cljs.core.constant$keyword$887);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36487__$1,cljs.core.constant$keyword$888);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__36487,map__36487__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__36487,map__36487__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$867,true], 0));
}
});})(comm,map__36487,map__36487__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__36487,map__36487__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__36489 = method;var G__36489__$1 = (((G__36489 == null))?null:cljs.core.name(G__36489));var G__36489__$2 = (((G__36489__$1 == null))?null:clojure.string.upper_case(G__36489__$1));return G__36489__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__36483 = null;if (arguments.length > 1) {
  p__36483 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__36483);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__36490){
var url = cljs.core.first(arglist__36490);
var p__36483 = cljs.core.rest(arglist__36490);
return AJAX__delegate(url,p__36483);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__36491){var map__36493 = p__36491;var map__36493__$1 = ((cljs.core.seq_QMARK_(map__36493))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36493):map__36493);var opts = map__36493__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$887,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__36491 = null;if (arguments.length > 1) {
  p__36491 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__36491);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__36494){
var url = cljs.core.first(arglist__36494);
var p__36491 = cljs.core.rest(arglist__36494);
return GET__delegate(url,p__36491);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__36495){var map__36497 = p__36495;var map__36497__$1 = ((cljs.core.seq_QMARK_(map__36497))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36497):map__36497);var opts = map__36497__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$887,"POST",cljs.core.constant$keyword$886,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__36495 = null;if (arguments.length > 2) {
  p__36495 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__36495);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__36498){
var url = cljs.core.first(arglist__36498);
arglist__36498 = cljs.core.next(arglist__36498);
var content = cljs.core.first(arglist__36498);
var p__36495 = cljs.core.rest(arglist__36498);
return POST__delegate(url,content,p__36495);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__36499){var map__36501 = p__36499;var map__36501__$1 = ((cljs.core.seq_QMARK_(map__36501))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36501):map__36501);var opts = map__36501__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$887,"PUT",cljs.core.constant$keyword$886,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__36499 = null;if (arguments.length > 2) {
  p__36499 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__36499);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__36502){
var url = cljs.core.first(arglist__36502);
arglist__36502 = cljs.core.next(arglist__36502);
var content = cljs.core.first(arglist__36502);
var p__36499 = cljs.core.rest(arglist__36502);
return PUT__delegate(url,content,p__36499);
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
return (function (state_36637){var state_val_36638 = (state_36637[(1)]);if((state_val_36638 === (7)))
{var inst_36594 = (state_36637[(7)]);var inst_36593 = (state_36637[(2)]);var inst_36594__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36593,(0),null);var inst_36595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36593,(1),null);var inst_36596 = cljs.core.sequential_QMARK_(inst_36594__$1);var state_36637__$1 = (function (){var statearr_36639 = state_36637;(statearr_36639[(8)] = inst_36595);
(statearr_36639[(7)] = inst_36594__$1);
return statearr_36639;
})();if(inst_36596)
{var statearr_36640_36675 = state_36637__$1;(statearr_36640_36675[(1)] = (8));
} else
{var statearr_36641_36676 = state_36637__$1;(statearr_36641_36676[(1)] = (9));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (20)))
{var inst_36594 = (state_36637[(7)]);var state_36637__$1 = state_36637;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36637__$1,(23),inst_36594);
} else
{if((state_val_36638 === (1)))
{var state_36637__$1 = state_36637;var statearr_36642_36677 = state_36637__$1;(statearr_36642_36677[(2)] = null);
(statearr_36642_36677[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (4)))
{var state_36637__$1 = state_36637;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36637__$1,(7),ocomm);
} else
{if((state_val_36638 === (15)))
{var inst_36617 = (state_36637[(2)]);var state_36637__$1 = state_36637;var statearr_36643_36678 = state_36637__$1;(statearr_36643_36678[(2)] = inst_36617);
(statearr_36643_36678[(1)] = (12));
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (21)))
{var state_36637__$1 = state_36637;var statearr_36644_36679 = state_36637__$1;(statearr_36644_36679[(2)] = null);
(statearr_36644_36679[(1)] = (22));
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (13)))
{var inst_36600 = (state_36637[(9)]);var state_36637__$1 = state_36637;var statearr_36645_36680 = state_36637__$1;(statearr_36645_36680[(2)] = inst_36600);
(statearr_36645_36680[(1)] = (15));
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (22)))
{var inst_36626 = (state_36637[(2)]);var state_36637__$1 = state_36637;var statearr_36646_36681 = state_36637__$1;(statearr_36646_36681[(2)] = inst_36626);
(statearr_36646_36681[(1)] = (10));
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (6)))
{var inst_36633 = (state_36637[(2)]);var state_36637__$1 = state_36637;var statearr_36647_36682 = state_36637__$1;(statearr_36647_36682[(2)] = inst_36633);
(statearr_36647_36682[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (17)))
{var state_36637__$1 = state_36637;var statearr_36648_36683 = state_36637__$1;(statearr_36648_36683[(2)] = null);
(statearr_36648_36683[(1)] = (18));
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (3)))
{var inst_36635 = (state_36637[(2)]);var state_36637__$1 = state_36637;return cljs.core.async.impl.ioc_helpers.return_chan(state_36637__$1,inst_36635);
} else
{if((state_val_36638 === (12)))
{var inst_36619 = (state_36637[(2)]);var state_36637__$1 = state_36637;var statearr_36649_36684 = state_36637__$1;(statearr_36649_36684[(2)] = inst_36619);
(statearr_36649_36684[(1)] = (10));
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (2)))
{var state_36637__$1 = state_36637;var statearr_36650_36685 = state_36637__$1;(statearr_36650_36685[(1)] = (4));

return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (23)))
{var inst_36623 = (state_36637[(2)]);var state_36637__$1 = state_36637;var statearr_36652_36686 = state_36637__$1;(statearr_36652_36686[(2)] = inst_36623);
(statearr_36652_36686[(1)] = (22));
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (19)))
{var inst_36610 = (state_36637[(2)]);var state_36637__$1 = state_36637;var statearr_36653_36687 = state_36637__$1;(statearr_36653_36687[(2)] = inst_36610);
(statearr_36653_36687[(1)] = (18));
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (11)))
{var inst_36599 = (state_36637[(10)]);var inst_36602 = cljs.core.empty_QMARK_(inst_36599);var state_36637__$1 = state_36637;if(inst_36602)
{var statearr_36654_36688 = state_36637__$1;(statearr_36654_36688[(1)] = (13));
} else
{var statearr_36655_36689 = state_36637__$1;(statearr_36655_36689[(1)] = (14));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (9)))
{var inst_36594 = (state_36637[(7)]);var state_36637__$1 = state_36637;if(cljs.core.truth_(inst_36594))
{var statearr_36656_36690 = state_36637__$1;(statearr_36656_36690[(1)] = (20));
} else
{var statearr_36657_36691 = state_36637__$1;(statearr_36657_36691[(1)] = (21));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (5)))
{var state_36637__$1 = state_36637;var statearr_36658_36692 = state_36637__$1;(statearr_36658_36692[(2)] = null);
(statearr_36658_36692[(1)] = (6));
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (14)))
{var inst_36599 = (state_36637[(10)]);var inst_36605 = cljs.core.rest(inst_36599);var inst_36606 = cljs.core.first(inst_36599);var state_36637__$1 = (function (){var statearr_36659 = state_36637;(statearr_36659[(11)] = inst_36605);
return statearr_36659;
})();if(cljs.core.truth_(inst_36606))
{var statearr_36660_36693 = state_36637__$1;(statearr_36660_36693[(1)] = (16));
} else
{var statearr_36661_36694 = state_36637__$1;(statearr_36661_36694[(1)] = (17));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (16)))
{var inst_36599 = (state_36637[(10)]);var inst_36608 = cljs.core.first(inst_36599);var state_36637__$1 = state_36637;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36637__$1,(19),inst_36608);
} else
{if((state_val_36638 === (10)))
{var inst_36595 = (state_36637[(8)]);var inst_36628 = (state_36637[(2)]);var inst_36629 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_36628,inst_36595);var state_36637__$1 = (function (){var statearr_36662 = state_36637;(statearr_36662[(12)] = inst_36629);
return statearr_36662;
})();var statearr_36663_36695 = state_36637__$1;(statearr_36663_36695[(2)] = null);
(statearr_36663_36695[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (18)))
{var inst_36600 = (state_36637[(9)]);var inst_36605 = (state_36637[(11)]);var inst_36613 = (state_36637[(2)]);var inst_36614 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_36600,inst_36613);var inst_36599 = inst_36605;var inst_36600__$1 = inst_36614;var state_36637__$1 = (function (){var statearr_36664 = state_36637;(statearr_36664[(9)] = inst_36600__$1);
(statearr_36664[(10)] = inst_36599);
return statearr_36664;
})();var statearr_36665_36696 = state_36637__$1;(statearr_36665_36696[(2)] = null);
(statearr_36665_36696[(1)] = (11));
return cljs.core.constant$keyword$872;
} else
{if((state_val_36638 === (8)))
{var inst_36594 = (state_36637[(7)]);var inst_36598 = cljs.core.PersistentVector.EMPTY;var inst_36599 = inst_36594;var inst_36600 = inst_36598;var state_36637__$1 = (function (){var statearr_36666 = state_36637;(statearr_36666[(9)] = inst_36600);
(statearr_36666[(10)] = inst_36599);
return statearr_36666;
})();var statearr_36667_36697 = state_36637__$1;(statearr_36667_36697[(2)] = null);
(statearr_36667_36697[(1)] = (11));
return cljs.core.constant$keyword$872;
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
var state_machine__5694__auto____0 = (function (){var statearr_36671 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36671[(0)] = state_machine__5694__auto__);
(statearr_36671[(1)] = (1));
return statearr_36671;
});
var state_machine__5694__auto____1 = (function (state_36637){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_36637);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36672){if((e36672 instanceof Object))
{var ex__5697__auto__ = e36672;var statearr_36673_36698 = state_36637;(statearr_36673_36698[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36637);
return cljs.core.constant$keyword$872;
} else
{throw e36672;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__36699 = state_36637;
state_36637 = G__36699;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36637){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_36674 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_36674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_36674;
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
var G__36702__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__36701 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36701,(0),null);var result_handler_args = cljs.core.nthnext(vec__36701,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__36702 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__36702__delegate.call(this,req_args);};
G__36702.cljs$lang$maxFixedArity = 0;
G__36702.cljs$lang$applyTo = (function (arglist__36703){
var req_args = cljs.core.seq(arglist__36703);
return G__36702__delegate(req_args);
});
G__36702.cljs$core$IFn$_invoke$arity$variadic = G__36702__delegate;
return G__36702;
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
return (function (state_36721){var state_val_36722 = (state_36721[(1)]);if((state_val_36722 === (2)))
{var inst_36718 = (state_36721[(2)]);var inst_36719 = console.log(inst_36718);var state_36721__$1 = state_36721;return cljs.core.async.impl.ioc_helpers.return_chan(state_36721__$1,inst_36719);
} else
{if((state_val_36722 === (1)))
{var state_36721__$1 = state_36721;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36721__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36726 = [null,null,null,null,null,null,null];(statearr_36726[(0)] = state_machine__5694__auto__);
(statearr_36726[(1)] = (1));
return statearr_36726;
});
var state_machine__5694__auto____1 = (function (state_36721){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_36721);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36727){if((e36727 instanceof Object))
{var ex__5697__auto__ = e36727;var statearr_36728_36730 = state_36721;(statearr_36728_36730[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36721);
return cljs.core.constant$keyword$872;
} else
{throw e36727;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__36731 = state_36721;
state_36721 = G__36731;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36721){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_36729 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_36729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_36729;
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
log_api.cljs$lang$applyTo = (function (arglist__36732){
var f = cljs.core.first(arglist__36732);
var args = cljs.core.rest(arglist__36732);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36735){var vec__36736 = p__36735;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36736,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36736,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var c__5708__auto___36763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___36763,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36763,r){
return (function (state_36754){var state_val_36755 = (state_36754[(1)]);if((state_val_36755 === (2)))
{var inst_36751 = (state_36754[(2)]);var inst_36752 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(r,inst_36751) : cljs.core.reset_BANG_.call(null,r,inst_36751));var state_36754__$1 = state_36754;return cljs.core.async.impl.ioc_helpers.return_chan(state_36754__$1,inst_36752);
} else
{if((state_val_36755 === (1)))
{var state_36754__$1 = state_36754;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36754__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___36763,r))
;return ((function (switch__5693__auto__,c__5708__auto___36763,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36759 = [null,null,null,null,null,null,null];(statearr_36759[(0)] = state_machine__5694__auto__);
(statearr_36759[(1)] = (1));
return statearr_36759;
});
var state_machine__5694__auto____1 = (function (state_36754){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_36754);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36760){if((e36760 instanceof Object))
{var ex__5697__auto__ = e36760;var statearr_36761_36764 = state_36754;(statearr_36761_36764[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36754);
return cljs.core.constant$keyword$872;
} else
{throw e36760;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__36765 = state_36754;
state_36754 = G__36765;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36754){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36763,r))
})();var state__5710__auto__ = (function (){var statearr_36762 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_36762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36763);
return statearr_36762;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___36763,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__36766){
var id = cljs.core.first(arglist__36766);
arglist__36766 = cljs.core.next(arglist__36766);
var tolerance = cljs.core.first(arglist__36766);
var opts = cljs.core.rest(arglist__36766);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__36767){
var id = cljs.core.first(arglist__36767);
var opts = cljs.core.rest(arglist__36767);
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
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$889,ids,cljs.core.constant$keyword$890,tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__36768){
var ids = cljs.core.first(arglist__36768);
arglist__36768 = cljs.core.next(arglist__36768);
var tolerance = cljs.core.first(arglist__36768);
var opts = cljs.core.rest(arglist__36768);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__36769){var map__36771 = p__36769;var map__36771__$1 = ((cljs.core.seq_QMARK_(map__36771))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36771):map__36771);var opts = map__36771__$1;var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36771__$1,cljs.core.constant$keyword$891);var opts__$1 = cljs.core.flatten(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$891)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$892,bounds,cljs.core.constant$keyword$891,boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__36769 = null;if (arguments.length > 3) {
  p__36769 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__36769);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__36772){
var collection_id = cljs.core.first(arglist__36772);
arglist__36772 = cljs.core.next(arglist__36772);
var tolerance = cljs.core.first(arglist__36772);
arglist__36772 = cljs.core.next(arglist__36772);
var bounds = cljs.core.first(arglist__36772);
var p__36769 = cljs.core.rest(arglist__36772);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__36769);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__36773){var vec__36775 = p__36773;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36775,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$893,filter,cljs.core.constant$keyword$892,bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__36773 = null;if (arguments.length > 6) {
  p__36773 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__36773);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__36776){
var index = cljs.core.first(arglist__36776);
arglist__36776 = cljs.core.next(arglist__36776);
var type = cljs.core.first(arglist__36776);
arglist__36776 = cljs.core.next(arglist__36776);
var blcoll = cljs.core.first(arglist__36776);
arglist__36776 = cljs.core.next(arglist__36776);
var attr = cljs.core.first(arglist__36776);
arglist__36776 = cljs.core.next(arglist__36776);
var filter = cljs.core.first(arglist__36776);
arglist__36776 = cljs.core.next(arglist__36776);
var bounds = cljs.core.first(arglist__36776);
var p__36773 = cljs.core.rest(arglist__36776);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__36773);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__36777){var vec__36779 = p__36777;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36779,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$894,statsattrs,cljs.core.constant$keyword$893,filter,cljs.core.constant$keyword$892,bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__36777 = null;if (arguments.length > 5) {
  p__36777 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__36777);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__36780){
var index = cljs.core.first(arglist__36780);
arglist__36780 = cljs.core.next(arglist__36780);
var type = cljs.core.first(arglist__36780);
arglist__36780 = cljs.core.next(arglist__36780);
var statsattrs = cljs.core.first(arglist__36780);
arglist__36780 = cljs.core.next(arglist__36780);
var filter = cljs.core.first(arglist__36780);
arglist__36780 = cljs.core.next(arglist__36780);
var bounds = cljs.core.first(arglist__36780);
var p__36777 = cljs.core.rest(arglist__36780);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__36777);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__36781){var vec__36783 = p__36781;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36783,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$895,max_count,cljs.core.constant$keyword$896,attrs,cljs.core.constant$keyword$893,filter,cljs.core.constant$keyword$892,bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__36781 = null;if (arguments.length > 7) {
  p__36781 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__36781);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__36784){
var index = cljs.core.first(arglist__36784);
arglist__36784 = cljs.core.next(arglist__36784);
var type = cljs.core.first(arglist__36784);
arglist__36784 = cljs.core.next(arglist__36784);
var location_attr = cljs.core.first(arglist__36784);
arglist__36784 = cljs.core.next(arglist__36784);
var attrs = cljs.core.first(arglist__36784);
arglist__36784 = cljs.core.next(arglist__36784);
var max_count = cljs.core.first(arglist__36784);
arglist__36784 = cljs.core.next(arglist__36784);
var filter = cljs.core.first(arglist__36784);
arglist__36784 = cljs.core.next(arglist__36784);
var bounds = cljs.core.first(arglist__36784);
var p__36781 = cljs.core.rest(arglist__36784);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__36781);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__36785){var vec__36787 = p__36785;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36787,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$893,filter_spec,cljs.core.constant$keyword$892,bounds,cljs.core.constant$keyword$897,sort_spec,cljs.core.constant$keyword$898,from,cljs.core.constant$keyword$899,size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__36785 = null;if (arguments.length > 7) {
  p__36785 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__36785);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__36788){
var index = cljs.core.first(arglist__36788);
arglist__36788 = cljs.core.next(arglist__36788);
var type = cljs.core.first(arglist__36788);
arglist__36788 = cljs.core.next(arglist__36788);
var filter_spec = cljs.core.first(arglist__36788);
arglist__36788 = cljs.core.next(arglist__36788);
var bounds = cljs.core.first(arglist__36788);
arglist__36788 = cljs.core.next(arglist__36788);
var sort_spec = cljs.core.first(arglist__36788);
arglist__36788 = cljs.core.next(arglist__36788);
var from = cljs.core.first(arglist__36788);
arglist__36788 = cljs.core.next(arglist__36788);
var size = cljs.core.first(arglist__36788);
var p__36785 = cljs.core.rest(arglist__36788);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__36785);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
