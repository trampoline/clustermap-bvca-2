// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj27972 = {};return obj27972;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___28001 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___28001,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___28001,rq_ticket,this$__$1){
return (function (state_27987){var state_val_27988 = (state_27987[(1)]);if((state_val_27988 === (6)))
{var inst_27979 = (state_27987[(2)]);var state_27987__$1 = state_27987;var statearr_27989_28002 = state_27987__$1;(statearr_27989_28002[(2)] = inst_27979);
(statearr_27989_28002[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27988 === (5)))
{var inst_27985 = (state_27987[(2)]);var state_27987__$1 = state_27987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27987__$1,inst_27985);
} else
{if((state_val_27988 === (4)))
{var inst_27981 = cljs.core.deref.call(null,self__.ticket);var inst_27982 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27981));var inst_27983 = console.log(inst_27982);var state_27987__$1 = state_27987;var statearr_27990_28003 = state_27987__$1;(statearr_27990_28003[(2)] = inst_27983);
(statearr_27990_28003[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27988 === (3)))
{var inst_27974 = (state_27987[(7)]);var state_27987__$1 = state_27987;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27987__$1,(6),self__.response_chan,inst_27974);
} else
{if((state_val_27988 === (2)))
{var inst_27974 = (state_27987[(2)]);var inst_27975 = cljs.core.deref.call(null,self__.ticket);var inst_27976 = cljs.core._EQ_.call(null,rq_ticket,inst_27975);var state_27987__$1 = (function (){var statearr_27991 = state_27987;(statearr_27991[(7)] = inst_27974);
return statearr_27991;
})();if(inst_27976)
{var statearr_27992_28004 = state_27987__$1;(statearr_27992_28004[(1)] = (3));
} else
{var statearr_27993_28005 = state_27987__$1;(statearr_27993_28005[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27988 === (1)))
{var state_27987__$1 = state_27987;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27987__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___28001,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___28001,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_27997 = [null,null,null,null,null,null,null,null];(statearr_27997[(0)] = state_machine__5694__auto__);
(statearr_27997[(1)] = (1));
return statearr_27997;
});
var state_machine__5694__auto____1 = (function (state_27987){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_27987);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e27998){if((e27998 instanceof Object))
{var ex__5697__auto__ = e27998;var statearr_27999_28006 = state_27987;(statearr_27999_28006[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27987);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27998;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28007 = state_27987;
state_27987 = G__28007;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_27987){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_27987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___28001,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_28000 = f__5709__auto__.call(null);(statearr_28000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___28001);
return statearr_28000;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___28001,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__28008){
var ordered_resource = cljs.core.first(arglist__28008);
arglist__28008 = cljs.core.next(arglist__28008);
var api_fn = cljs.core.first(arglist__28008);
var args = cljs.core.rest(arglist__28008);
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
return (function (state_28064){var state_val_28065 = (state_28064[(1)]);if((state_val_28065 === (7)))
{var inst_28055 = (state_28064[(2)]);var state_28064__$1 = state_28064;if(cljs.core.truth_(inst_28055))
{var statearr_28066_28085 = state_28064__$1;(statearr_28066_28085[(1)] = (8));
} else
{var statearr_28067_28086 = state_28064__$1;(statearr_28067_28086[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28065 === (1)))
{var state_28064__$1 = state_28064;var statearr_28068_28087 = state_28064__$1;(statearr_28068_28087[(2)] = null);
(statearr_28068_28087[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28065 === (4)))
{var inst_28050 = (state_28064[(7)]);var inst_28050__$1 = (state_28064[(2)]);var state_28064__$1 = (function (){var statearr_28069 = state_28064;(statearr_28069[(7)] = inst_28050__$1);
return statearr_28069;
})();if(cljs.core.truth_(inst_28050__$1))
{var statearr_28070_28088 = state_28064__$1;(statearr_28070_28088[(1)] = (5));
} else
{var statearr_28071_28089 = state_28064__$1;(statearr_28071_28089[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28065 === (6)))
{var state_28064__$1 = state_28064;var statearr_28072_28090 = state_28064__$1;(statearr_28072_28090[(2)] = null);
(statearr_28072_28090[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28065 === (3)))
{var inst_28062 = (state_28064[(2)]);var state_28064__$1 = state_28064;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28064__$1,inst_28062);
} else
{if((state_val_28065 === (2)))
{var inst_28048 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_28064__$1 = state_28064;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28064__$1,(4),inst_28048);
} else
{if((state_val_28065 === (9)))
{var state_28064__$1 = state_28064;var statearr_28073_28091 = state_28064__$1;(statearr_28073_28091[(2)] = null);
(statearr_28073_28091[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28065 === (5)))
{var inst_28050 = (state_28064[(7)]);var inst_28052 = f.call(null,inst_28050);var state_28064__$1 = (function (){var statearr_28074 = state_28064;(statearr_28074[(8)] = inst_28052);
return statearr_28074;
})();var statearr_28075_28092 = state_28064__$1;(statearr_28075_28092[(2)] = true);
(statearr_28075_28092[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28065 === (10)))
{var inst_28060 = (state_28064[(2)]);var state_28064__$1 = state_28064;var statearr_28076_28093 = state_28064__$1;(statearr_28076_28093[(2)] = inst_28060);
(statearr_28076_28093[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28065 === (8)))
{var state_28064__$1 = state_28064;var statearr_28077_28094 = state_28064__$1;(statearr_28077_28094[(2)] = null);
(statearr_28077_28094[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_28081 = [null,null,null,null,null,null,null,null,null];(statearr_28081[(0)] = state_machine__5694__auto__);
(statearr_28081[(1)] = (1));
return statearr_28081;
});
var state_machine__5694__auto____1 = (function (state_28064){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28064);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28082){if((e28082 instanceof Object))
{var ex__5697__auto__ = e28082;var statearr_28083_28095 = state_28064;(statearr_28083_28095[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28064);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28082;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28096 = state_28064;
state_28064 = G__28096;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28064){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_28084 = f__5709__auto__.call(null);(statearr_28084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_28084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
