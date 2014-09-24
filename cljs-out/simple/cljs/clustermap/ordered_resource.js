// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj26728 = {};return obj26728;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___26757 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___26757,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___26757,rq_ticket,this$__$1){
return (function (state_26743){var state_val_26744 = (state_26743[(1)]);if((state_val_26744 === (6)))
{var inst_26735 = (state_26743[(2)]);var state_26743__$1 = state_26743;var statearr_26745_26758 = state_26743__$1;(statearr_26745_26758[(2)] = inst_26735);
(statearr_26745_26758[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26744 === (5)))
{var inst_26741 = (state_26743[(2)]);var state_26743__$1 = state_26743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26743__$1,inst_26741);
} else
{if((state_val_26744 === (4)))
{var inst_26737 = cljs.core.deref.call(null,self__.ticket);var inst_26738 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26737));var inst_26739 = console.log(inst_26738);var state_26743__$1 = state_26743;var statearr_26746_26759 = state_26743__$1;(statearr_26746_26759[(2)] = inst_26739);
(statearr_26746_26759[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26744 === (3)))
{var inst_26730 = (state_26743[(7)]);var state_26743__$1 = state_26743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26743__$1,(6),self__.response_chan,inst_26730);
} else
{if((state_val_26744 === (2)))
{var inst_26730 = (state_26743[(2)]);var inst_26731 = cljs.core.deref.call(null,self__.ticket);var inst_26732 = cljs.core._EQ_.call(null,rq_ticket,inst_26731);var state_26743__$1 = (function (){var statearr_26747 = state_26743;(statearr_26747[(7)] = inst_26730);
return statearr_26747;
})();if(inst_26732)
{var statearr_26748_26760 = state_26743__$1;(statearr_26748_26760[(1)] = (3));
} else
{var statearr_26749_26761 = state_26743__$1;(statearr_26749_26761[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26744 === (1)))
{var state_26743__$1 = state_26743;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26743__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___26757,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___26757,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_26753 = [null,null,null,null,null,null,null,null];(statearr_26753[(0)] = state_machine__5694__auto__);
(statearr_26753[(1)] = (1));
return statearr_26753;
});
var state_machine__5694__auto____1 = (function (state_26743){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_26743);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e26754){if((e26754 instanceof Object))
{var ex__5697__auto__ = e26754;var statearr_26755_26762 = state_26743;(statearr_26755_26762[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26754;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26763 = state_26743;
state_26743 = G__26763;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_26743){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_26743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___26757,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_26756 = f__5709__auto__.call(null);(statearr_26756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___26757);
return statearr_26756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___26757,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__26764){
var ordered_resource = cljs.core.first(arglist__26764);
arglist__26764 = cljs.core.next(arglist__26764);
var api_fn = cljs.core.first(arglist__26764);
var args = cljs.core.rest(arglist__26764);
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
return (function (state_26820){var state_val_26821 = (state_26820[(1)]);if((state_val_26821 === (7)))
{var inst_26811 = (state_26820[(2)]);var state_26820__$1 = state_26820;if(cljs.core.truth_(inst_26811))
{var statearr_26822_26841 = state_26820__$1;(statearr_26822_26841[(1)] = (8));
} else
{var statearr_26823_26842 = state_26820__$1;(statearr_26823_26842[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26821 === (1)))
{var state_26820__$1 = state_26820;var statearr_26824_26843 = state_26820__$1;(statearr_26824_26843[(2)] = null);
(statearr_26824_26843[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26821 === (4)))
{var inst_26806 = (state_26820[(7)]);var inst_26806__$1 = (state_26820[(2)]);var state_26820__$1 = (function (){var statearr_26825 = state_26820;(statearr_26825[(7)] = inst_26806__$1);
return statearr_26825;
})();if(cljs.core.truth_(inst_26806__$1))
{var statearr_26826_26844 = state_26820__$1;(statearr_26826_26844[(1)] = (5));
} else
{var statearr_26827_26845 = state_26820__$1;(statearr_26827_26845[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26821 === (6)))
{var state_26820__$1 = state_26820;var statearr_26828_26846 = state_26820__$1;(statearr_26828_26846[(2)] = null);
(statearr_26828_26846[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26821 === (3)))
{var inst_26818 = (state_26820[(2)]);var state_26820__$1 = state_26820;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26820__$1,inst_26818);
} else
{if((state_val_26821 === (2)))
{var inst_26804 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_26820__$1 = state_26820;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26820__$1,(4),inst_26804);
} else
{if((state_val_26821 === (9)))
{var state_26820__$1 = state_26820;var statearr_26829_26847 = state_26820__$1;(statearr_26829_26847[(2)] = null);
(statearr_26829_26847[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26821 === (5)))
{var inst_26806 = (state_26820[(7)]);var inst_26808 = f.call(null,inst_26806);var state_26820__$1 = (function (){var statearr_26830 = state_26820;(statearr_26830[(8)] = inst_26808);
return statearr_26830;
})();var statearr_26831_26848 = state_26820__$1;(statearr_26831_26848[(2)] = true);
(statearr_26831_26848[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26821 === (10)))
{var inst_26816 = (state_26820[(2)]);var state_26820__$1 = state_26820;var statearr_26832_26849 = state_26820__$1;(statearr_26832_26849[(2)] = inst_26816);
(statearr_26832_26849[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26821 === (8)))
{var state_26820__$1 = state_26820;var statearr_26833_26850 = state_26820__$1;(statearr_26833_26850[(2)] = null);
(statearr_26833_26850[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_26837 = [null,null,null,null,null,null,null,null,null];(statearr_26837[(0)] = state_machine__5694__auto__);
(statearr_26837[(1)] = (1));
return statearr_26837;
});
var state_machine__5694__auto____1 = (function (state_26820){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_26820);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e26838){if((e26838 instanceof Object))
{var ex__5697__auto__ = e26838;var statearr_26839_26851 = state_26820;(statearr_26839_26851[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26820);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26838;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26852 = state_26820;
state_26820 = G__26852;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_26820){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_26820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_26840 = f__5709__auto__.call(null);(statearr_26840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_26840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
