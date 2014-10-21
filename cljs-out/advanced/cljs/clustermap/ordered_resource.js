// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj57493 = {};return obj57493;
})();
clustermap.ordered_resource.add_request = (function add_request(this$,ch){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2(this$,ch);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.ordered_resource.add_request[(function (){var G__57497 = x__4273__auto__;return goog.typeOf(G__57497);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.ordered_resource.add_request["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IOrderedResource.add-request",this$);
}
}
})().call(null,this$,ch);
}
});
clustermap.ordered_resource.get_response_chan = (function get_response_chan(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.ordered_resource.get_response_chan[(function (){var G__57501 = x__4273__auto__;return goog.typeOf(G__57501);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.ordered_resource.get_response_chan["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IOrderedResource.get-response-chan",this$);
}
}
})().call(null,this$);
}
});
clustermap.ordered_resource.close = (function close(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.ordered_resource.close[(function (){var G__57505 = x__4273__auto__;return goog.typeOf(G__57505);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.ordered_resource.close["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("IOrderedResource.close",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
clustermap.ordered_resource.DiscardStaleResource = (function (name,ticket,response_chan){
this.name = name;
this.ticket = ticket;
this.response_chan = response_chan;
})
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$type = true;
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$ctorStr = "clustermap.ordered-resource/DiscardStaleResource";
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.ordered-resource/DiscardStaleResource");
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$ = true;
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$add_request$arity$2 = (function (this$,ch){var self__ = this;
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ticket,cljs.core.inc);var c__5819__auto___57536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___57536,rq_ticket,this$__$1){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___57536,rq_ticket,this$__$1){
return (function (state_57520){var state_val_57521 = (state_57520[(1)]);if((state_val_57521 === (6)))
{var inst_57512 = (state_57520[(2)]);var state_57520__$1 = state_57520;var statearr_57522_57537 = state_57520__$1;(statearr_57522_57537[(2)] = inst_57512);
(statearr_57522_57537[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_57521 === (5)))
{var inst_57518 = (state_57520[(2)]);var state_57520__$1 = state_57520;return cljs.core.async.impl.ioc_helpers.return_chan(state_57520__$1,inst_57518);
} else
{if((state_val_57521 === (4)))
{var inst_57514 = (function (){var G__57523 = self__.ticket;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__57523) : cljs.core.deref.call(null,G__57523));
})();var inst_57515 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57514));var inst_57516 = console.log(inst_57515);var state_57520__$1 = state_57520;var statearr_57524_57538 = state_57520__$1;(statearr_57524_57538[(2)] = inst_57516);
(statearr_57524_57538[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_57521 === (3)))
{var inst_57507 = (state_57520[(7)]);var state_57520__$1 = state_57520;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57520__$1,(6),self__.response_chan,inst_57507);
} else
{if((state_val_57521 === (2)))
{var inst_57507 = (state_57520[(2)]);var inst_57508 = (function (){var G__57525 = self__.ticket;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__57525) : cljs.core.deref.call(null,G__57525));
})();var inst_57509 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rq_ticket,inst_57508);var state_57520__$1 = (function (){var statearr_57526 = state_57520;(statearr_57526[(7)] = inst_57507);
return statearr_57526;
})();if(inst_57509)
{var statearr_57527_57539 = state_57520__$1;(statearr_57527_57539[(1)] = (3));
} else
{var statearr_57528_57540 = state_57520__$1;(statearr_57528_57540[(1)] = (4));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_57521 === (1)))
{var state_57520__$1 = state_57520;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57520__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto___57536,rq_ticket,this$__$1))
;return ((function (switch__5804__auto__,c__5819__auto___57536,rq_ticket,this$__$1){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_57532 = [null,null,null,null,null,null,null,null];(statearr_57532[(0)] = state_machine__5805__auto__);
(statearr_57532[(1)] = (1));
return statearr_57532;
});
var state_machine__5805__auto____1 = (function (state_57520){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_57520);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e57533){if((e57533 instanceof Object))
{var ex__5808__auto__ = e57533;var statearr_57534_57541 = state_57520;(statearr_57534_57541[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_57520);
return cljs.core.constant$keyword$1120;
} else
{throw e57533;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__57542 = state_57520;
state_57520 = G__57542;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_57520){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_57520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___57536,rq_ticket,this$__$1))
})();var state__5821__auto__ = (function (){var statearr_57535 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_57535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___57536);
return statearr_57535;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___57536,rq_ticket,this$__$1))
);
return null;
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.response_chan;
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$close$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.async.close_BANG_(self__.response_chan);
});
clustermap.ordered_resource.__GT_DiscardStaleResource = (function __GT_DiscardStaleResource(name,ticket,response_chan){return (new clustermap.ordered_resource.DiscardStaleResource(name,ticket,response_chan));
});
/**
* creates an ordered-resource which will discard a response if
* a response to a later request has already been received
*/
clustermap.ordered_resource.make_discard_stale_resource = (function make_discard_stale_resource(name){return (new clustermap.ordered_resource.DiscardStaleResource(name,(function (){var G__57544 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__57544) : cljs.core.atom.call(null,G__57544));
})(),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()));
});
/**
* make an api call and put the result channel into an ordered-resource
* - ordered-resource : the ordered resources
* - api-fn : makes an api-call and returns a channel of a single result value
* - args : to be passed to the api-fn
* @param {...*} var_args
*/
clustermap.ordered_resource.api_call = (function() { 
var api_call__delegate = function (ordered_resource,api_fn,args){return clustermap.ordered_resource.add_request(ordered_resource,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_fn,args));
};
var api_call = function (ordered_resource,api_fn,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return api_call__delegate.call(this,ordered_resource,api_fn,args);};
api_call.cljs$lang$maxFixedArity = 2;
api_call.cljs$lang$applyTo = (function (arglist__57545){
var ordered_resource = cljs.core.first(arglist__57545);
arglist__57545 = cljs.core.next(arglist__57545);
var api_fn = cljs.core.first(arglist__57545);
var args = cljs.core.rest(arglist__57545);
return api_call__delegate(ordered_resource,api_fn,args);
});
api_call.cljs$core$IFn$_invoke$arity$variadic = api_call__delegate;
return api_call;
})()
;
/**
* loop reading responses from the ordered-resource response channel
* and calling f with the response, for side-effects. stop when the
* response channel is closed
*/
clustermap.ordered_resource.retrieve_responses = (function retrieve_responses(ordered_resource,f){var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_57602){var state_val_57603 = (state_57602[(1)]);if((state_val_57603 === (7)))
{var inst_57593 = (state_57602[(2)]);var state_57602__$1 = state_57602;if(cljs.core.truth_(inst_57593))
{var statearr_57604_57624 = state_57602__$1;(statearr_57604_57624[(1)] = (8));
} else
{var statearr_57605_57625 = state_57602__$1;(statearr_57605_57625[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_57603 === (1)))
{var state_57602__$1 = state_57602;var statearr_57606_57626 = state_57602__$1;(statearr_57606_57626[(2)] = null);
(statearr_57606_57626[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_57603 === (4)))
{var inst_57588 = (state_57602[(7)]);var inst_57588__$1 = (state_57602[(2)]);var state_57602__$1 = (function (){var statearr_57607 = state_57602;(statearr_57607[(7)] = inst_57588__$1);
return statearr_57607;
})();if(cljs.core.truth_(inst_57588__$1))
{var statearr_57608_57627 = state_57602__$1;(statearr_57608_57627[(1)] = (5));
} else
{var statearr_57609_57628 = state_57602__$1;(statearr_57609_57628[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_57603 === (6)))
{var state_57602__$1 = state_57602;var statearr_57610_57629 = state_57602__$1;(statearr_57610_57629[(2)] = null);
(statearr_57610_57629[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_57603 === (3)))
{var inst_57600 = (state_57602[(2)]);var state_57602__$1 = state_57602;return cljs.core.async.impl.ioc_helpers.return_chan(state_57602__$1,inst_57600);
} else
{if((state_val_57603 === (2)))
{var inst_57586 = clustermap.ordered_resource.get_response_chan(ordered_resource);var state_57602__$1 = state_57602;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57602__$1,(4),inst_57586);
} else
{if((state_val_57603 === (9)))
{var state_57602__$1 = state_57602;var statearr_57611_57630 = state_57602__$1;(statearr_57611_57630[(2)] = null);
(statearr_57611_57630[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_57603 === (5)))
{var inst_57588 = (state_57602[(7)]);var inst_57590 = (function (){var G__57612 = inst_57588;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57612) : f.call(null,G__57612));
})();var state_57602__$1 = (function (){var statearr_57613 = state_57602;(statearr_57613[(8)] = inst_57590);
return statearr_57613;
})();var statearr_57614_57631 = state_57602__$1;(statearr_57614_57631[(2)] = true);
(statearr_57614_57631[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_57603 === (10)))
{var inst_57598 = (state_57602[(2)]);var state_57602__$1 = state_57602;var statearr_57615_57632 = state_57602__$1;(statearr_57615_57632[(2)] = inst_57598);
(statearr_57615_57632[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_57603 === (8)))
{var state_57602__$1 = state_57602;var statearr_57616_57633 = state_57602__$1;(statearr_57616_57633[(2)] = null);
(statearr_57616_57633[(1)] = (2));
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
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_57620 = [null,null,null,null,null,null,null,null,null];(statearr_57620[(0)] = state_machine__5805__auto__);
(statearr_57620[(1)] = (1));
return statearr_57620;
});
var state_machine__5805__auto____1 = (function (state_57602){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_57602);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e57621){if((e57621 instanceof Object))
{var ex__5808__auto__ = e57621;var statearr_57622_57634 = state_57602;(statearr_57622_57634[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_57602);
return cljs.core.constant$keyword$1120;
} else
{throw e57621;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__57635 = state_57602;
state_57602 = G__57635;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_57602){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_57602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_57623 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_57623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_57623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
});
