// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj41185 = {};return obj41185;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ticket,cljs.core.inc);var c__5708__auto___41214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___41214,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___41214,rq_ticket,this$__$1){
return (function (state_41200){var state_val_41201 = (state_41200[(1)]);if((state_val_41201 === (6)))
{var inst_41192 = (state_41200[(2)]);var state_41200__$1 = state_41200;var statearr_41202_41215 = state_41200__$1;(statearr_41202_41215[(2)] = inst_41192);
(statearr_41202_41215[(1)] = (5));
return cljs.core.constant$keyword$872;
} else
{if((state_val_41201 === (5)))
{var inst_41198 = (state_41200[(2)]);var state_41200__$1 = state_41200;return cljs.core.async.impl.ioc_helpers.return_chan(state_41200__$1,inst_41198);
} else
{if((state_val_41201 === (4)))
{var inst_41194 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_41195 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41194));var inst_41196 = console.log(inst_41195);var state_41200__$1 = state_41200;var statearr_41203_41216 = state_41200__$1;(statearr_41203_41216[(2)] = inst_41196);
(statearr_41203_41216[(1)] = (5));
return cljs.core.constant$keyword$872;
} else
{if((state_val_41201 === (3)))
{var inst_41187 = (state_41200[(7)]);var state_41200__$1 = state_41200;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41200__$1,(6),self__.response_chan,inst_41187);
} else
{if((state_val_41201 === (2)))
{var inst_41187 = (state_41200[(2)]);var inst_41188 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ticket) : cljs.core.deref.call(null,self__.ticket));var inst_41189 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rq_ticket,inst_41188);var state_41200__$1 = (function (){var statearr_41204 = state_41200;(statearr_41204[(7)] = inst_41187);
return statearr_41204;
})();if(inst_41189)
{var statearr_41205_41217 = state_41200__$1;(statearr_41205_41217[(1)] = (3));
} else
{var statearr_41206_41218 = state_41200__$1;(statearr_41206_41218[(1)] = (4));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_41201 === (1)))
{var state_41200__$1 = state_41200;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41200__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___41214,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___41214,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_41210 = [null,null,null,null,null,null,null,null];(statearr_41210[(0)] = state_machine__5694__auto__);
(statearr_41210[(1)] = (1));
return statearr_41210;
});
var state_machine__5694__auto____1 = (function (state_41200){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_41200);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e41211){if((e41211 instanceof Object))
{var ex__5697__auto__ = e41211;var statearr_41212_41219 = state_41200;(statearr_41212_41219[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41200);
return cljs.core.constant$keyword$872;
} else
{throw e41211;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__41220 = state_41200;
state_41200 = G__41220;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_41200){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_41200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___41214,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_41213 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_41213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___41214);
return statearr_41213;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___41214,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__41221){
var ordered_resource = cljs.core.first(arglist__41221);
arglist__41221 = cljs.core.next(arglist__41221);
var api_fn = cljs.core.first(arglist__41221);
var args = cljs.core.rest(arglist__41221);
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
return (function (state_41277){var state_val_41278 = (state_41277[(1)]);if((state_val_41278 === (7)))
{var inst_41268 = (state_41277[(2)]);var state_41277__$1 = state_41277;if(cljs.core.truth_(inst_41268))
{var statearr_41279_41298 = state_41277__$1;(statearr_41279_41298[(1)] = (8));
} else
{var statearr_41280_41299 = state_41277__$1;(statearr_41280_41299[(1)] = (9));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_41278 === (1)))
{var state_41277__$1 = state_41277;var statearr_41281_41300 = state_41277__$1;(statearr_41281_41300[(2)] = null);
(statearr_41281_41300[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_41278 === (4)))
{var inst_41263 = (state_41277[(7)]);var inst_41263__$1 = (state_41277[(2)]);var state_41277__$1 = (function (){var statearr_41282 = state_41277;(statearr_41282[(7)] = inst_41263__$1);
return statearr_41282;
})();if(cljs.core.truth_(inst_41263__$1))
{var statearr_41283_41301 = state_41277__$1;(statearr_41283_41301[(1)] = (5));
} else
{var statearr_41284_41302 = state_41277__$1;(statearr_41284_41302[(1)] = (6));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_41278 === (6)))
{var state_41277__$1 = state_41277;var statearr_41285_41303 = state_41277__$1;(statearr_41285_41303[(2)] = null);
(statearr_41285_41303[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_41278 === (3)))
{var inst_41275 = (state_41277[(2)]);var state_41277__$1 = state_41277;return cljs.core.async.impl.ioc_helpers.return_chan(state_41277__$1,inst_41275);
} else
{if((state_val_41278 === (2)))
{var inst_41261 = clustermap.ordered_resource.get_response_chan(ordered_resource);var state_41277__$1 = state_41277;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41277__$1,(4),inst_41261);
} else
{if((state_val_41278 === (9)))
{var state_41277__$1 = state_41277;var statearr_41286_41304 = state_41277__$1;(statearr_41286_41304[(2)] = null);
(statearr_41286_41304[(1)] = (10));
return cljs.core.constant$keyword$872;
} else
{if((state_val_41278 === (5)))
{var inst_41263 = (state_41277[(7)]);var inst_41265 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41263) : f.call(null,inst_41263));var state_41277__$1 = (function (){var statearr_41287 = state_41277;(statearr_41287[(8)] = inst_41265);
return statearr_41287;
})();var statearr_41288_41305 = state_41277__$1;(statearr_41288_41305[(2)] = true);
(statearr_41288_41305[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_41278 === (10)))
{var inst_41273 = (state_41277[(2)]);var state_41277__$1 = state_41277;var statearr_41289_41306 = state_41277__$1;(statearr_41289_41306[(2)] = inst_41273);
(statearr_41289_41306[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_41278 === (8)))
{var state_41277__$1 = state_41277;var statearr_41290_41307 = state_41277__$1;(statearr_41290_41307[(2)] = null);
(statearr_41290_41307[(1)] = (2));
return cljs.core.constant$keyword$872;
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
var state_machine__5694__auto____0 = (function (){var statearr_41294 = [null,null,null,null,null,null,null,null,null];(statearr_41294[(0)] = state_machine__5694__auto__);
(statearr_41294[(1)] = (1));
return statearr_41294;
});
var state_machine__5694__auto____1 = (function (state_41277){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_41277);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e41295){if((e41295 instanceof Object))
{var ex__5697__auto__ = e41295;var statearr_41296_41308 = state_41277;(statearr_41296_41308[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41277);
return cljs.core.constant$keyword$872;
} else
{throw e41295;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__41309 = state_41277;
state_41277 = G__41309;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_41277){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_41277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_41297 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_41297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_41297;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
