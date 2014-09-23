// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj26680 = {};return obj26680;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___26709 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___26709,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___26709,rq_ticket,this$__$1){
return (function (state_26695){var state_val_26696 = (state_26695[(1)]);if((state_val_26696 === (6)))
{var inst_26687 = (state_26695[(2)]);var state_26695__$1 = state_26695;var statearr_26697_26710 = state_26695__$1;(statearr_26697_26710[(2)] = inst_26687);
(statearr_26697_26710[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26696 === (5)))
{var inst_26693 = (state_26695[(2)]);var state_26695__$1 = state_26695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26695__$1,inst_26693);
} else
{if((state_val_26696 === (4)))
{var inst_26689 = cljs.core.deref.call(null,self__.ticket);var inst_26690 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26689));var inst_26691 = console.log(inst_26690);var state_26695__$1 = state_26695;var statearr_26698_26711 = state_26695__$1;(statearr_26698_26711[(2)] = inst_26691);
(statearr_26698_26711[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26696 === (3)))
{var inst_26682 = (state_26695[(7)]);var state_26695__$1 = state_26695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26695__$1,(6),self__.response_chan,inst_26682);
} else
{if((state_val_26696 === (2)))
{var inst_26682 = (state_26695[(2)]);var inst_26683 = cljs.core.deref.call(null,self__.ticket);var inst_26684 = cljs.core._EQ_.call(null,rq_ticket,inst_26683);var state_26695__$1 = (function (){var statearr_26699 = state_26695;(statearr_26699[(7)] = inst_26682);
return statearr_26699;
})();if(inst_26684)
{var statearr_26700_26712 = state_26695__$1;(statearr_26700_26712[(1)] = (3));
} else
{var statearr_26701_26713 = state_26695__$1;(statearr_26701_26713[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26696 === (1)))
{var state_26695__$1 = state_26695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26695__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___26709,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___26709,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_26705 = [null,null,null,null,null,null,null,null];(statearr_26705[(0)] = state_machine__5694__auto__);
(statearr_26705[(1)] = (1));
return statearr_26705;
});
var state_machine__5694__auto____1 = (function (state_26695){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_26695);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e26706){if((e26706 instanceof Object))
{var ex__5697__auto__ = e26706;var statearr_26707_26714 = state_26695;(statearr_26707_26714[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26695);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26706;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26715 = state_26695;
state_26695 = G__26715;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_26695){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_26695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___26709,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_26708 = f__5709__auto__.call(null);(statearr_26708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___26709);
return statearr_26708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___26709,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__26716){
var ordered_resource = cljs.core.first(arglist__26716);
arglist__26716 = cljs.core.next(arglist__26716);
var api_fn = cljs.core.first(arglist__26716);
var args = cljs.core.rest(arglist__26716);
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
return (function (state_26772){var state_val_26773 = (state_26772[(1)]);if((state_val_26773 === (7)))
{var inst_26763 = (state_26772[(2)]);var state_26772__$1 = state_26772;if(cljs.core.truth_(inst_26763))
{var statearr_26774_26793 = state_26772__$1;(statearr_26774_26793[(1)] = (8));
} else
{var statearr_26775_26794 = state_26772__$1;(statearr_26775_26794[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26773 === (1)))
{var state_26772__$1 = state_26772;var statearr_26776_26795 = state_26772__$1;(statearr_26776_26795[(2)] = null);
(statearr_26776_26795[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26773 === (4)))
{var inst_26758 = (state_26772[(7)]);var inst_26758__$1 = (state_26772[(2)]);var state_26772__$1 = (function (){var statearr_26777 = state_26772;(statearr_26777[(7)] = inst_26758__$1);
return statearr_26777;
})();if(cljs.core.truth_(inst_26758__$1))
{var statearr_26778_26796 = state_26772__$1;(statearr_26778_26796[(1)] = (5));
} else
{var statearr_26779_26797 = state_26772__$1;(statearr_26779_26797[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26773 === (6)))
{var state_26772__$1 = state_26772;var statearr_26780_26798 = state_26772__$1;(statearr_26780_26798[(2)] = null);
(statearr_26780_26798[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26773 === (3)))
{var inst_26770 = (state_26772[(2)]);var state_26772__$1 = state_26772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26772__$1,inst_26770);
} else
{if((state_val_26773 === (2)))
{var inst_26756 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_26772__$1 = state_26772;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26772__$1,(4),inst_26756);
} else
{if((state_val_26773 === (9)))
{var state_26772__$1 = state_26772;var statearr_26781_26799 = state_26772__$1;(statearr_26781_26799[(2)] = null);
(statearr_26781_26799[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26773 === (5)))
{var inst_26758 = (state_26772[(7)]);var inst_26760 = f.call(null,inst_26758);var state_26772__$1 = (function (){var statearr_26782 = state_26772;(statearr_26782[(8)] = inst_26760);
return statearr_26782;
})();var statearr_26783_26800 = state_26772__$1;(statearr_26783_26800[(2)] = true);
(statearr_26783_26800[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26773 === (10)))
{var inst_26768 = (state_26772[(2)]);var state_26772__$1 = state_26772;var statearr_26784_26801 = state_26772__$1;(statearr_26784_26801[(2)] = inst_26768);
(statearr_26784_26801[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26773 === (8)))
{var state_26772__$1 = state_26772;var statearr_26785_26802 = state_26772__$1;(statearr_26785_26802[(2)] = null);
(statearr_26785_26802[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_26789 = [null,null,null,null,null,null,null,null,null];(statearr_26789[(0)] = state_machine__5694__auto__);
(statearr_26789[(1)] = (1));
return statearr_26789;
});
var state_machine__5694__auto____1 = (function (state_26772){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_26772);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e26790){if((e26790 instanceof Object))
{var ex__5697__auto__ = e26790;var statearr_26791_26803 = state_26772;(statearr_26791_26803[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26772);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26790;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26804 = state_26772;
state_26772 = G__26804;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_26772){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_26772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_26792 = f__5709__auto__.call(null);(statearr_26792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_26792;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
