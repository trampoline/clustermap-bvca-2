// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj83561 = {};return obj83561;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5819__auto___83590 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___83590,rq_ticket,this$__$1){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___83590,rq_ticket,this$__$1){
return (function (state_83576){var state_val_83577 = (state_83576[(1)]);if((state_val_83577 === (6)))
{var inst_83568 = (state_83576[(2)]);var state_83576__$1 = state_83576;var statearr_83578_83591 = state_83576__$1;(statearr_83578_83591[(2)] = inst_83568);
(statearr_83578_83591[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83577 === (5)))
{var inst_83574 = (state_83576[(2)]);var state_83576__$1 = state_83576;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83576__$1,inst_83574);
} else
{if((state_val_83577 === (4)))
{var inst_83570 = cljs.core.deref.call(null,self__.ticket);var inst_83571 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_83570));var inst_83572 = console.log(inst_83571);var state_83576__$1 = state_83576;var statearr_83579_83592 = state_83576__$1;(statearr_83579_83592[(2)] = inst_83572);
(statearr_83579_83592[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83577 === (3)))
{var inst_83563 = (state_83576[(7)]);var state_83576__$1 = state_83576;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83576__$1,(6),self__.response_chan,inst_83563);
} else
{if((state_val_83577 === (2)))
{var inst_83563 = (state_83576[(2)]);var inst_83564 = cljs.core.deref.call(null,self__.ticket);var inst_83565 = cljs.core._EQ_.call(null,rq_ticket,inst_83564);var state_83576__$1 = (function (){var statearr_83580 = state_83576;(statearr_83580[(7)] = inst_83563);
return statearr_83580;
})();if(inst_83565)
{var statearr_83581_83593 = state_83576__$1;(statearr_83581_83593[(1)] = (3));
} else
{var statearr_83582_83594 = state_83576__$1;(statearr_83582_83594[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83577 === (1)))
{var state_83576__$1 = state_83576;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83576__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto___83590,rq_ticket,this$__$1))
;return ((function (switch__5804__auto__,c__5819__auto___83590,rq_ticket,this$__$1){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_83586 = [null,null,null,null,null,null,null,null];(statearr_83586[(0)] = state_machine__5805__auto__);
(statearr_83586[(1)] = (1));
return statearr_83586;
});
var state_machine__5805__auto____1 = (function (state_83576){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_83576);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e83587){if((e83587 instanceof Object))
{var ex__5808__auto__ = e83587;var statearr_83588_83595 = state_83576;(statearr_83588_83595[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83576);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e83587;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__83596 = state_83576;
state_83576 = G__83596;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_83576){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_83576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___83590,rq_ticket,this$__$1))
})();var state__5821__auto__ = (function (){var statearr_83589 = f__5820__auto__.call(null);(statearr_83589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___83590);
return statearr_83589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___83590,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__83597){
var ordered_resource = cljs.core.first(arglist__83597);
arglist__83597 = cljs.core.next(arglist__83597);
var api_fn = cljs.core.first(arglist__83597);
var args = cljs.core.rest(arglist__83597);
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
return (function (state_83653){var state_val_83654 = (state_83653[(1)]);if((state_val_83654 === (7)))
{var inst_83644 = (state_83653[(2)]);var state_83653__$1 = state_83653;if(cljs.core.truth_(inst_83644))
{var statearr_83655_83674 = state_83653__$1;(statearr_83655_83674[(1)] = (8));
} else
{var statearr_83656_83675 = state_83653__$1;(statearr_83656_83675[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83654 === (1)))
{var state_83653__$1 = state_83653;var statearr_83657_83676 = state_83653__$1;(statearr_83657_83676[(2)] = null);
(statearr_83657_83676[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83654 === (4)))
{var inst_83639 = (state_83653[(7)]);var inst_83639__$1 = (state_83653[(2)]);var state_83653__$1 = (function (){var statearr_83658 = state_83653;(statearr_83658[(7)] = inst_83639__$1);
return statearr_83658;
})();if(cljs.core.truth_(inst_83639__$1))
{var statearr_83659_83677 = state_83653__$1;(statearr_83659_83677[(1)] = (5));
} else
{var statearr_83660_83678 = state_83653__$1;(statearr_83660_83678[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83654 === (6)))
{var state_83653__$1 = state_83653;var statearr_83661_83679 = state_83653__$1;(statearr_83661_83679[(2)] = null);
(statearr_83661_83679[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83654 === (3)))
{var inst_83651 = (state_83653[(2)]);var state_83653__$1 = state_83653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83653__$1,inst_83651);
} else
{if((state_val_83654 === (2)))
{var inst_83637 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_83653__$1 = state_83653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83653__$1,(4),inst_83637);
} else
{if((state_val_83654 === (9)))
{var state_83653__$1 = state_83653;var statearr_83662_83680 = state_83653__$1;(statearr_83662_83680[(2)] = null);
(statearr_83662_83680[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83654 === (5)))
{var inst_83639 = (state_83653[(7)]);var inst_83641 = f.call(null,inst_83639);var state_83653__$1 = (function (){var statearr_83663 = state_83653;(statearr_83663[(8)] = inst_83641);
return statearr_83663;
})();var statearr_83664_83681 = state_83653__$1;(statearr_83664_83681[(2)] = true);
(statearr_83664_83681[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83654 === (10)))
{var inst_83649 = (state_83653[(2)]);var state_83653__$1 = state_83653;var statearr_83665_83682 = state_83653__$1;(statearr_83665_83682[(2)] = inst_83649);
(statearr_83665_83682[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83654 === (8)))
{var state_83653__$1 = state_83653;var statearr_83666_83683 = state_83653__$1;(statearr_83666_83683[(2)] = null);
(statearr_83666_83683[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_83670 = [null,null,null,null,null,null,null,null,null];(statearr_83670[(0)] = state_machine__5805__auto__);
(statearr_83670[(1)] = (1));
return statearr_83670;
});
var state_machine__5805__auto____1 = (function (state_83653){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_83653);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e83671){if((e83671 instanceof Object))
{var ex__5808__auto__ = e83671;var statearr_83672_83684 = state_83653;(statearr_83672_83684[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83653);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e83671;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__83685 = state_83653;
state_83653 = G__83685;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_83653){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_83653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_83673 = f__5820__auto__.call(null);(statearr_83673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_83673;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
});

//# sourceMappingURL=ordered_resource.js.map