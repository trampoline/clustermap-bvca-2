// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj33803 = {};return obj33803;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5819__auto___33832 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___33832,rq_ticket,this$__$1){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___33832,rq_ticket,this$__$1){
return (function (state_33818){var state_val_33819 = (state_33818[(1)]);if((state_val_33819 === (6)))
{var inst_33810 = (state_33818[(2)]);var state_33818__$1 = state_33818;var statearr_33820_33833 = state_33818__$1;(statearr_33820_33833[(2)] = inst_33810);
(statearr_33820_33833[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33819 === (5)))
{var inst_33816 = (state_33818[(2)]);var state_33818__$1 = state_33818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33818__$1,inst_33816);
} else
{if((state_val_33819 === (4)))
{var inst_33812 = cljs.core.deref.call(null,self__.ticket);var inst_33813 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33812));var inst_33814 = console.log(inst_33813);var state_33818__$1 = state_33818;var statearr_33821_33834 = state_33818__$1;(statearr_33821_33834[(2)] = inst_33814);
(statearr_33821_33834[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33819 === (3)))
{var inst_33805 = (state_33818[(7)]);var state_33818__$1 = state_33818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33818__$1,(6),self__.response_chan,inst_33805);
} else
{if((state_val_33819 === (2)))
{var inst_33805 = (state_33818[(2)]);var inst_33806 = cljs.core.deref.call(null,self__.ticket);var inst_33807 = cljs.core._EQ_.call(null,rq_ticket,inst_33806);var state_33818__$1 = (function (){var statearr_33822 = state_33818;(statearr_33822[(7)] = inst_33805);
return statearr_33822;
})();if(inst_33807)
{var statearr_33823_33835 = state_33818__$1;(statearr_33823_33835[(1)] = (3));
} else
{var statearr_33824_33836 = state_33818__$1;(statearr_33824_33836[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33819 === (1)))
{var state_33818__$1 = state_33818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33818__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto___33832,rq_ticket,this$__$1))
;return ((function (switch__5804__auto__,c__5819__auto___33832,rq_ticket,this$__$1){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_33828 = [null,null,null,null,null,null,null,null];(statearr_33828[(0)] = state_machine__5805__auto__);
(statearr_33828[(1)] = (1));
return statearr_33828;
});
var state_machine__5805__auto____1 = (function (state_33818){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_33818);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e33829){if((e33829 instanceof Object))
{var ex__5808__auto__ = e33829;var statearr_33830_33837 = state_33818;(statearr_33830_33837[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33818);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33829;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33838 = state_33818;
state_33818 = G__33838;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_33818){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_33818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___33832,rq_ticket,this$__$1))
})();var state__5821__auto__ = (function (){var statearr_33831 = f__5820__auto__.call(null);(statearr_33831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___33832);
return statearr_33831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___33832,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__33839){
var ordered_resource = cljs.core.first(arglist__33839);
arglist__33839 = cljs.core.next(arglist__33839);
var api_fn = cljs.core.first(arglist__33839);
var args = cljs.core.rest(arglist__33839);
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
return (function (state_33895){var state_val_33896 = (state_33895[(1)]);if((state_val_33896 === (7)))
{var inst_33886 = (state_33895[(2)]);var state_33895__$1 = state_33895;if(cljs.core.truth_(inst_33886))
{var statearr_33897_33916 = state_33895__$1;(statearr_33897_33916[(1)] = (8));
} else
{var statearr_33898_33917 = state_33895__$1;(statearr_33898_33917[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33896 === (1)))
{var state_33895__$1 = state_33895;var statearr_33899_33918 = state_33895__$1;(statearr_33899_33918[(2)] = null);
(statearr_33899_33918[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33896 === (4)))
{var inst_33881 = (state_33895[(7)]);var inst_33881__$1 = (state_33895[(2)]);var state_33895__$1 = (function (){var statearr_33900 = state_33895;(statearr_33900[(7)] = inst_33881__$1);
return statearr_33900;
})();if(cljs.core.truth_(inst_33881__$1))
{var statearr_33901_33919 = state_33895__$1;(statearr_33901_33919[(1)] = (5));
} else
{var statearr_33902_33920 = state_33895__$1;(statearr_33902_33920[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33896 === (6)))
{var state_33895__$1 = state_33895;var statearr_33903_33921 = state_33895__$1;(statearr_33903_33921[(2)] = null);
(statearr_33903_33921[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33896 === (3)))
{var inst_33893 = (state_33895[(2)]);var state_33895__$1 = state_33895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33895__$1,inst_33893);
} else
{if((state_val_33896 === (2)))
{var inst_33879 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_33895__$1 = state_33895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33895__$1,(4),inst_33879);
} else
{if((state_val_33896 === (9)))
{var state_33895__$1 = state_33895;var statearr_33904_33922 = state_33895__$1;(statearr_33904_33922[(2)] = null);
(statearr_33904_33922[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33896 === (5)))
{var inst_33881 = (state_33895[(7)]);var inst_33883 = f.call(null,inst_33881);var state_33895__$1 = (function (){var statearr_33905 = state_33895;(statearr_33905[(8)] = inst_33883);
return statearr_33905;
})();var statearr_33906_33923 = state_33895__$1;(statearr_33906_33923[(2)] = true);
(statearr_33906_33923[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33896 === (10)))
{var inst_33891 = (state_33895[(2)]);var state_33895__$1 = state_33895;var statearr_33907_33924 = state_33895__$1;(statearr_33907_33924[(2)] = inst_33891);
(statearr_33907_33924[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33896 === (8)))
{var state_33895__$1 = state_33895;var statearr_33908_33925 = state_33895__$1;(statearr_33908_33925[(2)] = null);
(statearr_33908_33925[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_33912 = [null,null,null,null,null,null,null,null,null];(statearr_33912[(0)] = state_machine__5805__auto__);
(statearr_33912[(1)] = (1));
return statearr_33912;
});
var state_machine__5805__auto____1 = (function (state_33895){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_33895);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e33913){if((e33913 instanceof Object))
{var ex__5808__auto__ = e33913;var statearr_33914_33926 = state_33895;(statearr_33914_33926[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33895);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33913;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33927 = state_33895;
state_33895 = G__33927;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_33895){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_33895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_33915 = f__5820__auto__.call(null);(statearr_33915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_33915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
});
