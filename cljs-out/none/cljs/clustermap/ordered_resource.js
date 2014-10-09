// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj54398 = {};return obj54398;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___54427 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___54427,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___54427,rq_ticket,this$__$1){
return (function (state_54413){var state_val_54414 = (state_54413[(1)]);if((state_val_54414 === (6)))
{var inst_54405 = (state_54413[(2)]);var state_54413__$1 = state_54413;var statearr_54415_54428 = state_54413__$1;(statearr_54415_54428[(2)] = inst_54405);
(statearr_54415_54428[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54414 === (5)))
{var inst_54411 = (state_54413[(2)]);var state_54413__$1 = state_54413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54413__$1,inst_54411);
} else
{if((state_val_54414 === (4)))
{var inst_54407 = cljs.core.deref.call(null,self__.ticket);var inst_54408 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54407));var inst_54409 = console.log(inst_54408);var state_54413__$1 = state_54413;var statearr_54416_54429 = state_54413__$1;(statearr_54416_54429[(2)] = inst_54409);
(statearr_54416_54429[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54414 === (3)))
{var inst_54400 = (state_54413[(7)]);var state_54413__$1 = state_54413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54413__$1,(6),self__.response_chan,inst_54400);
} else
{if((state_val_54414 === (2)))
{var inst_54400 = (state_54413[(2)]);var inst_54401 = cljs.core.deref.call(null,self__.ticket);var inst_54402 = cljs.core._EQ_.call(null,rq_ticket,inst_54401);var state_54413__$1 = (function (){var statearr_54417 = state_54413;(statearr_54417[(7)] = inst_54400);
return statearr_54417;
})();if(inst_54402)
{var statearr_54418_54430 = state_54413__$1;(statearr_54418_54430[(1)] = (3));
} else
{var statearr_54419_54431 = state_54413__$1;(statearr_54419_54431[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54414 === (1)))
{var state_54413__$1 = state_54413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54413__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___54427,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___54427,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_54423 = [null,null,null,null,null,null,null,null];(statearr_54423[(0)] = state_machine__5694__auto__);
(statearr_54423[(1)] = (1));
return statearr_54423;
});
var state_machine__5694__auto____1 = (function (state_54413){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_54413);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e54424){if((e54424 instanceof Object))
{var ex__5697__auto__ = e54424;var statearr_54425_54432 = state_54413;(statearr_54425_54432[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54413);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e54424;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54433 = state_54413;
state_54413 = G__54433;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_54413){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_54413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___54427,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_54426 = f__5709__auto__.call(null);(statearr_54426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___54427);
return statearr_54426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___54427,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__54434){
var ordered_resource = cljs.core.first(arglist__54434);
arglist__54434 = cljs.core.next(arglist__54434);
var api_fn = cljs.core.first(arglist__54434);
var args = cljs.core.rest(arglist__54434);
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
return (function (state_54490){var state_val_54491 = (state_54490[(1)]);if((state_val_54491 === (7)))
{var inst_54481 = (state_54490[(2)]);var state_54490__$1 = state_54490;if(cljs.core.truth_(inst_54481))
{var statearr_54492_54511 = state_54490__$1;(statearr_54492_54511[(1)] = (8));
} else
{var statearr_54493_54512 = state_54490__$1;(statearr_54493_54512[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54491 === (1)))
{var state_54490__$1 = state_54490;var statearr_54494_54513 = state_54490__$1;(statearr_54494_54513[(2)] = null);
(statearr_54494_54513[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54491 === (4)))
{var inst_54476 = (state_54490[(7)]);var inst_54476__$1 = (state_54490[(2)]);var state_54490__$1 = (function (){var statearr_54495 = state_54490;(statearr_54495[(7)] = inst_54476__$1);
return statearr_54495;
})();if(cljs.core.truth_(inst_54476__$1))
{var statearr_54496_54514 = state_54490__$1;(statearr_54496_54514[(1)] = (5));
} else
{var statearr_54497_54515 = state_54490__$1;(statearr_54497_54515[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54491 === (6)))
{var state_54490__$1 = state_54490;var statearr_54498_54516 = state_54490__$1;(statearr_54498_54516[(2)] = null);
(statearr_54498_54516[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54491 === (3)))
{var inst_54488 = (state_54490[(2)]);var state_54490__$1 = state_54490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54490__$1,inst_54488);
} else
{if((state_val_54491 === (2)))
{var inst_54474 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_54490__$1 = state_54490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54490__$1,(4),inst_54474);
} else
{if((state_val_54491 === (9)))
{var state_54490__$1 = state_54490;var statearr_54499_54517 = state_54490__$1;(statearr_54499_54517[(2)] = null);
(statearr_54499_54517[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54491 === (5)))
{var inst_54476 = (state_54490[(7)]);var inst_54478 = f.call(null,inst_54476);var state_54490__$1 = (function (){var statearr_54500 = state_54490;(statearr_54500[(8)] = inst_54478);
return statearr_54500;
})();var statearr_54501_54518 = state_54490__$1;(statearr_54501_54518[(2)] = true);
(statearr_54501_54518[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54491 === (10)))
{var inst_54486 = (state_54490[(2)]);var state_54490__$1 = state_54490;var statearr_54502_54519 = state_54490__$1;(statearr_54502_54519[(2)] = inst_54486);
(statearr_54502_54519[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54491 === (8)))
{var state_54490__$1 = state_54490;var statearr_54503_54520 = state_54490__$1;(statearr_54503_54520[(2)] = null);
(statearr_54503_54520[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_54507 = [null,null,null,null,null,null,null,null,null];(statearr_54507[(0)] = state_machine__5694__auto__);
(statearr_54507[(1)] = (1));
return statearr_54507;
});
var state_machine__5694__auto____1 = (function (state_54490){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_54490);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e54508){if((e54508 instanceof Object))
{var ex__5697__auto__ = e54508;var statearr_54509_54521 = state_54490;(statearr_54509_54521[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54490);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e54508;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54522 = state_54490;
state_54490 = G__54522;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_54490){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_54490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_54510 = f__5709__auto__.call(null);(statearr_54510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_54510;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});

//# sourceMappingURL=ordered_resource.js.map