// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj79977 = {};return obj79977;
})();
clustermap.ordered_resource.add_request = (function add_request(this$,ch){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2(this$,ch);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.ordered_resource.add_request[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.ordered_resource.add_request["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.add-request",this$);
}
}
})().call(null,this$,ch);
}
});
clustermap.ordered_resource.get_response_chan = (function get_response_chan(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.ordered_resource.get_response_chan[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.ordered_resource.get_response_chan["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.get-response-chan",this$);
}
}
})().call(null,this$);
}
});
clustermap.ordered_resource.close = (function close(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (clustermap.ordered_resource.close[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (clustermap.ordered_resource.close["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
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
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.ordered-resource/DiscardStaleResource");
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$ = true;
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$add_request$arity$2 = (function (this$,ch){var self__ = this;
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5819__auto___80006 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___80006,rq_ticket,this$__$1){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___80006,rq_ticket,this$__$1){
return (function (state_79992){var state_val_79993 = (state_79992[(1)]);if((state_val_79993 === (6)))
{var inst_79984 = (state_79992[(2)]);var state_79992__$1 = state_79992;var statearr_79994_80007 = state_79992__$1;(statearr_79994_80007[(2)] = inst_79984);
(statearr_79994_80007[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79993 === (5)))
{var inst_79990 = (state_79992[(2)]);var state_79992__$1 = state_79992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79992__$1,inst_79990);
} else
{if((state_val_79993 === (4)))
{var inst_79986 = cljs.core.deref.call(null,self__.ticket);var inst_79987 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_79986));var inst_79988 = console.log(inst_79987);var state_79992__$1 = state_79992;var statearr_79995_80008 = state_79992__$1;(statearr_79995_80008[(2)] = inst_79988);
(statearr_79995_80008[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79993 === (3)))
{var inst_79979 = (state_79992[(7)]);var state_79992__$1 = state_79992;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79992__$1,(6),self__.response_chan,inst_79979);
} else
{if((state_val_79993 === (2)))
{var inst_79979 = (state_79992[(2)]);var inst_79980 = cljs.core.deref.call(null,self__.ticket);var inst_79981 = cljs.core._EQ_.call(null,rq_ticket,inst_79980);var state_79992__$1 = (function (){var statearr_79996 = state_79992;(statearr_79996[(7)] = inst_79979);
return statearr_79996;
})();if(inst_79981)
{var statearr_79997_80009 = state_79992__$1;(statearr_79997_80009[(1)] = (3));
} else
{var statearr_79998_80010 = state_79992__$1;(statearr_79998_80010[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79993 === (1)))
{var state_79992__$1 = state_79992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79992__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto___80006,rq_ticket,this$__$1))
;return ((function (switch__5804__auto__,c__5819__auto___80006,rq_ticket,this$__$1){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_80002 = [null,null,null,null,null,null,null,null];(statearr_80002[(0)] = state_machine__5805__auto__);
(statearr_80002[(1)] = (1));
return statearr_80002;
});
var state_machine__5805__auto____1 = (function (state_79992){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_79992);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e80003){if((e80003 instanceof Object))
{var ex__5808__auto__ = e80003;var statearr_80004_80011 = state_79992;(statearr_80004_80011[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79992);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e80003;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__80012 = state_79992;
state_79992 = G__80012;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_79992){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_79992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___80006,rq_ticket,this$__$1))
})();var state__5821__auto__ = (function (){var statearr_80005 = f__5820__auto__.call(null);(statearr_80005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___80006);
return statearr_80005;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___80006,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__80013){
var ordered_resource = cljs.core.first(arglist__80013);
arglist__80013 = cljs.core.next(arglist__80013);
var api_fn = cljs.core.first(arglist__80013);
var args = cljs.core.rest(arglist__80013);
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
clustermap.ordered_resource.retrieve_responses = (function retrieve_responses(ordered_resource,f){var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_80069){var state_val_80070 = (state_80069[(1)]);if((state_val_80070 === (7)))
{var inst_80060 = (state_80069[(2)]);var state_80069__$1 = state_80069;if(cljs.core.truth_(inst_80060))
{var statearr_80071_80090 = state_80069__$1;(statearr_80071_80090[(1)] = (8));
} else
{var statearr_80072_80091 = state_80069__$1;(statearr_80072_80091[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80070 === (1)))
{var state_80069__$1 = state_80069;var statearr_80073_80092 = state_80069__$1;(statearr_80073_80092[(2)] = null);
(statearr_80073_80092[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80070 === (4)))
{var inst_80055 = (state_80069[(7)]);var inst_80055__$1 = (state_80069[(2)]);var state_80069__$1 = (function (){var statearr_80074 = state_80069;(statearr_80074[(7)] = inst_80055__$1);
return statearr_80074;
})();if(cljs.core.truth_(inst_80055__$1))
{var statearr_80075_80093 = state_80069__$1;(statearr_80075_80093[(1)] = (5));
} else
{var statearr_80076_80094 = state_80069__$1;(statearr_80076_80094[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80070 === (6)))
{var state_80069__$1 = state_80069;var statearr_80077_80095 = state_80069__$1;(statearr_80077_80095[(2)] = null);
(statearr_80077_80095[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80070 === (3)))
{var inst_80067 = (state_80069[(2)]);var state_80069__$1 = state_80069;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80069__$1,inst_80067);
} else
{if((state_val_80070 === (2)))
{var inst_80053 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_80069__$1 = state_80069;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80069__$1,(4),inst_80053);
} else
{if((state_val_80070 === (9)))
{var state_80069__$1 = state_80069;var statearr_80078_80096 = state_80069__$1;(statearr_80078_80096[(2)] = null);
(statearr_80078_80096[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80070 === (5)))
{var inst_80055 = (state_80069[(7)]);var inst_80057 = f.call(null,inst_80055);var state_80069__$1 = (function (){var statearr_80079 = state_80069;(statearr_80079[(8)] = inst_80057);
return statearr_80079;
})();var statearr_80080_80097 = state_80069__$1;(statearr_80080_80097[(2)] = true);
(statearr_80080_80097[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80070 === (10)))
{var inst_80065 = (state_80069[(2)]);var state_80069__$1 = state_80069;var statearr_80081_80098 = state_80069__$1;(statearr_80081_80098[(2)] = inst_80065);
(statearr_80081_80098[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80070 === (8)))
{var state_80069__$1 = state_80069;var statearr_80082_80099 = state_80069__$1;(statearr_80082_80099[(2)] = null);
(statearr_80082_80099[(1)] = (2));
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
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_80086 = [null,null,null,null,null,null,null,null,null];(statearr_80086[(0)] = state_machine__5805__auto__);
(statearr_80086[(1)] = (1));
return statearr_80086;
});
var state_machine__5805__auto____1 = (function (state_80069){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_80069);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e80087){if((e80087 instanceof Object))
{var ex__5808__auto__ = e80087;var statearr_80088_80100 = state_80069;(statearr_80088_80100[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80069);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e80087;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__80101 = state_80069;
state_80069 = G__80101;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_80069){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_80069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_80089 = f__5820__auto__.call(null);(statearr_80089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_80089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
});

//# sourceMappingURL=ordered_resource.js.map