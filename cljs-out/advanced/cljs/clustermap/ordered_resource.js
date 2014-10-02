// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj40540 = {};return obj40540;
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
{throw cljs.core.missing_protocol("IOrderedResource.add-request",this$);
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
{throw cljs.core.missing_protocol("IOrderedResource.get-response-chan",this$);
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
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.ordered-resource/DiscardStaleResource");
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$ = true;
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$add_request$arity$2 = (function (this$,ch){var self__ = this;
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ticket,cljs.core.inc);var c__5708__auto___40569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___40569,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___40569,rq_ticket,this$__$1){
return (function (state_40555){var state_val_40556 = (state_40555[(1)]);if((state_val_40556 === (6)))
{var inst_40547 = (state_40555[(2)]);var state_40555__$1 = state_40555;var statearr_40557_40570 = state_40555__$1;(statearr_40557_40570[(2)] = inst_40547);
(statearr_40557_40570[(1)] = (5));
return cljs.core.constant$keyword$880;
} else
{if((state_val_40556 === (5)))
{var inst_40553 = (state_40555[(2)]);var state_40555__$1 = state_40555;return cljs.core.async.impl.ioc_helpers.return_chan(state_40555__$1,inst_40553);
} else
{if((state_val_40556 === (4)))
{var inst_40549 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_40550 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40549));var inst_40551 = console.log(inst_40550);var state_40555__$1 = state_40555;var statearr_40558_40571 = state_40555__$1;(statearr_40558_40571[(2)] = inst_40551);
(statearr_40558_40571[(1)] = (5));
return cljs.core.constant$keyword$880;
} else
{if((state_val_40556 === (3)))
{var inst_40542 = (state_40555[(7)]);var state_40555__$1 = state_40555;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40555__$1,(6),self__.response_chan,inst_40542);
} else
{if((state_val_40556 === (2)))
{var inst_40542 = (state_40555[(2)]);var inst_40543 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_40544 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rq_ticket,inst_40543);var state_40555__$1 = (function (){var statearr_40559 = state_40555;(statearr_40559[(7)] = inst_40542);
return statearr_40559;
})();if(inst_40544)
{var statearr_40560_40572 = state_40555__$1;(statearr_40560_40572[(1)] = (3));
} else
{var statearr_40561_40573 = state_40555__$1;(statearr_40561_40573[(1)] = (4));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_40556 === (1)))
{var state_40555__$1 = state_40555;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40555__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___40569,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___40569,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_40565 = [null,null,null,null,null,null,null,null];(statearr_40565[(0)] = state_machine__5694__auto__);
(statearr_40565[(1)] = (1));
return statearr_40565;
});
var state_machine__5694__auto____1 = (function (state_40555){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_40555);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e40566){if((e40566 instanceof Object))
{var ex__5697__auto__ = e40566;var statearr_40567_40574 = state_40555;(statearr_40567_40574[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40555);
return cljs.core.constant$keyword$880;
} else
{throw e40566;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__40575 = state_40555;
state_40555 = G__40575;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_40555){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_40555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___40569,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_40568 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_40568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___40569);
return statearr_40568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___40569,rq_ticket,this$__$1))
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
clustermap.ordered_resource.make_discard_stale_resource = (function make_discard_stale_resource(name){return (new clustermap.ordered_resource.DiscardStaleResource(name,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()));
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
api_call.cljs$lang$applyTo = (function (arglist__40576){
var ordered_resource = cljs.core.first(arglist__40576);
arglist__40576 = cljs.core.next(arglist__40576);
var api_fn = cljs.core.first(arglist__40576);
var args = cljs.core.rest(arglist__40576);
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
clustermap.ordered_resource.retrieve_responses = (function retrieve_responses(ordered_resource,f){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_40632){var state_val_40633 = (state_40632[(1)]);if((state_val_40633 === (7)))
{var inst_40623 = (state_40632[(2)]);var state_40632__$1 = state_40632;if(cljs.core.truth_(inst_40623))
{var statearr_40634_40653 = state_40632__$1;(statearr_40634_40653[(1)] = (8));
} else
{var statearr_40635_40654 = state_40632__$1;(statearr_40635_40654[(1)] = (9));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_40633 === (1)))
{var state_40632__$1 = state_40632;var statearr_40636_40655 = state_40632__$1;(statearr_40636_40655[(2)] = null);
(statearr_40636_40655[(1)] = (2));
return cljs.core.constant$keyword$880;
} else
{if((state_val_40633 === (4)))
{var inst_40618 = (state_40632[(7)]);var inst_40618__$1 = (state_40632[(2)]);var state_40632__$1 = (function (){var statearr_40637 = state_40632;(statearr_40637[(7)] = inst_40618__$1);
return statearr_40637;
})();if(cljs.core.truth_(inst_40618__$1))
{var statearr_40638_40656 = state_40632__$1;(statearr_40638_40656[(1)] = (5));
} else
{var statearr_40639_40657 = state_40632__$1;(statearr_40639_40657[(1)] = (6));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_40633 === (6)))
{var state_40632__$1 = state_40632;var statearr_40640_40658 = state_40632__$1;(statearr_40640_40658[(2)] = null);
(statearr_40640_40658[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_40633 === (3)))
{var inst_40630 = (state_40632[(2)]);var state_40632__$1 = state_40632;return cljs.core.async.impl.ioc_helpers.return_chan(state_40632__$1,inst_40630);
} else
{if((state_val_40633 === (2)))
{var inst_40616 = clustermap.ordered_resource.get_response_chan(ordered_resource);var state_40632__$1 = state_40632;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40632__$1,(4),inst_40616);
} else
{if((state_val_40633 === (9)))
{var state_40632__$1 = state_40632;var statearr_40641_40659 = state_40632__$1;(statearr_40641_40659[(2)] = null);
(statearr_40641_40659[(1)] = (10));
return cljs.core.constant$keyword$880;
} else
{if((state_val_40633 === (5)))
{var inst_40618 = (state_40632[(7)]);var inst_40620 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40618) : f.call(null,inst_40618));var state_40632__$1 = (function (){var statearr_40642 = state_40632;(statearr_40642[(8)] = inst_40620);
return statearr_40642;
})();var statearr_40643_40660 = state_40632__$1;(statearr_40643_40660[(2)] = true);
(statearr_40643_40660[(1)] = (7));
return cljs.core.constant$keyword$880;
} else
{if((state_val_40633 === (10)))
{var inst_40628 = (state_40632[(2)]);var state_40632__$1 = state_40632;var statearr_40644_40661 = state_40632__$1;(statearr_40644_40661[(2)] = inst_40628);
(statearr_40644_40661[(1)] = (3));
return cljs.core.constant$keyword$880;
} else
{if((state_val_40633 === (8)))
{var state_40632__$1 = state_40632;var statearr_40645_40662 = state_40632__$1;(statearr_40645_40662[(2)] = null);
(statearr_40645_40662[(1)] = (2));
return cljs.core.constant$keyword$880;
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
var state_machine__5694__auto____0 = (function (){var statearr_40649 = [null,null,null,null,null,null,null,null,null];(statearr_40649[(0)] = state_machine__5694__auto__);
(statearr_40649[(1)] = (1));
return statearr_40649;
});
var state_machine__5694__auto____1 = (function (state_40632){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_40632);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e40650){if((e40650 instanceof Object))
{var ex__5697__auto__ = e40650;var statearr_40651_40663 = state_40632;(statearr_40651_40663[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40632);
return cljs.core.constant$keyword$880;
} else
{throw e40650;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__40664 = state_40632;
state_40632 = G__40664;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_40632){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_40632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_40652 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_40652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_40652;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
