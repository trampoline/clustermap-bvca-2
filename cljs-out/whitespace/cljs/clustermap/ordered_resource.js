// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj17485 = {};return obj17485;
})();
clustermap.ordered_resource.add_request = (function add_request(this$,ch){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2(this$,ch);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.ordered_resource.add_request[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.ordered_resource.add_request["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.add-request",this$);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.ordered_resource.get_response_chan[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.ordered_resource.get_response_chan["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.get-response-chan",this$);
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
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.ordered_resource.close[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.ordered_resource.close["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.close",this$);
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
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.ordered-resource/DiscardStaleResource");
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$ = true;
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$add_request$arity$2 = (function (this$,ch){var self__ = this;
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5819__auto___17514 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___17514,rq_ticket,this$__$1){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___17514,rq_ticket,this$__$1){
return (function (state_17500){var state_val_17501 = (state_17500[(1)]);if((state_val_17501 === (6)))
{var inst_17492 = (state_17500[(2)]);var state_17500__$1 = state_17500;var statearr_17502_17515 = state_17500__$1;(statearr_17502_17515[(2)] = inst_17492);
(statearr_17502_17515[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17501 === (5)))
{var inst_17498 = (state_17500[(2)]);var state_17500__$1 = state_17500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17500__$1,inst_17498);
} else
{if((state_val_17501 === (4)))
{var inst_17494 = cljs.core.deref.call(null,self__.ticket);var inst_17495 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17494));var inst_17496 = console.log(inst_17495);var state_17500__$1 = state_17500;var statearr_17503_17516 = state_17500__$1;(statearr_17503_17516[(2)] = inst_17496);
(statearr_17503_17516[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17501 === (3)))
{var inst_17487 = (state_17500[(7)]);var state_17500__$1 = state_17500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17500__$1,(6),self__.response_chan,inst_17487);
} else
{if((state_val_17501 === (2)))
{var inst_17487 = (state_17500[(2)]);var inst_17488 = cljs.core.deref.call(null,self__.ticket);var inst_17489 = cljs.core._EQ_.call(null,rq_ticket,inst_17488);var state_17500__$1 = (function (){var statearr_17504 = state_17500;(statearr_17504[(7)] = inst_17487);
return statearr_17504;
})();if(inst_17489)
{var statearr_17505_17517 = state_17500__$1;(statearr_17505_17517[(1)] = (3));
} else
{var statearr_17506_17518 = state_17500__$1;(statearr_17506_17518[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17501 === (1)))
{var state_17500__$1 = state_17500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17500__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto___17514,rq_ticket,this$__$1))
;return ((function (switch__5804__auto__,c__5819__auto___17514,rq_ticket,this$__$1){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_17510 = [null,null,null,null,null,null,null,null];(statearr_17510[(0)] = state_machine__5805__auto__);
(statearr_17510[(1)] = (1));
return statearr_17510;
});
var state_machine__5805__auto____1 = (function (state_17500){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_17500);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e17511){if((e17511 instanceof Object))
{var ex__5808__auto__ = e17511;var statearr_17512_17519 = state_17500;(statearr_17512_17519[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17500);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17511;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17520 = state_17500;
state_17500 = G__17520;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_17500){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_17500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___17514,rq_ticket,this$__$1))
})();var state__5821__auto__ = (function (){var statearr_17513 = f__5820__auto__.call(null);(statearr_17513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___17514);
return statearr_17513;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___17514,rq_ticket,this$__$1))
);
return null;
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.response_chan;
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$close$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.async.close_BANG_.call(null,self__.response_chan);
});
clustermap.ordered_resource.__GT_DiscardStaleResource = (function __GT_DiscardStaleResource(name,ticket,response_chan){return (new clustermap.ordered_resource.DiscardStaleResource(name,ticket,response_chan));
});
/**
* creates an ordered-resource which will discard a response if
* a response to a later request has already been received
*/
clustermap.ordered_resource.make_discard_stale_resource = (function make_discard_stale_resource(name){return (new clustermap.ordered_resource.DiscardStaleResource(name,cljs.core.atom.call(null,(0)),cljs.core.async.chan.call(null)));
});
/**
* make an api call and put the result channel into an ordered-resource
* - ordered-resource : the ordered resources
* - api-fn : makes an api-call and returns a channel of a single result value
* - args : to be passed to the api-fn
* @param {...*} var_args
*/
clustermap.ordered_resource.api_call = (function() { 
var api_call__delegate = function (ordered_resource,api_fn,args){return clustermap.ordered_resource.add_request.call(null,ordered_resource,cljs.core.apply.call(null,api_fn,args));
};
var api_call = function (ordered_resource,api_fn,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return api_call__delegate.call(this,ordered_resource,api_fn,args);};
api_call.cljs$lang$maxFixedArity = 2;
api_call.cljs$lang$applyTo = (function (arglist__17521){
var ordered_resource = cljs.core.first(arglist__17521);
arglist__17521 = cljs.core.next(arglist__17521);
var api_fn = cljs.core.first(arglist__17521);
var args = cljs.core.rest(arglist__17521);
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
clustermap.ordered_resource.retrieve_responses = (function retrieve_responses(ordered_resource,f){var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_17577){var state_val_17578 = (state_17577[(1)]);if((state_val_17578 === (7)))
{var inst_17568 = (state_17577[(2)]);var state_17577__$1 = state_17577;if(cljs.core.truth_(inst_17568))
{var statearr_17579_17598 = state_17577__$1;(statearr_17579_17598[(1)] = (8));
} else
{var statearr_17580_17599 = state_17577__$1;(statearr_17580_17599[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (1)))
{var state_17577__$1 = state_17577;var statearr_17581_17600 = state_17577__$1;(statearr_17581_17600[(2)] = null);
(statearr_17581_17600[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (4)))
{var inst_17563 = (state_17577[(7)]);var inst_17563__$1 = (state_17577[(2)]);var state_17577__$1 = (function (){var statearr_17582 = state_17577;(statearr_17582[(7)] = inst_17563__$1);
return statearr_17582;
})();if(cljs.core.truth_(inst_17563__$1))
{var statearr_17583_17601 = state_17577__$1;(statearr_17583_17601[(1)] = (5));
} else
{var statearr_17584_17602 = state_17577__$1;(statearr_17584_17602[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (6)))
{var state_17577__$1 = state_17577;var statearr_17585_17603 = state_17577__$1;(statearr_17585_17603[(2)] = null);
(statearr_17585_17603[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (3)))
{var inst_17575 = (state_17577[(2)]);var state_17577__$1 = state_17577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17577__$1,inst_17575);
} else
{if((state_val_17578 === (2)))
{var inst_17561 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_17577__$1 = state_17577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17577__$1,(4),inst_17561);
} else
{if((state_val_17578 === (9)))
{var state_17577__$1 = state_17577;var statearr_17586_17604 = state_17577__$1;(statearr_17586_17604[(2)] = null);
(statearr_17586_17604[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (5)))
{var inst_17563 = (state_17577[(7)]);var inst_17565 = f.call(null,inst_17563);var state_17577__$1 = (function (){var statearr_17587 = state_17577;(statearr_17587[(8)] = inst_17565);
return statearr_17587;
})();var statearr_17588_17605 = state_17577__$1;(statearr_17588_17605[(2)] = true);
(statearr_17588_17605[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (10)))
{var inst_17573 = (state_17577[(2)]);var state_17577__$1 = state_17577;var statearr_17589_17606 = state_17577__$1;(statearr_17589_17606[(2)] = inst_17573);
(statearr_17589_17606[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (8)))
{var state_17577__$1 = state_17577;var statearr_17590_17607 = state_17577__$1;(statearr_17590_17607[(2)] = null);
(statearr_17590_17607[(1)] = (2));
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
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_17594 = [null,null,null,null,null,null,null,null,null];(statearr_17594[(0)] = state_machine__5805__auto__);
(statearr_17594[(1)] = (1));
return statearr_17594;
});
var state_machine__5805__auto____1 = (function (state_17577){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_17577);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e17595){if((e17595 instanceof Object))
{var ex__5808__auto__ = e17595;var statearr_17596_17608 = state_17577;(statearr_17596_17608[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17577);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17595;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17609 = state_17577;
state_17577 = G__17609;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_17577){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_17577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_17597 = f__5820__auto__.call(null);(statearr_17597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_17597;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
});
