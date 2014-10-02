// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj27542 = {};return obj27542;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___27571 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___27571,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___27571,rq_ticket,this$__$1){
return (function (state_27557){var state_val_27558 = (state_27557[(1)]);if((state_val_27558 === (6)))
{var inst_27549 = (state_27557[(2)]);var state_27557__$1 = state_27557;var statearr_27559_27572 = state_27557__$1;(statearr_27559_27572[(2)] = inst_27549);
(statearr_27559_27572[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27558 === (5)))
{var inst_27555 = (state_27557[(2)]);var state_27557__$1 = state_27557;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27557__$1,inst_27555);
} else
{if((state_val_27558 === (4)))
{var inst_27551 = cljs.core.deref.call(null,self__.ticket);var inst_27552 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27551));var inst_27553 = console.log(inst_27552);var state_27557__$1 = state_27557;var statearr_27560_27573 = state_27557__$1;(statearr_27560_27573[(2)] = inst_27553);
(statearr_27560_27573[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27558 === (3)))
{var inst_27544 = (state_27557[(7)]);var state_27557__$1 = state_27557;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27557__$1,(6),self__.response_chan,inst_27544);
} else
{if((state_val_27558 === (2)))
{var inst_27544 = (state_27557[(2)]);var inst_27545 = cljs.core.deref.call(null,self__.ticket);var inst_27546 = cljs.core._EQ_.call(null,rq_ticket,inst_27545);var state_27557__$1 = (function (){var statearr_27561 = state_27557;(statearr_27561[(7)] = inst_27544);
return statearr_27561;
})();if(inst_27546)
{var statearr_27562_27574 = state_27557__$1;(statearr_27562_27574[(1)] = (3));
} else
{var statearr_27563_27575 = state_27557__$1;(statearr_27563_27575[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27558 === (1)))
{var state_27557__$1 = state_27557;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27557__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___27571,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___27571,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_27567 = [null,null,null,null,null,null,null,null];(statearr_27567[(0)] = state_machine__5694__auto__);
(statearr_27567[(1)] = (1));
return statearr_27567;
});
var state_machine__5694__auto____1 = (function (state_27557){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_27557);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e27568){if((e27568 instanceof Object))
{var ex__5697__auto__ = e27568;var statearr_27569_27576 = state_27557;(statearr_27569_27576[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27557);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27568;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27577 = state_27557;
state_27557 = G__27577;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_27557){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_27557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___27571,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_27570 = f__5709__auto__.call(null);(statearr_27570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___27571);
return statearr_27570;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___27571,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__27578){
var ordered_resource = cljs.core.first(arglist__27578);
arglist__27578 = cljs.core.next(arglist__27578);
var api_fn = cljs.core.first(arglist__27578);
var args = cljs.core.rest(arglist__27578);
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
return (function (state_27634){var state_val_27635 = (state_27634[(1)]);if((state_val_27635 === (7)))
{var inst_27625 = (state_27634[(2)]);var state_27634__$1 = state_27634;if(cljs.core.truth_(inst_27625))
{var statearr_27636_27655 = state_27634__$1;(statearr_27636_27655[(1)] = (8));
} else
{var statearr_27637_27656 = state_27634__$1;(statearr_27637_27656[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27635 === (1)))
{var state_27634__$1 = state_27634;var statearr_27638_27657 = state_27634__$1;(statearr_27638_27657[(2)] = null);
(statearr_27638_27657[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27635 === (4)))
{var inst_27620 = (state_27634[(7)]);var inst_27620__$1 = (state_27634[(2)]);var state_27634__$1 = (function (){var statearr_27639 = state_27634;(statearr_27639[(7)] = inst_27620__$1);
return statearr_27639;
})();if(cljs.core.truth_(inst_27620__$1))
{var statearr_27640_27658 = state_27634__$1;(statearr_27640_27658[(1)] = (5));
} else
{var statearr_27641_27659 = state_27634__$1;(statearr_27641_27659[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27635 === (6)))
{var state_27634__$1 = state_27634;var statearr_27642_27660 = state_27634__$1;(statearr_27642_27660[(2)] = null);
(statearr_27642_27660[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27635 === (3)))
{var inst_27632 = (state_27634[(2)]);var state_27634__$1 = state_27634;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27634__$1,inst_27632);
} else
{if((state_val_27635 === (2)))
{var inst_27618 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_27634__$1 = state_27634;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27634__$1,(4),inst_27618);
} else
{if((state_val_27635 === (9)))
{var state_27634__$1 = state_27634;var statearr_27643_27661 = state_27634__$1;(statearr_27643_27661[(2)] = null);
(statearr_27643_27661[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27635 === (5)))
{var inst_27620 = (state_27634[(7)]);var inst_27622 = f.call(null,inst_27620);var state_27634__$1 = (function (){var statearr_27644 = state_27634;(statearr_27644[(8)] = inst_27622);
return statearr_27644;
})();var statearr_27645_27662 = state_27634__$1;(statearr_27645_27662[(2)] = true);
(statearr_27645_27662[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27635 === (10)))
{var inst_27630 = (state_27634[(2)]);var state_27634__$1 = state_27634;var statearr_27646_27663 = state_27634__$1;(statearr_27646_27663[(2)] = inst_27630);
(statearr_27646_27663[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27635 === (8)))
{var state_27634__$1 = state_27634;var statearr_27647_27664 = state_27634__$1;(statearr_27647_27664[(2)] = null);
(statearr_27647_27664[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_27651 = [null,null,null,null,null,null,null,null,null];(statearr_27651[(0)] = state_machine__5694__auto__);
(statearr_27651[(1)] = (1));
return statearr_27651;
});
var state_machine__5694__auto____1 = (function (state_27634){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_27634);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e27652){if((e27652 instanceof Object))
{var ex__5697__auto__ = e27652;var statearr_27653_27665 = state_27634;(statearr_27653_27665[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27634);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27652;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27666 = state_27634;
state_27634 = G__27666;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_27634){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_27634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_27654 = f__5709__auto__.call(null);(statearr_27654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_27654;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
