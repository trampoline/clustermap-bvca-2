// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj47441 = {};return obj47441;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ticket,cljs.core.inc);var c__5708__auto___47470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___47470,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___47470,rq_ticket,this$__$1){
return (function (state_47456){var state_val_47457 = (state_47456[(1)]);if((state_val_47457 === (6)))
{var inst_47448 = (state_47456[(2)]);var state_47456__$1 = state_47456;var statearr_47458_47471 = state_47456__$1;(statearr_47458_47471[(2)] = inst_47448);
(statearr_47458_47471[(1)] = (5));
return cljs.core.constant$keyword$936;
} else
{if((state_val_47457 === (5)))
{var inst_47454 = (state_47456[(2)]);var state_47456__$1 = state_47456;return cljs.core.async.impl.ioc_helpers.return_chan(state_47456__$1,inst_47454);
} else
{if((state_val_47457 === (4)))
{var inst_47450 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_47451 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47450));var inst_47452 = console.log(inst_47451);var state_47456__$1 = state_47456;var statearr_47459_47472 = state_47456__$1;(statearr_47459_47472[(2)] = inst_47452);
(statearr_47459_47472[(1)] = (5));
return cljs.core.constant$keyword$936;
} else
{if((state_val_47457 === (3)))
{var inst_47443 = (state_47456[(7)]);var state_47456__$1 = state_47456;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47456__$1,(6),self__.response_chan,inst_47443);
} else
{if((state_val_47457 === (2)))
{var inst_47443 = (state_47456[(2)]);var inst_47444 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_47445 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rq_ticket,inst_47444);var state_47456__$1 = (function (){var statearr_47460 = state_47456;(statearr_47460[(7)] = inst_47443);
return statearr_47460;
})();if(inst_47445)
{var statearr_47461_47473 = state_47456__$1;(statearr_47461_47473[(1)] = (3));
} else
{var statearr_47462_47474 = state_47456__$1;(statearr_47462_47474[(1)] = (4));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_47457 === (1)))
{var state_47456__$1 = state_47456;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47456__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___47470,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___47470,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_47466 = [null,null,null,null,null,null,null,null];(statearr_47466[(0)] = state_machine__5694__auto__);
(statearr_47466[(1)] = (1));
return statearr_47466;
});
var state_machine__5694__auto____1 = (function (state_47456){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_47456);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e47467){if((e47467 instanceof Object))
{var ex__5697__auto__ = e47467;var statearr_47468_47475 = state_47456;(statearr_47468_47475[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_47456);
return cljs.core.constant$keyword$936;
} else
{throw e47467;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__47476 = state_47456;
state_47456 = G__47476;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_47456){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_47456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___47470,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_47469 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_47469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___47470);
return statearr_47469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___47470,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__47477){
var ordered_resource = cljs.core.first(arglist__47477);
arglist__47477 = cljs.core.next(arglist__47477);
var api_fn = cljs.core.first(arglist__47477);
var args = cljs.core.rest(arglist__47477);
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
return (function (state_47533){var state_val_47534 = (state_47533[(1)]);if((state_val_47534 === (7)))
{var inst_47524 = (state_47533[(2)]);var state_47533__$1 = state_47533;if(cljs.core.truth_(inst_47524))
{var statearr_47535_47554 = state_47533__$1;(statearr_47535_47554[(1)] = (8));
} else
{var statearr_47536_47555 = state_47533__$1;(statearr_47536_47555[(1)] = (9));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_47534 === (1)))
{var state_47533__$1 = state_47533;var statearr_47537_47556 = state_47533__$1;(statearr_47537_47556[(2)] = null);
(statearr_47537_47556[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_47534 === (4)))
{var inst_47519 = (state_47533[(7)]);var inst_47519__$1 = (state_47533[(2)]);var state_47533__$1 = (function (){var statearr_47538 = state_47533;(statearr_47538[(7)] = inst_47519__$1);
return statearr_47538;
})();if(cljs.core.truth_(inst_47519__$1))
{var statearr_47539_47557 = state_47533__$1;(statearr_47539_47557[(1)] = (5));
} else
{var statearr_47540_47558 = state_47533__$1;(statearr_47540_47558[(1)] = (6));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_47534 === (6)))
{var state_47533__$1 = state_47533;var statearr_47541_47559 = state_47533__$1;(statearr_47541_47559[(2)] = null);
(statearr_47541_47559[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_47534 === (3)))
{var inst_47531 = (state_47533[(2)]);var state_47533__$1 = state_47533;return cljs.core.async.impl.ioc_helpers.return_chan(state_47533__$1,inst_47531);
} else
{if((state_val_47534 === (2)))
{var inst_47517 = clustermap.ordered_resource.get_response_chan(ordered_resource);var state_47533__$1 = state_47533;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47533__$1,(4),inst_47517);
} else
{if((state_val_47534 === (9)))
{var state_47533__$1 = state_47533;var statearr_47542_47560 = state_47533__$1;(statearr_47542_47560[(2)] = null);
(statearr_47542_47560[(1)] = (10));
return cljs.core.constant$keyword$936;
} else
{if((state_val_47534 === (5)))
{var inst_47519 = (state_47533[(7)]);var inst_47521 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47519) : f.call(null,inst_47519));var state_47533__$1 = (function (){var statearr_47543 = state_47533;(statearr_47543[(8)] = inst_47521);
return statearr_47543;
})();var statearr_47544_47561 = state_47533__$1;(statearr_47544_47561[(2)] = true);
(statearr_47544_47561[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_47534 === (10)))
{var inst_47529 = (state_47533[(2)]);var state_47533__$1 = state_47533;var statearr_47545_47562 = state_47533__$1;(statearr_47545_47562[(2)] = inst_47529);
(statearr_47545_47562[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_47534 === (8)))
{var state_47533__$1 = state_47533;var statearr_47546_47563 = state_47533__$1;(statearr_47546_47563[(2)] = null);
(statearr_47546_47563[(1)] = (2));
return cljs.core.constant$keyword$936;
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
var state_machine__5694__auto____0 = (function (){var statearr_47550 = [null,null,null,null,null,null,null,null,null];(statearr_47550[(0)] = state_machine__5694__auto__);
(statearr_47550[(1)] = (1));
return statearr_47550;
});
var state_machine__5694__auto____1 = (function (state_47533){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_47533);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e47551){if((e47551 instanceof Object))
{var ex__5697__auto__ = e47551;var statearr_47552_47564 = state_47533;(statearr_47552_47564[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_47533);
return cljs.core.constant$keyword$936;
} else
{throw e47551;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__47565 = state_47533;
state_47533 = G__47565;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_47533){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_47533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_47553 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_47553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_47553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
