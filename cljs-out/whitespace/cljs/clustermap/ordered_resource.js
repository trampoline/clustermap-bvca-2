// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj17151 = {};return obj17151;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___17180 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17180,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17180,rq_ticket,this$__$1){
return (function (state_17166){var state_val_17167 = (state_17166[(1)]);if((state_val_17167 === (6)))
{var inst_17158 = (state_17166[(2)]);var state_17166__$1 = state_17166;var statearr_17168_17181 = state_17166__$1;(statearr_17168_17181[(2)] = inst_17158);
(statearr_17168_17181[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17167 === (5)))
{var inst_17164 = (state_17166[(2)]);var state_17166__$1 = state_17166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17166__$1,inst_17164);
} else
{if((state_val_17167 === (4)))
{var inst_17160 = cljs.core.deref.call(null,self__.ticket);var inst_17161 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17160));var inst_17162 = console.log(inst_17161);var state_17166__$1 = state_17166;var statearr_17169_17182 = state_17166__$1;(statearr_17169_17182[(2)] = inst_17162);
(statearr_17169_17182[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17167 === (3)))
{var inst_17153 = (state_17166[(7)]);var state_17166__$1 = state_17166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17166__$1,(6),self__.response_chan,inst_17153);
} else
{if((state_val_17167 === (2)))
{var inst_17153 = (state_17166[(2)]);var inst_17154 = cljs.core.deref.call(null,self__.ticket);var inst_17155 = cljs.core._EQ_.call(null,rq_ticket,inst_17154);var state_17166__$1 = (function (){var statearr_17170 = state_17166;(statearr_17170[(7)] = inst_17153);
return statearr_17170;
})();if(inst_17155)
{var statearr_17171_17183 = state_17166__$1;(statearr_17171_17183[(1)] = (3));
} else
{var statearr_17172_17184 = state_17166__$1;(statearr_17172_17184[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17167 === (1)))
{var state_17166__$1 = state_17166;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17166__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___17180,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___17180,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17176 = [null,null,null,null,null,null,null,null];(statearr_17176[(0)] = state_machine__5694__auto__);
(statearr_17176[(1)] = (1));
return statearr_17176;
});
var state_machine__5694__auto____1 = (function (state_17166){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17166);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17177){if((e17177 instanceof Object))
{var ex__5697__auto__ = e17177;var statearr_17178_17185 = state_17166;(statearr_17178_17185[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17166);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17177;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17186 = state_17166;
state_17166 = G__17186;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17166){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17180,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_17179 = f__5709__auto__.call(null);(statearr_17179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17180);
return statearr_17179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17180,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__17187){
var ordered_resource = cljs.core.first(arglist__17187);
arglist__17187 = cljs.core.next(arglist__17187);
var api_fn = cljs.core.first(arglist__17187);
var args = cljs.core.rest(arglist__17187);
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
return (function (state_17243){var state_val_17244 = (state_17243[(1)]);if((state_val_17244 === (7)))
{var inst_17234 = (state_17243[(2)]);var state_17243__$1 = state_17243;if(cljs.core.truth_(inst_17234))
{var statearr_17245_17264 = state_17243__$1;(statearr_17245_17264[(1)] = (8));
} else
{var statearr_17246_17265 = state_17243__$1;(statearr_17246_17265[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17244 === (1)))
{var state_17243__$1 = state_17243;var statearr_17247_17266 = state_17243__$1;(statearr_17247_17266[(2)] = null);
(statearr_17247_17266[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17244 === (4)))
{var inst_17229 = (state_17243[(7)]);var inst_17229__$1 = (state_17243[(2)]);var state_17243__$1 = (function (){var statearr_17248 = state_17243;(statearr_17248[(7)] = inst_17229__$1);
return statearr_17248;
})();if(cljs.core.truth_(inst_17229__$1))
{var statearr_17249_17267 = state_17243__$1;(statearr_17249_17267[(1)] = (5));
} else
{var statearr_17250_17268 = state_17243__$1;(statearr_17250_17268[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17244 === (6)))
{var state_17243__$1 = state_17243;var statearr_17251_17269 = state_17243__$1;(statearr_17251_17269[(2)] = null);
(statearr_17251_17269[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17244 === (3)))
{var inst_17241 = (state_17243[(2)]);var state_17243__$1 = state_17243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17243__$1,inst_17241);
} else
{if((state_val_17244 === (2)))
{var inst_17227 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_17243__$1 = state_17243;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17243__$1,(4),inst_17227);
} else
{if((state_val_17244 === (9)))
{var state_17243__$1 = state_17243;var statearr_17252_17270 = state_17243__$1;(statearr_17252_17270[(2)] = null);
(statearr_17252_17270[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17244 === (5)))
{var inst_17229 = (state_17243[(7)]);var inst_17231 = f.call(null,inst_17229);var state_17243__$1 = (function (){var statearr_17253 = state_17243;(statearr_17253[(8)] = inst_17231);
return statearr_17253;
})();var statearr_17254_17271 = state_17243__$1;(statearr_17254_17271[(2)] = true);
(statearr_17254_17271[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17244 === (10)))
{var inst_17239 = (state_17243[(2)]);var state_17243__$1 = state_17243;var statearr_17255_17272 = state_17243__$1;(statearr_17255_17272[(2)] = inst_17239);
(statearr_17255_17272[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17244 === (8)))
{var state_17243__$1 = state_17243;var statearr_17256_17273 = state_17243__$1;(statearr_17256_17273[(2)] = null);
(statearr_17256_17273[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_17260 = [null,null,null,null,null,null,null,null,null];(statearr_17260[(0)] = state_machine__5694__auto__);
(statearr_17260[(1)] = (1));
return statearr_17260;
});
var state_machine__5694__auto____1 = (function (state_17243){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17243);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17261){if((e17261 instanceof Object))
{var ex__5697__auto__ = e17261;var statearr_17262_17274 = state_17243;(statearr_17262_17274[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17243);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17261;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17275 = state_17243;
state_17243 = G__17275;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17243){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_17263 = f__5709__auto__.call(null);(statearr_17263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_17263;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
