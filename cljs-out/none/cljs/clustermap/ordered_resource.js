// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj62130 = {};return obj62130;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___62159 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___62159,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___62159,rq_ticket,this$__$1){
return (function (state_62145){var state_val_62146 = (state_62145[(1)]);if((state_val_62146 === (6)))
{var inst_62137 = (state_62145[(2)]);var state_62145__$1 = state_62145;var statearr_62147_62160 = state_62145__$1;(statearr_62147_62160[(2)] = inst_62137);
(statearr_62147_62160[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62146 === (5)))
{var inst_62143 = (state_62145[(2)]);var state_62145__$1 = state_62145;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62145__$1,inst_62143);
} else
{if((state_val_62146 === (4)))
{var inst_62139 = cljs.core.deref.call(null,self__.ticket);var inst_62140 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_62139));var inst_62141 = console.log(inst_62140);var state_62145__$1 = state_62145;var statearr_62148_62161 = state_62145__$1;(statearr_62148_62161[(2)] = inst_62141);
(statearr_62148_62161[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62146 === (3)))
{var inst_62132 = (state_62145[(7)]);var state_62145__$1 = state_62145;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62145__$1,(6),self__.response_chan,inst_62132);
} else
{if((state_val_62146 === (2)))
{var inst_62132 = (state_62145[(2)]);var inst_62133 = cljs.core.deref.call(null,self__.ticket);var inst_62134 = cljs.core._EQ_.call(null,rq_ticket,inst_62133);var state_62145__$1 = (function (){var statearr_62149 = state_62145;(statearr_62149[(7)] = inst_62132);
return statearr_62149;
})();if(inst_62134)
{var statearr_62150_62162 = state_62145__$1;(statearr_62150_62162[(1)] = (3));
} else
{var statearr_62151_62163 = state_62145__$1;(statearr_62151_62163[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62146 === (1)))
{var state_62145__$1 = state_62145;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62145__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___62159,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___62159,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_62155 = [null,null,null,null,null,null,null,null];(statearr_62155[(0)] = state_machine__5694__auto__);
(statearr_62155[(1)] = (1));
return statearr_62155;
});
var state_machine__5694__auto____1 = (function (state_62145){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_62145);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e62156){if((e62156 instanceof Object))
{var ex__5697__auto__ = e62156;var statearr_62157_62164 = state_62145;(statearr_62157_62164[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62145);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e62156;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62165 = state_62145;
state_62145 = G__62165;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_62145){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_62145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___62159,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_62158 = f__5709__auto__.call(null);(statearr_62158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___62159);
return statearr_62158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___62159,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__62166){
var ordered_resource = cljs.core.first(arglist__62166);
arglist__62166 = cljs.core.next(arglist__62166);
var api_fn = cljs.core.first(arglist__62166);
var args = cljs.core.rest(arglist__62166);
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
return (function (state_62222){var state_val_62223 = (state_62222[(1)]);if((state_val_62223 === (7)))
{var inst_62213 = (state_62222[(2)]);var state_62222__$1 = state_62222;if(cljs.core.truth_(inst_62213))
{var statearr_62224_62243 = state_62222__$1;(statearr_62224_62243[(1)] = (8));
} else
{var statearr_62225_62244 = state_62222__$1;(statearr_62225_62244[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62223 === (1)))
{var state_62222__$1 = state_62222;var statearr_62226_62245 = state_62222__$1;(statearr_62226_62245[(2)] = null);
(statearr_62226_62245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62223 === (4)))
{var inst_62208 = (state_62222[(7)]);var inst_62208__$1 = (state_62222[(2)]);var state_62222__$1 = (function (){var statearr_62227 = state_62222;(statearr_62227[(7)] = inst_62208__$1);
return statearr_62227;
})();if(cljs.core.truth_(inst_62208__$1))
{var statearr_62228_62246 = state_62222__$1;(statearr_62228_62246[(1)] = (5));
} else
{var statearr_62229_62247 = state_62222__$1;(statearr_62229_62247[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62223 === (6)))
{var state_62222__$1 = state_62222;var statearr_62230_62248 = state_62222__$1;(statearr_62230_62248[(2)] = null);
(statearr_62230_62248[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62223 === (3)))
{var inst_62220 = (state_62222[(2)]);var state_62222__$1 = state_62222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62222__$1,inst_62220);
} else
{if((state_val_62223 === (2)))
{var inst_62206 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_62222__$1 = state_62222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62222__$1,(4),inst_62206);
} else
{if((state_val_62223 === (9)))
{var state_62222__$1 = state_62222;var statearr_62231_62249 = state_62222__$1;(statearr_62231_62249[(2)] = null);
(statearr_62231_62249[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62223 === (5)))
{var inst_62208 = (state_62222[(7)]);var inst_62210 = f.call(null,inst_62208);var state_62222__$1 = (function (){var statearr_62232 = state_62222;(statearr_62232[(8)] = inst_62210);
return statearr_62232;
})();var statearr_62233_62250 = state_62222__$1;(statearr_62233_62250[(2)] = true);
(statearr_62233_62250[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62223 === (10)))
{var inst_62218 = (state_62222[(2)]);var state_62222__$1 = state_62222;var statearr_62234_62251 = state_62222__$1;(statearr_62234_62251[(2)] = inst_62218);
(statearr_62234_62251[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62223 === (8)))
{var state_62222__$1 = state_62222;var statearr_62235_62252 = state_62222__$1;(statearr_62235_62252[(2)] = null);
(statearr_62235_62252[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_62239 = [null,null,null,null,null,null,null,null,null];(statearr_62239[(0)] = state_machine__5694__auto__);
(statearr_62239[(1)] = (1));
return statearr_62239;
});
var state_machine__5694__auto____1 = (function (state_62222){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_62222);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e62240){if((e62240 instanceof Object))
{var ex__5697__auto__ = e62240;var statearr_62241_62253 = state_62222;(statearr_62241_62253[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e62240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62254 = state_62222;
state_62222 = G__62254;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_62222){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_62222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_62242 = f__5709__auto__.call(null);(statearr_62242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_62242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});

//# sourceMappingURL=ordered_resource.js.map