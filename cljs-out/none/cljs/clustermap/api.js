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
var AJAX__delegate = function (url,p__12608){var map__12612 = p__12608;var map__12612__$1 = ((cljs.core.seq_QMARK_.call(null,map__12612))?cljs.core.apply.call(null,cljs.core.hash_map,map__12612):map__12612);var opts = map__12612__$1;var content = cljs.core.get.call(null,map__12612__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__12612__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__12612__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__12612,map__12612__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__12612,map__12612__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__12612,map__12612__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__12612,map__12612__$1,opts,content,method,raw))
,(function (){var or__7900__auto__ = (function (){var G__12614 = method;var G__12614__$1 = (((G__12614 == null))?null:cljs.core.name.call(null,G__12614));var G__12614__$2 = (((G__12614__$1 == null))?null:clojure.string.upper_case.call(null,G__12614__$1));return G__12614__$2;
})();if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__12608 = null;if (arguments.length > 1) {
  p__12608 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__12608);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__12615){
var url = cljs.core.first(arglist__12615);
var p__12608 = cljs.core.rest(arglist__12615);
return AJAX__delegate(url,p__12608);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__12616){var map__12618 = p__12616;var map__12618__$1 = ((cljs.core.seq_QMARK_.call(null,map__12618))?cljs.core.apply.call(null,cljs.core.hash_map,map__12618):map__12618);var opts = map__12618__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__12616 = null;if (arguments.length > 1) {
  p__12616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__12616);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__12619){
var url = cljs.core.first(arglist__12619);
var p__12616 = cljs.core.rest(arglist__12619);
return GET__delegate(url,p__12616);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__12620){var map__12622 = p__12620;var map__12622__$1 = ((cljs.core.seq_QMARK_.call(null,map__12622))?cljs.core.apply.call(null,cljs.core.hash_map,map__12622):map__12622);var opts = map__12622__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__12620 = null;if (arguments.length > 2) {
  p__12620 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__12620);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__12623){
var url = cljs.core.first(arglist__12623);
arglist__12623 = cljs.core.next(arglist__12623);
var content = cljs.core.first(arglist__12623);
var p__12620 = cljs.core.rest(arglist__12623);
return POST__delegate(url,content,p__12620);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__12624){var map__12626 = p__12624;var map__12626__$1 = ((cljs.core.seq_QMARK_.call(null,map__12626))?cljs.core.apply.call(null,cljs.core.hash_map,map__12626):map__12626);var opts = map__12626__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__12624 = null;if (arguments.length > 2) {
  p__12624 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__12624);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__12627){
var url = cljs.core.first(arglist__12627);
arglist__12627 = cljs.core.next(arglist__12627);
var content = cljs.core.first(arglist__12627);
var p__12624 = cljs.core.rest(arglist__12627);
return PUT__delegate(url,content,p__12624);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__9759__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto__){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto__){
return (function (state_12762){var state_val_12763 = (state_12762[(1)]);if((state_val_12763 === (7)))
{var inst_12719 = (state_12762[(7)]);var inst_12718 = (state_12762[(2)]);var inst_12719__$1 = cljs.core.nth.call(null,inst_12718,(0),null);var inst_12720 = cljs.core.nth.call(null,inst_12718,(1),null);var inst_12721 = cljs.core.sequential_QMARK_.call(null,inst_12719__$1);var state_12762__$1 = (function (){var statearr_12764 = state_12762;(statearr_12764[(7)] = inst_12719__$1);
(statearr_12764[(8)] = inst_12720);
return statearr_12764;
})();if(inst_12721)
{var statearr_12765_12800 = state_12762__$1;(statearr_12765_12800[(1)] = (8));
} else
{var statearr_12766_12801 = state_12762__$1;(statearr_12766_12801[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (20)))
{var inst_12719 = (state_12762[(7)]);var state_12762__$1 = state_12762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12762__$1,(23),inst_12719);
} else
{if((state_val_12763 === (1)))
{var state_12762__$1 = state_12762;var statearr_12767_12802 = state_12762__$1;(statearr_12767_12802[(2)] = null);
(statearr_12767_12802[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (4)))
{var state_12762__$1 = state_12762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12762__$1,(7),ocomm);
} else
{if((state_val_12763 === (15)))
{var inst_12742 = (state_12762[(2)]);var state_12762__$1 = state_12762;var statearr_12768_12803 = state_12762__$1;(statearr_12768_12803[(2)] = inst_12742);
(statearr_12768_12803[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (21)))
{var state_12762__$1 = state_12762;var statearr_12769_12804 = state_12762__$1;(statearr_12769_12804[(2)] = null);
(statearr_12769_12804[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (13)))
{var inst_12725 = (state_12762[(9)]);var state_12762__$1 = state_12762;var statearr_12770_12805 = state_12762__$1;(statearr_12770_12805[(2)] = inst_12725);
(statearr_12770_12805[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (22)))
{var inst_12751 = (state_12762[(2)]);var state_12762__$1 = state_12762;var statearr_12771_12806 = state_12762__$1;(statearr_12771_12806[(2)] = inst_12751);
(statearr_12771_12806[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (6)))
{var inst_12758 = (state_12762[(2)]);var state_12762__$1 = state_12762;var statearr_12772_12807 = state_12762__$1;(statearr_12772_12807[(2)] = inst_12758);
(statearr_12772_12807[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (17)))
{var state_12762__$1 = state_12762;var statearr_12773_12808 = state_12762__$1;(statearr_12773_12808[(2)] = null);
(statearr_12773_12808[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (3)))
{var inst_12760 = (state_12762[(2)]);var state_12762__$1 = state_12762;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12762__$1,inst_12760);
} else
{if((state_val_12763 === (12)))
{var inst_12744 = (state_12762[(2)]);var state_12762__$1 = state_12762;var statearr_12774_12809 = state_12762__$1;(statearr_12774_12809[(2)] = inst_12744);
(statearr_12774_12809[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (2)))
{var state_12762__$1 = state_12762;var statearr_12775_12810 = state_12762__$1;(statearr_12775_12810[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (23)))
{var inst_12748 = (state_12762[(2)]);var state_12762__$1 = state_12762;var statearr_12777_12811 = state_12762__$1;(statearr_12777_12811[(2)] = inst_12748);
(statearr_12777_12811[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (19)))
{var inst_12735 = (state_12762[(2)]);var state_12762__$1 = state_12762;var statearr_12778_12812 = state_12762__$1;(statearr_12778_12812[(2)] = inst_12735);
(statearr_12778_12812[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (11)))
{var inst_12724 = (state_12762[(10)]);var inst_12727 = cljs.core.empty_QMARK_.call(null,inst_12724);var state_12762__$1 = state_12762;if(inst_12727)
{var statearr_12779_12813 = state_12762__$1;(statearr_12779_12813[(1)] = (13));
} else
{var statearr_12780_12814 = state_12762__$1;(statearr_12780_12814[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (9)))
{var inst_12719 = (state_12762[(7)]);var state_12762__$1 = state_12762;if(cljs.core.truth_(inst_12719))
{var statearr_12781_12815 = state_12762__$1;(statearr_12781_12815[(1)] = (20));
} else
{var statearr_12782_12816 = state_12762__$1;(statearr_12782_12816[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (5)))
{var state_12762__$1 = state_12762;var statearr_12783_12817 = state_12762__$1;(statearr_12783_12817[(2)] = null);
(statearr_12783_12817[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (14)))
{var inst_12724 = (state_12762[(10)]);var inst_12730 = cljs.core.rest.call(null,inst_12724);var inst_12731 = cljs.core.first.call(null,inst_12724);var state_12762__$1 = (function (){var statearr_12784 = state_12762;(statearr_12784[(11)] = inst_12730);
return statearr_12784;
})();if(cljs.core.truth_(inst_12731))
{var statearr_12785_12818 = state_12762__$1;(statearr_12785_12818[(1)] = (16));
} else
{var statearr_12786_12819 = state_12762__$1;(statearr_12786_12819[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (16)))
{var inst_12724 = (state_12762[(10)]);var inst_12733 = cljs.core.first.call(null,inst_12724);var state_12762__$1 = state_12762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12762__$1,(19),inst_12733);
} else
{if((state_val_12763 === (10)))
{var inst_12720 = (state_12762[(8)]);var inst_12753 = (state_12762[(2)]);var inst_12754 = cljs.core.apply.call(null,handler,inst_12753,inst_12720);var state_12762__$1 = (function (){var statearr_12787 = state_12762;(statearr_12787[(12)] = inst_12754);
return statearr_12787;
})();var statearr_12788_12820 = state_12762__$1;(statearr_12788_12820[(2)] = null);
(statearr_12788_12820[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (18)))
{var inst_12725 = (state_12762[(9)]);var inst_12730 = (state_12762[(11)]);var inst_12738 = (state_12762[(2)]);var inst_12739 = cljs.core.conj.call(null,inst_12725,inst_12738);var inst_12724 = inst_12730;var inst_12725__$1 = inst_12739;var state_12762__$1 = (function (){var statearr_12789 = state_12762;(statearr_12789[(9)] = inst_12725__$1);
(statearr_12789[(10)] = inst_12724);
return statearr_12789;
})();var statearr_12790_12821 = state_12762__$1;(statearr_12790_12821[(2)] = null);
(statearr_12790_12821[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12763 === (8)))
{var inst_12719 = (state_12762[(7)]);var inst_12723 = cljs.core.PersistentVector.EMPTY;var inst_12724 = inst_12719;var inst_12725 = inst_12723;var state_12762__$1 = (function (){var statearr_12791 = state_12762;(statearr_12791[(9)] = inst_12725);
(statearr_12791[(10)] = inst_12724);
return statearr_12791;
})();var statearr_12792_12822 = state_12762__$1;(statearr_12792_12822[(2)] = null);
(statearr_12792_12822[(1)] = (11));
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
});})(c__9759__auto__))
;return ((function (switch__9744__auto__,c__9759__auto__){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_12796 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12796[(0)] = state_machine__9745__auto__);
(statearr_12796[(1)] = (1));
return statearr_12796;
});
var state_machine__9745__auto____1 = (function (state_12762){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_12762);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e12797){if((e12797 instanceof Object))
{var ex__9748__auto__ = e12797;var statearr_12798_12823 = state_12762;(statearr_12798_12823[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12762);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12797;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12824 = state_12762;
state_12762 = G__12824;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_12762){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_12762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto__))
})();var state__9761__auto__ = (function (){var statearr_12799 = f__9760__auto__.call(null);(statearr_12799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto__);
return statearr_12799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto__))
);
return c__9759__auto__;
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
var G__12827__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__12826 = rseq;var rcomm = cljs.core.nth.call(null,vec__12826,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__12826,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__12827 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12827__delegate.call(this,req_args);};
G__12827.cljs$lang$maxFixedArity = 0;
G__12827.cljs$lang$applyTo = (function (arglist__12828){
var req_args = cljs.core.seq(arglist__12828);
return G__12827__delegate(req_args);
});
G__12827.cljs$core$IFn$_invoke$arity$variadic = G__12827__delegate;
return G__12827;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__9759__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto__,ch){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto__,ch){
return (function (state_12846){var state_val_12847 = (state_12846[(1)]);if((state_val_12847 === (2)))
{var inst_12843 = (state_12846[(2)]);var inst_12844 = console.log(inst_12843);var state_12846__$1 = state_12846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12846__$1,inst_12844);
} else
{if((state_val_12847 === (1)))
{var state_12846__$1 = state_12846;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12846__$1,(2),ch);
} else
{return null;
}
}
});})(c__9759__auto__,ch))
;return ((function (switch__9744__auto__,c__9759__auto__,ch){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_12851 = [null,null,null,null,null,null,null];(statearr_12851[(0)] = state_machine__9745__auto__);
(statearr_12851[(1)] = (1));
return statearr_12851;
});
var state_machine__9745__auto____1 = (function (state_12846){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_12846);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e12852){if((e12852 instanceof Object))
{var ex__9748__auto__ = e12852;var statearr_12853_12855 = state_12846;(statearr_12853_12855[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12846);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12852;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12856 = state_12846;
state_12846 = G__12856;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_12846){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_12846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto__,ch))
})();var state__9761__auto__ = (function (){var statearr_12854 = f__9760__auto__.call(null);(statearr_12854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto__);
return statearr_12854;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto__,ch))
);
return c__9759__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__12857){
var f = cljs.core.first(arglist__12857);
var args = cljs.core.rest(arglist__12857);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__12860){var vec__12861 = p__12860;var k = cljs.core.nth.call(null,vec__12861,(0),null);var v = cljs.core.nth.call(null,vec__12861,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__9759__auto___12888 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto___12888,r){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto___12888,r){
return (function (state_12879){var state_val_12880 = (state_12879[(1)]);if((state_val_12880 === (2)))
{var inst_12876 = (state_12879[(2)]);var inst_12877 = cljs.core.reset_BANG_.call(null,r,inst_12876);var state_12879__$1 = state_12879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12879__$1,inst_12877);
} else
{if((state_val_12880 === (1)))
{var state_12879__$1 = state_12879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12879__$1,(2),comm);
} else
{return null;
}
}
});})(c__9759__auto___12888,r))
;return ((function (switch__9744__auto__,c__9759__auto___12888,r){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_12884 = [null,null,null,null,null,null,null];(statearr_12884[(0)] = state_machine__9745__auto__);
(statearr_12884[(1)] = (1));
return statearr_12884;
});
var state_machine__9745__auto____1 = (function (state_12879){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_12879);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e12885){if((e12885 instanceof Object))
{var ex__9748__auto__ = e12885;var statearr_12886_12889 = state_12879;(statearr_12886_12889[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12885;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12890 = state_12879;
state_12879 = G__12890;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_12879){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_12879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto___12888,r))
})();var state__9761__auto__ = (function (){var statearr_12887 = f__9760__auto__.call(null);(statearr_12887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto___12888);
return statearr_12887;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto___12888,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__12891){
var id = cljs.core.first(arglist__12891);
arglist__12891 = cljs.core.next(arglist__12891);
var tolerance = cljs.core.first(arglist__12891);
var opts = cljs.core.rest(arglist__12891);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__12892){
var id = cljs.core.first(arglist__12892);
var opts = cljs.core.rest(arglist__12892);
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
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),ids,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__12893){
var ids = cljs.core.first(arglist__12893);
arglist__12893 = cljs.core.next(arglist__12893);
var tolerance = cljs.core.first(arglist__12893);
var opts = cljs.core.rest(arglist__12893);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__12894){var map__12896 = p__12894;var map__12896__$1 = ((cljs.core.seq_QMARK_.call(null,map__12896))?cljs.core.apply.call(null,cljs.core.hash_map,map__12896):map__12896);var opts = map__12896__$1;var boundaryline_ids = cljs.core.get.call(null,map__12896__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__12894 = null;if (arguments.length > 3) {
  p__12894 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__12894);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__12897){
var collection_id = cljs.core.first(arglist__12897);
arglist__12897 = cljs.core.next(arglist__12897);
var tolerance = cljs.core.first(arglist__12897);
arglist__12897 = cljs.core.next(arglist__12897);
var bounds = cljs.core.first(arglist__12897);
var p__12894 = cljs.core.rest(arglist__12897);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__12894);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__12898){var vec__12900 = p__12898;var type_ids = cljs.core.nth.call(null,vec__12900,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__12898 = null;if (arguments.length > 6) {
  p__12898 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__12898);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__12901){
var index = cljs.core.first(arglist__12901);
arglist__12901 = cljs.core.next(arglist__12901);
var type = cljs.core.first(arglist__12901);
arglist__12901 = cljs.core.next(arglist__12901);
var blcoll = cljs.core.first(arglist__12901);
arglist__12901 = cljs.core.next(arglist__12901);
var attr = cljs.core.first(arglist__12901);
arglist__12901 = cljs.core.next(arglist__12901);
var filter = cljs.core.first(arglist__12901);
arglist__12901 = cljs.core.next(arglist__12901);
var bounds = cljs.core.first(arglist__12901);
var p__12898 = cljs.core.rest(arglist__12901);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__12898);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__12902){var vec__12904 = p__12902;var type_ids = cljs.core.nth.call(null,vec__12904,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__12902 = null;if (arguments.length > 5) {
  p__12902 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__12902);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__12905){
var index = cljs.core.first(arglist__12905);
arglist__12905 = cljs.core.next(arglist__12905);
var type = cljs.core.first(arglist__12905);
arglist__12905 = cljs.core.next(arglist__12905);
var statsattrs = cljs.core.first(arglist__12905);
arglist__12905 = cljs.core.next(arglist__12905);
var filter = cljs.core.first(arglist__12905);
arglist__12905 = cljs.core.next(arglist__12905);
var bounds = cljs.core.first(arglist__12905);
var p__12902 = cljs.core.rest(arglist__12905);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__12902);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__12906){var vec__12908 = p__12906;var type_ids = cljs.core.nth.call(null,vec__12908,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__12906 = null;if (arguments.length > 7) {
  p__12906 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__12906);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__12909){
var index = cljs.core.first(arglist__12909);
arglist__12909 = cljs.core.next(arglist__12909);
var type = cljs.core.first(arglist__12909);
arglist__12909 = cljs.core.next(arglist__12909);
var location_attr = cljs.core.first(arglist__12909);
arglist__12909 = cljs.core.next(arglist__12909);
var attrs = cljs.core.first(arglist__12909);
arglist__12909 = cljs.core.next(arglist__12909);
var max_count = cljs.core.first(arglist__12909);
arglist__12909 = cljs.core.next(arglist__12909);
var filter = cljs.core.first(arglist__12909);
arglist__12909 = cljs.core.next(arglist__12909);
var bounds = cljs.core.first(arglist__12909);
var p__12906 = cljs.core.rest(arglist__12909);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__12906);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__12910){var vec__12912 = p__12910;var type_ids = cljs.core.nth.call(null,vec__12912,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__12910 = null;if (arguments.length > 7) {
  p__12910 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__12910);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__12913){
var index = cljs.core.first(arglist__12913);
arglist__12913 = cljs.core.next(arglist__12913);
var type = cljs.core.first(arglist__12913);
arglist__12913 = cljs.core.next(arglist__12913);
var filter_spec = cljs.core.first(arglist__12913);
arglist__12913 = cljs.core.next(arglist__12913);
var bounds = cljs.core.first(arglist__12913);
arglist__12913 = cljs.core.next(arglist__12913);
var sort_spec = cljs.core.first(arglist__12913);
arglist__12913 = cljs.core.next(arglist__12913);
var from = cljs.core.first(arglist__12913);
arglist__12913 = cljs.core.next(arglist__12913);
var size = cljs.core.first(arglist__12913);
var p__12910 = cljs.core.rest(arglist__12913);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__12910);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),time_variable,new cljs.core.Keyword(null,"after","after",594996914),after,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"interval","interval",1708495417),interval,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),metric_variables], null));
});

//# sourceMappingURL=api.js.map