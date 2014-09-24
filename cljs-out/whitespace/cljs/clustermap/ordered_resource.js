// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj14137 = {};return obj14137;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___14166 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___14166,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___14166,rq_ticket,this$__$1){
return (function (state_14152){var state_val_14153 = (state_14152[(1)]);if((state_val_14153 === (6)))
{var inst_14144 = (state_14152[(2)]);var state_14152__$1 = state_14152;var statearr_14154_14167 = state_14152__$1;(statearr_14154_14167[(2)] = inst_14144);
(statearr_14154_14167[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14153 === (5)))
{var inst_14150 = (state_14152[(2)]);var state_14152__$1 = state_14152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14152__$1,inst_14150);
} else
{if((state_val_14153 === (4)))
{var inst_14146 = cljs.core.deref.call(null,self__.ticket);var inst_14147 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14146));var inst_14148 = console.log(inst_14147);var state_14152__$1 = state_14152;var statearr_14155_14168 = state_14152__$1;(statearr_14155_14168[(2)] = inst_14148);
(statearr_14155_14168[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14153 === (3)))
{var inst_14139 = (state_14152[(7)]);var state_14152__$1 = state_14152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14152__$1,(6),self__.response_chan,inst_14139);
} else
{if((state_val_14153 === (2)))
{var inst_14139 = (state_14152[(2)]);var inst_14140 = cljs.core.deref.call(null,self__.ticket);var inst_14141 = cljs.core._EQ_.call(null,rq_ticket,inst_14140);var state_14152__$1 = (function (){var statearr_14156 = state_14152;(statearr_14156[(7)] = inst_14139);
return statearr_14156;
})();if(inst_14141)
{var statearr_14157_14169 = state_14152__$1;(statearr_14157_14169[(1)] = (3));
} else
{var statearr_14158_14170 = state_14152__$1;(statearr_14158_14170[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14153 === (1)))
{var state_14152__$1 = state_14152;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14152__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___14166,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___14166,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_14162 = [null,null,null,null,null,null,null,null];(statearr_14162[(0)] = state_machine__5694__auto__);
(statearr_14162[(1)] = (1));
return statearr_14162;
});
var state_machine__5694__auto____1 = (function (state_14152){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_14152);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e14163){if((e14163 instanceof Object))
{var ex__5697__auto__ = e14163;var statearr_14164_14171 = state_14152;(statearr_14164_14171[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14152);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14163;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14172 = state_14152;
state_14152 = G__14172;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_14152){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_14152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___14166,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_14165 = f__5709__auto__.call(null);(statearr_14165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___14166);
return statearr_14165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___14166,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__14173){
var ordered_resource = cljs.core.first(arglist__14173);
arglist__14173 = cljs.core.next(arglist__14173);
var api_fn = cljs.core.first(arglist__14173);
var args = cljs.core.rest(arglist__14173);
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
return (function (state_14229){var state_val_14230 = (state_14229[(1)]);if((state_val_14230 === (7)))
{var inst_14220 = (state_14229[(2)]);var state_14229__$1 = state_14229;if(cljs.core.truth_(inst_14220))
{var statearr_14231_14250 = state_14229__$1;(statearr_14231_14250[(1)] = (8));
} else
{var statearr_14232_14251 = state_14229__$1;(statearr_14232_14251[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (1)))
{var state_14229__$1 = state_14229;var statearr_14233_14252 = state_14229__$1;(statearr_14233_14252[(2)] = null);
(statearr_14233_14252[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (4)))
{var inst_14215 = (state_14229[(7)]);var inst_14215__$1 = (state_14229[(2)]);var state_14229__$1 = (function (){var statearr_14234 = state_14229;(statearr_14234[(7)] = inst_14215__$1);
return statearr_14234;
})();if(cljs.core.truth_(inst_14215__$1))
{var statearr_14235_14253 = state_14229__$1;(statearr_14235_14253[(1)] = (5));
} else
{var statearr_14236_14254 = state_14229__$1;(statearr_14236_14254[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (6)))
{var state_14229__$1 = state_14229;var statearr_14237_14255 = state_14229__$1;(statearr_14237_14255[(2)] = null);
(statearr_14237_14255[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (3)))
{var inst_14227 = (state_14229[(2)]);var state_14229__$1 = state_14229;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14229__$1,inst_14227);
} else
{if((state_val_14230 === (2)))
{var inst_14213 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_14229__$1 = state_14229;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14229__$1,(4),inst_14213);
} else
{if((state_val_14230 === (9)))
{var state_14229__$1 = state_14229;var statearr_14238_14256 = state_14229__$1;(statearr_14238_14256[(2)] = null);
(statearr_14238_14256[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (5)))
{var inst_14215 = (state_14229[(7)]);var inst_14217 = f.call(null,inst_14215);var state_14229__$1 = (function (){var statearr_14239 = state_14229;(statearr_14239[(8)] = inst_14217);
return statearr_14239;
})();var statearr_14240_14257 = state_14229__$1;(statearr_14240_14257[(2)] = true);
(statearr_14240_14257[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (10)))
{var inst_14225 = (state_14229[(2)]);var state_14229__$1 = state_14229;var statearr_14241_14258 = state_14229__$1;(statearr_14241_14258[(2)] = inst_14225);
(statearr_14241_14258[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14230 === (8)))
{var state_14229__$1 = state_14229;var statearr_14242_14259 = state_14229__$1;(statearr_14242_14259[(2)] = null);
(statearr_14242_14259[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_14246 = [null,null,null,null,null,null,null,null,null];(statearr_14246[(0)] = state_machine__5694__auto__);
(statearr_14246[(1)] = (1));
return statearr_14246;
});
var state_machine__5694__auto____1 = (function (state_14229){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_14229);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e14247){if((e14247 instanceof Object))
{var ex__5697__auto__ = e14247;var statearr_14248_14260 = state_14229;(statearr_14248_14260[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14229);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14247;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14261 = state_14229;
state_14229 = G__14261;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_14229){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_14229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_14249 = f__5709__auto__.call(null);(statearr_14249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_14249;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
