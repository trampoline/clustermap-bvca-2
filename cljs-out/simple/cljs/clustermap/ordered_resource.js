// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj31216 = {};return obj31216;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___31245 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___31245,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___31245,rq_ticket,this$__$1){
return (function (state_31231){var state_val_31232 = (state_31231[(1)]);if((state_val_31232 === (6)))
{var inst_31223 = (state_31231[(2)]);var state_31231__$1 = state_31231;var statearr_31233_31246 = state_31231__$1;(statearr_31233_31246[(2)] = inst_31223);
(statearr_31233_31246[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31232 === (5)))
{var inst_31229 = (state_31231[(2)]);var state_31231__$1 = state_31231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31231__$1,inst_31229);
} else
{if((state_val_31232 === (4)))
{var inst_31225 = cljs.core.deref.call(null,self__.ticket);var inst_31226 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31225));var inst_31227 = console.log(inst_31226);var state_31231__$1 = state_31231;var statearr_31234_31247 = state_31231__$1;(statearr_31234_31247[(2)] = inst_31227);
(statearr_31234_31247[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31232 === (3)))
{var inst_31218 = (state_31231[(7)]);var state_31231__$1 = state_31231;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31231__$1,(6),self__.response_chan,inst_31218);
} else
{if((state_val_31232 === (2)))
{var inst_31218 = (state_31231[(2)]);var inst_31219 = cljs.core.deref.call(null,self__.ticket);var inst_31220 = cljs.core._EQ_.call(null,rq_ticket,inst_31219);var state_31231__$1 = (function (){var statearr_31235 = state_31231;(statearr_31235[(7)] = inst_31218);
return statearr_31235;
})();if(inst_31220)
{var statearr_31236_31248 = state_31231__$1;(statearr_31236_31248[(1)] = (3));
} else
{var statearr_31237_31249 = state_31231__$1;(statearr_31237_31249[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31232 === (1)))
{var state_31231__$1 = state_31231;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31231__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___31245,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___31245,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31241 = [null,null,null,null,null,null,null,null];(statearr_31241[(0)] = state_machine__5694__auto__);
(statearr_31241[(1)] = (1));
return statearr_31241;
});
var state_machine__5694__auto____1 = (function (state_31231){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31231);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31242){if((e31242 instanceof Object))
{var ex__5697__auto__ = e31242;var statearr_31243_31250 = state_31231;(statearr_31243_31250[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31231);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31242;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31251 = state_31231;
state_31231 = G__31251;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31231){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___31245,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_31244 = f__5709__auto__.call(null);(statearr_31244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___31245);
return statearr_31244;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___31245,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__31252){
var ordered_resource = cljs.core.first(arglist__31252);
arglist__31252 = cljs.core.next(arglist__31252);
var api_fn = cljs.core.first(arglist__31252);
var args = cljs.core.rest(arglist__31252);
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
return (function (state_31308){var state_val_31309 = (state_31308[(1)]);if((state_val_31309 === (7)))
{var inst_31299 = (state_31308[(2)]);var state_31308__$1 = state_31308;if(cljs.core.truth_(inst_31299))
{var statearr_31310_31329 = state_31308__$1;(statearr_31310_31329[(1)] = (8));
} else
{var statearr_31311_31330 = state_31308__$1;(statearr_31311_31330[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31309 === (1)))
{var state_31308__$1 = state_31308;var statearr_31312_31331 = state_31308__$1;(statearr_31312_31331[(2)] = null);
(statearr_31312_31331[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31309 === (4)))
{var inst_31294 = (state_31308[(7)]);var inst_31294__$1 = (state_31308[(2)]);var state_31308__$1 = (function (){var statearr_31313 = state_31308;(statearr_31313[(7)] = inst_31294__$1);
return statearr_31313;
})();if(cljs.core.truth_(inst_31294__$1))
{var statearr_31314_31332 = state_31308__$1;(statearr_31314_31332[(1)] = (5));
} else
{var statearr_31315_31333 = state_31308__$1;(statearr_31315_31333[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31309 === (6)))
{var state_31308__$1 = state_31308;var statearr_31316_31334 = state_31308__$1;(statearr_31316_31334[(2)] = null);
(statearr_31316_31334[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31309 === (3)))
{var inst_31306 = (state_31308[(2)]);var state_31308__$1 = state_31308;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31308__$1,inst_31306);
} else
{if((state_val_31309 === (2)))
{var inst_31292 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_31308__$1 = state_31308;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31308__$1,(4),inst_31292);
} else
{if((state_val_31309 === (9)))
{var state_31308__$1 = state_31308;var statearr_31317_31335 = state_31308__$1;(statearr_31317_31335[(2)] = null);
(statearr_31317_31335[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31309 === (5)))
{var inst_31294 = (state_31308[(7)]);var inst_31296 = f.call(null,inst_31294);var state_31308__$1 = (function (){var statearr_31318 = state_31308;(statearr_31318[(8)] = inst_31296);
return statearr_31318;
})();var statearr_31319_31336 = state_31308__$1;(statearr_31319_31336[(2)] = true);
(statearr_31319_31336[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31309 === (10)))
{var inst_31304 = (state_31308[(2)]);var state_31308__$1 = state_31308;var statearr_31320_31337 = state_31308__$1;(statearr_31320_31337[(2)] = inst_31304);
(statearr_31320_31337[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31309 === (8)))
{var state_31308__$1 = state_31308;var statearr_31321_31338 = state_31308__$1;(statearr_31321_31338[(2)] = null);
(statearr_31321_31338[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_31325 = [null,null,null,null,null,null,null,null,null];(statearr_31325[(0)] = state_machine__5694__auto__);
(statearr_31325[(1)] = (1));
return statearr_31325;
});
var state_machine__5694__auto____1 = (function (state_31308){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31308);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31326){if((e31326 instanceof Object))
{var ex__5697__auto__ = e31326;var statearr_31327_31339 = state_31308;(statearr_31327_31339[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31308);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31326;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31340 = state_31308;
state_31308 = G__31340;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31308){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_31328 = f__5709__auto__.call(null);(statearr_31328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_31328;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
