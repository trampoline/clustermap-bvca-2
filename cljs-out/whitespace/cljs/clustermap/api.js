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
var GET__delegate = function (url,p__8494){var map__8496 = p__8494;var map__8496__$1 = ((cljs.core.seq_QMARK_.call(null,map__8496))?cljs.core.apply.call(null,cljs.core.hash_map,map__8496):map__8496);var raw = cljs.core.get.call(null,map__8496__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__8496,map__8496__$1,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__8496,map__8496__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__8496,map__8496__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__8496,map__8496__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__8494 = null;if (arguments.length > 1) {
  p__8494 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__8494);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__8497){
var url = cljs.core.first(arglist__8497);
var p__8494 = cljs.core.rest(arglist__8497);
return GET__delegate(url,p__8494);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_8630){var state_val_8631 = (state_8630[(1)]);if((state_val_8631 === (7)))
{var inst_8588 = (state_8630[(7)]);var inst_8587 = (state_8630[(2)]);var inst_8588__$1 = cljs.core.nth.call(null,inst_8587,(0),null);var inst_8589 = cljs.core.nth.call(null,inst_8587,(1),null);var inst_8590 = cljs.core.sequential_QMARK_.call(null,inst_8588__$1);var state_8630__$1 = (function (){var statearr_8632 = state_8630;(statearr_8632[(8)] = inst_8589);
(statearr_8632[(7)] = inst_8588__$1);
return statearr_8632;
})();if(inst_8590)
{var statearr_8633_8668 = state_8630__$1;(statearr_8633_8668[(1)] = (8));
} else
{var statearr_8634_8669 = state_8630__$1;(statearr_8634_8669[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (20)))
{var inst_8588 = (state_8630[(7)]);var state_8630__$1 = state_8630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8630__$1,(23),inst_8588);
} else
{if((state_val_8631 === (1)))
{var state_8630__$1 = state_8630;var statearr_8635_8670 = state_8630__$1;(statearr_8635_8670[(2)] = null);
(statearr_8635_8670[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (4)))
{var state_8630__$1 = state_8630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8630__$1,(7),ocomm);
} else
{if((state_val_8631 === (15)))
{var inst_8610 = (state_8630[(2)]);var state_8630__$1 = state_8630;var statearr_8636_8671 = state_8630__$1;(statearr_8636_8671[(2)] = inst_8610);
(statearr_8636_8671[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (21)))
{var state_8630__$1 = state_8630;var statearr_8637_8672 = state_8630__$1;(statearr_8637_8672[(2)] = null);
(statearr_8637_8672[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (13)))
{var inst_8593 = (state_8630[(9)]);var state_8630__$1 = state_8630;var statearr_8638_8673 = state_8630__$1;(statearr_8638_8673[(2)] = inst_8593);
(statearr_8638_8673[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (22)))
{var inst_8619 = (state_8630[(2)]);var state_8630__$1 = state_8630;var statearr_8639_8674 = state_8630__$1;(statearr_8639_8674[(2)] = inst_8619);
(statearr_8639_8674[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (6)))
{var inst_8626 = (state_8630[(2)]);var state_8630__$1 = state_8630;var statearr_8640_8675 = state_8630__$1;(statearr_8640_8675[(2)] = inst_8626);
(statearr_8640_8675[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (17)))
{var state_8630__$1 = state_8630;var statearr_8641_8676 = state_8630__$1;(statearr_8641_8676[(2)] = null);
(statearr_8641_8676[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (3)))
{var inst_8628 = (state_8630[(2)]);var state_8630__$1 = state_8630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8630__$1,inst_8628);
} else
{if((state_val_8631 === (12)))
{var inst_8612 = (state_8630[(2)]);var state_8630__$1 = state_8630;var statearr_8642_8677 = state_8630__$1;(statearr_8642_8677[(2)] = inst_8612);
(statearr_8642_8677[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (2)))
{var state_8630__$1 = state_8630;if(true)
{var statearr_8643_8678 = state_8630__$1;(statearr_8643_8678[(1)] = (4));
} else
{var statearr_8644_8679 = state_8630__$1;(statearr_8644_8679[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (23)))
{var inst_8616 = (state_8630[(2)]);var state_8630__$1 = state_8630;var statearr_8645_8680 = state_8630__$1;(statearr_8645_8680[(2)] = inst_8616);
(statearr_8645_8680[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (19)))
{var inst_8603 = (state_8630[(2)]);var state_8630__$1 = state_8630;var statearr_8646_8681 = state_8630__$1;(statearr_8646_8681[(2)] = inst_8603);
(statearr_8646_8681[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (11)))
{var inst_8592 = (state_8630[(10)]);var inst_8595 = cljs.core.empty_QMARK_.call(null,inst_8592);var state_8630__$1 = state_8630;if(inst_8595)
{var statearr_8647_8682 = state_8630__$1;(statearr_8647_8682[(1)] = (13));
} else
{var statearr_8648_8683 = state_8630__$1;(statearr_8648_8683[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (9)))
{var inst_8588 = (state_8630[(7)]);var state_8630__$1 = state_8630;if(cljs.core.truth_(inst_8588))
{var statearr_8649_8684 = state_8630__$1;(statearr_8649_8684[(1)] = (20));
} else
{var statearr_8650_8685 = state_8630__$1;(statearr_8650_8685[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (5)))
{var state_8630__$1 = state_8630;var statearr_8651_8686 = state_8630__$1;(statearr_8651_8686[(2)] = null);
(statearr_8651_8686[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (14)))
{var inst_8592 = (state_8630[(10)]);var inst_8598 = cljs.core.rest.call(null,inst_8592);var inst_8599 = cljs.core.first.call(null,inst_8592);var state_8630__$1 = (function (){var statearr_8652 = state_8630;(statearr_8652[(11)] = inst_8598);
return statearr_8652;
})();if(cljs.core.truth_(inst_8599))
{var statearr_8653_8687 = state_8630__$1;(statearr_8653_8687[(1)] = (16));
} else
{var statearr_8654_8688 = state_8630__$1;(statearr_8654_8688[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (16)))
{var inst_8592 = (state_8630[(10)]);var inst_8601 = cljs.core.first.call(null,inst_8592);var state_8630__$1 = state_8630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8630__$1,(19),inst_8601);
} else
{if((state_val_8631 === (10)))
{var inst_8589 = (state_8630[(8)]);var inst_8621 = (state_8630[(2)]);var inst_8622 = cljs.core.apply.call(null,handler,inst_8621,inst_8589);var state_8630__$1 = (function (){var statearr_8655 = state_8630;(statearr_8655[(12)] = inst_8622);
return statearr_8655;
})();var statearr_8656_8689 = state_8630__$1;(statearr_8656_8689[(2)] = null);
(statearr_8656_8689[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (18)))
{var inst_8598 = (state_8630[(11)]);var inst_8593 = (state_8630[(9)]);var inst_8606 = (state_8630[(2)]);var inst_8607 = cljs.core.conj.call(null,inst_8593,inst_8606);var inst_8592 = inst_8598;var inst_8593__$1 = inst_8607;var state_8630__$1 = (function (){var statearr_8657 = state_8630;(statearr_8657[(9)] = inst_8593__$1);
(statearr_8657[(10)] = inst_8592);
return statearr_8657;
})();var statearr_8658_8690 = state_8630__$1;(statearr_8658_8690[(2)] = null);
(statearr_8658_8690[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8631 === (8)))
{var inst_8588 = (state_8630[(7)]);var inst_8592 = inst_8588;var inst_8593 = cljs.core.PersistentVector.EMPTY;var state_8630__$1 = (function (){var statearr_8659 = state_8630;(statearr_8659[(9)] = inst_8593);
(statearr_8659[(10)] = inst_8592);
return statearr_8659;
})();var statearr_8660_8691 = state_8630__$1;(statearr_8660_8691[(2)] = null);
(statearr_8660_8691[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var state_machine__5679__auto____0 = (function (){var statearr_8664 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8664[(0)] = state_machine__5679__auto__);
(statearr_8664[(1)] = (1));
return statearr_8664;
});
var state_machine__5679__auto____1 = (function (state_8630){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_8630);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e8665){if((e8665 instanceof Object))
{var ex__5682__auto__ = e8665;var statearr_8666_8692 = state_8630;(statearr_8666_8692[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8630);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e8665;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8693 = state_8630;
state_8630 = G__8693;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_8630){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_8630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_8667 = f__5694__auto__.call(null);(statearr_8667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_8667;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
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
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__8696__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__8695 = rseq;var rcomm = cljs.core.nth.call(null,vec__8695,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__8695,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__8696 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8696__delegate.call(this,req_args);};
G__8696.cljs$lang$maxFixedArity = 0;
G__8696.cljs$lang$applyTo = (function (arglist__8697){
var req_args = cljs.core.seq(arglist__8697);
return G__8696__delegate(req_args);
});
G__8696.cljs$core$IFn$_invoke$arity$variadic = G__8696__delegate;
return G__8696;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,ch){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,ch){
return (function (state_8715){var state_val_8716 = (state_8715[(1)]);if((state_val_8716 === (2)))
{var inst_8712 = (state_8715[(2)]);var inst_8713 = console.log(inst_8712);var state_8715__$1 = state_8715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8715__$1,inst_8713);
} else
{if((state_val_8716 === (1)))
{var state_8715__$1 = state_8715;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8715__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_8720 = [null,null,null,null,null,null,null];(statearr_8720[(0)] = state_machine__5679__auto__);
(statearr_8720[(1)] = (1));
return statearr_8720;
});
var state_machine__5679__auto____1 = (function (state_8715){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_8715);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e8721){if((e8721 instanceof Object))
{var ex__5682__auto__ = e8721;var statearr_8722_8724 = state_8715;(statearr_8722_8724[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8715);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e8721;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8725 = state_8715;
state_8715 = G__8725;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_8715){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_8715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_8723 = f__5694__auto__.call(null);(statearr_8723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_8723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,ch))
);
return c__5693__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__8726){
var f = cljs.core.first(arglist__8726);
var args = cljs.core.rest(arglist__8726);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__8729){var vec__8730 = p__8729;var k = cljs.core.nth.call(null,vec__8730,(0),null);var v = cljs.core.nth.call(null,vec__8730,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___8757 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___8757,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___8757,r){
return (function (state_8748){var state_val_8749 = (state_8748[(1)]);if((state_val_8749 === (2)))
{var inst_8745 = (state_8748[(2)]);var inst_8746 = cljs.core.reset_BANG_.call(null,r,inst_8745);var state_8748__$1 = state_8748;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8748__$1,inst_8746);
} else
{if((state_val_8749 === (1)))
{var state_8748__$1 = state_8748;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8748__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___8757,r))
;return ((function (switch__5678__auto__,c__5693__auto___8757,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_8753 = [null,null,null,null,null,null,null];(statearr_8753[(0)] = state_machine__5679__auto__);
(statearr_8753[(1)] = (1));
return statearr_8753;
});
var state_machine__5679__auto____1 = (function (state_8748){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_8748);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e8754){if((e8754 instanceof Object))
{var ex__5682__auto__ = e8754;var statearr_8755_8758 = state_8748;(statearr_8755_8758[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8748);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e8754;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8759 = state_8748;
state_8748 = G__8759;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_8748){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_8748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___8757,r))
})();var state__5695__auto__ = (function (){var statearr_8756 = f__5694__auto__.call(null);(statearr_8756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___8757);
return statearr_8756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___8757,r))
);
return r;
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__8760){
var id = cljs.core.first(arglist__8760);
arglist__8760 = cljs.core.next(arglist__8760);
var tolerance = cljs.core.first(arglist__8760);
var opts = cljs.core.rest(arglist__8760);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__8761){
var id = cljs.core.first(arglist__8761);
var opts = cljs.core.rest(arglist__8761);
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
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,p__8762){var vec__8764 = p__8762;var type_ids = cljs.core.nth.call(null,vec__8764,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,var_args){
var p__8762 = null;if (arguments.length > 4) {
  p__8762 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,p__8762);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 4;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__8765){
var index = cljs.core.first(arglist__8765);
arglist__8765 = cljs.core.next(arglist__8765);
var type = cljs.core.first(arglist__8765);
arglist__8765 = cljs.core.next(arglist__8765);
var blcoll = cljs.core.first(arglist__8765);
arglist__8765 = cljs.core.next(arglist__8765);
var attr = cljs.core.first(arglist__8765);
var p__8762 = cljs.core.rest(arglist__8765);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,p__8762);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > (0)))
{return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/constituencies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__8766){var vec__8768 = p__8766;var type_ids = cljs.core.nth.call(null,vec__8768,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__8766 = null;if (arguments.length > 0) {
  p__8766 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__8766);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__8769){
var p__8766 = cljs.core.seq(arglist__8769);
return portfolio_company_sites__delegate(p__8766);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__8770){var vec__8772 = p__8770;var type_ids = cljs.core.nth.call(null,vec__8772,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__8770 = null;if (arguments.length > 0) {
  p__8770 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__8770);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__8773){
var p__8770 = cljs.core.seq(arglist__8773);
return portfolio_company_sites_by_company__delegate(p__8770);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__8774){var vec__8776 = p__8774;var type_ids = cljs.core.nth.call(null,vec__8776,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__8774 = null;if (arguments.length > 0) {
  p__8774 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__8774);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__8777){
var p__8774 = cljs.core.seq(arglist__8777);
return portfolio_company_locations__delegate(p__8774);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__8778){var vec__8780 = p__8778;var type_ids = cljs.core.nth.call(null,vec__8780,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__8778 = null;if (arguments.length > 0) {
  p__8778 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__8778);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__8781){
var p__8778 = cljs.core.seq(arglist__8781);
return portfolio_company_site_stats__delegate(p__8778);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__8782){var vec__8784 = p__8782;var type_ids = cljs.core.nth.call(null,vec__8784,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__8782 = null;if (arguments.length > 0) {
  p__8782 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__8782);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__8785){
var p__8782 = cljs.core.seq(arglist__8785);
return portfolio_company_site_account_timelines__delegate(p__8782);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investor-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__8786){var vec__8788 = p__8786;var type_ids = cljs.core.nth.call(null,vec__8788,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__8786 = null;if (arguments.length > 0) {
  p__8786 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__8786);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__8789){
var p__8786 = cljs.core.seq(arglist__8789);
return investment_account_timelines__delegate(p__8786);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__8790){var vec__8792 = p__8790;var type_ids = cljs.core.nth.call(null,vec__8792,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__8790 = null;if (arguments.length > 0) {
  p__8790 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__8790);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__8793){
var p__8790 = cljs.core.seq(arglist__8793);
return investment_stats__delegate(p__8790);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__8794){var vec__8796 = p__8794;var type_ids = cljs.core.nth.call(null,vec__8796,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__8794 = null;if (arguments.length > 0) {
  p__8794 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__8794);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__8797){
var p__8794 = cljs.core.seq(arglist__8797);
return investment_aggs__delegate(p__8794);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__8798){var vec__8800 = p__8798;var type_ids = cljs.core.nth.call(null,vec__8800,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__8798 = null;if (arguments.length > 0) {
  p__8798 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__8798);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__8801){
var p__8798 = cljs.core.seq(arglist__8801);
return investments__delegate(p__8798);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
