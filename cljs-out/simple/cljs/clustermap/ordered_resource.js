// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj32934 = {};return obj32934;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___32963 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___32963,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___32963,rq_ticket,this$__$1){
return (function (state_32949){var state_val_32950 = (state_32949[(1)]);if((state_val_32950 === (6)))
{var inst_32941 = (state_32949[(2)]);var state_32949__$1 = state_32949;var statearr_32951_32964 = state_32949__$1;(statearr_32951_32964[(2)] = inst_32941);
(statearr_32951_32964[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32950 === (5)))
{var inst_32947 = (state_32949[(2)]);var state_32949__$1 = state_32949;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32949__$1,inst_32947);
} else
{if((state_val_32950 === (4)))
{var inst_32943 = cljs.core.deref.call(null,self__.ticket);var inst_32944 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32943));var inst_32945 = console.log(inst_32944);var state_32949__$1 = state_32949;var statearr_32952_32965 = state_32949__$1;(statearr_32952_32965[(2)] = inst_32945);
(statearr_32952_32965[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32950 === (3)))
{var inst_32936 = (state_32949[(7)]);var state_32949__$1 = state_32949;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32949__$1,(6),self__.response_chan,inst_32936);
} else
{if((state_val_32950 === (2)))
{var inst_32936 = (state_32949[(2)]);var inst_32937 = cljs.core.deref.call(null,self__.ticket);var inst_32938 = cljs.core._EQ_.call(null,rq_ticket,inst_32937);var state_32949__$1 = (function (){var statearr_32953 = state_32949;(statearr_32953[(7)] = inst_32936);
return statearr_32953;
})();if(inst_32938)
{var statearr_32954_32966 = state_32949__$1;(statearr_32954_32966[(1)] = (3));
} else
{var statearr_32955_32967 = state_32949__$1;(statearr_32955_32967[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32950 === (1)))
{var state_32949__$1 = state_32949;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32949__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___32963,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___32963,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_32959 = [null,null,null,null,null,null,null,null];(statearr_32959[(0)] = state_machine__5694__auto__);
(statearr_32959[(1)] = (1));
return statearr_32959;
});
var state_machine__5694__auto____1 = (function (state_32949){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_32949);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e32960){if((e32960 instanceof Object))
{var ex__5697__auto__ = e32960;var statearr_32961_32968 = state_32949;(statearr_32961_32968[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32949);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32960;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32969 = state_32949;
state_32949 = G__32969;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_32949){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_32949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___32963,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_32962 = f__5709__auto__.call(null);(statearr_32962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___32963);
return statearr_32962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___32963,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__32970){
var ordered_resource = cljs.core.first(arglist__32970);
arglist__32970 = cljs.core.next(arglist__32970);
var api_fn = cljs.core.first(arglist__32970);
var args = cljs.core.rest(arglist__32970);
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
return (function (state_33026){var state_val_33027 = (state_33026[(1)]);if((state_val_33027 === (7)))
{var inst_33017 = (state_33026[(2)]);var state_33026__$1 = state_33026;if(cljs.core.truth_(inst_33017))
{var statearr_33028_33047 = state_33026__$1;(statearr_33028_33047[(1)] = (8));
} else
{var statearr_33029_33048 = state_33026__$1;(statearr_33029_33048[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33027 === (1)))
{var state_33026__$1 = state_33026;var statearr_33030_33049 = state_33026__$1;(statearr_33030_33049[(2)] = null);
(statearr_33030_33049[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33027 === (4)))
{var inst_33012 = (state_33026[(7)]);var inst_33012__$1 = (state_33026[(2)]);var state_33026__$1 = (function (){var statearr_33031 = state_33026;(statearr_33031[(7)] = inst_33012__$1);
return statearr_33031;
})();if(cljs.core.truth_(inst_33012__$1))
{var statearr_33032_33050 = state_33026__$1;(statearr_33032_33050[(1)] = (5));
} else
{var statearr_33033_33051 = state_33026__$1;(statearr_33033_33051[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33027 === (6)))
{var state_33026__$1 = state_33026;var statearr_33034_33052 = state_33026__$1;(statearr_33034_33052[(2)] = null);
(statearr_33034_33052[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33027 === (3)))
{var inst_33024 = (state_33026[(2)]);var state_33026__$1 = state_33026;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33026__$1,inst_33024);
} else
{if((state_val_33027 === (2)))
{var inst_33010 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_33026__$1 = state_33026;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33026__$1,(4),inst_33010);
} else
{if((state_val_33027 === (9)))
{var state_33026__$1 = state_33026;var statearr_33035_33053 = state_33026__$1;(statearr_33035_33053[(2)] = null);
(statearr_33035_33053[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33027 === (5)))
{var inst_33012 = (state_33026[(7)]);var inst_33014 = f.call(null,inst_33012);var state_33026__$1 = (function (){var statearr_33036 = state_33026;(statearr_33036[(8)] = inst_33014);
return statearr_33036;
})();var statearr_33037_33054 = state_33026__$1;(statearr_33037_33054[(2)] = true);
(statearr_33037_33054[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33027 === (10)))
{var inst_33022 = (state_33026[(2)]);var state_33026__$1 = state_33026;var statearr_33038_33055 = state_33026__$1;(statearr_33038_33055[(2)] = inst_33022);
(statearr_33038_33055[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33027 === (8)))
{var state_33026__$1 = state_33026;var statearr_33039_33056 = state_33026__$1;(statearr_33039_33056[(2)] = null);
(statearr_33039_33056[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_33043 = [null,null,null,null,null,null,null,null,null];(statearr_33043[(0)] = state_machine__5694__auto__);
(statearr_33043[(1)] = (1));
return statearr_33043;
});
var state_machine__5694__auto____1 = (function (state_33026){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_33026);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e33044){if((e33044 instanceof Object))
{var ex__5697__auto__ = e33044;var statearr_33045_33057 = state_33026;(statearr_33045_33057[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33026);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33044;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33058 = state_33026;
state_33026 = G__33058;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_33026){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_33026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_33046 = f__5709__auto__.call(null);(statearr_33046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_33046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
