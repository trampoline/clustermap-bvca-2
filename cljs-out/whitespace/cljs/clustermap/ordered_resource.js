// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj17867 = {};return obj17867;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5819__auto___17896 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___17896,rq_ticket,this$__$1){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___17896,rq_ticket,this$__$1){
return (function (state_17882){var state_val_17883 = (state_17882[(1)]);if((state_val_17883 === (6)))
{var inst_17874 = (state_17882[(2)]);var state_17882__$1 = state_17882;var statearr_17884_17897 = state_17882__$1;(statearr_17884_17897[(2)] = inst_17874);
(statearr_17884_17897[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17883 === (5)))
{var inst_17880 = (state_17882[(2)]);var state_17882__$1 = state_17882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17882__$1,inst_17880);
} else
{if((state_val_17883 === (4)))
{var inst_17876 = cljs.core.deref.call(null,self__.ticket);var inst_17877 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17876));var inst_17878 = console.log(inst_17877);var state_17882__$1 = state_17882;var statearr_17885_17898 = state_17882__$1;(statearr_17885_17898[(2)] = inst_17878);
(statearr_17885_17898[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17883 === (3)))
{var inst_17869 = (state_17882[(7)]);var state_17882__$1 = state_17882;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17882__$1,(6),self__.response_chan,inst_17869);
} else
{if((state_val_17883 === (2)))
{var inst_17869 = (state_17882[(2)]);var inst_17870 = cljs.core.deref.call(null,self__.ticket);var inst_17871 = cljs.core._EQ_.call(null,rq_ticket,inst_17870);var state_17882__$1 = (function (){var statearr_17886 = state_17882;(statearr_17886[(7)] = inst_17869);
return statearr_17886;
})();if(inst_17871)
{var statearr_17887_17899 = state_17882__$1;(statearr_17887_17899[(1)] = (3));
} else
{var statearr_17888_17900 = state_17882__$1;(statearr_17888_17900[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17883 === (1)))
{var state_17882__$1 = state_17882;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17882__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto___17896,rq_ticket,this$__$1))
;return ((function (switch__5804__auto__,c__5819__auto___17896,rq_ticket,this$__$1){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_17892 = [null,null,null,null,null,null,null,null];(statearr_17892[(0)] = state_machine__5805__auto__);
(statearr_17892[(1)] = (1));
return statearr_17892;
});
var state_machine__5805__auto____1 = (function (state_17882){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_17882);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e17893){if((e17893 instanceof Object))
{var ex__5808__auto__ = e17893;var statearr_17894_17901 = state_17882;(statearr_17894_17901[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17882);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17893;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17902 = state_17882;
state_17882 = G__17902;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_17882){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_17882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___17896,rq_ticket,this$__$1))
})();var state__5821__auto__ = (function (){var statearr_17895 = f__5820__auto__.call(null);(statearr_17895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___17896);
return statearr_17895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___17896,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__17903){
var ordered_resource = cljs.core.first(arglist__17903);
arglist__17903 = cljs.core.next(arglist__17903);
var api_fn = cljs.core.first(arglist__17903);
var args = cljs.core.rest(arglist__17903);
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
return (function (state_17959){var state_val_17960 = (state_17959[(1)]);if((state_val_17960 === (7)))
{var inst_17950 = (state_17959[(2)]);var state_17959__$1 = state_17959;if(cljs.core.truth_(inst_17950))
{var statearr_17961_17980 = state_17959__$1;(statearr_17961_17980[(1)] = (8));
} else
{var statearr_17962_17981 = state_17959__$1;(statearr_17962_17981[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (1)))
{var state_17959__$1 = state_17959;var statearr_17963_17982 = state_17959__$1;(statearr_17963_17982[(2)] = null);
(statearr_17963_17982[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (4)))
{var inst_17945 = (state_17959[(7)]);var inst_17945__$1 = (state_17959[(2)]);var state_17959__$1 = (function (){var statearr_17964 = state_17959;(statearr_17964[(7)] = inst_17945__$1);
return statearr_17964;
})();if(cljs.core.truth_(inst_17945__$1))
{var statearr_17965_17983 = state_17959__$1;(statearr_17965_17983[(1)] = (5));
} else
{var statearr_17966_17984 = state_17959__$1;(statearr_17966_17984[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (6)))
{var state_17959__$1 = state_17959;var statearr_17967_17985 = state_17959__$1;(statearr_17967_17985[(2)] = null);
(statearr_17967_17985[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (3)))
{var inst_17957 = (state_17959[(2)]);var state_17959__$1 = state_17959;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17959__$1,inst_17957);
} else
{if((state_val_17960 === (2)))
{var inst_17943 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_17959__$1 = state_17959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17959__$1,(4),inst_17943);
} else
{if((state_val_17960 === (9)))
{var state_17959__$1 = state_17959;var statearr_17968_17986 = state_17959__$1;(statearr_17968_17986[(2)] = null);
(statearr_17968_17986[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (5)))
{var inst_17945 = (state_17959[(7)]);var inst_17947 = f.call(null,inst_17945);var state_17959__$1 = (function (){var statearr_17969 = state_17959;(statearr_17969[(8)] = inst_17947);
return statearr_17969;
})();var statearr_17970_17987 = state_17959__$1;(statearr_17970_17987[(2)] = true);
(statearr_17970_17987[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (10)))
{var inst_17955 = (state_17959[(2)]);var state_17959__$1 = state_17959;var statearr_17971_17988 = state_17959__$1;(statearr_17971_17988[(2)] = inst_17955);
(statearr_17971_17988[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (8)))
{var state_17959__$1 = state_17959;var statearr_17972_17989 = state_17959__$1;(statearr_17972_17989[(2)] = null);
(statearr_17972_17989[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_17976 = [null,null,null,null,null,null,null,null,null];(statearr_17976[(0)] = state_machine__5805__auto__);
(statearr_17976[(1)] = (1));
return statearr_17976;
});
var state_machine__5805__auto____1 = (function (state_17959){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_17959);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e17977){if((e17977 instanceof Object))
{var ex__5808__auto__ = e17977;var statearr_17978_17990 = state_17959;(statearr_17978_17990[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17959);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17977;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17991 = state_17959;
state_17959 = G__17991;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_17959){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_17959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_17979 = f__5820__auto__.call(null);(statearr_17979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_17979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
});
