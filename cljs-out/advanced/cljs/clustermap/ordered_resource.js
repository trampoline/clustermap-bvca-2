// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj45281 = {};return obj45281;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ticket,cljs.core.inc);var c__5708__auto___45310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___45310,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___45310,rq_ticket,this$__$1){
return (function (state_45296){var state_val_45297 = (state_45296[(1)]);if((state_val_45297 === (6)))
{var inst_45288 = (state_45296[(2)]);var state_45296__$1 = state_45296;var statearr_45298_45311 = state_45296__$1;(statearr_45298_45311[(2)] = inst_45288);
(statearr_45298_45311[(1)] = (5));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_45297 === (5)))
{var inst_45294 = (state_45296[(2)]);var state_45296__$1 = state_45296;return cljs.core.async.impl.ioc_helpers.return_chan(state_45296__$1,inst_45294);
} else
{if((state_val_45297 === (4)))
{var inst_45290 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_45291 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45290));var inst_45292 = console.log(inst_45291);var state_45296__$1 = state_45296;var statearr_45299_45312 = state_45296__$1;(statearr_45299_45312[(2)] = inst_45292);
(statearr_45299_45312[(1)] = (5));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_45297 === (3)))
{var inst_45283 = (state_45296[(7)]);var state_45296__$1 = state_45296;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45296__$1,(6),self__.response_chan,inst_45283);
} else
{if((state_val_45297 === (2)))
{var inst_45283 = (state_45296[(2)]);var inst_45284 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_45285 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rq_ticket,inst_45284);var state_45296__$1 = (function (){var statearr_45300 = state_45296;(statearr_45300[(7)] = inst_45283);
return statearr_45300;
})();if(inst_45285)
{var statearr_45301_45313 = state_45296__$1;(statearr_45301_45313[(1)] = (3));
} else
{var statearr_45302_45314 = state_45296__$1;(statearr_45302_45314[(1)] = (4));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_45297 === (1)))
{var state_45296__$1 = state_45296;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45296__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___45310,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___45310,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45306 = [null,null,null,null,null,null,null,null];(statearr_45306[(0)] = state_machine__5694__auto__);
(statearr_45306[(1)] = (1));
return statearr_45306;
});
var state_machine__5694__auto____1 = (function (state_45296){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45296);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45307){if((e45307 instanceof Object))
{var ex__5697__auto__ = e45307;var statearr_45308_45315 = state_45296;(statearr_45308_45315[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45296);
return cljs.core.constant$keyword$1100;
} else
{throw e45307;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__45316 = state_45296;
state_45296 = G__45316;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45296){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___45310,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_45309 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___45310);
return statearr_45309;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___45310,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__45317){
var ordered_resource = cljs.core.first(arglist__45317);
arglist__45317 = cljs.core.next(arglist__45317);
var api_fn = cljs.core.first(arglist__45317);
var args = cljs.core.rest(arglist__45317);
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
return (function (state_45373){var state_val_45374 = (state_45373[(1)]);if((state_val_45374 === (7)))
{var inst_45364 = (state_45373[(2)]);var state_45373__$1 = state_45373;if(cljs.core.truth_(inst_45364))
{var statearr_45375_45394 = state_45373__$1;(statearr_45375_45394[(1)] = (8));
} else
{var statearr_45376_45395 = state_45373__$1;(statearr_45376_45395[(1)] = (9));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_45374 === (1)))
{var state_45373__$1 = state_45373;var statearr_45377_45396 = state_45373__$1;(statearr_45377_45396[(2)] = null);
(statearr_45377_45396[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_45374 === (4)))
{var inst_45359 = (state_45373[(7)]);var inst_45359__$1 = (state_45373[(2)]);var state_45373__$1 = (function (){var statearr_45378 = state_45373;(statearr_45378[(7)] = inst_45359__$1);
return statearr_45378;
})();if(cljs.core.truth_(inst_45359__$1))
{var statearr_45379_45397 = state_45373__$1;(statearr_45379_45397[(1)] = (5));
} else
{var statearr_45380_45398 = state_45373__$1;(statearr_45380_45398[(1)] = (6));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_45374 === (6)))
{var state_45373__$1 = state_45373;var statearr_45381_45399 = state_45373__$1;(statearr_45381_45399[(2)] = null);
(statearr_45381_45399[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_45374 === (3)))
{var inst_45371 = (state_45373[(2)]);var state_45373__$1 = state_45373;return cljs.core.async.impl.ioc_helpers.return_chan(state_45373__$1,inst_45371);
} else
{if((state_val_45374 === (2)))
{var inst_45357 = clustermap.ordered_resource.get_response_chan(ordered_resource);var state_45373__$1 = state_45373;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45373__$1,(4),inst_45357);
} else
{if((state_val_45374 === (9)))
{var state_45373__$1 = state_45373;var statearr_45382_45400 = state_45373__$1;(statearr_45382_45400[(2)] = null);
(statearr_45382_45400[(1)] = (10));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_45374 === (5)))
{var inst_45359 = (state_45373[(7)]);var inst_45361 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45359) : f.call(null,inst_45359));var state_45373__$1 = (function (){var statearr_45383 = state_45373;(statearr_45383[(8)] = inst_45361);
return statearr_45383;
})();var statearr_45384_45401 = state_45373__$1;(statearr_45384_45401[(2)] = true);
(statearr_45384_45401[(1)] = (7));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_45374 === (10)))
{var inst_45369 = (state_45373[(2)]);var state_45373__$1 = state_45373;var statearr_45385_45402 = state_45373__$1;(statearr_45385_45402[(2)] = inst_45369);
(statearr_45385_45402[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_45374 === (8)))
{var state_45373__$1 = state_45373;var statearr_45386_45403 = state_45373__$1;(statearr_45386_45403[(2)] = null);
(statearr_45386_45403[(1)] = (2));
return cljs.core.constant$keyword$1100;
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
var state_machine__5694__auto____0 = (function (){var statearr_45390 = [null,null,null,null,null,null,null,null,null];(statearr_45390[(0)] = state_machine__5694__auto__);
(statearr_45390[(1)] = (1));
return statearr_45390;
});
var state_machine__5694__auto____1 = (function (state_45373){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45373);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45391){if((e45391 instanceof Object))
{var ex__5697__auto__ = e45391;var statearr_45392_45404 = state_45373;(statearr_45392_45404[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45373);
return cljs.core.constant$keyword$1100;
} else
{throw e45391;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__45405 = state_45373;
state_45373 = G__45405;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45373){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_45393 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_45393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
