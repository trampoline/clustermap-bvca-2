// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj59347 = {};return obj59347;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___59376 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___59376,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___59376,rq_ticket,this$__$1){
return (function (state_59362){var state_val_59363 = (state_59362[(1)]);if((state_val_59363 === (6)))
{var inst_59354 = (state_59362[(2)]);var state_59362__$1 = state_59362;var statearr_59364_59377 = state_59362__$1;(statearr_59364_59377[(2)] = inst_59354);
(statearr_59364_59377[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59363 === (5)))
{var inst_59360 = (state_59362[(2)]);var state_59362__$1 = state_59362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59362__$1,inst_59360);
} else
{if((state_val_59363 === (4)))
{var inst_59356 = cljs.core.deref.call(null,self__.ticket);var inst_59357 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59356));var inst_59358 = console.log(inst_59357);var state_59362__$1 = state_59362;var statearr_59365_59378 = state_59362__$1;(statearr_59365_59378[(2)] = inst_59358);
(statearr_59365_59378[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59363 === (3)))
{var inst_59349 = (state_59362[(7)]);var state_59362__$1 = state_59362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59362__$1,(6),self__.response_chan,inst_59349);
} else
{if((state_val_59363 === (2)))
{var inst_59349 = (state_59362[(2)]);var inst_59350 = cljs.core.deref.call(null,self__.ticket);var inst_59351 = cljs.core._EQ_.call(null,rq_ticket,inst_59350);var state_59362__$1 = (function (){var statearr_59366 = state_59362;(statearr_59366[(7)] = inst_59349);
return statearr_59366;
})();if(inst_59351)
{var statearr_59367_59379 = state_59362__$1;(statearr_59367_59379[(1)] = (3));
} else
{var statearr_59368_59380 = state_59362__$1;(statearr_59368_59380[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59363 === (1)))
{var state_59362__$1 = state_59362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59362__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___59376,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___59376,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_59372 = [null,null,null,null,null,null,null,null];(statearr_59372[(0)] = state_machine__5694__auto__);
(statearr_59372[(1)] = (1));
return statearr_59372;
});
var state_machine__5694__auto____1 = (function (state_59362){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_59362);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e59373){if((e59373 instanceof Object))
{var ex__5697__auto__ = e59373;var statearr_59374_59381 = state_59362;(statearr_59374_59381[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59362);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e59373;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59382 = state_59362;
state_59362 = G__59382;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_59362){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_59362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___59376,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_59375 = f__5709__auto__.call(null);(statearr_59375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___59376);
return statearr_59375;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___59376,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__59383){
var ordered_resource = cljs.core.first(arglist__59383);
arglist__59383 = cljs.core.next(arglist__59383);
var api_fn = cljs.core.first(arglist__59383);
var args = cljs.core.rest(arglist__59383);
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
return (function (state_59439){var state_val_59440 = (state_59439[(1)]);if((state_val_59440 === (7)))
{var inst_59430 = (state_59439[(2)]);var state_59439__$1 = state_59439;if(cljs.core.truth_(inst_59430))
{var statearr_59441_59460 = state_59439__$1;(statearr_59441_59460[(1)] = (8));
} else
{var statearr_59442_59461 = state_59439__$1;(statearr_59442_59461[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59440 === (1)))
{var state_59439__$1 = state_59439;var statearr_59443_59462 = state_59439__$1;(statearr_59443_59462[(2)] = null);
(statearr_59443_59462[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59440 === (4)))
{var inst_59425 = (state_59439[(7)]);var inst_59425__$1 = (state_59439[(2)]);var state_59439__$1 = (function (){var statearr_59444 = state_59439;(statearr_59444[(7)] = inst_59425__$1);
return statearr_59444;
})();if(cljs.core.truth_(inst_59425__$1))
{var statearr_59445_59463 = state_59439__$1;(statearr_59445_59463[(1)] = (5));
} else
{var statearr_59446_59464 = state_59439__$1;(statearr_59446_59464[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59440 === (6)))
{var state_59439__$1 = state_59439;var statearr_59447_59465 = state_59439__$1;(statearr_59447_59465[(2)] = null);
(statearr_59447_59465[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59440 === (3)))
{var inst_59437 = (state_59439[(2)]);var state_59439__$1 = state_59439;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59439__$1,inst_59437);
} else
{if((state_val_59440 === (2)))
{var inst_59423 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_59439__$1 = state_59439;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59439__$1,(4),inst_59423);
} else
{if((state_val_59440 === (9)))
{var state_59439__$1 = state_59439;var statearr_59448_59466 = state_59439__$1;(statearr_59448_59466[(2)] = null);
(statearr_59448_59466[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59440 === (5)))
{var inst_59425 = (state_59439[(7)]);var inst_59427 = f.call(null,inst_59425);var state_59439__$1 = (function (){var statearr_59449 = state_59439;(statearr_59449[(8)] = inst_59427);
return statearr_59449;
})();var statearr_59450_59467 = state_59439__$1;(statearr_59450_59467[(2)] = true);
(statearr_59450_59467[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59440 === (10)))
{var inst_59435 = (state_59439[(2)]);var state_59439__$1 = state_59439;var statearr_59451_59468 = state_59439__$1;(statearr_59451_59468[(2)] = inst_59435);
(statearr_59451_59468[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59440 === (8)))
{var state_59439__$1 = state_59439;var statearr_59452_59469 = state_59439__$1;(statearr_59452_59469[(2)] = null);
(statearr_59452_59469[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_59456 = [null,null,null,null,null,null,null,null,null];(statearr_59456[(0)] = state_machine__5694__auto__);
(statearr_59456[(1)] = (1));
return statearr_59456;
});
var state_machine__5694__auto____1 = (function (state_59439){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_59439);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e59457){if((e59457 instanceof Object))
{var ex__5697__auto__ = e59457;var statearr_59458_59470 = state_59439;(statearr_59458_59470[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59439);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e59457;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59471 = state_59439;
state_59439 = G__59471;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_59439){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_59439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_59459 = f__5709__auto__.call(null);(statearr_59459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_59459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});

//# sourceMappingURL=ordered_resource.js.map