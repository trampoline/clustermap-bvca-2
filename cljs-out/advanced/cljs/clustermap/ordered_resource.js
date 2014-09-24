// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj39319 = {};return obj39319;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ticket,cljs.core.inc);var c__5708__auto___39348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___39348,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___39348,rq_ticket,this$__$1){
return (function (state_39334){var state_val_39335 = (state_39334[(1)]);if((state_val_39335 === (6)))
{var inst_39326 = (state_39334[(2)]);var state_39334__$1 = state_39334;var statearr_39336_39349 = state_39334__$1;(statearr_39336_39349[(2)] = inst_39326);
(statearr_39336_39349[(1)] = (5));
return cljs.core.constant$keyword$844;
} else
{if((state_val_39335 === (5)))
{var inst_39332 = (state_39334[(2)]);var state_39334__$1 = state_39334;return cljs.core.async.impl.ioc_helpers.return_chan(state_39334__$1,inst_39332);
} else
{if((state_val_39335 === (4)))
{var inst_39328 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_39329 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39328));var inst_39330 = console.log(inst_39329);var state_39334__$1 = state_39334;var statearr_39337_39350 = state_39334__$1;(statearr_39337_39350[(2)] = inst_39330);
(statearr_39337_39350[(1)] = (5));
return cljs.core.constant$keyword$844;
} else
{if((state_val_39335 === (3)))
{var inst_39321 = (state_39334[(7)]);var state_39334__$1 = state_39334;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39334__$1,(6),self__.response_chan,inst_39321);
} else
{if((state_val_39335 === (2)))
{var inst_39321 = (state_39334[(2)]);var inst_39322 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_39323 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rq_ticket,inst_39322);var state_39334__$1 = (function (){var statearr_39338 = state_39334;(statearr_39338[(7)] = inst_39321);
return statearr_39338;
})();if(inst_39323)
{var statearr_39339_39351 = state_39334__$1;(statearr_39339_39351[(1)] = (3));
} else
{var statearr_39340_39352 = state_39334__$1;(statearr_39340_39352[(1)] = (4));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_39335 === (1)))
{var state_39334__$1 = state_39334;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39334__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___39348,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___39348,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_39344 = [null,null,null,null,null,null,null,null];(statearr_39344[(0)] = state_machine__5694__auto__);
(statearr_39344[(1)] = (1));
return statearr_39344;
});
var state_machine__5694__auto____1 = (function (state_39334){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_39334);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e39345){if((e39345 instanceof Object))
{var ex__5697__auto__ = e39345;var statearr_39346_39353 = state_39334;(statearr_39346_39353[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39334);
return cljs.core.constant$keyword$844;
} else
{throw e39345;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__39354 = state_39334;
state_39334 = G__39354;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_39334){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_39334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___39348,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_39347 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_39347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___39348);
return statearr_39347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___39348,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__39355){
var ordered_resource = cljs.core.first(arglist__39355);
arglist__39355 = cljs.core.next(arglist__39355);
var api_fn = cljs.core.first(arglist__39355);
var args = cljs.core.rest(arglist__39355);
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
return (function (state_39411){var state_val_39412 = (state_39411[(1)]);if((state_val_39412 === (7)))
{var inst_39402 = (state_39411[(2)]);var state_39411__$1 = state_39411;if(cljs.core.truth_(inst_39402))
{var statearr_39413_39432 = state_39411__$1;(statearr_39413_39432[(1)] = (8));
} else
{var statearr_39414_39433 = state_39411__$1;(statearr_39414_39433[(1)] = (9));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_39412 === (1)))
{var state_39411__$1 = state_39411;var statearr_39415_39434 = state_39411__$1;(statearr_39415_39434[(2)] = null);
(statearr_39415_39434[(1)] = (2));
return cljs.core.constant$keyword$844;
} else
{if((state_val_39412 === (4)))
{var inst_39397 = (state_39411[(7)]);var inst_39397__$1 = (state_39411[(2)]);var state_39411__$1 = (function (){var statearr_39416 = state_39411;(statearr_39416[(7)] = inst_39397__$1);
return statearr_39416;
})();if(cljs.core.truth_(inst_39397__$1))
{var statearr_39417_39435 = state_39411__$1;(statearr_39417_39435[(1)] = (5));
} else
{var statearr_39418_39436 = state_39411__$1;(statearr_39418_39436[(1)] = (6));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_39412 === (6)))
{var state_39411__$1 = state_39411;var statearr_39419_39437 = state_39411__$1;(statearr_39419_39437[(2)] = null);
(statearr_39419_39437[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_39412 === (3)))
{var inst_39409 = (state_39411[(2)]);var state_39411__$1 = state_39411;return cljs.core.async.impl.ioc_helpers.return_chan(state_39411__$1,inst_39409);
} else
{if((state_val_39412 === (2)))
{var inst_39395 = clustermap.ordered_resource.get_response_chan(ordered_resource);var state_39411__$1 = state_39411;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39411__$1,(4),inst_39395);
} else
{if((state_val_39412 === (9)))
{var state_39411__$1 = state_39411;var statearr_39420_39438 = state_39411__$1;(statearr_39420_39438[(2)] = null);
(statearr_39420_39438[(1)] = (10));
return cljs.core.constant$keyword$844;
} else
{if((state_val_39412 === (5)))
{var inst_39397 = (state_39411[(7)]);var inst_39399 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39397) : f.call(null,inst_39397));var state_39411__$1 = (function (){var statearr_39421 = state_39411;(statearr_39421[(8)] = inst_39399);
return statearr_39421;
})();var statearr_39422_39439 = state_39411__$1;(statearr_39422_39439[(2)] = true);
(statearr_39422_39439[(1)] = (7));
return cljs.core.constant$keyword$844;
} else
{if((state_val_39412 === (10)))
{var inst_39407 = (state_39411[(2)]);var state_39411__$1 = state_39411;var statearr_39423_39440 = state_39411__$1;(statearr_39423_39440[(2)] = inst_39407);
(statearr_39423_39440[(1)] = (3));
return cljs.core.constant$keyword$844;
} else
{if((state_val_39412 === (8)))
{var state_39411__$1 = state_39411;var statearr_39424_39441 = state_39411__$1;(statearr_39424_39441[(2)] = null);
(statearr_39424_39441[(1)] = (2));
return cljs.core.constant$keyword$844;
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
var state_machine__5694__auto____0 = (function (){var statearr_39428 = [null,null,null,null,null,null,null,null,null];(statearr_39428[(0)] = state_machine__5694__auto__);
(statearr_39428[(1)] = (1));
return statearr_39428;
});
var state_machine__5694__auto____1 = (function (state_39411){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_39411);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e39429){if((e39429 instanceof Object))
{var ex__5697__auto__ = e39429;var statearr_39430_39442 = state_39411;(statearr_39430_39442[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39411);
return cljs.core.constant$keyword$844;
} else
{throw e39429;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__39443 = state_39411;
state_39411 = G__39443;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_39411){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_39411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_39431 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_39431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_39431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
