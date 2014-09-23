// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj39247 = {};return obj39247;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ticket,cljs.core.inc);var c__5708__auto___39276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___39276,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___39276,rq_ticket,this$__$1){
return (function (state_39262){var state_val_39263 = (state_39262[(1)]);if((state_val_39263 === (6)))
{var inst_39254 = (state_39262[(2)]);var state_39262__$1 = state_39262;var statearr_39264_39277 = state_39262__$1;(statearr_39264_39277[(2)] = inst_39254);
(statearr_39264_39277[(1)] = (5));
return cljs.core.constant$keyword$836;
} else
{if((state_val_39263 === (5)))
{var inst_39260 = (state_39262[(2)]);var state_39262__$1 = state_39262;return cljs.core.async.impl.ioc_helpers.return_chan(state_39262__$1,inst_39260);
} else
{if((state_val_39263 === (4)))
{var inst_39256 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_39257 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39256));var inst_39258 = console.log(inst_39257);var state_39262__$1 = state_39262;var statearr_39265_39278 = state_39262__$1;(statearr_39265_39278[(2)] = inst_39258);
(statearr_39265_39278[(1)] = (5));
return cljs.core.constant$keyword$836;
} else
{if((state_val_39263 === (3)))
{var inst_39249 = (state_39262[(7)]);var state_39262__$1 = state_39262;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39262__$1,(6),self__.response_chan,inst_39249);
} else
{if((state_val_39263 === (2)))
{var inst_39249 = (state_39262[(2)]);var inst_39250 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_39251 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rq_ticket,inst_39250);var state_39262__$1 = (function (){var statearr_39266 = state_39262;(statearr_39266[(7)] = inst_39249);
return statearr_39266;
})();if(inst_39251)
{var statearr_39267_39279 = state_39262__$1;(statearr_39267_39279[(1)] = (3));
} else
{var statearr_39268_39280 = state_39262__$1;(statearr_39268_39280[(1)] = (4));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_39263 === (1)))
{var state_39262__$1 = state_39262;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39262__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___39276,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___39276,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_39272 = [null,null,null,null,null,null,null,null];(statearr_39272[(0)] = state_machine__5694__auto__);
(statearr_39272[(1)] = (1));
return statearr_39272;
});
var state_machine__5694__auto____1 = (function (state_39262){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_39262);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e39273){if((e39273 instanceof Object))
{var ex__5697__auto__ = e39273;var statearr_39274_39281 = state_39262;(statearr_39274_39281[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39262);
return cljs.core.constant$keyword$836;
} else
{throw e39273;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__39282 = state_39262;
state_39262 = G__39282;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_39262){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_39262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___39276,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_39275 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_39275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___39276);
return statearr_39275;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___39276,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__39283){
var ordered_resource = cljs.core.first(arglist__39283);
arglist__39283 = cljs.core.next(arglist__39283);
var api_fn = cljs.core.first(arglist__39283);
var args = cljs.core.rest(arglist__39283);
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
return (function (state_39339){var state_val_39340 = (state_39339[(1)]);if((state_val_39340 === (7)))
{var inst_39330 = (state_39339[(2)]);var state_39339__$1 = state_39339;if(cljs.core.truth_(inst_39330))
{var statearr_39341_39360 = state_39339__$1;(statearr_39341_39360[(1)] = (8));
} else
{var statearr_39342_39361 = state_39339__$1;(statearr_39342_39361[(1)] = (9));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_39340 === (1)))
{var state_39339__$1 = state_39339;var statearr_39343_39362 = state_39339__$1;(statearr_39343_39362[(2)] = null);
(statearr_39343_39362[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_39340 === (4)))
{var inst_39325 = (state_39339[(7)]);var inst_39325__$1 = (state_39339[(2)]);var state_39339__$1 = (function (){var statearr_39344 = state_39339;(statearr_39344[(7)] = inst_39325__$1);
return statearr_39344;
})();if(cljs.core.truth_(inst_39325__$1))
{var statearr_39345_39363 = state_39339__$1;(statearr_39345_39363[(1)] = (5));
} else
{var statearr_39346_39364 = state_39339__$1;(statearr_39346_39364[(1)] = (6));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_39340 === (6)))
{var state_39339__$1 = state_39339;var statearr_39347_39365 = state_39339__$1;(statearr_39347_39365[(2)] = null);
(statearr_39347_39365[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_39340 === (3)))
{var inst_39337 = (state_39339[(2)]);var state_39339__$1 = state_39339;return cljs.core.async.impl.ioc_helpers.return_chan(state_39339__$1,inst_39337);
} else
{if((state_val_39340 === (2)))
{var inst_39323 = clustermap.ordered_resource.get_response_chan(ordered_resource);var state_39339__$1 = state_39339;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39339__$1,(4),inst_39323);
} else
{if((state_val_39340 === (9)))
{var state_39339__$1 = state_39339;var statearr_39348_39366 = state_39339__$1;(statearr_39348_39366[(2)] = null);
(statearr_39348_39366[(1)] = (10));
return cljs.core.constant$keyword$836;
} else
{if((state_val_39340 === (5)))
{var inst_39325 = (state_39339[(7)]);var inst_39327 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39325) : f.call(null,inst_39325));var state_39339__$1 = (function (){var statearr_39349 = state_39339;(statearr_39349[(8)] = inst_39327);
return statearr_39349;
})();var statearr_39350_39367 = state_39339__$1;(statearr_39350_39367[(2)] = true);
(statearr_39350_39367[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_39340 === (10)))
{var inst_39335 = (state_39339[(2)]);var state_39339__$1 = state_39339;var statearr_39351_39368 = state_39339__$1;(statearr_39351_39368[(2)] = inst_39335);
(statearr_39351_39368[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_39340 === (8)))
{var state_39339__$1 = state_39339;var statearr_39352_39369 = state_39339__$1;(statearr_39352_39369[(2)] = null);
(statearr_39352_39369[(1)] = (2));
return cljs.core.constant$keyword$836;
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
var state_machine__5694__auto____0 = (function (){var statearr_39356 = [null,null,null,null,null,null,null,null,null];(statearr_39356[(0)] = state_machine__5694__auto__);
(statearr_39356[(1)] = (1));
return statearr_39356;
});
var state_machine__5694__auto____1 = (function (state_39339){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_39339);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e39357){if((e39357 instanceof Object))
{var ex__5697__auto__ = e39357;var statearr_39358_39370 = state_39339;(statearr_39358_39370[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39339);
return cljs.core.constant$keyword$836;
} else
{throw e39357;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__39371 = state_39339;
state_39339 = G__39371;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_39339){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_39339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_39359 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_39359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_39359;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
