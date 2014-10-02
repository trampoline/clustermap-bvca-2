// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj14544 = {};return obj14544;
})();
clustermap.ordered_resource.add_request = (function add_request(this$,ch){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2(this$,ch);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.ordered_resource.add_request[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.ordered_resource.add_request["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.add-request",this$);
}
}
})().call(null,this$,ch);
}
});
clustermap.ordered_resource.get_response_chan = (function get_response_chan(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.ordered_resource.get_response_chan[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.ordered_resource.get_response_chan["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.get-response-chan",this$);
}
}
})().call(null,this$);
}
});
clustermap.ordered_resource.close = (function close(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.ordered_resource.close[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.ordered_resource.close["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.ordered-resource/DiscardStaleResource");
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$ = true;
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$add_request$arity$2 = (function (this$,ch){var self__ = this;
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___14573 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___14573,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___14573,rq_ticket,this$__$1){
return (function (state_14559){var state_val_14560 = (state_14559[(1)]);if((state_val_14560 === (6)))
{var inst_14551 = (state_14559[(2)]);var state_14559__$1 = state_14559;var statearr_14561_14574 = state_14559__$1;(statearr_14561_14574[(2)] = inst_14551);
(statearr_14561_14574[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14560 === (5)))
{var inst_14557 = (state_14559[(2)]);var state_14559__$1 = state_14559;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14559__$1,inst_14557);
} else
{if((state_val_14560 === (4)))
{var inst_14553 = cljs.core.deref.call(null,self__.ticket);var inst_14554 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14553));var inst_14555 = console.log(inst_14554);var state_14559__$1 = state_14559;var statearr_14562_14575 = state_14559__$1;(statearr_14562_14575[(2)] = inst_14555);
(statearr_14562_14575[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14560 === (3)))
{var inst_14546 = (state_14559[(7)]);var state_14559__$1 = state_14559;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14559__$1,(6),self__.response_chan,inst_14546);
} else
{if((state_val_14560 === (2)))
{var inst_14546 = (state_14559[(2)]);var inst_14547 = cljs.core.deref.call(null,self__.ticket);var inst_14548 = cljs.core._EQ_.call(null,rq_ticket,inst_14547);var state_14559__$1 = (function (){var statearr_14563 = state_14559;(statearr_14563[(7)] = inst_14546);
return statearr_14563;
})();if(inst_14548)
{var statearr_14564_14576 = state_14559__$1;(statearr_14564_14576[(1)] = (3));
} else
{var statearr_14565_14577 = state_14559__$1;(statearr_14565_14577[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14560 === (1)))
{var state_14559__$1 = state_14559;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14559__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___14573,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___14573,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_14569 = [null,null,null,null,null,null,null,null];(statearr_14569[(0)] = state_machine__5694__auto__);
(statearr_14569[(1)] = (1));
return statearr_14569;
});
var state_machine__5694__auto____1 = (function (state_14559){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_14559);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e14570){if((e14570 instanceof Object))
{var ex__5697__auto__ = e14570;var statearr_14571_14578 = state_14559;(statearr_14571_14578[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14559);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14570;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14579 = state_14559;
state_14559 = G__14579;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_14559){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_14559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___14573,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_14572 = f__5709__auto__.call(null);(statearr_14572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___14573);
return statearr_14572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___14573,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__14580){
var ordered_resource = cljs.core.first(arglist__14580);
arglist__14580 = cljs.core.next(arglist__14580);
var api_fn = cljs.core.first(arglist__14580);
var args = cljs.core.rest(arglist__14580);
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
clustermap.ordered_resource.retrieve_responses = (function retrieve_responses(ordered_resource,f){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_14636){var state_val_14637 = (state_14636[(1)]);if((state_val_14637 === (7)))
{var inst_14627 = (state_14636[(2)]);var state_14636__$1 = state_14636;if(cljs.core.truth_(inst_14627))
{var statearr_14638_14657 = state_14636__$1;(statearr_14638_14657[(1)] = (8));
} else
{var statearr_14639_14658 = state_14636__$1;(statearr_14639_14658[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14637 === (1)))
{var state_14636__$1 = state_14636;var statearr_14640_14659 = state_14636__$1;(statearr_14640_14659[(2)] = null);
(statearr_14640_14659[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14637 === (4)))
{var inst_14622 = (state_14636[(7)]);var inst_14622__$1 = (state_14636[(2)]);var state_14636__$1 = (function (){var statearr_14641 = state_14636;(statearr_14641[(7)] = inst_14622__$1);
return statearr_14641;
})();if(cljs.core.truth_(inst_14622__$1))
{var statearr_14642_14660 = state_14636__$1;(statearr_14642_14660[(1)] = (5));
} else
{var statearr_14643_14661 = state_14636__$1;(statearr_14643_14661[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14637 === (6)))
{var state_14636__$1 = state_14636;var statearr_14644_14662 = state_14636__$1;(statearr_14644_14662[(2)] = null);
(statearr_14644_14662[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14637 === (3)))
{var inst_14634 = (state_14636[(2)]);var state_14636__$1 = state_14636;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14636__$1,inst_14634);
} else
{if((state_val_14637 === (2)))
{var inst_14620 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_14636__$1 = state_14636;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14636__$1,(4),inst_14620);
} else
{if((state_val_14637 === (9)))
{var state_14636__$1 = state_14636;var statearr_14645_14663 = state_14636__$1;(statearr_14645_14663[(2)] = null);
(statearr_14645_14663[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14637 === (5)))
{var inst_14622 = (state_14636[(7)]);var inst_14624 = f.call(null,inst_14622);var state_14636__$1 = (function (){var statearr_14646 = state_14636;(statearr_14646[(8)] = inst_14624);
return statearr_14646;
})();var statearr_14647_14664 = state_14636__$1;(statearr_14647_14664[(2)] = true);
(statearr_14647_14664[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14637 === (10)))
{var inst_14632 = (state_14636[(2)]);var state_14636__$1 = state_14636;var statearr_14648_14665 = state_14636__$1;(statearr_14648_14665[(2)] = inst_14632);
(statearr_14648_14665[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14637 === (8)))
{var state_14636__$1 = state_14636;var statearr_14649_14666 = state_14636__$1;(statearr_14649_14666[(2)] = null);
(statearr_14649_14666[(1)] = (2));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_14653 = [null,null,null,null,null,null,null,null,null];(statearr_14653[(0)] = state_machine__5694__auto__);
(statearr_14653[(1)] = (1));
return statearr_14653;
});
var state_machine__5694__auto____1 = (function (state_14636){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_14636);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e14654){if((e14654 instanceof Object))
{var ex__5697__auto__ = e14654;var statearr_14655_14667 = state_14636;(statearr_14655_14667[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14636);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14654;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14668 = state_14636;
state_14636 = G__14668;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_14636){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_14636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_14656 = f__5709__auto__.call(null);(statearr_14656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_14656;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
