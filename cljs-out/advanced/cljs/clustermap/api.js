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
var GET__delegate = function (url,p__32492){var map__32494 = p__32492;var map__32494__$1 = ((cljs.core.seq_QMARK_(map__32494))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32494):map__32494);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32494__$1,cljs.core.constant$keyword$667);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__32494,map__32494__$1,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__32494,map__32494__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$648,true], 0));
}
});})(comm,map__32494,map__32494__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__32494,map__32494__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__32492 = null;if (arguments.length > 1) {
  p__32492 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__32492);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__32495){
var url = cljs.core.first(arglist__32495);
var p__32492 = cljs.core.rest(arglist__32495);
return GET__delegate(url,p__32492);
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
return (function (state_32628){var state_val_32629 = (state_32628[(1)]);if((state_val_32629 === (7)))
{var inst_32586 = (state_32628[(7)]);var inst_32585 = (state_32628[(2)]);var inst_32586__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32585,(0),null);var inst_32587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32585,(1),null);var inst_32588 = cljs.core.sequential_QMARK_(inst_32586__$1);var state_32628__$1 = (function (){var statearr_32630 = state_32628;(statearr_32630[(7)] = inst_32586__$1);
(statearr_32630[(8)] = inst_32587);
return statearr_32630;
})();if(inst_32588)
{var statearr_32631_32666 = state_32628__$1;(statearr_32631_32666[(1)] = (8));
} else
{var statearr_32632_32667 = state_32628__$1;(statearr_32632_32667[(1)] = (9));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (20)))
{var inst_32586 = (state_32628[(7)]);var state_32628__$1 = state_32628;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32628__$1,(23),inst_32586);
} else
{if((state_val_32629 === (1)))
{var state_32628__$1 = state_32628;var statearr_32633_32668 = state_32628__$1;(statearr_32633_32668[(2)] = null);
(statearr_32633_32668[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (4)))
{var state_32628__$1 = state_32628;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32628__$1,(7),ocomm);
} else
{if((state_val_32629 === (15)))
{var inst_32608 = (state_32628[(2)]);var state_32628__$1 = state_32628;var statearr_32634_32669 = state_32628__$1;(statearr_32634_32669[(2)] = inst_32608);
(statearr_32634_32669[(1)] = (12));
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (21)))
{var state_32628__$1 = state_32628;var statearr_32635_32670 = state_32628__$1;(statearr_32635_32670[(2)] = null);
(statearr_32635_32670[(1)] = (22));
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (13)))
{var inst_32591 = (state_32628[(9)]);var state_32628__$1 = state_32628;var statearr_32636_32671 = state_32628__$1;(statearr_32636_32671[(2)] = inst_32591);
(statearr_32636_32671[(1)] = (15));
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (22)))
{var inst_32617 = (state_32628[(2)]);var state_32628__$1 = state_32628;var statearr_32637_32672 = state_32628__$1;(statearr_32637_32672[(2)] = inst_32617);
(statearr_32637_32672[(1)] = (10));
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (6)))
{var inst_32624 = (state_32628[(2)]);var state_32628__$1 = state_32628;var statearr_32638_32673 = state_32628__$1;(statearr_32638_32673[(2)] = inst_32624);
(statearr_32638_32673[(1)] = (3));
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (17)))
{var state_32628__$1 = state_32628;var statearr_32639_32674 = state_32628__$1;(statearr_32639_32674[(2)] = null);
(statearr_32639_32674[(1)] = (18));
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (3)))
{var inst_32626 = (state_32628[(2)]);var state_32628__$1 = state_32628;return cljs.core.async.impl.ioc_helpers.return_chan(state_32628__$1,inst_32626);
} else
{if((state_val_32629 === (12)))
{var inst_32610 = (state_32628[(2)]);var state_32628__$1 = state_32628;var statearr_32640_32675 = state_32628__$1;(statearr_32640_32675[(2)] = inst_32610);
(statearr_32640_32675[(1)] = (10));
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (2)))
{var state_32628__$1 = state_32628;if(true)
{var statearr_32641_32676 = state_32628__$1;(statearr_32641_32676[(1)] = (4));
} else
{var statearr_32642_32677 = state_32628__$1;(statearr_32642_32677[(1)] = (5));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (23)))
{var inst_32614 = (state_32628[(2)]);var state_32628__$1 = state_32628;var statearr_32643_32678 = state_32628__$1;(statearr_32643_32678[(2)] = inst_32614);
(statearr_32643_32678[(1)] = (22));
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (19)))
{var inst_32601 = (state_32628[(2)]);var state_32628__$1 = state_32628;var statearr_32644_32679 = state_32628__$1;(statearr_32644_32679[(2)] = inst_32601);
(statearr_32644_32679[(1)] = (18));
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (11)))
{var inst_32590 = (state_32628[(10)]);var inst_32593 = cljs.core.empty_QMARK_(inst_32590);var state_32628__$1 = state_32628;if(inst_32593)
{var statearr_32645_32680 = state_32628__$1;(statearr_32645_32680[(1)] = (13));
} else
{var statearr_32646_32681 = state_32628__$1;(statearr_32646_32681[(1)] = (14));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (9)))
{var inst_32586 = (state_32628[(7)]);var state_32628__$1 = state_32628;if(cljs.core.truth_(inst_32586))
{var statearr_32647_32682 = state_32628__$1;(statearr_32647_32682[(1)] = (20));
} else
{var statearr_32648_32683 = state_32628__$1;(statearr_32648_32683[(1)] = (21));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (5)))
{var state_32628__$1 = state_32628;var statearr_32649_32684 = state_32628__$1;(statearr_32649_32684[(2)] = null);
(statearr_32649_32684[(1)] = (6));
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (14)))
{var inst_32590 = (state_32628[(10)]);var inst_32596 = cljs.core.rest(inst_32590);var inst_32597 = cljs.core.first(inst_32590);var state_32628__$1 = (function (){var statearr_32650 = state_32628;(statearr_32650[(11)] = inst_32596);
return statearr_32650;
})();if(cljs.core.truth_(inst_32597))
{var statearr_32651_32685 = state_32628__$1;(statearr_32651_32685[(1)] = (16));
} else
{var statearr_32652_32686 = state_32628__$1;(statearr_32652_32686[(1)] = (17));
}
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (16)))
{var inst_32590 = (state_32628[(10)]);var inst_32599 = cljs.core.first(inst_32590);var state_32628__$1 = state_32628;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32628__$1,(19),inst_32599);
} else
{if((state_val_32629 === (10)))
{var inst_32587 = (state_32628[(8)]);var inst_32619 = (state_32628[(2)]);var inst_32620 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_32619,inst_32587);var state_32628__$1 = (function (){var statearr_32653 = state_32628;(statearr_32653[(12)] = inst_32620);
return statearr_32653;
})();var statearr_32654_32687 = state_32628__$1;(statearr_32654_32687[(2)] = null);
(statearr_32654_32687[(1)] = (2));
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (18)))
{var inst_32596 = (state_32628[(11)]);var inst_32591 = (state_32628[(9)]);var inst_32604 = (state_32628[(2)]);var inst_32605 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_32591,inst_32604);var inst_32590 = inst_32596;var inst_32591__$1 = inst_32605;var state_32628__$1 = (function (){var statearr_32655 = state_32628;(statearr_32655[(9)] = inst_32591__$1);
(statearr_32655[(10)] = inst_32590);
return statearr_32655;
})();var statearr_32656_32688 = state_32628__$1;(statearr_32656_32688[(2)] = null);
(statearr_32656_32688[(1)] = (11));
return cljs.core.constant$keyword$653;
} else
{if((state_val_32629 === (8)))
{var inst_32586 = (state_32628[(7)]);var inst_32590 = inst_32586;var inst_32591 = cljs.core.PersistentVector.EMPTY;var state_32628__$1 = (function (){var statearr_32657 = state_32628;(statearr_32657[(9)] = inst_32591);
(statearr_32657[(10)] = inst_32590);
return statearr_32657;
})();var statearr_32658_32689 = state_32628__$1;(statearr_32658_32689[(2)] = null);
(statearr_32658_32689[(1)] = (11));
return cljs.core.constant$keyword$653;
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
var state_machine__5679__auto____0 = (function (){var statearr_32662 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32662[(0)] = state_machine__5679__auto__);
(statearr_32662[(1)] = (1));
return statearr_32662;
});
var state_machine__5679__auto____1 = (function (state_32628){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_32628);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e32663){if((e32663 instanceof Object))
{var ex__5682__auto__ = e32663;var statearr_32664_32690 = state_32628;(statearr_32664_32690[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32628);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e32663;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__32691 = state_32628;
state_32628 = G__32691;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_32628){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_32628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_32665 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_32665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_32665;
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
var G__32694__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__32693 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32693,(0),null);var result_handler_args = cljs.core.nthnext(vec__32693,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__32694 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__32694__delegate.call(this,req_args);};
G__32694.cljs$lang$maxFixedArity = 0;
G__32694.cljs$lang$applyTo = (function (arglist__32695){
var req_args = cljs.core.seq(arglist__32695);
return G__32694__delegate(req_args);
});
G__32694.cljs$core$IFn$_invoke$arity$variadic = G__32694__delegate;
return G__32694;
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
return (function (state_32713){var state_val_32714 = (state_32713[(1)]);if((state_val_32714 === (2)))
{var inst_32710 = (state_32713[(2)]);var inst_32711 = console.log(inst_32710);var state_32713__$1 = state_32713;return cljs.core.async.impl.ioc_helpers.return_chan(state_32713__$1,inst_32711);
} else
{if((state_val_32714 === (1)))
{var state_32713__$1 = state_32713;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32713__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_32718 = [null,null,null,null,null,null,null];(statearr_32718[(0)] = state_machine__5679__auto__);
(statearr_32718[(1)] = (1));
return statearr_32718;
});
var state_machine__5679__auto____1 = (function (state_32713){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_32713);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e32719){if((e32719 instanceof Object))
{var ex__5682__auto__ = e32719;var statearr_32720_32722 = state_32713;(statearr_32720_32722[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32713);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e32719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__32723 = state_32713;
state_32713 = G__32723;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_32713){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_32713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_32721 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_32721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_32721;
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
log_api.cljs$lang$applyTo = (function (arglist__32724){
var f = cljs.core.first(arglist__32724);
var args = cljs.core.rest(arglist__32724);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32727){var vec__32728 = p__32727;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32728,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32728,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var c__5693__auto___32755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___32755,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___32755,r){
return (function (state_32746){var state_val_32747 = (state_32746[(1)]);if((state_val_32747 === (2)))
{var inst_32743 = (state_32746[(2)]);var inst_32744 = cljs.core.reset_BANG_(r,inst_32743);var state_32746__$1 = state_32746;return cljs.core.async.impl.ioc_helpers.return_chan(state_32746__$1,inst_32744);
} else
{if((state_val_32747 === (1)))
{var state_32746__$1 = state_32746;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32746__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___32755,r))
;return ((function (switch__5678__auto__,c__5693__auto___32755,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_32751 = [null,null,null,null,null,null,null];(statearr_32751[(0)] = state_machine__5679__auto__);
(statearr_32751[(1)] = (1));
return statearr_32751;
});
var state_machine__5679__auto____1 = (function (state_32746){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_32746);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$653))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e32752){if((e32752 instanceof Object))
{var ex__5682__auto__ = e32752;var statearr_32753_32756 = state_32746;(statearr_32753_32756[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32746);
return cljs.core.constant$keyword$653;
} else
{if(cljs.core.constant$keyword$644)
{throw e32752;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$653))
{{
var G__32757 = state_32746;
state_32746 = G__32757;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_32746){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_32746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___32755,r))
})();var state__5695__auto__ = (function (){var statearr_32754 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_32754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___32755);
return statearr_32754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___32755,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__32758){
var id = cljs.core.first(arglist__32758);
arglist__32758 = cljs.core.next(arglist__32758);
var tolerance = cljs.core.first(arglist__32758);
var opts = cljs.core.rest(arglist__32758);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__32759){
var id = cljs.core.first(arglist__32759);
var opts = cljs.core.rest(arglist__32759);
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
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,p__32760){var vec__32762 = p__32760;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32762,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,var_args){
var p__32760 = null;if (arguments.length > 4) {
  p__32760 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,p__32760);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 4;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__32763){
var index = cljs.core.first(arglist__32763);
arglist__32763 = cljs.core.next(arglist__32763);
var type = cljs.core.first(arglist__32763);
arglist__32763 = cljs.core.next(arglist__32763);
var blcoll = cljs.core.first(arglist__32763);
arglist__32763 = cljs.core.next(arglist__32763);
var attr = cljs.core.first(arglist__32763);
var p__32760 = cljs.core.rest(arglist__32763);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,p__32760);
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
var portfolio_company_sites__delegate = function (p__32764){var vec__32766 = p__32764;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32766,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$668,(100),cljs.core.constant$keyword$669,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$670,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__32764 = null;if (arguments.length > 0) {
  p__32764 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__32764);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__32767){
var p__32764 = cljs.core.seq(arglist__32767);
return portfolio_company_sites__delegate(p__32764);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__32768){var vec__32770 = p__32768;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32770,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$668,(100),cljs.core.constant$keyword$669,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$670,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__32768 = null;if (arguments.length > 0) {
  p__32768 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__32768);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__32771){
var p__32768 = cljs.core.seq(arglist__32771);
return portfolio_company_sites_by_company__delegate(p__32768);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__32772){var vec__32774 = p__32772;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32774,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__32772 = null;if (arguments.length > 0) {
  p__32772 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__32772);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__32775){
var p__32772 = cljs.core.seq(arglist__32775);
return portfolio_company_locations__delegate(p__32772);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__32776){var vec__32778 = p__32776;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32778,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__32776 = null;if (arguments.length > 0) {
  p__32776 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__32776);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__32779){
var p__32776 = cljs.core.seq(arglist__32779);
return portfolio_company_site_stats__delegate(p__32776);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__32780){var vec__32782 = p__32780;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32782,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__32780 = null;if (arguments.length > 0) {
  p__32780 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__32780);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__32783){
var p__32780 = cljs.core.seq(arglist__32783);
return portfolio_company_site_account_timelines__delegate(p__32780);
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
var investment_account_timelines__delegate = function (p__32784){var vec__32786 = p__32784;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32786,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_account_timelines = function (var_args){
var p__32784 = null;if (arguments.length > 0) {
  p__32784 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__32784);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__32787){
var p__32784 = cljs.core.seq(arglist__32787);
return investment_account_timelines__delegate(p__32784);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__32788){var vec__32790 = p__32788;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32790,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_stats = function (var_args){
var p__32788 = null;if (arguments.length > 0) {
  p__32788 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__32788);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__32791){
var p__32788 = cljs.core.seq(arglist__32791);
return investment_stats__delegate(p__32788);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__32792){var vec__32794 = p__32792;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32794,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$668,(50),cljs.core.constant$keyword$671,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$672,"desc"], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__32792 = null;if (arguments.length > 0) {
  p__32792 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__32792);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__32795){
var p__32792 = cljs.core.seq(arglist__32795);
return investment_aggs__delegate(p__32792);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__32796){var vec__32798 = p__32796;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32798,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$668,(50),cljs.core.constant$keyword$671,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$673,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$674,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investments = function (var_args){
var p__32796 = null;if (arguments.length > 0) {
  p__32796 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__32796);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__32799){
var p__32796 = cljs.core.seq(arglist__32799);
return investments__delegate(p__32796);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
