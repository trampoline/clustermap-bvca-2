// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj14113 = {};return obj14113;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___14142 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___14142,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___14142,rq_ticket,this$__$1){
return (function (state_14128){var state_val_14129 = (state_14128[(1)]);if((state_val_14129 === (6)))
{var inst_14120 = (state_14128[(2)]);var state_14128__$1 = state_14128;var statearr_14130_14143 = state_14128__$1;(statearr_14130_14143[(2)] = inst_14120);
(statearr_14130_14143[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14129 === (5)))
{var inst_14126 = (state_14128[(2)]);var state_14128__$1 = state_14128;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14128__$1,inst_14126);
} else
{if((state_val_14129 === (4)))
{var inst_14122 = cljs.core.deref.call(null,self__.ticket);var inst_14123 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14122));var inst_14124 = console.log(inst_14123);var state_14128__$1 = state_14128;var statearr_14131_14144 = state_14128__$1;(statearr_14131_14144[(2)] = inst_14124);
(statearr_14131_14144[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14129 === (3)))
{var inst_14115 = (state_14128[(7)]);var state_14128__$1 = state_14128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14128__$1,(6),self__.response_chan,inst_14115);
} else
{if((state_val_14129 === (2)))
{var inst_14115 = (state_14128[(2)]);var inst_14116 = cljs.core.deref.call(null,self__.ticket);var inst_14117 = cljs.core._EQ_.call(null,rq_ticket,inst_14116);var state_14128__$1 = (function (){var statearr_14132 = state_14128;(statearr_14132[(7)] = inst_14115);
return statearr_14132;
})();if(inst_14117)
{var statearr_14133_14145 = state_14128__$1;(statearr_14133_14145[(1)] = (3));
} else
{var statearr_14134_14146 = state_14128__$1;(statearr_14134_14146[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14129 === (1)))
{var state_14128__$1 = state_14128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14128__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___14142,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___14142,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_14138 = [null,null,null,null,null,null,null,null];(statearr_14138[(0)] = state_machine__5694__auto__);
(statearr_14138[(1)] = (1));
return statearr_14138;
});
var state_machine__5694__auto____1 = (function (state_14128){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_14128);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e14139){if((e14139 instanceof Object))
{var ex__5697__auto__ = e14139;var statearr_14140_14147 = state_14128;(statearr_14140_14147[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14128);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14139;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14148 = state_14128;
state_14128 = G__14148;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_14128){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_14128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___14142,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_14141 = f__5709__auto__.call(null);(statearr_14141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___14142);
return statearr_14141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___14142,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__14149){
var ordered_resource = cljs.core.first(arglist__14149);
arglist__14149 = cljs.core.next(arglist__14149);
var api_fn = cljs.core.first(arglist__14149);
var args = cljs.core.rest(arglist__14149);
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
return (function (state_14205){var state_val_14206 = (state_14205[(1)]);if((state_val_14206 === (7)))
{var inst_14196 = (state_14205[(2)]);var state_14205__$1 = state_14205;if(cljs.core.truth_(inst_14196))
{var statearr_14207_14226 = state_14205__$1;(statearr_14207_14226[(1)] = (8));
} else
{var statearr_14208_14227 = state_14205__$1;(statearr_14208_14227[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (1)))
{var state_14205__$1 = state_14205;var statearr_14209_14228 = state_14205__$1;(statearr_14209_14228[(2)] = null);
(statearr_14209_14228[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (4)))
{var inst_14191 = (state_14205[(7)]);var inst_14191__$1 = (state_14205[(2)]);var state_14205__$1 = (function (){var statearr_14210 = state_14205;(statearr_14210[(7)] = inst_14191__$1);
return statearr_14210;
})();if(cljs.core.truth_(inst_14191__$1))
{var statearr_14211_14229 = state_14205__$1;(statearr_14211_14229[(1)] = (5));
} else
{var statearr_14212_14230 = state_14205__$1;(statearr_14212_14230[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (6)))
{var state_14205__$1 = state_14205;var statearr_14213_14231 = state_14205__$1;(statearr_14213_14231[(2)] = null);
(statearr_14213_14231[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (3)))
{var inst_14203 = (state_14205[(2)]);var state_14205__$1 = state_14205;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14205__$1,inst_14203);
} else
{if((state_val_14206 === (2)))
{var inst_14189 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_14205__$1 = state_14205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14205__$1,(4),inst_14189);
} else
{if((state_val_14206 === (9)))
{var state_14205__$1 = state_14205;var statearr_14214_14232 = state_14205__$1;(statearr_14214_14232[(2)] = null);
(statearr_14214_14232[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (5)))
{var inst_14191 = (state_14205[(7)]);var inst_14193 = f.call(null,inst_14191);var state_14205__$1 = (function (){var statearr_14215 = state_14205;(statearr_14215[(8)] = inst_14193);
return statearr_14215;
})();var statearr_14216_14233 = state_14205__$1;(statearr_14216_14233[(2)] = true);
(statearr_14216_14233[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (10)))
{var inst_14201 = (state_14205[(2)]);var state_14205__$1 = state_14205;var statearr_14217_14234 = state_14205__$1;(statearr_14217_14234[(2)] = inst_14201);
(statearr_14217_14234[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14206 === (8)))
{var state_14205__$1 = state_14205;var statearr_14218_14235 = state_14205__$1;(statearr_14218_14235[(2)] = null);
(statearr_14218_14235[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_14222 = [null,null,null,null,null,null,null,null,null];(statearr_14222[(0)] = state_machine__5694__auto__);
(statearr_14222[(1)] = (1));
return statearr_14222;
});
var state_machine__5694__auto____1 = (function (state_14205){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_14205);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e14223){if((e14223 instanceof Object))
{var ex__5697__auto__ = e14223;var statearr_14224_14236 = state_14205;(statearr_14224_14236[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14205);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14223;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14237 = state_14205;
state_14205 = G__14237;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_14205){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_14205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_14225 = f__5709__auto__.call(null);(statearr_14225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_14225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
