// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj62767 = {};return obj62767;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___62796 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___62796,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___62796,rq_ticket,this$__$1){
return (function (state_62782){var state_val_62783 = (state_62782[(1)]);if((state_val_62783 === (6)))
{var inst_62774 = (state_62782[(2)]);var state_62782__$1 = state_62782;var statearr_62784_62797 = state_62782__$1;(statearr_62784_62797[(2)] = inst_62774);
(statearr_62784_62797[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62783 === (5)))
{var inst_62780 = (state_62782[(2)]);var state_62782__$1 = state_62782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62782__$1,inst_62780);
} else
{if((state_val_62783 === (4)))
{var inst_62776 = cljs.core.deref.call(null,self__.ticket);var inst_62777 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_62776));var inst_62778 = console.log(inst_62777);var state_62782__$1 = state_62782;var statearr_62785_62798 = state_62782__$1;(statearr_62785_62798[(2)] = inst_62778);
(statearr_62785_62798[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62783 === (3)))
{var inst_62769 = (state_62782[(7)]);var state_62782__$1 = state_62782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62782__$1,(6),self__.response_chan,inst_62769);
} else
{if((state_val_62783 === (2)))
{var inst_62769 = (state_62782[(2)]);var inst_62770 = cljs.core.deref.call(null,self__.ticket);var inst_62771 = cljs.core._EQ_.call(null,rq_ticket,inst_62770);var state_62782__$1 = (function (){var statearr_62786 = state_62782;(statearr_62786[(7)] = inst_62769);
return statearr_62786;
})();if(inst_62771)
{var statearr_62787_62799 = state_62782__$1;(statearr_62787_62799[(1)] = (3));
} else
{var statearr_62788_62800 = state_62782__$1;(statearr_62788_62800[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62783 === (1)))
{var state_62782__$1 = state_62782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62782__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___62796,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___62796,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_62792 = [null,null,null,null,null,null,null,null];(statearr_62792[(0)] = state_machine__5694__auto__);
(statearr_62792[(1)] = (1));
return statearr_62792;
});
var state_machine__5694__auto____1 = (function (state_62782){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_62782);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e62793){if((e62793 instanceof Object))
{var ex__5697__auto__ = e62793;var statearr_62794_62801 = state_62782;(statearr_62794_62801[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62782);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e62793;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62802 = state_62782;
state_62782 = G__62802;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_62782){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_62782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___62796,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_62795 = f__5709__auto__.call(null);(statearr_62795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___62796);
return statearr_62795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___62796,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__62803){
var ordered_resource = cljs.core.first(arglist__62803);
arglist__62803 = cljs.core.next(arglist__62803);
var api_fn = cljs.core.first(arglist__62803);
var args = cljs.core.rest(arglist__62803);
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
return (function (state_62859){var state_val_62860 = (state_62859[(1)]);if((state_val_62860 === (7)))
{var inst_62850 = (state_62859[(2)]);var state_62859__$1 = state_62859;if(cljs.core.truth_(inst_62850))
{var statearr_62861_62880 = state_62859__$1;(statearr_62861_62880[(1)] = (8));
} else
{var statearr_62862_62881 = state_62859__$1;(statearr_62862_62881[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62860 === (1)))
{var state_62859__$1 = state_62859;var statearr_62863_62882 = state_62859__$1;(statearr_62863_62882[(2)] = null);
(statearr_62863_62882[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62860 === (4)))
{var inst_62845 = (state_62859[(7)]);var inst_62845__$1 = (state_62859[(2)]);var state_62859__$1 = (function (){var statearr_62864 = state_62859;(statearr_62864[(7)] = inst_62845__$1);
return statearr_62864;
})();if(cljs.core.truth_(inst_62845__$1))
{var statearr_62865_62883 = state_62859__$1;(statearr_62865_62883[(1)] = (5));
} else
{var statearr_62866_62884 = state_62859__$1;(statearr_62866_62884[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62860 === (6)))
{var state_62859__$1 = state_62859;var statearr_62867_62885 = state_62859__$1;(statearr_62867_62885[(2)] = null);
(statearr_62867_62885[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62860 === (3)))
{var inst_62857 = (state_62859[(2)]);var state_62859__$1 = state_62859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62859__$1,inst_62857);
} else
{if((state_val_62860 === (2)))
{var inst_62843 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_62859__$1 = state_62859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62859__$1,(4),inst_62843);
} else
{if((state_val_62860 === (9)))
{var state_62859__$1 = state_62859;var statearr_62868_62886 = state_62859__$1;(statearr_62868_62886[(2)] = null);
(statearr_62868_62886[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62860 === (5)))
{var inst_62845 = (state_62859[(7)]);var inst_62847 = f.call(null,inst_62845);var state_62859__$1 = (function (){var statearr_62869 = state_62859;(statearr_62869[(8)] = inst_62847);
return statearr_62869;
})();var statearr_62870_62887 = state_62859__$1;(statearr_62870_62887[(2)] = true);
(statearr_62870_62887[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62860 === (10)))
{var inst_62855 = (state_62859[(2)]);var state_62859__$1 = state_62859;var statearr_62871_62888 = state_62859__$1;(statearr_62871_62888[(2)] = inst_62855);
(statearr_62871_62888[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62860 === (8)))
{var state_62859__$1 = state_62859;var statearr_62872_62889 = state_62859__$1;(statearr_62872_62889[(2)] = null);
(statearr_62872_62889[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_62876 = [null,null,null,null,null,null,null,null,null];(statearr_62876[(0)] = state_machine__5694__auto__);
(statearr_62876[(1)] = (1));
return statearr_62876;
});
var state_machine__5694__auto____1 = (function (state_62859){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_62859);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e62877){if((e62877 instanceof Object))
{var ex__5697__auto__ = e62877;var statearr_62878_62890 = state_62859;(statearr_62878_62890[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62859);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e62877;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62891 = state_62859;
state_62859 = G__62891;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_62859){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_62859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_62879 = f__5709__auto__.call(null);(statearr_62879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_62879;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});

//# sourceMappingURL=ordered_resource.js.map