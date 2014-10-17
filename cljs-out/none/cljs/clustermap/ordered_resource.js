// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj22063 = {};return obj22063;
})();
clustermap.ordered_resource.add_request = (function add_request(this$,ch){if((function (){var and__7888__auto__ = this$;if(and__7888__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2;
} else
{return and__7888__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2(this$,ch);
} else
{var x__8527__auto__ = (((this$ == null))?null:this$);return (function (){var or__7900__auto__ = (clustermap.ordered_resource.add_request[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (clustermap.ordered_resource.add_request["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.add-request",this$);
}
}
})().call(null,this$,ch);
}
});
clustermap.ordered_resource.get_response_chan = (function get_response_chan(this$){if((function (){var and__7888__auto__ = this$;if(and__7888__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1;
} else
{return and__7888__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1(this$);
} else
{var x__8527__auto__ = (((this$ == null))?null:this$);return (function (){var or__7900__auto__ = (clustermap.ordered_resource.get_response_chan[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (clustermap.ordered_resource.get_response_chan["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.get-response-chan",this$);
}
}
})().call(null,this$);
}
});
clustermap.ordered_resource.close = (function close(this$){if((function (){var and__7888__auto__ = this$;if(and__7888__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1;
} else
{return and__7888__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1(this$);
} else
{var x__8527__auto__ = (((this$ == null))?null:this$);return (function (){var or__7900__auto__ = (clustermap.ordered_resource.close[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (clustermap.ordered_resource.close["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
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
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$ctorPrWriter = (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"clustermap.ordered-resource/DiscardStaleResource");
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$ = true;
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$add_request$arity$2 = (function (this$,ch){var self__ = this;
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__9759__auto___22092 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto___22092,rq_ticket,this$__$1){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto___22092,rq_ticket,this$__$1){
return (function (state_22078){var state_val_22079 = (state_22078[(1)]);if((state_val_22079 === (6)))
{var inst_22070 = (state_22078[(2)]);var state_22078__$1 = state_22078;var statearr_22080_22093 = state_22078__$1;(statearr_22080_22093[(2)] = inst_22070);
(statearr_22080_22093[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22079 === (5)))
{var inst_22076 = (state_22078[(2)]);var state_22078__$1 = state_22078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22078__$1,inst_22076);
} else
{if((state_val_22079 === (4)))
{var inst_22072 = cljs.core.deref.call(null,self__.ticket);var inst_22073 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22072));var inst_22074 = console.log(inst_22073);var state_22078__$1 = state_22078;var statearr_22081_22094 = state_22078__$1;(statearr_22081_22094[(2)] = inst_22074);
(statearr_22081_22094[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22079 === (3)))
{var inst_22065 = (state_22078[(7)]);var state_22078__$1 = state_22078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22078__$1,(6),self__.response_chan,inst_22065);
} else
{if((state_val_22079 === (2)))
{var inst_22065 = (state_22078[(2)]);var inst_22066 = cljs.core.deref.call(null,self__.ticket);var inst_22067 = cljs.core._EQ_.call(null,rq_ticket,inst_22066);var state_22078__$1 = (function (){var statearr_22082 = state_22078;(statearr_22082[(7)] = inst_22065);
return statearr_22082;
})();if(inst_22067)
{var statearr_22083_22095 = state_22078__$1;(statearr_22083_22095[(1)] = (3));
} else
{var statearr_22084_22096 = state_22078__$1;(statearr_22084_22096[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22079 === (1)))
{var state_22078__$1 = state_22078;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22078__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__9759__auto___22092,rq_ticket,this$__$1))
;return ((function (switch__9744__auto__,c__9759__auto___22092,rq_ticket,this$__$1){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_22088 = [null,null,null,null,null,null,null,null];(statearr_22088[(0)] = state_machine__9745__auto__);
(statearr_22088[(1)] = (1));
return statearr_22088;
});
var state_machine__9745__auto____1 = (function (state_22078){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_22078);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e22089){if((e22089 instanceof Object))
{var ex__9748__auto__ = e22089;var statearr_22090_22097 = state_22078;(statearr_22090_22097[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22078);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22089;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22098 = state_22078;
state_22078 = G__22098;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_22078){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_22078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto___22092,rq_ticket,this$__$1))
})();var state__9761__auto__ = (function (){var statearr_22091 = f__9760__auto__.call(null);(statearr_22091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto___22092);
return statearr_22091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto___22092,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__22099){
var ordered_resource = cljs.core.first(arglist__22099);
arglist__22099 = cljs.core.next(arglist__22099);
var api_fn = cljs.core.first(arglist__22099);
var args = cljs.core.rest(arglist__22099);
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
clustermap.ordered_resource.retrieve_responses = (function retrieve_responses(ordered_resource,f){var c__9759__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto__){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto__){
return (function (state_22155){var state_val_22156 = (state_22155[(1)]);if((state_val_22156 === (7)))
{var inst_22146 = (state_22155[(2)]);var state_22155__$1 = state_22155;if(cljs.core.truth_(inst_22146))
{var statearr_22157_22176 = state_22155__$1;(statearr_22157_22176[(1)] = (8));
} else
{var statearr_22158_22177 = state_22155__$1;(statearr_22158_22177[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22156 === (1)))
{var state_22155__$1 = state_22155;var statearr_22159_22178 = state_22155__$1;(statearr_22159_22178[(2)] = null);
(statearr_22159_22178[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22156 === (4)))
{var inst_22141 = (state_22155[(7)]);var inst_22141__$1 = (state_22155[(2)]);var state_22155__$1 = (function (){var statearr_22160 = state_22155;(statearr_22160[(7)] = inst_22141__$1);
return statearr_22160;
})();if(cljs.core.truth_(inst_22141__$1))
{var statearr_22161_22179 = state_22155__$1;(statearr_22161_22179[(1)] = (5));
} else
{var statearr_22162_22180 = state_22155__$1;(statearr_22162_22180[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22156 === (6)))
{var state_22155__$1 = state_22155;var statearr_22163_22181 = state_22155__$1;(statearr_22163_22181[(2)] = null);
(statearr_22163_22181[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22156 === (3)))
{var inst_22153 = (state_22155[(2)]);var state_22155__$1 = state_22155;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22155__$1,inst_22153);
} else
{if((state_val_22156 === (2)))
{var inst_22139 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_22155__$1 = state_22155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22155__$1,(4),inst_22139);
} else
{if((state_val_22156 === (9)))
{var state_22155__$1 = state_22155;var statearr_22164_22182 = state_22155__$1;(statearr_22164_22182[(2)] = null);
(statearr_22164_22182[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22156 === (5)))
{var inst_22141 = (state_22155[(7)]);var inst_22143 = f.call(null,inst_22141);var state_22155__$1 = (function (){var statearr_22165 = state_22155;(statearr_22165[(8)] = inst_22143);
return statearr_22165;
})();var statearr_22166_22183 = state_22155__$1;(statearr_22166_22183[(2)] = true);
(statearr_22166_22183[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22156 === (10)))
{var inst_22151 = (state_22155[(2)]);var state_22155__$1 = state_22155;var statearr_22167_22184 = state_22155__$1;(statearr_22167_22184[(2)] = inst_22151);
(statearr_22167_22184[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22156 === (8)))
{var state_22155__$1 = state_22155;var statearr_22168_22185 = state_22155__$1;(statearr_22168_22185[(2)] = null);
(statearr_22168_22185[(1)] = (2));
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
});})(c__9759__auto__))
;return ((function (switch__9744__auto__,c__9759__auto__){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_22172 = [null,null,null,null,null,null,null,null,null];(statearr_22172[(0)] = state_machine__9745__auto__);
(statearr_22172[(1)] = (1));
return statearr_22172;
});
var state_machine__9745__auto____1 = (function (state_22155){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_22155);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e22173){if((e22173 instanceof Object))
{var ex__9748__auto__ = e22173;var statearr_22174_22186 = state_22155;(statearr_22174_22186[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22155);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22173;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22187 = state_22155;
state_22155 = G__22187;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_22155){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_22155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto__))
})();var state__9761__auto__ = (function (){var statearr_22175 = f__9760__auto__.call(null);(statearr_22175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto__);
return statearr_22175;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto__))
);
return c__9759__auto__;
});

//# sourceMappingURL=ordered_resource.js.map