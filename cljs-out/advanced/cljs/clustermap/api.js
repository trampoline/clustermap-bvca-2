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
var AJAX__delegate = function (url,p__34451){var map__34455 = p__34451;var map__34455__$1 = ((cljs.core.seq_QMARK_(map__34455))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34455):map__34455);var opts = map__34455__$1;var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34455__$1,cljs.core.constant$keyword$791);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34455__$1,cljs.core.constant$keyword$792);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34455__$1,cljs.core.constant$keyword$793);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__34455,map__34455__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__34455,map__34455__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$772,true], 0));
}
});})(comm,map__34455,map__34455__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__34455,map__34455__$1,opts,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__34457 = method;var G__34457__$1 = (((G__34457 == null))?null:cljs.core.name(G__34457));var G__34457__$2 = (((G__34457__$1 == null))?null:clojure.string.upper_case(G__34457__$1));return G__34457__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__34451 = null;if (arguments.length > 1) {
  p__34451 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__34451);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__34458){
var url = cljs.core.first(arglist__34458);
var p__34451 = cljs.core.rest(arglist__34458);
return AJAX__delegate(url,p__34451);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__34459){var map__34461 = p__34459;var map__34461__$1 = ((cljs.core.seq_QMARK_(map__34461))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34461):map__34461);var opts = map__34461__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$792,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__34459 = null;if (arguments.length > 1) {
  p__34459 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__34459);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__34462){
var url = cljs.core.first(arglist__34462);
var p__34459 = cljs.core.rest(arglist__34462);
return GET__delegate(url,p__34459);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__34463){var map__34465 = p__34463;var map__34465__$1 = ((cljs.core.seq_QMARK_(map__34465))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34465):map__34465);var opts = map__34465__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$792,"POST",cljs.core.constant$keyword$791,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__34463 = null;if (arguments.length > 2) {
  p__34463 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__34463);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__34466){
var url = cljs.core.first(arglist__34466);
arglist__34466 = cljs.core.next(arglist__34466);
var content = cljs.core.first(arglist__34466);
var p__34463 = cljs.core.rest(arglist__34466);
return POST__delegate(url,content,p__34463);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__34467){var map__34469 = p__34467;var map__34469__$1 = ((cljs.core.seq_QMARK_(map__34469))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34469):map__34469);var opts = map__34469__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$792,"PUT",cljs.core.constant$keyword$791,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__34467 = null;if (arguments.length > 2) {
  p__34467 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__34467);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__34470){
var url = cljs.core.first(arglist__34470);
arglist__34470 = cljs.core.next(arglist__34470);
var content = cljs.core.first(arglist__34470);
var p__34467 = cljs.core.rest(arglist__34470);
return PUT__delegate(url,content,p__34467);
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
return (function (state_34603){var state_val_34604 = (state_34603[(1)]);if((state_val_34604 === (7)))
{var inst_34561 = (state_34603[(7)]);var inst_34560 = (state_34603[(2)]);var inst_34561__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34560,(0),null);var inst_34562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34560,(1),null);var inst_34563 = cljs.core.sequential_QMARK_(inst_34561__$1);var state_34603__$1 = (function (){var statearr_34605 = state_34603;(statearr_34605[(7)] = inst_34561__$1);
(statearr_34605[(8)] = inst_34562);
return statearr_34605;
})();if(inst_34563)
{var statearr_34606_34641 = state_34603__$1;(statearr_34606_34641[(1)] = (8));
} else
{var statearr_34607_34642 = state_34603__$1;(statearr_34607_34642[(1)] = (9));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (20)))
{var inst_34561 = (state_34603[(7)]);var state_34603__$1 = state_34603;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34603__$1,(23),inst_34561);
} else
{if((state_val_34604 === (1)))
{var state_34603__$1 = state_34603;var statearr_34608_34643 = state_34603__$1;(statearr_34608_34643[(2)] = null);
(statearr_34608_34643[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (4)))
{var state_34603__$1 = state_34603;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34603__$1,(7),ocomm);
} else
{if((state_val_34604 === (15)))
{var inst_34583 = (state_34603[(2)]);var state_34603__$1 = state_34603;var statearr_34609_34644 = state_34603__$1;(statearr_34609_34644[(2)] = inst_34583);
(statearr_34609_34644[(1)] = (12));
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (21)))
{var state_34603__$1 = state_34603;var statearr_34610_34645 = state_34603__$1;(statearr_34610_34645[(2)] = null);
(statearr_34610_34645[(1)] = (22));
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (13)))
{var inst_34566 = (state_34603[(9)]);var state_34603__$1 = state_34603;var statearr_34611_34646 = state_34603__$1;(statearr_34611_34646[(2)] = inst_34566);
(statearr_34611_34646[(1)] = (15));
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (22)))
{var inst_34592 = (state_34603[(2)]);var state_34603__$1 = state_34603;var statearr_34612_34647 = state_34603__$1;(statearr_34612_34647[(2)] = inst_34592);
(statearr_34612_34647[(1)] = (10));
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (6)))
{var inst_34599 = (state_34603[(2)]);var state_34603__$1 = state_34603;var statearr_34613_34648 = state_34603__$1;(statearr_34613_34648[(2)] = inst_34599);
(statearr_34613_34648[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (17)))
{var state_34603__$1 = state_34603;var statearr_34614_34649 = state_34603__$1;(statearr_34614_34649[(2)] = null);
(statearr_34614_34649[(1)] = (18));
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (3)))
{var inst_34601 = (state_34603[(2)]);var state_34603__$1 = state_34603;return cljs.core.async.impl.ioc_helpers.return_chan(state_34603__$1,inst_34601);
} else
{if((state_val_34604 === (12)))
{var inst_34585 = (state_34603[(2)]);var state_34603__$1 = state_34603;var statearr_34615_34650 = state_34603__$1;(statearr_34615_34650[(2)] = inst_34585);
(statearr_34615_34650[(1)] = (10));
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (2)))
{var state_34603__$1 = state_34603;if(true)
{var statearr_34616_34651 = state_34603__$1;(statearr_34616_34651[(1)] = (4));
} else
{var statearr_34617_34652 = state_34603__$1;(statearr_34617_34652[(1)] = (5));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (23)))
{var inst_34589 = (state_34603[(2)]);var state_34603__$1 = state_34603;var statearr_34618_34653 = state_34603__$1;(statearr_34618_34653[(2)] = inst_34589);
(statearr_34618_34653[(1)] = (22));
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (19)))
{var inst_34576 = (state_34603[(2)]);var state_34603__$1 = state_34603;var statearr_34619_34654 = state_34603__$1;(statearr_34619_34654[(2)] = inst_34576);
(statearr_34619_34654[(1)] = (18));
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (11)))
{var inst_34565 = (state_34603[(10)]);var inst_34568 = cljs.core.empty_QMARK_(inst_34565);var state_34603__$1 = state_34603;if(inst_34568)
{var statearr_34620_34655 = state_34603__$1;(statearr_34620_34655[(1)] = (13));
} else
{var statearr_34621_34656 = state_34603__$1;(statearr_34621_34656[(1)] = (14));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (9)))
{var inst_34561 = (state_34603[(7)]);var state_34603__$1 = state_34603;if(cljs.core.truth_(inst_34561))
{var statearr_34622_34657 = state_34603__$1;(statearr_34622_34657[(1)] = (20));
} else
{var statearr_34623_34658 = state_34603__$1;(statearr_34623_34658[(1)] = (21));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (5)))
{var state_34603__$1 = state_34603;var statearr_34624_34659 = state_34603__$1;(statearr_34624_34659[(2)] = null);
(statearr_34624_34659[(1)] = (6));
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (14)))
{var inst_34565 = (state_34603[(10)]);var inst_34571 = cljs.core.rest(inst_34565);var inst_34572 = cljs.core.first(inst_34565);var state_34603__$1 = (function (){var statearr_34625 = state_34603;(statearr_34625[(11)] = inst_34571);
return statearr_34625;
})();if(cljs.core.truth_(inst_34572))
{var statearr_34626_34660 = state_34603__$1;(statearr_34626_34660[(1)] = (16));
} else
{var statearr_34627_34661 = state_34603__$1;(statearr_34627_34661[(1)] = (17));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (16)))
{var inst_34565 = (state_34603[(10)]);var inst_34574 = cljs.core.first(inst_34565);var state_34603__$1 = state_34603;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34603__$1,(19),inst_34574);
} else
{if((state_val_34604 === (10)))
{var inst_34562 = (state_34603[(8)]);var inst_34594 = (state_34603[(2)]);var inst_34595 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_34594,inst_34562);var state_34603__$1 = (function (){var statearr_34628 = state_34603;(statearr_34628[(12)] = inst_34595);
return statearr_34628;
})();var statearr_34629_34662 = state_34603__$1;(statearr_34629_34662[(2)] = null);
(statearr_34629_34662[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (18)))
{var inst_34571 = (state_34603[(11)]);var inst_34566 = (state_34603[(9)]);var inst_34579 = (state_34603[(2)]);var inst_34580 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_34566,inst_34579);var inst_34565 = inst_34571;var inst_34566__$1 = inst_34580;var state_34603__$1 = (function (){var statearr_34630 = state_34603;(statearr_34630[(10)] = inst_34565);
(statearr_34630[(9)] = inst_34566__$1);
return statearr_34630;
})();var statearr_34631_34663 = state_34603__$1;(statearr_34631_34663[(2)] = null);
(statearr_34631_34663[(1)] = (11));
return cljs.core.constant$keyword$777;
} else
{if((state_val_34604 === (8)))
{var inst_34561 = (state_34603[(7)]);var inst_34565 = inst_34561;var inst_34566 = cljs.core.PersistentVector.EMPTY;var state_34603__$1 = (function (){var statearr_34632 = state_34603;(statearr_34632[(10)] = inst_34565);
(statearr_34632[(9)] = inst_34566);
return statearr_34632;
})();var statearr_34633_34664 = state_34603__$1;(statearr_34633_34664[(2)] = null);
(statearr_34633_34664[(1)] = (11));
return cljs.core.constant$keyword$777;
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
var state_machine__5679__auto____0 = (function (){var statearr_34637 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34637[(0)] = state_machine__5679__auto__);
(statearr_34637[(1)] = (1));
return statearr_34637;
});
var state_machine__5679__auto____1 = (function (state_34603){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34603);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34638){if((e34638 instanceof Object))
{var ex__5682__auto__ = e34638;var statearr_34639_34665 = state_34603;(statearr_34639_34665[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34603);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e34638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__34666 = state_34603;
state_34603 = G__34666;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34603){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_34640 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34640;
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
var G__34669__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__34668 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34668,(0),null);var result_handler_args = cljs.core.nthnext(vec__34668,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__34669 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__34669__delegate.call(this,req_args);};
G__34669.cljs$lang$maxFixedArity = 0;
G__34669.cljs$lang$applyTo = (function (arglist__34670){
var req_args = cljs.core.seq(arglist__34670);
return G__34669__delegate(req_args);
});
G__34669.cljs$core$IFn$_invoke$arity$variadic = G__34669__delegate;
return G__34669;
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
return (function (state_34688){var state_val_34689 = (state_34688[(1)]);if((state_val_34689 === (2)))
{var inst_34685 = (state_34688[(2)]);var inst_34686 = console.log(inst_34685);var state_34688__$1 = state_34688;return cljs.core.async.impl.ioc_helpers.return_chan(state_34688__$1,inst_34686);
} else
{if((state_val_34689 === (1)))
{var state_34688__$1 = state_34688;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34688__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34693 = [null,null,null,null,null,null,null];(statearr_34693[(0)] = state_machine__5679__auto__);
(statearr_34693[(1)] = (1));
return statearr_34693;
});
var state_machine__5679__auto____1 = (function (state_34688){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34688);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34694){if((e34694 instanceof Object))
{var ex__5682__auto__ = e34694;var statearr_34695_34697 = state_34688;(statearr_34695_34697[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34688);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e34694;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__34698 = state_34688;
state_34688 = G__34698;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34688){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_34696 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34696;
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
log_api.cljs$lang$applyTo = (function (arglist__34699){
var f = cljs.core.first(arglist__34699);
var args = cljs.core.rest(arglist__34699);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34702){var vec__34703 = p__34702;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34703,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34703,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var c__5693__auto___34730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___34730,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___34730,r){
return (function (state_34721){var state_val_34722 = (state_34721[(1)]);if((state_val_34722 === (2)))
{var inst_34718 = (state_34721[(2)]);var inst_34719 = cljs.core.reset_BANG_(r,inst_34718);var state_34721__$1 = state_34721;return cljs.core.async.impl.ioc_helpers.return_chan(state_34721__$1,inst_34719);
} else
{if((state_val_34722 === (1)))
{var state_34721__$1 = state_34721;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34721__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___34730,r))
;return ((function (switch__5678__auto__,c__5693__auto___34730,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34726 = [null,null,null,null,null,null,null];(statearr_34726[(0)] = state_machine__5679__auto__);
(statearr_34726[(1)] = (1));
return statearr_34726;
});
var state_machine__5679__auto____1 = (function (state_34721){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34721);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34727){if((e34727 instanceof Object))
{var ex__5682__auto__ = e34727;var statearr_34728_34731 = state_34721;(statearr_34728_34731[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34721);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e34727;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__34732 = state_34721;
state_34721 = G__34732;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34721){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___34730,r))
})();var state__5695__auto__ = (function (){var statearr_34729 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___34730);
return statearr_34729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___34730,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__34733){
var id = cljs.core.first(arglist__34733);
arglist__34733 = cljs.core.next(arglist__34733);
var tolerance = cljs.core.first(arglist__34733);
var opts = cljs.core.rest(arglist__34733);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__34734){
var id = cljs.core.first(arglist__34734);
var opts = cljs.core.rest(arglist__34734);
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
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$794,ids,cljs.core.constant$keyword$795,tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__34735){
var ids = cljs.core.first(arglist__34735);
arglist__34735 = cljs.core.next(arglist__34735);
var tolerance = cljs.core.first(arglist__34735);
var opts = cljs.core.rest(arglist__34735);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__34736){var map__34738 = p__34736;var map__34738__$1 = ((cljs.core.seq_QMARK_(map__34738))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34738):map__34738);var opts = map__34738__$1;var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34738__$1,cljs.core.constant$keyword$796);var opts__$1 = cljs.core.flatten(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$796)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$797,bounds,cljs.core.constant$keyword$796,boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__34736 = null;if (arguments.length > 3) {
  p__34736 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__34736);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__34739){
var collection_id = cljs.core.first(arglist__34739);
arglist__34739 = cljs.core.next(arglist__34739);
var tolerance = cljs.core.first(arglist__34739);
arglist__34739 = cljs.core.next(arglist__34739);
var bounds = cljs.core.first(arglist__34739);
var p__34736 = cljs.core.rest(arglist__34739);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__34736);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__34740){var vec__34742 = p__34740;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34742,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$798,filter,cljs.core.constant$keyword$797,bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__34740 = null;if (arguments.length > 6) {
  p__34740 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__34740);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__34743){
var index = cljs.core.first(arglist__34743);
arglist__34743 = cljs.core.next(arglist__34743);
var type = cljs.core.first(arglist__34743);
arglist__34743 = cljs.core.next(arglist__34743);
var blcoll = cljs.core.first(arglist__34743);
arglist__34743 = cljs.core.next(arglist__34743);
var attr = cljs.core.first(arglist__34743);
arglist__34743 = cljs.core.next(arglist__34743);
var filter = cljs.core.first(arglist__34743);
arglist__34743 = cljs.core.next(arglist__34743);
var bounds = cljs.core.first(arglist__34743);
var p__34740 = cljs.core.rest(arglist__34743);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__34740);
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
var portfolio_company_sites__delegate = function (p__34744){var vec__34746 = p__34744;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34746,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$799,(100),cljs.core.constant$keyword$800,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$801,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__34744 = null;if (arguments.length > 0) {
  p__34744 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__34744);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__34747){
var p__34744 = cljs.core.seq(arglist__34747);
return portfolio_company_sites__delegate(p__34744);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__34748){var vec__34750 = p__34748;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$799,(100),cljs.core.constant$keyword$800,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$801,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__34748 = null;if (arguments.length > 0) {
  p__34748 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__34748);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__34751){
var p__34748 = cljs.core.seq(arglist__34751);
return portfolio_company_sites_by_company__delegate(p__34748);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__34752){var vec__34754 = p__34752;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34754,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__34752 = null;if (arguments.length > 0) {
  p__34752 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__34752);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__34755){
var p__34752 = cljs.core.seq(arglist__34755);
return portfolio_company_locations__delegate(p__34752);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__34756){var vec__34758 = p__34756;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34758,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__34756 = null;if (arguments.length > 0) {
  p__34756 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__34756);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__34759){
var p__34756 = cljs.core.seq(arglist__34759);
return portfolio_company_site_stats__delegate(p__34756);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__34760){var vec__34762 = p__34760;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34762,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__34760 = null;if (arguments.length > 0) {
  p__34760 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__34760);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__34763){
var p__34760 = cljs.core.seq(arglist__34763);
return portfolio_company_site_account_timelines__delegate(p__34760);
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
var investment_account_timelines__delegate = function (p__34764){var vec__34766 = p__34764;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34766,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_account_timelines = function (var_args){
var p__34764 = null;if (arguments.length > 0) {
  p__34764 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__34764);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__34767){
var p__34764 = cljs.core.seq(arglist__34767);
return investment_account_timelines__delegate(p__34764);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__34768){var vec__34770 = p__34768;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34770,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_stats = function (var_args){
var p__34768 = null;if (arguments.length > 0) {
  p__34768 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__34768);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__34771){
var p__34768 = cljs.core.seq(arglist__34771);
return investment_stats__delegate(p__34768);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__34772){var vec__34774 = p__34772;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$799,(50),cljs.core.constant$keyword$802,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$803,"desc"], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__34772 = null;if (arguments.length > 0) {
  p__34772 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__34772);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__34775){
var p__34772 = cljs.core.seq(arglist__34775);
return investment_aggs__delegate(p__34772);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__34776){var vec__34778 = p__34776;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34778,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$799,(50),cljs.core.constant$keyword$802,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$804,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$805,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investments = function (var_args){
var p__34776 = null;if (arguments.length > 0) {
  p__34776 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__34776);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__34779){
var p__34776 = cljs.core.seq(arglist__34779);
return investments__delegate(p__34776);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
