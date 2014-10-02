// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj53538 = {};return obj53538;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___53567 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___53567,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___53567,rq_ticket,this$__$1){
return (function (state_53553){var state_val_53554 = (state_53553[(1)]);if((state_val_53554 === (6)))
{var inst_53545 = (state_53553[(2)]);var state_53553__$1 = state_53553;var statearr_53555_53568 = state_53553__$1;(statearr_53555_53568[(2)] = inst_53545);
(statearr_53555_53568[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53554 === (5)))
{var inst_53551 = (state_53553[(2)]);var state_53553__$1 = state_53553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53553__$1,inst_53551);
} else
{if((state_val_53554 === (4)))
{var inst_53547 = cljs.core.deref.call(null,self__.ticket);var inst_53548 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53547));var inst_53549 = console.log(inst_53548);var state_53553__$1 = state_53553;var statearr_53556_53569 = state_53553__$1;(statearr_53556_53569[(2)] = inst_53549);
(statearr_53556_53569[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53554 === (3)))
{var inst_53540 = (state_53553[(7)]);var state_53553__$1 = state_53553;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53553__$1,(6),self__.response_chan,inst_53540);
} else
{if((state_val_53554 === (2)))
{var inst_53540 = (state_53553[(2)]);var inst_53541 = cljs.core.deref.call(null,self__.ticket);var inst_53542 = cljs.core._EQ_.call(null,rq_ticket,inst_53541);var state_53553__$1 = (function (){var statearr_53557 = state_53553;(statearr_53557[(7)] = inst_53540);
return statearr_53557;
})();if(inst_53542)
{var statearr_53558_53570 = state_53553__$1;(statearr_53558_53570[(1)] = (3));
} else
{var statearr_53559_53571 = state_53553__$1;(statearr_53559_53571[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53554 === (1)))
{var state_53553__$1 = state_53553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53553__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___53567,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___53567,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53563 = [null,null,null,null,null,null,null,null];(statearr_53563[(0)] = state_machine__5694__auto__);
(statearr_53563[(1)] = (1));
return statearr_53563;
});
var state_machine__5694__auto____1 = (function (state_53553){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_53553);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53564){if((e53564 instanceof Object))
{var ex__5697__auto__ = e53564;var statearr_53565_53572 = state_53553;(statearr_53565_53572[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53553);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e53564;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53573 = state_53553;
state_53553 = G__53573;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53553){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___53567,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_53566 = f__5709__auto__.call(null);(statearr_53566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___53567);
return statearr_53566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___53567,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__53574){
var ordered_resource = cljs.core.first(arglist__53574);
arglist__53574 = cljs.core.next(arglist__53574);
var api_fn = cljs.core.first(arglist__53574);
var args = cljs.core.rest(arglist__53574);
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
return (function (state_53630){var state_val_53631 = (state_53630[(1)]);if((state_val_53631 === (7)))
{var inst_53621 = (state_53630[(2)]);var state_53630__$1 = state_53630;if(cljs.core.truth_(inst_53621))
{var statearr_53632_53651 = state_53630__$1;(statearr_53632_53651[(1)] = (8));
} else
{var statearr_53633_53652 = state_53630__$1;(statearr_53633_53652[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53631 === (1)))
{var state_53630__$1 = state_53630;var statearr_53634_53653 = state_53630__$1;(statearr_53634_53653[(2)] = null);
(statearr_53634_53653[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53631 === (4)))
{var inst_53616 = (state_53630[(7)]);var inst_53616__$1 = (state_53630[(2)]);var state_53630__$1 = (function (){var statearr_53635 = state_53630;(statearr_53635[(7)] = inst_53616__$1);
return statearr_53635;
})();if(cljs.core.truth_(inst_53616__$1))
{var statearr_53636_53654 = state_53630__$1;(statearr_53636_53654[(1)] = (5));
} else
{var statearr_53637_53655 = state_53630__$1;(statearr_53637_53655[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53631 === (6)))
{var state_53630__$1 = state_53630;var statearr_53638_53656 = state_53630__$1;(statearr_53638_53656[(2)] = null);
(statearr_53638_53656[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53631 === (3)))
{var inst_53628 = (state_53630[(2)]);var state_53630__$1 = state_53630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53630__$1,inst_53628);
} else
{if((state_val_53631 === (2)))
{var inst_53614 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_53630__$1 = state_53630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53630__$1,(4),inst_53614);
} else
{if((state_val_53631 === (9)))
{var state_53630__$1 = state_53630;var statearr_53639_53657 = state_53630__$1;(statearr_53639_53657[(2)] = null);
(statearr_53639_53657[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53631 === (5)))
{var inst_53616 = (state_53630[(7)]);var inst_53618 = f.call(null,inst_53616);var state_53630__$1 = (function (){var statearr_53640 = state_53630;(statearr_53640[(8)] = inst_53618);
return statearr_53640;
})();var statearr_53641_53658 = state_53630__$1;(statearr_53641_53658[(2)] = true);
(statearr_53641_53658[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53631 === (10)))
{var inst_53626 = (state_53630[(2)]);var state_53630__$1 = state_53630;var statearr_53642_53659 = state_53630__$1;(statearr_53642_53659[(2)] = inst_53626);
(statearr_53642_53659[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53631 === (8)))
{var state_53630__$1 = state_53630;var statearr_53643_53660 = state_53630__$1;(statearr_53643_53660[(2)] = null);
(statearr_53643_53660[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_53647 = [null,null,null,null,null,null,null,null,null];(statearr_53647[(0)] = state_machine__5694__auto__);
(statearr_53647[(1)] = (1));
return statearr_53647;
});
var state_machine__5694__auto____1 = (function (state_53630){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_53630);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53648){if((e53648 instanceof Object))
{var ex__5697__auto__ = e53648;var statearr_53649_53661 = state_53630;(statearr_53649_53661[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53630);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e53648;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53662 = state_53630;
state_53630 = G__53662;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53630){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_53650 = f__5709__auto__.call(null);(statearr_53650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53650;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});

//# sourceMappingURL=ordered_resource.js.map