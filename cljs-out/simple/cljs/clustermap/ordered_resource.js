// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj33314 = {};return obj33314;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5819__auto___33343 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___33343,rq_ticket,this$__$1){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___33343,rq_ticket,this$__$1){
return (function (state_33329){var state_val_33330 = (state_33329[(1)]);if((state_val_33330 === (6)))
{var inst_33321 = (state_33329[(2)]);var state_33329__$1 = state_33329;var statearr_33331_33344 = state_33329__$1;(statearr_33331_33344[(2)] = inst_33321);
(statearr_33331_33344[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33330 === (5)))
{var inst_33327 = (state_33329[(2)]);var state_33329__$1 = state_33329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33329__$1,inst_33327);
} else
{if((state_val_33330 === (4)))
{var inst_33323 = cljs.core.deref.call(null,self__.ticket);var inst_33324 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33323));var inst_33325 = console.log(inst_33324);var state_33329__$1 = state_33329;var statearr_33332_33345 = state_33329__$1;(statearr_33332_33345[(2)] = inst_33325);
(statearr_33332_33345[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33330 === (3)))
{var inst_33316 = (state_33329[(7)]);var state_33329__$1 = state_33329;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33329__$1,(6),self__.response_chan,inst_33316);
} else
{if((state_val_33330 === (2)))
{var inst_33316 = (state_33329[(2)]);var inst_33317 = cljs.core.deref.call(null,self__.ticket);var inst_33318 = cljs.core._EQ_.call(null,rq_ticket,inst_33317);var state_33329__$1 = (function (){var statearr_33333 = state_33329;(statearr_33333[(7)] = inst_33316);
return statearr_33333;
})();if(inst_33318)
{var statearr_33334_33346 = state_33329__$1;(statearr_33334_33346[(1)] = (3));
} else
{var statearr_33335_33347 = state_33329__$1;(statearr_33335_33347[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33330 === (1)))
{var state_33329__$1 = state_33329;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33329__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto___33343,rq_ticket,this$__$1))
;return ((function (switch__5804__auto__,c__5819__auto___33343,rq_ticket,this$__$1){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_33339 = [null,null,null,null,null,null,null,null];(statearr_33339[(0)] = state_machine__5805__auto__);
(statearr_33339[(1)] = (1));
return statearr_33339;
});
var state_machine__5805__auto____1 = (function (state_33329){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_33329);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e33340){if((e33340 instanceof Object))
{var ex__5808__auto__ = e33340;var statearr_33341_33348 = state_33329;(statearr_33341_33348[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33329);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33340;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33349 = state_33329;
state_33329 = G__33349;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_33329){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_33329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___33343,rq_ticket,this$__$1))
})();var state__5821__auto__ = (function (){var statearr_33342 = f__5820__auto__.call(null);(statearr_33342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___33343);
return statearr_33342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___33343,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__33350){
var ordered_resource = cljs.core.first(arglist__33350);
arglist__33350 = cljs.core.next(arglist__33350);
var api_fn = cljs.core.first(arglist__33350);
var args = cljs.core.rest(arglist__33350);
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
return (function (state_33406){var state_val_33407 = (state_33406[(1)]);if((state_val_33407 === (7)))
{var inst_33397 = (state_33406[(2)]);var state_33406__$1 = state_33406;if(cljs.core.truth_(inst_33397))
{var statearr_33408_33427 = state_33406__$1;(statearr_33408_33427[(1)] = (8));
} else
{var statearr_33409_33428 = state_33406__$1;(statearr_33409_33428[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33407 === (1)))
{var state_33406__$1 = state_33406;var statearr_33410_33429 = state_33406__$1;(statearr_33410_33429[(2)] = null);
(statearr_33410_33429[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33407 === (4)))
{var inst_33392 = (state_33406[(7)]);var inst_33392__$1 = (state_33406[(2)]);var state_33406__$1 = (function (){var statearr_33411 = state_33406;(statearr_33411[(7)] = inst_33392__$1);
return statearr_33411;
})();if(cljs.core.truth_(inst_33392__$1))
{var statearr_33412_33430 = state_33406__$1;(statearr_33412_33430[(1)] = (5));
} else
{var statearr_33413_33431 = state_33406__$1;(statearr_33413_33431[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33407 === (6)))
{var state_33406__$1 = state_33406;var statearr_33414_33432 = state_33406__$1;(statearr_33414_33432[(2)] = null);
(statearr_33414_33432[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33407 === (3)))
{var inst_33404 = (state_33406[(2)]);var state_33406__$1 = state_33406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33406__$1,inst_33404);
} else
{if((state_val_33407 === (2)))
{var inst_33390 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_33406__$1 = state_33406;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33406__$1,(4),inst_33390);
} else
{if((state_val_33407 === (9)))
{var state_33406__$1 = state_33406;var statearr_33415_33433 = state_33406__$1;(statearr_33415_33433[(2)] = null);
(statearr_33415_33433[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33407 === (5)))
{var inst_33392 = (state_33406[(7)]);var inst_33394 = f.call(null,inst_33392);var state_33406__$1 = (function (){var statearr_33416 = state_33406;(statearr_33416[(8)] = inst_33394);
return statearr_33416;
})();var statearr_33417_33434 = state_33406__$1;(statearr_33417_33434[(2)] = true);
(statearr_33417_33434[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33407 === (10)))
{var inst_33402 = (state_33406[(2)]);var state_33406__$1 = state_33406;var statearr_33418_33435 = state_33406__$1;(statearr_33418_33435[(2)] = inst_33402);
(statearr_33418_33435[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33407 === (8)))
{var state_33406__$1 = state_33406;var statearr_33419_33436 = state_33406__$1;(statearr_33419_33436[(2)] = null);
(statearr_33419_33436[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_33423 = [null,null,null,null,null,null,null,null,null];(statearr_33423[(0)] = state_machine__5805__auto__);
(statearr_33423[(1)] = (1));
return statearr_33423;
});
var state_machine__5805__auto____1 = (function (state_33406){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_33406);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e33424){if((e33424 instanceof Object))
{var ex__5808__auto__ = e33424;var statearr_33425_33437 = state_33406;(statearr_33425_33437[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33406);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33424;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33438 = state_33406;
state_33406 = G__33438;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_33406){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_33406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_33426 = f__5820__auto__.call(null);(statearr_33426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_33426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
});
