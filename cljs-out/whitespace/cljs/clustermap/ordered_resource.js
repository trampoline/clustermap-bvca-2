// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj18065 = {};return obj18065;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___18094 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___18094,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___18094,rq_ticket,this$__$1){
return (function (state_18080){var state_val_18081 = (state_18080[(1)]);if((state_val_18081 === (6)))
{var inst_18072 = (state_18080[(2)]);var state_18080__$1 = state_18080;var statearr_18082_18095 = state_18080__$1;(statearr_18082_18095[(2)] = inst_18072);
(statearr_18082_18095[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18081 === (5)))
{var inst_18078 = (state_18080[(2)]);var state_18080__$1 = state_18080;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18080__$1,inst_18078);
} else
{if((state_val_18081 === (4)))
{var inst_18074 = cljs.core.deref.call(null,self__.ticket);var inst_18075 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18074));var inst_18076 = console.log(inst_18075);var state_18080__$1 = state_18080;var statearr_18083_18096 = state_18080__$1;(statearr_18083_18096[(2)] = inst_18076);
(statearr_18083_18096[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18081 === (3)))
{var inst_18067 = (state_18080[(7)]);var state_18080__$1 = state_18080;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18080__$1,(6),self__.response_chan,inst_18067);
} else
{if((state_val_18081 === (2)))
{var inst_18067 = (state_18080[(2)]);var inst_18068 = cljs.core.deref.call(null,self__.ticket);var inst_18069 = cljs.core._EQ_.call(null,rq_ticket,inst_18068);var state_18080__$1 = (function (){var statearr_18084 = state_18080;(statearr_18084[(7)] = inst_18067);
return statearr_18084;
})();if(inst_18069)
{var statearr_18085_18097 = state_18080__$1;(statearr_18085_18097[(1)] = (3));
} else
{var statearr_18086_18098 = state_18080__$1;(statearr_18086_18098[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18081 === (1)))
{var state_18080__$1 = state_18080;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18080__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___18094,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___18094,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_18090 = [null,null,null,null,null,null,null,null];(statearr_18090[(0)] = state_machine__5694__auto__);
(statearr_18090[(1)] = (1));
return statearr_18090;
});
var state_machine__5694__auto____1 = (function (state_18080){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18080);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18091){if((e18091 instanceof Object))
{var ex__5697__auto__ = e18091;var statearr_18092_18099 = state_18080;(statearr_18092_18099[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18080);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18091;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18100 = state_18080;
state_18080 = G__18100;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18080){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___18094,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_18093 = f__5709__auto__.call(null);(statearr_18093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___18094);
return statearr_18093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___18094,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__18101){
var ordered_resource = cljs.core.first(arglist__18101);
arglist__18101 = cljs.core.next(arglist__18101);
var api_fn = cljs.core.first(arglist__18101);
var args = cljs.core.rest(arglist__18101);
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
return (function (state_18157){var state_val_18158 = (state_18157[(1)]);if((state_val_18158 === (7)))
{var inst_18148 = (state_18157[(2)]);var state_18157__$1 = state_18157;if(cljs.core.truth_(inst_18148))
{var statearr_18159_18178 = state_18157__$1;(statearr_18159_18178[(1)] = (8));
} else
{var statearr_18160_18179 = state_18157__$1;(statearr_18160_18179[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18158 === (1)))
{var state_18157__$1 = state_18157;var statearr_18161_18180 = state_18157__$1;(statearr_18161_18180[(2)] = null);
(statearr_18161_18180[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18158 === (4)))
{var inst_18143 = (state_18157[(7)]);var inst_18143__$1 = (state_18157[(2)]);var state_18157__$1 = (function (){var statearr_18162 = state_18157;(statearr_18162[(7)] = inst_18143__$1);
return statearr_18162;
})();if(cljs.core.truth_(inst_18143__$1))
{var statearr_18163_18181 = state_18157__$1;(statearr_18163_18181[(1)] = (5));
} else
{var statearr_18164_18182 = state_18157__$1;(statearr_18164_18182[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18158 === (6)))
{var state_18157__$1 = state_18157;var statearr_18165_18183 = state_18157__$1;(statearr_18165_18183[(2)] = null);
(statearr_18165_18183[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18158 === (3)))
{var inst_18155 = (state_18157[(2)]);var state_18157__$1 = state_18157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18157__$1,inst_18155);
} else
{if((state_val_18158 === (2)))
{var inst_18141 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_18157__$1 = state_18157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18157__$1,(4),inst_18141);
} else
{if((state_val_18158 === (9)))
{var state_18157__$1 = state_18157;var statearr_18166_18184 = state_18157__$1;(statearr_18166_18184[(2)] = null);
(statearr_18166_18184[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18158 === (5)))
{var inst_18143 = (state_18157[(7)]);var inst_18145 = f.call(null,inst_18143);var state_18157__$1 = (function (){var statearr_18167 = state_18157;(statearr_18167[(8)] = inst_18145);
return statearr_18167;
})();var statearr_18168_18185 = state_18157__$1;(statearr_18168_18185[(2)] = true);
(statearr_18168_18185[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18158 === (10)))
{var inst_18153 = (state_18157[(2)]);var state_18157__$1 = state_18157;var statearr_18169_18186 = state_18157__$1;(statearr_18169_18186[(2)] = inst_18153);
(statearr_18169_18186[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18158 === (8)))
{var state_18157__$1 = state_18157;var statearr_18170_18187 = state_18157__$1;(statearr_18170_18187[(2)] = null);
(statearr_18170_18187[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_18174 = [null,null,null,null,null,null,null,null,null];(statearr_18174[(0)] = state_machine__5694__auto__);
(statearr_18174[(1)] = (1));
return statearr_18174;
});
var state_machine__5694__auto____1 = (function (state_18157){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18157);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18175){if((e18175 instanceof Object))
{var ex__5697__auto__ = e18175;var statearr_18176_18188 = state_18157;(statearr_18176_18188[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18157);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18175;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18189 = state_18157;
state_18157 = G__18189;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18157){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_18177 = f__5709__auto__.call(null);(statearr_18177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_18177;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
